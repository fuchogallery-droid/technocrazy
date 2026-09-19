// Captura automática de una URL vía Microlink (gratis, sin API key,
// redirige directo a la imagen — se puede usar como `src` de un <img>).
export function getSiteScreenshotUrl(siteUrl: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(siteUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
}
