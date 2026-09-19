// Mapa slug → foto, independiente del idioma. El slug de cada formato vive en
// lib/i18n.ts (nfc.formats[i].slug), igual en ES y EN.
export const FORMAT_MEDIA: Record<string, { src: string }> = {
  "tarjeta-mesa": { src: "/images/servicios/nfc/tarjeta-mesa.jpg" },
  sticker: { src: "/images/servicios/nfc/sticker.jpg" },
  llavero: { src: "/images/servicios/nfc/llavero.jpg" },
  placa: { src: "/images/servicios/nfc/placa.jpg" },
};
