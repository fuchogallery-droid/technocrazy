"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const FAQS = [
  { q: "servicios", keywords: ["servicio", "servicios", "ofrecen", "hacen", "qué hacen", "que hacen"], answer: "Ofrecemos 5 servicios: 🎨 Diseño Gráfico, 🌐 Páginas Web, 📱 Apps Móviles, ⚙️ Sistemas Automatizados e 🤖 IA & Automatización. Todo desde tu logo hasta tu sistema completo con IA." },
  { q: "precio", keywords: ["precio", "costo", "cuánto", "cuanto", "cobran", "tarifa", "presupuesto", "valor"], answer: "Los precios son personalizados según tu proyecto. 💬 Contáctanos por WhatsApp y te damos una cotización sin compromiso: https://wa.me/17794318214" },
  { q: "web", keywords: ["página web", "pagina web", "sitio web", "website", "web"], answer: "Creamos páginas web modernas, rápidas y optimizadas con las últimas tecnologías (Next.js, React). Incluye diseño, desarrollo y despliegue. ¿Tienes un proyecto en mente? 👉 https://wa.me/17794318214" },
  { q: "app", keywords: ["app", "aplicación", "aplicacion", "móvil", "movil", "android", "ios", "iphone"], answer: "Desarrollamos apps nativas para iOS y Android. Desde el diseño hasta la publicación en las tiendas. Escríbenos para más detalles: https://wa.me/17794318214" },
  { q: "ia", keywords: ["ia", "inteligencia artificial", "chatbot", "bot", "automatización", "automatizacion", "automatizar"], answer: "Integramos IA en tu negocio: chatbots inteligentes, flujos automatizados, sistemas que trabajan solos 24/7. Es nuestro servicio más solicitado 🚀" },
  { q: "autopost", keywords: ["autopost", "publicaciones", "redes sociales", "posts", "contenido"], answer: "AutoPost es nuestra herramienta para programar publicaciones con IA. Genera contenido en 5 tonos diferentes con infografías editables. Pruébalo en: https://autopost-plum-five.vercel.app" },
  { q: "serviya", keywords: ["serviya", "catálogo", "catalogo", "marketplace", "servicios digitales"], answer: "ServiYA es nuestro marketplace con 55+ categorías de servicios. Puedes montar tu catálogo profesional en minutos. Visítalo en: https://serviya-phi.vercel.app" },
  { q: "galeriax", keywords: ["galeriax", "galería", "galeria", "contenido exclusivo", "suscripción", "suscripcion"], answer: "GaleríaX es una plataforma de contenido exclusivo por suscripción con 3 niveles de acceso y pagos con Stripe y PayPal. Visítala en: https://galeriax.technocrazy.org" },
  { q: "cambiobs", keywords: ["cambiobs", "cambio", "bolívares", "bolivares", "dólar", "dolar", "tasa", "bcv"], answer: "CambioBs muestra tasas de cambio USD/Bs en tiempo real: BCV, paralelo, Binance y promedio. Consúltalo en: https://cambiobs.vercel.app" },
  { q: "hkpc", keywords: ["hk-pc", "hkpc", "organizar", "archivos", "windows", "computadora", "pc"], answer: "HK-PC Organizer organiza automáticamente los archivos de tu PC con un solo clic. App Windows nativa lista para instalar. Más info en: https://hk-pc-smart-organizer.vercel.app" },
  { q: "proceso", keywords: ["proceso", "cómo funciona", "como funciona", "pasos", "empezar", "empezamos", "inicio"], answer: "Nuestro proceso es simple: 1️⃣ Consulta inicial gratis → 2️⃣ Estrategia digital → 3️⃣ Diseño & Desarrollo → 4️⃣ Lanzamiento → 5️⃣ Acompañamiento continuo. ¡Comenzamos cuando quieras!" },
  { q: "contacto", keywords: ["contacto", "contactar", "hablar", "escribir", "whatsapp", "email", "correo", "instagram"], answer: "Puedes contactarnos por:\n📱 WhatsApp: https://wa.me/17794318214\n📸 Instagram: @igTechnoCrazy\n✉️ Email: Rafaelpixel3004@gmail.com" },
  { q: "rafael", keywords: ["rafael", "quién es", "quien es", "fundador", "creador", "dueño", "dueno"], answer: "Rafael Navarro es el fundador de TechnoCrazy. Diseñador gráfico, desarrollador web y creador de apps. Su misión: transformar ideas en negocios digitales exitosos. No vende cursos — construye resultados junto a sus clientes. 💪" },
  { q: "tiempo", keywords: ["tiempo", "cuánto tarda", "cuanto tarda", "plazo", "entrega", "cuando"], answer: "Los tiempos dependen del proyecto: una página web puede estar lista en 1-2 semanas, una app en 4-8 semanas. Todo se define en la consulta inicial. 📅 Escríbenos: https://wa.me/17794318214" },
  { q: "curso", keywords: ["curso", "clases", "aprender", "enseñar", "ensenar", "capacitación", "capacitacion"], answer: "No vendemos cursos. Vendemos un servicio donde TÚ aprendes mientras construimos juntos tu negocio digital. Eres socio, no solo cliente. 🤝" },
];

const QUICK_QUESTIONS = [
  "¿Qué servicios ofrecen?",
  "¿Cuánto cuesta una página web?",
  "¿Cómo es el proceso de trabajo?",
  "¿Cómo los contacto?",
];

function getBotReply(text: string): string {
  const lower = text.toLowerCase();
  for (const faq of FAQS) {
    if (faq.keywords.some((k) => lower.includes(k))) {
      return faq.answer;
    }
  }
  return "No tengo esa información exacta, pero Rafael puede ayudarte personalmente 😊\n📱 WhatsApp: https://wa.me/17794318214\n📸 Instagram: @igTechnoCrazy";
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "¡Hola! Soy el asistente de TechnoCrazy 🚀\n\n¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = (text?: string) => {
    const msg = (text || input).trim();
    if (!msg) return;
    setInput("");
    const userMsg: Message = { role: "user", content: msg };
    const botMsg: Message = { role: "bot", content: getBotReply(msg) };
    setMessages((m) => [...m, userMsg]);
    setTimeout(() => setMessages((m) => [...m, botMsg]), 500);
  };

  return (
    <div className="chat-float">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{ background: "#0a0a1a", border: "1px solid rgba(41,121,255,0.3)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3" style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
              <div className="flex items-center gap-2">
                <Bot size={20} className="text-white" />
                <div>
                  <div className="text-white font-bold text-sm">Asistente TechnoCrazy</div>
                  <div className="text-blue-100 text-xs">Responde al instante</div>
                </div>
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse ml-1" />
              </div>
              <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  {m.role === "bot" && (
                    <div className="w-6 h-6 rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5" style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}>
                      <Bot size={12} className="text-white" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                      m.role === "user" ? "text-white" : "text-gray-200 bg-white/5 border border-white/10"
                    }`}
                    style={m.role === "user" ? { background: "linear-gradient(135deg,#2979ff,#7c4dff)" } : {}}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Quick questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2 flex flex-wrap gap-2">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => send(q)}
                    className="text-xs px-3 py-1.5 rounded-full border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                placeholder="Escribe tu pregunta..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-white text-sm outline-none focus:border-blue-500 placeholder-gray-600 transition-colors"
              />
              <button
                onClick={() => send()}
                disabled={!input.trim()}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white transition-all disabled:opacity-40"
                style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)" }}
              >
                <Send size={15} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl relative"
        style={{ background: "linear-gradient(135deg,#2979ff,#7c4dff)", boxShadow: "0 8px 30px rgba(41,121,255,0.5)" }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.5, type: "spring" }}
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.div>
            : <motion.div key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Bot size={22} /></motion.div>
          }
        </AnimatePresence>
        {!open && <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white animate-pulse" />}
      </motion.button>
    </div>
  );
}
