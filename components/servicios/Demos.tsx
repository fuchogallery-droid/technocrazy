"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Lock, Smartphone, Gauge, Search, Bell, CreditCard, MapPin, Cpu, MessageCircle, Users, Receipt,
  Package, Bot, Brain, Mic, Zap, TrendingUp, Clock, Image as ImageIcon, Video, ThumbsUp, AtSign,
  Briefcase, Home, Heart, User,
} from "lucide-react";
import type { Demo, WireRow } from "./types";
import { ICONS } from "./icons";

export type Theme = { accent: string; accent2: string; soft: string };
const grad = (t: Theme) => `linear-gradient(135deg,${t.accent},${t.accent2})`;
const panel = { background: "rgba(13,13,26,0.88)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" } as const;

/* ═════════ Maqueta (wireframe) animada, para web y apps ═════════ */
function Row({ row, t, i }: { row: WireRow; t: Theme; i: number }) {
  const line = (w: string, o = 0.3) => <div style={{ height: 5, borderRadius: 3, background: `rgba(255,255,255,${o})`, width: w }} />;
  const box = { borderRadius: 9, background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.08)" } as const;
  let body: React.ReactNode = null;
  switch (row) {
    case "nav":
      body = (
        <div className="flex items-center justify-between">
          <div style={{ width: 22, height: 22, borderRadius: 7, background: grad(t) }} />
          <div className="flex" style={{ gap: 5 }}>{[0, 1, 2].map((k) => <div key={k} style={{ width: 20, height: 6, borderRadius: 3, background: "rgba(255,255,255,0.28)" }} />)}</div>
        </div>
      );
      break;
    case "hero":
      body = (
        <div style={{ ...box, padding: 12, background: `linear-gradient(135deg,${t.accent}55,${t.accent2}22)`, border: `1px solid ${t.accent}55` }}>
          <div style={{ height: 8, width: "70%", borderRadius: 4, background: "rgba(255,255,255,0.8)", marginBottom: 7 }} />
          {line("90%", 0.35)}<div style={{ height: 5 }} />{line("60%", 0.25)}
          <div style={{ height: 16, width: 54, borderRadius: 6, background: grad(t), marginTop: 10 }} />
        </div>
      );
      break;
    case "cards3":
      body = (
        <div className="grid grid-cols-3" style={{ gap: 6 }}>
          {[0, 1, 2].map((k) => (
            <div key={k} style={{ ...box, padding: 7 }}>
              <div style={{ height: 22, borderRadius: 6, background: `${t.accent}${k === 1 ? "88" : "44"}`, marginBottom: 6 }} />
              {line("85%", 0.3)}<div style={{ height: 4 }} />{line("55%", 0.18)}
            </div>
          ))}
        </div>
      );
      break;
    case "grid4":
      body = (
        <div className="grid grid-cols-2" style={{ gap: 6 }}>
          {[0, 1, 2, 3].map((k) => (
            <div key={k} style={{ ...box, padding: 7 }}>
              <div style={{ height: 30, borderRadius: 6, background: `${t.accent}${k % 2 ? "66" : "33"}`, marginBottom: 6 }} />
              {line("75%", 0.3)}
            </div>
          ))}
        </div>
      );
      break;
    case "list":
      body = (
        <div className="flex flex-col" style={{ gap: 6 }}>
          {[0, 1, 2].map((k) => (
            <div key={k} className="flex items-center" style={{ ...box, padding: 6, gap: 8 }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: `${t.accent}66`, flexShrink: 0 }} />
              <div className="flex-1">{line("70%", 0.35)}<div style={{ height: 4 }} />{line("40%", 0.18)}</div>
            </div>
          ))}
        </div>
      );
      break;
    case "chart":
      body = (
        <div className="flex items-end" style={{ ...box, height: 64, padding: 8, gap: 6 }}>
          {[40, 65, 50, 85, 70, 100].map((h, k) => (
            <motion.div key={k} style={{ flex: 1, borderRadius: 3, background: k === 5 ? grad(t) : `${t.accent}66`, transformOrigin: "bottom" }}
              initial={{ height: "0%" }} animate={{ height: `${h}%` }} transition={{ delay: 0.3 + k * 0.08, duration: 0.5 }} />
          ))}
        </div>
      );
      break;
    case "text":
      body = <div style={{ padding: "2px 2px" }}>{line("95%", 0.3)}<div style={{ height: 5 }} />{line("88%", 0.22)}<div style={{ height: 5 }} />{line("70%", 0.22)}</div>;
      break;
    case "btn":
      body = <div className="flex items-center justify-center" style={{ height: 26, borderRadius: 9, background: grad(t) }}><div style={{ width: 44, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.9)" }} /></div>;
      break;
    case "price":
      body = (
        <div className="flex items-center justify-between" style={{ ...box, padding: 9 }}>
          <div>{line("46px", 0.4)}<div style={{ height: 4 }} />{line("30px", 0.2)}</div>
          <div style={{ width: 52, height: 18, borderRadius: 6, background: grad(t) }} />
        </div>
      );
      break;
    case "search":
      body = <div className="flex items-center" style={{ ...box, height: 26, padding: "0 9px", gap: 7, borderRadius: 13 }}><Search size={11} color="rgba(255,255,255,0.5)" />{line("50%", 0.25)}</div>;
      break;
    case "map":
      body = (
        <div className="relative" style={{ ...box, height: 70, overflow: "hidden" }}>
          <div className="absolute inset-0" style={{ background: `repeating-linear-gradient(0deg,transparent 0 13px,rgba(255,255,255,0.05) 13px 14px),repeating-linear-gradient(90deg,transparent 0 13px,rgba(255,255,255,0.05) 13px 14px)` }} />
          <motion.div className="absolute" style={{ left: "55%", top: "30%", color: t.soft }} animate={{ y: [0, -5, 0] }} transition={{ duration: 1.4, repeat: Infinity }}><MapPin size={20} /></motion.div>
        </div>
      );
      break;
    case "feed":
      body = (
        <div className="flex flex-col" style={{ gap: 6 }}>
          {[0, 1].map((k) => (
            <div key={k} style={{ ...box, padding: 7 }}>
              <div className="flex items-center" style={{ gap: 6, marginBottom: 6 }}><div style={{ width: 14, height: 14, borderRadius: "50%", background: `${t.accent}88` }} />{line("40%", 0.35)}</div>
              <div style={{ height: 34, borderRadius: 6, background: `linear-gradient(135deg,${t.accent}44,${t.accent2}22)` }} />
            </div>
          ))}
        </div>
      );
      break;
    case "chat":
      body = (
        <div className="flex flex-col" style={{ gap: 6 }}>
          <div style={{ alignSelf: "flex-start", width: "62%", height: 20, borderRadius: "10px 10px 10px 2px", background: "rgba(255,255,255,0.12)" }} />
          <div style={{ alignSelf: "flex-end", width: "52%", height: 20, borderRadius: "10px 10px 2px 10px", background: grad(t) }} />
          <div style={{ alignSelf: "flex-start", width: "70%", height: 20, borderRadius: "10px 10px 10px 2px", background: "rgba(255,255,255,0.12)" }} />
        </div>
      );
      break;
    case "tabs":
      body = (
        <div className="flex items-center justify-around" style={{ ...box, height: 30, borderRadius: 12 }}>
          {[Home, Search, Heart, User].map((Ic, k) => <Ic key={k} size={13} color={k === 0 ? t.soft : "rgba(255,255,255,0.4)"} />)}
        </div>
      );
      break;
  }
  return (
    <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}>
      {body}
    </motion.div>
  );
}

export function Wire({ demo, t }: { demo: Extract<Demo, { kind: "wire" }>; t: Theme }) {
  const phone = demo.frame === "phone";
  return (
    <div style={{ width: phone ? 190 : "100%", maxWidth: phone ? 190 : 330, borderRadius: phone ? 28 : 14, background: "#0b0b18", border: "1px solid rgba(255,255,255,0.14)", boxShadow: `0 22px 50px rgba(0,0,0,0.5), 0 0 40px ${t.accent}22`, overflow: "hidden" }}>
      {phone ? (
        <div className="flex justify-center" style={{ paddingTop: 7 }}><div style={{ width: 54, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.18)" }} /></div>
      ) : (
        <div className="flex items-center" style={{ height: 26, padding: "0 10px", gap: 5, background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map((c) => <span key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
          <div className="flex-1 flex items-center" style={{ height: 14, borderRadius: 7, marginLeft: 8, padding: "0 7px", gap: 4, background: "rgba(255,255,255,0.07)" }}>
            <Lock size={7} color="rgba(255,255,255,0.5)" /><div style={{ width: "38%", height: 4, borderRadius: 2, background: "rgba(255,255,255,0.25)" }} />
          </div>
        </div>
      )}
      <div className="flex flex-col" style={{ gap: 8, padding: phone ? "10px 12px 14px" : 12, minHeight: phone ? 260 : 190 }}>
        {demo.rows.map((r, i) => <Row key={`${r}-${i}`} row={r} t={t} i={i} />)}
      </div>
    </div>
  );
}

/* ═════════ Flujo: pasos conectados con un pulso que viaja ═════════ */
export function Flow({ demo, t }: { demo: Extract<Demo, { kind: "flow" }>; t: Theme }) {
  const [active, setActive] = useState(0);
  const n = demo.steps.length;
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % n), 1100);
    return () => clearInterval(id);
  }, [n]);
  return (
    <div className="flex items-start justify-between w-full" style={{ maxWidth: 420 }}>
      {demo.steps.map((s, i) => (
        <div key={s.label} className="flex items-start" style={{ flex: i < n - 1 ? "1 1 0" : "0 0 auto" }}>
          <div className="flex flex-col items-center" style={{ width: 62, gap: 8 }}>
            <motion.div
              className="flex items-center justify-center"
              animate={{ scale: active === i ? 1.12 : 1, boxShadow: active === i ? `0 0 0 6px ${t.accent}2a, 0 10px 28px ${t.accent}66` : "0 0 0 0 transparent" }}
              transition={{ duration: 0.35 }}
              style={{ width: 50, height: 50, borderRadius: 15, color: "#fff", background: active >= i ? grad(t) : "rgba(255,255,255,0.07)", border: `1px solid ${active >= i ? "transparent" : "rgba(255,255,255,0.12)"}` }}
            >
              {ICONS[s.icon]}
            </motion.div>
            <span style={{ fontSize: 10.5, fontWeight: 700, color: active === i ? "#fff" : "rgba(255,255,255,0.55)", textAlign: "center", lineHeight: 1.3 }}>{s.label}</span>
          </div>
          {i < n - 1 && (
            <div className="flex-1 relative" style={{ height: 2, marginTop: 24, background: "rgba(255,255,255,0.1)", borderRadius: 2, overflow: "hidden" }}>
              <motion.div style={{ position: "absolute", inset: 0, background: `linear-gradient(90deg,${t.accent},${t.soft})`, transformOrigin: "left" }}
                animate={{ scaleX: active > i ? 1 : 0 }} transition={{ duration: 0.45 }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function DemoView({ demo, t }: { demo: Demo; t: Theme }) {
  return demo.kind === "wire" ? <Wire demo={demo} t={t} /> : <Flow demo={demo} t={t} />;
}

/* ═════════ Visuales animados del hero (uno por servicio) ═════════ */
function Chip({ children, style, delay = 0 }: { children: React.ReactNode; style: React.CSSProperties; delay?: number }) {
  return (
    <motion.div className="absolute flex items-center" style={{ ...panel, borderRadius: 14, padding: "8px 11px", gap: 7, color: "#fff", fontSize: 11, fontWeight: 800, ...style }}
      animate={{ y: [0, -7, 0] }} transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay }}>
      {children}
    </motion.div>
  );
}

function Stage({ t, children }: { t: Theme; children: React.ReactNode }) {
  return (
    <div className="relative" style={{ width: "min(340px, 86vw)", aspectRatio: "1 / 1" }}>
      <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle,${t.accent}33,transparent 65%)` }} />
      {children}
    </div>
  );
}

function WebHero({ t }: { t: Theme }) {
  const loop = { duration: 6, repeat: Infinity, ease: "easeOut" as const };
  const blocks: [number, React.ReactNode][] = [
    [0.05, <div key="a" style={{ height: 56, borderRadius: 10, background: `linear-gradient(135deg,${t.accent}77,${t.accent2}33)`, padding: 10 }}><div style={{ height: 7, width: "60%", borderRadius: 4, background: "#fff", marginBottom: 6 }} /><div style={{ height: 5, width: "85%", borderRadius: 3, background: "rgba(255,255,255,0.4)" }} /></div>],
    [0.18, <div key="b" className="grid grid-cols-3" style={{ gap: 6 }}>{[0, 1, 2].map((k) => <div key={k} style={{ height: 40, borderRadius: 8, background: "rgba(255,255,255,0.08)" }} />)}</div>],
    [0.3, <div key="c" style={{ height: 22, width: 80, borderRadius: 8, background: grad(t) }} />],
  ];
  return (
    <Stage t={t}>
      <div className="absolute" style={{ left: "6%", right: "6%", top: "14%", borderRadius: 16, background: "#0b0b18", border: "1px solid rgba(255,255,255,0.14)", boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 50px ${t.accent}33`, overflow: "hidden" }}>
        <div className="flex items-center" style={{ height: 28, padding: "0 10px", gap: 5, background: "rgba(255,255,255,0.05)" }}>
          {["#ef4444", "#f59e0b", "#22c55e"].map((c) => <span key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
          <div className="flex-1 flex items-center" style={{ height: 15, borderRadius: 8, marginLeft: 8, padding: "0 8px", gap: 5, background: "rgba(255,255,255,0.07)", fontSize: 8, color: "rgba(255,255,255,0.55)", fontWeight: 700 }}>
            <Lock size={8} /> tunegocio.com
          </div>
        </div>
        <div className="flex flex-col" style={{ gap: 8, padding: 12, minHeight: 158 }}>
          {blocks.map(([d, el], i) => (
            <motion.div key={i} animate={{ opacity: [0, 1, 1, 0], y: [14, 0, 0, 0] }} transition={{ ...loop, times: [d, d + 0.12, 0.9, 1] }}>{el}</motion.div>
          ))}
        </div>
      </div>
      <Chip style={{ left: "0%", bottom: "12%" }} delay={0.4}><Gauge size={16} color={t.soft} /> 100</Chip>
      <Chip style={{ right: "0%", top: "6%" }} delay={1}><Search size={15} color={t.soft} /> SEO</Chip>
      <Chip style={{ right: "4%", bottom: "6%" }} delay={1.6}><Smartphone size={15} color={t.soft} /> Mobile</Chip>
    </Stage>
  );
}

function AppsHero({ t }: { t: Theme }) {
  return (
    <Stage t={t}>
      <div className="absolute" style={{ left: "50%", top: "6%", width: 150, marginLeft: -75, height: 270, borderRadius: 26, background: "#0b0b18", border: "2px solid rgba(255,255,255,0.18)", boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 50px ${t.accent}44`, overflow: "hidden" }}>
        <div className="flex justify-center" style={{ paddingTop: 6 }}><div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.2)" }} /></div>
        <div style={{ padding: "10px 11px" }}>
          <div style={{ height: 8, width: "50%", borderRadius: 4, background: "rgba(255,255,255,0.8)", marginBottom: 10 }} />
          {[0, 1, 2].map((k) => (
            <motion.div key={k} className="flex items-center" style={{ gap: 7, padding: 6, borderRadius: 10, background: "rgba(255,255,255,0.07)", marginBottom: 7 }}
              animate={{ x: [30, 0, 0, -10], opacity: [0, 1, 1, 0] }} transition={{ duration: 5, repeat: Infinity, delay: k * 0.35, times: [0, 0.15, 0.85, 1] }}>
              <div style={{ width: 24, height: 24, borderRadius: 8, background: `${t.accent}${k === 0 ? "cc" : "66"}` }} />
              <div className="flex-1"><div style={{ height: 5, width: "75%", borderRadius: 3, background: "rgba(255,255,255,0.4)", marginBottom: 4 }} /><div style={{ height: 4, width: "45%", borderRadius: 2, background: "rgba(255,255,255,0.18)" }} /></div>
            </motion.div>
          ))}
          <div className="flex items-center justify-center" style={{ height: 26, borderRadius: 10, background: grad(t), marginTop: 4 }}><div style={{ width: 40, height: 5, borderRadius: 3, background: "#fff" }} /></div>
        </div>
        <div className="absolute flex items-center justify-around" style={{ left: 8, right: 8, bottom: 8, height: 28, borderRadius: 14, background: "rgba(255,255,255,0.07)" }}>
          {[Home, Search, Heart, User].map((Ic, k) => <Ic key={k} size={12} color={k === 0 ? t.soft : "rgba(255,255,255,0.4)"} />)}
        </div>
      </div>
      <motion.div className="absolute" style={{ ...panel, left: "-2%", top: "20%", borderRadius: 14, padding: "8px 11px", color: "#fff", fontSize: 11, fontWeight: 800, display: "flex", gap: 7, alignItems: "center" }}
        animate={{ scale: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }} transition={{ duration: 5, repeat: Infinity, times: [0.1, 0.2, 0.8, 0.9] }}>
        <Bell size={14} color={t.soft} /> Push
      </motion.div>
      <Chip style={{ right: "-1%", top: "34%" }} delay={0.8}><CreditCard size={15} color={t.soft} /> Pay</Chip>
      <Chip style={{ left: "2%", bottom: "10%" }} delay={1.4}><MapPin size={15} color={t.soft} /> Live</Chip>
    </Stage>
  );
}

function SystemsHero({ t }: { t: Theme }) {
  const nodes = [
    { x: 18, y: 18, Ic: MessageCircle }, { x: 82, y: 18, Ic: Users },
    { x: 18, y: 82, Ic: Receipt }, { x: 82, y: 82, Ic: Package },
  ];
  return (
    <Stage t={t}>
      <svg viewBox="0 0 100 100" className="absolute inset-0" style={{ width: "100%", height: "100%" }} aria-hidden>
        {nodes.map((n, i) => (
          <g key={i}>
            <line x1={n.x} y1={n.y} x2="50" y2="50" stroke={`${t.accent}66`} strokeWidth="0.6" strokeDasharray="1.5 1.5" />
          </g>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <motion.span key={`dot-${i}`} className="absolute" style={{ width: 8, height: 8, marginLeft: -4, marginTop: -4, borderRadius: "50%", background: t.soft, boxShadow: `0 0 10px ${t.soft}`, left: `${n.x}%`, top: `${n.y}%` }}
          animate={{ left: [`${n.x}%`, "50%", `${n.x}%`], top: [`${n.y}%`, "50%", `${n.y}%`], opacity: [0, 1, 0] }}
          transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.85, ease: "easeInOut" }} />
      ))}
      <motion.div className="absolute flex items-center justify-center" style={{ left: "50%", top: "50%", width: "30%", aspectRatio: "1 / 1", marginLeft: "-15%", marginTop: "-15%", borderRadius: 24, background: grad(t), boxShadow: `0 20px 55px ${t.accent}77` }}
        animate={{ rotate: [0, 90, 90, 180, 180, 270, 270, 360] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}>
        <Cpu size={38} color="#fff" strokeWidth={1.6} />
      </motion.div>
      {nodes.map((n, i) => (
        <motion.div key={i} className="absolute flex items-center justify-center" style={{ ...panel, left: `${n.x}%`, top: `${n.y}%`, width: 52, height: 52, marginLeft: -26, marginTop: -26, borderRadius: 15, color: t.soft }}
          animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3.4, repeat: Infinity, delay: i * 0.85 }}>
          <n.Ic size={22} />
        </motion.div>
      ))}
    </Stage>
  );
}

function AiHero({ t }: { t: Theme }) {
  const cyc = { duration: 8, repeat: Infinity };
  return (
    <Stage t={t}>
      <div className="absolute" style={{ left: "5%", right: "5%", top: "13%", borderRadius: 18, background: "#0b0b18", border: "1px solid rgba(255,255,255,0.14)", boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 50px ${t.accent}33`, overflow: "hidden" }}>
        <div className="flex items-center" style={{ gap: 9, padding: "10px 12px", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <motion.div className="flex items-center justify-center" style={{ width: 26, height: 26, borderRadius: 9, background: grad(t) }} animate={{ boxShadow: [`0 0 0 0 ${t.accent}66`, `0 0 0 8px ${t.accent}00`] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <Bot size={15} color="#fff" />
          </motion.div>
          <div><div style={{ fontSize: 11, fontWeight: 800, color: "#fff", lineHeight: 1 }}>IA</div><div style={{ fontSize: 8, color: t.soft }}>24/7</div></div>
        </div>
        <div className="flex flex-col" style={{ gap: 9, padding: 12, minHeight: 170 }}>
          <motion.div style={{ alignSelf: "flex-end", padding: "7px 11px", borderRadius: "12px 12px 3px 12px", background: grad(t), color: "#fff", fontSize: 10.5, fontWeight: 600 }}
            animate={{ opacity: [0, 1, 1, 0], y: [8, 0, 0, 0] }} transition={{ ...cyc, times: [0.02, 0.1, 0.92, 1] }}>
            ?
          </motion.div>
          <motion.div className="flex" style={{ alignSelf: "flex-start", gap: 4, padding: "9px 12px", borderRadius: "12px 12px 12px 3px", background: "rgba(255,255,255,0.1)" }}
            animate={{ opacity: [0, 0, 1, 1, 0, 0] }} transition={{ ...cyc, times: [0, 0.12, 0.16, 0.3, 0.34, 1] }}>
            {[0, 1, 2].map((k) => <motion.span key={k} style={{ width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.7)" }} animate={{ y: [0, -4, 0] }} transition={{ duration: 0.7, repeat: Infinity, delay: k * 0.12 }} />)}
          </motion.div>
          <motion.div style={{ alignSelf: "flex-start", width: "78%", padding: "8px 11px", borderRadius: "12px 12px 12px 3px", background: "rgba(255,255,255,0.1)" }}
            animate={{ opacity: [0, 0, 1, 1, 0], y: [8, 8, 0, 0, 0] }} transition={{ ...cyc, times: [0, 0.34, 0.42, 0.92, 1] }}>
            <div style={{ height: 5, width: "92%", borderRadius: 3, background: "rgba(255,255,255,0.45)", marginBottom: 5 }} />
            <div style={{ height: 5, width: "64%", borderRadius: 3, background: "rgba(255,255,255,0.3)" }} />
          </motion.div>
        </div>
      </div>
      <Chip style={{ left: "0%", bottom: "9%" }} delay={0.3}><Brain size={16} color={t.soft} /> IA</Chip>
      <Chip style={{ right: "0%", top: "4%" }} delay={1}><Zap size={15} color={t.soft} /> 24/7</Chip>
      <Chip style={{ right: "3%", bottom: "6%" }} delay={1.7}>
        <Mic size={15} color={t.soft} />
        <span className="flex items-center" style={{ gap: 2, height: 14 }}>
          {[0, 1, 2, 3].map((k) => <motion.i key={k} style={{ width: 3, borderRadius: 2, background: t.soft, display: "block" }} animate={{ height: [4, 14, 6, 12, 4] }} transition={{ duration: 1.1, repeat: Infinity, delay: k * 0.15 }} />)}
        </span>
      </Chip>
    </Stage>
  );
}

function RobotHero({ t }: { t: Theme }) {
  const orbit = [ImageIcon, Video, ThumbsUp, AtSign, Briefcase];
  return (
    <Stage t={t}>
      <div className="absolute rounded-full" style={{ inset: "14%", border: `1.5px dashed ${t.accent}55` }} />
      <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
        {orbit.map((Ic, i) => {
          const a = (i / orbit.length) * Math.PI * 2 - Math.PI / 2;
          return (
            <div key={i} className="absolute" style={{ left: `${50 + Math.cos(a) * 36}%`, top: `${50 + Math.sin(a) * 36}%`, width: 46, height: 46, marginLeft: -23, marginTop: -23 }}>
              <motion.div className="flex items-center justify-center" style={{ ...panel, width: 46, height: 46, borderRadius: 14, color: t.soft }} animate={{ rotate: -360 }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
                <Ic size={20} />
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      <motion.div className="absolute flex items-center justify-center" style={{ left: "50%", top: "50%", width: "28%", aspectRatio: "1 / 1", marginLeft: "-14%", marginTop: "-14%", borderRadius: 24, background: grad(t), boxShadow: `0 20px 55px ${t.accent}77` }}
        animate={{ y: [0, -6, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}>
        <Bot size={40} color="#fff" strokeWidth={1.6} />
      </motion.div>
      <Chip style={{ left: "0%", bottom: "4%" }} delay={0.5}><TrendingUp size={15} color={t.soft} /> +viral</Chip>
      <Chip style={{ right: "0%", bottom: "4%" }} delay={1.2}><Clock size={15} color={t.soft} /> Auto</Chip>
    </Stage>
  );
}

export function HeroVisual({ id, t }: { id: string; t: Theme }) {
  switch (id) {
    case "web": return <WebHero t={t} />;
    case "apps": return <AppsHero t={t} />;
    case "systems": return <SystemsHero t={t} />;
    case "ai": return <AiHero t={t} />;
    default: return <RobotHero t={t} />;
  }
}
