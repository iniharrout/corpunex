import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import type { ServicePageContent } from "./types";

export const llp: ServicePageContent = {
  path: "/services/business-registration/llp-registration",
  name: "LLP registration",
  metaTitle: "LLP registration in India: fees, documents, timeline",
  metaDescription: `Register a Limited Liability Partnership with the MCA in ${timeline.short}. Professional fee from ${inr(PROFESSIONAL_FEE.llp)} + GST; government fees and stamp duty shown separately.`,
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "LLP", href: "/services/business-registration/llp-registration" },
  ],
  headline: `An LLP, registered with the MCA in ${timeline.short}.`,
  lead: "We reserve the name, file FiLLiP, and draft and file your LLP agreement. You get limited liability with fewer annual filings than a company. A Chartered Accountant or Company Secretary certifies every filing.",
  entity: "llp",

  forWho: [
    "You run a professional or services firm with one or more partners.",
    "You want limited liability but do not plan to raise equity from investors.",
    "You want fewer annual filings than a Private Limited company.",
    "You want to set profit shares and partner duties in your own agreement.",
  ],
  notFor: [
    {
      text: "You plan to raise money from angels or VCs, or give employees ESOPs.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Consider a Private Limited company",
    },
    {
      text: "You are on your own and want limited liability.",
      href: "/services/business-registration/one-person-company",
      linkLabel: "Consider an OPC",
    },
  ],

  included: [
    "Name search against MCA and trademark records",
    "Name reservation through RUN-LLP",
    "DIN for up to 2 designated partners",
    "FiLLiP incorporation filing, certified by a CA or CS",
    "LLP agreement drafted to your terms and filed on Form 3",
    "Certificate of incorporation with LLPIN, plus PAN and TAN",
    "A dated compliance calendar for your first year",
  ],
  excluded: [
    "Government fees and stamp duty on the LLP agreement (paid at cost, receipts provided)",
    "Class 3 digital signatures for partners (about ₹1,000 each)",
    "Notarisation or apostille of documents signed outside India",
    "GST registration, if you need it separately",
    "Annual Form 8 and Form 11 filings",
  ],

  documents: [
    { document: "PAN card", from: "Each designated partner", note: "Foreign nationals: passport instead" },
    { document: "Aadhaar, passport, voter ID or driving licence", from: "Each designated partner" },
    {
      document: "Bank statement, or electricity or phone bill",
      from: "Each designated partner",
      note: "In their name, no older than 2 months",
    },
    { document: "Passport-size photograph", from: "Each designated partner" },
    {
      document: "Utility bill for the registered office",
      from: "LLP",
      note: "Electricity, water or gas, no older than 2 months",
    },
    {
      document: "No-objection letter from the property owner",
      from: "Owner of the premises",
      note: "Plus the rent agreement if rented. A home address is fine.",
    },
  ],

  milestones: [
    { when: "Day 1", title: "Documents checked", detail: "We review every document and flag anything that needs redoing before it reaches the MCA." },
    { when: "Days 1–3", title: "Digital signatures issued", detail: "Each partner completes a short video verification with the certifying authority." },
    { when: "Days 2–5", title: "Name approved", detail: "We file RUN-LLP. The MCA approves the name or asks for another." },
    { when: "Days 4–8", title: "Incorporation filed", detail: "Partners sign FiLLiP with their digital signatures and we file it." },
    { when: "Days 7–14", title: "Certificate issued", detail: "The MCA issues the certificate of incorporation with your LLPIN, PAN and TAN." },
  ],

  process: [
    {
      title: "Call and quote",
      you: "Tell us your proposed names, partners, state and contribution.",
      us: "Confirm an LLP suits you and send a written, itemised quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them against MCA requirements and arrange digital signatures.",
    },
    {
      title: "Name and filing",
      you: "Approve the business activity and each partner's contribution.",
      us: "File for the name, then certify and file FiLLiP.",
    },
    {
      title: "LLP agreement",
      you: "Agree profit shares, duties and exit terms with your partners.",
      us: "Draft the agreement, arrange stamping and file Form 3.",
    },
    {
      title: "Handover",
      you: "Open the bank account and bring in the contribution.",
      us: "Send your certificate, PAN, TAN and first-year compliance calendar.",
    },
  ],

  afterwards: [
    { deadline: "Within 30 days", task: "File the signed and stamped LLP agreement", form: "Form 3" },
    { deadline: "By 30 May each year", task: "File the annual return", form: "Form 11" },
    { deadline: "By 30 October each year", task: "File the statement of account and solvency", form: "Form 8" },
    { deadline: "Every year", task: "File the income tax return", form: "ITR-5" },
  ],

  faqs: [
    {
      question: "How long does it take?",
      answer: `${timeline.sentence} ${timeline.delays} The LLP agreement is filed after incorporation, within 30 days.`,
    },
    {
      question: "How many partners do I need?",
      answer:
        "At least two designated partners. At least one must be resident in India. [VERIFY: current residency test for designated partners]",
    },
    {
      question: "Can an LLP raise money from investors?",
      answer:
        "Not as equity. An LLP has no shares, so it cannot issue shares or ESOPs. Most angel and VC investors invest only in Private Limited companies. An LLP can convert to a company later if you need to raise.",
    },
    {
      question: "Does an LLP need an audit?",
      answer:
        "Only if turnover goes above ₹40 lakh or partner contribution goes above ₹25 lakh in a year. Below both, the accounts do not need a statutory audit.",
    },
    {
      question: "What if the LLP agreement is filed late?",
      answer:
        "The MCA charges an additional fee of ₹100 for each day of delay, with no upper limit. We draft the agreement during incorporation so it is ready to file as soon as the LLPIN is issued.",
    },
    {
      question: "Can I use my home as the registered office?",
      answer:
        "Yes. You need a recent utility bill for the address and a no-objection letter from the owner, plus the rent agreement if it is rented.",
    },
  ],

  related: [
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "If you plan to raise equity" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Needed above turnover thresholds or for interstate sales" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "Form 8 and Form 11 every year" },
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing", description: "ITR-5 for the LLP every year" },
  ],

  cta: {
    title: "Ready to register your LLP?",
    body: "Send us your proposed names, partners and state. We will reply with an itemised quote.",
  },
};
