import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Private Limited Company Registration in India — Process, Documents & Fees",
  description:
    "Complete consulting guide to incorporating a Private Limited Company in India: MCA SPICe+ filing, name approval, eligibility, required documents, government stamp duty, and deliverables.",
};

export default function PrivateLimitedCompanyPage() {
  const service = SERVICE_DETAILS["private-limited-company"];
  return <ServiceDetailTemplate service={service} />;
}
