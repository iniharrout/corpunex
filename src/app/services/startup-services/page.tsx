import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { FAQS_DATA } from "@/data/faqData";

export const metadata: Metadata = {
  title: "Startup Registration & Support — Startup India, Startup Odisha & MSME",
  description:
    "Consulting assistance for DPIIT Startup India recognition, Startup Odisha grants and sustenance allowances, Udyam MSME registration, and startup documentation.",
};

export default function StartupServicesPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "startup-services")!;
  const faqs = FAQS_DATA.filter((f) => f.category === "Startup India & Odisha");

  return <CategoryHubTemplate category={category} categoryFaqs={faqs} />;
}
