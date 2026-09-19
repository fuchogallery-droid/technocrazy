"use client";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { SiteConfigProvider } from "@/contexts/SiteConfigContext";
import { AdminModeProvider } from "@/contexts/AdminModeContext";
import EditModeToggle from "@/components/admin/EditModeToggle";
import VisualEditor from "@/components/admin/VisualEditor";
import { ReactNode } from "react";

// El candado y el editor visual son para el SITIO. Dentro de /admin estorban
// (el panel tiene su propio botón "Editar la página"), así que ahí no se montan.
function AdminOverlays() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <>
      <EditModeToggle />
      <VisualEditor />
    </>
  );
}

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <SiteConfigProvider>
        <AdminModeProvider>
          {children}
          {/* Se auto-ocultan si no hay sesión de admin: para un visitante
              normal no renderizan absolutamente nada. */}
          <AdminOverlays />
        </AdminModeProvider>
      </SiteConfigProvider>
    </LanguageProvider>
  );
}
