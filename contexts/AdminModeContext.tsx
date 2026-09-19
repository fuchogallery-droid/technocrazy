"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { auth } from "@/lib/firebase";

// Saber "soy admin" fuera de /admin. A diferencia de Horizon (cookie de sesión
// leída en el servidor), acá la sesión de admin vive en Firebase Auth del lado
// del cliente — la misma sesión que abre el panel /admin. Si Rafael entró al
// panel alguna vez en este navegador, la sesión persiste y el candado aparece
// en el sitio público.
//
// Sobre esa verdad (`isRealAdmin`) va el interruptor del candado
// (`editModeEnabled`) para poder recorrer el sitio como lo ve un visitante
// —sin lápices ni resaltados— sin tener que cerrar sesión.

const EDIT_MODE_KEY = "tc-admin-edit-mode";

type AdminModeValue = {
  isRealAdmin: boolean;
  editModeEnabled: boolean;
  setEditModeEnabled: (value: boolean) => void;
  user: User | null;
};

const AdminModeContext = createContext<AdminModeValue>({
  isRealAdmin: false,
  editModeEnabled: false,
  setEditModeEnabled: () => {},
  user: null,
});

export function AdminModeProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // Arranca apagado: el admin abre el candado cuando quiere editar, así el
  // sitio se ve normal al entrar y no hay parpadeo de controles en la carga.
  const [editModeEnabled, setEditModeEnabledState] = useState(false);

  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u)), []);

  useEffect(() => {
    if (!user) return;
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (localStorage.getItem(EDIT_MODE_KEY) === "on") setEditModeEnabledState(true);
    } catch {
      // sin localStorage el modo simplemente no se recuerda entre visitas
    }
  }, [user]);

  function setEditModeEnabled(value: boolean) {
    setEditModeEnabledState(value);
    try {
      localStorage.setItem(EDIT_MODE_KEY, value ? "on" : "off");
    } catch {
      // no es crítico que no persista
    }
  }

  return (
    <AdminModeContext.Provider
      value={{ isRealAdmin: Boolean(user), editModeEnabled, setEditModeEnabled, user }}
    >
      {children}
    </AdminModeContext.Provider>
  );
}

// `true` solo si hay sesión de admin Y el candado está abierto. Es lo que
// consultan el detector de clics y el resaltado de textos editables.
export function useAdminEditing(): boolean {
  const { isRealAdmin, editModeEnabled } = useContext(AdminModeContext);
  return isRealAdmin && editModeEnabled;
}

// Para el botón del candado, que necesita distinguir "es admin" de
// "está editando ahora mismo".
export function useAdminMode() {
  return useContext(AdminModeContext);
}
