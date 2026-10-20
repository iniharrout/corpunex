import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const partnershipFirm: ServicePageContent = {
  path: "/services/business-registration/partnership-firm-registration",
  name: "Partnership firm registration",
  metaTitle: "Partnership Firm Registration Online",
  metaDescription:
    "Register a partnership firm in India. We write your partnership deed, arrange the stamp paper, register the firm with the state and get its PAN.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "Partnership firm", href: "/services/business-registration/partnership-firm-registration" },
  ],
  headline: "Partnership firm registration, starting with a deed that protects you.",
  lead: "A partnership firm is two or more people running a business together under a written agreement called a partnership deed. It's quick and inexpensive to set up. We write the deed around how you actually want to work together, register the firm with your state and get it a PAN.",
  quoteFacts: [quoteOnRequest],
  callbackTopic: "Register a company or LLP",

  forWho: [
    "Two or more people starting a shop, trading or service business together.",
    "Family businesses that want a written agreement between partners.",
    "Partners who want to start quickly and keep paperwork light.",
  ],
  notFor: [
    {
      text: "You want your personal assets protected. In a partnership, partners are personally liable for the firm's debts.",
      href: "/services/business-registration/llp-registration",
      linkLabel: "Look at an LLP",
    },
    {
      text: "You plan to raise money from investors.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Look at a Private Limited company",
    },
  ],

  included: [
    "A partnership deed covering money put in, profit shares, duties and what happens when a partner leaves",
    "Arranging the stamp paper and signing",
    "Registration with your state's Registrar of Firms",
    "PAN for the firm",
    "Papers to open the firm's current account",
  ],
  excluded: [
    "Stamp duty and registration fees (we charge exactly what the government charges)",
    "GST registration, if you need it",
    "Yearly accounts and tax returns",
  ],

  documents: [
    { document: "PAN card", from: "Each partner" },
    { document: "Aadhaar or another ID", from: "Each partner" },
    { document: "Passport-size photograph", from: "Each partner" },
    { document: "Proof of the business address", from: "The firm", note: "Utility bill, plus rent agreement and owner's no-objection letter if rented" },
  ],

  milestones: [
    { when: "Step 1", title: "Terms agreed", detail: "We talk through how much each partner puts in, how profits are split and who does what." },
    { when: "Step 2", title: "Deed written", detail: "We write the partnership deed and arrange the stamp paper." },
    { when: "Step 3", title: "Deed signed", detail: "All partners sign the deed in front of witnesses." },
    { when: "Step 4", title: "Firm registered", detail: "We register the firm with the state and apply for its PAN." },
  ],
  stepsDelays: "State registration offices work at different speeds, so this step varies most.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us about the business and the partners.",
      us: "Explain your options and send a written quote.",
    },
    {
      title: "The deed",
      you: "Agree the terms with your partners.",
      us: "Write the deed and arrange the stamp paper.",
    },
    {
      title: "Registration",
      you: "Sign the deed and the forms.",
      us: "Register the firm and get its PAN.",
    },
    {
      title: "Handover",
      you: "Open the firm's bank account.",
      us: "Send all the documents and tell you what to file each year.",
    },
  ],

  faqs: [
    {
      question: "Do I have to register a partnership firm?",
      answer:
        "Registration isn't compulsory, but it's strongly recommended. An unregistered firm can't take someone to court to enforce a contract, and banks and clients often ask for the registration.",
    },
    {
      question: "How many partners do I need?",
      answer: "At least two. Partners can be individuals or other businesses.",
    },
    {
      question: "Partnership or LLP?",
      answer:
        "A partnership is cheaper and simpler, but every partner is personally responsible for the firm's debts. An LLP costs more to run, but protects your personal assets. If the business will take on debt or big contracts, an LLP is usually safer.",
    },
  ],

  related: [
    { label: "LLP registration", href: "/services/business-registration/llp-registration", description: "Partnership with limited liability" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "If your sales cross the limit" },
    { label: "Legal documents", href: "/services/legal-documentation", description: "Other agreements between partners" },
  ],

  cta: {
    title: "Starting a business with partners?",
    body: "Tell us about the business and the partners. We'll suggest the right setup and send a quote.",
  },
};
