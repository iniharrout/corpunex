import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const section8Company: ServicePageContent = {
  path: "/services/ngo-entity-registration/section-8-company",
  name: "Section 8 company registration",
  metaTitle: "Section 8 Company Registration Online",
  metaDescription:
    "Register your NGO as a Section 8 company: limited liability, national recognition and a clear path to 12A and 80G. Documents, process and what's included.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "NGO registration", href: "/services/ngo-entity-registration" },
    { label: "Section 8 company", href: "/services/ngo-entity-registration/section-8-company" },
  ],
  headline: "Section 8 company registration for your non-profit.",
  lead: "A Section 8 company is a non-profit company. It's registered with the central government, so it's recognised across India, and it gives its directors limited liability. All its income goes back into its work; nothing is paid out as profit. We prepare the licence application and the company documents, and file it all for you.",
  quoteFacts: [{ label: "Minimum capital", value: "None" }, quoteOnRequest],
  callbackTopic: "Something else",

  forWho: [
    "You want to run a charity, education, health, arts, sport or environment project.",
    "You want your organisation recognised across India, not just in one state.",
    "You plan to take donations or grants, including from companies' CSR budgets.",
  ],
  notFor: [
    {
      text: "You want a simpler setup for a small local charity.",
      href: "/services/ngo-entity-registration",
      linkLabel: "Compare a trust or society",
    },
  ],

  included: [
    "Advice on whether a Section 8 company suits your work",
    "Reserving your organisation's name with the government",
    "Writing your rulebook (MoA and AoA) around your objectives",
    "The Section 8 licence application and the registration form (SPICe+), certified by a CA or CS",
    "Director IDs (DIN), PAN and TAN for the organisation",
    "A note on applying for 12A and 80G next",
  ],
  excluded: [
    "Government fees and stamp duty (we charge exactly what the government charges)",
    "Digital signatures for directors (about ₹1,000 per person)",
    "The 12A and 80G applications, unless quoted",
  ],

  documents: [
    { document: "PAN card", from: "Each director and member" },
    { document: "Aadhaar, passport, voter ID or driving licence", from: "Each director and member" },
    { document: "Bank statement or utility bill", from: "Each director and member", note: "No older than 2 months" },
    { document: "Utility bill for the office", from: "The organisation", note: "Plus the owner's no-objection letter" },
    { document: "A short description of your work and plans", from: "Founders", note: "We help you write it" },
  ],

  milestones: [
    { when: "Step 1", title: "Objectives agreed", detail: "We write down what your organisation will do, in the form the government expects." },
    { when: "Step 2", title: "Name reserved", detail: "We apply for your name. The government approves it or asks for another." },
    { when: "Step 3", title: "Application filed", detail: "We file the licence application and registration form together." },
    { when: "Step 4", title: "Licence and certificate", detail: "You get your Section 8 licence, certificate of incorporation, PAN and TAN." },
  ],
  stepsDelays: "Questions about the organisation's objectives are the usual reason for delay, so we spend time getting them right up front.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us what your organisation will do and who will run it.",
      us: "Confirm Section 8 is the right fit and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents for each director and member.",
      us: "Check them and arrange digital signatures.",
    },
    {
      title: "Drafting and filing",
      you: "Approve your objectives and rulebook.",
      us: "File the licence application and registration.",
    },
    {
      title: "Next steps",
      you: "Open a bank account for the organisation.",
      us: "Send your documents and explain 12A, 80G and your yearly filings.",
    },
  ],

  faqs: [
    {
      question: "What's the difference between a Section 8 company, a trust and a society?",
      answer:
        "A Section 8 company is registered with the central government and recognised everywhere in India. Trusts and societies are registered under state laws and are simpler to set up, but they have less formal rules for how they're run.",
    },
    {
      question: "Can a Section 8 company pay its directors?",
      answer:
        "It can pay reasonable fees for real work done, but it can't pay out profits or dividends to its members. All income must go back into its objectives.",
    },
    {
      question: "Does it need yearly filings?",
      answer: "Yes. Like any company, it files its accounts and a yearly return with the government, and its accounts are audited every year.",
    },
    {
      question: "How do donors get a tax deduction?",
      answer:
        "Your organisation needs 80G registration. Once it has it, donors can claim a deduction on what they give. Most organisations apply for 12A and 80G soon after they're registered.",
    },
  ],

  related: [
    { label: "NGO registration options", href: "/services/ngo-entity-registration", description: "Compare a trust or a society" },
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books ready for your yearly audit" },
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "Your organisation's yearly filings" },
  ],

  cta: {
    title: "Starting a non-profit?",
    body: "Tell us about the work you want to do. We'll confirm the right setup and send a quote.",
  },
};
