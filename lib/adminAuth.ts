/**
 * Verifica un ID token de Firebase Auth (proyecto technocrazy-admin) contra la
 * REST API de Identity Toolkit — sin necesitar un service account propio para
 * este proyecto (solo la API key pública ya usada por el cliente).
 */
const ADMIN_EMAILS = new Set(["rafaelpixel3004@gmail.com", "fuchogallery@gmail.com"]);

export async function requireAdminEmail(req: Request): Promise<string> {
  const authHeader = req.headers.get("authorization") || "";
  const idToken = authHeader.replace(/^Bearer\s+/i, "").trim();
  if (!idToken) throw new Error("unauthorized");

  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  const res = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${apiKey}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken }),
  });
  if (!res.ok) throw new Error("unauthorized");

  const data = (await res.json()) as { users?: { email?: string }[] };
  const email = data.users?.[0]?.email?.toLowerCase();
  if (!email || !ADMIN_EMAILS.has(email)) throw new Error("unauthorized");
  return email;
}
