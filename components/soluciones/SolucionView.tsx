"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { MOCKUPS } from "@/components/soluciones/Mockups";
import { getSolucion, SOLUCIONES } from "@/components/soluciones/data";

const WA = "https://wa.me/17794318214";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function SolucionView({ slug }: { slug: string }) {
  const { lang, t } = useLanguage();
  const ts = t.soluciones;
  const sol = getSolucion(slug, lang)!;
  const Mockup = MOCKUPS[sol.slug];
  const otras = SOLUCIONES.filter((s) => s.slug !== sol.slug).map((s) => getSolucion(s.slug, lang)!);

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64, background: "linear-gradient(160deg,#04081a 0%,#080e26 50%,#04081a 100%)" }}>
        {/* Glows de fondo */}
        <div className="absolute inset-x-0 pointer-events-none overflow-hidden" style={{ height: 700 }}>
          <div className="absolute rounded-full blur-3xl" style={{ width: 720, height: 720, top: -180, left: "50%", transform: "translateX(-50%)", background: `radial-gradient(circle,${sol.accent}1a,transparent 70%)` }} />
        </div>

        {/* ══════════ HERO DE LA PÁGINA ══════════ */}
        <section className="tc-wrap relative" style={{ paddingTop: 40, paddingBottom: 56 }}>
          <Link
            href="/#inicio"
            className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-white"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} />
            {ts.back}
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            {/* Texto */}
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="flex-1 min-w-0">
              <div
                className="inline-flex items-center gap-2 rounded-full mb-5"
                style={{ padding: "6px 15px", fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", background: `${sol.accent}1c`, border: `1px solid ${sol.accent}44`, color: "rgba(255,255,255,0.72)" }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: sol.accent, display: "inline-block" }} />
                {sol.badge}
              </div>

              <h1 style={{ fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 18 }}>
                <span className="block" style={{ fontSize: "clamp(20px,2.6vw,28px)", color: "rgba(255,255,255,0.9)" }}>
                  {ts.whatIs} {sol.title.toLowerCase()}
                </span>
                <span className="block" style={{ fontSize: "clamp(34px,5.5vw,56px)", background: `linear-gradient(135deg,${sol.accent} 25%,${sol.accent2} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  {sol.titleHighlight}?
                </span>
              </h1>

              <p style={{ fontSize: "clamp(14px,1.5vw,17px)", color: "rgba(255,255,255,0.58)", lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
                {sol.tagline}
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={WA} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2"
                  style={{ background: `linear-gradient(135deg,${sol.accent},${sol.accent2})`, color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 13, boxShadow: `0 14px 40px ${sol.accent}55`, textDecoration: "none" }}
                >
                  {ts.ctaWant}
                  <ArrowRight size={15} />
                </motion.a>
                <a
                  href="#precios"
                  className="inline-flex items-center gap-2 transition-colors hover:bg-white/10"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontWeight: 600, fontSize: 14, padding: "14px 24px", borderRadius: 13, textDecoration: "none" }}
                >
                  {ts.ctaPrices}
                </a>
              </div>
            </motion.div>

            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12 }}
              className="w-full lg:w-[420px] lg:flex-none"
            >
              {Mockup && <Mockup lang={lang} />}
              <p className="text-center mt-3" style={{ fontSize: 10, color: "rgba(255,255,255,0.28)", letterSpacing: "0.08em" }}>
                {ts.mockupCaption}
              </p>
            </motion.div>
          </div>
        </section>

        {/* ══════════ EXPLICACIÓN ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="mx-auto" style={{ maxWidth: 780 }}>
            <h2 className="tc-h2 text-white" style={{ marginBottom: 24 }}>
              {ts.simpleWordsA} <span className="gradient-text">{ts.simpleWordsB}</span>
            </h2>
            {sol.intro.map((p, i) => (
              <p key={i} style={{ fontSize: 15.5, lineHeight: 1.85, color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
                {p}
              </p>
            ))}
            <blockquote
              style={{ borderLeft: `3px solid ${sol.accent}`, paddingLeft: 22, marginTop: 30, fontSize: 18, fontWeight: 700, fontStyle: "italic", color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}
            >
              &ldquo;{sol.quote}&rdquo;
            </blockquote>
          </motion.div>
        </section>

        {/* ══════════ BENEFICIOS ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{ts.benefitsA} <span className="gradient-text">{ts.benefitsB}</span></h2>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sol.benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "20px 20px 22px" }}
              >
                <div className="flex items-center justify-center rounded-lg mb-3" style={{ width: 30, height: 30, background: `${sol.accent}22`, border: `1px solid ${sol.accent}3a` }}>
                  <Check size={14} style={{ color: sol.accent }} />
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.4 }}>{b.title}</div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{b.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ CÓMO FUNCIONA ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 56 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 38 }}>
              <h2 className="tc-h2 text-white">{ts.howBuiltA} <span className="gradient-text">{ts.howBuiltB}</span></h2>
              <p className="tc-sub text-gray-400">{ts.howBuiltSub}</p>
            </motion.div>

            <div className="mx-auto flex flex-col gap-1" style={{ maxWidth: 760 }}>
              {sol.steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 sm:gap-5"
                >
                  <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{ width: 40, height: 40, fontSize: 16, fontWeight: 900, color: "#fff", background: `linear-gradient(135deg,${sol.accent},${sol.accent2})`, boxShadow: `0 8px 22px ${sol.accent}44` }}
                    >
                      {i + 1}
                    </div>
                    {i < sol.steps.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 34, background: `linear-gradient(180deg,${sol.accent}66,${sol.accent}11)`, marginTop: 6, marginBottom: 6 }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < sol.steps.length - 1 ? 26 : 0, paddingTop: 6 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 7 }}>{s.title}</div>
                    <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ CASOS DE USO ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{ts.useCasesA} <span className="gradient-text">{ts.useCasesB}</span></h2>
            <p className="tc-sub text-gray-400">{ts.useCasesSub}</p>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sol.useCases.map((u, i) => (
              <motion.div
                key={u.sector}
                initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4, borderColor: `${sol.accent}55` }}
                className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "18px 20px", transition: "border-color 0.2s" }}
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: sol.accent, display: "inline-block", flexShrink: 0 }} />
                  <span style={{ fontSize: 13.5, fontWeight: 800, color: "#fff" }}>{u.sector}</span>
                </div>
                <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.48)", lineHeight: 1.7 }}>{u.ejemplo}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ ESTILOS / VARIANTES ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{ts.stylesA} <span className="gradient-text">{ts.stylesB}</span> {ts.stylesC}</h2>
            <p className="tc-sub text-gray-400">{ts.stylesSub}</p>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2">
            {sol.styles.map((st, i) => (
              <motion.div
                key={st.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-2xl flex gap-4 items-start"
                style={{ background: `linear-gradient(135deg,${sol.accent}12,transparent 60%)`, border: `1px solid ${sol.accent}2a`, padding: "20px 22px" }}
              >
                <div style={{ fontSize: 26, fontWeight: 900, color: `${sol.accent}55`, lineHeight: 1, flexShrink: 0 }}>
                  0{i + 1}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 5 }}>{st.name}</div>
                  <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{st.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ PRECIOS ══════════ */}
        <section id="precios" style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 56, scrollMarginTop: 80 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 38 }}>
              <h2 className="tc-h2 text-white">{ts.pricingA} <span className="gradient-text">{ts.pricingB}</span></h2>
              <p className="tc-sub text-gray-400">{ts.pricingSub}</p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {sol.pricing.map((p, i) => (
                <motion.div
                  key={p.plan}
                  initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="rounded-2xl flex flex-col"
                  style={{
                    background: p.featured ? `linear-gradient(160deg,${sol.accent}1f,rgba(255,255,255,0.03))` : "rgba(255,255,255,0.035)",
                    border: p.featured ? `1.5px solid ${sol.accent}66` : "1px solid rgba(255,255,255,0.08)",
                    padding: "26px 24px",
                    boxShadow: p.featured ? `0 18px 50px ${sol.accent}22` : "none",
                  }}
                >
                  {p.featured && (
                    <div className="self-start rounded-full mb-3" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", padding: "4px 11px", background: sol.accent, color: "#fff" }}>
                      {ts.mostChosen}
                    </div>
                  )}
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff", marginBottom: 10 }}>{p.plan}</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span style={{ fontSize: 32, fontWeight: 900, color: "#fff", lineHeight: 1 }}>{p.price}</span>
                    <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{p.note}</span>
                  </div>
                  <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "18px 0" }} />
                  <ul className="flex flex-col gap-2.5 flex-1" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex gap-2.5 items-start">
                        <Check size={13} style={{ color: sol.accent, flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA} target="_blank" rel="noopener noreferrer"
                    className="text-center transition-opacity hover:opacity-85"
                    style={{
                      marginTop: 24, padding: "12px 18px", borderRadius: 11, fontSize: 13, fontWeight: 700, textDecoration: "none",
                      background: p.featured ? `linear-gradient(135deg,${sol.accent},${sol.accent2})` : "rgba(255,255,255,0.06)",
                      color: p.featured ? "#fff" : "rgba(255,255,255,0.8)",
                      border: p.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {ts.consult}
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FAQ ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 32 }}>
            <h2 className="tc-h2 text-white">{ts.faqA} <span className="gradient-text">{ts.faqB}</span></h2>
          </motion.div>
          <div className="mx-auto flex flex-col gap-3" style={{ maxWidth: 700 }}>
            {sol.faq.map((f, i) => (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded-xl"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "20px 22px" }}
              >
                <div style={{ fontSize: 14.5, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{f.q}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{f.a}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ CTA FINAL ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 56 }}>
          <motion.div
            {...fadeUp}
            className="rounded-3xl text-center"
            style={{ background: `linear-gradient(135deg,${sol.accent},${sol.accent2})`, padding: "44px 28px", boxShadow: `0 24px 70px ${sol.accent}44` }}
          >
            <h2 style={{ fontSize: "clamp(22px,3.4vw,32px)", fontWeight: 900, color: "#fff", marginBottom: 12, lineHeight: 1.25 }}>
              {ts.finalCtaTitle}
            </h2>
            <p style={{ fontSize: 14.5, color: "rgba(255,255,255,0.85)", maxWidth: 480, margin: "0 auto 26px", lineHeight: 1.7 }}>
              {ts.finalCtaDesc}
            </p>
            <motion.a
              href={WA} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2"
              style={{ background: "#fff", color: "#0a0a1a", fontWeight: 800, fontSize: 14.5, padding: "15px 34px", borderRadius: 13, textDecoration: "none", boxShadow: "0 10px 30px rgba(0,0,0,0.25)" }}
            >
              {ts.finalCtaBtn}
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>
        </section>

        {/* ══════════ NAVEGACIÓN A LAS OTRAS ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 64 }}>
          <div className="tc-header" style={{ marginBottom: 26 }}>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{ts.exploreOthers}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {otras.map((o) => (
              <Link
                key={o.slug}
                href={`/soluciones/${o.slug}`}
                className="rounded-2xl flex items-center justify-between gap-3 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "18px 20px", textDecoration: "none" }}
              >
                <div>
                  <div style={{ fontSize: 9, letterSpacing: "0.12em", fontWeight: 700, color: o.accent, marginBottom: 5 }}>{o.badge}</div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: "#fff" }}>{o.titleHighlight}</div>
                </div>
                <ChevronRight size={17} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
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
