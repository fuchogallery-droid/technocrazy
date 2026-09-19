import { jsPDF } from "jspdf";

const BLUE: [number, number, number] = [41, 121, 255];
const PURPLE: [number, number, number] = [124, 77, 255];
const DARK: [number, number, number] = [20, 20, 30];
const GRAY: [number, number, number] = [110, 110, 120];

const BUSINESS = {
  name: "TechnoCrazy",
  owner: "Rafael Navarro",
  email: "rafaelpixel3004@gmail.com",
  phone: "+1 779 431 8214",
  website: "technocrazy.org",
};

export type ContractData = {
  number: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  service: string;
  description: string;
  amount: string;
  currency: string;
  paymentTerms: string;
  startDate: string;
  deliveryDate: string;
  notes: string;
};

export type ReceiptData = {
  number: string;
  clientName: string;
  clientEmail: string;
  concept: string;
  amount: string;
  currency: string;
  paymentMethod: string;
  date: string;
  notes: string;
};

function addHeader(doc: jsPDF, title: string, number: string, date: string) {
  const pageWidth = doc.internal.pageSize.getWidth();

  doc.setFillColor(...BLUE);
  doc.rect(0, 0, pageWidth, 26, "F");
  doc.setFillColor(...PURPLE);
  doc.rect(pageWidth - 26, 0, 26, 26, "F");

  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(BUSINESS.name, 14, 16);
  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.text(BUSINESS.website, 14, 22);

  doc.setTextColor(...DARK);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text(title, 14, 38);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...GRAY);
  doc.text(`No. ${number}`, 14, 45);
  doc.text(`Fecha: ${date}`, pageWidth - 14, 45, { align: "right" });

  doc.setDrawColor(...GRAY);
  doc.setLineWidth(0.2);
  doc.line(14, 50, pageWidth - 14, 50);

  return 58;
}

function addFooter(doc: jsPDF) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setDrawColor(...GRAY);
  doc.setLineWidth(0.2);
  doc.line(14, pageHeight - 22, pageWidth - 14, pageHeight - 22);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(...GRAY);
  doc.text(
    `${BUSINESS.name} · ${BUSINESS.owner} · ${BUSINESS.email} · ${BUSINESS.phone} · ${BUSINESS.website}`,
    pageWidth / 2,
    pageHeight - 15,
    { align: "center" }
  );
}

function sectionLabel(doc: jsPDF, text: string, y: number) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(...BLUE);
  doc.text(text, 14, y);
  return y + 6;
}

function field(doc: jsPDF, label: string, value: string, y: number) {
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(...GRAY);
  doc.text(label, 14, y);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(...DARK);
  const lines = doc.splitTextToSize(value || "-", pageWidth - 28);
  doc.text(lines, 14, y + 5);
  return y + 5 + lines.length * 5;
}

export function generateContractPDF(data: ContractData) {
  const doc = new jsPDF();
  let y = addHeader(doc, "CONTRATO DE PRESTACIÓN DE SERVICIOS", data.number, data.startDate || "-");

  y = sectionLabel(doc, "Partes", y);
  y = field(doc, "El Proveedor", `${BUSINESS.name} (${BUSINESS.owner}) — ${BUSINESS.email} — ${BUSINESS.phone}`, y);
  y = field(doc, "El Cliente", `${data.clientName}${data.clientEmail ? " — " + data.clientEmail : ""}${data.clientPhone ? " — " + data.clientPhone : ""}`, y + 3);

  y = sectionLabel(doc, "Objeto del contrato", y + 8);
  y = field(doc, "Servicio", data.service, y);
  y = field(doc, "Descripción / alcance del trabajo", data.description, y + 3);

  y = sectionLabel(doc, "Monto y forma de pago", y + 8);
  y = field(doc, "Monto total", `${data.amount} ${data.currency}`, y);
  y = field(doc, "Condiciones de pago", data.paymentTerms, y + 3);

  y = sectionLabel(doc, "Fechas", y + 8);
  y = field(doc, "Inicio del trabajo", data.startDate, y);
  y = field(doc, "Entrega estimada", data.deliveryDate, y + 3);

  if (data.notes && data.notes.trim()) {
    y = sectionLabel(doc, "Cláusulas adicionales", y + 8);
    y = field(doc, "Notas", data.notes, y);
  }

  y += 20;
  const pageWidth = doc.internal.pageSize.getWidth();
  doc.setDrawColor(...DARK);
  doc.setLineWidth(0.3);
  doc.line(14, y, 90, y);
  doc.line(pageWidth - 90, y, pageWidth - 14, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...DARK);
  doc.text("Firma del Proveedor", 14, y + 5);
  doc.text("Firma del Cliente", pageWidth - 90, y + 5);

  addFooter(doc);
  return doc;
}

export function generateReceiptPDF(data: ReceiptData) {
  const doc = new jsPDF();
  let y = addHeader(doc, "RECIBO DE PAGO", data.number, data.date || "-");

  y = sectionLabel(doc, "Detalle del pago", y);
  y = field(doc, "Recibí de", `${data.clientName}${data.clientEmail ? " — " + data.clientEmail : ""}`, y);
  y = field(doc, "La cantidad de", `${data.amount} ${data.currency}`, y + 3);
  y = field(doc, "Por concepto de", data.concept, y + 3);
  y = field(doc, "Método de pago", data.paymentMethod, y + 3);

  if (data.notes && data.notes.trim()) {
    y = sectionLabel(doc, "Notas", y + 8);
    y = field(doc, "Observaciones", data.notes, y);
  }

  y += 25;
  doc.setDrawColor(...DARK);
  doc.setLineWidth(0.3);
  doc.line(14, y, 90, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...DARK);
  doc.text(`Firma — ${BUSINESS.owner}`, 14, y + 5);

  addFooter(doc);
  return doc;
}
