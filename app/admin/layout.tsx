"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, signInWithEmailAndPassword, type User } from "firebase/auth";
import { ArrowLeft, Lock } from "lucide-react";
import { auth } from "@/lib/firebase";

// Alias de usuario: Rafael entra escribiendo "rafaelpixel" (o su nombre) en vez
// del correo completo. Escribir el correo entero sigue funcionando igual.
const USER_ALIASES: Record<string, string> = {
  rafaelpixel: "rafaelpixel3004@gmail.com",
  "rafael pixel": "rafaelpixel3004@gmail.com",
  rafael: "rafaelpixel3004@gmail.com",
  fuchogallery: "fuchogallery@gmail.com",
  fucho: "fuchogallery@gmail.com",
};

function resolveEmail(input: string) {
  const clean = input.trim().toLowerCase();
  if (clean.includes("@")) return clean;
  return USER_ALIASES[clean] ?? clean;
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => onAuthStateChanged(auth, setUser), []);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    setLoadingLogin(true);
    try {
      await signInWithEmailAndPassword(auth, resolveEmail(email), password);
    } catch {
      setLoginError("Usuario o contraseña incorrectos.");
    } finally {
      setLoadingLogin(false);
    }
  }

  if (user === undefined) {
    return (
      <main className="min-h-screen flex items-center justify-center" style={{ background: "#05050f" }}>
        <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13 }}>Cargando…</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main
        className="min-h-screen flex items-center justify-center px-4"
        style={{ background: "radial-gradient(circle at 50% 0%,#0d1330 0%,#05050f 55%)" }}
      >
        <div className="w-full" style={{ maxWidth: 380 }}>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 mb-6 transition-colors hover:text-white"
            style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", textDecoration: "none" }}
          >
            <ArrowLeft size={13} /> Volver al sitio
          </Link>

          <form
            onSubmit={handleLogin}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: 16,
              padding: 32,
              boxShadow: "0 24px 70px rgba(0,0,0,0.5)",
            }}
          >
            <div className="flex items-center gap-2.5 mb-1">
              <div
                className="flex items-center justify-center flex-shrink-0"
                style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
              >
                <Lock size={16} style={{ color: "#fff" }} />
              </div>
              <div style={{ lineHeight: 1.3 }}>
                <div className="font-bold text-white" style={{ fontSize: 16 }}>Panel Admin</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.35)" }}>Acceso privado</div>
              </div>
            </div>

            <div style={{ height: 1, background: "rgba(255,255,255,0.07)", margin: "22px 0" }} />

            <label className="adm-label">Usuario</label>
            <input
              type="text"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="adm-input"
              placeholder="rafaelpixel"
              required
              style={{ marginBottom: 16 }}
            />

            <label className="adm-label">Contraseña</label>
            <input
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="adm-input"
              required
              style={{ marginBottom: 18 }}
            />

            {loginError && (
              <p style={{ color: "#ff8080", fontSize: 12, marginBottom: 14 }}>{loginError}</p>
            )}

            <button
              type="submit"
              disabled={loadingLogin}
              className="adm-btn adm-btn-primary w-full"
              style={{ padding: "12px 0" }}
            >
              {loadingLogin ? "Entrando…" : "Entrar"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen" style={{ background: "#05050f" }}>
      {children}
    </main>
  );
}
