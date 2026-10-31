"use client";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Dos carruseles reutilizables para las secciones del inicio.
//
// PagedCarousel: pista con desplazamiento táctil (scroll-snap). En el teléfono
//   se desliza con el dedo; en pantallas grandes aparecen los botones de flecha.
//   `perView` fija cuántas tarjetas caben a la vez (2 columnas cuando hay más de 3).
//
// MarqueeCarousel: cinta que corre sola de derecha a izquierda, sin fin. Se
//   pausa al pasar el mouse o tocarla, y con "reducir movimiento" se queda
//   quieta y se puede deslizar a mano.

export function PagedCarousel({
  children,
  perView,
  gap,
  label,
}: {
  children: ReactNode[];
  perView: number;
  gap: string;
  label: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [update, children.length, perView]);

  // Avanza exactamente las columnas visibles: "rotan juntas".
  function go(dir: -1 | 1) {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? (first.offsetWidth + parseFloat(getComputedStyle(el).columnGap || "0")) * perView : el.clientWidth;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  }

  const arrow = (dir: -1 | 1, enabled: boolean) => (
    <button
      type="button"
      onClick={() => go(dir)}
      disabled={!enabled}
      aria-label={dir < 0 ? `${label}: anterior` : `${label}: siguiente`}
      className="tc-carousel-arrow"
      style={{
        position: "absolute",
        top: "50%",
        [dir < 0 ? "left" : "right"]: -6,
        transform: "translateY(-50%)",
        width: 42,
        height: 42,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        background: "rgba(10,12,28,0.88)",
        border: "1px solid rgba(255,255,255,0.18)",
        boxShadow: "0 6px 20px rgba(0,0,0,0.45)",
        opacity: enabled ? 1 : 0,
        pointerEvents: enabled ? "auto" : "none",
        transition: "opacity .2s",
        zIndex: 5,
      }}
    >
      {dir < 0 ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );

  return (
    <div style={{ position: "relative" }}>
      <style>{`
        .tc-paged-track{display:flex;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch;justify-content:safe center;overscroll-behavior-x:contain}
        .tc-paged-track::-webkit-scrollbar{display:none}
        .tc-paged-track>*{scroll-snap-align:start}
        .tc-carousel-arrow{display:none}
        @media (min-width:700px){.tc-carousel-arrow{display:flex}}
      `}</style>
      <div ref={trackRef} className="tc-paged-track" style={{ gap }} role="region" aria-label={label}>
        {children}
      </div>
      {arrow(-1, canPrev)}
      {arrow(1, canNext)}
    </div>
  );
}

export function MarqueeCarousel({
  children,
  speed = 38,
  label,
}: {
  children: ReactNode[];
  speed?: number; // segundos por vuelta completa
  label: string;
}) {
  // La cinta se duplica para que el empalme sea invisible.
  const loop = children.length > 0 ? [...children, ...children] : children;
  return (
    <div className="tc-marquee" role="region" aria-label={label}>
      <style>{`
        .tc-marquee{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent);mask-image:linear-gradient(90deg,transparent,#000 4%,#000 96%,transparent)}
        .tc-marquee-track{display:flex;width:max-content;gap:var(--tc-marquee-gap,16px);padding-right:var(--tc-marquee-gap,16px);animation:tc-marquee-run var(--tc-marquee-speed,38s) linear infinite}
        .tc-marquee:hover .tc-marquee-track,.tc-marquee:active .tc-marquee-track,.tc-marquee:focus-within .tc-marquee-track{animation-play-state:paused}
        @keyframes tc-marquee-run{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @media (prefers-reduced-motion:reduce){.tc-marquee{overflow-x:auto;-webkit-mask-image:none;mask-image:none}.tc-marquee-track{animation:none}}
      `}</style>
      <div
        className="tc-marquee-track"
        style={{ ["--tc-marquee-speed" as string]: `${Math.max(speed, children.length * 8)}s`, ["--tc-marquee-gap" as string]: "clamp(10px, 2vw, 20px)" }}
      >
        {loop.map((child, i) => (
          <div key={i} aria-hidden={i >= children.length} style={{ flex: "0 0 auto" }}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
