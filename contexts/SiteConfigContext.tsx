"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { HomeProduct } from "@/lib/homeProducts";
import type { QuickLink } from "@/lib/quickLinks";

export type ServiceOverride = {
  priceES?: string;
  priceNoteES?: string;
  priceEN?: string;
  priceNoteEN?: string;
  titleES?: string;
  titleEN?: string;
  descES?: string;
  descEN?: string;
};

export type NavLinkOverride = { href: string; labelES: string; labelEN: string; icon: string };

export type SiteConfig = {
  services?: Record<string, ServiceOverride>;
  contact?: { instagram?: string; whatsapp?: string; email?: string; website?: string };
  cta?: { es?: string; en?: string };
  navLinks?: NavLinkOverride[];
  // Tarjetas de la sección "Productos" de la página de inicio, administradas
  // desde /admin → Productos del inicio. Ver lib/homeProducts.ts.
  homeProducts?: HomeProduct[];
  // Enlaces de la página /links (link in bio), administrados desde
  // /admin → Enlaces. Ver lib/quickLinks.ts.
  quickLinks?: QuickLink[];
};

const SiteConfigContext = createContext<{ config: SiteConfig | null; loading: boolean }>({
  config: null,
  loading: true,
});

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(
      doc(db, "config", "site"),
      (snap) => {
        setConfig(snap.exists() ? (snap.data() as SiteConfig) : null);
        setLoading(false);
      },
      () => setLoading(false)
    );
    return () => unsub();
  }, []);

  return <SiteConfigContext.Provider value={{ config, loading }}>{children}</SiteConfigContext.Provider>;
}

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}
