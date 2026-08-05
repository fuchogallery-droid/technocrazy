import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies — TechnoCrazy",
};

export default function Cookies() {
  return (
    <LegalPage title="Política de Cookies" updated="31 de julio de 2026">
      <p>
        Esta página explica qué cookies y tecnologías similares usa <strong>technocrazy.org</strong>{" "}
        y cómo puedes controlarlas.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Son pequeños archivos que un sitio guarda en tu navegador para recordar información entre
        visitas, como preferencias o datos de sesión. También usamos <strong>localStorage</strong>{" "}
        del navegador, que funciona de forma similar.
      </p>

      <h2>2. Cookies y almacenamiento que usamos</h2>
      <ul>
        <li><strong>Preferencia de idioma:</strong> guardada en localStorage para recordar si prefieres ver el sitio en español o inglés.</li>
        <li><strong>Analítica (Google Analytics / Vercel Analytics):</strong> cookies que ayudan a entender qué páginas se visitan más, de forma agregada y sin identificarte por nombre.</li>
        <li><strong>Funcionalidad del sitio:</strong> cookies técnicas necesarias para que el sitio funcione correctamente (por ejemplo, mantener la sesión del panel de administración si aplica).</li>
      </ul>

      <h2>3. Cookies de terceros</h2>
      <p>
        Al procesar un pago, Stripe o Payhip pueden establecer sus propias cookies en su
        página de checkout, fuera de nuestro control directo, sujetas a sus propias políticas de
        privacidad.
      </p>

      <h2>4. Cómo controlar o desactivar cookies</h2>
      <p>
        Puedes bloquear o eliminar cookies desde la configuración de privacidad de tu navegador
        (Chrome, Safari, Firefox, Edge, etc.). Ten en cuenta que desactivar cookies esenciales
        puede afectar el funcionamiento del sitio.
      </p>

      <h2>5. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política si cambian las herramientas o servicios que usamos. La
        versión vigente es siempre la publicada en esta página.
      </p>

      <h2>6. Contacto</h2>
      <p>
        <a href="mailto:Rafaelpixel3004@gmail.com">Rafaelpixel3004@gmail.com</a> · WhatsApp{" "}
        <a href="https://wa.me/17794318214" target="_blank" rel="noopener noreferrer">+1 779 431 8214</a>
      </p>
    </LegalPage>
  );
}
