"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import PromoterGrid from "@/components/PromoterGrid";

// Sección "Promotores" de la página de inicio. Como Products, no se dibuja si
// no hay promotores visibles cargados en /admin, para no mostrar un bloque vacío.
const HOME_MAX = 6;

const COPY = {
  es: {
    badge: "Nuestra Comunidad",
    h2a: "Promotores de",
    sub: "TechnoCrazy ya no es de una sola persona: es una comunidad. Ellos promueven nuestros servicios y productos.",
    all: "Ver todos los promotores",
  },
  en: {
    badge: "Our Community",
    h2a: "Promoters of",
    sub: "TechnoCrazy is no longer one person: it is a community. These are the people promoting our services and products.",
    all: "See all promoters",
  },
};

export default function Promoters() {
  const { lang } = useLanguage();
  const copy = COPY[lang === "es" ? "es" : "en"];
  const { config } = useSiteConfig();
  const promoters = (config?.promoters ?? []).filter((p) => p.visible);

  if (promoters.length === 0) return null;

  return (
    <section id="promotores" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(160deg,#07091a 0%,#0b0e28 60%,#08091a 100%)" }}>
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.10] blur-3xl" style={{ background: "#2979ff" }} />
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full pointer-events-none opacity-[0.08] blur-3xl" style={{ background: "#d4af37" }} />

      <div className="tc-wrap relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.30)", color: "#f4e5a3" }}>
            {copy.badge}
          </div>
          <h2 className="tc-h2 text-white">
            {copy.h2a} <span className="gradient-text">TechnoCrazy</span>
          </h2>
          <p className="tc-sub text-gray-400">{copy.sub}</p>
        </motion.div>

        <PromoterGrid promoters={promoters} max={HOME_MAX} />

        {promoters.length > HOME_MAX && (
          <div className="flex justify-center" style={{ marginTop: 32 }}>
            <Link
              href="/promotores"
              className="flex items-center gap-2 font-bold rounded-xl"
              style={{ minHeight: 46, padding: "0 20px", fontSize: 14, color: "#fff", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}
            >
              {copy.all}
              <ArrowRight size={15} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
