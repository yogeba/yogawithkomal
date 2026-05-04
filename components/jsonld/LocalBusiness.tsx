import { SITE, IG_URL } from "@/lib/data";
import { getPlaceData } from "@/lib/google-places";

export default async function LocalBusinessLd({ city }: { city?: string }) {
  const place = await getPlaceData();

  const data: Record<string, unknown> = {
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
      streetAddress: SITE.streetAddress,
      addressLocality: city || SITE.baseCity,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: SITE.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.lat,
      longitude: SITE.lng,
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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: place.rating,
      reviewCount: place.totalReviews,
      bestRating: 5,
      worstRating: 1,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
