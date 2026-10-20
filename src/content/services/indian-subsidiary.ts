import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const indianSubsidiary: ServicePageContent = {
  path: "/services/business-registration/indian-subsidiary",
  name: "Indian subsidiary registration",
  metaTitle: "Indian Subsidiary Registration for Foreign Firms",
  metaDescription:
    "Set up a wholly owned subsidiary or Private Limited company in India from abroad. We handle apostilled documents, incorporation, FEMA rules and RBI reporting.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "Indian subsidiary", href: "/services/business-registration/indian-subsidiary" },
  ],
  headline: "Indian subsidiary registration for companies and founders abroad.",
  lead: "Whether you're a foreign company opening an Indian arm or an NRI starting up back home, the route is usually a Private Limited company. The registration is the same as for Indian founders, plus a few extra steps for documents signed abroad and for India's foreign investment rules (FEMA). We handle every one of them.",
  quoteFacts: [
    { label: "Ownership", value: "Up to 100%", note: "In most sectors, without government approval" },
    quoteOnRequest,
  ],
  callbackTopic: "Foreign founder entering India",

  forWho: [
    "Foreign companies that want an Indian subsidiary to hire, sell or build in India.",
    "NRIs and foreign nationals starting a company in India.",
    "Overseas startups moving part of their team to India.",
  ],
  notFor: [
    {
      text: "You're based in India and all the founders are Indian residents.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "See Private Limited registration",
    },
  ],

  included: [
    "Checking whether your sector allows 100% foreign ownership without government approval",
    "A checklist of documents to sign abroad, and a check of each one before filing",
    "Reserving your company name and writing your company rulebook (MoA and AoA)",
    "Director IDs (DIN) and digital signatures for every director",
    "The main registration form (SPICe+), certified by a CA or CS",
    "PAN, TAN and a bank account application, filed together",
    "Reporting your investment to the RBI once the money arrives",
  ],
  excluded: [
    "Government fees and stamp duty (we charge exactly what the government charges)",
    "Notary and apostille charges in your country",
    "Applications for sectors that need government approval, unless quoted",
    "A registered office address, if you don't have one yet",
  ],

  documents: [
    { document: "Passport", from: "Each foreign director and shareholder", note: "Notarised and apostilled" },
    { document: "Address proof", from: "Each foreign director and shareholder", note: "Bank statement or utility bill, notarised and apostilled" },
    { document: "PAN and Aadhaar", from: "Each Indian director" },
    {
      document: "Certificate of incorporation and board resolution",
      from: "The parent company",
      note: "Only if a company is the shareholder. Notarised and apostilled.",
    },
    {
      document: "Proof of the registered office in India",
      from: "The company",
      note: "Utility bill and the owner's no-objection letter",
    },
  ],

  milestones: [
    { when: "Step 1", title: "Structure and sector check", detail: "We confirm the right structure and that your sector allows foreign ownership without approval." },
    { when: "Step 2", title: "Documents signed abroad", detail: "You sign and get documents notarised and apostilled using our checklist. We check each one." },
    { when: "Step 3", title: "Name and incorporation", detail: "We reserve your name, prepare the rulebook and file the registration with the government." },
    { when: "Step 4", title: "Certificate issued", detail: "You get your certificate of incorporation, company PAN and TAN." },
    { when: "Step 5", title: "Investment reported", detail: "Once the bank account is open and your money arrives, we report the investment to the RBI." },
  ],
  stepsDelays: "Getting documents notarised and apostilled abroad is usually the slowest part.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us about your business, your sector and who will own and run the Indian company.",
      us: "Confirm the structure and send a written, itemised quote.",
    },
    {
      title: "Documents",
      you: "Sign and apostille the documents on our checklist.",
      us: "Check every document before anything is filed.",
    },
    {
      title: "Registration",
      you: "Sign the forms online with your digital signature.",
      us: "File everything and answer the government's questions.",
    },
    {
      title: "After registration",
      you: "Open the bank account and send in your investment.",
      us: "Report the investment to the RBI and send your first-year compliance calendar.",
    },
  ],

  afterwards: [
    { deadline: "Within 30 days of issuing shares", task: "Report the foreign investment to the RBI", form: "FC-GPR" },
    { deadline: "Every year", task: "Report foreign liabilities and assets to the RBI", form: "FLA return" },
    { deadline: "Every year", task: "File your accounts and yearly return", form: "AOC-4, MGT-7" },
  ],
  afterwardsTitle: "After incorporation",
  afterwardsIntro: "Foreign-owned companies have a few extra yearly filings. Your compliance calendar lists them all.",

  faqs: [
    {
      question: "Can a foreign company own 100% of an Indian company?",
      answer:
        "Yes, in most sectors, under what's called the automatic route. A few sectors have limits or need government approval first. We check your sector before you start.",
    },
    {
      question: "Do we need an Indian director?",
      answer:
        "Yes. At least one director must have lived in India for 182 days or more in the previous financial year. The other directors can live abroad.",
    },
    {
      question: "What does apostilled mean?",
      answer:
        "It's an official stamp that makes a document signed in one country valid in another. Countries that haven't signed the Hague Apostille Convention use a similar process called consular attestation.",
    },
    {
      question: "Can the foreign directors sign everything online?",
      answer:
        "Yes. Each director gets a digital signature, which needs a short video check. Only the documents on our checklist need a physical signature and apostille.",
    },
  ],

  related: [
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "The structure most subsidiaries use" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "If you'll sell in India" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "Yearly filings for your Indian company" },
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books kept to Indian standards" },
  ],

  cta: {
    title: "Setting up in India from abroad?",
    body: "Tell us about your business and where you are. We'll confirm the route and send an itemised quote.",
  },
};
