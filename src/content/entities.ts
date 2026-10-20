import type { EntityType } from "@/lib/fees";

export interface Tier {
  entity: EntityType;
  name: string;
  bestFor: string;
  href: string;
  included: string[];
  excluded: string[];
}

const commonIncluded = [
  "Checking your company name is available",
  "Reserving the name with the government",
  "Preparing all registration documents",
  "Filing, checked and certified by a CA or CS",
  "PAN and TAN for the entity",
  "A calendar of your first-year deadlines",
];

const commonExcluded = [
  "Government fees and stamp duty",
  "Digital signatures",
  "Attesting documents signed outside India",
];

export const incorporationTiers: Tier[] = [
  {
    entity: "pvt",
    name: "Private Limited",
    bestFor: "Founders who plan to raise equity, issue ESOPs or sign enterprise contracts.",
    href: "/services/business-registration/private-limited-company",
    included: [
      ...commonIncluded.slice(0, 2),
      "Director ID (DIN) for up to 3 directors",
      "Company rulebook (MoA and AoA) written by our advocates",
      "PAN, TAN, PF, ESIC and a bank account application, filed together",
      ...commonIncluded.slice(5),
    ],
    excluded: [...commonExcluded, "Auditor's fee and yearly filings"],
  },
  {
    entity: "llp",
    name: "LLP",
    bestFor: "Professional firms and partnerships that want limited liability with lighter compliance.",
    href: "/services/business-registration/llp-registration",
    included: [
      ...commonIncluded.slice(0, 2),
      "Partner IDs (DIN) for up to 2 partners",
      "The LLP registration form",
      "Your LLP agreement, written and filed",
      ...commonIncluded.slice(4),
    ],
    excluded: [...commonExcluded, "Yearly LLP filings (Form 8 and Form 11)"],
  },
  {
    entity: "opc",
    name: "One Person Company",
    bestFor: "Solo founders who want a company with limited liability and full ownership.",
    href: "/services/business-registration/one-person-company",
    included: [
      ...commonIncluded.slice(0, 2),
      "Director ID (DIN)",
      "Company rulebook (MoA and AoA) and your nominee's consent",
      "PAN, TAN and a bank account application, filed together",
      ...commonIncluded.slice(4),
    ],
    excluded: [...commonExcluded, "Auditor's fee and yearly filings"],
  },
];

/** Rows for the full-width comparison table. */
export const comparisonRows: { label: string; values: Record<EntityType, string> }[] = [
  { label: "Minimum people", values: { pvt: "2 directors, 2 shareholders", llp: "2 designated partners", opc: "1 director, 1 nominee" } },
  { label: "Resident in India requirement", values: { pvt: "At least 1 director", llp: "At least 1 designated partner", opc: "Director resident in India; member an Indian citizen" } },
  { label: "Can raise equity from investors", values: { pvt: "Yes", llp: "No (partners contribute capital)", opc: "No, convert to Pvt Ltd first" } },
  { label: "ESOPs", values: { pvt: "Yes", llp: "No", opc: "No" } },
  { label: "Statutory audit", values: { pvt: "Always", llp: "Above ₹40 lakh turnover or ₹25 lakh contribution", opc: "Always" } },
  { label: "Main annual ROC filings", values: { pvt: "AOC-4, MGT-7A or MGT-7", llp: "Form 8, Form 11", opc: "AOC-4, MGT-7A" } },
];
