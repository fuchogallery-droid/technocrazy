import { createHmac, timingSafeEqual } from "node:crypto";

/**
 * Puerta de acceso para los documentos personales bajo /privado/asilo.
 *
 * Cada persona tiene su propia sesión y su propia cookie: entrar en una no da
 * acceso a las demás. La clave de cada quien es su nombre, normalizado (sin
 * tildes, sin mayúsculas, sin espacios de más).
 *
 * Nota deliberada: un nombre de pila es una clave débil. Lo que realmente
 * mantiene esto reservado es que las URL no están enlazadas en ninguna parte,
 * están excluidas de robots.txt y del sitemap, y responden con X-Robots-Tag.
 */

export type Persona = {
  slug: string;
  nombre: string;
  /** Formas aceptadas de la clave, ya normalizadas. */
  claves: string[];
};

export const PERSONAS: Record<string, Persona> = {
  rafael: {
    slug: "rafael",
    nombre: "Rafael",
    claves: ["rafael", "rafael navarro", "rafael navarro coa", "rafael emilio navarro coa"],
  },
  zoraida: {
    slug: "zoraida",
    nombre: "Zoraida",
    claves: ["zoraida", "zoraida coa", "zoraida coa de navarro", "zoraida del carmen coa"],
  },
  angel: {
    slug: "angel",
    nombre: "Ángel",
    claves: ["angel", "angel navarro", "angel navarro coa", "angel eduardo navarro coa"],
  },
};

/** minúsculas, sin tildes, sin espacios repetidos. */
export function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function secretoServidor(): string {
  const v = (process.env.ASILO_SECRETO ?? "").trim();
  if (!v) throw new Error("Falta la variable de entorno ASILO_SECRETO");
  return v;
}

function igualSeguro(a: string, b: string): boolean {
  const ha = createHmac("sha256", "cmp").update(a).digest();
  const hb = createHmac("sha256", "cmp").update(b).digest();
  return timingSafeEqual(ha, hb);
}

export function claveCorrecta(slug: string, clave: string): boolean {
  const persona = PERSONAS[slug];
  if (!persona || !clave) return false;
  const entrada = normalizar(clave);
  // Se recorren todas las variantes siempre, sin cortar al primer acierto.
  return persona.claves.reduce(
    (ok, valida) => igualSeguro(entrada, valida) || ok,
    false
  );
}

export function nombreCookie(slug: string): string {
  return `privado_asilo_${slug}`;
}

export function tokenDeSesion(slug: string): string {
  return createHmac("sha256", secretoServidor()).update(`asilo:${slug}`).digest("hex");
}

export function tokenValido(slug: string, token: string | undefined): boolean {
  if (!token || !PERSONAS[slug]) return false;
  try {
    return igualSeguro(token, tokenDeSesion(slug));
  } catch {
    return false;
  }
}
