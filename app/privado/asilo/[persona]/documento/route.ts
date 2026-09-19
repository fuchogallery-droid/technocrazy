import { cookies } from "next/headers";
import { tokenValido, nombreCookie, PERSONAS } from "@/lib/privadoAuth";
import { DOCUMENTOS } from "../../documentos";

export const dynamic = "force-dynamic";

/**
 * Sirve el documento sólo si la cookie de esa persona es válida. Sin cookie no
 * se emite ni un byte del contenido, así que la URL por sí sola no sirve.
 */
export async function GET(
  _req: Request,
  { params }: { params: Promise<{ persona: string }> }
) {
  const { persona: slug } = await params;

  const noAutorizado = new Response("No autorizado.", {
    status: 401,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow",
      "Cache-Control": "no-store",
    },
  });

  if (!PERSONAS[slug]) return noAutorizado;

  const almacen = await cookies();
  if (!tokenValido(slug, almacen.get(nombreCookie(slug))?.value)) {
    return noAutorizado;
  }

  const html = DOCUMENTOS[slug];
  if (!html) return new Response("Documento no disponible todavía.", { status: 404 });

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
      "Cache-Control": "no-store, private, max-age=0",
      "Referrer-Policy": "no-referrer",
    },
  });
}
