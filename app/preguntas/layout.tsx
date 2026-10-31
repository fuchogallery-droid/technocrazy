import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre páginas web, apps e IA",
  description: "Respuestas a las dudas más comunes sobre precios, tiempos y el proceso para crear tu página web, app o automatización.",
  alternates: { canonical: "/preguntas" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
