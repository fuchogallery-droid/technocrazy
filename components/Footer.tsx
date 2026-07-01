"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const tf = t.footer;
  return (
    <footer className="section-dark pb-32 md:pb-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 56 }}>
      <div className="tc-wrap">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-10 mb-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
                <span className="text-white font-black text-sm">TC</span>
              </div>
              <span className="font-black text-xl text-white">Techno<span className="gradient-text">Crazy</span></span>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed text-center md:text-left" style={{ maxWidth: 200 }}>
              {tf.tagline}
            </p>
            <p className="text-gray-600 text-xs leading-relaxed text-center md:text-left" style={{ maxWidth: 220 }}>
              {tf.desc}
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="text-white font-bold text-sm mb-3">{tf.navTitle}</div>
            {tf.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-gray-500 hover:text-white transition-colors text-sm py-0.5"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="text-white font-bold text-sm mb-1">{tf.contactTitle}</div>
            <a href="https://instagram.com/igTechnoCrazy" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              📸 igTechnoCrazy
            </a>
            <a href="https://technocrazy.org"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              🌐 technocrazy.org
            </a>
            <a href="mailto:Rafaelpixel3004@gmail.com"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              ✉️ Rafaelpixel3004@gmail.com
            </a>
            <a href="https://wa.me/17794318214" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
              📱 +1 779 431 8214
            </a>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/17794318214"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm mt-2"
              style={{ padding: "10px 20px" }}
            >
              {tf.cta}
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", fontSize: 12, color: "rgba(255,255,255,0.25)" }}
        >
          <span>© 2026 TechnoCrazy. {tf.copy}</span>
          <span className="gradient-text font-semibold" style={{ fontSize: 12 }}>
            {tf.tagline.replace(/·/g, ".")}
          </span>
        </div>

      </div>
    </footer>
  );
}
