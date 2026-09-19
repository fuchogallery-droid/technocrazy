"use client";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query, type QueryConstraint } from "firebase/firestore";
import { db } from "@/lib/firebase";

// Hook genérico de lectura en vivo de una colección de Firestore, reusado tanto
// por el panel admin (sin filtro, ve todo) como por las páginas públicas
// (con `where(...)` para respetar las reglas de solo-lectura-de-lo-publicado).
//
// IMPORTANTE — por qué existe `sortByDesc` en vez de usar `orderBy()`:
// combinar un `where()` con un `orderBy()` sobre OTRO campo obliga a Firestore
// a tener un índice compuesto creado a mano. Si falta, la consulta no devuelve
// nada y falla con FAILED_PRECONDITION — que era exactamente el caso de
// /precios-productos, /testimonios y /muro: se veían vacías aunque hubiera
// contenido publicado. Ordenar del lado del cliente evita el índice por
// completo y con estos volúmenes (decenas de documentos) es instantáneo.

type Sortable = Record<string, unknown>;

function toMillis(value: unknown): number {
  if (value && typeof value === "object" && "toMillis" in value) {
    return (value as { toMillis: () => number }).toMillis();
  }
  if (typeof value === "number") return value;
  // Documento recién creado con serverTimestamp() todavía sin resolver:
  // se manda al tope para que aparezca de una vez.
  return Number.MAX_SAFE_INTEGER;
}

export function useCollection<T extends { id: string }>(
  name: string,
  constraints: QueryConstraint[] = [],
  sortByDesc?: string
) {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const q = query(collection(db, name), ...constraints);
    const unsub = onSnapshot(
      q,
      (snap) => {
        const docs = snap.docs.map((d) => ({ id: d.id, ...d.data() }) as T);
        if (sortByDesc) {
          docs.sort(
            (a, b) => toMillis((b as Sortable)[sortByDesc]) - toMillis((a as Sortable)[sortByDesc])
          );
        }
        setItems(docs);
        setError(null);
        setLoading(false);
      },
      (err) => {
        // Antes se ignoraba en silencio y la página simplemente decía "no hay
        // nada" — imposible de diagnosticar desde el navegador.
        console.error(`[useCollection:${name}]`, err.code, err.message);
        setError(err.code || "error");
        setLoading(false);
      }
    );
    return () => unsub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, sortByDesc, JSON.stringify(constraints.map((c) => c.type))]);

  return { items, loading, error };
}
