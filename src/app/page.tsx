import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import Journey from "@/components/home/Journey";
import PricingSection from "@/components/home/PricingSection";
import Differentiators from "@/components/home/Differentiators";
import CaseStudies from "@/components/home/CaseStudies";
import Team from "@/components/home/Team";
import ForeignFounders from "@/components/home/ForeignFounders";
import Guides from "@/components/home/Guides";
import FaqContact from "@/components/home/FaqContact";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/components/shared/FaqList";
import { homeFaqs } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Corpunex — Company registration, tax and compliance for founders in India" },
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <Journey />
      <PricingSection />
      <Differentiators />
      <CaseStudies />
      <Team />
      <ForeignFounders />
      <Guides />
      <FaqContact />
    </>
  );
}
