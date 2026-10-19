import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Legal Documentation & Business Contracts — Founders' Agreements & NDAs",
  description:
    "Tailored commercial legal contracts: Non-Disclosure Agreements (NDAs), Founders' Agreements, Shareholders' Agreements (SHA), Employment Agreements, and website privacy policies.",
};

export default function LegalDocumentationPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "legal-documentation")!;

  return <CategoryHubTemplate category={category} />;
}
