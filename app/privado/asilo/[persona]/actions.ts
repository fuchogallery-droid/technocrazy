"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { claveCorrecta, tokenDeSesion, nombreCookie, PERSONAS } from "@/lib/privadoAuth";

export type EstadoPuerta = { error?: string };

export async function entrar(
  _anterior: EstadoPuerta,
  datos: FormData
): Promise<EstadoPuerta> {
  const slug = String(datos.get("persona") ?? "");
  const clave = String(datos.get("clave") ?? "");

  if (!PERSONAS[slug]) return { error: "Sesión no válida." };

  if (!claveCorrecta(slug, clave)) {
    // Retardo fijo: encarece el intento por fuerza bruta sin delatar nada.
    await new Promise((r) => setTimeout(r, 700));
    return { error: "Clave incorrecta." };
  }

  const almacen = await cookies();
  almacen.set(nombreCookie(slug), tokenDeSesion(slug), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: `/privado/asilo/${slug}`,
    maxAge: 60 * 60 * 24 * 30, // 30 días
  });

  redirect(`/privado/asilo/${slug}`);
}
