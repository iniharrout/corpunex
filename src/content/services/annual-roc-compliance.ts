import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const annualRocCompliance: ServicePageContent = {
  path: "/services/corporate-compliance/annual-roc-compliance",
  name: "Annual ROC compliance",
  metaTitle: "Annual ROC compliance for companies and LLPs in India",
  metaDescription:
    "The yearly government filings every company and LLP must make, done on time: accounts, the yearly return, director KYC, and the meeting paperwork behind them.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Compliance", href: "/services/corporate-compliance" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
  ],
  headline: "Your yearly company filings, done before the late fees start.",
  lead: "Every company and LLP has to send its accounts and a yearly return to the Registrar of Companies (ROC) each year, even with no sales. Miss them and late fees add up every day. We prepare the meeting paperwork, file the forms and complete each director's KYC.",
  quoteFacts: [
    { label: "Government fee", value: "Depends on your company's capital", note: "We charge exactly what the government charges" },
    quoteOnRequest,
  ],
  callbackTopic: "Annual ROC compliance",

  forWho: [
    "Every Private Limited company, One Person Company and LLP, whether it's trading, quiet or brand new.",
    "Directors who want to keep their director ID (DIN) active.",
    "Companies that have missed past filings and want to catch up.",
  ],
  notFor: [],

  included: [
    "A check of your past filings and company records",
    "Board meeting and AGM (annual general meeting) paperwork, including the directors' report",
    "Filing your accounts (AOC-4)",
    "Filing your yearly return (MGT-7 or MGT-7A)",
    "KYC for each director (DIR-3 KYC)",
    "For LLPs: the yearly return (Form 11) and statement of accounts (Form 8)",
    "Receipts for every form we file",
  ],
  excluded: [
    "Government filing fees and any late fees (we charge exactly what the government charges)",
    "The audit itself, which has to be done by an independent auditor",
    "One-off changes, such as new directors or new shares",
  ],

  documents: [
    { document: "Audited accounts", from: "Company", note: "Balance sheet, profit and loss account and notes" },
    { document: "Auditor's report", from: "Your auditor" },
    { document: "Who owns the shares, and who the directors are", from: "Company" },
    { document: "Digital signature", from: "A director", note: "To sign the forms online" },
  ],

  milestones: [
    { when: "Step 1", title: "Health check", detail: "We look through your company records and list anything overdue." },
    { when: "Step 2", title: "Meeting paperwork", detail: "We write the board resolutions, directors' report, AGM notice and minutes." },
    { when: "Step 3", title: "Accounts filed", detail: "We file your accounts within 30 days of the AGM." },
    { when: "Step 4", title: "Yearly return filed", detail: "We file the yearly return within 60 days of the AGM." },
    { when: "Step 5", title: "Director KYC", detail: "We complete KYC for each director before the deadline." },
  ],
  stepsIntro:
    "A company's filings follow its AGM, which has to be held by 30 September. LLPs file their yearly return by 30 May and their accounts by 30 October.",
  stepsDelays: "A late audit is the usual reason for delay, because the accounts can't be filed without it.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us your company's name and when it last filed.",
      us: "Check its record and send a written quote.",
    },
    {
      title: "Paperwork",
      you: "Share the audited accounts and who owns the shares.",
      us: "Prepare the board and AGM documents.",
    },
    {
      title: "Signing",
      you: "Hold the meetings and sign the minutes and forms.",
      us: "Certify and file the forms.",
    },
    {
      title: "Handover",
      you: "Keep the minutes with your company records.",
      us: "Send every receipt and next year's dates.",
    },
  ],

  faqs: [
    {
      question: "Do we still file if the company had no sales?",
      answer:
        "Yes. A quiet or brand-new company still has to prepare accounts, hold its AGM and file its accounts and yearly return.",
    },
    {
      question: "What does filing late cost?",
      answer:
        "The government charges ₹100 a day for each late form, with no upper limit. If a company doesn't file for three years in a row, its directors can be barred from being directors.",
    },
    {
      question: "What is director KYC?",
      answer:
        "A filing that confirms the identity and contact details of everyone with a director ID (DIN). If it's missed, the DIN is switched off until it's filed with a late fee.",
    },
    {
      question: "Can you catch up years we've missed?",
      answer: "Yes. We list what's overdue, work out the late fees and file the forms in the right order.",
    },
  ],

  related: [
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing", description: "Your company's yearly tax return" },
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books ready for your audit" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "Starting a new company" },
  ],

  cta: {
    title: "Yearly filings coming up?",
    body: "Send us your company or LLP name. We'll check its record and send a quote.",
  },
};
