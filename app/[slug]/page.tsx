import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SEO_LANDINGS, CLASSES, CITIES } from "@/lib/data";
import { loadDoc } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import SeoLanding from "@/components/SeoLanding";

export const dynamicParams = false;

export async function generateStaticParams() {
  return SEO_LANDINGS.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const landing = SEO_LANDINGS.find((l) => l.slug === slug);
  if (!landing) return {};
  return pageMetadata({
    title: landing.title,
    description: landing.description,
    path: `/${slug}`,
  });
}

export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const landing = SEO_LANDINGS.find((l) => l.slug === slug);
  if (!landing) notFound();

  const doc = loadDoc("seo", slug);

  /* Suggest related landings + relevant matrix pages */
  const related: { href: string; label: string }[] = [];

  if (landing.classSlug) {
    CITIES.slice(0, 6).forEach((city) => {
      related.push({
        href: `/yoga/${landing.classSlug}/${city.slug}`,
        label: `${
          CLASSES.find((c) => c.slug === landing.classSlug)?.name
        } in ${city.name}`,
      });
    });
  }

  if (landing.citySlug) {
    CLASSES.forEach((c) => {
      related.push({
        href: `/yoga/${c.slug}/${landing.citySlug}`,
        label: `${c.name} in ${
          CITIES.find((ci) => ci.slug === landing.citySlug)?.name
        }`,
      });
    });
  }

  /* Add a couple of cross-promo links to other landings */
  SEO_LANDINGS.filter((l) => l.slug !== slug)
    .slice(0, 4)
    .forEach((l) =>
      related.push({ href: `/${l.slug}`, label: l.h1 })
    );

  return (
    <SeoLanding
      h1={landing.h1}
      description={landing.description}
      body={doc?.body}
      classSlug={landing.classSlug}
      citySlug={landing.citySlug}
      related={related}
    />
  );
}
