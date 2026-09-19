import { NextResponse } from "next/server";
import Stripe from "stripe";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Product } from "@/lib/collections";

export async function POST(request: Request) {
  const { productId } = await request.json().catch(() => ({ productId: null }));
  if (!productId || typeof productId !== "string") {
    return NextResponse.json({ error: "Falta el producto." }, { status: 400 });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe no está configurado todavía." }, { status: 500 });
  }

  // Se lee el precio real desde Firestore server-side (colección pública de solo
  // lectura para productos activos) — nunca se confía en un precio mandado por el cliente.
  const snap = await getDoc(doc(db, "products", productId));
  if (!snap.exists()) {
    return NextResponse.json({ error: "Producto no encontrado." }, { status: 404 });
  }
  const product = snap.data() as Product;
  if (!product.active) {
    return NextResponse.json({ error: "Este producto ya no está disponible." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const origin = request.headers.get("origin") || "https://technocrazy.org";

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price_data: {
          currency: product.currency || "usd",
          product_data: {
            name: product.title,
            images: product.imageUrl ? [product.imageUrl] : undefined,
          },
          unit_amount: product.priceCents,
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/precios-productos/gracias?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/precios-productos/${productId}`,
    metadata: { productId },
  });

  return NextResponse.json({ url: session.url });
}
