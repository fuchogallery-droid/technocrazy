"use client";
import { useState } from "react";
import { addDoc, collection, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import { StarRatingDisplay, StarRatingInput } from "@/components/shared/StarRating";
import ImageUploadField from "@/components/shared/ImageUploadField";
import type { Testimonial } from "@/lib/collections";
import { getSiteScreenshotUrl } from "@/lib/screenshot";

export default function TestimoniosPage() {
  const { t } = useLanguage();
  const tp = t.pages.testimonios;
  // Orden en cliente para no requerir índice compuesto (ver useCollection).
  const { items, loading } = useCollection<Testimonial>(
    "testimonials",
    [where("approved", "==", true)],
    "createdAt"
  );

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);
  const [photoUrls, setPhotoUrls] = useState<string[]>([]);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) {
      setError(tp.errorRequired);
      return;
    }
    setError("");
    setSending(true);
    try {
      await addDoc(collection(db, "testimonials"), {
        name: name.trim(),
        comment: comment.trim(),
        rating,
        photoUrls,
        websiteUrl: websiteUrl.trim(),
        approved: false,
        createdAt: serverTimestamp(),
      });
      setSent(true);
      setName("");
      setComment("");
      setRating(5);
      setPhotoUrls([]);
      setWebsiteUrl("");
    } catch {
      setError(tp.errorGeneric);
    } finally {
      setSending(false);
    }
  }

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {loading && <p className="text-gray-500 text-sm text-center">{tp.loading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <p className="text-white font-semibold" style={{ fontSize: 14 }}>— {item.name}</p>
            {item.websiteUrl && (
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline block mb-2"
                style={{ fontSize: 12 }}
              >
                {item.websiteUrl}
              </a>
            )}
            <StarRatingDisplay rating={item.rating} />
            <p className="text-gray-300 mt-3 mb-4" style={{ fontSize: 14, lineHeight: 1.7 }}>&ldquo;{item.comment}&rdquo;</p>
            {item.photoUrls?.length > 0 && (
              <div className="flex gap-2 mb-4 flex-wrap">
                {item.photoUrls.map((url) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img key={url} src={url} alt="" className="w-16 h-16 rounded-lg object-cover" />
                ))}
              </div>
            )}
            {item.websiteUrl && (
              <a
                href={item.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-lg overflow-hidden"
                style={{ border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={getSiteScreenshotUrl(item.websiteUrl)}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-32 object-cover object-top"
                />
              </a>
            )}
          </div>
        ))}
        {!loading && items.length === 0 && (
          <p className="text-gray-500 text-sm sm:col-span-2 lg:col-span-3 text-center">{tp.empty}</p>
        )}
      </div>

      <div className="rounded-2xl p-6 sm:p-8 mx-auto" style={{ maxWidth: 560, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 className="text-white font-bold mb-1" style={{ fontSize: 18 }}>{tp.formTitle}</h2>
        <p className="text-gray-500 mb-5" style={{ fontSize: 13 }}>
          {tp.formDesc}
        </p>
        {sent ? (
          <p className="text-green-400 text-sm">{tp.sentMsg}</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">{tp.nameLabel}</label>
              <input
                className="w-full rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">{tp.ratingLabel}</label>
              <StarRatingInput value={rating} onChange={setRating} />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">{tp.commentLabel}</label>
              <textarea
                className="w-full rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                rows={4}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">{tp.photosLabel}</label>
              <ImageUploadField value={photoUrls} onChange={setPhotoUrls} multiple max={4} />
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">{tp.websiteLabel}</label>
              <input
                type="url"
                className="w-full rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                placeholder={tp.websitePlaceholder}
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
              />
            </div>
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <button type="submit" disabled={sending} className="btn-primary justify-center" style={{ padding: "12px 0" }}>
              {sending ? tp.sending : tp.submitBtn}
            </button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
