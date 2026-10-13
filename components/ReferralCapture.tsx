"use client";
import { useEffect } from "react";
import { REF_STORAGE_KEY, normalizeCode } from "@/lib/promoters";

// Si el visitante llega con ?ref=<codigo> (enlace de un promotor) se guarda el
// código 30 días en el navegador; el checkout lo manda al servidor, que lo
// valida y lo deja marcado en la compra de Stripe. No renderiza nada.
const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export default function ReferralCapture() {
  useEffect(() => {
    try {
      const ref = new URLSearchParams(window.location.search).get("ref");
      const code = ref ? normalizeCode(ref) : "";
      if (code) localStorage.setItem(REF_STORAGE_KEY, JSON.stringify({ code, exp: Date.now() + THIRTY_DAYS }));
    } catch {
      // Navegación privada o almacenamiento bloqueado: la venta simplemente no se atribuye.
    }
  }, []);
  return null;
}

export function readStoredReferral(): string {
  try {
    const raw = localStorage.getItem(REF_STORAGE_KEY);
    if (!raw) return "";
    const { code, exp } = JSON.parse(raw) as { code?: string; exp?: number };
    if (!code || !exp || exp < Date.now()) return "";
    return code;
  } catch {
    return "";
  }
}
