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
  headline: `A company with one owner, registered with the MCA in ${timeline.short}.`,
  lead: "An OPC gives a solo founder limited liability and a separate legal entity, with no co-founder needed. We check the name, draft the MoA and AoA, record your nominee and file SPICe+. A Chartered Accountant or Company Secretary certifies every filing.",
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
    "Name search against MCA and trademark records, with up to two proposed names",
    "Name reservation through SPICe+ Part A",
    "DIN for the director",
    "MoA and AoA drafted to your business objects",
    "Nominee consent on Form INC-3",
    "SPICe+ Part B filing, certified by a CA or CS",
    "AGILE-PRO-S: PAN, TAN, EPFO and ESIC registration, and a bank account application",
    "A dated compliance calendar for your first year",
  ],
  excluded: [
    "Government fees and state stamp duty (paid at cost, receipts provided)",
    "Class 3 digital signature for the director (about ₹1,000)",
    "GST registration, if you need it separately",
    "Auditor appointment and annual ROC filings",
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
    { when: "Days 1–3", title: "Digital signature issued", detail: "You complete a short video verification with the certifying authority." },
    { when: "Days 2–5", title: "Name approved", detail: "We file SPICe+ Part A. The MCA approves the name or asks for another." },
    { when: "Days 4–8", title: "Incorporation filed", detail: "You sign the MoA, AoA and SPICe+ Part B, and we file them with the nominee's consent." },
    { when: "Days 7–14", title: "Certificate issued", detail: "The MCA issues the certificate of incorporation with your CIN, PAN and TAN." },
  ],

  process: [
    {
      title: "Call and quote",
      you: "Tell us your proposed names, your nominee, state and capital.",
      us: "Confirm an OPC suits you and send a written, itemised quote.",
    },
    {
      title: "Documents",
      you: "Upload your documents and your nominee's.",
      us: "Check them against MCA requirements and arrange your digital signature.",
    },
    {
      title: "Name and drafting",
      you: "Approve your business objects.",
      us: "File for the name, draft the MoA and AoA, and prepare INC-3.",
    },
    {
      title: "Signing and filing",
      you: "Sign the forms with your digital signature.",
      us: "Certify and file SPICe+ Part B, and answer any MCA queries.",
    },
    {
      title: "Handover",
      you: "Open the bank account and deposit the share capital.",
      us: "Send your certificate, PAN, TAN and first-year compliance calendar.",
    },
  ],

  afterwards: [
    { deadline: "Within 30 days", task: "Appoint the first auditor", form: "ADT-1 (filed within 15 days of appointment)" },
    { deadline: "Within 180 days", task: "Deposit share capital and declare commencement of business", form: "INC-20A" },
    { deadline: "Within 180 days of year end", task: "File financial statements", form: "AOC-4" },
    { deadline: "Every year", task: "File the annual return and complete director KYC", form: "MGT-7A, DIR-3 KYC" },
  ],

  faqs: [
    {
      question: "How long does it take?",
      answer: `${timeline.sentence} ${timeline.delays}`,
    },
    {
      question: "Who can form an OPC?",
      answer:
        "Only a natural person who is an Indian citizen. A person can form only one OPC. [VERIFY: current residency condition for the OPC member]",
    },
    {
      question: "What does the nominee do?",
      answer:
        "The nominee becomes the member if you die or can no longer act. They sign a consent on Form INC-3. You can change the nominee later by filing with the MCA.",
    },
    {
      question: "Do I have to hold an AGM?",
      answer:
        "No. An OPC does not need to hold an annual general meeting. It still files financial statements and an annual return every year.",
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
