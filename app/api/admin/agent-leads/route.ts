import { NextResponse } from "next/server";
import { requireAdminEmail } from "@/lib/adminAuth";
import { listAgentLeads } from "@/lib/saasHubCalls";

export async function GET(req: Request) {
  try {
    await requireAdminEmail(req);
  } catch {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  try {
    const leads = await listAgentLeads(100);
    return NextResponse.json({ leads });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "unknown" }, { status: 500 });
  }
}
