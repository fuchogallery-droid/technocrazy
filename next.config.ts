import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Descargas de productos (public/descargas): el navegador tiene que
        // guardarlas, no intentar abrirlas. Se sirven desde el propio sitio
        // porque el store de Vercel Blob de la cuenta está suspendido.
        //
        // Cache-Control "no-cache" (no "no-store"): sigue pudiendo guardarse,
        // pero el navegador y el CDN de Vercel tienen que revalidar con el
        // servidor antes de usar esa copia -- con max-age=3600 de antes,
        // quien bajaba R.A.D.I. dentro de la hora siguiente a una
        // actualización se quedaba con el archivo viejo sin enterarse.
        source: "/descargas/:path*",
        headers: [
          { key: "Content-Disposition", value: "attachment" },
          { key: "Cache-Control", value: "no-cache" },
        ],
      },
      {
        // Refuerzo a nivel de cabecera para las páginas personales:
        // ningún buscador debe indexarlas ni guardarlas en caché.
        source: "/privado/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "no-store, private, max-age=0" },
        ],
      },
    ];
  },
};

export default nextConfig;
