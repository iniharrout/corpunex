import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Income Tax Return (ITR) Filing for Companies & LLPs — CA Coordinated",
  description:
    "Statutory direct tax return filing for Private Limited Companies, LLPs, and business entities in India: ledger reconciliation, 26AS/AIS review, computation, and CA-verified filing.",
};

export default function IncomeTaxFilingPage() {
  const service = SERVICE_DETAILS["income-tax-filing"];
  return <ServiceDetailTemplate service={service} />;
}
