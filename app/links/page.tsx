"use client";
import { useState } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { QUICK_LINK_CATEGORIES, type QuickLinkCategory } from "@/lib/quickLinks";

export default function LinksPage() {
  const { config } = useSiteConfig();
  const quickLinks = config?.quickLinks ?? [];
  const [open, setOpen] = useState<QuickLinkCategory | null>(null);

  return (
    <main
      className="min-h-screen flex flex-col items-center relative overflow-hidden"
      style={{ background: "#05050f", padding: "56px 20px 48px" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(600px circle at 50% 0%, rgba(212,175,55,0.16), transparent 60%)" }}
      />

      <div className="relative z-10 w-full flex flex-col items-center" style={{ maxWidth: 480 }}>
        <div
          className="rounded-full flex items-center justify-center"
          style={{
            width: 88,
            height: 88,
            background: "linear-gradient(135deg,#2979ff,#7c4dff)",
            boxShadow: "0 12px 40px rgba(41,121,255,0.35)",
            marginBottom: 20,
          }}
        >
          <span className="text-white font-black" style={{ fontSize: 30 }}>
            RN
          </span>
        </div>

        <h1 className="font-black text-white text-center" style={{ fontSize: 22, marginBottom: 4 }}>
          Rafael Navarro
        </h1>
        <p className="text-center" style={{ color: "#8b93a7", fontSize: 14, marginBottom: 32 }}>
          @elpanitafucho · TechnoCrazy
        </p>

        {/* Botón principal — TechnoCrazy, en dorado */}
        <a
          href="https://technocrazy.org"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 font-black rounded-2xl transition-all hover:-translate-y-0.5"
          style={{
            padding: "18px 20px",
            background: "linear-gradient(135deg,#d4af37,#f4e5a3,#d4af37)",
            color: "#1a1400",
            boxShadow: "0 12px 40px rgba(212,175,55,0.35)",
            fontSize: 17,
            textDecoration: "none",
            marginBottom: 16,
          }}
        >
          TechnoCrazy — sitio principal
        </a>

        {/* Persianas por categoría */}
        <div className="w-full flex flex-col" style={{ gap: 12 }}>
          {QUICK_LINK_CATEGORIES.map((cat) => {
            const items = quickLinks.filter((l) => l.category === cat.id && l.visible);
            const isOpen = open === cat.id;
            return (
              <div
                key={cat.id}
                className="w-full rounded-2xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : cat.id)}
                  className="w-full flex items-center justify-between"
                  style={{ padding: "18px 20px", background: "transparent", border: "none", cursor: "pointer" }}
                >
                  <span className="flex items-center gap-3">
                    <cat.Icon size={18} color="#2979ff" />
                    <span className="font-bold text-white" style={{ fontSize: 15 }}>
                      {cat.label}
                    </span>
                    {items.length > 0 && (
                      <span style={{ fontSize: 11, color: "#8b93a7" }}>({items.length})</span>
                    )}
                  </span>
                  <ChevronDown
                    size={18}
                    color="rgba(255,255,255,0.5)"
                    style={{ transition: "transform 250ms ease", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                  />
                </button>

                <div
                  style={{
                    display: "grid",
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transition: "grid-template-rows 280ms ease",
                  }}
                >
                  <div style={{ overflow: "hidden" }}>
                    <div className="flex flex-col" style={{ padding: "0 12px 12px", gap: 6 }}>
                      {items.map((l) => (
                        <a
                          key={l.id}
                          href={l.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full flex items-center justify-between rounded-xl transition-colors"
                          style={{
                            padding: "10px 12px",
                            background: "rgba(255,255,255,0.03)",
                            textDecoration: "none",
                          }}
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <span
                              className="rounded-full overflow-hidden flex items-center justify-center flex-shrink-0"
                              style={{ width: 34, height: 34, background: "rgba(255,255,255,0.08)" }}
                            >
                              {l.imageUrl ? (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img src={l.imageUrl} alt="" className="w-full h-full object-cover" />
                              ) : (
                                <cat.Icon size={15} color="rgba(255,255,255,0.4)" />
                              )}
                            </span>
                            <span className="font-semibold text-white truncate" style={{ fontSize: 14 }}>
                              {l.name}
                            </span>
                          </span>
                          <ArrowUpRight size={16} color="#2979ff" style={{ flexShrink: 0, marginLeft: 8 }} />
                        </a>
                      ))}
                      {items.length === 0 && (
                        <p style={{ color: "#4b5163", fontSize: 12, padding: "4px 12px 8px" }}>
                          Todavía no hay nada aquí.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center" style={{ color: "#4b5163", fontSize: 12, marginTop: 40 }}>
          technocrazy.org
        </p>
      </div>
    </main>
  );
}
