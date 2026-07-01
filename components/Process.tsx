"use client";
import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Code2, Rocket, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const STEP_ICONS = [<MessageCircle size={22} />, <Lightbulb size={22} />, <Code2 size={22} />, <Rocket size={22} />, <TrendingUp size={22} />];
const STEP_COLORS = ["#2979ff", "#7c4dff", "#00e5ff", "#00e676", "#ff9800"];

export default function Process() {
  const { t } = useLanguage();
  const tp = t.process;
  const steps = tp.steps.map((s, i) => ({ num: i + 1, icon: STEP_ICONS[i], color: STEP_COLORS[i], ...s }));
  return (
    <section id="proceso" className="section-dark section-py relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 opacity-30" style={{ background: "linear-gradient(to bottom,#00e5ff,transparent)" }} />
      <div className="absolute inset-0 grid-bg opacity-8" />

      <div className="tc-wrap">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="tc-header"
        >
          <div className="tc-badge" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#00e5ff" }}>
            {tp.badge}
          </div>
          <h2 className="tc-h2 text-white">
            {tp.title}{" "}
            <span className="gradient-text-cyan">{tp.titleHighlight}</span>
          </h2>
          <p className="tc-sub text-gray-300">{tp.sub}</p>
        </motion.div>

        {/* Steps — 2 cols mobile, 3 cols md, 5 cols lg */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div
            className="hidden lg:block absolute h-px opacity-10"
            style={{ top: 40, left: "10%", right: "10%", background: "linear-gradient(90deg,#2979ff,#7c4dff,#00e5ff,#00e676,#ff9800)" }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.09 }}
                viewport={{ once: true }}
                className={`flex flex-col items-center text-center ${
                  // Centra el 5to elemento en la segunda fila del grid de 2 cols en mobile
                  i === 4 ? "col-span-2 md:col-span-1" : ""
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="relative mb-5"
                >
                  <div
                    className="rounded-2xl flex items-center justify-center text-white"
                    style={{
                      width: 76,
                      height: 76,
                      background: `linear-gradient(135deg,${s.color},${s.color}88)`,
                      boxShadow: `0 12px 30px ${s.color}40`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <div
                    className="absolute rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ width: 26, height: 26, top: -8, right: -8, background: s.color, boxShadow: `0 4px 12px ${s.color}60` }}
                  >
                    {s.num}
                  </div>
                </motion.div>
                <h3 className="text-white font-bold text-sm mb-2">{s.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center relative overflow-hidden rounded-3xl"
          style={{
            marginTop: 52,
            padding: "clamp(28px,4vw,44px) clamp(20px,4vw,40px)",
            background: "rgba(41,121,255,0.06)",
            border: "1px solid rgba(41,121,255,0.14)",
          }}
        >
          <p className="font-black text-white" style={{ fontSize: "clamp(18px,3vw,24px)" }}>
            <span className="gradient-text-cyan">&ldquo;{tp.quoteA}</span> {tp.quoteB}&rdquo;
          </p>
          <p className="text-gray-500 text-sm mt-3">{tp.author}</p>
        </motion.div>
      </div>
    </section>
  );
}
