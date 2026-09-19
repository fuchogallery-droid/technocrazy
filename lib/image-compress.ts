// Comprime una imagen en el navegador (canvas resize) antes de subirla, para no
// mandar fotos de cámara de 10+MB a Vercel Blob.
export async function compressImage(file: File, maxDim = 1600, quality = 0.82): Promise<File> {
  if (!file.type.startsWith("image/") || file.type === "image/svg+xml") return file;

  const bitmap = await createImageBitmap(file).catch(() => null);
  if (!bitmap) return file;

  const scale = Math.min(1, maxDim / Math.max(bitmap.width, bitmap.height));
  const width = Math.round(bitmap.width * scale);
  const height = Math.round(bitmap.height * scale);

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, width, height);

  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", quality)
  );
  if (!blob) return file;

  const newName = file.name.replace(/\.[^.]+$/, "") + ".jpg";
  return new File([blob], newName, { type: "image/jpeg" });
}

// Igual que `compressImage`, pero insistiendo hasta que la foto pese menos de
// `maxBytes`. Hace falta cuando la foto no va a un almacén de archivos sino
// dentro de un documento de Firestore (tope duro de 1MB por documento): ahí no
// vale "más o menos pequeña", tiene que caber sí o sí.
export async function compressImageUnder(file: File, maxBytes: number): Promise<File> {
  let out = await compressImage(file);
  if (out.size <= maxBytes) return out;

  for (const [dim, quality] of [
    [1400, 0.72],
    [1100, 0.64],
    [900, 0.56],
    [700, 0.45],
  ] as const) {
    out = await compressImage(file, dim, quality);
    if (out.size <= maxBytes) break;
  }
  return out;
}
