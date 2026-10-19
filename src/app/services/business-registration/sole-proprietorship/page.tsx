import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Sole Proprietorship Setup Assistance in India — Udyam, GST & Bank Account",
  description:
    "How to establish an individual sole proprietorship business in India: Udyam MSME certificate, GST registration, municipal shop act, and current bank account opening kit.",
};

export default function SoleProprietorshipPage() {
  const service = SERVICE_DETAILS["sole-proprietorship"];
  return <ServiceDetailTemplate service={service} />;
}
