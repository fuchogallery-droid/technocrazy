'use client';
import { useEffect, useState } from 'react';

const semanas = [
  {
    titulo: "⚡ Pre-lanzamiento — Junio",
    dias: [
      { fecha:"Jun 25", dia:"Jue", posts:[
        { id:1,  time:"AM", tema:"Desarrollador trabajando de noche — TechnoCrazy en desarrollo", tipo:"Awareness · Branding" },
        { id:2,  time:"PM", tema:"Quién es Rafael Navarro — La persona detrás de TechnoCrazy", tipo:"Personal Brand" }
      ]},
      { fecha:"Jun 26", dia:"Vie", posts:[
        { id:3,  time:"AM", tema:"Los 5 servicios de TechnoCrazy — Una sola agencia, todo lo que necesitas", tipo:"Servicios · Overview" },
        { id:4,  time:"PM", tema:"TechnoCrazy = Plaza Digital — No es una agencia, es tu ecosistema", tipo:"Concepto · Branding" }
      ]},
      { fecha:"Jun 27", dia:"Sáb", posts:[
        { id:5,  time:"AM", tema:"Servicio: Diseño Gráfico — Tu marca que conquista", tipo:"Servicio 1" },
        { id:6,  time:"PM", tema:"Servicio: Páginas Web — Tu vitrina digital abierta 24/7", tipo:"Servicio 2" }
      ]},
      { fecha:"Jun 28", dia:"Dom", posts:[
        { id:7,  time:"AM", tema:"Servicio: Apps Móviles — Tu negocio en el bolsillo de tus clientes", tipo:"Servicio 3" },
        { id:8,  time:"PM", tema:"Servicio: Sistemas Automatizados — Trabaja menos, gana más", tipo:"Servicio 4" }
      ]},
      { fecha:"Jun 29", dia:"Lun", posts:[
        { id:9,  time:"AM", tema:"Servicio: IA & Automatización — El futuro ya está aquí", tipo:"Servicio 5" },
        { id:10, time:"PM", tema:"Producto: AutoPost — Publica en todas las redes con IA", tipo:"Producto" }
      ]},
      { fecha:"Jun 30", dia:"Mar", posts:[
        { id:11, time:"AM", tema:"Producto: ServiYA — El marketplace de servicios que necesitabas", tipo:"Producto" },
        { id:12, time:"PM", tema:"Producto: GaleríaX — Monetiza tu contenido exclusivo", tipo:"Producto" }
      ]}
    ]
  },
  {
    titulo: "🚀 Semana 1 Julio — Productos & Herramientas",
    dias: [
      { fecha:"Jul 1",  dia:"Mié", posts:[{ id:13, time:"AM", tema:"Producto: CambioBs — Tasas BCV + Paralelo + Binance en tiempo real", tipo:"Producto" },{ id:14, time:"PM", tema:"Producto: HK-PC Organizer — Organiza tu PC en 1 clic", tipo:"Producto" }]},
      { fecha:"Jul 2",  dia:"Jue", posts:[{ id:15, time:"AM", tema:"Error #1 en negocios sin presencia digital — Lo que te está costando", tipo:"Educación" },{ id:16, time:"PM", tema:"Tip IA #1 — Ahorra 3 horas diarias con esta herramienta", tipo:"Valor · IA" }]},
      { fecha:"Jul 3",  dia:"Vie", posts:[{ id:17, time:"AM", tema:"¿Cuánto vale una app mobile? — Desmitificando los precios", tipo:"FAQ · Educación" },{ id:18, time:"PM", tema:"Automatiza esto — Un proceso que todo negocio hace manual (y no debería)", tipo:"Automatización" }]},
      { fecha:"Jul 4",  dia:"Sáb", posts:[{ id:19, time:"AM", tema:"Diseño web: 3 errores fatales que espantan clientes", tipo:"Diseño · Educación" },{ id:20, time:"PM", tema:"IA en tu negocio — 5 casos de uso reales para emprendedores", tipo:"IA · Casos de uso" }]},
      { fecha:"Jul 5",  dia:"Dom", posts:[{ id:21, time:"AM", tema:"Lo que nadie te dice sobre tener un negocio digital", tipo:"Reflexión" },{ id:22, time:"PM", tema:"Tip diseño — El color que más convierte en landing pages", tipo:"Diseño · Tip" }]},
      { fecha:"Jul 6",  dia:"Lun", posts:[{ id:23, time:"AM", tema:"Antes / Después — Negocio sin web vs negocio con web profesional", tipo:"Comparativa" },{ id:24, time:"PM", tema:"¿Cuánto tiempo toma hacer tu web? — El proceso paso a paso", tipo:"Proceso · FAQ" }]},
      { fecha:"Jul 7",  dia:"Mar", posts:[{ id:25, time:"AM", tema:"Por qué elegir TechnoCrazy — No somos otra agencia más", tipo:"Diferenciación" },{ id:26, time:"PM", tema:"Chicago Tech Scene — Somos locales, pensamos global", tipo:"Local · Comunidad" }]},
    ]
  },
  {
    titulo: "💡 Semana 2 Julio — Conversión & Prueba Social",
    dias: [
      { fecha:"Jul 8",  dia:"Mié", posts:[{ id:27, time:"AM", tema:"FAQ — ¿Cuánto cuesta trabajar con TechnoCrazy?", tipo:"FAQ · Precio" },{ id:28, time:"PM", tema:"FAQ — ¿Qué necesito para empezar? Solo necesitas una idea", tipo:"FAQ · CTA" }]},
      { fecha:"Jul 9",  dia:"Jue", posts:[{ id:29, time:"AM", tema:"Con IA vs Sin IA — La diferencia que decide quién gana en 2026", tipo:"Comparativa · IA" },{ id:30, time:"PM", tema:"Motivación emprendedor — Tu competencia ya se digitalizó", tipo:"Motivación" }]},
      { fecha:"Jul 10", dia:"Vie", posts:[{ id:31, time:"AM", tema:"Behind the scenes — Cómo nació TechnoCrazy", tipo:"Historia · Personal" },{ id:32, time:"PM", tema:"De idea a negocio digital — El proceso real con TechnoCrazy", tipo:"Proceso" }]},
      { fecha:"Jul 11", dia:"Sáb", posts:[{ id:33, time:"AM", tema:"Tip IA #2 — Crea contenido en 10 minutos con estas 3 herramientas", tipo:"IA · Tip" },{ id:34, time:"PM", tema:"Herramienta gratuita de la semana — Recomendación TechnoCrazy", tipo:"Valor · Recomendación" }]},
      { fecha:"Jul 12", dia:"Dom", posts:[{ id:35, time:"AM", tema:"3 apps que pueden transformar tu negocio HOY", tipo:"Educación · Apps" },{ id:36, time:"PM", tema:"¿Tienes una idea? Cuéntamela — Consulta gratis por WhatsApp", tipo:"CTA · WhatsApp" }]},
      { fecha:"Jul 13", dia:"Lun", posts:[{ id:37, time:"AM", tema:"Inversión vs Gasto — Tu web no es un costo, es tu vendedor #1", tipo:"Mentalidad · Negocio" },{ id:38, time:"PM", tema:"Proceso de trabajo — Paso 1: Escucho tu idea sin juzgarla", tipo:"Proceso · Confianza" }]},
      { fecha:"Jul 14", dia:"Mar", posts:[{ id:39, time:"AM", tema:"El primer paso para digitalizar tu negocio — Más simple de lo que crees", tipo:"Educación · CTA" },{ id:40, time:"PM", tema:"Atendemos a todo el mundo — Latinos, angloparlantes, Chicago y más allá", tipo:"Mercado · Alcance" }]},
    ]
  },
  {
    titulo: "🔥 Semana 3 Julio — Comunidad & Autoridad",
    dias: [
      { fecha:"Jul 15", dia:"Mié", posts:[{ id:41, time:"AM", tema:"Caso de uso — Cómo un negocio local multiplicó sus clientes con una web", tipo:"Caso de éxito" },{ id:42, time:"PM", tema:"Tip IA #3 — Atiende clientes 24/7 con un chatbot en menos de 1 día", tipo:"IA · Tip" }]},
      { fecha:"Jul 16", dia:"Jue", posts:[{ id:43, time:"AM", tema:"FAQ — ¿Puedo pagar en partes? Transparencia total en TechnoCrazy", tipo:"FAQ · Confianza" },{ id:44, time:"PM", tema:"Automatización real — Cuántas horas semanales puedes recuperar", tipo:"Automatización · Dato" }]},
      { fecha:"Jul 17", dia:"Vie", posts:[{ id:45, time:"AM", tema:"Nuevo proyecto en camino — Teaser de lo que viene en agosto", tipo:"Teaser · Hype" },{ id:46, time:"PM", tema:"Sigue a @igTechnoCrazy para ser el primero en verlo", tipo:"CTA · Follow" }]},
      { fecha:"Jul 18", dia:"Sáb", posts:[{ id:47, time:"AM", tema:"Reflexión fin de semana — ¿Qué le falta a tu negocio para escalar?", tipo:"Reflexión · Engagement" },{ id:48, time:"PM", tema:"Idea → Prototipo → Lanzamiento — El ciclo TechnoCrazy", tipo:"Proceso" }]},
      { fecha:"Jul 19", dia:"Dom", posts:[{ id:49, time:"AM", tema:"Motivación dominical — Cada gran empresa empezó con un sueño y una pantalla", tipo:"Motivación" },{ id:50, time:"PM", tema:"¿Cuál es tu próximo movimiento? — TechnoCrazy está listo cuando tú lo estés", tipo:"CTA suave" }]},
      { fecha:"Jul 20", dia:"Lun", posts:[{ id:51, time:"AM", tema:"Tip diseño #2 — 5 elementos que toda web de negocios debe tener", tipo:"Diseño · Tip" },{ id:52, time:"PM", tema:"La diferencia entre una web de $50 y una web profesional", tipo:"Educación · Valor" }]},
      { fecha:"Jul 21", dia:"Mar", posts:[{ id:53, time:"AM", tema:"Consulta gratis — 30 minutos para entender tu proyecto sin compromiso", tipo:"CTA · Conversión" },{ id:54, time:"PM", tema:"IA + Tu negocio = Ventaja competitiva que pocos aprovechan todavía", tipo:"IA · Urgencia" }]},
    ]
  },
  {
    titulo: "🏁 Semana 4 Julio — Cierre & Preview Agosto",
    dias: [
      { fecha:"Jul 22", dia:"Mié", posts:[{ id:55, time:"AM", tema:"Recap semana — Lo que publicamos, lo que viene", tipo:"Recap" },{ id:56, time:"PM", tema:"Tip IA #4 — Genera imágenes para tu negocio con IA gratis", tipo:"IA · Tip" }]},
      { fecha:"Jul 23", dia:"Jue", posts:[{ id:57, time:"AM", tema:"3 razones para digitalizar tu negocio HOY y no mañana", tipo:"Urgencia · CTA" },{ id:58, time:"PM", tema:"Checklist — ¿Está tu negocio listo para el mundo digital?", tipo:"Engagement · Quiz" }]},
      { fecha:"Jul 24", dia:"Vie", posts:[{ id:59, time:"AM", tema:"Rafael responde — Las 3 preguntas más frecuentes de la semana", tipo:"Q&A · Personal" },{ id:60, time:"PM", tema:"Oferta especial — Primeros 5 clientes de agosto obtienen bonus exclusivo", tipo:"Oferta · Urgencia" }]},
      { fecha:"Jul 25", dia:"Sáb", posts:[{ id:61, time:"AM", tema:"Dato de impacto — El 70% de negocios sin web pierde clientes frente a quien sí tiene", tipo:"Dato · Urgencia" },{ id:62, time:"PM", tema:"El negocio digital empieza con una conversación — WhatsApp ahora", tipo:"CTA final · WhatsApp" }]},
      { fecha:"Jul 26", dia:"Dom", posts:[{ id:63, time:"AM", tema:"Lo que construimos en julio — Resumen del mes", tipo:"Recap mensual" },{ id:64, time:"PM", tema:"Agosto preview — Lo que viene te va a sorprender", tipo:"Teaser · Hype" }]},
      { fecha:"Jul 27", dia:"Lun", posts:[{ id:65, time:"AM", tema:"Tip final del mes — La herramienta IA que más usamos en TechnoCrazy", tipo:"Valor · IA" },{ id:66, time:"PM", tema:"¿Qué servicio te interesa más? — Vota en comentarios", tipo:"Engagement" }]},
      { fecha:"Jul 28", dia:"Mar", posts:[{ id:67, time:"AM", tema:"CTA final julio — technocrazy.org ya está aquí", tipo:"Lanzamiento web" },{ id:68, time:"PM", tema:"Hasta agosto — Gracias por acompañar este comienzo 🚀", tipo:"Cierre · Comunidad" }]},
    ]
  },
];

const MONTH_MAP: Record<string, number> = {
  Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11,
  Ene:0,Abr:3,Ago:7,Dic:11
};

function isPast(fechaStr: string) {
  const [m, d] = fechaStr.trim().split(' ');
  const month = MONTH_MAP[m];
  const day = parseInt(d);
  if (isNaN(month) || isNaN(day)) return false;
  const today = new Date(); today.setHours(0,0,0,0);
  return new Date(today.getFullYear(), month, day) < today;
}

function isToday(fechaStr: string) {
  const [m, d] = fechaStr.trim().split(' ');
  const month = MONTH_MAP[m];
  const day = parseInt(d);
  if (isNaN(month) || isNaN(day)) return false;
  const today = new Date();
  return today.getMonth() === month && today.getDate() === day;
}

export default function CalendarioPublico() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const totalPosts = semanas.reduce((a, s) => a + s.dias.reduce((b, d) => b + d.posts.length, 0), 0);

  return (
    <div style={{ fontFamily:"'Segoe UI',sans-serif", background:"#07071a", color:"#e0e0e0", minHeight:"100vh", padding:"0" }}>

      {/* ── BACK BUTTON ── */}
      <div style={{ padding:"16px 24px", borderBottom:"1px solid #1a1a3a11" }}>
        <a href="/" style={{ display:"inline-flex", alignItems:"center", gap:8, color:"#7c9fff",
          fontSize:".82rem", fontWeight:600, textDecoration:"none", background:"#0f0f2a",
          border:"1px solid #2979ff33", borderRadius:8, padding:"7px 14px", transition:".2s" }}>
          ← Volver a TechnoCrazy
        </a>
      </div>

      {/* ── HERO BANNER ── */}
      <div style={{ background:"linear-gradient(135deg,#0d1535 0%,#0b0b22 50%,#0d1535 100%)", borderBottom:"1px solid #1a1a3a", padding:"48px 24px 40px" }}>
        <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center" }}>
          <div style={{ fontSize:".78rem", fontWeight:700, color:"#7c4dff", letterSpacing:3, textTransform:"uppercase", marginBottom:12 }}>
            TechnoCrazy · Gestión de Redes Sociales
          </div>
          <h1 style={{ fontSize:"clamp(1.8rem,4vw,2.8rem)", fontWeight:900, lineHeight:1.2, marginBottom:16,
            background:"linear-gradient(90deg,#2979ff,#00e5ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            Tu contenido, automatizado.<br/>Cada día. En todas las redes.
          </h1>
          <p style={{ fontSize:"1rem", color:"#8899bb", lineHeight:1.7, maxWidth:620, margin:"0 auto 28px" }}>
            En TechnoCrazy construimos las herramientas para que <strong style={{color:"#cdd"}}>gestiones tus redes sociales y automatices tus publicaciones</strong> sin esfuerzo. Este es el calendario de contenido de julio 2026 — publicamos 2 veces al día, en 5 redes simultáneas.
          </p>

          {/* Feature chips */}
          <div style={{ display:"flex", flexWrap:"wrap", gap:10, justifyContent:"center", marginBottom:32 }}>
            {[
              { icon:"🤖", label:"Publicación automática con IA" },
              { icon:"📅", label:"Calendario de contenido propio" },
              { icon:"📲", label:"5 redes en simultáneo" },
              { icon:"⚡", label:"2 posts diarios programados" },
              { icon:"🎯", label:"Contenido estratégico por semana" },
            ].map(f => (
              <div key={f.label} style={{ background:"#0f0f2a", border:"1px solid #2979ff33", borderRadius:20, padding:"6px 14px",
                fontSize:".78rem", color:"#90b0ff", display:"flex", alignItems:"center", gap:6 }}>
                <span>{f.icon}</span>{f.label}
              </div>
            ))}
          </div>

          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="https://wa.me/17794318214" target="_blank" rel="noreferrer"
              style={{ display:"inline-block", background:"linear-gradient(135deg,#2979ff,#7c4dff)", color:"#fff",
                fontWeight:700, fontSize:".9rem", padding:"12px 28px", borderRadius:10, textDecoration:"none",
                boxShadow:"0 4px 20px #2979ff44" }}>
              Quiero automatizar mis redes →
            </a>
            <a href="https://autopost-plum-five.vercel.app" target="_blank" rel="noreferrer"
              style={{ display:"inline-block", background:"#7c4dff", color:"#fff",
                fontWeight:700, fontSize:".9rem", padding:"12px 28px", borderRadius:10, textDecoration:"none",
                boxShadow:"0 4px 20px #7c4dff44", border:"1px solid #9c6fff" }}>
              ⚡ Prueba AutoPost — nuestra plataforma para automatizar tus redes sociales
            </a>
          </div>
        </div>
      </div>

      {/* ── STATS ── */}
      <div style={{ maxWidth:900, margin:"0 auto", padding:"28px 24px 0" }}>
        <div style={{ display:"flex", gap:14, flexWrap:"wrap", marginBottom:28 }}>
          {[
            { label:"Posts programados", value: totalPosts, color:"#2979ff" },
            { label:"Publicaciones/día", value:"2", color:"#00e5ff" },
            { label:"Redes activas", value:"5", color:"#7c4dff" },
            { label:"Semanas de contenido", value:"5", color:"#22c55e" },
          ].map(s => (
            <div key={s.label} style={{ background:"#0f0f2a", border:"1px solid #1a1a3a", borderRadius:10, padding:"10px 20px", fontSize:".8rem", color:"#888" }}>
              <span style={{ fontSize:"1.4rem", fontWeight:700, display:"block", color:s.color }}>{s.value}</span>
              {s.label}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div style={{ display:"flex", gap:18, marginBottom:24, flexWrap:"wrap", alignItems:"center", fontSize:".75rem", color:"#555" }}>
          <span style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,borderRadius:2,background:"#2979ff",display:"inline-block" }}/>AM · 9:00</span>
          <span style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,borderRadius:2,background:"#7c4dff",display:"inline-block" }}/>PM · 7:00</span>
          <span style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,borderRadius:2,background:"#22c55e",display:"inline-block" }}/>Publicado</span>
          <span style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,borderRadius:2,background:"#f59e0b",display:"inline-block" }}/>Programado</span>
          <span style={{ display:"flex", alignItems:"center", gap:5 }}><span style={{ width:10,height:10,borderRadius:2,background:"#1a1a3a",display:"inline-block" }}/>Próximamente</span>
        </div>
      </div>

      {/* ── CALENDAR ── */}
      <div style={{ maxWidth:900, margin:"0 auto", padding:"0 24px 64px" }}>
        {semanas.map(semana => (
          <div key={semana.titulo} style={{ marginBottom:40 }}>
            <div style={{ fontSize:".82rem", fontWeight:700, color:"#7c4dff", textTransform:"uppercase",
              letterSpacing:2, padding:"8px 0", borderBottom:"1px solid #1a1a3a", marginBottom:14 }}>
              {semana.titulo}
            </div>
            {semana.dias.map(dia => {
              const past = mounted ? isPast(dia.fecha) : false;
              const today = mounted ? isToday(dia.fecha) : false;
              return (
                <div key={dia.fecha} style={{ display:"grid", gridTemplateColumns:"80px 1fr 1fr", gap:8, marginBottom:8,
                  opacity: past ? 0.45 : 1 }}>
                  <div style={{ background:"#0f0f2a", borderRadius:8, display:"flex", flexDirection:"column",
                    alignItems:"center", justifyContent:"center", fontSize:".75rem", color:"#555", padding:"8px 4px",
                    border: today ? "1px solid #2979ff55" : "1px solid transparent" }}>
                    <strong style={{ color: today ? "#2979ff" : "#999", fontSize:".82rem" }}>{dia.fecha}</strong>
                    {dia.dia}
                    {today && <span style={{ fontSize:".6rem", background:"#2979ff22", color:"#2979ff", padding:"1px 6px", borderRadius:8, marginTop:3 }}>Hoy</span>}
                    {past && <span style={{ fontSize:".58rem", background:"#ffffff0f", color:"#444", padding:"1px 5px", borderRadius:8, marginTop:3 }}>Pasado</span>}
                  </div>
                  {dia.posts.map(post => (
                    <div key={post.id} style={{
                      background:"#0d0d25", borderRadius:10, padding:"10px 12px",
                      borderLeft: `3px solid ${past ? "#1a1a3a" : post.time === "AM" ? "#2979ff" : "#7c4dff"}`,
                      position:"relative", overflow:"hidden"
                    }}>
                      <div style={{ fontSize:".65rem", color:"#444", fontWeight:700, marginBottom:2 }}>POST {String(post.id).padStart(2,'0')}</div>
                      <div style={{ fontSize:".7rem", fontWeight:700, marginBottom:4,
                        color: post.time === "AM" ? "#2979ff" : "#7c4dff" }}>
                        {post.time} · {post.time === "AM" ? "9:00" : "7:00"}
                      </div>
                      <div style={{ fontSize:".8rem", color:"#ccc", lineHeight:1.4, marginBottom:5 }}>{post.tema}</div>
                      <span style={{ fontSize:".62rem", background:"#111827", color:"#64748b", padding:"2px 7px", borderRadius:20 }}>{post.tipo}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}

        {/* ── BOTTOM CTA ── */}
        <div style={{ background:"linear-gradient(135deg,#0d1535,#0b0b22)", border:"1px solid #2979ff33",
          borderRadius:16, padding:"40px 32px", textAlign:"center", marginTop:8 }}>
          <div style={{ fontSize:"1.5rem", fontWeight:900, marginBottom:12,
            background:"linear-gradient(90deg,#2979ff,#7c4dff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>
            ¿Quieres esto para tu negocio?
          </div>
          <p style={{ color:"#8899bb", fontSize:".9rem", lineHeight:1.7, maxWidth:500, margin:"0 auto 24px" }}>
            TechnoCrazy te da las herramientas para <strong style={{color:"#cdd"}}>automatizar tus publicaciones, gestionar tus redes y hacer crecer tu presencia digital</strong> — sin que tengas que hacerlo manualmente.
          </p>
          <div style={{ display:"flex", gap:12, justifyContent:"center", flexWrap:"wrap" }}>
            <a href="https://wa.me/17794318214" target="_blank" rel="noreferrer"
              style={{ background:"linear-gradient(135deg,#2979ff,#7c4dff)", color:"#fff",
                fontWeight:700, fontSize:".88rem", padding:"11px 24px", borderRadius:10,
                textDecoration:"none", display:"inline-block" }}>
              💬 Hablemos por WhatsApp
            </a>
            <a href="/" style={{ background:"transparent", border:"1px solid #2979ff55", color:"#7c9fff",
              fontWeight:600, fontSize:".88rem", padding:"11px 24px", borderRadius:10,
              textDecoration:"none", display:"inline-block" }}>
              Ver servicios →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
