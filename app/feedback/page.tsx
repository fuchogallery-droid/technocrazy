"use client";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import type { FeedbackCategory } from "@/lib/collections";

export default function FeedbackPage() {
  const { t } = useLanguage();
  const tp = t.pages.feedback;
  const [name, setName] = useState("");
  const [category, setCategory] = useState<FeedbackCategory>("sugerencia");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!message.trim()) {
      setError(tp.errorRequired);
      return;
    }
    setError("");
    setSending(true);
    try {
      await addDoc(collection(db, "feedback"), {
        name: name.trim(),
        category,
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setSent(true);
      setName("");
      setMessage("");
      setCategory("sugerencia");
    } catch {
      setError(tp.errorGeneric);
    } finally {
      setSending(false);
    }
  }

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      <div className="rounded-2xl p-6 sm:p-8 mx-auto" style={{ maxWidth: 560, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
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
              <label className="block text-xs text-gray-500 mb-1.5">{tp.categoryLabel}</label>
              <select
                className="w-full rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-white focus:outline-none focus:border-blue-500"
                value={category}
                onChange={(e) => setCategory(e.target.value as FeedbackCategory)}
              >
                {(Object.keys(t.labels.feedbackCategory) as FeedbackCategory[]).map((c) => (
                  <option key={c} value={c}>{t.labels.feedbackCategory[c]}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs text-gray-500 mb-1.5">{tp.messageLabel}</label>
              <textarea
                className="w-full rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
