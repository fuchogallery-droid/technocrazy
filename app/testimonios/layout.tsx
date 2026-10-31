import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonios de clientes",
  description: "Lo que dicen los clientes que ya convirtieron su idea en un negocio digital con TechnoCrazy.",
  alternates: { canonical: "/testimonios" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
