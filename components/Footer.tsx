"use client";
import Link from "next/link";
import { Globe, Mail, Phone, Lock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

// lucide-react ya no incluye logos de marcas, así que el de Instagram va como
// SVG lineal propio — mismo trazo y grosor que los iconos de lucide.
function InstagramIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Quita emojis de los textos que vienen de i18n/Firestore: la identidad del
// sitio usa iconos SVG lineales, nunca emojis.
const sinEmojis = (s: string) =>
  s.replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{2B00}-\u{2BFF}]/gu, "").trim();

export default function Footer() {
  const { t, lang } = useLanguage();
  const { config } = useSiteConfig();
  const tf = t.footer;
  const contact = {
    instagram: config?.contact?.instagram || "https://instagram.com/igTechnoCrazy",
    website: config?.contact?.website || "https://technocrazy.org",
    email: config?.contact?.email || "Rafaelpixel3004@gmail.com",
    whatsapp: config?.contact?.whatsapp || "https://wa.me/17794318214",
  };
  const ctaLabel = sinEmojis((lang === "en" ? config?.cta?.en : config?.cta?.es) || tf.cta);

  const contactItems = [
    {
      icon: <InstagramIcon size={15} />,
      href: contact.instagram,
      label: contact.instagram.replace(/^https?:\/\/(www\.)?instagram\.com\//i, "@"),
      external: true,
    },
    {
      icon: <Globe size={15} />,
      href: contact.website,
      label: contact.website.replace(/^https?:\/\//i, ""),
      external: false,
    },
    {
      icon: <Mail size={15} />,
      href: `mailto:${contact.email}`,
      label: contact.email,
      external: false,
    },
    {
      icon: <Phone size={15} />,
      href: contact.whatsapp,
      label: contact.whatsapp.replace(/^https?:\/\/(wa\.me\/)?/i, "+"),
      external: true,
    },
  ];

  return (
    <footer
      className="section-dark pb-32 md:pb-12"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 56 }}
    >
      <div className="tc-wrap">
        {/* ── 3 columnas iguales, mismo formato que el footer de Horizon:
             marca · navegación · contacto. Antes la marca ocupaba todo el
             ancho centrada y dejaba un hueco enorme entre las otras dos. ── */}
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 40 }}>

          {/* Columna 1 — Marca */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center" style={{ gap: 8, marginBottom: 12 }}>
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
              >
                <span className="text-white font-black text-sm">TC</span>
              </div>
              <span className="font-black text-white" style={{ fontSize: 20 }}>
                Techno<span className="gradient-text">Crazy</span>
              </span>
            </div>
            <p style={{ fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,0.45)", maxWidth: 260, marginBottom: 8 }}>
              {sinEmojis(tf.tagline)}
            </p>
            <p style={{ fontSize: 12.5, lineHeight: 1.7, color: "rgba(255,255,255,0.32)", maxWidth: 260 }}>
              {sinEmojis(tf.desc)}
            </p>
          </div>

          {/* Columna 2 — Navegación */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold" style={{ fontSize: 13.5, marginBottom: 14 }}>
              {tf.navTitle}
            </h3>
            <ul className="flex flex-col" style={{ gap: 8, listStyle: "none", padding: 0, margin: 0 }}>
              {tf.links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="transition-colors hover:text-white"
                    style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                  >
                    {sinEmojis(l.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — Contacto */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-white font-bold" style={{ fontSize: 13.5, marginBottom: 14 }}>
              {tf.contactTitle}
            </h3>
            <div className="flex flex-col" style={{ gap: 10 }}>
              {contactItems.map((c) => (
                <a
                  key={c.href}
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center transition-colors hover:text-white"
                  style={{ gap: 9, fontSize: 13, color: "rgba(255,255,255,0.5)", textDecoration: "none" }}
                >
                  <span style={{ flexShrink: 0, color: "#2979ff", display: "flex" }}>{c.icon}</span>
                  <span style={{ wordBreak: "break-word" }}>{c.label}</span>
                </a>
              ))}
            </div>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginTop: 20, padding: "11px 24px", fontSize: 13.5, minHeight: 44 }}
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        {/* ── Franja inferior centrada ── */}
        <div style={{ marginTop: 40, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 24 }}>
          {/* Enlaces legales en una sola línea, separados por barra */}
          <div className="flex flex-wrap items-center justify-center" style={{ gap: 10, marginBottom: 14 }}>
            {tf.legal.map((l, i) => (
              <span key={l.href} className="flex items-center" style={{ gap: 10 }}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-white"
                  style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  {l.label}
                </a>
                {i < tf.legal.length - 1 && (
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.15)" }}>|</span>
                )}
              </span>
            ))}
          </div>

          <p className="text-center gradient-text font-semibold" style={{ fontSize: 12, marginBottom: 10 }}>
            {sinEmojis(tf.tagline).replace(/·/g, ".")}
          </p>

          <p className="text-center" style={{ fontSize: 11.5, color: "rgba(255,255,255,0.28)" }}>
            © 2026 TechnoCrazy. {tf.copy}
          </p>

          {/* Acceso discreto al panel — alineado a la derecha, como en Horizon */}
          <div className="flex justify-center md:justify-end" style={{ marginTop: 12 }}>
            <Link
              href="/admin"
              aria-label={tf.adminAccess}
              title={tf.adminAccess}
              className="inline-flex items-center transition-colors hover:text-white/50"
              style={{ gap: 4, fontSize: 10, letterSpacing: "0.08em", color: "rgba(255,255,255,0.18)", textDecoration: "none" }}
            >
              <Lock size={9} />
              ADMIN
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
