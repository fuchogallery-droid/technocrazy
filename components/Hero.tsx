"use client";
import { ArrowRight, Bot, Code2, Zap, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/components/Products";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const stats = h.stats.map((s, i) => (i === 0 ? { ...s, num: `${products.length}` } : s));
  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(145deg,#04081a 0%,#080e26 55%,#04081a 100%)", paddingTop: "4.5rem" }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full blur-3xl" style={{ width: 700, height: 700, top: -100, left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle,rgba(41,121,255,0.10),transparent 70%)" }} />
        <div className="absolute rounded-full blur-3xl" style={{ width: 400, height: 400, bottom: 0, right: 0, background: "radial-gradient(circle,rgba(124,77,255,0.08),transparent 70%)" }} />
      </div>

      <div className="tc-wrap relative z-10 flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pt-6 pb-10 lg:py-14 min-h-[calc(100vh-4.5rem)]">

        {/* ── IZQUIERDA ── */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.72, ease: "easeOut" }}
          className="w-full lg:flex-none lg:max-w-[46%] lg:basis-[46%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center"
        >
          {/* Tagline pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 7, borderRadius: 9999, padding: "6px 16px", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 22, background: "rgba(41,121,255,0.10)", border: "1px solid rgba(41,121,255,0.24)", color: "rgba(255,255,255,0.65)" }}>
            <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#2979ff", display: "inline-block" }} />
            {h.tagline}
          </div>

          {/* H1 */}
          <h1 style={{ fontWeight: 900, lineHeight: 1.1, marginBottom: 18, letterSpacing: "-0.025em" }}>
            <span className="max-lg:inline lg:block" style={{ fontSize: "clamp(28px,4.2vw,60px)", color: "#ffffff" }}>{h.h1a}{" "}</span>
            <span className="max-lg:inline lg:block" style={{ fontSize: "clamp(28px,4.2vw,60px)", color: "#ffffff" }}>{h.h1b}{" "}</span>
            <span className="max-lg:inline lg:block" style={{ fontSize: "clamp(30px,4.8vw,68px)", background: "linear-gradient(135deg,#2979ff 30%,#7c4dff 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {h.h1c}
            </span>
          </h1>

          {/* Subtítulo */}
          <p style={{ fontSize: "clamp(13px,1.4vw,16px)", color: "rgba(255,255,255,0.58)", lineHeight: 1.8, marginBottom: 26, maxWidth: 480 }}>
            {h.subtitle}{" "}
            <span style={{ color: "#2979ff", fontWeight: 600 }}>{h.subtitleHighlight}</span>.
          </p>

          {/* Quote */}
          <div style={{ borderLeft: "3px solid #2979ff", paddingLeft: 20, marginBottom: 36 }}>
            <p style={{ fontSize: "clamp(13px,1.3vw,16px)", fontWeight: 600, color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}>
              {h.quoteA}<br />
              {h.quoteB} <span style={{ color: "#2979ff" }}>{h.quoteHighlight}</span>.
            </p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 28 }}>
            {stats.map((s) => (
              <motion.div
                key={s.num}
                whileHover={{ y: -3, borderColor: "rgba(41,121,255,0.35)" }}
                style={{ padding: "14px 10px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 16, textAlign: "center", cursor: "default", transition: "border-color 0.2s" }}
              >
                <div style={{ fontSize: 20, marginBottom: 6 }}>{s.emoji}</div>
                <div style={{ fontWeight: 900, fontSize: 22, color: "#ffffff", lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: 8, color: "rgba(255,255,255,0.38)", letterSpacing: "0.09em", marginTop: 6, whiteSpace: "pre-line", lineHeight: 1.5 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/17794318214"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg,#2979ff,#7c4dff)", color: "#fff", fontWeight: 700, fontSize: 14, padding: "15px 30px", borderRadius: 14, boxShadow: "0 14px 40px rgba(41,121,255,0.45)", textDecoration: "none", letterSpacing: "0.01em" }}
          >
            {h.cta}
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>

        {/* ── DERECHA: foto + elementos flotantes ── */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.72, delay: 0.15, ease: "easeOut" }}
          className="flex-1 flex items-center justify-center lg:justify-start"
          style={{ position: "relative", minHeight: "clamp(320px, 60vw, 520px)" }}
        >
          {/* Glow detrás de la foto */}
          <div className="hidden lg:block" style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(41,121,255,0.22),transparent 65%)", top: "50%", left: "10%", transform: "translate(-50%,-50%)", zIndex: 0 }} />
          <div className="lg:hidden" style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle,rgba(41,121,255,0.22),transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }} />

          {/* Foto Rafael */}
          <div className="lg:ml-[6%]" style={{ position: "relative", zIndex: 1, width: "clamp(200px,22vw,260px)", borderRadius: 28, overflow: "hidden", boxShadow: "0 30px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(41,121,255,0.15)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/rafael-hero.png" alt="Rafael Navarro · TechnoCrazy" style={{ width: "100%", display: "block", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "36px 18px 16px", background: "linear-gradient(to top,rgba(4,8,26,0.95),transparent)" }}>
              <div style={{ fontFamily: "Georgia,serif", color: "#fff", fontSize: 16, fontWeight: 700 }}>Rafael</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 8, letterSpacing: "0.18em", fontWeight: 700, marginTop: 2 }}>FUNDADOR · TECHNOCRAZY</div>
            </div>
          </div>

          {/* Panel de tarjetas flotantes — todas contenidas en una sola columna a la derecha de la foto */}
          <div className="hidden lg:flex" style={{ flexDirection: "column", gap: 12, marginLeft: 22, position: "relative", zIndex: 2, width: 156 }}>
            {/* Dashboard */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(14px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: 14, padding: "10px 13px" }}>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.45)", fontWeight: 700, letterSpacing: "0.06em", marginBottom: 5 }}>{h.floatingDashboard.label}</div>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", lineHeight: 1 }}>$127,430</div>
              <div style={{ fontSize: 9, color: "#00e676", marginTop: 3, fontWeight: 600 }}>{h.floatingDashboard.growth}</div>
              <div style={{ fontSize: 8, color: "rgba(255,255,255,0.35)", marginTop: 4 }}>{h.floatingDashboard.users}</div>
            </motion.div>

            {/* IA Agent */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} style={{ background: "rgba(41,121,255,0.12)", backdropFilter: "blur(14px)", border: "1px solid rgba(41,121,255,0.28)", borderRadius: 14, padding: "10px 12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 7 }}>
                <div style={{ width: 22, height: 22, borderRadius: 7, background: "rgba(41,121,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Bot size={11} style={{ color: "#82b1ff" }} />
                </div>
                <div>
                  <div style={{ fontSize: 9, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{h.floatingAgent.title}</div>
                  <div style={{ fontSize: 7, color: "rgba(255,255,255,0.45)" }}>{h.floatingAgent.sub}</div>
                </div>
              </div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.75)", background: "rgba(255,255,255,0.06)", borderRadius: 8, padding: "6px 9px", lineHeight: 1.5 }}>
                {h.floatingAgent.msg.split("\n").map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
              </div>
            </motion.div>

            {/* Tiempo real */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.8 }} className="flex items-center" style={{ background: "rgba(0,229,255,0.1)", border: "1px solid rgba(0,229,255,0.2)", borderRadius: 10, padding: "8px 12px", gap: 6, alignSelf: "flex-start" }}>
              <Zap size={11} style={{ color: "#00e5ff" }} />
              <span style={{ fontSize: 8, color: "rgba(0,229,255,0.9)", fontWeight: 700 }}>{h.floatingRt}</span>
            </motion.div>

            {/* API */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }} style={{ background: "linear-gradient(135deg,#2979ff,#00b8d4)", borderRadius: 13, padding: "10px 16px", boxShadow: "0 8px 24px rgba(41,121,255,0.50)", textAlign: "center", alignSelf: "flex-start" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: "#fff", letterSpacing: "0.04em" }}>API</div>
              <div style={{ fontSize: 7, color: "rgba(255,255,255,0.75)", marginTop: 3, letterSpacing: "0.06em" }}>{h.floatingApi.sub}</div>
              <Code2 size={9} style={{ color: "rgba(255,255,255,0.6)", marginTop: 4 }} />
            </motion.div>

            {/* Automatización */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }} style={{ background: "rgba(124,77,255,0.10)", backdropFilter: "blur(14px)", border: "1px solid rgba(124,77,255,0.22)", borderRadius: 14, padding: "10px 12px" }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: "#b388ff", letterSpacing: "0.08em", marginBottom: 7 }}>{h.floatingAuto.title}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {h.floatingAuto.steps.map((label, i) => ({ label, green: i === 2 })).map((step) => (
                  <div key={step.label} style={{ display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", flexShrink: 0, background: step.green ? "#00e676" : "rgba(124,77,255,0.7)" }} />
                    <span style={{ fontSize: 8, color: step.green ? "rgba(0,230,118,0.9)" : "rgba(255,255,255,0.6)" }}>{step.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30 pointer-events-none"
      >
        <span className="text-gray-500 text-xs font-medium tracking-widest uppercase">{h.scroll}</span>
        <ChevronDown size={14} className="text-gray-500" />
      </motion.div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: "block" }}>
          <path d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z" fill="#0a0a1a" />
        </svg>
      </div>
    </section>
  );
}
