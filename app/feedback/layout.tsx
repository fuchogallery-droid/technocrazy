import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deja tu opinión",
  description: "Cuéntanos cómo fue tu experiencia con TechnoCrazy y ayúdanos a mejorar.",
  alternates: { canonical: "/feedback" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
