import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { compressImage, compressImageUnder } from "@/lib/image-compress";

// Sube una imagen y devuelve la dirección con la que se va a mostrar.
//
// Hay tres caminos, en este orden:
//   1. Vercel Blob (/api/upload) — el de siempre, devuelve una URL del CDN.
//   2. Si Blob falla (hoy el store está SUSPENDIDO), la foto se guarda en
//      Firestore como documento `config/img-…` y se sirve desde /api/img/<id>.
//      Escribir en `config/` exige sesión, así que este camino es del panel.
//   3. Sin sesión (formulario público de testimonios) la foto viaja como data
//      URL dentro del propio documento del testimonio.
//
// Cuando Rafael reactive el store de Blob, el camino 1 vuelve a funcionar solo
// y las fotos nuevas vuelven a ser URLs normales; las que ya se guardaron por
// el camino 2 se siguen sirviendo igual.

// Tope de un documento de Firestore: 1MB. El base64 engorda ~33%, así que la
// foto original tiene que quedar bastante por debajo.
const MAX_DOC_BYTES = 600 * 1024;
const MAX_INLINE_BYTES = 150 * 1024;

export async function uploadImage(file: File): Promise<string> {
  const compressed = await compressImage(file);

  const blobUrl = await uploadToBlob(compressed);
  if (blobUrl) return blobUrl;

  if (auth.currentUser) return saveInFirestore(compressed);
  return toDataUrl(await compressImageUnder(file, MAX_INLINE_BYTES));
}

async function uploadToBlob(file: File): Promise<string | null> {
  try {
    const form = new FormData();
    form.append("file", file);
    const res = await fetch("/api/upload", { method: "POST", body: form });
    if (!res.ok) return null;
    const data = (await res.json()) as { url?: string };
    return data?.url || null;
  } catch {
    return null;
  }
}

async function saveInFirestore(file: File): Promise<string> {
  const small = await compressImageUnder(file, MAX_DOC_BYTES);
  const b64 = (await toDataUrl(small)).split(",")[1] || "";
  if (!b64) throw new Error("No se pudo leer la imagen.");
  if (b64.length > 900 * 1024) {
    throw new Error("La imagen es demasiado grande. Prueba con una más pequeña.");
  }

  const id = `img-${crypto.randomUUID()}`;
  await setDoc(doc(db, "config", id), {
    b64,
    mime: small.type || "image/jpeg",
    name: file.name,
    createdAt: serverTimestamp(),
  });
  return `/api/img/${id}`;
}

function toDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("No se pudo leer la imagen."));
    reader.readAsDataURL(file);
  });
}
