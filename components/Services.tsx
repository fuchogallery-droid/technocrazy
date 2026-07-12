"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Palette, Globe, Smartphone, Cpu, Bot, Zap,
  Target, Users, TrendingUp, ShieldCheck, Rocket, Heart,
  X, CheckCircle, LayoutGrid, ImageIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

type ModalId = "design" | "web" | "apps" | "systems" | "ai" | "robot";

// Visual data only — no translated text
const SERVICE_VISUAL: Record<ModalId, { icon: React.ReactNode; bg: string; glow: string; accentColor: string }> = {
  design:  { icon: <Palette size={22} />,   bg: "linear-gradient(135deg,#ff6b6b,#ee5a24)", glow: "rgba(255,107,107,0.2)", accentColor: "#ff8a80" },
  web:     { icon: <Globe size={22} />,      bg: "linear-gradient(135deg,#2979ff,#0050c8)", glow: "rgba(41,121,255,0.2)",  accentColor: "#82b1ff" },
  apps:    { icon: <Smartphone size={22} />, bg: "linear-gradient(135deg,#7c4dff,#5722cc)", glow: "rgba(124,77,255,0.2)",  accentColor: "#b388ff" },
  systems: { icon: <Cpu size={22} />,        bg: "linear-gradient(135deg,#00bcd4,#0097a7)", glow: "rgba(0,188,212,0.2)",   accentColor: "#80deea" },
  ai:      { icon: <Bot size={22} />,        bg: "linear-gradient(135deg,#00e676,#00c853)", glow: "rgba(0,230,118,0.2)",   accentColor: "#69f0ae" },
  robot:   { icon: <Zap size={22} />,        bg: "linear-gradient(135deg,#ec4899,#f43f5e)", glow: "rgba(236,72,153,0.2)",  accentColor: "#f9a8d4" },
};

const MODAL_VISUAL: Record<ModalId, {
  icon: React.ReactNode; grad: string; solid: string; rgb: string; galleryLive?: boolean;
  galleryItems: { emoji: string; bg: string; url?: string; cta?: boolean }[];
}> = {
  design:  { icon: <Palette size={11} />,   grad: "linear-gradient(135deg,#ff6b6b,#ee5a24)", solid: "#ff8a80", rgb: "255,107,107", galleryItems: [
    { emoji: "🎨", bg: "linear-gradient(135deg,#ff6b6b,#ee5a24)" }, { emoji: "✨", bg: "linear-gradient(135deg,#7c4dff,#5722cc)" },
    { emoji: "📱", bg: "linear-gradient(135deg,#2979ff,#00bcd4)" }, { emoji: "🖼️", bg: "linear-gradient(135deg,#00bcd4,#00e676)" },
    { emoji: "📦", bg: "linear-gradient(135deg,#f59e0b,#ff6b6b)" }, { emoji: "🪄", bg: "linear-gradient(135deg,#ec4899,#7c4dff)" },
  ]},
  web:     { icon: <Globe size={11} />,      grad: "linear-gradient(135deg,#2979ff,#0050c8)", solid: "#82b1ff", rgb: "41,121,255",  galleryLive: true, galleryItems: [
    { emoji: "🏪", bg: "linear-gradient(135deg,#2979ff,#7c4dff)", url: "https://technocrazy.org" },
    { emoji: "🚀", bg: "linear-gradient(135deg,#7c4dff,#2979ff)", url: "https://autopost-plum-five.vercel.app" },
    { emoji: "📊", bg: "linear-gradient(135deg,#00bcd4,#2979ff)", url: "https://elgestor.vercel.app" },
    { emoji: "🛠️", bg: "linear-gradient(135deg,#00e676,#00bcd4)", url: "https://serviya.vercel.app" },
    { emoji: "💱", bg: "linear-gradient(135deg,#0050c8,#00bcd4)", url: "https://cambiobs.vercel.app" },
    { emoji: "➕", bg: "transparent",                              url: "https://wa.me/17794318214", cta: true },
  ]},
  apps:    { icon: <Smartphone size={11} />, grad: "linear-gradient(135deg,#7c4dff,#5722cc)", solid: "#b388ff", rgb: "124,77,255", galleryItems: [
    { emoji: "🍔", bg: "linear-gradient(135deg,#7c4dff,#5722cc)" }, { emoji: "💪", bg: "linear-gradient(135deg,#ec4899,#7c4dff)" },
    { emoji: "💰", bg: "linear-gradient(135deg,#00e676,#00bcd4)" }, { emoji: "💬", bg: "linear-gradient(135deg,#2979ff,#7c4dff)" },
    { emoji: "📅", bg: "linear-gradient(135deg,#f59e0b,#ec4899)" }, { emoji: "🛍️", bg: "linear-gradient(135deg,#5722cc,#2979ff)" },
  ]},
  systems: { icon: <Cpu size={11} />,        grad: "linear-gradient(135deg,#00bcd4,#0097a7)", solid: "#80deea", rgb: "0,188,212",  galleryItems: [
    { emoji: "🤖", bg: "linear-gradient(135deg,#00bcd4,#0097a7)" }, { emoji: "📇", bg: "linear-gradient(135deg,#2979ff,#00bcd4)" },
    { emoji: "📊", bg: "linear-gradient(135deg,#00e676,#00bcd4)" }, { emoji: "🧾", bg: "linear-gradient(135deg,#0097a7,#2979ff)" },
    { emoji: "📦", bg: "linear-gradient(135deg,#f59e0b,#00bcd4)" }, { emoji: "⚙️", bg: "linear-gradient(135deg,#7c4dff,#00bcd4)" },
  ]},
  ai:      { icon: <Bot size={11} />,        grad: "linear-gradient(135deg,#00e676,#00c853)", solid: "#69f0ae", rgb: "0,230,118",  galleryItems: [
    { emoji: "💬", bg: "linear-gradient(135deg,#00e676,#00c853)" }, { emoji: "🧠", bg: "linear-gradient(135deg,#00bcd4,#00e676)" },
    { emoji: "✍️", bg: "linear-gradient(135deg,#7c4dff,#00e676)" }, { emoji: "📈", bg: "linear-gradient(135deg,#2979ff,#00e676)" },
    { emoji: "🎙️", bg: "linear-gradient(135deg,#ec4899,#00e676)" }, { emoji: "🔮", bg: "linear-gradient(135deg,#00c853,#00bcd4)" },
  ]},
  robot:   { icon: <Zap size={11} />,        grad: "linear-gradient(135deg,#ec4899,#f43f5e)", solid: "#f9a8d4", rgb: "236,72,153", galleryItems: [
    { emoji: "📱", bg: "linear-gradient(135deg,#ec4899,#f43f5e)" }, { emoji: "🚀", bg: "linear-gradient(135deg,#f43f5e,#ec4899)" },
    { emoji: "📊", bg: "linear-gradient(135deg,#7c4dff,#ec4899)" }, { emoji: "🎯", bg: "linear-gradient(135deg,#f43f5e,#7c4dff)" },
    { emoji: "🔥", bg: "linear-gradient(135deg,#ec4899,#f59e0b)" }, { emoji: "⚡", bg: "linear-gradient(135deg,#f43f5e,#00e676)" },
  ]},
};

const TRUST_ICONS = [<Target size={16} />, <Users size={16} />, <TrendingUp size={16} />, <ShieldCheck size={16} />, <Rocket size={16} />, <Heart size={16} />];

export default function Services() {
  const { t, lang } = useLanguage();
  const ts = t.services;
  const [activeModal, setActiveModal] = useState<ModalId | null>(null);

  const titleVariants = ts.titleVariants ?? [{ a: ts.title, b: ts.titleHighlight }];
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    setTitleIndex(0);
    const id = setInterval(() => {
      setTitleIndex((i) => (i + 1) % titleVariants.length);
    }, 4500);
    return () => clearInterval(id);
  }, [titleVariants.length, ts.title]);

  const heading = titleVariants[titleIndex] ?? titleVariants[0];

  // Merge visual + translation data
  const services = ts.cards.map(card => ({
    ...SERVICE_VISUAL[card.id as ModalId],
    ...card,
    hasModal: true,
  }));

  const trust = ts.trust.map((label, i) => ({ icon: TRUST_ICONS[i], label }));

  const mv = activeModal ? MODAL_VISUAL[activeModal] : null;
  const mt = activeModal ? ts.modal[activeModal] : null;
  const m = mv && mt ? {
    ...mv,
    title: mt.title,
    highlight: mt.highlight,
    paragraphs: mt.paragraphs,
    list: mt.list,
    gallery: mv.galleryItems.map((g, i) => ({
      ...g,
      label: mt.gallery[i] ?? "",
      ctaMsg: "galleryCtaMsg" in mt ? (mt as { galleryCtaMsg?: string }).galleryCtaMsg : undefined,
    })),
  } : null;
  const activeService = activeModal ? services.find(s => s.id === activeModal) : null;

  return (
    <>
      <section id="servicios" className="section-dark section-py relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 opacity-40" style={{ background: "linear-gradient(to bottom, #2979ff, transparent)" }} />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-20" style={{ width: 400, height: 1, background: "linear-gradient(90deg,transparent,#2979ff,transparent)" }} />
        <div className="absolute inset-0 grid-bg opacity-10" />

        <div className="tc-wrap">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true }}
            className="tc-header"
          >
            <div className="tc-badge" style={{ background: "rgba(41,121,255,0.12)", border: "1px solid rgba(41,121,255,0.25)", color: "#00e5ff" }}>
              {ts.badge}
            </div>
            <h2 className="tc-h2 text-white" style={{ minHeight: "clamp(70px,9vw,110px)" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={titleIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{ display: "block" }}
                >
                  {heading.a}
                  <br />
                  <span className="gradient-text-cyan">{heading.b}</span>
                </motion.span>
              </AnimatePresence>
            </h2>
            <p className="tc-sub text-gray-400">{ts.sub}</p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={() => s.hasModal && setActiveModal(s.id as ModalId)}
                className={`glass-dark rounded-2xl relative overflow-hidden group text-center ${s.hasModal ? "cursor-pointer" : "cursor-default"}`}
                style={{ padding: "16px 12px" }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" style={{ background: `radial-gradient(circle at 50% 0%,${s.glow},transparent 65%)` }} />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: s.bg }} />

                <div className="flex justify-center mb-2">
                  <div
                    className="rounded-xl flex items-center justify-center flex-shrink-0 text-white"
                    style={{ width: 38, height: 38, background: s.bg, boxShadow: `0 6px 20px ${s.glow}` }}
                  >
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-white font-bold text-xs sm:text-sm leading-snug mb-1.5">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed" style={{ fontSize: 9.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{s.desc}</p>

                <div className="mt-2.5 mb-1 flex items-center justify-center gap-1.5">
                  <span className="font-bold" style={{ fontSize: 11, background: s.bg, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {s.price}
                  </span>
                  <span style={{ fontSize: 9, color: "rgba(255,255,255,0.3)" }}>{s.priceNote}</span>
                </div>

                {s.hasModal && (
                  <p className="mt-1 transition-opacity opacity-60 group-hover:opacity-100" style={{ fontSize: 9, color: s.accentColor }}>
                    Ver detalles →
                  </p>
                )}
              </motion.div>
            ))}

          </div>

          {/* CTA card horizontal */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.42 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl"
            style={{ marginTop: 20, padding: "28px 40px", background: "linear-gradient(135deg,#2979ff,#7c4dff)", boxShadow: "0 20px 60px rgba(41,121,255,0.3)" }}
          >
            <div className="flex items-center gap-5">
              <div className="text-white opacity-80 flex-shrink-0">
                <Rocket size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-white font-black text-lg sm:text-xl mb-1">¿Tienes un Proyecto?</h3>
                <p className="text-blue-100 text-sm">No vendo cursos. Construyo resultados.</p>
              </div>
            </div>
            <a
              href="https://wa.me/17794318214"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 font-bold flex items-center gap-3 rounded-full transition-all hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: "#25D366", color: "#fff", padding: "13px 28px", fontSize: 15, textDecoration: "none", boxShadow: "0 8px 28px rgba(37,211,102,0.45)" }}
            >
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.2)", borderRadius: "50%", width: 32, height: 32, flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="white" width={18} height={18}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              Hablemos
            </a>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4"
            style={{ marginTop: 48, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            {trust.map((t) => (
              <div key={t.label} className="flex flex-col items-center gap-2 text-center">
                <span style={{ color: "#00e5ff" }}>{t.icon}</span>
                <span className="text-gray-500 font-medium leading-snug" style={{ fontSize: 10 }}>{t.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Modal de servicio (data-driven) ── */}
      <AnimatePresence>
        {m && activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
            onClick={() => setActiveModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 24 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative w-full max-w-5xl rounded-3xl overflow-hidden"
              style={{
                background: "#0d0d1a",
                border: `1px solid rgba(${m.rgb},0.18)`,
                boxShadow: `0 40px 100px rgba(0,0,0,0.7), 0 0 60px rgba(${m.rgb},0.06)`,
                maxHeight: "90vh",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
                style={{ color: "rgba(255,255,255,0.45)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <X size={17} />
              </button>

              <div className="flex flex-col lg:flex-row" style={{ height: "90vh", maxHeight: "90vh" }}>

                {/* ── Lado izquierdo ── */}
                <div className="flex flex-col min-h-0" style={{ width: "50%", borderRight: "1px solid rgba(255,255,255,0.06)" }}>

                  {/* Barra de acento superior */}
                  <div style={{ height: 4, background: m.grad, flexShrink: 0 }} />

                  {/* Todo el contenido en un solo scroll — footer sigue al contenido sin vacío */}
                  <div className="flex-1 overflow-y-auto" style={{ padding: "38px 40px 36px" }}>

                    {/* Badge */}
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-7"
                      style={{ background: `rgba(${m.rgb},0.12)`, border: `1px solid rgba(${m.rgb},0.28)`, color: m.solid }}
                    >
                      {m.icon}
                      {activeService?.title}
                    </div>

                    {/* Título */}
                    <h2 className="font-black text-white leading-tight mb-5" style={{ fontSize: "clamp(20px,2.2vw,30px)" }}>
                      {m.title}{" "}
                      <span style={{ background: m.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        {m.highlight}
                      </span>
                    </h2>

                    {/* Primer párrafo */}
                    <p className="text-gray-400 mb-9" style={{ fontSize: 13, lineHeight: 1.75 }}>
                      {m.paragraphs[0]}
                    </p>

                    {/* Label sección */}
                    <p className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: m.solid }}>
                      {ts.badge}
                    </p>

                    {/* Items como cards */}
                    <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {m.list.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3"
                          style={{
                            padding: "11px 16px",
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 12,
                            fontSize: 13,
                            lineHeight: 1.4,
                            color: "rgba(255,255,255,0.82)",
                          }}
                        >
                          <CheckCircle size={14} style={{ color: m.solid, flexShrink: 0 }} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div
                      style={{
                        marginTop: 40,
                        paddingTop: 32,
                        borderTop: `1px solid rgba(${m.rgb},0.2)`,
                      }}
                    >
                      <p className="font-black" style={{ fontSize: 26, lineHeight: 1.1, background: m.grad, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        {ts.priceLabel}
                      </p>

                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", letterSpacing: "0.04em", marginTop: 10, marginBottom: 24 }}>
                        {ts.priceNote}
                      </p>

                      <a
                        href="https://wa.me/17794318214"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center font-bold text-white transition-all hover:opacity-90 hover:-translate-y-0.5"
                        style={{ background: m.grad, padding: "16px 0", borderRadius: 16, fontSize: 15, letterSpacing: "0.01em", boxShadow: `0 12px 36px rgba(${m.rgb},0.45)` }}
                      >
                        {ts.ctaBtn}
                      </a>
                    </div>

                  </div>
                </div>

                {/* ── Lado derecho: teaser de galería ── */}
                <div
                  className="flex-1 flex flex-col min-h-0 overflow-y-auto"
                  style={{ padding: "32px 32px 28px", background: `linear-gradient(160deg, rgba(${m.rgb},0.08), rgba(255,255,255,0.01))` }}
                >
                  {/* Encabezado galería */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-2">
                      <LayoutGrid size={15} style={{ color: m.solid }} />
                      <span className="text-white font-bold text-sm">{m.galleryLive ? (lang === "en" ? "Real Projects" : "Proyectos reales") : (lang === "en" ? "Work Gallery" : "Galería de trabajos")}</span>
                    </div>
                    <span
                      className="text-xs font-semibold rounded-full px-3 py-1 inline-flex items-center gap-1.5"
                      style={{ background: `rgba(${m.rgb},0.12)`, border: `1px solid rgba(${m.rgb},0.25)`, color: m.solid }}
                    >
                      {m.galleryLive && <span style={{ width: 6, height: 6, borderRadius: "50%", background: m.solid, display: "inline-block" }} />}
                      {m.galleryLive ? (lang === "en" ? "Live" : "En vivo") : (lang === "en" ? "Coming Soon" : "Próximamente")}
                    </span>
                  </div>

                  {/* Mosaico de miniaturas */}
                  <div className="grid grid-cols-2 gap-3 flex-1" style={{ gridAutoRows: "1fr" }}>
                    {m.gallery.map((g, idx) =>
                      g.cta ? (
                        <motion.a
                          key={idx}
                          href={g.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="rounded-2xl relative flex flex-col items-center justify-center text-center cursor-pointer"
                          style={{ background: "transparent", border: `1px dashed rgba(${m.rgb},0.45)`, minHeight: 96 }}
                        >
                          <span style={{ fontSize: 22, color: m.solid, opacity: 0.9 }}>{g.emoji}</span>
                          <span className="font-semibold" style={{ fontSize: 11, color: m.solid, marginTop: 4 }}>{g.label}</span>
                          <span style={{ fontSize: 9, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{(g as {ctaMsg?: string}).ctaMsg ?? (lang === "en" ? "Let's talk →" : "Hablemos →")}</span>
                        </motion.a>
                      ) : g.url ? (
                        <motion.a
                          key={idx}
                          href={g.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                          whileHover={{ scale: 1.03, y: -2 }}
                          className="rounded-2xl relative overflow-hidden flex items-center justify-center cursor-pointer"
                          style={{ background: g.bg, minHeight: 96, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
                        >
                          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), transparent 50%)" }} />
                          <span style={{ fontSize: 26, opacity: 0.92 }}>{g.emoji}</span>
                          <div className="absolute bottom-0 left-0 right-0" style={{ padding: "8px 18px 11px", background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)" }}>
                            <span className="text-white font-semibold" style={{ fontSize: 10 }}>{g.label}</span>
                          </div>
                        </motion.a>
                      ) : (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, scale: 0.92 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: 0.15 + idx * 0.08 }}
                          className="rounded-2xl relative overflow-hidden flex items-center justify-center"
                          style={{ background: g.bg, minHeight: 96, boxShadow: "0 8px 24px rgba(0,0,0,0.25)" }}
                        >
                          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.12), transparent 50%)" }} />
                          <span style={{ fontSize: 26, opacity: 0.92 }}>{g.emoji}</span>
                          <div className="absolute bottom-0 left-0 right-0" style={{ padding: "8px 18px 11px", background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)" }}>
                            <span className="text-white font-semibold" style={{ fontSize: 10 }}>{g.label}</span>
                          </div>
                        </motion.div>
                      )
                    )}
                  </div>

                  {/* Pie */}
                  <div className="flex items-center justify-center gap-2 mt-5">
                    <ImageIcon size={13} style={{ color: m.solid, opacity: 0.7 }} />
                    <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                      {m.galleryLive ? "Haz clic para visitar cada proyecto en vivo" : "Carrusel interactivo con zoom — muy pronto"}
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}