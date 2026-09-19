import { NextResponse, type NextRequest } from "next/server";
import { requireAdminEmail } from "@/lib/adminAuth";
import { getAgentCall } from "@/lib/saasHubCalls";

export async function GET(req: NextRequest, ctx: RouteContext<"/api/admin/agent-calls/[callId]">) {
  try {
    await requireAdminEmail(req);
  } catch {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { callId } = await ctx.params;
  const call = await getAgentCall(callId);
  if (!call) return NextResponse.json({ error: "not_found" }, { status: 404 });
  return NextResponse.json({ call });
}
