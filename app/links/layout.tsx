import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Enlaces — Rafael Navarro | TechnoCrazy",
  description: "Todos los proyectos y productos de Rafael Navarro en un solo lugar.",
};

export default function LinksLayout({ children }: { children: ReactNode }) {
  return children;
}
