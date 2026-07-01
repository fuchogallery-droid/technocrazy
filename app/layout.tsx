import type { Metadata } from "next";
import Script from "next/script";
import Providers from "@/components/Providers";
import "./globals.css";

// GA4 Measurement ID — reemplazar con el real desde analytics.google.com
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  title: "TechnoCrazy — Transformo Ideas en Negocios Digitales",
  description: "Diseño gráfico, desarrollo web, apps móviles, sistemas automatizados e IA. Un servicio completo para convertir tu idea en un negocio digital exitoso.",
  keywords: "diseño gráfico, desarrollo web, apps móviles, inteligencia artificial, automatización, negocio digital",
  openGraph: {
    title: "TechnoCrazy — Transformo Ideas en Negocios Digitales",
    description: "Diseño. Código. Automatización. IA. Todo en un solo lugar.",
    url: "https://technocrazy.org",
    siteName: "TechnoCrazy",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>{children}</Providers>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
