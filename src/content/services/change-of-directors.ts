import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const changeOfDirectors: ServicePageContent = {
  path: "/services/corporate-compliance/change-of-directors",
  name: "Add or remove a director",
  metaTitle: "Add or Remove a Director in Your Company",
  metaDescription:
    "Appoint a new director or record a resignation in your company. Board resolution, consent, director ID and the DIR-12 filing, done on time.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Compliance", href: "/services/corporate-compliance" },
    { label: "Change of directors", href: "/services/corporate-compliance/change-of-directors" },
  ],
  headline: "Add or remove a director, with the filing done on time.",
  lead: "Whenever a director joins or leaves your company, the government has to be told within 30 days. We prepare the board resolution and consent forms, get the new director an ID if they need one, and file the change.",
  quoteFacts: [
    { label: "Deadline", value: "Within 30 days", note: "Of the appointment or resignation" },
    quoteOnRequest,
  ],
  callbackTopic: "Annual ROC compliance",

  forWho: [
    "Companies bringing in a new co-founder or investor director.",
    "Companies where a director is stepping down.",
    "Companies that need to change a director to meet the minimum number of directors.",
  ],
  notFor: [],

  included: [
    "Board resolution for the appointment or resignation",
    "The new director's consent and declaration forms",
    "A director ID (DIN) for the new director, if they don't have one",
    "Filing the change with the government (DIR-12)",
    "Updating the company's register of directors",
  ],
  excluded: [
    "Government fees (we charge exactly what the government charges)",
    "Digital signature for the new director (about ₹1,000)",
    "Share transfers, if the director is also selling shares",
  ],

  documents: [
    { document: "PAN and Aadhaar or passport", from: "The new director" },
    { document: "Address proof", from: "The new director", note: "No older than 2 months" },
    { document: "Resignation letter", from: "The leaving director", note: "Only for a resignation" },
    { document: "Digital signature", from: "An existing director", note: "To sign the filing" },
  ],

  milestones: [
    { when: "Step 1", title: "Paperwork prepared", detail: "We prepare the board resolution and the consent or resignation documents." },
    { when: "Step 2", title: "Director ID", detail: "If the new director doesn't have a DIN, we apply for one." },
    { when: "Step 3", title: "Change filed", detail: "We file DIR-12 with the government, within 30 days of the change." },
    { when: "Step 4", title: "Records updated", detail: "The government's records and your register of directors show the change." },
  ],

  process: [
    {
      title: "Talk to us",
      you: "Tell us who is joining or leaving, and when.",
      us: "Send a written quote and the list of documents.",
    },
    {
      title: "Documents",
      you: "Send the documents and hold the board meeting.",
      us: "Prepare the resolution and forms.",
    },
    {
      title: "Filing",
      you: "Sign the forms online.",
      us: "File the change and send you the receipt.",
    },
  ],

  faqs: [
    {
      question: "How many directors must a company have?",
      answer: "A Private Limited company needs at least two directors, and a One Person Company at least one. A resignation can't take you below the minimum.",
    },
    {
      question: "Can a foreign national be a director?",
      answer:
        "Yes. They need a director ID and a digital signature, and their documents may need to be apostilled. At least one director must have lived in India for 182 days or more in the previous financial year.",
    },
    {
      question: "What if we miss the 30-day deadline?",
      answer: "You can still file, but the government charges a late fee that increases the longer it's left.",
    },
  ],

  related: [
    { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance", description: "Your company's yearly filings" },
    { label: "Founder and shareholder agreements", href: "/services/legal-documentation", description: "Put a new director's role in writing" },
    { label: "Close a company", href: "/services/corporate-compliance/close-a-company", description: "Strike off a company you no longer use" },
  ],

  cta: {
    title: "Changing your board?",
    body: "Tell us who's joining or leaving. We'll send the document list and a quote.",
  },
};
