import { NextResponse, type NextRequest } from "next/server";
import { geolocation, ipAddress } from "@vercel/functions";
import { addDoc, collection, getDocs, limit, query, serverTimestamp, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { resolveChipTarget, type NfcChipType } from "@/lib/nfcTypes";

// Fallback si el código no existe o el chip está desactivado — manda a la
// página del servicio en vez de un 404 desnudo (mejor experiencia para
// quien escaneó un chip físico real).
const FALLBACK_URL = "https://technocrazy.org/nfc";

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function renderPage(title: string, body: string): NextResponse {
  const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(title)} · TechnoCrazy</title>
<style>
  :root{color-scheme:dark}
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;
    background:radial-gradient(circle at 50% 0%,#0d1330 0%,#05050f 55%);
    font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:#fff}
  .card{max-width:420px;width:100%;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.1);
    border-radius:20px;padding:32px}
  h1{font-size:20px;margin:0 0 16px}
  .row{display:flex;justify-content:space-between;align-items:center;gap:12px;padding:14px 16px;
    background:rgba(255,255,255,0.04);border-radius:12px;margin-bottom:12px}
  .row span:first-child{color:rgba(255,255,255,0.5);font-size:12px}
  .row span:last-child{font-weight:700;font-size:15px;word-break:break-all}
  button{background:linear-gradient(135deg,#2979ff,#7c4dff);color:#fff;border:none;border-radius:10px;
    padding:8px 14px;font-size:12px;font-weight:700;cursor:pointer;flex-shrink:0}
  p{color:rgba(255,255,255,0.7);line-height:1.6;font-size:15px;white-space:pre-wrap}
  .note{color:rgba(255,255,255,0.35);font-size:12px;margin-top:16px}
</style></head><body><div class="card">${body}</div></body></html>`;
  return new NextResponse(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function GET(request: NextRequest, ctx: RouteContext<"/c/[code]">) {
  const { code } = await ctx.params;

  const snap = await getDocs(
    query(collection(db, "nfcChips"), where("code", "==", code), limit(1))
  );

  if (snap.empty) {
    return NextResponse.redirect(FALLBACK_URL);
  }

  const chipDoc = snap.docs[0];
  const chip = chipDoc.data() as { type?: NfcChipType; fields?: Record<string, string>; destinationUrl?: string; active?: boolean };

  if (!chip.active) {
    return NextResponse.redirect(FALLBACK_URL);
  }

  const geo = geolocation(request);

  try {
    await addDoc(collection(db, "nfcChips", chipDoc.id, "scans"), {
      timestamp: serverTimestamp(),
      ip: ipAddress(request) || "",
      userAgent: request.headers.get("user-agent") || "",
      referrer: request.headers.get("referer") || "",
      country: geo.country || "",
      city: geo.city || "",
      region: geo.countryRegion || "",
    });
  } catch {
    // Un fallo al registrar el escaneo nunca debe impedir la respuesta.
  }

  const type = chip.type || "url";
  const fields = chip.fields || (chip.destinationUrl ? { url: chip.destinationUrl } : {});
  const target = resolveChipTarget(type, fields);

  if (target.kind === "redirect") {
    if (!target.url) return NextResponse.redirect(FALLBACK_URL);
    return NextResponse.redirect(target.url, { status: 307 });
  }

  if (target.kind === "vcard") {
    return new NextResponse(target.vcard, {
      status: 200,
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
        "Content-Disposition": `attachment; filename="${target.filename}"`,
      },
    });
  }

  if (target.title.startsWith("Red WiFi")) {
    const { ssid, password } = JSON.parse(target.body) as { ssid: string; password: string };
    return renderPage(
      target.title,
      `<h1>Conéctate a esta red WiFi</h1>
      <div class="row"><span>RED (SSID)</span><span>${escapeHtml(ssid)}</span></div>
      ${password ? `<div class="row"><span>CONTRASEÑA</span><span>${escapeHtml(password)}</span></div>` : ""}
      <p class="note">Copia estos datos y conéctate manualmente desde los ajustes WiFi de tu teléfono — ningún navegador puede conectarte automáticamente por seguridad.</p>`
    );
  }

  return renderPage(target.title, `<h1>${escapeHtml(target.title)}</h1><p>${escapeHtml(target.body)}</p>`);
}

export const dynamic = "force-dynamic";
