"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { doc, setDoc, deleteField } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Check, RotateCcw, Search, X } from "lucide-react";
import { useAdminMode, useAdminEditing } from "@/contexts/AdminModeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { flattenStrings, pathToKey, sectionLabel, sectionOf } from "@/lib/contentOverrides";

// Editor de contenido en vivo. En vez de envolver cada texto del sitio en un
// componente <Editable> (patrón de Horizon, que obliga a tocar cada archivo),
// acá se aprovecha que TODO el texto del sitio sale de `lib/i18n.ts`:
// se construye un índice textoActual → path, y al hacer clic en cualquier
// texto de la página se busca a qué clave corresponde. Resultado: la página
// entera queda editable sin modificar ni un componente.

const MIN_LEN = 2;
const MAX_CLIMB = 4; // niveles que sube en el DOM buscando coincidencia

export default function VisualEditor() {
  const editing = useAdminEditing();
  const { lang, t, baseT, overrides } = useLanguage();

  const [target, setTarget] = useState<{ path: string; current: string } | null>(null);
  const [draft, setDraft] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [query, setQuery] = useState("");
  const highlighted = useRef<HTMLElement | null>(null);

  // Índice de todos los textos del idioma activo, con los overrides ya puestos
  // (así al reeditar un texto se encuentra por su valor actual, no el original).
  const strings = useMemo(() => flattenStrings(t), [t]);
  const baseStrings = useMemo(() => flattenStrings(baseT), [baseT]);

  // texto → path. Si dos claves tienen el mismo texto, gana la primera; editarla
  // es lo esperable porque suele ser la que está más arriba en la página.
  const textIndex = useMemo(() => {
    const map = new Map<string, string>();
    for (const [path, value] of Object.entries(strings)) {
      const key = value.trim();
      if (key.length >= MIN_LEN && !map.has(key)) map.set(key, path);
    }
    return map;
  }, [strings]);

  const clearHighlight = useCallback(() => {
    if (highlighted.current) {
      highlighted.current.style.outline = "";
      highlighted.current.style.outlineOffset = "";
      highlighted.current.style.cursor = "";
      highlighted.current = null;
    }
  }, []);

  // Dado un nodo del DOM, sube hasta encontrar un elemento cuyo texto coincida
  // exactamente con alguna traducción conocida.
  const findMatch = useCallback(
    (start: EventTarget | null): { el: HTMLElement; path: string; current: string } | null => {
      let el = start as HTMLElement | null;
      for (let i = 0; el && i < MAX_CLIMB; i++, el = el.parentElement) {
        if (el.closest("[data-tc-editor]")) return null; // no editarse a sí mismo
        const text = (el.textContent ?? "").trim();
        if (text.length < MIN_LEN) continue;
        const path = textIndex.get(text);
        if (path) return { el, path, current: text };
      }
      return null;
    },
    [textIndex]
  );

  // Resaltado al pasar el mouse
  useEffect(() => {
    if (!editing || target) {
      clearHighlight();
      return;
    }
    function onOver(e: MouseEvent) {
      const match = findMatch(e.target);
      if (highlighted.current && highlighted.current !== match?.el) clearHighlight();
      if (match && highlighted.current !== match.el) {
        match.el.style.outline = "2px dashed rgba(41,121,255,0.85)";
        match.el.style.outlineOffset = "3px";
        match.el.style.cursor = "pointer";
        highlighted.current = match.el;
      }
    }
    document.addEventListener("mouseover", onOver, true);
    return () => {
      document.removeEventListener("mouseover", onOver, true);
      clearHighlight();
    };
  }, [editing, target, findMatch, clearHighlight]);

  // Clic → abrir el editor de ese texto
  useEffect(() => {
    if (!editing) return;
    function onClick(e: MouseEvent) {
      const match = findMatch(e.target);
      if (!match) return;
      e.preventDefault();
      e.stopPropagation();
      clearHighlight();
      setTarget({ path: match.path, current: match.current });
      setDraft(strings[match.path] ?? match.current);
      setError("");
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [editing, findMatch, strings, clearHighlight]);

  // Cerrar con Escape
  useEffect(() => {
    if (!target && !panelOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setTarget(null);
        setPanelOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [target, panelOpen]);

  async function save() {
    if (!target || !draft.trim()) return;
    setSaving(true);
    setError("");
    try {
      await setDoc(doc(db, "content", lang), { [pathToKey(target.path)]: draft.trim() }, { merge: true });
      setTarget(null);
    } catch {
      setError("No se pudo guardar. Revisa tu conexión o los permisos de Firestore.");
    } finally {
      setSaving(false);
    }
  }

  async function restore() {
    if (!target) return;
    setSaving(true);
    setError("");
    try {
      await setDoc(doc(db, "content", lang), { [pathToKey(target.path)]: deleteField() }, { merge: true });
      setTarget(null);
    } catch {
      setError("No se pudo restaurar el texto original.");
    } finally {
      setSaving(false);
    }
  }

  if (!editing) return null;

  const isOverridden = target ? pathToKey(target.path) in overrides : false;
  const originalText = target ? baseStrings[target.path] : "";

  // Lista del panel de búsqueda: todos los textos del sitio agrupados por sección
  const results = query.trim()
    ? Object.entries(strings)
        .filter(
          ([path, value]) =>
            value.toLowerCase().includes(query.toLowerCase()) ||
            path.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 60)
    : [];

  return (
    <div data-tc-editor>
      {/* ─── Barra de estado del modo edición ─── */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-center gap-3 px-4"
        style={{
          height: 34,
          background: "linear-gradient(90deg,#2979ff,#7c4dff)",
          fontSize: 11.5,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "0.02em",
        }}
      >
        <span>MODO EDICIÓN · haz clic en cualquier texto para cambiarlo</span>
        <button
          type="button"
          onClick={() => setPanelOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-full transition-opacity hover:opacity-80"
          style={{ background: "rgba(255,255,255,0.22)", padding: "3px 11px", fontSize: 10.5 }}
        >
          <Search size={11} /> Buscar texto
        </button>
        <span style={{ opacity: 0.75, fontSize: 10.5 }}>
          Editando: {lang === "es" ? "ESPAÑOL" : "INGLÉS"}
        </span>
      </div>

      {/* ─── Modal de edición de un texto ─── */}
      {target && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center px-4"
          style={{ background: "rgba(2,4,12,0.72)", backdropFilter: "blur(4px)" }}
          onClick={() => setTarget(null)}
        >
          <div
            className="w-full rounded-2xl"
            style={{
              maxWidth: 560,
              background: "#0b1024",
              border: "1px solid rgba(255,255,255,0.12)",
              padding: 24,
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>Editar texto</div>
                <div style={{ fontSize: 10.5, color: "rgba(255,255,255,0.4)", marginTop: 3 }}>
                  {sectionLabel(sectionOf(target.path))} · {target.path}
                </div>
              </div>
              <button type="button" onClick={() => setTarget(null)} style={{ color: "rgba(255,255,255,0.45)" }}>
                <X size={17} />
              </button>
            </div>

            <textarea
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={Math.min(10, Math.max(2, Math.ceil(draft.length / 55)))}
              className="w-full rounded-xl focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(41,121,255,0.45)",
                color: "#fff",
                fontSize: 14,
                lineHeight: 1.65,
                padding: "12px 14px",
                resize: "vertical",
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) save();
              }}
            />

            {isOverridden && originalText && originalText !== draft && (
              <div
                className="rounded-lg mt-3"
                style={{ background: "rgba(255,255,255,0.04)", padding: "9px 12px", fontSize: 11.5, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}
              >
                <strong style={{ color: "rgba(255,255,255,0.6)" }}>Texto original:</strong> {originalText}
              </div>
            )}

            {error && <p style={{ color: "#ff6b6b", fontSize: 12, marginTop: 10 }}>{error}</p>}

            <div className="flex flex-wrap items-center gap-2 mt-5">
              <button
                type="button"
                disabled={saving || !draft.trim()}
                onClick={save}
                className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-85 disabled:opacity-40"
                style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)", color: "#fff", fontWeight: 700, fontSize: 13, padding: "10px 20px", borderRadius: 10 }}
              >
                <Check size={14} /> {saving ? "Guardando…" : "Guardar y publicar"}
              </button>
              {isOverridden && (
                <button
                  type="button"
                  disabled={saving}
                  onClick={restore}
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.65)", fontSize: 12.5, padding: "10px 16px", borderRadius: 10 }}
                >
                  <RotateCcw size={13} /> Restaurar original
                </button>
              )}
              <span style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)", marginLeft: "auto" }}>
                Ctrl+Enter para guardar
              </span>
            </div>

            <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.3)", marginTop: 14, lineHeight: 1.6 }}>
              El cambio se publica al instante en technocrazy.org. Solo afecta al idioma{" "}
              {lang === "es" ? "español" : "inglés"} — cambia el idioma en el menú para editar el otro.
            </p>
          </div>
        </div>
      )}

      {/* ─── Panel de búsqueda de textos ─── */}
      {panelOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-start justify-center px-4"
          style={{ background: "rgba(2,4,12,0.72)", backdropFilter: "blur(4px)", paddingTop: 80 }}
          onClick={() => setPanelOpen(false)}
        >
          <div
            className="w-full rounded-2xl overflow-hidden"
            style={{ maxWidth: 620, background: "#0b1024", border: "1px solid rgba(255,255,255,0.12)", boxShadow: "0 30px 80px rgba(0,0,0,0.6)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2.5" style={{ padding: "16px 20px", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <Search size={15} style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }} />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Busca cualquier texto del sitio…"
                className="flex-1 bg-transparent focus:outline-none"
                style={{ color: "#fff", fontSize: 14 }}
              />
              <button type="button" onClick={() => setPanelOpen(false)} style={{ color: "rgba(255,255,255,0.45)" }}>
                <X size={16} />
              </button>
            </div>

            <div style={{ maxHeight: "58vh", overflowY: "auto" }}>
              {results.length === 0 && (
                <p style={{ padding: "26px 20px", fontSize: 12.5, color: "rgba(255,255,255,0.35)", textAlign: "center" }}>
                  {query.trim() ? "Ningún texto coincide." : "Escribe para buscar entre todos los textos del sitio."}
                </p>
              )}
              {results.map(([path, value]) => (
                <button
                  key={path}
                  type="button"
                  onClick={() => {
                    setPanelOpen(false);
                    setTarget({ path, current: value });
                    setDraft(value);
                    setError("");
                  }}
                  className="w-full text-left transition-colors hover:bg-white/5"
                  style={{ padding: "12px 20px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "block" }}
                >
                  <div style={{ fontSize: 9, letterSpacing: "0.1em", fontWeight: 700, color: "#2979ff", marginBottom: 4 }}>
                    {sectionLabel(sectionOf(path)).toUpperCase()}
                  </div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.82)", lineHeight: 1.5 }}>
                    {value.length > 120 ? `${value.slice(0, 120)}…` : value}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
