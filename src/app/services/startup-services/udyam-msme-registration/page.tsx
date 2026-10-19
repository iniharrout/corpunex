import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Udyam / MSME Registration Assistance — Priority Credit & Legal Payment Rights",
  description:
    "Official Ministry of MSME Udyam registration guidance: classification criteria, delayed payment recovery under MSMED Act, and collateral-free bank loan eligibility.",
};

export default function UdyamMSMERegistrationPage() {
  const service = SERVICE_DETAILS["udyam-msme-registration"];
  return <ServiceDetailTemplate service={service} />;
}
