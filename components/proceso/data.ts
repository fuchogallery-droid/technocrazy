// Contenido de las 5 páginas de proceso que se abren desde las tarjetas
// de Process.tsx ("Cómo Trabajo"). Bilingüe, mismo patrón que
// components/soluciones/data.ts pero más breve — sin precios ni FAQ,
// son pasos de un proceso, no productos.

import type { Lang } from "@/lib/i18n";

export type ProcesoPaso = {
  slug: string;
  num: number;
  icon: "message-circle" | "lightbulb" | "code" | "rocket" | "trending-up";
  badge: string;
  title: string;
  titleHighlight: string;
  tagline: string;
  accent: string;
  intro: string[];
  highlights: { title: string; desc: string }[];
  duration: string;
};

export const PROCESO_ES: ProcesoPaso[] = [
  {
    slug: "consulta-inicial",
    num: 1,
    icon: "message-circle",
    badge: "PASO 1 · SIN COSTO",
    title: "Paso 1:",
    titleHighlight: "Consulta Inicial",
    tagline: "Hablamos de tu idea antes de que gastes un centavo.",
    accent: "#2979ff",
    intro: [
      "Todo empieza con una conversación, no con una cotización. Me cuentas qué quieres lograr, cómo es tu negocio hoy, y qué te está frenando.",
      "No hace falta que llegues con la idea perfectamente definida — parte de mi trabajo es ayudarte a aterrizarla. Si al final de la charla ves que no es el momento o no soy la persona indicada, no pasa nada: no hay compromiso de ningún tipo.",
    ],
    highlights: [
      { title: "Sin costo, sin compromiso", desc: "Es una conversación real, no un discurso de ventas disfrazado." },
      { title: "20-30 minutos", desc: "Por WhatsApp, llamada o videollamada — como prefieras." },
      { title: "Sales con claridad", desc: "Aunque no avancemos juntos, entiendes mejor qué necesitas." },
    ],
    duration: "20-30 minutos",
  },
  {
    slug: "estrategia-digital",
    num: 2,
    icon: "lightbulb",
    badge: "PASO 2 · PLAN POR ESCRITO",
    title: "Paso 2:",
    titleHighlight: "Estrategia Digital",
    tagline: "Antes de escribir una línea de código, sabes exactamente qué vas a recibir.",
    accent: "#7c4dff",
    intro: [
      "Con lo que conversamos en la consulta inicial, diseño el plan: qué se va a construir, con qué tecnología, en cuánto tiempo, y cuánto cuesta.",
      "Te explico cada decisión técnica en palabras simples — no necesitas saber de programación para entender qué estás pagando y por qué.",
    ],
    highlights: [
      { title: "Plan de trabajo por escrito", desc: "Nada de acuerdos verbales que se olvidan a mitad de proyecto." },
      { title: "Arquitectura explicada en simple", desc: "Sabes qué herramientas se usan y por qué, sin tecnicismos." },
      { title: "Cotización clara desde el inicio", desc: "El precio no cambia a mitad de camino sin que lo hablemos antes." },
    ],
    duration: "1-2 días",
  },
  {
    slug: "diseno-desarrollo",
    num: 3,
    icon: "code",
    badge: "PASO 3 · CONSTRUCCIÓN",
    title: "Paso 3:",
    titleHighlight: "Diseño & Desarrollo",
    tagline: "Ves el avance real mientras se construye, no una demo al final.",
    accent: "#00e5ff",
    intro: [
      "Aquí es donde se construye de verdad. Trabajo en bloques cortos y te muestro avances reales durante el proceso — no esperas semanas a ciegas para ver si algo se parece a lo que pediste.",
      "Si algo necesita ajustarse, lo hacemos sobre la marcha. Es mucho más barato corregir un detalle a mitad de camino que rehacer todo al final.",
    ],
    highlights: [
      { title: "Avances que puedes ver", desc: "Enlaces de prueba reales, no capturas de pantalla ni promesas." },
      { title: "Ajustes sobre la marcha", desc: "Los cambios se hacen mientras se construye, no como un proyecto aparte." },
      { title: "Comunicación constante", desc: "Sabes en qué etapa va tu proyecto en cualquier momento que preguntes." },
    ],
    duration: "Según el alcance del proyecto",
  },
  {
    slug: "lanzamiento",
    num: 4,
    icon: "rocket",
    badge: "PASO 4 · EN VIVO",
    title: "Paso 4:",
    titleHighlight: "Lanzamiento",
    tagline: "Tu producto queda funcionando en producción — y es 100% tuyo.",
    accent: "#00e676",
    intro: [
      "Cuando todo está probado y aprobado por ti, lo publicamos. Tu web, app o sistema queda funcionando de verdad, no en un ambiente de pruebas.",
      "Te entrego todo: el código fuente, los accesos, y un manual para que sepas usarlo. No quedas dependiendo de mí para lo básico del día a día.",
    ],
    highlights: [
      { title: "Tu producto queda en línea", desc: "Publicado y funcionando, con tu dominio y tus datos." },
      { title: "Código y accesos completos", desc: "Todo te pertenece — nada queda atado a mi cuenta personal." },
      { title: "Capacitación incluida", desc: "Te enseño a manejarlo tú solo antes de terminar." },
    ],
    duration: "1 día",
  },
  {
    slug: "escala-crece",
    num: 5,
    icon: "trending-up",
    badge: "PASO 5 · ACOMPAÑAMIENTO",
    title: "Paso 5:",
    titleHighlight: "Escala & Crece",
    tagline: "El lanzamiento no es el final — es donde empieza a crecer.",
    accent: "#ff9800",
    intro: [
      "Un negocio digital no se queda quieto: cambian las necesidades, aparecen ideas nuevas, el volumen crece. Sigo disponible para agregar funciones, ajustar lo que haga falta, y asesorarte en los siguientes pasos.",
      "No es un contrato eterno ni una suscripción forzada — es simplemente que sigues teniendo a alguien que ya conoce tu proyecto por dentro.",
    ],
    highlights: [
      { title: "Acompañamiento continuo", desc: "Sigo disponible después de la entrega, no desaparezco." },
      { title: "Funciones nuevas cuando las necesites", desc: "El sistema crece contigo, no se queda congelado en el día 1." },
      { title: "Soporte técnico real", desc: "Un problema se resuelve rápido porque ya conozco cómo está construido." },
    ],
    duration: "Continuo, según lo que necesites",
  },
];

export const PROCESO_EN: ProcesoPaso[] = [
  {
    slug: "consulta-inicial",
    num: 1,
    icon: "message-circle",
    badge: "STEP 1 · FREE",
    title: "Step 1:",
    titleHighlight: "Initial Consultation",
    tagline: "We talk about your idea before you spend a cent.",
    accent: "#2979ff",
    intro: [
      "Everything starts with a conversation, not a quote. You tell me what you want to achieve, how your business works today, and what's holding you back.",
      "You don't need to show up with the idea perfectly defined — part of my job is helping you shape it. If by the end of the chat it's not the right time or I'm not the right fit, no problem: there's no commitment of any kind.",
    ],
    highlights: [
      { title: "Free, no commitment", desc: "A real conversation, not a sales pitch in disguise." },
      { title: "20-30 minutes", desc: "By WhatsApp, call, or video call — whatever you prefer." },
      { title: "You leave with clarity", desc: "Even if we don't move forward together, you understand your needs better." },
    ],
    duration: "20-30 minutes",
  },
  {
    slug: "estrategia-digital",
    num: 2,
    icon: "lightbulb",
    badge: "STEP 2 · WRITTEN PLAN",
    title: "Step 2:",
    titleHighlight: "Digital Strategy",
    tagline: "Before a single line of code, you know exactly what you'll get.",
    accent: "#7c4dff",
    intro: [
      "Using what we talked about in the initial consultation, I design the plan: what gets built, with what technology, in how much time, and how much it costs.",
      "I explain every technical decision in plain words — you don't need to know how to code to understand what you're paying for and why.",
    ],
    highlights: [
      { title: "Written work plan", desc: "No verbal agreements that get forgotten halfway through the project." },
      { title: "Architecture explained simply", desc: "You know what tools are used and why, no jargon." },
      { title: "Clear quote from the start", desc: "The price doesn't change midway without us talking about it first." },
    ],
    duration: "1-2 days",
  },
  {
    slug: "diseno-desarrollo",
    num: 3,
    icon: "code",
    badge: "STEP 3 · BUILDING",
    title: "Step 3:",
    titleHighlight: "Design & Development",
    tagline: "You see real progress as it's built, not a demo at the end.",
    accent: "#00e5ff",
    intro: [
      "This is where the real building happens. I work in short cycles and show you real progress along the way — you don't wait blindly for weeks to see if something resembles what you asked for.",
      "If something needs adjusting, we do it on the spot. It's much cheaper to fix a detail midway than to redo everything at the end.",
    ],
    highlights: [
      { title: "Progress you can actually see", desc: "Real test links, not screenshots or promises." },
      { title: "Adjustments on the fly", desc: "Changes happen while it's being built, not as a separate project." },
      { title: "Constant communication", desc: "You know where your project stands whenever you ask." },
    ],
    duration: "Depends on project scope",
  },
  {
    slug: "lanzamiento",
    num: 4,
    icon: "rocket",
    badge: "STEP 4 · LIVE",
    title: "Step 4:",
    titleHighlight: "Launch",
    tagline: "Your product goes live in production — and it's 100% yours.",
    accent: "#00e676",
    intro: [
      "Once everything is tested and approved by you, we publish it. Your website, app, or system goes live for real, not in a testing sandbox.",
      "I hand over everything: the source code, the credentials, and a manual so you know how to use it. You're not left depending on me for the day-to-day basics.",
    ],
    highlights: [
      { title: "Your product goes live", desc: "Published and running, with your domain and your data." },
      { title: "Full code and access", desc: "Everything belongs to you — nothing stays tied to my personal account." },
      { title: "Training included", desc: "I teach you to run it on your own before we wrap up." },
    ],
    duration: "1 day",
  },
  {
    slug: "escala-crece",
    num: 5,
    icon: "trending-up",
    badge: "STEP 5 · ONGOING SUPPORT",
    title: "Step 5:",
    titleHighlight: "Scale & Grow",
    tagline: "Launch isn't the end — it's where growth begins.",
    accent: "#ff9800",
    intro: [
      "A digital business doesn't stand still: needs change, new ideas come up, volume grows. I stay available to add features, adjust what's needed, and advise you on next steps.",
      "It's not an eternal contract or a forced subscription — it just means you keep having someone who already knows your project inside out.",
    ],
    highlights: [
      { title: "Ongoing support", desc: "I stay available after delivery, I don't disappear." },
      { title: "New features when you need them", desc: "The system grows with you, it doesn't stay frozen on day 1." },
      { title: "Real technical support", desc: "A problem gets solved fast because I already know how it's built." },
    ],
    duration: "Ongoing, as needed",
  },
];

export function getPaso(slug: string, lang: Lang = "es"): ProcesoPaso | undefined {
  const list = lang === "en" ? PROCESO_EN : PROCESO_ES;
  return list.find((p) => p.slug === slug);
}
