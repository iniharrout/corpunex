import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { soleProprietorship } from "@/content/services/sole-proprietorship";

export const metadata: Metadata = {
  title: soleProprietorship.metaTitle,
  description: soleProprietorship.metaDescription,
  alternates: { canonical: soleProprietorship.path },
};

export default function SoleProprietorshipPage() {
  return <ServicePage content={soleProprietorship} />;
}
