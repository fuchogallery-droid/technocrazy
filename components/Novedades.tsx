"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Novedades() {
  return (
    <section
      id="novedades"
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg,#07091a 0%,#0b0e28 60%,#07091a 100%)",
        padding: "clamp(64px,10vw,100px) 0",
      }}
    >
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 700, height: 400, borderRadius: "50%",
          background: "radial-gradient(ellipse, rgba(41,121,255,0.07) 0%, transparent 70%)",
        }}
      />

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
              background: "rgba(41,121,255,0.10)",
              border: "1px solid rgba(41,121,255,0.28)",
              color: "#82b1ff",
            }}
          >
            Novedades
          </div>
          <h2 className="tc-h2 text-white">
            Lo nuevo en{" "}
            <span className="gradient-text">TechnoCrazy</span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.45)" }}>
            El primer producto de la plaza digital — ya disponible.
          </p>
        </motion.div>

        {/* Card única — ULTROM */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden mx-auto"
          style={{
            maxWidth: 820,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(41,121,255,0.18)",
          }}
        >
          {/* Imagen */}
          <div className="relative flex-shrink-0" style={{ width: "100%", maxWidth: 360, height: 260 }}>
            <Image
              src="/product-img-1.png"
              alt="ULTROM"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to right, transparent 60%, rgba(7,9,26,0.9) 100%)",
              }}
            />
            <span className="absolute bottom-4 left-5" style={{ fontSize: 32 }}>🧠</span>
          </div>

          {/* Contenido */}
          <div className="flex flex-col justify-center p-7 gap-4">
            <div>
              <span
                style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  background: "rgba(41,121,255,0.12)",
                  border: "1px solid rgba(41,121,255,0.25)",
                  color: "#82b1ff",
                  borderRadius: 9999,
                  padding: "3px 10px",
                  display: "inline-block",
                  marginBottom: 10,
                }}
              >
                App Desktop · IA
              </span>
              <h3 className="font-bold text-white" style={{ fontSize: 24, lineHeight: 1.2 }}>
                ULTROM
              </h3>
            </div>

            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, lineHeight: 1.65 }}>
              Memoria portable para IAs. Exporta tu contexto como ZIP y úsalo en cualquier sesión de Claude, ChatGPT o Gemini. Sin suscripción.
            </p>

            <a
              href="https://ultrom.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start text-center rounded-xl font-semibold transition-all"
              style={{
                padding: "11px 28px",
                background: "linear-gradient(90deg,#2979ff,#7c4dff)",
                color: "#fff",
                fontSize: 14,
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Ver detalles →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
