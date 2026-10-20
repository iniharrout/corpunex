import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { startupIndia } from "@/content/services/startup-india-recognition";

export const metadata: Metadata = {
  title: startupIndia.metaTitle,
  description: startupIndia.metaDescription,
  alternates: { canonical: startupIndia.path },
};

export default function StartupIndiaRecognitionPage() {
  return <ServicePage content={startupIndia} />;
}
