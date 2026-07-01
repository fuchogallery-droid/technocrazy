"use client";
import { motion } from "framer-motion";
import { Package, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SVC_VISUAL = [
  { emoji: "🎨", color: "#7928ca" },
  { emoji: "🌐", color: "#2979ff" },
  { emoji: "📱", color: "#00b4d8" },
  { emoji: "🔄", color: "#00e676" },
  { emoji: "🤖", color: "#ff9800" },
];

export default function Deliverables() {
  const { t } = useLanguage();
  const td = t.deliverables;
  const services = td.services.map((s, i) => ({ ...s, ...SVC_VISUAL[i] }));
  return (
    <section id="entregables" className="section-py relative overflow-hidden" style={{ background: "#f8faff" }}>
      <div className="tc-wrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="tc-header"
          style={{ marginBottom: 48 }}
        >
          <div className="tc-badge" style={{ background: "#f3eeff", border: "1px solid #d8c8ff", color: "#7928ca" }}>
            <Package size={12} style={{ display: "inline", marginRight: 4 }} />
            {td.badge}
          </div>
          <h2 className="tc-h2 text-gray-900">
            {td.title}{" "}
            <span className="gradient-text">{td.titleHighlight}</span>
          </h2>
          <p className="tc-sub" style={{ color: "#64748b" }}>{td.sub}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
            >
              {/* Header bar */}
              <div className="px-5 py-4 flex items-center gap-3" style={{ borderBottom: `2px solid ${svc.color}20`, background: `${svc.color}06` }}>
                <span style={{ fontSize: 28 }}>{svc.emoji}</span>
                <div>
                  <h3 className="font-black text-gray-900 text-sm">{svc.name}</h3>
                  <p className="text-xs" style={{ color: svc.color }}>{td.deliveryNote}</p>
                </div>
              </div>

              {/* Items */}
              <ul className="px-5 py-4 flex flex-col gap-2.5">
                {svc.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <CheckCircle size={14} style={{ color: svc.color, flexShrink: 0, marginTop: 2 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="px-5 pb-5">
                <a
                  href="https://wa.me/17794318214"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-bold rounded-xl py-2.5 transition-opacity hover:opacity-85"
                  style={{ background: `${svc.color}15`, color: svc.color, border: `1px solid ${svc.color}30` }}
                >
                  {td.ctaLabel}
                </a>
              </div>
            </motion.div>
          ))}

          {/* Custom project card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-3 rounded-2xl text-white text-center overflow-hidden relative"
            style={{ padding: "clamp(28px,4vw,40px) 24px", background: "linear-gradient(135deg,#7928ca,#2979ff)" }}
          >
            <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 70% 50%, #fff 0%, transparent 60%)" }} />
            <p className="font-black relative" style={{ fontSize: "clamp(18px,3vw,26px)" }}>
              {td.customTitle}
            </p>
            <p className="mt-2 mb-5 text-white/70 text-sm relative">{td.customDesc}</p>
            <a
              href="https://wa.me/17794318214"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                background: "#25D366",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                padding: "14px 32px",
                borderRadius: 9999,
                boxShadow: "0 8px 28px rgba(37,211,102,0.45)",
                textDecoration: "none",
                transition: "transform 0.2s, filter 0.2s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1.1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1.04)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.filter = "brightness(1)"; (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,0.2)", borderRadius: "50%", width: 36, height: 36, flexShrink: 0 }}>
                <svg viewBox="0 0 24 24" fill="white" width={22} height={22}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
              {td.customCta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
