import { NextResponse } from "next/server";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Sirve las fotos que el panel guardó dentro de Firestore mientras el store de
// Vercel Blob está suspendido (ver lib/upload.ts). Cada foto es un documento
// `config/img-…` con el contenido en base64 — se eligió `config/` a propósito
// porque firestore.rules ya le da lectura pública y escritura con sesión, así
// que no hizo falta publicar reglas nuevas.
//
// El id se genera una sola vez y nunca se reutiliza, por eso la respuesta se
// puede cachear para siempre en el CDN.

export const dynamic = "force-dynamic";

export async function GET(_request: Request, ctx: RouteContext<"/api/img/[id]">) {
  const { id } = await ctx.params;
  if (!/^img-[A-Za-z0-9-]{6,80}$/.test(id)) {
    return new NextResponse("No encontrado", { status: 404 });
  }

  const snap = await getDoc(doc(db, "config", id));
  const data = snap.exists() ? snap.data() : null;
  const b64 = typeof data?.b64 === "string" ? data.b64 : "";
  if (!b64) return new NextResponse("No encontrado", { status: 404 });

  const bytes = Buffer.from(b64, "base64");
  return new NextResponse(bytes, {
    headers: {
      "Content-Type": typeof data?.mime === "string" ? data.mime : "image/jpeg",
      "Content-Length": String(bytes.byteLength),
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
