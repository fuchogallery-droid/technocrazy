// Generado desde Guion_Entrevista_Asilo_Zoraida.html - no editar a mano. Ver _generar_docs_sitio.ps1

export const DOCUMENTO_HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Historia de Zoraida - Cronología para la entrevista de asilo</title>
<style>
  :root{
    --bg:#faf9f7; --fg:#1c1b19; --muted:#5f5b54; --line:#ddd8d0;
    --card:#fff; --accent:#5b3a6e; --warn:#8a5a00; --warnbg:#fdf6e6;
    --errbg:#fdefec; --err:#96301c; --okbg:#eef5ee; --ok:#2f5d3a;
    --newbg:#eef1f7; --new:#2f4470; --yo:#f3edf6;
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
  .tag.viv{background:var(--ok)} .tag.ref{background:#6b6f78} .tag.anexo{background:#a2456b}

  /* Barra de historias */
  .hist{position:sticky;top:0;z-index:10;display:flex;gap:6px;align-items:center;background:#1c1b19;padding:8px 12px;
    font-family:system-ui,sans-serif}
  .hist span{color:#a9a196;font-size:12px;letter-spacing:.06em;text-transform:uppercase;margin-right:6px}
  .hist a{color:#e9e4dc;text-decoration:none;padding:8px 14px;border-radius:7px;font-size:13.5px;font-weight:600;border:1px solid #3a3733}
  .hist a.on{background:var(--accent);color:#fff;border-color:var(--accent)}
  .hist ~ .wrap .barra{top:52px}

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
  body.estudio .q .pregunta::after{content:"  (toque para ver la respuesta)";font-weight:400;font-size:12.5px;color:var(--muted);font-family:system-ui,sans-serif}
  body.estudio .q.open .pregunta::after{content:""}
  .barra{position:sticky;top:0;z-index:5;background:var(--bg);padding:10px 0;margin:0 0 6px;border-bottom:1px solid var(--line);
    display:flex;gap:10px;align-items:center;flex-wrap:wrap;font-family:system-ui,sans-serif;font-size:13px}
  .btn{font:600 13px system-ui,sans-serif;background:var(--accent);color:#fff;border:0;border-radius:7px;padding:8px 14px;cursor:pointer}
  .btn.sec{background:#fff;color:var(--accent);border:1px solid var(--accent)}
  .bloque{font-family:system-ui,sans-serif;font-size:12.5px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;
    color:#fff;background:var(--accent);display:inline-block;padding:4px 11px;border-radius:5px;margin:30px 0 12px}
  .chk{display:flex;gap:10px;align-items:flex-start;margin:0 0 8px}
  .chk input{margin-top:6px;flex:none}
  .foot{margin-top:60px;padding-top:18px;border-top:1px solid var(--line);font-family:system-ui,sans-serif;font-size:13px;color:var(--muted)}
  .foot li{margin:0 0 4px}

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

<div class="wrap">

<h1>Mi historia como madre y opositora: cronología para la entrevista de asilo</h1>
<p class="sub">Zoraida del Carmen Coa de Navarro &middot; A218-010-753 &middot; Caso de asilo ZMI2045927760<br>
Versión 4 &mdash; 27 de septiembre de 2026. <b>Basada en su &ldquo;Anexo aclaratorio y complementario a mi declaración de asilo&rdquo;</b>, que cambia la base de su caso: ahora usted declara actividad política <b>propia</b>, no solo la de sus hijos. <b>Reforzada con los documentos de Ángel</b> (denuncia del CICPC, denuncias del 28/01/2019 en Fiscalía y Defensoría, carta de la abogada Soraya Hernández de Ciano y constancias de Voluntad Popular). Lo que usted vivió y lo que le contaron, el país como contexto documentado, y un panel de preguntas con respuestas cortas y completas. <b>La fecha de su entrevista no consta en su expediente:</b> confírmela en su aviso de USCIS o en su cuenta en línea.</p>

<div class="alerta">
  <p class="t">La regla que manda sobre todo lo demás</p>
  <p><b>Todo lo que diga tiene que ser verdad, tiene que ser suyo y tiene que poder contarlo con detalles.</b> Las respuestas de este documento están armadas <b>solo con hechos que usted ya declaró</b> (su relato, su I-589, sus declaraciones juradas, sus cartas y su anexo) o que constan en fuentes públicas con enlace. Cada hecho lleva una etiqueta: <span class="tag viv">Lo viví</span> es lo que usted presenció; <span class="tag ref">Me lo contaron</span> es lo que supo por su esposo, sus hijos o sus vecinos, y <b>así hay que decirlo</b>; <span class="tag anexo">Anexo</span> es algo que aparece por primera vez en su anexo; <span class="tag conf">Confirma</span> es un dato que su expediente no resuelve y solo usted puede completar. Si algo aquí no coincide con su memoria, manda su memoria y se corrige el papel. <b>&ldquo;No recuerdo&rdquo; es una respuesta válida</b>; un detalle inventado que después se contradice hace más daño que cien &ldquo;no recuerdo&rdquo;.</p>
  <p>No memorice párrafos: entienda la secuencia y cuéntela con sus palabras. El oficial nota cuándo alguien recita.</p>
</div>

<div class="nuevo">
  <p class="t">Qué cambió con su anexo (léalo primero)</p>
  <p><b>Lo nuevo.</b> Su anexo dice que usted <b>mantuvo públicamente una posición opositora</b> y que <b>desde aproximadamente 1983</b> participó en actividades políticas, gremiales, electorales y comunitarias: <b>primero vinculada con COPEI</b> y después con la <b>MUD</b> (marchas, procesos electorales, recolecciones de firmas y campañas). Sus hijos Ángel y Rafael, dice, desarrollaron <b>sus propias convicciones</b> y participaron en Voluntad Popular. Añade tres datos que ningún papel anterior traía: <b>la orden judicial</b> del allanamiento de 2016 citaba una investigación por &ldquo;desestabilización, instigación pública y sabotaje&rdquo;; usted <b>participó personalmente en la marcha del 23 de enero de 2019</b> y se quedó en la Av. Juncal mientras sus hijos seguían a la Catedral; y expone <b>su temor de regresar</b> como consecuencia de su propia identificación política y la de su familia.</p>
  <p><b>Por qué mejora su caso.</b> Su solicitud ya marcó <b>&ldquo;opinión política&rdquo;</b>. Con el anexo, esa opinión deja de ser solo la de sus hijos: es también la suya, y la persecución llegó a usted por lo que usted piensa <b>y</b> por lo que piensa su familia. Además su propio relato de 2020 decía que &ldquo;participando en muchísimas marchas y protestas pacíficas&rdquo; y hablaba en plural (&ldquo;hemos arriesgado nuestras vidas&rdquo;). Y COPEI sí era una de las fuerzas de la MUD, como lista el relato de Rafael.</p>
  <p style="margin:0"><b>Por qué exige más cuidado.</b> Ninguna de sus declaraciones anteriores (relato, I-589, declaraciones por Emily y por Ángel, cartas a USCIS) menciona su activismo; su I-589 dijo <b>NO</b> a la pregunta de si usted o su familia pertenecieron a un partido u organización; y <b>no hay ningún documento suyo de militancia</b> en el expediente. Cuando un dato aparece por primera vez casi al final, el oficial pregunta <i>por qué no estaba antes</i>. Este documento le prepara esa respuesta, pero <b>solo usted puede llenar los detalles</b>: años, partido, cargos, marchas, firmas, campañas, testigos.</p>
</div>

<div class="alerta">
  <p class="t">Cuatro puntos críticos del anexo que hay que corregir o aclarar antes de la entrevista</p>
  <ol style="margin:0">
    <li><b>La fecha de salida de sus hijos.</b> El anexo dice que Ángel y Rafael salieron de Venezuela <b>el 3 de abril de 2019</b>. Es imposible: <b>llegaron a Orlando el 2 de abril de 2019</b> y salieron de Venezuela el 28 o 29 de marzo (Rafael y Ángel lo escriben así en sus documentos). Confirme con los pasaportes y corrija el anexo <b>antes de presentarlo</b>.</li>
    <li><b>La noche del ataque.</b> El anexo dice que usted no estuvo presente y que <i>&ldquo;cuando mis hijos regresaron a nuestra casa&rdquo;</i> vio su miedo. Pero su declaración de mayo de 2026 por Ángel dice: <i>&ldquo;esa noche recibí una llamada desesperada de mis hijos pidiéndome ayuda y acudí inmediatamente a buscarlos&rdquo;</i>, y Ángel dice que llamó a su madre para que los buscara. Pueden ser las dos cosas ciertas (los recogió y los llevó a casa), pero <b>hay que contarlas igual en todos los papeles</b>.</li>
    <li><b>El activismo propio.</b> Nada anterior lo menciona; el I-589 lo niega. Hay que corregir la Parte B, 3.A de <b>NO</b> a <b>SÍ</b> y describirlo (partido, años, actividades).</li>
    <li><b>La orden judicial y &ldquo;sabotaje&rdquo;.</b> Sus declaraciones anteriores dicen que entraron <i>sin orden</i> (y que la orden se la entregaron después, irregularmente); el anexo dice que la orden hablaba de un delito contra el Estado. Un oficial puede leerlo como una investigación penal legítima. La explicación está en la sección 4 (año 2016).</li>
  </ol>
</div>

<p class="aviso" style="padding:14px 20px"><b>Nota sobre esta versión.</b> Recibí <b>dos páginas</b> del anexo. La segunda termina en el párrafo del temor de regresar (&ldquo;...durante el ataque del 9 de junio de 2018&rdquo;). Si el anexo tiene más páginas, hay que revisar que digan lo mismo que el resto de este documento.</p>

<ul class="toc">
  <li><a href="#s1"><b>1</b> Su caso en 60 segundos y en 3 minutos</a></li>
  <li><a href="#s2"><b>2</b> Por qué la persiguieron a usted</a></li>
  <li><a href="#s3"><b>3</b> Quién es quién: colectivos y cuerpos del Estado</a></li>
  <li><a href="#s4"><b>4</b> Su cronología, de 1983 a 2026</a></li>
  <li><a href="#s5"><b>5</b> Casos documentados de allanamientos y de familias perseguidas</a></li>
  <li><a href="#s6"><b>6</b> Venezuela en 2026: por qué no puede volver</a></li>
  <li><a href="#s7"><b>7</b> Cifras para memorizar</a></li>
  <li><a href="#s8"><b>8</b> Panel de preguntas y respuestas</a></li>
  <li><a href="#s9"><b>9</b> Correcciones y puntos a confirmar</a></li>
  <li><a href="#s10"><b>10</b> Plan de estudio y día de la entrevista</a></li>
  <li><a href="#s11"><b>11</b> Fuentes</a></li>
</ul>

<!-- ============================================================ -->
<h2 id="s1">1 &middot; Su caso en 60 segundos y en 3 minutos</h2>

<p class="lede">Si el oficial le dice &ldquo;cuénteme por qué pide asilo&rdquo;, esta es la columna vertebral. <b>Su caso ahora tiene dos patas: usted es opositora y su familia es opositora.</b> A ambas las persiguieron los mismos grupos.</p>

<div class="ancla">
  <b>60 segundos</b>
  Soy Zoraida Coa de Navarro, nací en Tucupita y viví en Maturín. Fui maestra y directora de escuela. Desde joven he participado en política de oposición: primero con COPEI y luego en la MUD, en marchas, procesos electorales, recolección de firmas y campañas. Mis hijos Rafael y Ángel, y mi hijastra Emily, también eran opositores, de Voluntad Popular. El <b class="f">21 de abril de 2016</b>, a las seis de la mañana, funcionarios entraron a <b>mi casa</b> y se llevaron detenida a Emily hasta la noche. En <b class="f">2018</b> y <b class="f">2019</b> recibí más de diez llamadas amenazantes en mis teléfonos. El <b class="f">9 de junio de 2018</b> atacaron a mis hijos y les robaron los documentos. El <b class="f">23 de enero de 2019</b> yo estuve en la marcha de Maturín, y mis hijos quedaron cercados en la Catedral. Vine a verlos en <b class="f">diciembre de 2019</b> y no pude regresar: el <b class="f">13 de marzo de 2020</b> agredieron a mi esposo preguntando por ellos, y el <b class="f">16 de abril de 2021</b> unos encapuchados armados gritaron frente a mi casa contra mi familia; mi esposo huyó tres días después. Si regreso, esos mismos grupos siguen allí.
</div>

<div class="ancla">
  <b>3 minutos (añada estos cuatro tramos, en este orden)</b>
  <b>1. Quién soy.</b> Docente desde <b class="f">1983</b>; subdirectora y directora de escuela primaria en Monagas; profesora de Ciencias Sociales; magíster en Educación Superior. Casada desde el <b class="f">30 de septiembre de 1995</b> con José Emilio Navarro. Criamos a tres hijos: Emily, que crié desde niña como hija, Rafael y Ángel.<br>
  <b>2. Mi posición política.</b> [<span class="tag anexo">Anexo</span>] Desde aproximadamente <b class="f">1983</b> participé en actividades políticas, gremiales, electorales y comunitarias de oposición. Primero con COPEI y después en la MUD. Mi posición fue pública y anterior a todo lo que le pasó a mi familia. [<span class="tag conf">Confirma</span> agregue dos o tres hechos concretos suyos: en qué años, qué hacía, con quién.]<br>
  <b>3. Lo que nos pasó.</b> Mis hijos y Emily eran activistas de Voluntad Popular y la MUD. Por eso en <b class="f">2016</b> allanaron mi casa; en <b class="f">2018</b> atacaron a Rafael y a Ángel y les robaron los documentos; en <b class="f">2019</b> amenazaron con matarlos. Y a mí me llamaron más de diez veces. Una voz me dijo: <i>&ldquo;Tu muchachita se salvó esta vez, pero no podrá esconderse para siempre&rdquo;</i>.<br>
  <b>4. Por qué no puedo volver.</b> Vine a ver a mis hijos en <b class="f">diciembre de 2019</b> y a mi esposo lo agredieron el <b class="f">13/03/2020</b>; en <b class="f">2021</b> tuvo que huir. Pedí asilo el <b class="f">24 de agosto de 2020</b>, dentro del año. Los grupos que nos persiguieron siguen operando con impunidad en Maturín, y la ONU dijo en <b class="f">septiembre de 2026</b> que el aparato represivo sigue intacto.
</div>

<!-- ============================================================ -->
<h2 id="s2">2 &middot; Por qué la persiguieron a usted (la pregunta que decide su caso)</h2>

<p class="lede">Con el anexo, su respuesta tiene <b>dos razones que se refuerzan</b>: lo que usted es (una opositora pública) y lo que es su familia (opositores identificados). Su anexo lo dice así: <i>&ldquo;nuestra identificación política podía tener sobre nuestra familia&rdquo;</i> consecuencias.</p>

<div class="scroll">
<table>
<tr><th>Razón</th><th>Qué dice su expediente</th><th>Estado de la prueba</th></tr>
<tr><td><b>1. Su propia oposición política</b></td><td>[<span class="tag anexo">Anexo</span>] Desde ~1983: actividades políticas, gremiales, electorales y comunitarias; primero COPEI, luego MUD: marchas, elecciones, firmas, campañas. Su relato de 2020 dice &ldquo;participando en muchísimas marchas y protestas pacíficas&rdquo;. El <b class="f">23/01/2019</b> participó personalmente en la marcha de Maturín.</td><td><b>Sin documentos suyos.</b> Solo su palabra, su relato y el testimonio de sus hijos. Hay que conseguir pruebas y testigos (ver más abajo).</td></tr>
<tr><td><b>2. La oposición de su familia</b></td><td>Rafael y Ángel, activistas de Voluntad Popular y la MUD; Emily, activista desde 2013.</td><td><b>Buena prueba:</b> constancia de Voluntad Popular del <b class="f">8/11/2019</b> (códigos de inscripción de los tres) y los relatos de Rafael y Ángel.</td></tr>
<tr><td><b>3. Los hechos dirigidos a usted</b></td><td>El allanamiento de su casa, las llamadas a sus teléfonos, la agresión a su esposo, los encapuchados frente a su casa.</td><td>Sus declaraciones; testigos vecinos identificados; cámaras (video sin localizar).</td></tr>
</table>
</div>

<h3>Los hechos dirigidos a usted, uno por uno</h3>
<div class="scroll">
<table>
<tr><th>Hecho</th><th>Qué pasó</th><th>Cómo lo sabe</th></tr>
<tr><td><b class="f">21/04/2016</b><br>Allanamiento de su casa</td><td>6 a.m., funcionarios y civiles sin identificación; alegaban &ldquo;material subversivo&rdquo;; se llevaron detenida a Emily hasta la noche. La orden se la entregaron <b>después</b>, de forma irregular; hablaba de &ldquo;desestabilización, instigación pública y sabotaje&rdquo;.</td><td><span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> que usted estaba en la casa</td></tr>
<tr><td><b>2018&ndash;2019</b><br>Llamadas a sus teléfonos</td><td>Más de diez llamadas al teléfono residencial (0291-643-5717) y a su celular (0424-912-2794): amenazas de castigo y consecuencias; una voz burlona: &ldquo;Tu muchachita se salvó esta vez&rdquo;. Tras el ataque a sus hijos, llamadas de &ldquo;intimidación y de extorsión&rdquo;.</td><td><span class="tag viv">Lo viví</span></td></tr>
<tr><td><b>2018</b><br>Acoso a la vivienda</td><td>Hombres armados vestidos de rojo o de negro rondando la zona y preguntando por &ldquo;la muchacha opositora&rdquo;; vecinos avisaron que fotografiaban la casa.</td><td><span class="tag viv">Lo viví</span> y <span class="tag ref">Me lo contaron</span> los vecinos</td></tr>
<tr><td><b class="f">23/01/2019</b><br>Marcha de Maturín</td><td>[<span class="tag anexo">Anexo</span>] Usted participó personalmente; se quedó en la Av. Juncal mientras Ángel y Rafael seguían a la Catedral, donde quedaron cercados.</td><td><span class="tag viv">Lo viví</span> hasta la Av. Juncal; lo demás <span class="tag ref">me lo contaron</span></td></tr>
<tr><td><b class="f">13/03/2020</b><br>Agresión a su esposo</td><td>Cuatro hombres armados con ropa militar negra, sin identificación, lo agredieron y exigían saber dónde estaban sus hijos; amenazaron con irrumpir para buscar &ldquo;pruebas de conspiración&rdquo;.</td><td><span class="tag ref">Me lo contó mi esposo</span> (usted estaba en EE.UU.)</td></tr>
<tr><td><b class="f">16/04/2021</b><br>Encapuchados en su casa</td><td>Grabados por las cámaras: hombres armados gritando por &ldquo;Emily y su familia traidora de la patria&rdquo;. Testigos: los vecinos Eduardo José Ruiz y Josefa María Noguera.</td><td><span class="tag ref">Me lo contaron</span> el vecino y mi esposo</td></tr>
</table>
</div>

<div class="bien">
  <p class="t">La frase para contestar &ldquo;¿por qué a usted?&rdquo;</p>
  <p>&ldquo;Porque soy opositora desde hace muchos años, de forma pública, y mis hijos y mi hijastra también lo eran. Esos grupos nos trataron a todos como el mismo enemigo. Fueron a <b>mi casa</b>, llamaron a <b>mis teléfonos</b> y golpearon a <b>mi esposo</b> preguntando por mis hijos.&rdquo;</p>
  <p style="margin:0"><b>Y lo que hicieron con su familia lo documenta la ONU.</b> En septiembre de 2025 su Misión de Determinación de los Hechos describió <b>un &ldquo;patrón sostenido y sistemático&rdquo;</b> de detención de familiares de opositores &ldquo;como forma de represalia o presión hacia la persona opositora&rdquo;, para &ldquo;generar miedo y control social&rdquo;. Y Amnistía Internacional publicó en octubre de 2017 <b>&ldquo;Noches del terror&rdquo;</b>: al menos 47 allanamientos ilegales de viviendas en 11 estados entre abril y julio de 2017, sin orden judicial, con amenazas de muerte, por agentes del Estado y civiles armados afines al gobierno.</p>
</div>

<div class="alerta">
  <p class="t">Las cinco preguntas que el oficial le hará sobre su activismo propio (prepárelas con hechos, no con adjetivos)</p>
  <ol style="margin:0">
    <li><b>¿Desde cuándo y cómo empezó?</b> El anexo dice &ldquo;aproximadamente 1983&rdquo;. <span class="tag conf">Confirma</span> qué hacía a los 18 o 19 años y en qué consistía.</li>
    <li><b>¿Con COPEI, qué hacía? ¿Era militante inscrita? ¿Tuvo cargo?</b> El anexo dice &ldquo;vinculada con COPEI&rdquo;. <span class="tag conf">Confirma</span> si tuvo carnet, cargo o solo apoyo, y hasta cuándo.</li>
    <li><b>¿Cuándo pasó a la MUD y qué hizo?</b> La MUD se firmó el <b class="f">23 de enero de 2008</b>, con COPEI como uno de sus partidos fundadores; su relato enumera a Copei entre los partidos de la coalición. <span class="tag conf">Confirma</span> las marchas, procesos electorales, firmas y campañas concretas (fechas, lugares, con quién).</li>
    <li><b>¿Por qué no lo dijo antes?</b> Su relato, su I-589 y sus declaraciones hablan de sus hijos. La respuesta tiene que ser verdadera y simple: por ejemplo, que el formulario lo llenó una preparadora que no es abogada, en inglés; que en el relato se centró en los hechos de sus hijos; y que el anexo es para aclararlo. <span class="tag conf">Confirma</span> cuál fue la razón real.</li>
    <li><b>¿Por qué no la persiguieron antes de 2016, si era opositora desde hace décadas?</b> Lo que consta: su familia fue perseguida a partir de 2016, cuando sus hijos y Emily eran activistas visibles y la represión se endureció (2014&ndash;2019). <span class="tag conf">Confirma</span> si a usted le pasó algo antes: en su trabajo, en su pensión, en alguna actividad.</li>
  </ol>
</div>

<div class="aviso">
  <p class="t">Cuidado: el anexo tiene que ser cierto en cada línea</p>
  <p>Un oficial de asilo puede pedirle que cuente, con detalle, cada cosa que el anexo dice. Si alguna frase (&ldquo;desde aproximadamente 1983&rdquo;, &ldquo;actividades gremiales&rdquo;, &ldquo;campañas&rdquo;) no es algo que usted pueda contar con hechos, <b>dígaselo a su abogada antes de presentarlo o de firmarlo</b> y se ajusta. Una declaración con hechos falsos en un asilo puede costarle todo el caso. Y lo contrario también vale: si es cierto y usted lo vivió, cuéntelo con orgullo y con detalles; eso es lo que la protege.</p>
</div>

<h3>Cómo probar su activismo propio (lo que falta)</h3>
<div class="scroll">
<table>
<tr><th>Prueba posible</th><th>Para qué sirve</th></tr>
<tr><td>Carnet, planilla de militancia o carta de COPEI (o de la organización regional en Monagas)</td><td>Prueba de vínculo con COPEI y desde cuándo.</td></tr>
<tr><td>Planillas o constancias de las recolecciones de firmas (por ejemplo, la del revocatorio de 2016) donde usted participó, o testigos que la vieron</td><td>Prueba de participación en procesos electorales y de firmas.</td></tr>
<tr><td>Fotos, videos o publicaciones de marchas, campañas o la del 23 de enero de 2019</td><td>Presencia y visibilidad pública.</td></tr>
<tr><td>Cartas juradas de compañeros de partido o de la MUD en Monagas</td><td>Testigos de su trayectoria.</td></tr>
<tr><td>Constancia sindical o gremial (si fue parte de un gremio docente)</td><td>Respalda &ldquo;actividades gremiales&rdquo;.</td></tr>
<tr><td><b>Ya disponible:</b> las denuncias que Ángel y Rafael presentaron el <b class="f">28/01/2019</b> ante la Fiscalía Superior del Ministerio Público de Monagas y ante la Defensora del Pueblo (sello de recibido: 28/01/2019, 9:00 a. m.)</td><td><b>Documento de la época, sellado por dos instituciones</b>, que dice que el 23/01/2019 ellos estaban <i>&ldquo;en compañía de nuestros padres José Emilio Navarro y Zoraida Coa de Navarro&rdquo;</i> en la marcha de Maturín. Respalda su presencia pública, y la de su esposo, cinco días después de los hechos.</td></tr>
<tr><td>Constancias de Voluntad Popular de Ángel y Rafael (8/11/2019) y carta de la abogada Soraya Hernández de Ciano sobre Ángel (23/09/2019)</td><td>Prueba del entorno político de la familia (2016&ndash;2019) y del contexto en el que usted participaba.</td></tr>
<tr><td>Testimonio de Rafael, Ángel y Emily sobre su participación</td><td>Prueba indirecta, ya disponible.</td></tr>
</table>
</div>

<!-- ============================================================ -->
<h2 id="s3">3 &middot; Quién es quién: los colectivos y los cuerpos del Estado</h2>

<p class="lede">Cuando el oficial pregunte &ldquo;¿quién le hizo daño?&rdquo;, la respuesta tiene dos capas: los <b>colectivos</b> (civiles armados afines al gobierno) y los <b>cuerpos de seguridad</b> que los cubren y trabajan con ellos.</p>

<div class="card">
  <p><b>Los colectivos.</b> Grupos civiles armados afines al chavismo, que actúan en moto, encapuchados. La <b>Misión de la ONU (informe de septiembre de 2026)</b> concluye que <b>&ldquo;no constituyen un fenómeno periférico sino un componente funcional del aparato represivo del Estado&rdquo;</b>. Nombra, entre otros: <b>Tupamaros</b>, <b>La Piedrita</b>, <b>Alexis Vive</b>, <b>Tres Raíces</b>, <b>Coordinadora Simón Bolívar</b>, <b>Carlos Sarría</b>, <b>Frente Sergio Rodríguez</b>; y, en 2017, el <b>Frente 5 de Marzo</b>. En su caso, sus hijos relatan que las amenazas de mayo de 2018 vinieron de &ldquo;un colectivo aliado a los Tupamaros&rdquo;, y usted dice que los atacantes de junio de 2018 <b>se identificaron como &ldquo;colectivos&rdquo;</b>. Su propio relato los describe como &ldquo;círculos bolivarianos&rdquo;, &ldquo;colectivos&rdquo;, funcionarios policiales, Guardia Nacional y Milicia Bolivariana.</p>
  <p style="margin:0"><b>Los cuerpos del Estado.</b> <b>GNB</b> (lacrimógenas, perdigones, custodia y detenciones), <b>PNB/FAES</b> (la ONU les atribuye la mayoría de <b>5.287 muertes &ldquo;por resistencia a la autoridad&rdquo; en 2018</b>), <b>SEBIN y DGCIM</b> (detenciones políticas y tortura), <b>CICPC</b> (policía de investigaciones: su declaración por Emily dice que los que allanaron su casa eran <i>&ldquo;presuntamente del CICPC&rdquo;</i>, acompañados de colectivos).</p>
  <p class="fuente" style="margin-top:10px">Fuentes: <a href="https://www.elnacional.com/investigacion/2026/09/onu-informe-colectivos-represion-estado-venezuela-2026/">El Nacional (informe ONU 2026)</a> &middot; <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea, 2017</a> &middot; <a href="https://efectococuyo.com/sucesos/que-ha-pasado-con-las-faes-desde-el-primer-informe-de-bachelet/">Efecto Cocuyo: FAES</a></p>
</div>

<!-- ============================================================ -->
<h2 id="s4">4 &middot; Su cronología: de 1983 a 2026</h2>

<p class="lede">Cada época tiene tres capas: <span class="tag pais">País</span> lo que pasaba en Venezuela (con fuente), <span class="tag yo">Usted</span> lo que vivió su familia y usted, y una <b>frase ancla</b>. Las fechas en <b class="f">negrita</b> son las que tiene que saber sin pensar. Cada hecho dice si usted lo <span class="tag viv">vivió</span> o se lo <span class="tag ref">contaron</span>, porque el oficial pregunta &ldquo;¿usted estaba allí?&rdquo;.</p>

<!-- 1983-2013 -->
<div class="era"><p class="anio">1983&ndash;2013</p><p class="lema">Docente y opositora: de COPEI a la MUD</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b>COPEI</b> (Comité de Organización Política Electoral Independiente) fue fundado el <b class="f">13 de enero de 1946</b> por Rafael Caldera; gobernó Venezuela de 1969 a 1974 y de 1979 a 1984 (con Luis Herrera Campíns). En <b class="f">1999</b> llega Hugo Chávez al poder. El <b class="f">23 de enero de 2008</b>, en el aniversario de la caída de Pérez Jiménez, los principales partidos de oposición firman en el Ateneo de Caracas el acuerdo que da origen a la <b>Mesa de la Unidad Democrática (MUD)</b>: Acción Democrática, <b>COPEI</b>, Primero Justicia, Un Nuevo Tiempo, Proyecto Venezuela, La Causa R y otros. El <b class="f">5 de marzo de 2013</b> muere Chávez; en abril de 2013 Nicolás Maduro gana por estrecho margen y Henrique Capriles denuncia fraude.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/Copei">COPEI</a> &middot; <a href="https://es.wikipedia.org/wiki/Mesa_de_la_Unidad_Democr%C3%A1tica">MUD</a> &middot; <a href="https://en.wikipedia.org/wiki/2013_Venezuelan_presidential_election">Elecciones de 2013</a></p></div>

<div class="ev yo"><p class="cab">Usted</p>
<p>Nace el <b class="f">12 de noviembre de 1964</b> en Tucupita, Delta Amacuro. Estudia como bachiller docente (1977&ndash;1982), se forma en la UPEL (1985&ndash;1991, Profesora en Ciencias Sociales) y más tarde la maestría en Educación Superior. <b class="f">1 de enero de 1983</b>: empieza como maestra (Teacher IV) para la Secretaría de Educación del Estado Monagas; una carta oficial del <b class="f">6/11/1995</b> lo certifica, con destino en la Escuela Básica &ldquo;Federico Hands&rdquo;, Las Cocuizas. <b class="f">16 de enero de 1996</b>: nombrada subdirectora de la Escuela Básica &ldquo;Manuel Piar&rdquo; por concurso público. Casada el <b class="f">30 de septiembre de 1995</b> con José Emilio Navarro; desde junio de 2002 la familia vive en Urb. Río Claro, Casa 54, Sector Tipuro, Maturín. Jubilada en <b>2008</b> según su relato (ver sección 9: su historial de trabajo aparece de cuatro formas).</p>
<p>[<span class="tag anexo">Anexo</span>] <b>Desde aproximadamente 1983</b> &mdash; usted participa en actividades <b>políticas, gremiales, electorales y comunitarias</b> vinculadas a sectores de oposición: <b>inicialmente con COPEI</b> y, después, en la <b>MUD</b> (marchas, procesos electorales, recolecciones de firmas y campañas). Su posición, dice, <b>fue pública, sostenida y anterior</b> a los hechos que afectaron a su familia. <span class="tag conf">Confirma</span> los años, el papel que tuvo y quién puede confirmarlo.</p></div>
<div class="ancla"><b>Frase ancla</b> &ldquo;Fui docente del Estado toda mi vida y opositora pública desde joven: primero con COPEI y luego en la MUD. No lo escondía.&rdquo; (Úsela solo si es cierto y con hechos concretos.)</div>

<!-- 2014 -->
<div class="era"><p class="anio">2014</p><p class="lema">Sus hijos se hacen activistas</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">12 de febrero de 2014</b> &mdash; marchas estudiantiles en decenas de ciudades. Mueren <b>Bassil Da Costa</b>, de un disparo en la cabeza, y otros; participan grupos armados afines al gobierno. <b class="f">18 de febrero</b> &mdash; Leopoldo López se entrega; <b class="f">18&ndash;19 de febrero</b>: <b>Génesis Carmona</b>, estudiante, es baleada en Valencia por civiles armados afines al gobierno y muere al día siguiente. En Mérida, los <b>Tupamaros</b> atacaron a estudiantes a balazos.</p>
<p><b>Balance:</b> <b>43 muertos</b>; Foro Penal: <b>3.127 detenciones arbitrarias</b> (febrero a mayo) y <b>33 casos de tortura</b>.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/2014_Venezuelan_protests">Protestas de 2014</a> &middot; <a href="https://en.wikipedia.org/wiki/La_Salida">La Salida</a></p></div>

<div class="ev yo"><p class="cab">Usted y su familia</p>
<p>Ángel tiene 16 años, Rafael 17. El encarcelamiento de López y los jóvenes muertos los empujan a la oposición: Ángel dice que empezó su carrera política en Voluntad Popular en 2014 junto a Rafael; Rafael, que pasó a &ldquo;una actitud más activa&rdquo;. Su anexo dice que con el tiempo <b>&ldquo;desarrollaron sus propias convicciones políticas&rdquo;</b>. <span class="tag conf">Confirma</span> si usted marchó en 2014 y cómo recibió que ellos lo hicieran.</p></div>

<!-- 2015-2016 -->
<div class="era"><p class="anio">2015&ndash;2016</p><p class="lema">Las firmas y el allanamiento de su casa</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">13 de julio de 2015</b> &mdash; comienzan las <b>Operaciones de Liberación del Pueblo (OLP)</b>: redadas masivas en viviendas. Provea registró <b>17.181 allanamientos</b> ilegales; Amnistía dijo que el <b>90% de más de 4.000 detenidos</b> en los primeros tres meses lo fueron arbitrariamente; HRW y Provea publicaron <i>&ldquo;Poder sin límites&rdquo;</i> (abril 2016). <b class="f">6 de diciembre de 2015</b> &mdash; la oposición gana la Asamblea Nacional.</p>
<p><b>Abril&ndash;junio de 2016</b> &mdash; cerca de 400.000 firmas para el referendo revocatorio. <b class="f">20 de octubre de 2016</b> &mdash; el CNE lo suspende, apoyado en decisiones de tribunales de cinco estados, entre ellos <b>Monagas</b>. <b class="f">24 de octubre de 2016</b> &mdash; en Maturín detienen a <b>Carlos Báez</b>, activista juvenil de Voluntad Popular, por colocar una pancarta a favor del revocatorio.</p>
<p class="fuente"><a href="https://provea.org/actualidad/hace-cinco-anos-el-operativo-de-liberacion-del-pueblo-abrio-el-camino-para-la-represion-total-en-venezuela/">Provea: OLP</a> &middot; <a href="https://cnnespanol.cnn.com/2016/10/20/anulan-firmas-de-la-primera-fase-del-revocatorio-en-varios-estados-de-venezuela">CNN: revocatorio</a> &middot; <a href="https://efectococuyo.com/politica/monagas-la-disidencia-es-perseguida-con-medidas-judiciales/">Efecto Cocuyo: Monagas</a></p></div>

<div class="ev yo"><p class="cab">Usted y su familia</p>
<p><b>2016.</b> Rafael, Ángel y Emily trabajan en la MUD y Voluntad Popular: validación de firmas, asambleas, casa por casa. Voluntad Popular certifica a Rafael y a Ángel como activistas desde el <b class="f">12 de febrero de 2016</b> y a Emily como activa desde 2013. [<span class="tag anexo">Anexo</span>] Usted también participó en <b>recolecciones de firmas</b> de la MUD. <span class="tag conf">Confirma</span> cuáles (por ejemplo, la del revocatorio de 2016), dónde y con quién.</p>
<p><b class="f">21 de abril de 2016 &mdash; el allanamiento. Es el hecho fundacional de su caso.</b> <span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> A las <b>6 de la mañana</b>, funcionarios armados y civiles sin identificación entran a su casa, alegando que Emily y sus hijos tenían &ldquo;material subversivo&rdquo;. Registran toda la casa y se llevan <b>detenida a Emily</b> hasta la noche. Sus declaraciones dicen que entraron <b>sin orden</b>, y que la orden se la entregaron <b>después, de manera irregular</b>. [<span class="tag anexo">Anexo</span>] Esa orden <b>&ldquo;hacía referencia a una investigación por presuntos delitos contra el Estado, incluyendo desestabilización, instigación pública y sabotaje&rdquo;</b>, y Emily, dice el anexo, <b>hacía pasantías profesionales en PDVSA</b>. Su declaración por Emily añade que quienes entraron eran <b>presuntamente del CICPC, acompañados de colectivos</b>.</p>
<p><b class="f">22 de abril de 2016</b> &mdash; usted lleva a Emily al médico: temblores, llanto incontrolable, ansiedad, insomnio; diagnóstico de reacción aguda al estrés y recomendación de atención psiquiátrica. <span class="tag viv">Lo viví</span> Emily sigue tratamiento psiquiátrico y psicológico hasta comienzos de 2018.</p>
<p>Después del allanamiento, <b>&ldquo;la persecución se volvió parte de nuestra rutina&rdquo;</b> (su declaración): colectivos vestidos de negro o de rojo merodean el sector preguntando por &ldquo;la muchacha opositora&rdquo;. Su anexo: a partir de ahí <b>&ldquo;aumentó considerablemente mi preocupación por las consecuencias que nuestra identificación política podía tener sobre nuestra familia&rdquo;</b>.</p></div>

<div class="alerta">
  <p class="t">El riesgo de la orden judicial y cómo responderlo</p>
  <p>El anexo incorpora un dato que puede volverse en contra: que <b>había una orden judicial</b> y que hablaba de &ldquo;desestabilización, instigación pública y sabotaje&rdquo; en el contexto de una pasantía en PDVSA. Un oficial puede preguntar: <i>&ldquo;¿No era una investigación penal legítima contra Emily?&rdquo;</i> Los hechos que sí tiene para contestar: (1) <b>entraron primero y la orden llegó después, de forma irregular</b>; (2) los cargos que se citan son <b>los que el gobierno ha usado contra opositores</b>: &ldquo;instigación pública&rdquo;, &ldquo;conspiración&rdquo;, &ldquo;sabotaje&rdquo; y &ldquo;desestabilización&rdquo; aparecen en imputaciones a dirigentes y activistas, según Foro Penal y la prensa; (3) el motivo político lo confirman lo que gritaban después (&ldquo;traicionar la revolución&rdquo;, &ldquo;la muchacha opositora&rdquo;, &ldquo;traidora de la patria&rdquo;); y (4) nadie volvió a presentar cargos contra Emily [<span class="tag conf">Confirma</span> si hubo algún proceso judicial posterior o si el caso quedó ahí].</p>
  <p style="margin:0"><b>Diga lo que sabe, sin decidir por el juez.</b> Y sea coherente con lo anterior: las declaraciones por Emily dicen que ella también fue señalada por un posible conocimiento de corrupción de sus jefes; el anexo habla de PDVSA. Si el oficial pregunta, cuente qué le dijeron y qué cree usted, y deje claro que a usted le dijeron &ldquo;material subversivo&rdquo;.</p>
  <p class="fuente" style="margin:10px 0 0"><a href="https://foropenal.com/venezuela-arremetida-opositores-brutalidad-tortura-persecucion-politica-venezuela/">Foro Penal / HRW: Arremetida contra opositores</a> &middot; <a href="https://efectococuyo.com/politica/quienes-han-sido-imputados-en-venezuela-por-instigacion-al-odio-y-por-que/">Efecto Cocuyo: imputados por instigación</a></p>
</div>
<div class="ancla"><b>Frase ancla 2016</b> &ldquo;Mis hijos y yo juntábamos firmas. Al poco tiempo, a las seis de la mañana, entraron a mi casa y se llevaron a Emily hasta la noche. La orden nos la dieron después.&rdquo;</div>

<!-- 2017 -->
<div class="era"><p class="anio">2017</p><p class="lema">Cuatro meses de calle y las &ldquo;noches del terror&rdquo;</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">29&ndash;30 de marzo de 2017</b> &mdash; el Tribunal Supremo se atribuye funciones de la Asamblea; las protestas no paran. <b class="f">18 de abril</b> &mdash; <b>Plan Zamora</b>: unos 200.000 efectivos, civiles armados como fuerza de choque y tribunales militares para civiles. <b class="f">19 de abril</b> &mdash; &ldquo;Madre de todas las marchas&rdquo;. <b class="f">16 de julio</b> &mdash; consulta popular de la oposición (más del 99% contra la Constituyente). <b class="f">30 de julio</b> &mdash; Constituyente.</p>
<p><b>Balance abril&ndash;julio:</b> entre <b>120 y 165 muertos</b> según la fuente, <b>más de 15.000 heridos</b>, entre <b>4.848 y 5.092 detenidos</b>. Provea: <b>28 muertes atribuidas a civiles armados progobierno</b> en 523 de 6.729 protestas. <b>Allanamientos:</b> Amnistía Internacional (<b class="f">30/10/2017</b>) documentó <b>al menos 47 allanamientos ilegales en 11 estados</b>, de horas o de toda la noche, sin orden judicial, con amenazas de muerte, destrucción y robos, por agentes del Estado y civiles armados: &ldquo;han trasladado la represión de las calles a las salas de estar de casas particulares&rdquo;.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/2017_Venezuelan_protests">Protestas de 2017</a> &middot; <a href="https://www.eltiempo.com/mundo/venezuela/informe-noches-del-terror-ataques-y-allanamientos-ilegales-a-viviendas-en-venezuela-146226">Amnistía: Noches del terror</a> &middot; <a href="https://www.hrw.org/es/report/2017/11/29/arremetida-contra-opositores/brutalidad-tortura-y-persecucion-politica-en">HRW</a></p></div>

<div class="ev pais"><p class="cab">País &mdash; en Monagas</p>
<p><b class="f">19/04/2017</b> &mdash; detienen a <b>Yoel Bellorín</b>, docente universitario (primer preso político de Monagas de las protestas). <b class="f">5/06/2017</b> &mdash; <b>Hernán Vizcarrondo</b>, 70 años, detenido con otras 12 personas. <b class="f">20/07/2017</b> &mdash; la GNB detiene a <b>Génesis Tirado</b> y <b>Humberto Marquina</b> en la Av. Libertador de Maturín: procesados por la jurisdicción militar.</p></div>

<div class="ev yo"><p class="cab">Usted y su familia</p>
<p>Emily y sus hermanos siguen en la calle. <b class="f">13 de mayo de 2017</b> &mdash; Emily participa en una marcha pacífica en la Av. Bolívar de Maturín, reprimida por funcionarios y grupos armados: resulta <b>herida con un fuerte golpe en la cabeza</b> y lesiones en rodilla y brazos; después tiene migrañas y más ansiedad. <span class="tag ref">Me lo contaron</span> <span class="tag conf">Confirma</span> si usted la vio herida o la atendió, y si usted marchó en las de 2017 (la del <b class="f">19 de abril</b>, por ejemplo). Ángel dice que en 2017 participó en siete plantones en Tipuro, reprimidos con lacrimógenas, perdigones y detenciones. Según la carta de la abogada Soraya Hernández de Ciano (23/09/2019), sus hijos también participaron en la renovación de partidos (<b class="f">marzo de 2017</b>), en la consulta popular del <b class="f">16 de julio</b> y en el apoyo a las primarias de la MUD para la gobernación de Monagas (<b class="f">10 de septiembre</b>). <span class="tag conf">Confirma</span> si usted participó en alguna de esas actividades junto con ellos.</p></div>

<!-- 2018 -->
<div class="era"><p class="anio">2018</p><p class="lema">Las llamadas, el ataque a sus hijos y los escondites</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">15 de enero de 2018</b> &mdash; masacre de El Junquito: <b>Óscar Pérez</b> y seis más ejecutados por más de 500 efectivos y colectivos convocados por la DGCIM. <b class="f">20 de mayo</b> &mdash; presidenciales boicoteadas por la oposición. <b class="f">8 de octubre</b> &mdash; el concejal <b>Fernando Albán</b> muere bajo custodia del SEBIN. Ese año, la ONU contó <b>5.287 muertes &ldquo;por resistencia a la autoridad&rdquo;</b>; entre junio de 2018 y abril de 2019, investigó 20 casos de jóvenes ejecutados por las FAES.</p>
<p class="fuente"><a href="https://www.ntn24.com/noticias-actualidad/caso-oscar-perez-la-masacre-de-el-junquito-84141">El Junquito</a> &middot; <a href="https://www.ohchr.org/es/2019/07/un-human-rights-report-venezuela-urges-immediate-measures-halt-and-remedy-grave-rights">ONU-DDHH 2019</a></p></div>

<div class="ev yo"><p class="cab">Usted &mdash; el acoso a su casa</p>
<p><b>Durante todo 2018</b> &mdash; hombres armados vestidos de rojo o de negro rondan su urbanización preguntando por &ldquo;la muchacha opositora&rdquo;; vecinos le avisan que desconocidos toman fotos de la casa. Usted y su esposo reciben <b>más de diez llamadas amenazantes</b> (2018&ndash;2019) en el teléfono residencial y en su celular: que Emily sería &ldquo;castigada&rdquo; por &ldquo;traicionar la revolución&rdquo; y que ustedes &ldquo;pagarían las consecuencias&rdquo;. <span class="tag viv">Lo viví</span></p>
<p><b class="f">Marzo de 2018</b> &mdash; Emily huye de Venezuela para salvar su vida. Su partida <b>empeora</b> la presión: motorizados con más frecuencia frente a la casa, gritando insultos. <span class="tag viv">Lo viví</span></p>
<p><b class="f">Abril de 2018</b> &mdash; por seguridad, usted, su esposo y sus hijos Rafael y Ángel se mudan a casa de su madre, <b>Eligia Zoraida Hernández</b> (Av. Los Guaritos, Casa 60, Sector III, Maturín), &ldquo;hasta junio&rdquo;. Aun allí, una llamada: <i>&ldquo;Tu muchachita se salvó esta vez, pero no podrá esconderse para siempre&rdquo;</i>. <span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> Ángel sitúa su estancia en Los Guaritos <b>después del 25 de enero de 2019</b>, no en 2018: ver la sección 9.</p></div>

<div class="ev yo"><p class="cab">Usted &mdash; mayo y junio de 2018</p>
<p><b class="f">18 de mayo de 2018</b> &mdash; mensajes de texto a Ángel de &ldquo;un colectivo aliado a los Tupamaros&rdquo;: sabían su universidad, su casa, su carro y los sitios que frecuentaba; exigían dejar el activismo o las consecuencias serían mortales. Ángel se lo cuenta a usted y a su esposo; ustedes le recomiendan alejarse un poco de la política. <span class="tag ref">Me lo contaron</span></p>
<p><b class="f">9 de junio de 2018</b> &mdash; su anexo, su relato de 2020, Rafael y <b>las tres denuncias oficiales</b> (CICPC del 11/06/2018, y Fiscalía y Defensoría del 28/01/2019: <b>09-06-2018</b>) dicen <b>9 de junio</b>; solo su declaración por Ángel (mayo de 2026) y el relato de Ángel dicen 8. <b>La fecha es el 9.</b> &mdash; sus hijos, al salir de <b>una reunión política y de amistad</b> en La Floresta, llevando a unas compañeras, son interceptados por hombres en motocicletas; les quitan el <b>Volkswagen SpaceFox negro</b> de su esposo (placa AH250EA), los celulares y las billeteras con sus <b>documentos personales</b>; los agreden y los amenazan de muerte; les gritan <b>&ldquo;golpistas&rdquo;</b> y <b>&ldquo;se los dijimos y no pararon&rdquo;</b>. Rafael forcejea con uno de los agresores para proteger a quienes los acompañaban; <b>al soltarlo, ese hombre le dispara</b>; &ldquo;gracias a Dios, la bala no alcanzó a mi hijo&rdquo;. <span class="tag ref">Usted no estaba: se lo contaron</span> (su anexo: &ldquo;según me relataron mis hijos&rdquo;)</p>
<p><b>Esa noche</b> &mdash; su declaración de mayo de 2026 dice que <b>usted recibió la llamada desesperada de sus hijos y fue a buscarlos</b>; Ángel dice que llamó a su madre &ldquo;para que nos fuera a buscar&rdquo;. Su anexo dice que, cuando regresaron a la casa, usted <b>vio su miedo y su angustia</b>, y que los días siguientes fueron de terror: los hijos &ldquo;permanecieron prácticamente encerrados mientras terminaban sus carreras&rdquo;. <span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> cómo pasó exactamente esa noche; es lo que usted puede contar como testigo.</p>
<p><b class="f">11 de junio</b> &mdash; Ángel presenta la <b>denuncia ante el CICPC</b> (Sub-Delegación Maturín, expediente K-18-0074-02562) por el robo del carro y de cuatro teléfonos; quedó clasificada como <b>robo de vehículo</b>, con tres sujetos, sin mencionar golpes, disparo ni móvil político. <span class="tag conf">Confirma</span> si usted supo de esa denuncia o acompañó a sus hijos.</p>
<p><b>Tres días después</b> &mdash; el carro aparece desvalijado en el sector La Línea. Después, llamadas <b>&ldquo;intimidantes y de extorsión&rdquo;</b> a usted: dos llamadas exigiendo que sus hijos abandonen la política &ldquo;o las consecuencias serían fatales&rdquo;; usted apaga el teléfono <b>más de un mes</b>. <span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> qué significa &ldquo;extorsión&rdquo;: si pidieron dinero alguna vez o solo exigían que dejaran la política.</p>
<p><b>Verano de 2018</b> &mdash; ocho semanas en Puerto La Cruz, en casa de su padre, <b>Argenis Coa</b> (Villa Olímpica), &ldquo;para despejarnos&rdquo; durante las vacaciones académicas. Las amenazas continúan. <span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> si usted fue con ellos. <b>Ojo:</b> &ldquo;prácticamente encerrados&rdquo; (anexo) y las semanas en Puerto La Cruz (Ángel) tienen que cuadrar: diga que ellos se retiraron por miedo, pero siguieron sus estudios y salieron a lo necesario.</p></div>

<div class="ev yo"><p class="cab">Usted &mdash; diciembre de 2018</p>
<p><b class="f">Diciembre de 2018</b> &mdash; usted y su esposo les aconsejan a sus hijos &ldquo;bajar un poco la guardia como activistas políticos&rdquo; y terminar los estudios. <b>Es una frase suya, escrita en su carta a USCIS: el oficial la leerá.</b> Explíquela así: bajaron el perfil por miedo, y aun así los alcanzaron en enero.</p></div>
<div class="ancla"><b>Frase ancla 2018</b> &ldquo;Mis teléfonos no dejaron de sonar. Atacaron a mis hijos y les robaron los documentos; uno le disparó a Rafael. Después las llamadas siguieron.&rdquo;</div>

<!-- 2019 -->
<div class="era"><p class="anio">2019</p><p class="lema">Enero, marzo y diciembre: sus hijos se van y usted los sigue</p></div>

<div class="ev pais"><p class="cab">País</p>
<p><b class="f">10 de enero de 2019</b> &mdash; Maduro asume su segundo mandato. <b class="f">21 de enero</b> &mdash; en Cotiza, colectivos matan a una mujer que no protestaba. <b class="f">23 de enero</b> &mdash; marcha nacional; Guaidó se proclama presidente encargado; <b>al menos 13 muertos</b> ese día. En febrero: <b>956 arrestos, incluidos 77 menores</b>. <b class="f">23 de febrero</b> &mdash; ayuda humanitaria: 14 muertos y 285 heridos. <b class="f">30 de abril</b> &mdash; levantamiento fallido: 4 muertos, 240 detenidos.</p>
<p><b class="f">4 de julio de 2019</b> &mdash; informe de la ONU-DDHH: <b>66 muertes en protestas de enero a mayo de 2019 (52 atribuibles a fuerzas de seguridad)</b>; <b>793 personas privadas de libertad arbitrariamente</b>; unas <b>6.800 ejecuciones extrajudiciales</b> entre enero de 2018 y mayo de 2019; violentos allanamientos, torturas y malos tratos.</p>
<p class="fuente"><a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">Protestas de 2019</a> &middot; <a href="https://www.hrw.org/es/news/2019/05/03/venezuela-violenta-respuesta-las-manifestaciones">HRW</a> &middot; <a href="https://www.infobae.com/america/venezuela/2019/07/05/michelle-bachelet-denuncio-la-erosion-del-estado-de-derecho-en-venezuela/">Infobae: informe Bachelet</a></p></div>

<div class="ev yo"><p class="cab">Usted &mdash; el 23 de enero de 2019</p>
<p><b class="f">23 de enero</b> &mdash; [<span class="tag anexo">Anexo</span>] <b>&ldquo;Participé personalmente junto con mis hijos en una manifestación opositora en Maturín. Yo permanecí en la avenida Juncal mientras Ángel y Rafael continuaron junto con otros manifestantes hacia la Catedral.&rdquo;</b> Ellos quedaron encerrados varias horas en la Catedral, cercados por colectivos y la GNB, que pedían entregarlos a la Guardia Nacional. Según la prensa: un cerco de más de tres horas con entre 700 y más de mil personas; la gobernadora informó 62 detenidos y 14 heridos ese día. <span class="tag viv">Lo viví</span> hasta la Av. Juncal; <span class="tag ref">lo demás, me lo contaron</span></p>
<p><b>Respaldo nuevo:</b> la denuncia que Ángel y Rafael firmaron el <b class="f">28/01/2019</b> ante la Fiscalía y la Defensoría dice que estaban <i>&ldquo;en compañía de nuestros padres José Emilio Navarro y Zoraida Coa de Navarro&rdquo;</i>; es decir, <b>usted y su esposo</b> estaban en la marcha, y lo dice un documento sellado cinco días después. También dice que el ataque fue <b>a las 2:00 p. m.</b>, frente a la Catedral, con perdigones y gas lacrimógeno, y que ellos permanecieron dentro <b>&ldquo;más de diez horas&rdquo;</b>, hasta las 12 de la noche, cuando salieron por mediación del Obispo ante el general de la ZODI, Ovidio Delgado, con funcionarios de la Defensoría (la prensa dice más de tres horas y los primeros grupos saliendo hacia las 5 p. m.). <span class="tag conf">Confirma</span> <b>cuándo salieron sus hijos y cuándo los volvió a ver usted</b>: es lo que usted sí puede contar.</p>
<p><span class="tag conf">Confirma</span> <b>El oficial va a preguntar</b>: ¿dónde exactamente estaba en la Juncal?, ¿qué vio y qué pasó ahí?, ¿cuándo supo que sus hijos estaban encerrados y cómo?, ¿qué hizo durante esas horas?, ¿cómo terminó el día?, ¿le pasó algo a usted (gases, perdigones, amenazas)?, ¿con quién estaba? Prepare esas respuestas con lo que de verdad recuerde.</p>
<p><b class="f">25 de enero</b> &mdash; <b>usted recibe</b> en el mismo número de 2018 una llamada amenazante: que sus hijos tenían que irse de la ciudad o los iban a asesinar; que &ldquo;meses antes les perdonaron la vida&rdquo;. Sus hijos, cuenta Ángel, se mudan a casa de su abuela en Los Guaritos unas semanas. <span class="tag viv">Lo viví</span></p>
<p><b class="f">28 de enero de 2019</b> &mdash; Ángel y Rafael presentan <b>dos denuncias formales</b> (Fiscalía Superior del Ministerio Público de Monagas y Defensora del Pueblo): cuentan los mensajes del 18 de mayo de 2018 de un grupo que se identificó como Tupamaros, el ataque del 9 de junio, con golpes y un disparo, y el de la Catedral, y dicen: <i>&ldquo;queremos también responsabilizar a las autoridades policiales, de policía política y militares ... de todo lo que pueda ocurrirnos&rdquo;</i>. <span class="tag conf">Ojo</span> no mencionan la llamada del 25 de enero a usted ni las llamadas de 2018. <span class="tag ref">Me lo contaron</span> <span class="tag conf">Confirma</span> si usted las conoció entonces.</p>
<p><b class="f">3 y 18 de febrero</b> &mdash; Ángel y Rafael se gradúan sin poder asistir a sus actos (&ldquo;no esperaron siquiera sus actos académicos&rdquo;); entregan los títulos a usted y a su esposo. <b class="f">23 de febrero</b> &mdash; la última actividad política de sus hijos en Maturín. <b class="f">1 de marzo</b> &mdash; se mudan a Caracas, casa de una prima en El Rosal.</p></div>

<div class="ev yo"><p class="cab">Usted &mdash; la salida de sus hijos y la suya</p>
<p><b class="f">28 o 29 de marzo de 2019</b> &mdash; Rafael y Ángel salen de Venezuela hacia Santo Domingo (6 días de tránsito) y llegan a Orlando el <b class="f">2 de abril</b> con visa B2. <b>Su anexo dice &ldquo;3 de abril de 2019&rdquo;; ese dato está mal</b> (llegaron el 2 de abril): corríjalo con los pasaportes. Su carta a USCIS dice &ldquo;abril del 2019&rdquo; y que salen &ldquo;con la intención de apartarse temporalmente&rdquo;. Explique así: usted esperaba que fuera temporal; los hechos dicen otra cosa. <span class="tag viv">Lo viví</span></p>
<p><b>Abril de 2019</b> &mdash; según los vecinos, grupos armados rondan durante una semana la casa, ya sin sus hijos. <span class="tag ref">Me lo contaron</span></p>
<p><b>Abril&ndash;diciembre de 2019</b> &mdash; usted sigue en Maturín con su esposo, ocho meses sin ver a sus hijos. Las amenazas &ldquo;no cesaban&rdquo; ni para su esposo ni para usted (su carta). <span class="tag viv">Lo viví</span> <span class="tag conf">Confirma</span> <b>este es un punto que el oficial va a probar</b>: por qué se quedó esos ocho meses y qué pasó en ese tiempo.</p>
<p><b class="f">14 de diciembre de 2019</b> &mdash; usted entra a Estados Unidos por <b>Fort Lauderdale</b> con visa B2, &ldquo;a visitarlos&rdquo; en Orlando. Vuelo directo, sin tercer país: por eso su respuesta NO a &ldquo;¿pasó por otro país?&rdquo; es correcta, a diferencia de la de sus hijos. Vive con ellos en 3712 Castle Pines Ln, Orlando.</p></div>
<div class="ancla"><b>Frase ancla 2019</b> &ldquo;Yo estuve en la marcha del 23 de enero y me quedé en la avenida Juncal; mis hijos siguieron hasta la Catedral y quedaron encerrados. Dos días después me llamaron para decir que los iban a matar.&rdquo;</div>

<!-- 2020-2021 -->
<div class="era"><p class="anio">2020&ndash;2021</p><p class="lema">No puede volver: a su esposo lo agreden y huye</p></div>

<div class="ev yo"><p class="cab">Usted &mdash; 2020</p>
<p><b>Principios de 2020</b> &mdash; la pandemia la alcanza en Estados Unidos y no regresa. <b class="f">13 de marzo de 2020</b> &mdash; en Maturín, cuatro hombres armados con ropa militar negra y sin identificación <b>agreden físicamente a su esposo</b>, gritando que querían saber <b>el paradero de sus hijos</b>, y amenazan con irrumpir en la casa para buscar &ldquo;pruebas de conspiración contra el gobierno de Nicolás Maduro&rdquo;. Su anexo: &ldquo;aun después de mi salida del país, nuestra familia continuaba viviendo situaciones de violencia e intimidación&rdquo;. <span class="tag ref">Me lo contó mi esposo</span></p>
<p>Usted trata de extender su estadía y no vuelve, &ldquo;por cuanto todas estas amenazas ... aún están latentes&rdquo;. <b class="f">13 de junio de 2020</b> &mdash; vence su estatus B2. <b class="f">24 de agosto de 2020</b> &mdash; <b>firma su I-589</b> (preparado por María Virginia Palomo-Álvarez, que no es abogada), ocho meses después de llegar: <b>dentro del plazo de un año</b>. Su carta a USCIS de 20/12/2024 dice que se presentó el 18/09/2020: <span class="tag conf">Confirma</span> la fecha del recibo.</p></div>

<div class="ev fam"><p class="cab">Su esposo y su casa &mdash; 2021</p>
<p><b class="f">16 de abril de 2021</b> &mdash; las cámaras de seguridad de su casa graban a hombres <b>encapuchados y fuertemente armados</b> gritando por <b>&ldquo;Emily y su familia traidora de la patria&rdquo;</b>. Los vecinos <b>Eduardo José Ruiz</b> y <b>Josefa María Noguera</b> le cuentan que rondaron varios minutos intentando entrar. <b class="f">19 de abril de 2021</b> &mdash; su esposo huye de Venezuela; hoy vive con usted en Rockford (A201-393-743). <span class="tag ref">Me lo contaron</span> <span class="tag conf">Confirma</span> ¿existe el video? Es la única prueba visual de su caso.</p></div>
<div class="ancla"><b>Frase ancla 2020&ndash;2021</b> &ldquo;Cuando me fui a visitar a mis hijos, mi esposo se quedó solo en la casa. Lo golpearon preguntando por ellos, y al año siguiente encapuchados gritaron frente a mi casa contra mi familia. Tuvo que huir.&rdquo;</div>

<!-- 2022-2026 -->
<div class="era"><p class="anio">2022&ndash;2026</p><p class="lema">Su vida en Estados Unidos, mientras espera</p></div>

<div class="ev yo"><p class="cab">Usted</p>
<p><b>Noviembre 2022&ndash;mayo 2023</b> &mdash; trabaja en Tampa como maestra de niños pequeños (The Learning Experience); certificación de Registered Behavior Technician (agosto 2022) y de primeros auxilios/RCP (2021). <b class="f">Mayo&ndash;julio de 2023</b> &mdash; obtiene la <b>Professional Educator License (PEL)</b> de Illinois (junio de 2023) y solicita el endoso en Español (julio). <b class="f">17 de agosto de 2023</b> &mdash; empieza como maestra bilingüe en <b>Rockford Public Schools, Distrito 205 (RESA Middle School)</b>: Historia de 8.º grado y Español de 7.º, unos 170 estudiantes; salario anual <b>$71.295</b> (carta del 14/02/2024). Vive en <b>1068 McKnight Cir, Apt. 2, Rockford, IL 61107</b>.</p>
<p><b class="f">19 de enero de 2025</b> &mdash; presenta la renovación de su permiso de trabajo (I-765, categoría C08, recibo IOE9124673968); su permiso vencía el <b class="f">16 de abril de 2025</b>. Escribió a USCIS en marzo pidiendo prioridad para esa renovación (hay una versión fechada 4/03/2024 y otra 6/03/2025; la de 2024 cita el recibo de enero de 2025, así que su fecha parece un error). <span class="tag conf">Confirma</span> el estado actual del permiso. <b class="f">20 de diciembre de 2024</b> &mdash; borrador de carta para incluir a su esposo como derivado. <b class="f">Noviembre de 2025</b> y <b class="f">mayo de 2026</b> &mdash; declaraciones juradas en apoyo de Emily y de Ángel. [<span class="tag anexo">Anexo</span>] Su <b>anexo aclaratorio</b> a su declaración de asilo.</p></div>

<!-- 2026 -->
<div class="era"><p class="anio">2026</p><p class="lema">Maduro ya no está, pero el aparato sí</p></div>
<div class="ev pais"><p class="cab">País</p>
<p><b class="f">3 de enero de 2026</b> &mdash; captura de Maduro en una operación de EE.UU.; asume Delcy Rodríguez. <b class="f">19 de febrero</b> &mdash; Ley de Amnistía. <b class="f">16 de septiembre de 2026</b> &mdash; la Misión de la ONU: el aparato represivo sigue <b>&ldquo;intacto&rdquo;</b>, con colectivos activos, 64 casos nuevos de tortura y 214 detenciones políticas arbitrarias en 12 meses. Detalle en la sección 6.</p></div>

<!-- ============================================================ -->
<h2 id="s5">5 &middot; Casos documentados de allanamientos y de familias perseguidas</h2>

<p class="lede">Lo que le pasó a su casa no es un caso aislado. Estos son los datos públicos que respaldan el patrón, para usar dos o tres si le preguntan &ldquo;¿cómo sé que esto es real?&rdquo;.</p>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>Qué se documentó</th><th>Fuente</th></tr>
<tr><td class="f">2015&ndash;2016</td><td><b>17.181 allanamientos</b> ilegales durante las OLP; 90% de los primeros 4.000 detenidos, arbitrarios.</td><td><a href="https://provea.org/actualidad/hace-cinco-anos-el-operativo-de-liberacion-del-pueblo-abrio-el-camino-para-la-represion-total-en-venezuela/">Provea</a></td></tr>
<tr><td class="f">Abr&ndash;jul 2017</td><td><b>47 allanamientos</b> ilegales en 11 estados, sin orden judicial, con amenazas de muerte y violencia; agentes del Estado y civiles armados.</td><td><a href="https://www.eltiempo.com/mundo/venezuela/informe-noches-del-terror-ataques-y-allanamientos-ilegales-a-viviendas-en-venezuela-146226">Amnistía Internacional</a></td></tr>
<tr><td class="f">2018&ndash;2019</td><td>La ONU documentó violentos allanamientos, personas sacadas de sus casas sin orden judicial, y torturas y malos tratos a detenidos por las protestas.</td><td><a href="https://www.ohchr.org/es/2019/07/un-human-rights-report-venezuela-urges-immediate-measures-halt-and-remedy-grave-rights">ONU-DDHH</a></td></tr>
<tr><td class="f">2020</td><td>La Misión de la ONU: <b>crímenes de lesa humanidad</b> desde 2014; 223 casos investigados de ejecuciones, desapariciones, detenciones arbitrarias y tortura.</td><td><a href="https://www.hrw.org/es/news/2020/09/17/venezuela-investigacion-de-la-onu-concluye-que-se-cometieron-crimenes-de-lesa">HRW / ONU</a></td></tr>
<tr><td class="f">Sep 2024&ndash;ago 2025</td><td>&ldquo;<b>Patrón sostenido y sistemático</b>&rdquo; de detención de familiares de opositores, &ldquo;como forma de represalia o presión hacia la persona opositora&rdquo;, para &ldquo;generar miedo y control social&rdquo;; también tortura psicológica con amenazas contra parejas e hijos.</td><td><a href="https://www.infobae.com/venezuela/2025/09/20/la-mision-de-la-onu-en-venezuela-denuncio-un-patron-sistematico-de-detenciones-a-familiares-de-opositores-que-busca-generar-miedo-y-control-social/">Infobae (ONU)</a></td></tr>
</table>
</div>

<h3>Víctimas de las protestas que puede citar (unas pocas, bien sabidas)</h3>
<div class="scroll">
<table>
<tr><th>Fecha</th><th>Víctima</th><th>Qué pasó</th></tr>
<tr><td class="f">12/02/2014</td><td><b>Bassil Da Costa</b></td><td>Disparo en la cabeza en una marcha estudiantil en Caracas.</td></tr>
<tr><td class="f">19/04/2017</td><td><b>Paola Ramírez</b> (23) y <b>Carlos Moreno Barón</b> (17)</td><td>Baleada por unos 50 motorizados en San Cristóbal; atacado por el Frente 5 de Marzo en Caracas (<a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea</a>).</td></tr>
<tr><td class="f">26/04/2017</td><td><b>Juan Pablo Pernalete</b> (20)</td><td>Muerto por una lacrimógena de la GNB (<a href="https://elestimulo.com/venezuela/2017-05-24/juan-pernalete-murio-por-impacto-de-una-bomba-lacrimogena-asegura-fiscal/">El Estímulo</a>).</td></tr>
<tr><td class="f">8/10/2018</td><td><b>Fernando Albán</b></td><td>Concejal muerto bajo custodia del SEBIN, tres días después de su detención.</td></tr>
<tr><td class="f">23/01/2019</td><td>Al menos <b>13 personas</b></td><td>Día de la marcha de Maturín y de la Catedral, donde estuvo usted y estaban sus hijos.</td></tr>
<tr><td class="f">En Monagas</td><td><b>Carlos Báez</b>, <b>Yoel Bellorín</b>, <b>Hernán Vizcarrondo</b>, <b>Génesis Tirado</b>, <b>Humberto Marquina</b></td><td>Detenidos entre 2016 y 2017 en Maturín (<a href="https://efectococuyo.com/politica/monagas-la-disidencia-es-perseguida-con-medidas-judiciales/">Efecto Cocuyo</a>).</td></tr>
</table>
</div>

<!-- ============================================================ -->
<h2 id="s6">6 &middot; Venezuela en 2026: por qué no puede volver</h2>

<p class="lede">El oficial sabe que Maduro ya no está. Anticipe la pregunta y responda con hechos de <b>2026</b>, no de 2018. <b>Antes de la entrevista, busque noticias de la última semana</b> y actualice las cifras: cambian rápido.</p>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>Hecho</th></tr>
<tr><td class="f">3 de enero de 2026</td><td>Captura de Maduro. Asume <b>Delcy Rodríguez</b>, su vicepresidenta; su hermano Jorge dirige la Asamblea; Diosdado Cabello, señalado por la ONU como coordinador de colectivos, seguía en el Interior según reportes de la primavera (verifique).</td></tr>
<tr><td class="f">19 de febrero de 2026</td><td>Ley de Amnistía (casos políticos desde 1999): excluye homicidio, narcotráfico, corrupción y violaciones de derechos humanos; hay que pedirla por abogado; los liberados no pueden hablar en público y deben presentarse cada mes ante el tribunal.</td></tr>
<tr><td class="f">Feb&ndash;mar 2026</td><td>Foro Penal: <b>más de 573 presos políticos</b> aún; la Misión de la ONU documenta <b>87 detenciones políticas</b> desde el 3 de enero: &ldquo;puerta giratoria&rdquo;.</td></tr>
<tr><td class="f">2026</td><td>Los colectivos hacen &ldquo;repliegue táctico&rdquo; y pasan a patrullajes disimulados e intimidación focalizada.</td></tr>
<tr><td class="f">16 de septiembre de 2026</td><td><b>Misión de la ONU: el aparato represivo sigue &ldquo;intacto&rdquo;.</b> Leyes que criminalizan la disidencia vigentes; inteligencia y seguridad con su estructura original; <b>colectivos como fuente de intimidación</b>; <b>19 funcionarios</b> señalados por violaciones aún en cargos; <b>64 casos de tortura</b> nuevos desde el 3/01; <b>214 detenciones políticas arbitrarias</b> en 12 meses; entre 300 y 500 presos políticos.</td></tr>
</table>
</div>
<p class="fuente">Fuentes: <a href="https://www.emol.com/noticias/Nacional/2026/09/16/1211609/onu-represion-venezuela-captura-maduro.html">Emol (ONU)</a> &middot; <a href="https://www.elnacional.com/investigacion/2026/09/onu-informe-colectivos-represion-estado-venezuela-2026/">El Nacional (colectivos)</a> &middot; <a href="https://foropenal.com/articulo/situation-of-political-prisoners-in-venezuela-january-february-2026">Foro Penal</a> &middot; <a href="https://en.wikipedia.org/wiki/2026_political_prisoner_release_in_Venezuela">Liberaciones 2026</a> &middot; <a href="https://insightcrime.org/news/the-colectivos-role-in-the-struggle-for-power-in-post-maduro-venezuela/">InSight Crime</a></p>

<h3>Los seis argumentos de su &ldquo;no puedo volver&rdquo;</h3>
<div class="card">
<ol style="margin:0">
<li><b>Mi posición política es pública y sigue siendo la misma.</b> [<span class="tag anexo">Anexo</span>] Fui opositora pública desde COPEI y la MUD; no es una opinión que me inventé. Y &ldquo;las condiciones políticas que originaron mi temor no han desaparecido&rdquo; (anexo).</li>
<li><b>Ya fueron a mi casa.</b> Allanaron mi vivienda el <b class="f">21/04/2016</b> y volvieron con encapuchados armados el <b class="f">16/04/2021</b>, cuando gritaron por &ldquo;Emily y su familia traidora de la patria&rdquo;.</li>
<li><b>Me amenazaron a mí.</b> Más de diez llamadas a mis teléfonos entre 2018 y 2019; con una voz burlona: &ldquo;no podrá esconderse para siempre&rdquo;.</li>
<li><b>Golpearon a mi esposo</b> el <b class="f">13/03/2020</b> preguntando por mis hijos, y tuvo que huir el <b class="f">19/04/2021</b>.</li>
<li><b>Tratan a la familia como palanca.</b> La ONU documenta un patrón sostenido de detener a familiares de opositores como represalia, para generar miedo.</li>
<li><b>Los responsables siguen ahí.</b> Mi declaración dice que &ldquo;continúan operando con total impunidad en Maturín&rdquo;, y en septiembre de 2026 la ONU dice que el aparato represivo está intacto. Una amnistía no desarma a un colectivo.</li>
</ol>
</div>

<div class="aviso">
  <p class="t">Cuidado con dos exageraciones que le pueden costar la credibilidad</p>
  <p><b>No diga</b> &ldquo;el gobierno tiene una lista con mi nombre&rdquo; ni &ldquo;hay una orden de captura contra mí&rdquo;: no lo sabe y no hay ningún documento. Diga lo que sí consta: <b>fueron a mi casa, me llamaron a mí, agredieron a mi esposo y me buscaron a través de mis hijos</b>. Y tampoco afirme que a toda mujer mayor la detienen: diga que <b>la ONU documenta que detienen a familiares de opositores como presión</b>, y que usted tiene una historia propia de amenazas.</p>
</div>

<!-- ============================================================ -->
<h2 id="s7">7 &middot; Cifras para memorizar</h2>

<div class="cifras">
  <div><b>1983</b><span>inicio de su participación política, según su anexo (y de su carrera docente)</span></div>
  <div><b>23/01/2008</b><span>se firma el acuerdo que origina la MUD, con COPEI entre sus partidos</span></div>
  <div><b>17.181</b><span>allanamientos ilegales en las OLP, 2015&ndash;2016 (Provea)</span></div>
  <div><b>47 / 11</b><span>allanamientos ilegales y estados, abril&ndash;julio de 2017 (Amnistía)</span></div>
  <div><b>&gt;10</b><span>llamadas amenazantes a sus teléfonos, 2018&ndash;2019</span></div>
  <div><b>5.287</b><span>muertes &ldquo;por resistencia a la autoridad&rdquo; en 2018 (ONU)</span></div>
  <div><b>~6.800</b><span>ejecuciones extrajudiciales, ene 2018&ndash;may 2019 (ONU)</span></div>
  <div><b>Sep 2025</b><span>ONU: patrón sistemático de detención de familiares de opositores</span></div>
  <div><b>64 / 214</b><span>casos de tortura y detenciones políticas desde el 3/01/2026 (ONU, sep 2026)</span></div>
</div>

<!-- ============================================================ -->
<h2 id="s8">8 &middot; Panel de preguntas y respuestas</h2>

<div class="nuevo">
  <p class="t">De dónde salieron estas preguntas</p>
  <p>El oficial sigue un orden: <b>identidad y biografía &rarr; qué le pasó, quién, por qué (opinión política) &rarr; ruta de viaje y fecha de entrada (plazo de un año) &rarr; a quién teme y qué pasaría si vuelve &rarr; reubicación interna &rarr; cambios en el país &rarr; antecedentes y causales de exclusión</b>, y prueba la credibilidad repitiendo lo mismo de otras maneras. Fuentes: <a href="https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum/preparing-for-your-affirmative-asylum-interview">USCIS (preparación de la entrevista)</a> &middot; <a href="https://shorelineimmigration.com/asylum/asylum-interview-sample-questions/">Shoreline Immigration</a> &middot; <a href="https://www.claxtonlawgroup.com/asylum/asylum-interview-preparation/">Claxton Law (credibilidad)</a> &middot; <a href="https://www.youtube.com/watch?v=g6FFCiqRiA0">YouTube: simulacro con un ex oficial de asilo</a>.</p>
  <p style="margin:0">La entrevista dura <b>al menos una hora</b>, es <b>confidencial</b>, la decisión <b>no se da ese día</b> y tiene que llevar <b>su propio intérprete</b> (mayor de 18 años, que no sea su abogado ni testigo).</p>
</div>

<div class="barra">
  <button class="btn" id="modoEstudio" type="button">Modo estudio: tapar respuestas</button>
  <button class="btn sec" id="abrirTodas" type="button">Mostrar todas</button>
  <span>Cada pregunta tiene una <b>respuesta corta</b> (lo que dice primero) y una <b>completa</b> (si le piden más). Responda en frases cortas y pause para el intérprete. Donde dice <b>Confirma</b>, complete con su propia memoria.</span>
</div>

<!-- ---------------- A ---------------- -->
<p class="bloque">A &mdash; Apertura y biografía</p>

<div class="q"><p class="pregunta">1. ¿Por qué pide asilo? ¿Por qué no puede volver a Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Porque soy opositora política y mi familia también, y por eso nos persiguieron: allanaron mi casa, me amenazaron por teléfono durante meses y golpearon a mi esposo preguntando por mis hijos. Si regreso, los mismos grupos siguen ahí.</p>
<span class="lbl">Completa</span><p class="larga">Desde joven participé en política de oposición, primero con COPEI y luego en la MUD. Mis hijos Rafael y Ángel y mi hijastra Emily también, con Voluntad Popular. El 21 de abril de 2016 entraron a mi casa a las seis de la mañana y se llevaron detenida a Emily hasta la noche. En 2018 y 2019 recibí más de diez llamadas amenazantes. En junio de 2018 atacaron a mis hijos y les robaron los documentos, y uno de los atacantes disparó contra Rafael. El 23 de enero de 2019 estuve en la marcha de Maturín y mis hijos quedaron cercados en la Catedral. Vine a visitarlos en diciembre de 2019; el 13 de marzo de 2020 agredieron a mi esposo, y en abril de 2021 unos encapuchados armados gritaron frente a mi casa contra mi familia. Mi esposo tuvo que huir. Pedí asilo el 24 de agosto de 2020.</p>
</div></div>

<div class="q"><p class="pregunta">2. Cuénteme de usted: datos personales, estudios, trabajo, familia.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Zoraida del Carmen Coa de Navarro, nací el 12 de noviembre de 1964 en Tucupita, Delta Amacuro. Soy docente: maestra, subdirectora y directora de escuela en Monagas. Estoy casada con José Emilio Navarro y tengo dos hijos, Rafael y Ángel, y una hijastra, Emily.</p>
<span class="lbl">Completa</span><p class="larga">Empecé como maestra el 1 de enero de 1983 para la Secretaría de Educación del Estado Monagas. Me formé en la UPEL como Profesora en Ciencias Sociales y tengo una maestría en Educación Superior. Me casé el 30 de septiembre de 1995. Vivíamos en Urb. Río Claro, Casa 54, en Tipuro, Maturín. Aquí trabajo como maestra bilingüe en Rockford Public Schools desde agosto de 2023.</p>
<p class="nota">Su historial de trabajo aparece de cuatro formas en sus papeles (jubilada en 2008; directora del Liceo Leonardo Ruiz Pineda 2000&ndash;2011; directora de escuela primaria 1999&ndash;2008 y profesora de nivel medio hasta 2012; y la carta de 1995). <b>Decida con su abogada una sola versión, con su constancia de jubilación en la mano</b>, antes de la entrevista. Ver la sección 9.</p></div></div>

<div class="q"><p class="pregunta">3. ¿Quiénes son sus hijos y dónde están? ¿Y su esposo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Rafael (nacido en 1996) y Ángel (1997) están en Estados Unidos y tienen sus propias solicitudes de asilo. Emily (1993) es hija de mi esposo; la crié desde niña como una hija, y tiene su caso aparte. Mi esposo, José Emilio, salió de Venezuela el 19 de abril de 2021 y vive conmigo.</p>
<p class="nota">En su I-589 usted listó solo a Rafael y Ángel como hijos; Emily no aparece porque es hijastra. Eso es coherente, pero téngalo claro.</p></div></div>

<div class="q"><p class="pregunta">4. ¿Qué familiares suyos siguen en Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">[<span class="tag conf">Confirma</span>] Según mi formulario, mi madre, mi padre y varios de mis hermanos siguen en Venezuela: en Maturín y en Puerto La Cruz; uno de mis hermanos está en Panamá.</p>
<p class="nota">Su formulario lista a su madre Eligia Zoraida Hernández, su padre Argenis Coa Gutiérrez, y sus hermanos Francis, Sixta, Argenis y Enma Coa Hernández. <b>El oficial preguntará por qué a ellos no los buscan.</b> No hay ningún dato en su expediente sobre eso: cuente solo lo que sepa (por ejemplo, que ellos no son los opositores conocidos ni viven en la casa que buscaban). Si no lo sabe, dígalo.</p></div></div>

<!-- ---------------- B ---------------- -->
<p class="bloque">B &mdash; Su propia actividad política (el punto nuevo de su caso)</p>

<div class="q"><p class="pregunta">5. ¿Ha participado usted en política? ¿Desde cuándo y cómo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. Desde aproximadamente 1983 participé en actividades políticas, gremiales, electorales y comunitarias de oposición, primero con COPEI y después en la MUD. Mi posición ha sido pública.</p>
<span class="lbl">Completa</span><p class="larga">Empecé cuando comencé a trabajar como docente, en 1983. Me vinculé con COPEI, y después participé en la Mesa de la Unidad Democrática, con marchas, procesos electorales, recolecciones de firmas y campañas políticas. [<span class="tag conf">Confirma</span> dé dos o tres ejemplos concretos con año y lugar: qué hacía en COPEI, qué campaña, qué recolección de firmas, a qué marcha fue.]</p>
<p class="nota">Estas frases vienen de su anexo. <b>Si algún detalle no es exacto, corríjalo con su abogada antes de la entrevista.</b> Aquí lo que importa son los ejemplos concretos, no los adjetivos.</p></div></div>

<div class="q"><p class="pregunta">6. ¿A qué partido perteneció? ¿Era militante inscrita? ¿Tuvo algún cargo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Estuve vinculada con COPEI y luego participé en las actividades de la MUD. [<span class="tag conf">Confirma</span> si fue militante inscrita, si tuvo carnet, si tuvo algún cargo, y hasta cuándo.]</p>
<p class="nota">Su anexo dice &ldquo;estuve vinculada con COPEI&rdquo;, no &ldquo;militante&rdquo;. Diga exactamente lo que fue. Si no tuvo cargo, dígalo: no debilita un caso.</p></div></div>

<div class="q"><p class="pregunta">7. ¿Qué hacía exactamente en la MUD?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Iba a marchas, participaba en los procesos electorales, en las recolecciones de firmas y en las campañas. [<span class="tag conf">Confirma</span> con ejemplos.]</p>
<span class="lbl">Completa</span><p class="larga">La MUD se formó en 2008 con varios partidos, entre ellos COPEI. [<span class="tag conf">Confirma</span> qué hizo usted desde 2008: en qué elecciones ayudó, qué campañas, qué firmas recogió (por ejemplo, para el revocatorio de 2016), dónde y con quién.] El 23 de enero de 2019 participé en la marcha de Maturín.</p></div></div>

<div class="q"><p class="pregunta">8. Su I-589 dice NO a que usted o su familia pertenecieran a una organización política, y su relato no habla de su activismo. ¿Por qué?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">El formulario lo llenó una preparadora que no es abogada, en inglés, y esa respuesta fue un error. Mi relato se centró en lo que le pasó a mi familia. Por eso presenté un anexo aclaratorio.</p>
<span class="lbl">Completa</span><p class="larga">Mis hijos y mi hijastra eran activistas y yo también participaba en oposición. La respuesta NO no era cierta. [<span class="tag conf">Confirma</span> si le leyeron el formulario en español y por qué no lo detectó entonces.]</p>
<p class="nota"><b>Es la pregunta más probable.</b> Conteste con una razón verdadera y sencilla. No la culpe a otra persona si no es cierto. El I-589 Parte B, 3.A se corrige de NO a SÍ con su abogada.</p></div></div>

<div class="q"><p class="pregunta">9. Si es opositora desde 1983, ¿por qué no la persiguieron antes de 2016?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Lo que consta: la persecución contra mi familia empezó en 2016, cuando mis hijos y Emily eran activistas visibles y la represión se endureció en todo el país (2014&ndash;2019). Mi anexo dice que después del allanamiento aumentó mi preocupación por las consecuencias de &ldquo;nuestra identificación política&rdquo; sobre nuestra familia. Si a usted le pasó algo antes (en su trabajo, en su pensión, en alguna actividad), cuéntelo con fecha.</p></div></div>

<div class="q"><p class="pregunta">10. Usted era docente del Estado. ¿Sufrió alguna represalia en su trabajo por su posición política?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Su expediente no dice nada de represalias laborales. Si no las hubo, diga: &ldquo;No, no que yo sepa&rdquo;. Si las hubo, cuente cuándo, quién y qué pasó.</p>
<p class="nota">Es una pregunta lógica: una funcionaria pública opositora durante décadas. Y pregunte por su jubilación: si su pensión se cobra, se suspendió o nunca la cobró.</p></div></div>

<div class="q"><p class="pregunta">11. ¿A qué organización pertenecían sus hijos? ¿Qué hacían?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Rafael, Ángel y Emily pertenecían a Voluntad Popular y participaban en la MUD. Iban a marchas pacíficas, asambleas de ciudadanos y hacían trabajo casa por casa.</p>
<span class="lbl">Completa</span><p class="larga">Hay una constancia de Voluntad Popular del 8 de noviembre de 2019, firmada por el coordinador de organización del partido en Monagas, que acredita a Ángel, a Rafael y a Emily como activistas. Mi anexo lo dice así: con el tiempo desarrollaron <b>sus propias convicciones políticas</b> y participaron en Voluntad Popular, manifestaciones y actividades estudiantiles opositoras.</p></div></div>

<div class="q"><p class="pregunta">12. ¿Puede probar su propia participación política?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Hoy su expediente no tiene ningún documento suyo de militancia o participación. Sí están: el testimonio de mis hijos, mi relato de 2020 (&ldquo;participando en muchísimas marchas&rdquo;), y la constancia de Voluntad Popular de mis hijos. Estoy buscando [carnets, fotos, cartas, planillas de firmas, testigos].</p>
<p class="nota">Consígalos: ver la tabla &ldquo;Cómo probar su activismo propio&rdquo; en la sección 2.</p></div></div>

<!-- ---------------- C ---------------- -->
<p class="bloque">C &mdash; El allanamiento de 2016</p>

<div class="q"><p class="pregunta">13. Cuénteme qué pasó el 21 de abril de 2016.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">A las seis de la mañana funcionarios sin identificación entraron a mi casa diciendo que Emily y mis hijos tenían material subversivo. Registraron todo y se llevaron detenida a Emily hasta la noche. La orden nos la entregaron después, de forma irregular.</p>
<span class="lbl">Completa</span><p class="larga">Eran funcionarios armados y civiles, sin identificarse. Revisaron toda la casa. Se llevaron a Emily y la liberaron horas después, ya de noche. Después nos entregaron la orden, y hablaba de una investigación por presuntos delitos contra el Estado: desestabilización, instigación pública y sabotaje. Al día siguiente, el 22 de abril, llevé a Emily al médico porque temblaba, lloraba sin control y no dormía; el médico diagnosticó una reacción aguda al estrés y recomendó atención psiquiátrica. Recibió tratamiento hasta comienzos de 2018.</p>
<p class="nota">Cuente lo que vio usted. <span class="tag conf">Confirma</span> si estaba en la casa, quién abrió, cuántas personas eran, si llevaban uniforme o chalecos.</p></div></div>

<div class="q"><p class="pregunta">14. ¿Cómo sabe que fue por motivos políticos? ¿No era una investigación legal por sabotaje?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Porque entraron primero y la orden llegó después, de forma irregular; hablaban de material subversivo; y después hombres armados rondaron mi casa preguntando por &ldquo;la muchacha opositora&rdquo;, y las llamadas decían que Emily sería castigada por &ldquo;traicionar la revolución&rdquo;.</p>
<span class="lbl">Completa</span><p class="larga">Los cargos que citaba la orden, instigación pública, desestabilización y sabotaje, son los que el gobierno ha usado contra opositores. Y lo que vino después no fue un proceso judicial: fueron amenazas, vigilancia de nuestra casa y llamadas a nuestros teléfonos. [<span class="tag conf">Confirma</span> si a Emily le abrieron algún proceso judicial después.]</p>
<p class="nota"><b>Ojo con Emily.</b> Sus declaraciones dicen que a Emily también pudieron señalarla por haber conocido corrupción de sus jefes; su anexo habla de pasantías en PDVSA. Diga lo que sabe y deje claro qué le dijeron a usted (&ldquo;material subversivo&rdquo;). No use lo de los jefes como explicación principal de su caso.</p></div></div>

<div class="q"><p class="pregunta">15. ¿Denunció el allanamiento?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Su expediente no dice que lo denunciara. Si no lo hizo: &ldquo;No, porque quienes entraron eran autoridades y funcionarios, y no había a quién acudir&rdquo; (solo si es su verdadera razón). <b>No invente una denuncia que no exista.</b></p></div></div>

<!-- ---------------- D ---------------- -->
<p class="bloque">D &mdash; Amenazas a usted</p>

<div class="q"><p class="pregunta">16. ¿Cuántas llamadas amenazantes recibió y qué le decían?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Más de diez, entre 2018 y 2019, a mi teléfono de la casa y a mi celular. Decían que Emily sería castigada por traicionar la revolución y que nosotros pagaríamos las consecuencias.</p>
<span class="lbl">Completa</span><p class="larga">Eran voces distintas con el mismo mensaje. Después del ataque a mis hijos, dos llamadas exigían que dejaran la política o &ldquo;las consecuencias serían fatales&rdquo;. Yo mantuve mi teléfono apagado más de un mes. Estando escondida en casa de mi madre, un hombre me dijo en tono burlón: &ldquo;Tu muchachita se salvó esta vez, pero no podrá esconderse para siempre&rdquo;. Después de que Emily salió del país, seguimos recibiendo llamadas y comentarios de vecinos diciendo que &ldquo;la justicia revolucionaria llega a todos lados&rdquo;.</p>
<p class="nota">Su teléfono residencial es 0291-643-5717 (Maturín); una versión de su declaración dice 0281 por error. No conserva registro telefónico: si no lo tiene, dígalo.</p></div></div>

<div class="q"><p class="pregunta">17. Su anexo dice que recibió llamadas &ldquo;de extorsión&rdquo;. ¿Le pidieron dinero?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Lo que consta: exigían que mis hijos abandonaran la política y advertían consecuencias. Si nunca pidieron dinero, diga: &ldquo;No pidieron dinero; lo que exigían era que dejaran la política&rdquo;.</p>
<p class="nota">La palabra &ldquo;extorsión&rdquo; aparece en el relato de Rafael, en el de Ángel y en su anexo. Un oficial puede leerla como delincuencia común. Aclare de qué se trataba.</p></div></div>

<div class="q"><p class="pregunta">18. ¿Sabe quién llamaba?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No. Eran números y voces desconocidas. Pero hablaban como quienes nos vigilaban: sabían de Emily, de mis hijos y de dónde estábamos.</p></div></div>

<!-- ---------------- E ---------------- -->
<p class="bloque">E &mdash; El ataque a sus hijos (junio de 2018)</p>

<div class="q"><p class="pregunta">19. ¿Qué vio usted el día del ataque a sus hijos?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Yo no estaba presente. Lo que viví fue lo que vino después: cuando mis hijos llegaron a la casa vi su miedo y su angustia. Eso me lo contaron ellos, y yo vi en qué estado quedaron.</p>
<span class="lbl">Completa</span><p class="larga">Ellos volvían de una reunión de su organización política y de amistad en La Floresta, llevando a unas compañeras a sus casas. Unos hombres en motos los interceptaron, les quitaron el carro de mi esposo, los celulares y las billeteras con los documentos, los agredieron y los amenazaron de muerte. Uno disparó contra Rafael; gracias a Dios la bala no lo alcanzó. Los días siguientes fueron de terror. Tres días después el carro apareció desvalijado.</p>
<p class="nota"><b>Hay dos versiones de esa noche en sus papeles.</b> Su declaración de mayo de 2026 dice que usted recibió la llamada de sus hijos y fue a buscarlos; su anexo dice que cuando ellos regresaron a la casa usted vio su miedo. Ángel dice que llamó a su madre para que los buscara. <span class="tag conf">Confirma</span> qué pasó y cuéntelo igual siempre.</p></div></div>

<div class="q"><p class="pregunta">20. ¿Qué fecha fue? ¿8 o 9 de junio?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">El 9 de junio de 2018. Así consta en mi relato y en mi anexo, y en las denuncias que mis hijos presentaron ante las autoridades.</p>
<p class="nota"><b>La fecha ya está resuelta:</b> la denuncia de Ángel ante el CICPC (11/06/2018) dice fecha del hecho <b>09-06-2018</b>, y la denuncia de Ángel y Rafael ante la Fiscalía y la Defensoría (28/01/2019) también dice <b>09-06-2018</b>. En una declaración suya de mayo de 2026 escribió 8 de junio: corríjala.</p></div></div>

<div class="q"><p class="pregunta">21. Su anexo dice que después sus hijos &ldquo;permanecieron prácticamente encerrados&rdquo;. ¿Cómo cuadra con que estuvieron ocho semanas en Puerto La Cruz y con que siguieron en la marcha de enero?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Se refería a que tenían miedo de salir y se movían lo mínimo. Fueron a Puerto La Cruz en sus vacaciones para alejarse, y en enero volvieron a la marcha; bajaron el perfil, pero no dejaron de creer en lo que hacían.</p>
<p class="nota"><span class="tag conf">Confirma</span> con lo que usted vio. &ldquo;Prácticamente encerrados&rdquo; es una expresión que el oficial puede tomar literal. Explique con calma.</p></div></div>

<div class="q"><p class="pregunta">22. ¿Dónde se escondieron? ¿Por cuánto tiempo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">En casa de mi madre, en Los Guaritos, en Maturín, y ocho semanas en casa de mi padre en Puerto La Cruz. Las amenazas nos siguieron.</p>
<span class="lbl">Completa</span><p class="larga">Mi madre, Eligia Zoraida Hernández, vive en la Av. Los Guaritos, Casa 60, Sector III, en Maturín; mi padre, Argenis Coa, en Puerto La Cruz. En casa de mi madre me llamaron con la frase &ldquo;no podrá esconderse para siempre&rdquo;. Escribí: &ldquo;aunque intentamos mantenernos ocultos, el miedo persistió&rdquo;.</p>
<p class="nota"><span class="tag conf">Confirma las fechas</span> Su declaración por Emily pone Los Guaritos de abril a junio de 2018; Ángel lo pone después del 25 de enero de 2019. Puede que hayan sido <b>dos estancias</b>. Póngase de acuerdo con Ángel y diga lo que recuerde.</p></div></div>

<!-- ---------------- F ---------------- -->
<p class="bloque">F &mdash; El 23 de enero de 2019</p>

<div class="q"><p class="pregunta">23. ¿Dónde estaba usted el 23 de enero de 2019 y qué pasó?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Yo participé personalmente en la manifestación de Maturín. Me quedé en la avenida Juncal mientras Ángel y Rafael siguieron con otros manifestantes hacia la Catedral, donde quedaron encerrados.</p>
<span class="lbl">Completa</span><p class="larga">Fue la marcha nacional. Yo llegué con mis hijos hasta la avenida Juncal, el punto de concentración. Ellos siguieron hacia la Catedral. [<span class="tag conf">Confirma</span> qué vio usted en la Juncal, cuándo se enteró de lo que pasaba en la Catedral, qué hizo esas horas, y cómo terminó el día.] Sé por mis hijos y por la prensa que motorizados encapuchados armados y la Guardia Nacional los atacaron con lacrimógenas y perdigones, que se refugiaron en la Catedral con el obispo Enrique Pérez Lavado, y que los grupos armados pedían que salieran para un &ldquo;juicio popular&rdquo; y luego entregarlos a la Guardia Nacional.</p>
<p class="nota">Diga con claridad lo que vio usted y lo que le contaron. Este dato es <b>nuevo</b> (viene del anexo) y el oficial lo va a explorar. <b>Lo respalda</b> la denuncia que Ángel y Rafael firmaron el 28/01/2019 (&ldquo;en compañía de nuestros padres José Emilio Navarro y Zoraida Coa de Navarro&rdquo;). Esa denuncia dice que el ataque fue a las 2:00 p. m. y que ellos estuvieron dentro más de diez horas, hasta la medianoche; la prensa dice más de tres horas. <span class="tag conf">Confirma</span> a qué hora supo usted que habían salido y cuándo los volvió a ver.</p></div></div>

<div class="q"><p class="pregunta">24. ¿Le pasó algo a usted ese día? ¿Fue amenazada, herida o detenida?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Su anexo no dice que le pasara algo a usted. Si no le pasó, diga: &ldquo;No, a mí no; me quedé en la Juncal y luego [lo que hizo]&rdquo;. No agregue nada que no ocurrió.</p></div></div>

<div class="q"><p class="pregunta">25. ¿Qué pasó dos días después, el 25 de enero?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Recibí una llamada, en el mismo número donde el año anterior me habían amenazado, diciendo que mis hijos tenían que irse de la ciudad o los iban a asesinar.</p>
<span class="lbl">Completa</span><p class="larga">Me recordaron que &ldquo;meses antes les perdonaron la vida&rdquo;. Sentí desesperación e impotencia: no había ninguna protección para nosotros. Fue lo que llevó a mis hijos a decidir salir del país.</p></div></div>

<div class="q"><p class="pregunta">26. En diciembre de 2018 usted escribió que aconsejó a sus hijos &ldquo;bajar la guardia&rdquo;. ¿No significa eso que estaban tranquilos?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No. Se los aconsejé precisamente por miedo, y aun así los alcanzaron: el 23 y el 25 de enero de 2019 recibí la amenaza de muerte. Bajar el perfil no los protegió.</p>
<p class="nota">Y &ldquo;apartarse temporalmente&rdquo; era lo que yo esperaba como madre; los hechos dicen otra cosa. Diga esa diferencia con calma, sin negarla.</p></div></div>

<!-- ---------------- G ---------------- -->
<p class="bloque">G &mdash; Su esposo, su viaje y su permanencia</p>

<div class="q"><p class="pregunta">27. ¿Cuándo salieron sus hijos de Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">A fines de marzo de 2019, el 28 o 29, hacia Santo Domingo, y llegaron a Orlando el 2 de abril.</p>
<p class="nota"><b>Su anexo dice &ldquo;3 de abril de 2019&rdquo;: es un error.</b> Corríjalo con los pasaportes antes de presentarlo. Su carta a USCIS dice &ldquo;abril del 2019&rdquo;. Tres versiones distintas de una misma fecha es lo que un oficial subraya.</p></div></div>

<div class="q"><p class="pregunta">28. Sus hijos salieron en marzo de 2019 y usted se quedó hasta diciembre. Si temía, ¿por qué se quedó?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span> su razón real.] Lo que consta: las amenazas contra usted y su esposo continuaron esos meses (&ldquo;no cesaban&rdquo;), y usted decidió ir a verlos tras ocho meses sin verlos.</p>
<p class="nota"><b>Esta pregunta la van a hacer.</b> Su expediente no explica por qué se quedó. No invente: piense por qué lo hizo y dígalo en dos frases (por ejemplo, que su esposo seguía allí, que tenía su casa, o lo que de verdad fuera). Y recuerde que las amenazas y el acoso a su casa siguieron.</p></div></div>

<div class="q"><p class="pregunta">29. Vino con visa de turista. ¿Cuándo decidió pedir asilo? ¿Por qué no antes?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Vine el 14 de diciembre de 2019 a visitar a mis hijos, después de más de ocho meses sin verlos. Con la pandemia no pude regresar, y mi esposo me informó que en Venezuela seguían las amenazas. Pedí asilo el 24 de agosto de 2020, dentro del año.</p>
<span class="lbl">Completa</span><p class="larga">Entré por Fort Lauderdale con visa B2. Mi estatus venció el 13 de junio de 2020. El 13 de marzo de 2020 agredieron a mi esposo preguntando por mis hijos; ahí supe que no podía volver. Quería reunificar a mi familia y proteger su integridad física.</p>
<p class="nota">Su carta dice &ldquo;he tratado de extender mi estadía aquí&rdquo;. Si le preguntan si venía con la intención de quedarse, responda con verdad: su carta dice que vino a visitarlos.</p></div></div>

<div class="q"><p class="pregunta">30. Descríbame lo que le pasó a su esposo.</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">El 13 de marzo de 2020, cuatro hombres armados con ropa militar negra, sin identificación, lo agredieron físicamente y gritaban que querían saber dónde estaban mis hijos; amenazaron con entrar a la casa a buscar pruebas de conspiración. Me lo contó él.</p>
<span class="lbl">Completa</span><p class="larga">Yo estaba en Estados Unidos cuando ocurrió, así que lo sé por lo que me informó mi esposo. El 16 de abril de 2021, las cámaras de la casa grabaron a hombres encapuchados y fuertemente armados gritando por &ldquo;Emily y su familia traidora de la patria&rdquo;; los vecinos Eduardo José Ruiz y Josefa María Noguera nos dijeron que rondaron la casa varios minutos intentando entrar. Mi esposo huyó del país el 19 de abril de 2021.</p>
<p class="nota">Diga siempre &ldquo;me lo contó&rdquo; cuando no lo presenció. Y <span class="tag conf">Confirma</span> ¿guarda el video de las cámaras? Es su única prueba visual.</p></div></div>

<div class="q"><p class="pregunta">31. Su esposo se quedó en Venezuela hasta 2021. ¿Por qué él sí pudo quedarse?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Se quedó y por eso lo agredieron en 2020 y tuvo que huir en 2021. Lo que le pasó a él confirma el peligro, no lo contradice.</p></div></div>

<!-- ---------------- H ---------------- -->
<p class="bloque">H &mdash; Temor a regresar y cambios en el país</p>

<div class="q"><p class="pregunta">32. ¿Qué cree que le pasaría si regresa a Venezuela hoy?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Me detendrían o me harían daño por mi posición política y para presionar a mis hijos o averiguar dónde están. Ya fueron a mi casa, me llamaron y golpearon a mi esposo. Los que nos persiguieron siguen ahí.</p>
<span class="lbl">Completa</span><p class="larga">Mi miedo no es solo por estar en desacuerdo con el gobierno; se basa en cosas concretas que nos pasaron a mi familia y a mí, dentro de un contexto marcado por nuestra identificación política. Mi declaración lo dice: quienes nos persiguieron continúan operando con total impunidad en Maturín. La ONU documenta que en Venezuela se detiene y presiona a los familiares de opositores como represalia. Tengo 61 años y mi familia más cercana, mi esposo y mis hijos, está aquí.</p></div></div>

<div class="q"><p class="pregunta">33. ¿A quién le teme concretamente?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">A los colectivos armados afines al gobierno y a los funcionarios de los cuerpos de seguridad que participaron en el allanamiento y nos persiguen.</p>
<p class="nota">Su declaración dice que los del allanamiento eran &ldquo;presuntamente del CICPC&rdquo;. Use &ldquo;presuntamente&rdquo;: no lo sabe con certeza.</p></div></div>

<div class="q"><p class="pregunta">34. ¿Teme ser torturada?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. Temo que me detengan y me traten cruelmente para presionar a mi familia. La ONU documenta tortura en centros como El Rodeo I y el Fuerte Guaicaipuro, con 64 casos nuevos desde enero de 2026.</p>
<p class="nota"><b>Su I-589 se contradice aquí.</b> En la Parte B, pregunta 4, dice NO; pero usted marcó la Convención contra la Tortura y escribió que sí teme ser víctima de tortura. Es la contradicción más visible del formulario: se corrige al inicio.</p></div></div>

<div class="q"><p class="pregunta">35. Maduro fue capturado en enero y hay una ley de amnistía. ¿No cambió todo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Cambió la persona, no el aparato. La misión de la ONU dijo en septiembre de 2026 que el aparato represivo sigue intacto y que los colectivos siguen intimidando.</p>
<span class="lbl">Completa</span><p class="larga">Gobierna Delcy Rodríguez, que era vicepresidenta de Maduro. La ONU reporta 214 detenciones políticas arbitrarias en 12 meses y 64 casos nuevos de tortura desde el 3 de enero; y 19 funcionarios señalados por violaciones siguen en cargos. Foro Penal habla de una puerta giratoria. La amnistía se pide por abogado y no cubre violaciones de derechos humanos. A mí no me buscan solo autoridades: me buscan grupos armados que no dependen de ninguna ley. Mi anexo lo dice: las condiciones políticas que originaron mi temor no han desaparecido.</p>
<p class="nota"><b>Actualice estas cifras la semana de la entrevista.</b></p></div></div>

<div class="q"><p class="pregunta">36. ¿No podría vivir en otra parte de Venezuela?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Lo intentamos: nos escondimos en casa de mi madre y de mi padre y las amenazas nos siguieron. Además esos grupos actúan en todo el país.</p></div></div>

<div class="q"><p class="pregunta">37. ¿Ha regresado a Venezuela desde que salió?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">No.</p></div></div>

<div class="q"><p class="pregunta">38. ¿Tiene propiedades en Venezuela? ¿Recibe una pensión del Estado?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Su expediente no dice qué pasó con su casa de Río Claro 54 ni si usted cobra una pensión de jubilada.</p>
<p class="nota">Son preguntas de rutina y el oficial las hará si usted se jubiló como funcionaria del Estado. Averigüe antes: si su casa sigue en su poder, quién vive en ella, y si su pensión se cobra, se suspendió o nunca la cobró.</p></div></div>

<!-- ---------------- I ---------------- -->
<p class="bloque">I &mdash; Estados Unidos, otras solicitudes y el formulario</p>

<div class="q"><p class="pregunta">39. ¿Trabaja? ¿Desde cuándo? ¿Con qué permiso?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">Sí. Soy maestra bilingüe en Rockford Public Schools, Distrito 205, desde el 17 de agosto de 2023. Trabajo con un permiso basado en mi asilo pendiente (categoría C08).</p>
<p class="nota"><span class="tag conf">Confirma</span> el estado actual de su permiso: se vencía el 16 de abril de 2025 y usted presentó la renovación el 19 de enero de 2025 (recibo IOE9124673968).</p></div></div>

<div class="q"><p class="pregunta">40. ¿Ha pedido usted o su esposo algún otro beneficio migratorio?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Hay un borrador del 20 de diciembre de 2024 para incluir a su esposo como derivado de su asilo (con el hueco &ldquo;[Full Name of Spouse]&rdquo; sin llenar), y su esposo tiene una solicitud de TPS. Y hay un documento de proyecto en inglés preparado para una petición de interés nacional (NIW).</p>
<p class="nota">Responda con verdad y solo lo que haya presentado realmente. <b>Confirme con su abogada si esa carta se presentó y si el NIW se presentó</b>: el oficial ve todos sus trámites.</p></div></div>

<div class="q"><p class="pregunta">41. ¿Quién llenó su formulario? ¿Se lo leyeron en español antes de firmarlo?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">María Virginia Palomo-Álvarez, en Winter Park, Florida. No es abogada. El formulario está en inglés y yo no hablo inglés con fluidez. [<span class="tag conf">Confirma</span> si me lo leyeron en español.]</p>
<p class="nota">Esa explicación sirve para las contradicciones del formulario, pero solo si es verdad. Su formulario dice en la parte de la preparadora que se lo leyeron en un idioma que usted entiende.</p></div></div>

<div class="q"><p class="pregunta">42. Su formulario habla de &ldquo;bloqueos temporales de los activos financieros familiares&rdquo; y del &ldquo;Cartel de los Soles&rdquo;. ¿De dónde sale eso?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Su relato en español no menciona nada de eso. Si le pasó, diga cuándo y cómo, con qué banco y si tiene prueba. Si no le pasó: &ldquo;ese texto lo escribió la preparadora; yo no lo revisé bien&rdquo;, y se corrige.</p></div></div>

<div class="q"><p class="pregunta">43. ¿Ha sido arrestada o acusada alguna vez, en cualquier país?</p><div class="respuesta">
<span class="lbl">Respuesta</span><p class="corta">[<span class="tag conf">Confirma</span>] Su expediente no registra ningún arresto suyo. Si es así: &ldquo;No, nunca&rdquo;. Si hubiera cualquier cosa, dígaselo a su abogada antes.</p></div></div>

<div class="q"><p class="pregunta">44. ¿Qué pruebas tiene de lo que dice?</p><div class="respuesta">
<span class="lbl">Corta</span><p class="corta">La constancia de Voluntad Popular de mis hijos; las denuncias que mis hijos presentaron ante el CICPC, la Fiscalía y la Defensoría del Pueblo (esta última con sello de recibido de enero de 2019, que dice que yo y mi esposo estábamos en la marcha); mis declaraciones juradas y las de mis hijos; mis cartas y mi anexo; el video de las cámaras de 2021 [<span class="tag conf">Confirma</span> si lo tengo]; y los vecinos que pueden confirmar lo de mi casa.</p>
<p class="nota">Lo que falta y conviene conseguir: pruebas de <b>su propia militancia</b> (carnet, cartas, fotos, planillas de firmas, testigos), el video de las cámaras, cartas firmadas de los vecinos Eduardo José Ruiz y Josefa María Noguera con copia de su cédula, el informe médico del 22/04/2016 de Emily y su tratamiento hasta 2018, y la constancia de su jubilación.</p></div></div>

<div class="q"><p class="pregunta">45. ¿Hay algo más que quiera agregar?</p><div class="respuesta">
<span class="lbl">Corta (que sea corta y firme)</span><p class="corta">Solo quiero decir que fui maestra toda mi vida y opositora de forma pública, y que nunca pensé en irme de mi país. Me fui porque persiguieron a mi familia y me alcanzaron a mí: entraron a mi casa, me llamaron amenazándonos y golpearon a mi esposo. Regresar hoy me pone en riesgo. Pido que se me conceda protección.</p></div></div>

<!-- ============================================================ -->
<h2 id="s9">9 &middot; Correcciones y puntos a confirmar</h2>

<p class="lede">Al inicio de la entrevista, después del juramento, el oficial repasará la <b>Parte F</b> de su I-589. Ahí, con su abogada, se presentan las correcciones. <b>Qué se corrige y cómo lo decide su abogada; usted solo tiene que conocer los puntos.</b> Con el anexo, esta lista creció.</p>

<h3>Respuestas de su I-589 (24/08/2020) que contradicen su propio caso</h3>
<div class="scroll">
<table>
<tr><th>Pregunta</th><th>Usted contestó</th><th>El problema</th></tr>
<tr><td><b>Parte B, 3.A</b><br>¿Usted o su familia pertenecieron a un partido u organización?</td><td><b style="color:#96301c">NO</b></td><td><b>La más grave.</b> Su anexo dice que usted fue opositora desde 1983 (COPEI, MUD) y sus hijos, de Voluntad Popular. Hay que pasarla a <b>SÍ</b> con los detalles de cada persona.</td></tr>
<tr><td><b>Parte B, 3.B</b><br>¿Siguen participando?</td><td>NO</td><td>Arrastra el error del 3.A. Decida con su abogada qué es verdad hoy.</td></tr>
<tr><td><b>Parte B, 4</b><br>¿Teme ser torturada?</td><td><b style="color:#96301c">NO</b></td><td>Pero marcó la Convención contra la Tortura y escribió que sí teme ser víctima de tortura.</td></tr>
<tr><td><b>Parte B, 2</b><br>¿Usted o un familiar fue detenido o interrogado?</td><td><b style="color:#96301c">NO</b></td><td>Emily fue detenida e interrogada el 21/04/2016. Usted misma lo narra.</td></tr>
</table>
</div>
<div class="bien"><p class="t">Lo que sí contestó bien</p><p style="margin:0"><b>Parte C, pregunta 1</b> (&ldquo;¿algún familiar ha solicitado asilo?&rdquo;): contestó <b>SÍ</b> y puso los nombres de Rafael y Ángel. Y <b>Parte C, 2.A</b> (&ldquo;¿pasó por otro país?&rdquo;): contestó NO, y es correcto porque usted entró directo a Fort Lauderdale. Y marcó <b>&ldquo;opinión política&rdquo;</b>: el anexo la sustenta ahora también con su propia opinión. Su formulario no marcó <b>&ldquo;grupo social determinado&rdquo;</b> (por ejemplo, la familia): decisión de su abogada.</p></div>

<h3>Puntos que hay que decidir, con los datos nuevos del anexo</h3>
<div class="scroll">
<table>
<tr><th>Punto</th><th>Qué dicen sus papeles</th><th>Qué hacer</th></tr>
<tr><td><b>Fecha de salida de sus hijos</b> <span class="tag anexo">Anexo</span></td><td>Anexo: <b>3 de abril de 2019</b>. Rafael: 28/03. Ángel: 29/03 y llegada a Orlando el <b>2/04</b>. Su carta a USCIS: &ldquo;abril de 2019&rdquo;.</td><td><b>Corregir el anexo</b>: salieron el 28 o 29 de marzo y llegaron el 2 de abril (pasaportes y boletos).</td></tr>
<tr><td><b>La noche del ataque</b> <span class="tag anexo">Anexo</span></td><td>Declaración de mayo de 2026: usted los recogió tras la llamada. Anexo: vio su miedo cuando regresaron a casa; &ldquo;no estuve presente&rdquo;.</td><td>Fijar una sola secuencia verdadera (pregunta 19).</td></tr>
<tr><td><b>Su activismo propio</b> <span class="tag anexo">Anexo</span></td><td>Ningún documento anterior lo menciona; el I-589 dice NO. Sin pruebas suyas en el expediente.</td><td>Corregir el I-589; preparar ejemplos concretos; reunir pruebas y testigos (sección 2).</td></tr>
<tr><td><b>Orden judicial y &ldquo;sabotaje&rdquo;</b> <span class="tag anexo">Anexo</span></td><td>Declaraciones anteriores: entraron sin orden y la entregaron después, irregularmente. Anexo: la orden citaba desestabilización, instigación pública y sabotaje. Pasantías: &ldquo;recursos humanos&rdquo; (declaración) o &ldquo;PDVSA&rdquo; (anexo).</td><td>Decidir cómo se explica (sección 4, año 2016). Aclarar si a Emily le abrieron un proceso.</td></tr>
<tr><td><b>&ldquo;Prácticamente encerrados&rdquo;</b> <span class="tag anexo">Anexo</span></td><td>Anexo: los hijos permanecieron prácticamente encerrados. Ángel: 8 semanas en Puerto La Cruz; siguieron la actividad política hasta el 23/02/2019.</td><td>Explicar que era miedo y que redujeron sus movimientos (pregunta 21).</td></tr>
<tr><td><b>El 23 de enero</b> <span class="tag anexo">Anexo</span></td><td>Anexo: usted participó y se quedó en la Av. Juncal. Ninguna declaración anterior lo decía.</td><td>Preparar qué vio y qué hizo (preguntas 23 y 24).</td></tr>
<tr><td><b>Su historial de trabajo</b></td><td>Cuatro versiones: (1) relato: jubilada en 2008; (2) I-589: directora del Liceo Leonardo Ruiz Pineda, 09/2000&ndash;07/2011; (3) su currículo: maestra 1983&ndash;1995, directora de escuela primaria 1999&ndash;2008, profesora de nivel medio 1991&ndash;2012; (4) carta oficial: Teacher IV desde el 1/01/1983 &ldquo;hasta la fecha&rdquo; &mdash; <b>pero esa carta es del 6/11/1995</b>, no actual.</td><td>Decida una sola versión verdadera con su constancia de jubilación. Un liceo es de secundaria y usted dice que fue directora de escuela primaria: el I-589 probablemente tiene un error de la preparadora.</td></tr>
<tr><td><b>Fecha del ataque</b> <span class="tag anexo">Resuelto</span></td><td>Denuncia CICPC (11/06/2018), denuncia Fiscalía y Defensoría (28/01/2019), su relato de 2020, su anexo y Rafael: <b>9 de junio</b>. Solo su declaración por Ángel (mayo de 2026) y el relato de Ángel dicen 8.</td><td>Use <b>9 de junio</b> y corrija la declaración.</td></tr>
<tr><td><b>Duración del encierro en la Catedral</b></td><td>Denuncia de sus hijos (28/01/2019): más de 10 horas, hasta las 12 de la noche. Relato de Rafael: 5 horas. Prensa: más de 3 horas; primeros grupos saliendo hacia las 5 p. m.</td><td>Ellos deben fijar la hora real. Usted diga cuándo se enteró y cuándo los vio.</td></tr>
<tr><td><b>Denuncia del CICPC frente al relato</b></td><td>El CICPC anota robo, tres sujetos, sin golpes, disparo ni móvil político. El relato de sus hijos: cuatro sujetos, golpes, disparo, &ldquo;se los dijimos&rdquo;. Lista como víctima a &ldquo;Gabriel Ruiz&rdquo;, que no aparece en ningún relato.</td><td>Es asunto de Rafael y Ángel; usted solo cuente lo que vio y lo que le contaron.</td></tr>
<tr><td><b>Llamadas a usted en las denuncias del 28/01/2019</b></td><td>Las denuncias no mencionan ni las llamadas de 2018 ni la del 25/01/2019.</td><td>Tenga la respuesta: eran denuncias sobre los ataques a sus hijos. <span class="tag conf">Confirma</span> si usted hizo alguna denuncia por sus llamadas.</td></tr>
<tr><td><b>Los escondites</b></td><td>Los Guaritos: abril&ndash;junio de 2018 (su declaración por Emily) o después del 25/01/2019 (Ángel). Puerto La Cruz: 8 semanas, verano de 2018.</td><td>Puede que hayan sido dos estancias en la misma casa. Póngase de acuerdo con Ángel.</td></tr>
<tr><td><b>&ldquo;Líderes universitarios&rdquo;</b></td><td>Una versión de su declaración por Ángel (con fecha 05-12-2026) dice que sus hijos eran &ldquo;líderes universitarios&rdquo;; la otra no. El relato de Rafael dice que no tenía cargo formal. El anexo dice que participaron en Voluntad Popular y en actividades estudiantiles.</td><td>Verifique cuál versión firmó y que no diga &ldquo;líderes&rdquo; si no es cierto.</td></tr>
<tr><td><b>Su teléfono</b></td><td>Una versión de su declaración pone el código 0281; la otra 0291.</td><td>El de Maturín es 0291.</td></tr>
<tr><td><b>Fecha de presentación</b></td><td>I-589 firmado el 24/08/2020; su carta de 20/12/2024 dice presentado el 18/09/2020.</td><td>Confirme con el recibo (I-797C).</td></tr>
<tr><td><b>Los ocho meses que se quedó</b></td><td>Se quedó desde marzo hasta el 14/12/2019 con amenazas continuas.</td><td>Prepare su razón real (pregunta 28).</td></tr>
<tr><td><b>Su esposo como derivado</b></td><td>La carta de inclusión quedó con &ldquo;[Full Name of Spouse]&rdquo; sin rellenar.</td><td>Confirme con su abogada si se presentó.</td></tr>
</table>
</div>

<div class="alerta">
  <p class="t">Asuntos urgentes de su caso</p>
  <ol style="margin:0">
    <li><b>Corrija el anexo antes de presentarlo</b>: la fecha de salida de sus hijos (28/29 de marzo, no 3 de abril) y cualquier detalle que no pueda contar con hechos. Y revise que el resto del anexo (las páginas siguientes, si existen) diga lo mismo que este documento.</li>
    <li><b>Confirme la fecha y el lugar de su entrevista</b> en el aviso de USCIS o en myaccount.uscis.gov; su expediente no la trae.</li>
    <li><b>Confirme quién es su abogado hoy.</b> Su guion anterior mencionaba a Dietrich &amp; Roman; sin un G-28 presentado, USCIS no reconocerá a su representante en la entrevista. La corrección del I-589 y el anexo los presenta su abogada.</li>
    <li><b>Reúna pruebas de su propia militancia</b> (sección 2) y las de los testigos.</li>
    <li><b>Confirme el estado de su permiso de trabajo (C08)</b>: vencía el 16 de abril de 2025.</li>
    <li><b>Consiga su intérprete</b> (mayor de 18 años, que hable inglés y español, que no sea su abogado ni testigo) y confirme que USCIS tiene su dirección actual: 1068 McKnight Cir, Apt. 2, Rockford, IL.</li>
    <li>Busque el <b>video de las cámaras de abril de 2021</b>, las cartas de los dos vecinos y su <b>constancia de jubilación</b>.</li>
  </ol>
</div>

<!-- ============================================================ -->
<h2 id="s10">10 &middot; Plan de estudio y día de la entrevista</h2>

<div class="card">
<p><b>Cómo estudiar (cinco días):</b></p>
<ol style="margin:0">
  <li><b>Día 1:</b> lea las secciones 1 y 2 y cuente en voz alta su caso en 60 segundos, sin mirar. Escriba tres ejemplos concretos de su propia participación política.</li>
  <li><b>Día 2:</b> cronología de 1983 a 2018; escriba de memoria las fechas en negrita y corríjase con el documento.</li>
  <li><b>Día 3:</b> cronología de 2019 a 2021 y diga, en cada hecho, si lo vivió o se lo contaron. Practique el 23 de enero.</li>
  <li><b>Día 4:</b> modo estudio del panel: responda en voz alta, con un intérprete o alguien que pause tras cada frase. Actualice las cifras de 2026.</li>
  <li><b>Día 5:</b> repaso corto y simulacro con su abogada. Descanse, prepare los documentos y llegue temprano.</li>
</ol>
</div>

<div class="card">
<p><b>Qué llevar:</b></p>
<div class="chk"><input type="checkbox" id="z1"><label for="z1">Intérprete propio (mayor de 18, no es su abogada ni testigo).</label></div>
<div class="chk"><input type="checkbox" id="z2"><label for="z2">Pasaporte original (114217985) e I-94 (384096269A2).</label></div>
<div class="chk"><input type="checkbox" id="z3"><label for="z3">Copia completa de su I-589 tal como se presentó (24/08/2020), con las respuestas a corregir marcadas.</label></div>
<div class="chk"><input type="checkbox" id="z4"><label for="z4">Anexo aclaratorio (corregido) y su declaración jurada.</label></div>
<div class="chk"><input type="checkbox" id="z5"><label for="z5">Aviso de la cita y G-28 de su abogada.</label></div>
<div class="chk"><input type="checkbox" id="z6"><label for="z6">Pruebas de su militancia (COPEI, MUD): carnets, cartas, fotos, planillas de firmas.</label></div>
<div class="chk"><input type="checkbox" id="z7"><label for="z7">Constancia de Voluntad Popular (8/11/2019) de sus hijos y de Emily.</label></div>
<div class="chk"><input type="checkbox" id="z8"><label for="z8">Video de las cámaras (16/04/2021) y cartas de los vecinos.</label></div>
<div class="chk"><input type="checkbox" id="z9"><label for="z9">Informe médico de Emily (22/04/2016) y registros de su tratamiento.</label></div>
<div class="chk"><input type="checkbox" id="z10"><label for="z10">Constancia de jubilación y su carta de empleo actual (RPS 205).</label></div>
<div class="chk"><input type="checkbox" id="z11"><label for="z11">Su permiso de trabajo vigente y el recibo de renovación.</label></div>
</div>

<div class="card">
<p><b>Cinco cosas para la sala:</b></p>
<ol style="margin:0">
  <li>Responda solo lo que le preguntan, en frases cortas, y <b>pause para que el intérprete traduzca</b>.</li>
  <li>Si no entiende, pida que repitan. Si no recuerda, <b>diga que no recuerda</b>. Nunca adivine.</li>
  <li>Diga siempre si <b>lo vio</b> o <b>se lo contaron</b>.</li>
  <li>Si el oficial señala una contradicción, <b>no improvise</b>: diga la verdad (la preparadora no es abogada, el formulario está en inglés, han pasado seis años).</li>
  <li>Las correcciones las adelanta usted al inicio, con su abogada. Lo demás, solo si se lo preguntan.</li>
</ol>
</div>

<!-- ============================================================ -->
<h2 id="s11">11 &middot; Fuentes</h2>

<div class="foot">
<p><b>Su expediente:</b> <b>Anexo aclaratorio y complementario a su declaración de asilo</b> (dos páginas recibidas); I-589 (24/08/2020); su relato/carta a USCIS; declaraciones juradas por Ángel (mayo de 2026, dos versiones) y por Emily (noviembre de 2025, dos versiones); cartas a USCIS de marzo de 2025 (dos versiones) y de 20/12/2024; carta oficial de empleo de la Secretaría de Educación de Monagas (6/11/1995) y nombramiento de subdirectora (18/01/1996); carta de Rockford Public Schools (14/02/2024); recibo de I-765 (19/01/2025); currículo (2023); relato de Ángel (17/06/2019) y de Rafael.</p>
<p><b>Contexto histórico y de país (enlaces en cada sección):</b></p>
<ul>
<li>COPEI y MUD: <a href="https://en.wikipedia.org/wiki/Copei">COPEI</a>, <a href="https://es.wikipedia.org/wiki/Mesa_de_la_Unidad_Democr%C3%A1tica">MUD</a>, <a href="https://en.wikipedia.org/wiki/2013_Venezuelan_presidential_election">elecciones de 2013</a>.</li>
<li>2014&ndash;2019: <a href="https://en.wikipedia.org/wiki/2014_Venezuelan_protests">2014</a>, <a href="https://en.wikipedia.org/wiki/2017_Venezuelan_protests">2017</a>, <a href="https://en.wikipedia.org/wiki/2019_Venezuelan_protests">2019</a>, <a href="https://provea.org/paramilitarismo/protestas-2017-colectivos-de-ejecutores-de-un-patron-a-parte-de-un-sistema-represivo/">Provea</a>, <a href="https://www.hrw.org/es/news/2019/05/03/venezuela-violenta-respuesta-las-manifestaciones">HRW 2019</a>, <a href="https://www.ohchr.org/es/2019/07/un-human-rights-report-venezuela-urges-immediate-measures-halt-and-remedy-grave-rights">ONU-DDHH 2019</a>.</li>
<li>Allanamientos y familias: <a href="https://provea.org/actualidad/hace-cinco-anos-el-operativo-de-liberacion-del-pueblo-abrio-el-camino-para-la-represion-total-en-venezuela/">Provea: OLP</a>, <a href="https://www.eltiempo.com/mundo/venezuela/informe-noches-del-terror-ataques-y-allanamientos-ilegales-a-viviendas-en-venezuela-146226">Amnistía: Noches del terror</a>, <a href="https://www.infobae.com/venezuela/2025/09/20/la-mision-de-la-onu-en-venezuela-denuncio-un-patron-sistematico-de-detenciones-a-familiares-de-opositores-que-busca-generar-miedo-y-control-social/">Infobae: familiares de opositores (ONU 2025)</a>, <a href="https://www.hrw.org/es/news/2020/09/17/venezuela-investigacion-de-la-onu-concluye-que-se-cometieron-crimenes-de-lesa">HRW: ONU 2020</a>.</li>
<li>Cargos contra opositores: <a href="https://foropenal.com/venezuela-arremetida-opositores-brutalidad-tortura-persecucion-politica-venezuela/">Foro Penal / HRW</a>, <a href="https://efectococuyo.com/politica/quienes-han-sido-imputados-en-venezuela-por-instigacion-al-odio-y-por-que/">Efecto Cocuyo</a>.</li>
<li>Monagas: <a href="https://efectococuyo.com/politica/monagas-la-disidencia-es-perseguida-con-medidas-judiciales/">Efecto Cocuyo</a>. Revocatorio: <a href="https://cnnespanol.cnn.com/2016/10/20/anulan-firmas-de-la-primera-fase-del-revocatorio-en-varios-estados-de-venezuela">CNN</a>.</li>
<li>2026: <a href="https://www.emol.com/noticias/Nacional/2026/09/16/1211609/onu-represion-venezuela-captura-maduro.html">Emol (ONU)</a>, <a href="https://www.elnacional.com/investigacion/2026/09/onu-informe-colectivos-represion-estado-venezuela-2026/">El Nacional</a>, <a href="https://foropenal.com/articulo/situation-of-political-prisoners-in-venezuela-january-february-2026">Foro Penal</a>, <a href="https://en.wikipedia.org/wiki/2026_political_prisoner_release_in_Venezuela">Liberaciones 2026</a>.</li>
<li>Entrevista de asilo: <a href="https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum/preparing-for-your-affirmative-asylum-interview">USCIS</a>, <a href="https://shorelineimmigration.com/asylum/asylum-interview-sample-questions/">Shoreline Immigration</a>, <a href="https://www.claxtonlawgroup.com/asylum/asylum-interview-preparation/">Claxton Law</a>, <a href="https://www.youtube.com/watch?v=g6FFCiqRiA0">YouTube (simulacro con ex oficial)</a>.</li>
</ul>
<p><b>Este documento es una ayuda de estudio sobre su propio caso, no asesoría legal.</b> Las cifras de organismos y de la prensa provienen de las fuentes enlazadas y pueden variar según el recuento. Las respuestas están redactadas a partir de lo que usted ya declaró; ajuste cualquier frase que no coincida con su memoria. Las correcciones al I-589, el anexo, la base legal del caso (incluida la de pertenencia a un grupo social, que su formulario no marcó) y los demás trámites son decisiones de su abogada.</p>
<p>Versión 4 &mdash; 27 de septiembre de 2026. Las versiones 1 y 2 están respaldadas en <code>_backup_2026-09-26</code>. Documentos de Ángel usados: <code>Denuncia de CICPC.pdf</code>, <code>Denuncia en Fiscalia 28 01 2019</code>, <code>Denuncia en Defensoria 28 01 2019</code>, <code>Carta de activista politico MUD Angel desde 2016.pdf</code>, <code>Carta de Voluntad Popular.pdf</code> y <code>Asilo - Angel Navarro.docx</code>.</p>
</div>

</div>

<script>
(function(){
  var body=document.body;
  var btn=document.getElementById("modoEstudio");
  var all=document.getElementById("abrirTodas");
  function setModo(on){
    if(on){body.classList.add("estudio");btn.textContent="Modo estudio: activo (toque una pregunta)";}
    else{body.classList.remove("estudio");btn.textContent="Modo estudio: tapar respuestas";
      var qs=document.querySelectorAll(".q.open");for(var i=0;i<qs.length;i++){qs[i].classList.remove("open");}}
  }
  btn.addEventListener("click",function(){setModo(!body.classList.contains("estudio"));});
  all.addEventListener("click",function(){
    var qs=document.querySelectorAll(".q");
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
  var key="asilo_zoraida_v3_chk";
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
</script>
</body>
</html>
`;
