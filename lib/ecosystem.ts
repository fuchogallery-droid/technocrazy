// Catálogo del ecosistema de Rafael que se muestra y se edita en /admin → Oficina TEC → Ecosistema.
// Se guarda en config/site.ecosystem; DEFAULT_ECOSYSTEM solo se usa para la primera carga
// ("Cargar catálogo base"). Sin claves ni accesos: eso vive en la memoria, nunca en el sitio.

export type EcoCategory = "base" | "app" | "modelo" | "cliente" | "herramienta";
export type EcoStatus = "vivo" | "trabajo" | "pausa" | "descartado";

export type EcoItem = {
  id: string;
  name: string;
  category: EcoCategory;
  status: EcoStatus;
  url: string; // dirección en vivo (vacía si es local)
  folder: string; // carpeta en Activos o ruta local
  desc: string;
  notes: string;
  visible: boolean; // false = archivado (se oculta del listado salvo "ver archivados")
};

export const ECO_CATEGORIES: { id: EcoCategory; label: string }[] = [
  { id: "base", label: "Base" },
  { id: "app", label: "Apps y SaaS" },
  { id: "modelo", label: "Modelos" },
  { id: "cliente", label: "Clientes" },
  { id: "herramienta", label: "Herramientas" },
];

export const ECO_STATUS: { id: EcoStatus; label: string; color: string }[] = [
  { id: "vivo", label: "En vivo", color: "#4ade80" },
  { id: "trabajo", label: "En trabajo", color: "#60a5fa" },
  { id: "pausa", label: "En pausa", color: "#fdba74" },
  { id: "descartado", label: "Descartado", color: "#f87171" },
];

export function emptyEcoItem(): EcoItem {
  return { id: `eco-${Date.now()}`, name: "", category: "app", status: "vivo", url: "", folder: "", desc: "", notes: "", visible: true };
}

const e = (id: string, name: string, category: EcoCategory, status: EcoStatus, url: string, folder: string, desc: string, notes = ""): EcoItem => ({
  id: `eco-${id}`, name, category, status, url, folder, desc, notes, visible: true,
});

export const DEFAULT_ECOSYSTEM: EcoItem[] = [
  e("technocrazy", "TechnoCrazy", "base", "vivo", "https://technocrazy.org", "technocrazy", "Sitio y panel central de la agencia. Aquí se gobierna todo."),
  e("oficina", "Oficina TEC (TEC Virtual Office)", "base", "vivo", "", "jarvis", "Oficina de 4 agentes IA. Corre en el PC (127.0.0.1:4747/office/index.html) y gobierna este sitio.", "Local: solo abre en el PC donde corre jarvis."),
  e("radi", "R.A.D.I.", "app", "vivo", "https://radi.technocrazy.org", "ptt-core", "Asistente con piel fotográfica, web y Android."),
  e("ganadero", "GANADERO OS", "app", "vivo", "https://ganadero.technocrazy.org", "ganadero-os", "Gestión ganadera con Next, Prisma y MQTT."),
  e("monitordealer", "MonitorDealer", "app", "vivo", "https://monitordealer.technocrazy.org", "monitor-dealer", "Monitoreo de concesionarios."),
  e("tuentrenador", "TuEntrenador", "app", "vivo", "https://tuentrenador.technocrazy.org", "saas-entrenadores", "SaaS para entrenadores. El cobro con Stripe en Venezuela está sin resolver."),
  e("tuiglesia", "TuIglesia", "app", "vivo", "https://tuiglesia.technocrazy.org", "", "SaaS multi-iglesia. Falta Stripe."),
  e("galeriax", "GaleríaX", "app", "pausa", "https://galeriax.vercel.app", "galeriax", "Galería con suscripciones y pagos.", "Incidentes abiertos: Stripe Connect, suscripciones/PPV y billing de Firebase."),
  e("saashub", "SaaS Hub", "app", "vivo", "https://saas-hub-web.vercel.app", "saas-hub-web", "Hub de restaurantes con agente de voz.", "El agente de llamadas está caído por la organización de Anthropic suspendida."),
  e("restaurante", "TicketsMarth (Restaurante Template)", "app", "vivo", "https://restaurante-template-one.vercel.app", "restaurante-template", "Sistema multi-restaurante: pedidos, cocina, admin y pantalla pública."),
  e("contractor", "Contractor", "app", "vivo", "https://contractor-app-seven-gamma.vercel.app", "contractor", "Web de gestión de obra."),
  e("autopost", "AutoPost", "app", "vivo", "https://autopost-plum-five.vercel.app", "autopost", "Publicación automática en redes."),
  e("sigg", "SIGG", "app", "vivo", "https://sigg-production-cca1.up.railway.app", "sigg", "Gestión gubernamental (alcaldía/tributos), 18 módulos."),
  e("m1", "Modelo 1 · Perfil profesional", "modelo", "vivo", "https://modelo1-perfil-profesional.vercel.app", "modelo1-perfil-profesional", "Portafolio para cualquier profesional."),
  e("m7", "Modelo 7 · Tienda virtual", "modelo", "vivo", "https://modelo7-tienda-virtual.vercel.app", "modelo7-tienda-virtual", "Tienda + dropshipping, estilo pastel."),
  e("m8", "Modelo 8 · Todo en uno", "modelo", "vivo", "https://modelo8-todo-en-uno.vercel.app", "modelo8-todo-en-uno", "Base única de todo trabajo nuevo: tienda, servicios, restaurante, clases y atención presencial."),
  e("m2link", "Modelo 2 · Link de negocio", "modelo", "vivo", "https://modelo2-link-negocio.vercel.app", "modelo2-link-negocio", "Landing de Instagram con carrito y recibo."),
  e("ejemplos", "Lista de ejemplos", "modelo", "vivo", "https://ejemplos-modelos.vercel.app", "ejemplos-modelos", "Panel con los ejemplos de cada modelo."),
  e("chicha", "Chicha Venezolana", "cliente", "vivo", "https://chicha-venezolana.vercel.app", "chicha-venezolana", "Primer cliente del Modelo 2 (Gaithersburg, MD)."),
  e("sushi", "SushiHouse delivery", "cliente", "vivo", "https://sushi-house-alpha.vercel.app", "sushi-house", "Cliente del Modelo 2 (Venezuela)."),
  e("ohmybar", "Oh My Bar", "cliente", "vivo", "https://oh-my-bar.vercel.app", "", "Modelo 3 hecho desde Instagram."),
  e("carrito", "El Carrito de los Antojos", "cliente", "vivo", "https://carrito-de-los-antojos.vercel.app", "", "Modelo 3 con carrusel de opiniones.", "Faltan WhatsApp, precios y ubicación."),
  e("egdy", "Dra. Egdy Pereira", "cliente", "vivo", "https://clinica-egdy-pereira.vercel.app", "", "Modelo 6 real: reservas, fichas y galería antes/después."),
  e("mariale", "Mariale Pilates", "cliente", "vivo", "https://mariale-pilates-tau.vercel.app", "", "Modelo 6 con branding propio.", "Faltan WhatsApp y horario real."),
  e("miguel", "Miguel Bravo · Entrenador", "cliente", "vivo", "https://miguel-bravo-entrenador.vercel.app", "", "Modelo 6 con recetas, galería y calendario.", "Faltan WhatsApp, horario, ubicación, precios y datos de pago."),
  e("giovana", "Dra. Giovana · Biora Store", "cliente", "vivo", "https://biora-store.vercel.app", "clinica-dra-giovana", "Catálogo de productos (Modelo 8).", "Faltan WhatsApp, redes, precios y nombre de la clínica."),
  e("glam", "The Glam Collection · Génesis", "cliente", "vivo", "https://the-glam.vercel.app", "", "Joyería (Modelo 8).", "Faltan precios, envío, pagos y horario."),
  e("horizon", "Horizon Trading Crew", "cliente", "vivo", "https://horizontradingcrew.com", "horizon-trading-crew", "Cliente con comunidad de trading.", "Blob store bloqueado (403)."),
  e("barcenas", "Rafael Bárcenas · Promotor", "cliente", "vivo", "https://rafaelbarcenas.vercel.app", "", "Landing de promotor TechnoCrazy (Modelo 5).", "Faltan sus redes."),
  e("emily", "Emily Navarro", "cliente", "vivo", "https://emily-navarro.vercel.app", "EmilyNavarro", "Página personal."),
  e("cambiobs", "CambioBs", "app", "vivo", "https://cambiobs.vercel.app", "CambioBs", "Cambio de bolívares."),
  e("motorvideos", "Motor de Videos", "herramienta", "vivo", "", "motor-videos", "Generador de videos con ffmpeg (panel local 8420)."),
  e("ultrom", "ULTROM", "herramienta", "trabajo", "", "ULTROM_App", "App y relay de control, carpeta única en el Escritorio."),
  e("artcraft", "ArtCraft (VectorCraft, SoundCraft, GridCraft)", "herramienta", "vivo", "", "", "Programas propios de arte vectorial, sonido y hojas de cálculo."),
];
