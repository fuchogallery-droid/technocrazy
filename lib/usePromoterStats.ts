"use client";
import { useEffect, useState } from "react";
import type { Promoter, PromoterStats } from "@/lib/promoters";

// Ventas/productos de Stripe + el ajuste manual de cada promotor.
export function usePromoterStats() {
  const [stripeStats, setStripeStats] = useState<PromoterStats>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch("/api/promoters/stats")
      .then((r) => r.json())
      .then((d) => alive && setStripeStats(d.stats || {}))
      .catch(() => {})
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, []);

  const totals = (p: Promoter) => ({
    sales: (stripeStats[p.code]?.sales || 0) + (p.salesAdjust || 0),
    products: (stripeStats[p.code]?.products || 0) + (p.productsAdjust || 0),
  });

  return { loading, totals };
}
