import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProcesoView from "@/components/proceso/ProcesoView";
import { PROCESO_ES, getPaso } from "@/components/proceso/data";

export function generateStaticParams() {
  return PROCESO_ES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(props: PageProps<"/proceso/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const paso = getPaso(slug);
  if (!paso) return { title: "Paso no encontrado · TechnoCrazy" };

  const title = `${paso.title} ${paso.titleHighlight} · Cómo Trabajo · TechnoCrazy`;
  return {
    title,
    description: paso.tagline,
    openGraph: { title, description: paso.tagline, type: "article" },
  };
}

export default async function ProcesoPage(props: PageProps<"/proceso/[slug]">) {
  const { slug } = await props.params;
  const paso = getPaso(slug);
  if (!paso) notFound();

  return <ProcesoView slug={slug} />;
}
