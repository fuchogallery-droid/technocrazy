import type { Metadata } from "next";
import { ArrowUpRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Enlaces — Rafael Navarro | TechnoCrazy",
  description: "Todos los proyectos y productos de Rafael Navarro en un solo lugar.",
};

const links: { name: string; desc: string; url: string }[] = [
  { name: "TechnoCrazy", desc: "Sitio principal — servicios y productos", url: "https://technocrazy.org" },
  { name: "R.A.D.I.", desc: "App de walkie-talkie — descargar", url: "https://radi.technocrazy.org" },
  { name: "GaleriaX", desc: "Plataforma para creadores de contenido", url: "https://galeriax.vercel.app" },
  { name: "MonitorDealer", desc: "Gestión para concesionarios de autos", url: "https://monitordealer.technocrazy.org" },
  { name: "TuEntrenador", desc: "SaaS para entrenadores personales", url: "https://tuentrenador.technocrazy.org" },
  { name: "AutoPost", desc: "Publicación automática en redes sociales", url: "https://autopost-plum-five.vercel.app" },
  { name: "SaaS Hub", desc: "Plataforma para restaurantes", url: "https://saas-hub-web.vercel.app" },
  { name: "ElGestor", desc: "Gestión de negocio", url: "https://elgestor.vercel.app" },
  { name: "ServiYA", desc: "Servicios a domicilio", url: "https://serviya.vercel.app" },
  { name: "CambioBs", desc: "Tasas de cambio Bolívar", url: "https://cambiobs.vercel.app" },
  { name: "Trading Tools", desc: "Herramientas para traders", url: "https://tradingtools-nine.vercel.app" },
  { name: "Emily Navarro", desc: "Sitio personal", url: "https://emily-navarro.vercel.app" },
];

export default function LinksPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center relative overflow-hidden"
      style={{ background: "#05050f", padding: "56px 20px 40px" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(600px circle at 50% 0%, rgba(41,121,255,0.18), transparent 60%)",
        }}
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
        <p className="text-center" style={{ color: "#8b93a7", fontSize: 14, marginBottom: 36 }}>
          @elpanitafucho · TechnoCrazy
        </p>

        <div className="w-full flex flex-col" style={{ gap: 12 }}>
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between rounded-2xl transition-all hover:-translate-y-0.5"
              style={{
                padding: "16px 20px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                textDecoration: "none",
              }}
            >
              <span className="flex flex-col">
                <span className="font-bold text-white" style={{ fontSize: 15 }}>
                  {link.name}
                </span>
                <span style={{ color: "#8b93a7", fontSize: 13 }}>{link.desc}</span>
              </span>
              <ArrowUpRight size={18} color="#2979ff" style={{ flexShrink: 0, marginLeft: 12 }} />
            </a>
          ))}

          <a
            href="https://wa.me/17794318214"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 font-bold rounded-2xl text-white transition-all hover:-translate-y-0.5"
            style={{
              marginTop: 12,
              padding: "16px 20px",
              background: "linear-gradient(135deg,#2979ff,#7c4dff)",
              boxShadow: "0 12px 40px rgba(41,121,255,0.3)",
              fontSize: 15,
              textDecoration: "none",
            }}
          >
            <MessageCircle size={18} />
            Contáctame por WhatsApp
          </a>
        </div>

        <p className="text-center" style={{ color: "#4b5163", fontSize: 12, marginTop: 40 }}>
          technocrazy.org
        </p>
      </div>
    </main>
  );
}
