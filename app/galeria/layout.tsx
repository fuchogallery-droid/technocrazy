import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería de diseños y proyectos web",
  description: "Trabajos de diseño gráfico, páginas web y apps hechos por TechnoCrazy para negocios reales.",
  alternates: { canonical: "/galeria" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
