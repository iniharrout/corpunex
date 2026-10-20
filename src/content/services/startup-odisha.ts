import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const startupOdisha: ServicePageContent = {
  path: "/services/startup-services/startup-odisha",
  name: "Startup Odisha registration",
  metaTitle: "Startup Odisha registration and support: eligibility and application",
  metaDescription:
    "Register with Startup Odisha and prepare applications for the state's allowances, grants and incubator programmes. For DPIIT-recognised startups based in Odisha.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Startup services", href: "/services/startup-services" },
    { label: "Startup Odisha", href: "/services/startup-services/startup-odisha" },
  ],
  headline: "Startup Odisha registration, from the firm based in Bhubaneswar.",
  lead: "Odisha's startup policy offers allowances, grants and incubator support to recognised startups in the state. We check your eligibility, register you on the Startup Odisha portal and prepare you for the evaluation.",
  quoteFacts: [
    { label: "Government fee", value: "[VERIFY: Startup Odisha registration fee]" },
    feeToConfirm,
    turnaroundToConfirm("Startup Odisha registration"),
  ],

  forWho: [
    "Startups registered in Odisha, or with most of their staff working in Odisha.",
    "Startups that already hold DPIIT recognition.",
    "Founders who want to apply for the state's allowances, grants or incubator places.",
  ],
  notFor: [
    {
      text: "You do not have DPIIT recognition yet.",
      href: "/services/startup-services/startup-india-recognition",
      linkLabel: "Apply for DPIIT recognition first",
    },
  ],

  included: [
    "Eligibility check against the Odisha Startup Policy",
    "Registration on the Startup Odisha portal",
    "Preparation for the evaluation committee",
    "Advice on the allowances and grants you can apply for",
  ],
  excluded: ["Grant claims and reimbursement filings, unless quoted", "Incubator applications"],

  documents: [
    { document: "DPIIT certificate of recognition", from: "The entity" },
    { document: "Certificate of incorporation and PAN", from: "The entity" },
    { document: "Short project report and pitch deck", from: "Founders" },
    { document: "Proof of office or operations in Odisha", from: "The entity", note: "Utility bill, rent agreement or trade licence" },
    { document: "Founders' KYC", from: "Founders" },
  ],

  milestones: [
    { when: "Step 1", title: "DPIIT check", detail: "We confirm your DPIIT recognition is active and the details match." },
    { when: "Step 2", title: "Portal registration", detail: "We submit your entity details, pitch and documents on the Startup Odisha portal." },
    { when: "Step 3", title: "Evaluation", detail: "We help you prepare for the evaluation and any presentation to the committee." },
    { when: "Step 4", title: "Recognition", detail: "Startup Odisha issues its recognition, and we advise on the support you can claim." },
  ],
  stepsIntro: stepsIntroToConfirm("Startup Odisha registration"),
  stepsDelays: "Committee meeting schedules are the usual cause of delay.",

  process: [
    {
      title: "Call",
      you: "Tell us about the startup and where your team works.",
      us: "Check eligibility and send a written quote.",
    },
    {
      title: "Application",
      you: "Share your documents and pitch.",
      us: "Register you on the portal.",
    },
    {
      title: "Evaluation",
      you: "Present to the committee if asked.",
      us: "Help you prepare.",
    },
    {
      title: "After recognition",
      you: "Decide which support to apply for.",
      us: "Advise on each allowance and grant.",
    },
  ],

  faqs: [
    {
      question: "Can a startup registered outside Odisha apply?",
      answer:
        "[VERIFY: current rule for startups registered outside Odisha, e.g. share of workforce employed in the state]",
    },
    {
      question: "What support is available?",
      answer:
        "The policy offers monthly allowances, product development and marketing grants, and incubator support. [VERIFY: current amounts and conditions under the Odisha Startup Policy]",
    },
    {
      question: "Do I need DPIIT recognition first?",
      answer: "Yes. Startup Odisha registration requires a valid DPIIT certificate of recognition.",
    },
  ],

  related: [
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition", description: "Needed before Startup Odisha" },
    { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration", description: "Access MSME schemes" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "If you have not incorporated yet" },
  ],

  cta: {
    title: "Building a startup in Odisha?",
    body: "Tell us about your startup and your DPIIT status. We will check eligibility and send a quote.",
  },
};
