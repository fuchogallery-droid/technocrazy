"use client";
import { useState, useEffect } from "react";
import {
  Menu, X, Home, Layers, Star, User, Route, Calendar, Bot,
  UserCircle, DollarSign, BookOpen, Images, Quote, HelpCircle, Lightbulb, Newspaper,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

const NAV_ICONS: Record<string, LucideIcon> = {
  home: Home,
  layers: Layers,
  star: Star,
  user: User,
  route: Route,
  calendar: Calendar,
  bot: Bot,
  "user-circle": UserCircle,
  "dollar-sign": DollarSign,
  book: BookOpen,
  images: Images,
  quote: Quote,
  "help-circle": HelpCircle,
  lightbulb: Lightbulb,
  newspaper: Newspaper,
};

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { config } = useSiteConfig();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = config?.navLinks?.length
    ? config.navLinks.map((l) => ({ href: l.href, label: lang === "en" ? l.labelEN : l.labelES, icon: l.icon }))
    : t.nav.links;
  const ctaLabel = (lang === "en" ? config?.cta?.en : config?.cta?.es) || t.nav.cta;
  const whatsapp = config?.contact?.whatsapp || "https://wa.me/17794318214";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(4,8,26,0.97)" : "rgba(4,8,26,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(41,121,255,0.15)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="tc-wrap h-16 flex items-center justify-between" style={{ paddingTop: 0, paddingBottom: 0 }}>
        {/* Logo */}
        <a href="/#inicio" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
            <span className="text-white font-black text-sm">TC</span>
          </div>
          <span className="font-black text-xl">
            <span className="text-white">Techno</span>
            <span className="gradient-text">Crazy</span>
          </span>
        </a>

        {/* Right side: lang toggle + hamburger */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "es" ? "en" : "es")}
            className="flex items-center gap-1.5 font-bold text-xs px-3 py-1.5 rounded-full transition-all"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}
          >
            {lang === "es" ? "🇺🇸 EN" : "🇻🇪 ES"}
          </button>
          <button className="text-white p-1" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Dropdown menu with remaining options */}
      {open && (
        <div
          style={{
            background: "linear-gradient(180deg, rgba(4,8,26,0.99) 0%, rgba(8,10,32,0.99) 100%)",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            animation: "navDropIn 0.22s ease-out",
          }}
        >
          <div className="px-5 pt-4 pb-2 grid grid-cols-2 gap-2.5">
            {navLinks
              .map((l, i) => {
                const Icon = NAV_ICONS[l.icon] ?? Home;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex flex-col gap-2 rounded-2xl p-3.5 transition-all group"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      animation: `navItemIn 0.3s ease-out ${i * 0.04}s both`,
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "rgba(41,121,255,0.12)"; e.currentTarget.style.borderColor = "rgba(41,121,255,0.35)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
                    >
                      <Icon size={17} color="#fff" strokeWidth={2.2} />
                    </div>
                    <span className="font-semibold text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                      {l.label}
                    </span>
                  </a>
                );
              })}
          </div>
          <div className="px-5 pb-5 pt-3">
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center w-full" style={{ fontSize: 13 }}>
              {ctaLabel}
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes navDropIn { from { opacity:0; transform:translateY(-8px);} to { opacity:1; transform:translateY(0);} }
        @keyframes navItemIn { from { opacity:0; transform:translateY(6px);} to { opacity:1; transform:translateY(0);} }
      `}</style>
    </nav>
  );
}
