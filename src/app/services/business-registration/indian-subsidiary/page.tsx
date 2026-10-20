import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { indianSubsidiary } from "@/content/services/indian-subsidiary";

export const metadata: Metadata = {
  title: indianSubsidiary.metaTitle,
  description: indianSubsidiary.metaDescription,
  alternates: { canonical: indianSubsidiary.path },
};

export default function IndianSubsidiaryPage() {
  return <ServicePage content={indianSubsidiary} />;
}
