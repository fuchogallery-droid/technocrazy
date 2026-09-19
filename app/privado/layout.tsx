import type { Metadata } from "next";

/** Todo lo que cuelga de /privado queda fuera de buscadores. */
export const metadata: Metadata = {
  title: "Privado",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export default function PrivadoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
