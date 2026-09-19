import type { Metadata } from "next";
import Script from "next/script";
import Providers from "@/components/Providers";
import "./globals.css";

// GA4 Measurement ID — reemplazar con el real desde analytics.google.com
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

export const metadata: Metadata = {
  title: "TechnoCrazy — Turning Ideas into Digital Businesses",
  description: "Graphic design, web development, mobile apps, automated systems and AI. A complete service to turn your idea into a successful digital business.",
  keywords: "graphic design, web development, mobile apps, artificial intelligence, automation, digital business",
  openGraph: {
    title: "TechnoCrazy — Turning Ideas into Digital Businesses",
    description: "Design. Code. Automation. AI. All in one place.",
    url: "https://technocrazy.org",
    siteName: "TechnoCrazy",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
