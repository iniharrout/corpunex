import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "FSSAI Food Safety Licence & Registration — 14-Digit FoSCoS Permit",
  description:
    "Consulting assistance for food business operators: Basic registration, State licence, and Central licence under FSS Act for restaurants, cloud kitchens, food processors, and delivery partners.",
};

export default function FSSAILicencePage() {
  const service = SERVICE_DETAILS["fssai-licence"];
  return <ServiceDetailTemplate service={service} />;
}
