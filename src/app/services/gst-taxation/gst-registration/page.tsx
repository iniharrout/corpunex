import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "GST Registration Assistance in India — 15-Digit GSTIN & Compliance",
  description:
    "Consulting guidance for Goods & Services Tax (GST) registration: turnover thresholds, mandatory inter-state rules, required documents, Aadhaar authentication, and GSTR compliance.",
};

export default function GSTRegistrationPage() {
  const service = SERVICE_DETAILS["gst-registration"];
  return <ServiceDetailTemplate service={service} />;
}
