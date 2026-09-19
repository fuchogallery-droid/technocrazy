"use client";
import { useEffect, useState } from "react";
import { Phone, AlertTriangle, CheckCircle2, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { auth } from "@/lib/firebase";

interface AgentCallSummary {
  id: string;
  fromNumber: string;
  startedAt: number;
  endedAt: number | null;
  status: string;
  escalated: boolean;
  resultingOrderId: string | null;
  resultingReservationId: string | null;
  summary: string | null;
  turns: number;
}

interface AgentCallDetail extends AgentCallSummary {
  transcript: { role: "user" | "assistant"; text: string; ts: number }[];
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.round(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function durationOf(call: AgentCallSummary): number | null {
  if (!call.endedAt) return null;
  return (call.endedAt - call.startedAt) / 1000;
}

function dayLabel(ts: number): string {
  const date = new Date(ts);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const sameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString();
  if (sameDay(date, today)) return "Hoy";
  if (sameDay(date, yesterday)) return "Ayer";
  return date.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" });
}

type Outcome = "escalated" | "converted" | "answered" | "failed";

function outcomeOf(call: AgentCallSummary): Outcome {
  if (call.escalated) return "escalated";
  if (call.status === "failed") return "failed";
  if (call.resultingOrderId || call.resultingReservationId) return "converted";
  return "answered";
}

const OUTCOME_STYLE: Record<Outcome, { color: string; bg: string; label: string }> = {
  escalated: { color: "#f59e0b", bg: "rgba(245,158,11,0.14)", label: "Escalada a humano" },
  converted: { color: "#22c55e", bg: "rgba(34,197,94,0.14)", label: "Generó pedido/reserva" },
  answered: { color: "#2979ff", bg: "rgba(41,121,255,0.14)", label: "Atendida" },
  failed: { color: "#ef4444", bg: "rgba(239,68,68,0.14)", label: "No completada" },
};

async function authedFetch(path: string) {
  const token = await auth.currentUser?.getIdToken();
  return fetch(path, { headers: { Authorization: `Bearer ${token ?? ""}` } });
}

function StatBlock({ icon: Icon, value, label, color }: { icon: typeof Phone; value: string | number; label: string; color: string }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex items-center justify-center flex-shrink-0"
        style={{ width: 38, height: 38, borderRadius: 10, background: `${color}22`, color }}
      >
        <Icon size={17} />
      </div>
      <div>
        <p className="text-white font-bold" style={{ fontSize: 18 }}>{value}</p>
        <p className="text-white/40" style={{ fontSize: 10.5 }}>{label}</p>
      </div>
    </div>
  );
}

function CallRow({ call }: { call: AgentCallSummary }) {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState<AgentCallDetail | null>(null);
  const [loading, setLoading] = useState(false);
  const outcome = outcomeOf(call);
  const style = OUTCOME_STYLE[outcome];
  const dur = durationOf(call);

  async function toggle() {
    const next = !open;
    setOpen(next);
    if (next && !detail) {
      setLoading(true);
      try {
        const res = await authedFetch(`/api/admin/agent-calls/${call.id}`);
        if (res.ok) {
          const data = await res.json();
          setDetail(data.call as AgentCallDetail);
        }
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="adm-row">
      <button type="button" onClick={toggle} className="flex items-center justify-between gap-3 w-full text-left">
        <div className="flex min-w-0 items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
            style={{ background: style.bg, color: style.color }}
          >
            {outcome === "escalated" || outcome === "failed" ? <AlertTriangle size={15} /> : outcome === "converted" ? <CheckCircle2 size={15} /> : <Phone size={15} />}
          </span>
          <div className="min-w-0">
            <p className="text-white font-medium" style={{ fontSize: 13.5 }}>{call.fromNumber}</p>
            <p className="text-white/40 truncate" style={{ fontSize: 11.5 }}>{call.summary || style.label}</p>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-2 text-white/40" style={{ fontSize: 11 }}>
          <span>{call.turns} turno{call.turns === 1 ? "" : "s"}</span>
          {dur !== null && <span>{formatDuration(dur)}</span>}
          <span className="hidden sm:inline">
            {new Date(call.startedAt).toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" })}
          </span>
          {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </div>
      </button>

      {open && (
        <div className="mt-3 pt-3 flex flex-col gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {loading && <p className="text-white/40" style={{ fontSize: 12 }}>Cargando transcript…</p>}
          {detail?.transcript.map((turn, i) => (
            <div
              key={i}
              className="max-w-[85%] rounded-lg px-3 py-2"
              style={{
                alignSelf: turn.role === "assistant" ? "flex-start" : "flex-end",
                background: turn.role === "assistant" ? "rgba(255,255,255,0.04)" : "linear-gradient(135deg,#2979ff,#7c4dff)",
                border: turn.role === "assistant" ? "1px solid rgba(255,255,255,0.08)" : "none",
              }}
            >
              <p className="text-white" style={{ fontSize: 12.5 }}>{turn.text}</p>
            </div>
          ))}
          {detail && detail.transcript.length === 0 && <p className="text-white/30" style={{ fontSize: 12 }}>Sin transcript.</p>}
        </div>
      )}
    </div>
  );
}

export default function LlamadasTab() {
  const [calls, setCalls] = useState<AgentCallSummary[] | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await authedFetch("/api/admin/agent-calls");
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        if (!cancelled) setCalls(data.calls as AgentCallSummary[]);
      } catch {
        if (!cancelled) setError("No se pudo cargar la actividad del agente.");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) return <p className="text-red-400 text-sm">{error}</p>;
  if (!calls) return <p className="text-white/40 text-sm">Cargando actividad del agente…</p>;

  const escalatedCount = calls.filter((c) => c.escalated).length;
  const convertedCount = calls.filter((c) => c.resultingOrderId || c.resultingReservationId).length;
  const durations = calls.map(durationOf).filter((d): d is number => d !== null);
  const avgDuration = durations.length > 0 ? durations.reduce((a, b) => a + b, 0) / durations.length : null;

  const groups = new Map<string, AgentCallSummary[]>();
  for (const call of calls) {
    const label = dayLabel(call.startedAt);
    groups.set(label, [...(groups.get(label) ?? []), call]);
  }

  return (
    <div>
      <section className="adm-card">
        <h2 className="adm-card-title">Actividad del agente de llamadas</h2>
        <p className="adm-card-sub">
          El agente de IA que responde el +1 (785) 509-3185, en vivo — últimas 50 llamadas.
        </p>
        <div className="flex flex-wrap gap-6 mt-5">
          <StatBlock icon={Phone} value={calls.length} label="Llamadas recientes" color="#2979ff" />
          <StatBlock icon={CheckCircle2} value={convertedCount} label="Terminaron en pedido/reserva" color="#22c55e" />
          <StatBlock icon={AlertTriangle} value={escalatedCount} label="Escaladas a humano" color="#f59e0b" />
          <StatBlock icon={Clock} value={avgDuration !== null ? formatDuration(avgDuration) : "—"} label="Duración promedio" color="#7c4dff" />
        </div>
      </section>

      <section className="adm-card">
        <h2 className="adm-card-title">Historial</h2>
        <p className="adm-card-sub">Toca una llamada para ver la conversación completa.</p>
        <div className="flex flex-col gap-6 mt-4">
          {Array.from(groups.entries()).map(([label, group]) => (
            <div key={label}>
              <p className="text-white/40 font-semibold uppercase mb-2" style={{ fontSize: 10.5, letterSpacing: "0.04em" }}>
                {label}
              </p>
              <div className="flex flex-col gap-2">
                {group.map((call) => (
                  <CallRow key={call.id} call={call} />
                ))}
              </div>
            </div>
          ))}
          {calls.length === 0 && <p className="text-white/30 text-sm">Aún no se han recibido llamadas.</p>}
        </div>
      </section>
    </div>
  );
}
