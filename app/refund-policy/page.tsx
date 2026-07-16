import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Refund Policy",
  description: `Refund policy for ${SITE.name}.`,
  path: "/refund-policy",
});

export default function RefundPolicyPage() {
  return (
    <section className="section" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <div className="wrap">
        <article
          className="prose prose-lg reveal"
          style={{ maxWidth: 760, fontFamily: '"Inter Tight", sans-serif' }}
        >
          <h1>Refund Policy</h1>
          <p>Last updated: 2026-07-16</p>

          <h2>Monthly memberships</h2>
          <p>
            You can cancel a recurring membership at any time, and
            cancellation stops the next renewal. We don&rsquo;t refund the
            current billing period once it&rsquo;s started, since your
            spot in that period&rsquo;s classes has already been held. If
            you haven&rsquo;t attended a single class in your first
            billing period, message us within 7 days of your first charge
            and we&rsquo;ll refund it in full.
          </p>

          <h2>1:1 sessions</h2>
          <p>
            A 1:1 session can be rescheduled or refunded if you cancel at
            least 24 hours before the scheduled time. Cancellations inside
            24 hours aren&rsquo;t refundable, but we&rsquo;ll always try to
            find another slot that week if something comes up.
          </p>

          <h2>Founding-cohort pricing</h2>
          <p>
            Founding-cohort pricing is locked to your account for as long
            as your membership stays active without a lapse. If you cancel
            and rejoin later, the founding price isn&rsquo;t guaranteed to
            still be available.
          </p>

          <h2>AI-assisted form reviews</h2>
          <p>
            Form reviews included in a membership don&rsquo;t carry a
            separate refund value; if a review wasn&rsquo;t useful, tell
            us and we&rsquo;ll make it right, either with another review or
            with a credit toward your next billing period.
          </p>

          <h2>How to request a refund</h2>
          <p>
            Message us via WhatsApp or Instagram with your name and the
            charge you&rsquo;re asking about. We aim to respond within 48
            hours.
          </p>
        </article>
      </div>
    </section>
  );
}
