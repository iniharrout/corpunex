import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { gstReturnFiling } from "@/content/services/gst-return-filing";

export const metadata: Metadata = {
  title: gstReturnFiling.metaTitle,
  description: gstReturnFiling.metaDescription,
  alternates: { canonical: gstReturnFiling.path },
};

export default function GstReturnFilingPage() {
  return <ServicePage content={gstReturnFiling} />;
}
