import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-screen" style={{ background: "#05050f" }}>
      <div className="tc-wrap" style={{ maxWidth: 780, paddingTop: 48, paddingBottom: 80 }}>
        {/* Logo + volver */}
        <div className="flex items-center justify-between mb-10">
          <Link href="/" className="flex items-center gap-2" style={{ textDecoration: "none" }}>
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
            >
              <span className="text-white font-black text-sm">TC</span>
            </div>
            <span className="font-black text-xl text-white">
              Techno<span className="gradient-text">Crazy</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold"
            style={{ color: "#2979ff", textDecoration: "none" }}
          >
            ← Volver al inicio
          </Link>
        </div>

        <h1 className="font-black text-white mb-2" style={{ fontSize: "clamp(24px,4vw,36px)", lineHeight: 1.15 }}>
          {title}
        </h1>
        <p className="text-gray-500 text-sm mb-10">Última actualización: {updated}</p>

        <article
          className="legal-content text-gray-300"
          style={{ fontSize: 15, lineHeight: 1.8 }}
        >
          {children}
        </article>

        <div
          className="flex flex-wrap gap-x-6 gap-y-2 mt-14 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <Link href="/terminos" className="text-sm text-gray-500 hover:text-white transition-colors">
            Términos y Condiciones
          </Link>
          <Link href="/privacidad" className="text-sm text-gray-500 hover:text-white transition-colors">
            Política de Privacidad
          </Link>
          <Link href="/cookies" className="text-sm text-gray-500 hover:text-white transition-colors">
            Política de Cookies
          </Link>
          <Link href="/contrato" className="text-sm text-gray-500 hover:text-white transition-colors">
            Contrato de Servicios
          </Link>
        </div>
      </div>

      <style>{`
        .legal-content h2 {
          color: #fff;
          font-weight: 800;
          font-size: 19px;
          margin-top: 34px;
          margin-bottom: 12px;
        }
        .legal-content p { margin-bottom: 14px; }
        .legal-content ul { margin: 0 0 14px 20px; list-style: disc; }
        .legal-content li { margin-bottom: 6px; }
        .legal-content strong { color: #fff; }
        .legal-content a { color: #2979ff; }
      `}</style>
    </main>
  );
}
