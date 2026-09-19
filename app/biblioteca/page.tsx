"use client";
import { orderBy } from "firebase/firestore";
import { ExternalLink } from "lucide-react";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import type { LibraryItem } from "@/lib/collections";

export default function BibliotecaPage() {
  const { t } = useLanguage();
  const tp = t.pages.biblioteca;
  const { items, loading } = useCollection<LibraryItem>("libraryItems", [orderBy("createdAt", "desc")]);

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {loading && <p className="text-gray-500 text-sm text-center">{tp.loading}</p>}
      {!loading && items.length === 0 && (
        <p className="text-gray-500 text-sm text-center">{tp.empty}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((it) => (
          <a
            key={it.id}
            href={it.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden flex flex-col card-hover"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
          >
            {it.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={it.imageUrl} alt={it.title} className="w-full h-48 object-cover" />
            ) : (
              <div className="w-full h-48 flex items-center justify-center" style={{ background: "linear-gradient(135deg,#7c4dff,#00e5ff)" }}>
                <span className="text-white font-black" style={{ fontSize: 13 }}>{t.labels.libraryType[it.type]}</span>
              </div>
            )}
            <div className="p-5 flex flex-col flex-1">
              <span className="mb-1.5" style={{ fontSize: 11, color: "#00e5ff", fontWeight: 700, textTransform: "uppercase" }}>
                {t.labels.libraryType[it.type]}
              </span>
              <h2 className="text-white font-bold mb-1.5" style={{ fontSize: 16 }}>{it.title}</h2>
              <p className="text-gray-400 mb-4" style={{ fontSize: 13, lineHeight: 1.6 }}>{it.description}</p>
              <div className="mt-auto flex items-center justify-between">
                {it.price && <span className="gradient-text font-bold" style={{ fontSize: 15 }}>{it.price}</span>}
                <span className="flex items-center gap-1 text-white font-semibold" style={{ fontSize: 13, marginLeft: "auto" }}>
                  {tp.view} <ExternalLink size={14} />
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
