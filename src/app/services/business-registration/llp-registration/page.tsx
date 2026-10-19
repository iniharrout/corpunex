import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "LLP Registration in India — Limited Liability Partnership Process & Fees",
  description:
    "End-to-end consulting for registering a Limited Liability Partnership (LLP) in India: FiLLiP filing, LLP Agreement Form 3 drafting, partner eligibility, and stamp duty notes.",
};

export default function LLPRegistrationPage() {
  const service = SERVICE_DETAILS["llp-registration"];
  return <ServiceDetailTemplate service={service} />;
}
