// Tipos compartidos de las páginas de servicio (/servicios/[slug]), estilo NFC:
// hero animado, explicación interactiva, proceso, entregables, trabajos, precio y preguntas.

export type WireRow =
  | "nav" | "hero" | "cards3" | "list" | "chart" | "text" | "btn"
  | "chat" | "tabs" | "map" | "grid4" | "price" | "search" | "feed";

export type Demo =
  | { kind: "wire"; frame: "browser" | "phone"; rows: WireRow[] }
  | { kind: "flow"; steps: { icon: string; label: string }[] };

export type HeroId = "web" | "apps" | "systems" | "ai" | "robot";

export type ServicioCopy = {
  back: string;
  badge: string;
  titleA: string;
  titleB: string;
  tagline: string;
  ctaWant: string;
  ctaPortfolio: string;
  chips: string[];

  areasA: string;
  areasB: string;
  areasSub: string;
  areas: { icon: string; title: string; desc: string; tags: string[] }[];

  explainA: string;
  explainB: string;
  explainSub: string;
  explainIdealFor: string;
  explain: { name: string; what: string; ideal: string; demo: Demo }[];

  processA: string;
  processB: string;
  processSub: string;
  steps: { icon: string; title: string; desc: string }[];

  receiveA: string;
  receiveB: string;
  receiveSub: string;
  files: { icon: string; title: string; desc: string }[];

  portfolioA: string;
  portfolioB: string;
  portfolioSub: string;
  portfolioHint: string;
  portfolio: { img?: string; url?: string; cta?: boolean; label: string }[];

  priceA: string;
  priceB: string;
  priceSub: string;
  priceFrom: string;
  priceTo?: string;
  priceUnit: string;
  priceSteps: { label: string; desc: string }[];
  factorsTitle: string;
  factors: { icon: string; title: string; desc: string }[];
  priceNote: string;

  faqA: string;
  faqB: string;
  faq: { q: string; a: string }[];

  finalCtaTitle: string;
  finalCtaDesc: string;
  finalCtaBtn: string;
};

export type ServicioDef = {
  slug: string;
  hero: HeroId;
  theme: { accent: string; accent2: string; soft: string };
  meta: { title: string; description: string };
  copy: Record<"es" | "en", ServicioCopy>;
};
