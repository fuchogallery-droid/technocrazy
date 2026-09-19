import { NextResponse } from "next/server";
import { requireAdminEmail } from "@/lib/adminAuth";
import { listAgentCalls } from "@/lib/saasHubCalls";

export async function GET(req: Request) {
  try {
    await requireAdminEmail(req);
  } catch {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const calls = await listAgentCalls(50);
    return NextResponse.json({ calls });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "unknown" }, { status: 500 });
  }
}
