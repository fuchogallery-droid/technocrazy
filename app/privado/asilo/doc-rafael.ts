// Generado desde Guion_Entrevista_Asilo_Rafael.html - no editar a mano.

export const DOCUMENTO_HTML = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<title>Guion de Entrevista de Asilo</title>
<style>
  :root{
    --bg:#faf9f7; --fg:#1c1b19; --muted:#5f5b54; --line:#ddd8d0;
    --card:#fff; --accent:#7a3b2e; --warn:#8a5a00; --warnbg:#fdf6e6;
    --errbg:#fdefec; --err:#96301c; --okbg:#eef5ee; --ok:#2f5d3a;
    --newbg:#eef1f7; --new:#2f4470;
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--fg);
    font:16px/1.6 "Iowan Old Style",Georgia,"Times New Roman",serif;}
  .wrap{max-width:900px;margin:0 auto;padding:48px 28px 96px}
  h1{font-size:34px;line-height:1.15;margin:0 0 6px;letter-spacing:-.02em}
  .sub{color:var(--muted);font-size:15px;margin:0 0 34px}
  h2{font-size:13px;letter-spacing:.09em;text-transform:uppercase;
    color:var(--accent);margin:52px 0 14px;padding-bottom:7px;
    border-bottom:2px solid var(--accent);font-family:system-ui,sans-serif;font-weight:700}
  h3{font-size:18px;margin:30px 0 10px;letter-spacing:-.01em}
  p{margin:0 0 13px}
  .card{background:var(--card);border:1px solid var(--line);border-radius:9px;
    padding:18px 20px;margin:0 0 16px}
  .q{background:var(--card);border:1px solid var(--line);border-left:4px solid var(--accent);
    border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 14px}
  .q .pregunta{font-weight:700;margin:0 0 9px}
  .q .resp{margin:0 0 8px}
  .src{font-family:system-ui,sans-serif;font-size:12.5px;color:var(--muted);
    margin:8px 0 0;padding-top:8px;border-top:1px dotted var(--line)}
  .alerta{background:var(--errbg);border:1px solid #e8c4bb;border-left:4px solid var(--err);
    border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 16px}
  .alerta .t{font-weight:700;color:var(--err);margin:0 0 7px;
    font-family:system-ui,sans-serif;font-size:13px;letter-spacing:.05em;text-transform:uppercase}
  .aviso{background:var(--warnbg);border:1px solid #e8d9ae;border-left:4px solid var(--warn);
    border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 16px}
  .aviso .t{font-weight:700;color:var(--warn);margin:0 0 7px;
    font-family:system-ui,sans-serif;font-size:13px;letter-spacing:.05em;text-transform:uppercase}
  .bien{background:var(--okbg);border:1px solid #c9ddcb;border-left:4px solid var(--ok);
    border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 16px}
  .bien .t{font-weight:700;color:var(--ok);margin:0 0 7px;
    font-family:system-ui,sans-serif;font-size:13px;letter-spacing:.05em;text-transform:uppercase}
  .nuevo{background:var(--newbg);border:1px solid #c6cfe0;border-left:4px solid var(--new);
    border-radius:0 9px 9px 0;padding:16px 20px;margin:0 0 16px}
  .nuevo .t{font-weight:700;color:var(--new);margin:0 0 7px;
    font-family:system-ui,sans-serif;font-size:13px;letter-spacing:.05em;text-transform:uppercase}
  table{width:100%;border-collapse:collapse;margin:0 0 18px;font-size:15px}
  th,td{text-align:left;padding:9px 11px;border-bottom:1px solid var(--line);vertical-align:top}
  th{font-family:system-ui,sans-serif;font-size:12px;letter-spacing:.06em;
    text-transform:uppercase;color:var(--muted);font-weight:700}
  td.f{white-space:nowrap;font-variant-numeric:tabular-nums;font-weight:700;width:150px}
  .scroll{overflow-x:auto}
  ul,ol{margin:0 0 13px;padding-left:22px} li{margin:0 0 7px}
  .dato{display:flex;gap:12px;padding:7px 0;border-bottom:1px solid var(--line)}
  .dato b{min-width:210px;font-family:system-ui,sans-serif;font-size:13.5px;color:var(--muted);font-weight:600}
  .lede{font-size:17px;color:var(--muted);border-left:3px solid var(--line);padding-left:16px;margin:0 0 20px}
  code{background:#efece7;padding:1px 5px;border-radius:4px;font-size:14px}
  .tag{display:inline-block;font-family:system-ui,sans-serif;font-size:10.5px;font-weight:700;
    letter-spacing:.07em;text-transform:uppercase;background:var(--new);color:#fff;
    padding:2px 7px;border-radius:4px;vertical-align:2px;margin-left:8px}
  .ok-txt{color:var(--ok)}
  table.hoja{font-size:14.5px}
  table.hoja td.id{white-space:nowrap;font-family:system-ui,sans-serif;font-size:12.5px;
    font-weight:700;color:var(--accent);width:52px}
  table.hoja td.chk{width:30px;text-align:center;color:var(--muted);font-size:17px}
  table.hoja td.acc{width:38%;background:#fcfbf9}
  .bloque{font-family:system-ui,sans-serif;font-size:12.5px;font-weight:700;
    letter-spacing:.06em;text-transform:uppercase;color:#fff;background:var(--accent);
    display:inline-block;padding:4px 11px;border-radius:5px;margin:34px 0 12px}
  .bloque.p1{background:var(--err)}
  .bloque.p2{background:var(--warn)}
  .bloque.p3{background:var(--new)}
  .bloque.p4{background:#5f6b52}
  .bloque.p5{background:var(--muted)}
  .bloque.p6{background:#6b5548}
  .conteo{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 20px;font-family:system-ui,sans-serif}
  .conteo div{flex:1;min-width:118px;background:var(--card);border:1px solid var(--line);
    border-radius:9px;padding:12px 14px}
  .conteo b{display:block;font-size:26px;line-height:1.1;letter-spacing:-.02em}
  .conteo span{font-size:12px;color:var(--muted)}
  .foot{margin-top:60px;padding-top:18px;border-top:1px solid var(--line);
    font-family:system-ui,sans-serif;font-size:13px;color:var(--muted)}
  @media print{
    body{background:#fff;font-size:11.5pt}
    .wrap{padding:0;max-width:100%}
    .q,.card,.alerta,.aviso,.bien,.nuevo{break-inside:avoid}
    h2{break-after:avoid}
  }
  @media (max-width:600px){
    .dato{flex-direction:column;gap:2px}
    .dato b{min-width:0}
    h1{font-size:27px}
    /* La hoja de trabajo se apila en tarjetas: en telefono no se lee una tabla de 4 columnas */
    table.hoja{display:block}
    table.hoja tbody,table.hoja tr,table.hoja td{display:block;width:auto}
    table.hoja tr:first-child{display:none}
    table.hoja tr{background:var(--card);border:1px solid var(--line);
      border-radius:9px;padding:13px 15px;margin:0 0 13px}
    table.hoja td{border:0;padding:5px 0}
    table.hoja td.chk,table.hoja td.id{display:inline-block;width:auto;
      text-align:left;padding:0 8px 6px 0;font-size:13.5px}
    table.hoja td.acc{width:auto;background:transparent;margin-top:9px;
      padding-top:10px;border-top:1px dotted var(--line)}
    table.hoja td.acc::before{content:"Qué hay que hacer";display:block;
      font-family:system-ui,sans-serif;font-size:11px;font-weight:700;
      letter-spacing:.07em;text-transform:uppercase;color:var(--muted);margin-bottom:4px}
  }
</style>
</head>
<body>
<div class="wrap">

<h1>Guion de entrevista de asilo</h1>
<p class="sub">Rafael Emilio Navarro Coa &middot; A213-633-412 &middot; Entrevista con oficial de asilo de USCIS<br>
Versión 5 &mdash; 16 de septiembre de 2026. Encabezada por la <b>hoja de trabajo de 30 discrepancias</b> para el abogado. Incorpora lo hallado en tu correo de Gmail (2020&ndash;2025): la explicación de la VOP, tu abogado actual y los documentos de probatoria recuperados. Revisada contra todo el expediente de esta PC, incluidos los documentos de USCIS y de tribunales que la versión 1 no había leído. <b>Actualización del 16/09/2026:</b> llegó la constancia de tratamiento de PMG, y una revisión exhaustiva del correo confirma que <b>no existe ningún aviso electrónico de la cita de entrevista</b> ni confirmación de tu dirección actual con la oficina de Matos.</p>

<p class="lede">Este documento no te dice qué contestar. Te recuerda <b>qué declaraste ya bajo juramento</b> y <b>qué consta ya en los registros del gobierno</b>, para que tu testimonio hablado coincida con los dos. La consistencia entre ellos es lo que el oficial evalúa. Donde tu expediente no dice nada, está marcado, y ahí respondes con lo que recuerdes de verdad.</p>

<div class="alerta">
  <p class="t">La regla que manda sobre todas las demás</p>
  <p style="margin:0"><b>"No recuerdo" es una respuesta válida y aceptable. Ocultar algo que el gobierno ya sabe, no.</b> Un detalle inventado que después se contradice hace más daño que cien "no recuerdo". Han pasado más de siete años; nadie espera que recuerdes todo con precisión. Lo que sí te van a exigir es que no cambies lo que ya está escrito y firmado, y que no escondas lo que ya está en tu expediente federal.</p>
</div>

<h2>1 &middot; Hoja de trabajo para el abogado: todo lo que se contradice <span class="tag" style="background:var(--err)">Prioridad</span></h2>

<p class="lede">Esta es la sección que hay que resolver antes que ninguna otra, y es la que le entregas a tu abogado. Son <b>30 puntos</b> encontrados al cruzar tu I-589, tu relato, los relatos de Ángel y de tu madre, las cartas a USCIS, el expediente penal de Hillsborough y los avisos de USCIS. Cada uno tiene un código (D-01, D-02&hellip;) para que puedan referirse a él sin confundirse.</p>

<div class="conteo">
  <div><b>30</b><span>puntos a resolver</span></div>
  <div><b>1</b><span>ya resuelto (D-03)</span></div>
  <div><b>13</b><span>contradicciones reales</span></div>
  <div><b>5</b><span>huecos en tu relato</span></div>
  <div><b>7</b><span>errores y riesgos</span></div>
</div>

<div class="alerta">
  <p class="t">Cómo usar esta hoja</p>
  <p><b>No todo se corrige igual.</b> Hay tres destinos posibles para cada punto, y decidir cuál es cada uno es trabajo del abogado, no tuyo:</p>
  <ol>
    <li><b>Corrección formal en la Parte F del I-589</b> al inicio de la entrevista, bajo la casilla <i>"not all true, and corrections were made"</i>.</li>
    <li><b>Declaración jurada complementaria</b> presentada antes de la entrevista, que explique y actualice.</li>
    <li><b>Solo preparación oral</b> &mdash; puntos que no exigen corregir nada pero que el oficial va a tocar y tú tienes que poder contestar sin titubear.</li>
  </ol>
  <p style="margin:0">Lo que <b>no</b> es una opción es dejar cualquiera de estos 30 puntos sin decidir. Que el oficial encuentre solo una de estas contradicciones, después de que juraste que todo era correcto, convierte un problema de papeleo en un problema de credibilidad &mdash; y la credibilidad es lo único que no se puede reparar dentro de la sala.</p>
</div>

<p class="bloque p1">Bloque A &mdash; Crítico: resolver antes de cualquier otra cosa</p>

<div class="scroll">
<table class="hoja">
<tr><th></th><th>ID</th><th>El problema</th><th>Qué hay que hacer</th></tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-01</td>
  <td><b>El I-589 dice que nunca has sido arrestado.</b> Parte C: <b>NO</b> a arrestos, cargos o condenas. Pero tienes dos casos de 2021 con declaración de nolo contendere en 2022.<br>
  <i>Era verdad al firmar el 05/12/2019 &mdash; los hechos son posteriores.</i> <b>USCIS ya lo sabe:</b> te citó el récord del FBI por escrito el 02/02/2024.</td>
  <td class="acc">Decidir con el abogado la forma exacta de declararlo al inicio, antes de que lo saque el oficial. Llevar las copias certificadas del Clerk. Ver sección 2.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-02</td>
  <td><b>Nadie sabe qué dicen los dos reportes policiales.</b> El <i>arrest affidavit</i> de cada caso no está en el expediente. Los hechos de esos dos días son hoy desconocidos para tu abogado, para ti como preparación, y conocidos para USCIS.<br>
  <b>Ya lo intentaste y falló:</b> el 24 de abril de 2024 escribiste al Sheriff preguntando <i>"¿cuál de todos estos documentos es mi acta de arresto? Tengo un proceso con un abogado y me lo está solicitando"</i> &mdash; y <b>ese correo rebotó</b> (MAILER-DAEMON de hcso.tampa.fl.us). Nunca te contestaron. Por eso sigue faltando.</td>
  <td class="acc">Reintentar por otra vía: Clerk de Hillsborough <b>813-276-8100</b> / hillsclerk.com, o el bufete penal <b>Westmoreland Law</b> (asistente Raquel Valencia, <code>raquelv@thewestmorelandlawfirm.com</code>, 1361 Park St, Clearwater). <b>Es el documento que más puede cambiar el pronóstico del caso, en cualquiera de las dos direcciones.</b></td>
</tr>

<tr>
  <td class="chk">&#9745;</td><td class="id">D-03</td>
  <td><b class="ok-txt">RESUELTO &mdash; ya sabemos qué fue la VOP.</b> La orden dice <i>"Terminated Successful by Judge Jeske at VOP hearing held on 6/13/2022"</i>. Tu propio correo a la oficial de probatoria, del <b>1 de mayo de 2022</b>, lo explica:<br>
  <i>"La violación fue: no asistir a mi sesión psicológica en la fecha pautada por mi oficial... No obstante, al enterarme de que me había pasado de la fecha, llamé a esa oficina y pauté una nueva cita... Actualmente veo cada lunes una sesión. Debo completar 5 antes del cierre de este mes."</i><br>
  <b>Fue una cita perdida, no un delito nuevo</b> &mdash; y la corregiste tú mismo antes de la audiencia.</td>
  <td class="acc">Ya tienes la respuesta de una frase: <i>"Se me pasó la fecha de una cita de consejería ordenada por la corte; la reprogramé por mi cuenta, completé las sesiones, y el juez cerró el caso como exitoso."</i> Llevar impreso ese correo y la Orden de Terminación. <b>Sigue conviniendo pedir el docket</b> para confirmar que no hay nada más.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-04</td>
  <td><b>El I-589 niega el tránsito por República Dominicana.</b> Parte C 2.A: <b>NO</b> a haber viajado o residido en otro país. Pero fueron <b>6 días en Santo Domingo</b>. Lo declaran Ángel en su carta de junio 2019 <i>y</i> tu madre en su carta a USCIS.<br>
  <b>Los dos documentos que lo contradicen ya están en manos del gobierno.</b></td>
  <td class="acc">Corrección formal. El oficial siempre reconstruye la ruta de viaje, así que esta sale sí o sí. Preparar además la respuesta sobre <i>firm resettlement</i>: tránsito corto, sin estatus, sin pedir protección allí.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-05</td>
  <td><b>La denuncia del CICPC no se ha podido leer.</b> <code>Denuncia CICPC 11 DE JUNIO 2018.pdf</code> lleva meses bloqueada en OneDrive. Puede ser tu mejor prueba documental contemporánea&hellip; o puede decir que denunciaste un <b>robo de vehículo</b> y no un hecho político, lo cual sería usado en tu contra.</td>
  <td class="acc">Bajarla de <code>onedrive.live.com</code> desde el teléfono. <b>Leerla antes de decidir si se presenta.</b> Preparar la respuesta a: ¿por qué acudiste a las autoridades si dices que temías a las autoridades?</td>
</tr>
</table>
</div>

<p class="bloque p2">Bloque B &mdash; Contradicciones directas entre tu I-589 y tu propio expediente</p>

<div class="scroll">
<table class="hoja">
<tr><th></th><th>ID</th><th>El problema</th><th>Qué hay que hacer</th></tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-06</td>
  <td><b>Parte C, 1 &mdash; ¿algún familiar ha solicitado asilo?</b> Dice <b>NO</b>. Tienen solicitudes: tu hermano <b>Ángel</b>, tu madre <b>Zoraida</b>, tu hermana <b>Emily</b> y tu padre <b>José Emilio</b> (TPS, A201-393-743).</td>
  <td class="acc">Corrección formal. Es de las más fáciles de detectar para el oficial, porque los expedientes están enlazados por apellido y dirección.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-07</td>
  <td><b>Parte B, 2 &mdash; ¿usted o algún familiar detenido o interrogado?</b> Dice <b>NO</b>. Tu hermana <b>Emily fue detenida e interrogada el 21/04/2016</b> en el allanamiento de la casa. Lo declaran Zoraida y Ángel bajo juramento.</td>
  <td class="acc">Corrección formal. Además decidir si el allanamiento se incorpora al relato (ver D-14).</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-08</td>
  <td><b>Parte B, 3.B &mdash; ¿continúa participando en actividades políticas?</b> Marcaste <b>SÍ</b>, remitiendo a los adjuntos. Pero tu relato dice que tu <b>última actividad política fue el 23/02/2019</b> en Maturín, y no hay ninguna actividad documentada en EE.UU.</td>
  <td class="acc">Aclarar qué se entendió por esa pregunta. Si se refería a que <i>la familia</i> seguía en riesgo, decirlo así. Si es un error de la preparadora, corregirlo.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-09</td>
  <td><b>El TPS negado no consta en tu expediente de asilo.</b> Presentaste el I-821 el 04/08/2021 y te lo negaron el 14/02/2024. Tu I-589 de 2019 no menciona ninguna otra solicitud, y nunca se actualizó.</td>
  <td class="acc">Declararlo. Está en el mismo sistema de USCIS. Decidir también si se apela o se reabre el I-821 (el plazo de 33 días con I-290B ya pasó, pero conviene que el abogado lo confirme).</td>
</tr>
</table>
</div>

<p class="bloque p3">Bloque C &mdash; Contradicciones entre los testimonios de la familia</p>

<div class="scroll">
<table class="hoja">
<tr><th></th><th>ID</th><th>El problema</th><th>Qué hay que hacer</th></tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-10</td>
  <td><b>La fecha del ataque: 8 o 9 de junio de 2018.</b><br>
  Tu relato: <i>"El 09 de junio del 2018"</i>. Carta de tu madre a USCIS: <i>"Es día 9 de Junio del 2018"</i>. Ángel: <i>"para el viernes 8 de Junio"</i>. Zoraida usa las dos fechas en documentos distintos.<br>
  <b>El 8 fue viernes; el 9 fue sábado.</b></td>
  <td class="acc"><b>Averiguar cuál fue el día de verdad</b>, no escoger una versión: sellos del pasaporte, boleto, la denuncia del CICPC. La explicación natural es que salieron la noche del viernes 8 y el hecho ocurrió de madrugada. <b>A tu favor: dos de tres documentos dicen 9.</b><br>
  <b>Si de verdad recuerdan distinto, eso se dice tal cual</b> &mdash; <i>"mi hermano lo recuerda del 8, yo del 9, han pasado siete años"</i>. Eso es creíble. Dos versiones idénticas y ensayadas es lo que suena falso.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-11</td>
  <td><b>¿De dónde salían esa noche?</b><br>
  Tu relato: <i>"saliendo de una <b>reunión política y de amistad</b> en la Urb La Floresta con un grupo de amigos <b>de nuestra organización</b>"</i>.<br>
  Ángel: una <b>parrillada</b>.<br>
  <b>Esta es la más peligrosa de las contradicciones menores</b>, porque es el puente entre el ataque y el móvil político. "Parrillada" a secas convierte el hecho en un robo a la salida de una fiesta.</td>
  <td class="acc">Cerrar la versión con Ángel. La formulación correcta y verdadera es la tuya: reunión de militantes de la organización, donde también hubo comida y amistad. <b>No son versiones incompatibles, pero hay que decirlas igual.</b></td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-12</td>
  <td><b>El apellido de una testigo.</b> Tú escribiste <b>Keren Navarro</b>; Ángel escribió <b>Keren Ramos</b>. Es la misma persona presente en el ataque.</td>
  <td class="acc">Averiguar el apellido real. Si no se puede, que ambos digan "Keren" y que no recuerdan el apellido con certeza.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-13</td>
  <td><b>La fecha de salida de Venezuela.</b> Tu formulario dice <b>28/03/2019</b>; Ángel escribió <b>29/03/2019</b>. Viajaron juntos.</td>
  <td class="acc">Verificar contra los sellos del pasaporte (114266251) y el boleto. El dato duro manda sobre la memoria de los dos.</td>
</tr>
</table>
</div>

<p class="bloque p4">Bloque D &mdash; Huecos: hechos que están en los relatos de tu familia pero no en el tuyo</p>

<p>Esto no son contradicciones, pero funcionan igual de mal: el oficial tiene los cuatro expedientes y va a preguntar por qué el hecho que tu madre y tu hermano consideran importante no aparece en tu propia declaración jurada.</p>

<div class="scroll">
<table class="hoja">
<tr><th></th><th>ID</th><th>Falta en tu relato</th><th>Qué hay que hacer</th></tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-14</td>
  <td><b>El allanamiento del 21/04/2016 y la detención de Emily.</b> 6 a.m., funcionarios sin identificación, sin orden judicial, alegando "material subversivo"; Emily detenida hasta la noche; la orden entregada después y de forma irregular. Está en Zoraida y en Ángel. <b>No está en tu relato ni en tu formulario.</b></td>
  <td class="acc">Decidir: se incorpora por declaración complementaria, o se explica por qué no estaba (tenías 19 años, no estabas presente, la preparadora no lo preguntó&hellip;). Conecta directamente con D-07.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-15</td>
  <td><b>Los mensajes de texto amenazantes del 18/05/2018.</b> Sabían la universidad de ambos, dónde vivían, el vehículo con detalles, y los sitios recién frecuentados (La Floresta, El Parque, Las Flores). Exigían dejar el activismo "o las consecuencias serían mortales". Está en el relato de Ángel. <b>Tu relato no los menciona.</b></td>
  <td class="acc">Importante, porque son la base de que la frase <i>"se los dijimos y no pararon"</i> tenga sentido. Aclarar qué supiste de primera mano y qué supiste por Ángel. <b>No presentes como tuyo lo que te contó tu hermano.</b></td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-16</td>
  <td><b>La llamada con amenaza de muerte del 25/01/2019.</b> Les ordenaban irse de la ciudad o los asesinarían, recordándoles que "meses antes les perdonaron la vida". Está en Ángel y en Zoraida. <b>No está en tu relato.</b></td>
  <td class="acc">Es uno de los hechos más fuertes del caso y es el puente entre la Catedral y la huida. Decidir si se incorpora.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-17</td>
  <td><b>Los tres intentos de reubicación interna, con nombres y direcciones.</b> Casa de la abuela <b>Eligia Zoraida Hernández</b> (Los Guaritos, Maturín); casa del abuelo <b>Argenis Coa</b> (Villa Olímpica, Barcelona, ~8 semanas); casa de una prima en El Rosal, Caracas. Tu relato solo dice <i>"días de manera clandestina en casas familiares"</i>.</td>
  <td class="acc"><b>Te van a preguntar por qué no te mudaste a otra parte de Venezuela.</b> La respuesta ya está en los hechos &mdash; lo intentaron tres veces y no funcionó &mdash; pero tienes que saber los nombres y los lugares.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-18</td>
  <td><b>Tu relato no menciona la denuncia ante el CICPC.</b> Describes el ataque del 8/9 de junio con detalle, pero no dices que lo denunciaste tres días después.</td>
  <td class="acc">Una vez leída (D-05), decidir si se incorpora. Si se presenta la denuncia sin explicar por qué no estaba en el relato, el oficial lo va a notar.</td>
</tr>
</table>
</div>

<p class="bloque p5">Bloque E &mdash; Errores materiales y datos frágiles</p>

<div class="scroll">
<table class="hoja">
<tr><th></th><th>ID</th><th>El problema</th><th>Qué hay que hacer</th></tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-19</td>
  <td><b>"Orlando desde 01/2000".</b> Parte A.III, tabla 2. Llegaste el 02/04/2019 y en enero de 2000 tenías 3 años y vivías en Maturín.</td>
  <td class="acc">Error de tipeo evidente de la preparadora. Corrección formal, sin drama.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-20</td>
  <td><b>Cuándo entraste a IUTIRLA.</b> Tu relato dice <b>2016</b>; tu formulario dice <b>09/2017</b>. Te graduaste el 18/02/2019.<br>
  <i>Dato útil: un TSU toma unos tres años. 2016&rarr;2019 cuadra; 09/2017&rarr;02/2019 son solo 17 meses.</i></td>
  <td class="acc">Verificar contra el título o las notas y fijar una sola fecha. Todo apunta a que la correcta es 2016 y el error está en el formulario.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-21</td>
  <td><b>El hueco 2012&ndash;2017 y el empleo "NONE".</b> El formulario dice bachillerato terminado en 07/2012 e IUTIRLA desde 09/2017, con empleo "NONE" en los últimos 5 años. Quedan cinco años sin explicar.</td>
  <td class="acc">Preparar qué hiciste en ese período. Si D-20 se resuelve en 2016, el hueco se reduce. Bachillerato: Escuela Hogar Católica "Virgen Misionera de la Esperanza", Ciencias y Tecnología.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-22</td>
  <td><b>Tus direcciones en EE.UU. están desactualizadas.</b> El formulario solo tiene Orlando. Después: Tampa (Bruce B Downs), Tampa (Tessara Ln) y Rockford, Illinois. <b>Firmaste dos AR-11 en junio de 2020</b> declarando la mudanza.</td>
  <td class="acc">Actualizar. La tabla completa está en la sección 3. La dirección de Tampa es además la que aparece en todo tu expediente penal.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-23</td>
  <td><b>La ubicación de tus padres está desactualizada.</b> Parte A.III, tabla 5: ambos en <b>Maturín</b>. Los dos están en Estados Unidos; tu padre huyó el 19/04/2021 y hoy vive contigo en Rockford.</td>
  <td class="acc">Actualizar. Es además un hecho que <b>te favorece</b>: la huida de tu padre en 2021 prueba que la persecución contra la familia continuó después de tu salida.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-24</td>
  <td><b>La cifra de la Catedral se contradice consigo misma.</b> En el mismo párrafo tu relato dice <i>"casi 942 personas"</i> y luego <i>"más de novecientas personas entramos a la iglesia"</i>. 942 es un número llamativamente preciso para una estimación.</td>
  <td class="acc">Si preguntan cómo lo sabes, di de dónde tomaste la cifra (prensa, la iglesia, la organización). <b>No la defiendas como si la hubieras contado.</b> La palabra "casi" te ayuda.</td>
</tr>
</table>
</div>

<p class="bloque p6">Bloque F &mdash; Riesgos en documentos de terceros y puntos a verificar</p>

<div class="scroll">
<table class="hoja">
<tr><th></th><th>ID</th><th>El problema</th><th>Qué hay que hacer</th></tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-25</td>
  <td><b>"Bajar un poco la guardia".</b> Carta de tu madre a USCIS: <i>"En Diciembre del 2018 aconsejamos a nuestros hijos que traten de bajar un poco la guardia como activistas políticos y se mentalicen en culminar sus estudios"</i>.<br>
  Leído con mala intención: se calmaron y no pasaba nada.</td>
  <td class="acc">No negarlo, explicarlo: bajaron el perfil <b>por el peligro</b>, y aun así el 23 y el 25 de enero de 2019 los alcanzaron otra vez. <b>Bajar el perfil no los protegió</b> &mdash; eso refuerza el caso, no lo debilita.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-26</td>
  <td><b>"Apartarse temporalmente" y "una vez culminados sus estudios".</b> Misma carta: <i>"En abril del 2019 una vez culminados sus estudios, ellos deciden salir del país con la intención de apartarse temporalmente de estos conflictos"</i>.<br>
  Leído con mala intención: esperaron a graduarse y se fueron de viaje temporal. Choca con la idea de huida.</td>
  <td class="acc">Preparar la respuesta: no se fueron cuando quisieron, se fueron cuando pudieron &mdash; hacía falta pasaporte, dinero y ruta, y los vuelos directos estaban suspendidos. Lo de "temporal" era el deseo de tu madre, no tu plan.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-27</td>
  <td><b>Tu madre dice "abril de 2019"; ustedes salieron el 28 o 29 de marzo.</b> Misma carta. Llegaron a Orlando el 2 de abril, así que ella probablemente está pensando en la llegada.</td>
  <td class="acc">Menor, pero tenerlo claro: salida marzo, llegada abril. Si se presenta una declaración complementaria de tu madre, corregirlo ahí.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-28</td>
  <td><b>El historial laboral de tu madre existe en tres versiones que no cuadran.</b> Su relato dice jubilada en <b>2008</b>; su I-589 dice directora del Liceo Leonardo Ruiz Pineda <b>2000&ndash;2011</b>; su carta de empleo de Monagas dice TEACHER IV desde <b>01/01/1983 "hasta la fecha"</b>.</td>
  <td class="acc">No es tu formulario, pero <b>si tu madre declara como testigo en tu caso, su credibilidad se vuelve la tuya.</b> Que su abogado lo resuelva antes.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-29</td>
  <td><b>La constancia dice Voluntad Popular; tu relato dice MUD.</b> La constancia del 08/11/2019 te acredita como activista de <b>Voluntad Popular</b> (código 111124225). Tu relato habla de la <b>MUD</b>.</td>
  <td class="acc">No es contradicción &mdash; VP era partido integrante de la coalición MUD, y tu propio relato la nombra primera en la lista. Pero <b>debes poder decirlo en una frase, sin dudar</b>. Practícalo.</td>
</tr>

<tr>
  <td class="chk">&#9744;</td><td class="id">D-30</td>
  <td><b>Verificar la cronología del escondite en casa de la abuela.</b> La línea de tiempo sitúa el escondite en Los Guaritos entre <b>abril y junio de 2018</b>, pero el ataque fue el 8/9 de junio y las amenazas por mensaje el 18 de mayo. <b>¿Se escondieron antes del ataque o después?</b></td>
  <td class="acc">Revisar el relato original de Ángel y fijar las fechas. Una secuencia causa&ndash;efecto invertida es exactamente lo que un oficial usa para decir que la historia se construyó después.</td>
</tr>
</table>
</div>

<div class="bien">
  <p class="t">Lo que no está en discusión &mdash; tu caso también tiene piso firme</p>
  <p style="margin:0">Para que esta lista no te desanime: <b>ninguno de estos 30 puntos toca el núcleo de tu caso</b>. Los cuatro testimonios de la familia <b>coinciden</b> en el ataque de junio de 2018, el SpaceFox negro placa AH250EA, el despojo, el disparo, la frase <i>"se los dijimos y no pararon"</i>, las llamadas de amenaza a tu madre, el carro desvalijado, el encierro de cinco horas en la Catedral con el obispo Pérez Lavado, y que ninguno de los hermanos pudo ir a su graduación. Tienes además una <b>constancia oficial de partido con código de inscripción</b> y una persecución contra tu familia documentada hasta 2021. Lo que hay que arreglar son las costuras, no la tela.</p>
</div>

<div class="nuevo">
  <p class="t">Nota: qué cambió respecto a la versión 1 de este guion</p>
  <p style="margin:0">La versión anterior se escribió solo con tu I-589, tu relato y los de tu familia. Después se leyeron los documentos de USCIS y del Tribunal del Condado de Hillsborough que estaban en tu expediente sin revisar, y aparecieron cuatro cosas nuevas: <b>las dos condenas de Florida y la negación del TPS</b> (sección 2), la contradicción <b>"reunión política" vs "parrillada"</b> (D-11), tu <b>historial de direcciones</b> documentado en los AR-11 (D-22), y las <b>dos frases de la carta de tu madre</b> (D-25, D-26). La versión 3 agregó la hoja de trabajo que acabas de leer; la versión 4 incorpora el correo electrónico.</p>
</div>

<h2>2 &middot; Tus antecedentes penales en EE.UU.</h2>

<div class="alerta">
  <p class="t">Esto no es opcional. Tienes que hablarlo con un abogado antes de la entrevista.</p>
  <p>USCIS <b>ya tiene</b> tu récord del FBI. Te lo citó por escrito en la Solicitud de Pruebas del 2 de febrero de 2024 y lo usó para negarte el TPS doce días después. El oficial de asilo va a tener ese mismo expediente delante. <b>No hay ninguna posibilidad de que no salga el tema, y no hay ninguna versión de esta entrevista en la que te convenga no mencionarlo.</b></p>
  <p style="margin:0">Lo que sigue son los hechos exactos según los documentos certificados que ya tienes. <b>Qué significan legalmente para tu asilo es una pregunta para tu abogado, no para mí</b>, y merece una consulta específica con alguien que haga inmigración penal (<i>crim-imm</i>), no solo inmigración general.</p>
</div>

<h3>Los hechos exactos, según los papeles certificados del tribunal</h3>

<div class="scroll">
<table>
<tr><th>Dato</th><th>Caso 21-CM-005305-A</th><th>Caso 21-CM-005337-A</th></tr>
<tr><td><b>Tribunal</b></td><td colspan="2">County Court, Decimotercer Circuito Judicial, Condado de Hillsborough, Florida &mdash; División D. Juez: <b>Paul T. Jeske</b>.</td></tr>
<tr><td><b>Fecha del hecho</b></td><td>24 de abril de 2021</td><td>15 de mayo de 2021</td></tr>
<tr><td><b>Cargo</b></td><td colspan="2">Estatuto de Florida <b>800.03(1) y (2)(a)</b> &mdash; <i>Exposure of Sexual Organs</i> (exposición de órganos sexuales). Clasificación <b>M1</b>: delito menor de primer grado.</td></tr>
<tr><td><b>Tu declaración</b></td><td colspan="2"><b>Nolo contendere</b> (no contest), el <b>5 de enero de 2022</b>. No te declaraste culpable, pero tampoco peleaste el cargo.</td></tr>
<tr><td><b>Resolución</b></td><td colspan="2"><b>ADJUDICATION WITHHELD</b> (adjudicación suspendida) en ambos casos.</td></tr>
<tr><td><b>Sentencia</b></td><td>6 meses de probatoria del condado + 16 horas de servicio comunitario</td><td>6 meses de probatoria + 16 horas de servicio comunitario + <b>"completar evaluación psicológica sexual y cualquier tratamiento recomendado"</b></td></tr>
<tr><td><b>Corrían</b></td><td colspan="2">Concurrentes. Costas: $310 por caso, pagadas. Servicio comunitario cumplido en Solid Waste &mdash; Hillsborough Heights (Seffner), abril de 2022.</td></tr>
<tr><td><b>Cierre</b></td><td colspan="2"><b>Probatoria terminada con éxito el 13 de junio de 2022</b>, por el Juez Jeske, en audiencia de VOP. Orden de terminación firmada el 17/06/2022: dice que cumpliste las condiciones <i>"in a law-abiding manner"</i>.</td></tr>
<tr><td><b>Tu abogado penal</b></td><td colspan="2">Christopher Haskins Westmoreland &mdash; The Westmoreland Law Firm, 1361 Park St, Clearwater, FL 33756.</td></tr>
</table>
</div>

<h3>Por qué USCIS te negó el TPS y por qué eso no es lo mismo que el asilo</h3>

<div class="card">
  <p>La decisión del <b>14 de febrero de 2024</b> (oficial AT0332, John E. Roessler) dice, en esencia:</p>
  <ul>
    <li>Bajo la ley de Florida, "adjudicación suspendida" no es una condena. <b>Bajo la ley de inmigración sí lo es</b>, porque la <b>INA 101(a)(48)(A)</b> define condena como una declaración de culpabilidad <i>o de nolo contendere</i> seguida de alguna forma de castigo o restricción &mdash; y la probatoria cuenta como castigo.</li>
    <li>El TPS tiene una regla propia y automática: <b>INA 244(c)(2)(B)(i)</b> descalifica a quien tenga <b>dos o más delitos menores</b> cometidos en EE.UU. Tú tienes exactamente dos. La decisión dice textualmente que <b>no existe perdón (waiver) disponible</b>.</li>
    <li>Por eso el TPS fue negado, y con él quedó negado el permiso de trabajo basado en TPS.</li>
  </ul>
  <p style="margin:0"><b>La regla de "dos delitos menores" es exclusiva del TPS. El asilo no tiene esa regla.</b> Los impedimentos del asilo (INA 208(b)(2)) son otros &mdash; el más relevante sería el de "delito particularmente grave", que es una categoría distinta y más estrecha. <b>Que te hayan negado el TPS no significa automáticamente que te tengan que negar el asilo.</b> Pero tampoco es un tema menor, por dos razones que sí aplican: el asilo es <b>discrecional</b> (aunque califiques, el oficial puede negarlo sopesando lo bueno y lo malo de tu historial), y la naturaleza sexual del cargo es un factor negativo de peso. <b>Cómo se argumenta esto es exactamente lo que tienes que pagarle a un abogado.</b></p>
</div>

<div class="aviso">
  <p class="t">Tres cosas que tienes que averiguar antes de la entrevista</p>
  <ol style="margin:0">
    <li><b>La evaluación psicosexual ya apareció &mdash; y NO es lo que esperábamos.</b> Estaba en tu correo desde el 22/01/2024, sin abrir ni reenviar. <b>No es un certificado de cumplimiento: es un informe forense completo, y su contenido te perjudica.</b> Ver la alerta roja inmediatamente debajo. <b class="ok-txt">La constancia de tratamiento, en cambio, ya la conseguiste</b> &mdash; ver la tarjeta verde más abajo.</li>
    <li><b>La audiencia de VOP ya está explicada</b> &mdash; fue una cita de consejería perdida que tú mismo reprogramaste. Ver D-03. Aun así conviene pedir el docket completo para confirmar que no hay nada más.</li>
    <li><b>Los hechos.</b> En este expediente no está el <i>arrest affidavit</i> (el relato policial de qué pasó cada día). Si el oficial te pregunta qué ocurrió el 24 de abril y el 15 de mayo de 2021, tienes que poder contestar con tus propias palabras y de forma consistente con lo que dice ese documento. <b>Lo pediste en abril de 2024 y el correo rebotó</b> &mdash; hay que reintentarlo por otra vía. Ver D-02.</li>
  </ol>
</div>

<div class="alerta">
  <p class="t">La evaluación psicosexual: apareció, y hay que tratarla con cuidado <span class="tag" style="background:var(--err)">12/09/2026</span></p>
  <p>Se recuperó del correo el <b>Psychosexual Assessment</b> de <b>John Alepin, MA, LMHC</b> (Psychological Management Group). Evaluación del <b>20/04/2022</b>, informe firmado el <b>26/04/2022</b>. Llegó a tu correo el 22/01/2024 y <b>nunca se reenvió a nadie</b>.</p>
  <p><b>No es un certificado de cumplimiento. Es un informe forense, y contiene cuatro elementos adversos:</b></p>
  <ul>
    <li>Escala actuarial <b>Static-99R con puntaje total 5</b>. Según la propia tabla del informe, 4&ndash;5 es la banda <b>"moderadamente alta"</b>.</li>
    <li>Textual: <i>"The results from an actuarial assessment also suggested a relatively high likelihood of additional sexual misconduct."</i></li>
    <li>Textual: <i>"The subject also evidenced limited awareness of factors likely to influence his risk of additional sexual misconduct."</i></li>
    <li>Tu descripción del hecho en tus propias palabras, y que la persona afectada era una desconocida cerca de un campus universitario.</li>
  </ul>
  <p><b>Además contiene un error de hecho que hay que señalar:</b> el informe dice dos veces que te declaraste <i>culpable</i> (<i>"plead guilty, was convicted"</i>). Eso es <b>falso</b> según el expediente certificado: fue <b>nolo contendere</b> con <b>adjudicación suspendida</b>. Las sentencias certificadas lo contradicen.</p>
  <p style="margin:0"><b>Qué hacer:</b> este documento va <b>solo a tu abogado</b>, completo y en privado &mdash; él tiene privilegio, USCIS no. <b>No lo entregues a USCIS:</b> nunca te lo pidieron. La solicitud del 02/02/2024 pedía <i>"judgment and conviction documents"</i> de la <b>corte</b>, no expedientes clínicos.</p>
</div>

<div class="bien">
  <p class="t">La constancia de tratamiento ya llegó <span class="tag" style="background:var(--ok)">14/09/2026</span></p>
  <p style="margin:0">Le escribiste a <b>Psychological Management Group</b> el 12/09/2026 pidiendo <i>solo</i> la carta de finalización, sin el informe. Contestaron el 14/09/2026 con el adjunto <code>06-06-22 DISCHARGE REPORT.pdf</code>: confirma que fuiste enrolado en el <i>Sexual Misconduct Group</i>, primera sesión el 25/04/2022, y cierre el 06/06/2022. Coincide con la fecha en que tu oficial de probatoria cerró tu caso como cumplido. Ya está guardado en tu expediente. <b>Antes de entregársela a USCIS, decide con tu abogado si conviene</b> &mdash; a diferencia de la evaluación, esta sí es un documento favorable, pero sigue siendo prueba de que hubo una orden judicial de tratamiento.</p>
</div>

<div class="bien">
  <p class="t">Lo que sí juega a tu favor en este punto, y debes tenerlo a la mano</p>
  <ul style="margin:0">
    <li>Ambas resoluciones son <b>adjudicación suspendida</b>, no condenas bajo la ley de Florida.</li>
    <li><b>Cero días de cárcel.</b> La sentencia fue probatoria y servicio comunitario.</li>
    <li><b>Cumpliste todo.</b> Tienes la <i>Order of Termination of Probation</i> firmada por el juez diciendo que te comportaste de manera respetuosa de la ley, las hojas de servicio comunitario firmadas, los recibos de todas las costas pagadas con saldo en $0.00, y ahora también la carta de PMG confirmando que completaste el tratamiento.</li>
    <li>Los dos hechos son de <b>2021</b>. Al momento de tu entrevista han pasado más de cinco años sin ningún incidente posterior.</li>
    <li>Tienes <b>copias certificadas por el Clerk</b> de las sentencias (Clerk's Certificate del 18/01/2022). Eso es exactamente lo que USCIS exige y ya lo tienes: son las 45 páginas de <code>Caso Rafael Navarro Pag. 1&ndash;45</code>.</li>
  </ul>
</div>

<h2>3 &middot; Datos duros que debes tener en la punta de la lengua</h2>

<div class="card">
  <div class="dato"><b>Nombre completo</b><span>Rafael Emilio Navarro Coa</span></div>
  <div class="dato"><b>A-Number</b><span>A213-633-412</span></div>
  <div class="dato"><b>Fecha de nacimiento</b><span>30 de abril de 1996</span></div>
  <div class="dato"><b>Lugar de nacimiento</b><span>Maturín, Estado Monagas, Venezuela</span></div>
  <div class="dato"><b>Pasaporte venezolano</b><span>114266251 (venció 11/01/2020)</span></div>
  <div class="dato"><b>Cédula</b><span>V-25.503.374</span></div>
  <div class="dato"><b>Última dirección en Venezuela</b><span>Calle Catatumbo, Casa Nro. 54, Conjunto Residencial Río Claro, Urb. Palma Real, Sector Tipuro, Parroquia Boquerón, Maturín, Monagas</span></div>
  <div class="dato"><b>Salida de Venezuela</b><span>28/03/2019 según tu formulario (Ángel escribió 29/03/2019 &mdash; ver alerta)</span></div>
  <div class="dato"><b>Entrada a EE.UU.</b><span>02/04/2019, Orlando, Florida, visa B2, vencía 01/10/2019</span></div>
  <div class="dato"><b>Número de I-94</b><span>81241757856</span></div>
  <div class="dato"><b>I-589 firmado</b><span>05/12/2019 (dentro del año &mdash; no tienes problema de plazo)</span></div>
  <div class="dato"><b>Quién llenó el I-589</b><span>Rita Sánchez, Doral FL, tel (305) 801-7327. No es abogada; no presentó G-28.</span></div>
  <div class="dato"><b>Base legal que marcaste</b><span>Opinión política &middot; Grupo social determinado &middot; Convención contra la Tortura</span></div>
  <div class="dato"><b>Organización política</b><span>Mesa de la Unidad Democrática (MUD), desde 2016. Constancia de Voluntad Popular, código 111124225.</span></div>
  <div class="dato"><b>Educación</b><span>Bachiller en Ciencias y Tecnología, Escuela Hogar Católica "Virgen Misionera de la Esperanza". TSU en Diseño Gráfico, IUTIRLA (tesis 18/02/2019).</span></div>
  <div class="dato"><b>Teléfono y correo</b><span>407-509-0902 &middot; rafaelnavarro3004@gmail.com (el que consta en USCIS)</span></div>
</div>

<p><b>Tus abogados y contactos oficiales</b> &mdash; confirmados en tu correo. Tenlos a mano el día de la entrevista:</p>

<div class="card">
  <div class="dato"><b>Abogada de inmigración (nueva)</b><span><b>Patricia</b> &mdash; reemplaza a Matos, confirmado el 16/09/2026. <b>Faltan sus datos completos de contacto y confirmar que radicó su G-28.</b> Actualizar esta tarjeta en cuanto los tengas.</span></div>
  <div class="dato"><b>Abogado de inmigración (saliente)</b><span><b>Lcdo. Ángel R. Matos-González</b> &mdash; Law Office of Angel Matos<br>5758 S Semoran Blvd, Edificio E, Oficina 5758-B, Orlando, FL 32822 · P.O. Box 720986, Orlando FL 32872<br>Tel <b>407-403-5514</b> / 321-337-6506 · <code>abogadomatos@gmail.com</code> · asistentes <code>agendamatos@gmail.com</code> (Carlyn Prince)<br>Le firmaste la página del abogado el 26/04/2024. Es el G-28 que consta hoy ante USCIS &mdash; falta avisarle formalmente del cambio.</span></div>
  <div class="dato"><b>Abogado anterior (asilo, previo a Matos)</b><span>Dietrich &amp; Roman &mdash; su carpeta sigue en OneDrive sin descargar.</span></div>
  <div class="dato"><b>Abogado penal (2021&ndash;2022)</b><span>Christopher Haskins Westmoreland &mdash; The Westmoreland Law Firm, 1361 Park St, Clearwater FL 33756<br>Asistente legal: Raquel Valencia · <code>raquelv@thewestmorelandlawfirm.com</code></span></div>
  <div class="dato"><b>Oficial de probatoria</b><span>Jessie Garcia-Griffith &mdash; HCSO Misdemeanor Probation, Plant City Courthouse, 301 N. Michigan Ave<br>Tel <b>813-242-5589</b> · <code>jgarciagriffith@teamhcso.com</code></span></div>
  <div class="dato"><b>Evaluación psicosexual</b><span>Psychological Management Group &mdash; 7402 N. 56th St, Bldg 100 Ste 102, Temple Terrace FL<br>Tel <b>813-963-1016</b> · cita original 07/03/2022, $250</span></div>
  <div class="dato"><b>Clerk de la corte</b><span>Hillsborough County Clerk &mdash; <b>813-276-8100</b> · hillsclerk.com · pagos 813-276-2029 ext. 7815</span></div>
</div>

<p><b>Tus direcciones en EE.UU.</b> &mdash; el oficial reconstruye esto y tú firmaste formularios AR-11 declarándolas. Ten la secuencia clara:</p>

<div class="scroll">
<table>
<tr><th>Desde</th><th>Dirección</th><th>Cómo consta</th></tr>
<tr><td class="f">abril 2019</td><td>3712 Castle Pines Ln, Orlando, FL 32839</td><td>Dirección declarada como anterior en tus AR-11</td></tr>
<tr><td class="f">junio 2020</td><td>15501 Bruce B Downs Blvd, Apt 2204, Tampa, FL 33647</td><td>Dos AR-11 firmados, 02/06/2020 y 06/06/2020. Es la dirección que aparece en todo tu expediente penal.</td></tr>
<tr><td class="f">~2023&ndash;2024</td><td>8660 Tessara Ln, Tampa, FL 33647-3078</td><td>Solicitud de Pruebas de USCIS del 02/02/2024</td></tr>
<tr><td class="f">2024&ndash;hoy</td><td>1068 McKnight Cir, Rockford, IL 61107-6404</td><td>Decisión de TPS del 14/02/2024. Es también la dirección de tu padre.</td></tr>
</table>
</div>

<div class="aviso">
  <p class="t">Verifica esto en tu notificación de cita</p>
  <p style="margin:0"><b>El intérprete.</b> En las entrevistas afirmativas de asilo, históricamente <b>el solicitante debe llevar su propio intérprete</b> (mayor de 18 años, fluido en inglés y español, que no sea testigo del caso ni tu representante legal). Hubo un período en que USCIS los proveía por teléfono, pero esa regla cambió. Tu formulario dice que no hablas inglés con fluidez, así que esto <b>no es opcional para ti</b>. Confirma en la notificación qué exige y consíguelo con tiempo: presentarte sin intérprete puede costarte la cita.</p>
</div>

<h2>4 &middot; Correcciones y actualizaciones que debes plantear al inicio</h2>

<p>Al empezar, después del juramento, el oficial te va a preguntar si tu solicitud es verdadera y correcta, y va a llenar la <b>Parte F</b> del I-589 contigo. Ahí hay dos casillas: <i>"all true"</i> y <i>"not all true, and corrections numbered ___ to ___ were made by me or at my request"</i>. Esa segunda casilla existe precisamente para esto.</p>

<div class="alerta">
  <p class="t">Consulta la forma exacta con tu abogado antes de la entrevista</p>
  <p>Hay tres tipos de cosas que arreglar, y conviene no mezclarlas: <b>(A)</b> respuestas que ya eran incorrectas cuando firmaste en 2019, <b>(B)</b> hechos nuevos ocurridos después de 2019 &mdash; que no son errores tuyos, sino actualizaciones obligatorias, y <b>(C)</b> errores materiales de tipeo de la preparadora.</p>
  <p style="margin:0">Corregir voluntariamente al inicio es lo normal y lo correcto. Que el oficial lo descubra por su cuenta, después de que dijiste "todo es correcto", es lo que convierte un error de llenado en un problema de credibilidad. <b>Cómo se presenta formalmente cada corrección es una decisión legal, no mía.</b></p>
</div>

<h3>A &mdash; Respuestas que contradicen tu propio expediente</h3>

<div class="scroll">
<table>
<tr><th>Pregunta del I-589</th><th>Lo que dice</th><th>Lo que muestra tu expediente</th></tr>
<tr>
  <td><b>Parte C, 2.A</b><br>¿Viajó o residió en otro país antes de entrar a EE.UU.?</td>
  <td>NO</td>
  <td>Pasaste <b>6 días en Santo Domingo, República Dominicana</b>. Lo declara Ángel en su carta de junio 2019 y lo confirma Zoraida en su carta a USCIS. Esta es la más delicada: el oficial siempre reconstruye la ruta de viaje.</td>
</tr>
<tr>
  <td><b>Parte C, 1</b><br>¿Usted, sus padres o hermanos han solicitado asilo?</td>
  <td>NO</td>
  <td>Tu hermano <b>Ángel</b>, tu madre <b>Zoraida</b> y tu hermana <b>Emily</b> tienen solicitudes. Hoy la respuesta es inequívocamente sí.</td>
</tr>
<tr>
  <td><b>Parte B, 2</b><br>¿Usted o algún familiar ha sido detenido o interrogado?</td>
  <td>NO</td>
  <td>Tu hermana <b>Emily fue detenida e interrogada el 21/04/2016</b> en el allanamiento. Lo declaran Zoraida y Ángel bajo juramento.</td>
</tr>
</table>
</div>

<h3>B &mdash; Hechos nuevos desde que firmaste <span class="tag">Nuevo</span></h3>

<div class="scroll">
<table>
<tr><th>Pregunta del I-589</th><th>Lo que decía en 2019</th><th>Lo que hay que decir hoy</th></tr>
<tr>
  <td><b>Parte C, 5</b> (y cualquier pregunta oral sobre arrestos)<br>¿Ha sido arrestado, acusado o condenado de algún delito en EE.UU.?</td>
  <td>NO</td>
  <td><b>Era verdad en diciembre de 2019.</b> Los hechos son de 2021 y las sentencias de 2022. Hoy la respuesta es <b>SÍ</b>, y debes darla tú antes de que la dé el expediente del FBI. Ver sección 2.</td>
</tr>
<tr>
  <td><b>Parte A.III, tabla 2</b><br>Direcciones de los últimos 5 años</td>
  <td>Solo Orlando</td>
  <td>Orlando &rarr; Tampa (dos direcciones) &rarr; Rockford, Illinois. Ver la tabla de la sección 3.</td>
</tr>
<tr>
  <td><b>Parte A.III, tabla 5</b><br>Ubicación de padres</td>
  <td>Ambos en <b>Maturín, Venezuela</b></td>
  <td>Los dos están en Estados Unidos. Tu padre huyó el <b>19/04/2021</b>; hoy vive en Rockford, Illinois, con número A201-393-743 y una solicitud de TPS en trámite.</td>
</tr>
<tr>
  <td>Otros beneficios solicitados</td>
  <td>&mdash;</td>
  <td>Presentaste un <b>I-821 (TPS) el 04/08/2021</b>, que fue <b>negado el 14/02/2024</b>. No lo ocultes: está en el mismo sistema.</td>
</tr>
</table>
</div>

<h3>C &mdash; Errores materiales de la preparadora</h3>

<div class="scroll">
<table>
<tr><th>Pregunta del I-589</th><th>Lo que dice</th><th>Lo correcto</th></tr>
<tr>
  <td><b>Parte A.III, tabla 2</b></td>
  <td>Orlando desde <b>01/2000</b></td>
  <td>Llegaste el 02/04/2019. Es un error de tipeo evidente.</td>
</tr>
<tr>
  <td><b>Parte A.II</b> &mdash; inicio en IUTIRLA</td>
  <td>09/2017</td>
  <td>Tu relato dice <b>2016</b>. Decide cuál es el correcto antes de entrar.</td>
</tr>
</table>
</div>

<h2>5 &middot; Las cinco alertas de consistencia</h2>

<div class="alerta">
  <p class="t">1. La fecha del ataque: tú dices 9, Ángel dice 8</p>
  <p>Tu relato: <i>"El 09 de junio del 2018"</i>. La carta de tu madre a USCIS también dice <i>"Es día 9 de Junio del 2018"</i>. Ángel: <i>"para el viernes 8 de Junio"</i>.</p>
  <p><b>El 8 de junio de 2018 fue viernes. El 9 fue sábado.</b> La explicación natural es que salieron la noche del viernes 8 y el hecho ocurrió ya de madrugada. Una diferencia de un día entre dos hermanos, sobre el hecho central del caso, es lo primero que un oficial marca. Nota a tu favor: <b>dos de los tres documentos dicen 9</b>.</p>
  <p style="margin:0"><b>Cómo se resuelve esto bien:</b> buscando el dato duro &mdash; sellos del pasaporte, boleto, la denuncia del CICPC del 11 de junio. <b>Lo que NO se hace es acordar una versión conveniente.</b> Si después de revisar los papeles siguen recordando distinto, en la entrevista se dice tal cual: <i>"mi hermano lo recuerda del 8 y yo del 9; han pasado siete años"</i>. Una diferencia honesta de un día es creíble; dos testimonios idénticos y ensayados es lo que un oficial lee como preparado.</p>
</div>

<div class="alerta">
  <p class="t">2. ¿De dónde salían esa noche: de una reunión política o de una parrillada? <span class="tag" style="background:var(--err)">Nuevo</span></p>
  <p>Tu relato, textual: <i>"nos encontramos saliendo de una <b>reunión política y de amistad</b> en la Urb La Floresta con un grupo de amigos <b>de nuestra organización</b>"</i>. El relato de Ángel lo describe como una <b>parrillada</b>.</p>
  <p>No son incompatibles &mdash; una reunión de militantes con comida es las dos cosas &mdash; pero <b>importa cuál dices</b>, porque es el puente entre el ataque y el motivo político. Si dices "parrillada" a secas, le entregas al oficial la lectura de que fue un robo común en la salida de una fiesta.</p>
  <p style="margin:0"><b>Di lo que dice tu relato, que además es lo más fuerte:</b> era una reunión con compañeros de tu organización política, en la que también había amistad y comida. Y ponte de acuerdo con Ángel también en esto.</p>
</div>

<div class="alerta">
  <p class="t">3. Tienes que leer la denuncia del CICPC antes de la entrevista</p>
  <p>En tu expediente está <code>Denuncia CICPC 11 DE JUNIO 2018.pdf</code>, pero sigue bloqueado: es un archivo "solo en la nube" de OneDrive y la cuenta no está registrada en esta PC. <b>Al 11/09/2026 todavía no se ha podido abrir.</b></p>
  <p>Esto importa mucho por dos razones opuestas. A favor: <b>es prueba documental contemporánea</b> del hecho más importante de tu caso, tres días después. En contra: si denunciaste ante el CICPC, el oficial te va a preguntar <b>por qué acudiste a las autoridades si dices que temías a las autoridades</b>, y <b>qué pasó con esa denuncia</b>. Recuerda además que Ángel declara temer también a funcionarios del CICPC.</p>
  <p style="margin:0">Necesitas saber exactamente qué dice: si la denunciaste como robo de vehículo o como hecho político, y qué respuesta te dieron. <b>Bájala desde onedrive.live.com en cualquier otro equipo o teléfono.</b> No puedes llegar sin haberla leído.</p>
</div>

<div class="aviso">
  <p class="t">4. Diferencias menores &mdash; que no te tomen por sorpresa</p>
  <ul style="margin:0">
    <li><b>El nombre de la testigo:</b> tú escribiste "Keren Navarro", Ángel escribió "Keren Ramos".</li>
    <li><b>Tu inicio en IUTIRLA:</b> tu relato dice 2016, tu formulario dice 09/2017.</li>
    <li><b>El hueco 2012&ndash;2017:</b> tu formulario dice que terminaste bachillerato en 07/2012 y empezaste IUTIRLA en 09/2017, con empleo "NONE" en los últimos 5 años. Prepara qué hiciste en ese período.</li>
    <li><b>La cifra de personas en la Catedral:</b> tu relato dice <b>"casi 942 personas"</b> y más abajo <b>"más de novecientas"</b>. La palabra "casi" te ayuda: es una estimación, no un conteo. Si te preguntan cómo lo sabes, di de dónde tomaste la cifra; no la defiendas como si la hubieras contado.</li>
    <li><b>Tu graduación:</b> tu relato dice que delegaron la entrega de los títulos a los padres. Tu tesis fue el 18/02/2019 y la de Ángel el 03/02/2019.</li>
  </ul>
</div>

<div class="aviso">
  <p class="t">5. Dos frases de la carta de tu madre que pueden usarse en tu contra <span class="tag" style="background:var(--warn)">Nuevo</span></p>
  <p>La carta de Zoraida a USCIS (<code>USCIS_1.pdf</code>) es buena evidencia en general, pero contiene dos frases que un oficial entrenado va a subrayar:</p>
  <ul>
    <li><i>"En Diciembre del 2018 aconsejamos a nuestros hijos que traten de <b>bajar un poco la guardia</b> como activistas políticos y se mentalicen en culminar sus estudios universitarios"</i>.</li>
    <li><i>"En abril del 2019 <b>una vez culminados sus estudios</b>, ellos deciden salir del país con la intención de <b>apartarse temporalmente</b> de estos conflictos"</i>.</li>
  </ul>
  <p>Leídas con mala intención, esas dos frases dicen: se quedaron tranquilos, esperaron a graduarse, y se fueron de viaje temporal. Eso choca con la idea de huida urgente.</p>
  <p style="margin:0"><b>No las niegues: explícalas.</b> Bajaron el perfil <i>precisamente porque</i> el ataque de junio y las amenazas los habían puesto en peligro, y aun así el 23 de enero de 2019 quedaron atrapados cinco horas en la Catedral y el 25 de enero recibieron una amenaza de muerte explícita. Es decir: <b>bajar el perfil no los protegió</b>. Y lo de "temporal" era el deseo de tu madre, no tu plan: te fuiste con visa de turista porque era el único documento que tenías, no porque pensaras volver.</p>
</div>

<h2>6 &middot; Línea de tiempo maestra</h2>

<p>Memoriza esta columna de fechas. Es el esqueleto de tu caso y el oficial va a saltar entre ellas en desorden a propósito, para ver si la historia se sostiene.</p>

<h3>Venezuela</h3>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>Hecho</th><th>Detalles que debes poder dar</th></tr>

<tr><td class="f">2014</td><td>Encarcelamiento de Leopoldo López</td>
<td>Lo señalas como tu motivación para pasar de simpatizante a activista. Tu relato añade que también influyeron los jóvenes manifestantes asesinados y detenidos por los cuerpos de seguridad "con la cooperación de los grupos irregulares conocidos como <i>Los Colectivos</i>".</td></tr>

<tr><td class="f">2015</td><td>Participas en marchas y manifestaciones estudiantiles</td>
<td>Como parte del equipo juvenil de apoyo a movimientos estudiantiles opositores.</td></tr>

<tr><td class="f">12 feb 2016</td><td>Fecha oficial de tu activismo en Voluntad Popular</td>
<td>Es la fecha que certifica tu constancia del partido. Código de inscripción <b>111124225</b>.</td></tr>

<tr><td class="f">2016</td><td>Te incorporas formalmente a la <b>MUD</b></td>
<td>Coalición: Voluntad Popular, Primero Justicia, Acción Democrática, Copei, Un Nuevo Tiempo, Alianza Bravo Pueblo, Causa Radical, Proyecto Venezuela. Actividades: validación de firmas para el referéndum revocatorio, asambleas de ciudadanos, jornadas casa por casa en el municipio.</td></tr>

<tr><td class="f">21 abril 2016</td><td>Allanamiento de la casa; <b>Emily detenida</b></td>
<td><b>No está en tu relato.</b> Sí está en el de Zoraida y en el de Ángel: 6 a.m., funcionarios sin identificación, sin orden judicial, alegando "material subversivo"; Emily detenida hasta la noche; la orden de allanamiento les fue entregada después y de manera irregular. Debes saber si vas a incorporarlo o explicar por qué no lo pusiste.</td></tr>

<tr><td class="f">2017</td><td>Actos de motivación, validación y renovación de partidos</td>
<td>Apoyo a la recolección para las primarias a la gobernación de Monagas organizadas por la MUD.</td></tr>

<tr><td class="f">18 mayo 2018</td><td>Mensajes de texto amenazantes</td>
<td>De un colectivo aliado a los "Tupamaros". Sabían: la universidad de ambos, dónde vivían, el vehículo con detalles, y los sitios recién frecuentados (La Floresta, urbanización El Parque y Las Flores). Exigían dejar las charlas y el activismo o "las consecuencias serían mortales". <i>Este hecho está en el relato de Ángel, no en el tuyo.</i></td></tr>

<tr><td class="f">8 o 9 junio 2018<br>(ver D-10)</td><td><b>El ataque. Hecho central de tu caso.</b></td>
<td>Saliendo de una <b>reunión política y de amistad</b> en la Urb. La Floresta con compañeros de tu organización (ver D-11), llevando a dos compañeras a casa. Presentes: tú, Ángel, Hilda Fuentes, Antony Ordaz y Keren. Interceptados por <b>dos pares de motorizados</b> (4 personas). Vehículo: <b>Volkswagen SpaceFox 2012, negro, placa AH250EA</b>, de tu padre. Se llevaron el carro, 4 celulares y las billeteras con los documentos de identidad. A Ángel lo golpearon en la cabeza con el cañón; <b>a ti un puñetazo en la cara</b>. Hubo forcejeo para proteger a las dos muchachas y <b>un disparo de amedrentamiento que casi te quita la vida</b>. Frase textual: <b>"se los dijimos y no pararon"</b>. Te llamaron <b>"golpistas"</b>. Tu madre añade que ellos mismos <b>se identificaron como "colectivos"</b>.</td></tr>

<tr><td class="f">11 junio 2018</td><td><b>Denuncia ante el CICPC</b></td>
<td>Existe el documento en tu expediente. <b>Sigue sin poder leerse</b> (bloqueado en OneDrive). Ver D-05 y alerta 3: es urgente que lo leas.</td></tr>

<tr><td class="f">~11 junio 2018</td><td>El carro aparece desvalijado</td>
<td>Tres días después del ataque, en el sector La Línea, municipio Maturín.</td></tr>

<tr><td class="f">junio 2018</td><td>Llamadas de extorsión y amenaza a tu madre</td>
<td>Dos llamadas. Zoraida mantuvo el teléfono <b>apagado más de un mes</b>. Números de la familia: residencial 0291-6435717, celular de tu madre 0424-9122794. Exigían que desistieran del activismo político.</td></tr>

<tr><td class="f">abril&ndash;junio 2018</td><td>Se esconden en casa de la abuela materna</td>
<td><b>Eligia Zoraida Hernández</b>, Avenida Los Guaritos, Casa Nro. 60, Sector III, Maturín.</td></tr>

<tr><td class="f">verano 2018<br>(~8 semanas)</td><td>Se mudan a Puerto La Cruz / Barcelona</td>
<td>Casa del abuelo materno <b>Argenis Coa</b>, Villa Olímpica, bloque 5, piso 1, apartamento 3, Barcelona, Estado Anzoátegui. <b>Las amenazas continuaron.</b> Este punto es importante &mdash; ver la pregunta sobre reubicación interna.</td></tr>

<tr><td class="f">diciembre 2018</td><td>Sus padres les aconsejan bajar el perfil</td>
<td>Consta en la carta de tu madre. Ver D-25 y alerta 5: prepara la explicación.</td></tr>

<tr><td class="f">23 enero 2019</td><td><b>El encierro en la Catedral de Maturín</b></td>
<td>Marcha nacional en conmemoración de la caída de Pérez Jiménez (23/01/1958) y tras la juramentación de Juan Guaidó. Ruta: desde el sector Tipuro hasta la Av. Juncal, luego a la Catedral Nuestra Señora del Carmen para una misa de acción de gracias. Ataque de motorizados encapuchados armados y de la GNB con lacrimógenas y perdigones. Estampida. <b>Casi 942 personas</b> atrapadas <b>cinco horas</b>. Amparados por el obispo <b>Enrique Pérez Lavado</b>. Los grupos armados exigían que salieran los jóvenes para un "juicio popular" y entregarlos a la Guardia Nacional. Salida negociada por autoridades militares, religiosas y civiles.</td></tr>

<tr><td class="f">25 enero 2019</td><td>Llamada con amenaza de muerte explícita</td>
<td>Al mismo número donde amenazaron el año anterior. Les ordenaban irse de la ciudad o los asesinarían; les recordaban que "meses antes les perdonaron la vida". <i>Está en el relato de Ángel y en el de Zoraida.</i></td></tr>

<tr><td class="f">3 febrero 2019</td><td>Ángel se gradúa de Abogado</td><td>Universidad Gran Mariscal de Ayacucho. No asistió al acto.</td></tr>

<tr><td class="f">18 febrero 2019</td><td><b>Tú discutes tesis y te gradúas</b></td>
<td>Técnico Superior en Diseño Gráfico, IUTIRLA. <b>No pudiste asistir a tu acto de grado.</b> Delegaste la entrega del título a tus padres.</td></tr>

<tr><td class="f">23 febrero 2019</td><td>Última actividad política</td>
<td>Av. Libertador de Maturín, día de la entrada de la ayuda humanitaria.</td></tr>

<tr><td class="f">1 marzo 2019</td><td>Se mudan a Caracas</td>
<td>Casa de una prima, sector El Rosal, municipio Chacao. Días en clandestinidad.</td></tr>

<tr><td class="f">28 o 29 marzo 2019</td><td>Salen de Venezuela hacia Santo Domingo</td>
<td>Tu formulario dice 28/03. Ángel escribió 29/03. República Dominicana como país de tránsito porque los vuelos directos a EE.UU. estaban suspendidos.</td></tr>

<tr><td class="f">~29 mar &ndash; 2 abr</td><td><b>6 días en República Dominicana</b></td>
<td>Sin estatus, sin solicitar protección allí. Esto es lo que tu formulario niega y hay que corregir.</td></tr>
</table>
</div>

<h3>Estados Unidos</h3>

<div class="scroll">
<table>
<tr><th>Fecha</th><th>Hecho</th><th>Detalles que debes poder dar</th></tr>

<tr><td class="f">2 abril 2019</td><td>Llegan a Orlando, Florida</td><td>Visa B2, autorizada hasta el 01/10/2019. Dirección: 3712 Castle Pines Ln, Orlando.</td></tr>

<tr><td class="f">~abril 2019</td><td>Grupos armados rondan la casa en Maturín</td>
<td>Durante una semana, según testimonios de vecinos, después de que ustedes llegaron a EE.UU.</td></tr>

<tr><td class="f">5 diciembre 2019</td><td><b>Firmas el I-589</b></td><td>Ocho meses después de llegar: dentro del plazo de un año. No tienes problema de plazo.</td></tr>

<tr><td class="f">diciembre 2019</td><td>Tu madre viaja a verlos a Orlando</td><td>Después de más de ocho meses sin verlos. Ella pide asilo el 24/08/2020.</td></tr>

<tr><td class="f">13 marzo 2020</td><td>Tu padre agredido en Maturín</td>
<td>4 sujetos armados de negro tipo militar, sin identificación, preguntando por el paradero de ustedes; amenazaron con irrumpir en la casa para buscar pruebas de conspiración contra el gobierno. <i>Del relato de Zoraida.</i></td></tr>

<tr><td class="f">2 y 6 junio 2020</td><td>Te mudas a Tampa</td><td>Dos AR-11 firmados. 15501 Bruce B Downs Blvd Apt 2204, Tampa FL 33647.</td></tr>

<tr><td class="f">20 agosto 2020</td><td>Solicitas permiso de trabajo (I-765)</td><td>Categoría C08, la de asilo pendiente. Tel 407-509-0902, correo rafaelnavarrocoa@gmail.com.</td></tr>

<tr><td class="f">16 abril 2021</td><td>Encapuchados grabados por las cámaras de la casa</td>
<td>Gritaban por "Emily y su familia traidora de la patria". Testigos vecinos: <b>Eduardo José Ruiz</b> y <b>Josefa María Noguera</b>. <i>Del relato de Zoraida.</i></td></tr>

<tr><td class="f">19 abril 2021</td><td>Tu padre huye de Venezuela</td><td>Tres días después del incidente de las cámaras.</td></tr>

<tr><td class="f">24 abril 2021</td><td><b>Primer hecho del caso penal</b></td><td>Caso 21-CM-005305-A. Ver sección 2.</td></tr>

<tr><td class="f">15 mayo 2021</td><td><b>Segundo hecho y arresto</b></td><td>Hillsborough County Sheriff's Office. Caso 21-CM-005337-A. Ver sección 2.</td></tr>

<tr><td class="f">4 agosto 2021</td><td>Presentas el I-821 (TPS)</td><td>Recibo IOE0912913217.</td></tr>

<tr><td class="f">5 enero 2022</td><td><b>Declaración de nolo contendere</b></td><td>Adjudicación suspendida en ambos casos. 6 meses de probatoria, 32 horas de servicio comunitario en total, $620 en costas.</td></tr>

<tr><td class="f">marzo&ndash;abril 2022</td><td>Cumples probatoria y servicio comunitario</td><td>Solid Waste, Seffner FL, 11/18/19/28 de abril de 2022. Costas pagadas 21/03 y 25/04/2022.</td></tr>

<tr><td class="f">13 junio 2022</td><td><b>Probatoria terminada con éxito</b></td><td>Juez Paul Jeske. Orden firmada 17/06/2022. Ver sección 2: pregunta qué fue la audiencia de VOP.</td></tr>

<tr><td class="f">11 octubre 2022</td><td>USCIS devuelve un I-765</td>
<td><b>No es una negación de asilo.</b> Rechazo administrativo porque el G-1450 de tarjeta de crédito vino incompleto. Categoría C08 = asilo pendiente. Recibo IOE0917873227. Si te preguntan, es esto y nada más.</td></tr>

<tr><td class="f">julio 2023</td><td>Atención médica en Tampa General</td><td>Ecografía renal por dolor en el costado; resultado normal. MRN 101440581. No tiene relación con el asilo &mdash; pero si alguna vez alegas secuelas físicas del ataque de 2018, ten claro que <b>tu expediente médico de EE.UU. no las documenta</b>.</td></tr>

<tr><td class="f">28 dic 2023</td><td>Primera Solicitud de Pruebas de USCIS (TPS)</td><td>Pedía prueba de residencia continua desde el 08/03/2021 y presencia física desde el 09/03/2021.</td></tr>

<tr><td class="f">2 febrero 2024</td><td><b>Segunda Solicitud de Pruebas: la penal</b></td>
<td>USCIS te dice por escrito que el chequeo de huellas del FBI reveló el arresto del 15/05/2021 por "Indecent Exposure", y te exige las sentencias certificadas. Recibo IOE9517323626. Dirección entonces: 8660 Tessara Ln, Tampa.</td></tr>

<tr><td class="f">14 febrero 2024</td><td><b>TPS negado</b></td><td>Por dos delitos menores. Sin waiver disponible. Derecho de apelación al AAO en 33 días con I-290B. Ver sección 2.</td></tr>

<tr><td class="f">2024</td><td>Te mudas a Rockford, Illinois</td><td>1068 McKnight Cir, Rockford IL 61107-6404.</td></tr>

<tr><td class="f">31 enero 2025</td><td>Solicitud de Pruebas de TPS a tu padre</td><td>No es tuya, pero es el mismo domicilio y el oficial puede verlo. José Emilio Navarro, A201-393-743.</td></tr>
</table>
</div>

<h2>7 &middot; Banco de preguntas</h2>

<h3>Bloque A &mdash; Apertura y biográficas</h3>

<div class="q">
  <p class="pregunta">¿Es todo el contenido de su solicitud verdadero y correcto?</p>
  <p class="resp">Aquí es donde presentas las correcciones de la sección 4, incluidos los arrestos. No digas "sí" y luego corrijas.</p>
  <p class="src">Parte F del I-589. Consulta con tu abogado la forma exacta.</p>
</div>

<div class="q">
  <p class="pregunta">Nombre completo, fecha y lugar de nacimiento, nacionalidad, dirección actual.</p>
  <p class="resp">Rafael Emilio Navarro Coa &middot; 30/04/1996 &middot; Maturín, Monagas, Venezuela &middot; venezolano &middot; 1068 McKnight Cir, Rockford, IL 61107.</p>
</div>

<div class="q">
  <p class="pregunta">¿Dónde vivió en Venezuela y desde cuándo?</p>
  <p class="resp">Urb. Río Claro, Casa 54, Palma Real, Sector Tipuro, Maturín. Tu formulario dice desde 01/2000 hasta 03/2019.</p>
  <p class="src">I-589, Parte A.III, tabla 1.</p>
</div>

<div class="q">
  <p class="pregunta">Deme todas las direcciones donde ha vivido en Estados Unidos.</p>
  <p class="resp">Orlando (Castle Pines Ln) &rarr; Tampa, Bruce B Downs Blvd &rarr; Tampa, Tessara Ln &rarr; Rockford, Illinois. Están en la tabla de la sección 3. Firmaste AR-11 por las dos primeras mudanzas.</p>
  <p class="src">Formularios AR-11 del 02/06/2020 y 06/06/2020; avisos de USCIS 2023&ndash;2024.</p>
</div>

<div class="q">
  <p class="pregunta">Nombre y ubicación actual de sus padres y hermanos.</p>
  <p class="resp">Zoraida Coa (madre) y José Emilio Navarro (padre) &mdash; <b>ambos ahora en EE.UU.</b>, no en Maturín como dice el formulario. Emily del Valle Navarro Sánchez (hermana, 1993) y Ángel Eduardo Navarro Coa (hermano, 1997). <b>Los cuatro tienen solicitudes migratorias.</b></p>
  <p class="src">I-589, Parte A.III, tabla 5. Requiere actualización.</p>
</div>

<h3>Bloque B &mdash; Actividad política (el corazón del caso)</h3>

<div class="q">
  <p class="pregunta">¿A qué organización política pertenecía? ¿Cuándo se unió?</p>
  <p class="resp">Mesa de la Unidad Democrática (MUD), desde 2016. Antes, desde 2015, participabas en marchas y en el equipo juvenil de apoyo a los movimientos estudiantiles.</p>
  <p class="src">Tu relato, página 1.</p>
</div>

<div class="q">
  <p class="pregunta">¿Qué hacía exactamente? ¿Tenía algún cargo?</p>
  <p class="resp">Tu relato dice: movilizaciones estudiantiles, asambleas de ciudadanos, jornadas casa por casa llevando orientación sobre deberes y derechos constitucionales, activación de la validación de firmas para el revocatorio de 2016, apoyo a la renovación de partidos en 2017 y a la recolección para las primarias a la gobernación de Monagas.</p>
  <p class="resp"><b>Tu relato no menciona ningún cargo formal.</b> Si no lo tenías, dilo así. Tu constancia de VP sí dice que pertenecías al <b>equipo de organización de jornadas de activismo y movilización juvenil en Monagas</b>: esa frase es tuya y puedes usarla.</p>
  <p class="src">Tu relato p.1 y constancia de Voluntad Popular del 08/11/2019.</p>
</div>

<div class="q">
  <p class="pregunta">¿Puede probar que pertenecía a ese partido?</p>
  <p class="resp"><b>Sí.</b> Tienes la <b>constancia de Voluntad Popular</b> del 8 de noviembre de 2019, firmada por <b>Luis Humberto Zamora Rojas</b> (C.I. V-11.779.677), Coordinador de Organización de VP en Monagas, teléfono +58 424-9465343. Dice que eres miembro activista del partido (RIF J-31616665-1), con <b>código de inscripción 111124225</b>, activo <b>desde el 12 de febrero de 2016</b>.</p>
  <p class="resp">Ojo con un detalle: esa constancia dice <b>Voluntad Popular</b>, mientras tu relato habla de la <b>MUD</b>. No es contradicción &mdash; Voluntad Popular era partido integrante de la coalición MUD, y tu propio relato la nombra primera en la lista de partidos de la coalición &mdash; pero debes poder decirlo en una frase sin dudar.</p>
  <p class="src"><code>Constancia VOLUNTAD POPULAR (Angel-Rafael-Emily) 08-11-2019.docx</code>. El mismo documento acredita a Ángel (código 111124412) y a Emily (código 101124025, activa desde 2013).</p>
</div>

<div class="q">
  <p class="pregunta">¿Cada cuánto se reunían? ¿Dónde? ¿Con quién?</p>
  <p class="resp"><b>Tu expediente no tiene esta información.</b> Responde con lo que recuerdes. Nombres que ya están en el expediente y puedes usar con seguridad: Hilda Fuentes, Antony Ordaz, Keren, y tu hermano Ángel.</p>
</div>

<div class="q">
  <p class="pregunta">¿Sigue participando en actividades políticas desde Estados Unidos?</p>
  <p class="resp">Ojo: en el I-589 marcaste <b>SÍ</b> en la pregunta 3.B ("¿usted o sus familiares continúan participando?"), remitiendo a los documentos adjuntos. Pero tu relato dice que tu última actividad fue el <b>23 de febrero de 2019</b> en Maturín. Debes poder explicar qué entendiste por esa pregunta.</p>
  <p class="src">I-589, Parte B, 3.B.</p>
</div>

<h3>Bloque C &mdash; El ataque de junio de 2018</h3>

<div class="q">
  <p class="pregunta">Cuénteme qué pasó ese día, desde el principio.</p>
  <p class="resp">Déjalo correr en orden, empezando por el marco correcto: <b>la reunión política y de amistad</b> en La Floresta con compañeros de tu organización, la salida para llevar a dos compañeras a su casa, la intercepción por dos pares de motorizados, el despojo del vehículo y de los celulares y billeteras con los documentos, el golpe a Ángel con el cañón en la cabeza, el puñetazo que recibiste tú, el forcejeo con uno de los sujetos para evitar agresiones a las muchachas, y el disparo de amedrentamiento.</p>
  <p class="src">Tu relato, páginas 1 y 2. Ver D-11 y alerta 2 sobre "reunión" vs "parrillada".</p>
</div>

<div class="q">
  <p class="pregunta">¿Cuántas personas eran? ¿Iban armados? ¿Cómo estaban vestidos?</p>
  <p class="resp">Cuatro, en dos motos. Sí, armados: uno apuntó desde afuera del carro y hubo un disparo al piso. <b>Tu expediente no describe la vestimenta.</b> Si no recuerdas, dilo.</p>
</div>

<div class="q">
  <p class="pregunta">¿Cómo sabe que fue por razones políticas y no un robo común?</p>
  <p class="resp">Esta es <b>la pregunta más importante de toda la entrevista</b>. Tu caso entero depende de la respuesta. Los cuatro elementos que ya están declarados:</p>
  <ul>
    <li>La frase que dijo uno de ellos: <b>"se los dijimos y no pararon"</b> &mdash; que remite directamente a las amenazas por mensaje de texto de tres semanas antes.</li>
    <li>Los llamaron <b>"golpistas"</b>, término político, no de delincuencia común.</li>
    <li>Ocurrió en <b>La Floresta</b>, una de las zonas que los mensajes amenazantes habían mencionado por nombre, al salir de <b>una reunión de tu organización política</b>.</li>
    <li>Tu madre declara que los atacantes <b>se identificaron a sí mismos como "colectivos"</b>, y que las llamadas posteriores exigían que ustedes <b>desistieran del activismo político</b> &mdash; no dinero.</li>
  </ul>
  <p class="resp">Y el dato que lo cierra: <b>les devolvieron nada y les pidieron nada</b>; lo que exigían era que dejaran la política.</p>
  <p class="src">Tu relato p.1&ndash;2, el relato de Ángel, y la carta de Zoraida a USCIS.</p>
</div>

<div class="q">
  <p class="pregunta">¿Denunció el hecho a las autoridades?</p>
  <p class="resp"><b>Sí</b> &mdash; existe una denuncia ante el CICPC del 11 de junio de 2018. <b>Léela antes de la entrevista.</b> Prepárate para: ¿qué denunciaste exactamente? ¿por qué acudiste a las autoridades si les temías? ¿qué hicieron ellos con tu denuncia?</p>
  <p class="src">Documento bloqueado en OneDrive. Ver D-05 y alerta 3.</p>
</div>

<div class="q">
  <p class="pregunta">¿Recibió atención médica por el golpe?</p>
  <p class="resp"><b>Tu expediente no registra ninguna atención médica para ti</b>, ni en Venezuela ni aquí. Si no fuiste al médico, dilo y explica por qué. No inventes un tratamiento que no puedas documentar.</p>
</div>

<h3>Bloque D &mdash; Amenazas y la Catedral</h3>

<div class="q">
  <p class="pregunta">¿Quién lo amenazó? ¿Cómo? ¿Cuántas veces?</p>
  <p class="resp">Mensajes de texto de un colectivo aliado a los "Tupamaros" el 18 de mayo de 2018, y llamadas telefónicas a tu madre después del ataque. Zoraida declara <b>más de diez llamadas</b> en total a lo largo del período, y dos llamadas específicas tras el ataque de junio.</p>
  <p class="src">Relato de Ángel y declaraciones de Zoraida. <b>Tu propio relato no detalla los mensajes de mayo</b> &mdash; ten claro qué sabes de primera mano y qué supiste por tu hermano o tu madre.</p>
</div>

<div class="q">
  <p class="pregunta">Descríbame lo del 23 de enero de 2019.</p>
  <p class="resp">Ruta desde Tipuro a la Av. Juncal y de ahí a la Catedral Nuestra Señora del Carmen, para una misa de acción de gracias. Ataque de motorizados encapuchados armados y de la GNB con lacrimógenas y perdigones. Estampida. Encierro de cinco horas. Obispo Enrique Pérez Lavado. Exigencia de entregar a los jóvenes para un "juicio popular" y luego a la Guardia Nacional. Salida negociada por autoridades militares, religiosas y civiles.</p>
  <p class="src">Tu relato p.2. Ángel lo describe igual.</p>
</div>

<div class="q">
  <p class="pregunta">¿Fue usted personalmente herido o detenido ese día?</p>
  <p class="resp">Tu relato dice que hubo heridos y ataques de pánico entre los manifestantes, pero <b>no dice que tú resultaras herido ni detenido</b>. No agregues nada que no esté ahí.</p>
</div>

<h3>Bloque E &mdash; Temor a regresar y reubicación interna</h3>

<div class="q">
  <p class="pregunta">¿Qué cree que le pasaría si regresa hoy a Venezuela?</p>
  <p class="resp">Lo que declaraste textualmente: <i>"regresar es sufrir una prisión y torturas injustas e inclusive la muerte"</i>. Marcaste la Convención contra la Tortura, así que esta respuesta debe sostener ese punto.</p>
  <p class="src">Tu relato, cierre de la página 2.</p>
</div>

<div class="q">
  <p class="pregunta">¿A quién teme específicamente?</p>
  <p class="resp">Colectivos armados afectos al gobierno, la Guardia Nacional Bolivariana, y cuerpos de seguridad vinculados al régimen. Ángel añade en su declaración que también funcionarios del CICPC.</p>
</div>

<div class="q">
  <p class="pregunta">¿No podría simplemente mudarse a otra parte de Venezuela?</p>
  <p class="resp"><b>Esta pregunta la van a hacer y tu respuesta ya está en los hechos: lo intentaron y no funcionó.</b></p>
  <ul>
    <li>Se escondieron en casa de la abuela <b>Eligia Zoraida Hernández</b> en Los Guaritos, Maturín, entre abril y junio de 2018. Las amenazas siguieron.</li>
    <li>Se fueron ~8 semanas a Puerto La Cruz / Barcelona, a casa del abuelo <b>Argenis Coa</b>. Ángel lo declara así: <i>"esto no funcionó, las amenazas y persecución seguían, estábamos siendo acechados por bandas organizadas que se encuentran y comunican en todo el país"</i>.</li>
    <li>Se mudaron a Caracas en marzo de 2019, a casa de una prima en El Rosal, y aun así decidieron salir del país.</li>
  </ul>
  <p class="src">Relato de Ángel y declaración jurada de Zoraida. <b>Tu propio relato solo menciona "días de manera clandestina en casas familiares"</b> &mdash; conoce los detalles concretos.</p>
</div>

<div class="q">
  <p class="pregunta">Si temía tanto, ¿por qué esperó a graduarse para irse?</p>
  <p class="resp"><b>Pregunta nueva y probable</b>, porque la carta de tu madre dice justamente eso. Ver D-25 y D-26. La respuesta honesta: bajaron el perfil por consejo de sus padres precisamente por el peligro, y aun así los alcanzaron otra vez el 23 y el 25 de enero de 2019. No se fueron cuando quisieron, se fueron cuando pudieron: hacía falta pasaporte, dinero y una ruta, y los vuelos directos estaban suspendidos.</p>
</div>

<div class="q">
  <p class="pregunta">¿Le ha pasado algo a su familia desde que usted se fue?</p>
  <p class="resp">Sí, y es de lo más fuerte que tienes: grupos armados rondando la casa una semana después de su salida (abril 2019); tu padre <b>agredido físicamente el 13/03/2020</b> por 4 sujetos armados que preguntaban por el paradero de ustedes; encapuchados <b>grabados por las cámaras el 16/04/2021</b> gritando por la familia; tu padre huyó el 19/04/2021 y hoy tiene su propio expediente ante USCIS.</p>
  <p class="src">Relato y declaración de Zoraida. Testigos vecinos: Eduardo José Ruiz y Josefa María Noguera.</p>
</div>

<h3>Bloque F &mdash; Viaje, plazo y admisibilidad</h3>

<div class="q">
  <p class="pregunta">Describa su ruta de viaje desde Venezuela hasta Estados Unidos.</p>
  <p class="resp">Maturín &rarr; Caracas (1 de marzo, casa de una prima en El Rosal) &rarr; <b>Santo Domingo, República Dominicana, 6 días</b> &rarr; Orlando, 2 de abril de 2019.</p>
  <p class="src"><b>Aquí es donde tu formulario dice NO y la realidad dice sí.</b> Ver D-04.</p>
</div>

<div class="q">
  <p class="pregunta">¿Solicitó protección en República Dominicana? ¿Tuvo algún estatus allí?</p>
  <p class="resp">No. Fue tránsito de 6 días. El oficial pregunta esto para descartar <i>firm resettlement</i> (reasentamiento firme). Un tránsito corto sin estatus no lo constituye, pero la respuesta debe ser clara y honesta.</p>
</div>

<div class="q">
  <p class="pregunta">¿Por qué no pidió asilo apenas llegó?</p>
  <p class="resp">Llegaste el 02/04/2019 y firmaste el 05/12/2019: <b>ocho meses, dentro del plazo de un año</b>. No tienes que justificar demora. Si te preguntan por qué esperó ocho meses, la carta de tu madre da una razón real: a finales de 2019 confirmaron que las amenazas en Venezuela seguían, y fue entonces cuando decidieron pedir asilo en vez de volver.</p>
</div>

<div class="q">
  <p class="pregunta">¿Ha regresado a Venezuela desde que salió?</p>
  <p class="resp">No. Consistente con tu formulario, Parte C, pregunta 4.</p>
</div>

<div class="q">
  <p class="pregunta">¿Alguna vez participó en causar daño a otra persona por su raza, religión, nacionalidad, grupo social u opinión política?</p>
  <p class="resp">No. Tu formulario ya dice NO. Es la pregunta de exclusión estándar.</p>
</div>

<div class="q">
  <p class="pregunta">¿Le negaron alguna solicitud antes?</p>
  <p class="resp">Sí, y hay que separar dos cosas distintas:</p>
  <ul>
    <li><b>El I-821 de TPS fue negado el 14/02/2024</b> por los antecedentes penales. Esto sí es una negación de fondo. Ver sección 2.</li>
    <li><b>El I-765 del 11/10/2022 no fue una negación</b>, fue un rechazo administrativo porque el G-1450 de tarjeta de crédito vino incompleto. Categoría C08, la de asilo pendiente. Recibo IOE0917873227. El archivo se llama "Aplicación Rechazada" y eso confunde: no fue una decisión sobre el fondo.</li>
  </ul>
  <p class="src">Form I-797C, Rejection Notice; Decisión I-821 del 14/02/2024.</p>
</div>

<h3>Bloque G &mdash; Antecedentes penales <span class="tag" style="background:var(--err)">Nuevo &mdash; el bloque más difícil</span></h3>

<div class="aviso">
  <p class="t">Cómo enfrentar este bloque</p>
  <p style="margin:0">Tres reglas: <b>(1)</b> no minimices ni discutas los hechos &mdash; entregaste una declaración de <i>nolo contendere</i> y eso cierra la discusión sobre lo que pasó; <b>(2)</b> no lo conviertas en un discurso &mdash; contesta corto, con hechos y documentos; <b>(3)</b> lo que sí puedes y debes mostrar es <b>qué hiciste después</b>: cumpliste todo, la corte cerró tu caso como exitoso, y no ha vuelto a pasar nada en más de cinco años. <b>Practica estas respuestas en voz alta con tu abogado, no solo.</b></p>
</div>

<div class="q">
  <p class="pregunta">¿Ha sido arrestado alguna vez en Estados Unidos?</p>
  <p class="resp"><b>Sí.</b> En 2021, en el condado de Hillsborough, Florida. Dos casos que se resolvieron juntos.</p>
  <p class="resp">Tu I-589 dice NO porque lo firmaste en diciembre de 2019, año y medio antes. Eso era cierto entonces. <b>Dilo así, sin que te lo pregunten dos veces.</b></p>
</div>

<div class="q">
  <p class="pregunta">¿De qué fue acusado exactamente? ¿Cuál fue el resultado?</p>
  <p class="resp">Dos cargos de <i>exposure of sexual organs</i> bajo el estatuto 800.03 de Florida, delitos menores de primer grado, por hechos del 24 de abril y el 15 de mayo de 2021. El 5 de enero de 2022 entregué una declaración de <b>nolo contendere</b>. El tribunal suspendió la adjudicación (<i>adjudication withheld</i>) y me impuso <b>seis meses de probatoria y 16 horas de servicio comunitario por cada caso, concurrentes</b>. No hubo cárcel.</p>
  <p class="resp">Lleva las <b>copias certificadas por el Clerk</b>. No describas el resultado de memoria: entrégale los papeles.</p>
  <p class="src">Judgment and Sentence, casos 21-CM-005305-A y 21-CM-005337-A, Juez Paul T. Jeske.</p>
</div>

<div class="q">
  <p class="pregunta">¿Cumplió todas las condiciones?</p>
  <p class="resp">Sí, y tienes el papel que lo dice. El <b>13 de junio de 2022</b> el juez terminó la probatoria como <b>exitosa</b>, con la constancia de que cumplí las condiciones <i>"in a law-abiding manner"</i>. Servicio comunitario cumplido en abril de 2022 y todas las costas pagadas, saldo en cero.</p>
  <p class="resp"><b>Averigua antes qué fue la audiencia de VOP</b> del 13/06/2022, por si el oficial ve ese término en el expediente. Ver sección 2.</p>
</div>

<div class="q">
  <p class="pregunta">¿Ha tenido algún otro problema con la ley, antes o después?</p>
  <p class="resp">Contesta solo con la verdad. Según todo lo que hay en tu expediente, estos dos casos de 2021 son los únicos, y <b>no hay nada posterior a junio de 2022</b>. Si existiera cualquier otra cosa &mdash; una multa, una citación, un contacto policial &mdash; díselo a tu abogado <b>antes</b>, no al oficial de sorpresa.</p>
</div>

<div class="q">
  <p class="pregunta">¿Por qué le negaron el TPS?</p>
  <p class="resp">Por esos dos casos. La ley del TPS descalifica automáticamente a quien tenga dos o más delitos menores, y no admite perdón. Es una regla del TPS, no del asilo. <b>No discutas con el oficial sobre esto ni argumentes derecho</b> &mdash; eso lo hace tu abogado, por escrito, antes o durante. Tú solo di el hecho.</p>
  <p class="src">Decisión I-821 del 14/02/2024, oficial AT0332.</p>
</div>

<div class="q">
  <p class="pregunta">¿Por qué debería el gobierno ejercer su discreción a su favor?</p>
  <p class="resp"><b>Esta pregunta puede decidir tu caso</b> y no debes improvisarla. Es donde se pesan las cosas buenas contra las malas. Los elementos reales que tienes, para que tu abogado los organice:</p>
  <ul>
    <li>Un caso de persecución política documentado por tres testimonios familiares independientes y una constancia de partido.</li>
    <li>Presentación <b>dentro del plazo de un año</b>.</li>
    <li>Cumplimiento íntegro de la sentencia y cierre exitoso por el juez.</li>
    <li>Más de cinco años sin ningún incidente posterior.</li>
    <li>Toda tu familia nuclear está en Estados Unidos y ninguno puede volver.</li>
    <li>Tu padre sigue siendo buscado en Maturín: la persecución contra la familia continuó hasta 2021.</li>
  </ul>
  <p class="resp"><b>No memorices un discurso.</b> Si el oficial lo pregunta y tienes abogado presente, es momento de que hable el abogado.</p>
</div>

<h2>8 &middot; Tu evidencia: lo que tienes y lo que te falta</h2>

<div class="bien">
  <p class="t">Lo que refuerza tu caso</p>
  <ul style="margin:0">
    <li><b>Tu constancia oficial de Voluntad Popular.</b> Emitida en Maturín el <b>8 de noviembre de 2019</b> por Luis Humberto Zamora Rojas, Coordinador de Organización de VP en Monagas. Certifica que eres <b>MIEMBRO ACTIVISTA</b> del partido, con tu cédula V-25.503.374, tu <b>código de inscripción 111124225</b>, y que perteneces al equipo de organización de jornadas de activismo y movilización juvenil en Monagas <b>desde el 12 de febrero de 2016</b>. Es prueba documental directa de tu militancia, y es de lo más fuerte que tienes.</li>
    <li><b>Cuatro testimonios que coinciden</b> &mdash; el tuyo, el de Ángel, el relato de Zoraida y su carta a USCIS &mdash; en el ataque de junio 2018, el carro SpaceFox, el disparo, la frase "se los dijimos y no pararon", las llamadas a tu madre, el carro desvalijado, el encierro en la Catedral con el obispo Pérez Lavado, y que ninguno pudo ir a su graduación.</li>
    <li><b>Denuncia ante el CICPC</b> del 11 de junio de 2018 &mdash; prueba documental contemporánea, <b>si logras abrirla</b>.</li>
    <li><b>Intentos de reubicación interna que fracasaron</b> &mdash; Los Guaritos, Puerto La Cruz, Caracas.</li>
    <li><b>Persecución continuada contra la familia</b> después de tu salida, hasta 2021, con dos vecinos identificables como testigos.</li>
    <li><b>Presentación dentro del plazo de un año.</b></li>
    <li><b>Tu expediente penal completo y certificado</b>, incluida la orden de terminación exitosa. Suena raro ponerlo del lado bueno, pero lo es: significa que llegas con el problema documentado y cerrado en vez de descubierto por el oficial.</li>
    <li><b>Los documentos de probatoria recuperados de tu correo</b> (11/09/2026), que estaban perdidos desde tu mudanza a Rockford: las dos <i>Orders of Probation</i>, el <i>Notice To Report</i>, el paquete de servicio comunitario y el formulario de referencia de la evaluación. Están en <code>ASILO_FAMILIA\\01_Rafael\\Correo_Gmail_2022-2025\\</code>.</li>
    <li><b>Tu propio correo del 01/05/2022</b> a la oficial de probatoria, que explica la VOP con tus palabras y en el momento. Es contemporáneo y te favorece: muestra que corregiste el incumplimiento por iniciativa propia.</li>
  </ul>
</div>

<div class="aviso">
  <p class="t">Lo que te falta y deberías conseguir</p>
  <ul style="margin:0">
    <li><b>La denuncia del CICPC</b> &mdash; bájala de onedrive.live.com desde otro equipo. Es lo más urgente.</li>
    <li><b>El docket completo de los dos casos penales</b> y el <i>arrest affidavit</i>, del Clerk de Hillsborough (813-276-8100) o del bufete Westmoreland.</li>
    <li><b>Certificado de la evaluación psicosexual</b> &mdash; Psychological Management Group, 813-963-1016.</li>
    <li><b>Fotografías</b> de las marchas, plantones o asambleas en las que participaste.</li>
    <li><b>Documentos del vehículo</b> y del robo &mdash; título del SpaceFox, la denuncia de su recuperación desvalijado.</li>
    <li><b>Notas de prensa</b> sobre el encierro en la Catedral de Maturín del 23/01/2019. Fue un hecho público y masivo; debe haber cobertura.</li>
    <li><b>Los mensajes de texto</b> amenazantes, si alguno sobrevivió en capturas.</li>
    <li><b>Informes de condiciones del país</b> actualizados a 2026 &mdash; tu expediente se apoya en hechos de 2016&ndash;2021.</li>
    <li><b>Cartas de carácter</b> de empleadores, iglesia o comunidad en Rockford. Con un antecedente penal en el expediente, esto ya no es opcional.</li>
  </ul>
</div>

<div class="alerta">
  <p class="t">94 archivos de tu expediente siguen bloqueados</p>
  <p style="margin:0">Casi la mitad de <code>01_Legal_Migracion</code> son marcadores "solo en la nube" de OneDrive y no se pueden abrir desde esta PC: el proveedor de nube no está registrado en Windows y reiniciar el proceso no lo arregla. Entre lo bloqueado está <b>la denuncia del CICPC</b>, el I-589 de tu madre y <b>toda la carpeta del abogado Dietrich &amp; Roman</b>, incluido el <code>Formulario g-28</code>. <b>Bájalos desde onedrive.live.com en el navegador</b>, desde cualquier equipo o desde el teléfono. Verificado el 11/09/2026: sigue bloqueado.</p>
</div>

<div class="alerta">
  <p class="t">No existe ningún aviso electrónico de tu cita &mdash; verifícalo por otra vía <span class="tag" style="background:var(--err)">16/09/2026</span></p>
  <p>Se revisó a fondo tu correo (<code>uscis.gov</code>, <code>egov.uscis.gov</code>, notificaciones de "MyAccount", y toda mención de "entrevista"/"interview"/"biometrics" en 2026) y <b>no apareció ningún aviso oficial de USCIS sobre la cita</b>. El último correo electrónico de USCIS es de febrero de 2025.</p>
  <p style="margin:0">Eso significa que la notificación de tu cita, si ya existe, llegó <b>solo por correo postal físico</b> o consta únicamente en tu cuenta en línea. <b>Revisa tu buzón físico en Rockford y entra a myaccount.uscis.gov</b> para confirmar fecha, hora, lugar y si exige que lleves tu propio intérprete &mdash; no lo dejes para la semana de la cita.</p>
</div>

<div class="alerta">
  <p class="t">Nunca confirmaste tu dirección con la oficina de Matos <span class="tag" style="background:var(--err)">16/09/2026</span></p>
  <p>El 31/03/2025 la oficina de Matos pidió por correo a todos sus clientes confirmar teléfono, correo y <b>dirección actual</b>, para no perder avisos de USCIS o de la Corte. Se revisó tu carpeta de "Enviados" y <b>nunca respondiste ese correo</b> &mdash; no hay un solo mensaje tuyo a <code>abogadomatos@gmail.com</code> ni <code>agendamatos@gmail.com</code>.</p>
  <p style="margin:0"><b>Si la oficina (o USCIS) tiene una dirección distinta a la de Rockford, cualquier aviso físico &mdash; incluida la notificación de esta entrevista &mdash; pudo haberse extraviado.</b> Llama al <b>407-403-5514</b> antes de la cita y confírmalo directamente, no por correo.</p>
</div>

<div class="alerta">
  <p class="t">Cambio de abogado en curso &mdash; esto es ahora lo más urgente de todo el documento <span class="tag" style="background:var(--err)">16/09/2026</span></p>
  <p>Confirmaste que <b>tu nueva abogada, Patricia, reemplaza al Lcdo. Ángel Matos</b>. Este documento todavía tiene a Matos como "abogado actual" en varias secciones porque es lo último confirmado por escrito &mdash; hay que corregirlo en cuanto tengas los datos completos de Patricia.</p>
  <p><b>Lo que falta resolver antes del 01/10, en este orden:</b></p>
  <ol style="margin:0">
    <li>El <b>G-28 que consta ante USCIS sigue a nombre de Matos</b> (firmado 26/04/2024). Si Patricia se presenta a la entrevista sin su propio G-28 radicado, USCIS puede no reconocerla como tu representante ese mismo día.</li>
    <li><b>No hay ningún correo donde se le avise a Matos</b> que deja de representarte. Sin ese aviso formal (retiro de representación), él sigue siendo tu abogado de registro ante USCIS aunque tú ya no trabajes con él.</li>
    <li>El paquete <code>EXPEDIENTE NAVARRO - PARA EL ABOGADO</code> que le enviaste a Patricia se armó el 12/09/2026 &mdash; <b>es anterior a la constancia de PMG</b> (14/09/2026) y a las dos alertas de esta misma sección. Reenvíale esa actualización.</li>
    <li>Confirma con Patricia si ella ya tiene la dirección correcta de Rockford y si sabe la fecha exacta de tu entrevista &mdash; puede que ella ya la tenga y por eso no aparece en tu correo.</li>
  </ol>
</div>

<h2>9 &middot; El día de la entrevista</h2>

<div class="card">
  <p><b>Qué llevar:</b></p>
  <ul style="margin:0">
    <li><b>Intérprete</b> &mdash; confirma en tu notificación si debes llevarlo. Tu formulario dice que no hablas inglés con fluidez.</li>
    <li><b>Original de tu pasaporte</b> (114266251) e I-94 (81241757856).</li>
    <li><b>Copia completa de tu I-589 tal como se presentó</b>, con el relato adjunto. Necesitas tener delante exactamente lo que firmaste.</li>
    <li><b>Las copias certificadas del tribunal de Hillsborough</b> de ambos casos, más la <i>Order of Termination of Probation</i>. No esperes a que te las pidan.</li>
    <li><b>La notificación de la cita.</b></li>
    <li><b>Toda evidencia nueva</b> que no se haya presentado antes.</li>
    <li><b>Tu abogado.</b> Estás en transición de Matos a <b>Patricia</b> (ver alerta de la sección 8) &mdash; confirma con ella antes de la cita que su G-28 ya está radicado ante USCIS, porque el que consta hoy es el de Matos (firmado 26/04/2024). <b>Con un antecedente penal en el expediente, ir sin abogado reconocido por USCIS ese día es un riesgo real.</b></li>
  </ul>
</div>

<div class="card">
  <p><b>Tres cosas que recordar en la sala:</b></p>
  <ol style="margin:0">
    <li>Responde solo lo que te preguntan. No adelantes información &mdash; con una excepción: las correcciones de la sección 4 y los antecedentes de la sección 2 los adelantas tú, al inicio.</li>
    <li>Si no entiendes la pregunta, pide que la repitan. Si no recuerdas, di que no recuerdas.</li>
    <li>Si el oficial señala una contradicción, no improvises una explicación. Di la verdad: que el formulario lo llenó una preparadora que no es abogada, que han pasado siete años, o lo que corresponda.</li>
  </ol>
</div>

<h2>10 &middot; Qué hacer esta semana, en orden</h2>

<div class="card">
  <ol style="margin:0">
    <li><b>Cerrar el cambio de abogado con Patricia y con Matos, por escrito.</b> Pídele a Patricia que radique su propio G-28 ante USCIS antes del 01/10 (el que consta hoy es el de Matos, firmado 26/04/2024), y envíale un correo formal a Matos avisando que deja de representarte. <b>Esto va primero que todo lo demás.</b></li>
    <li><b>Reenviarle a Patricia la constancia de PMG</b> y las alertas sobre la notificación de la entrevista y la dirección &mdash; el paquete que le mandaste es del 12/09, antes de que aparecieran.</li>
    <li>Si hace falta hablar con la oficina de Matos por el traspaso &mdash; <b>407-403-5514</b> / 321-337-6506, <code>abogadomatos@gmail.com</code> (asistentes: <code>agendamatos@gmail.com</code>) &mdash; aprovecha para preguntar si ellos sabían la fecha de tu entrevista, ya que nunca llegó por correo.</li>
    <li><b>Entregarle a Matos, en privado, la evaluación psicosexual completa</b> (está en tu escritorio, archivo 08). Él necesita verla antes de la entrevista. <b>No la subas a ningún portal de USCIS.</b></li>
    <li><b class="ok-txt">RESUELTO (14/09/2026):</b> la constancia de tratamiento de Psychological Management Group ya llegó. Ver la tarjeta verde de la sección 2.</li>
    <li><b>Entrar a myaccount.uscis.gov</b> y revisar tu buzón físico en Rockford para confirmar la notificación de la cita &mdash; no llegó por correo electrónico.</li>
    <li><b>Resolver el fee de $100 de asilo pendiente</b> ante USCIS, del que te avisó la oficina de Matos el 10/10/2025. Confirma con ellos si ya se pagó y guarda la constancia.</li>
    <li><b>Pedir al Clerk de Hillsborough</b> (813-276-8100, hillsclerk.com) el docket completo de 21-CM-005305-A y 21-CM-005337-A, incluido el <i>arrest affidavit</i> y lo relativo a la audiencia de VOP del 13/06/2022.</li>
    <li><b>Entrar a onedrive.live.com</b> desde el teléfono y descargar la denuncia del CICPC y la carpeta del abogado anterior (Dietrich &amp; Roman).</li>
    <li><b>Hablar con Ángel</b> y cerrar dos cosas: la fecha del ataque (8 o 9 de junio) y cómo describen la reunión de esa noche.</li>
    <li><b>Buscar la constancia</b> de la evaluación psicológica ordenada por el tribunal.</li>
    <li><b>Pedir dos o tres cartas de carácter</b> en Rockford.</li>
  </ol>
</div>

<div class="foot">
  <p>Fuentes de este documento, todas de tu propio expediente:<br>
  <code>Aplicacion de Asilo Rafael Navarro Coa.pdf</code> (I-589, 13 pp., firmado 05/12/2019) &middot;
  <code>Relato de Asilo Rafael Navarro.pdf</code> (2 pp.) &middot;
  <code>Caso Rafael Navarro Pag. 1-10 / 11-20 / 21-30 / 31-45.pdf</code> (expediente penal certificado, 45 pp.) &middot;
  <code>Caso Rafael Navarro REQUEST FOR EVIDENCE December 2023.pdf</code> &middot;
  <code>Caso Rafael Navarro REQUEST FOR EVIDENCE Febrero 2024.pdf</code> &middot;
  <code>Decision TPS I-821 2024 (Rafael).pdf</code> &middot;
  <code>Caso Rafael Navarro Aplicacion Rechazada.pdf</code> (I-797C, 11/10/2022) &middot;
  <code>2020-06-02.pdf</code> y <code>2020-06-06.pdf</code> (AR-11) &middot;
  <code>I-765 2020-08-20.pdf</code> &middot;
  <code>USCIS_1.pdf</code> (carta de Zoraida a USCIS) &middot;
  <code>ASILO ANGEL.pdf</code> y <code>ASILO DE ANGEL.docx</code> &middot;
  <code>Relato de Asilo Politico Zoraida Coa.pdf</code> &middot;
  <code>Declaracion_Jurada_Zoraida_Coa.docx</code> (05/2026) &middot;
  <code>Constancia VOLUNTAD POPULAR (Angel-Rafael-Emily) 08-11-2019.docx</code> &middot;
  <code>2022-06-06 DISCHARGE REPORT - PMG Treatment Completion.pdf</code> (obtenido 14/09/2026)</p>
  <p><b>Este documento es una ayuda de memoria sobre tu propio expediente, no asesoría legal.</b> Los 30 puntos de la sección 1, la denuncia del CICPC y sobre todo el efecto de los antecedentes penales sobre tu asilo deben revisarse con un abogado antes de la entrevista. <b>La sección 1 es la que hay que entregarle.</b></p>
  <p>Versión 4 &mdash; 11 de septiembre de 2026. La versión 1 (3 de septiembre de 2026) está en <code>_backup_2026-09-11</code>.</p>
</div>

</div>
</body>
</html>
`;
