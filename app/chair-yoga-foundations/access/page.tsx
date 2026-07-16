import Link from "next/link";
import { getStripe } from "@/lib/stripe";
import { CHAIR_YOGA_COURSE, waLink } from "@/lib/data";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export const dynamic = "force-dynamic";

async function getSession(sessionId: string | undefined) {
  if (!sessionId) return null;
  try {
    const stripe = getStripe();
    return await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return null;
  }
}

export default async function AccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const session = await getSession(session_id);
  const paid = session?.payment_status === "paid";

  return (
    <section className="section" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <div className="wrap">
        <div className="reveal" style={{ maxWidth: 720 }}>
          {paid ? (
            <>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                You&rsquo;re in
              </div>
              <h1
                className="display"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 24 }}
              >
                Welcome to {CHAIR_YOGA_COURSE.name}
              </h1>
              <p style={{ fontSize: 16, color: "#4A4138", marginBottom: 32, lineHeight: 1.7 }}>
                A receipt is on its way to your email. The four modules
                below are yours whenever you&rsquo;re ready, no rush.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(43,38,32,0.12)" }}>
                {CHAIR_YOGA_COURSE.modules.map((m) => (
                  <div
                    key={m.n}
                    style={{
                      display: "flex",
                      gap: 20,
                      padding: "24px 0",
                      borderBottom: "1px solid rgba(43,38,32,0.12)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 13,
                        color: "#C97B5A",
                        paddingTop: 4,
                      }}
                    >
                      {String(m.n).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="h-serif" style={{ fontSize: "clamp(20px, 2vw, 24px)" }}>
                        {m.h}
                      </h2>
                      <p style={{ marginTop: 8, fontSize: 15, color: "#4A4138" }}>
                        {m.p}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: 32, fontSize: 14, color: "#7A6F62" }}>
                Video for each module is on its way. If a module link
                isn&rsquo;t live yet when you check, message on WhatsApp and
                we&rsquo;ll sort it out directly.
              </p>
              <a
                href={waLink("Hi Komal, I just joined Chair Yoga Foundations and have a question.")}
                target="_blank"
                rel="noopener"
                className="btn btn-wa"
                style={{ marginTop: 24 }}
              >
                <WhatsAppIcon />
                Message Komal
              </a>
            </>
          ) : (
            <>
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                Payment not confirmed
              </div>
              <h1 className="display" style={{ fontSize: "clamp(32px, 4.5vw, 56px)", marginBottom: 24 }}>
                We couldn&rsquo;t confirm this purchase
              </h1>
              <p style={{ fontSize: 16, color: "#4A4138", marginBottom: 24 }}>
                If you just paid, this can take a moment to sync, try
                refreshing. If it still doesn&rsquo;t show, message on
                WhatsApp with your receipt and we&rsquo;ll get you access
                directly.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={waLink("Hi Komal, my Chair Yoga Foundations purchase isn't showing as confirmed.")}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-wa"
                >
                  <WhatsAppIcon />
                  Message Komal
                </a>
                <Link href={`/${CHAIR_YOGA_COURSE.slug}`} className="btn btn-ghost">
                  Back to the course
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
