// Generado desde Guion_Entrevista_Asilo_Rafael.html - no editar a mano. Ver _generar_docs_sitio.ps1

export const DOCUMENTO_HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Guion de asilo - Cronología para estudiar</title>
<style>
  :root{
    --bg:#faf9f7; --fg:#1c1b19; --muted:#5f5b54; --line:#ddd8d0;
    --card:#fff; --accent:#7a3b2e; --warn:#8a5a00; --warnbg:#fdf6e6;
    --errbg:#fdefec; --err:#96301c; --okbg:#eef5ee; --ok:#2f5d3a;
    --newbg:#eef1f7; --new:#2f4470; --yo:#f6ede9;
  }
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0;background:var(--bg);color:var(--fg);
    font:16px/1.6 "Iowan Old Style",Georgia,"Times New Roman",serif;}
  .wrap{max-width:920px;margin:0 auto;padding:44px 24px 110px}
  h1{font-size:34px;line-height:1.15;margin:0 0 6px;letter-spacing:-.02em}
  .sub{color:var(--muted);font-size:15px;margin:0 0 26px}
  h2{font-size:13px;letter-spacing:.09em;text-transform:uppercase;
    color:var(--accent);margin:56px 0 14px;padding-bottom:7px;
    border-bottom:2px solid var(--accent);font-family:system-ui,sans-serif;font-weight:700}
  h3{font-size:18px;margin:28px 0 10px;letter-spacing:-.01em}
  p{margin:0 0 13px}
  a{color:var(--new)}
  ul,ol{margin:0 0 13px;padding-left:22px} li{margin:0 0 7px}
  b.f{color:var(--accent);font-weight:800;white-space:nowrap}
  .lede{font-size:17px;color:var(--muted);border-left:3px solid var(--line);padding-left:16px;margin:0 0 20px}
  .card{background:var(--card);border:1px solid var(--line);border-radius:9px;padding:18px 20px;margin:0 0 16px}
  .alerta,.aviso,.bien,.nuevo{border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 16px;border:1px solid}
  .alerta{background:var(--errbg);border-color:#e8c4bb;border-left:4px solid var(--err)}
  .aviso{background:var(--warnbg);border-color:#e8d9ae;border-left:4px solid var(--warn)}
  .bien{background:var(--okbg);border-color:#c9ddcb;border-left:4px solid var(--ok)}
  .nuevo{background:var(--newbg);border-color:#c6cfe0;border-left:4px solid var(--new)}
  .t{font-weight:700;margin:0 0 7px;font-family:system-ui,sans-serif;font-size:13px;letter-spacing:.05em;text-transform:uppercase}
  .alerta .t{color:var(--err)} .aviso .t{color:var(--warn)} .bien .t{color:var(--ok)} .nuevo .t{color:var(--new)}
  .alerta p:last-child,.aviso p:last-child,.bien p:last-child,.nuevo p:last-child{margin-bottom:0}
  table{width:100%;border-collapse:collapse;margin:0 0 18px;font-size:15px}
  th,td{text-align:left;padding:9px 11px;border-bottom:1px solid var(--line);vertical-align:top}
  th{font-family:system-ui,sans-serif;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--muted);font-weight:700}
  td.f{white-space:nowrap;font-variant-numeric:tabular-nums;font-weight:700;width:130px}
  .scroll{overflow-x:auto}
  code{background:#efece7;padding:1px 5px;border-radius:4px;font-size:14px}
  .tag{display:inline-block;font-family:system-ui,sans-serif;font-size:10.5px;font-weight:700;
    letter-spacing:.07em;text-transform:uppercase;background:var(--new);color:#fff;
    padding:2px 7px;border-radius:4px;vertical-align:2px;margin-left:6px}
  .tag.yo{background:var(--accent)} .tag.pais{background:#3f4b5b} .tag.conf{background:var(--warn)}
  .tag.fam{background:#5f6b52}

  /* Índice */
  .toc{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px;margin:0 0 10px;padding:0;list-style:none}
  .toc li{margin:0}
  .toc a{display:block;padding:9px 12px;border:1px solid var(--line);border-radius:8px;background:var(--card);
    text-decoration:none;color:var(--fg);font-family:system-ui,sans-serif;font-size:13.5px}
  .toc a b{color:var(--accent)}

  /* Cronología */
  .era{margin:38px 0 6px}
  .era .anio{font-family:system-ui,sans-serif;font-size:44px;font-weight:800;letter-spacing:-.03em;color:var(--accent);line-height:1;margin:0}
  .era .lema{font-size:17px;color:var(--muted);margin:2px 0 14px}
  .ev{border-left:3px solid var(--line);margin:0 0 14px 5px;padding:2px 0 2px 16px}
  .ev.yo{border-left-color:var(--accent);background:var(--yo);border-radius:0 9px 9px 0;padding:12px 16px}
  .ev.pais{border-left-color:#3f4b5b}
  .ev.fam{border-left-color:#5f6b52}
  .ev .cab{font-family:system-ui,sans-serif;font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin:0 0 3px}
  .ev.yo .cab{color:var(--accent)}
  .ev p{margin:0 0 8px}
  .ancla{background:#fff;border:1px dashed var(--accent);border-radius:9px;padding:12px 16px;margin:8px 0 22px;font-size:15.5px}
  .ancla b:first-child{font-family:system-ui,sans-serif;font-size:11px;letter-spacing:.07em;text-transform:uppercase;color:var(--accent);display:block;margin-bottom:3px}
  .fuente{font-family:system-ui,sans-serif;font-size:12.5px;color:var(--muted)}
  .fuente a{color:var(--muted)}

  /* Números */
  .cifras{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:10px;margin:0 0 18px}
  .cifras div{background:var(--card);border:1px solid var(--line);border-radius:9px;padding:12px 14px;font-family:system-ui,sans-serif}
  .cifras b{display:block;font-size:26px;line-height:1.1;letter-spacing:-.02em;color:var(--accent)}
  .cifras span{font-size:12.5px;color:var(--muted)}

  /* Preguntas */
  .q{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--accent);
    border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 14px}
  .q .pregunta{font-weight:700;margin:0 0 9px;cursor:pointer}
  .q .lbl{font-family:system-ui,sans-serif;font-size:11px;font-weight:700;letter-spacing:.07em;text-transform:uppercase;color:var(--accent);display:block;margin:8px 0 2px}
  .q .corta{margin:0 0 6px;font-size:16.5px}
  .q .larga{margin:0 0 6px;color:#2b2926}
  .q .nota{font-family:system-ui,sans-serif;font-size:13px;color:var(--warn);background:var(--warnbg);border-radius:6px;padding:7px 10px;margin:8px 0 0}
  body.estudio .q .respuesta{display:none}
  body.estudio .q.open .respuesta{display:block}
  body.estudio .q .pregunta::after{content:"  (toca para ver la respuesta)";font-weight:400;font-size:12.5px;color:var(--muted);font-family:system-ui,sans-serif}
  body.estudio .q.open .pregunta::after{content:""}
  .barra{position:sticky;top:0;z-index:5;background:var(--bg);padding:10px 0;margin:0 0 6px;border-bottom:1px solid var(--line);
    display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-family:system-ui,sans-serif;font-size:13px}
  .btn{font:600 13px system-ui,sans-serif;background:var(--accent);color:#fff;border:0;border-radius:7px;padding:8px 14px;cursor:pointer}
  .btn.sec{background:#fff;color:var(--accent);border:1px solid var(--accent)}
  h2 .leer{font:600 11px system-ui,sans-serif;text-transform:none;letter-spacing:normal;
    background:#fff;color:var(--accent);border:1px solid var(--accent);border-radius:20px;
    padding:3px 12px;cursor:pointer;margin-left:14px;vertical-align:2px}
  h2 .leer.on{background:var(--accent);color:#fff}
  @media (max-width:640px){ h2 .leer{display:block;margin:8px 0 0} }
  .bloque{font-family:system-ui,sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
    color:#fff;background:var(--accent);display:inline-block;padding:4px 11px;border-radius:5px;margin:30px 0 12px}
  .chk{display:flex;gap:10px;align-items:flex-start;margin:0 0 8px}
  .chk input{margin-top:6px;flex:none}
  .foot{margin-top:60px;padding-top:18px;border-top:1px solid var(--line);font-family:system-ui,sans-serif;font-size:13px;color:var(--muted)}
  .foot li{margin:0 0 4px}

  /* Barra de historias */
  .hist{position:sticky;top:0;z-index:10;display:flex;gap:6px;align-items:center;background:#1c1b19;padding:8px 12px;
    font-family:system-ui,sans-serif}
  .hist span{color:#a9a196;font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-right:6px}
  .hist a{color:#e9e4dc;text-decoration:none;padding:8px 14px;border-radius:7px;font-size:13.5px;font-weight:600;border:1px solid #3a3733}
  .hist a.on{background:var(--accent);color:#fff;border-color:var(--accent)}
  .hist ~ .wrap .barra{top:52px}

  @media print{
    body{background:#fff;font-size:11pt}
    .wrap{padding:0;max-width:100%}
    .barra,.hist{display:none}
    .q,.card,.alerta,.aviso,.bien,.nuevo,.ev{break-inside:avoid}
    h2{break-after:avoid}
    body.estudio .q .respuesta{display:block}
  }
  @media (max-width:640px){
    .wrap{padding:28px 16px 90px}
    h1{font-size:27px}
    .era .anio{font-size:36px}
    td.f{white-space:normal;width:auto}
    b.f{white-space:normal}
    .hist span{display:none}
  }
</style>
</head>
<body>
<nav class="hist"><span>Historias</span><a class="on" href="/privado/asilo/rafael/documento">Historia de Rafael</a><a href="/privado/asilo/rafael/documento-zoraida">Historia de Zoraida</a></nav>
<div class="wrap">

<h1>Mi historia, en orden: cronología para la entrevista de asilo</h1>
<p class="sub">Rafael Emilio Navarro Coa &middot; A213-633-412 &middot; Entrevista con oficial de asilo de USCIS: <b>1 de octubre de 2026</b><br>
Versión 7 &mdash; 27 de septiembre de 2026. Material de estudio: tu historia como eje, el país como contexto documentado, y un panel de preguntas con respuestas cortas y completas. <b>Reforzado con la carpeta de documentos de Ángel</b> (denuncia del CICPC, denuncias del 28/01/2019, carta de Soraya Hernández de Ciano y constancias de Voluntad Popular) y con el anexo de tu madre.</p>

<div class="alerta">
  <p class="t">La regla que manda sobre todo lo demás</p>
  <p><b>Todo lo que digas tiene que ser verdad y tiene que ser tuyo.</b> Las respuestas de este documento están armadas <b>solo con hechos que ya declaraste</b> (tu relato y tu I-589) o que constan en documentos y fuentes públicas con enlace. Lo que viene de tu hermano o de tu madre está marcado <span class="tag conf">Confirma</span>: si no lo viste tú mismo o no lo recuerdas así, <b>no lo digas como propio</b>. Si algo aquí no coincide con tu memoria, tu memoria manda y se corrige el papel. Y <b>&ldquo;no recuerdo&rdquo; es una respuesta válida</b>; un detalle inventado que después se contradice hace más daño que cien &ldquo;no recuerdo&rdquo;.</p>
  <p>No memorices párrafos: entiende la secuencia y cuéntala con tus palabras. El oficial nota cuándo recitas.</p>
</div>

<ul class="toc">
  <li><a href="#s1"><b>1</b> Tu caso en 60 segundos y en 3 minutos</a></li>
  <li><a href="#s2"><b>2</b> Quién es quién: colectivos y cuerpos del Estado</a></li>
  <li><a href="#s3"><b>3</b> Cómo una marcha pacífica se vuelve violenta</a></li>
  <li><a href="#s4"><b>4</b> Cronología 2014&ndash;2019 (el eje)</a></li>
  <li><a href="#s5"><b>5</b> Tu familia después de tu salida (2019&ndash;2021)</a></li>
  <li><a href="#s5b"><b>5b</b> La familia cruzada: quién, qué, cuándo y qué papel lo prueba</a></li>
  <li><a href="#s6"><b>6</b> Víctimas, heridos y detenidos documentados</a></li>
  <li><a href="#s7"><b>7</b> Venezuela en 2026: por qué no puedes volver</a></li>
  <li><a href="#s8"><b>8</b> Cifras para memorizar</a></li>
  <li><a href="#s9"><b>9</b> Panel de preguntas y respuestas</a></li>
  <li><a href="#s10"><b>10</b> Puntos a confirmar y correcciones</a></li>
  <li><a href="#s11"><b>11</b> Plan de estudio y día de la entrevista</a></li>
  <li><a href="#s12"><b>12</b> Fuentes</a></li>
  <li><a href="#s13"><b>13</b> Todas las fechas, en orden</a></li>
</ul>

<!-- ============================================================ -->
<h2 id="s1">1 &middot; Tu caso en 60 segundos y en 3 minutos</h2>

<p class="lede">Si el oficial te dice &ldquo;cuénteme por qué pide asilo&rdquo;, esta es la columna vertebral. Todo lo demás del documento cuelga de aquí.</p>

<div class="ancla">
  <b>60 segundos</b>
  Soy de Maturín, Monagas. Desde <b class="f">2016</b> fui activista de oposición, en la MUD y en <b>Voluntad Popular</b>: marchas, asambleas, casa por casa, validación de firmas para el revocatorio. El <b class="f">9 de junio de 2018</b>, saliendo de una reunión de mi organización, unos motorizados nos interceptaron, nos robaron el carro, los celulares y las cédulas, nos golpearon y dispararon. Nos dijeron: <i>&ldquo;se los dijimos y no pararon&rdquo;</i>. Después amenazaron a mi madre por teléfono. El <b class="f">23 de enero de 2019</b> quedé encerrado en la Catedral de Maturín, cercado por encapuchados armados y la Guardia Nacional, y nos querían llevar a un &ldquo;juicio popular&rdquo;. Nos escondimos en tres lugares del país y las amenazas nos siguieron. Salí el <b class="f">28 de marzo de 2019</b>. Mi familia siguió siendo buscada hasta que mi papá tuvo que huir en <b class="f">2021</b>. Si regreso, esos mismos grupos saben quién soy y dónde vive mi familia.
</div>

<div class="ancla">
  <b>3 minutos (añade estos cuatro tramos, en este orden)</b>
  <b>1. Por qué me hice activista.</b> En <b class="f">2014</b> encarcelaron a Leopoldo López y mataron a jóvenes manifestantes con la participación de los colectivos. Eso me sacó de simpatizante. En <b class="f">2015</b> marché con los movimientos estudiantiles y en <b class="f">2016</b> me incorporé a la MUD; mi constancia de Voluntad Popular me acredita desde el <b class="f">12 de febrero de 2016</b>.<br>
  <b>2. Qué hacía.</b> Marchas y concentraciones, asambleas de ciudadanos, visitas casa por casa sobre derechos y deberes constitucionales, validación de firmas del revocatorio de 2016, apoyo a la renovación de partidos y a la recolección para las primarias de la MUD a la gobernación de Monagas en 2017. Siempre con mi hermano Ángel.<br>
  <b>3. Lo que me pasó.</b> Amenazas y el ataque de junio de 2018; llamadas a mi madre; tres escondites; la Catedral el <b class="f">23 de enero de 2019</b>; la llamada del <b class="f">25 de enero</b> [<span class="tag conf">Confirma</span> de Ángel/Zoraida].<br>
  <b>4. Por qué no puedo volver.</b> Estoy identificado: la organización lo certifica, los atacantes tienen mis documentos, sabían mi universidad, mi casa y mi carro, y siguieron buscando a mi familia hasta <b class="f">2021</b>. Y los grupos y cuerpos que nos persiguieron siguen ahí: la misión de la ONU dijo en <b class="f">septiembre de 2026</b> que el aparato represivo sigue intacto.
</div>

<!-- ============================================================ -->
<h2 id="s2">2 &middot; Quién es quién: los grupos violentos y los cuerpos del Estado</h2>

<p class="lede">Cuando el oficial pregunta &ldquo;¿quién le hizo daño?&rdquo;, la respuesta tiene dos capas: los <b>colectivos</b> (civiles armados afines al gobierno) y los <b>cuerpos de seguridad</b> que los cubren y trabajan con ellos.</p>

<h3>Los colectivos: quiénes son</h3>
<div class="card">
  <p>Grupos armados civiles afines al chavismo, que controlan barrios y actúan en motos, encapuchados. La <b>Misión de la ONU (informe de septiembre de 2026)</b> concluye que <b>los colectivos &ldquo;no constituyen un fenómeno periférico sino un componente funcional del aparato represivo del Estado&rdquo;</b>. Los grupos que nombra:</p>
  <ul>
    <li><b>Tupamaros</b> (Movimiento Revolucionario Tupamaro): nacido en el 23 de Enero, Caracas; en <b>2014</b> atacó a balazos a estudiantes en Mérida. <i>Es el nombre que aparece en tu caso: los mensajes del 18/05/2018 vinieron de &ldquo;un colectivo aliado a los Tupamaros&rdquo;</i> [<span class="tag conf">Confirma</span> lo dice el relato de Ángel].</li>
    <li><b>La Piedrita</b> (liderado por Valentín Santana), <b>Alexis Vive</b> y <b>Tres Raíces</b> (parroquia 23 de Enero), <b>Frente 5 de Marzo</b> (rondas encapuchadas en moto en Caracas en <b>2017</b>), <b>Coordinadora Simón Bolívar</b>, <b>Carlos Sarría</b>, <b>Frente Sergio Rodríguez</b>.</li>
    <li>Estructuras <b>&ldquo;ad hoc&rdquo;</b>: fuerzas de choque armadas para dispersar protestas, sin nombre fijo. <b>Este es el tipo de grupo que te atacó en Maturín</b>.</li>
  </ul>
  <p style="margin:0">Cómo se financian y quién los respalda: puestos en ministerios y cuerpos de seguridad, cajas CLAP, propiedades confiscadas, presupuesto público. Diosdado Cabello y Freddy Bernal aparecen como coordinadores; el mayor Alexander Granko Arteaga (DGCIM) <b>convocó formalmente a colectivos</b> para la operación de El Junquito de <b class="f">enero 2018</b>.</p>
  <p class="fuente" style="margin-top:10px">Fuentes: <a href="https://www.elnacional.com/investigacion/2026/09/onu-informe-colectivos-represion-estado-venezuela-2026/">El Nacional (informe ONU 2026)</a> &middot; <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea, protestas 2017</a> &middot; <a href="https://www.infobae.com/2014/02/13/1543408-los-tupamaros-el-brazo-armado-del-chavismo/">Infobae, Tupamaros</a></p>
</div>

<h3>Los cuerpos del Estado</h3>
<div class="scroll">
<table>
<tr><th>Cuerpo</th><th>Qué hace</th><th>Dónde aparece en tu historia</th></tr>
<tr><td><b>GNB</b> &mdash; Guardia Nacional Bolivariana</td><td>Lacrimógenas y perdigones en las marchas; custodia; detenciones; juzgados militares en 2017.</td><td>Catedral de Maturín, <b class="f">23/01/2019</b>: custodió las entradas y disparó contra la marcha en la Av. Bolívar.</td></tr>
<tr><td><b>PNB / FAES</b> &mdash; Policía Nacional y su fuerza especial</td><td>La ONU atribuye a las FAES la mayoría de <b>5.287 muertes &ldquo;por resistencia a la autoridad&rdquo; en 2018</b> y 1.569 entre enero y mayo de 2019.</td><td>Contexto general; Ángel declara temer también a funcionarios del CICPC.</td></tr>
<tr><td><b>SEBIN / DGCIM</b> &mdash; inteligencia civil y militar</td><td>Detenciones políticas, desapariciones, tortura (El Helicoide, El Rodeo I, Fuerte Guaicaipuro). Albán murió bajo custodia del SEBIN (<b class="f">8/10/2018</b>).</td><td>Fuente de tu temor de tortura (Convención contra la Tortura, que marcaste en tu I-589).</td></tr>
<tr><td><b>CICPC</b> &mdash; policía de investigaciones</td><td>Recibe denuncias; también es un cuerpo del Estado.</td><td>Denuncia del <b class="f">11/06/2018</b> (K-18-0074-02562), ya leída: la clasificó como robo de vehículo.</td></tr>
</table>
</div>

<div class="nuevo">
  <p class="t">Verdad completa: lo que responderá el gobierno, y por qué conviene conocerlo</p>
  <p>El chavismo sostiene que las protestas de 2014 y 2017 fueron &ldquo;guarimbas&rdquo; violentas de la oposición, y hay víctimas de ese lado: por ejemplo <b>Orlando Figuera</b>, quemado durante una protesta en Altamira el <b class="f">20/05/2017</b> y fallecido el <b class="f">4/06/2017</b>. Un oficial informado puede mencionarlo. Tu posición, si es la verdad, es clara y corta: <b>tus actividades fueron marchas, asambleas y trabajo casa por casa; no participaste en violencia</b>. Y no tienes que discutir el resto del país: solo tu caso.</p>
</div>

<!-- ============================================================ -->
<h2 id="s3">3 &middot; Cómo una marcha pacífica se vuelve violenta</h2>

<p class="lede">Provea, la ONU y Human Rights Watch documentan el mismo patrón en 2014, 2017 y 2019. Tu día en la Catedral lo sigue paso por paso, y eso es lo que le da credibilidad.</p>

<div class="scroll">
<table>
<tr><th>Paso</th><th>El patrón documentado</th><th>Tu <b class="f">23 de enero de 2019</b> en Maturín</th></tr>
<tr><td><b>1. Marcha pacífica</b></td><td>Multitudes convocadas por la oposición; en 2017 hasta millones el <b class="f">19/04</b>.</td><td>&ldquo;Toda la marcha había transcurrido en paz&rdquo; (tu relato). Tres columnas convergieron en la Av. Juncal con Bolívar: desde Tipuro, El Guacharín y la Plaza El Indio.</td></tr>
<tr><td><b>2. Fuerza estatal</b></td><td>Lacrimógenas y perdigones a corta distancia por GNB/PNB.</td><td>GNB con lacrimógenas y perdigones en la Av. Bolívar.</td></tr>
<tr><td><b>3. Llegan los colectivos</b></td><td>Motorizados encapuchados, a veces salidos de instalaciones militares; la policía se retira minutos antes (casos 2017).</td><td>&ldquo;Gran grupo de motorizados encapuchados portando armas de fuego&rdquo; contra los manifestantes; el diario reportó disparos desde el techo de la sede del PSUV.</td></tr>
<tr><td><b>4. Estampida y heridos</b></td><td>Personas heridas y en pánico buscando refugio.</td><td>Estampida; hombres y mujeres con ataques de pánico y heridos; entran a la Catedral.</td></tr>
<tr><td><b>5. Asedio o detenciones</b></td><td>Detenciones masivas; en 2017, tribunales militares para civiles (Plan Zamora).</td><td>Cerco de la Catedral por GNB y colectivos. Exigían que los jóvenes salieran para &ldquo;un juicio popular&rdquo; y entregarlos a la GNB.</td></tr>
<tr><td><b>6. Persecución posterior</b></td><td>Medidas judiciales, llamadas y amenazas a las familias.</td><td>Llamada con amenaza de muerte del <b class="f">25/01/2019</b> [<span class="tag conf">Confirma</span>]; huida en marzo.</td></tr>
</table>
</div>

<!-- ============================================================ -->
<h2 id="s4">4 &middot; Cronología 2014&ndash;2019: el país y tu historia, entrelazados</h2>

<p class="lede">Cada año tiene tres capas: <span class="tag pais">País</span> lo que ocurría en Venezuela (con fuente), <span class="tag yo">Tú</span> lo que viviste (de tu relato y tu expediente), y una <b>frase ancla</b> para cerrar el año. Las fechas en <b class="f">negrita</b> son las que tienes que saber sin pensar. Donde dice <span class="tag conf">Confirma</span>, el dato viene de otra persona de la familia o de un documento que aún no has revisado.</p>

<!-- 2014 -->
<div class="era"><p class="anio">2014</p><p class="lema">El año en que dejaste de ser simpatizante</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">12 de febrero de 2014</b> &mdash; Día de la Juventud. Marchas estudiantiles en decenas de ciudades. La fuerza pública y grupos armados afines al gobierno responden con fuego real: muere <b>Bassil Da Costa</b>, de un disparo en la cabeza (el primero de las protestas), y otros. Ese día también muere un miembro de un colectivo, <b>Juan Montoya</b>.</p>
<p><b class="f">18 de febrero de 2014</b> &mdash; Leopoldo López se entrega a las autoridades. El <b class="f">18&ndash;19 de febrero</b>, <b>Génesis Carmona</b>, estudiante y reina de belleza, es baleada durante una protesta en Valencia por civiles armados afines al gobierno; muere al día siguiente.</p>
<p>En Mérida, los <b>Tupamaros</b> atacaron a balazos a estudiantes que protestaban. En un tercio de las protestas de marzo hubo colectivos armados atacando a manifestantes, con las fuerzas de seguridad presentes sin intervenir.</p>
<p><b>Balance:</b> <b>43 muertos</b>. Cifras del Ministerio Público: 486 heridos y 1.854 detenidos. <b>Foro Penal: 3.127 detenciones arbitrarias</b> entre febrero y mayo y <b>33 casos de tortura</b>.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/2014_Venezuelan_protests">Protestas de 2014</a> &middot; <a href="https://en.wikipedia.org/wiki/La_Salida">La Salida</a> &middot; <a href="https://www.infobae.com/venezuela/2024/02/13/a-10-anos-de-las-masivas-protestas-contra-maduro-activistas-exigieron-justicia-para-los-43-asesinados/">Infobae: 10 años, los 43 asesinados</a></p></div>

<div class="ev yo"><p class="cab">Tú</p>
<p>El encarcelamiento de Leopoldo López te pareció <b>&ldquo;un hecho aberrante e injusto&rdquo;</b> y viste cómo asesinaban y detenían a jóvenes manifestantes con la cooperación de los colectivos. Eso te impulsó &ldquo;de manera decidida&rdquo; a tomar una actitud más activa. Tenías 17 años; ya vivías en Maturín (Urb. Palma Real).</p></div>
<div class="ancla"><b>Frase ancla 2014</b> &ldquo;Vi cómo mataban a jóvenes de mi edad por marchar y encarcelaban a su líder. Ahí decidí dejar de mirar y actuar.&rdquo;</div>

<!-- 2015 -->
<div class="era"><p class="anio">2015</p><p class="lema">Marchas estudiantiles y el voto del 6 de diciembre</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">10 de septiembre de 2015</b> &mdash; López es condenado a 13 años y 9 meses de prisión. <b class="f">6 de diciembre de 2015</b> &mdash; la oposición (MUD) gana la Asamblea Nacional por primera vez en 16 años. El chavismo responde en los meses siguientes con recortes de facultades a la Asamblea desde el Tribunal Supremo.</p></div>

<div class="ev yo"><p class="cab">Tú</p>
<p>Formas parte del <b>equipo juvenil de apoyo a los movimientos estudiantiles opositores</b> y participas &ldquo;activamente en las marchas y manifestaciones de 2015&rdquo; (tu relato). <span class="tag conf">Confirma</span> con tu memoria en cuáles marchas concretas estuviste (fechas, lugares, con quién): el oficial preguntará por al menos una.</p></div>
<div class="ancla"><b>Frase ancla 2015</b> &ldquo;Empecé marchando con estudiantes. En diciembre la gente votó y creímos que se podía cambiar por la vía democrática.&rdquo;</div>

<!-- 2016 -->
<div class="era"><p class="anio">2016</p><p class="lema">El año de las firmas: la vía democrática se cierra</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b>Abril&ndash;junio de 2016</b> &mdash; la oposición reúne cerca de <b>400.000 firmas</b> (hacían falta unas 200.000) para pedir el referendo revocatorio contra Maduro. <b class="f">20 de octubre de 2016</b> &mdash; el CNE <b>suspende</b> el proceso, apoyado en decisiones de tribunales penales de cinco estados: Apure, Aragua, Bolívar, Carabobo y <b>Monagas</b>, que anularon la recolección de firmas por &ldquo;fraude&rdquo;.</p>
<p><b class="f">24 de octubre de 2016</b> &mdash; en Maturín, <b>Carlos Báez</b>, joven activista de Voluntad Popular, es detenido mientras colocaba una pancarta a favor del revocatorio en el distrito de la Av. Libertador: cargos de alteración del orden público; presentación cada 45 días durante año y medio; primero lo acusaron de terrorismo; terminó emigrando a Perú. <b>Es un caso casi idéntico al tuyo</b>: mismo partido, misma ciudad, misma edad, mismo año.</p>
<p class="fuente"><a href="https://cnnespanol.cnn.com/2016/10/20/anulan-firmas-de-la-primera-fase-del-revocatorio-en-varios-estados-de-venezuela">CNN: anulan firmas del revocatorio</a> &middot; <a href="https://www.wola.org/2016/10/venezuelas-suspension-signature-collection-dangerous-setback/">WOLA</a> &middot; <a href="https://efectococuyo.com/politica/monagas-la-disidencia-es-perseguida-con-medidas-judiciales/">Efecto Cocuyo: Monagas, la disidencia es perseguida (21/10/2018)</a></p></div>

<div class="ev yo"><p class="cab">Tú</p>
<p><b class="f">12 de febrero de 2016</b> &mdash; fecha desde la cual Voluntad Popular certifica tu activismo (código <b>111124225</b>). Te incorporas formalmente a la <b>MUD</b>: activador de la validación de firmas, asambleas de ciudadanos, jornadas <b>casa por casa</b> llevando &ldquo;la palabra de orientación en defensa de los deberes y derechos establecidos en la Constitución&rdquo;. Junto a Ángel organizas jóvenes de varias universidades. Tu hermano hizo el mismo trabajo: según la carta de la abogada Soraya Hernández de Ciano (23/09/2019), Ángel empezó en <b class="f">enero de 2016</b> en asambleas de ciudadanos y en <b class="f">octubre de 2016</b> participó en la validación de firmas del revocatorio; la carta lo describe como <i>&ldquo;responsable de movilización de movimientos políticos democráticos juveniles&rdquo;</i> del municipio.</p>
<p><b class="f">21 de abril de 2016</b> &mdash; allanamiento de tu casa a las 6 a.m.: funcionarios sin identificación y sin orden judicial, alegando &ldquo;material subversivo&rdquo;; <b>tu hermana Emily fue detenida e interrogada</b> hasta la noche. <span class="tag conf">Confirma</span> viene de Zoraida y Ángel; <b>no está en tu relato ni en tu I-589</b>. Decide con tu abogada si lo declaras tú como hecho de la familia.</p>
<p><span class="tag conf">Ojo con una fecha</span> Tu relato dice que el revocatorio fue suspendido &ldquo;en el 2017&rdquo;. Fue el <b class="f">20 de octubre de 2016</b>. Si lo mencionas, di octubre de 2016.</p></div>
<div class="ancla"><b>Frase ancla 2016</b> &ldquo;Juntamos las firmas, casa por casa, como manda la Constitución. Nos suspendieron el referendo, y a un muchacho de mi partido, de mi ciudad, lo detuvieron por colgar una pancarta.&rdquo;</div>

<!-- 2017 -->
<div class="era"><p class="anio">2017</p><p class="lema">Cuatro meses de calle: abril a julio</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">29&ndash;30 de marzo de 2017</b> &mdash; el Tribunal Supremo se atribuye funciones de la Asamblea y le quita la inmunidad a los diputados; rectifica el <b class="f">1 de abril</b>, pero las protestas ya no paran. <b class="f">18 de abril</b> &mdash; el gobierno activa el <b>Plan Zamora</b>: unos 200.000 efectivos, más de 2.000 puntos de control, participación de civiles armados como fuerza de choque y <b>tribunales militares para civiles</b>. <b class="f">19 de abril</b> &mdash; &ldquo;la Madre de todas las marchas&rdquo;, entre 2,5 y 6 millones de personas.</p>
<p><b class="f">16 de julio de 2017</b> &mdash; consulta popular organizada por la oposición: más del 99% rechaza la Constituyente. <b class="f">30 de julio</b> &mdash; elección de la Asamblea Nacional Constituyente, boicoteada por la oposición. <b class="f">10 de septiembre</b> &mdash; primarias de la MUD para las gobernaciones. <b class="f">15 de octubre</b> &mdash; elecciones regionales de gobernadores.</p>
<p><b>Balance (abril&ndash;julio):</b> entre <b>120 y 165 muertos</b> según la fuente (Ministerio Público 120; recuento independiente 157&ndash;165), <b>más de 15.000 heridos</b>, <b>4.848&ndash;5.092 detenidos</b>. Provea: <b>28 muertes atribuidas a civiles armados progobierno</b>, presentes en <b>523 de 6.729 protestas</b> registradas. La ONU (Oficina de Derechos Humanos) documentó &ldquo;uso excesivo de la fuerza generalizado y sistemático&rdquo;, detenciones arbitrarias y maltrato; Foro Penal registró golpes, gases y maltratos crueles a detenidos.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/2017_Venezuelan_protests">Protestas de 2017</a> &middot; <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea</a> &middot; <a href="https://www.hrw.org/es/report/2017/11/29/arremetida-contra-opositores/brutalidad-tortura-y-persecucion-politica-en">HRW: Arremetida contra opositores</a> &middot; <a href="https://www.observatoriodeconflictos.org.ve/sin-categoria/venezuela-6-729-protestas-y-157-fallecidos-desde-el-1-de-abril-de-2017">Observatorio de Conflictividad</a></p></div>

<div class="ev pais"><p class="cab">País &mdash; en Monagas</p>
<p><b class="f">19 de abril de 2017</b> &mdash; <b>Yoel Bellorín</b>, docente universitario, es detenido: primer preso político de Monagas en el contexto de las protestas; cinco meses en calabozos. <b class="f">5 de junio</b> &mdash; <b>Hernán Vizcarrondo</b>, 70 años, presidente de una junta de condominio, detenido junto a otras 12 personas; su esposa fue despedida de PDVSA. <b class="f">20 de julio</b> &mdash; en la Av. Libertador de Maturín, la GNB detiene a <b>Génesis Tirado</b> y <b>Humberto Marquina</b> durante el paro cívico; los dos únicos presos políticos de Monagas procesados por la <b>jurisdicción militar</b>; un mes en la cárcel de La Pica, casa por cárcel el <b class="f">29 de agosto</b>.</p></div>

<div class="ev yo"><p class="cab">Tú</p>
<p>&ldquo;Durante el año 2017 continuamos realizando actos políticos de motivación, apoyo a la validación y renovación de partidos políticos, recolección de apoyo para las elecciones primarias de candidatos a la gobernación del estado Monagas organizada por la MUD&rdquo; (tu relato).</p>
<p><span class="tag conf">Confirma</span> tu relato <b>no dice</b> a cuáles de las grandes marchas de abril&ndash;julio de 2017 fuiste. Si fuiste a alguna (la del <b class="f">19 de abril</b>, el paro del <b class="f">20 de julio</b>), escríbelo aquí con fecha y lugar. Si no lo recuerdas o no fuiste, dilo así: <i>&ldquo;mi trabajo fue sobre todo con los estudiantes y de puerta en puerta&rdquo;</i>, si es cierto.</p>
<p><b>Las fechas de esas actividades</b> las da la carta de la abogada Soraya Hernández de Ciano sobre Ángel, con quien hacías lo mismo: validación o renovación de partidos (<b class="f">marzo de 2017</b>), consulta popular (<b class="f">16 de julio de 2017</b>), recolección de apoyos para las primarias de la MUD a la gobernación de Monagas (celebradas el <b class="f">10 de septiembre de 2017</b>) y elecciones de gobernadores (<b class="f">15 de octubre de 2017</b>). Ángel añade que en 2017 participó en siete plantones en Tipuro (Farmatodo Tipuro), reprimidos con gases y perdigones, y en la marcha del 19 de abril. <span class="tag conf">Confirma</span> cuáles hiciste tú.</p></div>
<div class="ancla"><b>Frase ancla 2017</b> &ldquo;Ese año vi que a la gente común, un profesor, un señor de 70 años, dos muchachos con una pancarta, los llevaban presos, aquí mismo en Monagas.&rdquo;</div>

<!-- 2018 -->
<div class="era"><p class="anio">2018</p><p class="lema">El año en que te alcanzaron</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">15 de enero de 2018</b> &mdash; masacre de <b>El Junquito</b>: el ex policía <b>Óscar Pérez</b> y seis personas más son ejecutados en una operación con más de 500 efectivos de FAES, GNB, DGCIM y SEBIN, y <b>colectivos convocados formalmente</b> por un mayor de la DGCIM (según la ONU). <b class="f">20 de mayo</b> &mdash; elecciones presidenciales, boicoteadas por la oposición principal. <b class="f">8 de octubre</b> &mdash; el concejal opositor <b>Fernando Albán</b> muere bajo custodia del SEBIN tres días después de su detención. Ese año la ONU contó <b>5.287 muertes &ldquo;por resistencia a la autoridad&rdquo;</b>.</p>
<p class="fuente"><a href="https://www.ntn24.com/noticias-actualidad/caso-oscar-perez-la-masacre-de-el-junquito-84141">NTN24: El Junquito</a> &middot; <a href="https://en.wikipedia.org/wiki/Fernando_Alb%C3%A1n">Fernando Albán</a> &middot; <a href="https://efectococuyo.com/sucesos/que-ha-pasado-con-las-faes-desde-el-primer-informe-de-bachelet/">Efecto Cocuyo: FAES tras el informe Bachelet</a></p></div>

<div class="ev yo"><p class="cab">Tú &mdash; primer semestre</p>
<p>&ldquo;Culminaba el año 2017 y transcurriendo así el año 2018 siempre nos activamos para las marchas y concentraciones de protestas por la liberación de los presos políticos y la caída del régimen, siendo siempre objeto de la represión brutal ejecutada por los cuerpos oficiales de seguridad uniformados y civiles irregulares afectos al gobierno de turno&rdquo; (tu relato). <span class="tag conf">Confirma</span> fechas y lugares de esas marchas.</p></div>

<div class="ev yo"><p class="cab">Tú &mdash; los mensajes</p>
<p><b class="f">18 de mayo de 2018</b> &mdash; mensajes de texto de <b>un colectivo aliado a los &ldquo;Tupamaros&rdquo;</b>: sabían la universidad de ambos, dónde viven, tu vehículo con detalles y los sitios que frecuentaban (La Floresta, El Parque, Las Flores). Exigían dejar las charlas y el activismo o &ldquo;las consecuencias serían mortales&rdquo;. <span class="tag conf">Confirma</span> está en el relato de Ángel, no en el tuyo: cuenta lo que viste tú y di que lo demás lo supiste por tu hermano. <b>Si existe alguna captura de pantalla, es tu mejor prueba.</b></p></div>

<div class="ev yo"><p class="cab">Tú &mdash; el ataque</p>
<p><b class="f">9 de junio de 2018</b> &mdash; es la fecha que consta en <b>las tres denuncias</b> (CICPC del 11/06/2018 y Fiscalía y Defensoría del 28/01/2019: <b>09-06-2018</b>) y en tu relato; solo el relato de Ángel dice &ldquo;viernes 8&rdquo;. Salían de <b>una reunión política y de amistad en la Urb. La Floresta</b> con compañeros de tu organización (Ángel, Hilda Fuentes, Antony Ordaz, Keren Ramos y tú) y llevaban a dos compañeras a su casa en el <b>Volkswagen SpaceFox negro 2012, placa AH250EA</b>, de tu padre. <b>Dos pares de motorizados</b> los interceptaron y los despojaron del carro, de los celulares y de <b>las billeteras con sus documentos de identidad</b>. A Ángel lo golpearon en la cabeza con el cañón del arma; a ti, un <b>puñetazo en la cara</b>. Forcejeaste con uno de ellos para evitar agresiones a las muchachas y hubo <b>un disparo de amedrentamiento que casi te quita la vida</b>. Sus primeras palabras: <b>&ldquo;se los dijimos y no pararon&rdquo;</b>. Los llamaron <b>&ldquo;golpistas&rdquo;</b> y les advirtieron que los matarían. Tu madre añade que se identificaron como <b>&ldquo;colectivos&rdquo;</b>.</p>
<p><b class="f">11 de junio de 2018</b> &mdash; <b>denuncia ante el CICPC</b>, Sub-Delegación Maturín, expediente <b>K-18-0074-02562</b>, presentada por Ángel. Fecha del hecho: <b>09-06-2018</b>. Narra que en la avenida principal de La Floresta, a dos cuadras después de la panadería Fiorpan, cuando iban a dejar a dos acompañantes frente a la casa de una amiga, <b>tres sujetos desconocidos con armas de fuego</b> y bajo amenaza de muerte los despojaron de <b>cuatro teléfonos</b> y del <b>SpaceFox</b> (placas AH250EA, valorado en 6.100.000.000 de bolívares). Víctimas anotadas: <i>Ángel, Rafael Navarro, Gabriel Ruiz y Anthoni Ordaz</i>. <b>Está clasificada como &ldquo;hurto y robo de vehículos automotores&rdquo;</b>: no menciona los golpes, el disparo, la frase &ldquo;se los dijimos y no pararon&rdquo; ni el móvil político. Cómo manejarlo: sección 10. Hacia el <b class="f">11 de junio</b> el carro aparece desvalijado en el sector La Línea, Maturín.</p>
<p><b>Junio&ndash;julio de 2018</b> &mdash; dos llamadas a tu madre exigiendo que desistieran del activismo; ella tuvo el teléfono apagado <b>más de un mes</b>. (Tu relato usa la palabra &ldquo;extorsión&rdquo;: lo que exigían era que dejaran la política. <span class="tag conf">Confirma</span> con ella si pidieron dinero alguna vez.)</p></div>

<div class="ev yo"><p class="cab">Tú &mdash; los escondites</p>
<p>Casa de la abuela <b>Eligia Zoraida Hernández</b>, Av. Los Guaritos, Casa 60, Maturín (<span class="tag conf">Confirma</span> si fue antes o después del ataque: la ficha dice abril&ndash;junio, pero el ataque fue en junio). Después, unas <b>ocho semanas</b> en Puerto La Cruz/Barcelona, en casa del abuelo <b>Argenis Coa</b> (Villa Olímpica, bloque 5, apto. 3). <b>Las amenazas continuaron.</b> En <b class="f">diciembre de 2018</b> tus padres les aconsejan &ldquo;bajar un poco la guardia&rdquo; como activistas y terminar los estudios (carta de tu madre a USCIS: explícalo en la sección 9).</p></div>
<div class="ancla"><b>Frase ancla 2018</b> &ldquo;Nos avisaron por mensaje, nos dijeron &lsquo;se los dijimos y no pararon&rsquo;, y cumplieron: nos robaron los documentos y dispararon. Después llamaron a mi madre.&rdquo;</div>

<!-- 2019 -->
<div class="era"><p class="anio">2019</p><p class="lema">El año del 23 de enero y de la salida</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">10 de enero de 2019</b> &mdash; Maduro asume un segundo mandato. <b class="f">21 de enero</b> &mdash; en Cotiza (Caracas), colectivos matan a una mujer que no protestaba; hieren a cinco más. <b class="f">23 de enero</b> &mdash; marcha nacional; Juan Guaidó se proclama presidente encargado. <b>Al menos 13 personas mueren ese día</b>; Cofavic documenta cinco jóvenes asesinados por fuerzas especiales. En la primera semana: 16 muertos entre los manifestantes y unas <b>470 detenciones</b> (Foro Penal); a mediados de febrero, <b>956 arrestos, incluidos al menos 77 menores</b>.</p>
<p><b class="f">23 de febrero</b> &mdash; ayuda humanitaria: <b>14 muertos y 285 heridos</b>. <b class="f">30 de abril</b> &mdash; levantamiento fallido: al menos <b>4 muertos</b> (uno, un adolescente de <b>14 años</b>, baleado en la cabeza presuntamente por colectivos), <b>240 detenidos incluidos 17 menores</b>, un blindado de la GNB atropelló a manifestantes.</p>
<p><b class="f">4 de julio de 2019</b> &mdash; informe de la Oficina de Derechos Humanos de la ONU (558 entrevistas): <b>66 muertes en protestas de enero a mayo de 2019, 52 atribuibles a fuerzas de seguridad</b>; <b>793 personas privadas de libertad arbitrariamente</b> al 31 de mayo; unas <b>6.800 ejecuciones extrajudiciales</b> entre enero de 2018 y mayo de 2019; una estrategia &ldquo;para neutralizar, reprimir y criminalizar a la oposición&rdquo;. <b>Junio 2019:</b> el capitán Rafael Acosta Arévalo muere bajo custodia con signos de tortura.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">Protestas de 2019</a> &middot; <a href="https://www.hrw.org/es/news/2019/05/03/venezuela-violenta-respuesta-las-manifestaciones">HRW, mayo 2019</a> &middot; <a href="https://www.ohchr.org/es/2019/07/un-human-rights-report-venezuela-urges-immediate-measures-halt-and-remedy-grave-rights">ONU-DDHH, julio 2019</a> &middot; <a href="https://www.infobae.com/america/venezuela/2019/07/05/michelle-bachelet-denuncio-la-erosion-del-estado-de-derecho-en-venezuela/">Infobae, 6.800 ejecuciones</a> &middot; <a href="https://www.proceso.com.mx/internacional/2019/6/30/muerte-de-capitan-torturado-en-carcel-militar-sacude-al-gobierno-de-nicolas-maduro-227173.html">Proceso: Acosta Arévalo</a></p></div>

<div class="ev yo"><p class="cab">Tú &mdash; la Catedral de Maturín, <b class="f">23 de enero de 2019</b> (el hecho central)</p>
<p>Acudes con Ángel al llamado nacional a conmemorar la caída de Pérez Jiménez (<b class="f">23/01/1958</b>). La marcha va en paz hasta la <b>Av. Juncal</b>, punto de concentración; de ahí se decide continuar a la <b>Catedral Nuestra Señora del Carmen</b> para una misa de acción de gracias. Al acercarse, <b>motorizados encapuchados con armas de fuego</b> y la GNB los reciben con <b>lacrimógenas y perdigones</b>. Estampida. Tú y la mayoría logran entrar al recinto, con <b>ataques de pánico y heridos</b>. Obispo <b>Enrique Pérez Lavado</b> y los religiosos los amparan. Tu relato cuenta &ldquo;casi 942 personas&rdquo; y <b>cinco horas</b> cautivos &ldquo;como rehenes&rdquo;; los grupos armados lanzan piedras y amenazas y piden que los jóvenes salgan para &ldquo;un juicio popular&rdquo; y luego entregarlos a la Guardia Nacional. La salida se logra <b>por la mediación de autoridades militares, religiosas y civiles</b>.</p>
<p><span class="tag conf">Nuevo</span> <b>Tu madre y tu padre también estaban en la marcha.</b> La denuncia que Ángel y tú firmaron el 28/01/2019 dice que estaban <i>&ldquo;en compañía de nuestros padres José Emilio Navarro y Zoraida Coa de Navarro&rdquo;</i>, y el anexo de tu madre dice que ella se quedó en la Av. Juncal mientras Ángel y tú seguían a la Catedral. Confírmalo con ella y pregúntale cuándo y cómo se enteró de que estaban encerrados.</p>
<p><b>Lo que escribieron tú y Ángel cinco días después</b> (denuncias del 28/01/2019 ante la Fiscalía y la Defensoría): el ataque fue <b>a las 2:00 p. m.</b>, frente a la Catedral, en la Av. Bolívar; recibieron <b>descargas de perdigones y gas lacrimógeno</b> de &ldquo;colectivos o grupos armados, la mayoría en motocicletas&rdquo; y tuvieron que refugiarse en la iglesia; los religiosos dialogaron con los atacantes para que los dejaran salir; ellos exigían que salieran para someterlos a un <b>&ldquo;juicio popular&rdquo;</b>, castigarlos y entregarlos a la Guardia Nacional. Y dicen: <b>&ldquo;esta situación se prolongó por más de diez horas&rdquo;</b>, permanecieron <b>&ldquo;secuestrados hasta las doce de la noche&rdquo;</b>, cuando <b>por mediación del Obispo ante el general de la Zona de Defensa Integral (ZODI), Ovidio Delgado</b>, y con funcionarios de la Defensoría del Pueblo y los medios presentes, se permitió la salida.</p>
<p><b>Lo que dice la prensa</b> (tenlo presente, no lo contradigas: complétalo): <b>entre 700 y más de 1.000</b> personas dentro; <b>&ldquo;más de tres horas&rdquo;</b> de asedio (liberados hacia las 3:55 p.m. según TalCual); GNB custodiando las puertas y colectivos amenazando afuera; el sacerdote Samael Gamboa negoció la salida. El mismo día, encapuchados quemaron un vehículo y la sede del PSUV; un grupo disparó armas de fuego desde el techo de esa sede contra la marcha; la gobernadora Yelitza Santaella informó <b>62 detenidos y 14 heridos</b> ese día.</p>
<p class="fuente"><a href="https://talcualdigital.com/manifestantes-catedral-de-maturin/">TalCual</a> &middot; <a href="https://www.vidanuevadigital.com/2019/01/24/700-manifestantes-venezolanos-se-resguardaron-por-mas-de-3-horas-en-la-catedral-de-maturin/">Vida Nueva Digital</a> &middot; <a href="https://www.el-carabobeno.com/colectivos-acechan-a-mas-de-un-mil-ciudadanos-dentro-de-la-catedral-de-maturin/">El Carabobeño</a> &middot; <a href="https://elpitazo.net/oriente/suben-a-62-los-detenidos-en-la-protesta-de-maturin/">El Pitazo (25/01/2019)</a> &middot; <a href="https://www.eluniversal.com/venezuela/31262/maturin-salio-a-la-calle-a-protestar-contra-el-gobierno">El Universal</a></p>
<div class="alerta" style="margin-top:8px"><p class="t">Tres versiones de cuánto duró el encierro: el punto más delicado de la Catedral</p>
<p><b>Tu denuncia del 28/01/2019</b> (la más cercana a los hechos) dice <b>más de diez horas, hasta las 12 de la noche</b>. <b>Tu relato</b> dice <b>cinco horas</b>. <b>La prensa</b> dice <b>más de tres horas</b> y que los primeros grupos empezaron a salir hacia las <b>5 p. m.</b> (TalCual reportó liberados hacia las 3:55 p. m.). El oficial tiene los tres papeles. <b>Solo tú y Ángel saben lo que pasó:</b> ¿a qué hora entraron y a qué hora salieron ustedes? Busca la hora en fotos, videos, mensajes, llamadas o el registro del teléfono de ese día y hablen entre ustedes. Si salieron entre los últimos, puede ser que la prensa cuente los primeros grupos; si no, hay que aclarar la denuncia o el relato. <b>No elijas la cifra más impresionante: elige la verdadera</b>, y si no la recuerdas, di &ldquo;fueron muchas horas, no recuerdo la hora exacta de salida&rdquo;, y explica de dónde salió cada cifra escrita.</p>
<p><b>Otras dos cosas.</b> <b>Cifra de personas:</b> no defiendas &ldquo;942&rdquo; como si la hubieras contado; di &ldquo;casi mil, calculamos entre 700 y mil&rdquo;. <b>Quemaron el PSUV:</b> si te preguntan, responde solo lo que sepas y presenciaste (ver pregunta 22).</p></div></div>

<div class="ev yo"><p class="cab">Tú &mdash; después de la Catedral</p>
<p><b class="f">25 de enero de 2019</b> &mdash; llamada con amenaza de muerte explícita: que abandonaran la ciudad o los matarían, recordándoles que &ldquo;meses antes les perdonaron la vida&rdquo; [<span class="tag conf">Confirma</span> está en Ángel y Zoraida, no en tu relato: <b>pregunta a Ángel qué escuchó cada uno</b>].</p>
<p><b class="f">28 de enero de 2019</b> &mdash; tú y Ángel presentan <b>dos denuncias formales</b>: ante la <b>Fiscalía Superior del Ministerio Público del Estado Monagas (Unidad de Atención a la Víctima)</b> y ante la <b>Defensora del Pueblo del Estado Monagas</b> (recibida el 28/01/2019 a las 9:00 a. m.). Se presentan como activistas de la MUD que dan charlas y reuniones públicas; cuentan los <b>mensajes del 18/05/2018</b> de un grupo que se identificó como <b>Tupamaros</b>; el <b>ataque del 09-06-2018</b> con golpes y un disparo, y la frase <i>&ldquo;se lo advertimos, se los dijimos y no nos hicieron caso&rdquo;</i>, con tres testigos con cédula (<b>Antony Alexander Delvalle Ordaz Sánchez, Hilda Fuentes y Keren Ramos</b>); y el ataque del <b>23-01-2019</b>. Cierran diciendo: <b>&ldquo;queremos también responsabilizar a las autoridades policiales, de policía política y militares y a usted directamente de todo lo que pueda ocurrirnos&rdquo;</b>. <span class="tag conf">Ojo</span> no mencionan la llamada del 25/01 ni las llamadas a tu madre, y dicen que la marcha era &ldquo;en apoyo a la entrada de ayuda humanitaria&rdquo; (esa fue la del 23 de febrero).</p>
<p><b class="f">3 de febrero</b> Ángel se gradúa de Abogado (no puede asistir al acto). <b class="f">18 de febrero</b> discutes tu tesis y te gradúas de TSU en Diseño Gráfico (IUTIRLA); <b>tampoco puedes asistir</b>: delegas el título a tus padres. <b class="f">23 de febrero</b> &mdash; tu <b>última actividad política</b>, en la Av. Libertador de Maturín, el día de la ayuda humanitaria (14 muertos en el país). <b class="f">1 de marzo</b> &mdash; Caracas, casa de una prima en El Rosal, días en clandestinidad.</p>
<p><b class="f">28 (o 29) de marzo de 2019</b> &mdash; sales de Venezuela con Ángel hacia Santo Domingo (República Dominicana; <b>6 días</b> de tránsito, sin estatus ni solicitud de protección). <b class="f">2 de abril de 2019</b> &mdash; llegas a Orlando con visa B2 (autorizada hasta el 01/10/2019).</p></div>
<div class="ancla"><b>Frase ancla 2019</b> &ldquo;Nos encerraron muchas horas en una iglesia pidiendo que nos entregaran a la Guardia Nacional. Dos días después llamaron para decir que nos fuéramos o nos mataban. No podíamos ir ni a nuestra graduación.&rdquo;</div>

<!-- ============================================================ -->
<h2 id="s5">5 &middot; Tu familia después de tu salida (2019&ndash;2021): la persecución continuó</h2>

<p class="lede">Esta es la parte que más le pesa al oficial: no te fuiste y todo se apagó. Se prolongó sobre quienes se quedaron.</p>

<div class="ev fam"><p class="cab">Familia</p>
<p><b>Abril de 2019</b> &mdash; grupos armados rondan la casa en Maturín durante una semana, según vecinos, después de que ustedes llegaron a EE.UU.</p>
<p><b class="f">13 de marzo de 2020</b> &mdash; tu padre es agredido en Maturín por 4 sujetos armados vestidos de negro tipo militar, sin identificación, que preguntaban por el paradero de ustedes y amenazaron con irrumpir en la casa a buscar &ldquo;pruebas de conspiración&rdquo; [<span class="tag conf">Confirma</span> del relato de Zoraida].</p>
<p><b class="f">16 de abril de 2021</b> &mdash; encapuchados, grabados por las cámaras de la casa, gritan por &ldquo;<b>Emily y su familia traidora de la patria</b>&rdquo;. Testigos vecinos: <b>Eduardo José Ruiz</b> y <b>Josefa María Noguera</b>. <b class="f">19 de abril de 2021</b> &mdash; tu padre huye de Venezuela (hoy vive contigo en Rockford; A201-393-743).</p>
<p>Detalle importante: gritan por <b>&ldquo;la familia&rdquo;</b>, no por el dinero. Es la prueba de que el interés es político y de que <b>el apellido está marcado</b>. Además, <b>Emily</b> tiene su propio caso, aparte del tuyo.</p></div>

<div class="ev yo"><p class="cab">Tú &mdash; en Estados Unidos, solo los hitos del asilo</p>
<p><b class="f">5 de diciembre de 2019</b> &mdash; firmas el I-589 (8 meses después de llegar: <b>dentro del plazo de un año</b>). <b class="f">20 de agosto de 2020</b> &mdash; I-765 (permiso de trabajo, categoría C08, asilo pendiente). Tus antecedentes penales de 2021 y la negación del TPS (14/02/2024) van en la sección 9, bloque J.</p></div>

<!-- ============================================================ -->
<h2 id="s5b">5b &middot; La familia cruzada: quién, qué, cuándo y qué papel lo prueba</h2>

<p class="lede">Esta tabla une en una sola línea a tu familia y al país, con el documento que respalda cada hecho. Es lo que el oficial hace con los cuatro expedientes: cruzarlos. <b>Verde = probado por un documento firmado o sellado.</b> Donde solo hay relato, dice &ldquo;relato&rdquo;.</p>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>El país</th><th>La familia</th><th>Qué lo prueba</th></tr>
<tr><td class="f">2013&ndash;2014</td><td>Muere Chávez (5/03/2013); Maduro gana por estrecho margen. 12/02/2014: marchas y muertos; López preso.</td><td>Emily, activa en Voluntad Popular desde 2013. Ángel (16 años) y tú (17) se hacen activistas.</td><td>Constancia VP de Emily (8/11/2019); relatos de Ángel y tuyo.</td></tr>
<tr><td class="f">Ene&ndash;feb 2016</td><td>La oposición gana la Asamblea (dic. 2015); recolecta firmas del revocatorio.</td><td>Ángel entra a la MUD (enero). <b>12/02/2016:</b> VP los certifica a Ángel y a ti.</td><td><b>Constancias de Voluntad Popular</b> (códigos 111124412 y 111124225); carta de Soraya Hernández de Ciano (Ángel, 23/09/2019).</td></tr>
<tr><td class="f">21/04/2016</td><td>Redadas y allanamientos masivos (OLP desde 2015).</td><td><b>Allanamiento de la casa; Emily detenida hasta la noche.</b></td><td>Relato y declaraciones de Zoraida (relato).</td></tr>
<tr><td class="f">Oct 2016</td><td>20/10: el CNE suspende el revocatorio. 24/10: en Maturín detienen a Carlos Báez (VP).</td><td>Ángel participa en la validación de firmas.</td><td>Carta de Soraya Hernández de Ciano; Efecto Cocuyo (Báez).</td></tr>
<tr><td class="f">Mar&ndash;jul 2017</td><td>Renovación de partidos (marzo); 19/04 &ldquo;Madre de todas las marchas&rdquo;; 16/07 consulta popular; 30/07 Constituyente.</td><td>Ángel: 7 plantones en Tipuro y marcha del 19/04; ambos, renovación de partidos y apoyos para las primarias de Monagas. 13/05: Emily herida en la Av. Bolívar.</td><td>Carta de Soraya Hernández de Ciano; relatos de Ángel y tuyo; declaración de Zoraida por Emily (relato).</td></tr>
<tr><td class="f">10/09 y 15/10/2017</td><td>Primarias de la MUD y elecciones de gobernadores.</td><td>Apoyo a la recolección para las primarias de la MUD a la gobernación de Monagas.</td><td>Carta de Soraya Hernández de Ciano; tu relato.</td></tr>
<tr><td class="f">Mar 2018</td><td>Continúa la represión; 15/01 masacre de El Junquito.</td><td>Emily huye de Venezuela.</td><td>Declaración de Zoraida por Emily (relato).</td></tr>
<tr><td class="f">18/05/2018</td><td>&mdash;</td><td><b>Mensajes de un colectivo aliado a los Tupamaros</b> a Ángel: sabían universidad, casa, carro y lugares.</td><td><b>Denuncias del 28/01/2019</b> (Fiscalía y Defensoría); relato de Ángel.</td></tr>
<tr><td class="f"><b>9/06/2018</b></td><td>Los colectivos actúan como fuerza del Estado, según la ONU.</td><td><b>El ataque en La Floresta:</b> carro, cuatro teléfonos, cédulas; golpes; disparo; &ldquo;se los dijimos y no pararon&rdquo;. Testigos: Antony Delvalle Ordaz Sánchez, Hilda Fuentes, Keren Ramos.</td><td><b>Denuncia CICPC K-18-0074-02562</b> (11/06/2018); <b>denuncias del 28/01/2019</b>; relatos de Ángel, tuyo y de Zoraida.</td></tr>
<tr><td class="f">Jun&ndash;jul 2018</td><td>&mdash;</td><td>Llamadas a Zoraida; ella apaga el teléfono más de un mes. Ocho semanas en Puerto La Cruz.</td><td>Relato de Ángel; declaraciones de Zoraida (relato).</td></tr>
<tr><td class="f">Dic 2018</td><td>&mdash;</td><td>Los padres les aconsejan bajar el perfil.</td><td>Carta de Zoraida a USCIS.</td></tr>
<tr><td class="f"><b>23/01/2019</b></td><td>Guaidó se proclama presidente encargado; al menos 13 muertos en el país; marcha de Maturín, 62 detenidos y 14 heridos según la gobernadora.</td><td><b>La Catedral.</b> Ángel y tú, cercados por colectivos y la GNB; <b>tus padres también estaban en la marcha</b>.</td><td><b>Denuncias del 28/01/2019</b> (mencionan a ambos padres); prensa (TalCual, Vida Nueva, El Pitazo); anexo de Zoraida.</td></tr>
<tr><td class="f">25/01/2019</td><td>&mdash;</td><td>Llamada a Zoraida: irse de la ciudad o los matan.</td><td>Relatos de Ángel y Zoraida (relato; <b>no está</b> en las denuncias del 28/01).</td></tr>
<tr><td class="f"><b>28/01/2019</b></td><td>&mdash;</td><td><b>Ángel y tú denuncian ante la Fiscalía y la Defensoría</b> y responsabilizan a las autoridades.</td><td><b>Denuncias con sello de recibido</b> (Defensoría: 28/01/2019, 9:00 a. m.).</td></tr>
<tr><td class="f">Feb 2019</td><td>23/02: ayuda humanitaria, 14 muertos y 285 heridos.</td><td>3/02 Ángel se gradúa; 18/02 tú; 23/02 última actividad en la Av. Libertador.</td><td>Carta de Soraya Hernández de Ciano (menciona 23/01 y 23/02); relatos.</td></tr>
<tr><td class="f">28&ndash;29/03/2019</td><td>Los vuelos directos a EE.UU. estaban suspendidos.</td><td>Ángel y tú salen hacia Santo Domingo; 6 días de tránsito; llegan a Orlando el 2/04.</td><td>Pasaportes, boletos, I-94 (verificar); relatos de Ángel y tuyo.</td></tr>
<tr><td class="f">Abr 2019&ndash;2021</td><td>La persecución continúa sobre los que se quedaron.</td><td>Abril 2019: rondas en la casa. 14/12/2019: Zoraida llega a EE.UU. 13/03/2020: agreden a tu padre. 16/04/2021: encapuchados; 19/04/2021: tu padre huye.</td><td>Relato y anexo de Zoraida; video de cámaras (falta); vecinos Eduardo José Ruiz y Josefa María Noguera.</td></tr>
<tr><td class="f">Nov 2019</td><td>&mdash;</td><td><b>VP certifica a Ángel y a ti (8/11/2019)</b>; carta de Soraya (23/09/2019).</td><td><b>Constancias firmadas</b> por Luis Humberto Zamora Rojas (C.I. 11.779.677), coordinador de organización de VP Monagas.</td></tr>
<tr><td class="f">2026</td><td>3/01: captura de Maduro. 16/09: la ONU dice que el aparato represivo sigue &ldquo;intacto&rdquo;.</td><td>Ninguno de ustedes puede volver.</td><td>Informe de la Misión de la ONU (Emol, El Nacional, Foro Penal).</td></tr>
</table>
</div>

<div class="bien">
  <p class="t">Lo que te da más fuerza, por primera vez con documentos originales</p>
  <ul style="margin:0">
    <li><b>Tres denuncias oficiales</b> hechas en el momento (11/06/2018 y 28/01/2019), no armadas después para el asilo. Las de enero de 2019 están selladas por dos instituciones y cuentan la misma historia que tu relato.</li>
    <li><b>La fecha del ataque</b> ya no es un problema: 9 de junio, en los tres papeles oficiales.</li>
    <li><b>Los nombres y cédulas de tres testigos</b> del ataque, escritos en un documento que tú firmaste.</li>
    <li><b>Tus padres, presentes en la marcha</b> del 23 de enero, según ese mismo documento: corrobora el anexo de tu madre.</li>
    <li><b>La frase &ldquo;queremos responsabilizar a las autoridades policiales, de policía política y militares&rdquo;</b>, escrita cinco días después de la Catedral, responde por sí sola a &ldquo;¿por qué no pidió protección?&rdquo;: la pidió, formalmente.</li>
  </ul>
</div>

<!-- ============================================================ -->
<h2 id="s6">6 &middot; Víctimas, heridos y detenidos documentados</h2>

<p class="lede">Casos con nombre, fecha y lugar que puedes citar si te preguntan &ldquo;¿cómo sé que esto es real?&rdquo; o &ldquo;¿hay otros como usted?&rdquo;. Todos tienen fuente pública.</p>

<h3>Fallecidos</h3>
<div class="scroll">
<table>
<tr><th>Fecha</th><th>Víctima</th><th>Qué pasó</th><th>Responsables / fuente</th></tr>
<tr><td class="f">12/02/2014</td><td><b>Bassil Da Costa</b></td><td>Disparo en la cabeza en marcha estudiantil, Caracas. El primer muerto de las protestas de 2014.</td><td>Fuerzas de seguridad y armados afines. <a href="https://en.wikipedia.org/wiki/La_Salida">La Salida</a></td></tr>
<tr><td class="f">18&ndash;19/02/2014</td><td><b>Génesis Carmona</b></td><td>Estudiante y reina de belleza baleada en una protesta en Valencia; muere al día siguiente.</td><td>Civiles armados afines al gobierno. <a href="https://en.wikipedia.org/wiki/2014_Venezuelan_protests">2014</a></td></tr>
<tr><td class="f">11/04/2017</td><td><b>Miguel Ángel Colmenárez</b> (36) y <b>Brayan Principal</b> (14)</td><td>Barquisimeto: el primero, baleado por colectivos encapuchados llegados en taxis y una camioneta oficial; el segundo, baleado durante un ataque a barricadas, muere al día siguiente.</td><td>Colectivos. <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea</a></td></tr>
<tr><td class="f">19/04/2017</td><td><b>Paola Ramírez</b> (23) y <b>Carlos Moreno Barón</b> (17)</td><td>San Cristóbal: Paola, perseguida y baleada por unos 50 motorizados. Caracas: Carlos, atacado por una docena del Frente 5 de Marzo; la policía se retiró minutos antes.</td><td>Colectivos. <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea</a></td></tr>
<tr><td class="f">26/04/2017</td><td><b>Juan Pablo Pernalete</b> (20)</td><td>Estudiante de la Unimet, muerto por impacto de bomba lacrimógena en el pecho, Altamira. El Ministerio Público confirmó que fue una lacrimógena de la GNB.</td><td>GNB. <a href="https://elestimulo.com/venezuela/2017-05-24/juan-pernalete-murio-por-impacto-de-una-bomba-lacrimogena-asegura-fiscal/">El Estímulo</a></td></tr>
<tr><td class="f">7/06/2017</td><td><b>Neomar Lander</b> (17)</td><td>Impacto en el pecho durante una protesta en Chacao. La causa exacta está en disputa (versiones de bomba lacrimógena vs. artefacto artesanal). Úsalo con cautela.</td><td><a href="https://en.wikipedia.org/wiki/Neomar_Lander">Wikipedia</a></td></tr>
<tr><td class="f">20/05 &rarr; 4/06/2017</td><td><b>Orlando Figuera</b> (22)</td><td>Quemado y apuñalado durante una protesta en Altamira. Es víctima del <i>otro</i> lado: menciónalo tú si hace falta, para demostrar que no te callas hechos incómodos.</td><td><a href="https://runrun.es/rr-es-plus/345513/orlando-figuera-la-victima-chavista-de-las-protestas-de-2017-que-aun-no-tiene-justicia/">Runrun.es</a></td></tr>
<tr><td class="f">15/01/2018</td><td><b>Óscar Pérez</b> y 6 más</td><td>Masacre de El Junquito: ejecutados en una operación de más de 500 efectivos y colectivos.</td><td>FAES, GNB, DGCIM, SEBIN, colectivos. <a href="https://www.ntn24.com/noticias-actualidad/caso-oscar-perez-la-masacre-de-el-junquito-84141">NTN24</a></td></tr>
<tr><td class="f">8/10/2018</td><td><b>Fernando Albán</b></td><td>Concejal opositor; muere bajo custodia del SEBIN tres días después de su detención.</td><td>SEBIN. <a href="https://en.wikipedia.org/wiki/Fernando_Alb%C3%A1n">Wikipedia</a></td></tr>
<tr><td class="f">21/01/2019</td><td>Mujer no identificada (Cotiza)</td><td>Colectivos la matan sin que ella estuviera protestando; cinco heridos más.</td><td>Colectivos. <a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">2019</a></td></tr>
<tr><td class="f">23/01/2019</td><td><b>Al menos 13 personas</b>; <b>5 jóvenes</b> (Cofavic)</td><td>Día nacional de protesta, el mismo de tu Catedral. Cofavic documentó cinco jóvenes asesinados por fuerzas especiales.</td><td><a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">2019</a></td></tr>
<tr><td class="f">23/02/2019</td><td><b>14 muertos, 285 heridos</b></td><td>Ayuda humanitaria en fronteras: el día de tu última actividad en Maturín.</td><td><a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">2019</a></td></tr>
<tr><td class="f">30/04/2019</td><td>Adolescente de <b>14 años</b>; al menos 4 muertos</td><td>Baleado en la cabeza, presuntamente por colectivos, en Caracas.</td><td><a href="https://www.hrw.org/es/news/2019/05/03/venezuela-violenta-respuesta-las-manifestaciones">HRW</a></td></tr>
<tr><td class="f">6/2019</td><td><b>Capitán Rafael Acosta Arévalo</b></td><td>Muere bajo custodia militar con signos visibles de tortura.</td><td>DGCIM. <a href="https://www.proceso.com.mx/internacional/2019/6/30/muerte-de-capitan-torturado-en-carcel-militar-sacude-al-gobierno-de-nicolas-maduro-227173.html">Proceso</a></td></tr>
</table>
</div>

<h3>Heridos y mutilados</h3>
<ul>
<li><b>Rufo Chacón</b> (16 años): quedó <b>ciego</b> por más de 52 perdigones a quemarropa el <b class="f">2/07/2019</b>, La Fría, Táchira.</li>
<li>2014: <b>486 heridos</b> (cifra oficial). 2017: <b>más de 15.000 heridos</b>. Febrero 2019: <b>más de 500 heridos</b>.</li>
</ul>

<h3>Detenciones arbitrarias, tortura y presos políticos</h3>
<div class="scroll">
<table>
<tr><th>Año</th><th>Cifra</th><th>Fuente</th></tr>
<tr><td class="f">2014</td><td><b>3.127 detenciones arbitrarias</b> (feb&ndash;may), 33 casos de tortura.</td><td>Foro Penal</td></tr>
<tr><td class="f">2017</td><td><b>4.848&ndash;5.092 detenidos</b>; ~1.325 aún presos a inicios de agosto. Civiles juzgados por tribunales militares. Golpes, gases y maltrato documentados.</td><td>Foro Penal, ONU-DDHH, HRW</td></tr>
<tr><td class="f">2019</td><td><b>956 arrestos, 77 menores</b> (feb); <b>793 privados de libertad arbitrariamente</b> (31/05).</td><td>Foro Penal, ONU-DDHH</td></tr>
<tr><td class="f">2020</td><td>La Misión de la ONU investigó <b>223 casos</b> y revisó 2.891 más: <b>crímenes de lesa humanidad</b> desde 2014.</td><td><a href="https://www.hrw.org/es/news/2020/09/17/venezuela-investigacion-de-la-onu-concluye-que-se-cometieron-crimenes-de-lesa">HRW / ONU, 17/09/2020</a></td></tr>
</table>
</div>

<h3>Caso paralelo en tu ciudad</h3>
<div class="bien"><p class="t">Monagas: ellos también fueron tratados como enemigos</p>
<p><b>Carlos Báez</b> (activista juvenil de VP, <b class="f">24/10/2016</b>) &middot; <b>Yoel Bellorín</b> (<b class="f">19/04/2017</b>) &middot; <b>Hernán Vizcarrondo</b> (<b class="f">5/06/2017</b>) &middot; <b>Génesis Tirado y Humberto Marquina</b> (<b class="f">20/07/2017</b>, jurisdicción militar) &middot; <b>62 detenidos y 14 heridos</b> el <b class="f">23/01/2019</b> en Maturín, según la propia gobernadora. Ninguno era un dirigente nacional: eran gente como tú.</p></div>

<!-- ============================================================ -->
<h2 id="s7">7 &middot; Venezuela en 2026: por qué no puedes volver</h2>

<p class="lede">El oficial sabe que Maduro ya no está. Tienes que anticipar la pregunta y responder con hechos de <b>2026</b>, no de 2018. <b>Antes del 1 de octubre, busca las noticias de la última semana</b> y actualiza estas cifras: la situación cambia rápido.</p>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>Hecho</th></tr>
<tr><td class="f">3 de enero de 2026</td><td>Captura de Maduro en una operación militar de EE.UU. (&ldquo;Absolute Resolve&rdquo;). Asume <b>Delcy Rodríguez</b>, vicepresidenta de Maduro; su hermano <b>Jorge Rodríguez</b> dirige la Asamblea; <b>Diosdado Cabello</b>, señalado por la ONU como coordinador de colectivos, seguía a cargo del Interior en los reportes de la primavera (verifica).</td></tr>
<tr><td class="f">8 de enero de 2026</td><td>Empiezan las excarcelaciones de presos políticos.</td></tr>
<tr><td class="f">19 de febrero de 2026</td><td>Ley de Amnistía (casos políticos desde 1999): excluye homicidio, narcotráfico, corrupción y violaciones de derechos humanos; hay que solicitarla por abogado; no restituye bienes ni levanta inhabilitaciones. Los liberados no pueden hablar en público y deben presentarse ante el tribunal cada mes.</td></tr>
<tr><td class="f">Feb&ndash;mar 2026</td><td>Foro Penal (24/02): <b>más de 573 presos políticos</b> aún, pese a 436 liberaciones. La Misión de la ONU documenta <b>87 detenciones por motivos políticos</b> desde el 3 de enero: &ldquo;puerta giratoria&rdquo;.</td></tr>
<tr><td class="f">Ene 2026 en adelante</td><td>Los colectivos hacen &ldquo;repliegue táctico&rdquo; y pasan a patrullajes disimulados e intimidación focalizada; hay reportes de grupos armados que cortan carreteras y registran vehículos buscando pruebas de ciudadanía o apoyo a EE.UU.</td></tr>
<tr><td class="f">Agosto de 2026</td><td>Delcy Rodríguez anuncia 131 excarcelaciones más tras la primera ronda de negociaciones con la oposición.</td></tr>
<tr><td class="f">16 de septiembre de 2026</td><td><b>La Misión de la ONU: el aparato represivo sigue &ldquo;intacto&rdquo;.</b> Leyes que criminalizan la disidencia siguen vigentes; servicios de inteligencia y cuerpos de seguridad con su estructura original; <b>colectivos activos como fuente de intimidación</b>; <b>19 funcionarios</b> señalados por violaciones aún en cargos relevantes; <b>64 casos de tortura nuevos</b> desde el 3 de enero; <b>214 detenciones políticas arbitrarias</b> en 12 meses; entre 300 y 500 presos políticos.</td></tr>
</table>
</div>
<p class="fuente">Fuentes: <a href="https://www.emol.com/noticias/Nacional/2026/09/16/1211609/onu-represion-venezuela-captura-maduro.html">Emol (ONU, 16/09/2026)</a> &middot; <a href="https://www.elnacional.com/investigacion/2026/09/onu-informe-colectivos-represion-estado-venezuela-2026/">El Nacional (colectivos, ONU 2026)</a> &middot; <a href="https://foropenal.com/articulo/situation-of-political-prisoners-in-venezuela-january-february-2026">Foro Penal</a> &middot; <a href="https://en.wikipedia.org/wiki/2026_political_prisoner_release_in_Venezuela">Liberaciones 2026</a> &middot; <a href="https://www.infobae.com/venezuela/2026/08/14/delcy-rodriguez-anuncio-la-excarcelacion-de-131-presos-politicos-tras-la-primera-ronda-de-negociaciones-con-la-oposicion/">Infobae, agosto 2026</a> &middot; <a href="https://insightcrime.org/news/the-colectivos-role-in-the-struggle-for-power-in-post-maduro-venezuela/">InSight Crime: colectivos</a> &middot; <a href="https://www.infobae.com/venezuela/2026/01/11/eeuu-alerto-que-colectivos-chavistas-armados-estan-buscando-ciudadanos-norteamericanos-en-venezuela-tras-la-captura-de-maduro/">Infobae, enero 2026</a></p>

<h3>Los seis argumentos de tu &ldquo;no puedo volver&rdquo;</h3>
<div class="card">
<ol style="margin:0">
<li><b>Estoy identificado, con nombre y documentos.</b> Mi militancia consta por escrito (constancia de VP del <b class="f">8/11/2019</b>, cédula V-25.503.374, código 111124225). Los atacantes se llevaron mi cédula y las de mi hermano el <b class="f">9/06/2018</b>: tienen nuestros nombres y direcciones.</li>
<li><b>Sabían todo de mí antes del ataque</b>: universidad, casa, carro y los lugares que frecuentaba (mensajes del <b class="f">18/05/2018</b>).</li>
<li><b>Ya lo intentaron y cumplieron la amenaza</b>: nos dispararon y nos llamaron &ldquo;golpistas&rdquo;. Luego nos cercaron en la Catedral y pidieron entregarnos a la GNB.</li>
<li><b>Me busca una persecución que siguió después de irme</b>: la ronda de abril de 2019, mi padre agredido el <b class="f">13/03/2020</b>, los encapuchados del <b class="f">16/04/2021</b> y su huida el <b class="f">19/04/2021</b>.</li>
<li><b>No hay otra parte del país donde estar seguro</b>: probamos tres lugares (Los Guaritos, Barcelona, Caracas) y las amenazas nos siguieron; los grupos &ldquo;se encuentran y comunican en todo el país&rdquo; (Ángel).</li>
<li><b>Los responsables siguen ahí</b>: la ONU (septiembre de 2026) dice que el aparato represivo está intacto y que los colectivos siguen intimidando. Una amnistía no desarma a un colectivo, y los liberados siguen siendo vigilados.</li>
</ol>
</div>

<div class="aviso">
  <p class="t">Cuidado con dos exageraciones que te pueden costar la credibilidad</p>
  <p><b>No digas</b> &ldquo;el gobierno tiene una lista con mi nombre&rdquo; ni &ldquo;hay una orden de captura contra mí&rdquo;: no lo sabes y no hay ningún documento. Di lo que sí consta: <b>estoy identificado</b> (constancia, cédula robada, mensajes con mis datos) y <b>me buscaron a mí y a mi familia</b>. Y no afirmes que a todo el que regresa de EE.UU. lo detienen: di que <b>hay reportes de colectivos que registran vehículos buscando apoyo a EE.UU.</b> y que tú tienes 7 años allá y un caso de asilo.</p>
</div>

<!-- ============================================================ -->
<h2 id="s8">8 &middot; Cifras para memorizar</h2>

<div class="cifras">
  <div><b>43</b><span>muertos en las protestas de 2014</span></div>
  <div><b>3.127</b><span>detenciones arbitrarias en 2014 (Foro Penal)</span></div>
  <div><b>28 / 523</b><span>muertes de civiles armados y protestas con colectivos presentes, 2017 (Provea)</span></div>
  <div><b>~5.000</b><span>detenidos en las protestas de 2017 (Foro Penal: 5.092)</span></div>
  <div><b>5.287</b><span>muertes &ldquo;por resistencia a la autoridad&rdquo; en 2018 (ONU)</span></div>
  <div><b>956 / 77</b><span>arrestos y menores, enero&ndash;febrero de 2019</span></div>
  <div><b>66 / 52</b><span>muertos en protestas ene&ndash;may 2019 / atribuibles a fuerzas de seguridad (ONU)</span></div>
  <div><b>~6.800</b><span>ejecuciones extrajudiciales, ene 2018&ndash;may 2019 (ONU)</span></div>
  <div><b>62 / 14</b><span>detenidos y heridos en Maturín el 23/01/2019 (gobernadora)</span></div>
  <div><b>64 / 214</b><span>casos de tortura y detenciones políticas desde el 3/01/2026 (ONU, sep 2026)</span></div>
</div>

<!-- ============================================================ -->
<h2 id="s9">9 &middot; Panel de preguntas y respuestas</h2>

<div class="nuevo">
  <p class="t">De dónde salieron estas preguntas</p>
  <p>El oficial sigue un orden: <b>identidad y biografía &rarr; qué te pasó, quién, por qué (opinión política) &rarr; ruta de viaje y fecha de entrada (plazo de un año) &rarr; a quién temes y qué pasaría si vuelves &rarr; reubicación interna &rarr; cambios en el país &rarr; antecedentes penales y causales de exclusión</b>, y prueba tu credibilidad repitiendo lo mismo de otras maneras. Fuentes: <a href="https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum/preparing-for-your-affirmative-asylum-interview">USCIS (preparación de la entrevista afirmativa)</a> &middot; <a href="https://shorelineimmigration.com/asylum/asylum-interview-sample-questions/">Shoreline Immigration (preguntas de muestra)</a> &middot; <a href="https://www.claxtonlawgroup.com/asylum/asylum-interview-preparation/">Claxton Law (cómo se evalúa la credibilidad)</a> &middot; <a href="https://www.youtube.com/watch?v=g6FFCiqRiA0">YouTube: simulacro de entrevista con un ex oficial de asilo</a> &middot; <a href="https://www.lanacion.com.ar/estados-unidos/migraciones/es-venezolano-entro-a-eeuu-y-conto-que-le-preguntaron-en-su-entrevista-de-miedo-creible-hay-que-ir-nid22042024/">La Nación: lo que le preguntaron a un venezolano</a>.</p>
  <p style="margin:0">La entrevista dura <b>al menos una hora</b>, es <b>confidencial</b>, la decisión <b>no se da ese día</b>, y tienes que llevar <b>tu propio intérprete</b> (mayor de 18, que no sea tu abogado ni testigo).</p>
</div>

<div class="barra">
  <button class="btn" id="modoEstudio" type="button">Modo estudio: tapar respuestas</button>
  <button class="btn sec" id="abrirTodas" type="button">Mostrar todas</button>
  <span>Cada pregunta tiene una <b>respuesta corta</b> (lo que dices primero) y una <b>completa</b> (si te piden más). Responde en frases cortas y haz pausas para el intérprete.</span>
</div>

<!-- ---------------- A ---------------- -->
<p class="bloque">A &mdash; Apertura y biografía</p>

<div class="q"><p class="pregunta">1. ¿Por qué pide asilo? ¿Por qué no puede volver a Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Porque fui activista de oposición en Maturín, me atacaron colectivos armados, amenazaron de muerte a mi familia y a mí, y si vuelvo esos mismos grupos y los cuerpos del gobierno saben quién soy y dónde vive mi familia.</p>
<span class="lbl">Completa</span><p class="larga">Fui activista de Voluntad Popular y de la MUD desde 2016. El 9 de junio de 2018, al salir de una reunión de mi organización, unos motorizados nos interceptaron, nos robaron el carro, los celulares y las cédulas, nos golpearon y dispararon. Dijeron: &ldquo;se los dijimos y no pararon&rdquo;. Después amenazaron a mi madre por teléfono. El 23 de enero de 2019 quedé encerrado en la Catedral de Maturín con casi mil personas mientras encapuchados armados y la Guardia Nacional pedían entregarnos. Nos escondimos en tres sitios y las amenazas siguieron. Salí el 28 de marzo de 2019 y mi familia siguió siendo buscada hasta que mi papá huyó en 2021. Hoy los colectivos siguen activos, según la ONU.</p>
</div></div>

<div class="q"><p class="pregunta">2. Cuénteme de usted: datos personales, educación, trabajo, familia.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Rafael Emilio Navarro Coa, nací el 30 de abril de 1996 en Maturín, Monagas. Soy Técnico Superior en Diseño Gráfico por IUTIRLA. Mis padres y mis hermanos Emily y Ángel están en Estados Unidos.</p>
<span class="lbl">Completa</span><p class="larga">Estudié primaria y secundaria en la Escuela Hogar Católica &ldquo;Virgen Misionera de la Esperanza&rdquo; y me gradué de bachiller en Ciencias y Tecnología. Entré a IUTIRLA en [<span class="tag conf">Confirma</span> 2016 según mi relato; el formulario dice 09/2017] y me gradué el 18 de febrero de 2019. Mi padre, José Emilio, es licenciado en Administración; mi madre, Zoraida, es profesora con maestría, jubilada. Emily nació en 1993 y Ángel en 1997. Hoy vivo en Rockford, Illinois, y trabajo [<span class="tag conf">Confirma</span> tu empleo actual].</p>
<p class="nota">El formulario dice bachillerato en 07/2012 e IUTIRLA en 09/2017, con empleo &ldquo;NONE&rdquo;: prepara qué hiciste entre 2012 y 2016/2017.</p>
</div></div>

<div class="q"><p class="pregunta">3. ¿Dónde vivió en Venezuela? ¿Y en Estados Unidos?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">En Maturín toda mi vida. En Estados Unidos: Orlando, dos direcciones en Tampa y ahora Rockford, Illinois.</p>
<span class="lbl">Completa</span><p class="larga">En Venezuela: Urb. Palma Real, Conjunto Río Claro, Casa 54, Sector Tipuro, Maturín (el formulario dice &ldquo;desde 01/2000&rdquo;, hasta 03/2019). En Estados Unidos: 3712 Castle Pines Ln, Orlando (abril de 2019); 15501 Bruce B Downs Blvd, Apt. 2204, Tampa (junio de 2020); 8660 Tessara Ln, Tampa; y desde 2024, 1068 McKnight Cir, Rockford, IL 61107 [<span class="tag conf">Confirma</span> si es 1068 o 1668; tu W-2 dice 1668].</p></div></div>

<div class="q"><p class="pregunta">4. ¿Qué familiares tiene y dónde están? ¿Han pedido asilo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Mis padres y mis dos hermanos están en Estados Unidos, y todos tenemos trámites migratorios: mi mamá y mi hermano Ángel piden asilo, mi hermana Emily tiene su propio caso y mi papá tiene una solicitud de TPS.</p>
<span class="lbl">Completa</span><p class="larga">Mi hermano Ángel vino conmigo el 28 o 29 de marzo de 2019. Mi mamá llegó a Orlando en diciembre de 2019 y pidió asilo el 24 de agosto de 2020. Mi papá salió de Venezuela el 19 de abril de 2021 y vive conmigo. Emily tiene un caso separado. <b>Mi I-589 de 2019 dice que ningún familiar había pedido asilo; eso hay que corregirlo al empezar (sección 10).</b></p></div></div>

<!-- ---------------- B ---------------- -->
<p class="bloque">B &mdash; Actividad política</p>

<div class="q"><p class="pregunta">5. ¿A qué organización pertenecía? ¿Desde cuándo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">A la MUD desde 2016 y a Voluntad Popular, que era uno de sus partidos. Mi constancia de Voluntad Popular me acredita como activista desde el 12 de febrero de 2016.</p>
<span class="lbl">Completa</span><p class="larga">Empecé en 2015 en el equipo juvenil de apoyo a los movimientos estudiantiles y en las marchas. En 2016 me incorporé a la MUD, la coalición de Voluntad Popular, Primero Justicia, Acción Democrática y otros partidos. Mi constancia de Voluntad Popular, firmada por el coordinador de organización del partido en Monagas, dice que soy miembro activista con código 111124225. Mi hermano Ángel y mi hermana Emily también tienen constancia.</p></div></div>

<div class="q"><p class="pregunta">6. ¿Qué hacía exactamente? ¿Tenía algún cargo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No tenía un cargo formal. Era activista de base: marchas, asambleas de ciudadanos y visitas casa por casa, y ayudé a organizar jóvenes universitarios.</p>
<span class="lbl">Completa</span><p class="larga">Participé en marchas y concentraciones, en asambleas de ciudadanos y en jornadas casa por casa donde explicábamos los derechos y deberes de la Constitución. Fui activador de la validación de firmas del referendo revocatorio de 2016; en 2017 apoyé la renovación de los partidos y la recolección para las primarias de la MUD a la gobernación de Monagas. Con Ángel organizamos a jóvenes de varias universidades. La constancia me ubica en el equipo de organización de jornadas de activismo y movilización juvenil.</p></div></div>

<div class="q"><p class="pregunta">7. Si era un activista de base, ¿por qué el gobierno o los colectivos irían tras usted?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Porque persiguen a activistas de base, no solo a dirigentes. Un joven de mi partido en Maturín fue detenido en 2016 por colgar una pancarta, y a nosotros nos atacaron con nuestro nombre, nuestra universidad y nuestro carro.</p>
<span class="lbl">Completa</span><p class="larga">A mí me atacaron sabiendo dónde estudiaba, dónde vivía y qué carro usaba; me llamaron &ldquo;golpistas&rdquo; y dijeron que ya me habían advertido. Eso no es un robo al azar. Y en Monagas hay casos públicos: Carlos Báez, activista juvenil de Voluntad Popular, fue detenido en Maturín el 24 de octubre de 2016 por colocar una pancarta del revocatorio; en 2017 detuvieron a un profesor universitario, a un señor de 70 años y a dos jóvenes que protestaban en la Av. Libertador, y a esos dos los procesaron en tribunales militares.</p></div></div>

<div class="q"><p class="pregunta">8. ¿A qué marchas fue? ¿Cuál fue la última actividad política que hizo en Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">A marchas desde 2015, entre ellas la del 23 de enero de 2019 en Maturín. Mi última actividad fue el 23 de febrero de 2019 en la Av. Libertador, el día de la ayuda humanitaria.</p>
<span class="lbl">Completa</span><p class="larga">Marché con los estudiantes en 2015, en 2016 con la MUD, y en 2017 y 2018 en las marchas por la liberación de los presos políticos. La más importante para mí fue la del 23 de enero de 2019. [<span class="tag conf">Confirma</span> nombra dos o tres marchas más con fecha y lugar, <b>solo si de verdad estuviste</b>.]</p>
<p class="nota">Tu relato solo nombra con fecha el 23/01/2019 y el 23/02/2019. No enumeres marchas que no recuerdes con certeza.</p></div></div>

<div class="q"><p class="pregunta">9. ¿Ha participado alguna vez en actos violentos, o ha hecho daño a alguien por su opinión política?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No. Mis actividades fueron marchas pacíficas, asambleas y trabajo de puerta en puerta.</p>
<span class="lbl">Completa</span><p class="larga">Nunca he usado armas ni he causado daño a nadie por su opinión política. En la marcha del 23 de enero de 2019, todo iba en paz hasta que llegaron los encapuchados armados y la Guardia Nacional.</p>
<p class="nota">Solo contesta esto si es verdad. Es la pregunta de exclusión estándar; tu I-589 ya dice NO.</p></div></div>

<div class="q"><p class="pregunta">10. ¿Sigue haciendo actividad política desde Estados Unidos?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Mi opinión política sigue siendo la misma y mi familia sigue en riesgo; [<span class="tag conf">Confirma</span> no he participado en marchas en Venezuela desde que salí, y aquí <b>describe con verdad lo que hagas</b>].</p>
<p class="nota">Tu I-589 marcó SÍ a &ldquo;continúa participando&rdquo;, pero no hay actividad documentada en EE.UU. Si te la preguntan, explica qué entendiste por esa pregunta. Con tu abogada decide si se corrige.</p></div></div>

<!-- ---------------- C ---------------- -->
<p class="bloque">C &mdash; El ataque de junio de 2018</p>

<div class="q"><p class="pregunta">11. Cuénteme desde el principio qué pasó ese día.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Salíamos de una reunión de mi organización en La Floresta y unos motorizados nos interceptaron, nos robaron el carro, los teléfonos y las cédulas, nos golpearon y dispararon.</p>
<span class="lbl">Completa</span><p class="larga">Estábamos en una reunión política y de amistad en la urbanización La Floresta con compañeros de nuestra organización: mi hermano Ángel, Hilda Fuentes, Antony Ordaz, Keren Ramos y yo. Íbamos a llevar a dos compañeras a su casa en el SpaceFox negro de mi papá. Dos pares de motorizados nos interceptaron. Nos quitaron el carro, los celulares y las billeteras con nuestras cédulas. A mi hermano lo golpearon en la cabeza con el cañón de un arma; a mí me dieron un puñetazo en la cara. Forcejeé con uno para que no agredieran a las muchachas y hubo un disparo de amedrentamiento que casi me quita la vida. Lo primero que dijeron fue &ldquo;se los dijimos y no pararon&rdquo;. Nos llamaron golpistas y nos advirtieron que nos matarían.</p>
<p class="nota"><b>La fecha es el 9 de junio:</b> consta en la denuncia de Ángel ante el CICPC (09-06-2018) y en la denuncia de ambos del 28/01/2019 (09-06-2018), además de tu relato. Ángel escribió &ldquo;viernes 8&rdquo; en su relato; si el oficial lo señala, di que los documentos que presentaron ante las autoridades dicen 9. El lugar: la avenida principal de La Floresta, dos cuadras después de la panadería Fiorpan. Y no llames &ldquo;parrillada&rdquo; a la reunión: fue una reunión de tu organización, con comida y amistad. <b>Cierra esta versión con Ángel antes de la entrevista</b>, sin ensayarla igual.</p></div></div>

<div class="q"><p class="pregunta">12. ¿Cómo sabe que fue por razones políticas y no un robo común?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Porque dijeron &ldquo;se los dijimos y no pararon&rdquo;, nos llamaron golpistas, y después llamaron a mi madre para exigir que dejáramos el activismo, no dinero.</p>
<span class="lbl">Completa</span><p class="larga">Cuatro razones. Primera: esa frase remite a los mensajes del 18 de mayo, donde nos exigieron dejar el activismo o habría consecuencias mortales. Segunda: nos llamaron &ldquo;golpistas&rdquo;, que es un término político. Tercera: pasó en La Floresta, una de las zonas que citaban los mensajes, al salir de una reunión de nuestra organización. Cuarta: mi madre dice que se identificaron como &ldquo;colectivos&rdquo;, y las llamadas siguientes pedían que desistiéramos del activismo. Además se llevaron nuestras cédulas, así que tienen nuestros nombres y direcciones.</p>
<p class="nota">Cuidado con &ldquo;las cédulas&rdquo;: solo di que se las llevaron. No digas que las usaron si no lo sabes.</p></div></div>

<div class="q"><p class="pregunta">13. ¿Denunció el hecho a las autoridades? Si les temía, ¿por qué fue a ellas?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. Mi hermano Ángel presentó la denuncia ante el CICPC el 11 de junio de 2018 por el robo del carro y los teléfonos, y el 28 de enero de 2019 mi hermano y yo presentamos denuncias formales ante la Fiscalía del Ministerio Público y ante la Defensoría del Pueblo de Monagas.</p>
<span class="lbl">Completa</span><p class="larga">La del CICPC quedó registrada con el expediente K-18-0074-02562, como robo de vehículo. Cinco días después de la Catedral, el 28 de enero de 2019, presentamos las de la Fiscalía y la Defensoría, donde contamos los mensajes de los Tupamaros, el ataque del 9 de junio con golpes y un disparo y la frase &ldquo;se los dijimos&rdquo;, y lo de la Catedral. Ahí escribimos que responsabilizábamos a las autoridades de lo que nos pudiera pasar. [<span class="tag conf">Confirma</span> por qué fuiste o no a la del CICPC y qué hicieron con las tres denuncias después.]</p>
<p class="nota"><b>Si te preguntan por qué acudiste a las autoridades si les temías:</b> para dejar constancia; y en la denuncia de enero de 2019 ustedes mismos escribieron que responsabilizaban a &ldquo;las autoridades policiales, de policía política y militares&rdquo;. No digas que te respondieron ni que investigaron si no lo sabes: <span class="tag conf">Confirma</span> qué pasó después.</p></div></div>

<div class="q"><p class="pregunta">13 bis. La denuncia del CICPC habla de un robo, de tres sujetos y no menciona golpes ni el disparo. Usted habla de cuatro y de un ataque político. ¿Por qué?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Esa denuncia la hizo Ángel para denunciar el robo del vehículo y de los teléfonos. El ataque político lo contamos con todo detalle en las denuncias del 28 de enero de 2019. [<span class="tag conf">Confirma</span> qué le dijo Ángel al funcionario y qué escribió el funcionario.]</p>
<p class="nota"><b>Estas son las diferencias reales entre los papeles:</b> el CICPC dice <b>tres</b> sujetos; el relato de ustedes dice <b>cuatro</b> (dos pares de motorizados; dos se fueron en las motos y dos se llevaron el carro); la Fiscalía y la Defensoría dicen &ldquo;un grupo de hombres armados&rdquo;. El CICPC lista como víctimas a <b>Gabriel Ruiz</b>, un nombre que no aparece en ningún relato: averigua quién es. Y ninguna de las tres denuncias tiene la hora del hecho. Nadie espera que recuerdes un número exacto tantos años después; <b>di lo que recuerdas y explica que el funcionario redactó la denuncia</b>, si eso es lo que pasó.</p></div></div>

<div class="q"><p class="pregunta">14. ¿Recibió atención médica? ¿Le quedaron secuelas?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">[<span class="tag conf">Confirma</span> tu expediente no registra ninguna atención médica.] Si no fuiste: &ldquo;No fui a un centro médico&rdquo;, y la razón real, solo si la recuerdas.</p>
<p class="nota">No inventes un tratamiento que no puedas documentar. Tampoco digas que tienes secuelas físicas si tu expediente médico de EE.UU. no las menciona.</p></div></div>

<div class="q"><p class="pregunta">15. ¿Qué pasó con el carro?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Apareció desvalijado tres días después, en el sector La Línea, en Maturín.</p></div></div>

<!-- ---------------- D ---------------- -->
<p class="bloque">D &mdash; Amenazas y la Catedral</p>

<div class="q"><p class="pregunta">16. ¿Quién lo amenazó, cómo y cuántas veces?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Mensajes de texto el 18 de mayo de 2018 de un colectivo aliado a los Tupamaros, y llamadas a mi madre después del ataque, y otra el 25 de enero de 2019. [<span class="tag conf">Confirma</span> qué viste tú y qué te contaron.]</p>
<span class="lbl">Completa</span><p class="larga">Los mensajes decían que sabían dónde estudiábamos y vivíamos, y mencionaban mi vehículo y los sitios que frecuentábamos: La Floresta, El Parque, Las Flores. Exigían dejar las charlas y el activismo; si no, las consecuencias serían mortales. Después del ataque, mi madre recibió dos llamadas que exigían lo mismo; apagó su teléfono más de un mes. El 25 de enero de 2019, dos días después de la Catedral, otra llamada ordenó que nos fuéramos de la ciudad o nos matarían, y nos recordaron que &ldquo;meses antes nos perdonaron la vida&rdquo;. Mi madre dice que en total recibió más de diez llamadas.</p>
<p class="nota">Los mensajes y la llamada del 25/01 están en el relato de Ángel y de Zoraida, no en el tuyo. Di &ldquo;mi hermano recibió/vio los mensajes&rdquo; si así fue. Si guardas capturas, llévalas.</p></div></div>

<div class="q"><p class="pregunta">17. Descríbame lo que pasó el 23 de enero de 2019 en la Catedral.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Marchábamos en paz hasta la Catedral de Maturín y nos atacaron motorizados encapuchados armados y la Guardia Nacional; casi mil personas quedamos encerradas muchas horas y los grupos armados exigían que los jóvenes saliéramos para entregarnos a la Guardia Nacional.</p>
<span class="lbl">Completa</span><p class="larga">Fue la marcha nacional del 23 de enero. Íbamos desde Tipuro hasta la avenida Juncal, el punto de concentración; de ahí se decidió seguir a la Catedral Nuestra Señora del Carmen para una misa de acción de gracias. Al acercarnos, encapuchados en motos con armas de fuego nos atacaron, y la Guardia Nacional lanzó lacrimógenas y perdigones. Hubo una estampida. La mayoría entramos a la catedral; había ataques de pánico y heridos. El obispo Enrique Pérez Lavado y los religiosos nos protegieron. Afuera, los grupos armados lanzaban piedras y amenazas y pedían que los jóvenes saliéramos para un &ldquo;juicio popular&rdquo; y luego entregarnos a la Guardia Nacional. Mis padres también estaban en la marcha. Salimos gracias a una mediación del Obispo, de autoridades militares y de funcionarios de la Defensoría del Pueblo. [<span class="tag conf">Confirma</span> la hora en que entraste y la hora en que saliste.]</p>
<p class="nota"><b>La duración es el punto delicado.</b> En mi relato puse cinco horas; en la denuncia que Ángel y tú firmaron cinco días después, más de diez, hasta las doce de la noche; y la prensa dice más de tres, con los primeros grupos saliendo hacia las 5 de la tarde. Si te preguntan cuánto duró, di lo que recuerdas: &ldquo;fueron muchas horas; no recuerdo la hora exacta de salida; en mi relato escribí cinco y en la denuncia de esa semana escribimos más de diez&rdquo;. Es preferible reconocer la diferencia a defender una cifra.</p></div></div>

<div class="q"><p class="pregunta">18. ¿Fue usted herido o detenido ese día?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No fui herido ni detenido. Otras personas sí resultaron heridas. Estuve encerrado con ellos y salí gracias a la mediación.</p>
<p class="nota">Tu relato no dice que fueras herido ni detenido. No agregues nada.</p></div></div>

<div class="q"><p class="pregunta">19. ¿Cuántas personas había y cuánto tiempo estuvo allí?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Casi mil personas, según calculamos. El tiempo fueron muchas horas; [<span class="tag conf">Confirma</span> di la hora de entrada y de salida que recuerdes].</p>
<p class="nota">La prensa dice entre 700 y más de 1.000 personas y más de tres horas; tu denuncia del 28/01/2019 dice más de diez horas; tu relato, cinco. Tu relato dice &ldquo;casi 942&rdquo; y &ldquo;más de novecientas&rdquo;. Di &ldquo;casi mil&rdquo; y de dónde salió la cifra. <b>No la defiendas como si la hubieras contado.</b></p></div></div>

<div class="q"><p class="pregunta">20. ¿Quiénes eran los que los cercaban?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Motorizados encapuchados armados, que eran colectivos, y la Guardia Nacional Bolivariana; la GNB custodiaba las puertas y los colectivos amenazaban afuera.</p></div></div>

<div class="q"><p class="pregunta">21. ¿Por qué la Guardia Nacional o la policía no los protegió?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Porque la Guardia Nacional también disparó lacrimógenas y perdigones contra la marcha, y custodiaba las puertas mientras los colectivos amenazaban. No hubo protección, hubo cerco.</p></div></div>

<div class="q"><p class="pregunta">22. Ese día quemaron la sede del PSUV y un vehículo. ¿Participó usted?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span> contesta solo lo que te consta.] Si no participaste: &ldquo;No. Yo estaba con la marcha y luego dentro de la catedral. Supe después de esos hechos por la prensa.&rdquo;</p>
<p class="nota">La prensa reportó que encapuchados quemaron un vehículo y la sede del PSUV, y que un grupo disparó desde el techo de esa sede contra la marcha; el gobierno usó esos hechos para acusar a los manifestantes. Si el oficial lo pregunta, no lo discutas: di lo que viste. Si sabes la verdad y es otra, dila con calma; la mentira aquí es lo que te hunde.</p></div></div>

<!-- ---------------- E ---------------- -->
<p class="bloque">E &mdash; Reubicación interna y demora</p>

<div class="q"><p class="pregunta">23. ¿No podría vivir en otra parte de Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Lo intentamos tres veces y no funcionó: nos escondimos en Los Guaritos, luego dos meses en Barcelona, y en marzo de 2019 en Caracas; las amenazas nos siguieron.</p>
<span class="lbl">Completa</span><p class="larga">Nos escondimos en casa de mi abuela Eligia Zoraida Hernández, en Los Guaritos, Maturín. Después estuvimos unas ocho semanas en Barcelona, en casa de mi abuelo Argenis Coa, y aun allí llegaron las amenazas. Mi hermano lo dice así: las bandas se comunican y se organizan en todo el país. En marzo de 2019 nos fuimos a Caracas, a casa de una prima en El Rosal, y decidimos salir. Y los colectivos no son solo de una ciudad: la ONU los describe como parte del aparato del Estado.</p>
<p class="nota">Tu relato solo dice &ldquo;días de manera clandestina en casas familiares&rdquo;. Aprende nombres y lugares. Aclara con Ángel si el escondite en Los Guaritos fue antes o después del ataque.</p></div></div>

<div class="q"><p class="pregunta">24. Si temía tanto, ¿por qué esperó a graduarse para irse?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No nos fuimos cuando quisimos, sino cuando pudimos: hacía falta pasaporte, dinero y una ruta, y los vuelos directos estaban suspendidos. Y bajar el perfil por consejo de mis padres no nos protegió: el 23 y el 25 de enero de 2019 nos alcanzaron otra vez.</p>
<span class="lbl">Completa</span><p class="larga">En diciembre de 2018 mis padres nos aconsejaron bajar el perfil justamente por el peligro y terminar los estudios. Aun así, en enero de 2019 quedé cercado en la Catedral y recibimos una amenaza de muerte. No pudimos asistir ni a nuestros actos de grado: delegamos los títulos a nuestros padres. Nos fuimos en cuanto pudimos.</p>
<p class="nota">La carta de tu madre dice &ldquo;una vez culminados sus estudios, ellos deciden salir del país con la intención de apartarse temporalmente&rdquo;. Esa idea de &ldquo;temporal&rdquo; era el deseo de tu madre, no tu plan. No la niegues: explícala.</p></div></div>

<div class="q"><p class="pregunta">25. ¿Por qué no pidió protección en otro país, como República Dominicana?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Fue solo un tránsito de seis días, sin estatus y sin pedir protección allí; los vuelos directos a Estados Unidos estaban suspendidos y mi destino era Estados Unidos.</p></div></div>

<!-- ---------------- F ---------------- -->
<p class="bloque">F &mdash; Su familia y lo ocurrido después de su salida</p>

<div class="q"><p class="pregunta">26. ¿Le ha pasado algo a su familia desde que usted se fue?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. Mi padre fue agredido en marzo de 2020 por hombres armados que preguntaban por mi hermano y por mí, y en abril de 2021 encapuchados gritaron frente a la casa contra mi familia; tres días después mi padre huyó.</p>
<span class="lbl">Completa</span><p class="larga">Una semana después de nuestra salida, en abril de 2019, grupos armados rondaron la casa, según los vecinos. El 13 de marzo de 2020 cuatro hombres armados, vestidos de negro tipo militar y sin identificación, agredieron a mi padre y preguntaron por nuestro paradero; amenazaron con irrumpir para buscar pruebas de conspiración. El 16 de abril de 2021 las cámaras de la casa grabaron encapuchados gritando por &ldquo;Emily y su familia traidora de la patria&rdquo;; los vecinos Eduardo José Ruiz y Josefa María Noguera lo presenciaron. Mi padre salió el 19 de abril de 2021.</p>
<p class="nota">Estos hechos son del relato de tu madre. Di &ldquo;mi madre lo relata así&rdquo; salvo que lo hayas presenciado. Tienes el video de las cámaras, ¿está guardado? [<span class="tag conf">Confirma</span>]</p></div></div>

<div class="q"><p class="pregunta">27. ¿Ha recibido amenazas directas desde que salió de Venezuela?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span> tu expediente no registra amenazas directas contra ti desde 2019.] Si es así: &ldquo;No directamente a mí. Las amenazas fueron a mi familia en Venezuela, preguntando por mí y por mi hermano.&rdquo;</p></div></div>

<div class="q"><p class="pregunta">28. Su hermana y su hermano también piden asilo. ¿Por qué solicitudes separadas?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Cada uno tiene su propio caso: mi hermano Ángel y yo vivimos juntos los mismos hechos; Emily tiene un caso aparte por los suyos.</p></div></div>

<div class="q"><p class="pregunta">26 bis. ¿Qué familiares suyos siguen en Venezuela? ¿A ellos no les ha pasado nada?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">[<span class="tag conf">Confirma</span>] Según el formulario de mi madre, mis abuelos maternos y varios tíos siguen en Venezuela, en Maturín y Puerto La Cruz; uno de mis tíos está en Panamá. A ellos no los buscan porque no son los activistas ni viven en la casa que buscaban.</p>
<p class="nota">El I-589 de tu madre lista a sus padres (Eligia Zoraida Hernández y Argenis Coa Gutiérrez) y a sus hermanos Francis, Sixta, Argenis y Enma Coa Hernández, casi todos en Venezuela. <b>El oficial preguntará por qué a ellos no los persiguen.</b> No hay ningún dato en tu expediente sobre esto: di solo lo que sepas y, si no lo sabes, dilo. Tus abuelos te sirvieron de refugio en 2018 y 2019, pero no te ocultaron de las amenazas.</p></div></div>

<!-- ---------------- G ---------------- -->
<p class="bloque">G &mdash; Viaje, plazo y admisibilidad</p>

<div class="q"><p class="pregunta">29. Describa su ruta de viaje hasta Estados Unidos.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Maturín, Caracas (1 de marzo), Santo Domingo, República Dominicana, y de ahí a Orlando, donde llegué el 2 de abril de 2019 con visa B2.</p>
<p class="nota"><b>Tu I-589 dice NO a haber viajado o vivido en otro país.</b> Pasaste 6 días en Santo Domingo: Ángel y tu madre lo dicen. Hay que corregirlo al empezar (sección 10).</p></div></div>

<div class="q"><p class="pregunta">30. ¿Por qué no pidió asilo al llegar? ¿Cuándo lo hizo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Llegué el 2 de abril de 2019 y firmé el I-589 el 5 de diciembre de 2019, ocho meses después, dentro del plazo de un año.</p>
<span class="lbl">Completa</span><p class="larga">A finales de 2019 confirmamos que las amenazas en Venezuela seguían y entonces decidimos pedir asilo en vez de volver. [<span class="tag conf">Confirma</span> si al entrar ya pensabas pedir asilo o lo decidiste después; di la verdad.]</p></div></div>

<div class="q"><p class="pregunta">31. ¿Ha regresado a Venezuela alguna vez desde que salió?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No.</p></div></div>

<div class="q"><p class="pregunta">32. ¿Tenía visa? ¿Cómo entró? ¿Quién pagó el viaje?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Con visa B2 de turista, autorizada hasta el 1 de octubre de 2019; era el único documento que tenía para salir. [<span class="tag conf">Confirma</span> quién pagó el viaje.]</p></div></div>

<!-- ---------------- H ---------------- -->
<p class="bloque">H &mdash; Temor a regresar y cambios en el país</p>

<div class="q"><p class="pregunta">33. ¿Qué cree que le pasaría si regresa a Venezuela hoy?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Me detendrían o me harían daño los colectivos o los cuerpos de seguridad, con tortura o incluso la muerte, porque ya me identificaron y ya lo intentaron. Regresar no es una opción.</p>
<span class="lbl">Completa</span><p class="larga">Estoy identificado: mi militancia está certificada, los atacantes tienen mi cédula, sabían mi casa, mi universidad y mi carro, y me dispararon. Después de irme siguieron buscando a mi familia hasta que mi padre huyó en 2021. Y hoy, según la ONU en septiembre de 2026, los colectivos siguen intimidando, los cuerpos de seguridad conservan su estructura y hay tortura documentada en centros como El Rodeo I. En mi relato lo dije así: &ldquo;regresar es sufrir una prisión y torturas injustas e inclusive la muerte&rdquo;.</p></div></div>

<div class="q"><p class="pregunta">34. ¿A quién le teme concretamente?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">A los colectivos armados afines al gobierno, a la Guardia Nacional y a los cuerpos de inteligencia y seguridad ligados al régimen.</p>
<span class="lbl">Completa</span><p class="larga">A los colectivos, como los Tupamaros, que nos atacaron y nos amenazaron; a la Guardia Nacional, que nos cercó y disparó contra la marcha; y al SEBIN y la DGCIM, que detienen a opositores y torturan. Mi hermano añade que también teme a funcionarios del CICPC.</p></div></div>

<div class="q"><p class="pregunta">35. Maduro fue capturado en enero y hay una ley de amnistía. ¿No cambió todo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Cambió la persona, pero no el aparato. La misión de la ONU dijo en septiembre de 2026 que el aparato represivo sigue intacto y que los colectivos siguen funcionando como fuente de intimidación.</p>
<span class="lbl">Completa</span><p class="larga">Gobierna Delcy Rodríguez, que era vicepresidenta de Maduro. La ONU reporta 214 detenciones políticas arbitrarias en 12 meses y 64 casos nuevos de tortura desde el 3 de enero, y que 19 funcionarios señalados por violaciones siguen en cargos relevantes. Foro Penal habla de una puerta giratoria: liberan a unos y detienen a otros. La amnistía exige solicitarla por abogado, no cubre violaciones de derechos humanos, y los liberados no pueden hablar en público. Y a mí no me busca solo una autoridad: me buscan grupos armados que no dependen de ninguna ley.</p>
<p class="nota"><b>Actualiza estas cifras la semana de la entrevista.</b> Busca &ldquo;Foro Penal presos políticos&rdquo; y &ldquo;misión ONU Venezuela&rdquo; y ajusta lo que haya cambiado.</p></div></div>

<div class="q"><p class="pregunta">36. ¿Cómo lo encontrarían? ¿Cómo sabrían quién es?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Ya saben quién soy: tienen mi cédula, mi nombre y mi dirección, mi militancia está certificada por mi partido, y conocen a mi familia en Maturín.</p>
<p class="nota">No afirmes que existe una lista oficial con tu nombre. Di los hechos: cédula robada, mensajes con tus datos, familia buscada hasta 2021.</p></div></div>

<div class="q"><p class="pregunta">37. ¿El gobierno podría protegerlo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No. Los colectivos que nos atacaron actúan con respaldo del Estado: la ONU los llama &ldquo;componente funcional del aparato represivo&rdquo;. No hay a quién acudir.</p></div></div>

<div class="q"><p class="pregunta">38. ¿Teme ser torturado? ¿Por qué?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. La ONU documenta tortura en centros como El Rodeo I y el Fuerte Guaicaipuro, con 64 casos nuevos desde enero de 2026, y en 2017 detenidos en protestas relataron golpes y otros malos tratos.</p>
<span class="lbl">Completa</span><p class="larga">Fernando Albán murió bajo custodia del SEBIN en 2018 y el capitán Acosta Arévalo murió en 2019 con signos de tortura. La ONU concluyó en 2020 que hubo crímenes de lesa humanidad. Yo fui activista de Voluntad Popular, uno de los partidos con más dirigentes y militantes perseguidos, y me atacaron los colectivos que actúan de la mano de esos cuerpos.</p></div></div>

<div class="q"><p class="pregunta">39. ¿Hay otros casos como el suyo? ¿Cómo sabe que es cierto lo que dice del país?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí, hay muchos casos documentados. En mi ciudad, Carlos Báez, del mismo partido que yo, fue detenido en 2016; y el 23 de enero de 2019 en Maturín hubo 62 detenidos y 14 heridos, según la propia gobernadora.</p>
<p class="nota">Usa 2 o 3 nombres de la sección 6, no todos. Elige los de Monagas: son los más creíbles.</p></div></div>

<!-- ---------------- I ---------------- -->
<p class="bloque">I &mdash; Evidencia</p>

<div class="q"><p class="pregunta">40. ¿Qué pruebas tiene de lo que dice?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">La constancia de Voluntad Popular con mi código de inscripción; la denuncia ante el CICPC del 11 de junio de 2018; las denuncias ante la Fiscalía y la Defensoría del Pueblo del 28 de enero de 2019; la carta de la abogada Soraya Hernández de Ciano sobre el activismo de mi hermano; los relatos de mi hermano y de mi madre; las cartas de mi madre a USCIS; y la prensa sobre la Catedral de Maturín.</p>
<p class="nota">Lleva original y copia. Lo que falta y conviene conseguir: capturas de los mensajes de mayo de 2018, fotos de marchas, noticias impresas del 23/01/2019, <b>cartas de los tres testigos con cédula</b> (Antony Delvalle Ordaz Sánchez, Hilda Fuentes y Keren Ramos) y cartas de carácter de tu empleador y comunidad en Rockford. Ver en la sección 10 qué prueba cada papel y qué riesgo tiene.</p></div></div>

<!-- ---------------- J ---------------- -->
<p class="bloque">J &mdash; Antecedentes penales y otras negativas (el bloque más difícil)</p>

<div class="aviso">
  <p class="t">Tres reglas, y esto lo revisas con tu abogada antes</p>
  <p><b>1.</b> Lo dices tú, primero, sin que te lo pregunten dos veces: USCIS ya tiene el récord del FBI (te lo citó por escrito el 2/02/2024). <b>2.</b> No lo minimices ni lo discutas: contesta corto, con hechos y con los papeles certificados. <b>3.</b> Muestra qué hiciste después: cumpliste todo, el juez cerró el caso como exitoso, y no ha vuelto a pasar nada. Cómo se argumenta legalmente es trabajo de tu abogada, no tuyo.</p>
</div>

<div class="q"><p class="pregunta">41. ¿Ha sido arrestado alguna vez en Estados Unidos? ¿De qué lo acusaron y cómo terminó?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. En 2021, en el condado de Hillsborough, Florida, tuve dos casos por exposición de órganos sexuales, delitos menores. Entregué una declaración de nolo contendere el 5 de enero de 2022.</p>
<span class="lbl">Completa</span><p class="larga">Fueron los casos 21-CM-005305-A y 21-CM-005337-A, por hechos del 24 de abril y el 15 de mayo de 2021. El tribunal suspendió la adjudicación y me impuso seis meses de probatoria y 16 horas de servicio comunitario por cada caso, al mismo tiempo. No estuve en la cárcel. Cumplí todo y el 13 de junio de 2022 el juez terminó la probatoria como exitosa. Tengo copias certificadas. Mi I-589 dice que no tenía arrestos porque lo firmé en diciembre de 2019, antes de estos hechos.</p>
<p class="nota">No describas los hechos del arresto de memoria: <b>todavía no tienes el <i>arrest affidavit</i></b> (el correo que enviaste al Sheriff en 2024 rebotó). Pídelo al Clerk (813-276-8100) o al bufete Westmoreland antes del 1 de octubre.</p></div></div>

<div class="q"><p class="pregunta">42. ¿Cumplió todas las condiciones? ¿Qué fue la audiencia de VOP del 13 de junio de 2022?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. La audiencia fue por una cita de consejería que se me pasó; yo mismo la reprogramé, completé las sesiones y el juez cerró el caso como exitoso.</p>
<p class="nota">Está explicado en tu correo del 1/05/2022 a tu oficial de probatoria. Lleva la Orden de Terminación y los recibos de costas en cero.</p></div></div>

<div class="q"><p class="pregunta">43. ¿Ha tenido algún otro problema con la ley, antes o después?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">Solo la verdad. Según tu expediente, estos dos casos son los únicos y no hay nada después de junio de 2022. Si existe cualquier otra cosa (una multa, una citación), díselo a tu abogada <b>antes</b>, no al oficial.</p></div></div>

<div class="q"><p class="pregunta">44. ¿Por qué le negaron el TPS?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Por esos dos casos: la ley del TPS descalifica automáticamente a quien tenga dos o más delitos menores. Fue el 14 de febrero de 2024. Esa regla es del TPS, no del asilo.</p>
<p class="nota">No discutas derecho con el oficial. Eso lo hace tu abogada, por escrito.</p></div></div>

<div class="q"><p class="pregunta">45. ¿Por qué debería el gobierno ejercer su discreción a su favor?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">Esta es la pregunta que puede decidir el caso. <b>No la improvises ni la memorices.</b> Tu abogada la organiza. Los elementos reales: un caso de persecución política documentado con constancia de partido y testimonios; presentación dentro del año; cumplimiento íntegro de la sentencia y cierre exitoso; más de cuatro años sin incidentes; tu familia nuclear entera en Estados Unidos; tu padre perseguido hasta 2021.</p>
<p class="nota">Si tienes abogada presente, es el momento de que hable ella. <b>Consigue cartas de carácter</b> (empleador, iglesia, comunidad en Rockford): con un antecedente penal, ya no son opcionales.</p></div></div>

<!-- ---------------- K ---------------- -->
<p class="bloque">K &mdash; Cierre</p>

<div class="q"><p class="pregunta">46. ¿Hay algo más que quiera agregar?</p><div class="respuesta">
<span class="lbl">Corta (haz que sea corta y firme)</span><p class="corta">Solo quiero decir que no me fui por una vida mejor, me fui porque me dispararon y amenazaron de muerte por lo que pensaba, y porque mi familia siguió siendo buscada. Regresar hoy me pone en riesgo de detención, tortura o muerte. Pido que se me conceda protección.</p></div></div>

<!-- ============================================================ -->
<h2 id="s10">10 &middot; Puntos a confirmar y correcciones al empezar</h2>

<p class="lede">Al inicio, después del juramento, el oficial te preguntará si tu solicitud es verdadera y correcta y repasará la <b>Parte F</b>. Ahí, con tu abogada, presentas las correcciones y actualizaciones. <b>Lo que decidas corregir lo debe decidir ella; tú solo tienes que conocer los puntos.</b></p>

<h3>Tu carpeta de documentos: qué prueba cada papel y qué riesgo trae</h3>
<div class="scroll">
<table>
<tr><th>Documento</th><th>Qué prueba</th><th>Riesgo / qué aclarar</th></tr>
<tr><td><b>Denuncia CICPC</b><br>K-18-0074-02562<br>11/06/2018 (Ángel)</td><td>Fecha (<b>09-06-2018</b>), lugar (La Floresta, dos cuadras pasando la panadería Fiorpan), armas de fuego, robo de 4 teléfonos y el SpaceFox, víctimas.</td><td>Dice <b>hurto y robo de vehículos</b>; <b>tres</b> sujetos; no menciona golpes, disparo, la frase ni móvil político; incluye a <b>Gabriel Ruiz</b> como víctima. Ver 13 bis.</td></tr>
<tr><td><b>Denuncia a la Fiscalía Superior del Ministerio Público de Monagas</b><br>(Unidad de Atención a la Víctima), 28/01/2019</td><td>El contexto político completo: MUD, mensajes del 18/05/2018 (Tupamaros), ataque del 9/06/2018, ataque del 23/01/2019, testigos con cédula, responsabiliza a las autoridades.</td><td>Sello de recibido parcialmente ilegible en la copia. Dice <b>10+ horas hasta las 12 de la noche</b>; no menciona la llamada del 25/01.</td></tr>
<tr><td><b>Denuncia a la Defensora del Pueblo de Monagas</b><br>28/01/2019, 9:00 a. m.</td><td>Igual que la anterior, con <b>sello de recibido legible</b>. Involucra al general de la ZODI Ovidio Delgado y a funcionarios de la Defensoría en la mediación.</td><td>Mismo texto: mismas diferencias con el relato.</td></tr>
<tr><td><b>Carta de Soraya Hernández de Ciano</b><br>23/09/2019 (sobre Ángel)</td><td>Actividad de Ángel con fechas: enero 2016; octubre 2016; marzo 2017; 16/07/2017; 10/09/2017; 15/10/2017; 23/01 y 23/02/2019; &ldquo;responsable de movilización&rdquo;.</td><td>Cédula de Ángel mal escrita (26.523.375); dice &ldquo;Movimiento&rdquo; de la Unidad Democrática. La abogada es una tercera persona: conviene que confirme por escrito.</td></tr>
<tr><td><b>Constancias de Voluntad Popular</b><br>8/11/2019 (Ángel y Rafael)</td><td>Ambos son <b>miembros activistas</b> desde el <b>12/02/2016</b>; equipo de organización de jornadas de activismo y movilización juvenil de Monagas; códigos 111124412 y 111124225.</td><td>Firmadas por Luis Humberto Zamora Rojas (C.I. 11.779.677). El partido se llama &ldquo;Voluntad Popular Activista (VPA)&rdquo;. Ninguna menciona cargos.</td></tr>
<tr><td><b>Relato de Ángel</b> (17/06/2019, y versión en Word)</td><td>La secuencia completa: 18/05, 9/06 (dice &ldquo;viernes 8&rdquo;), Puerto La Cruz, 23/01, 25/01, Los Guaritos, salida.</td><td>Dice <b>&ldquo;viernes 8&rdquo;</b>, &ldquo;parrillada&rdquo; y un pasaporte mal escrito (065538294).</td></tr>
</table>
</div>

<h3>Respuestas del I-589 (5/12/2019) que hay que corregir o actualizar</h3>
<div class="scroll">
<table>
<tr><th>Tema</th><th>Lo que dice</th><th>Lo que muestran tus documentos</th></tr>
<tr><td>Viajó por otro país (Parte C, 2.A)</td><td>NO</td><td>6 días en Santo Domingo. Lo declaran Ángel y tu madre.</td></tr>
<tr><td>Familiares con solicitudes (Parte C, 1)</td><td>NO</td><td>Ángel, Zoraida, Emily; tu padre con TPS.</td></tr>
<tr><td>Familiar detenido o interrogado (Parte B, 2)</td><td>NO</td><td>Emily, detenida el 21/04/2016.</td></tr>
<tr><td>Arrestos o condenas en EE.UU.</td><td>NO (cierto entonces)</td><td>Dos casos de 2021 (nolo contendere, 5/01/2022).</td></tr>
<tr><td>Otras solicitudes (TPS)</td><td>&mdash;</td><td>I-821 presentado 4/08/2021, negado 14/02/2024.</td></tr>
<tr><td>Dirección y padres</td><td>Solo Orlando; padres en Maturín</td><td>Tampa y Rockford; ambos padres en EE.UU.</td></tr>
<tr><td>&ldquo;Orlando desde 01/2000&rdquo;</td><td>Error de tipeo</td><td>Llegaste el 2/04/2019.</td></tr>
<tr><td>Inicio en IUTIRLA</td><td>09/2017</td><td>Tu relato dice 2016; el título se obtuvo el 18/02/2019.</td></tr>
<tr><td>Continúa activo políticamente (Parte B, 3.B)</td><td>SÍ</td><td>Sin actividad documentada en EE.UU.; tu última actividad fue el 23/02/2019.</td></tr>
</table>
</div>

<h3>Puntos donde tu historia y la de tu familia no coinciden</h3>
<div class="scroll">
<table>
<tr><th>Punto</th><th>Diferencia</th><th>Qué hacer</th></tr>
<tr><td><b>Fecha del ataque</b> <span class="tag" style="background:var(--ok)">Resuelto</span></td><td>Denuncia CICPC (Ángel, 11/06/2018), denuncia Fiscalía y Defensoría (ambos, 28/01/2019), tu relato, relato y anexo de tu madre: <b>9 de junio</b>. Solo el relato de Ángel y una declaración de tu madre dicen 8.</td><td>Usa <b>9 de junio</b>. Si te lo señalan: &ldquo;los documentos que presentamos a las autoridades dicen 9&rdquo;. Que Ángel corrija su relato.</td></tr>
<tr><td><b>La reunión</b></td><td>Tú: reunión política y de amistad. Ángel: parrillada.</td><td>Cierra con Ángel: reunión de la organización con comida y amistad. Es lo cierto.</td></tr>
<tr><td><b>Testigo Keren</b> <span class="tag" style="background:var(--ok)">Resuelto</span></td><td>Tu relato: Keren Navarro. Ángel, y la denuncia de ambos del 28/01/2019 (con cédula 25.930.106): <b>Keren Ramos</b>.</td><td>Es <b>Keren Ramos</b>. Corrige tu relato. Los tres testigos con cédula: Antony Alexander Delvalle Ordaz Sánchez (26.291.541), Hilda Fuentes (27.118.836) y Keren Ramos (25.930.106).</td></tr>
<tr><td><b>Salida</b></td><td>28/03/2019 (tú) vs 29/03/2019 (Ángel).</td><td>Verifica con el pasaporte 114266251 y el boleto.</td></tr>
<tr><td><b>Escondite Los Guaritos</b></td><td>Tu madre (declaración por Emily): abril&ndash;junio de 2018. Ángel: unas semanas <b>después del 25/01/2019</b>. Puerto La Cruz: 8 semanas, verano de 2018 (Ángel).</td><td>Probablemente fueron dos estancias en la misma casa. Confírmalo con Ángel y con tu madre.</td></tr>
<tr><td><b>Mensajes y llamadas</b></td><td>En Ángel y Zoraida, no en tu relato.</td><td>Di qué viste tú y qué supiste por otros.</td></tr>
<tr><td><b>Duración y cifra de la Catedral</b> <span class="tag" style="background:var(--err)">Crítico</span></td><td>Denuncia del 28/01/2019: <b>más de 10 horas, hasta las 12 de la noche</b> (mediación del Obispo ante el general de la ZODI Ovidio Delgado). Tu relato: <b>5 horas</b> y 942 personas. Prensa: <b>3+ horas</b>, primeros grupos saliendo hacia las 5 p. m., 700&ndash;1.000 personas.</td><td>Averigua la hora real de entrada y salida (fotos, mensajes). Ver preguntas 17 y 19. No elijas la cifra más fuerte: la verdadera.</td></tr>
<tr><td><b>La denuncia del CICPC frente a tu relato</b></td><td>CICPC: robo de vehículo, <b>tres</b> sujetos, sin golpes, sin disparo, sin móvil político; víctimas: Ángel, Rafael Navarro, <b>Gabriel Ruiz</b> y Anthoni Ordaz. Tu relato: <b>cuatro</b> sujetos, golpes, disparo, &ldquo;se los dijimos y no pararon&rdquo;.</td><td>Ver pregunta 13 bis. Identifica a Gabriel Ruiz. La versión completa está en las denuncias del 28/01/2019.</td></tr>
<tr><td><b>Lo que faltó en las denuncias del 28/01/2019</b></td><td>No mencionan la llamada del 25/01 ni las llamadas a tu madre; dicen que la marcha era &ldquo;en apoyo a la entrada de ayuda humanitaria&rdquo; (esa fue el 23 de febrero); no dan la hora del ataque de junio.</td><td>Ten la respuesta: fueron denuncias sobre los ataques a ustedes, no un inventario de todo lo ocurrido. <span class="tag conf">Confirma</span> con Ángel.</td></tr>
<tr><td><b>Errores de tipeo en los documentos de Ángel</b></td><td>Carta de Soraya Hernández de Ciano: cédula de Ángel escrita <b>26.523.375</b> (la correcta es <b>26.823.375</b>) y &ldquo;Movimiento de la Unidad Democrática&rdquo; (es &ldquo;Mesa&rdquo;). Relato de Ángel en PDF: pasaporte <b>065538294</b> (el I-589 dice 065536294).</td><td>Que Ángel pida una carta corregida o lo aclare con su abogada. Son errores materiales, no de fondo, pero el oficial los ve.</td></tr>
<tr><td><b>Cuándo empezó Ángel en Voluntad Popular</b></td><td>Relato de Ángel: en 2014, junto a ti. Constancia de VP (tuya y de él): desde el <b>12/02/2016</b>. Carta de Soraya: activista desde enero de 2016.</td><td>Aclara con Ángel: el 2014 fue como simpatizante y el carné formal es de 2016. Tú dices 2016.</td></tr>
<tr><td><b>Tu madre en la marcha del 23/01/2019</b></td><td>El anexo nuevo de tu madre dice que ella participó personalmente y se quedó en la Av. Juncal mientras Ángel y tú seguían a la Catedral. Ninguna declaración anterior lo decía, ni el tuyo.</td><td>Confírmalo con ella. Si el oficial te pregunta &ldquo;¿quién más estaba?&rdquo;, di solo lo que viste.</td></tr>
<tr><td><b>Fecha de salida en el anexo de tu madre</b></td><td>El anexo dice que ustedes salieron de Venezuela el <b>3 de abril de 2019</b>; tú y Ángel escriben 28/03 y 29/03, y llegaron a Orlando el 2 de abril.</td><td>Ese dato del anexo está mal; que ella lo corrija con los pasaportes antes de presentarlo.</td></tr>
<tr><td><b>Tu madre como opositora</b></td><td>Su anexo dice que ella misma fue opositora desde ~1983 (COPEI, luego MUD) y que tú y Ángel desarrollaron &ldquo;sus propias convicciones&rdquo; en Voluntad Popular. Tu I-589 marcó opinión política; el de ella decía NO a la organización política de la familia.</td><td>Consistente con lo tuyo. Si te preguntan por ella, di lo que sepas de primera mano.</td></tr>
<tr><td><b>Trabajo de tu madre</b></td><td>Tres versiones: jubilada 2008; directora 2000&ndash;2011; TEACHER IV desde 1983 hasta hoy.</td><td>Si declara en tu caso, su credibilidad es la tuya. Que su abogada lo aclare.</td></tr>
<tr><td><b>&ldquo;Bajar la guardia&rdquo;</b></td><td>Carta de Zoraida a USCIS, dic. 2018.</td><td>Explícala: bajaron el perfil por peligro y aun así los alcanzaron el 23 y 25 de enero.</td></tr>
</table>
</div>

<div class="alerta">
  <p class="t">Asuntos urgentes de tu caso para esta semana</p>
  <ol style="margin:0">
    <li><b>Confirma que tu nueva abogada (Patricia) radicó su formulario G-28 antes del 1 de octubre.</b> El G-28 que consta hoy ante USCIS es el del Lcdo. Ángel Matos, firmado el 26/04/2024. Si el suyo no está presentado, USCIS puede no reconocerla como tu representante ese día.</li>
    <li><b>Confirma la cita por escrito.</b> No hay aviso electrónico en tu correo. Verifica el buzón en Rockford y myaccount.uscis.gov, y que USCIS tenga tu dirección correcta (1068 o 1668 McKnight Cir).</li>
    <li><b>Intérprete propio</b>, mayor de 18 años, que hable inglés y español con fluidez. Sin él puedes perder la cita.</li>
    <li>La <b>denuncia del CICPC ya está leída</b> (ver 13 bis: dice robo, tres sujetos, sin móvil político). Consigue ahora el <i>arrest affidavit</i>, la hora real de la Catedral y cartas de los testigos Antony, Hilda y Keren.</li>
    <li>Lleva la <b>constancia de PMG</b> (finalización del tratamiento, 6/06/2022). <b>No lleves ni entregues la evaluación psicosexual de 2022</b>: nunca la pidieron y va solo a tu abogada, en privado.</li>
  </ol>
</div>

<!-- ============================================================ -->
<h2 id="s11">11 &middot; Plan de estudio y el día de la entrevista</h2>

<div class="card">
<p><b>Cómo estudiar (26 al 30 de septiembre):</b></p>
<ol style="margin:0">
  <li><b>Sábado 26:</b> lee las secciones 1 a 3 y cuenta en voz alta tu caso en 60 segundos, sin mirar.</li>
  <li><b>Domingo 27:</b> cronología 2014&ndash;2017. Escribe de memoria las fechas en negrita; corrige con el documento.</li>
  <li><b>Lunes 28:</b> cronología 2018&ndash;2019 y familia 2019&ndash;2021. Practica la Catedral y el ataque con tus palabras.</li>
  <li><b>Martes 29:</b> modo estudio del panel. Contesta en voz alta, con intérprete o alguien que pause tras cada frase. Actualiza las cifras de 2026.</li>
  <li><b>Miércoles 30:</b> repaso corto y simulacro con tu abogada. Descansa; prepara documentos y llega temprano.</li>
</ol>
</div>

<div class="card">
<p><b>Qué llevar el 1 de octubre:</b></p>
<div class="chk"><input type="checkbox" id="c1"><label for="c1">Intérprete propio (mayor de 18, no es tu abogada ni testigo).</label></div>
<div class="chk"><input type="checkbox" id="c2"><label for="c2">Pasaporte original (114266251) e I-94.</label></div>
<div class="chk"><input type="checkbox" id="c3"><label for="c3">Copia completa del I-589 tal como se presentó, con el relato adjunto.</label></div>
<div class="chk"><input type="checkbox" id="c4"><label for="c4">Copias certificadas de Hillsborough (ambos casos) y la Orden de Terminación de probatoria.</label></div>
<div class="chk"><input type="checkbox" id="c5"><label for="c5">Constancia de PMG (completó el programa el 6/06/2022).</label></div>
<div class="chk"><input type="checkbox" id="c6"><label for="c6">Constancia de Voluntad Popular (8/11/2019).</label></div>
<div class="chk"><input type="checkbox" id="c7"><label for="c7">Denuncia del CICPC (11/06/2018), ya leída.</label></div>
<div class="chk"><input type="checkbox" id="c8"><label for="c8">Noticias impresas del 23/01/2019 (TalCual, El Pitazo, Vida Nueva).</label></div>
<div class="chk"><input type="checkbox" id="c9"><label for="c9">Capturas de los mensajes de mayo de 2018 (si existen) y video de las cámaras (abril de 2021).</label></div>
<div class="chk"><input type="checkbox" id="c10"><label for="c10">Cartas de carácter (empleador, comunidad, iglesia).</label></div>
<div class="chk"><input type="checkbox" id="c12"><label for="c12">Denuncias del 28/01/2019 ante la Fiscalía y la Defensoría (original y copia).</label></div>
<div class="chk"><input type="checkbox" id="c13"><label for="c13">Carta de Soraya Hernández de Ciano (23/09/2019) sobre Ángel, corregida.</label></div>
<div class="chk"><input type="checkbox" id="c14"><label for="c14">Cartas de los testigos Antony Delvalle Ordaz Sánchez, Hilda Fuentes y Keren Ramos.</label></div>
<div class="chk"><input type="checkbox" id="c11"><label for="c11">Notificación de la cita y G-28 de tu abogada.</label></div>
</div>

<div class="card">
<p><b>Cinco cosas para la sala:</b></p>
<ol style="margin:0">
  <li>Responde solo lo que te preguntan, en frases cortas, y <b>haz una pausa para que el intérprete traduzca</b>.</li>
  <li>Si no entiendes, pide que repitan. Si no recuerdas, <b>di que no recuerdas</b>. Nunca adivines.</li>
  <li>Da detalles concretos: nombres, fechas, lugares, orden de los hechos.</li>
  <li>Si el oficial señala una contradicción, <b>no improvises</b>: di la verdad (el formulario lo llenó una preparadora que no es abogada; han pasado siete años; mi hermano lo recuerda distinto).</li>
  <li>Las correcciones y los antecedentes los adelantas tú al inicio, con tu abogada. Lo demás, solo si te lo preguntan.</li>
</ol>
</div>

<!-- ============================================================ -->
<h2 id="s12">12 &middot; Fuentes</h2>

<div class="foot">
<p><b>Tu expediente:</b> I-589 (5/12/2019) y relato de 2 páginas; relatos de Ángel y de Zoraida y su carta a USCIS; constancia de Voluntad Popular (8/11/2019); expediente penal certificado de Hillsborough (45 pp.); decisión de TPS (14/02/2024); AR-11 de junio de 2020.</p>
<p><b>Contexto histórico y de país (enlaces en cada sección):</b></p>
<ul>
<li>2014: <a href="https://en.wikipedia.org/wiki/2014_Venezuelan_protests">Protestas de 2014</a>, <a href="https://en.wikipedia.org/wiki/La_Salida">La Salida</a>, <a href="https://www.infobae.com/venezuela/2024/02/13/a-10-anos-de-las-masivas-protestas-contra-maduro-activistas-exigieron-justicia-para-los-43-asesinados/">Infobae</a>.</li>
<li>2016: <a href="https://cnnespanol.cnn.com/2016/10/20/anulan-firmas-de-la-primera-fase-del-revocatorio-en-varios-estados-de-venezuela">CNN</a>, <a href="https://www.wola.org/2016/10/venezuelas-suspension-signature-collection-dangerous-setback/">WOLA</a>, <a href="https://efectococuyo.com/politica/monagas-la-disidencia-es-perseguida-con-medidas-judiciales/">Efecto Cocuyo, Monagas</a>.</li>
<li>2017: <a href="https://en.wikipedia.org/wiki/2017_Venezuelan_protests">Protestas de 2017</a>, <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea</a>, <a href="https://www.hrw.org/es/report/2017/11/29/arremetida-contra-opositores/brutalidad-tortura-y-persecucion-politica-en">HRW</a>, <a href="https://www.observatoriodeconflictos.org.ve/sin-categoria/venezuela-6-729-protestas-y-157-fallecidos-desde-el-1-de-abril-de-2017">Observatorio de Conflictividad</a>.</li>
<li>2018: <a href="https://www.ntn24.com/noticias-actualidad/caso-oscar-perez-la-masacre-de-el-junquito-84141">El Junquito</a>, <a href="https://en.wikipedia.org/wiki/Fernando_Alb%C3%A1n">Albán</a>.</li>
<li>2019: <a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">Protestas de 2019</a>, <a href="https://www.hrw.org/es/news/2019/05/03/venezuela-violenta-respuesta-las-manifestaciones">HRW</a>, <a href="https://www.ohchr.org/es/2019/07/un-human-rights-report-venezuela-urges-immediate-measures-halt-and-remedy-grave-rights">ONU-DDHH</a>, <a href="https://www.infobae.com/america/venezuela/2019/07/05/michelle-bachelet-denuncio-la-erosion-del-estado-de-derecho-en-venezuela/">Infobae</a>, <a href="https://www.proceso.com.mx/internacional/2019/6/30/muerte-de-capitan-torturado-en-carcel-militar-sacude-al-gobierno-de-nicolas-maduro-227173.html">Proceso</a>.</li>
<li>Catedral de Maturín: <a href="https://talcualdigital.com/manifestantes-catedral-de-maturin/">TalCual</a>, <a href="https://www.vidanuevadigital.com/2019/01/24/700-manifestantes-venezolanos-se-resguardaron-por-mas-de-3-horas-en-la-catedral-de-maturin/">Vida Nueva Digital</a>, <a href="https://www.el-carabobeno.com/colectivos-acechan-a-mas-de-un-mil-ciudadanos-dentro-de-la-catedral-de-maturin/">El Carabobeño</a>, <a href="https://elpitazo.net/oriente/suben-a-62-los-detenidos-en-la-protesta-de-maturin/">El Pitazo</a>, <a href="https://www.eluniversal.com/venezuela/31262/maturin-salio-a-la-calle-a-protestar-contra-el-gobierno">El Universal</a>.</li>
<li>2020 (crímenes de lesa humanidad): <a href="https://www.hrw.org/es/news/2020/09/17/venezuela-investigacion-de-la-onu-concluye-que-se-cometieron-crimenes-de-lesa">HRW</a>.</li>
<li>2026: <a href="https://www.emol.com/noticias/Nacional/2026/09/16/1211609/onu-represion-venezuela-captura-maduro.html">Emol (ONU)</a>, <a href="https://www.elnacional.com/investigacion/2026/09/onu-informe-colectivos-represion-estado-venezuela-2026/">El Nacional (colectivos)</a>, <a href="https://foropenal.com/articulo/situation-of-political-prisoners-in-venezuela-january-february-2026">Foro Penal</a>, <a href="https://en.wikipedia.org/wiki/2026_political_prisoner_release_in_Venezuela">Wikipedia</a>, <a href="https://www.infobae.com/venezuela/2026/08/14/delcy-rodriguez-anuncio-la-excarcelacion-de-131-presos-politicos-tras-la-primera-ronda-de-negociaciones-con-la-oposicion/">Infobae</a>, <a href="https://insightcrime.org/news/the-colectivos-role-in-the-struggle-for-power-in-post-maduro-venezuela/">InSight Crime</a>.</li>
<li>Entrevista de asilo: <a href="https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum/preparing-for-your-affirmative-asylum-interview">USCIS</a>, <a href="https://shorelineimmigration.com/asylum/asylum-interview-sample-questions/">Shoreline Immigration</a>, <a href="https://www.claxtonlawgroup.com/asylum/asylum-interview-preparation/">Claxton Law</a>, <a href="https://www.youtube.com/watch?v=g6FFCiqRiA0">YouTube (simulacro con ex oficial)</a>.</li>
</ul>
<p><b>Este documento es una ayuda de estudio sobre tu propio caso, no asesoría legal.</b> Las cifras de organismos y de la prensa provienen de las fuentes enlazadas y pueden variar según el recuento; donde hay más de una cifra, se indican. Las respuestas están redactadas a partir de lo que ya declaraste; ajusta cualquier frase que no coincida con tu memoria. Las correcciones al I-589, los antecedentes penales y la discreción son decisiones de tu abogada.</p>
<p>Versión 7 &mdash; 27 de septiembre de 2026. Versiones anteriores respaldadas en <code>_backup_2026-09-26</code>. Documentos de Ángel leídos: <code>Denuncia de CICPC.pdf</code>, <code>Denuncia en Fiscalia 28 01 2019</code> (2 pp.), <code>Denuncia en Defensoria 28 01 2019</code> (2 pp.), <code>Carta de activista politico MUD Angel desde 2016.pdf</code>, <code>Carta de Voluntad Popular.pdf</code> y <code>Asilo - Angel Navarro.docx</code>.</p>
</div>

<!-- ============================================================ -->
<h2 id="s13">13 &middot; Todas las fechas, en orden</h2>

<p class="lede">Todo el documento, reducido a una sola columna de tiempo. Cada fila: la fecha, entre paréntesis a qué capa pertenece (<span class="tag pais">País</span> el contexto de Venezuela, <span class="tag yo">Tú</span> lo que viviste, <span class="tag fam">Familia</span> lo que le pasó a los tuyos, o un trámite), y una línea de qué pasó. Para el detalle completo, usa el enlace de vuelta a su sección.</p>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>Qué pasó</th></tr>
<tr><td class="f">12/02/2014 <i>(País)</i></td><td>Marchas estudiantiles en el país; muere Bassil Da Costa, el primer caído de esas protestas. <a href="#s4">§4</a></td></tr>
<tr><td class="f">18&ndash;19/02/2014 <i>(País)</i></td><td>Leopoldo López se entrega; Génesis Carmona muere baleada en una protesta en Valencia. <a href="#s4">§4</a></td></tr>
<tr><td class="f">2014 <i>(Tú)</i></td><td>El encarcelamiento de López y las muertes de jóvenes manifestantes te sacan de simpatizante. <a href="#s4">§4</a></td></tr>
<tr><td class="f">2015 <i>(Tú)</i></td><td>Te sumas al equipo juvenil de apoyo a los movimientos estudiantiles y marchas. <a href="#s4">§4</a></td></tr>
<tr><td class="f">06/12/2015 <i>(País)</i></td><td>La MUD gana la Asamblea Nacional por primera vez en 16 años. <a href="#s4">§4</a></td></tr>
<tr><td class="f">12/02/2016 <i>(Tú)</i></td><td>Fecha desde la que Voluntad Popular certifica tu activismo (código 111124225). <a href="#s4">§4</a></td></tr>
<tr><td class="f">21/04/2016 <i>(Familia)</i></td><td>Allanamiento de la casa a las 6 a. m.; tu hermana Emily es detenida e interrogada hasta la noche. <a href="#s4">§4</a></td></tr>
<tr><td class="f">Abr&ndash;jun 2016 <i>(País)</i></td><td>La oposición reúne cerca de 400.000 firmas para el referendo revocatorio. <a href="#s4">§4</a></td></tr>
<tr><td class="f">20/10/2016 <i>(País)</i></td><td>El CNE suspende el proceso del revocatorio, con jueces de Monagas entre los que lo avalan. <a href="#s4">§4</a></td></tr>
<tr><td class="f">24/10/2016 <i>(País)</i></td><td>En Maturín detienen a Carlos Báez, activista de VP, por colgar una pancarta: un caso casi idéntico al tuyo. <a href="#s4">§4</a></td></tr>
<tr><td class="f">Mar&ndash;jul 2017 <i>(País)</i></td><td>Cuatro meses de protestas masivas; el 19 de abril, &ldquo;la Madre de todas las marchas&rdquo;. <a href="#s4">§4</a></td></tr>
<tr><td class="f">19/04/2017 <i>(País)</i></td><td>En Monagas detienen a Yoel Bellorín, docente universitario: primer preso político del estado. <a href="#s4">§4</a></td></tr>
<tr><td class="f">05/06/2017 <i>(País)</i></td><td>Detienen a Hernán Vizcarrondo, de 70 años, junto a otras 12 personas en Monagas. <a href="#s4">§4</a></td></tr>
<tr><td class="f">16/07/2017 <i>(País)</i></td><td>Consulta popular de la oposición: más del 99% rechaza la Constituyente. <a href="#s4">§4</a></td></tr>
<tr><td class="f">20/07/2017 <i>(País)</i></td><td>En Maturín detienen a Génesis Tirado y Humberto Marquina; únicos presos políticos de Monagas juzgados por tribunal militar. <a href="#s4">§4</a></td></tr>
<tr><td class="f">10/09 y 15/10/2017 <i>(Tú)</i></td><td>Apoyas la recolección para las primarias de la MUD a la gobernación de Monagas y las elecciones de gobernadores. <a href="#s4">§4</a></td></tr>
<tr><td class="f">18/05/2018 <i>(Familia)</i></td><td>Un colectivo aliado a los Tupamaros manda mensajes de amenaza a Ángel con datos de ambos (universidad, casa, carro). <a href="#s4">§4</a></td></tr>
<tr><td class="f">09/06/2018 <i>(Tú &mdash; el ataque)</i></td><td>Motorizados los interceptan saliendo de una reunión en La Floresta: roban el carro y las cédulas, golpean y disparan. <a href="#s4">§4</a></td></tr>
<tr><td class="f">11/06/2018 <i>(Tú)</i></td><td>Denuncia ante el CICPC (expediente K-18-0074-02562), registrada solo como robo de vehículo. <a href="#s4">§4</a></td></tr>
<tr><td class="f">Jun&ndash;jul 2018 <i>(Familia)</i></td><td>Llamadas amenazantes a tu madre; ella apaga el teléfono más de un mes. <a href="#s4">§4</a></td></tr>
<tr><td class="f">2018 <i>(Tú &mdash; escondites)</i></td><td>Se esconden en Los Guaritos y unas ocho semanas en Puerto La Cruz; las amenazas los siguen. <a href="#s4">§4</a></td></tr>
<tr><td class="f">Dic 2018 <i>(Familia)</i></td><td>Tus padres les aconsejan bajar el perfil como activistas y terminar los estudios. <a href="#s4">§4</a></td></tr>
<tr><td class="f">23/01/2019 <i>(Tú &mdash; la Catedral)</i></td><td>Quedan cercados en la Catedral de Maturín por colectivos y la GNB; casi mil personas retenidas varias horas. <a href="#s4">§4</a></td></tr>
<tr><td class="f">25/01/2019 <i>(Familia)</i></td><td>Llamada con amenaza de muerte explícita a tu madre: que se fueran de la ciudad o los matarían. <a href="#s4">§4</a></td></tr>
<tr><td class="f">28/01/2019 <i>(Tú)</i></td><td>Tú y Ángel presentan denuncias formales ante la Fiscalía y la Defensoría del Pueblo de Monagas. <a href="#s4">§4</a></td></tr>
<tr><td class="f">03/02/2019 <i>(Familia)</i></td><td>Ángel se gradúa de Abogado; no puede asistir al acto. <a href="#s4">§4</a></td></tr>
<tr><td class="f">18/02/2019 <i>(Tú)</i></td><td>Te gradúas de TSU en Diseño Gráfico (IUTIRLA); tampoco puedes asistir. <a href="#s4">§4</a></td></tr>
<tr><td class="f">23/02/2019 <i>(Tú)</i></td><td>Tu última actividad política en Venezuela, el día de la ayuda humanitaria. <a href="#s4">§4</a></td></tr>
<tr><td class="f">28&ndash;29/03/2019 <i>(Tú)</i></td><td>Sales de Venezuela con Ángel hacia Santo Domingo, República Dominicana. <a href="#s4">§4</a></td></tr>
<tr><td class="f">02/04/2019 <i>(Tú)</i></td><td>Llegas a Orlando con visa B2. <a href="#s4">§4</a></td></tr>
<tr><td class="f">Abr 2019 <i>(Familia)</i></td><td>Grupos armados rondan la casa en Maturín durante una semana, según vecinos. <a href="#s5">§5</a></td></tr>
<tr><td class="f">05/12/2019 <i>(Tú)</i></td><td>Firmas el I-589, ocho meses después de llegar: dentro del plazo de un año. <a href="#s5">§5</a></td></tr>
<tr><td class="f">14/12/2019 <i>(Familia)</i></td><td>Tu madre Zoraida llega a Estados Unidos. <a href="#s5b">§5b</a></td></tr>
<tr><td class="f">13/03/2020 <i>(Familia)</i></td><td>Tu padre es agredido en Maturín por hombres armados que preguntaban por ustedes. <a href="#s5">§5</a></td></tr>
<tr><td class="f">20/08/2020 <i>(Tú)</i></td><td>Recibes el I-765, permiso de trabajo por asilo pendiente. <a href="#s5">§5</a></td></tr>
<tr><td class="f">24/08/2020 <i>(Familia)</i></td><td>Tu madre firma su propio I-589. <a href="#s5b">§5b</a></td></tr>
<tr><td class="f">24/04 y 15/05/2021 <i>(Tú &mdash; antecedente)</i></td><td>Hechos de tus dos casos penales en Hillsborough, Florida (exposición de órganos sexuales, delitos menores). <a href="#s9">§9-J</a></td></tr>
<tr><td class="f">16/04/2021 <i>(Familia)</i></td><td>Encapuchados, grabados por las cámaras de la casa, gritan contra &ldquo;la familia traidora de la patria&rdquo;. <a href="#s5">§5</a></td></tr>
<tr><td class="f">19/04/2021 <i>(Familia)</i></td><td>Tu padre huye de Venezuela; hoy vive contigo en Rockford. <a href="#s5">§5</a></td></tr>
<tr><td class="f">04/08/2021 <i>(Tú &mdash; trámite)</i></td><td>Presentas el I-821, solicitud de TPS. <a href="#s9">§9-J</a></td></tr>
<tr><td class="f">05/01/2022 <i>(Tú &mdash; trámite)</i></td><td>Declaración de nolo contendere; el juez suspende la adjudicación en los dos casos penales. <a href="#s9">§9-J</a></td></tr>
<tr><td class="f">13/06/2022 <i>(Tú &mdash; trámite)</i></td><td>Audiencia de VOP por una cita perdida; se cierra tu probatoria como exitosa. <a href="#s9">§9-J</a></td></tr>
<tr><td class="f">06/06/2022 <i>(Tú &mdash; trámite)</i></td><td>PMG certifica que completaste el programa de tratamiento (discharge report). <a href="#s9">§9-J</a></td></tr>
<tr><td class="f">14/02/2024 <i>(Tú &mdash; trámite)</i></td><td>USCIS te niega el TPS por los dos delitos menores; esa regla es exclusiva del TPS, no del asilo. <a href="#s9">§9-J</a></td></tr>
<tr><td class="f">26/04/2024 <i>(Tú &mdash; trámite)</i></td><td>Firmas el G-28 con el Lcdo. Ángel Matos como tu abogado de asilo. <a href="#s10">§10</a></td></tr>
<tr><td class="f">03/01/2026 <i>(País)</i></td><td>Captura de Maduro en una operación militar; asume Delcy Rodríguez. <a href="#s7">§7</a></td></tr>
<tr><td class="f">08/01/2026 <i>(País)</i></td><td>Empiezan las excarcelaciones de presos políticos. <a href="#s7">§7</a></td></tr>
<tr><td class="f">19/02/2026 <i>(País)</i></td><td>Entra en vigor la Ley de Amnistía, con exclusiones y sin restituir bienes ni inhabilitaciones. <a href="#s7">§7</a></td></tr>
<tr><td class="f">24/02/2026 <i>(País)</i></td><td>Foro Penal reporta más de 573 presos políticos, pese a 436 liberaciones. <a href="#s7">§7</a></td></tr>
<tr><td class="f">Ago 2026 <i>(País)</i></td><td>Delcy Rodríguez anuncia 131 excarcelaciones más tras negociar con la oposición. <a href="#s7">§7</a></td></tr>
<tr><td class="f">16/09/2026 <i>(País)</i></td><td>La Misión de la ONU concluye que el aparato represivo sigue &ldquo;intacto&rdquo; y los colectivos, activos. <a href="#s7">§7</a></td></tr>
<tr><td class="f">16/09/2026 <i>(Tú &mdash; trámite)</i></td><td>Confirmas el cambio de abogada: &ldquo;Patricia&rdquo; reemplaza al Lcdo. Ángel Matos. <a href="#s10">§10</a></td></tr>
<tr><td class="f">01/10/2026 <i>(Tú &mdash; trámite)</i></td><td>Tu entrevista con el oficial de asilo de USCIS. <a href="#s11">§11</a></td></tr>
</table>
</div>

</div>

<script>
(function(){
  var body=document.body;
  var btn=document.getElementById("modoEstudio");
  var all=document.getElementById("abrirTodas");
  function setModo(on){
    if(on){body.classList.add("estudio");btn.textContent="Modo estudio: activo (toca una pregunta)";}
    else{body.classList.remove("estudio");btn.textContent="Modo estudio: tapar respuestas";
      var qs=document.querySelectorAll(".q.open");for(var i=0;i<qs.length;i++){qs[i].classList.remove("open");}}
  }
  btn.addEventListener("click",function(){setModo(!body.classList.contains("estudio"));});
  all.addEventListener("click",function(){
    var qs=document.querySelectorAll(".q");
    var todosAbiertos=!body.classList.contains("estudio");
    if(body.classList.contains("estudio")){
      for(var i=0;i<qs.length;i++){qs[i].classList.add("open");}
    }else{setModo(false);}
  });
  var pregs=document.querySelectorAll(".q .pregunta");
  for(var i=0;i<pregs.length;i++){
    pregs[i].addEventListener("click",function(){
      if(!body.classList.contains("estudio")){return;}
      this.parentNode.classList.toggle("open");
    });
  }
  // Casillas de la lista de documentos: se recuerdan en este dispositivo
  var key="asilo_rafael_v6_chk";
  var saved={};
  try{saved=JSON.parse(localStorage.getItem(key)||"{}");}catch(e){saved={};}
  var cbs=document.querySelectorAll('.chk input[type="checkbox"]');
  for(var j=0;j<cbs.length;j++){
    (function(cb){
      if(saved[cb.id]){cb.checked=true;}
      cb.addEventListener("change",function(){
        saved[cb.id]=cb.checked;
        try{localStorage.setItem(key,JSON.stringify(saved));}catch(e){}
      });
    })(cbs[j]);
  }
})();

// Escuchar cada sección en voz alta, tramo por tramo
(function(){
  if(!('speechSynthesis' in window)) return;
  var botonActual=null;
  function detener(){
    window.speechSynthesis.cancel();
    if(botonActual){botonActual.classList.remove('on');botonActual.textContent="▶ Escuchar";}
    botonActual=null;
  }
  var h2s=document.querySelectorAll('h2[id]');
  for(var i=0;i<h2s.length;i++){
    (function(h2){
      var btn=document.createElement('button');
      btn.type='button';btn.className='leer';btn.textContent="▶ Escuchar";
      h2.appendChild(btn);
      btn.addEventListener('click',function(e){
        e.stopPropagation();
        var eraEste=(botonActual===btn);
        detener();
        if(eraEste){return;}
        var partes=[];var nodo=h2.nextElementSibling;
        while(nodo && nodo.tagName!=='H2'){
          partes.push(nodo.innerText||nodo.textContent||'');nodo=nodo.nextElementSibling;
        }
        var texto=partes.join('. ').trim();
        if(!texto){return;}
        var u=new SpeechSynthesisUtterance(texto);
        u.lang='es-ES';u.rate=0.97;
        u.onstart=function(){botonActual=btn;btn.classList.add('on');btn.textContent="■ Detener";};
        u.onend=detener;
        u.onerror=detener;
        window.speechSynthesis.speak(u);
      });
    })(h2s[i]);
  }
  window.addEventListener('beforeunload',function(){window.speechSynthesis.cancel();});
})();
</script>
</body>
</html>
`;
