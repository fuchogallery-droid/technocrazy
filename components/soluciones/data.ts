// Contenido de las 4 páginas de solución que se abren desde las tarjetas del Hero.
// Cada tarjeta flotante de Hero.tsx enlaza a /soluciones/[slug] usando estos slugs.
// Bilingüe: SOLUCIONES_ES / SOLUCIONES_EN tienen los mismos slugs en el mismo orden.

import type { Lang } from "@/lib/i18n";

export type Solucion = {
  slug: string;
  badge: string;
  title: string;
  titleHighlight: string;
  tagline: string;
  accent: string;
  accent2: string;
  intro: string[];
  quote: string;
  benefits: { title: string; desc: string }[];
  steps: { title: string; desc: string }[];
  useCases: { sector: string; ejemplo: string }[];
  styles: { name: string; desc: string }[];
  pricing: { plan: string; price: string; note: string; includes: string[]; featured?: boolean }[];
  faq: { q: string; a: string }[];
};

export const SOLUCIONES_ES: Solucion[] = [
  /* ─────────────────────────── DASHBOARD ─────────────────────────── */
  {
    slug: "dashboard",
    badge: "PANEL DE CONTROL",
    title: "Un",
    titleHighlight: "Dashboard",
    tagline: "Todo tu negocio en una sola pantalla. Sin abrir diez pestañas ni preguntarle a nadie.",
    accent: "#2979ff",
    accent2: "#00e676",
    intro: [
      "Un dashboard es el tablero de tu negocio: una sola pantalla donde ves cuánto vendiste, cuántos clientes entraron, qué producto se mueve y qué se está frenando. En vez de revisar el banco por un lado, el Excel por otro y WhatsApp por otro, todo llega ordenado a un mismo lugar.",
      "La diferencia con un reporte normal es que el dashboard está vivo: los números se actualizan solos, en tiempo real. No hay que pedirle el informe a nadie ni esperar al cierre del mes para saber cómo vas.",
      "Lo construyo a la medida de tu negocio. No es una plantilla genérica: primero definimos qué decisiones necesitas tomar, y a partir de eso decidimos qué se mide y qué se muestra.",
    ],
    quote: "Si no lo mides, lo estás adivinando.",
    benefits: [
      { title: "Decides con datos, no con corazonadas", desc: "Ves qué producto deja dinero de verdad y cuál solo genera trabajo." },
      { title: "Detectas problemas temprano", desc: "Una caída de ventas se ve el mismo día, no a fin de mes cuando ya es tarde." },
      { title: "Ahorras horas de reportes", desc: "Se acabó armar el informe a mano cada semana. El panel ya está hecho." },
      { title: "Tu equipo ve lo mismo que tú", desc: "Un solo número oficial. Nadie discute con una versión distinta del Excel." },
      { title: "Accedes desde el celular", desc: "El panel funciona igual en teléfono, tablet y computadora." },
      { title: "Crece contigo", desc: "Se le agregan métricas nuevas a medida que el negocio se expande." },
    ],
    steps: [
      { title: "Definimos qué necesitas ver", desc: "Conversamos sobre tu negocio y sacamos entre 5 y 10 indicadores que de verdad importan. Nada de llenar la pantalla de gráficos bonitos que nadie usa." },
      { title: "Conecto tus fuentes de datos", desc: "Ventas, formularios de la web, base de datos, pagos de Stripe, hojas de cálculo, inventario. Lo que ya tengas, se conecta." },
      { title: "Diseño el panel", desc: "Cada indicador con la visualización correcta: número grande para lo urgente, gráfico de línea para tendencias, tabla para el detalle." },
      { title: "Lo publico y te enseño a usarlo", desc: "Queda en línea con tu usuario y contraseña. Te acompaño hasta que lo manejes tú solo, sin depender de mí." },
    ],
    useCases: [
      { sector: "Tienda o e-commerce", ejemplo: "Ventas del día, productos más vendidos, carritos abandonados, ticket promedio." },
      { sector: "Restaurante", ejemplo: "Platos más pedidos, horas pico, rotación de mesas, margen por plato." },
      { sector: "Servicios profesionales", ejemplo: "Clientes activos, cobros pendientes, horas facturables, proyectos por etapa." },
      { sector: "Concesionario o flota", ejemplo: "Vehículos disponibles, tiempo promedio en inventario, leads por vendedor." },
      { sector: "Clínica o consultorio", ejemplo: "Citas del día, ausencias, tratamientos más solicitados, ocupación por especialista." },
      { sector: "Agencia o freelance", ejemplo: "Ingresos por cliente, rentabilidad por proyecto, propuestas enviadas vs cerradas." },
    ],
    styles: [
      { name: "Panel ejecutivo", desc: "Pocos números, muy grandes. Para el dueño que quiere saber cómo va todo en 5 segundos." },
      { name: "Panel operativo", desc: "Tablas y listas de trabajo pendiente. Para el equipo que ejecuta el día a día." },
      { name: "Panel de ventas", desc: "Embudo, metas y comparación contra el mes pasado. Para el que vende." },
      { name: "Panel público", desc: "Una versión limpia para mostrar a socios, inversionistas o clientes." },
    ],
    pricing: [
      {
        plan: "Panel Esencial",
        price: "$299",
        note: "pago único",
        includes: ["Hasta 6 indicadores", "1 fuente de datos", "Diseño responsive (celular y PC)", "Acceso con usuario y contraseña", "Capacitación de uso"],
      },
      {
        plan: "Panel Completo",
        price: "$599",
        note: "pago único",
        featured: true,
        includes: ["Indicadores ilimitados", "Hasta 4 fuentes conectadas", "Gráficos y filtros por fecha", "Múltiples usuarios con permisos", "Exportar a Excel y PDF", "30 días de ajustes incluidos"],
      },
      {
        plan: "Panel a Medida",
        price: "Cotizado",
        note: "según alcance",
        includes: ["Integraciones especiales", "Alertas automáticas", "Roles avanzados por área", "Mantenimiento mensual opcional"],
      },
    ],
    faq: [
      { q: "¿Necesito tener mis datos ordenados ya?", a: "No. Parte del trabajo es ordenarlos. Si hoy todo vive en un Excel desordenado o en cuadernos, lo estructuramos juntos." },
      { q: "¿Y si uso un sistema que ya tengo?", a: "Casi todos los sistemas modernos permiten conectarse. Si el tuyo lo permite, se conecta. Si no, hay formas alternativas de cargar la información." },
      { q: "¿Cuánto tarda?", a: "Un panel esencial toma entre 5 y 10 días. Uno completo, entre 2 y 4 semanas según cuántas fuentes haya que conectar." },
    ],
  },

  /* ─────────────────────────── AGENTE IA ─────────────────────────── */
  {
    slug: "agente-ia",
    badge: "ASISTENTE INTELIGENTE",
    title: "Un",
    titleHighlight: "Agente de IA",
    tagline: "Un trabajador virtual que atiende, responde y vende 24 horas al día, sin sueldo ni descanso.",
    accent: "#2979ff",
    accent2: "#7c4dff",
    intro: [
      "Un agente de IA no es un chatbot de los viejos, esos que solo respondían con botones y frases armadas. Es un asistente que entiende lo que le escriben con sus propias palabras, responde con criterio y sabe cuándo pasarle la conversación a una persona real.",
      "Lo entreno con la información de tu negocio: tus servicios, tus precios, tus horarios, tus políticas, tus preguntas frecuentes. Deja de ser una IA genérica y pasa a ser tu empleado, uno que ya se sabe todo el catálogo de memoria.",
      "Trabaja donde tus clientes ya están: en tu página web, en WhatsApp, en Instagram. Y no duerme: responde a las 3 de la mañana un domingo con la misma calidad que un martes al mediodía.",
    ],
    quote: "Un empleado cuesta $2,500 al mes. Este trabaja 24/7 por una fracción.",
    benefits: [
      { title: "Nunca pierdes un cliente por demora", desc: "El 78% de los clientes compra con quien responde primero. El agente responde en segundos." },
      { title: "Atiende a muchos a la vez", desc: "Diez personas escribiendo al mismo tiempo reciben las diez la misma atención." },
      { title: "Califica antes de pasártelo", desc: "Filtra curiosos y te entrega solo los clientes que de verdad quieren comprar." },
      { title: "Agenda citas solo", desc: "Consulta tu calendario, reserva el espacio y envía la confirmación." },
      { title: "Habla el idioma del cliente", desc: "Español, inglés o el que necesites — cambia solo según quién escriba." },
      { title: "Aprende de lo que no supo", desc: "Cada pregunta que no pudo responder queda registrada para mejorarlo." },
    ],
    steps: [
      { title: "Recojo todo lo que sabe tu negocio", desc: "Servicios, precios, horarios, políticas, objeciones comunes. Todo lo que hoy respondes tú mismo por mensaje se convierte en su base de conocimiento." },
      { title: "Le doy personalidad y límites", desc: "Definimos cómo habla (formal o cercano) y qué NO puede hacer: no inventar precios, no prometer plazos, no cerrar tratos por su cuenta." },
      { title: "Lo conecto a tus canales", desc: "Web, WhatsApp, Instagram — donde estén tus clientes. El mismo agente atiende en todos con la misma información." },
      { title: "Lo probamos y lo afinamos", desc: "Yo mismo lo pongo a prueba con preguntas difíciles antes de soltarlo. Después seguimos ajustando con conversaciones reales." },
    ],
    useCases: [
      { sector: "Tienda en línea", ejemplo: "Responde tallas, disponibilidad, tiempos de envío y estado del pedido." },
      { sector: "Restaurante", ejemplo: "Toma reservas, explica el menú y avisa qué hay disponible hoy." },
      { sector: "Consultorio o clínica", ejemplo: "Agenda citas, explica preparación previa y recuerda al paciente el día antes." },
      { sector: "Inmobiliaria", ejemplo: "Filtra por presupuesto y zona, y agenda la visita con el agente correcto." },
      { sector: "Servicios profesionales", ejemplo: "Explica el proceso, califica el proyecto y agenda la primera reunión." },
      { sector: "Concesionario", ejemplo: "Responde por modelo, financiamiento y disponibilidad, y captura el lead." },
    ],
    styles: [
      { name: "Agente de atención", desc: "Responde dudas y resuelve. Ideal si te llegan las mismas 20 preguntas todos los días." },
      { name: "Agente de ventas", desc: "Guía al cliente hasta la compra o hasta agendar. Enfocado en cerrar." },
      { name: "Agente de agenda", desc: "Su única misión es llenar tu calendario con citas confirmadas." },
      { name: "Agente interno", desc: "Para tu equipo: responde sobre procesos, inventario o políticas internas." },
    ],
    pricing: [
      {
        plan: "Agente Base",
        price: "$199",
        note: "pago único",
        includes: ["Entrenado con tu información", "1 canal (web o WhatsApp)", "Hasta 40 preguntas frecuentes", "Personalidad configurada", "Capacitación de uso"],
      },
      {
        plan: "Agente Vendedor",
        price: "$499",
        note: "pago único",
        featured: true,
        includes: ["Todo lo del plan Base", "Hasta 3 canales conectados", "Calificación de clientes", "Agenda citas automáticamente", "Captura de datos en tu base", "Panel de conversaciones", "30 días de ajustes"],
      },
      {
        plan: "Agente Empresarial",
        price: "Cotizado",
        note: "según alcance",
        includes: ["Conexión a tu sistema interno", "Varios agentes por área", "Traspaso a humano en vivo", "Reportes de desempeño", "Soporte continuo"],
      },
    ],
    faq: [
      { q: "¿Se va a inventar cosas?", a: "Se configura con límites estrictos: solo responde con la información que le cargamos. Si no sabe algo, lo dice y te pasa la conversación en vez de improvisar." },
      { q: "¿Reemplaza a mi equipo?", a: "No — le quita de encima lo repetitivo. Tu gente deja de responder 'a qué hora abren' cincuenta veces y se dedica a lo que sí necesita criterio humano." },
      { q: "¿Tiene costo mensual?", a: "El desarrollo es pago único. El consumo de la IA se paga aparte según uso, y para un negocio pequeño suele ser de pocos dólares al mes. Te muestro el cálculo real antes de empezar." },
    ],
  },

  /* ─────────────────────────── API ─────────────────────────── */
  {
    slug: "api",
    badge: "INTEGRACIÓN TOTAL",
    title: "Una",
    titleHighlight: "API",
    tagline: "El puente que hace que tus programas se hablen entre ellos y dejen de trabajar aislados.",
    accent: "#2979ff",
    accent2: "#00b8d4",
    intro: [
      "Una API es un traductor entre programas. Es lo que permite que tu página web le avise a tu sistema de inventario que se vendió algo, que tu cobro en Stripe genere la factura solo, o que un formulario cree el cliente en tu base de datos sin que nadie copie y pegue nada.",
      "Piénsalo como el mesero de un restaurante: tú no entras a la cocina a cocinar. Le pides al mesero, él lleva el pedido, la cocina lo prepara y él te trae el plato. La API es ese mesero entre dos sistemas que no se conocen entre sí.",
      "Trabajo en dos direcciones: conecto tu negocio con servicios que ya existen (pagos, envíos, correo, WhatsApp, IA), o construyo tu propia API para que otros — tu app móvil, tu web, un socio comercial — puedan conectarse contigo de forma segura.",
    ],
    quote: "Si estás copiando datos de un sistema a otro a mano, eso ya debería estar automatizado.",
    benefits: [
      { title: "Se acaba el copiar y pegar", desc: "El dato se escribe una sola vez y viaja solo a donde tenga que llegar." },
      { title: "Menos errores humanos", desc: "Nadie se equivoca de cifra a las 6 de la tarde pasando datos de un lado a otro." },
      { title: "Todo en tiempo real", desc: "El inventario baja en el mismo segundo en que se hace la venta." },
      { title: "Tus sistemas dejan de ser islas", desc: "La web, el punto de venta y la contabilidad hablan el mismo idioma." },
      { title: "Escala sin contratar más gente", desc: "Diez pedidos o mil pedidos: el mismo proceso, el mismo esfuerzo." },
      { title: "Abre puertas a socios", desc: "Otros negocios pueden conectarse contigo de forma controlada y segura." },
    ],
    steps: [
      { title: "Mapeo qué habla con qué", desc: "Listamos tus sistemas actuales y dónde se está perdiendo tiempo pasando información a mano. Ahí están las conexiones que valen la pena." },
      { title: "Reviso qué se puede conectar", desc: "Verifico si cada servicio permite conexión y con qué límites. Si alguno no se deja, busco la ruta alterna." },
      { title: "Construyo la conexión segura", desc: "Con llaves de acceso, cifrado y validación. Nadie no autorizado puede tocar tus datos, y todo queda registrado." },
      { title: "Pruebas, monitoreo y documentación", desc: "La pruebo con casos reales, le pongo alertas por si falla, y te dejo la documentación de cómo funciona." },
    ],
    useCases: [
      { sector: "Cobros", ejemplo: "Stripe o PayPal cobran, y tu sistema genera factura y avisa al cliente solo." },
      { sector: "Envíos", ejemplo: "Se genera la guía de envío y el cliente recibe el rastreo automáticamente." },
      { sector: "WhatsApp", ejemplo: "Confirmaciones, recordatorios y avisos de pedido enviados desde tu sistema." },
      { sector: "Inteligencia artificial", ejemplo: "Conectar Claude o modelos de IA dentro de tu propia aplicación." },
      { sector: "Contabilidad", ejemplo: "Las ventas caen directo en el sistema contable sin cargar nada a mano." },
      { sector: "Tu propia app", ejemplo: "Una API propia para que tu app móvil y tu web usen la misma información." },
    ],
    styles: [
      { name: "Integración simple", desc: "Conectar dos servicios que ya existen. Es lo más común y lo más rápido." },
      { name: "API propia (REST)", desc: "Construyo tu API desde cero para que otros se conecten a tu negocio." },
      { name: "Webhooks", desc: "Tu sistema reacciona solo cuando algo pasa afuera: un pago, un mensaje, una venta." },
      { name: "Sincronización programada", desc: "Los sistemas se ponen al día cada hora o cada noche, automáticamente." },
    ],
    pricing: [
      {
        plan: "Integración Simple",
        price: "$199",
        note: "por conexión",
        includes: ["Conexión entre 2 servicios", "Manejo de errores", "Pruebas con datos reales", "Documentación básica", "15 días de garantía"],
      },
      {
        plan: "Integración Completa",
        price: "$499",
        note: "pago único",
        featured: true,
        includes: ["Hasta 4 servicios conectados", "Webhooks en tiempo real", "Panel para ver el estado", "Alertas si algo falla", "Reintento automático", "30 días de ajustes"],
      },
      {
        plan: "API Propia",
        price: "Desde $899",
        note: "según alcance",
        includes: ["API REST construida a medida", "Autenticación y llaves de acceso", "Documentación técnica completa", "Control de límites de uso", "Ambiente de pruebas aparte"],
      },
    ],
    faq: [
      { q: "¿Qué pasa si el otro servicio se cae?", a: "Se construye pensando en eso: la conexión reintenta sola, guarda lo que no pudo enviar y te avisa. No se pierde información." },
      { q: "¿Es seguro dar acceso a mis datos?", a: "Sí, cuando está bien hecho. Se usan llaves con permisos limitados — cada conexión solo puede hacer exactamente lo que necesita, nada más." },
      { q: "¿Tiene costo mensual?", a: "El desarrollo es pago único. Algunos servicios externos cobran por uso (Stripe cobra comisión, WhatsApp cobra por mensaje). Te muestro todos los costos antes de empezar." },
    ],
  },

  /* ─────────────────────── AUTOMATIZACIÓN ─────────────────────── */
  {
    slug: "automatizacion",
    badge: "PROCESOS AUTOMÁTICOS",
    title: "La",
    titleHighlight: "Automatización",
    tagline: "El trabajo repetitivo que hoy te roba horas, ejecutándose solo mientras tú haces otra cosa.",
    accent: "#7c4dff",
    accent2: "#b388ff",
    intro: [
      "Automatizar es enseñarle a tu negocio a hacer solo lo que hoy haces a mano cada día: enviar el mismo correo, pasar datos de un lado a otro, generar la factura, mandar el recordatorio, armar el reporte del lunes.",
      "El principio es simple: cuando pasa algo (entra un cliente, se hace un pago, llega una fecha), se dispara una cadena de acciones que se ejecutan solas, en orden y sin errores. Un flujo que tarda 20 minutos hecho a mano se ejecuta en 4 segundos.",
      "No se trata de automatizar todo de golpe. Empezamos por el proceso que más tiempo te consume y menos criterio requiere — ese es el que más rápido se paga solo.",
    ],
    quote: "Si lo haces igual más de tres veces por semana, se puede automatizar.",
    benefits: [
      { title: "Recuperas horas cada semana", desc: "El tiempo que hoy gastas en tareas mecánicas vuelve a ser tuyo." },
      { title: "Cero olvidos", desc: "El recordatorio, el seguimiento y la factura salen siempre. El sistema no se distrae." },
      { title: "Funciona de madrugada", desc: "Los procesos corren de noche y de fin de semana sin que nadie esté pendiente." },
      { title: "Todo queda registrado", desc: "Cada paso deja huella. Sabes exactamente qué pasó y cuándo." },
      { title: "Se paga solo", desc: "Si te ahorra 8 horas al mes, en pocos meses ya recuperaste la inversión." },
      { title: "Tu equipo trabaja en lo importante", desc: "Menos tareas mecánicas, más atención al cliente y a vender." },
    ],
    steps: [
      { title: "Encontramos qué te está robando tiempo", desc: "Revisamos tu semana y anotamos las tareas repetitivas. Casi siempre aparecen 3 o 4 procesos que se comen la mayor parte del tiempo perdido." },
      { title: "Elegimos por dónde empezar", desc: "Priorizamos por retorno: mucho tiempo consumido, poco criterio humano involucrado. Ese proceso se automatiza primero." },
      { title: "Diseño el flujo paso a paso", desc: "Definimos qué lo dispara, qué pasa en cada etapa y qué debe ocurrir si algo sale mal. Lo apruebas antes de que yo construya nada." },
      { title: "Lo dejo corriendo y vigilado", desc: "Se activa con monitoreo: si un paso falla, reintenta y te avisa. No se rompe en silencio." },
    ],
    useCases: [
      { sector: "Cliente nuevo", ejemplo: "Llena el formulario, se guarda en la base, recibe bienvenida y a ti te llega el aviso." },
      { sector: "Facturación", ejemplo: "Se cobra, se genera la factura, se envía al cliente y se archiva. Sin tocar nada." },
      { sector: "Recordatorios", ejemplo: "Aviso automático de cita, de pago pendiente o de renovación de servicio." },
      { sector: "Reportes", ejemplo: "Cada lunes a las 8 AM te llega el resumen de la semana ya armado." },
      { sector: "Redes sociales", ejemplo: "Publicaciones programadas y publicadas solas en varias plataformas." },
      { sector: "Inventario", ejemplo: "Cuando el stock baja del mínimo, se avisa al proveedor automáticamente." },
    ],
    styles: [
      { name: "Automatización por evento", desc: "Se dispara cuando algo pasa: una venta, un formulario, un pago recibido." },
      { name: "Automatización por horario", desc: "Corre sola a una hora fija. Ideal para reportes y respaldos." },
      { name: "Cadena de seguimiento", desc: "Una secuencia de correos o mensajes que se envía sola con el tiempo." },
      { name: "Automatización con IA", desc: "Cuando el proceso necesita leer, resumir o decidir, entra la IA en el flujo." },
    ],
    pricing: [
      {
        plan: "Flujo Único",
        price: "$299",
        note: "por flujo",
        includes: ["1 proceso automatizado completo", "Hasta 5 pasos encadenados", "Manejo de errores y reintentos", "Pruebas con casos reales", "Capacitación de uso"],
      },
      {
        plan: "Paquete de Procesos",
        price: "$799",
        note: "pago único",
        featured: true,
        includes: ["Hasta 4 flujos automatizados", "Pasos ilimitados por flujo", "Panel de monitoreo", "Alertas si algo falla", "Integración con tus sistemas", "30 días de ajustes"],
      },
      {
        plan: "Operación Automatizada",
        price: "Cotizado",
        note: "según alcance",
        includes: ["Auditoría completa de procesos", "Flujos ilimitados", "Automatizaciones con IA", "Mantenimiento mensual", "Soporte prioritario"],
      },
    ],
    faq: [
      { q: "¿Y si el proceso cambia después?", a: "Los flujos se diseñan para poder ajustarse. Cambios menores los haces tú; los grandes los ajusto yo y quedan documentados." },
      { q: "¿Qué pasa si algo falla?", a: "El flujo reintenta solo, y si aun así no puede, te notifica con el detalle exacto de dónde se detuvo. Nunca falla en silencio." },
      { q: "¿Necesito programas caros?", a: "No necesariamente. Muchas automatizaciones se montan sobre herramientas que ya usas o sobre servicios con plan gratuito. Te digo el costo real antes de empezar." },
    ],
  },
];

export const SOLUCIONES_EN: Solucion[] = [
  /* ─────────────────────────── DASHBOARD ─────────────────────────── */
  {
    slug: "dashboard",
    badge: "CONTROL PANEL",
    title: "A",
    titleHighlight: "Dashboard",
    tagline: "Your whole business on one screen. No ten tabs open, no asking anyone.",
    accent: "#2979ff",
    accent2: "#00e676",
    intro: [
      "A dashboard is your business's control panel: one screen where you see how much you sold, how many customers came in, which product is moving and which one is stalling. Instead of checking the bank on one side, the spreadsheet on another and WhatsApp on a third, everything lands in one organized place.",
      "The difference from a regular report is that the dashboard is alive: the numbers update themselves, in real time. No need to ask anyone for the report or wait until month-end to know how things are going.",
      "I build it around your business. It's not a generic template: first we define what decisions you need to make, and from there we decide what gets measured and what gets shown.",
    ],
    quote: "If you don't measure it, you're guessing it.",
    benefits: [
      { title: "You decide with data, not gut feeling", desc: "You see which product actually makes money and which one just creates work." },
      { title: "You catch problems early", desc: "A drop in sales shows up the same day, not at month-end when it's already too late." },
      { title: "You save hours on reports", desc: "No more building the report by hand every week. The panel is already done." },
      { title: "Your team sees the same thing you do", desc: "One official number. No one argues with a different version of the spreadsheet." },
      { title: "Access it from your phone", desc: "The panel works the same on phone, tablet and computer." },
      { title: "It grows with you", desc: "New metrics get added as the business expands." },
    ],
    steps: [
      { title: "We define what you need to see", desc: "We talk about your business and pull out 5 to 10 indicators that actually matter. No filling the screen with pretty charts nobody uses." },
      { title: "I connect your data sources", desc: "Sales, web forms, database, Stripe payments, spreadsheets, inventory. Whatever you already have gets connected." },
      { title: "I design the panel", desc: "Each indicator gets the right visualization: a big number for what's urgent, a line chart for trends, a table for detail." },
      { title: "I publish it and teach you to use it", desc: "It goes live with your username and password. I stick with you until you can run it on your own, without depending on me." },
    ],
    useCases: [
      { sector: "Store or e-commerce", ejemplo: "Daily sales, best-selling products, abandoned carts, average ticket." },
      { sector: "Restaurant", ejemplo: "Most-ordered dishes, peak hours, table turnover, margin per dish." },
      { sector: "Professional services", ejemplo: "Active clients, pending payments, billable hours, projects by stage." },
      { sector: "Dealership or fleet", ejemplo: "Available vehicles, average time in inventory, leads per salesperson." },
      { sector: "Clinic or practice", ejemplo: "Today's appointments, no-shows, most requested treatments, occupancy per specialist." },
      { sector: "Agency or freelancer", ejemplo: "Revenue per client, profitability per project, proposals sent vs closed." },
    ],
    styles: [
      { name: "Executive panel", desc: "Few numbers, very big. For the owner who wants to know how things are going in 5 seconds." },
      { name: "Operations panel", desc: "Tables and pending work lists. For the team that runs the day-to-day." },
      { name: "Sales panel", desc: "Funnel, targets and comparison against last month. For whoever sells." },
      { name: "Public panel", desc: "A clean version to show partners, investors or clients." },
    ],
    pricing: [
      {
        plan: "Essential Panel",
        price: "$299",
        note: "one-time payment",
        includes: ["Up to 6 indicators", "1 data source", "Responsive design (phone and computer)", "Username and password access", "Usage training"],
      },
      {
        plan: "Complete Panel",
        price: "$599",
        note: "one-time payment",
        featured: true,
        includes: ["Unlimited indicators", "Up to 4 connected sources", "Charts and date filters", "Multiple users with permissions", "Export to Excel and PDF", "30 days of adjustments included"],
      },
      {
        plan: "Custom Panel",
        price: "Quoted",
        note: "based on scope",
        includes: ["Special integrations", "Automatic alerts", "Advanced roles per area", "Optional monthly maintenance"],
      },
    ],
    faq: [
      { q: "Do I need my data organized already?", a: "No. Part of the work is organizing it. If everything today lives in a messy spreadsheet or notebooks, we structure it together." },
      { q: "What if I already use a system?", a: "Almost every modern system allows connecting. If yours allows it, it connects. If not, there are alternative ways to load the information." },
      { q: "How long does it take?", a: "An essential panel takes 5 to 10 days. A complete one, 2 to 4 weeks depending on how many sources need connecting." },
    ],
  },

  /* ─────────────────────────── AI AGENT ─────────────────────────── */
  {
    slug: "agente-ia",
    badge: "SMART ASSISTANT",
    title: "An",
    titleHighlight: "AI Agent",
    tagline: "A virtual worker that assists, answers and sells 24 hours a day, with no salary and no rest.",
    accent: "#2979ff",
    accent2: "#7c4dff",
    intro: [
      "An AI agent isn't one of the old chatbots that only replied with buttons and canned phrases. It's an assistant that understands what people write in their own words, replies with judgment, and knows when to hand the conversation to a real person.",
      "I train it on your business's information: your services, your prices, your hours, your policies, your FAQs. It stops being a generic AI and becomes your employee — one who already knows the whole catalog by heart.",
      "It works where your customers already are: on your website, on WhatsApp, on Instagram. And it doesn't sleep: it answers at 3 AM on a Sunday with the same quality as a Tuesday at noon.",
    ],
    quote: "An employee costs $2,500 a month. This one works 24/7 for a fraction of that.",
    benefits: [
      { title: "You never lose a customer to a slow reply", desc: "78% of customers buy from whoever responds first. The agent replies in seconds." },
      { title: "It serves many at once", desc: "Ten people writing at the same time all get the same attention." },
      { title: "It qualifies before handing off to you", desc: "It filters out window-shoppers and only sends you the customers who actually want to buy." },
      { title: "It books appointments on its own", desc: "Checks your calendar, reserves the slot and sends the confirmation." },
      { title: "It speaks your customer's language", desc: "Spanish, English or whatever you need — it switches automatically based on who's writing." },
      { title: "It learns from what it didn't know", desc: "Every question it couldn't answer gets logged to improve it." },
    ],
    steps: [
      { title: "I gather everything your business knows", desc: "Services, prices, hours, policies, common objections. Everything you answer yourself by message today becomes its knowledge base." },
      { title: "I give it personality and limits", desc: "We define how it talks (formal or casual) and what it CANNOT do: no making up prices, no promising deadlines, no closing deals on its own." },
      { title: "I connect it to your channels", desc: "Website, WhatsApp, Instagram — wherever your customers are. The same agent serves everywhere with the same information." },
      { title: "We test it and fine-tune it", desc: "I personally put it through tough questions before releasing it. Then we keep adjusting with real conversations." },
    ],
    useCases: [
      { sector: "Online store", ejemplo: "Answers about sizes, availability, shipping times and order status." },
      { sector: "Restaurant", ejemplo: "Takes reservations, explains the menu and lets people know what's available today." },
      { sector: "Clinic or practice", ejemplo: "Books appointments, explains prep instructions and reminds the patient the day before." },
      { sector: "Real estate", ejemplo: "Filters by budget and area, and books the visit with the right agent." },
      { sector: "Professional services", ejemplo: "Explains the process, qualifies the project and books the first meeting." },
      { sector: "Dealership", ejemplo: "Answers about model, financing and availability, and captures the lead." },
    ],
    styles: [
      { name: "Support agent", desc: "Answers questions and resolves issues. Ideal if you get the same 20 questions every day." },
      { name: "Sales agent", desc: "Guides the customer to the purchase or the booking. Focused on closing." },
      { name: "Scheduling agent", desc: "Its only mission is filling your calendar with confirmed appointments." },
      { name: "Internal agent", desc: "For your team: answers about processes, inventory or internal policies." },
    ],
    pricing: [
      {
        plan: "Base Agent",
        price: "$199",
        note: "one-time payment",
        includes: ["Trained on your information", "1 channel (web or WhatsApp)", "Up to 40 FAQs", "Configured personality", "Usage training"],
      },
      {
        plan: "Sales Agent",
        price: "$499",
        note: "one-time payment",
        featured: true,
        includes: ["Everything in the Base plan", "Up to 3 connected channels", "Customer qualification", "Automatic appointment booking", "Captures data into your database", "Conversation dashboard", "30 days of adjustments"],
      },
      {
        plan: "Enterprise Agent",
        price: "Quoted",
        note: "based on scope",
        includes: ["Connection to your internal system", "Several agents by area", "Live handoff to a human", "Performance reports", "Ongoing support"],
      },
    ],
    faq: [
      { q: "Will it make things up?", a: "It's configured with strict limits: it only answers with the information we load into it. If it doesn't know something, it says so and hands off the conversation instead of improvising." },
      { q: "Does it replace my team?", a: "No — it takes the repetitive stuff off their plate. Your people stop answering 'what time do you open' fifty times and focus on what actually needs human judgment." },
      { q: "Is there a monthly cost?", a: "The development is a one-time payment. AI usage is billed separately based on consumption, and for a small business it's usually a few dollars a month. I show you the real numbers before we start." },
    ],
  },

  /* ─────────────────────────── API ─────────────────────────── */
  {
    slug: "api",
    badge: "FULL INTEGRATION",
    title: "An",
    titleHighlight: "API",
    tagline: "The bridge that gets your programs talking to each other instead of working in isolation.",
    accent: "#2979ff",
    accent2: "#00b8d4",
    intro: [
      "An API is a translator between programs. It's what lets your website tell your inventory system that something sold, lets your Stripe charge generate the invoice on its own, or lets a form create the customer in your database without anyone copying and pasting anything.",
      "Think of it like a waiter at a restaurant: you don't walk into the kitchen to cook. You ask the waiter, he takes the order, the kitchen prepares it and he brings you the plate. The API is that waiter between two systems that don't know each other.",
      "I work in both directions: I connect your business to services that already exist (payments, shipping, email, WhatsApp, AI), or I build your own API so others — your mobile app, your website, a business partner — can connect to you securely.",
    ],
    quote: "If you're copying data from one system to another by hand, that should already be automated.",
    benefits: [
      { title: "No more copy-paste", desc: "The data gets entered once and travels on its own to wherever it needs to go." },
      { title: "Fewer human errors", desc: "Nobody mistypes a number at 6 PM moving data from one place to another." },
      { title: "Everything in real time", desc: "Inventory drops the same second the sale happens." },
      { title: "Your systems stop being islands", desc: "The website, the point of sale and the accounting speak the same language." },
      { title: "Scale without hiring more people", desc: "Ten orders or a thousand orders: same process, same effort." },
      { title: "Opens doors to partners", desc: "Other businesses can connect to you in a controlled, secure way." },
    ],
    steps: [
      { title: "I map out what talks to what", desc: "We list your current systems and where time is being lost moving information by hand. That's where the connections worth making are." },
      { title: "I check what can be connected", desc: "I verify whether each service allows connections and under what limits. If one won't allow it, I find an alternate route." },
      { title: "I build the secure connection", desc: "With access keys, encryption and validation. No unauthorized party can touch your data, and everything gets logged." },
      { title: "Testing, monitoring and documentation", desc: "I test it with real cases, add alerts in case it fails, and leave you documentation on how it works." },
    ],
    useCases: [
      { sector: "Payments", ejemplo: "Stripe or PayPal charge, and your system generates the invoice and notifies the customer on its own." },
      { sector: "Shipping", ejemplo: "The shipping label gets generated and the customer automatically receives tracking." },
      { sector: "WhatsApp", ejemplo: "Confirmations, reminders and order notices sent straight from your system." },
      { sector: "Artificial intelligence", ejemplo: "Connecting Claude or AI models inside your own application." },
      { sector: "Accounting", ejemplo: "Sales land directly in the accounting system without anyone entering anything by hand." },
      { sector: "Your own app", ejemplo: "Your own API so your mobile app and your website use the same information." },
    ],
    styles: [
      { name: "Simple integration", desc: "Connecting two services that already exist. The most common and the fastest." },
      { name: "Custom API (REST)", desc: "I build your API from scratch so others can connect to your business." },
      { name: "Webhooks", desc: "Your system reacts on its own whenever something happens outside: a payment, a message, a sale." },
      { name: "Scheduled sync", desc: "Systems catch up with each other every hour or every night, automatically." },
    ],
    pricing: [
      {
        plan: "Simple Integration",
        price: "$199",
        note: "per connection",
        includes: ["Connection between 2 services", "Error handling", "Testing with real data", "Basic documentation", "15-day warranty"],
      },
      {
        plan: "Complete Integration",
        price: "$499",
        note: "one-time payment",
        featured: true,
        includes: ["Up to 4 connected services", "Real-time webhooks", "Status monitoring panel", "Alerts if something fails", "Automatic retry", "30 days of adjustments"],
      },
      {
        plan: "Custom API",
        price: "From $899",
        note: "based on scope",
        includes: ["Custom-built REST API", "Authentication and access keys", "Complete technical documentation", "Usage rate limiting", "Separate testing environment"],
      },
    ],
    faq: [
      { q: "What happens if the other service goes down?", a: "It's built with that in mind: the connection retries on its own, saves what it couldn't send, and notifies you. No information gets lost." },
      { q: "Is it safe to give access to my data?", a: "Yes, when it's done right. We use keys with limited permissions — each connection can only do exactly what it needs, nothing more." },
      { q: "Is there a monthly cost?", a: "The development is a one-time payment. Some external services charge by usage (Stripe charges a fee, WhatsApp charges per message). I show you all the costs before we start." },
    ],
  },

  /* ─────────────────────── AUTOMATION ─────────────────────── */
  {
    slug: "automatizacion",
    badge: "AUTOMATIC PROCESSES",
    title: "The",
    titleHighlight: "Automation",
    tagline: "The repetitive work that's stealing your hours today, running on its own while you do something else.",
    accent: "#7c4dff",
    accent2: "#b388ff",
    intro: [
      "Automating means teaching your business to do on its own what you do by hand every day today: sending the same email, moving data from one place to another, generating the invoice, sending the reminder, putting together Monday's report.",
      "The principle is simple: when something happens (a customer comes in, a payment is made, a date arrives), a chain of actions fires and runs on its own, in order and without errors. A workflow that takes 20 minutes by hand runs in 4 seconds.",
      "It's not about automating everything at once. We start with the process that eats up the most time and requires the least judgment — that's the one that pays for itself fastest.",
    ],
    quote: "If you do it the same way more than three times a week, it can be automated.",
    benefits: [
      { title: "You get hours back every week", desc: "The time you spend today on mechanical tasks becomes yours again." },
      { title: "Zero forgetting", desc: "The reminder, the follow-up and the invoice always go out. The system doesn't get distracted." },
      { title: "It works overnight", desc: "Processes run at night and on weekends without anyone having to keep an eye on them." },
      { title: "Everything gets logged", desc: "Every step leaves a trace. You know exactly what happened and when." },
      { title: "It pays for itself", desc: "If it saves you 8 hours a month, you recover the investment in a few months." },
      { title: "Your team works on what matters", desc: "Fewer mechanical tasks, more attention on customers and sales." },
    ],
    steps: [
      { title: "We find what's stealing your time", desc: "We go through your week and note down the repetitive tasks. Usually 3 or 4 processes show up that eat most of the lost time." },
      { title: "We choose where to start", desc: "We prioritize by return: a lot of time spent, little human judgment involved. That process gets automated first." },
      { title: "I design the workflow step by step", desc: "We define what triggers it, what happens at each stage, and what should occur if something goes wrong. You approve it before I build anything." },
      { title: "I leave it running and monitored", desc: "It goes live with monitoring: if a step fails, it retries and notifies you. It doesn't break silently." },
    ],
    useCases: [
      { sector: "New customer", ejemplo: "Fills out the form, gets saved to the database, receives a welcome message, and you get notified." },
      { sector: "Invoicing", ejemplo: "The charge happens, the invoice gets generated, it's sent to the customer and filed. Without touching anything." },
      { sector: "Reminders", ejemplo: "Automatic notice for an appointment, a pending payment or a service renewal." },
      { sector: "Reports", ejemplo: "Every Monday at 8 AM you get the week's summary already put together." },
      { sector: "Social media", ejemplo: "Posts scheduled and published on their own across several platforms." },
      { sector: "Inventory", ejemplo: "When stock drops below the minimum, the supplier gets notified automatically." },
    ],
    styles: [
      { name: "Event-based automation", desc: "Triggers when something happens: a sale, a form, a payment received." },
      { name: "Scheduled automation", desc: "Runs on its own at a fixed time. Ideal for reports and backups." },
      { name: "Follow-up sequence", desc: "A sequence of emails or messages that sends itself over time." },
      { name: "AI-powered automation", desc: "When the process needs to read, summarize or decide, AI enters the workflow." },
    ],
    pricing: [
      {
        plan: "Single Workflow",
        price: "$299",
        note: "per workflow",
        includes: ["1 complete automated process", "Up to 5 chained steps", "Error handling and retries", "Testing with real cases", "Usage training"],
      },
      {
        plan: "Process Bundle",
        price: "$799",
        note: "one-time payment",
        featured: true,
        includes: ["Up to 4 automated workflows", "Unlimited steps per workflow", "Monitoring panel", "Alerts if something fails", "Integration with your systems", "30 days of adjustments"],
      },
      {
        plan: "Automated Operation",
        price: "Quoted",
        note: "based on scope",
        includes: ["Complete process audit", "Unlimited workflows", "AI-powered automations", "Monthly maintenance", "Priority support"],
      },
    ],
    faq: [
      { q: "What if the process changes later?", a: "Workflows are designed to be adjustable. You can make minor changes yourself; I make the big ones and they get documented." },
      { q: "What happens if something fails?", a: "The workflow retries on its own, and if it still can't, it notifies you with the exact detail of where it stopped. It never fails silently." },
      { q: "Do I need expensive software?", a: "Not necessarily. Many automations run on tools you already use or on services with a free plan. I tell you the real cost before we start." },
    ],
  },
];

/** Mismos slugs en ambos idiomas — se usa para generateStaticParams. */
export const SOLUCIONES = SOLUCIONES_ES;

export const getSolucion = (slug: string, lang: Lang = "es") =>
  (lang === "en" ? SOLUCIONES_EN : SOLUCIONES_ES).find((s) => s.slug === slug);
