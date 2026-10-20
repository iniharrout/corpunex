import type { ServicePageContent } from "./types";
import { feeToConfirm } from "./shared";

export const annualRocCompliance: ServicePageContent = {
  path: "/services/corporate-compliance/annual-roc-compliance",
  name: "Annual ROC compliance",
  metaTitle: "Annual ROC compliance for companies and LLPs: AOC-4, MGT-7, Form 8, Form 11",
  metaDescription:
    "Annual MCA filings for Private Limited companies, OPCs and LLPs: AOC-4, MGT-7 or MGT-7A, DIR-3 KYC, Form 8 and Form 11, with board and AGM paperwork.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Compliance", href: "/services/corporate-compliance" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
  ],
  headline: "Your annual MCA filings, done before the late fees start.",
  lead: "Every company and LLP files financial statements and an annual return with the Registrar each year, even with no revenue. We prepare the board and AGM paperwork, file the forms and complete each director's KYC.",
  quoteFacts: [
    { label: "Government fee", value: "Depends on your capital", note: "Paid at cost, receipts provided" },
    feeToConfirm,
    { label: "Timeline", value: "Across the year", note: "Filings fall between May and November" },
  ],

  forWho: [
    "Every Private Limited company, OPC and LLP, whether trading, dormant or pre-revenue.",
    "Directors who want to keep their DIN active.",
    "Companies that have missed past filings and need to catch up.",
  ],
  notFor: [],

  included: [
    "A check of your past MCA filings and statutory registers",
    "Board resolutions, directors' report and AGM notice and minutes",
    "AOC-4: financial statements",
    "MGT-7 or MGT-7A: annual return",
    "DIR-3 KYC for each director",
    "For LLPs: Form 8 and Form 11",
    "Filing receipts for every form",
  ],
  excluded: [
    "Government filing fees and any additional fees for late filing (paid at cost)",
    "The statutory audit, which must be done by an independent auditor",
    "Event-based filings such as director changes or share allotments",
  ],

  documents: [
    { document: "Audited financial statements", from: "Company", note: "Balance sheet, profit and loss account, notes" },
    { document: "Auditor's report", from: "Statutory auditor" },
    { document: "Shareholding and director details", from: "Company" },
    { document: "Class 3 digital signatures", from: "Directors", note: "At least one, for signing the forms" },
  ],

  milestones: [
    { when: "Step 1", title: "Health check", detail: "We review your MCA records and registers and list anything overdue." },
    { when: "Step 2", title: "Board and AGM papers", detail: "We draft the board resolutions, directors' report, AGM notice and minutes." },
    { when: "Step 3", title: "Financial statements filed", detail: "We file AOC-4 within 30 days of the AGM." },
    { when: "Step 4", title: "Annual return filed", detail: "We file MGT-7 or MGT-7A within 60 days of the AGM." },
    { when: "Step 5", title: "Director KYC", detail: "We complete DIR-3 KYC for each director before the deadline." },
  ],
  stepsIntro:
    "Company filings follow the AGM, which must be held by 30 September. LLP filings are due by 30 May (Form 11) and 30 October (Form 8).",
  stepsDelays: "A late audit is the usual cause of delay, because AOC-4 cannot be filed without it.",

  process: [
    {
      title: "Call and quote",
      you: "Tell us your structure and when you last filed.",
      us: "Check your MCA record and send a written quote.",
    },
    {
      title: "Papers",
      you: "Share the audited accounts and your shareholding.",
      us: "Draft the board and AGM documents.",
    },
    {
      title: "Signing",
      you: "Hold the meetings and sign the minutes and forms.",
      us: "Certify and file the forms.",
    },
    {
      title: "Handover",
      you: "Keep the minutes in your statutory records.",
      us: "Send every filing receipt and next year's dates.",
    },
  ],

  faqs: [
    {
      question: "Can we skip the filings if the company had no sales?",
      answer:
        "No. A dormant or pre-revenue company must still prepare accounts, hold its AGM and file AOC-4 and MGT-7 or MGT-7A.",
    },
    {
      question: "What does late filing cost?",
      answer:
        "The MCA charges an additional fee of ₹100 a day for each late form, with no upper limit. Directors of a company that has not filed for three years in a row can be disqualified.",
    },
    {
      question: "What is DIR-3 KYC?",
      answer:
        "A KYC filing for every person who holds a DIN. If it is missed, the DIN is deactivated until it is filed with a late fee. [VERIFY: current frequency and late fee]",
    },
    {
      question: "Can you catch up years we have missed?",
      answer: "Yes. We list what is overdue, work out the additional fees and file the forms in order.",
    },
  ],

  related: [
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing", description: "ITR-6 or ITR-5 every year" },
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books ready for the audit" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "Starting a new company" },
  ],

  cta: {
    title: "Annual filings due?",
    body: "Send us your company or LLP name. We will check your MCA record and send a quote.",
  },
};
