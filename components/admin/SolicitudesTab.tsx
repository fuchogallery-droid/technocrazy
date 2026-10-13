"use client";
import { useEffect, useState } from "react";
import { Inbox, PhoneCall, MessageCircle, ChevronDown, ChevronUp, Clock, CheckCircle2, Sparkles, Archive } from "lucide-react";
import { auth } from "@/lib/firebase";

type LeadStatus = "new" | "contacted" | "won" | "discarded";

interface AgentLead {
  id: string;
  name: string;
  phone: string;
  interest: string;
  summary: string;
  budget: string | null;
  status: LeadStatus;
  notes: string;
  fromNumber: string;
  callId: string | null;
  createdAt: number;
}

interface TranscriptTurn {
  role: "user" | "assistant";
  text: string;
}

const STATUS_STYLE: Record<LeadStatus, { color: string; bg: string; label: string; icon: typeof Inbox }> = {
  new: { color: "#2979ff", bg: "rgba(41,121,255,0.14)", label: "Nueva", icon: Sparkles },
  contacted: { color: "#f59e0b", bg: "rgba(245,158,11,0.14)", label: "Contactada", icon: PhoneCall },
  won: { color: "#22c55e", bg: "rgba(34,197,94,0.14)", label: "Cerrada", icon: CheckCircle2 },
  discarded: { color: "#8b8b96", bg: "rgba(139,139,150,0.14)", label: "Descartada", icon: Archive },
};

const STATUS_ORDER: LeadStatus[] = ["new", "contacted", "won", "discarded"];

async function authedFetch(path: string, init?: { method?: string; body?: unknown }) {
  const token = await auth.currentUser?.getIdToken();
  return fetch(path, {
    method: init?.method ?? "GET",
    headers: { Authorization: `Bearer ${token ?? ""}`, "Content-Type": "application/json" },
    body: init?.body ? JSON.stringify(init.body) : undefined,
  });
}

function digits(phone: string): string {
  return phone.replace(/\D/g, "");
}

function whenLabel(ts: number): string {
  const d = new Date(ts);
  return `${d.toLocaleDateString("es-ES", { day: "numeric", month: "short" })}, ${d.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}`;
}

function LeadCard({ lead, onChange }: { lead: AgentLead; onChange: (next: AgentLead) => void }) {
  const [open, setOpen] = useState(false);
  const [notes, setNotes] = useState(lead.notes);
  const [transcript, setTranscript] = useState<TranscriptTurn[] | null>(null);
  const [saving, setSaving] = useState(false);
  const style = STATUS_STYLE[lead.status];
  const StatusIcon = style.icon;
  const num = digits(lead.phone);

  async function setStatus(status: LeadStatus) {
    if (status === lead.status) return;
    setSaving(true);
    const res = await authedFetch(`/api/admin/agent-leads/${lead.id}`, { method: "PATCH", body: { status } });
    setSaving(false);
    if (res.ok) onChange({ ...lead, status });
  }

  async function saveNotes() {
    if (notes === lead.notes) return;
    const res = await authedFetch(`/api/admin/agent-leads/${lead.id}`, { method: "PATCH", body: { notes } });
    if (res.ok) onChange({ ...lead, notes });
  }

  async function toggle() {
    const next = !open;
    setOpen(next);
    if (next && transcript === null && lead.callId) {
      const res = await authedFetch(`/api/admin/agent-calls/${lead.callId}`);
      if (res.ok) {
        const data = await res.json();
        setTranscript((data.call?.transcript as TranscriptTurn[]) ?? []);
      } else {
        setTranscript([]);
      }
    }
  }

  return (
    <div className="adm-row" style={{ display: "block" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <span
            className="flex shrink-0 items-center justify-center"
            style={{ width: 38, height: 38, borderRadius: 10, background: style.bg, color: style.color }}
          >
            <StatusIcon size={16} />
          </span>
          <div className="min-w-0">
            <p className="text-white font-semibold" style={{ fontSize: 14.5 }}>{lead.name || "Sin nombre"}</p>
            <p className="text-white/60" style={{ fontSize: 12.5, marginTop: 2 }}>{lead.interest}</p>
          </div>
        </div>
        <span
          className="shrink-0 font-semibold"
          style={{ fontSize: 10.5, padding: "3px 9px", borderRadius: 99, background: style.bg, color: style.color }}
        >
          {style.label}
        </span>
      </div>

      <p className="text-white/80" style={{ fontSize: 13, marginTop: 12, lineHeight: 1.5 }}>{lead.summary}</p>

      <div className="flex flex-wrap items-center gap-2" style={{ marginTop: 12 }}>
        {num && (
          <a
            href={`tel:+${num}`}
            className="flex items-center gap-2 text-white font-medium"
            style={{ fontSize: 12.5, padding: "7px 12px", borderRadius: 9, background: "rgba(255,255,255,0.07)" }}
          >
            <PhoneCall size={14} /> {lead.phone}
          </a>
        )}
        {num && (
          <a
            href={`https://wa.me/${num.length === 10 ? `1${num}` : num}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-medium"
            style={{ fontSize: 12.5, padding: "7px 12px", borderRadius: 9, background: "rgba(34,197,94,0.14)", color: "#22c55e" }}
          >
            <MessageCircle size={14} /> WhatsApp
          </a>
        )}
        {lead.budget && (
          <span className="text-white/50" style={{ fontSize: 12 }}>Presupuesto: {lead.budget}</span>
        )}
        <span className="flex items-center gap-1 text-white/40" style={{ fontSize: 11.5, marginLeft: "auto" }}>
          <Clock size={12} /> {whenLabel(lead.createdAt)}
        </span>
      </div>

      <div className="flex flex-wrap gap-2" style={{ marginTop: 14 }}>
        {STATUS_ORDER.map((s) => {
          const active = lead.status === s;
          const st = STATUS_STYLE[s];
          return (
            <button
              key={s}
              type="button"
              disabled={saving}
              onClick={() => setStatus(s)}
              style={{
                fontSize: 11.5,
                fontWeight: 600,
                padding: "6px 11px",
                borderRadius: 8,
                cursor: "pointer",
                border: `1px solid ${active ? st.color : "rgba(255,255,255,0.1)"}`,
                background: active ? st.bg : "transparent",
                color: active ? st.color : "rgba(255,255,255,0.5)",
              }}
            >
              {st.label}
            </button>
          );
        })}
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        onBlur={saveNotes}
        placeholder="Notas internas (se guardan al salir del campo)"
        rows={2}
        className="w-full text-white"
        style={{
          marginTop: 12,
          padding: "9px 11px",
          fontSize: 12.5,
          borderRadius: 9,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.09)",
          resize: "vertical",
        }}
      />

      {lead.callId && (
        <button
          type="button"
          onClick={toggle}
          className="flex items-center gap-1 text-white/50"
          style={{ fontSize: 11.5, marginTop: 10, cursor: "pointer" }}
        >
          {open ? <ChevronUp size={13} /> : <ChevronDown size={13} />} {open ? "Ocultar conversación" : "Ver la conversación completa"}
        </button>
      )}

      {open && (
        <div className="flex flex-col gap-2" style={{ marginTop: 10, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {transcript === null && <p className="text-white/40" style={{ fontSize: 12 }}>Cargando conversación…</p>}
          {transcript?.map((turn, i) => (
            <div
              key={i}
              style={{
                maxWidth: "85%",
                alignSelf: turn.role === "assistant" ? "flex-start" : "flex-end",
                padding: "8px 12px",
                borderRadius: 10,
                background: turn.role === "assistant" ? "rgba(255,255,255,0.04)" : "linear-gradient(135deg,#2979ff,#7c4dff)",
                border: turn.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <p className="text-white" style={{ fontSize: 12.5 }}>{turn.text}</p>
            </div>
          ))}
          {transcript && transcript.length === 0 && <p className="text-white/30" style={{ fontSize: 12 }}>Sin conversación guardada.</p>}
        </div>
      )}
    </div>
  );
}

export default function SolicitudesTab() {
  const [leads, setLeads] = useState<AgentLead[] | null>(null);
  const [error, setError] = useState("");
  const [filter, setFilter] = useState<LeadStatus | "all">("new");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await authedFetch("/api/admin/agent-leads");
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        if (!cancelled) setLeads(data.leads as AgentLead[]);
      } catch {
        if (!cancelled) setError("No se pudieron cargar las solicitudes del agente.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-red-400 text-sm">{error}</p>;
  if (!leads) return <p className="text-white/40 text-sm">Cargando solicitudes…</p>;

  const counts: Record<LeadStatus, number> = { new: 0, contacted: 0, won: 0, discarded: 0 };
  for (const l of leads) counts[l.status] += 1;
  const visible = filter === "all" ? leads : leads.filter((l) => l.status === filter);

  function replace(next: AgentLead) {
    setLeads((prev) => (prev ? prev.map((l) => (l.id === next.id ? next : l)) : prev));
  }

  return (
    <div>
      <section className="adm-card">
        <h2 className="adm-card-title">Solicitudes del agente</h2>
        <p className="adm-card-sub">
          Personas que llamaron al agente, dejaron sus datos y esperan que el equipo las contacte.
        </p>
        <div className="flex flex-wrap gap-2" style={{ marginTop: 16 }}>
          {(["new", "contacted", "won", "discarded", "all"] as const).map((f) => {
            const active = filter === f;
            const label = f === "all" ? "Todas" : STATUS_STYLE[f].label + "s";
            const count = f === "all" ? leads.length : counts[f];
            const color = f === "all" ? "#7c4dff" : STATUS_STYLE[f].color;
            return (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "7px 13px",
                  borderRadius: 9,
                  cursor: "pointer",
                  border: `1px solid ${active ? color : "rgba(255,255,255,0.1)"}`,
                  background: active ? `${color}22` : "transparent",
                  color: active ? color : "rgba(255,255,255,0.55)",
                }}
              >
                {label} ({count})
              </button>
            );
          })}
        </div>
      </section>

      <section className="adm-card">
        <div className="flex flex-col gap-3">
          {visible.map((lead) => (
            <LeadCard key={lead.id} lead={lead} onChange={replace} />
          ))}
          {visible.length === 0 && (
            <p className="text-white/30 text-sm">
              {leads.length === 0
                ? "Aún no hay solicitudes. Cuando alguien llame y deje sus datos, aparecerá aquí."
                : "No hay solicitudes en este estado."}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
