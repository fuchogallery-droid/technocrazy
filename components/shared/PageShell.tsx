import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

// Cáscara compartida por las páginas de contenido nuevas (Muro, Precios y Productos,
// Biblioteca, Galería, Testimonios, Preguntas, Feedback, Noticias): mismo Navbar/Footer
// que el resto del sitio, con el padding-top que compensa el Navbar fijo.
export default function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64, minHeight: "70vh" }} className="section-dark">
        <div className="tc-wrap section-py">
          <div className="tc-header">
            <h1 className="tc-h2 text-white">{title}</h1>
            {subtitle && <p className="tc-sub text-gray-400">{subtitle}</p>}
          </div>
          {children}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
