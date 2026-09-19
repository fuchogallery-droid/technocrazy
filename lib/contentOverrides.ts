// Soporte del editor visual: permite reemplazar cualquier texto de `lib/i18n.ts`
// con una versión guardada en Firestore (colección `content`, un documento por
// idioma) sin volver a desplegar el sitio.
//
// Un "path" identifica un texto dentro del árbol de traducciones:
//   "hero.subtitle"            → translations.es.hero.subtitle
//   "nav.links.3.label"        → translations.es.nav.links[3].label
//   "services.titleVariants.0" → translations.es.services.titleVariants[0]
//
// En Firestore los puntos se guardan como "~" porque Firestore trata el punto
// como separador de campos anidados en algunas operaciones.

export const pathToKey = (path: string) => path.replace(/\./g, "~");
export const keyToPath = (key: string) => key.replace(/~/g, ".");

type Json = unknown;

// Recorre el árbol de traducciones y devuelve { path: textoActual } de todas
// las hojas de tipo string. Es lo que alimenta tanto al buscador del panel
// como al detector de clics sobre la página.
export function flattenStrings(node: Json, prefix = ""): Record<string, string> {
  const out: Record<string, string> = {};

  if (typeof node === "string") {
    if (prefix) out[prefix] = node;
    return out;
  }

  if (Array.isArray(node)) {
    node.forEach((child, i) => {
      Object.assign(out, flattenStrings(child, prefix ? `${prefix}.${i}` : String(i)));
    });
    return out;
  }

  if (node && typeof node === "object") {
    for (const [k, v] of Object.entries(node as Record<string, Json>)) {
      Object.assign(out, flattenStrings(v, prefix ? `${prefix}.${k}` : k));
    }
  }

  return out;
}

// Copia profunda mínima: solo clona objetos/arrays planos de datos, que es
// todo lo que hay en i18n.ts.
function deepClone<T>(value: T): T {
  if (Array.isArray(value)) return value.map(deepClone) as unknown as T;
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) out[k] = deepClone(v);
    return out as T;
  }
  return value;
}

function setByPath(root: Record<string, unknown>, path: string, value: string) {
  const segments = path.split(".");
  let cursor: Record<string, unknown> | unknown[] = root;

  for (let i = 0; i < segments.length - 1; i++) {
    const seg = segments[i];
    const next = Array.isArray(cursor)
      ? (cursor as unknown[])[Number(seg)]
      : (cursor as Record<string, unknown>)[seg];
    // Si el path ya no existe en el árbol base, se ignora el override en vez
    // de inventar estructura nueva (un override viejo de una clave borrada
    // no debe romper el render).
    if (!next || typeof next !== "object") return;
    cursor = next as Record<string, unknown> | unknown[];
  }

  const last = segments[segments.length - 1];
  if (Array.isArray(cursor)) {
    const idx = Number(last);
    if (Number.isInteger(idx) && idx >= 0 && idx < cursor.length) cursor[idx] = value;
  } else if (last in (cursor as Record<string, unknown>)) {
    (cursor as Record<string, unknown>)[last] = value;
  }
}

// Devuelve una copia del árbol de traducciones con los overrides aplicados.
// `overrides` viene tal cual de Firestore, con las claves en formato "~".
export function applyOverrides<T>(base: T, overrides: Record<string, unknown> | null | undefined): T {
  if (!overrides) return base;

  const entries = Object.entries(overrides).filter(
    ([, v]) => typeof v === "string" && v.length > 0
  ) as [string, string][];
  if (entries.length === 0) return base;

  const clone = deepClone(base) as unknown as Record<string, unknown>;
  for (const [key, value] of entries) setByPath(clone, keyToPath(key), value);
  return clone as unknown as T;
}

// Etiqueta legible de una sección para agrupar en el panel del editor.
export const SECTION_LABELS: Record<string, string> = {
  nav: "Menú de navegación",
  hero: "Portada (Hero)",
  services: "Servicios",
  deliverables: "Lo que incluye",
  products: "Productos",
  learning: "Tienda / Aprendizaje",
  testimonials: "Testimonios",
  about: "Sobre mí",
  novedades: "Novedades",
  process: "Proceso",
  cta: "Llamado final",
  footer: "Pie de página",
  chat: "Chat / Agente",
};

export const sectionOf = (path: string) => path.split(".")[0];
export const sectionLabel = (section: string) => SECTION_LABELS[section] ?? section;
