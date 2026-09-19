"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { where } from "firebase/firestore";
import { useCollection } from "@/lib/useCollection";
import type { Testimonial } from "@/lib/collections";
import { useLanguage } from "@/contexts/LanguageContext";
import { getSiteScreenshotUrl } from "@/lib/screenshot";

const COLORS = ["#2979ff", "#7c4dff", "#00bcd4", "#00e676", "#fbbf24"];
const STAT_COLORS = ["#2979ff", "#fbbf24", "#00e676"];

function initials(name: string) {
  return name.trim().split(/\s+/).slice(0, 2).map((w) => w[0]?.toUpperCase() || "").join("");
}

export default function Testimonials() {
  const { t } = useLanguage();
  const tt = t.testimonials;
  // Sin `orderBy` en la consulta: combinarlo con `where` exige un índice
  // compuesto en Firestore y sin él la sección quedaba vacía. Se ordena en
  // cliente y se recortan los 6 primeros. Ver lib/useCollection.
  const { items: todos } = useCollection<Testimonial>(
    "testimonials",
    [where("approved", "==", true)],
    "createdAt"
  );
  const items = todos.slice(0, 6);
  const fallbackTestimonials = tt.fallback.map((f) => ({ ...f, rating: 5, photoUrls: [] as string[] }));
  const shown = items.length > 0 ? items : fallbackTestimonials;

  return (
    <section
      id="testimonios"
      className="section-py relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0a0a1a 0%,#12122a 60%,#0d0d24 100%)" }}
    >
      {/* Soft blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-[0.08] blur-3xl" style={{ background: "#2979ff" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-[0.08] blur-3xl" style={{ background: "#7c4dff" }} />

      <div className="tc-wrap relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(41,121,255,0.10)", border: "1px solid rgba(41,121,255,0.28)", color: "#82b1ff" }}>
            {tt.badge}
          </div>
          <h2 className="tc-h2 text-white">
            {tt.title}{" "}
            <span className="gradient-text">{tt.titleHighlight}</span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.45)" }}>
            {tt.sub}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {shown.map((t, i) => {
            const color = COLORS[i % COLORS.length];
            return (
              <motion.div
                key={`${i}-${t.name}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="rounded-2xl relative overflow-hidden"
                style={{
                  padding: "28px 24px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(14px)",
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${color}, ${color}66)` }} />

                {/* Quote icon */}
                <div className="mb-4">
                  <Quote size={20} style={{ color, opacity: 0.4 }} />
                </div>

                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${color}, ${color}aa)` }}
                  >
                    {initials(t.name)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white text-sm">{t.name}</div>
                    {"websiteUrl" in t && t.websiteUrl && (
                      <a
                        href={t.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="truncate block hover:underline"
                        style={{ fontSize: 11, color: "#82b1ff" }}
                      >
                        {t.websiteUrl}
                      </a>
                    )}
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <Star key={si} size={13} fill="#fbbf24" stroke="none" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                  &ldquo;{t.comment}&rdquo;
                </p>

                {/* Photos, if any */}
                {t.photoUrls?.length > 0 && (
                  <div className="flex gap-2 mb-4">
                    {t.photoUrls.slice(0, 3).map((url) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img key={url} src={url} alt="" className="w-10 h-10 rounded-lg object-cover" />
                    ))}
                  </div>
                )}

                {/* Site screenshot, if a website link was provided */}
                {"websiteUrl" in t && t.websiteUrl && (
                  <a
                    href={t.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg overflow-hidden"
                    style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={getSiteScreenshotUrl(t.websiteUrl)}
                      alt={t.name}
                      loading="lazy"
                      className="w-full h-24 object-cover object-top"
                    />
                  </a>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mt-12 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {tt.stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <div className="font-black mb-1" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: STAT_COLORS[i] }}>{s.num}</div>
              <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA to the comments page */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center"
          style={{ marginTop: 40 }}
        >
          <Link href="/testimonios" className="btn-primary" style={{ padding: "7px 16px", fontSize: 11 }}>
            {tt.cta}
            <ArrowRight size={12} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
