import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos y precios: páginas web, apps y automatización",
  description: "Productos digitales de TechnoCrazy con precios claros: páginas web, aplicaciones, sistemas automatizados y chips NFC.",
  alternates: { canonical: "/precios-productos" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
