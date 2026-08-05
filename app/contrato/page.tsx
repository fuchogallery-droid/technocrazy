import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import DownloadPdfButton from "./DownloadPdfButton";

export const metadata: Metadata = {
  title: "Contrato de Servicios — TechnoCrazy",
};

export default function Contrato() {
  return (
    <LegalPage title="Contrato de Servicios" updated="5 de agosto de 2026">
      <p>
        Este documento describe los términos generales bajo los cuales{" "}
        <strong>Rafael Navarro</strong>, individuo que opera bajo el nombre comercial{" "}
        <strong>TechnoCrazy</strong> (&quot;el Proveedor&quot;), con sede en Chicago, Illinois,
        Estados Unidos, presta servicios de Diseño Gráfico, Páginas Web, Apps Móviles, Sistemas
        Automatizados e IA &amp; Automatización a sus clientes (&quot;el Cliente&quot;). Cada
        proyecto puntual se detalla además en su propio Documento de Alcance (funcionalidades,
        plazo y precio), que junto con este Contrato y la aceptación firmada forma el acuerdo
        completo entre las partes.
      </p>
      <p style={{ fontSize: 13, color: "#8a8a9a" }}>
        El Proveedor opera actualmente como negocio individual (no como LLC ni corporación). El
        Cliente reconoce que contrata directamente con Rafael Navarro, quien responde con su
        patrimonio personal en los términos y límites de la Sección 8.
      </p>

      <DownloadPdfButton />

      <h2>1. Objeto</h2>
      <p>
        El Proveedor prestará los servicios detallados en el Documento de Alcance firmado para
        cada proyecto, bajo los términos generales de este Contrato.
      </p>

      <h2>2. Honorarios y forma de pago</h2>
      <p>
        Salvo acuerdo distinto por escrito: <strong>50% de depósito</strong> para iniciar el
        proyecto (no reembolsable, cubre el trabajo de arranque) y <strong>50% contra entrega</strong>,
        antes de la publicación final o entrega de archivos. Métodos aceptados: Stripe,
        transferencia bancaria, Zelle.
      </p>

      <h2>3. Revisiones y cambios de alcance</h2>
      <p>
        Cada proyecto incluye el número de rondas de revisión indicado en su Documento de
        Alcance. Cambios que agreguen funcionalidades, páginas, integraciones o un rediseño
        completo no contemplados originalmente se cotizan aparte antes de ejecutarse.
      </p>

      <h2>4. Propiedad intelectual</h2>
      <p>
        Al completarse el pago total, el Cliente recibe el producto final entregado para uso
        comercial. El código propietario, plantillas y componentes reutilizables del Proveedor no
        se transfieren salvo compra explícita del código fuente pactada por escrito.
      </p>

      <h2>5. Confidencialidad</h2>
      <p>
        Ambas partes se comprometen a mantener confidencial la información de negocio,
        credenciales y datos compartidos durante el proyecto, usándola únicamente para ejecutar
        el trabajo contratado.
      </p>

      <h2>6. Relación entre las partes</h2>
      <p>
        El Proveedor actúa como contratista independiente. Nada en este contrato crea una
        relación de empleo, sociedad o joint venture entre las partes.
      </p>

      <h2>7. Dominio, credenciales y entrega final</h2>
      <p>
        El Proveedor no publicará el proyecto en el dominio final del Cliente, ni entregará
        código fuente, credenciales de hosting/CMS ni archivos finales, hasta recibir el pago
        completo indicado en el Documento de Alcance correspondiente.
      </p>

      <h2>8. Garantías y limitación de responsabilidad</h2>
      <p>
        Los servicios se entregan con el mejor esfuerzo profesional, sin garantía de resultados
        de negocio específicos, tráfico, ventas, posicionamiento en buscadores ni cumplimiento
        total de ADA/WCAG (solo se aplican buenas prácticas razonables de accesibilidad, sin
        certificación). La responsabilidad total del Proveedor ante cualquier reclamo se limita
        al monto efectivamente pagado por el Cliente por el proyecto en cuestión, salvo en casos
        de negligencia grave, dolo o violación de confidencialidad, donde no aplica este tope.
      </p>

      <h2>9. Retrasos de pago</h2>
      <p>
        Si el Cliente no paga el saldo acordado, el proyecto queda pausado hasta regularizar el
        pago. Recargo por mora tras 15 días de atraso: <strong>1.5% mensual, o el máximo
        permitido por la ley de Illinois, el que sea menor</strong>.
      </p>

      <h2>10. Terminación</h2>
      <p>
        Cualquiera de las partes puede terminar este contrato con 15 días de aviso por escrito.
        El trabajo entregado hasta la fecha de terminación se factura de forma proporcional, y el
        depósito ya pagado no es reembolsable salvo que el Proveedor sea quien termine sin causa
        atribuible al Cliente.
      </p>

      <h2>11. Fuerza mayor</h2>
      <p>
        Ninguna parte será responsable por retrasos causados por eventos fuera de su control
        razonable (fallas de proveedores externos, desastres naturales, cortes de servicio, etc.).
      </p>

      <h2>12. Firma electrónica</h2>
      <p>
        Las partes aceptan que este contrato pueda firmarse electrónicamente y que dicha firma
        tiene la misma validez que una firma manuscrita, conforme al E-SIGN Act federal y al
        Illinois Uniform Electronic Transactions Act (815 ILCS 333).
      </p>

      <h2>13. Ley aplicable y foro</h2>
      <p>
        Este contrato se rige por las leyes del Estado de Illinois, Estados Unidos. Cualquier
        disputa se resolverá en el Circuit Court del condado de Cook, Illinois — incluyendo,
        cuando aplique, el procedimiento de small claims para montos hasta $10,000.
      </p>

      <h2>14. Contacto</h2>
      <p>
        Para dudas sobre este Contrato:{" "}
        <a href="mailto:Rafaelpixel3004@gmail.com">Rafaelpixel3004@gmail.com</a> o WhatsApp{" "}
        <a href="https://wa.me/17794318214" target="_blank" rel="noopener noreferrer">
          +1 779 431 8214
        </a>
        .
      </p>

      <p style={{ fontSize: 12, color: "#6a6a7a", marginTop: 24 }}>
        Este documento es un borrador de referencia general y no sustituye asesoría legal. La
        versión final para firma de cada proyecto se envía junto con su Documento de Alcance.
      </p>
    </LegalPage>
  );
}
