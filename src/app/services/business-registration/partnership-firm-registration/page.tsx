import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { partnershipFirm } from "@/content/services/partnership-firm";

export const metadata: Metadata = {
  title: partnershipFirm.metaTitle,
  description: partnershipFirm.metaDescription,
  alternates: { canonical: partnershipFirm.path },
};

export default function PartnershipFirmPage() {
  return <ServicePage content={partnershipFirm} />;
}
