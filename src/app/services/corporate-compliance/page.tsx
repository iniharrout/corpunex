import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { FAQS_DATA } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Corporate Compliance Services — Annual ROC Filings & Secretarial Governance",
  description:
    "Statutory Ministry of Corporate Affairs compliance for Private Limited Companies and LLPs: Form AOC-4, Form MGT-7, Form 11, Form 8, and annual DIR-3 KYC.",
};

export default function CorporateCompliancePage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "corporate-compliance")!;
  const faqs = FAQS_DATA.filter((f) => f.category === "Corporate Compliance");

  return <CategoryHubTemplate category={category} categoryFaqs={faqs} />;
}
