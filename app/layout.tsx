import type { Metadata } from "next";
import "./globals.css";
import Reveal from "@/components/Reveal";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import LocalBusinessLd from "@/components/jsonld/LocalBusiness";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} · A somatic approach to movement · Online & in Siliguri`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "yoga with komal",
    "yoga in siliguri",
    "yoga for women siliguri",
    "women yoga teacher siliguri",
    "online yoga india",
    "yoga for beginners",
    "yoga nidra",
    "yin yoga",
    "hatha vinyasa",
    "private yoga 1:1",
    "yoga near me",
    "somatic yoga",
    "embodied movement",
    "release and realize",
  ],
  openGraph: {
    type: "website",
    siteName: SITE.name,
    url: SITE.url,
    title: `${SITE.name} · Move with awareness, come back home to yourself`,
    description:
      "A somatic approach to movement. Embodied Hatha-Vinyasa, online & in Siliguri.",
    images: [{ url: "/img/home-to-yourself.jpg", width: 1200, height: 1500 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght,SOFT@0,9..144,300..600,30..100;1,9..144,300..600,30..100&family=Inter+Tight:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LocalBusinessLd />
        <Nav />
        <main>{children}</main>
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
