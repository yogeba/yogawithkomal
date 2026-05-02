import { SITE } from "@/lib/data";

export default function CourseLd({
  name,
  description,
  city,
}: {
  name: string;
  description: string;
  city?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: SITE.name,
      sameAs: SITE.url,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: city && city !== "Online" ? "Onsite" : "Online",
      location: city
        ? {
            "@type": "Place",
            name: city,
            address: {
              "@type": "PostalAddress",
              addressLocality: city,
              addressCountry: SITE.country,
            },
          }
        : undefined,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
