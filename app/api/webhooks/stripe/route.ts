import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("stripe-signature");
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    return NextResponse.json(
      { error: "Webhook isn't configured yet." },
      { status: 500 }
    );
  }

  const body = await req.text();
  const stripe = getStripe();

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    // Fulfillment hook. No database yet — the access page itself verifies
    // payment directly via the Stripe session, so this is where a future
    // mailing-list add or receipt email would go, not a hard requirement
    // for delivering the course today.
  }

  return NextResponse.json({ received: true });
}
