import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const incomeTaxFiling: ServicePageContent = {
  path: "/services/gst-taxation/income-tax-filing",
  name: "Income tax return filing",
  metaTitle: "Income Tax Return Filing for Businesses",
  metaDescription:
    "Yearly income tax returns for companies, LLPs and proprietors, prepared from your books, checked against your tax records and reviewed by a Chartered Accountant.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "GST and tax", href: "/services/gst-taxation" },
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing" },
  ],
  headline: "Income tax return filing for your business, checked by a CA.",
  lead: "Every company and LLP has to file an income tax return each year, even with no sales. We prepare it from your books, check it against what the tax department already knows about you, work out the tax, and file it on time.",
  quoteFacts: [{ label: "Government fee", value: "None to file", note: "Any tax due depends on your profit" }, quoteOnRequest],
  callbackTopic: "GST, accounting or tax returns",

  forWho: [
    "Every Private Limited company and One Person Company, even with no sales.",
    "Every LLP, even with no sales.",
    "Proprietors and freelancers, including those on the simpler presumptive scheme.",
    "Directors and shareholders with dividends, share sales or assets abroad.",
  ],
  notFor: [],

  included: [
    "Checking your books against your tax statements (AIS and Form 26AS), which show what the tax department already knows",
    "Working out your taxable income and the tax due",
    "Review and sign-off by a Chartered Accountant",
    "Filing the return",
    "Verifying the return online and sending you the acknowledgement",
  ],
  excluded: [
    "The tax itself, and any interest or late fee",
    "Catching up your bookkeeping, if your books aren't up to date",
    "A tax audit, which has to be done by an independent auditor",
    "Replying to tax notices, unless quoted",
  ],

  documents: [
    { document: "Balance sheet and profit and loss account", from: "The business", note: "Audited, if your business needs an audit" },
    { document: "Tax statements (AIS and Form 26AS)", from: "Income tax portal", note: "We can download these for you" },
    { document: "Bank statements for the year", from: "The business" },
    { document: "TDS certificates and advance tax receipts", from: "The business" },
    { document: "Details of assets abroad and other directorships", from: "Directors", note: "Only if you have any" },
  ],

  milestones: [
    { when: "Step 1", title: "Books checked", detail: "We match your income and tax deducted against your tax statements." },
    { when: "Step 2", title: "Tax worked out", detail: "We calculate your taxable income and tax, and show you how." },
    { when: "Step 3", title: "CA review", detail: "A Chartered Accountant reviews the return." },
    { when: "Step 4", title: "Return filed", detail: "We file once you've approved it and paid any tax due." },
    { when: "Step 5", title: "Return verified", detail: "The return is confirmed online with a digital signature or Aadhaar." },
  ],
  stepsDelays: "Books that aren't finished, and figures that don't match your tax statements, are the usual reasons for delay.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us your business type, rough sales, and whether your accounts are audited.",
      us: "Confirm which form you need and when it's due, and send a written quote.",
    },
    {
      title: "Documents",
      you: "Share your books, bank statements and tax receipts.",
      us: "Match them with your tax statements.",
    },
    {
      title: "Working",
      you: "Answer our questions and approve the numbers.",
      us: "Prepare the return and have a CA review it.",
    },
    {
      title: "Filing",
      you: "Pay any tax due and confirm the return.",
      us: "File it and send you the acknowledgement.",
    },
  ],

  faqs: [
    {
      question: "Does a company with no sales still need to file?",
      answer: "Yes. Every company and LLP must file an income tax return each year, even with no sales or a loss.",
    },
    {
      question: "Which form do I use?",
      answer: "Companies use ITR-6 and LLPs use ITR-5. Proprietors usually use ITR-3, or ITR-4 on the presumptive scheme. We'll pick the right one.",
    },
    {
      question: "What if I file late?",
      answer:
        "You pay a late fee and interest on any unpaid tax. You also usually can't carry a loss forward to reduce tax in later years.",
    },
    {
      question: "Can you do my bookkeeping too?",
      answer: "Yes. If we keep your books through the year, your return is quicker to prepare.",
    },
  ],

  related: [
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books ready for your return" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "Your company's other yearly filings" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "If you're not registered yet" },
  ],

  cta: {
    title: "Need your tax return filed?",
    body: "Tell us your business type and whether your accounts are audited. We'll confirm the deadline and send a quote.",
  },
};
