"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import { db } from "@/lib/firebase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Product } from "@/lib/collections";

// Cáscara propia en vez de PageShell: acá el título tiene que ir JUNTO a la
// foto (no centrado y lejos arriba), y la foto debe verse completa. En la
// lista se recorta a 16:10 para que todas las tarjetas midan igual; en el
// detalle se muestra entera con `object-contain` — el comprador necesita ver
// el producto, no un encuadre bonito.
function DetailShell({ children, backLabel }: { children: React.ReactNode; backLabel: string }) {
  return (
    <>
      <Navbar />
      <main
        style={{
          paddingTop: 64,
          minHeight: "70vh",
          background: "linear-gradient(160deg,#04081a 0%,#080e26 55%,#04081a 100%)",
        }}
      >
        <div className="tc-wrap" style={{ maxWidth: 1000, paddingTop: 32, paddingBottom: 72 }}>
          <Link
            href="/precios-productos"
            className="inline-flex items-center transition-colors hover:text-white"
            style={{ gap: 8, fontSize: 13, color: "rgba(255,255,255,0.45)", textDecoration: "none", marginBottom: 24 }}
          >
            <ArrowLeft size={14} />
            {backLabel}
          </Link>
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default function ProductDetailPage() {
  const { t } = useLanguage();
  const tp = t.pages.preciosProductos;
  const params = useParams();
  const id = params.id as string;
  const [product, setProduct] = useState<Product | null | undefined>(undefined);
  const [buying, setBuying] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      const snap = await getDoc(doc(db, "products", id));
      setProduct(snap.exists() ? ({ id: snap.id, ...snap.data() } as Product) : null);
    })();
  }, [id]);

  async function handleBuy() {
    setError("");
    setBuying(true);
    try {
      const res = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: id }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) throw new Error(data.error || tp.buyError);
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : tp.buyError);
      setBuying(false);
    }
  }

  if (product === undefined) {
    return (
      <DetailShell backLabel={tp.backToList}>
        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: 14 }}>{tp.loadingDetail}</p>
      </DetailShell>
    );
  }

  if (product === null) {
    return (
      <DetailShell backLabel={tp.backToList}>
        <h1 className="text-white font-black" style={{ fontSize: 26, marginBottom: 10 }}>
          {tp.notFoundTitle}
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>{tp.notFoundDesc}</p>
      </DetailShell>
    );
  }

  return (
    <DetailShell backLabel={tp.backToList}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start" style={{ gap: 32 }}>
        {/* ── Foto: completa, sin recortar ── */}
        {/* Imagen absoluta dentro del marco para que no pueda estirarlo:
            proporción 4:3 estable con fotos verticales u horizontales. */}
        <div
          style={{
            position: "relative",
            aspectRatio: "4 / 3",
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {product.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={product.imageUrl}
              alt={product.title}
              style={{
                position: "absolute",
                inset: 12,
                width: "calc(100% - 24px)",
                height: "calc(100% - 24px)",
                objectFit: "contain",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg,#2979ff,#7c4dff)",
              }}
            />
          )}
        </div>

        {/* ── Información ── */}
        <div className="min-w-0">
          <h1
            className="text-white font-black"
            style={{ fontSize: "clamp(22px,3vw,30px)", lineHeight: 1.25, marginBottom: 12, wordBreak: "break-word" }}
          >
            {product.title}
          </h1>

          {product.shortDescription && (
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.55)",
                marginBottom: 20,
                wordBreak: "break-word",
              }}
            >
              {product.shortDescription}
            </p>
          )}

          <p className="gradient-text font-black" style={{ fontSize: 34, lineHeight: 1.1, marginBottom: 20 }}>
            ${(product.priceCents / 100).toFixed(2)}
          </p>

          {product.longDescription && (
            <>
              <div style={{ height: 1, background: "rgba(255,255,255,0.08)", marginBottom: 20 }} />
              <p
                className="whitespace-pre-line"
                style={{
                  fontSize: 15,
                  lineHeight: 1.8,
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: 24,
                  wordBreak: "break-word",
                }}
              >
                {product.longDescription}
              </p>
            </>
          )}

          {error && <p style={{ color: "#fca5a5", fontSize: 13, marginBottom: 12 }}>{error}</p>}

          <button
            onClick={handleBuy}
            disabled={buying}
            className="btn-primary w-full justify-center"
            style={{ padding: "14px 0", fontSize: 15, minHeight: 44 }}
          >
            {buying ? tp.buyingLabel : tp.buyWithStripe}
          </button>

          <p
            className="flex items-center justify-center"
            style={{ gap: 6, fontSize: 11.5, color: "rgba(255,255,255,0.35)", marginTop: 12 }}
          >
            <ShieldCheck size={13} />
            {tp.securePayment}
          </p>
        </div>
      </div>
    </DetailShell>
  );
}
