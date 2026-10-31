import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noticias de tecnología, IA y negocios digitales",
  description: "Novedades y tendencias de inteligencia artificial, automatización y tecnología para tu negocio.",
  alternates: { canonical: "/noticias" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
