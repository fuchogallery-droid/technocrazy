import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicioView from "@/components/servicios/ServicioView";
import { SERVICIOS, getServicio } from "@/components/servicios/registry";

export function generateStaticParams() {
  return SERVICIOS.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/servicios/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const def = getServicio(slug);
  if (!def) return { title: "Servicio no encontrado · TechnoCrazy" };
  return {
    title: def.meta.title,
    description: def.meta.description,
    openGraph: {
      title: def.meta.title,
      description: def.meta.description,
      url: `https://technocrazy.org/servicios/${def.slug}`,
      type: "website",
    },
  };
}

export default async function ServicioPage(props: PageProps<"/servicios/[slug]">) {
  const { slug } = await props.params;
  if (!getServicio(slug)) notFound();
  return <ServicioView slug={slug} />;
}
