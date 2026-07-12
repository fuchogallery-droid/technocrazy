"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// Reemplaza con testimonios reales cuando los tengas
const testimonials = [
  {
    name: "Carlos M.",
    role: "Emprendedor Digital",
    text: "Rafael construyó mi tienda online en tiempo récord. No solo entregó lo que pedí, sino que me enseñó a operarla. Mi negocio ahora genera ventas sin que yo tenga que estar encima.",
    stars: 5,
    avatar: "CM",
    color: "#2979ff",
    service: "Página Web",
  },
  {
    name: "Laura P.",
    role: "Diseñadora Freelance",
    text: "Necesitaba un portafolio que me hiciera ver profesional. TechnoCrazy entregó exactamente eso: rápido, elegante, con el agente IA que responde a mis clientes automáticamente.",
    stars: 5,
    avatar: "LP",
    color: "#7c4dff",
    service: "Diseño + IA",
  },
  {
    name: "Diego R.",
    role: "Dueño de Negocio",
    text: "Ahora tengo mi propia app. Rafael automatizó todo el proceso y me acompañó en cada paso. Recibo pedidos 24/7 sin contratar personal adicional. Vale cada centavo.",
    stars: 5,
    avatar: "DR",
    color: "#00bcd4",
    service: "App Móvil",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-py relative overflow-hidden"
      style={{ background: "linear-gradient(160deg,#0a0a1a 0%,#12122a 60%,#0d0d24 100%)" }}
    >
      {/* Soft blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none opacity-[0.08] blur-3xl" style={{ background: "#2979ff" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none opacity-[0.08] blur-3xl" style={{ background: "#7c4dff" }} />

      <div className="tc-wrap relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(41,121,255,0.10)", border: "1px solid rgba(41,121,255,0.28)", color: "#82b1ff" }}>
            Testimonios
          </div>
          <h2 className="tc-h2 text-white">
            Resultados que{" "}
            <span className="gradient-text">Hablan</span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.45)" }}>
            Clientes que confiaron en el proceso y transformaron su negocio digital.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-2xl relative overflow-hidden"
              style={{
                padding: "28px 24px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(14px)",
              }}
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color}66)` }} />

              {/* Quote icon */}
              <div className="mb-4">
                <Quote size={20} style={{ color: t.color, opacity: 0.4 }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={13} fill="#fbbf24" stroke="none" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}aa)` }}
                >
                  {t.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>{t.role}</div>
                </div>
                <span
                  className="text-xs font-semibold rounded-full flex-shrink-0"
                  style={{ padding: "3px 10px", color: t.color, background: `${t.color}15` }}
                >
                  {t.service}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-6 mt-12 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { num: "10+", label: "Proyectos entregados", color: "#2979ff" },
            { num: "5★", label: "Valoración promedio", color: "#fbbf24" },
            { num: "100%", label: "Clientes satisfechos", color: "#00e676" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-black mb-1" style={{ fontSize: "clamp(24px, 4vw, 36px)", color: s.color }}>{s.num}</div>
              <div className="text-xs leading-snug" style={{ color: "rgba(255,255,255,0.45)" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
