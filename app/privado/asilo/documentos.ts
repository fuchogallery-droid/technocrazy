import { DOCUMENTO_HTML as RAFAEL } from "./doc-rafael";
import { DOCUMENTO_HTML as ZORAIDA } from "./doc-zoraida";
import { DOCUMENTO_HTML as ANGEL } from "./doc-angel";

/**
 * Documento de cada persona. `null` = sesión creada pero contenido todavía
 * no preparado; la página lo dice claramente en vez de mostrar algo vacío.
 */
export const DOCUMENTOS: Record<string, string | null> = {
  rafael: RAFAEL,
  zoraida: ZORAIDA,
  angel: ANGEL,
};
