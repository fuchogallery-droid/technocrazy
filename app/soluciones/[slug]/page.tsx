import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolucionView from "@/components/soluciones/SolucionView";
import { SOLUCIONES, getSolucion } from "@/components/soluciones/data";

export function generateStaticParams() {
  return SOLUCIONES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/soluciones/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const sol = getSolucion(slug);
  if (!sol) return { title: "Solución no encontrada · TechnoCrazy" };

  const title = `¿Qué es ${sol.title.toLowerCase()} ${sol.titleHighlight}? · TechnoCrazy`;
  return {
    title,
    description: sol.tagline,
    openGraph: { title, description: sol.tagline, type: "article" },
  };
}

export default async function SolucionPage(props: PageProps<"/soluciones/[slug]">) {
  const { slug } = await props.params;
  const sol = getSolucion(slug);
  if (!sol) notFound();

  return <SolucionView slug={slug} />;
}
