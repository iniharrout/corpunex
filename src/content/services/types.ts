import type { EntityType } from "@/lib/fees";
import type { Faq } from "@/components/shared/FaqList";

/** Content contract for the service page template. One file per service. */
export interface ServicePageContent {
  path: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumb: { label: string; href: string }[];
  headline: string;
  lead: string;
  /** Drives the fee summary and estimator when the service is an incorporation. */
  entity?: EntityType;
  forWho: string[];
  notFor: { text: string; href: string; linkLabel: string }[];
  included: string[];
  excluded: string[];
  documents: { document: string; from: string; note?: string }[];
  milestones: { when: string; title: string; detail: string }[];
  process: { title: string; you: string; us: string }[];
  afterwards?: { deadline: string; task: string; form: string }[];
  faqs: Faq[];
  related: { label: string; href: string; description: string }[];
}
