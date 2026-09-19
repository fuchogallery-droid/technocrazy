"use client";
import { useRef, useState } from "react";
import { upload } from "@vercel/blob/client";
import { FileUp, Loader2, Trash2 } from "lucide-react";
import { auth } from "@/lib/firebase";
import { formatFileSize } from "@/lib/homeProducts";

// Campo para subir el archivo descargable de un producto (APK, ZIP, EXE, PDF…).
// Sube directo del navegador a Vercel Blob usando el token que emite
// /api/upload-archivo, así que no lo limita el tope de 4.5MB del cuerpo de una
// función serverless. Con `multipart` el archivo va en trozos en paralelo y los
// trozos que fallan se reintentan solos.

export type UploadedFile = { url: string; name: string; size: number };

export default function FileUploadField({
  value,
  onChange,
}: {
  value: UploadedFile | null;
  onChange: (file: UploadedFile | null) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [error, setError] = useState("");

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setError("");
    setProgress(0);
    try {
      const idToken = await auth.currentUser?.getIdToken();
      if (!idToken) throw new Error("Sesión expirada — vuelve a entrar al panel.");

      const blob = await upload(`descargas/${file.name}`, file, {
        access: "public",
        handleUploadUrl: "/api/upload-archivo",
        multipart: true,
        headers: { authorization: `Bearer ${idToken}` },
        onUploadProgress: (p) => setProgress(Math.round(p.percentage)),
      });

      onChange({ url: blob.url, name: file.name, size: file.size });
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo subir el archivo.");
    } finally {
      setProgress(null);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div>
      {value ? (
        <div className="adm-row flex items-center justify-between" style={{ gap: 12 }}>
          <div className="min-w-0">
            <p className="text-white font-semibold truncate" style={{ fontSize: 13 }}>{value.name}</p>
            <p className="truncate" style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
              {formatFileSize(value.size)} · {value.url}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onChange(null)}
            aria-label="Quitar archivo"
            title="Quitar archivo"
            className="flex items-center justify-center flex-shrink-0"
            style={{ width: 32, height: 32, borderRadius: 8, background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.24)", color: "#ff8080" }}
          >
            <Trash2 size={14} />
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={progress !== null}
          className="w-full flex items-center justify-center gap-2 font-semibold"
          style={{
            minHeight: 48,
            borderRadius: 10,
            border: "1px dashed rgba(255,255,255,0.25)",
            color: "rgba(255,255,255,0.6)",
            fontSize: 13,
          }}
        >
          {progress !== null ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Subiendo… {progress}%
            </>
          ) : (
            <>
              <FileUp size={16} /> Subir archivo (APK, ZIP, EXE, PDF…)
            </>
          )}
        </button>
      )}

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={(e) => handleFile(e.target.files?.[0])}
      />
      {error && <p className="text-red-400" style={{ fontSize: 11, marginTop: 8 }}>{error}</p>}
    </div>
  );
}
