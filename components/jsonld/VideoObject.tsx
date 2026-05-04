import { SITE } from "@/lib/data";

type Props = {
  name: string;
  description: string;
  contentPath: string;
  thumbnailPath: string;
  uploadDate: string;
  duration: string;
};

export default function VideoObjectLd({
  name,
  description,
  contentPath,
  thumbnailPath,
  uploadDate,
  duration,
}: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name,
    description,
    thumbnailUrl: [`${SITE.url}${thumbnailPath}`],
    uploadDate,
    duration,
    contentUrl: `${SITE.url}${contentPath}`,
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE.url}/icon.svg`,
      },
    },
    inLanguage: "en",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
