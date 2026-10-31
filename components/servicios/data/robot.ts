import type { ServicioDef } from "../types";

const IMG = "/images/servicios/robot";

export const ROBOT: ServicioDef = {
  slug: "robot",
  hero: "robot",
  theme: { accent: "#ec4899", accent2: "#be185d", soft: "#f9a8d4" },
  meta: {
    title: "Robot de Redes Sociales · TechnoCrazy",
    description: "Un robot que publica solo en Instagram, TikTok, Facebook, X y LinkedIn con contenido generado por IA, calendario inteligente y reportes de crecimiento.",
  },
  copy: {
    es: {
      back: "Volver a servicios",
      badge: "ROBOT DE REDES SOCIALES",
      titleA: "Tu robot publica, crece",
      titleB: "y te hace viral, solo",
      tagline: "Publica en cinco redes desde un solo panel. La IA crea los textos, los hashtags y las imágenes, y programa todo en el mejor horario mientras tú descansas.",
      ctaWant: "Quiero mi robot",
      ctaPortfolio: "Ver redes",
      chips: ["Instagram", "TikTok", "Facebook", "X", "LinkedIn"],

      areasA: "Lo que hace",
      areasB: "tu robot",
      areasSub: "Todo el trabajo de las redes sociales, automatizado de principio a fin.",
      areas: [
        { icon: "send", title: "Publicación automática", desc: "Publica en 5 redes desde un único panel, sin entrar a cada app.", tags: ["5 redes", "Un panel"] },
        { icon: "sparkles", title: "Contenido con IA", desc: "Genera textos, hashtags e imágenes adaptados a cada red.", tags: ["Textos", "Hashtags", "Imágenes"] },
        { icon: "calendar", title: "Calendario inteligente", desc: "Organiza tus publicaciones y sugiere según las tendencias.", tags: ["Programado", "Tendencias"] },
        { icon: "chart", title: "Análisis de resultados", desc: "Mide alcance, interacción y los mejores horarios para publicar.", tags: ["Engagement", "Horarios"] },
        { icon: "layers", title: "Formato por plataforma", desc: "Adapta cada pieza al tamaño y estilo que pide cada red.", tags: ["Formatos", "Automático"] },
        { icon: "users", title: "Varias marcas", desc: "Gestiona distintas marcas desde el mismo panel.", tags: ["Multi-cliente", "Reportes"] },
      ],

      explainA: "Cómo se publica",
      explainB: "una pieza sola",
      explainSub: "Toca cada etapa y mira el recorrido de una publicación, de la idea al resultado.",
      explainIdealFor: "Por qué importa",
      explain: [
        { name: "Idea", what: "Tú das el tema o la IA lo propone según tendencias. Es el único paso que puedes decidir tú.", ideal: "Siempre tienes tema sin gastar tiempo pensando qué publicar.", demo: { kind: "flow", steps: [{ icon: "sparkles", label: "Tema" }, { icon: "trend", label: "Tendencia" }, { icon: "brain", label: "Plan" }, { icon: "calendar", label: "Agenda" }] } },
        { name: "Creación", what: "La IA escribe el texto, elige los hashtags y genera la imagen, con el tono de tu marca.", ideal: "Contenido listo sin diseñar ni redactar cada pieza.", demo: { kind: "flow", steps: [{ icon: "pen", label: "Texto" }, { icon: "hash", label: "Hashtags" }, { icon: "image", label: "Imagen" }, { icon: "check", label: "Listo" }] } },
        { name: "Publicación", what: "El robot adapta el formato a cada red y publica en el horario con mejor respuesta.", ideal: "Publicar siempre a tiempo, incluso mientras duermes.", demo: { kind: "flow", steps: [{ icon: "layers", label: "Formato" }, { icon: "clock", label: "Horario" }, { icon: "send", label: "Publica" }, { icon: "share", label: "5 redes" }] } },
        { name: "Resultados", what: "Mide qué funcionó y te lo resume en reportes semanales para decidir qué repetir.", ideal: "Saber qué publicaciones traen clientes y cuáles no.", demo: { kind: "flow", steps: [{ icon: "eye", label: "Alcance" }, { icon: "heart", label: "Interacción" }, { icon: "chart", label: "Análisis" }, { icon: "trend", label: "Reporte" }] } },
      ],

      processA: "Cómo",
      processB: "lo ponemos a trabajar",
      processSub: "De tus redes desordenadas a un robot publicando solo.",
      steps: [
        { icon: "message", title: "Conversamos", desc: "Me cuentas qué vendes, tu estilo y en qué redes quieres estar." },
        { icon: "link", title: "Conexión", desc: "Conectamos tus cuentas de forma segura al panel del robot." },
        { icon: "palette", title: "Tu marca", desc: "Cargamos tu tono, colores y plantillas para que todo se vea tuyo." },
        { icon: "eye", title: "Pruebas", desc: "Revisas las primeras publicaciones y ajustamos antes de activar." },
        { icon: "rocket", title: "Activación", desc: "El robot empieza a publicar y recibes reportes de crecimiento." },
      ],

      receiveA: "Qué",
      receiveB: "recibes",
      receiveSub: "Un robot funcionando y un panel para controlarlo.",
      files: [
        { icon: "bot", title: "Tu robot configurado", desc: "Conectado a tus redes y entrenado con el estilo de tu marca." },
        { icon: "dashboard", title: "Panel de control", desc: "Revisas, programas y apruebas todo desde un solo lugar." },
        { icon: "image", title: "Banco de contenido", desc: "Plantillas y piezas reutilizables con tu identidad." },
        { icon: "chart", title: "Reportes semanales", desc: "Resumen claro del crecimiento y del rendimiento de cada red." },
      ],

      portfolioA: "Redes",
      portfolioB: "que cubre",
      portfolioSub: "Una vista de lo que el robot administra.",
      portfolioHint: "Toca una imagen para verla en grande",
      portfolio: [
        { img: `${IMG}/instagram.png`, label: "Instagram" },
        { img: `${IMG}/tiktok.png`, label: "TikTok" },
        { img: `${IMG}/facebook.png`, label: "Facebook" },
        { img: `${IMG}/twitter-x.png`, label: "X (Twitter)" },
        { img: `${IMG}/linkedin.png`, label: "LinkedIn" },
        { img: `${IMG}/analytics.png`, label: "Analíticas" },
      ],

      priceA: "Cuánto",
      priceB: "cuesta",
      priceSub: "Un solo pago, sin mensualidad por el robot.",
      priceFrom: "$400",
      priceUnit: "USD · pago único",
      priceSteps: [
        { label: "5 redes", desc: "Instagram, TikTok, Facebook, X y LinkedIn" },
        { label: "IA incluida", desc: "Textos, hashtags e imágenes" },
        { label: "Panel y reportes", desc: "Calendario y análisis semanal" },
      ],
      factorsTitle: "Qué incluye el precio",
      factors: [
        { icon: "send", title: "Publicación en 5 redes", desc: "Todo desde un único panel de control." },
        { icon: "sparkles", title: "Generación con IA", desc: "Contenido adaptado a cada plataforma." },
        { icon: "chart", title: "Reportes", desc: "Seguimiento semanal del crecimiento." },
      ],
      priceNote: "Si quieres gestionar varias marcas o ajustar algo a medida, escríbeme y lo cotizamos.",

      faqA: "Preguntas",
      faqB: "frecuentes",
      faq: [
        { q: "¿Tengo que aprobar cada publicación?", a: "Tú decides. Puedes aprobar todo antes de publicar o dejar que el robot publique solo dentro de las reglas que definas." },
        { q: "¿El contenido sonará genérico?", a: "Se configura con el tono y las plantillas de tu marca, para que se parezca a ti." },
        { q: "¿Es seguro conectar mis cuentas?", a: "Sí. Las cuentas se conectan por los accesos oficiales de cada red, sin compartir tus contraseñas." },
        { q: "¿Garantiza volverme viral?", a: "No se puede prometer. Lo que hace es publicar con constancia, en buenos horarios y con contenido pensado para cada red, que es lo que más pesa." },
        { q: "¿Puedo usarlo para varias marcas?", a: "Sí. El panel permite gestionar distintas marcas." },
      ],

      finalCtaTitle: "¿Listo para que tus redes trabajen solas?",
      finalCtaDesc: "Escríbeme y cuéntame de tu marca. La primera asesoría es gratis y sin compromiso.",
      finalCtaBtn: "Hablar por WhatsApp",
    },
    en: {
      back: "Back to services",
      badge: "SOCIAL MEDIA ROBOT",
      titleA: "Your robot posts, grows",
      titleB: "and goes viral, on its own",
      tagline: "It posts on five networks from a single panel. AI writes the texts, hashtags and images, and schedules everything at the best time while you rest.",
      ctaWant: "I want my robot",
      ctaPortfolio: "See networks",
      chips: ["Instagram", "TikTok", "Facebook", "X", "LinkedIn"],

      areasA: "What your",
      areasB: "robot does",
      areasSub: "All the social media work, automated from start to finish.",
      areas: [
        { icon: "send", title: "Automatic posting", desc: "Posts on 5 networks from one single panel, no logging into each app.", tags: ["5 networks", "One panel"] },
        { icon: "sparkles", title: "AI content", desc: "Generates texts, hashtags and images adapted to each network.", tags: ["Text", "Hashtags", "Images"] },
        { icon: "calendar", title: "Smart calendar", desc: "Organizes your posts and suggests ideas based on trends.", tags: ["Scheduled", "Trends"] },
        { icon: "chart", title: "Results analysis", desc: "Measures reach, engagement and the best times to post.", tags: ["Engagement", "Timing"] },
        { icon: "layers", title: "Format per platform", desc: "Adapts each piece to the size and style each network needs.", tags: ["Formats", "Automatic"] },
        { icon: "users", title: "Several brands", desc: "Manage different brands from the same panel.", tags: ["Multi-client", "Reports"] },
      ],

      explainA: "How a post",
      explainB: "publishes itself",
      explainSub: "Tap each stage and follow a post's journey, from idea to result.",
      explainIdealFor: "Why it matters",
      explain: [
        { name: "Idea", what: "You give the topic or the AI proposes one based on trends. It is the only step you can decide.", ideal: "You always have a topic without spending time on what to post.", demo: { kind: "flow", steps: [{ icon: "sparkles", label: "Topic" }, { icon: "trend", label: "Trend" }, { icon: "brain", label: "Plan" }, { icon: "calendar", label: "Schedule" }] } },
        { name: "Creation", what: "The AI writes the text, picks the hashtags and generates the image, in your brand's tone.", ideal: "Ready content without designing or writing each piece.", demo: { kind: "flow", steps: [{ icon: "pen", label: "Text" }, { icon: "hash", label: "Hashtags" }, { icon: "image", label: "Image" }, { icon: "check", label: "Ready" }] } },
        { name: "Posting", what: "The robot adapts the format to each network and posts at the time with the best response.", ideal: "Always posting on time, even while you sleep.", demo: { kind: "flow", steps: [{ icon: "layers", label: "Format" }, { icon: "clock", label: "Timing" }, { icon: "send", label: "Posts" }, { icon: "share", label: "5 networks" }] } },
        { name: "Results", what: "It measures what worked and summarizes it in weekly reports so you can decide what to repeat.", ideal: "Knowing which posts bring customers and which do not.", demo: { kind: "flow", steps: [{ icon: "eye", label: "Reach" }, { icon: "heart", label: "Engagement" }, { icon: "chart", label: "Analysis" }, { icon: "trend", label: "Report" }] } },
      ],

      processA: "How we",
      processB: "put it to work",
      processSub: "From messy social media to a robot posting on its own.",
      steps: [
        { icon: "message", title: "We talk", desc: "You tell me what you sell, your style and which networks you want." },
        { icon: "link", title: "Connection", desc: "We securely connect your accounts to the robot's panel." },
        { icon: "palette", title: "Your brand", desc: "We load your tone, colors and templates so everything looks like you." },
        { icon: "eye", title: "Testing", desc: "You review the first posts and we adjust before switching it on." },
        { icon: "rocket", title: "Activation", desc: "The robot starts posting and you receive growth reports." },
      ],

      receiveA: "What you",
      receiveB: "get",
      receiveSub: "A working robot and a panel to control it.",
      files: [
        { icon: "bot", title: "Your configured robot", desc: "Connected to your networks and trained in your brand's style." },
        { icon: "dashboard", title: "Control panel", desc: "Review, schedule and approve everything from one place." },
        { icon: "image", title: "Content bank", desc: "Reusable templates and pieces with your identity." },
        { icon: "chart", title: "Weekly reports", desc: "A clear summary of growth and performance on each network." },
      ],

      portfolioA: "Networks",
      portfolioB: "it covers",
      portfolioSub: "A view of what the robot manages.",
      portfolioHint: "Tap an image to see it larger",
      portfolio: [
        { img: `${IMG}/instagram.png`, label: "Instagram" },
        { img: `${IMG}/tiktok.png`, label: "TikTok" },
        { img: `${IMG}/facebook.png`, label: "Facebook" },
        { img: `${IMG}/twitter-x.png`, label: "X (Twitter)" },
        { img: `${IMG}/linkedin.png`, label: "LinkedIn" },
        { img: `${IMG}/analytics.png`, label: "Analytics" },
      ],

      priceA: "How much",
      priceB: "does it cost",
      priceSub: "One payment, no monthly fee for the robot.",
      priceFrom: "$400",
      priceUnit: "USD · one-time payment",
      priceSteps: [
        { label: "5 networks", desc: "Instagram, TikTok, Facebook, X and LinkedIn" },
        { label: "AI included", desc: "Texts, hashtags and images" },
        { label: "Panel and reports", desc: "Calendar and weekly analysis" },
      ],
      factorsTitle: "What the price includes",
      factors: [
        { icon: "send", title: "Posting on 5 networks", desc: "All from a single control panel." },
        { icon: "sparkles", title: "AI generation", desc: "Content adapted to each platform." },
        { icon: "chart", title: "Reports", desc: "Weekly growth tracking." },
      ],
      priceNote: "If you want to manage several brands or tailor something, message me and we will quote it.",

      faqA: "Frequently asked",
      faqB: "questions",
      faq: [
        { q: "Do I have to approve each post?", a: "You decide. You can approve everything before posting or let the robot post on its own within the rules you set." },
        { q: "Will the content sound generic?", a: "It is set up with your brand's tone and templates, so it sounds like you." },
        { q: "Is it safe to connect my accounts?", a: "Yes. Accounts connect through each network's official access, without sharing your passwords." },
        { q: "Does it guarantee I will go viral?", a: "That cannot be promised. What it does is post consistently, at good times and with content built for each network, which is what matters most." },
        { q: "Can I use it for several brands?", a: "Yes. The panel lets you manage different brands." },
      ],

      finalCtaTitle: "Ready for your social media to work on its own?",
      finalCtaDesc: "Message me and tell me about your brand. The first consultation is free and with no commitment.",
      finalCtaBtn: "Chat on WhatsApp",
    },
  },
};
