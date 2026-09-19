"use client";
import { useState } from "react";
import { orderBy } from "firebase/firestore";
import { ExternalLink } from "lucide-react";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import type { NewsCategory, NewsItem } from "@/lib/collections";

const FILTERS: (NewsCategory | "todas")[] = ["todas", "tecnologia", "ciencia", "ia"];

export default function NoticiasPage() {
  const { t } = useLanguage();
  const tp = t.pages.noticias;
  const { items, loading } = useCollection<NewsItem>("news", [orderBy("createdAt", "desc")]);
  const [filter, setFilter] = useState<NewsCategory | "todas">("todas");

  const filtered = filter === "todas" ? items : items.filter((n) => n.category === filter);

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className="rounded-full px-4 py-1.5 text-xs font-semibold transition-colors"
            style={
              filter === f
                ? { background: "linear-gradient(135deg,#2979ff,#7c4dff)", color: "#fff" }
                : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.6)" }
            }
          >
            {f === "todas" ? tp.filterAll : t.labels.newsCategory[f]}
          </button>
        ))}
      </div>

      {loading && <p className="text-gray-500 text-sm text-center">{tp.loading}</p>}
      {!loading && filtered.length === 0 && (
        <p className="text-gray-500 text-sm text-center">{tp.empty}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((n) => (
          <a
            key={n.id}
            href={n.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl overflow-hidden flex flex-col card-hover"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", textDecoration: "none" }}
          >
            {n.imageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={n.imageUrl} alt={n.title} className="w-full h-40 object-cover" />
            ) : (
              <div className="w-full h-40" style={{ background: "linear-gradient(135deg,#00e5ff,#2979ff)" }} />
            )}
            <div className="p-5 flex flex-col flex-1">
              <span className="mb-1.5" style={{ fontSize: 11, color: "#7c4dff", fontWeight: 700, textTransform: "uppercase" }}>
                {t.labels.newsCategory[n.category]}
              </span>
              <h2 className="text-white font-bold mb-1.5" style={{ fontSize: 15, lineHeight: 1.4 }}>{n.title}</h2>
              <p className="text-gray-400 mb-4" style={{ fontSize: 13, lineHeight: 1.6 }}>{n.summary}</p>
              <span className="mt-auto flex items-center gap-1 text-white font-semibold" style={{ fontSize: 13 }}>
                {tp.readMore} <ExternalLink size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </PageShell>
  );
}
