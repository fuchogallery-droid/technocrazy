"use client";
import { useState, type ReactNode } from "react";
import Link from "next/link";
import { Menu, X, LogOut, PencilRuler, type LucideIcon } from "lucide-react";
import { useAdminMode } from "@/contexts/AdminModeContext";

export type AdminTabDef<T extends string> = { id: T; label: string; icon: LucideIcon };
// Un grupo agrupa varias pestañas bajo una sección del panel (Inicio del sitio, Chip NFC…).
export type AdminGroupDef<T extends string> = { id: string; label: string; icon: LucideIcon; tabs: AdminTabDef<T>[] };

// Cáscara del panel admin: barra superior fija con identidad + acciones, y una
// segunda fila con las pestañas en scroll horizontal (antes se envolvían en dos
// líneas apretadas). Las pestañas activas se marcan con superficie sólida y
// subrayado en vez de pastillas de colores.
export default function AdminTabShell<T extends string>({
  groups,
  activeTab,
  onTabChange,
  onLogout,
  children,
}: {
  groups: AdminGroupDef<T>[];
  activeTab: T;
  onTabChange: (t: T) => void;
  onLogout: () => void;
  children: ReactNode;
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { setEditModeEnabled } = useAdminMode();

  const tabs = groups.flatMap((g) => g.tabs);
  const active = tabs.find((t) => t.id === activeTab);
  const activeGroup = groups.find((g) => g.tabs.some((t) => t.id === activeTab)) ?? groups[0];

  return (
    <div>
      {/* ── Barra superior ── */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(5,5,15,0.92)",
          backdropFilter: "blur(14px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="tc-wrap flex items-center justify-between gap-4" style={{ maxWidth: 1180, height: 62 }}>
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <div
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 34, height: 34, borderRadius: 10, background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
            >
              <span className="text-white font-black" style={{ fontSize: 12.5 }}>TC</span>
            </div>
            <div className="hidden sm:block" style={{ lineHeight: 1.25 }}>
              <div className="font-bold text-white" style={{ fontSize: 14 }}>Panel Admin</div>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.35)" }}>TechnoCrazy</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Candado: enciende el modo edición y salta al sitio real */}
            <Link
              href="/"
              onClick={() => setEditModeEnabled(true)}
              className="adm-btn adm-btn-ghost adm-btn-sm"
              title="Abre el sitio con el modo edición activado para cambiar textos haciendo clic"
            >
              <PencilRuler size={13} />
              <span className="hidden md:inline">Editar la página</span>
            </Link>
            <Link href="/" className="adm-btn adm-btn-ghost adm-btn-sm hidden sm:inline-flex">
              Ver sitio
            </Link>
            <button type="button" onClick={onLogout} className="adm-btn adm-btn-ghost adm-btn-sm">
              <LogOut size={13} />
              <span className="hidden sm:inline">Salir</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileNavOpen((v) => !v)}
              className="text-white lg:hidden"
              style={{ marginLeft: 2 }}
              aria-label="Secciones del panel"
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* ── Secciones (desktop): una fila de grupos y, debajo, las pestañas del grupo activo ── */}
        <nav className="hidden lg:block" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="tc-wrap flex flex-col" style={{ maxWidth: 1180, gap: 8, paddingTop: 10, paddingBottom: 12 }}>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${groups.length}, minmax(0, 1fr))`, gap: 6 }}>
              {groups.map((g) => {
                const Icon = g.icon;
                const isActive = g.id === activeGroup.id;
                return (
                  <button
                    key={g.id}
                    type="button"
                    onClick={() => onTabChange(g.tabs[0].id)}
                    aria-pressed={isActive}
                    className="flex items-center justify-center gap-2 transition-colors"
                    style={{
                      padding: "10px 8px",
                      borderRadius: 10,
                      fontSize: 13,
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#fff" : "rgba(255,255,255,0.55)",
                      background: isActive ? "rgba(41,121,255,0.18)" : "rgba(255,255,255,0.025)",
                      border: `1px solid ${isActive ? "rgba(41,121,255,0.5)" : "rgba(255,255,255,0.06)"}`,
                      minWidth: 0,
                    }}
                  >
                    <Icon size={15} style={{ flexShrink: 0, color: isActive ? "#2979ff" : "currentColor" }} />
                    <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{g.label}</span>
                  </button>
                );
              })}
            </div>
            {activeGroup.tabs.length > 1 && (
              <div className="flex flex-wrap" style={{ gap: 6 }}>
                {activeGroup.tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => onTabChange(tab.id)}
                      className="flex items-center gap-1.5 transition-colors"
                      style={{
                        padding: "7px 12px",
                        borderRadius: 8,
                        fontSize: 12.5,
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                        background: isActive ? "rgba(255,255,255,0.09)" : "transparent",
                        borderBottom: `2px solid ${isActive ? "#2979ff" : "transparent"}`,
                      }}
                    >
                      <Icon size={13} style={{ flexShrink: 0 }} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* ── Secciones (móvil): grupos con sus pestañas ── */}
        {mobileNavOpen && (
          <nav className="lg:hidden" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(8,10,24,0.98)", maxHeight: "70vh", overflowY: "auto" }}>
            <div className="tc-wrap flex flex-col" style={{ gap: 14, paddingTop: 12, paddingBottom: 16 }}>
              {groups.map((g) => {
                const GIcon = g.icon;
                return (
                  <div key={g.id}>
                    <p className="flex items-center gap-1.5 font-bold uppercase" style={{ fontSize: 11, letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>
                      <GIcon size={12} /> {g.label}
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3" style={{ gap: 6 }}>
                      {g.tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                          <button
                            key={tab.id}
                            type="button"
                            onClick={() => {
                              onTabChange(tab.id);
                              setMobileNavOpen(false);
                            }}
                            className="flex items-center gap-2"
                            style={{
                              padding: "10px 12px",
                              minHeight: 44,
                              borderRadius: 9,
                              fontSize: 13,
                              fontWeight: isActive ? 700 : 500,
                              color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                              background: isActive ? "rgba(41,121,255,0.16)" : "rgba(255,255,255,0.03)",
                              border: `1px solid ${isActive ? "rgba(41,121,255,0.4)" : "rgba(255,255,255,0.07)"}`,
                            }}
                          >
                            <Icon size={14} style={{ flexShrink: 0 }} />
                            <span style={{ textAlign: "left" }}>{tab.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      {/* ── Contenido ── */}
      <div className="tc-wrap" style={{ maxWidth: 1180, paddingTop: 34, paddingBottom: 90 }}>
        {active && (
          <div style={{ marginBottom: 26 }}>
            <h1 className="text-white font-black" style={{ fontSize: 24, letterSpacing: "-0.02em" }}>
              {active.label}
            </h1>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
