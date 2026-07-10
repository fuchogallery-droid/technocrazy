"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Zap, ShoppingBag, Image as ImageIcon, DollarSign, Monitor, BookOpen, X } from "lucide-react";
import { useState } from "react";

export const products = [
  { icon: <Zap size={20} />, name: "AutoPost", desc: "Crea. Conecta. Publica. Programa. Todo tu contenido en un solo lugar con IA.", tag: "Marketing IA", tagColor: "#7c3aed", url: "https://autopost-plum-five.vercel.app", color: "linear-gradient(135deg,#7c3aed,#a855f7)", glow: "rgba(124,58,237,0.3)", image: "/product-img-1.png" },
  { icon: <ShoppingBag size={20} />, name: "ServiYA", desc: "Marketplace de servicios con 55+ categorías. Tu catálogo profesional en minutos.", tag: "Marketplace", tagColor: "#7c4dff", url: "/proximamente", color: "linear-gradient(135deg,#7c4dff,#2979ff)", glow: "rgba(124,77,255,0.3)", image: "/product-img-2.png" },
  { icon: <ImageIcon size={20} />, name: "GaleríaX", desc: "Tu contenido, tus reglas, tus ganancias. Plataforma de suscripción con Stripe y PayPal.", tag: "Monetización", tagColor: "#ff2d78", url: "/proximamente", color: "linear-gradient(135deg,#ff2d78,#7c3aed)", glow: "rgba(255,45,120,0.35)", image: "/product-img-3.png" },
  { icon: <DollarSign size={20} />, name: "CambioBs", desc: "Tasas USD/Bs en tiempo real. BCV, paralelo, Binance y promedio actualizado.", tag: "Finanzas", tagColor: "#00c853", url: "/proximamente", color: "linear-gradient(135deg,#00e676,#00bcd4)", glow: "rgba(0,230,118,0.3)" },
  { icon: <Monitor size={20} />, name: "HK-PC Organizer", desc: "Organiza tu PC automáticamente con un clic. App Windows nativa lista para instalar.", tag: "Productividad", tagColor: "#ff9800", url: "/proximamente", color: "linear-gradient(135deg,#ff9800,#ff6b35)", glow: "rgba(255,152,0,0.3)" },
  { icon: <BookOpen size={20} />, name: "Guías Claude", desc: "Aprende IA con guías prácticas desarrolladas con Claude. Contenido premium.", tag: "Aprendizaje", tagColor: "#e91e63", url: "/proximamente", color: "linear-gradient(135deg,#e91e63,#9c27b0)", glow: "rgba(233,30,99,0.3)" },
];

export default function Products() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section id="productos" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(160deg,#08091a 0%,#0d1030 60%,#07091a 100%)" }}>
      {/* Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.12] blur-3xl" style={{ background: "#7c4dff" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none opacity-[0.10] blur-3xl" style={{ background: "#2979ff" }} />

      <div className="tc-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(124,77,255,0.12)", border: "1px solid rgba(124,77,255,0.30)", color: "#b388ff" }}>
            Nuestros Productos
          </div>
          <h2 className="tc-h2 text-white">
            La Plaza Digital de{" "}
            <span className="gradient-text">TechnoCrazy</span>
          </h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.5)" }}>
            Herramientas construidas para que tu negocio opere solo. Soluciones reales, listas para usar.
          </p>
        </motion.div>

        {/* Grid — 2 cols always, 3 on lg */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-2xl overflow-hidden group"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)", boxShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
            >
              {/* Image o color stripe */}
              {"image" in p && p.image ? (
                <button
                  onClick={() => setLightbox((p as typeof p & { image: string }).image)}
                  className="relative overflow-hidden w-full block cursor-zoom-in"
                  style={{ height: 85 }}
                  aria-label={`Ver imagen de ${p.name}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={(p as typeof p & { image: string }).image} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
                  <div className="absolute inset-0 transition-opacity opacity-0 group-hover:opacity-100 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.35)" }}>
                    <span className="text-white font-semibold text-xs bg-black/40 rounded-full px-3 py-1">Ver imagen</span>
                  </div>
                </button>
              ) : (
                <div className="h-1.5" style={{ background: p.color }} />
              )}

              <div className="text-center" style={{ padding: "10px 10px 12px" }}>
                {/* Icon centrado */}
                <div className="flex justify-center mb-1.5">
                  <div
                    className="rounded-lg flex items-center justify-center text-white"
                    style={{ width: 28, height: 28, background: p.color, boxShadow: `0 3px 8px ${p.glow}` }}
                  >
                    {p.icon}
                  </div>
                </div>

                {/* Tag */}
                <span
                  className="font-semibold rounded-full"
                  style={{ fontSize: 8, padding: "1px 7px", color: p.tagColor, background: `${p.tagColor}18` }}
                >
                  {p.tag}
                </span>

                <h3 className="text-white font-black mt-1.5 mb-1" style={{ fontSize: 11 }}>{p.name}</h3>
                <p className="leading-snug mb-2" style={{ fontSize: 9.5, color: "rgba(255,255,255,0.5)", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{p.desc}</p>

                <a
                  href={p.url}
                  target={p.url.startsWith("http") ? "_blank" : undefined}
                  rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center gap-1 font-semibold group-hover:gap-2 transition-all"
                  style={{ fontSize: 11, color: p.tagColor }}
                >
                  Ver Producto <ExternalLink size={11} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-white rounded-3xl relative overflow-hidden"
          style={{
            marginTop: 48,
            background: "linear-gradient(135deg,#0a0a1a,#12122a)",
            border: "1px solid rgba(41,121,255,0.15)",
          }}
        >
          {/* Foto Rafael acoplada al tope */}
          <div className="relative overflow-hidden" style={{ height: "clamp(200px, 40vw, 380px)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/rafael-desk.jpg"
              alt="Rafael Navarro — TechnoCrazy"
              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 15%" }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, #0a0a1a 100%)" }} />
          </div>

          {/* Texto y CTA */}
          <div className="relative text-center" style={{ padding: "clamp(24px,4vw,40px) clamp(20px,4vw,40px) clamp(32px,5vw,48px)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center top, rgba(41,121,255,0.08), transparent 60%)" }} />
            <h3 className="font-black mb-3 relative" style={{ fontSize: "clamp(20px,3vw,26px)", textAlign: "center" }}>
              ¿Y si tuvieras tu propio producto digital?
            </h3>
            <p style={{ color: "rgba(156,163,175,1)", fontSize: 14, maxWidth: 420, margin: "0 auto 28px", textAlign: "center", lineHeight: 1.6 }}>
              Tu idea + mi código = tu negocio. Trabajemos juntos para construirlo.
            </p>
          <motion.a
            href="https://wa.me/17794318214"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex relative"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Quiero mi producto
          </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(6px)" }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={lightbox}
                alt="Vista ampliada"
                className="w-full rounded-2xl shadow-2xl"
                style={{ maxHeight: "85vh", objectFit: "contain" }}
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(0,0,0,0.6)" }}
              >
                <X size={18} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
