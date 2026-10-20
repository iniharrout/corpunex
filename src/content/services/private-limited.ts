import { timeline } from "@/config/site";
import { inr, PROFESSIONAL_FEE } from "@/lib/fees";
import type { ServicePageContent } from "./types";

export const privateLimited: ServicePageContent = {
  path: "/services/business-registration/private-limited-company",
  name: "Private Limited Company registration",
  metaTitle: "Private Limited Company registration in India: fees, documents, timeline",
  metaDescription: `Register a Private Limited company with the MCA in ${timeline.short}. Professional fee from ${inr(PROFESSIONAL_FEE.pvt)} + GST; government fees and stamp duty shown separately.`,
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company" },
  ],
  headline: `A Private Limited company, registered with the MCA in ${timeline.short}.`,
  lead: "We check your name, draft the MoA and AoA, file SPICe+ and get your certificate of incorporation, PAN and TAN. A Chartered Accountant or Company Secretary certifies every filing.",
  entity: "pvt",

  forWho: [
    "You plan to raise money from angels or VCs, now or later.",
    "You want to give employees ESOPs.",
    "Enterprise customers or government tenders expect you to be a company.",
    "You want your personal assets kept separate from the business.",
  ],
  notFor: [
    {
      text: "You are a solo founder and do not expect outside investors soon.",
      href: "/services/business-registration/one-person-company",
      linkLabel: "Consider an OPC",
    },
    {
      text: "You run a professional or services firm with partners and want lighter compliance.",
      href: "/services/business-registration/llp-registration",
      linkLabel: "Consider an LLP",
    },
  ],

  included: [
    "Name search against MCA and trademark records, with up to two proposed names",
    "Name reservation through SPICe+ Part A",
    "DIN for up to 3 directors",
    "MoA and AoA drafted to your business objects",
    "SPICe+ Part B filing, certified by a CA or CS",
    "AGILE-PRO-S: PAN, TAN, EPFO and ESIC registration, and a bank account application",
    "Certificate of incorporation, PAN and TAN, sent to you as soon as the MCA issues them",
    "A dated compliance calendar for your first year",
  ],
  excluded: [
    "Government fees and state stamp duty (paid at cost, receipts provided)",
    "Class 3 digital signatures for directors (about ₹1,000 each)",
    "Notarisation or apostille of documents signed outside India",
    "GST registration, if you need it separately",
    "Auditor appointment and annual ROC filings",
  ],

  documents: [
    { document: "PAN card", from: "Each director and shareholder", note: "Foreign nationals: passport instead" },
    { document: "Aadhaar, passport, voter ID or driving licence", from: "Each director and shareholder" },
    {
      document: "Bank statement, or electricity or phone bill",
      from: "Each director and shareholder",
      note: "In their name, no older than 2 months",
    },
    { document: "Passport-size photograph", from: "Each director" },
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
    { when: "Day 1", title: "Documents checked", detail: "We review every document and flag anything that needs redoing before it reaches the MCA." },
    { when: "Days 1–3", title: "Digital signatures issued", detail: "Each director completes a short video verification with the certifying authority." },
    { when: "Days 2–5", title: "Name approved", detail: "We file SPICe+ Part A. The MCA approves the name or asks for another." },
    { when: "Days 4–8", title: "Incorporation filed", detail: "MoA, AoA and SPICe+ Part B are signed by the directors and filed." },
    { when: "Days 7–14", title: "Certificate issued", detail: "The MCA issues the certificate of incorporation with your CIN, PAN and TAN." },
  ],

  process: [
    {
      title: "Call and quote",
      you: "Tell us your proposed names, directors, state and capital.",
      us: "Confirm the structure suits you and send a written, itemised quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them against MCA requirements and arrange digital signatures.",
    },
    {
      title: "Name and drafting",
      you: "Approve your business objects and share structure.",
      us: "File for the name and draft the MoA and AoA.",
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
    { deadline: "Within 30 days", task: "Appoint the first auditor by board resolution", form: "ADT-1 (filed within 15 days of appointment)" },
    { deadline: "Within 180 days", task: "Deposit share capital and declare commencement of business", form: "INC-20A" },
    { deadline: "Every year", task: "File financial statements and the annual return", form: "AOC-4, MGT-7 or MGT-7A" },
    { deadline: "Every year", task: "Complete KYC for each director", form: "DIR-3 KYC" },
  ],

  faqs: [
    {
      question: "How long does it take?",
      answer: `${timeline.sentence} ${timeline.delays}`,
    },
    {
      question: "How many directors and shareholders do I need?",
      answer:
        "At least two directors and two shareholders; the same two people can be both. At least one director must have stayed in India for 182 days or more in the previous financial year.",
    },
    {
      question: "Is there a minimum capital?",
      answer:
        "No. Most founders start with ₹1 lakh authorised capital. The MCA charges no filing fee up to ₹15 lakh authorised capital, though state stamp duty still applies.",
    },
    {
      question: "Can I use my home as the registered office?",
      answer:
        "Yes. You need a recent utility bill for the address and a no-objection letter from the owner, plus the rent agreement if it is rented.",
    },
    {
      question: "Can I be a director while I am employed elsewhere?",
      answer:
        "The Companies Act does not prevent it, but your employment contract might. Check whether your employer requires consent for outside directorships.",
    },
    {
      question: "Will my company get the 80-IAC tax holiday?",
      answer:
        "Not automatically. You first need DPIIT recognition, and then a separate approval from the Inter-Ministerial Board. Only eligible startups incorporated within the qualifying period get it. We can advise on both applications.",
    },
  ],

  related: [
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition", description: "Recognition, and the route to 80-IAC" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "AOC-4, MGT-7 and director KYC every year" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Needed above turnover thresholds or for interstate sales" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Protect the name you just incorporated" },
  ],
};
