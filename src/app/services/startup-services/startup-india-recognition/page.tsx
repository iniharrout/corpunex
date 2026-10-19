import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Startup India DPIIT Recognition Assistance — Tax Holidays & Benefits",
  description:
    "End-to-end guidance for obtaining DPIIT Startup India recognition: Section 80-IAC tax holiday eligibility, angel tax exemption, patent fee rebates, and pitch narrative structuring.",
};

export default function StartupIndiaRecognitionPage() {
  const service = SERVICE_DETAILS["startup-india-recognition"];
  return <ServiceDetailTemplate service={service} />;
}
