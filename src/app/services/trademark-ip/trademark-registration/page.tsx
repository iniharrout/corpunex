import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { trademarkRegistration } from "@/content/services/trademark-registration";

export const metadata: Metadata = {
  title: trademarkRegistration.metaTitle,
  description: trademarkRegistration.metaDescription,
  alternates: { canonical: trademarkRegistration.path },
};

export default function TrademarkRegistrationPage() {
  return <ServicePage content={trademarkRegistration} />;
}
