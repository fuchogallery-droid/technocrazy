import {
  Apple,
  Bot,
  BookOpen,
  Box,
  DollarSign,
  FileText,
  Globe,
  Image as ImageIcon,
  Monitor,
  Radio,
  ShoppingBag,
  Smartphone,
  Volume2,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";

// Productos de la sección "Productos" de la página de inicio.
//
// Viven dentro del documento `config/site` de Firestore (campo `homeProducts`),
// NO en una colección aparte: así no hace falta publicar reglas nuevas de
// Firestore (config/site ya es lectura pública + escritura solo con sesión) y el
// sitio los recibe en vivo por el `onSnapshot` que ya tiene SiteConfigContext.
// Son pocos documentos (un puñado de tarjetas), así que un array en un solo doc
// está muy por debajo del límite de 1MB.

export type HomeProductAction = "download" | "link" | "soon";

export type HomeProduct = {
  id: string;
  name: string;
  desc: string;
  tag: string;
  accent: string; // clave de PRODUCT_ACCENTS
  icon: string; // clave de PRODUCT_ICONS
  imageUrl?: string;
  action: HomeProductAction;
  fileUrl?: string; // acción "download": archivo en Vercel Blob
  fileName?: string;
  fileSize?: number; // bytes
  linkUrl?: string; // acción "link"
  badge?: string; // etiqueta de precio/estado: "Gratis", "$17", …
  platform?: string; // clave de PRODUCT_PLATFORMS: en qué se usa el producto
  visible: boolean;
};

// "¿Esto qué es?" — la etiqueta que se pone sobre la portada de la tarjeta para
// que se vea de un golpe si es una app de teléfono, un programa de PC, etc.
// Es un catálogo cerrado (no texto libre) justamente para poder traducirlo: lo
// que Rafael escribe en el panel se queda en el idioma en que lo escribió.
export const PRODUCT_PLATFORMS: { id: string; es: string; en: string; admin: string; Icon: LucideIcon }[] = [
  { id: "android", es: "App Android", en: "Android app", admin: "App Android (APK)", Icon: Smartphone },
  { id: "ios", es: "App iPhone", en: "iPhone app", admin: "App iPhone", Icon: Apple },
  { id: "movil", es: "App móvil", en: "Mobile app", admin: "App móvil (los dos)", Icon: Smartphone },
  { id: "pc", es: "Programa para PC", en: "Windows program", admin: "Programa para PC", Icon: Monitor },
  { id: "web", es: "App web", en: "Web app", admin: "App web (navegador)", Icon: Globe },
  { id: "doc", es: "Guía / documento", en: "Guide / document", admin: "Guía o documento", Icon: FileText },
];

// Igual que con los íconos de producto: mapas, no funciones. Una función que
// devuelve un objeto con un componente dentro también la marca el lint del
// compilador de React como "componente creado durante el render".
export const PLATFORM_ICON_MAP: Record<string, LucideIcon> = Object.fromEntries(
  PRODUCT_PLATFORMS.map((p) => [p.id, p.Icon])
);

export const PLATFORM_LABELS: Record<string, { es: string; en: string; admin: string }> =
  Object.fromEntries(PRODUCT_PLATFORMS.map((p) => [p.id, { es: p.es, en: p.en, admin: p.admin }]));

export const PRODUCT_ACCENTS: { id: string; label: string; solid: string; grad: string; glow: string }[] = [
  { id: "violeta", label: "Violeta", solid: "#7c4dff", grad: "linear-gradient(135deg,#7c4dff,#a855f7)", glow: "rgba(124,77,255,0.30)" },
  { id: "azul", label: "Azul", solid: "#2979ff", grad: "linear-gradient(135deg,#2979ff,#00bcd4)", glow: "rgba(41,121,255,0.30)" },
  { id: "cian", label: "Cian", solid: "#00bcd4", grad: "linear-gradient(135deg,#00bcd4,#00e5ff)", glow: "rgba(0,188,212,0.30)" },
  { id: "verde", label: "Verde", solid: "#00c853", grad: "linear-gradient(135deg,#00e676,#00bcd4)", glow: "rgba(0,230,118,0.30)" },
  { id: "ambar", label: "Ámbar", solid: "#ff9800", grad: "linear-gradient(135deg,#ff9800,#ff6b35)", glow: "rgba(255,152,0,0.30)" },
  { id: "rosa", label: "Rosa", solid: "#ff2d78", grad: "linear-gradient(135deg,#ff2d78,#7c3aed)", glow: "rgba(255,45,120,0.35)" },
];

export const PRODUCT_ICONS: { id: string; label: string; Icon: LucideIcon }[] = [
  { id: "zap", label: "Rayo", Icon: Zap },
  { id: "voz", label: "Voz", Icon: Volume2 },
  { id: "radio", label: "Radio", Icon: Radio },
  { id: "movil", label: "Móvil", Icon: Smartphone },
  { id: "pc", label: "PC", Icon: Monitor },
  { id: "tienda", label: "Tienda", Icon: ShoppingBag },
  { id: "imagen", label: "Imagen", Icon: ImageIcon },
  { id: "dinero", label: "Dinero", Icon: DollarSign },
  { id: "libro", label: "Libro", Icon: BookOpen },
  { id: "bot", label: "Bot", Icon: Bot },
  { id: "herramienta", label: "Herramienta", Icon: Wrench },
  { id: "caja", label: "Caja", Icon: Box },
];

export function accentOf(id?: string) {
  return PRODUCT_ACCENTS.find((a) => a.id === id) ?? PRODUCT_ACCENTS[0];
}

// Mapa (no función) para buscar el ícono al pintar: el lint del compilador de
// React marca como error una función que DEVUELVE un componente y se llama
// durante el render ("Cannot create components during render"); un acceso a
// propiedad no tiene ese problema.
export const PRODUCT_ICON_MAP: Record<string, LucideIcon> = Object.fromEntries(
  PRODUCT_ICONS.map((i) => [i.id, i.Icon])
);

export const FALLBACK_PRODUCT_ICON: LucideIcon = Box;

// Vercel Blob sirve el archivo con Content-Disposition: attachment solo si se le
// pide con `?download=1`. Sin esto el navegador abre el ZIP/APK en vez de
// descargarlo, y el atributo `download` de <a> se ignora al ser otro dominio.
export function downloadHref(url: string) {
  if (!url) return url;
  if (!url.includes(".public.blob.vercel-storage.com")) return url;
  return url.includes("?") ? url : `${url}?download=1`;
}

export function formatFileSize(bytes?: number) {
  if (!bytes || bytes <= 0) return "";
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) return `${mb.toFixed(1).replace(".", ",")} MB`;
  return `${Math.max(1, Math.round(bytes / 1024))} KB`;
}

export function emptyHomeProduct(): HomeProduct {
  return {
    id: "",
    name: "",
    desc: "",
    tag: "",
    accent: "violeta",
    icon: "caja",
    action: "download",
    badge: "Gratis",
    platform: "none",
    visible: true,
  };
}
