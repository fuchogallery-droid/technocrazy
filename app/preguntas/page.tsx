"use client";
import { useState } from "react";
import { addDoc, collection, orderBy, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useCollection } from "@/lib/useCollection";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";
import ExpandableSection from "@/components/shared/ExpandableSection";
import type { Question } from "@/lib/collections";

export default function PreguntasPage() {
  const { t } = useLanguage();
  const tp = t.pages.preguntas;
  const { items, loading } = useCollection<Question>("questions", [orderBy("createdAt", "desc")]);
  const answered = items.filter((q) => q.answer);

  const [name, setName] = useState("");
  const [question, setQuestion] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!question.trim()) {
      setError(tp.errorRequired);
      return;
    }
    setError("");
    setSending(true);
    try {
      await addDoc(collection(db, "questions"), {
        name: name.trim(),
        question: question.trim(),
        createdAt: serverTimestamp(),
      });
      setSent(true);
      setName("");
      setQuestion("");
    } catch {
      setError(tp.errorGeneric);
    } finally {
      setSending(false);
    }
  }

  return (
    <PageShell title={tp.title} subtitle={tp.subtitle}>
      {loading && <p className="text-gray-500 text-sm text-center">{tp.loading}</p>}
      <div className="flex flex-col gap-3 mb-16 mx-auto" style={{ maxWidth: 680 }}>
        {answered.map((q) => (
          <div key={q.id} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <ExpandableSection label={q.question} openLabel={q.question} defaultOpen={false}>
              <p className="text-gray-400 pt-2" style={{ fontSize: 14, lineHeight: 1.7 }}>{q.answer}</p>
            </ExpandableSection>
          </div>
        ))}
        {!loading && answered.length === 0 && (
          <p className="text-gray-500 text-sm text-center">{tp.empty}</p>
        )}
      </div>

      <div className="rounded-2xl p-6 sm:p-8 mx-auto" style={{ maxWidth: 560, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 className="text-white font-bold mb-1" style={{ fontSize: 18 }}>{tp.formTitle}</h2>
        <p className="text-gray-500 mb-5" style={{ fontSize: 13 }}>{tp.formDesc}</p>
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
              <label className="block text-xs text-gray-500 mb-1.5">{tp.questionLabel}</label>
              <textarea
                className="w-full rounded-lg px-3 py-2 text-sm bg-white/5 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-blue-500"
                rows={4}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
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
