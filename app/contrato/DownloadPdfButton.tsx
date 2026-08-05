"use client";

export default function DownloadPdfButton() {
  return (
    <>
      <button
        onClick={() => window.print()}
        className="no-print"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "linear-gradient(135deg,#2979ff,#7c4dff)",
          color: "#fff",
          fontWeight: 700,
          fontSize: 14,
          padding: "10px 18px",
          borderRadius: 10,
          border: "none",
          cursor: "pointer",
          margin: "8px 0 28px",
        }}
      >
        Descargar / Imprimir PDF
      </button>
      <style>{`
        @media print {
          .no-print { display: none !important; }
        }
      `}</style>
    </>
  );
}
