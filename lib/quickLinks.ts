import { Globe, Monitor, Smartphone, type LucideIcon } from "lucide-react";

// Enlaces de la página /links (estilo "link in bio" para Instagram). Viven en
// el documento `config/site` de Firestore (campo `quickLinks`), igual que
// `homeProducts`: config/site ya es lectura pública + escritura con sesión,
// así que no hace falta publicar reglas nuevas, y /links los recibe en vivo
// por el onSnapshot de SiteConfigContext, sin volver a desplegar.

export type QuickLinkCategory = "web" | "pc" | "app";

export type QuickLink = {
  id: string;
  name: string;
  url: string;
  imageUrl?: string;
  category: QuickLinkCategory;
  visible: boolean;
};

export const QUICK_LINK_CATEGORIES: { id: QuickLinkCategory; label: string; Icon: LucideIcon }[] = [
  { id: "web", label: "Páginas web", Icon: Globe },
  { id: "pc", label: "Programas PC", Icon: Monitor },
  { id: "app", label: "Aplicaciones móviles", Icon: Smartphone },
];

export const QUICK_LINK_CATEGORY_LABELS: Record<QuickLinkCategory, string> = Object.fromEntries(
  QUICK_LINK_CATEGORIES.map((c) => [c.id, c.label])
) as Record<QuickLinkCategory, string>;

export function emptyQuickLink(): QuickLink {
  return { id: "", name: "", url: "", category: "web", visible: true };
}
