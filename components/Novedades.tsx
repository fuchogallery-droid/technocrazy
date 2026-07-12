"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Check, ShoppingCart, ArrowRight } from "lucide-react";

type Product = {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  gallery: string[];
  price: string;
  buyUrl: string;
  tag: string;
  color: string;
  soon?: boolean;
};

const PRODUCTS: Product[] = [
  {
    id: "clauderemote",
    image: "/product-img-3.png",
    title: "Claude Remote",
    subtitle: "PWA · React + Node.js",
    description: "Accede a Claude Code desde tu celular sin instalar nada. Terminal real en el navegador, chat integrado y seguridad de 4 capas.",
    features: [
      "Terminal real con xterm.js accesible desde el celular",
      "Panel de escritorio con conexión por QR — el celular se conecta escaneando, sin escribir nada",
      "Seguridad de 4 capas: SSH Ed25519 + token + red privada + Tailscale",
      "Sin instalar apps — funciona como PWA en cualquier navegador",
    ],
    gallery: ["/product-img-3.png", "/product-img-1.png", "/product-img-2.png"],
    price: "$25",
    buyUrl: "https://payhip.com/b/r8Ldk",
    tag: "PWA · App Móvil",
    color: "#E8751A",
    soon: false,
  },
  {
    id: "autopostpro",
    image: "/product-img-2.png",
    title: "AutoPost Pro",
    subtitle: "Robot IA · Redes Sociales",
    description: "Tu robot de contenido. Genera, programa y publica en IG, TikTok, Facebook, X y LinkedIn con IA — mientras tú haces otra cosa.",
    features: [
      "Publica automáticamente en 5 redes sociales desde un solo lugar",
      "IA genera texto e imágenes virales adaptadas a cada plataforma",
      "Calendario editorial inteligente — semanas de contenido en minutos",
      "Analiza tendencias y optimiza cada post para maximizar el alcance",
    ],
    gallery: ["/product-img-2.png", "/product-img-3.png", "/product-img-1.png"],
    price: "Próximamente",
    buyUrl: "https://wa.me/17794318214?text=Hola%20Rafael!%20Quiero%20que%20me%20avises%20cuando%20lance%20AutoPost%20Pro%20%F0%9F%A4%96",
    tag: "Robot IA",
    color: "#7c3aed",
    soon: true,
  },
  {
    id: "ultrom",
    image: "/product-img-1.png",
    title: "ULTROM App",
    subtitle: "App de Escritorio · Windows",
    description: "Tu memoria portátil para cualquier IA. Crea tu contexto una vez y úsalo en Claude, ChatGPT, Gemini y más. Sin suscripción mensual.",
    features: [
      "Exporta tu contexto como archivo ZIP portable",
      "Compatible con Claude, GPT, Gemini y más IAs",
      "Memoria personalizable por proyecto o cliente",
      "Pago único — sin suscripción, sin límites",
    ],
    gallery: ["/product-img-1.png", "/product-img-2.png", "/product-img-3.png"],
    price: "$17",
    buyUrl: "https://payhip.com/b/9xjSz",
    tag: "App Desktop",
    color: "#a8b4c4",
  },
  {
    id: "hkpc",
    image: "/product-img-2.png",
    title: "HK-PC Organizer",
    subtitle: "App Nativa · Windows",
    description: "Organiza tu PC automáticamente con un clic. Detecta y clasifica archivos por categoría, limpia el escritorio y recupera el orden en segundos.",
    features: [
      "Clasifica imágenes, docs, videos y código automáticamente",
      "Instalador Windows listo — sin configuración manual",
      "Limpia el escritorio y carpeta de descargas al instante",
      "Pago único — sin suscripción, sin dependencias",
    ],
    gallery: ["/product-img-2.png", "/product-img-3.png", "/product-img-1.png"],
    price: "$17",
    buyUrl: "https://wa.me/17794318214?text=Hola%20Rafael!%20Quiero%20obtener%20HK-PC%20Organizer%20%F0%9F%92%BB",
    tag: "App Desktop",
    color: "#38bdf8",
  },
];

// ── Product card ────────────────────────────────────────────────────────────

function ProductCard({ p, onView }: { p: Product; onView: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="flex rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.3)",
      }}
    >
      {/* ── 30% Imagen ── */}
      <div className="relative flex-shrink-0" style={{ width: "30%", minHeight: 220 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={p.image}
          alt={p.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, transparent 50%, rgba(7,9,26,0.85) 100%)" }} />
        <span
          className="absolute top-3 left-3"
          style={{
            fontSize: 9, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
            background: `${p.color}28`, border: `1px solid ${p.color}55`, color: p.color,
            borderRadius: 9999, padding: "3px 8px",
          }}
        >
          {p.tag}
        </span>
      </div>

      {/* ── 70% Contenido ── */}
      <div className="flex flex-col justify-between gap-4" style={{ width: "70%", padding: "24px 36px 24px 32px" }}>
        {/* Título + descripción */}
        <div>
          <h3
            className="font-black text-center mb-2"
            style={{
              fontSize: "clamp(22px,2.5vw,28px)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              background: `linear-gradient(135deg, #fff 0%, ${p.color} 60%, ${p.color}cc 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: `drop-shadow(0 0 18px ${p.color}55)`,
            }}
          >
            {p.title}
          </h3>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.6 }}>
            {p.description}
          </p>
        </div>

        {/* Features numeradas */}
        <ul className="flex flex-col gap-2">
          {p.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5" style={{ fontSize: 13, color: "#ffffff" }}>
              <span
                className="flex-shrink-0 flex items-center justify-center font-black"
                style={{ width: 20, height: 20, borderRadius: "50%", background: `${p.color}33`, border: `1px solid ${p.color}88`, color: p.color, fontSize: 10, marginTop: 1 }}
              >
                {i + 1}
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Precio + botón */}
        <div className="flex items-center justify-between pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <span className="font-black" style={{ fontSize: 22, color: p.soon ? "rgba(255,255,255,0.4)" : "#fff" }}>
            {p.soon ? p.price : `USD ${p.price}`}
            {!p.soon && <span style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,0.4)", marginLeft: 4 }}>pago único</span>}
          </span>
          <button
            onClick={onView}
            className="font-bold flex items-center gap-2 transition-all hover:gap-3"
            style={{
              background: p.color, color: "#fff", padding: "10px 22px",
              borderRadius: 12, fontSize: 13, border: "none", cursor: "pointer",
            }}
          >
            Ver <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

// ── Product Modal ────────────────────────────────────────────────────────────

function ProductModal({ p, onClose, onBuy }: { p: Product; onClose: () => void; onBuy: () => void }) {
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide(s => (s - 1 + p.gallery.length) % p.gallery.length);
  const next = () => setSlide(s => (s + 1) % p.gallery.length);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(14px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 24 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative w-full rounded-3xl overflow-hidden flex flex-col"
        style={{ maxWidth: 780, maxHeight: "90vh", background: "#0d0d1c", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 100px rgba(0,0,0,0.7)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)", cursor: "pointer" }}>
          <X size={16} />
        </button>

        <div className="overflow-y-auto flex-1" style={{ padding: "36px 52px 24px" }}>
          {/* Header */}
          <div className="mb-5">
            <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", background: `${p.color}22`, border: `1px solid ${p.color}55`, color: p.color, borderRadius: 9999, padding: "3px 10px" }}>
              {p.tag}
            </span>
            <h2 className="font-black text-white mt-3" style={{ fontSize: "clamp(22px,3vw,30px)" }}>{p.title}</h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, marginTop: 8 }}>{p.description}</p>
          </div>

          {/* Galería carrusel */}
          <div className="relative rounded-2xl overflow-hidden mb-6" style={{ height: "clamp(180px,35vw,280px)", background: "#0a0a18" }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={slide}
                src={p.gallery[slide]}
                alt={`${p.title} ${slide + 1}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.25 }}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
            </AnimatePresence>
            {p.gallery.length > 1 && (
              <>
                <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.55)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}><ChevronLeft size={18} /></button>
                <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.55)", color: "#fff", border: "1px solid rgba(255,255,255,0.15)", cursor: "pointer" }}><ChevronRight size={18} /></button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                  {p.gallery.map((_, i) => (
                    <button key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 20 : 6, height: 6, borderRadius: 9999, background: i === slide ? p.color : "rgba(255,255,255,0.3)", border: "none", cursor: "pointer", transition: "all 0.2s" }} />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Features */}
          <div className="mb-6">
            <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.color, marginBottom: 12 }}>QUÉ INCLUYE</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {p.features.map((f, i) => (
                <li key={i} className="flex items-start gap-3" style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 10, padding: "10px 14px" }}>
                  <Check size={14} style={{ color: p.color, flexShrink: 0, marginTop: 1 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer — Obtener / Avisarme */}
        <div className="flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.07)", flexShrink: 0, padding: "20px 52px" }}>
          <div>
            <span className="font-black" style={{ fontSize: 28, color: p.soon ? "rgba(255,255,255,0.4)" : "#fff" }}>
              {p.soon ? p.price : `USD ${p.price}`}
            </span>
            {!p.soon && <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", marginLeft: 8 }}>pago único</span>}
          </div>
          {p.soon ? (
            <a
              href={p.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold flex items-center gap-2 transition-all hover:brightness-110"
              style={{ background: p.color, color: "#fff", padding: "13px 28px", borderRadius: 14, fontSize: 15, textDecoration: "none", boxShadow: `0 8px 28px ${p.color}44` }}
            >
              🔔 Avisarme
            </a>
          ) : (
            <button
              onClick={onBuy}
              className="font-bold flex items-center gap-2 transition-all hover:brightness-110"
              style={{ background: p.color, color: "#fff", padding: "13px 28px", borderRadius: 14, fontSize: 15, border: "none", cursor: "pointer", boxShadow: `0 8px 28px ${p.color}55` }}
            >
              <ShoppingCart size={17} /> Obtener
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Checkout Modal (carrusel 3 pasos) ──────────────────────────────────────

function CheckoutModal({ p, onClose }: { p: Product; onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "" });
  const [method, setMethod] = useState<"card" | "whatsapp" | null>(null);

  const handlePay = () => {
    if (method === "card") {
      window.open(p.buyUrl, "_blank");
    } else if (method === "whatsapp") {
      const msg = encodeURIComponent(`Hola Rafael! Quiero obtener *${p.title}* (${p.price})\n\nNombre: ${form.name}\nEmail: ${form.email}`);
      window.open(`https://wa.me/17794318214?text=${msg}`, "_blank");
    }
    onClose();
  };

  const steps = ["Resumen", "Tus datos", "Pago"];

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(18px)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.25 }}
        className="relative w-full rounded-3xl overflow-hidden"
        style={{ maxWidth: 460, background: "#0d0d1c", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 100px rgba(0,0,0,0.8)" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", cursor: "pointer" }}>
          <X size={15} />
        </button>

        {/* Progress bar */}
        <div style={{ height: 3, background: "rgba(255,255,255,0.06)" }}>
          <div style={{ height: "100%", width: `${((step + 1) / steps.length) * 100}%`, background: p.color, transition: "width 0.4s ease" }} />
        </div>

        {/* Steps indicators */}
        <div className="flex justify-center gap-6 pt-5 pb-2">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-1.5">
              <span className="flex items-center justify-center rounded-full font-black" style={{ width: 22, height: 22, fontSize: 10, background: i <= step ? p.color : "rgba(255,255,255,0.08)", color: i <= step ? "#fff" : "rgba(255,255,255,0.35)" }}>
                {i < step ? <Check size={11} /> : i + 1}
              </span>
              <span style={{ fontSize: 11, fontWeight: 600, color: i <= step ? "#fff" : "rgba(255,255,255,0.3)" }}>{s}</span>
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ padding: "20px 28px 28px" }}>
          <AnimatePresence mode="wait">

            {/* Paso 1 — Resumen */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.22 }}>
                <div className="flex gap-4 mb-5 rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.title} style={{ width: 90, height: 90, objectFit: "cover", flexShrink: 0 }} />
                  <div className="flex flex-col justify-center gap-1 pr-4">
                    <p className="font-black text-white" style={{ fontSize: 16 }}>{p.title}</p>
                    <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{p.subtitle}</p>
                    <p className="font-black" style={{ fontSize: 18, color: p.color }}>USD {p.price}</p>
                  </div>
                </div>
                <ul className="flex flex-col gap-2 mb-6">
                  {p.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.65)" }}>
                      <Check size={12} style={{ color: p.color, flexShrink: 0, marginTop: 2 }} /> {f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => setStep(1)} className="w-full font-bold flex items-center justify-center gap-2 transition-all hover:brightness-110" style={{ background: p.color, color: "#fff", padding: "14px 0", borderRadius: 14, fontSize: 14, border: "none", cursor: "pointer" }}>
                  Continuar <ArrowRight size={15} />
                </button>
              </motion.div>
            )}

            {/* Paso 2 — Datos */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.22 }}>
                <p className="font-bold text-white mb-5" style={{ fontSize: 16 }}>Tus datos de contacto</p>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { label: "Nombre completo", key: "name", type: "text", placeholder: "Rafael Navarro" },
                    { label: "Correo electrónico", key: "email", type: "email", placeholder: "tu@email.com" },
                  ].map(f => (
                    <div key={f.key}>
                      <label style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em", display: "block", marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.key as keyof typeof form]}
                        onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                        style={{ width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "11px 14px", color: "#fff", fontSize: 14, outline: "none" }}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setStep(0)} className="font-semibold flex-1 transition-all" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", padding: "13px 0", borderRadius: 14, fontSize: 14, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                    Atrás
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    disabled={!form.name || !form.email}
                    className="font-bold flex-[2] flex items-center justify-center gap-2 transition-all hover:brightness-110"
                    style={{ background: form.name && form.email ? p.color : "rgba(255,255,255,0.08)", color: form.name && form.email ? "#fff" : "rgba(255,255,255,0.3)", padding: "13px 0", borderRadius: 14, fontSize: 14, border: "none", cursor: form.name && form.email ? "pointer" : "not-allowed" }}
                  >
                    Continuar <ArrowRight size={15} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Paso 3 — Pago */}
            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.22 }}>
                <p className="font-bold text-white mb-5" style={{ fontSize: 16 }}>Elige cómo pagar</p>
                <div className="flex flex-col gap-3 mb-6">
                  {[
                    { key: "card" as const, emoji: "💳", label: "Tarjeta de crédito / débito", sub: "Pago seguro via Payhip · Stripe" },
                    { key: "whatsapp" as const, emoji: "💬", label: "Coordinar por WhatsApp", sub: "Rafael te atiende en menos de 24h" },
                  ].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setMethod(opt.key)}
                      className="flex items-center gap-4 text-left transition-all"
                      style={{
                        background: method === opt.key ? `${p.color}18` : "rgba(255,255,255,0.03)",
                        border: `1px solid ${method === opt.key ? p.color : "rgba(255,255,255,0.1)"}`,
                        borderRadius: 12, padding: "14px 16px", cursor: "pointer",
                      }}
                    >
                      <span style={{ fontSize: 24 }}>{opt.emoji}</span>
                      <div>
                        <p className="font-bold text-white" style={{ fontSize: 13 }}>{opt.label}</p>
                        <p style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>{opt.sub}</p>
                      </div>
                      {method === opt.key && <Check size={16} style={{ color: p.color, marginLeft: "auto" }} />}
                    </button>
                  ))}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mb-5 rounded-xl px-4 py-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Total</span>
                  <span className="font-black text-white" style={{ fontSize: 20 }}>USD {p.price}</span>
                </div>

                <div className="flex gap-3">
                  <button onClick={() => setStep(1)} className="font-semibold flex-1 transition-all" style={{ background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)", padding: "13px 0", borderRadius: 14, fontSize: 14, border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer" }}>
                    Atrás
                  </button>
                  <button
                    onClick={handlePay}
                    disabled={!method}
                    className="font-black flex-[2] flex items-center justify-center gap-2 transition-all hover:brightness-110"
                    style={{ background: method ? p.color : "rgba(255,255,255,0.08)", color: method ? "#fff" : "rgba(255,255,255,0.3)", padding: "13px 0", borderRadius: 14, fontSize: 14, border: "none", cursor: method ? "pointer" : "not-allowed", boxShadow: method ? `0 6px 24px ${p.color}44` : "none" }}
                  >
                    <ShoppingCart size={16} /> Obtener ahora
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Main Section ─────────────────────────────────────────────────────────────

export default function Novedades() {
  const [detail, setDetail] = useState<Product | null>(null);
  const [checkout, setCheckout] = useState<Product | null>(null);

  return (
    <>
      <section
        id="novedades"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg,#07091a 0%,#0b0e28 60%,#07091a 100%)",
          padding: "clamp(40px,6vw,64px) 0",
        }}
      >
        <div className="absolute pointer-events-none" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 400, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(41,121,255,0.06) 0%, transparent 70%)" }} />

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
              Novedades
            </div>
            <h2 className="tc-h2 text-white">
              Novedades{" "}
              <span className="gradient-text">TechnoCrazy</span>
            </h2>
            <p className="tc-sub" style={{ color: "rgba(255,255,255,0.45)" }}>
              Programas, apps y sistemas nativos — listos para instalar y usar.
            </p>
          </motion.div>

          {/* Lista de productos */}
          <div className="flex flex-col gap-5">
            {PRODUCTS.map(p => (
              <ProductCard key={p.id} p={p} onView={() => setDetail(p)} />
            ))}
          </div>
        </div>
      </section>

      {/* Modales */}
      <AnimatePresence>
        {detail && !checkout && (
          <ProductModal
            key="product-modal"
            p={detail}
            onClose={() => setDetail(null)}
            onBuy={() => { setCheckout(detail); setDetail(null); }}
          />
        )}
        {checkout && (
          <CheckoutModal
            key="checkout-modal"
            p={checkout}
            onClose={() => setCheckout(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
