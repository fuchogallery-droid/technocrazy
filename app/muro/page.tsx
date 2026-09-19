"use client";
import { where } from "firebase/firestore";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Post } from "@/lib/collections";

export default function MuroPage() {
  const { t, lang } = useLanguage();
  const tp = t.pages.muro;
  // Orden en cliente para no requerir índice compuesto (ver useCollection).
  const { items: posts, loading } = useCollection<Post>(
    "posts",
    [where("published", "==", true)],
    "createdAt"
  );

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {loading && <p className="text-gray-500 text-sm text-center">{tp.loading}</p>}
      {!loading && posts.length === 0 && (
        <p className="text-gray-500 text-sm text-center">{tp.empty}</p>
      )}
      <div className="flex flex-col gap-6 mx-auto" style={{ maxWidth: 680 }}>
        {posts.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl overflow-hidden"
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {p.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.imageUrl} alt="" className="w-full max-h-96 object-cover" />
            )}
            <div className="p-6">
              <h2 className="text-white font-bold mb-2" style={{ fontSize: 20 }}>{p.title}</h2>
              <p className="text-gray-400 whitespace-pre-line" style={{ fontSize: 14, lineHeight: 1.7 }}>{p.body}</p>
              {p.createdAt && (
                <p className="text-gray-600 mt-4" style={{ fontSize: 12 }}>
                  {p.createdAt.toDate().toLocaleDateString(lang === "en" ? "en-US" : "es-ES", { day: "2-digit", month: "long", year: "numeric" })}
                </p>
              )}
            </div>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
