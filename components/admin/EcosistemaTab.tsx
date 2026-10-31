"use client";
import { useMemo, useState } from "react";
import { Boxes, Check, Copy, ExternalLink, FolderOpen, Plus, Search } from "lucide-react";
import { DEFAULT_ECOSYSTEM, ECO_CATEGORIES, ECO_STATUS, emptyEcoItem, type EcoCategory, type EcoItem, type EcoStatus } from "@/lib/ecosystem";
import { Card, Field, IconBtn, VisibleToggle, inputClass, moveInList, useSiteList } from "./ui";
import { ArrowDown, ArrowUp, Pencil, Trash2 } from "lucide-react";

// Ecosistema completo de Rafael en un solo lugar: buscar, abrir, filtrar por tipo y estado, y
// administrar cada entrada. Vive en config/site.ecosystem (no necesita reglas nuevas).

const chip = (on: boolean) => ({
  padding: "7px 12px",
  borderRadius: 10,
  fontSize: 13,
  minHeight: 36,
  color: on ? "#fff" : "rgba(255,255,255,0.6)",
  background: on ? "linear-gradient(135deg,#2979ff,#7c4dff)" : "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
});

export default function EcosistemaTab() {
  const { items, persist, msg } = useSiteList<EcoItem>("ecosystem");
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<EcoCategory | "todas">("todas");
  const [status, setStatus] = useState<EcoStatus | "todos">("todos");
  const [showHidden, setShowHidden] = useState(false);
  const [editing, setEditing] = useState<EcoItem | null>(null);
  const [copied, setCopied] = useState("");

  const list = useMemo(() => items ?? [], [items]);
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return list.filter((i) => {
      if (!showHidden && i.visible === false) return false;
      if (cat !== "todas" && i.category !== cat) return false;
      if (status !== "todos" && i.status !== status) return false;
      if (!needle) return true;
      return [i.name, i.desc, i.notes, i.url, i.folder].some((t) => (t || "").toLowerCase().includes(needle));
    });
  }, [list, q, cat, status, showHidden]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { todas: 0 };
    for (const i of list) {
      if (i.visible === false) continue;
      c.todas++;
      c[i.category] = (c[i.category] ?? 0) + 1;
    }
    return c;
  }, [list]);

  if (items === null) return <p className="text-white/50 text-sm">Cargando…</p>;

  async function save() {
    if (!editing || !editing.name.trim()) return;
    const clean = { ...editing, name: editing.name.trim(), url: editing.url.trim(), folder: editing.folder.trim() };
    const exists = list.some((i) => i.id === clean.id);
    await persist(exists ? list.map((i) => (i.id === clean.id ? clean : i)) : [...list, clean]);
    setEditing(null);
  }
  function copy(text: string) {
    try { navigator.clipboard.writeText(text); } catch { /* sin portapapeles */ }
    setCopied(text);
    setTimeout(() => setCopied(""), 1500);
  }
  const statusOf = (s: EcoStatus) => ECO_STATUS.find((x) => x.id === s) ?? ECO_STATUS[0];
  const catLabel = (c: EcoCategory) => ECO_CATEGORIES.find((x) => x.id === c)?.label ?? c;

  return (
    <div className="flex flex-col" style={{ gap: 16 }}>
      <Card title="Ecosistema TechnoCrazy" subtitle="Todos tus sitios, apps, modelos, clientes y herramientas en un solo lugar. Busca, abre y administra cada uno.">
        <div className="flex flex-col" style={{ gap: 12 }}>
          <div className="flex flex-wrap items-center" style={{ gap: 8 }}>
            <div className="flex items-center flex-1" style={{ gap: 8, minWidth: 220, padding: "0 12px", borderRadius: 10, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", minHeight: 44 }}>
              <Search size={15} color="rgba(255,255,255,0.45)" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nombre, descripción, dirección…" aria-label="Buscar en el ecosistema"
                style={{ flex: 1, background: "transparent", border: 0, outline: 0, color: "#fff", fontSize: 14, minWidth: 0 }} />
            </div>
            <button type="button" onClick={() => setEditing(emptyEcoItem())} className="flex items-center gap-1.5 font-bold text-white"
              style={{ minHeight: 44, padding: "0 16px", borderRadius: 10, fontSize: 14, background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
              <Plus size={16} /> Agregar
            </button>
          </div>

          <div className="flex flex-wrap" style={{ gap: 6 }}>
            <button type="button" onClick={() => setCat("todas")} style={chip(cat === "todas")}>Todo ({counts.todas ?? 0})</button>
            {ECO_CATEGORIES.map((c) => (
              <button key={c.id} type="button" onClick={() => setCat(c.id)} style={chip(cat === c.id)}>{c.label} ({counts[c.id] ?? 0})</button>
            ))}
          </div>
          <div className="flex flex-wrap items-center" style={{ gap: 6 }}>
            <button type="button" onClick={() => setStatus("todos")} style={chip(status === "todos")}>Cualquier estado</button>
            {ECO_STATUS.map((s) => (
              <button key={s.id} type="button" onClick={() => setStatus(s.id)} style={chip(status === s.id)}>{s.label}</button>
            ))}
            <label className="flex items-center gap-1.5 text-white/60" style={{ fontSize: 12.5, marginLeft: 6 }}>
              <input type="checkbox" checked={showHidden} onChange={(e) => setShowHidden(e.target.checked)} /> Ver archivados
            </label>
            {msg && <span style={{ fontSize: 12.5, color: "#4ade80" }}>{msg}</span>}
          </div>
        </div>
      </Card>

      {list.length === 0 && (
        <Card title="Catálogo vacío" subtitle="Carga la lista base con tus proyectos conocidos (después puedes editarla, agregar o archivar).">
          <button type="button" onClick={() => persist(DEFAULT_ECOSYSTEM)} className="flex items-center gap-2 font-bold text-white"
            style={{ minHeight: 48, padding: "0 20px", borderRadius: 12, background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
            <Boxes size={16} /> Cargar catálogo base ({DEFAULT_ECOSYSTEM.length})
          </button>
        </Card>
      )}

      {editing && (
        <Card title={list.some((i) => i.id === editing.id) ? "Editar entrada" : "Nueva entrada"}>
          <div className="grid" style={{ gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 240px), 1fr))" }}>
            <Field label="Nombre"><input className={inputClass()} value={editing.name} onChange={(e) => setEditing({ ...editing, name: e.target.value })} /></Field>
            <Field label="Tipo">
              <select className={inputClass()} value={editing.category} onChange={(e) => setEditing({ ...editing, category: e.target.value as EcoCategory })}>
                {ECO_CATEGORIES.map((c) => <option key={c.id} value={c.id}>{c.label}</option>)}
              </select>
            </Field>
            <Field label="Estado">
              <select className={inputClass()} value={editing.status} onChange={(e) => setEditing({ ...editing, status: e.target.value as EcoStatus })}>
                {ECO_STATUS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
              </select>
            </Field>
            <Field label="Dirección en vivo (vacía si es local)"><input className={inputClass()} value={editing.url} onChange={(e) => setEditing({ ...editing, url: e.target.value })} placeholder="https://" /></Field>
            <Field label="Carpeta o ruta en el PC"><input className={inputClass()} value={editing.folder} onChange={(e) => setEditing({ ...editing, folder: e.target.value })} /></Field>
            <Field label="Qué es"><input className={inputClass()} value={editing.desc} onChange={(e) => setEditing({ ...editing, desc: e.target.value })} /></Field>
          </div>
          <div style={{ marginTop: 14 }}>
            <Field label="Notas y pendientes"><textarea className={inputClass()} rows={3} value={editing.notes} onChange={(e) => setEditing({ ...editing, notes: e.target.value })} /></Field>
          </div>
          <div className="flex flex-wrap" style={{ gap: 8, marginTop: 16 }}>
            <button type="button" onClick={save} disabled={!editing.name.trim()} className="font-bold text-white"
              style={{ minHeight: 44, padding: "0 20px", borderRadius: 10, background: "linear-gradient(135deg,#2979ff,#7c4dff)", opacity: editing.name.trim() ? 1 : 0.5 }}>Guardar</button>
            <button type="button" onClick={() => setEditing(null)} className="text-white/70"
              style={{ minHeight: 44, padding: "0 18px", borderRadius: 10, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>Cancelar</button>
          </div>
        </Card>
      )}

      {list.length > 0 && shown.length === 0 && <p className="text-white/50 text-sm">Nada coincide con ese filtro.</p>}

      <div className="grid" style={{ gap: "clamp(8px,1.5vw,12px)", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))" }}>
        {shown.map((i) => {
          const st = statusOf(i.status);
          const idx = list.findIndex((x) => x.id === i.id);
          return (
            <div key={i.id} className="adm-row flex flex-col" style={{ gap: 8, opacity: i.visible === false ? 0.55 : 1 }}>
              <div className="flex items-start justify-between" style={{ gap: 8 }}>
                <div className="min-w-0">
                  <p className="text-white font-semibold" style={{ fontSize: 14.5, lineHeight: 1.25 }}>{i.name}</p>
                  <p className="text-white/40" style={{ fontSize: 12, marginTop: 2 }}>{catLabel(i.category)}</p>
                </div>
                <span style={{ fontSize: 11.5, padding: "2px 9px", borderRadius: 999, whiteSpace: "nowrap", background: `${st.color}22`, color: st.color }}>{st.label}</span>
              </div>
              {i.desc && <p className="text-white/65" style={{ fontSize: 12.5, lineHeight: 1.45 }}>{i.desc}</p>}
              {i.notes && <p style={{ fontSize: 12, lineHeight: 1.4, color: "#fcd34d" }}>{i.notes}</p>}
              <div className="flex flex-wrap items-center" style={{ gap: 6, marginTop: "auto" }}>
                {i.url && (
                  <a href={i.url} target="_blank" rel="noreferrer" className="flex items-center gap-1 font-bold"
                    style={{ minHeight: 34, padding: "0 12px", borderRadius: 8, fontSize: 12.5, color: "#7aa7ff", background: "rgba(41,121,255,0.12)", border: "1px solid rgba(41,121,255,0.3)" }}>
                    Abrir <ExternalLink size={12} />
                  </a>
                )}
                {i.folder && (
                  <button type="button" onClick={() => copy(i.folder)} className="flex items-center gap-1"
                    style={{ minHeight: 34, padding: "0 10px", borderRadius: 8, fontSize: 12, color: "rgba(255,255,255,0.65)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}
                    title="Copiar la carpeta">
                    {copied === i.folder ? <Check size={12} /> : <FolderOpen size={12} />} {i.folder}
                  </button>
                )}
                {i.url && (
                  <button type="button" onClick={() => copy(i.url)} aria-label="Copiar dirección" title="Copiar dirección"
                    style={{ width: 34, height: 34, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.55)", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {copied === i.url ? <Check size={13} /> : <Copy size={13} />}
                  </button>
                )}
              </div>
              <div className="flex items-center justify-between" style={{ gap: 6, paddingTop: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <VisibleToggle compact visible={i.visible !== false} onClick={() => persist(list.map((x) => (x.id === i.id ? { ...x, visible: x.visible === false } : x)))} />
                <div className="flex gap-1.5">
                  {idx > 0 && <IconBtn onClick={() => persist(moveInList(list, i.id, -1))} label="Subir"><ArrowUp size={13} /></IconBtn>}
                  {idx < list.length - 1 && <IconBtn onClick={() => persist(moveInList(list, i.id, 1))} label="Bajar"><ArrowDown size={13} /></IconBtn>}
                  <IconBtn onClick={() => setEditing(i)} label="Editar"><Pencil size={13} /></IconBtn>
                  <IconBtn onClick={() => { if (confirm(`¿Quitar «${i.name}» del catálogo?`)) persist(list.filter((x) => x.id !== i.id)); }} label="Quitar" danger><Trash2 size={13} /></IconBtn>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
