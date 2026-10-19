import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "One Person Company (OPC) Registration — Solo Founder Company Setup",
  description:
    "Consulting guide for One Person Company (OPC) incorporation in India: nominee director rules, MCA SPICe+ filing, benefits, eligibility, and timelines.",
};

export default function OnePersonCompanyPage() {
  const service = SERVICE_DETAILS["one-person-company"];
  return <ServiceDetailTemplate service={service} />;
}
