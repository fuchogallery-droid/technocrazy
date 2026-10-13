"use client";

import { useLayoutEffect, useRef, useState } from "react";

const INTRO_SESSION_KEY = "tc_intro_played";
const FADE_MS = 900;

export default function IntroVideo() {
  const [visible, setVisible] = useState(true);
  const [stage, setStage] = useState<"gate" | "video">("gate");
  const [ending, setEnding] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const finishedRef = useRef(false);

  useLayoutEffect(() => {
    try {
      if (sessionStorage.getItem(INTRO_SESSION_KEY)) {
        setVisible(false);
      }
    } catch {
      // sessionStorage no disponible (modo privado, etc.) — mostrar la intro igual
    }
  }, []);

  useLayoutEffect(() => {
    if (stage !== "video") return;
    const t = setTimeout(() => setShowSkip(true), 2000);
    return () => clearTimeout(t);
  }, [stage]);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    try {
      sessionStorage.setItem(INTRO_SESSION_KEY, "1");
    } catch {}
    setEnding(true);
    setTimeout(() => setVisible(false), FADE_MS);
  };

  const enter = () => {
    setStage("video");
    const v = videoRef.current;
    if (!v) return;
    // el play() se dispara dentro del propio clic (gesto real del usuario),
    // por eso el navegador SÍ permite sonido aquí, a diferencia del autoplay solo
    v.muted = false;
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  };

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 999999,
        background: "linear-gradient(135deg, #0a0a1a 0%, #12122a 100%)",
        opacity: ending ? 0 : 1,
        filter: ending ? "blur(28px)" : "blur(0px)",
        transition: `opacity ${FADE_MS}ms ease, filter ${FADE_MS}ms ease`,
        pointerEvents: ending ? "none" : "auto",
      }}
    >
      {stage === "gate" && (
        <div
          className="grid-bg"
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "0 24px",
          }}
        >
          <div className="flex items-center gap-2" style={{ marginBottom: "clamp(20px,5vw,32px)" }}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center"
              style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
            >
              <span className="text-white font-black text-sm">TC</span>
            </div>
            <span className="font-black text-xl">
              <span className="text-white">Techno</span>
              <span className="gradient-text">Crazy</span>
            </span>
          </div>

          <h1
            style={{
              fontSize: "clamp(26px,6vw,50px)",
              fontWeight: 900,
              lineHeight: 1.15,
              maxWidth: 760,
              marginBottom: "clamp(28px,6vw,44px)",
              color: "#fff",
            }}
          >
            ¿LISTO PARA TU <span style={{ color: "#2979ff" }}>INDEPENDENCIA</span> TECNOLÓGICA?
          </h1>

          <button onClick={enter} className="btn-primary" style={{ fontSize: 16, padding: "16px 48px" }}>
            Entrar
          </button>
        </div>
      )}

      <video
        ref={videoRef}
        src="/videos/intro.mp4"
        playsInline
        preload="auto"
        onEnded={finish}
        onError={finish}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          opacity: stage === "video" ? 1 : 0,
          transition: "opacity 300ms ease",
          // nunca clicable: un toque directo sobre <video> dispara el
          // gesto nativo de pausa del navegador y corta la reproducción
          pointerEvents: "none",
        }}
      />

      {stage === "video" && showSkip && (
        <button
          onClick={finish}
          style={{
            position: "absolute",
            bottom: "clamp(16px,4vw,32px)",
            right: "clamp(16px,4vw,32px)",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "#fff",
            fontSize: 13,
            letterSpacing: "0.02em",
            padding: "8px 16px",
            borderRadius: 9999,
            cursor: "pointer",
            backdropFilter: "blur(6px)",
            opacity: ending ? 0 : 0.85,
            transition: "opacity 300ms ease",
          }}
        >
          Saltar
        </button>
      )}
    </div>
  );
}
