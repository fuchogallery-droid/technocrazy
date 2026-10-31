"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import WebPages from "@/components/WebPages";
import HomeGallery from "@/components/HomeGallery";
import NfcSection from "@/components/NfcSection";
import Process from "@/components/Process";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      {/* Cada una de estas secciones se administra en /admin y no se dibuja si
          no tiene contenido visible (el NFC trae funciones de ejemplo). */}
      <Products />
      <WebPages />
      <HomeGallery />
      <NfcSection />
      {/* OCULTA (24/10/2026, a pedido de Rafael): <Promoters />. Para volver a mostrarla,
          devolver el import y esta línea. Solo se dibuja si hay promotores visibles en /admin. */}
      {/* ARCHIVADAS (05/10/2026, a pedido de Rafael): <Testimonials /> y <About />.
          Los componentes siguen en components/; para volver a mostrarlas solo hay
          que descomentar el import y devolverlas aquí. */}
      <Process />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
      <ChatWidget />
    </>
  );
}
