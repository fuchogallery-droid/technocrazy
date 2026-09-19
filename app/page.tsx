"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
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
      <Testimonials />
      <About />
      <Process />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
      <ChatWidget />
    </>
  );
}
