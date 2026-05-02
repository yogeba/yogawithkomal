import type { Metadata } from "next";
import { SITE } from "./data";

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const url = `${SITE.url}${opts.path}`;
  const image = opts.ogImage || "/img/home-to-yourself.jpg";
  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: opts.path },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      type: "website",
      images: [{ url: image, width: 1200, height: 1500, alt: opts.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [image],
    },
  };
}
