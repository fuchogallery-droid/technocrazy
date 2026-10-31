import {
  Bot,
  Briefcase,
  Code2,
  Contact,
  Cpu,
  CreditCard,
  Globe,
  Link2,
  MapPin,
  Menu as MenuIcon,
  MessageCircle,
  Nfc,
  Palette,
  Rocket,
  Share2,
  Smartphone,
  Star,
  Wifi,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Secciones nuevas de la página de inicio. Igual que homeProducts, viven dentro
// de `config/site` (no en colecciones aparte) para no tocar las reglas de
// Firestore y para que el sitio las reciba en vivo con SiteConfigContext.

// ── Páginas web (carrusel automático de derecha a izquierda) ──────────────
export type WebPageItem = {
  id: string;
  name: string;
  desc: string;
  url: string;
  imageUrl?: string; // si falta, se usa una captura automática de la URL
  buttonLabel?: string; // por defecto "Visitar"
  visible: boolean;
};

export function emptyWebPage(): WebPageItem {
  return { id: "", name: "", desc: "", url: "", imageUrl: "", buttonLabel: "", visible: true };
}

// ── Servicios propios agregados desde el panel ────────────────────────────
// Se suman a las seis tarjetas fijas de la sección Servicios.
export const SERVICE_ICONS: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "diseno", label: "Diseño", Icon: Palette },
  { id: "web", label: "Web", Icon: Globe },
  { id: "apps", label: "Apps móviles", Icon: Smartphone },
  { id: "sistemas", label: "Sistemas", Icon: Cpu },
  { id: "robot", label: "Robots / IA", Icon: Bot },
  { id: "codigo", label: "Programación", Icon: Code2 },
  { id: "rayo", label: "Automatización", Icon: Zap },
  { id: "herramienta", label: "Soporte", Icon: Wrench },
  { id: "cohete", label: "Lanzamiento", Icon: Rocket },
  { id: "maletin", label: "Consultoría", Icon: Briefcase },
];

export const SERVICE_ICON_MAP: Record<string, LucideIcon> = Object.fromEntries(
  SERVICE_ICONS.map((i) => [i.id, i.Icon])
);

export type CustomService = {
  id: string;
  title: string;
  desc: string;
  price: string;
  priceNote: string;
  icon: string; // clave de SERVICE_ICONS
  accent: string; // clave de PRODUCT_ACCENTS
  linkUrl?: string; // si falta, el botón abre WhatsApp
  visible: boolean;
};

export function emptyCustomService(): CustomService {
  return { id: "", title: "", desc: "", price: "", priceNote: "", icon: "codigo", accent: "azul", linkUrl: "", visible: true };
}

// ── Chip NFC: funciones que se muestran en el inicio ──────────────────────
export const NFC_FEATURE_ICONS: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "tarjeta", label: "Tarjeta", Icon: CreditCard },
  { id: "contacto", label: "Contacto", Icon: Contact },
  { id: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
  { id: "wifi", label: "Wi-Fi", Icon: Wifi },
  { id: "redes", label: "Redes", Icon: Share2 },
  { id: "enlace", label: "Enlace", Icon: Link2 },
  { id: "mapa", label: "Ubicación", Icon: MapPin },
  { id: "menu", label: "Menú", Icon: MenuIcon },
  { id: "resena", label: "Reseñas", Icon: Star },
  { id: "nfc", label: "NFC", Icon: Nfc },
];

export const NFC_FEATURE_ICON_MAP: Record<string, LucideIcon> = Object.fromEntries(
  NFC_FEATURE_ICONS.map((i) => [i.id, i.Icon])
);

export type NfcFeature = {
  id: string;
  title: string;
  desc: string;
  detail?: string; // texto que se despliega al tocar la tarjeta
  icon: string; // clave de NFC_FEATURE_ICONS
  visible: boolean;
};

export function emptyNfcFeature(): NfcFeature {
  return { id: "", title: "", desc: "", detail: "", icon: "nfc", visible: true };
}

// Las que se ven mientras Rafael no haya guardado las suyas en el panel.
export const DEFAULT_NFC_FEATURES: NfcFeature[] = [
  { id: "d-tarjeta", title: "Tarjeta de presentación", desc: "Tu perfil completo con un toque.", detail: "El cliente acerca el teléfono al chip y se abre tu página con tus servicios, fotos y botones de contacto.", icon: "tarjeta", visible: true },
  { id: "d-contacto", title: "Guardar contacto", desc: "Tu número directo en su agenda.", detail: "Descarga tu tarjeta de contacto (vCard) para que te guarde con nombre, teléfono y correo en un paso.", icon: "contacto", visible: true },
  { id: "d-whatsapp", title: "WhatsApp directo", desc: "Abre el chat contigo al instante.", detail: "El toque abre una conversación de WhatsApp contigo con el mensaje ya escrito.", icon: "whatsapp", visible: true },
  { id: "d-wifi", title: "Clave del Wi-Fi", desc: "Comparte la red sin dictar la clave.", detail: "Muestra el nombre y la clave de tu Wi-Fi para copiarla; ideal para negocios y visitas.", icon: "wifi", visible: true },
  { id: "d-redes", title: "Redes sociales", desc: "Te siguen con un toque.", detail: "Lleva directo a tu Instagram, TikTok o Facebook para que te sigan sin buscarte.", icon: "redes", visible: true },
  { id: "d-resena", title: "Reseñas y menú", desc: "Opiniones, catálogo o menú.", detail: "Abre tu enlace de reseñas de Google, tu catálogo o tu menú digital.", icon: "resena", visible: true },
];
