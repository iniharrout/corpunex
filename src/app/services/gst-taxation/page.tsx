import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { FAQS_DATA } from "@/data/faqData";

export const metadata: Metadata = {
  title: "GST and Direct Taxation Services — GST Registration, Filings & ITR",
  description:
    "Comprehensive tax compliance support: New GST registration, monthly GSTR-1 & GSTR-3B filings, corporate Income Tax Return (ITR) filings, TDS returns, and professional tax advisory.",
};

export default function GSTTaxationPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "gst-taxation")!;
  const faqs = FAQS_DATA.filter((f) => f.category === "GST & Taxation");

  return <CategoryHubTemplate category={category} categoryFaqs={faqs} />;
}
