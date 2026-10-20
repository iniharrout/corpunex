import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { gstRegistration } from "@/content/services/gst-registration";

export const metadata: Metadata = {
  title: gstRegistration.metaTitle,
  description: gstRegistration.metaDescription,
  alternates: { canonical: gstRegistration.path },
};

export default function GstRegistrationPage() {
  return <ServicePage content={gstRegistration} />;
}
