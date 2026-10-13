"use client";
import { useSiteConfig } from "@/contexts/SiteConfigContext";

export const DEFAULT_WHATSAPP_URL = "https://wa.me/17794318214";

// Enlace de WhatsApp único del sitio: el que se edita en /admin → Config →
// Contacto. Así todos los botones (inicio, servicios, final, flotante) cambian
// juntos y ninguno se queda con un número escrito en el código.
export function useWhatsAppUrl(): string {
  const { config } = useSiteConfig();
  return config?.contact?.whatsapp?.trim() || DEFAULT_WHATSAPP_URL;
}
