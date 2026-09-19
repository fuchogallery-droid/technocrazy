import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { tokenValido, nombreCookie, PERSONAS } from "@/lib/privadoAuth";
import { DOCUMENTOS } from "../documentos";
import GateForm from "./GateForm";

// Lee cookies en cada visita: nunca se prerenderiza ni se cachea.
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ persona: string }>;
}) {
  const { persona: slug } = await params;
  const persona = PERSONAS[slug];
  if (!persona) notFound();

  const almacen = await cookies();
  if (!tokenValido(slug, almacen.get(nombreCookie(slug))?.value)) {
    return <GateForm slug={slug} nombre={persona.nombre} />;
  }

  if (!DOCUMENTOS[slug]) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          background: "#12100e",
          padding: 24,
          fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 420 }}>
          <h1 style={{ color: "#f2eee8", fontSize: 20, margin: "0 0 10px" }}>
            Sesión de {persona.nombre}
          </h1>
          <p style={{ color: "#8d857a", fontSize: 14.5, lineHeight: 1.6, margin: 0 }}>
            El documento de preparación todavía no está listo. La sesión ya
            funciona; el contenido se publica en cuanto esté preparado.
          </p>
        </div>
      </main>
    );
  }

  // El documento se sirve desde su propia ruta (también protegida) dentro de un
  // iframe, para que su hoja de estilos no choque con la del sitio.
  return (
    <iframe
      src={`/privado/asilo/${slug}/documento`}
      title={`Guion de entrevista de asilo — ${persona.nombre}`}
      style={{ display: "block", width: "100%", height: "100vh", border: "none" }}
    />
  );
}
