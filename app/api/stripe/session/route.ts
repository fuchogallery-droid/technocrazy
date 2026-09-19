import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET(request: Request) {
  const sessionId = new URL(request.url).searchParams.get("session_id");
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!sessionId || !secretKey) {
    return NextResponse.json({ error: "Falta información." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  return NextResponse.json({
    paid: session.payment_status === "paid",
    productName: session.line_items?.data?.[0]?.description || "",
    amountTotal: session.amount_total,
  });
}
