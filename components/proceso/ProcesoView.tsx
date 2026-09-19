"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronRight, MessageCircle, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { getPaso, PROCESO_ES } from "@/components/proceso/data";

const WA = "https://wa.me/17794318214";

const ICONS = {
  "message-circle": MessageCircle,
  lightbulb: Lightbulb,
  code: Code2,
  rocket: Rocket,
  "trending-up": TrendingUp,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function ProcesoView({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const tp = t.proceso;
  const paso = getPaso(slug, lang)!;
  const Icon = ICONS[paso.icon];
  const otros = PROCESO_ES.filter((p) => p.slug !== paso.slug).map((p) => getPaso(p.slug, lang)!);

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64, background: "linear-gradient(160deg,#04081a 0%,#080e26 50%,#04081a 100%)" }}>
        <div className="absolute inset-x-0 pointer-events-none overflow-hidden" style={{ height: 500 }}>
          <div className="absolute rounded-full blur-3xl" style={{ width: 620, height: 620, top: -160, left: "50%", transform: "translateX(-50%)", background: `radial-gradient(circle,${paso.accent}1a,transparent 70%)` }} />
        </div>

        {/* ══════════ HERO ══════════ */}
        <section className="tc-wrap relative" style={{ paddingTop: 40, paddingBottom: 44 }}>
          <Link
            href="/#proceso"
            className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-white"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} />
            {tp.back}
          </Link>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto text-center" style={{ maxWidth: 640 }}>
            <div className="mx-auto flex items-center justify-center rounded-2xl mb-6" style={{ width: 64, height: 64, background: `linear-gradient(135deg,${paso.accent},${paso.accent}88)`, boxShadow: `0 14px 36px ${paso.accent}44` }}>
              <Icon size={26} color="#fff" />
            </div>

            <div
              className="inline-flex items-center gap-2 rounded-full mb-5"
              style={{ padding: "6px 15px", fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", background: `${paso.accent}1c`, border: `1px solid ${paso.accent}44`, color: "rgba(255,255,255,0.72)" }}
            >
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: paso.accent, display: "inline-block" }} />
              {paso.badge}
            </div>

            <h1 style={{ fontWeight: 900, lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: 16 }}>
              <span className="block" style={{ fontSize: "clamp(18px,2.2vw,22px)", color: "rgba(255,255,255,0.75)" }}>{paso.title}</span>
              <span className="block" style={{ fontSize: "clamp(30px,5vw,48px)", background: `linear-gradient(135deg,${paso.accent} 25%,#fff 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                {paso.titleHighlight}
              </span>
            </h1>

            <p style={{ fontSize: "clamp(14px,1.4vw,16px)", color: "rgba(255,255,255,0.58)", lineHeight: 1.7, marginBottom: 10 }}>{paso.tagline}</p>
            <p style={{ fontSize: 11, color: `${paso.accent}cc`, fontWeight: 700, letterSpacing: "0.04em" }}>⏱ {paso.duration}</p>
          </motion.div>
        </section>

        {/* ══════════ EXPLICACIÓN ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 48 }}>
          <motion.div {...fadeUp} className="mx-auto" style={{ maxWidth: 680 }}>
            <h2 className="tc-h2 text-white" style={{ marginBottom: 20, fontSize: "clamp(20px,2.6vw,28px)" }}>{tp.whatHappens}</h2>
            {paso.intro.map((p, i) => (
              <p key={i} style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
                {p}
              </p>
            ))}
          </motion.div>
        </section>

        {/* ══════════ QUÉ INCLUYE ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 52 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 30 }}>
            <h2 className="tc-h2 text-white">
              {tp.includesA} <span className="gradient-text">{tp.includesB}</span>
            </h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3 mx-auto" style={{ maxWidth: 900 }}>
            {paso.highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "20px 20px 22px" }}
              >
                <div className="flex items-center justify-center rounded-lg mb-3" style={{ width: 30, height: 30, background: `${paso.accent}22`, border: `1px solid ${paso.accent}3a` }}>
                  <Check size={14} style={{ color: paso.accent }} />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.4 }}>{h.title}</div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{h.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ CTA FINAL ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 52 }}>
          <motion.div
            {...fadeUp}
            className="rounded-3xl text-center mx-auto"
            style={{ maxWidth: 720, background: `linear-gradient(135deg,${paso.accent},${paso.accent}bb)`, padding: "38px 28px", boxShadow: `0 22px 60px ${paso.accent}40` }}
          >
            <h2 style={{ fontSize: "clamp(20px,3vw,28px)", fontWeight: 900, color: "#fff", marginBottom: 10, lineHeight: 1.25 }}>
              {tp.finalCtaTitle}
            </h2>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", maxWidth: 440, margin: "0 auto 22px", lineHeight: 1.7 }}>
              {tp.finalCtaDesc}
            </p>
            <motion.a
              href={WA} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2"
              style={{ background: "#fff", color: "#0a0a1a", fontWeight: 800, fontSize: 14, padding: "14px 30px", borderRadius: 13, textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
            >
              {tp.finalCtaBtn}
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </section>

        {/* ══════════ OTROS PASOS ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 60 }}>
          <div className="tc-header" style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{tp.exploreOthers}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {otros.map((o) => (
              <Link
                key={o.slug}
                href={`/proceso/${o.slug}`}
                className="rounded-2xl flex items-center justify-between gap-3 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "16px 18px", textDecoration: "none" }}
              >
                <div>
                  <div style={{ fontSize: 9, letterSpacing: "0.1em", fontWeight: 700, color: o.accent, marginBottom: 4 }}>{tp.stepLabel} {o.num}</div>
                  <div style={{ fontSize: 13.5, fontWeight: 800, color: "#fff" }}>{o.titleHighlight}</div>
                </div>
                <ChevronRight size={16} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
