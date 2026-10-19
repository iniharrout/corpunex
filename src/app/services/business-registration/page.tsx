import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { FAQS_DATA } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Business Registration Services in India — Pvt Ltd, LLP, OPC & Proprietorship",
  description:
    "End-to-end guidance for company incorporation in India: Private Limited Company, Limited Liability Partnership (LLP), One Person Company (OPC), Partnership Firm, and Sole Proprietorship.",
};

export default function BusinessRegistrationPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "business-registration")!;
  const faqs = FAQS_DATA.filter((f) => f.category === "Company Incorporation");

  return <CategoryHubTemplate category={category} categoryFaqs={faqs} />;
}
