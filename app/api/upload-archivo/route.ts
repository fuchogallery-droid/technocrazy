import { NextResponse } from "next/server";
import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { requireAdminEmail } from "@/lib/adminAuth";

// Subida de archivos descargables (APK, ZIP, EXE, PDF…) para los productos de la
// página de inicio.
//
// A diferencia de /api/upload (imágenes, que pasan por el servidor), aquí el
// navegador sube el archivo DIRECTO a Vercel Blob con un token temporal que
// genera esta ruta: el cuerpo de una función serverless de Vercel no puede pasar
// de 4.5MB, y un APK o un instalador pesan mucho más que eso.
//
// Esta ruta sí exige sesión de admin (el token que emite permite escribir en el
// store), a diferencia del endpoint de imágenes que es público por necesidad.

const MAX_BYTES = 300 * 1024 * 1024; // 300MB

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const result = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        // El navegador manda el ID token de Firebase en la cabecera
        // Authorization (ver components/admin/FileUploadField.tsx).
        await requireAdminEmail(request);
        return {
          // Sin lista blanca de tipos: Windows/Android reportan el MIME de un
          // .exe o .apk de formas distintas según el navegador, y filtrar por
          // tipo terminaba rechazando archivos válidos. El límite real es el
          // tamaño y el hecho de que solo el admin puede pedir el token.
          maximumSizeInBytes: MAX_BYTES,
          addRandomSuffix: true,
        };
      },
      // El callback de "subida terminada" no se usa: el panel guarda la URL que
      // devuelve upload() al terminar. En localhost Vercel Blob tampoco puede
      // llamar a este callback porque no hay URL pública.
      onUploadCompleted: async () => {},
    });

    return NextResponse.json(result);
  } catch (err) {
    const message = err instanceof Error ? err.message : "error";
    const status = message === "unauthorized" ? 401 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
