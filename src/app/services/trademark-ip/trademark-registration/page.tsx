import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Trademark Registration in India — Brand Name, Logo Protection & TM Filing",
  description:
    "Protect your brand name and logo across India: comprehensive trademark search, class identification (1 to 45), TM-A filing, immediate ™ symbol rights, and ® certificate issuance.",
};

export default function TrademarkRegistrationPage() {
  const service = SERVICE_DETAILS["trademark-registration"];
  return <ServiceDetailTemplate service={service} />;
}
