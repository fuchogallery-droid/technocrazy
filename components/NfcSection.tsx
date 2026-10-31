"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Nfc } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSiteConfig } from "@/contexts/SiteConfigContext";
import { DEFAULT_NFC_FEATURES, NFC_FEATURE_ICON_MAP } from "@/lib/homeSections";

// Sección "Chip NFC" del inicio: cuadrículas pequeñas desplegables, cada una con
// el ícono de la función y su descripción. Salen de `config/site.nfcFeatures`
// (administrado en /admin → Chip NFC en el inicio); sin nada guardado se ven las
// funciones de ejemplo de DEFAULT_NFC_FEATURES.
//
// Sobre "activar el NFC": un sitio web NO puede encender el NFC del teléfono por
// sí solo. Lo máximo que permite el navegador es pedirlo con un toque del
// visitante (Web NFC, solo Chrome en Android); si el NFC está apagado, Android
// ofrece abrir el ajuste. En iPhone el NFC ya viene activo.

type NdefReaderLike = { scan: () => Promise<void> };
type NdefCtor = new () => NdefReaderLike;

const COPY = {
  es: {
    badge: "Chip NFC",
    h2a: "Un toque y",
    h2b: "listo",
    sub: "Chips inteligentes para tu negocio: el cliente acerca el teléfono y recibe lo que tú quieras. Toca una función para ver cómo funciona.",
    activate: "Activar NFC en mi teléfono",
    ok: "NFC listo: acerca un chip al teléfono.",
    ios: "En iPhone el NFC ya está activo: solo acerca el chip a la parte de arriba del teléfono.",
    denied: "No se dio permiso. Activa el NFC en los ajustes del teléfono e inténtalo de nuevo.",
    off: "Tu teléfono o navegador no permite activarlo desde aquí. Enciende el NFC en los ajustes.",
    more: "Ver chips y formatos",
  },
  en: {
    badge: "NFC chip",
    h2a: "One tap and",
    h2b: "done",
    sub: "Smart chips for your business: the customer taps their phone and gets whatever you choose. Tap a feature to see how it works.",
    activate: "Turn on NFC on my phone",
    ok: "NFC ready: hold a chip near your phone.",
    ios: "On iPhone NFC is always on: just hold the chip near the top of the phone.",
    denied: "Permission was not granted. Turn NFC on in your phone settings and try again.",
    off: "Your phone or browser can't turn it on from here. Switch NFC on in settings.",
    more: "See chips and formats",
  },
};

export default function NfcSection() {
  const { lang } = useLanguage();
  const copy = COPY[lang] ?? COPY.es;
  const { config } = useSiteConfig();
  const [open, setOpen] = useState<string | null>(null);
  const [status, setStatus] = useState<{ kind: "ok" | "warn"; text: string } | null>(null);

  const saved = config?.nfcFeatures;
  const features = (saved && saved.length > 0 ? saved : DEFAULT_NFC_FEATURES).filter((f) => f && f.visible !== false && f.title);
  if (features.length === 0) return null;

  async function activate() {
    const Ctor = (window as unknown as { NDEFReader?: NdefCtor }).NDEFReader;
    if (!Ctor) {
      const isIos = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      setStatus({ kind: isIos ? "ok" : "warn", text: isIos ? copy.ios : copy.off });
      return;
    }
    try {
      await new Ctor().scan();
      setStatus({ kind: "ok", text: copy.ok });
    } catch (e) {
      const name = (e as { name?: string })?.name;
      setStatus({ kind: "warn", text: name === "NotAllowedError" ? copy.denied : copy.off });
    }
  }

  return (
    <section id="nfc-inicio" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(180deg,#0b0e26 0%,#07091a 100%)" }}>
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full pointer-events-none opacity-[0.10] blur-3xl" style={{ background: "#f59e0b" }} />
      <div className="tc-wrap">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} viewport={{ once: true }} className="tc-header">
          <div className="tc-badge" style={{ background: "rgba(245,158,11,0.12)", border: "1px solid rgba(245,158,11,0.32)", color: "#fcd34d" }}>{copy.badge}</div>
          <h2 className="tc-h2 text-white">{copy.h2a} <span className="gradient-text">{copy.h2b}</span></h2>
          <p className="tc-sub" style={{ color: "rgba(255,255,255,0.5)" }}>{copy.sub}</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3" style={{ gap: "clamp(8px, 2vw, 16px)", alignItems: "start" }}>
          {features.map((f) => {
            const Icon = NFC_FEATURE_ICON_MAP[f.icon] ?? Nfc;
            const isOpen = open === f.id;
            return (
              <div
                key={f.id}
                style={{
                  borderRadius: 16,
                  background: isOpen ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${isOpen ? "rgba(245,158,11,0.45)" : "rgba(255,255,255,0.09)"}`,
                  transition: "background .2s, border-color .2s",
                }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : f.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left"
                  style={{ padding: "clamp(10px, 2.4vw, 16px)", display: "block" }}
                >
                  <span className="flex items-start justify-between" style={{ gap: 8 }}>
                    <span
                      className="flex items-center justify-center flex-shrink-0 text-white"
                      style={{ width: 38, height: 38, borderRadius: 11, background: "linear-gradient(135deg,#f59e0b,#fb923c)", boxShadow: "0 6px 18px rgba(245,158,11,0.25)" }}
                    >
                      <Icon size={19} />
                    </span>
                    <ChevronDown size={16} style={{ color: "rgba(255,255,255,0.45)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .2s", marginTop: 4 }} />
                  </span>
                  <span className="block text-white font-bold" style={{ fontSize: 14, lineHeight: 1.25, marginTop: 10 }}>{f.title}</span>
                  <span className="block" style={{ fontSize: 12, lineHeight: 1.4, color: "rgba(255,255,255,0.55)", marginTop: 4 }}>{f.desc}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && f.detail && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} style={{ overflow: "hidden" }}>
                      <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.75)", padding: "0 clamp(10px, 2.4vw, 16px) clamp(12px, 2.4vw, 16px)" }}>{f.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center" style={{ marginTop: 32, gap: 14 }}>
          <button
            type="button"
            onClick={activate}
            className="flex items-center justify-center font-bold text-white"
            style={{ minHeight: 48, padding: "0 22px", borderRadius: 12, gap: 8, fontSize: 14, background: "linear-gradient(135deg,#f59e0b,#fb923c)", boxShadow: "0 8px 24px rgba(245,158,11,0.3)" }}
          >
            <Nfc size={18} /> {copy.activate}
          </button>
          {status && (
            <p role="status" style={{ fontSize: 13, textAlign: "center", maxWidth: 440, color: status.kind === "ok" ? "#4ade80" : "#fdba74" }}>{status.text}</p>
          )}
          <Link href="/nfc" className="font-bold" style={{ fontSize: 13, color: "#fcd34d" }}>{copy.more}</Link>
        </div>
      </div>
    </section>
  );
}
