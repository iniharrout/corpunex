import type { Metadata } from "next";
import ServicePage from "@/components/service/ServicePage";
import { trademarkObjection } from "@/content/services/trademark-objection";

export const metadata: Metadata = {
  title: trademarkObjection.metaTitle,
  description: trademarkObjection.metaDescription,
  alternates: { canonical: trademarkObjection.path },
};

export default function TrademarkObjectionPage() {
  return <ServicePage content={trademarkObjection} />;
}
