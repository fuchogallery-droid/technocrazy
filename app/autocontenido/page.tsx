"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Red = "ig" | "tiktok" | "x" | "linkedin" | "fb";

type PostData = {
  ig: { caption: string; hashtags: string; hora: string; emoji_portada: string };
  tiktok: { caption: string; hashtags: string; hora: string; emoji_portada: string };
  x: { caption: string; hashtags: string; hora: string; emoji_portada: string };
  linkedin: { caption: string; hashtags: string; hora: string; emoji_portada: string };
  fb: { caption: string; hashtags: string; hora: string; emoji_portada: string };
  imagen: { titulo: string; subtitulo: string; cta_imagen: string; color_tema: string };
};

const REDES: { id: Red; label: string; color: string; icon: string }[] = [
  { id: "ig", label: "Instagram", color: "#e1306c", icon: "📸" },
  { id: "tiktok", label: "TikTok", color: "#00f2ea", icon: "🎵" },
  { id: "x", label: "X (Twitter)", color: "#1d9bf0", icon: "✕" },
  { id: "linkedin", label: "LinkedIn", color: "#0a66c2", icon: "💼" },
  { id: "fb", label: "Facebook", color: "#1877f2", icon: "👥" },
];

const SERVICIO_COLORS: Record<string, { grad: string; rgb: string; emoji: string }> = {
  design: { grad: "linear-gradient(135deg,#7928ca,#a855f7)", rgb: "121,40,202", emoji: "🎨" },
  web: { grad: "linear-gradient(135deg,#2979ff,#00e5ff)", rgb: "41,121,255", emoji: "🌐" },
  apps: { grad: "linear-gradient(135deg,#00b4d8,#90e0ef)", rgb: "0,180,216", emoji: "📱" },
  systems: { grad: "linear-gradient(135deg,#00e676,#1b5e20)", rgb: "0,230,118", emoji: "🔄" },
  ai: { grad: "linear-gradient(135deg,#ff9800,#ff5722)", rgb: "255,152,0", emoji: "🤖" },
};

function ImagePreview({ data }: { data: PostData }) {
  const sv = SERVICIO_COLORS[data.imagen.color_tema] || SERVICIO_COLORS.web;
  return (
    <svg viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: 12 }}>
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={`rgba(${sv.rgb},1)`} />
          <stop offset="100%" stopColor="#04081a" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {/* Background */}
      <rect width="1080" height="1080" fill="url(#bg)" />
      <rect width="1080" height="1080" fill="rgba(0,0,0,0.35)" />
      {/* Grid pattern */}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 90} x2="1080" y2={i * 90} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {Array.from({ length: 12 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 90} y1="0" x2={i * 90} y2="1080" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      ))}
      {/* Glow circles */}
      <circle cx="200" cy="200" r="300" fill={`rgba(${sv.rgb},0.15)`} />
      <circle cx="880" cy="880" r="250" fill={`rgba(${sv.rgb},0.1)`} />
      {/* TC Badge */}
      <rect x="60" y="60" width="80" height="80" rx="20" fill={`rgba(${sv.rgb},0.9)`} />
      <text x="100" y="113" textAnchor="middle" fill="white" fontSize="32" fontWeight="900" fontFamily="Arial">TC</text>
      {/* Brand */}
      <text x="160" y="90" fill="white" fontSize="26" fontWeight="700" fontFamily="Arial" opacity="0.9">Techno</text>
      <text x="243" y="90" fill={`rgba(${sv.rgb},1)`} fontSize="26" fontWeight="900" fontFamily="Arial">Crazy</text>
      <text x="160" y="118" fill="rgba(255,255,255,0.5)" fontSize="16" fontFamily="Arial">technocrazy.org</text>
      {/* Main title */}
      <text x="540" y="430" textAnchor="middle" fill="white" fontSize="72" fontWeight="900" fontFamily="Arial" filter="url(#glow)">
        {data.imagen.titulo.toUpperCase().split(" ").slice(0, 3).join(" ")}
      </text>
      <text x="540" y="520" textAnchor="middle" fill="white" fontSize="72" fontWeight="900" fontFamily="Arial">
        {data.imagen.titulo.toUpperCase().split(" ").slice(3).join(" ")}
      </text>
      {/* Divider */}
      <rect x="390" y="560" width="300" height="3" rx="2" fill={`rgba(${sv.rgb},0.8)`} />
      {/* Subtitle */}
      <text x="540" y="620" textAnchor="middle" fill="rgba(255,255,255,0.75)" fontSize="30" fontFamily="Arial">
        {data.imagen.subtitulo}
      </text>
      {/* CTA pill */}
      <rect x="355" y="700" width="370" height="70" rx="35" fill={`rgba(${sv.rgb},0.9)`} />
      <text x="540" y="744" textAnchor="middle" fill="white" fontSize="26" fontWeight="700" fontFamily="Arial">
        {data.imagen.cta_imagen}
      </text>
      {/* Footer */}
      <rect x="0" y="980" width="1080" height="100" fill="rgba(0,0,0,0.5)" />
      <text x="60" y="1040" fill="rgba(255,255,255,0.6)" fontSize="22" fontFamily="Arial">📱 wa.me/17794318214</text>
      <text x="1020" y="1040" textAnchor="end" fill="rgba(255,255,255,0.6)" fontSize="22" fontFamily="Arial">@igTechnoCrazy</text>
    </svg>
  );
}

function CopyBtn({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button onClick={copy} style={{
      background: copied ? "rgba(0,230,118,0.15)" : "rgba(255,255,255,0.07)",
      border: `1px solid ${copied ? "rgba(0,230,118,0.4)" : "rgba(255,255,255,0.12)"}`,
      color: copied ? "#00e676" : "rgba(255,255,255,0.7)",
      padding: "6px 14px", borderRadius: 8, fontSize: 12, fontWeight: 600,
      cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap",
    }}>
      {copied ? "✓ Copiado" : `📋 ${label || "Copiar"}`}
    </button>
  );
}

export default function AutoContenido() {
  const [tema, setTema] = useState("");
  const [servicio, setServicio] = useState("web");
  const [tono, setTono] = useState("educativo");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PostData | null>(null);
  const [activeRed, setActiveRed] = useState<Red>("ig");
  const [error, setError] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);

  const generar = async () => {
    if (!tema.trim()) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/generar-post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tema, servicio, tono }),
      });
      const json = await res.json();
      if (json.ok) {
        setResult(json.data);
        setActiveRed("ig");
      } else {
        setError("Error generando el post. Intenta de nuevo.");
      }
    } catch {
      setError("Error de conexión.");
    } finally {
      setLoading(false);
    }
  };

  const downloadSVG = () => {
    if (!result) return;
    const svg = document.querySelector("#tc-post-svg");
    if (!svg) return;
    const blob = new Blob([svg.outerHTML], { type: "image/svg+xml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tc-post-${Date.now()}.svg`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const activeNet = result ? result[activeRed] : null;
  const activeNetMeta = REDES.find((r) => r.id === activeRed);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(145deg,#04081a,#080e26)", color: "white", fontFamily: "system-ui,sans-serif" }}>

      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2979ff,#7c4dff)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14 }}>TC</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16 }}>Content Machine</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>TechnoCrazy · Generador automático de posts</div>
          </div>
        </div>
        <a href="/" style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textDecoration: "none" }}>← Volver al sitio</a>
      </div>

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "32px 24px", display: "grid", gridTemplateColumns: "360px 1fr", gap: 28, alignItems: "start" }}>

        {/* LEFT — FORM */}
        <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 24, position: "sticky", top: 24 }}>
          <div style={{ marginBottom: 20 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Tema del post</div>
            <textarea
              value={tema}
              onChange={(e) => setTema(e.target.value)}
              placeholder="Ej: La importancia de tener una página web profesional para negocios locales..."
              rows={4}
              style={{
                width: "100%", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: "12px 14px", color: "white", fontSize: 14, resize: "vertical",
                outline: "none", boxSizing: "border-box",
              }}
            />
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Servicio</div>
            <select value={servicio} onChange={(e) => setServicio(e.target.value)}
              style={{ width: "100%", background: "#0d1226", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 14px", color: "white", fontSize: 14, outline: "none" }}>
              <option value="design">🎨 Diseño Gráfico</option>
              <option value="web">🌐 Páginas Web</option>
              <option value="apps">📱 Apps Móviles</option>
              <option value="systems">🔄 Sistemas Automatizados</option>
              <option value="ai">🤖 Inteligencia Artificial</option>
            </select>
          </div>

          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: 1, marginBottom: 8, textTransform: "uppercase" }}>Tono</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[
                { id: "educativo", label: "📚 Educativo" },
                { id: "inspiracional", label: "🔥 Inspiracional" },
                { id: "venta", label: "💰 Venta directa" },
                { id: "testimonio", label: "⭐ Resultado" },
                { id: "curiosidad", label: "🤔 Curiosidad" },
              ].map((t) => (
                <button key={t.id} onClick={() => setTono(t.id)}
                  style={{
                    background: tono === t.id ? "rgba(41,121,255,0.2)" : "rgba(255,255,255,0.04)",
                    border: `1px solid ${tono === t.id ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.08)"}`,
                    color: tono === t.id ? "#2979ff" : "rgba(255,255,255,0.6)",
                    borderRadius: 8, padding: "8px 10px", fontSize: 12, fontWeight: 600,
                    cursor: "pointer", textAlign: "left", transition: "all 0.2s",
                  }}>
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={generar}
            disabled={loading || !tema.trim()}
            style={{
              width: "100%", padding: "14px", borderRadius: 12, border: "none",
              background: loading || !tema.trim() ? "rgba(255,255,255,0.08)" : "linear-gradient(135deg,#2979ff,#7c4dff)",
              color: loading || !tema.trim() ? "rgba(255,255,255,0.3)" : "white",
              fontSize: 15, fontWeight: 800, cursor: loading || !tema.trim() ? "not-allowed" : "pointer",
              transition: "all 0.2s", letterSpacing: 0.5,
            }}
          >
            {loading ? "⚡ Generando..." : "⚡ GENERAR POST"}
          </button>

          {error && <div style={{ marginTop: 12, padding: "10px 14px", background: "rgba(255,82,82,0.1)", border: "1px solid rgba(255,82,82,0.3)", borderRadius: 8, fontSize: 13, color: "#ff5252" }}>{error}</div>}

          {result && (
            <div style={{ marginTop: 20, padding: "14px", background: "rgba(0,230,118,0.06)", border: "1px solid rgba(0,230,118,0.2)", borderRadius: 10 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#00e676", marginBottom: 6 }}>✓ Post generado para 5 redes</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>Haz clic en cada red para ver su caption optimizado</div>
            </div>
          )}

          {/* Mini guide */}
          <div style={{ marginTop: 24, padding: "14px", background: "rgba(255,255,255,0.02)", borderRadius: 10, border: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.3)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Flujo recomendado</div>
            {["1. Escribe el tema", "2. Selecciona servicio + tono", "3. Genera con IA", "4. Descarga la imagen SVG", "5. Copia caption de cada red", "6. Programa en Buffer o Meta"].map((step, i) => (
              <div key={i} style={{ fontSize: 11, color: "rgba(255,255,255,0.4)", padding: "3px 0", display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: "#2979ff", fontSize: 10 }}>→</span> {step}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — OUTPUT */}
        <div>
          {!result && !loading && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 500, gap: 16, color: "rgba(255,255,255,0.2)" }}>
              <div style={{ fontSize: 64 }}>⚡</div>
              <div style={{ fontSize: 18, fontWeight: 700 }}>Listo para generar</div>
              <div style={{ fontSize: 14 }}>Escribe un tema y presiona GENERAR POST</div>
            </div>
          )}

          {loading && (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 500, gap: 16 }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                style={{ width: 48, height: 48, borderRadius: "50%", border: "3px solid rgba(41,121,255,0.2)", borderTopColor: "#2979ff" }}
              />
              <div style={{ fontSize: 16, fontWeight: 700, color: "rgba(255,255,255,0.6)" }}>Claude está generando 5 captions...</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)" }}>IG · TikTok · X · LinkedIn · Facebook</div>
            </div>
          )}

          {result && (
            <AnimatePresence>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>

                {/* Network tabs */}
                <div style={{ display: "flex", gap: 8, marginBottom: 20, flexWrap: "wrap" }}>
                  {REDES.map((r) => (
                    <button key={r.id} onClick={() => setActiveRed(r.id)}
                      style={{
                        padding: "8px 16px", borderRadius: 10, border: `1px solid ${activeRed === r.id ? r.color : "rgba(255,255,255,0.1)"}`,
                        background: activeRed === r.id ? `${r.color}20` : "rgba(255,255,255,0.03)",
                        color: activeRed === r.id ? r.color : "rgba(255,255,255,0.5)",
                        fontSize: 13, fontWeight: 700, cursor: "pointer", transition: "all 0.2s",
                      }}>
                      {r.icon} {r.label}
                    </button>
                  ))}
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 20, alignItems: "start" }}>

                  {/* Caption area */}
                  <AnimatePresence mode="wait">
                    <motion.div key={activeRed} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
                      {activeNet && activeNetMeta && (
                        <div style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${activeNetMeta.color}30`, borderRadius: 16, padding: 24 }}>

                          {/* Red header */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${activeNetMeta.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, border: `1px solid ${activeNetMeta.color}40` }}>
                                {activeNetMeta.icon}
                              </div>
                              <div>
                                <div style={{ fontWeight: 800, fontSize: 15 }}>{activeNetMeta.label}</div>
                                <div style={{ fontSize: 11, color: activeNetMeta.color }}>⏰ Publicar a las {activeNet.hora}</div>
                              </div>
                            </div>
                            <CopyBtn text={`${activeNet.caption}\n\n${activeNet.hashtags}`} label="Caption + hashtags" />
                          </div>

                          {/* Caption */}
                          <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: 10, padding: 16, marginBottom: 14, fontSize: 14, lineHeight: 1.7, color: "rgba(255,255,255,0.85)", whiteSpace: "pre-wrap", border: "1px solid rgba(255,255,255,0.06)" }}>
                            {activeNet.caption}
                          </div>

                          {/* Hashtags */}
                          <div style={{ marginBottom: 14 }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                              <div style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1 }}>Hashtags</div>
                              <CopyBtn text={activeNet.hashtags} label="Hashtags" />
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                              {activeNet.hashtags.split(" ").filter(Boolean).map((tag, i) => (
                                <span key={i} style={{ fontSize: 11, padding: "3px 8px", borderRadius: 6, background: `${activeNetMeta.color}15`, color: activeNetMeta.color, border: `1px solid ${activeNetMeta.color}25` }}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Copy all */}
                          <div style={{ paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.06)", display: "flex", gap: 8 }}>
                            <CopyBtn text={activeNet.caption} label="Solo caption" />
                            <CopyBtn text={activeNet.hashtags} label="Solo hashtags" />
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Image preview */}
                  <div>
                    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 16 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: 1 }}>Vista previa imagen</div>
                        <button onClick={downloadSVG}
                          style={{ background: "rgba(41,121,255,0.15)", border: "1px solid rgba(41,121,255,0.3)", color: "#2979ff", padding: "5px 12px", borderRadius: 7, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                          ⬇ SVG
                        </button>
                      </div>
                      <div id="tc-post-svg" style={{ borderRadius: 10, overflow: "hidden" }}>
                        <ImagePreview data={result} />
                      </div>
                      <div style={{ marginTop: 10, fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center" }}>
                        1080×1080px · Descarga el SVG → abre en Chrome → captura o imprime
                      </div>
                    </div>

                    {/* All times summary */}
                    <div style={{ marginTop: 16, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: 16 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Horas recomendadas</div>
                      {REDES.map((r) => (
                        <div key={r.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{r.icon} {r.label}</span>
                          <span style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{result[r.id].hora}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
}
