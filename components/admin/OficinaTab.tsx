"use client";
import { useState } from "react";
import { Building2, Users, Boxes, CalendarDays, Search, ScrollText, LayoutDashboard, AlertTriangle, ExternalLink } from "lucide-react";
import { useCollection } from "@/lib/useCollection";

// Panel de la Oficina TEC dentro de technocrazy.org. La oficina (usuario propio de Firebase) escribe estas
// colecciones por REST desde jarvis; aqui Rafael ve en vivo lo que registro, agendo, investigo y publico.
// Solo lectura a proposito: el control es de la oficina, el panel es la ventana.

type Row = { id: string; [k: string]: unknown };
type SubTab = "resumen" | "clientes" | "catalogo" | "agenda" | "indagacion" | "rastro";

const SUBTABS: { id: SubTab; label: string; icon: typeof Users }[] = [
  { id: "resumen", label: "Resumen", icon: LayoutDashboard },
  { id: "clientes", label: "Clientes", icon: Users },
  { id: "catalogo", label: "Servicios y productos", icon: Boxes },
  { id: "agenda", label: "Agenda", icon: CalendarDays },
  { id: "indagacion", label: "Indagacion", icon: Search },
  { id: "rastro", label: "Rastro", icon: ScrollText },
];

const card = { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "clamp(12px,2vw,16px)" } as const;
const grid = { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))", gap: "clamp(8px,1.5vw,12px)" } as const;

function toDate(v: unknown): Date | null {
  if (!v) return null;
  if (typeof v === "object" && v !== null && "toDate" in v) return (v as { toDate: () => Date }).toDate();
  const d = new Date(v as string);
  return isNaN(d.getTime()) ? null : d;
}
function when(v: unknown, withTime = false): string {
  const d = toDate(v);
  if (!d) return "";
  return d.toLocaleString("es-ES", withTime ? { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" } : { day: "numeric", month: "short", year: "numeric" });
}
function money(cents: unknown): string {
  return typeof cents === "number" ? `$${(cents / 100).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : "—";
}
const text = (v: unknown) => (typeof v === "string" ? v : "");

function Pill({ children, color = "#2979ff" }: { children: React.ReactNode; color?: string }) {
  return <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 999, background: `${color}22`, color, whiteSpace: "nowrap" }}>{children}</span>;
}
function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-white/40" style={{ fontSize: 13 }}>{children}</p>;
}
function Stat({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <div style={card}>
      <p className="text-white/50" style={{ fontSize: 12 }}>{label}</p>
      <p className="text-white" style={{ fontSize: 24, fontWeight: 700, marginTop: 4 }}>{value}</p>
      {hint && <p className="text-white/40" style={{ fontSize: 11, marginTop: 2 }}>{hint}</p>}
    </div>
  );
}

export default function OficinaTab() {
  const [sub, setSub] = useState<SubTab>("resumen");
  const [now] = useState(() => Date.now());
  const clients = useCollection<Row>("officeClients", [], "updatedAt");
  const services = useCollection<Row>("officeServices", [], "updatedAt");
  const products = useCollection<Row>("officeProducts", [], "updatedAt");
  const agenda = useCollection<Row>("agenda", []);
  const research = useCollection<Row>("officeResearch", [], "createdAt");
  const log = useCollection<Row>("officeLog", [], "at");

  const blocked = [clients, services, products, agenda, research, log].some((c) => c.error === "permission-denied");
  const upcoming = agenda.items
    .filter((e) => (toDate(e.start)?.getTime() ?? 0) >= now - 3600e3)
    .sort((a, b) => (toDate(a.start)?.getTime() ?? 0) - (toDate(b.start)?.getTime() ?? 0));
  const totalCents = clients.items.reduce((a, c) => a + (typeof c.totalCents === "number" ? c.totalCents : 0), 0);
  const paidCents = clients.items.reduce((a, c) => a + (typeof c.paidCents === "number" ? c.paidCents : 0), 0);

  return (
    <div className="flex flex-col" style={{ gap: "clamp(12px,2vw,18px)" }}>
      <div className="flex items-center gap-2 text-white">
        <Building2 size={20} />
        <h2 style={{ fontSize: "clamp(17px,2.4vw,20px)", fontWeight: 700 }}>Oficina TEC</h2>
        <Pill color="#22c55e">gobierna esta web</Pill>
      </div>

      {blocked && (
        <div style={{ ...card, borderColor: "rgba(245,158,11,0.4)", background: "rgba(245,158,11,0.08)" }} className="flex items-start gap-2">
          <AlertTriangle size={16} color="#f59e0b" style={{ flexShrink: 0, marginTop: 2 }} />
          <p className="text-white/80" style={{ fontSize: 13 }}>
            Faltan publicar las reglas de Firestore con las colecciones de la oficina (archivo <b>firestore.rules</b> del proyecto). Hasta entonces la oficina no puede registrar clientes, agenda ni indagacion aqui.
          </p>
        </div>
      )}

      <div className="flex flex-wrap" style={{ gap: 6 }}>
        {SUBTABS.map((t) => {
          const Icon = t.icon;
          const on = sub === t.id;
          return (
            <button key={t.id} onClick={() => setSub(t.id)} className="flex items-center gap-1.5"
              style={{ padding: "7px 12px", borderRadius: 10, fontSize: 13, color: on ? "#fff" : "rgba(255,255,255,0.6)", background: on ? "linear-gradient(135deg,#2979ff,#7c4dff)" : "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", minHeight: 36 }}>
              <Icon size={14} /> {t.label}
            </button>
          );
        })}
      </div>

      {sub === "resumen" && (
        <div className="flex flex-col" style={{ gap: 12 }}>
          <div style={grid}>
            <Stat label="Clientes registrados" value={clients.items.length} />
            <Stat label="Cotizado" value={money(totalCents)} hint={`Cobrado ${money(paidCents)}`} />
            <Stat label="Servicios y productos" value={services.items.length + products.items.length} />
            <Stat label="Eventos proximos" value={upcoming.length} />
            <Stat label="Indagaciones" value={research.items.length} />
          </div>
          <div style={card}>
            <p className="text-white" style={{ fontWeight: 600, fontSize: 14, marginBottom: 8 }}>Ultima actividad de la oficina</p>
            {log.items.length === 0 ? <Empty>Sin actividad registrada todavia.</Empty> : (
              <div className="flex flex-col" style={{ gap: 6 }}>
                {[...log.items].sort((a, b) => (toDate(b.at)?.getTime() ?? 0) - (toDate(a.at)?.getTime() ?? 0)).slice(0, 8).map((l) => (
                  <p key={l.id} className="text-white/70" style={{ fontSize: 12.5 }}><span className="text-white/40">{when(l.at, true)}</span> · {text(l.action)}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {sub === "clientes" && (clients.items.length === 0 ? <Empty>Aun no hay clientes. La oficina los registra desde sus cotizaciones y prospectos.</Empty> : (
        <div style={grid}>
          {clients.items.map((c) => (
            <div key={c.id} style={card}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-white" style={{ fontWeight: 600 }}>{text(c.name)}</p>
                <Pill color={c.status === "cliente" ? "#22c55e" : "#f59e0b"}>{text(c.status) || "prospecto"}</Pill>
              </div>
              <p className="text-white/50" style={{ fontSize: 12, marginTop: 4 }}>{[text(c.phone), text(c.email)].filter(Boolean).join(" · ") || "Sin contacto"}</p>
              <p className="text-white/70" style={{ fontSize: 12.5, marginTop: 6 }}>Cotizado {money(c.totalCents)} · Cobrado {money(c.paidCents)}</p>
              {text(c.notes) && <p className="text-white/50" style={{ fontSize: 12, marginTop: 6 }}>{text(c.notes)}</p>}
              {text(c.pageUrl) && <a href={text(c.pageUrl)} target="_blank" rel="noreferrer" className="flex items-center gap-1" style={{ fontSize: 12, color: "#7aa7ff", marginTop: 8 }}>Su pagina <ExternalLink size={12} /></a>}
            </div>
          ))}
        </div>
      ))}

      {sub === "catalogo" && (
        <div className="flex flex-col" style={{ gap: 14 }}>
          {[{ title: "Servicios", rows: services.items }, { title: "Productos", rows: products.items }].map((g) => (
            <div key={g.title}>
              <p className="text-white" style={{ fontWeight: 600, marginBottom: 8 }}>{g.title}</p>
              {g.rows.length === 0 ? <Empty>Nada registrado aun.</Empty> : (
                <div style={grid}>
                  {g.rows.map((r) => (
                    <div key={r.id} style={card}>
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-white" style={{ fontWeight: 600 }}>{text(r.name)}</p>
                        <span className="text-white/80" style={{ fontSize: 13 }}>{money(r.priceCents)}</span>
                      </div>
                      <p className="text-white/50" style={{ fontSize: 12.5, marginTop: 4 }}>{text(r.description)}</p>
                      <div className="flex flex-wrap" style={{ gap: 6, marginTop: 8 }}>
                        {text(r.platform) && <Pill>{text(r.platform)}</Pill>}
                        {r.publicOnSite === true && <Pill color="#22c55e">en la web</Pill>}
                        {(r.active === false || r.status === "inactivo") && <Pill color="#ef4444">inactivo</Pill>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {sub === "agenda" && (upcoming.length === 0 ? <Empty>No hay eventos proximos agendados por la oficina.</Empty> : (
        <div className="flex flex-col" style={{ gap: 8 }}>
          {upcoming.map((e) => (
            <div key={e.id} style={card} className="flex items-start justify-between gap-3">
              <div>
                <p className="text-white" style={{ fontWeight: 600 }}>{text(e.title)}</p>
                <p className="text-white/50" style={{ fontSize: 12.5, marginTop: 2 }}>{when(e.start, true)}{e.end ? ` – ${toDate(e.end)?.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}` : ""}</p>
                {text(e.notes) && <p className="text-white/60" style={{ fontSize: 12.5, marginTop: 4 }}>{text(e.notes)}</p>}
              </div>
              <Pill>{text(e.kind) || "tarea"}</Pill>
            </div>
          ))}
        </div>
      ))}

      {sub === "indagacion" && (research.items.length === 0 ? <Empty>La oficina no ha guardado indagaciones todavia.</Empty> : (
        <div className="flex flex-col" style={{ gap: 10 }}>
          {research.items.map((r) => (
            <div key={r.id} style={card}>
              <div className="flex items-center justify-between gap-2">
                <p className="text-white" style={{ fontWeight: 600 }}>{text(r.topic)}</p>
                <span className="text-white/40" style={{ fontSize: 11 }}>{when(r.createdAt)}</span>
              </div>
              {text(r.prospect) && <Pill color="#f59e0b">{text(r.prospect)}</Pill>}
              <p className="text-white/70" style={{ fontSize: 13, marginTop: 6, whiteSpace: "pre-wrap" }}>{text(r.summary)}</p>
              {Array.isArray(r.sources) && r.sources.length > 0 && (
                <div className="flex flex-col" style={{ gap: 2, marginTop: 8 }}>
                  {(r.sources as string[]).map((s) => <a key={s} href={s} target="_blank" rel="noreferrer" className="truncate" style={{ fontSize: 12, color: "#7aa7ff" }}>{s}</a>)}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}

      {sub === "rastro" && (log.items.length === 0 ? <Empty>Sin acciones registradas.</Empty> : (
        <div className="flex flex-col" style={{ gap: 6 }}>
          {[...log.items].sort((a, b) => (toDate(b.at)?.getTime() ?? 0) - (toDate(a.at)?.getTime() ?? 0)).slice(0, 100).map((l) => (
            <div key={l.id} style={{ ...card, padding: "8px 12px" }}>
              <p className="text-white/80" style={{ fontSize: 12.5 }}><span className="text-white/40">{when(l.at, true)}</span> · <b>{text(l.action)}</b></p>
              <p className="text-white/40 truncate" style={{ fontSize: 11.5 }}>{text(l.detail)}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
