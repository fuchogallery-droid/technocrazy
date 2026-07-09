"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type Product = {
  img: string;
  icon: string;
  name: string;
  subtitle: string;
  desc: string;
  tags: string[];
  price: string | null;
  url: string;
  soon?: boolean;
};

const products: Product[] = [
  {
    img: "/product-img-1.png",
    icon: "🧠",
    name: "ULTROM App",
    subtitle: "App de Escritorio · Windows",
    desc: "Tu memoria portátil para cualquier IA. Crea tu contexto una vez y úsalo en Claude, ChatGPT, Gemini y más. Sin suscripción.",
    tags: ["App Desktop", "IA", "Windows"],
    price: "$17",
    url: "https://payhip.com/b/9xjSz",
  },
  {
    img: "/product-img-2.png",
    icon: "📱",
    name: "Claude Remote",
    subtitle: "PWA · React + Node.js",
    desc: "Accede a Claude Code desde tu celular sin instalar nada. Terminal real, chat integrado y seguridad de 4 capas.",
    tags: ["PWA", "IA", "Terminal"],
    price: "$25",
    url: "https://payhip.com/b/r8Ldk",
  },
  {
    img: "/product-img-3.png",
    icon: "✍️",
    name: "AutoPost",
    subtitle: "Web App · Next.js + IA",
    desc: "Genera y programa publicaciones para redes sociales con IA. 5 tonos, infografías editables en tiempo real.",
    tags: ["Web App", "IA", "Redes"],
    price: null,
    url: "https://autopost-plum-five.vercel.app",
  },
];

export default function UltromSection() {
  return (
    <section
      id="novedades"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#05050f 0%,#0a0a1f 50%,#080818 100%)",
        padding: "clamp(64px,10vw,100px) 0",
      }}
    >
      {/* Glows */}
      <div className="absolute pointer-events-none" style={{ top: "-120px", left: "50%", transform: "translateX(-50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(99,102,241,0.1) 0%, transparent 70%)" }} />
      <div className="absolute pointer-events-none" style={{ bottom: "-80px", right: "-80px", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <div className="tc-wrap relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div
            className="tc-badge"
            style={{
              background: "rgba(99,102,241,0.12)",
              border: "1px solid rgba(99,102,241,0.35)",
              color: "#a5b4fc",
            }}
          >
            🚀 Novedades
          </div>
          <h2 className="tc-h2 text-white">
            Productos{" "}
            <span style={{ background: "linear-gradient(135deg,#818cf8,#c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              TechnoCrazy
            </span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.5)" }}>
            Herramientas digitales construidas por Rafael para llevar tu negocio al siguiente nivel.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(99,102,241,0.18)",
              }}
            >
              {/* Imagen */}
              <div className="relative w-full" style={{ height: 180 }}>
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(5,5,15,0.9) 100%)",
                  }}
                />
                {/* Icono y badge "Próximamente" */}
                <span className="absolute bottom-3 left-4" style={{ fontSize: 26 }}>
                  {p.icon}
                </span>
                {p.soon && (
                  <span
                    className="absolute top-3 right-3"
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      background: "rgba(6,182,212,0.18)",
                      border: "1px solid rgba(6,182,212,0.45)",
                      color: "#67e8f9",
                      borderRadius: 9999,
                      padding: "4px 10px",
                    }}
                  >
                    Próximamente
                  </span>
                )}
                {p.price && (
                  <span
                    className="absolute top-3 right-3"
                    style={{
                      fontSize: 13,
                      fontWeight: 900,
                      background: "rgba(99,91,255,0.85)",
                      color: "#fff",
                      borderRadius: 9999,
                      padding: "4px 12px",
                    }}
                  >
                    {p.price}
                  </span>
                )}
              </div>

              {/* Contenido */}
              <div className="flex flex-col flex-1 p-5 gap-3">
                <div>
                  <h3 className="font-bold text-white" style={{ fontSize: 17, lineHeight: 1.2, marginBottom: 3 }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 11, color: "rgba(165,180,252,0.75)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    {p.subtitle}
                  </p>
                </div>

                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13.5, lineHeight: 1.6, flexGrow: 1 }}>
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        background: "rgba(99,102,241,0.12)",
                        border: "1px solid rgba(99,102,241,0.25)",
                        color: "#a5b4fc",
                        borderRadius: 9999,
                        padding: "3px 10px",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Botón */}
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-center rounded-xl font-semibold"
                  style={{
                    padding: "11px 0",
                    background: p.soon
                      ? "rgba(6,182,212,0.15)"
                      : "linear-gradient(90deg,#635bff,#818cf8)",
                    border: p.soon ? "1px solid rgba(6,182,212,0.4)" : "none",
                    color: p.soon ? "#67e8f9" : "#fff",
                    fontSize: 13.5,
                    textDecoration: "none",
                    display: "block",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {p.soon ? "Avisarme cuando esté listo →" : "Ver detalles →"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
