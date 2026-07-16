import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of service for ${SITE.name}.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="section" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <div className="wrap">
        <article
          className="prose prose-lg reveal"
          style={{ maxWidth: 760, fontFamily: '"Inter Tight", sans-serif' }}
        >
          <h1>Terms of Service</h1>
          <p>Last updated: 2026-07-16</p>

          <h2>Who we are</h2>
          <p>
            {SITE.name} is a yoga practice run by Komal, operating from{" "}
            {SITE.baseCity}, {SITE.region}, {SITE.country}. These terms
            apply to all classes, sessions, and memberships booked through{" "}
            {SITE.url}, whether paid in INR, USD, or another currency.
          </p>

          <h2>Not medical advice</h2>
          <p>
            Nothing taught in a class, session, or AI-assisted form review
            is medical advice, diagnosis, or treatment. Classes are a
            supportive movement practice alongside your own care team, not
            a replacement for a doctor, midwife, or physiotherapist.
            Wherever a class or program mentions a specific health
            condition, pregnancy, or postpartum recovery, clearance from
            your own qualified provider is a condition of participating,
            not a suggestion.
          </p>

          <h2>Live classes</h2>
          <p>
            Live classes run at the scheduled time over the stated
            platform (Zoom or equivalent). Class size limits, where
            stated, are enforced to keep sessions workable; a spot in a
            capped class is confirmed only once payment is received.
          </p>

          <h2>AI-assisted form review</h2>
          <p>
            Where offered, the form review is a two-step process: an
            automated pose-analysis pass drafts notes on a video clip you
            submit, and Komal reviews those notes before anything is sent
            back to you. It is not real-time correction during a live
            class unless a specific offering says otherwise, and it is
            never sent to you unreviewed.
          </p>

          <h2>Memberships and payments</h2>
          <p>
            Recurring memberships renew automatically at the stated price
            until cancelled. Founding-cohort or introductory pricing, where
            offered, applies only to the number of spots stated and is
            locked to that account for as long as the membership stays
            active without a lapse. You can cancel a recurring membership
            at any time; cancellation stops future renewals and does not
            retroactively refund the current billing period.
          </p>

          <h2>Conduct</h2>
          <p>
            Recordings, notes, or class content are for your own personal
            use. Please don&rsquo;t redistribute or resell any class
            recording, AI-review notes, or program materials.
          </p>

          <h2>Changes</h2>
          <p>
            These terms may be updated from time to time; the version
            posted at {SITE.url}/terms is the one in effect. Continued use
            of a membership after a change means you accept the updated
            terms.
          </p>

          <h2>Contact</h2>
          <p>Questions about these terms can be sent via WhatsApp or Instagram, linked in the footer.</p>
        </article>
      </div>
    </section>
  );
}
