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
