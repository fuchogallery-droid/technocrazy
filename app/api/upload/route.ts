import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

const MAX_BYTES = 5 * 1024 * 1024; // 5MB

// Endpoint público (sin auth): TechnoCrazy no tiene cuentas de visitante, así que
// la subida de capturas de testimonios necesariamente no puede exigir login.
// Riesgo de abuso aceptado y mitigado solo con validación de tipo/tamaño.
export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  const file = form?.get("file");

  if (!file || !(file instanceof File)) {
    return NextResponse.json({ error: "Falta el archivo." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Solo se permiten imágenes." }, { status: 400 });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "La imagen supera el máximo de 5MB." }, { status: 400 });
  }

  const ext = file.name.split(".").pop() || "jpg";
  const pathname = `uploads/${crypto.randomUUID()}.${ext}`;

  const blob = await put(pathname, file, {
    access: "public",
    contentType: file.type,
    addRandomSuffix: false,
  });

  return NextResponse.json({ url: blob.url });
}
