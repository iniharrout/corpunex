import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Business Licences and Registrations — FSSAI, IEC, Shops & Est., PT",
  description:
    "Consulting assistance for mandatory operating licences: FSSAI food safety licence, Import Export Code (IEC), municipal Shops and Establishments, Trade Licences, and EPFO/ESIC.",
};

export default function LicencesRegistrationsPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "licences-registrations")!;

  return <CategoryHubTemplate category={category} />;
}
