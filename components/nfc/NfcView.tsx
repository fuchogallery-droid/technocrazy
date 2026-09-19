"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft, ArrowRight, Check, Nfc,
  Phone, Contact, MapPin, UtensilsCrossed, CalendarCheck, KeyRound, Bell, CreditCard,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { FORMAT_MEDIA } from "@/components/nfc/formatMedia";

const WA = "https://wa.me/17794318214";
const ACCENT = "#f59e0b";
const ACCENT2 = "#fb923c";
const gradientTextStyle = {
  background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`,
  WebkitBackgroundClip: "text" as const,
  WebkitTextFillColor: "transparent" as const,
  backgroundClip: "text" as const,
};

const USE_ICONS: Record<string, React.ReactNode> = {
  phone: <Phone size={16} />,
  contact: <Contact size={16} />,
  "map-pin": <MapPin size={16} />,
  "utensils-crossed": <UtensilsCrossed size={16} />,
  "calendar-check": <CalendarCheck size={16} />,
  "key-round": <KeyRound size={16} />,
  bell: <Bell size={16} />,
  "credit-card": <CreditCard size={16} />,
};

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function NfcView() {
  const { t } = useLanguage();
  const ts = t.nfc;

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64, background: "linear-gradient(160deg,#04081a 0%,#080e26 50%,#04081a 100%)" }}>
        {/* Glows de fondo */}
        <div className="absolute inset-x-0 pointer-events-none overflow-hidden" style={{ height: 700 }}>
          <div className="absolute rounded-full blur-3xl" style={{ width: 720, height: 720, top: -180, left: "50%", transform: "translateX(-50%)", background: `radial-gradient(circle,${ACCENT}1a,transparent 70%)` }} />
        </div>

        {/* ══════════ HERO ══════════ */}
        <section className="tc-wrap relative" style={{ paddingTop: 40, paddingBottom: 56 }}>
          <Link
            href="/#servicios"
            className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-white"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} />
            {ts.back}
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
            <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }} className="flex-1 min-w-0">
              <div
                className="inline-flex items-center gap-2 rounded-full mb-5"
                style={{ padding: "6px 15px", fontSize: 10, fontWeight: 800, letterSpacing: "0.14em", background: `${ACCENT}1c`, border: `1px solid ${ACCENT}44`, color: "rgba(255,255,255,0.72)" }}
              >
                <span style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT, display: "inline-block" }} />
                {ts.badge}
              </div>

              <h1 style={{ fontWeight: 900, lineHeight: 1.12, letterSpacing: "-0.02em", marginBottom: 18 }}>
                <span className="block" style={{ fontSize: "clamp(34px,5.5vw,56px)", color: "rgba(255,255,255,0.9)" }}>
                  {ts.titleA}{" "}
                  <span style={{ background: `linear-gradient(135deg,${ACCENT} 25%,${ACCENT2} 100%)`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {ts.titleB}
                  </span>
                </span>
              </h1>

              <p style={{ fontSize: "clamp(14px,1.5vw,17px)", color: "rgba(255,255,255,0.58)", lineHeight: 1.75, maxWidth: 520, marginBottom: 28 }}>
                {ts.tagline}
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.a
                  href={WA} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2"
                  style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, color: "#fff", fontWeight: 700, fontSize: 14, padding: "14px 28px", borderRadius: 13, boxShadow: `0 14px 40px ${ACCENT}55`, textDecoration: "none" }}
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

            {/* Mockup: tarjeta + ondas NFC */}
            <motion.div
              initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65, delay: 0.12 }}
              className="w-full lg:w-[380px] lg:flex-none flex items-center justify-center"
              style={{ minHeight: 320 }}
            >
              <div className="relative flex items-center justify-center" style={{ width: 260, height: 260 }}>
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="absolute rounded-full"
                    style={{ border: `1.5px solid ${ACCENT}88`, width: 90, height: 90 }}
                    animate={{ width: [90, 260], height: [90, 260], opacity: [0.6, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.8 }}
                  />
                ))}
                <div
                  className="relative flex flex-col items-center justify-center rounded-2xl"
                  style={{ width: 128, height: 128, background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, boxShadow: `0 20px 60px ${ACCENT}55` }}
                >
                  <Nfc size={44} color="#fff" strokeWidth={1.6} />
                  <span style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.12em", color: "rgba(255,255,255,0.85)", marginTop: 6 }}>{ts.tapLabel}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ CÓMO FUNCIONA ══════════ */}
        <section className="tc-wrap" style={{ paddingBottom: 20 }}>
          <motion.div {...fadeUp} className="mx-auto" style={{ maxWidth: 780 }}>
            <h2 className="tc-h2 text-white" style={{ marginBottom: 24 }}>
              {ts.howWorksA} <span style={gradientTextStyle}>{ts.howWorksB}</span>
            </h2>
            {ts.intro.map((p, i) => (
              <p key={i} style={{ fontSize: 15.5, lineHeight: 1.85, color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>
                {p}
              </p>
            ))}
            <blockquote
              style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 22, marginTop: 30, fontSize: 18, fontWeight: 700, fontStyle: "italic", color: "rgba(255,255,255,0.88)", lineHeight: 1.6 }}
            >
              &ldquo;{ts.quote}&rdquo;
            </blockquote>
          </motion.div>
        </section>

        {/* ══════════ USOS ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 40, paddingBottom: 56 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{ts.usesA} <span style={gradientTextStyle}>{ts.usesB}</span></h2>
            <p className="tc-sub text-gray-400">{ts.usesSub}</p>
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ts.uses.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "20px 18px 22px" }}
              >
                <div className="flex items-center justify-center rounded-lg mb-3" style={{ width: 32, height: 32, background: `${ACCENT}22`, border: `1px solid ${ACCENT}3a`, color: ACCENT }}>
                  {USE_ICONS[u.icon]}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.4 }}>{u.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.48)", lineHeight: 1.65 }}>{u.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ══════════ CÓMO SE CONECTA ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 56 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 38 }}>
              <h2 className="tc-h2 text-white">{ts.connectA} <span style={gradientTextStyle}>{ts.connectB}</span></h2>
              <p className="tc-sub text-gray-400">{ts.connectSub}</p>
            </motion.div>

            <div className="mx-auto flex flex-col gap-1" style={{ maxWidth: 760 }}>
              {ts.steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 sm:gap-5"
                >
                  <div className="flex flex-col items-center" style={{ flexShrink: 0 }}>
                    <div
                      className="flex items-center justify-center rounded-xl"
                      style={{ width: 40, height: 40, fontSize: 16, fontWeight: 900, color: "#fff", background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, boxShadow: `0 8px 22px ${ACCENT}44` }}
                    >
                      {i + 1}
                    </div>
                    {i < ts.steps.length - 1 && (
                      <div style={{ width: 2, flex: 1, minHeight: 34, background: `linear-gradient(180deg,${ACCENT}66,${ACCENT}11)`, marginTop: 6, marginBottom: 6 }} />
                    )}
                  </div>
                  <div style={{ paddingBottom: i < ts.steps.length - 1 ? 26 : 0, paddingTop: 6 }}>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 7 }}>{s.title}</div>
                    <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>{s.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════ FORMATOS ══════════ */}
        <section id="formatos" className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 56, scrollMarginTop: 80 }}>
          <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 34 }}>
            <h2 className="tc-h2 text-white">{ts.formatsA} <span style={gradientTextStyle}>{ts.formatsB}</span></h2>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ts.formats.map((f, i) => {
              const media = FORMAT_MEDIA[f.slug];
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="relative" style={{ aspectRatio: "16/10", background: `linear-gradient(160deg,${ACCENT}22,rgba(255,255,255,0.02))` }}>
                    <Image src={media.src} alt={f.title} fill sizes="(max-width: 640px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                    <div
                      className="absolute top-3 left-3 flex items-center justify-center rounded-lg"
                      style={{ width: 28, height: 28, fontSize: 12, fontWeight: 900, color: "#fff", background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, boxShadow: `0 6px 16px ${ACCENT}55` }}
                    >
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col" style={{ padding: "18px 20px 20px" }}>
                    <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 5 }}>{f.title}</div>
                    <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.7 }}>{f.desc}</div>
                    <Link
                      href={`/nfc/formatos/${f.slug}`}
                      className="inline-flex items-center gap-1.5 self-start transition-transform hover:-translate-y-0.5"
                      style={{
                        fontSize: 12, fontWeight: 800, color: "#fff",
                        background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`,
                        borderRadius: 999, padding: "10px 18px",
                        marginTop: 16, boxShadow: `0 8px 22px ${ACCENT}55`, textDecoration: "none",
                      }}
                    >
                      {ts.formatsDetailsBtn}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* ══════════ PRECIOS ══════════ */}
        <section id="precios" style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 56, paddingBottom: 40, scrollMarginTop: 80 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="tc-header" style={{ marginBottom: 38 }}>
              <h2 className="tc-h2 text-white">{ts.pricingA} <span style={gradientTextStyle}>{ts.pricingB}</span></h2>
              <p className="tc-sub text-gray-400">{ts.pricingSub}</p>
            </motion.div>

            <div className="grid gap-4 lg:grid-cols-3">
              {ts.pricing.map((p, i) => (
                <motion.div
                  key={p.plan}
                  initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.09 }}
                  className="rounded-2xl flex flex-col"
                  style={{
                    background: p.featured ? `linear-gradient(160deg,${ACCENT}1f,rgba(255,255,255,0.03))` : "rgba(255,255,255,0.035)",
                    border: p.featured ? `1.5px solid ${ACCENT}66` : "1px solid rgba(255,255,255,0.08)",
                    padding: "26px 24px",
                    boxShadow: p.featured ? `0 18px 50px ${ACCENT}22` : "none",
                  }}
                >
                  {p.featured && (
                    <div className="self-start rounded-full mb-3" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", padding: "4px 11px", background: ACCENT, color: "#fff" }}>
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
                        <Check size={13} style={{ color: ACCENT, flexShrink: 0, marginTop: 3 }} />
                        <span style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA} target="_blank" rel="noopener noreferrer"
                    className="text-center transition-opacity hover:opacity-85"
                    style={{
                      marginTop: 24, padding: "12px 18px", borderRadius: 11, fontSize: 13, fontWeight: 700, textDecoration: "none",
                      background: p.featured ? `linear-gradient(135deg,${ACCENT},${ACCENT2})` : "rgba(255,255,255,0.06)",
                      color: p.featured ? "#fff" : "rgba(255,255,255,0.8)",
                      border: p.featured ? "none" : "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {ts.consult}
                  </a>
                </motion.div>
              ))}
            </div>

            <p className="mx-auto text-center" style={{ maxWidth: 560, fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.7, marginTop: 24 }}>
              {ts.pricingNote}
            </p>
          </div>
        </section>

        {/* ══════════ CTA FINAL ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 56, paddingBottom: 64 }}>
          <motion.div
            {...fadeUp}
            className="rounded-3xl text-center"
            style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, padding: "44px 28px", boxShadow: `0 24px 70px ${ACCENT}44` }}
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
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
