"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Download, ExternalLink, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { useWhatsAppUrl } from "@/lib/useWhatsApp";
import { PagedCarousel } from "@/components/shared/Carousels";
import {
  FALLBACK_PRODUCT_ICON,
  PLATFORM_ICON_MAP,
  PLATFORM_LABELS,
  PRODUCT_ICON_MAP,
  accentOf,
  downloadHref,
  formatFileSize,
  type HomeProduct,
} from "@/lib/homeProducts";

// Sección "Productos" de la página de inicio.
//
// Ya no tiene productos escritos en el código: las tarjetas salen de
// `config/site.homeProducts` en Firestore y se administran en /admin →
// "Productos del inicio" (ver lib/homeProducts.ts). Si no hay ninguno visible,
// la sección entera no se renderiza — así el sitio nunca muestra un bloque
// vacío con solo el título.

type Copy = {
  badge: string;
  h2a: string;
  sub: string;
  download: string;
  view: string;
  soon: string;
  zoom: string;
  ctaTitle: string;
  ctaText: string;
  ctaBtn: string;
};

const COPY: Record<"es" | "en", Copy> = {
  es: {
    badge: "Nuestros Productos",
    h2a: "La Plaza Digital de",
    sub: "Herramientas y aplicaciones pensadas para brindar soluciones ingeniosas. Construidas y probadas, listas para descargar y usar.",
    download: "Descargar",
    view: "Ver producto",
    soon: "Próximamente",
    zoom: "Ver imagen",
    ctaTitle: "¿Y si tuvieras tu propio producto digital?",
    ctaText: "Tu idea + mi código = tu negocio. Trabajemos juntos para construirlo.",
    ctaBtn: "Quiero mi producto",
  },
  en: {
    badge: "Our Products",
    h2a: "The Digital Plaza of",
    sub: "Tools and apps designed to solve real problems in clever ways. Built and tested, ready to download and use.",
    download: "Download",
    view: "View product",
    soon: "Coming soon",
    zoom: "View image",
    ctaTitle: "What if you had your own digital product?",
    ctaText: "Your idea + my code = your business. Let's build it together.",
    ctaBtn: "I want my product",
  },
};

const GRID_GAP = "clamp(8px, 2vw, 20px)";

function ProductCard({
  p,
  onZoom,
  copy,
  lang,
  perView,
}: {
  p: HomeProduct;
  onZoom: (url: string) => void;
  copy: Copy;
  lang: string;
  perView: number;
}) {
  const accent = accentOf(p.accent);
  const Icon = PRODUCT_ICON_MAP[p.icon] ?? FALLBACK_PRODUCT_ICON;
  const size = formatFileSize(p.fileSize);
  const platformKey = p.platform && p.platform !== "none" ? p.platform : "";
  const platform = platformKey ? PLATFORM_LABELS[platformKey] : undefined;
  const PlatformIcon = platformKey ? PLATFORM_ICON_MAP[platformKey] : undefined;

  const canDownload = p.action === "download" && !!p.fileUrl;
  const canLink = p.action === "link" && !!p.linkUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="rounded-2xl overflow-hidden group flex flex-col"
      style={{
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.3)",
        // Hasta 3 productos: los tres se ven a la vez. Con más de 3 (pedido de
        // Rafael, 25/10/2026) quedan 2 columnas que rotan juntas en el carrusel.
        flex: `0 0 calc((100% - ${perView - 1} * ${GRID_GAP}) / ${perView})`,
        minWidth: 0,
      }}
    >
      {/* Portada: foto del producto o bloque con su ícono. La ventana es siempre
          horizontal (16:10) para que todas las tarjetas midan igual, pero la
          foto se ve ENTERA dentro de ella — nunca recortada. Lo que sobra a los
          lados lo rellena la misma foto ampliada y desenfocada, así no quedan
          franjas negras. Encima va la etiqueta de "qué es" (app de teléfono,
          programa de PC…). */}
      <div className="relative">
      {p.imageUrl ? (
        <button
          onClick={() => onZoom(p.imageUrl as string)}
          className="relative overflow-hidden w-full block cursor-zoom-in"
          style={{ aspectRatio: "16 / 10", background: "#0a0c1c" }}
          aria-label={`${copy.zoom}: ${p.name}`}
        >
          <span
            aria-hidden
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `url("${p.imageUrl}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(20px) saturate(1.15)",
              transform: "scale(1.3)",
              opacity: 0.4,
            }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.imageUrl}
            alt={p.name}
            style={{ position: "relative", width: "100%", height: "100%", objectFit: "contain" }}
          />
          <div
            className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.35)" }}
          >
            <span className="text-white font-semibold rounded-full" style={{ fontSize: 12, padding: "6px 14px", background: "rgba(0,0,0,0.45)" }}>
              {copy.zoom}
            </span>
          </div>
        </button>
      ) : (
        <div
          className="w-full flex items-center justify-center"
          style={{ aspectRatio: "16 / 10", background: accent.grad, opacity: 0.9 }}
        >
          <Icon size={44} style={{ color: "#fff", opacity: 0.9 }} />
        </div>
      )}

      </div>

      {/* El padding va en línea, no con la clase `p-5`: el reset universal de
          globals.css (margin y padding en 0) está fuera de las capas de
          Tailwind v4 y gana a cualquier utilidad de espaciado, así que las
          clases de padding y margen no hacen nada en este proyecto. */}
      <div className="flex flex-col flex-1" style={{ padding: "clamp(8px, 2.2vw, 24px)" }}>
        <h3 className="text-white font-black" style={{ fontSize: "clamp(10px, 2.6vw, 18px)", lineHeight: 1.2, wordBreak: "break-word", marginBottom: "clamp(3px, 1vw, 8px)" }}>
          {p.name}
        </h3>

        {/* Etiquetas dentro del texto (no sobre la foto): plataforma y categoría. */}
        {(platform || p.tag) && (
          <div className="flex items-center flex-wrap" style={{ gap: "clamp(3px, 1vw, 8px)", marginBottom: "clamp(3px, 1vw, 8px)" }}>
            {platform && PlatformIcon && (
              <span className="inline-flex items-center font-bold" style={{ gap: 3, fontSize: "clamp(7px, 1.9vw, 11px)", color: "rgba(255,255,255,0.75)" }}>
                <PlatformIcon size={10} /> {lang === "en" ? platform.en : platform.es}
              </span>
            )}
            {p.tag && (
              <span
                className="font-bold rounded-full"
                style={{ fontSize: "clamp(6.5px, 1.8vw, 10px)", padding: "2px clamp(4px, 1.5vw, 10px)", color: accent.solid, background: `${accent.solid}1f`, letterSpacing: "0.02em", maxWidth: "100%", whiteSpace: "nowrap" }}
              >
                {p.tag.toUpperCase()}
              </span>
            )}
          </div>
        )}

        <p style={{ fontSize: "clamp(8px, 2.1vw, 13px)", lineHeight: 1.4, color: "rgba(255,255,255,0.55)", wordBreak: "break-word", marginBottom: "clamp(6px, 1.6vw, 14px)" }}>
          {p.desc}
        </p>

        {(p.badge || size) && (
          <p className="font-bold" style={{ fontSize: "clamp(7.5px, 2vw, 12px)", color: accent.solid, marginBottom: "clamp(6px, 1.6vw, 14px)" }}>
            {[p.badge, size].filter(Boolean).join(" · ")}
          </p>
        )}

        {/* El botón siempre queda pegado al fondo de la tarjeta aunque los textos
            tengan distinto largo, y nunca a menos de 20px del borde. */}
        <div style={{ marginTop: "auto" }}>
          {canDownload && (
            <a
              href={downloadHref(p.fileUrl as string)}
              download={p.fileName || undefined}
              rel="noopener"
              className="w-full flex items-center justify-center gap-2 font-bold text-white transition-transform"
              style={{ minHeight: "clamp(28px, 7vw, 44px)", borderRadius: 10, background: accent.grad, boxShadow: `0 6px 18px ${accent.glow}`, fontSize: "clamp(8.5px, 2.2vw, 14px)", gap: 4 }}
            >
              <Download size={12} /> {copy.download}
            </a>
          )}

          {canLink && (
            <a
              href={p.linkUrl}
              target={p.linkUrl?.startsWith("http") ? "_blank" : undefined}
              rel={p.linkUrl?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="w-full flex items-center justify-center gap-2 font-bold transition-colors"
              style={{
                minHeight: "clamp(28px, 7vw, 44px)",
                borderRadius: 10,
                border: `1px solid ${accent.solid}66`,
                background: `${accent.solid}14`,
                color: accent.solid,
                fontSize: "clamp(8.5px, 2.2vw, 14px)",
              }}
            >
              {copy.view} <ExternalLink size={15} />
            </a>
          )}

          {!canDownload && !canLink && (
            <div
              className="w-full flex items-center justify-center gap-2 font-bold"
              style={{
                minHeight: "clamp(28px, 7vw, 44px)",
                borderRadius: 10,
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.45)",
                fontSize: "clamp(8.5px, 2.2vw, 14px)",
              }}
            >
              <Clock size={15} /> {copy.soon}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Products() {
  const whatsappUrl = useWhatsAppUrl();
  const { lang } = useLanguage();
  const copy = COPY[lang] ?? COPY.es;
  const { config } = useSiteConfig();
  const [lightbox, setLightbox] = useState<string | null>(null);

  const items = (config?.homeProducts ?? []).filter((p) => p && p.visible !== false && p.name);
  if (items.length === 0) return null;
  const perView = items.length > 3 ? 2 : 3;

  return (
    <section id="productos" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(160deg,#08091a 0%,#0d1030 60%,#07091a 100%)" }}>
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.12] blur-3xl" style={{ background: "#7c4dff" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-[0.10] blur-3xl" style={{ background: "#2979ff" }} />

      <div className="tc-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(124,77,255,0.12)", border: "1px solid rgba(124,77,255,0.30)", color: "#b388ff" }}>
            {copy.badge}
          </div>
          <h2 className="tc-h2 text-white">
            {copy.h2a} <span className="gradient-text">TechnoCrazy</span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.5)" }}>
            {copy.sub}
          </p>
        </motion.div>

        {/* Tarjetas — flex centrado para que 1, 2 o 6 productos se vean bien.
            El hueco encoge en el teléfono para que quepan dos por fila. */}
        <PagedCarousel perView={perView} gap={GRID_GAP} label={copy.badge}>
          {items.map((p) => (
            <ProductCard key={p.id || p.name} p={p} onZoom={setLightbox} copy={copy} lang={lang} perView={perView} />
          ))}
        </PagedCarousel>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-white rounded-3xl relative overflow-hidden"
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg,#0a0a1a,#12122a)",
            border: "1px solid rgba(41,121,255,0.15)",
          }}
        >
          {/* Foto Rafael acoplada al tope */}
          <div className="relative overflow-hidden" style={{ height: "clamp(200px, 40vw, 380px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rafael-desk.jpg"
              alt="Rafael Navarro — TechnoCrazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, #0a0a1a 100%)" }} />
          </div>

          {/* Texto y CTA */}
          <div className="relative text-center" style={{ padding: "clamp(24px,4vw,40px) clamp(20px,4vw,40px) clamp(32px,5vw,48px)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center top, rgba(41,121,255,0.08), transparent 60%)" }} />
            <h3 className="font-black mb-3 relative" style={{ fontSize: "clamp(20px,3vw,26px)", textAlign: "center" }}>
              {copy.ctaTitle}
            </h3>
            <p style={{ color: "rgba(156,163,175,1)", fontSize: 14, maxWidth: 420, margin: "0 auto 28px", textAlign: "center", lineHeight: 1.6 }}>
              {copy.ctaText}
            </p>
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex relative"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {copy.ctaBtn}
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Vista ampliada"
                className="w-full rounded-2xl shadow-2xl"
                style={{ maxHeight: "85vh", objectFit: "contain" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
