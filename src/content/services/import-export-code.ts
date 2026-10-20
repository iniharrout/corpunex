import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const importExportCode: ServicePageContent = {
  path: "/services/licences-registrations/import-export-code",
  name: "Import Export Code (IEC)",
  metaTitle: "Import Export Code (IEC) Registration Online",
  metaDescription:
    "Get the Import Export Code you need for customs and payments from abroad. We apply to the DGFT for you and remind you about the yearly update.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Licences", href: "/services/licences-registrations" },
    { label: "Import Export Code", href: "/services/licences-registrations/import-export-code" },
  ],
  headline: "Import Export Code (IEC) registration, so you can trade abroad.",
  lead: "An Import Export Code (IEC) is a 10-digit number from the DGFT, the government office for foreign trade. Customs need it to clear your goods, and banks often ask for it on payments from abroad. We check your details match, apply for you and send you the certificate.",
  quoteFacts: [
    { label: "Government fee", value: "A small DGFT fee", note: "We charge exactly what the government charges" },
    quoteOnRequest,
  ],
  callbackTopic: "Something else",

  forWho: [
    "You import raw materials or products.",
    "You export products.",
    "Your bank has asked for an IEC on payments from overseas clients.",
    "You want to claim export benefits from the government.",
  ],
  notFor: [],

  included: [
    "Checking your PAN, bank and address details all match",
    "Applying on the DGFT portal",
    "Your e-IEC certificate",
    "A reminder of the yearly update",
  ],
  excluded: ["The DGFT fee (we charge exactly what the government charges)", "Customs registration and export benefit claims"],

  documents: [
    { document: "PAN", from: "The business or owner" },
    { document: "Cancelled cheque or a letter from your bank", from: "The business", note: "Showing the business name, account number and IFSC" },
    { document: "Proof of your business address", from: "The business", note: "Electricity bill, rent agreement or property papers" },
    { document: "Digital signature or Aadhaar", from: "The person signing for the business" },
  ],

  milestones: [
    { when: "Step 1", title: "Details checked", detail: "We make sure the name on your PAN matches your bank and address proofs." },
    { when: "Step 2", title: "Application filed", detail: "We apply on the DGFT portal and the fee is paid online." },
    { when: "Step 3", title: "IEC issued", detail: "You get your e-IEC certificate." },
  ],

  process: [
    {
      title: "Details",
      you: "Send your PAN, bank proof and address proof.",
      us: "Check they match and send a written quote.",
    },
    {
      title: "Filing",
      you: "Sign with your digital signature or Aadhaar.",
      us: "Apply and pay the fee.",
    },
    {
      title: "Handover",
      you: "Share the IEC with your bank and customs agent.",
      us: "Send your certificate and the date of your yearly update.",
    },
  ],

  afterwards: [{ deadline: "April to June, every year", task: "Check and confirm your IEC details, even if nothing has changed", form: "DGFT portal" }],
  afterwardsTitle: "After you get your IEC",
  afterwardsIntro: "If you miss the yearly update, your IEC is switched off until you update it.",

  faqs: [
    {
      question: "Do I need an IEC to export services?",
      answer:
        "Usually not, unless you want export benefits from the government. Some banks still ask for one on payments from abroad. We can tell you whether you need it.",
    },
    {
      question: "Does an IEC expire?",
      answer: "No, but you must confirm your details on the DGFT portal between April and June every year, even if nothing has changed.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Most importers and exporters need it" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Protect your brand" },
  ],

  cta: {
    title: "Starting to import or export?",
    body: "Send us your PAN and bank details. We'll check them and send a quote.",
  },
};
