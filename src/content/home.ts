import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import type { Faq } from "@/components/shared/FaqList";

/**
 * Homepage copy. Strings starting with "[" are placeholders and render
 * highlighted until replaced (see PLACEHOLDERS.md).
 */

/** Add real client or partner logos here. The row is hidden while empty. */
export const clientLogos: { name: string; src: string; width: number; height: number }[] = [];

export const journey = [
  {
    step: "Incorporate",
    summary: "Choose the right structure and get your certificate of incorporation, PAN and TAN.",
    links: [
      { label: "Private Limited", href: "/services/business-registration/private-limited-company" },
      { label: "LLP", href: "/services/business-registration/llp-registration" },
      { label: "One Person Company", href: "/services/business-registration/one-person-company" },
      { label: "Indian subsidiary", href: "/services/business-registration" },
    ],
  },
  {
    step: "Comply",
    summary: "GST, bookkeeping, TDS, income tax and the annual ROC filings that keep directors clear of penalties.",
    links: [
      { label: "GST registration and returns", href: "/services/gst-taxation/gst-registration" },
      { label: "Accounting", href: "/services/accounting-bookkeeping" },
      { label: "Income tax returns", href: "/services/gst-taxation/income-tax-filing" },
      { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
    ],
  },
  {
    step: "Raise",
    summary: "Startup India recognition, the 80-IAC application, and the documents investors ask for in due diligence.",
    links: [
      { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition" },
      { label: "Startup Odisha", href: "/services/startup-services/startup-odisha" },
      { label: "Investor readiness", href: "/contact" },
      { label: "Virtual CFO", href: "/contact" },
    ],
  },
  {
    step: "Expand",
    summary: "Trademarks, licences and new registrations as you hire, sell across states or start exporting.",
    links: [
      { label: "Trademark", href: "/services/trademark-ip/trademark-registration" },
      { label: "FSSAI licence", href: "/services/licences-registrations/fssai-licence" },
      { label: "Import Export Code", href: "/services/licences-registrations/import-export-code" },
      { label: "Udyam (MSME)", href: "/services/startup-services/udyam-msme-registration" },
    ],
  },
];

export const differentiators = [
  {
    figure: "3",
    figureCaption: "lines on every quote",
    title: "Every rupee itemised before you start",
    body: "Your quote separates government fees, third-party costs like digital signatures, and our professional fee. Government fees are paid at cost and you get the official receipts.",
  },
  {
    figure: "[VERIFY: n]",
    figureCaption: "qualified professionals",
    title: "Filings signed by people you can look up",
    body: "Your documents are prepared and certified by Chartered Accountants, Company Secretaries and advocates on our team. Their names and membership numbers are listed below.",
  },
  {
    figure: "[VERIFY: n hrs]",
    figureCaption: "typical first reply",
    title: "One advisor who knows your file",
    body: "You get a named advisor for the whole engagement, on email, phone or WhatsApp. You will not be passed between a sales team and an operations team.",
  },
  {
    figure: "Day 1",
    figureCaption: "compliance calendar",
    title: "A dated plan for your first year",
    body: "Every company we incorporate gets a calendar of its first-year filings: auditor appointment within 30 days, the INC-20A declaration within 180 days, then the annual AOC-4 and MGT-7.",
  },
];

export interface CaseStudy {
  company: string;
  founder: string;
  sector: string;
  problem: string;
  work: string;
  result: string;
  photoBrief: string;
}

export const caseStudies: CaseStudy[] = [
  {
    company: "[REAL CLIENT: company name]",
    founder: "[REAL CLIENT: founder name, role]",
    sector: "[REAL CLIENT: sector, city]",
    problem: "[REAL CASE STUDY: the situation the founder was in, in one or two sentences]",
    work: "[REAL CASE STUDY: what Corpunex did, with the filings and dates involved]",
    result: "[REAL CASE STUDY: the measurable outcome, e.g. incorporated in n days, DPIIT recognised, round closed]",
    photoBrief: "Founder of the featured client at their workplace. Landscape, natural light.",
  },
  {
    company: "[REAL CLIENT: company name]",
    founder: "[REAL CLIENT: founder name, role]",
    sector: "[REAL CLIENT: sector, city]",
    problem: "[REAL CASE STUDY: problem]",
    work: "[REAL CASE STUDY: what we did]",
    result: "[REAL CASE STUDY: result]",
    photoBrief: "Second client founder portrait.",
  },
  {
    company: "[REAL CLIENT: company name, ideally a foreign founder]",
    founder: "[REAL CLIENT: founder name, role]",
    sector: "[REAL CLIENT: home country, sector]",
    problem: "[REAL CASE STUDY: problem]",
    work: "[REAL CASE STUDY: what we did]",
    result: "[REAL CASE STUDY: result]",
    photoBrief: "Third client founder portrait.",
  },
];

export interface Advisor {
  name: string;
  role: string;
  credential: string;
  bio: string;
  linkedin: string;
  photoBrief: string;
}

export const advisors: Advisor[] = [
  {
    name: "[REAL NAME]",
    role: "Founder and Managing Director",
    credential: "[VERIFY: qualification]",
    bio: "[REAL BIO: two sentences on experience and the kind of founders they work with]",
    linkedin: "[VERIFY: LinkedIn URL]",
    photoBrief: "Head-and-shoulders portrait, plain wall, same light as the rest of the team.",
  },
  {
    name: "[REAL NAME]",
    role: "Chartered Accountant",
    credential: "ICAI M.No. [VERIFY]",
    bio: "[REAL BIO: tax, GST and accounting experience]",
    linkedin: "[VERIFY: LinkedIn URL]",
    photoBrief: "Portrait of the lead Chartered Accountant.",
  },
  {
    name: "[REAL NAME]",
    role: "Company Secretary",
    credential: "ICSI M.No. [VERIFY]",
    bio: "[REAL BIO: incorporation and ROC compliance experience]",
    linkedin: "[VERIFY: LinkedIn URL]",
    photoBrief: "Portrait of the lead Company Secretary.",
  },
  {
    name: "[REAL NAME]",
    role: "Advocate",
    credential: "Enrolment No. [VERIFY: state bar council and number]",
    bio: "[REAL BIO: agreements, trademarks and FEMA experience]",
    linkedin: "[VERIFY: LinkedIn URL]",
    photoBrief: "Portrait of the lead advocate.",
  },
];

export const foreignFounderPoints = [
  "At least one director must have stayed in India for 182 days or more in the previous financial year.",
  "Most sectors allow 100% foreign ownership under the automatic route. Some need government approval first.",
  "Passports and address proofs signed abroad must be notarised and apostilled, or consularised.",
  "Share allotments to foreign shareholders are reported to the RBI on Form FC-GPR within 30 days.",
];

export const homeFaqs: Faq[] = [
  {
    question: "How long does it take to register a private limited company?",
    answer: `${timeline.sentence} ${timeline.delays}`,
  },
  {
    question: "What does it cost in total?",
    answer: `Our professional fee for a Private Limited company starts at ${inr(PROFESSIONAL_FEE.pvt)} plus GST. Government fees (name reservation and state stamp duty) and digital signatures are extra and depend on your state, capital and number of directors. The estimator on this page shows each line.`,
  },
  {
    question: "Do I need a commercial office to register?",
    answer:
      "No. A residential address works as the registered office if you have a recent utility bill for it and a no-objection letter from the owner.",
  },
  {
    question: "Can a foreign national or NRI be a director or shareholder?",
    answer:
      "Yes. Foreign nationals and NRIs can hold shares and be directors. The company still needs at least one director who stayed in India for 182 days or more in the previous financial year, and foreign investment must follow FEMA rules for your sector.",
  },
  {
    question: "Can you guarantee my company name or DPIIT recognition?",
    answer:
      "No one can. Names are approved by the MCA and recognition is granted by DPIIT. We check names against MCA and trademark records before filing and prepare applications to the published criteria, which reduces rejections but cannot remove them.",
  },
  {
    question: "What do I have to do after incorporation?",
    answer:
      "Open a bank account and deposit the subscribed capital, appoint an auditor within 30 days, and file the INC-20A declaration within 180 days. After that come annual filings (AOC-4, MGT-7, income tax return) and GST returns if you are registered. We give you a dated calendar of all of these.",
  },
];
