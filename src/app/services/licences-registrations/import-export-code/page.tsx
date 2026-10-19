import React from "react";
import { Metadata } from "next";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { SERVICE_DETAILS } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Import Export Code (IEC) Registration — DGFT 10-Character Licence",
  description:
    "Facilitation for obtaining DGFT Import Export Code (IEC): required documents, bank validation, customs clearance readiness, and annual e-IEC revalidation guidance.",
};

export default function ImportExportCodePage() {
  const service = SERVICE_DETAILS["import-export-code"];
  return <ServiceDetailTemplate service={service} />;
}
