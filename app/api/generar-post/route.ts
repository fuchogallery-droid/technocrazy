import Anthropic from "@anthropic-ai/sdk";
import { NextResponse } from "next/server";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SERVICIOS: Record<string, string> = {
  design: "Diseño Gráfico (logos, identidad visual, branding)",
  web: "Páginas Web (Next.js, diseño moderno, SEO)",
  apps: "Apps Móviles (iOS y Android nativas)",
  systems: "Sistemas Automatizados (bots, CRM, flujos)",
  ai: "Inteligencia Artificial (chatbots, agentes, IA integrada)",
};

const TONOS: Record<string, string> = {
  educativo: "educativo e informativo, enseña algo útil",
  inspiracional: "inspiracional y motivador, conecta emocionalmente",
  venta: "orientado a la venta directa, con urgencia y CTA fuerte",
  testimonio: "basado en resultados reales y prueba social",
  curiosidad: "genera intriga y curiosidad, hace preguntar '¿cómo?'",
};

export async function POST(req: Request) {
  const { tema, servicio, tono } = await req.json();

  const servicioDesc = SERVICIOS[servicio] || servicio;
  const tonoDesc = TONOS[tono] || tono;

  const prompt = `Eres el community manager de TechnoCrazy, la agencia digital de Rafael Navarro (venezolano en Chicago, IL).

BRIEF:
- Tema del post: ${tema}
- Servicio a promocionar: ${servicioDesc}
- Tono: ${tonoDesc}
- Marca: TechnoCrazy | Rafael Navarro | WhatsApp: +1 779 431 8214 | IG: @igTechnoCrazy

REGLAS CRÍTICAS:
- NUNCA mencionar precios exactos — siempre "escríbeme" o "agenda tu consulta gratis"
- WhatsApp CTA: wa.me/17794318214
- Voz: cercana, directa, confianza. Rafael habla como persona real, no como corporación.
- Emojis: moderados (2-4 por caption), usarlos con propósito

Genera captions optimizados para CADA red social. Responde ÚNICAMENTE con este JSON (sin markdown, sin texto extra):

{
  "ig": {
    "caption": "Caption completo para Instagram (150-220 palabras, storytelling, CTA al final)",
    "hashtags": "#hashtag1 #hashtag2 ... (20-25 hashtags relevantes, mix popular+nicho+local)",
    "hora": "Hora recomendada de publicación (ej: 7:00 PM EST)",
    "emoji_portada": "Un solo emoji representativo del post"
  },
  "tiktok": {
    "caption": "Caption para TikTok (80-120 palabras, gancho primeras 3 palabras, CTA fuerte)",
    "hashtags": "#hashtag1 #hashtag2 ... (5-8 hashtags virales de TikTok)",
    "hora": "Hora recomendada",
    "emoji_portada": "Un emoji"
  },
  "x": {
    "caption": "Tweet (máximo 240 caracteres, directo, impactante, sin hashtags en el texto)",
    "hashtags": "#hashtag1 #hashtag2 (2-3 hashtags máximo)",
    "hora": "Hora recomendada",
    "emoji_portada": "Un emoji"
  },
  "linkedin": {
    "caption": "Caption LinkedIn (200-280 palabras, profesional pero personal, datos + historia + CTA)",
    "hashtags": "#hashtag1 #hashtag2 #hashtag3 (3-5 hashtags profesionales)",
    "hora": "Hora recomendada",
    "emoji_portada": "Un emoji"
  },
  "fb": {
    "caption": "Caption Facebook (120-180 palabras, conversacional, pregunta al inicio o al final)",
    "hashtags": "#hashtag1 #hashtag2 (3-5 hashtags)",
    "hora": "Hora recomendada",
    "emoji_portada": "Un emoji"
  },
  "imagen": {
    "titulo": "Título principal para la imagen (máx 6 palabras, IMPACTO)",
    "subtitulo": "Subtítulo (máx 10 palabras)",
    "cta_imagen": "Texto del botón/CTA en la imagen (máx 4 palabras)",
    "color_tema": "design|web|apps|systems|ai"
  }
}`;

  const response = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 2000,
    messages: [{ role: "user", content: prompt }],
  });

  const raw = response.content[0].type === "text" ? response.content[0].text : "{}";

  try {
    const data = JSON.parse(raw);
    return NextResponse.json({ ok: true, data });
  } catch {
    return NextResponse.json({ ok: false, error: "Parse error", raw }, { status: 500 });
  }
}
