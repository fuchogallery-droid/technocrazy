"use client";
import { useEffect, useState, type ReactNode } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ArrowDown, ArrowUp, Eye, EyeOff, Pencil, Trash2 } from "lucide-react";
import { db } from "@/lib/firebase";

// Piezas compartidas del panel admin (antes vivían dentro de app/admin/page.tsx).
// Los estilos están en las clases .adm-* de app/globals.css.

export function inputClass() {
  return "adm-input";
}

export function Card({ title, subtitle, children }: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="adm-card">
      <h2 className="adm-card-title">{title}</h2>
      {subtitle && <p className="adm-card-sub">{subtitle}</p>}
      <div style={{ marginTop: 20 }}>{children}</div>
    </section>
  );
}

export function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <label className="adm-label">{label}</label>
      {children}
    </div>
  );
}

export function IconBtn({ onClick, label, danger, children }: { onClick: () => void; label: string; danger?: boolean; children: ReactNode }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex items-center justify-center flex-shrink-0 transition-colors"
      style={{
        width: 30,
        height: 30,
        borderRadius: 8,
        background: danger ? "rgba(239,68,68,0.1)" : "rgba(255,255,255,0.05)",
        border: `1px solid ${danger ? "rgba(239,68,68,0.24)" : "rgba(255,255,255,0.1)"}`,
        color: danger ? "#ff8080" : "rgba(255,255,255,0.62)",
      }}
    >
      {children}
    </button>
  );
}

export function VisibleToggle({ visible, onClick, compact }: { visible: boolean; onClick: () => void; compact?: boolean }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={visible ? "Se ve en el sitio — clic para ocultarlo" : "NO se ve en el sitio — clic para mostrarlo"}
      className="flex items-center gap-1 flex-shrink-0 font-bold"
      style={{
        fontSize: compact ? 10 : 12,
        borderRadius: compact ? 6 : 10,
        padding: compact ? "3px 8px" : "10px 14px",
        background: visible ? "rgba(74,222,128,0.14)" : "rgba(251,146,60,0.16)",
        border: `1px solid ${visible ? "rgba(74,222,128,0.35)" : "rgba(251,146,60,0.4)"}`,
        color: visible ? "#4ade80" : "#fdba74",
      }}
    >
      {visible ? <Eye size={compact ? 10 : 13} /> : <EyeOff size={compact ? 10 : 13} />}
      {visible ? "VISIBLE" : "OCULTO"}
    </button>
  );
}

// Lista guardada en un campo de config/site (array). Carga una vez y guarda el
// array completo — el mismo patrón de homeProducts/quickLinks/promoters.
export function useSiteList<T extends { id: string }>(field: string) {
  const [items, setItems] = useState<T[] | null>(null);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    (async () => {
      const snap = await getDoc(doc(db, "config", "site"));
      const data = snap.exists() ? snap.data() : {};
      setItems(Array.isArray(data[field]) ? (data[field] as T[]) : []);
    })();
  }, [field]);

  async function persist(next: T[]) {
    setItems(next);
    await setDoc(doc(db, "config", "site"), { [field]: next }, { merge: true });
    setMsg("Guardado ✓");
    setTimeout(() => setMsg(""), 2000);
  }

  return { items, persist, msg };
}

// Fila de una lista con visibilidad, orden, edición y borrado.
export function ListRow<T extends { id: string; visible: boolean }>({
  item,
  index,
  total,
  title,
  subtitle,
  lead,
  onToggle,
  onMove,
  onEdit,
  onRemove,
}: {
  item: T;
  index: number;
  total: number;
  title: string;
  subtitle?: string;
  lead?: ReactNode;
  onToggle: (id: string) => void;
  onMove: (id: string, dir: -1 | 1) => void;
  onEdit: (item: T) => void;
  onRemove: (id: string) => void;
}) {
  return (
    <div className="adm-row flex items-center gap-3">
      {lead}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 flex-wrap">
          <p className="text-white text-sm font-semibold truncate">{title}</p>
          <VisibleToggle compact visible={item.visible} onClick={() => onToggle(item.id)} />
        </div>
        {subtitle && <p className="text-white/40 text-xs truncate" style={{ marginTop: 2 }}>{subtitle}</p>}
      </div>
      <div className="flex gap-1.5 flex-shrink-0">
        {index > 0 && <IconBtn onClick={() => onMove(item.id, -1)} label="Subir"><ArrowUp size={13} /></IconBtn>}
        {index < total - 1 && <IconBtn onClick={() => onMove(item.id, 1)} label="Bajar"><ArrowDown size={13} /></IconBtn>}
        <IconBtn onClick={() => onEdit(item)} label="Editar"><Pencil size={13} /></IconBtn>
        <IconBtn onClick={() => onRemove(item.id)} label="Quitar" danger><Trash2 size={13} /></IconBtn>
      </div>
    </div>
  );
}

export function moveInList<T extends { id: string }>(items: T[], id: string, dir: -1 | 1): T[] {
  const i = items.findIndex((x) => x.id === id);
  const j = i + dir;
  if (i < 0 || j < 0 || j >= items.length) return items;
  const next = [...items];
  [next[i], next[j]] = [next[j], next[i]];
  return next;
}
