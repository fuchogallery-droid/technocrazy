"use client";
import { Lock, LockOpen } from "lucide-react";
import { useAdminMode } from "@/contexts/AdminModeContext";

// Candado flotante, visible solo cuando hay sesión de admin activa en este
// navegador. Abrirlo enciende el modo edición sobre el sitio real; cerrarlo
// devuelve la vista exacta que ve un visitante, sin cerrar sesión.
// Esquina inferior izquierda a propósito: WhatsAppFloat y el chat viven abajo
// a la derecha, así que no compiten por el mismo espacio.
export default function EditModeToggle() {
  const { isRealAdmin, editModeEnabled, setEditModeEnabled } = useAdminMode();

  if (!isRealAdmin) return null;

  return (
    <button
      type="button"
      onClick={() => setEditModeEnabled(!editModeEnabled)}
      aria-label={editModeEnabled ? "Desactivar edición de la página" : "Activar edición de la página"}
      title={
        editModeEnabled
          ? "Edición activada — clic para ver el sitio como un visitante"
          : "Edición desactivada — clic para editar la página"
      }
      className="fixed z-[65] flex items-center justify-center rounded-full transition-transform hover:scale-105"
      style={{
        bottom: 24,
        left: 24,
        width: 48,
        height: 48,
        border: editModeEnabled ? "none" : "1px solid rgba(255,255,255,0.16)",
        background: editModeEnabled ? "linear-gradient(135deg,#2979ff,#7c4dff)" : "rgba(10,14,32,0.92)",
        backdropFilter: "blur(10px)",
        color: editModeEnabled ? "#fff" : "rgba(255,255,255,0.55)",
        boxShadow: editModeEnabled ? "0 10px 30px rgba(41,121,255,0.5)" : "0 6px 20px rgba(0,0,0,0.4)",
      }}
    >
      {editModeEnabled ? <LockOpen size={19} /> : <Lock size={19} />}
    </button>
  );
}
