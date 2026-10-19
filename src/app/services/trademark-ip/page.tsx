import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { FAQS_DATA } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Trademark & Intellectual Property Services — Search, Filing & Protection",
  description:
    "Protect your brand name, logo, and slogans in India. Trademark search, TM-A electronic registration, examination report replies, and trademark renewals under Trade Marks Act.",
};

export default function TrademarkIPPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "trademark-ip")!;
  const faqs = FAQS_DATA.filter((f) => f.category === "Trademark & IP");

  return <CategoryHubTemplate category={category} categoryFaqs={faqs} />;
}
