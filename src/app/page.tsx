import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ClientLogos from "@/components/home/ClientLogos";
import HowItWorks from "@/components/home/HowItWorks";
import EntityPicker from "@/components/home/EntityPicker";
import Benefits from "@/components/home/Benefits";
import TalkToUs from "@/components/home/TalkToUs";
import ForeignFounders from "@/components/home/ForeignFounders";
import Guides from "@/components/home/Guides";
import Faq from "@/components/home/Faq";
import ContactSection from "@/components/home/ContactSection";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/components/shared/FaqList";
import { homeFaqs } from "@/content/home";

export const metadata: Metadata = {
  title: { absolute: "Company Registration Online in India | Corpunex" },
  description:
    "Register your Private Limited company, LLP or OPC online, get GST and stay compliant every year. Filings prepared by CAs and CSs, with a free itemised quote.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <Hero />
      <ClientLogos />
      <HowItWorks />
      <EntityPicker />
      <Benefits />
      <TalkToUs />
      <ForeignFounders />
      <Guides />
      <Faq />
      <ContactSection />
    </>
  );
}
