import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Annual ROC Compliance for Private Limited Companies & LLPs",
  description:
    "Statutory Ministry of Corporate Affairs compliance: Form AOC-4, MGT-7, DIR-3 KYC, board resolutions, and AGM documentation to avoid director disqualification and penalties.",
};

export default function AnnualROCCompliancePage() {
  const service = SERVICE_DETAILS["annual-roc-compliance"];
  return <ServiceDetailTemplate service={service} />;
}
