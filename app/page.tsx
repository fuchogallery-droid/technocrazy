"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Promoters from "@/components/Promoters";
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
      {/* Solo se dibuja si hay productos cargados desde /admin. */}
      <Products />
      {/* Solo se dibuja si hay promotores visibles cargados desde /admin. */}
      <Promoters />
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
