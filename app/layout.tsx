import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Providers from "@/components/Providers";
import IntroVideo from "@/components/IntroVideo";
import "./globals.css";

// GA4 Measurement ID — reemplazar con el real desde analytics.google.com
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  metadataBase: new URL("https://technocrazy.org"),
  title: {
    default: "TechnoCrazy — Diseño web, apps e IA para tu negocio | Web design, apps & AI",
    template: "%s | TechnoCrazy",
  },
  description: "Diseño gráfico, páginas web, apps móviles, automatización e inteligencia artificial en Chicago, Illinois. Web design, mobile apps, automation and AI to turn your idea into a digital business.",
  keywords: "diseño web Chicago, páginas web, apps móviles, inteligencia artificial, automatización, chips NFC, web design Chicago, mobile apps, AI automation, TechnoCrazy",
  alternates: { canonical: "/" },
  openGraph: {
    title: "TechnoCrazy — Diseño web, apps e IA para tu negocio",
    description: "Diseño. Código. Automatización. IA. Todo en un solo lugar. Design. Code. Automation. AI.",
    url: "https://technocrazy.org",
    siteName: "TechnoCrazy",
    type: "website",
    locale: "es_US",
    alternateLocale: ["en_US"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <IntroVideo />
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
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
