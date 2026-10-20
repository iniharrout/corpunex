import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const incomeTaxFiling: ServicePageContent = {
  path: "/services/gst-taxation/income-tax-filing",
  name: "Income tax return filing",
  metaTitle: "Income tax return filing for companies, LLPs and proprietors in India",
  metaDescription:
    "Income tax returns for companies (ITR-6), LLPs (ITR-5) and proprietors, prepared from your books, checked against AIS and 26AS, and reviewed by a Chartered Accountant.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "GST and tax", href: "/services/gst-taxation" },
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing" },
  ],
  headline: "Your business's income tax return, reviewed by a Chartered Accountant.",
  lead: "We prepare the return from your books, match it against AIS, TIS and Form 26AS, compute the tax and file it before the due date. A Chartered Accountant reviews every return before it is filed.",
  quoteFacts: [
    { label: "Government fee", value: "None to file", note: "Tax due depends on your income" },
    feeToConfirm,
    turnaroundToConfirm("an income tax return"),
  ],

  forWho: [
    "Every Private Limited company and OPC (ITR-6), even with no revenue.",
    "Every LLP (ITR-5), even with no revenue.",
    "Proprietors and professionals, including those using presumptive tax (ITR-3 or ITR-4).",
    "Directors and shareholders with dividends, capital gains or foreign assets.",
  ],
  notFor: [],

  included: [
    "Review of your books against AIS, TIS and Form 26AS",
    "Computation of total income and tax payable",
    "Review and sign-off by a Chartered Accountant",
    "Filing on the income tax portal",
    "E-verification and the filed acknowledgement",
  ],
  excluded: [
    "Tax payable, interest and any late fee",
    "Bookkeeping, if your books are not up to date",
    "Tax audit under section 44AB, which must be done by an independent auditor",
    "Replies to scrutiny notices, unless quoted",
  ],

  documents: [
    { document: "Balance sheet and profit and loss account", from: "The business", note: "Audited, where an audit applies" },
    { document: "Form 26AS, AIS and TIS", from: "Income tax portal", note: "We can download these with your login" },
    { document: "Bank statements for the year", from: "The business" },
    { document: "TDS certificates and advance tax challans", from: "The business" },
    { document: "Details of foreign assets and other directorships", from: "Directors", note: "If any" },
  ],

  milestones: [
    { when: "Step 1", title: "Books reviewed", detail: "We check your ledgers and match income and TDS against AIS and 26AS." },
    { when: "Step 2", title: "Tax computed", detail: "We compute taxable income, deductions and the tax due, and share the working with you." },
    { when: "Step 3", title: "CA review", detail: "A Chartered Accountant reviews the computation and the return." },
    { when: "Step 4", title: "Return filed", detail: "We file the return after you approve it and any balance tax is paid." },
    { when: "Step 5", title: "Return verified", detail: "The return is e-verified by digital signature or Aadhaar OTP." },
  ],
  stepsIntro: stepsIntroToConfirm("an income tax return"),
  stepsDelays: "Books that are not closed, and mismatches with AIS or 26AS, are the usual causes of delay.",

  process: [
    {
      title: "Call and quote",
      you: "Tell us your structure, turnover and whether you have an audit.",
      us: "Confirm the form and due date, and send a written quote.",
    },
    {
      title: "Documents",
      you: "Share your books, bank statements and tax challans.",
      us: "Reconcile them with your tax records.",
    },
    {
      title: "Computation",
      you: "Answer our questions and approve the computation.",
      us: "Prepare the return and get it reviewed by a CA.",
    },
    {
      title: "Filing",
      you: "Pay any balance tax and verify the return.",
      us: "File the return and send the acknowledgement.",
    },
  ],

  faqs: [
    {
      question: "Does a company with no revenue need to file?",
      answer:
        "Yes. Every company and LLP must file an income tax return each year, even with no transactions or a loss.",
    },
    {
      question: "When is the return due?",
      answer:
        "It depends on whether your accounts need an audit. [VERIFY: due dates for audit and non-audit cases for the current assessment year]",
    },
    {
      question: "What if I file late?",
      answer:
        "A late fee applies under section 234F, and interest runs under sections 234A, 234B and 234C on unpaid tax. Losses from a late return cannot usually be carried forward.",
    },
    {
      question: "Can you do my books as well?",
      answer: "Yes. Our accounting service keeps your books up to date so the return can be prepared quickly.",
    },
  ],

  related: [
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books ready for the return" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "AOC-4 and MGT-7 every year" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "If you are not registered yet" },
  ],

  cta: {
    title: "Need your return filed?",
    body: "Tell us your structure and whether your accounts are audited. We will confirm the due date and send a quote.",
  },
};
