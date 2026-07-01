"use client";
import { motion } from "framer-motion";
import { BookOpen, Download, Monitor, ShoppingCart, Star, ArrowRight, CheckCircle2 } from "lucide-react";

const items = [
  {
    id: "curso",
    badge: "Curso Interactivo",
    badgeColor: "#7c4dff",
    badgeBg: "rgba(124,77,255,0.1)",
    icon: <BookOpen size={22} />,
    grad: "linear-gradient(135deg,#7c4dff,#2979ff)",
    glow: "rgba(124,77,255,0.25)",
    name: "Curso IA + Redes Sociales",
    tagline: "De cero a publicar contenido con IA en menos de una semana",
    price: 37,
    currency: "USD",
    features: [
      "11 módulos paso a paso",
      "14 prompts listos para usar",
      "Plantillas de contenido incluidas",
      "Acceso de por vida",
      "Actualizado 2026",
    ],
    waMsg: "Hola Rafael, quiero el Curso IA + Redes Sociales ($37). ¿Cómo lo obtengo?",
    featured: true,
  },
  {
    id: "ultrom",
    badge: "Protocolo Digital",
    badgeColor: "#e879f9",
    badgeBg: "rgba(232,121,249,0.1)",
    icon: <Download size={22} />,
    grad: "linear-gradient(135deg,#e879f9,#7c4dff)",
    glow: "rgba(232,121,249,0.25)",
    name: "ULTROM Protocol",
    tagline: "Tu identidad digital portable — para cualquier IA, en cualquier momento",
    price: 17,
    currency: "USD",
    features: [
      "Archivo .md universal para IAs",
      "Compatible con Claude, GPT, Gemini",
      "Memoria personalizable",
      "Actualizaciones gratuitas",
      "Manual de uso incluido",
    ],
    waMsg: "Hola Rafael, quiero el Protocolo ULTROM ($17). ¿Cómo lo obtengo?",
    featured: false,
  },
  {
    id: "hkpc",
    badge: "App Windows",
    badgeColor: "#ff9800",
    badgeBg: "rgba(255,152,0,0.1)",
    icon: <Monitor size={22} />,
    grad: "linear-gradient(135deg,#ff9800,#ff6b35)",
    glow: "rgba(255,152,0,0.25)",
    name: "HK-PC Smart Organizer",
    tagline: "Organiza tu PC automáticamente en segundos — instala y listo",
    price: 14.99,
    currency: "USD",
    features: [
      "Instalador EXE nativo Windows",
      "Organización automática por tipo",
      "Un clic — carpetas limpias",
      "Sin suscripción mensual",
      "Soporte vía WhatsApp",
    ],
    waMsg: "Hola Rafael, quiero HK-PC Smart Organizer ($14.99). ¿Cómo lo obtengo?",
    featured: false,
  },
];

export default function Learning() {
  return (
    <section
      id="tienda"
      style={{
        background: "linear-gradient(180deg, #f9fafb 0%, #ffffff 100%)",
        padding: "clamp(60px,8vw,100px) 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* blobs */}
      <div style={{ position: "absolute", top: 0, right: 0, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,77,255,0.04), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: 0, left: 0, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(41,121,255,0.04), transparent)", pointerEvents: "none" }} />

      <div className="tc-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: 52 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, borderRadius: 9999, padding: "5px 14px", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 14, background: "rgba(41,121,255,0.07)", border: "1px solid rgba(41,121,255,0.2)", color: "#2979ff" }}>
            🛒 Tienda Digital
          </div>
          <h2 style={{ fontSize: "clamp(26px,4vw,42px)", fontWeight: 900, color: "#111", lineHeight: 1.1, marginBottom: 14 }}>
            Productos que puedes{" "}
            <span className="gradient-text">comprar hoy</span>
          </h2>
          <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: "#6b7280", maxWidth: 520, margin: "0 auto" }}>
            Recursos digitales listos para usar. Pago único, sin suscripciones, entrega inmediata.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              style={{
                background: "white",
                borderRadius: 20,
                overflow: "hidden",
                border: item.featured ? "2px solid rgba(124,77,255,0.35)" : "1px solid #f0f0f0",
                boxShadow: item.featured
                  ? "0 8px 40px rgba(124,77,255,0.12)"
                  : "0 2px 20px rgba(0,0,0,0.05)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Featured badge */}
              {item.featured && (
                <div style={{ position: "absolute", top: 8, right: 8, background: "linear-gradient(135deg,#7c4dff,#2979ff)", color: "white", fontSize: 9, fontWeight: 700, borderRadius: 9999, padding: "2px 7px", display: "flex", alignItems: "center", gap: 3, zIndex: 1 }}>
                  <Star size={8} fill="white" /> MÁS POPULAR
                </div>
              )}

              {/* Gradient stripe */}
              <div style={{ height: 5, background: item.grad }} />

              <div style={{ padding: "12px 12px 16px", flex: 1, display: "flex", flexDirection: "column" }}>
                {/* Icon + badge */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: item.grad, boxShadow: `0 3px 10px ${item.glow}`, display: "flex", alignItems: "center", justifyContent: "center", color: "white", flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: 9, fontWeight: 700, borderRadius: 9999, padding: "2px 8px", background: item.badgeBg, color: item.badgeColor, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {item.badge}
                  </span>
                </div>

                {/* Name + tagline */}
                <h3 style={{ fontSize: 14, fontWeight: 800, color: "#111", marginBottom: 4, lineHeight: 1.25 }}>{item.name}</h3>
                <p style={{ fontSize: 11.5, color: "#6b7280", lineHeight: 1.5, marginBottom: 10 }}>{item.tagline}</p>

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 12px", display: "flex", flexDirection: "column", gap: 5, flex: 1 }}>
                  {item.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#374151" }}>
                      <CheckCircle2 size={12} style={{ color: item.badgeColor, flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div style={{ borderTop: "1px solid #f3f4f6", paddingTop: 12, marginTop: "auto" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 3, marginBottom: 8 }}>
                    <span style={{ fontSize: 10, color: "#9ca3af", fontWeight: 500 }}>USD</span>
                    <span style={{ fontSize: 24, fontWeight: 900, color: "#111", lineHeight: 1 }}>${item.price}</span>
                    <span style={{ fontSize: 10, color: "#9ca3af" }}>pago único</span>
                  </div>
                  <motion.a
                    href={`https://wa.me/17794318214?text=${encodeURIComponent(item.waMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      width: "100%",
                      padding: "9px 0",
                      borderRadius: 10,
                      background: item.grad,
                      color: "white",
                      fontWeight: 700,
                      fontSize: 12,
                      textDecoration: "none",
                      boxShadow: `0 3px 12px ${item.glow}`,
                    }}
                  >
                    <ShoppingCart size={13} />
                    Comprar
                    <ArrowRight size={12} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", fontSize: 12, color: "#9ca3af", marginTop: 28 }}
        >
          💬 Pago fácil vía WhatsApp · Entrega inmediata · Soporte directo con Rafael
        </motion.p>
      </div>
    </section>
  );
}
