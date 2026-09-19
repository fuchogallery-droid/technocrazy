"use client";

import { useActionState } from "react";
import { entrar, type EstadoPuerta } from "./actions";

export default function GateForm({
  slug,
  nombre,
}: {
  slug: string;
  nombre: string;
}) {
  const [estado, accion, pendiente] = useActionState<EstadoPuerta, FormData>(
    entrar,
    {}
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#12100e",
        padding: "24px",
        fontFamily:
          "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      <form
        action={accion}
        style={{
          width: "100%",
          maxWidth: 380,
          background: "#1c1a17",
          border: "1px solid #322e29",
          borderRadius: 14,
          padding: "30px 28px",
          boxShadow: "0 18px 50px rgba(0,0,0,.45)",
        }}
      >
        <input type="hidden" name="persona" value={slug} />

        <p
          style={{
            margin: "0 0 4px",
            fontSize: 12,
            letterSpacing: ".1em",
            textTransform: "uppercase",
            color: "#d9a441",
          }}
        >
          Sesión de {nombre}
        </p>
        <h1
          style={{
            margin: "0 0 6px",
            fontSize: 19,
            color: "#f2eee8",
            letterSpacing: "-0.01em",
          }}
        >
          Documento privado
        </h1>
        <p style={{ margin: "0 0 22px", fontSize: 13.5, color: "#8d857a", lineHeight: 1.5 }}>
          La clave es tu nombre.
        </p>

        <label
          htmlFor="clave"
          style={{
            display: "block",
            fontSize: 12,
            letterSpacing: ".07em",
            textTransform: "uppercase",
            color: "#8d857a",
            marginBottom: 7,
          }}
        >
          Clave
        </label>
        <input
          id="clave"
          name="clave"
          type="password"
          autoComplete="off"
          autoFocus
          required
          style={{
            width: "100%",
            padding: "11px 13px",
            fontSize: 15,
            color: "#f2eee8",
            background: "#12100e",
            border: "1px solid #3a352f",
            borderRadius: 8,
            outline: "none",
          }}
        />

        {estado.error && (
          <p style={{ margin: "13px 0 0", fontSize: 13.5, color: "#e08a76" }}>
            {estado.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pendiente}
          style={{
            width: "100%",
            marginTop: 20,
            padding: "11px 16px",
            fontSize: 15,
            fontWeight: 600,
            color: pendiente ? "#8d857a" : "#12100e",
            background: pendiente ? "#3a352f" : "#d9a441",
            border: "none",
            borderRadius: 8,
            cursor: pendiente ? "default" : "pointer",
          }}
        >
          {pendiente ? "Comprobando…" : "Entrar"}
        </button>
      </form>
    </main>
  );
}
