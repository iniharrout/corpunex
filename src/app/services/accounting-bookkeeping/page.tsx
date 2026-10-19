import React from "react";
import { Metadata } from "next";
import CategoryHubTemplate from "@/components/CategoryHubTemplate";
import { SERVICE_CATEGORIES } from "@/data/servicesData";

export const metadata: Metadata = {
  title: "Accounting & Bookkeeping Services — Financial Statements, Payroll & MIS",
  description:
    "Professional cloud accounting, journal entries, GST 2B reconciliation, payroll management, financial reporting, and statutory audit coordination in India.",
};

export default function AccountingBookkeepingPage() {
  const category = SERVICE_CATEGORIES.find((c) => c.slug === "accounting-bookkeeping")!;

  return <CategoryHubTemplate category={category} />;
}
