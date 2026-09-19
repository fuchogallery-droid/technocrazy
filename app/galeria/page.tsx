"use client";
import { useState } from "react";
import { orderBy } from "firebase/firestore";
import { X, MessageSquare, Sparkles, Copy, Check } from "lucide-react";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import type { GalleryImage } from "@/lib/collections";

export default function GaleriaPage() {
  const { t } = useLanguage();
  const tp = t.pages.galeria;
  const { items, loading } = useCollection<GalleryImage>("galleryImages", [orderBy("createdAt", "desc")]);
  const [selected, setSelected] = useState<GalleryImage | null>(null);
  const [copied, setCopied] = useState(false);

  function copyPrompt(prompt: string) {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {loading && <p className="text-gray-500 text-sm text-center">{tp.loading}</p>}
      {!loading && items.length === 0 && (
        <p className="text-gray-500 text-sm text-center">{tp.empty}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((img) => (
          <button
            key={img.id}
            onClick={() => setSelected(img)}
            className="rounded-xl overflow-hidden card-hover text-left flex flex-col"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <p className="px-3 pt-3 pb-2 text-sm font-semibold truncate">
              {img.title || tp.noTitle}
            </p>
            <div
              className="w-full flex items-center justify-center"
              style={{ aspectRatio: "4 / 3", background: "rgba(0,0,0,0.25)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.url} alt={img.title || ""} className="max-w-full max-h-full object-contain" />
            </div>
            {img.prompt && (
              <p className="px-3 py-2.5 text-xs text-gray-500 line-clamp-3">{img.prompt}</p>
            )}
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(0,0,0,0.9)" }}
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white"
            aria-label={tp.close}
          >
            <X size={28} />
          </button>
          <div
            className="flex flex-col items-center rounded-xl overflow-hidden"
            style={{ maxWidth: "90vw", maxHeight: "90vh", background: "#0b0b16" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={selected.url}
                alt={selected.title || ""}
                className="object-contain"
                style={{ maxWidth: "90vw", maxHeight: "60vh" }}
              />
            </div>
            <div className="w-full p-4 sm:p-5 overflow-y-auto" style={{ maxHeight: "30vh" }}>
              <p className="text-white font-bold mb-2">{selected.title || tp.noTitle}</p>
              {selected.prompt && (
                <>
                  <p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">{tp.promptLabel}</p>
                  <p className="text-white/70 text-sm whitespace-pre-wrap mb-4">{selected.prompt}</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`https://chatgpt.com/?q=${encodeURIComponent(selected.prompt)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold"
                      style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
                    >
                      <MessageSquare size={14} /> {tp.openChatGPT}
                    </a>
                    <a
                      href="https://gemini.google.com/app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold"
                      style={{ background: "rgba(255,255,255,0.08)", color: "#fff" }}
                    >
                      <Sparkles size={14} /> {tp.openGemini}
                    </a>
                    <button
                      onClick={() => copyPrompt(selected.prompt!)}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold"
                      style={{
                        background: copied ? "rgba(0,230,118,0.15)" : "rgba(255,255,255,0.08)",
                        color: copied ? "#00e676" : "#fff",
                      }}
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />} {copied ? tp.copied : tp.copyPrompt}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
