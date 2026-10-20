import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const startupOdisha: ServicePageContent = {
  path: "/services/startup-services/startup-odisha",
  name: "Startup Odisha registration",
  metaTitle: "Startup Odisha registration and support: who qualifies and how to apply",
  metaDescription:
    "Register with Startup Odisha and get ready to apply for the state's allowances, grants and incubator places. For DPIIT-recognised startups based in Odisha.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Startup services", href: "/services/startup-services" },
    { label: "Startup Odisha", href: "/services/startup-services/startup-odisha" },
  ],
  headline: "Get support from Startup Odisha, with help from a team in Bhubaneswar.",
  lead: "Odisha's startup programme offers allowances, grants and space in incubators to recognised startups in the state. We check that you qualify, register you on the Startup Odisha portal and help you get ready for the review.",
  quoteFacts: [quoteOnRequest],
  callbackTopic: "Startup India or fundraising",

  forWho: [
    "Startups based in Odisha.",
    "Startups that already have Startup India (DPIIT) recognition.",
    "Founders who want to apply for the state's allowances, grants or incubator places.",
  ],
  notFor: [
    {
      text: "You don't have Startup India recognition yet.",
      href: "/services/startup-services/startup-india-recognition",
      linkLabel: "Get DPIIT recognition first",
    },
  ],

  included: [
    "Checking you meet the Odisha Startup Policy's rules",
    "Registering you on the Startup Odisha portal",
    "Helping you prepare for the review committee",
    "Advice on the allowances and grants you can apply for",
  ],
  excluded: ["Grant claims and reimbursements, unless quoted", "Incubator applications"],

  documents: [
    { document: "Startup India (DPIIT) certificate", from: "Your business" },
    { document: "Certificate of incorporation and PAN", from: "Your business" },
    { document: "A short project report and pitch deck", from: "Founders" },
    { document: "Proof of your office or work in Odisha", from: "Your business", note: "Utility bill, rent agreement or trade licence" },
    { document: "Founders' ID and address proof", from: "Founders" },
  ],

  milestones: [
    { when: "Step 1", title: "DPIIT check", detail: "We confirm your Startup India recognition is active and your details match." },
    { when: "Step 2", title: "Portal registration", detail: "We submit your details, pitch and documents on the Startup Odisha portal." },
    { when: "Step 3", title: "Review", detail: "We help you prepare for the review and any presentation to the committee." },
    { when: "Step 4", title: "Recognition", detail: "Startup Odisha recognises you, and we tell you what support you can claim." },
  ],
  stepsDelays: "Waiting for the committee to meet is the usual reason for delay.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us about your startup and where your team works.",
      us: "Check you qualify and send a written quote.",
    },
    {
      title: "Application",
      you: "Share your documents and pitch.",
      us: "Register you on the portal.",
    },
    {
      title: "Review",
      you: "Present to the committee if they ask.",
      us: "Help you prepare.",
    },
    {
      title: "After recognition",
      you: "Decide which support to apply for.",
      us: "Talk you through each allowance and grant.",
    },
  ],

  faqs: [
    {
      question: "Do I need Startup India recognition first?",
      answer: "Yes. You need a valid DPIIT certificate before you can register with Startup Odisha.",
    },
    {
      question: "What kind of support is there?",
      answer:
        "The Odisha Startup Policy includes monthly allowances for founders, grants for building and marketing your product, and space in incubators. Amounts and rules change with each policy, so we'll check the current ones for you.",
    },
    {
      question: "Can a startup registered outside Odisha apply?",
      answer: "It depends on how much of your team and work is in Odisha. Tell us your setup and we'll check the current rules.",
    },
  ],

  related: [
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition", description: "You need this before Startup Odisha" },
    { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration", description: "Get access to small business schemes" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "If you haven't registered yet" },
  ],

  cta: {
    title: "Building a startup in Odisha?",
    body: "Tell us about your startup and whether you have DPIIT recognition. We'll check you qualify and send a quote.",
  },
};
