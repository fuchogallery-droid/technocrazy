"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTAFinal() {
  const { t } = useLanguage();
  const tc = t.cta;
  return (
    <section className="section-py relative overflow-hidden" style={{ background: "linear-gradient(160deg,#0a0a1a 0%,#12122a 60%,#0d0d24 100%)" }}>
      {/* Background glow */}
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
      <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle,rgba(41,121,255,0.1),transparent 60%)", transform: "translate(-50%,-55%)" }} />
      <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,77,255,0.08),transparent 65%)", transform: "translate(30%,30%)" }} />

      {/* Decorative rings */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{ width: 500, height: 500, border: "1px solid rgba(41,121,255,0.06)" }} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none rounded-full" style={{ width: 300, height: 300, border: "1px solid rgba(41,121,255,0.09)" }} />

      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 opacity-40" style={{ background: "linear-gradient(to bottom,transparent,#2979ff)" }} />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 opacity-15" style={{ width: 560, height: 1, background: "linear-gradient(90deg,transparent,#2979ff 30%,#7c4dff 70%,transparent)" }} />

      <div className="tc-wrap relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
          style={{ gap: 0 }}
        >
          {/* Badge */}
          <div className="tc-badge" style={{ background: "rgba(41,121,255,0.12)", border: "1px solid rgba(41,121,255,0.25)", color: "#00e5ff", marginBottom: 28 }}>
            {tc.badge}
          </div>

          <h2 className="font-black text-white" style={{ fontSize: "clamp(28px,4.5vw,52px)", lineHeight: 1.15, marginBottom: 24 }}>
            {tc.title}
            <br />
            {tc.titleBreak} <span className="gradient-text">{tc.titleHighlight}</span>
          </h2>

          <p className="text-gray-300 leading-relaxed" style={{ fontSize: 17, maxWidth: 560, marginBottom: 40, textAlign: "center" }}>
            {tc.sub}{" "}
            <span className="text-white font-semibold">{tc.subHighlight}</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ marginBottom: 40 }}>
            <motion.a
              href="https://wa.me/17794318214"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full"
              style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)", color: "white", padding: "15px 36px", fontSize: 15, boxShadow: "0 12px 40px rgba(41,121,255,0.4)", transition: "all 0.3s" }}
              whileHover={{ scale: 1.04, boxShadow: "0 16px 52px rgba(41,121,255,0.55)" }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle size={18} />
              {tc.btnPrimary} <ArrowRight size={16} />
            </motion.a>
            <motion.a
              href="mailto:Rafaelpixel3004@gmail.com"
              className="inline-flex items-center justify-center gap-2 font-bold rounded-full"
              style={{ color: "white", padding: "14px 36px", fontSize: 15, border: "2px solid rgba(255,255,255,0.2)", transition: "all 0.3s" }}
              whileHover={{ scale: 1.04, borderColor: "rgba(255,255,255,0.45)", backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.97 }}
            >
              <Mail size={18} />
              {tc.btnSecondary}
            </motion.a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            {tc.trust.map((item) => (
              <span key={item} className="flex items-center justify-center gap-2">
                <span style={{ color: "#00e676", fontSize: 14 }}>✓</span> {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
