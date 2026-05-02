import { SITE, IG_URL } from "@/lib/data";

export default function LocalBusinessLd({ city }: { city?: string }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${SITE.url}#yogawithkomal`,
    name: SITE.name,
    image: `${SITE.url}/img/home-to-yourself.jpg`,
    url: SITE.url,
    description: SITE.description,
    sameAs: [IG_URL],
    address: {
      "@type": "PostalAddress",
      addressLocality: city || SITE.baseCity,
      addressRegion: SITE.region,
      addressCountry: SITE.country,
    },
    areaServed: ["IN", "Worldwide (online)"],
    priceRange: "₹₹",
    knowsAbout: [
      "Hatha Yoga",
      "Vinyasa Yoga",
      "Yoga Nidra",
      "Yin Yoga",
      "Pranayama",
      "Somatic Movement",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
