// Promotores de la comunidad TechnoCrazy. Viven en `config/site` (campo
// `promoters`), igual que `homeProducts` y `quickLinks`: ese documento ya es
// lectura pública + escritura con sesión, así que no hace falta publicar
// reglas de Firestore nuevas y /promotores los recibe en vivo.
//
// Las ventas NO se guardan aquí: se cuentan en Stripe. Cada compra que llega
// con el enlace de un promotor (?ref=codigo) queda marcada en Stripe con
// metadata.promoter, y /api/promoters/stats las suma. Lo único que se guarda
// aquí son dos ajustes manuales (ventas/productos previos o por fuera de Stripe).

export type Promoter = {
  id: string;
  // Código corto del enlace de referido: technocrazy.org/?ref=<code>
  code: string;
  name: string;
  role?: string;
  // Reseña corta que se ve en la tarjeta (2-3 líneas).
  bio?: string;
  photoUrl?: string;
  // Enlace wa.me para escribirle directo al promotor.
  whatsapp?: string;
  // Perfil profesional del individuo (su página Modelo 1 u otra).
  profileUrl: string;
  visible: boolean;
  salesAdjust?: number;
  productsAdjust?: number;
};

export type PromoterStats = Record<string, { sales: number; products: number }>;

export const REF_STORAGE_KEY = "tc_ref";

export function emptyPromoter(): Promoter {
  return { id: "", code: "", name: "", role: "", profileUrl: "", visible: true, salesAdjust: 0, productsAdjust: 0 };
}

// Solo minúsculas, números y guion: es lo que viaja en la URL y en Stripe.
export function normalizeCode(raw: string): string {
  return raw
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 32);
}

export function referralLink(code: string): string {
  return `https://technocrazy.org/?ref=${code}`;
}
