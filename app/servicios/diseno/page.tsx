import type { Metadata } from "next";
import DisenoView from "@/components/servicios/diseno/DisenoView";

export const metadata: Metadata = {
  title: "Diseño Gráfico y Branding · TechnoCrazy",
  description: "Logotipos, identidad visual, redes sociales, piezas publicitarias y packaging. Tu marca con un mismo lenguaje, de tu logo al empaque final.",
  openGraph: {
    title: "Diseño Gráfico y Branding · TechnoCrazy",
    description: "Una marca que se ve y se recuerda.",
    url: "https://technocrazy.org/servicios/diseno",
    type: "website",
  },
};

export default function DisenoPage() {
  return <DisenoView />;
}
