import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muro de la comunidad",
  description: "Publicaciones y novedades de la comunidad TechnoCrazy: diseño web, apps, IA y negocios digitales.",
  alternates: { canonical: "/muro" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
