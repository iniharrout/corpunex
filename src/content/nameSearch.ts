import type { Faq } from "@/components/shared/FaqList";

export interface RestrictedWordRule {
  word: string;
  regulator: string;
  requirement: string;
}

export const restrictedMcaWords: RestrictedWordRule[] = [
  {
    word: "bank",
    regulator: "Reserve Bank of India (RBI)",
    requirement: "Requires in-principle approval or No-Objection Certificate (NOC) from the RBI under the Banking Regulation Act, 1949.",
  },
  {
    word: "banking",
    regulator: "Reserve Bank of India (RBI)",
    requirement: "Requires license from the RBI. Prohibited for standard tech or trading companies.",
  },
  {
    word: "insurance",
    regulator: "IRDAI",
    requirement: "Requires prior approval from the Insurance Regulatory and Development Authority of India.",
  },
  {
    word: "assurance",
    regulator: "IRDAI",
    requirement: "Requires prior approval from IRDAI. Cannot be used by general commercial entities.",
  },
  {
    word: "mutual fund",
    regulator: "SEBI",
    requirement: "Requires registration with the Securities and Exchange Board of India (SEBI).",
  },
  {
    word: "stock exchange",
    regulator: "SEBI",
    requirement: "Recognised under the Securities Contracts (Regulation) Act, 1956. Strictly prohibited for private companies.",
  },
  {
    word: "asset management",
    regulator: "SEBI",
    requirement: "Allowed only for registered Asset Management Companies (AMCs) or Portfolio Managers registered with SEBI.",
  },
  {
    word: "venture capital",
    regulator: "SEBI",
    requirement: "Requires registration as an Alternative Investment Fund (AIF) with SEBI.",
  },
  {
    word: "national",
    regulator: "Central Government",
    requirement: "Requires Central Government prior approval under the Emblems and Names (Prevention of Improper Use) Act, 1950.",
  },
  {
    word: "federal",
    regulator: "Central Government",
    requirement: "Restricted as it implies state or governmental patronage without statutory sanction.",
  },
  {
    word: "republic",
    regulator: "Central Government",
    requirement: "Prohibited under Emblems and Names Act without special government Gazette notification.",
  },
  {
    word: "chartered",
    regulator: "ICAI / ICSI",
    requirement: "Cannot be used unless established by Royal Charter or special Act of Parliament.",
  },
  {
    word: "trust",
    regulator: "MCA & State Charity Commissioner",
    requirement: "Allowed for Section 8 entities or public charitable trusts; generally disallowed for commercial Pvt Ltd companies.",
  },
];

export interface TrademarkClassInfo {
  classNumber: number;
  type: "Goods" | "Services";
  industry: string;
  shortDescription: string;
  examples: string[];
  isPopularForStartups: boolean;
}

export const startupTrademarkClasses: TrademarkClassInfo[] = [
  {
    classNumber: 9,
    type: "Goods",
    industry: "Tech, Software & Electronics",
    shortDescription: "Computer software, mobile applications, operating software, and downloadable electronic goods.",
    examples: ["Mobile apps", "Downloadable algorithms", "Operating systems", "Smart IoT devices", "Crypto wallets"],
    isPopularForStartups: true,
  },
  {
    classNumber: 42,
    type: "Services",
    industry: "SaaS & Cloud Computing",
    shortDescription: "Software as a Service (SaaS), cloud hosting, IT consulting, platform design, and cybersecurity.",
    examples: ["SaaS web platforms", "Cloud API services", "Custom software engineering", "Data encryption", "UI/UX design"],
    isPopularForStartups: true,
  },
  {
    classNumber: 35,
    type: "Services",
    industry: "E-Commerce & Marketplaces",
    shortDescription: "Online retail store services, digital advertising, commercial marketplace operations, and business management.",
    examples: ["Multi-vendor marketplaces", "D2C online storefronts", "Performance marketing agencies", "B2B directories"],
    isPopularForStartups: true,
  },
  {
    classNumber: 36,
    type: "Services",
    industry: "Fintech & Banking",
    shortDescription: "Financial transactions, payment gateway aggregators, lending platforms, insurance brokerage, and digital wallets.",
    examples: ["Payment gateway apps", "Neo-banking dashboards", "Micro-lending software", "Invoicing finance platforms"],
    isPopularForStartups: true,
  },
  {
    classNumber: 25,
    type: "Goods",
    industry: "Apparel & Fashion (D2C)",
    shortDescription: "Clothing, footwear, headwear, activewear, and fashion accessories.",
    examples: ["Athleisure clothing", "Footwear & sneakers", "Sustainable streetwear", "Caps & headgear"],
    isPopularForStartups: true,
  },
  {
    classNumber: 41,
    type: "Services",
    industry: "EdTech & Education",
    shortDescription: "Online education platforms, training courses, skill certification, digital publishing, and events.",
    examples: ["Coding bootcamps", "E-learning platforms", "Interactive quiz apps", "Webinars & founder conferences"],
    isPopularForStartups: true,
  },
  {
    classNumber: 5,
    type: "Goods",
    industry: "Health, Biotech & Pharma",
    shortDescription: "Pharmaceuticals, nutraceuticals, dietary supplements, Ayurvedic preparations, and medical formulations.",
    examples: ["Herbal supplements", "Protein powders", "Medicated skincare", "Diagnostic test kits"],
    isPopularForStartups: false,
  },
  {
    classNumber: 38,
    type: "Services",
    industry: "Telecommunications & Chat",
    shortDescription: "Communication services, audio/video streaming, chat APIs, and VoIP services.",
    examples: ["In-app live chat APIs", "Video conference platforms", "SMS OTP gateways", "Podcast streaming networks"],
    isPopularForStartups: false,
  },
  {
    classNumber: 39,
    type: "Services",
    industry: "Logistics & Supply Chain",
    shortDescription: "Transport, packaging, courier delivery, warehousing, and freight forwarding.",
    examples: ["Hyperlocal delivery apps", "Cold-chain logistics", "B2B warehousing SaaS", "Fleet management"],
    isPopularForStartups: false,
  },
];

export const nameSearchFaqs: Faq[] = [
  {
    question: "What is the difference between an MCA Company Name and a Trademark?",
    answer:
      "An MCA Company Name (approved via SPICe+ Part A or RUN) registers your business as a legal entity and prevents anyone else in India from incorporating a company or LLP with that identical name. A Trademark (granted by the Trade Marks Registry under the Trade Marks Act, 1999) protects your brand name, logo, or slogan across 45 goods and service classes from commercial infringement, counterfeiting, and imitation. To have complete protection, startups register both.",
  },
  {
    question: "How long is an approved company name valid after MCA approval?",
    answer:
      "When reserving a name for a new company via SPICe+ Part A or RUN, the approved name is reserved for twenty (20) days from the date of approval. If changing the name of an existing company, the reservation is valid for sixty (60) days. Incorporation forms (SPICe+ Part B) must be filed within this window.",
  },
  {
    question: "Why do so many MCA name applications get rejected or sent for resubmission?",
    answer:
      "Over 40% of initial name applications face resubmission notices from the Central Registration Centre (CRC). The top reasons are: (1) name is too generic without a distinctive brand prefix, (2) missing activity word that reflects the company's main business objective, (3) phonetic or visual similarity to an existing company or registered trademark in the same class, and (4) starting with articles like 'A', 'An', or 'The'.",
  },
  {
    question: "What is the RUN form vs. SPICe+ Part A for name reservation?",
    answer:
      "SPICe+ Part A allows you to reserve up to two names simultaneously as part of the unified incorporation filing. It is free when submitted together with the full incorporation package. The RUN (Reserve Unique Name) form is a standalone application that costs ₹1,000 government fee and allows you to test and reserve a name before preparing company constitutions (MOA/AOA).",
  },
  {
    question: "Can I use words like 'International', 'Globe', or 'Industries' in my startup name?",
    answer:
      "Yes, but the MCA enforces capital thresholds under Rule 8 of the Companies (Incorporation) Rules. Words like 'International', 'Global', 'Universal', or 'Continental' typically require a minimum authorized share capital of ₹1 Crore to ₹5 Crores to prevent misleading the public regarding the scale of operations.",
  },
];
