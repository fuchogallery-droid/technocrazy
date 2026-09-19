/**
 * Lee (solo lectura) el historial de llamadas del agente de voz de TechnoCrazy,
 * que vive en el proyecto Firebase `saas-hub-restaurant` (plataforma SaaS Hub),
 * no en `technocrazy-admin`. Vía REST — igual que firestore-rest.ts de
 * saas-hub-web, evita el bug gRPC "16 UNAUTHENTICATED" del SDK firebase-admin
 * en el runtime serverless de Vercel.
 */
import { createSign } from "crypto";

const PROJECT_ID = process.env.SAASHUB_FIREBASE_PROJECT_ID || "";
const BUSINESS_ID = process.env.SAASHUB_BUSINESS_ID || "";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;
const OAUTH_URL = "https://oauth2.googleapis.com/token";

type FsVal =
  | { stringValue: string }
  | { integerValue: string }
  | { doubleValue: number }
  | { booleanValue: boolean }
  | { nullValue: null }
  | { arrayValue: { values?: FsVal[] } }
  | { mapValue: { fields?: Record<string, FsVal> } };

function decodeVal(v: FsVal): unknown {
  if ("stringValue" in v) return v.stringValue;
  if ("integerValue" in v) return parseInt(v.integerValue, 10);
  if ("doubleValue" in v) return v.doubleValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("nullValue" in v) return null;
  if ("arrayValue" in v) return (v.arrayValue.values || []).map(decodeVal);
  if ("mapValue" in v) {
    const r: Record<string, unknown> = {};
    for (const [k, w] of Object.entries(v.mapValue.fields || {})) r[k] = decodeVal(w);
    return r;
  }
  return null;
}

function decodeFields(fields: Record<string, FsVal> | undefined): Record<string, any> {
  const result: Record<string, any> = {};
  for (const [k, v] of Object.entries(fields || {})) result[k] = decodeVal(v);
  return result;
}

let cachedToken: { value: string; expiresAt: number } | null = null;

async function serviceToken(): Promise<string> {
  if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value;

  const email = (process.env.SAASHUB_FIREBASE_CLIENT_EMAIL || "").trim();
  const rawKey = (process.env.SAASHUB_FIREBASE_PRIVATE_KEY || "").trim();
  if (!email || !rawKey) throw new Error("Falta SAASHUB_FIREBASE_CLIENT_EMAIL o SAASHUB_FIREBASE_PRIVATE_KEY");
  const key = rawKey.replace(/\\n/g, "\n").trim();
  const now = Math.floor(Date.now() / 1000);

  const b64u = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const hdr = b64u({ alg: "RS256", typ: "JWT" });
  const pay = b64u({
    iss: email,
    aud: OAUTH_URL,
    iat: now,
    exp: now + 3600,
    scope: "https://www.googleapis.com/auth/datastore",
  });

  const signer = createSign("RSA-SHA256");
  signer.update(`${hdr}.${pay}`);
  const sig = signer.sign(key, "base64url");

  const res = await fetch(OAUTH_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${hdr}.${pay}.${sig}`,
    }).toString(),
  });
  const data = (await res.json()) as { access_token?: string; error?: string; error_description?: string };
  if (!data.access_token) throw new Error(`saasHub serviceToken: ${data.error} — ${data.error_description}`);

  cachedToken = { value: data.access_token, expiresAt: (now + 3400) * 1000 };
  return data.access_token;
}

export interface AgentCallSummary {
  id: string;
  fromNumber: string;
  startedAt: number;
  endedAt: number | null;
  status: string;
  escalated: boolean;
  resultingOrderId: string | null;
  resultingReservationId: string | null;
  summary: string | null;
  turns: number;
}

function toSummary(id: string, f: Record<string, any>): AgentCallSummary {
  return {
    id,
    fromNumber: f.fromNumber ?? "",
    startedAt: f.startedAt ?? 0,
    endedAt: f.endedAt ?? null,
    status: f.status ?? "unknown",
    escalated: !!f.escalated,
    resultingOrderId: f.resultingOrderId ?? null,
    resultingReservationId: f.resultingReservationId ?? null,
    summary: f.summary ?? null,
    turns: Array.isArray(f.transcript) ? f.transcript.length : 0,
  };
}

export async function listAgentCalls(limit = 50): Promise<AgentCallSummary[]> {
  const tok = await serviceToken();
  const res = await fetch(`${BASE}/businesses/${BUSINESS_ID}:runQuery`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${tok}` },
    body: JSON.stringify({
      structuredQuery: {
        from: [{ collectionId: "calls" }],
        orderBy: [{ field: { fieldPath: "startedAt" }, direction: "DESCENDING" }],
        limit,
      },
    }),
  });
  if (!res.ok) throw new Error(`listAgentCalls: ${res.status} ${await res.text()}`);

  const data = (await res.json()) as Array<{ document?: { name: string; fields: Record<string, FsVal> } }>;
  return data
    .filter((d) => d.document?.fields)
    .map((d) => toSummary(d.document!.name.split("/").pop()!, decodeFields(d.document!.fields)));
}

export interface AgentCallDetail extends AgentCallSummary {
  transcript: { role: "user" | "assistant"; text: string; ts: number }[];
}

export async function getAgentCall(callId: string): Promise<AgentCallDetail | null> {
  const tok = await serviceToken();
  const res = await fetch(`${BASE}/businesses/${BUSINESS_ID}/calls/${callId}`, {
    headers: { Authorization: `Bearer ${tok}` },
  });
  if (!res.ok) return null;
  const data = (await res.json()) as { fields?: Record<string, FsVal> };
  if (!data.fields) return null;
  const f = decodeFields(data.fields);
  return { ...toSummary(callId, f), transcript: Array.isArray(f.transcript) ? f.transcript : [] };
}
