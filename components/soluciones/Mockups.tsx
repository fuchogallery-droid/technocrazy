"use client";
import { motion } from "framer-motion";
import { Bot, Check, Code2, TrendingUp, Users, Zap } from "lucide-react";
import type { Lang } from "@/lib/i18n";

// Mockups visuales de cada solución — construidos en JSX/CSS (nada de imágenes externas)
// para que hereden la paleta del sitio y se vean nítidos en cualquier pantalla.

const panel: React.CSSProperties = {
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(14px)",
  border: "1px solid rgba(255,255,255,0.10)",
  borderRadius: 18,
  padding: 20,
};

type MockupProps = { lang?: Lang };

/* ─────────────── DASHBOARD ─────────────── */
export function DashboardMockup({ lang = "es" }: MockupProps) {
  const bars = [42, 58, 35, 72, 55, 88, 64, 95];
  const tx = lang === "en"
    ? { heading: "DASHBOARD · OVERVIEW", users: "USERS", projects: "PROJECTS", uptime: "UPTIME" }
    : { heading: "DASHBOARD · RESUMEN", users: "USUARIOS", projects: "PROYECTOS", uptime: "UPTIME" };
  return (
    <div style={panel}>
      <div className="flex items-center justify-between mb-5">
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(255,255,255,0.4)", fontWeight: 700 }}>
            {tx.heading}
          </div>
          <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginTop: 4 }}>$127,430</div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full" style={{ background: "rgba(0,230,118,0.12)", border: "1px solid rgba(0,230,118,0.25)", padding: "5px 11px" }}>
          <TrendingUp size={12} style={{ color: "#00e676" }} />
          <span style={{ fontSize: 11, color: "#00e676", fontWeight: 700 }}>+24.6%</span>
        </div>
      </div>

      {/* Gráfico de barras */}
      <div className="flex items-end gap-2" style={{ height: 96, marginBottom: 18 }}>
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5, ease: "easeOut" }}
            style={{
              flex: 1,
              borderRadius: "5px 5px 2px 2px",
              background: i === bars.length - 1
                ? "linear-gradient(180deg,#00e676,#00b248)"
                : "linear-gradient(180deg,rgba(41,121,255,0.85),rgba(41,121,255,0.25))",
            }}
          />
        ))}
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { icon: <Users size={12} />, val: "2,340", lbl: tx.users },
          { icon: <Zap size={12} />, val: "28", lbl: tx.projects },
          { icon: <Check size={12} />, val: "99.2%", lbl: tx.uptime },
        ].map((k) => (
          <div key={k.lbl} className="rounded-xl" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", padding: "10px 8px" }}>
            <div style={{ color: "#2979ff", marginBottom: 5 }}>{k.icon}</div>
            <div style={{ fontSize: 15, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{k.val}</div>
            <div style={{ fontSize: 7, letterSpacing: "0.1em", color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{k.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── AGENTE IA ─────────────── */
export function AgentMockup({ lang = "es" }: MockupProps) {
  const chat = lang === "en"
    ? [
        { from: "user", text: "How much does a website cost?" },
        { from: "bot", text: "Starting at $299, includes design, domain and publishing. Want me to book a free consultation?" },
        { from: "user", text: "Yes, tomorrow afternoon" },
        { from: "bot", text: "Done — booked for tomorrow at 4:00 PM. Confirmation is on its way via WhatsApp." },
      ]
    : [
        { from: "user", text: "¿Cuánto cuesta una página web?" },
        { from: "bot", text: "Desde $299 e incluye diseño, dominio y publicación. ¿Te agendo una asesoría gratis?" },
        { from: "user", text: "Sí, mañana en la tarde" },
        { from: "bot", text: "Listo — reservado para mañana 4:00 PM. Te llega la confirmación por WhatsApp." },
      ];
  const tx = lang === "en"
    ? { name: "TechnoCrazy Agent", status: "Online · replies in seconds" }
    : { name: "Agente TechnoCrazy", status: "En línea · responde en segundos" };
  return (
    <div style={panel}>
      <div className="flex items-center gap-2.5 pb-4 mb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="flex items-center justify-center rounded-xl" style={{ width: 34, height: 34, background: "rgba(41,121,255,0.22)" }}>
          <Bot size={17} style={{ color: "#82b1ff" }} />
        </div>
        <div className="flex-1 min-w-0">
          <div style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{tx.name}</div>
          <div className="flex items-center gap-1.5">
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#00e676", display: "inline-block" }} />
            <span style={{ fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{tx.status}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        {chat.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18 }}
            className={m.from === "user" ? "self-end" : "self-start"}
            style={{
              maxWidth: "82%",
              fontSize: 12,
              lineHeight: 1.6,
              padding: "9px 13px",
              borderRadius: m.from === "user" ? "14px 14px 4px 14px" : "14px 14px 14px 4px",
              background: m.from === "user" ? "linear-gradient(135deg,#2979ff,#7c4dff)" : "rgba(255,255,255,0.06)",
              color: m.from === "user" ? "#fff" : "rgba(255,255,255,0.82)",
              border: m.from === "user" ? "none" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {m.text}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── API ─────────────── */
export function ApiMockup({ lang = "es" }: MockupProps) {
  const isEn = lang === "en";
  return (
    <div style={panel}>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1.5">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span key={c} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "inline-block" }} />
          ))}
        </div>
        <div className="flex items-center gap-1.5 ml-2">
          <Code2 size={11} style={{ color: "rgba(255,255,255,0.35)" }} />
          <span style={{ fontSize: 10, color: "rgba(255,255,255,0.35)", fontFamily: "monospace" }}>{isEn ? "connection.js" : "conexion.js"}</span>
        </div>
      </div>

      <pre
        style={{
          fontFamily: "ui-monospace,SFMono-Regular,Menlo,monospace",
          fontSize: 11,
          lineHeight: 1.85,
          color: "rgba(255,255,255,0.75)",
          background: "rgba(0,0,0,0.28)",
          borderRadius: 12,
          padding: "14px 16px",
          overflowX: "auto",
          margin: 0,
        }}
      >
        <code>
          <span style={{ color: "#7c4dff" }}>const</span> {isEn ? "order" : "pedido"} = <span style={{ color: "#7c4dff" }}>await</span> fetch(
          {"\n"}  <span style={{ color: "#00e676" }}>&quot;https://api.{isEn ? "yourbusiness" : "tunegocio"}.com/{isEn ? "orders" : "pedidos"}&quot;</span>,
          {"\n"}  {"{"} method: <span style={{ color: "#00e676" }}>&quot;POST&quot;</span>, body: {isEn ? "customerData" : "datosCliente"} {"}"}
          {"\n"});
          {"\n"}
          {"\n"}<span style={{ color: "rgba(255,255,255,0.3)" }}>{isEn ? "// The system responds instantly" : "// El sistema responde al instante"}</span>
          {"\n"}{"{"} <span style={{ color: "#82b1ff" }}>&quot;{isEn ? "status" : "estado"}&quot;</span>: <span style={{ color: "#00e676" }}>&quot;{isEn ? "confirmed" : "confirmado"}&quot;</span>, <span style={{ color: "#82b1ff" }}>&quot;{isEn ? "invoice" : "factura"}&quot;</span>: <span style={{ color: "#00e676" }}>&quot;#4471&quot;</span> {"}"}
        </code>
      </pre>

      {/* Nodos conectados */}
      <div className="flex items-center justify-between mt-4 gap-1">
        {[isEn ? "YOUR SITE" : "TU WEB", "API", "STRIPE", "CRM"].map((n, i) => (
          <div key={n} className="flex items-center gap-1 flex-1" style={{ minWidth: 0 }}>
            <div
              className="text-center rounded-lg flex-1"
              style={{
                fontSize: 8,
                fontWeight: 800,
                letterSpacing: "0.06em",
                padding: "7px 4px",
                color: i === 1 ? "#fff" : "rgba(255,255,255,0.6)",
                background: i === 1 ? "linear-gradient(135deg,#2979ff,#00b8d4)" : "rgba(255,255,255,0.05)",
                border: i === 1 ? "none" : "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {n}
            </div>
            {i < 3 && (
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" style={{ flexShrink: 0 }}>
                <path d="M0 4h9M7 1.5L9.5 4 7 6.5" stroke="rgba(0,184,212,0.6)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────── AUTOMATIZACIÓN ─────────────── */
export function AutoMockup({ lang = "es" }: MockupProps) {
  const flow = lang === "en"
    ? [
        { title: "A new customer comes in", desc: "Fills out your website form", done: true },
        { title: "Gets saved to your database", desc: "Without anyone copying anything by hand", done: true },
        { title: "Receives a welcome email", desc: "Personalized with their name", done: true },
        { title: "You get the notification", desc: "WhatsApp with the details ready", done: false },
      ]
    : [
        { title: "Entra un cliente nuevo", desc: "Llena el formulario de tu web", done: true },
        { title: "Se guarda en tu base de datos", desc: "Sin que nadie copie nada a mano", done: true },
        { title: "Recibe correo de bienvenida", desc: "Personalizado con su nombre", done: true },
        { title: "Te llega la notificación", desc: "WhatsApp con los datos listos", done: false },
      ];
  return (
    <div style={panel}>
      <div className="flex items-center gap-2 mb-5">
        <Zap size={13} style={{ color: "#b388ff" }} />
        <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", color: "#b388ff" }}>
          {lang === "en" ? "AUTOMATIC WORKFLOW · NO INTERVENTION" : "FLUJO AUTOMÁTICO · SIN INTERVENCIÓN"}
        </span>
      </div>

      <div className="flex flex-col">
        {flow.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="flex gap-3"
          >
            {/* Rail vertical */}
            <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
              <div
                className="flex items-center justify-center rounded-full"
                style={{
                  width: 22,
                  height: 22,
                  background: s.done ? "rgba(0,230,118,0.16)" : "rgba(124,77,255,0.18)",
                  border: `1px solid ${s.done ? "rgba(0,230,118,0.4)" : "rgba(124,77,255,0.4)"}`,
                }}
              >
                {s.done
                  ? <Check size={11} style={{ color: "#00e676" }} />
                  : <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#b388ff", display: "block" }} />}
              </div>
              {i < flow.length - 1 && (
                <div style={{ width: 1.5, flex: 1, minHeight: 26, background: "linear-gradient(180deg,rgba(124,77,255,0.5),rgba(124,77,255,0.12))" }} />
              )}
            </div>

            <div style={{ paddingBottom: i < flow.length - 1 ? 14 : 0 }}>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", lineHeight: 1.4 }}>{s.title}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{s.desc}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="rounded-xl mt-4 text-center" style={{ background: "rgba(0,230,118,0.08)", border: "1px solid rgba(0,230,118,0.2)", padding: "9px 12px" }}>
        <span style={{ fontSize: 11, color: "rgba(0,230,118,0.9)", fontWeight: 700 }}>
          {lang === "en" ? "Total time: 4 seconds · Your time invested: 0" : "Tiempo total: 4 segundos · Tu tiempo invertido: 0"}
        </span>
      </div>
    </div>
  );
}

export const MOCKUPS: Record<string, (props: MockupProps) => React.JSX.Element> = {
  dashboard: DashboardMockup,
  "agente-ia": AgentMockup,
  api: ApiMockup,
  automatizacion: AutoMockup,
};
