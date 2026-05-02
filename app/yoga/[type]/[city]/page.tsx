import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CLASSES, CITIES } from "@/lib/data";
import { loadDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import SeoLanding from "@/components/SeoLanding";

export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { type: string; city: string }[] = [];
  for (const c of CLASSES) {
    for (const city of CITIES) {
      params.push({ type: c.slug, city: city.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string; city: string }>;
}): Promise<Metadata> {
  const { type, city } = await params;
  const klass = CLASSES.find((c) => c.slug === type);
  const cityRec = CITIES.find((c) => c.slug === city);
  if (!klass || !cityRec) return {};

  const inLocation = cityRec.isOnline
    ? "online"
    : `in ${cityRec.name}`;

  const title = `${klass.seoH1 || klass.name} ${inLocation} · Yoga with Komal`;
  const description = cityRec.isOnline
    ? `${klass.name} online with Komal, live and recorded for replay. ${klass.desc}`
    : `${klass.name} in ${cityRec.name}, online or with travel to Siliguri. ${klass.desc}`;

  return pageMetadata({
    title,
    description,
    path: `/yoga/${type}/${city}`,
  });
}

export default async function MatrixPage({
  params,
}: {
  params: Promise<{ type: string; city: string }>;
}) {
  const { type, city } = await params;
  const klass = CLASSES.find((c) => c.slug === type);
  const cityRec = CITIES.find((c) => c.slug === city);
  if (!klass || !cityRec) notFound();

  const inLocation = cityRec!.isOnline ? "online" : `in ${cityRec!.name}`;
  const h1 = `${klass!.seoH1 || klass!.name} ${inLocation}`;

  const description = cityRec!.isOnline
    ? `${klass!.name} online with Komal. Live and recorded for replay, joinable from anywhere. ${klass!.desc}`
    : `${klass!.name} for students in ${cityRec!.name}. Online live + recorded, or travel a short distance to Siliguri for in-person sessions. ${klass!.desc}`;

  /* Try a class-specific or class+city MDX, fall back to class-only */
  const doc =
    loadDoc("matrix", `${type}--${city}`) ||
    loadDoc("matrix", `${type}--default`);

  /* Compose default body if no MDX */
  const body =
    doc?.body ||
    [
      `## What ${klass!.name} is`,
      "",
      klass!.desc,
      "",
      `### Why ${cityRec!.isOnline ? "online" : cityRec!.name}`,
      "",
      cityRec!.blurb,
      "",
      `### How to begin`,
      "",
      cityRec!.isOnline
        ? `Group classes run live online with a recorded replay sent the same day. 1:1 sessions are scheduled to fit your week. Tap 'Join via WhatsApp' and we'll find a time.`
        : `Practice live online from ${cityRec!.name}, or come down to Siliguri for offline group classes and 1:1 sessions. Tap 'Join via WhatsApp' and we'll find a time.`,
      "",
      `### Good for`,
      "",
      ...klass!.good.map((g) => `- ${g}`),
    ].join("\n");

  /* Related links */
  const related: { href: string; label: string }[] = [];
  CLASSES.filter((c) => c.slug !== type)
    .slice(0, 5)
    .forEach((c) =>
      related.push({
        href: `/yoga/${c.slug}/${city}`,
        label: `${c.name} ${cityRec!.isOnline ? "online" : `in ${cityRec!.name}`}`,
      })
    );
  CITIES.filter((c) => c.slug !== city)
    .slice(0, 5)
    .forEach((c) =>
      related.push({
        href: `/yoga/${type}/${c.slug}`,
        label: `${klass!.name} ${c.isOnline ? "online" : `in ${c.name}`}`,
      })
    );

  return (
    <SeoLanding
      h1={h1}
      kicker={`${klass!.name} · ${cityRec!.isOnline ? "Online" : cityRec!.name}`}
      description={description}
      body={body}
      classSlug={type}
      citySlug={city}
      related={related}
    />
  );
}
