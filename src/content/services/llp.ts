import { timeline } from "@/config/site";
import type { ServicePageContent } from "./types";

export const llp: ServicePageContent = {
  path: "/services/business-registration/llp-registration",
  name: "LLP registration",
  metaTitle: "LLP registration in India: fees, documents, timeline",
  metaDescription: `Register a Limited Liability Partnership with the MCA in ${timeline.short}. Documents, steps and what's included, with a free itemised quote.`,
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "LLP", href: "/services/business-registration/llp-registration" },
  ],
  headline: `Register your LLP in ${timeline.short}.`,
  lead: "An LLP (Limited Liability Partnership) protects your personal assets like a company does, with fewer yearly filings. We check your name, file the registration, and write your LLP agreement, the document that sets out how you and your partners share profits and decisions. Every filing is checked by a Chartered Accountant or Company Secretary.",
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
    "Checking that the name you want is available",
    "Reserving your LLP name with the government (RUN-LLP)",
    "Partner ID (DIN) for up to 2 designated partners",
    "The main registration form (FiLLiP), certified by a CA or CS",
    "Your LLP agreement, written to your terms and filed with the government (Form 3)",
    "Certificate of incorporation with your LLP number (LLPIN), plus PAN and TAN",
    "A calendar of every deadline in your first year",
  ],
  excluded: [
    "Government fees and stamp duty on the LLP agreement (we charge exactly what the government charges)",
    "Digital signatures for partners",
    "Attesting documents signed outside India",
    "GST registration, if you need it separately",
    "Yearly filings (Form 8 and Form 11)",
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
    { when: "Days 1–3", title: "Digital signatures issued", detail: "Each partner does a short video check so they can sign forms online." },
    { when: "Days 2–5", title: "Name approved", detail: "We apply for your name. The government approves it or asks for another one." },
    { when: "Days 4–8", title: "Incorporation filed", detail: "Partners sign the registration form online and we file it." },
    { when: "Days 7–14", title: "Certificate issued", detail: "You get your certificate of incorporation, LLP PAN and TAN. You're official!" },
  ],

  process: [
    {
      title: "Talk to us",
      you: "Tell us your proposed names, partners, state and contribution.",
      us: "Confirm an LLP suits you and send a written, itemised quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them and arrange digital signatures for each partner.",
    },
    {
      title: "Name and filing",
      you: "Approve the business activity and each partner's contribution.",
      us: "Apply for your name, then certify and file the registration.",
    },
    {
      title: "LLP agreement",
      you: "Agree profit shares, duties and exit terms with your partners.",
      us: "Write the agreement, arrange the stamp paper and file it.",
    },
    {
      title: "Handover",
      you: "Open the bank account and bring in the contribution.",
      us: "Send your certificate, PAN, TAN and first-year compliance calendar.",
    },
  ],

  callbackTopic: "Register a company or LLP",
  afterwards: [
    { deadline: "Within 30 days", task: "File the signed LLP agreement", form: "Form 3" },
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
        "At least two designated partners, who are the partners responsible for the LLP's filings. At least one of them must live in India.",
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
        "The government charges a late fee of ₹100 for every day it is late, with no upper limit. We write the agreement while the LLP is being registered, so it is ready to file straight away.",
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
