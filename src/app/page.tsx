import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Paths from "@/components/home/Paths";
import HowItWorks from "@/components/home/HowItWorks";
import EntityPicker from "@/components/home/EntityPicker";
import PricingSection from "@/components/home/PricingSection";
import Benefits from "@/components/home/Benefits";
import TalkToUs from "@/components/home/TalkToUs";
import ForeignFounders from "@/components/home/ForeignFounders";
import Guides from "@/components/home/Guides";
import FaqContact from "@/components/home/FaqContact";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/components/shared/FaqList";
import { homeFaqs } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Corpunex — Start your company in India, the easy way" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <Paths />
      <HowItWorks />
      <EntityPicker />
      <PricingSection />
      <Benefits />
      <TalkToUs />
      <ForeignFounders />
      <Guides />
      <FaqContact />
    </>
  );
}
