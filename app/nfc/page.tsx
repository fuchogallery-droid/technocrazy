import type { Metadata } from "next";
import NfcView from "@/components/nfc/NfcView";

const OG_IMAGE = "https://technocrazy.org/images/servicios/nfc/og-nfc.jpg";

export const metadata: Metadata = {
  title: "Chips NFC · TechnoCrazy",
  description: "Convierte cualquier mesa, pared o mostrador en un punto de contacto inteligente. Guarda contacto, comparte WiFi, muestra el menú o cobra el pago con un solo toque del teléfono.",
  openGraph: {
    title: "Chips NFC · TechnoCrazy",
    description: "Toca y listo — sin apps, sin escribir nada.",
    url: "https://technocrazy.org/nfc",
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 1200, type: "image/jpeg", alt: "Chips NFC · TechnoCrazy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chips NFC · TechnoCrazy",
    description: "Toca y listo — sin apps, sin escribir nada.",
    images: [OG_IMAGE],
  },
};

export default function NfcPage() {
  return <NfcView />;
}
