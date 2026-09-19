import type { Timestamp } from "firebase/firestore";
import type { NfcChipType } from "@/lib/nfcTypes";

// Tipos compartidos de las colecciones nuevas de Firestore (proyecto technocrazy-admin).
// Todas usan el id del documento como `id` y `createdAt: serverTimestamp()`.

export type Post = {
  id: string;
  title: string;
  body: string;
  imageUrl?: string;
  published: boolean;
  createdAt?: Timestamp;
};

export type Product = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  imageUrl?: string;
  priceCents: number;
  currency: "usd";
  active: boolean;
  createdAt?: Timestamp;
};

export type LibraryItemType = "libro" | "video" | "imagen" | "otro";

export type LibraryItem = {
  id: string;
  title: string;
  description: string;
  type: LibraryItemType;
  link: string;
  price?: string;
  imageUrl?: string;
  createdAt?: Timestamp;
};

export type GalleryImage = {
  id: string;
  url: string;
  title?: string;
  prompt?: string;
  caption?: string; // legado, ya no se usa en items nuevos
  createdAt?: Timestamp;
};

export type Testimonial = {
  id: string;
  name: string;
  comment: string;
  rating: number; // 1-5
  photoUrls: string[];
  websiteUrl?: string;
  approved: boolean;
  createdAt?: Timestamp;
};

export type Question = {
  id: string;
  name?: string;
  question: string;
  answer?: string;
  answeredAt?: Timestamp;
  createdAt?: Timestamp;
};

export type FeedbackCategory = "sugerencia" | "problema" | "elogio" | "otro";

export type FeedbackItem = {
  id: string;
  name?: string;
  message: string;
  category?: FeedbackCategory;
  createdAt?: Timestamp;
};

export type NewsCategory = "tecnologia" | "ciencia" | "ia";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  imageUrl?: string;
  sourceUrl: string;
  category: NewsCategory;
  createdAt?: Timestamp;
};

export const FEEDBACK_CATEGORY_LABELS: Record<FeedbackCategory, string> = {
  sugerencia: "Sugerencia",
  problema: "Problema",
  elogio: "Elogio",
  otro: "Otro",
};

export const NEWS_CATEGORY_LABELS: Record<NewsCategory, string> = {
  tecnologia: "Tecnología",
  ciencia: "Ciencia",
  ia: "IA",
};

export const LIBRARY_TYPE_LABELS: Record<LibraryItemType, string> = {
  libro: "Libro",
  video: "Video",
  imagen: "Imagen",
  otro: "Otro",
};

export type NfcChip = {
  id: string;
  code: string;
  label: string;
  type: NfcChipType;
  fields: Record<string, string>;
  destinationUrl: string;
  active: boolean;
  createdAt?: Timestamp;
};

export type NfcScan = {
  id: string;
  timestamp?: Timestamp;
  ip: string;
  userAgent: string;
  referrer: string;
  country: string;
  city: string;
  region: string;
};
