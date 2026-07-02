"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <a href="#inicio" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
            <span className="text-white font-black text-sm">TC</span>
          </div>
          <span className="font-black text-xl">
            <span className="text-white">Techno</span>
            <span className="gradient-text">Crazy</span>
          </span>
        </a>

        {/* Main links: Servicios / Productos */}
        <ul className="flex items-center gap-5 sm:gap-8">
          {t.nav.links
            .filter((l) => l.href === "#servicios" || l.href === "#productos")
            .map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-medium text-sm transition-colors relative group whitespace-nowrap" style={{ color: "rgba(255,255,255,0.7)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                >
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px scale-x-0 group-hover:scale-x-100 transition-transform origin-left" style={{ background: "#2979ff" }} />
                </a>
              </li>
            ))}
        </ul>

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
        <div style={{ background: "rgba(4,8,26,0.98)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="px-5 py-3 flex flex-col gap-0">
            {t.nav.links
              .filter((l) => l.href !== "#servicios" && l.href !== "#productos")
              .map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="font-medium py-3.5 border-b transition-colors flex items-center gap-2"
                  style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.06)" }}>
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#2979ff" }} />
                  {l.label}
                </a>
              ))}
          </div>
          <div className="px-5 pb-5 pt-2">
            <a href="https://wa.me/17794318214" target="_blank" rel="noopener noreferrer" className="btn-primary justify-center w-full" style={{ fontSize: 13 }}>
              {t.nav.cta}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
