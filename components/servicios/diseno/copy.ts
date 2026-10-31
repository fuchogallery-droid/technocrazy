// Textos de la página /servicios/diseno (ES + EN). Los íconos se piden por nombre
// y los resuelve DisenoView.tsx, igual que en components/nfc.

export type DisenoCopy = {
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

  anatomyA: string;
  anatomyB: string;
  anatomySub: string;
  anatomyIdealFor: string;
  anatomy: { id: "isotipo" | "logotipo" | "imagotipo" | "isologo"; name: string; what: string; ideal: string }[];

  processA: string;
  processB: string;
  processSub: string;
  steps: { icon: string; title: string; desc: string }[];

  receiveA: string;
  receiveB: string;
  receiveSub: string;
  paletteTitle: string;
  palette: { role: string; hex: string }[];
  typeTitle: string;
  typeHeading: string;
  typeBody: string;
  files: { icon: string; title: string; desc: string }[];

  portfolioA: string;
  portfolioB: string;
  portfolioSub: string;
  portfolioHint: string;
  portfolio: { img: string; label: string }[];

  priceA: string;
  priceB: string;
  priceSub: string;
  priceFrom: string;
  priceTo: string;
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

const IMG = "/images/servicios/diseno";

export const DISENO_COPY: Record<"es" | "en", DisenoCopy> = {
  es: {
    back: "Volver a servicios",
    badge: "DISEÑO GRÁFICO Y BRANDING",
    titleA: "Una marca que se ve",
    titleB: "y se recuerda",
    tagline:
      "Logotipos, identidad visual, redes sociales, publicidad y empaques con un mismo lenguaje. Tu negocio deja de verse improvisado y empieza a verse como una marca seria.",
    ctaWant: "Quiero mi diseño",
    ctaPortfolio: "Ver trabajos",
    chips: ["Logotipos", "Identidad", "Redes", "Packaging"],

    areasA: "Todo lo que",
    areasB: "diseñamos",
    areasSub: "Seis áreas que se combinan entre sí. Elige una o arma tu marca completa.",
    areas: [
      { icon: "badge", title: "Logotipos", desc: "El símbolo y el nombre de tu marca, pensados para verse bien tan pequeños como en una fachada.", tags: ["Isotipo", "Imagotipo", "Isologo"] },
      { icon: "palette", title: "Identidad de marca", desc: "Colores, tipografías y reglas de uso para que todo lo que publiques se vea de la misma familia.", tags: ["Paleta", "Tipografía", "Manual"] },
      { icon: "share", title: "Redes sociales", desc: "Plantillas, portadas y publicaciones con tu identidad, listas para que publiques sin pensar el diseño cada vez.", tags: ["Posts", "Historias", "Portadas"] },
      { icon: "megaphone", title: "Piezas publicitarias", desc: "Banners, anuncios y displays que comunican una sola idea y llevan a una sola acción.", tags: ["Banners", "Anuncios", "Flyers"] },
      { icon: "package", title: "Packaging", desc: "Empaques y etiquetas que hacen que tu producto destaque en la mano y en la repisa.", tags: ["Cajas", "Etiquetas", "Bolsas"] },
      { icon: "pen", title: "Ilustración", desc: "Arte digital personalizado que le da a tu marca una personalidad que nadie más tiene.", tags: ["Personajes", "Íconos", "Arte"] },
    ],

    anatomyA: "Anatomía de",
    anatomyB: "un logotipo",
    anatomySub: "No todos los logos son iguales. Toca cada tipo y mira cómo se construye.",
    anatomyIdealFor: "Ideal para",
    anatomy: [
      { id: "isotipo", name: "Isotipo", what: "Solo el símbolo, sin letras. Se reconoce por la forma.", ideal: "Marcas ya conocidas, ícono de app, foto de perfil y sellos." },
      { id: "logotipo", name: "Logotipo", what: "Solo el nombre, escrito con una tipografía propia.", ideal: "Marcas con un nombre corto y fuerte que debe leerse bien." },
      { id: "imagotipo", name: "Imagotipo", what: "Símbolo y nombre juntos, pero cada uno puede usarse por separado.", ideal: "El más versátil: sirve en una web, en una tarjeta y en una fachada." },
      { id: "isologo", name: "Isologo", what: "Símbolo y nombre fundidos en una sola pieza que no se separa.", ideal: "Sellos, etiquetas y productos donde el logo va siempre completo." },
    ],

    processA: "Cómo",
    processB: "trabajamos",
    processSub: "Un camino claro, de tu idea al archivo final. Tú apruebas cada paso.",
    steps: [
      { icon: "message", title: "Conversamos", desc: "Me cuentas qué haces, a quién le vendes y qué marcas te gustan. Esa charla define todo lo demás." },
      { icon: "search", title: "Investigamos", desc: "Miramos a tu competencia y a tu cliente para encontrar cómo diferenciarte, no solo cómo adornarte." },
      { icon: "pen", title: "Bocetamos", desc: "Exploramos ideas de símbolo, color y tipografía antes de pulir ninguna." },
      { icon: "eye", title: "Propuesta", desc: "Te muestro el diseño aplicado en tus redes, papelería o empaque, para que lo veas en uso real." },
      { icon: "check", title: "Ajustes y entrega", desc: "Afinamos contigo lo que haga falta y te entrego todos los archivos listos para usar." },
    ],

    receiveA: "Qué",
    receiveB: "recibes",
    receiveSub: "No solo un logo en una imagen: un paquete completo para usar tu marca sin depender de nadie.",
    paletteTitle: "Tu paleta de color",
    palette: [
      { role: "Primario", hex: "#7C3AED" },
      { role: "Secundario", hex: "#A855F7" },
      { role: "Acento", hex: "#F59E0B" },
      { role: "Fondo", hex: "#0D0D1A" },
      { role: "Texto", hex: "#F5F3FF" },
    ],
    typeTitle: "Tu tipografía",
    typeHeading: "Títulos con carácter",
    typeBody: "Textos claros que se leen bien en el teléfono, en la web y en lo impreso.",
    files: [
      { icon: "image", title: "Logo en varios formatos", desc: "PNG con fondo transparente y vectores, en versión a color, blanco y negro." },
      { icon: "layers", title: "Archivos editables", desc: "Los archivos de trabajo, para que otro diseñador pueda seguir sin rehacerlo." },
      { icon: "book", title: "Manual de marca", desc: "Una guía corta: cómo usar el logo, qué colores y qué tipografías." },
      { icon: "share", title: "Kit para redes", desc: "Foto de perfil, portada y plantillas con tu identidad aplicada." },
    ],

    portfolioA: "Trabajos",
    portfolioB: "reales",
    portfolioSub: "Algunas de las piezas que hemos creado.",
    portfolioHint: "Toca una imagen para verla en grande",
    portfolio: [
      { img: `${IMG}/identidad-marca.png`, label: "Identidad de marca" },
      { img: `${IMG}/logotipos.png`, label: "Logotipos" },
      { img: `${IMG}/redes-sociales.png`, label: "Redes sociales" },
      { img: `${IMG}/piezas-publicitarias.png`, label: "Piezas publicitarias" },
      { img: `${IMG}/packaging.png`, label: "Packaging" },
      { img: `${IMG}/ilustracion.png`, label: "Ilustración" },
    ],

    priceA: "Cuánto",
    priceB: "cuesta",
    priceSub: "Precio según el alcance. Una pieza suelta cuesta menos que una identidad completa.",
    priceFrom: "$10",
    priceTo: "$100",
    priceUnit: "USD",
    priceSteps: [
      { label: "Pieza suelta", desc: "Un banner, un post o un flyer" },
      { label: "Logo + aplicaciones", desc: "Logotipo y su uso en redes y papelería" },
      { label: "Identidad completa", desc: "Marca, manual, redes y empaque" },
    ],
    factorsTitle: "Qué define el precio",
    factors: [
      { icon: "layers", title: "Cantidad de piezas", desc: "Una pieza o veinte: cada una suma tiempo de diseño." },
      { icon: "sparkles", title: "Complejidad", desc: "Una ilustración a medida lleva más trabajo que una plantilla." },
      { icon: "package", title: "Dónde se usará", desc: "Pantalla, impreso o empaque físico tienen requisitos distintos." },
    ],
    priceNote: "Cotización personalizada y sin compromiso. Dime qué necesitas y te digo el precio exacto.",

    faqA: "Preguntas",
    faqB: "frecuentes",
    faq: [
      { q: "¿Necesito tener claro lo que quiero?", a: "No. Con que me cuentes qué hace tu negocio y qué marcas te gustan, yo propongo. Muchas veces la mejor idea sale de ver dos o tres caminos distintos." },
      { q: "¿Puedo pedir solo una pieza?", a: "Sí. Puedes pedir un logo, un banner o unas plantillas para redes sin contratar una identidad completa. Después puedes ampliar." },
      { q: "¿Los archivos son míos?", a: "Sí. Recibes los archivos finales y editables de tu marca para usarlos donde quieras." },
      { q: "¿Qué pasa si no me convence la primera propuesta?", a: "La ajustamos contigo. Por eso mostramos la propuesta aplicada en tu negocio antes de cerrar: es más fácil decidir viéndola en uso." },
      { q: "¿Trabajan con negocios fuera de mi país?", a: "Sí. Todo el proceso es en línea, por WhatsApp y con entregas digitales." },
    ],

    finalCtaTitle: "¿Listo para que tu marca se vea como se merece?",
    finalCtaDesc: "Escríbeme y cuéntame de tu negocio. La primera asesoría es gratis y sin compromiso.",
    finalCtaBtn: "Hablar por WhatsApp",
  },

  en: {
    back: "Back to services",
    badge: "GRAPHIC DESIGN & BRANDING",
    titleA: "A brand that is seen",
    titleB: "and remembered",
    tagline:
      "Logos, visual identity, social media, advertising and packaging with one shared language. Your business stops looking improvised and starts looking like a serious brand.",
    ctaWant: "I want my design",
    ctaPortfolio: "See our work",
    chips: ["Logos", "Identity", "Social", "Packaging"],

    areasA: "Everything we",
    areasB: "design",
    areasSub: "Six areas that work together. Pick one or build your whole brand.",
    areas: [
      { icon: "badge", title: "Logos", desc: "Your brand's symbol and name, made to look good as small as an app icon or as big as a storefront.", tags: ["Isotype", "Logotype", "Combination"] },
      { icon: "palette", title: "Brand identity", desc: "Colors, typefaces and usage rules so everything you publish looks like one family.", tags: ["Palette", "Typography", "Guide"] },
      { icon: "share", title: "Social media", desc: "Templates, covers and posts with your identity, ready so you never redesign from scratch.", tags: ["Posts", "Stories", "Covers"] },
      { icon: "megaphone", title: "Advertising pieces", desc: "Banners, ads and displays that say one idea and lead to one action.", tags: ["Banners", "Ads", "Flyers"] },
      { icon: "package", title: "Packaging", desc: "Boxes and labels that make your product stand out in the hand and on the shelf.", tags: ["Boxes", "Labels", "Bags"] },
      { icon: "pen", title: "Illustration", desc: "Custom digital art that gives your brand a personality nobody else has.", tags: ["Characters", "Icons", "Art"] },
    ],

    anatomyA: "Anatomy of",
    anatomyB: "a logo",
    anatomySub: "Not every logo is the same. Tap each type and see how it is built.",
    anatomyIdealFor: "Best for",
    anatomy: [
      { id: "isotipo", name: "Symbol", what: "Just the symbol, no letters. It is recognized by its shape.", ideal: "Already-known brands, app icons, profile photos and stamps." },
      { id: "logotipo", name: "Wordmark", what: "Just the name, set in a typeface of its own.", ideal: "Brands with a short, strong name that must read well." },
      { id: "imagotipo", name: "Combination mark", what: "Symbol and name together, but each can be used on its own.", ideal: "The most versatile: works on a website, a card and a storefront." },
      { id: "isologo", name: "Emblem", what: "Symbol and name fused into one piece that never separates.", ideal: "Stamps, labels and products where the logo always appears whole." },
    ],

    processA: "How we",
    processB: "work",
    processSub: "A clear path from your idea to the final file. You approve every step.",
    steps: [
      { icon: "message", title: "We talk", desc: "You tell me what you do, who you sell to and which brands you like. That chat shapes everything else." },
      { icon: "search", title: "We research", desc: "We look at your competitors and your customer to find how to stand out, not just how to decorate." },
      { icon: "pen", title: "We sketch", desc: "We explore symbol, color and type ideas before polishing any of them." },
      { icon: "eye", title: "Proposal", desc: "I show the design applied to your socials, stationery or packaging so you see it in real use." },
      { icon: "check", title: "Tweaks and delivery", desc: "We fine-tune whatever is needed and I hand over every file, ready to use." },
    ],

    receiveA: "What you",
    receiveB: "get",
    receiveSub: "Not just a logo in an image: a full package to use your brand without depending on anyone.",
    paletteTitle: "Your color palette",
    palette: [
      { role: "Primary", hex: "#7C3AED" },
      { role: "Secondary", hex: "#A855F7" },
      { role: "Accent", hex: "#F59E0B" },
      { role: "Background", hex: "#0D0D1A" },
      { role: "Text", hex: "#F5F3FF" },
    ],
    typeTitle: "Your typography",
    typeHeading: "Headlines with character",
    typeBody: "Clear text that reads well on a phone, on the web and in print.",
    files: [
      { icon: "image", title: "Logo in several formats", desc: "Transparent PNG and vectors, in color, white and black-and-white versions." },
      { icon: "layers", title: "Editable files", desc: "The working files, so another designer can continue without redoing it." },
      { icon: "book", title: "Brand guide", desc: "A short guide: how to use the logo, which colors and which typefaces." },
      { icon: "share", title: "Social kit", desc: "Profile photo, cover and templates with your identity applied." },
    ],

    portfolioA: "Real",
    portfolioB: "work",
    portfolioSub: "Some of the pieces we have created.",
    portfolioHint: "Tap an image to see it larger",
    portfolio: [
      { img: `${IMG}/identidad-marca.png`, label: "Brand identity" },
      { img: `${IMG}/logotipos.png`, label: "Logos" },
      { img: `${IMG}/redes-sociales.png`, label: "Social media" },
      { img: `${IMG}/piezas-publicitarias.png`, label: "Advertising pieces" },
      { img: `${IMG}/packaging.png`, label: "Packaging" },
      { img: `${IMG}/ilustracion.png`, label: "Illustration" },
    ],

    priceA: "How much",
    priceB: "does it cost",
    priceSub: "Price depends on scope. A single piece costs less than a full identity.",
    priceFrom: "$10",
    priceTo: "$100",
    priceUnit: "USD",
    priceSteps: [
      { label: "Single piece", desc: "A banner, a post or a flyer" },
      { label: "Logo + applications", desc: "A logo and its use on socials and stationery" },
      { label: "Full identity", desc: "Brand, guide, socials and packaging" },
    ],
    factorsTitle: "What sets the price",
    factors: [
      { icon: "layers", title: "Number of pieces", desc: "One piece or twenty: each adds design time." },
      { icon: "sparkles", title: "Complexity", desc: "A custom illustration takes more work than a template." },
      { icon: "package", title: "Where it is used", desc: "Screen, print and physical packaging have different requirements." },
    ],
    priceNote: "Custom quote, no commitment. Tell me what you need and I will give you the exact price.",

    faqA: "Frequently asked",
    faqB: "questions",
    faq: [
      { q: "Do I need to know exactly what I want?", a: "No. Just tell me what your business does and which brands you like, and I will propose. The best idea often comes from seeing two or three different paths." },
      { q: "Can I order just one piece?", a: "Yes. You can order a logo, a banner or some social templates without hiring a full identity. You can expand later." },
      { q: "Do I own the files?", a: "Yes. You receive the final and editable files of your brand to use wherever you want." },
      { q: "What if I don't like the first proposal?", a: "We adjust it with you. That is why we show the proposal applied to your business before closing: it is easier to decide when you see it in use." },
      { q: "Do you work with businesses outside my country?", a: "Yes. The whole process is online, over WhatsApp and with digital delivery." },
    ],

    finalCtaTitle: "Ready for your brand to look the way it deserves?",
    finalCtaDesc: "Message me and tell me about your business. The first consultation is free and with no commitment.",
    finalCtaBtn: "Chat on WhatsApp",
  },
};
