"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Products from "@/components/Products";
import Learning from "@/components/Learning";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Process from "@/components/Process";
import Deliverables from "@/components/Deliverables";
import Novedades from "@/components/Novedades";
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
      <Deliverables />
      <Products />
      <Learning />
      <Testimonials />
      <About />
      <Novedades />
      <Process />
      <CTAFinal />
      <Footer />
      <WhatsAppFloat />
      <ChatWidget />
    </>
  );
}
