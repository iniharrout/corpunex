import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "NGO & Non-Profit Entity Registration — Section 8 Company, Trust & Society",
  description:
    "Consulting assistance for establishing charitable non-profits: Section 8 Company incorporation under Companies Act, Public Charitable Trust, and Society registration in India.",
};

export default function NGOEntityRegistrationPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "ngo-entity-registration")!;

  return <CategoryHubTemplate category={category} />;
}
