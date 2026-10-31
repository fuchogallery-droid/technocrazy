import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Promotores TechnoCrazy",
  description: "Conoce a los promotores de TechnoCrazy: la comunidad que impulsa nuestros servicios y productos digitales.",
  alternates: { canonical: "/promotores" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
