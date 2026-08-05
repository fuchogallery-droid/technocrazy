import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad — TechnoCrazy",
};

export default function Privacidad() {
  return (
    <LegalPage title="Política de Privacidad" updated="31 de julio de 2026">
      <p>
        En <strong>TechnoCrazy</strong> (technocrazy.org) respetamos tu privacidad. Esta política
        explica qué datos recopilamos, cómo los usamos y qué derechos tienes sobre ellos.
      </p>

      <h2>1. Qué datos recopilamos</h2>
      <ul>
        <li><strong>Datos que nos das directamente:</strong> nombre, correo electrónico, número de WhatsApp/teléfono, y cualquier detalle del proyecto que compartas al contactarnos o contratar un servicio.</li>
        <li><strong>Datos de pago:</strong> procesados directamente por Stripe o Payhip; TechnoCrazy no almacena números de tarjeta.</li>
        <li><strong>Datos de uso del sitio:</strong> páginas visitadas, dispositivo y ubicación aproximada, recopilados de forma automática vía Google Analytics y Vercel Analytics.</li>
        <li><strong>Preferencia de idioma:</strong> guardada en el almacenamiento local (localStorage) de tu navegador.</li>
      </ul>

      <h2>2. Cómo usamos tus datos</h2>
      <ul>
        <li>Responder consultas y brindar los servicios o productos contratados.</li>
        <li>Procesar pagos y gestionar la entrega de proyectos y productos digitales.</li>
        <li>Comunicarnos contigo por correo o WhatsApp sobre tu proyecto.</li>
        <li>Mejorar el sitio y entender qué contenido es más útil (analítica agregada, sin identificar a personas individualmente).</li>
      </ul>

      <h2>3. Con quién se comparten los datos</h2>
      <p>No vendemos tus datos. Se comparten únicamente con proveedores necesarios para operar:</p>
      <ul>
        <li><strong>Stripe / Payhip</strong> — procesamiento de pagos.</li>
        <li><strong>Vercel</strong> — hosting del sitio.</li>
        <li><strong>Google Analytics</strong> — analítica de uso del sitio.</li>
        <li><strong>ManyChat</strong> — automatización de mensajes de Instagram, solo si nos escribes por esa vía.</li>
      </ul>
      <p>Cada proveedor tiene su propia política de privacidad y cumple estándares de seguridad de la industria.</p>

      <h2>4. Seguridad</h2>
      <p>
        Usamos conexión cifrada (HTTPS) en todo el sitio y no almacenamos datos de tarjetas ni
        contraseñas de clientes. El acceso a credenciales de proyectos (dominios, hosting, etc.)
        se limita al equipo de TechnoCrazy y se transfiere al cliente al finalizar el proyecto.
      </p>

      <h2>5. Tus derechos</h2>
      <p>
        Puedes solicitar en cualquier momento: acceso a los datos que tenemos sobre ti,
        corrección de datos incorrectos, o eliminación de tus datos de nuestros sistemas
        (salvo lo que debamos conservar por obligaciones fiscales o contractuales). Escríbenos a{" "}
        <a href="mailto:Rafaelpixel3004@gmail.com">Rafaelpixel3004@gmail.com</a>.
      </p>

      <h2>6. Retención de datos</h2>
      <p>
        Conservamos los datos de proyectos y clientes mientras dure la relación comercial y por
        el tiempo adicional necesario para cumplir obligaciones legales/fiscales. Los datos de
        analítica agregada se conservan según la configuración estándar de Google Analytics.
      </p>

      <h2>7. Menores de edad</h2>
      <p>
        Nuestros servicios están dirigidos a negocios y personas mayores de 18 años. No recopilamos
        intencionalmente datos de menores de edad.
      </p>

      <h2>8. Cambios a esta política</h2>
      <p>
        Podemos actualizar esta política periódicamente. La versión vigente es siempre la
        publicada en esta página, con su fecha de última actualización.
      </p>

      <h2>9. Contacto</h2>
      <p>
        <a href="mailto:Rafaelpixel3004@gmail.com">Rafaelpixel3004@gmail.com</a> · WhatsApp{" "}
        <a href="https://wa.me/17794318214" target="_blank" rel="noopener noreferrer">+1 779 431 8214</a>
      </p>
    </LegalPage>
  );
}
