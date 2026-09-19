"use client";
import Link from "next/link";
import { where } from "firebase/firestore";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import ExpandableSection from "@/components/shared/ExpandableSection";
import type { Product } from "@/lib/collections";

export default function PreciosProductosPage() {
  const { t } = useLanguage();
  const tp = t.pages.preciosProductos;
  // El orden va como 3er argumento (cliente), no como orderBy: ver el comentario
  // en useCollection sobre el índice compuesto que exigía Firestore.
  const { items: products, loading, error } = useCollection<Product>(
    "products",
    [where("active", "==", true)],
    "createdAt"
  );

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {loading && <p className="text-gray-400 text-sm text-center">{tp.loading}</p>}
      {!loading && error && (
        <p className="text-sm text-center" style={{ color: "#fca5a5" }}>
          {tp.error}
        </p>
      )}
      {!loading && !error && products.length === 0 && (
        <p className="text-gray-400 text-sm text-center">{tp.empty}</p>
      )}
      {/* Tarjetas de producto. Reglas aplicadas (escala de 4px, sin excepciones):
          imagen con proporción fija 16:10 (nada de alturas fijas que recortan
          caras/texto) · padding uniforme de 20px en los 4 lados · ningún
          elemento pegado al borde · precio y botón separados por al menos 12px
          y apilados en pantallas estrechas · área de toque mínima de 44px. */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start" style={{ gap: 24 }}>
        {products.map((p) => (
          <article
            key={p.id}
            className="flex flex-col overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
            }}
          >
            {/* Proporción fija para que todas las tarjetas midan igual, pero
                con `contain`: la foto se ve COMPLETA. Con `cover` se recortaban
                caras y el texto de las imágenes promocionales. */}
            {/* La foto se ve COMPLETA (`contain`), igual que en la página de
                detalle: las imágenes de producto traen texto y caras que no se
                pueden recortar. El marco mantiene 16:10 para que todas las
                tarjetas midan lo mismo.
                La imagen va en posición absoluta para que no pueda estirar el
                contenedor: en flujo normal una foto vertical rompía la
                proporción y alargaba la tarjeta al doble. */}
            {/* La foto manda: se muestra ENTERA y a todo el ancho de la tarjeta.
                El alto se ajusta solo a la proporción real de la imagen, así no
                se recorta nada ni quedan franjas de fondo. Las tarjetas pueden
                quedar de alturas distintas, y está bien: es preferible a cortar
                el texto de las imágenes promocionales. */}
            <div
              style={{
                width: "100%",
                background: "#0d1224",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
                flexShrink: 0,
                overflow: "hidden",
              }}
            >
              {p.imageUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.imageUrl}
                  alt={p.title}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 10",
                    background: "linear-gradient(135deg,#2979ff,#7c4dff)",
                  }}
                />
              )}
            </div>

            <div className="flex flex-col flex-1" style={{ padding: 20 }}>
              <h2
                className="text-white font-bold"
                style={{ fontSize: 17, lineHeight: 1.35, marginBottom: 8, wordBreak: "break-word" }}
              >
                {p.title}
              </h2>

              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: 16,
                  wordBreak: "break-word",
                }}
              >
                {p.shortDescription}
              </p>

              {p.longDescription && (
                <div style={{ marginBottom: 16 }}>
                  <ExpandableSection label={tp.viewMore} openLabel={tp.hideDetails}>
                    <p style={{ fontSize: 13, lineHeight: 1.65, color: "rgba(255,255,255,0.45)", paddingTop: 8 }}>
                      {p.longDescription}
                    </p>
                  </ExpandableSection>
                </div>
              )}

              {/* Bloque de compra: separado del contenido por una línea y 16px,
                  nunca pegado al texto de arriba ni al borde de abajo. */}
              <div className="mt-auto" style={{ paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex flex-wrap items-center justify-between" style={{ gap: 12 }}>
                  <span className="gradient-text font-black" style={{ fontSize: 22, lineHeight: 1.1 }}>
                    ${(p.priceCents / 100).toFixed(2)}
                  </span>
                  <Link
                    href={`/precios-productos/${p.id}`}
                    className="btn-primary"
                    style={{ padding: "11px 22px", fontSize: 13, minHeight: 44, flexShrink: 0 }}
                  >
                    {tp.buyBtn}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
