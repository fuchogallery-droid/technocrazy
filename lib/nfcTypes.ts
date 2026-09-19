// Catálogo de tipos de contenido para chips NFC — inspirado en las categorías
// de "Añadir un registro" de NFC Tools, pero limitado a lo que puede resolverse
// vía la ruta de redirección `app/c/[code]/route.ts` (todo pasa siempre por
// ahí, así que todos los tipos quedan con seguimiento/analíticas — a
// diferencia de escribir el registro NDEF final directo en el chip).
//
// Deliberadamente NO incluye la sección "Añadir una tarea" de NFC Tools
// (Wi-Fi como tarea, Bluetooth, ajustes del sistema, Tasker, Root): esas
// acciones solo funcionan si el teléfono que toca el chip tiene la app NFC
// Tools instalada y corriendo — es una automatización de esa app, no algo que
// un navegador pueda escribir/ejecutar. Nuestros chips deben funcionar para
// cualquier persona con cualquier teléfono, sin apps de terceros — son
// mecanismos incompatibles entre sí. Ver [[feedback_automatizar...]] en memoria.

export type NfcChipType =
  | "url"
  | "app"
  | "video"
  | "search"
  | "social"
  | "text"
  | "tel"
  | "sms"
  | "email"
  | "whatsapp"
  | "location"
  | "contact"
  | "bitcoin"
  | "wifi";

export type NfcFieldDef = {
  key: string;
  label: string;
  placeholder?: string;
  optional?: boolean;
  type?: "text" | "textarea" | "tel" | "email" | "url" | "select";
  options?: { value: string; label: string }[];
};

export type NfcTypeDef = {
  type: NfcChipType;
  label: string;
  description: string;
  fields: NfcFieldDef[];
};

export const SOCIAL_PLATFORMS = [
  { value: "instagram", label: "Instagram" },
  { value: "tiktok", label: "TikTok" },
  { value: "facebook", label: "Facebook" },
  { value: "x", label: "X (Twitter)" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "youtube", label: "YouTube" },
] as const;

export const NFC_TYPES: NfcTypeDef[] = [
  { type: "url", label: "Link / Página web", description: "Abre cualquier página al tocar el chip.", fields: [
    { key: "url", label: "URL de destino", placeholder: "https://tusitio.com", type: "url" },
  ]},
  { type: "whatsapp", label: "WhatsApp", description: "Abre un chat de WhatsApp con mensaje listo.", fields: [
    { key: "phone", label: "Número (con código de país)", placeholder: "17794318214", type: "tel" },
    { key: "message", label: "Mensaje precargado", placeholder: "Hola, vi su chip NFC…", optional: true, type: "textarea" },
  ]},
  { type: "contact", label: "Tarjeta de contacto", description: "Guarda tu contacto directo en la agenda del que toca el chip.", fields: [
    { key: "name", label: "Nombre completo" },
    { key: "phone", label: "Teléfono", type: "tel" },
    { key: "email", label: "Correo", optional: true, type: "email" },
    { key: "company", label: "Empresa", optional: true },
    { key: "title", label: "Cargo", optional: true },
  ]},
  { type: "social", label: "Red social", description: "Abre directo tu perfil de una red social.", fields: [
    { key: "platform", label: "Plataforma", type: "select", options: [...SOCIAL_PLATFORMS] },
    { key: "handle", label: "Usuario (sin @) o link completo", placeholder: "igtechnocrazy" },
  ]},
  { type: "location", label: "Ubicación", description: "Abre Google Maps en una dirección o lugar.", fields: [
    { key: "query", label: "Dirección o nombre del lugar", placeholder: "123 Main St, Rockford IL" },
  ]},
  { type: "tel", label: "Llamar", description: "Abre el marcador listo para llamar.", fields: [
    { key: "phone", label: "Número de teléfono", placeholder: "+17794318214", type: "tel" },
  ]},
  { type: "sms", label: "Mensaje de texto", description: "Abre SMS con número y texto precargado.", fields: [
    { key: "phone", label: "Número de teléfono", type: "tel" },
    { key: "message", label: "Mensaje precargado", optional: true, type: "textarea" },
  ]},
  { type: "email", label: "Correo", description: "Abre el correo con destinatario/asunto/mensaje listos.", fields: [
    { key: "to", label: "Correo destino", type: "email" },
    { key: "subject", label: "Asunto", optional: true },
    { key: "body", label: "Mensaje", optional: true, type: "textarea" },
  ]},
  { type: "video", label: "Video", description: "Abre un video (YouTube, etc.)", fields: [
    { key: "url", label: "Link del video", placeholder: "https://youtube.com/...", type: "url" },
  ]},
  { type: "app", label: "App / Tienda", description: "Abre una app instalada por su link, o la tienda para descargarla.", fields: [
    { key: "url", label: "Link de la app o de la tienda", placeholder: "https://play.google.com/... o miapp://abrir", type: "url" },
  ]},
  { type: "search", label: "Búsqueda", description: "Abre una búsqueda de Google ya escrita.", fields: [
    { key: "query", label: "Qué buscar", placeholder: "TechnoCrazy Chicago" },
  ]},
  { type: "bitcoin", label: "Bitcoin", description: "Abre la wallet con la dirección lista para pagar.", fields: [
    { key: "address", label: "Dirección Bitcoin" },
    { key: "amount", label: "Monto (opcional)", optional: true },
  ]},
  { type: "text", label: "Texto simple", description: "Muestra un mensaje de texto al tocar el chip.", fields: [
    { key: "text", label: "Texto a mostrar", type: "textarea" },
  ]},
  { type: "wifi", label: "Red WiFi", description: "Muestra el nombre y la contraseña de una red WiFi para copiar (no autoconecta: ningún navegador puede hacer eso).", fields: [
    { key: "ssid", label: "Nombre de la red (SSID)" },
    { key: "password", label: "Contraseña", optional: true },
  ]},
];

export function getTypeDef(type: NfcChipType): NfcTypeDef {
  return NFC_TYPES.find((t) => t.type === type) ?? NFC_TYPES[0];
}

function socialUrl(platform: string, handleRaw: string): string {
  const handle = handleRaw.trim();
  if (/^https?:\/\//i.test(handle)) return handle;
  const clean = handle.replace(/^@/, "");
  switch (platform) {
    case "instagram": return `https://instagram.com/${clean}`;
    case "tiktok": return `https://tiktok.com/@${clean}`;
    case "facebook": return `https://facebook.com/${clean}`;
    case "x": return `https://x.com/${clean}`;
    case "linkedin": return `https://linkedin.com/in/${clean}`;
    case "youtube": return `https://youtube.com/@${clean}`;
    default: return handle;
  }
}

function escapeVCardValue(v: string): string {
  return v.replace(/\\/g, "\\\\").replace(/,/g, "\\,").replace(/;/g, "\\;").replace(/\n/g, "\\n");
}

export type ChipTarget =
  | { kind: "redirect"; url: string }
  | { kind: "vcard"; vcard: string; filename: string }
  | { kind: "html"; title: string; body: string };

// Único punto de verdad para "qué pasa cuando se escanea este chip" — lo usa
// tanto el panel (para previsualizar) como la ruta de redirección real.
export function resolveChipTarget(type: NfcChipType, fields: Record<string, string>): ChipTarget {
  const f = (k: string) => (fields[k] || "").trim();

  switch (type) {
    case "url":
    case "app":
    case "video":
      return { kind: "redirect", url: f("url") };
    case "search":
      return { kind: "redirect", url: `https://www.google.com/search?q=${encodeURIComponent(f("query"))}` };
    case "social":
      return { kind: "redirect", url: socialUrl(f("platform") || "instagram", f("handle")) };
    case "location":
      return { kind: "redirect", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f("query"))}` };
    case "tel":
      return { kind: "redirect", url: `tel:${f("phone").replace(/\s+/g, "")}` };
    case "sms": {
      const phone = f("phone").replace(/\s+/g, "");
      const msg = f("message");
      return { kind: "redirect", url: `sms:${phone}${msg ? `?&body=${encodeURIComponent(msg)}` : ""}` };
    }
    case "email": {
      const params = new URLSearchParams();
      if (f("subject")) params.set("subject", f("subject"));
      if (f("body")) params.set("body", f("body"));
      const qs = params.toString();
      return { kind: "redirect", url: `mailto:${f("to")}${qs ? `?${qs}` : ""}` };
    }
    case "whatsapp": {
      const phone = f("phone").replace(/\D/g, "");
      const msg = f("message");
      return { kind: "redirect", url: `https://wa.me/${phone}${msg ? `?text=${encodeURIComponent(msg)}` : ""}` };
    }
    case "bitcoin":
      return { kind: "redirect", url: `bitcoin:${f("address")}${f("amount") ? `?amount=${encodeURIComponent(f("amount"))}` : ""}` };
    case "contact": {
      const vcard = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        `N:;${escapeVCardValue(f("name"))};;;`,
        `FN:${escapeVCardValue(f("name"))}`,
        f("company") ? `ORG:${escapeVCardValue(f("company"))}` : "",
        f("title") ? `TITLE:${escapeVCardValue(f("title"))}` : "",
        f("phone") ? `TEL;TYPE=CELL:${f("phone")}` : "",
        f("email") ? `EMAIL:${f("email")}` : "",
        "END:VCARD",
      ].filter(Boolean).join("\r\n");
      return { kind: "vcard", vcard, filename: `${f("name") || "contacto"}.vcf` };
    }
    case "text":
      return { kind: "html", title: "Mensaje", body: f("text") };
    case "wifi":
      return { kind: "html", title: `Red WiFi: ${f("ssid")}`, body: JSON.stringify({ ssid: f("ssid"), password: f("password") }) };
  }
}
