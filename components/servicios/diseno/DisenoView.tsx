"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Check, Shapes, Palette, Share2, Megaphone, Package, PenTool,
  MessageCircle, Search, Eye, ImageIcon, Layers, BookOpen, Sparkles, Plus, Minus, ZoomIn, X, Type,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { useWhatsAppUrl } from "@/lib/useWhatsApp";
import { DISENO_COPY } from "./copy";

const ACCENT = "#a855f7";
const ACCENT2 = "#7c3aed";
const SOFT = "#c084fc";
const GRAD = `linear-gradient(135deg,${ACCENT},${ACCENT2})`;
const gradientText = {
  background: `linear-gradient(135deg,${SOFT} 20%,${ACCENT2} 100%)`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const ICONS: Record<string, React.ReactNode> = {
  badge: <Shapes size={20} />,
  palette: <Palette size={20} />,
  share: <Share2 size={20} />,
  megaphone: <Megaphone size={20} />,
  package: <Package size={20} />,
  pen: <PenTool size={20} />,
  message: <MessageCircle size={20} />,
  search: <Search size={20} />,
  eye: <Eye size={20} />,
  check: <Check size={20} />,
  image: <ImageIcon size={20} />,
  layers: <Layers size={20} />,
  book: <BookOpen size={20} />,
  sparkles: <Sparkles size={20} />,
};

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

function IconBox({ children, size = 44 }: { children: React.ReactNode; size?: number }) {
  return (
    <div
      className="flex items-center justify-center flex-shrink-0"
      style={{ width: size, height: size, borderRadius: 12, background: `${ACCENT}22`, border: `1px solid ${ACCENT}44`, color: SOFT }}
    >
      {children}
    </div>
  );
}

/* ───────────── Hero: tablero de marca animado ───────────── */
function BrandBoard() {
  const swatches = ["#7c3aed", "#a855f7", "#f59e0b", "#22d3ee"];
  return (
    <div className="relative" style={{ width: "min(340px, 86vw)", aspectRatio: "1 / 1" }}>
      <div className="absolute inset-0 rounded-full" style={{ background: `radial-gradient(circle,${ACCENT}33,transparent 65%)` }} />

      {/* Curva vectorial que se dibuja sola */}
      <svg viewBox="0 0 340 340" className="absolute inset-0" style={{ width: "100%", height: "100%", overflow: "visible" }} aria-hidden>
        <motion.path
          d="M40 270 C 80 40, 260 40, 300 270"
          fill="none" stroke={SOFT} strokeWidth="2.5" strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", times: [0, 0.5, 0.85, 1] }}
        />
        <line x1="40" y1="270" x2="80" y2="40" stroke={`${SOFT}66`} strokeDasharray="3 4" />
        <line x1="300" y1="270" x2="260" y2="40" stroke={`${SOFT}66`} strokeDasharray="3 4" />
        {[[40, 270], [300, 270]].map(([x, y]) => (
          <rect key={x} x={x - 5} y={y - 5} width="10" height="10" rx="2" fill="#fff" stroke={ACCENT} strokeWidth="2" />
        ))}
        {[[80, 40], [260, 40]].map(([x, y]) => (
          <circle key={x} cx={x} cy={y} r="5" fill={ACCENT} stroke="#fff" strokeWidth="2" />
        ))}
      </svg>

      {/* Logo central */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{ left: "50%", top: "50%", width: "36%", aspectRatio: "1 / 1", marginLeft: "-18%", marginTop: "-18%", borderRadius: 28, background: GRAD, boxShadow: `0 24px 60px ${ACCENT}66` }}
        animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={44} color="#fff" strokeWidth={1.6} />
      </motion.div>

      {/* Paleta */}
      <motion.div
        className="absolute flex"
        style={{ left: "2%", top: "6%", gap: 6, padding: 8, borderRadius: 14, background: "rgba(13,13,26,0.85)", border: "1px solid rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {swatches.map((c, i) => (
          <motion.span
            key={c}
            style={{ width: 20, height: 20, borderRadius: 7, background: c, display: "block" }}
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.35 }}
          />
        ))}
      </motion.div>

      {/* Tipografía */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{ right: "2%", top: "12%", width: 62, height: 62, borderRadius: 16, background: "rgba(13,13,26,0.85)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff", fontWeight: 900, fontSize: 26 }}
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
      >
        Aa
      </motion.div>

      {/* Post de redes */}
      <motion.div
        className="absolute"
        style={{ left: "6%", bottom: "6%", width: 92, padding: 8, borderRadius: 14, background: "rgba(13,13,26,0.85)", border: "1px solid rgba(255,255,255,0.12)" }}
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <div style={{ height: 46, borderRadius: 8, background: GRAD, marginBottom: 6 }} />
        <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.35)", marginBottom: 4, width: "80%" }} />
        <div style={{ height: 5, borderRadius: 3, background: "rgba(255,255,255,0.18)", width: "55%" }} />
      </motion.div>

      {/* Empaque */}
      <motion.div
        className="absolute flex items-center justify-center"
        style={{ right: "6%", bottom: "8%", width: 64, height: 64, borderRadius: 16, background: "rgba(245,158,11,0.18)", border: "1px solid rgba(245,158,11,0.45)", color: "#fbbf24" }}
        animate={{ y: [0, 6, 0], rotate: [0, -6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
      >
        <Package size={28} />
      </motion.div>
    </div>
  );
}

/* ───────────── Anatomía de un logotipo ───────────── */
function Symbol({ size }: { size: number }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ width: size, height: size, borderRadius: size * 0.3, background: GRAD, boxShadow: `0 12px 34px ${ACCENT}55`, flexShrink: 0 }}
    >
      <Sparkles size={size * 0.5} color="#fff" strokeWidth={1.7} />
    </div>
  );
}

function Wordmark({ size, letter = "0.18em" }: { size: number; letter?: string }) {
  return <span style={{ fontSize: size, fontWeight: 900, color: "#fff", letterSpacing: letter, lineHeight: 1 }}>NOVA</span>;
}

function LogoDemo({ id }: { id: "isotipo" | "logotipo" | "imagotipo" | "isologo" }) {
  const dashed = { border: `1.5px dashed ${SOFT}88`, borderRadius: 14 };
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.3 }}
      className="flex items-center justify-center"
      style={{ minHeight: 190 }}
    >
      {id === "isotipo" && (
        <motion.div style={{ ...dashed, padding: 16 }} animate={{ rotate: [0, 3, -3, 0] }} transition={{ duration: 6, repeat: Infinity }}>
          <Symbol size={100} />
        </motion.div>
      )}
      {id === "logotipo" && (
        <div style={{ ...dashed, padding: "20px 28px" }}>
          <Wordmark size={42} />
        </div>
      )}
      {id === "imagotipo" && (
        <div className="flex items-center" style={{ gap: 14 }}>
          <motion.div style={{ ...dashed, padding: 10 }} animate={{ x: [0, -6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Symbol size={64} />
          </motion.div>
          <motion.div style={{ ...dashed, padding: "14px 16px" }} animate={{ x: [0, 6, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Wordmark size={30} />
          </motion.div>
        </div>
      )}
      {id === "isologo" && (
        <motion.div
          className="flex flex-col items-center justify-center"
          style={{ width: 190, height: 190, borderRadius: "50%", border: `3px solid ${ACCENT}`, gap: 10, background: `${ACCENT}14`, boxShadow: `0 0 0 8px ${ACCENT}14` }}
          animate={{ rotate: [0, 2, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Symbol size={58} />
          <Wordmark size={26} />
          <span style={{ fontSize: 8, letterSpacing: "0.4em", color: SOFT, fontWeight: 800 }}>STUDIO</span>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ───────────── Página ───────────── */
export default function DisenoView() {
  const { lang } = useLanguage();
  const c = DISENO_COPY[lang === "en" ? "en" : "es"];
  const whatsappUrl = useWhatsAppUrl();
  const [anatomy, setAnatomy] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const copyHex = (hex: string) => {
    try {
      navigator.clipboard?.writeText(hex);
      setCopied(hex);
      setTimeout(() => setCopied(null), 1400);
    } catch {
      /* sin portapapeles: no pasa nada */
    }
  };

  const active = c.anatomy[anatomy];

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64, background: "linear-gradient(160deg,#07041a 0%,#0e0a2a 50%,#07041a 100%)", overflow: "hidden" }}>
        <div className="absolute inset-x-0 pointer-events-none overflow-hidden" style={{ height: 700 }}>
          <div className="absolute rounded-full blur-3xl" style={{ width: 720, height: 720, top: -180, left: "50%", transform: "translateX(-50%)", background: `radial-gradient(circle,${ACCENT}22,transparent 70%)` }} />
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
                style={{ gap: 8, padding: "6px 15px", marginBottom: 20, fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", background: `${ACCENT}1c`, border: `1px solid ${ACCENT}44`, color: "rgba(255,255,255,0.72)" }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
                {c.badge}
              </div>

              <h1 style={{ fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 18, fontSize: "clamp(32px,5.2vw,54px)", color: "rgba(255,255,255,0.92)" }}>
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
                    style={{ fontSize: 12, fontWeight: 700, padding: "6px 14px", borderRadius: 999, color: SOFT, background: `${ACCENT}18`, border: `1px solid ${ACCENT}38` }}
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
                  style={{ gap: 8, background: GRAD, color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 13, boxShadow: `0 14px 40px ${ACCENT}55`, textDecoration: "none" }}
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
              <BrandBoard />
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
                whileHover={{ y: -6, borderColor: `${ACCENT}77` }}
                style={{ ...card, padding: "22px 20px 22px" }}
              >
                <IconBox>{ICONS[a.icon]}</IconBox>
                <div style={{ fontSize: 17, fontWeight: 800, color: "#fff", margin: "14px 0 6px" }}>{a.title}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 14 }}>{a.desc}</div>
                <div className="flex flex-wrap" style={{ gap: 6 }}>
                  {a.tags.map((t) => (
                    <span key={t} style={{ fontSize: 10.5, fontWeight: 700, padding: "4px 10px", borderRadius: 999, color: SOFT, background: `${ACCENT}16` }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ ANATOMÍA ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 56 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
              <h2 className="tc-h2 text-white">{c.anatomyA} <span style={gradientText}>{c.anatomyB}</span></h2>
              <p className="tc-sub text-gray-400">{c.anatomySub}</p>
            </motion.div>

            <motion.div {...fadeUp} className="mx-auto" style={{ maxWidth: 880 }}>
              <div className="grid grid-cols-2 sm:grid-cols-4" style={{ gap: 8, marginBottom: 14 }}>
                {c.anatomy.map((t, i) => (
                  <button
                    key={t.id}
                    onClick={() => setAnatomy(i)}
                    className="transition-colors"
                    style={{
                      padding: "12px 8px", borderRadius: 12, fontSize: 13, fontWeight: 800, cursor: "pointer",
                      color: i === anatomy ? "#fff" : "rgba(255,255,255,0.6)",
                      background: i === anatomy ? GRAD : "rgba(255,255,255,0.04)",
                      border: i === anatomy ? "1px solid transparent" : "1px solid rgba(255,255,255,0.1)",
                      boxShadow: i === anatomy ? `0 10px 26px ${ACCENT}44` : "none",
                    }}
                  >
                    {t.name}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 items-center" style={{ ...card, padding: "clamp(18px,4vw,32px)", gap: 24 }}>
                <AnimatePresence mode="wait">
                  <LogoDemo id={active.id} />
                </AnimatePresence>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div style={{ fontSize: 24, fontWeight: 900, color: "#fff", marginBottom: 10 }}>{active.name}</div>
                    <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 18 }}>{active.what}</p>
                    <div style={{ padding: "12px 14px", borderRadius: 12, background: `${ACCENT}14`, border: `1px solid ${ACCENT}33` }}>
                      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: SOFT, marginBottom: 4 }}>{c.anatomyIdealFor.toUpperCase()}</div>
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
              style={{ left: "10%", right: "10%", top: 28, height: 2, background: `linear-gradient(90deg,${ACCENT},${ACCENT}22)`, transformOrigin: "left" }}
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
                  style={{ width: 56, height: 56, borderRadius: 16, color: "#fff", background: GRAD, boxShadow: `0 10px 28px ${ACCENT}55` }}
                >
                  {ICONS[s.icon]}
                  <span
                    className="absolute flex items-center justify-center"
                    style={{ top: -8, right: -8, width: 22, height: 22, borderRadius: "50%", fontSize: 11, fontWeight: 900, background: "#0d0d1a", border: `2px solid ${ACCENT}`, color: "#fff" }}
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

            <div className="grid lg:grid-cols-2" style={{ gap: 16, marginBottom: 16 }}>
              {/* Paleta */}
              <motion.div {...fadeUp} style={{ ...card, padding: "22px 20px" }}>
                <div style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 14 }}>{c.paletteTitle}</div>
                <div className="flex" style={{ gap: 8 }}>
                  {c.palette.map((p, i) => (
                    <motion.button
                      key={p.hex}
                      onClick={() => copyHex(p.hex)}
                      initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.45 }}
                      whileHover={{ y: -6 }}
                      className="flex-1 flex flex-col justify-end"
                      style={{ height: 150, borderRadius: 14, background: p.hex, border: "1px solid rgba(255,255,255,0.14)", padding: "0 6px 10px", cursor: "pointer", transformOrigin: "bottom", textAlign: "center" }}
                    >
                      <span style={{ fontSize: 9.5, fontWeight: 800, color: i >= 3 && i !== 4 ? "#fff" : i === 4 ? "#0d0d1a" : "#fff", textShadow: i === 4 ? "none" : "0 1px 6px rgba(0,0,0,0.4)" }}>
                        {p.role}
                      </span>
                      <span style={{ fontSize: 8.5, fontWeight: 700, marginTop: 2, color: i === 4 ? "#0d0d1a" : "rgba(255,255,255,0.8)" }}>
                        {copied === p.hex ? (lang === "en" ? "Copied" : "Copiado") : p.hex}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Tipografía */}
              <motion.div {...fadeUp} style={{ ...card, padding: "22px 20px" }}>
                <div className="flex items-center" style={{ gap: 8, fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 14 }}>
                  <Type size={15} style={{ color: SOFT }} /> {c.typeTitle}
                </div>
                <div className="flex items-end" style={{ gap: 18 }}>
                  <motion.div
                    style={{ fontSize: 76, fontWeight: 900, lineHeight: 0.9, ...gradientText }}
                    animate={{ y: [0, -5, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Aa
                  </motion.div>
                  <div className="min-w-0">
                    <div style={{ fontSize: 20, fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: 6 }}>{c.typeHeading}</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}>{c.typeBody}</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4" style={{ gap: 14 }}>
              {c.files.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  whileHover={{ y: -5 }}
                  style={{ ...card, padding: "20px 18px" }}
                >
                  <IconBox size={40}>{ICONS[f.icon]}</IconBox>
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
            {c.portfolio.map((p, i) => (
              <motion.button
                key={p.img}
                onClick={() => setLightbox({ src: p.img, label: p.label })}
                initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ y: -5 }}
                className="relative overflow-hidden group"
                style={{ aspectRatio: "4 / 3", borderRadius: 16, cursor: "zoom-in", border: "1px solid rgba(255,255,255,0.1)", background: "#0d0d1a" }}
                aria-label={p.label}
              >
                <Image src={p.img} alt={p.label} fill sizes="(max-width: 1024px) 50vw, 360px" style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(7,4,26,0.5)" }}>
                  <ZoomIn size={24} color="#fff" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 text-left" style={{ padding: "22px 12px 10px", background: "linear-gradient(to top,rgba(7,4,26,0.85),transparent)" }}>
                  <span style={{ fontSize: "clamp(10px,1.4vw,13px)", fontWeight: 700, color: "#fff" }}>{p.label}</span>
                </div>
              </motion.button>
            ))}
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
                  style={{ height: "100%", borderRadius: 999, background: `linear-gradient(90deg,${ACCENT2},${SOFT})`, transformOrigin: "left" }}
                  initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.3, ease: "easeOut" }}
                />
              </div>
              <div className="grid grid-cols-3" style={{ gap: 10, marginTop: 14 }}>
                {c.priceSteps.map((s, i) => (
                  <div key={s.label} className={i === 0 ? "text-left" : i === 2 ? "text-right" : "text-center"}>
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
                    style={{ ...card, padding: "16px 16px", gap: 12 }}
                  >
                    <IconBox size={36}>{ICONS[f.icon]}</IconBox>
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
                <motion.div key={f.q} {...fadeUp} style={{ ...card, borderColor: open ? `${ACCENT}66` : "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex items-center justify-between text-left"
                    style={{ padding: "16px 18px", gap: 12, cursor: "pointer", color: "#fff", fontSize: 14.5, fontWeight: 700 }}
                    aria-expanded={open}
                  >
                    {f.q}
                    <span style={{ color: SOFT, flexShrink: 0 }}>{open ? <Minus size={16} /> : <Plus size={16} />}</span>
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
            style={{ background: GRAD, padding: "44px 28px", boxShadow: `0 24px 70px ${ACCENT}44` }}
          >
            <h2 style={{ fontSize: "clamp(22px,3.4vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>{c.finalCtaTitle}</h2>
            <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.88)", maxWidth: 480, margin: "0 auto 26px", lineHeight: 1.7 }}>{c.finalCtaDesc}</p>
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

      {/* Lightbox */}
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
