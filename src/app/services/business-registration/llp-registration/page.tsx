import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { llp } from "@/content/services/llp";

export const metadata: Metadata = {
  title: llp.metaTitle,
  description: llp.metaDescription,
  alternates: { canonical: llp.path },
};

export default function LLPRegistrationPage() {
  return <ServicePage content={llp} />;
}
