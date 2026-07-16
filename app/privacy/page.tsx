import type { Metadata } from "next";
import { SITE } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="section" style={{ paddingTop: 140, paddingBottom: 100 }}>
      <div className="wrap">
        <article
          className="prose prose-lg reveal"
          style={{ maxWidth: 760, fontFamily: '"Inter Tight", sans-serif' }}
        >
          <h1>Privacy Policy</h1>
          <p>Last updated: 2026-07-16</p>

          <h2>What we collect</h2>
          <p>
            When you message us on WhatsApp or Instagram, book a class, or
            sign up for a membership, we collect what you give us
            directly: your name, contact details, and anything you choose
            to share about your practice, your health, or your reason for
            joining (for example, that you&rsquo;re pregnant, postpartum,
            or working with a specific condition).
          </p>
          <p>
            If you use an AI-assisted form review, we also collect the
            video clip you submit and the notes generated from it.
          </p>

          <h2>Health-related information</h2>
          <p>
            Anything you share about a health condition, pregnancy, or
            recovery is treated as sensitive information. We only use it
            to adapt your classes and sessions, we don&rsquo;t sell it,
            and we ask for your explicit, separate consent before
            collecting it on any intake form, rather than bundling it into
            a general agreement. You can ask us to delete this information
            at any time.
          </p>

          <h2>Payments</h2>
          <p>
            Payments are processed by a third-party payment provider (for
            example Stripe or Paddle). We don&rsquo;t store your full card
            details ourselves; the payment provider handles that under
            its own privacy and security terms.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We keep booking and membership records for as long as your
            account is active, plus a reasonable period after for
            accounting purposes. Video clips submitted for form review are
            kept only as long as needed to give you the review, unless you
            ask us to keep them longer for your own progress tracking.
          </p>

          <h2>Your rights</h2>
          <p>
            You can ask, at any time, to see what we hold about you, to
            correct it, or to have it deleted. If you&rsquo;re in the EU,
            UK, or a similar jurisdiction, this includes the rights given
            to you under GDPR or the equivalent local law. Message us via
            WhatsApp or Instagram to make a request.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this policy can be sent via WhatsApp or
            Instagram, linked in the footer. {SITE.name} operates from{" "}
            {SITE.baseCity}, {SITE.region}, {SITE.country}.
          </p>
        </article>
      </div>
    </section>
  );
}
