import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { CHAIR_YOGA_COURSE, SITE } from "@/lib/data";

export async function POST(req: NextRequest) {
  const { bundle } = await req.json().catch(() => ({ bundle: false }));

  const priceId = bundle
    ? CHAIR_YOGA_COURSE.priceIdBundle
    : CHAIR_YOGA_COURSE.priceIdCourseOnly;

  if (!priceId) {
    return NextResponse.json(
      { error: "Checkout isn't configured yet — missing Stripe price ID." },
      { status: 500 }
    );
  }

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${SITE.url}/${CHAIR_YOGA_COURSE.slug}/access?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${SITE.url}/${CHAIR_YOGA_COURSE.slug}`,
  });

  return NextResponse.json({ url: session.url });
}
