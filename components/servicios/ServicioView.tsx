"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Plus, Minus, ZoomIn, X, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsAppUrl } from "@/lib/useWhatsApp";
import { ICONS } from "./icons";
import { DemoView, HeroVisual } from "./Demos";
import { getServicio } from "./registry";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

const card = {
  background: "rgba(255,255,255,0.035)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 18,
};

export default function ServicioView({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const whatsappUrl = useWhatsAppUrl();
  const def = getServicio(slug);
  const [tab, setTab] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  if (!def) return null;
  const c = def.copy[lang === "en" ? "en" : "es"];
  const t = def.theme;
  const GRAD = `linear-gradient(135deg,${t.accent},${t.accent2})`;
  const gradientText = {
    background: `linear-gradient(135deg,${t.soft} 20%,${t.accent2} 100%)`,
    WebkitBackgroundClip: "text" as const,
    WebkitTextFillColor: "transparent" as const,
    backgroundClip: "text" as const,
  };
  const iconBox = (icon: string, size = 44) => (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, borderRadius: 12, background: `${t.accent}22`, border: `1px solid ${t.accent}44`, color: t.soft }}
    >
      {ICONS[icon]}
    </div>
  );
  const active = c.explain[Math.min(tab, c.explain.length - 1)];

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64, background: "linear-gradient(160deg,#05061a 0%,#0a0d28 50%,#05061a 100%)", overflow: "hidden" }}>
        <div className="absolute inset-x-0 pointer-events-none overflow-hidden" style={{ height: 700 }}>
          <div className="absolute rounded-full blur-3xl" style={{ width: 720, height: 720, top: -180, left: "50%", transform: "translateX(-50%)", background: `radial-gradient(circle,${t.accent}22,transparent 70%)` }} />
        </div>

        {/* ══════════ HERO ══════════ */}
        <section className="tc-wrap relative" style={{ paddingTop: 40, paddingBottom: 56 }}>
          <Link
            href="/#servicios"
            className="inline-flex items-center transition-colors hover:text-white"
            style={{ gap: 8, marginBottom: 32, fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} />
            {c.back}
          </Link>

          <div className="flex flex-col lg:flex-row items-center" style={{ gap: "clamp(32px,6vw,64px)" }}>
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="flex-1 min-w-0">
              <div
                className="inline-flex items-center rounded-full"
                style={{ gap: 8, padding: "6px 15px", marginBottom: 20, fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", background: `${t.accent}1c`, border: `1px solid ${t.accent}44`, color: "rgba(255,255,255,0.72)" }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: t.accent, display: "inline-block" }} />
                {c.badge}
              </div>

              <h1 style={{ fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 18, fontSize: "clamp(30px,5vw,52px)", color: "rgba(255,255,255,0.92)" }}>
                {c.titleA} <span style={gradientText}>{c.titleB}</span>
              </h1>

              <p style={{ fontSize: "clamp(14px,1.5vw,17px)", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 540, marginBottom: 24 }}>
                {c.tagline}
              </p>

              <div className="flex flex-wrap" style={{ gap: 8, marginBottom: 28 }}>
                {c.chips.map((chip, i) => (
                  <motion.span
                    key={chip}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
                    style={{ fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 999, color: t.soft, background: `${t.accent}18`, border: `1px solid ${t.accent}38` }}
                  >
                    {chip}
                  </motion.span>
                ))}
              </div>

              <div className="flex flex-wrap" style={{ gap: 12 }}>
                <motion.a
                  href={whatsappUrl} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center"
                  style={{ gap: 8, background: GRAD, color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 13, boxShadow: `0 14px 40px ${t.accent}55`, textDecoration: "none" }}
                >
                  {c.ctaWant}
                  <ArrowRight size={15} />
                </motion.a>
                <a
                  href="#trabajos"
                  className="inline-flex items-center transition-colors hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: 14, padding: "14px 24px", borderRadius: 13, textDecoration: "none" }}
                >
                  {c.ctaPortfolio}
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12 }}
              className="w-full lg:w-[380px] lg:flex-none flex items-center justify-center"
            >
              <HeroVisual id={def.hero} t={t} />
            </motion.div>
          </div>
        </section>

        {/* ══════════ ÁREAS ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 24, paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{c.areasA} <span style={gradientText}>{c.areasB}</span></h2>
            <p className="tc-sub text-gray-400">{c.areasSub}</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3" style={{ gap: 14 }}>
            {c.areas.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -6, borderColor: `${t.accent}77` }}
                style={{ ...card, padding: "22px 20px" }}
              >
                {iconBox(a.icon)}
                <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", margin: "14px 0 6px" }}>{a.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 14 }}>{a.desc}</div>
                <div className="flex flex-wrap" style={{ gap: 6 }}>
                  {a.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: 10.5, fontWeight: 700, padding: "4px 10px", borderRadius: 999, color: t.soft, background: `${t.accent}16` }}>{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ EXPLICACIÓN INTERACTIVA ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 56 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
              <h2 className="tc-h2 text-white">{c.explainA} <span style={gradientText}>{c.explainB}</span></h2>
              <p className="tc-sub text-gray-400">{c.explainSub}</p>
            </motion.div>

            <motion.div {...fadeUp} className="mx-auto" style={{ maxWidth: 900 }}>
              <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 8, marginBottom: 14 }}>
                {c.explain.map((e, i) => (
                  <button
                    key={e.name}
                    onClick={() => setTab(i)}
                    className="transition-colors"
                    style={{
                      padding: "12px 8px", borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: "pointer",
                      color: i === tab ? "#fff" : "rgba(255,255,255,0.6)",
                      background: i === tab ? GRAD : "rgba(255,255,255,0.04)",
                      border: i === tab ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: i === tab ? `0 10px 26px ${t.accent}44` : "none",
                    }}
                  >
                    {e.name}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 items-center" style={{ ...card, padding: "clamp(18px,4vw,32px)", gap: 24 }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`d-${tab}`}
                    initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.28 }}
                    className="flex items-center justify-center"
                    style={{ minHeight: 230 }}
                  >
                    <DemoView demo={active.demo} t={t} />
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`t-${tab}`}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 10 }}>{active.name}</div>
                    <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 18 }}>{active.what}</p>
                    <div style={{ padding: "12px 14px", borderRadius: 12, background: `${t.accent}14`, border: `1px solid ${t.accent}33` }}>
                      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: t.soft, marginBottom: 4 }}>{c.explainIdealFor.toUpperCase()}</div>
                      <div style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{active.ideal}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PROCESO ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 38 }}>
            <h2 className="tc-h2 text-white">{c.processA} <span style={gradientText}>{c.processB}</span></h2>
            <p className="tc-sub text-gray-400">{c.processSub}</p>
          </motion.div>

          <div className="relative grid lg:grid-cols-5" style={{ gap: 14 }}>
            <motion.div
              className="hidden lg:block absolute"
              style={{ left: "10%", right: "10%", top: 28, height: 2, background: `linear-gradient(90deg,${t.accent},${t.accent}22)`, transformOrigin: "left" }}
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }}
            />
            {c.steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative flex lg:flex-col items-start lg:items-center lg:text-center"
                style={{ gap: 14 }}
              >
                <div
                  className="relative flex items-center justify-center flex-shrink-0"
                  style={{ width: 56, height: 56, borderRadius: 16, color: "#fff", background: GRAD, boxShadow: `0 10px 28px ${t.accent}55` }}
                >
                  {ICONS[s.icon]}
                  <span
                    className="absolute flex items-center justify-center"
                    style={{ top: -8, right: -8, width: 22, height: 22, borderRadius: "50%", fontSize: 11, fontWeight: 900, background: "#0d0d1a", border: `2px solid ${t.accent}`, color: "#fff" }}
                  >
                    {i + 1}
                  </span>
                </div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{s.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ QUÉ RECIBES ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 56 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
              <h2 className="tc-h2 text-white">{c.receiveA} <span style={gradientText}>{c.receiveB}</span></h2>
              <p className="tc-sub text-gray-400">{c.receiveSub}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 14 }}>
              {c.files.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -5 }}
                  style={{ ...card, padding: "20px 18px" }}
                >
                  {iconBox(f.icon, 40)}
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", margin: "12px 0 5px" }}>{f.title}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{f.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ TRABAJOS ══════════ */}
        <section id="trabajos" className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 56, scrollMarginTop: 80 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{c.portfolioA} <span style={gradientText}>{c.portfolioB}</span></h2>
            <p className="tc-sub text-gray-400">{c.portfolioSub}</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "clamp(8px,1.6vw,16px)" }}>
            {c.portfolio.map((p, i) => {
              const common = {
                initial: { opacity: 0, scale: 0.94 },
                whileInView: { opacity: 1, scale: 1 },
                viewport: { once: true },
                transition: { delay: i * 0.06 },
                whileHover: { y: -5 },
                className: "relative overflow-hidden group flex items-center justify-center text-center",
              };
              if (p.cta) {
                return (
                  <motion.a key={p.label} href={whatsappUrl} target="_blank" rel="noopener noreferrer" {...common}
                    style={{ aspectRatio: "4 / 3", borderRadius: 16, border: `1.5px dashed ${t.accent}77`, background: `${t.accent}0d`, color: t.soft, textDecoration: "none", flexDirection: "column", gap: 6 }}>
                    <Plus size={26} />
                    <span style={{ fontSize: "clamp(11px,1.5vw,14px)", fontWeight: 800 }}>{p.label}</span>
                  </motion.a>
                );
              }
              const inner = (
                <>
                  {p.img && <Image src={p.img} alt={p.label} fill sizes="(max-width: 1024px) 50vw, 360px" style={{ objectFit: "cover" }} />}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(5,6,26,0.5)" }}>
                    {p.url ? <ExternalLink size={24} color="#fff" /> : <ZoomIn size={24} color="#fff" />}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 text-left" style={{ padding: "22px 12px 10px", background: "linear-gradient(to top,rgba(5,6,26,0.88),transparent)" }}>
                    <span style={{ fontSize: "clamp(10px,1.4vw,13px)", fontWeight: 700, color: "#fff" }}>{p.label}</span>
                  </div>
                </>
              );
              const boxStyle = { aspectRatio: "4 / 3", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "#0d0d1a" } as const;
              return p.url ? (
                <motion.a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer" {...common} style={{ ...boxStyle, cursor: "pointer" }}>{inner}</motion.a>
              ) : (
                <motion.button key={p.label} onClick={() => p.img && setLightbox({ src: p.img, label: p.label })} aria-label={p.label} {...common} style={{ ...boxStyle, cursor: "zoom-in" }}>{inner}</motion.button>
              );
            })}
          </div>
          <p className="text-center" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 16 }}>{c.portfolioHint}</p>
        </section>

        {/* ══════════ PRECIO ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 48 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 38 }}>
              <h2 className="tc-h2 text-white">{c.priceA} <span style={gradientText}>{c.priceB}</span></h2>
              <p className="tc-sub text-gray-400">{c.priceSub}</p>
            </motion.div>

            <motion.div {...fadeUp} className="mx-auto" style={{ ...card, maxWidth: 820, padding: "clamp(20px,4vw,34px)", marginBottom: 20 }}>
              {c.priceTo ? (
                <>
                  <div className="flex items-end justify-between" style={{ marginBottom: 14 }}>
                    <div>
                      <span style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, color: "#fff", lineHeight: 1 }}>{c.priceFrom}</span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 6 }}>{c.priceUnit}</span>
                    </div>
                    <div className="text-right">
                      <span style={{ fontSize: "clamp(28px,5vw,40px)", fontWeight: 900, lineHeight: 1, ...gradientText }}>{c.priceTo}</span>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", marginLeft: 6 }}>{c.priceUnit}</span>
                    </div>
                  </div>
                  <div style={{ height: 10, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                    <motion.div
                      style={{ height: "100%", borderRadius: 999, background: `linear-gradient(90deg,${t.accent2},${t.soft})`, transformOrigin: "left" }}
                      initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: "easeOut" }}
                    />
                  </div>
                </>
              ) : (
                <div className="text-center" style={{ marginBottom: 6 }}>
                  <span style={{ fontSize: "clamp(40px,8vw,64px)", fontWeight: 900, lineHeight: 1, ...gradientText }}>{c.priceFrom}</span>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 6 }}>{c.priceUnit}</div>
                </div>
              )}
              <div className="grid grid-cols-3" style={{ gap: 10, marginTop: 14 }}>
                {c.priceSteps.map((s, i) => (
                  <div key={s.label} className={!c.priceTo ? "text-center" : i === 0 ? "text-left" : i === c.priceSteps.length - 1 ? "text-right" : "text-center"}>
                    <div style={{ fontSize: "clamp(11px,1.6vw,13px)", fontWeight: 800, color: "#fff", marginBottom: 3 }}>{s.label}</div>
                    <div style={{ fontSize: "clamp(10px,1.4vw,12px)", color: "rgba(255,255,255,0.45)", lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="mx-auto" style={{ maxWidth: 820 }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 12 }}>{c.factorsTitle}</div>
              <div className="grid sm:grid-cols-3" style={{ gap: 12 }}>
                {c.factors.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start"
                    style={{ ...card, padding: "16px", gap: 12 }}
                  >
                    {iconBox(f.icon, 36)}
                    <div>
                      <div style={{ fontSize: 13.5, fontWeight: 800, color: "#fff", marginBottom: 3 }}>{f.title}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-center" style={{ fontSize: 12, color: "rgba(255,255,255,0.42)", lineHeight: 1.7, marginTop: 20 }}>{c.priceNote}</p>
            </div>
          </div>
        </section>

        {/* ══════════ PREGUNTAS ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 40 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 30 }}>
            <h2 className="tc-h2 text-white">{c.faqA} <span style={gradientText}>{c.faqB}</span></h2>
          </motion.div>
          <div className="mx-auto flex flex-col" style={{ maxWidth: 760, gap: 10 }}>
            {c.faq.map((f, i) => {
              const open = openFaq === i;
              return (
                <motion.div key={f.q} {...fadeUp} style={{ ...card, borderColor: open ? `${t.accent}66` : "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left"
                    style={{ padding: "16px 18px", gap: 12, cursor: "pointer", color: "#fff", fontSize: 14.5, fontWeight: 700 }}
                    aria-expanded={open}
                  >
                    {f.q}
                    <span style={{ color: t.soft, flexShrink: 0 }}>{open ? <Minus size={16} /> : <Plus size={16} />}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28 }}
                      >
                        <p style={{ padding: "0 18px 18px", fontSize: 13.5, color: "rgba(255,255,255,0.58)", lineHeight: 1.75 }}>{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════ CTA FINAL ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 24, paddingBottom: 64 }}>
          <motion.div
            {...fadeUp}
            className="rounded-3xl text-center"
            style={{ background: GRAD, padding: "44px 28px", boxShadow: `0 24px 70px ${t.accent}44` }}
          >
            <h2 style={{ fontSize: "clamp(22px,3.4vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>{c.finalCtaTitle}</h2>
            <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.9)", maxWidth: 480, margin: "0 auto 26px", lineHeight: 1.7 }}>{c.finalCtaDesc}</p>
            <motion.a
              href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center"
              style={{ gap: 8, background: "#fff", color: "#0a0a1a", fontWeight: 800, fontSize: 14.5, padding: "15px 34px", borderRadius: 13, textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
            >
              {c.finalCtaBtn}
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)", padding: 16 }}
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute flex items-center justify-center"
              style={{ top: 16, right: 16, width: 40, height: 40, borderRadius: "50%", color: "#fff", border: "1px solid rgba(255,255,255,0.2)", cursor: "pointer" }}
              aria-label="Cerrar"
            >
              <X size={18} />
            </button>
            <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "92vw" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={lightbox.src} alt={lightbox.label} style={{ maxWidth: "92vw", maxHeight: "78vh", borderRadius: 14, objectFit: "contain" }} />
              <p style={{ color: "#fff", fontWeight: 700, fontSize: 14, marginTop: 14 }}>{lightbox.label}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
