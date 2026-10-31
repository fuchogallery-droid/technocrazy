import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biblioteca de recursos de IA y negocios digitales",
  description: "Guías, plantillas y recursos gratis para crear y hacer crecer tu negocio digital con inteligencia artificial.",
  alternates: { canonical: "/biblioteca" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
