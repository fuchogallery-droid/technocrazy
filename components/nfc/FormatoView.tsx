"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronRight, Minus, Plus } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import { FORMAT_MEDIA } from "@/components/nfc/formatMedia";

const WA = "https://wa.me/17794318214";
const ACCENT = "#f59e0b";
const ACCENT2 = "#fb923c";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

export default function FormatoView({ slug }: { slug: string }) {
  const { t } = useLanguage();
  const ts = t.nfc;
  const idx = ts.formats.findIndex((f) => f.slug === slug);
  const f = ts.formats[idx];
  const media = FORMAT_MEDIA[slug];
  const otros = ts.formats.filter((o) => o.slug !== slug);

  const [sizeIdx, setSizeIdx] = useState(0);
  const [qty, setQty] = useState(1);

  const size = f.sizes[sizeIdx];

  // Precios de la sección "Precios" del sitio (ts.pricing), leídos como número
  // para que no se desincronicen si Rafael los edita desde el panel admin.
  // 1 y 2 chips usan el precio exacto de sus planes (Individual/Pack Doble);
  // de 3 en adelante se cobra por chip a la tarifa base, y desde 10 entra la
  // tarifa de mayoreo + el 5% extra de descuento en pedidos de más de 10 piezas.
  const unitBase = parseFloat(ts.pricing[0]?.price.replace(/[^0-9.]/g, "")) || 15;
  const bulkTotalPrice = parseFloat(ts.pricing[2]?.price.replace(/[^0-9.]/g, "")) || 100;
  const unitBulk = bulkTotalPrice / 10;
  const bulkDiscount = qty > 10;

  let total: number;
  if (qty === 1) total = unitBase;
  else if (qty === 2) total = parseFloat(ts.pricing[1]?.price.replace(/[^0-9.]/g, "")) || unitBase * 2;
  else total = qty * (qty >= 10 ? unitBulk : unitBase) * (bulkDiscount ? 0.95 : 1);

  const totalFormatted = `$${Number.isInteger(total) ? total : total.toFixed(2)}`;
  const qtyLabel = qty === 1 ? ts.pricing[0].note : qty === 2 ? ts.pricing[1].note : `${qty} chips`;

  const waMsg = encodeURIComponent(
    `Hola, quiero pedir chips NFC.\nFormato: ${f.title}\nTamaño: ${size.name} (${size.dims})\nCantidad: ${qtyLabel}\nTotal estimado: ${totalFormatted}`
  );

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 64, background: "linear-gradient(160deg,#04081a 0%,#080e26 50%,#04081a 100%)" }}>
        <div className="absolute inset-x-0 pointer-events-none overflow-hidden" style={{ height: 500 }}>
          <div className="absolute rounded-full blur-3xl" style={{ width: 620, height: 620, top: -160, left: "50%", transform: "translateX(-50%)", background: `radial-gradient(circle,${ACCENT}1a,transparent 70%)` }} />
        </div>

        {/* ══════════ HERO ══════════ */}
        <section className="tc-wrap relative" style={{ paddingTop: 40, paddingBottom: 44 }}>
          <Link
            href="/nfc#formatos"
            className="inline-flex items-center gap-2 mb-8 transition-colors hover:text-white"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
          >
            <ArrowLeft size={14} />
            {ts.formatBack}
          </Link>

          <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
              className="relative w-full lg:w-[420px] lg:flex-none rounded-2xl overflow-hidden"
              style={{ aspectRatio: "1/1", background: `linear-gradient(160deg,${ACCENT}22,rgba(255,255,255,0.02))` }}
            >
              <Image src={media.src} alt={f.title} fill sizes="(max-width: 1024px) 100vw, 420px" style={{ objectFit: "cover" }} priority />
              <div
                className="absolute top-4 left-4 flex items-center justify-center rounded-lg"
                style={{ width: 32, height: 32, fontSize: 13, fontWeight: 900, color: "#fff", background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, boxShadow: `0 6px 18px ${ACCENT}55` }}
              >
                {idx + 1}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="flex-1 min-w-0">
              <h1 style={{ fontSize: "clamp(26px,4vw,40px)", fontWeight: 900, lineHeight: 1.2, letterSpacing: "-0.02em", color: "#fff", marginBottom: 16 }}>
                {f.title}
              </h1>
              <p style={{ fontSize: 14.5, lineHeight: 1.85, color: "rgba(255,255,255,0.6)", marginBottom: 28 }}>
                {f.extendedDesc}
              </p>

              {/* Modelos disponibles */}
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: ACCENT }}>
                {ts.formatModalModelsA} {ts.formatModalModelsB}
              </p>
              <div className="flex flex-col gap-2">
                {f.models.map((m) => (
                  <div key={m.name} style={{ padding: "11px 15px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 700, color: "#fff", marginBottom: 2 }}>{m.name}</div>
                    <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{m.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ PEDIDO: TAMAÑO + CANTIDAD ══════════ */}
        <section style={{ background: "rgba(255,255,255,0.018)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingTop: 48, paddingBottom: 48 }}>
          <div className="tc-wrap">
            <motion.div {...fadeUp} className="mx-auto" style={{ maxWidth: 620 }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>
                {ts.formatSizeLabel}
              </p>
              <div className="grid gap-2.5 sm:grid-cols-3 mb-8">
                {f.sizes.map((s, i) => {
                  const active = i === sizeIdx;
                  return (
                    <button
                      key={s.name}
                      onClick={() => setSizeIdx(i)}
                      className="text-left rounded-xl transition-all"
                      style={{
                        padding: "14px 16px",
                        background: active ? `linear-gradient(160deg,${ACCENT}22,rgba(255,255,255,0.03))` : "rgba(255,255,255,0.03)",
                        border: active ? `1.5px solid ${ACCENT}88` : "1px solid rgba(255,255,255,0.09)",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontSize: 13.5, fontWeight: 800, color: "#fff", marginBottom: 3 }}>{s.name}</div>
                      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)" }}>{s.dims}</div>
                    </button>
                  );
                })}
              </div>

              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: ACCENT }}>
                {ts.formatQuantityLabel}
              </p>
              <div className="grid gap-2.5 grid-cols-2 mb-4">
                {ts.pricing.slice(0, 2).map((p, i) => {
                  const val = i + 1;
                  const active = qty === val;
                  return (
                    <button
                      key={p.plan}
                      onClick={() => setQty(val)}
                      className="text-left rounded-xl transition-all"
                      style={{
                        padding: "14px 16px",
                        background: active ? `linear-gradient(160deg,${ACCENT}22,rgba(255,255,255,0.03))` : "rgba(255,255,255,0.03)",
                        border: active ? `1.5px solid ${ACCENT}88` : "1px solid rgba(255,255,255,0.09)",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ fontSize: 13.5, fontWeight: 800, color: "#fff", marginBottom: 3 }}>{p.note}</div>
                      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.5)" }}>{p.price}</div>
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-4 mb-10">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="flex items-center justify-center rounded-xl transition-colors hover:bg-white/10"
                  style={{ width: 42, height: 42, border: "1px solid rgba(255,255,255,0.14)", color: "#fff", cursor: "pointer" }}
                >
                  <Minus size={15} />
                </button>
                <span style={{ fontSize: 22, fontWeight: 900, color: "#fff", minWidth: 36, textAlign: "center" }}>{qty}</span>
                <button
                  onClick={() => setQty((q) => Math.min(999, q + 1))}
                  className="flex items-center justify-center rounded-xl transition-colors hover:bg-white/10"
                  style={{ width: 42, height: 42, border: "1px solid rgba(255,255,255,0.14)", color: "#fff", cursor: "pointer" }}
                >
                  <Plus size={15} />
                </button>
              </div>

              {/* Resumen + CTA */}
              <div className="rounded-2xl" style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "20px 22px" }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {ts.formatSummary}
                </p>
                <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.9, marginBottom: 16 }}>
                  {f.title} · {size.name} ({size.dims}) · {qtyLabel}
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase" }}>{ts.formatPriceLabel}</span>
                </div>
                <div style={{ fontSize: 30, fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: bulkDiscount ? 6 : 20 }}>
                  {totalFormatted}
                </div>
                {bulkDiscount && (
                  <div style={{ fontSize: 11.5, color: ACCENT, marginBottom: 20 }}>{ts.formatBulkNote}</div>
                )}
                <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.35)", lineHeight: 1.6, marginBottom: 20 }}>{ts.formatPriceDisclaimer}</p>

                <motion.a
                  href={`${WA}?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2"
                  style={{ background: `linear-gradient(135deg,${ACCENT},${ACCENT2})`, color: "#fff", fontWeight: 800, fontSize: 14, padding: "14px 28px", borderRadius: 13, textDecoration: "none", boxShadow: `0 14px 40px ${ACCENT}44` }}
                >
                  {ts.formatOrderCta}
                  <ArrowRight size={15} />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ══════════ OTROS FORMATOS ══════════ */}
        <section className="tc-wrap" style={{ paddingTop: 52, paddingBottom: 60 }}>
          <div className="tc-header" style={{ marginBottom: 24 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: "#fff" }}>{ts.formatOtherFormats}</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {otros.map((o) => (
              <Link
                key={o.slug}
                href={`/nfc/formatos/${o.slug}`}
                className="rounded-2xl flex items-center justify-between gap-3 transition-all hover:-translate-y-1"
                style={{ background: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)", padding: "16px 18px", textDecoration: "none" }}
              >
                <div style={{ fontSize: 13.5, fontWeight: 800, color: "#fff" }}>{o.title}</div>
                <ChevronRight size={16} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}
