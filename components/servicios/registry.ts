import type { ServicioDef } from "./types";
import { WEB } from "./data/web";
import { APPS } from "./data/apps";
import { SISTEMAS } from "./data/sistemas";
import { IA } from "./data/ia";
import { ROBOT } from "./data/robot";

// Servicios con página propia genérica (/servicios/[slug]). Diseño tiene la suya
// (/servicios/diseno) y NFC está en /nfc.
export const SERVICIOS: ServicioDef[] = [WEB, APPS, SISTEMAS, IA, ROBOT];

export function getServicio(slug: string): ServicioDef | undefined {
  return SERVICIOS.find((s) => s.slug === slug);
}
