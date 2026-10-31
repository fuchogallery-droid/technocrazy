"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useCollection } from "@/lib/useCollection";
import { PagedCarousel } from "@/components/shared/Carousels";
import type { GalleryImage } from "@/lib/collections";

// Carrusel de fotos y videos en el inicio. Lee la misma colección que /galeria
// (`galleryImages`, lectura pública), que se carga desde /admin → Galería y videos.

const COPY = {
  es: { badge: "Galería", h2a: "Fotos y videos de", sub: "Una muestra de lo que construimos. Desliza para ver más.", more: "Ver toda la galería", close: "Cerrar" },
  en: { badge: "Gallery", h2a: "Photos and videos by", sub: "A sample of what we build. Swipe to see more.", more: "See the full gallery", close: "Close" },
};

const GAP = "clamp(8px, 2vw, 18px)";

export function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return m ? m[1] : null;
}

function usePerView() {
  const [n, setN] = useState(2);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 900px)");
    const set = () => setN(mq.matches ? 3 : 2);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);
  return n;
}

export default function HomeGallery() {
  const { lang } = useLanguage();
  const copy = COPY[lang] ?? COPY.es;
  const { items } = useCollection<GalleryImage>("galleryImages", []);
  const perView = usePerView();
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  const visible = items.filter((g) => g.url && !g.hideHome).slice(0, 24);
  if (visible.length === 0) return null;

  return (
    <section id="galeria-inicio" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(160deg,#08091a 0%,#0d1030 60%,#07091a 100%)" }}>
      <div className="tc-wrap">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="tc-header">
          <div className="tc-badge" style={{ background: "rgba(0,188,212,0.12)", border: "1px solid rgba(0,188,212,0.30)", color: "#80deea" }}>{copy.badge}</div>
          <h2 className="tc-h2 text-white">{copy.h2a} <span className="gradient-text">TechnoCrazy</span></h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.5)" }}>{copy.sub}</p>
        </motion.div>

        <PagedCarousel perView={perView} gap={GAP} label={copy.badge}>
          {visible.map((g) => {
            const yt = g.kind === "video" ? youtubeId(g.url) : null;
            return (
              <div
                key={g.id}
                style={{ flex: `0 0 calc((100% - ${perView - 1} * ${GAP}) / ${perView})`, minWidth: 0 }}
              >
                <div
                  className="rounded-2xl overflow-hidden relative"
                  style={{ aspectRatio: "4 / 3", background: "#0a0c1c", border: "1px solid rgba(255,255,255,0.09)" }}
                >
                  {g.kind === "video" ? (
                    yt ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${yt}`}
                        title={g.title || "Video"}
                        loading="lazy"
                        allow="accelerometer; encrypted-media; picture-in-picture"
                        allowFullScreen
                        style={{ width: "100%", height: "100%", border: 0 }}
                      />
                    ) : (
                      <video src={g.url} controls playsInline preload="metadata" style={{ width: "100%", height: "100%", objectFit: "cover", background: "#000" }} />
                    )
                  ) : (
                    <button type="button" onClick={() => setLightbox(g)} aria-label={g.title || "Ver foto"} style={{ display: "block", width: "100%", height: "100%", cursor: "zoom-in" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={g.url} alt={g.title || ""} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
                    </button>
                  )}
                  {g.kind === "video" && !yt && (
                    <span className="absolute flex items-center gap-1 text-white font-bold rounded-full" style={{ top: 8, left: 8, fontSize: 11, padding: "3px 9px", background: "rgba(0,0,0,0.55)", pointerEvents: "none" }}>
                      <Play size={10} /> Video
                    </span>
                  )}
                </div>
                {g.title && <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 8, lineHeight: 1.35 }}>{g.title}</p>}
              </div>
            );
          })}
        </PagedCarousel>

        <div className="flex justify-center" style={{ marginTop: 28 }}>
          <Link href="/galeria" className="font-bold" style={{ fontSize: 13, color: "#80deea", padding: "10px 18px", border: "1px solid rgba(0,188,212,0.35)", borderRadius: 999 }}>
            {copy.more}
          </Link>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.88)", padding: 16 }}
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox.url} alt={lightbox.title || ""} style={{ maxWidth: "100%", maxHeight: "88vh", objectFit: "contain", borderRadius: 14 }} onClick={(e) => e.stopPropagation()} />
          <button
            type="button"
            onClick={() => setLightbox(null)}
            aria-label={copy.close}
            className="absolute flex items-center justify-center text-white"
            style={{ top: 14, right: 14, width: 40, height: 40, borderRadius: 999, background: "rgba(0,0,0,0.6)" }}
          >
            <X size={18} />
          </button>
        </div>
      )}
    </section>
  );
}
