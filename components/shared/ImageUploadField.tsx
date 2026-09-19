"use client";
import { useRef, useState } from "react";
import { X, Loader2, ImagePlus } from "lucide-react";
import { uploadImage } from "@/lib/upload";

// Dropzone simple + preview, reusado en todos los formularios admin y en el de
// testimonios. `multiple` permite varias imágenes (ej. capturas de testimonio);
// sin `multiple` mantiene una sola URL (`value[0]`).
export default function ImageUploadField({
  value,
  onChange,
  multiple = false,
  max = 5,
}: {
  value: string[];
  onChange: (urls: string[]) => void;
  multiple?: boolean;
  max?: number;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return;
    setError("");
    setUploading(true);
    try {
      const picked = Array.from(files).slice(0, multiple ? max - value.length : 1);
      const urls = await Promise.all(picked.map((f) => uploadImage(f)));
      onChange(multiple ? [...value, ...urls] : urls);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir la imagen.");
    } finally {
      setUploading(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  function removeAt(i: number) {
    onChange(value.filter((_, idx) => idx !== i));
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-2">
        {value.map((url, i) => (
          <div key={url} className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt="" className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => removeAt(i)}
              className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.7)" }}
              aria-label="Quitar imagen"
            >
              <X size={12} color="#fff" />
            </button>
          </div>
        ))}
        {(multiple ? value.length < max : value.length === 0) && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="w-20 h-20 rounded-lg flex flex-col items-center justify-center gap-1 flex-shrink-0"
            style={{ border: "1px dashed rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.5)" }}
          >
            {uploading ? <Loader2 size={18} className="animate-spin" /> : <ImagePlus size={18} />}
            <span style={{ fontSize: 10 }}>{uploading ? "Subiendo…" : "Subir"}</span>
          </button>
        )}
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple={multiple}
        className="hidden"
        onChange={(e) => handleFiles(e.target.files)}
      />
      {error && <p className="text-red-400" style={{ fontSize: 11 }}>{error}</p>}
    </div>
  );
}
