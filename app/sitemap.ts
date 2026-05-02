import type { MetadataRoute } from "next";
import { SITE, CLASSES, CITIES, SEO_LANDINGS } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  entries.push({
    url: `${SITE.url}/`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 1,
  });

  for (const l of SEO_LANDINGS) {
    entries.push({
      url: `${SITE.url}/${l.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const c of CLASSES) {
    for (const city of CITIES) {
      entries.push({
        url: `${SITE.url}/yoga/${c.slug}/${city.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
