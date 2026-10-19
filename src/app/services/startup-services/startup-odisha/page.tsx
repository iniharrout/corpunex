import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Startup Odisha Programme Assistance — Sustenance Allowance & Grants",
  description:
    "Regional consulting for startups in Odisha: Registration under Odisha Startup Policy, monthly sustenance allowance (₹20,000/mo), product development grants (up to ₹16 Lakhs), and O-Hub incubation.",
};

export default function StartupOdishaPage() {
  const service = SERVICE_DETAILS["startup-odisha"];
  return <ServiceDetailTemplate service={service} />;
}
