"use client";
import { Users } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import PromoterGrid from "@/components/PromoterGrid";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const TEXT = {
  es: {
    title: "Promotores",
    subtitle: "TechnoCrazy ya no es de una sola persona: es una comunidad. Ellos promueven nuestros servicios y productos.",
    empty: "Pronto verás aquí a los promotores de la comunidad.",
  },
  en: {
    title: "Promoters",
    subtitle: "TechnoCrazy is no longer one person: it is a community. These are the people promoting our services and products.",
    empty: "Community promoters will appear here soon.",
  },
};

export default function PromotoresPage() {
  const { lang } = useLanguage();
  const tp = TEXT[lang === "es" ? "es" : "en"];
  const { config, loading } = useSiteConfig();
  const promoters = (config?.promoters ?? []).filter((p) => p.visible);

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {!loading && promoters.length === 0 && (
        <div className="flex flex-col items-center text-center" style={{ padding: "48px 0", gap: 12 }}>
          <Users size={32} color="rgba(255,255,255,0.3)" />
          <p className="text-gray-500 text-sm">{tp.empty}</p>
        </div>
      )}
      <div className="mb-16">
        <PromoterGrid promoters={promoters} />
      </div>
    </PageShell>
  );
}
