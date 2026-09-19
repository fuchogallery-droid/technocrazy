"use client";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

// Patrón "grid-template-rows 0fr→1fr" para expandir/colapsar contenido con animación
// suave sin medir alturas en JS. Usado en tarjetas de producto ("Ver más detalles")
// y en el acordeón de Preguntas.
export default function ExpandableSection({
  label,
  openLabel,
  children,
  defaultOpen = false,
}: {
  label: string;
  openLabel?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-sm font-semibold"
        style={{ color: "#2979ff" }}
      >
        {open ? openLabel || label : label}
        <ChevronDown
          size={16}
          style={{ transition: "transform 0.25s ease", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
      >
        <div className="overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
