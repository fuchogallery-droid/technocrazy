"use client";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { MarqueeCarousel } from "@/components/shared/Carousels";
import { getSiteScreenshotUrl } from "@/lib/screenshot";
import type { WebPageItem } from "@/lib/homeSections";

// Sección "Páginas web que he creado": tarjetas con foto, nombre, descripción y
// botón, en una cinta que corre sola de derecha a izquierda. Sale de
// `config/site.webPages` (administrado en /admin → Páginas web). Sin páginas
// visibles, la sección no se dibuja.

const COPY = {
  es: {
    badge: "Portafolio web",
    h2a: "Páginas que ya están",
    h2b: "en línea",
    sub: "Proyectos reales construidos para negocios y marcas. Toca cualquiera para visitarla.",
    visit: "Visitar",
  },
  en: {
    badge: "Web portfolio",
    h2a: "Websites already",
    h2b: "live",
    sub: "Real projects built for businesses and brands. Tap any of them to visit.",
    visit: "Visit",
  },
};

function PageCard({ p, visit }: { p: WebPageItem; visit: string }) {
  const img = p.imageUrl || getSiteScreenshotUrl(p.url);
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col"
      style={{
        width: "clamp(230px, 62vw, 300px)",
        height: "100%",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
      }}
    >
      <div style={{ aspectRatio: "16 / 10", background: "#0a0c1c", overflow: "hidden" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
      </div>
      <div className="flex flex-col flex-1" style={{ padding: "14px 16px 16px" }}>
        <h3 className="text-white font-black" style={{ fontSize: 16, lineHeight: 1.25, marginBottom: 6 }}>{p.name}</h3>
        <p
          style={{
            fontSize: 13,
            lineHeight: 1.45,
            color: "rgba(255,255,255,0.6)",
            marginBottom: 14,
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {p.desc}
        </p>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center font-bold text-white"
          style={{ marginTop: "auto", minHeight: 40, borderRadius: 10, gap: 6, fontSize: 13, background: "linear-gradient(135deg,#2979ff,#7c4dff)", boxShadow: "0 6px 18px rgba(41,121,255,0.3)" }}
        >
          {p.buttonLabel || visit} <ExternalLink size={14} />
        </a>
      </div>
    </div>
  );
}

export default function WebPages() {
  const { lang } = useLanguage();
  const copy = COPY[lang] ?? COPY.es;
  const { config } = useSiteConfig();
  const items = (config?.webPages ?? []).filter((p) => p && p.visible !== false && p.name && p.url);
  if (items.length === 0) return null;

  return (
    <section id="paginas" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(180deg,#07091a 0%,#0b0e26 100%)" }}>
      <div className="tc-wrap">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(41,121,255,0.12)", border: "1px solid rgba(41,121,255,0.30)", color: "#82b1ff" }}>
            {copy.badge}
          </div>
          <h2 className="tc-h2 text-white">
            {copy.h2a} <span className="gradient-text">{copy.h2b}</span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.5)" }}>{copy.sub}</p>
        </motion.div>
      </div>
      {/* La cinta ocupa todo el ancho de la pantalla, fuera del contenedor. */}
      <MarqueeCarousel label={copy.badge} speed={Math.max(30, items.length * 7)}>
        {items.map((p) => (
          <PageCard key={p.id || p.name} p={p} visit={copy.visit} />
        ))}
      </MarqueeCarousel>
    </section>
  );
}
