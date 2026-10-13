import { cookies } from "next/headers";
import { tokenValido, nombreCookie } from "@/lib/privadoAuth";
import { DOCUMENTO_HTML } from "../../doc-zoraida-en-rafael";

export const dynamic = "force-dynamic";

/**
 * La historia de Zoraida vista desde la sesión de Rafael (botón "Historia de
 * Zoraida"). Solo existe bajo /privado/asilo/rafael y solo abre con la cookie de
 * Rafael. La sesión de Zoraida, en cambio, nunca enlaza al documento de Rafael.
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

  if (slug !== "rafael") return noAutorizado;

  const almacen = await cookies();
  if (!tokenValido(slug, almacen.get(nombreCookie(slug))?.value)) {
    return noAutorizado;
  }

  return new Response(DOCUMENTO_HTML, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet",
      "Cache-Control": "no-store, private, max-age=0",
      "Referrer-Policy": "no-referrer",
    },
  });
}
