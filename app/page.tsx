import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Practice from "@/components/Practice";
import Ways from "@/components/Ways";
import Offerings from "@/components/Offerings";
import Reviews from "@/components/Reviews";
import Quote from "@/components/Quote";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import FAQPageLd from "@/components/jsonld/FAQPage";
import VideoObjectLd from "@/components/jsonld/VideoObject";
import { FAQS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <FAQPageLd items={FAQS} />
      <VideoObjectLd
        name="Move with awareness · A glimpse of the practice"
        description="A short look into Yoga with Komal: slow Hatha-Vinyasa, breath, and quiet attention. Practiced together, indoors and outdoors in Siliguri."
        contentPath="/video/herovideo.mp4"
        thumbnailPath="/img/bring-awareness.jpg"
        uploadDate="2026-05-03"
        duration="PT1M7S"
      />
      <VideoObjectLd
        name="What this is · A movement practice you feel from within"
        description="Komal guides a movement practice rooted in feeling, sensing, and listening to the body from within. Embodied Hatha-Vinyasa, online and in Siliguri."
        contentPath="/video/whatthisis.mp4"
        thumbnailPath="/img/home-to-yourself.jpg"
        uploadDate="2026-05-03"
        duration="PT44S"
      />
      <Hero />
      <Marquee />
      <Practice />
      <Ways />
      <Offerings />
      <Reviews />
      <Quote />
      <Instagram />
      <FAQ />
      <CTA />
    </>
  );
}
