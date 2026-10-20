import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const closeACompany: ServicePageContent = {
  path: "/services/corporate-compliance/close-a-company",
  name: "Close a company (strike off)",
  metaTitle: "Close a Private Limited Company (Strike Off)",
  metaDescription:
    "Close a company that has stopped trading, the proper way. We catch up any missed filings, prepare the strike-off application (STK-2) and file it with the government.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Compliance", href: "/services/corporate-compliance" },
    { label: "Close a company", href: "/services/corporate-compliance/close-a-company" },
  ],
  headline: "Close a company properly, so its filings stop for good.",
  lead: "A company that has stopped trading still has to file every year, and the late fees keep growing if it doesn't. Closing it formally, called a strike-off, ends that. We check what's outstanding, catch up any missed filings, and prepare and file the strike-off application.",
  quoteFacts: [
    { label: "Government fee", value: "Charged at actual cost", note: "Shown in your quote" },
    quoteOnRequest,
  ],
  callbackTopic: "Annual ROC compliance",

  forWho: [
    "Companies that never started trading after they were registered.",
    "Companies that have stopped trading and have nothing left to pay.",
    "Founders who want to stop the yearly filings and late fees on a company they no longer use.",
  ],
  notFor: [
    {
      text: "The company still owes money or has assets to sell. That needs a different process.",
      href: "/contact",
      linkLabel: "Talk to us about your options",
    },
  ],

  included: [
    "A check of the company's filings, bank account and anything it still owes",
    "Catching up missed yearly filings, if any (quoted separately)",
    "The board and shareholder resolutions to close the company",
    "The statement of accounts, indemnity and affidavits the government asks for",
    "Filing the strike-off application (STK-2), certified by a CA or CS",
    "Tracking it until the company's name is removed",
  ],
  excluded: [
    "Government fees and any late fees for past filings (we charge exactly what the government charges)",
    "Closing GST and other registrations, unless quoted",
  ],

  documents: [
    { document: "Company PAN and certificate of incorporation", from: "The company" },
    { document: "Bank statement showing the account is closed", from: "The company", note: "Or a letter from the bank" },
    { document: "Last filed accounts", from: "The company" },
    { document: "Digital signatures", from: "Directors" },
  ],

  milestones: [
    { when: "Step 1", title: "Health check", detail: "We check what's been filed and confirm the company qualifies for strike-off." },
    { when: "Step 2", title: "Catch up", detail: "We file anything that's overdue, so the application isn't rejected." },
    { when: "Step 3", title: "Papers prepared", detail: "We prepare the resolutions, statement of accounts, indemnity and affidavits." },
    { when: "Step 4", title: "Application filed", detail: "We file STK-2. The government publishes a public notice so anyone can object." },
    { when: "Step 5", title: "Company closed", detail: "If nobody objects, the government removes the company's name from its register." },
  ],
  stepsDelays: "Missed past filings are the usual reason for delay, because they must be filed before the company can close.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us the company's name and when it last traded.",
      us: "Check its record and send a written quote.",
    },
    {
      title: "Catch up",
      you: "Share the company's accounts and bank details.",
      us: "File anything overdue.",
    },
    {
      title: "Closure",
      you: "Sign the resolutions and affidavits.",
      us: "File the strike-off application and track it.",
    },
  ],

  faqs: [
    {
      question: "Which companies can be struck off?",
      answer:
        "A company that hasn't done business for the last two financial years, or never started within a year of being registered, and that owes nothing. All its yearly filings must be up to date.",
    },
    {
      question: "What if we've missed yearly filings?",
      answer: "They need to be filed first, with any late fees. We work out what's overdue and file it before the strike-off application.",
    },
    {
      question: "Can I just stop filing and let the company lapse?",
      answer:
        "We don't recommend it. Late fees keep growing, and directors of companies that don't file for three years in a row can be barred from being directors of any company.",
    },
  ],

  related: [
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "Catch up yearly filings" },
    { label: "Change of directors", href: "/services/corporate-compliance/change-of-directors", description: "Add or remove a director" },
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing", description: "Final tax returns" },
  ],

  cta: {
    title: "Ready to close a company you no longer use?",
    body: "Send us the company's name. We'll check its record and send a quote.",
  },
};
