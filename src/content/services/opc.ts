import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import type { ServicePageContent } from "./types";

export const opc: ServicePageContent = {
  path: "/services/business-registration/one-person-company",
  name: "One Person Company registration",
  metaTitle: "One Person Company (OPC) registration in India: fees, documents, timeline",
  metaDescription: `Register a One Person Company with the MCA in ${timeline.short}. Professional fee from ${inr(PROFESSIONAL_FEE.opc)} + GST; government fees and stamp duty shown separately.`,
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "One Person Company", href: "/services/business-registration/one-person-company" },
  ],
  headline: `Register your One Person Company in ${timeline.short}.`,
  lead: "A One Person Company (OPC) lets you run a proper company on your own, with your personal assets kept separate from the business. No co-founder needed. We check your name, write your company rulebook (MoA and AoA), add your nominee and file everything. Every filing is checked by a Chartered Accountant or Company Secretary.",
  entity: "opc",

  forWho: [
    "You are a solo founder, consultant or developer.",
    "You want your personal assets kept separate from the business.",
    "Clients ask you to contract as a company rather than in your own name.",
    "You run a proprietorship and want to move it into a company.",
  ],
  notFor: [
    {
      text: "You have a co-founder, or plan to bring in investors soon.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Consider a Private Limited company",
    },
    {
      text: "You are a foreign national. Only Indian citizens can form an OPC.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Consider a Private Limited company",
    },
  ],

  included: [
    "Checking that up to two names you like are available",
    "Reserving your company name with the government",
    "Director ID (DIN) for you",
    "MoA and AoA, your company's rulebook, written for your business",
    "Your nominee's consent form (INC-3)",
    "The main registration form (SPICe+), certified by a CA or CS",
    "PAN, TAN, EPFO and ESIC registrations, plus a bank account application, filed together",
    "A calendar of every deadline in your first year",
  ],
  excluded: [
    "Government fees and stamp duty (we charge exactly what the government charges)",
    "Your digital signature (about ₹1,000)",
    "GST registration, if you need it separately",
    "Auditor's fee and yearly filings",
  ],

  documents: [
    { document: "PAN card", from: "Founder and nominee" },
    { document: "Aadhaar, passport, voter ID or driving licence", from: "Founder and nominee" },
    {
      document: "Bank statement, or electricity or phone bill",
      from: "Founder and nominee",
      note: "In their name, no older than 2 months",
    },
    { document: "Passport-size photograph", from: "Founder" },
    { document: "Signed consent to act as nominee (INC-3)", from: "Nominee", note: "We prepare the form" },
    {
      document: "Utility bill for the registered office",
      from: "Company",
      note: "Electricity, water or gas, no older than 2 months",
    },
    {
      document: "No-objection letter from the property owner",
      from: "Owner of the premises",
      note: "Plus the rent agreement if rented. A home address is fine.",
    },
  ],

  milestones: [
    { when: "Day 1", title: "Documents checked", detail: "We review your and your nominee's documents and flag anything that needs redoing." },
    { when: "Days 1–3", title: "Digital signature issued", detail: "You do a short video check so you can sign forms online." },
    { when: "Days 2–5", title: "Name approved", detail: "We apply for your name. The government approves it or asks for another one." },
    { when: "Days 4–8", title: "Incorporation filed", detail: "You sign the documents online and we file them with your nominee's consent." },
    { when: "Days 7–14", title: "Certificate issued", detail: "You get your certificate of incorporation, company PAN and TAN. You're official!" },
  ],

  process: [
    {
      title: "Talk to us",
      you: "Tell us your proposed names, your nominee, state and capital.",
      us: "Confirm an OPC suits you and send a written, itemised quote.",
    },
    {
      title: "Documents",
      you: "Upload your documents and your nominee's.",
      us: "Check them and arrange your digital signature.",
    },
    {
      title: "Name and drafting",
      you: "Confirm what your business will do.",
      us: "Apply for your name, write your company rulebook (MoA and AoA) and prepare the nominee form.",
    },
    {
      title: "Signing and filing",
      you: "Sign the forms with your digital signature.",
      us: "Certify and file everything, and answer any questions from the government.",
    },
    {
      title: "Handover",
      you: "Open the bank account and deposit the share capital.",
      us: "Send your certificate, PAN, TAN and first-year compliance calendar.",
    },
  ],

  callbackTopic: "Register a company or LLP",
  afterwards: [
    { deadline: "Within 30 days", task: "Appoint your first auditor", form: "ADT-1" },
    { deadline: "Within 180 days", task: "Put the share capital in the bank and tell the government you have started business", form: "INC-20A" },
    { deadline: "Within 180 days of year end", task: "File your accounts", form: "AOC-4" },
    { deadline: "Every year", task: "File the yearly return and your director KYC", form: "MGT-7A, DIR-3 KYC" },
  ],

  faqs: [
    {
      question: "How long does it take?",
      answer: `${timeline.sentence} ${timeline.delays}`,
    },
    {
      question: "Who can form an OPC?",
      answer:
        "Only an individual who is an Indian citizen, not a company. Each person can form only one OPC.",
    },
    {
      question: "What does the nominee do?",
      answer:
        "Your nominee is the person who takes over the company if you die or can no longer run it. They sign a consent form (INC-3). You can change your nominee later.",
    },
    {
      question: "Do I have to hold an AGM?",
      answer:
        "No. An OPC does not need an annual general meeting (AGM). It still files its accounts and a yearly return.",
    },
    {
      question: "Can I convert to a Private Limited company later?",
      answer:
        "Yes. You can convert at any time by adding directors and shareholders to meet the Private Limited minimums. We file the conversion for you.",
    },
  ],

  related: [
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "When you add co-founders or investors" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Protect the name you just incorporated" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "AOC-4, MGT-7A and director KYC every year" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Needed above turnover thresholds or for interstate sales" },
  ],

  cta: {
    title: "Ready to register your company?",
    body: "Send us your proposed names, your nominee and your state. We will reply with an itemised quote.",
  },
};
