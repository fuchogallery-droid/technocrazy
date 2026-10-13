import { NextResponse } from "next/server";
import Stripe from "stripe";
import type { PromoterStats } from "@/lib/promoters";

// Ventas por promotor, contadas directamente en Stripe: cada checkout que llegó
// con un enlace de referido lleva metadata.promoter. Como la fuente es Stripe,
// nadie puede inflar el número desde el navegador. Se refresca cada 5 minutos.
export const revalidate = 300;

const MAX_PAGES = 20; // 2.000 compras; más allá habría que pasar a un webhook.

export async function GET() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ stats: {} satisfies PromoterStats, live: false });
  }

  try {
    const stripe = new Stripe(secretKey);
    const sales: Record<string, number> = {};
    const products: Record<string, Set<string>> = {};

    let startingAfter: string | undefined;
    for (let page = 0; page < MAX_PAGES; page++) {
      const res: Stripe.ApiList<Stripe.Checkout.Session> = await stripe.checkout.sessions.list({
        limit: 100,
        starting_after: startingAfter,
      });
      for (const s of res.data) {
        const code = s.metadata?.promoter;
        if (!code || s.payment_status !== "paid") continue;
        sales[code] = (sales[code] || 0) + 1;
        (products[code] ||= new Set()).add(s.metadata?.productId || s.id);
      }
      if (!res.has_more || res.data.length === 0) break;
      startingAfter = res.data[res.data.length - 1].id;
    }

    const stats: PromoterStats = {};
    for (const code of Object.keys(sales)) {
      stats[code] = { sales: sales[code], products: products[code].size };
    }
    return NextResponse.json({ stats, live: true });
  } catch {
    return NextResponse.json({ stats: {} satisfies PromoterStats, live: false });
  }
}
