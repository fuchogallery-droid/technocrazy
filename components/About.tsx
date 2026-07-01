"use client";
import { motion } from "framer-motion";
import { Shield, Target, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const VALUE_ICONS = [<Shield size={17} />, <Target size={17} />, <Users size={17} />, <Zap size={17} />];
const VALUE_COLORS = ["#2979ff", "#7c4dff", "#00e5ff", "#00e676"];

const skills = ["Next.js", "React", "Tailwind", "Claude AI", "Framer Motion", "Firebase", "Vercel", "Figma"];

export default function About() {
  const { t } = useLanguage();
  const ta = t.about;
  const values = ta.values.map((v, i) => ({ ...v, icon: VALUE_ICONS[i], color: VALUE_COLORS[i] }));
  return (
    <section id="sobre-mi" className="section-py relative overflow-hidden" style={{ background: "linear-gradient(160deg,#f8faff 0%,#f0eeff 100%)" }}>
      {/* Subtle top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-12 opacity-30" style={{ background: "linear-gradient(to bottom,#7c4dff,transparent)" }} />

      <div className="tc-wrap">
        {/* Centered label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="tc-header"
          style={{ marginBottom: 52 }}
        >
          <div className="tc-badge" style={{ background: "#f3eeff", border: "1px solid #d8c8ff", color: "#7c4dff" }}>
            {ta.badge}
          </div>
          <h2 className="tc-h2 text-gray-900">
            {ta.title}{" "}
            <span className="gradient-text">{ta.titleHighlight}</span>
          </h2>
        </motion.div>

        {/* Two-column layout — side by side from sm+ */}
        <div className="flex flex-col sm:flex-row items-start gap-8 lg:gap-16">

          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="flex-shrink-0 flex justify-center w-full sm:w-auto"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: [0, 0.5, -0.5, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  width: "clamp(160px, 38vw, 300px)",
                  height: "clamp(210px, 50vw, 420px)",
                  background: "#f0f0f0",
                  boxShadow: "0 28px 72px rgba(41,121,255,0.18), 0 0 0 1px rgba(41,121,255,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/rafael2.png"
                  alt="Rafael Navarro"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 20%" }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-20" style={{ background: "linear-gradient(to top,rgba(0,0,0,0.5),transparent)" }} />
              </motion.div>

              {/* Floating badges */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 text-center"
                style={{ top: -10, right: -10, padding: "8px 13px" }}
              >
                <div className="font-black gradient-text" style={{ fontSize: 18 }}>10+</div>
                <div className="text-gray-400 font-medium" style={{ fontSize: 9 }}>Proyectos</div>
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.7, type: "spring" }}
                viewport={{ once: true }}
                className="absolute bg-white rounded-2xl shadow-lg border border-gray-100 text-center"
                style={{ bottom: -10, left: -10, padding: "8px 13px" }}
              >
                <div className="font-black" style={{ fontSize: 18, color: "#00e676" }}>5</div>
                <div className="text-gray-400 font-medium" style={{ fontSize: 9 }}>Satisfacción</div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            viewport={{ once: true }}
            className="flex-1 min-w-0"
          >
            <p className="text-gray-600 leading-relaxed mb-3" style={{ fontSize: 15 }}>
              Soy <strong className="text-gray-900">Rafael Navarro</strong>, venezolano en Chicago, diseñador gráfico, desarrollador web y creador de apps. Llegué a esta ciudad sin conocer a nadie — y construí un negocio digital desde cero.
            </p>

            <p className="text-gray-500 leading-relaxed mb-4 text-sm">
              Aprendí a programar. Aprendí a usar IA. Construí mis primeras herramientas, las probé, las mejoré. Y me di cuenta de que lo que yo hacía para mí mismo — podía hacerlo para otros también.
            </p>

            <blockquote
              className="border-l-4 py-1 mb-5 font-bold italic"
              style={{ borderColor: "#2979ff", color: "#2979ff", paddingLeft: 18, fontSize: 16 }}
            >
              &ldquo;Si tienes una idea — yo tengo la tecnología.&rdquo;
            </blockquote>

            {/* Mini journey timeline */}
            <div className="flex flex-col gap-2 mb-5">
              {[
                { year: "2023", text: "Primeras apps personales — aprendiendo a construir" },
                { year: "2024", text: "Primeros clientes — proyectos reales en producción" },
                { year: "2025", text: "TechnoCrazy — plataforma de servicios digitales completa" },
                { year: "2026", text: "10+ proyectos LIVE · Chicago, IL & servicio mundial" },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-3">
                  <span className="font-black text-xs rounded-full px-2 py-0.5 flex-shrink-0 mt-0.5"
                    style={{ background: "#eff4ff", color: "#2979ff", minWidth: 38, textAlign: "center" }}>
                    {item.year}
                  </span>
                  <span className="text-gray-500 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-500 leading-relaxed mb-5 text-sm">
              No vendo cursos. Construyo contigo, paso a paso, hasta que tu negocio opere solo.
            </p>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-semibold rounded-full border"
                  style={{ fontSize: 10, padding: "3px 10px", color: "#2979ff", background: "#eff4ff", borderColor: "#c7d9ff" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.08 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl border border-gray-100 shadow-sm"
                  style={{ padding: "12px 14px" }}
                >
                  <div
                    className="rounded-lg flex items-center justify-center text-white mb-2"
                    style={{ width: 32, height: 32, background: `linear-gradient(135deg,${v.color},${v.color}bb)` }}
                  >
                    {v.icon}
                  </div>
                  <div className="font-bold text-gray-900 text-sm mb-1">{v.title}</div>
                  <div className="text-gray-500 leading-relaxed" style={{ fontSize: 11 }}>{v.desc}</div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://instagram.com/igTechnoCrazy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 hover:text-blue-500 transition-colors flex items-center gap-1.5"
              >
                @igTechnoCrazy
              </a>
              <a
                href="https://wa.me/17794318214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 hover:text-green-500 transition-colors flex items-center gap-1.5"
              >
                +1 779 431 8214
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
