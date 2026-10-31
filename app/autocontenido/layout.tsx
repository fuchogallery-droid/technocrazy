import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contenido automático con IA para redes sociales",
  description: "Genera publicaciones y contenido para tus redes con inteligencia artificial, con la herramienta de TechnoCrazy.",
  alternates: { canonical: "/autocontenido" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
