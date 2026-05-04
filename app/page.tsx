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
import { FAQS } from "@/lib/data";

export default function Home() {
  return (
    <>
      <FAQPageLd items={FAQS} />
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
