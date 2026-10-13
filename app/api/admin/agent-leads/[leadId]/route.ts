import { NextResponse, type NextRequest } from "next/server";
import { requireAdminEmail } from "@/lib/adminAuth";
import { updateAgentLead } from "@/lib/saasHubCalls";

export async function PATCH(req: NextRequest, ctx: RouteContext<"/api/admin/agent-leads/[leadId]">) {
  try {
    await requireAdminEmail(req);
  } catch {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { leadId } = await ctx.params;
  try {
    const body = (await req.json()) as { status?: string; notes?: string };
    const ok = await updateAgentLead(leadId, { status: body.status, notes: body.notes });
    if (!ok) return NextResponse.json({ error: "not_found" }, { status: 404 });
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || "unknown" }, { status: 400 });
  }
}
