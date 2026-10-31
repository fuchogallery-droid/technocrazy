import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendario de contenido y citas",
  description: "Agenda y calendario de TechnoCrazy para planear contenido, citas y lanzamientos.",
  alternates: { canonical: "/calendario" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
