import { PROFESSIONAL_FEE, type EntityType } from "@/lib/fees";
import type { Faq } from "@/components/shared/FaqList";

export interface Tier {
  entity: EntityType;
  name: string;
  bestFor: string;
  price: number;
  href: string;
  included: string[];
  excluded: string[];
}

const commonIncluded = [
  "Name search against MCA and trademark records",
  "Name reservation filing",
  "Drafting of constitutional documents",
  "Incorporation filing, certified by a CA or CS",
  "PAN and TAN for the entity",
  "First-year compliance calendar",
];

const commonExcluded = [
  "Government fees and stamp duty",
  "Digital signatures (about ₹1,000 each)",
  "Notarisation or apostille of foreign documents",
];

export const incorporationTiers: Tier[] = [
  {
    entity: "pvt",
    name: "Private Limited",
    bestFor: "Founders who plan to raise equity, issue ESOPs or sign enterprise contracts.",
    price: PROFESSIONAL_FEE.pvt,
    href: "/services/business-registration/private-limited-company",
    included: [
      ...commonIncluded.slice(0, 2),
      "DIN for up to 3 directors",
      "MoA and AoA drafted by our advocates",
      "SPICe+ filing with AGILE-PRO-S: PAN, TAN, EPFO, ESIC and bank account application",
      ...commonIncluded.slice(5),
    ],
    excluded: [...commonExcluded, "Auditor's fee and annual ROC filings"],
  },
  {
    entity: "llp",
    name: "LLP",
    bestFor: "Professional firms and partnerships that want limited liability with lighter compliance.",
    price: PROFESSIONAL_FEE.llp,
    href: "/services/business-registration/llp-registration",
    included: [
      ...commonIncluded.slice(0, 2),
      "DIN for up to 2 designated partners",
      "FiLLiP incorporation filing",
      "LLP agreement drafted and filed on Form 3",
      ...commonIncluded.slice(4),
    ],
    excluded: [...commonExcluded, "Annual Form 8 and Form 11 filings"],
  },
  {
    entity: "opc",
    name: "One Person Company",
    bestFor: "Solo founders who want a company with limited liability and full ownership.",
    price: PROFESSIONAL_FEE.opc,
    href: "/services/business-registration/one-person-company",
    included: [
      ...commonIncluded.slice(0, 2),
      "DIN for the director",
      "MoA and AoA, with nominee consent (INC-3)",
      "SPICe+ filing with AGILE-PRO-S",
      ...commonIncluded.slice(4),
    ],
    excluded: [...commonExcluded, "Auditor's fee and annual ROC filings"],
  },
];

/** Rows for the full-width comparison table. */
export const comparisonRows: { label: string; values: Record<EntityType, string> }[] = [
  { label: "Minimum people", values: { pvt: "2 directors, 2 shareholders", llp: "2 designated partners", opc: "1 director, 1 nominee" } },
  { label: "Resident in India requirement", values: { pvt: "At least 1 director", llp: "At least 1 designated partner", opc: "Director resident in India; member an Indian citizen" } },
  { label: "Can raise equity from investors", values: { pvt: "Yes", llp: "No (partners contribute capital)", opc: "No, convert to Pvt Ltd first" } },
  { label: "ESOPs", values: { pvt: "Yes", llp: "No", opc: "No" } },
  { label: "Eligible for Startup India (DPIIT)", values: { pvt: "Yes", llp: "Yes", opc: "[VERIFY: OPC eligibility]" } },
  { label: "Statutory audit", values: { pvt: "Always", llp: "Above ₹40 lakh turnover or ₹25 lakh contribution", opc: "Always" } },
  { label: "Main annual ROC filings", values: { pvt: "AOC-4, MGT-7A or MGT-7", llp: "Form 8, Form 11", opc: "AOC-4, MGT-7A" } },
];

export interface PriceListItem {
  service: string;
  scope: string;
  /** Professional fee in rupees; null until confirmed. */
  price: number | null;
  unit: string;
  href: string;
}

export const ongoingServices: { group: string; items: PriceListItem[] }[] = [
  {
    group: "Run",
    items: [
      { service: "GST registration", scope: "Application, clarifications, certificate", price: null, unit: "one-time", href: "/services/gst-taxation/gst-registration" },
      { service: "GST returns", scope: "GSTR-1 and GSTR-3B, input tax reconciliation", price: null, unit: "per month", href: "/services/gst-taxation" },
      { service: "Accounting and bookkeeping", scope: "Monthly books, bank reconciliation, TDS working", price: null, unit: "per month", href: "/services/accounting-bookkeeping" },
      { service: "Annual ROC compliance", scope: "AOC-4, MGT-7/7A, DIR-3 KYC, board and AGM minutes", price: null, unit: "per year", href: "/services/corporate-compliance/annual-roc-compliance" },
      { service: "Company income tax return", scope: "ITR-6 with computation", price: null, unit: "per year", href: "/services/gst-taxation/income-tax-filing" },
    ],
  },
  {
    group: "Raise",
    items: [
      { service: "Startup India (DPIIT) recognition", scope: "Application, pitch summary, follow-up on queries", price: null, unit: "one-time", href: "/services/startup-services/startup-india-recognition" },
      { service: "Investor readiness", scope: "Cap table, data room, due diligence checklist", price: null, unit: "per engagement", href: "/contact" },
      { service: "Virtual CFO", scope: "Monthly MIS, board reporting, investor updates", price: null, unit: "per month", href: "/contact" },
    ],
  },
  {
    group: "Protect",
    items: [
      { service: "Trademark application", scope: "Search, filing in one class, status tracking", price: null, unit: "per class", href: "/services/trademark-ip/trademark-registration" },
    ],
  },
];

export const neverIncluded = [
  "Government fees, stamp duty and challans. You pay these at cost and get the official receipt.",
  "Digital signature certificates, issued by a licensed certifying authority.",
  "Notarisation, apostille or consular attestation of documents signed outside India.",
  "Your statutory auditor's fee. The auditor must be independent of us.",
  "Penalties or late fees for filings missed before you engaged us.",
  "Litigation, or representation before a tribunal or court.",
];

export const pricingFaqs: Faq[] = [
  {
    question: "Is GST charged on your fees?",
    answer: "Yes. GST at 18% is added to our professional fee and shown on the invoice. Government fees do not attract GST from us.",
  },
  {
    question: "When do I pay?",
    answer: "[VERIFY: payment terms, e.g. professional fee in full before filing; government fees when the challan is generated]",
  },
  {
    question: "What if the MCA rejects my company name?",
    answer: "[VERIFY: whether resubmission is included in the fee, and how many attempts]",
  },
  {
    question: "Can I get a refund?",
    answer: "Refunds depend on how far the work has gone and whether government fees have been paid. The refund policy sets out each case.",
  },
  {
    question: "Why do your prices start lower than some and higher than others?",
    answer: "Prices that look very low often leave out stamp duty, digital signatures or the CA certification. Ours list those separately so you can compare like for like.",
  },
];
