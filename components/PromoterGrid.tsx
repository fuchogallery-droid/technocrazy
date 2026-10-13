"use client";
import { ArrowUpRight, MessageCircle, ShoppingBag, Package } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { usePromoterStats } from "@/lib/usePromoterStats";
import type { Promoter } from "@/lib/promoters";

// Tarjetas de promotores, compartidas por /promotores y la sección del inicio.
const TEXT = {
  es: { sales: "Ventas", products: "Productos", profile: "Ver perfil profesional" },
  en: { sales: "Sales", products: "Products", profile: "View professional profile" },
};

export default function PromoterGrid({ promoters, max }: { promoters: Promoter[]; max?: number }) {
  const { lang } = useLanguage();
  const tp = TEXT[lang === "es" ? "es" : "en"];
  const { totals } = usePromoterStats();

  const ranked = [...promoters].sort((a, b) => totals(b).sales - totals(a).sales).slice(0, max ?? promoters.length);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {ranked.map((p) => {
        const t = totals(p);
        return (
          <div
            key={p.id}
            className="rounded-2xl flex flex-col items-center text-center"
            style={{ padding: 24, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <div
              className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
              style={{
                width: 104,
                height: 104,
                background: "linear-gradient(135deg,#2979ff,#7c4dff)",
                border: "2px solid rgba(212,175,55,0.6)",
                boxShadow: "0 10px 30px rgba(41,121,255,0.25)",
              }}
            >
              {p.photoUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.photoUrl} alt={p.name} className="w-full h-full object-cover" />
              ) : (
                <span className="text-white font-black" style={{ fontSize: 32 }}>
                  {p.name.trim().slice(0, 1).toUpperCase()}
                </span>
              )}
            </div>

            <p className="text-white font-bold" style={{ fontSize: 18, marginTop: 16 }}>{p.name}</p>
            {p.role && <p style={{ color: "#8b93a7", fontSize: 13, marginTop: 4 }}>{p.role}</p>}
            {p.bio && (
              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  lineHeight: 1.5,
                  marginTop: 12,
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {p.bio}
              </p>
            )}

            <div className="grid grid-cols-2 w-full" style={{ gap: 10, marginTop: 20 }}>
              <Stat Icon={ShoppingBag} value={t.sales} label={tp.sales} />
              <Stat Icon={Package} value={t.products} label={tp.products} />
            </div>

            {p.profileUrl && (
              <a
                href={p.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-bold rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  marginTop: 20,
                  minHeight: 46,
                  padding: "0 16px",
                  fontSize: 14,
                  background: "linear-gradient(135deg,#2979ff,#7c4dff)",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                {tp.profile}
                <ArrowUpRight size={15} />
              </a>
            )}

            {p.whatsapp && (
              <a
                href={p.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 font-bold rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  marginTop: 10,
                  minHeight: 46,
                  padding: "0 16px",
                  fontSize: 14,
                  background: "rgba(74,222,128,0.12)",
                  border: "1px solid rgba(74,222,128,0.35)",
                  color: "#4ade80",
                  textDecoration: "none",
                }}
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            )}
          </div>
        );
      })}
    </div>
  );
}

function Stat({ Icon, value, label }: { Icon: typeof Package; value: number; label: string }) {
  return (
    <div className="rounded-xl" style={{ padding: "12px 8px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
      <Icon size={14} color="#d4af37" style={{ margin: "0 auto" }} />
      <p className="text-white font-black" style={{ fontSize: 22, marginTop: 4 }}>{value}</p>
      <p style={{ color: "#8b93a7", fontSize: 11, marginTop: 2 }}>{label}</p>
    </div>
  );
}
