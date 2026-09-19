import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FormatoView from "@/components/nfc/FormatoView";
import { translations } from "@/lib/i18n";

export function generateStaticParams() {
  return translations.es.nfc.formats.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata(props: PageProps<"/nfc/formatos/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const format = translations.es.nfc.formats.find((f) => f.slug === slug);
  if (!format) return { title: "Formato no encontrado · TechnoCrazy" };

  const title = `${format.title} · Chips NFC · TechnoCrazy`;
  return {
    title,
    description: format.desc,
    openGraph: { title, description: format.desc, type: "article" },
  };
}

export default async function FormatoPage(props: PageProps<"/nfc/formatos/[slug]">) {
  const { slug } = await props.params;
  const format = translations.es.nfc.formats.find((f) => f.slug === slug);
  if (!format) notFound();

  return <FormatoView slug={slug} />;
}
