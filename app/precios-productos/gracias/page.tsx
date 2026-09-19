"use client";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle } from "lucide-react";
import PageShell from "@/components/shared/PageShell";
import { useLanguage } from "@/contexts/LanguageContext";

function GraciasContent() {
  const { t } = useLanguage();
  const tp = t.pages.gracias;
  const params = useSearchParams();
  const sessionId = params.get("session_id");
  const [status, setStatus] = useState<"loading" | "paid" | "unpaid">(() => (sessionId ? "loading" : "unpaid"));

  useEffect(() => {
    if (!sessionId) return;
    fetch(`/api/stripe/session?session_id=${sessionId}`)
      .then((r) => r.json())
      .then((data) => setStatus(data.paid ? "paid" : "unpaid"))
      .catch(() => setStatus("unpaid"));
  }, [sessionId]);

  return (
    <div className="text-center mx-auto" style={{ maxWidth: 480 }}>
      {status === "loading" && <p className="text-gray-400 text-sm">{tp.confirming}</p>}
      {status === "paid" && (
        <>
          <CheckCircle2 size={56} color="#4ade80" className="mx-auto mb-4" />
          <h2 className="text-white font-bold mb-2" style={{ fontSize: 20 }}>{tp.paidTitle}</h2>
          <p className="text-gray-400 text-sm mb-6">{tp.paidDesc}</p>
        </>
      )}
      {status === "unpaid" && (
        <>
          <XCircle size={56} color="#f87171" className="mx-auto mb-4" />
          <h2 className="text-white font-bold mb-2" style={{ fontSize: 20 }}>{tp.unpaidTitle}</h2>
          <p className="text-gray-400 text-sm mb-6">{tp.unpaidDesc}</p>
        </>
      )}
      <Link href="/precios-productos" className="btn-outline" style={{ padding: "10px 24px" }}>
        {tp.backBtn}
      </Link>
    </div>
  );
}

export default function GraciasPage() {
  const { t } = useLanguage();
  const tp = t.pages.gracias;
  return (
    <PageShell title={tp.title}>
      <Suspense fallback={<p className="text-gray-500 text-sm text-center">{tp.loading}</p>}>
        <GraciasContent />
      </Suspense>
    </PageShell>
  );
}
