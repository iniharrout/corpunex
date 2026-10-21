import { timeline } from "@/config/site";
import type { Faq } from "@/components/shared/FaqList";

/** Homepage copy, written for someone starting their first company. */

/** Add real client or partner logos here. The row is hidden while empty. */
export const clientLogos: { name: string; src: string; width: number; height: number }[] = [];

export type Tone = "sky" | "mint" | "sun" | "peach";

export const paths: {
  title: string;
  body: string;
  href: string;
  cta: string;
  tone: Tone;
  icon: "rocket" | "receipt" | "badge" | "globe";
}[] = [
  {
    title: "I'm starting a new business",
    body: "We'll help you pick the right type of company and register it, start to finish.",
    href: "/services/business-registration/private-limited-company",
    cta: "Register a company",
    tone: "sky",
    icon: "rocket",
  },
  {
    title: "I already have a company",
    body: "GST returns, accounts and yearly filings, handled on time so you don't pay penalties.",
    href: "/services/corporate-compliance/annual-roc-compliance",
    cta: "Stay compliant",
    tone: "mint",
    icon: "receipt",
  },
  {
    title: "I want Startup India recognition",
    body: "Get recognised by DPIIT and get ready for the paperwork investors will ask for.",
    href: "/services/startup-services/startup-india-recognition",
    cta: "Get recognised",
    tone: "sun",
    icon: "badge",
  },
  {
    title: "I'm a founder outside India",
    body: "Set up an Indian company or subsidiary, including the extra steps for foreign founders.",
    href: "/services/business-registration/indian-subsidiary",
    cta: "Set up in India",
    tone: "peach",
    icon: "globe",
  },
];

export const steps = [
  {
    title: "Tell us about your business",
    body: "Fill a short form or request a call. We'll suggest the right setup and send you a clear quote.",
  },
  {
    title: "Share your documents",
    body: "Upload PAN, Aadhaar and an address proof. We check everything and tell you if anything's missing.",
  },
  {
    title: "We file, you get your company",
    body: `Our CAs and CSs prepare and file everything. You get your certificate, PAN and TAN, usually in ${timeline.short}.`,
  },
];

export const benefits = [
  {
    title: "Prices you can see upfront",
    body: "Government fees and our fee are shown on separate lines before you pay anything. No surprises later.",
    icon: "receipt" as const,
    tone: "sky" as Tone,
  },
  {
    title: "Done by qualified professionals",
    body: "Your filings are prepared and certified by Chartered Accountants, Company Secretaries and advocates.",
    icon: "shield" as const,
    tone: "mint" as Tone,
  },
  {
    title: "Explained in plain language",
    body: "No jargon. We tell you what each step means, what we need from you, and why.",
    icon: "chat" as const,
    tone: "sun" as Tone,
  },
  {
    title: "Reminders for every deadline",
    body: "Every company we register gets a calendar of its first-year filings, so nothing is missed.",
    icon: "calendar" as const,
    tone: "peach" as Tone,
  },
];

/** The setup path for founders and companies based outside India. */
export const foreignSetupSteps = [
  {
    title: "Choose your structure",
    body: "Most overseas founders and companies set up a Private Limited company, often as a wholly owned subsidiary. In most sectors you can own 100% of it.",
  },
  {
    title: "Prepare documents abroad",
    body: "Passports, address proofs and board resolutions signed outside India need to be notarised and apostilled. We send you a checklist and check each one.",
  },
  {
    title: "Register the company",
    body: "We file everything with the government. At least one director needs to have lived in India for 182 days or more in the last financial year.",
  },
  {
    title: "Bring in your investment",
    body: "Once the bank account is open and your money arrives, the investment has to be reported to the RBI. We take care of the form.",
  },
];

export const homeFaqs: Faq[] = [
  {
    question: "Which type of company should I choose?",
    answer:
      "If you plan to raise money from investors, choose a Private Limited company. If you're running a firm with partners and want fewer filings, an LLP works well. If you're on your own, a One Person Company gives you limited liability without needing a co-founder. Not sure? Request a call back and we'll help you decide.",
  },
  {
    question: "How long does it take to register a company?",
    answer: `${timeline.sentence} ${timeline.delays}`,
  },
  {
    question: "How much does it cost?",
    answer:
      "It depends on the type of company, your state and the number of directors. Request a call back or send us a message and we'll send you a free, itemised quote, with government fees and our fee shown separately, before you pay anything.",
  },
  {
    question: "Do I need an office to register a company?",
    answer:
      "No. You can use your home address. You'll need a recent electricity or water bill for it and a short letter of permission from the owner.",
  },
  {
    question: "What documents do I need?",
    answer:
      "For each director: PAN card, Aadhaar or passport, a recent bank statement or utility bill, and a photo. For the office: a recent utility bill and the owner's permission letter.",
  },
  {
    question: "What happens after my company is registered?",
    answer:
      "You open a bank account, appoint an auditor within 30 days and file a short declaration within 180 days. After that there are yearly filings. We send you a calendar with every date, and we can handle them for you.",
  },
];

export interface TrustPillar {
  id: string;
  badge: string;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
  icon: "shield" | "clock" | "receipt" | "award";
  tone: Tone;
}

export const trustPillars: TrustPillar[] = [
  {
    id: "licensed-professionals",
    badge: "Qualified Experts",
    title: "100% CA & CS Certified Filings",
    description: "Every SPICe+ form, MOA, and AOA is prepared and certified by practicing Chartered Accountants and Company Secretaries.",
    stat: "100%",
    statLabel: "CA / CS Verified",
    icon: "shield",
    tone: "mint",
  },
  {
    id: "speed-sla",
    badge: "Turnaround SLA",
    title: "7–10 Days Average Timeline",
    description: "Rapid MCA name reservation, same-day Digital Signatures (DSC), and instant DIN allocation with proactive follow-up.",
    stat: "7–10",
    statLabel: "Working Days",
    icon: "clock",
    tone: "peach",
  },
  {
    id: "transparent-fees",
    badge: "Zero Hidden Markups",
    title: "Transparent Itemised Quotes",
    description: "Government filing fees, stamp duties, and professional charges are itemised line by line before you pay a single rupee.",
    stat: "₹0",
    statLabel: "Hidden Charges",
    icon: "receipt",
    tone: "sky",
  },
  {
    id: "starter-kit",
    badge: "Founder Onboarding",
    title: "Complete Startup Kit Included",
    description: "Certificate of Incorporation, PAN, TAN, Bank Account Resolution, and 1st-Year Compliance Calendar delivered together.",
    stat: "5-in-1",
    statLabel: "Launch Package",
    icon: "award",
    tone: "sun",
  },
];

export interface FounderTool {
  id: string;
  title: string;
  badge: string;
  description: string;
  href: string;
  ctaText: string;
  tone: Tone;
  icon: "searchDoc" | "calculator" | "calendar" | "rocket";
}

export const founderTools: FounderTool[] = [
  {
    id: "company-name-search",
    title: "Company name & trademark check",
    badge: "MCA Rule 8 & Trademarks",
    description: "Check MCA Rule 8 compliance, prohibited regulatory keywords, and Nice trademark classes before submitting RUN.",
    href: "/tools/company-name-search",
    ctaText: "Check name availability",
    tone: "sky",
    icon: "searchDoc",
  },
  {
    id: "gst-calculator",
    title: "GST & threshold calculator",
    badge: "Tax Calculator",
    description: "Calculate CGST, SGST, IGST splits across 5%, 12%, 18%, and 28% slabs and verify mandatory ₹20L/₹40L registration thresholds.",
    href: "/tools/gst-calculator",
    ctaText: "Calculate GST split",
    tone: "mint",
    icon: "calculator",
  },
  {
    id: "compliance-calendar",
    title: "Statutory compliance calendar",
    badge: "Due Dates & Penalities",
    description: "Never miss an ROC, GST, or TDS due date. Full statutory calendar with MCA late fee and penalty calculators.",
    href: "/compliance-calendar",
    ctaText: "View compliance dates",
    tone: "peach",
    icon: "calendar",
  },
  {
    id: "company-type-finder",
    title: "Company type finder",
    badge: "Entity Quiz",
    description: "Answer three quick questions on funding goals, co-founders, and liability to find whether Pvt Ltd, LLP, or OPC fits you best.",
    href: "/tools/company-type-finder",
    ctaText: "Find my entity type",
    tone: "sun",
    icon: "rocket",
  },
];

export interface TemplateShowcaseItem {
  id: string;
  title: string;
  category: string;
  description: string;
  href: string;
  ctaText: string;
  tone: Tone;
  icon: "people" | "shieldBadge" | "certificate" | "legalDocument";
}

export const templateShowcaseItems: TemplateShowcaseItem[] = [
  {
    id: "co-founder-agreement",
    title: "Co-Founder Agreement",
    category: "Founders & Equity",
    description: "Equity splits, 4-year reverse vesting with 1-year cliff, decision rights, and intellectual property assignment before incorporating.",
    href: "/templates",
    ctaText: "View agreement",
    tone: "sky",
    icon: "people",
  },
  {
    id: "mutual-nda",
    title: "Mutual NDA (Confidentiality)",
    category: "Legal & IP Protection",
    description: "Two-way non-disclosure agreement to safeguard confidential code, pitch decks, client lists, and technical architectures.",
    href: "/templates",
    ctaText: "View NDA template",
    tone: "mint",
    icon: "shieldBadge",
  },
  {
    id: "offer-letter-ip",
    title: "Offer Letter & IP Assignment",
    category: "Hiring & Talent",
    description: "Employment appointment letter specifying probation, notice period, compensation, and work-for-hire IP assignment.",
    href: "/templates",
    ctaText: "View offer letter",
    tone: "sun",
    icon: "certificate",
  },
  {
    id: "bank-resolution",
    title: "Board Resolution for Bank Account",
    category: "Corporate Governance",
    description: "Statutory board resolution required by banks to open a company current account and authorise director signatories.",
    href: "/templates",
    ctaText: "View resolution",
    tone: "peach",
    icon: "legalDocument",
  },
];


