import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones — TechnoCrazy",
};

export default function Terminos() {
  return (
    <LegalPage title="Términos y Condiciones" updated="31 de julio de 2026">
      <p>
        Estos Términos y Condiciones (&quot;Términos&quot;) rigen el uso del sitio web{" "}
        <strong>technocrazy.org</strong> y la contratación de cualquier servicio o producto
        digital ofrecido por <strong>TechnoCrazy</strong>, negocio operado por Rafael Navarro
        con sede en Chicago, Illinois, Estados Unidos (en trámite de constitución como LLC; hasta
        que se complete, TechnoCrazy opera bajo el nombre comercial de su fundador). Al usar el
        sitio, contratar un servicio o comprar un producto, aceptas estos Términos en su totalidad.
      </p>

      <h2>1. Servicios y productos</h2>
      <p>TechnoCrazy ofrece dos tipos de oferta:</p>
      <ul>
        <li>
          <strong>Servicios a medida:</strong> Diseño Gráfico, Páginas Web, Apps Móviles,
          Sistemas Automatizados e IA &amp; Automatización, cotizados y ejecutados como proyectos
          individuales.
        </li>
        <li>
          <strong>Productos digitales propios:</strong> aplicaciones y herramientas de pago único
          (por ejemplo AutoPost, ServiYA, GaleríaX, CambioBs, HK-PC Organizer, Curso IA + Redes
          Sociales, ULTROM Protocol, Claude Remote, ULTROM App), entregadas por descarga o acceso
          digital.
        </li>
      </ul>

      <h2>2. Alcance de cada proyecto</h2>
      <p>
        Todo proyecto a medida se rige, además de estos Términos, por un{" "}
        <strong>Documento de Alcance</strong> específico (funcionalidades incluidas, entregables,
        plazos estimados y precio). En caso de conflicto entre ambos documentos, prevalece el
        Documento de Alcance firmado para ese proyecto.
      </p>

      <h2>3. Precios y forma de pago</h2>
      <ul>
        <li>Los precios publicados en el sitio son de referencia; el precio final se confirma por escrito antes de iniciar cualquier proyecto.</li>
        <li>Proyectos a medida: normalmente 50% de depósito para iniciar y 50% contra entrega, salvo que se acuerde otro esquema por escrito.</li>
        <li>Productos digitales: pago único procesado por Stripe o Payhip antes de recibir acceso o descarga.</li>
        <li>Los retrasos, cancelaciones y reembolsos se rigen por la Política de Pagos, Retrasos y Cancelaciones entregada junto con cada proyecto.</li>
      </ul>

      <h2>4. Plazos de entrega</h2>
      <p>
        Los plazos comunicados son estimados de buena fe y pueden variar según la complejidad del
        proyecto, la disponibilidad de contenido/accesos por parte del cliente y terceros
        involucrados. No se garantizan fechas exactas salvo que se pacten expresamente por escrito.
      </p>

      <h2>5. Revisiones y cambios</h2>
      <p>
        Cada proyecto incluye un número de rondas de revisión definido en su Documento de Alcance.
        Cambios que excedan ese alcance (nuevas funcionalidades, rediseños mayores, cambios de
        dirección del proyecto) se cotizan aparte según la Política de Cambios y Revisiones.
      </p>

      <h2>6. Propiedad intelectual</h2>
      <ul>
        <li>Al completar el pago total, el cliente recibe el producto final entregado (sitio, app, diseño) para su uso comercial.</li>
        <li>El código fuente propietario, componentes internos, plantillas y frameworks reutilizables de TechnoCrazy siguen siendo propiedad de TechnoCrazy, salvo compra explícita del código fuente pactada por escrito.</li>
        <li>Los productos digitales de TechnoCrazy se licencian para uso personal o del negocio del comprador; queda prohibida su reventa, redistribución o publicación como producto propio sin autorización escrita.</li>
        <li>Servicios y librerías de terceros integrados (hosting, APIs, pasarelas de pago, etc.) se rigen por los términos propios de cada proveedor.</li>
      </ul>

      <h2>7. Garantías y limitación de responsabilidad</h2>
      <p>
        Los servicios se entregan &quot;tal cual&quot;, con el mejor esfuerzo profesional.
        TechnoCrazy no garantiza resultados de negocio específicos (ventas, tráfico, posiciones en
        buscadores, etc.). En la medida permitida por la ley, la responsabilidad total de
        TechnoCrazy frente a cualquier reclamo se limita al monto efectivamente pagado por el
        cliente por el servicio o producto en cuestión.
      </p>

      <h2>8. Confidencialidad</h2>
      <p>
        La información de negocio, credenciales y datos compartidos por el cliente durante un
        proyecto se tratan como confidenciales y solo se usan para ejecutar el trabajo contratado.
      </p>

      <h2>9. Modificaciones de estos Términos</h2>
      <p>
        Estos Términos pueden actualizarse periódicamente. La versión vigente es siempre la
        publicada en esta página, con su fecha de última actualización.
      </p>

      <h2>10. Ley aplicable</h2>
      <p>
        Estos Términos se rigen por las leyes del Estado de Illinois, Estados Unidos, sin
        perjuicio de las normas de protección al consumidor aplicables en la jurisdicción del
        cliente.
      </p>

      <h2>11. Contacto</h2>
      <p>
        Para dudas sobre estos Términos: <a href="mailto:Rafaelpixel3004@gmail.com">Rafaelpixel3004@gmail.com</a>{" "}
        o WhatsApp <a href="https://wa.me/17794318214" target="_blank" rel="noopener noreferrer">+1 779 431 8214</a>.
      </p>
    </LegalPage>
  );
}
