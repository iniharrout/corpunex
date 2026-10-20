import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const startupIndia: ServicePageContent = {
  path: "/services/startup-services/startup-india-recognition",
  name: "Startup India (DPIIT) recognition",
  metaTitle: "Startup India (DPIIT) recognition: eligibility, documents and application",
  metaDescription:
    "Apply for DPIIT startup recognition with an application written to the published criteria. Recognition is the first step towards the 80-IAC tax exemption.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Startup services", href: "/services/startup-services" },
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition" },
  ],
  headline: "DPIIT recognition, with an application written to the criteria.",
  lead: "DPIIT recognises startups that are working on innovation or have a scalable model. We check your eligibility, write the description of your product and its innovation in the form DPIIT expects, file on the Startup India portal and answer any queries.",
  quoteFacts: [
    { label: "Government fee", value: "None", note: "DPIIT does not charge for recognition" },
    feeToConfirm,
    turnaroundToConfirm("DPIIT recognition"),
  ],

  forWho: [
    "Private Limited companies, LLPs and registered partnership firms.",
    "Entities incorporated within the last 10 years.",
    "Businesses working on a new or improved product, process or service, or with a scalable model.",
    "Founders who plan to apply for the 80-IAC tax exemption.",
  ],
  notFor: [
    {
      text: "You are a sole proprietor. Proprietorships are not eligible.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Incorporate a company first",
    },
  ],

  included: [
    "Eligibility check against the DPIIT criteria",
    "Write-up of your product, innovation and scalability",
    "Filing on the Startup India portal",
    "Replies to DPIIT queries",
    "Advice on the 80-IAC application and other schemes after recognition",
  ],
  excluded: ["The 80-IAC application to the Inter-Ministerial Board, unless quoted", "Pitch deck design", "Applications under individual funding schemes"],

  documents: [
    { document: "Certificate of incorporation or registration", from: "The entity" },
    { document: "MoA and AoA, or LLP agreement", from: "The entity" },
    { document: "Description of the product and what is new about it", from: "Founders", note: "We help you write it" },
    { document: "Pitch deck, website or app link", from: "Founders" },
    { document: "Proof of funding, awards, patents or traction", from: "Founders", note: "If you have any" },
  ],

  milestones: [
    { when: "Step 1", title: "Eligibility check", detail: "We check your entity, age, turnover and model against the DPIIT criteria." },
    { when: "Step 2", title: "Application drafted", detail: "We write up your innovation, scalability and job creation in the required format." },
    { when: "Step 3", title: "Application filed", detail: "We file on the Startup India portal." },
    { when: "Step 4", title: "Queries answered", detail: "If DPIIT asks for clarification, we draft and submit the reply." },
    { when: "Step 5", title: "Certificate issued", detail: "DPIIT issues your certificate of recognition." },
  ],
  stepsIntro: stepsIntroToConfirm("DPIIT recognition"),
  stepsDelays: "Vague descriptions of the innovation are the usual reason DPIIT asks for clarification.",

  process: [
    {
      title: "Call",
      you: "Walk us through your product and your entity's details.",
      us: "Check eligibility and send a written quote.",
    },
    {
      title: "Write-up",
      you: "Answer our questions about the product and market.",
      us: "Draft the application text for your approval.",
    },
    {
      title: "Filing",
      you: "Approve the final application.",
      us: "File it and track it.",
    },
    {
      title: "Handover",
      you: "Decide which schemes to apply for.",
      us: "Send the certificate and advise on 80-IAC and other schemes.",
    },
  ],

  faqs: [
    {
      question: "Does recognition give me the 3-year tax exemption?",
      answer:
        "Not on its own. Recognition is the first step. To get the 80-IAC exemption, an eligible company or LLP applies separately to the Inter-Ministerial Board. [VERIFY: current 80-IAC incorporation cut-off date]",
    },
    {
      question: "Can a proprietorship apply?",
      answer: "No. Only Private Limited companies, registered partnership firms and LLPs can be recognised.",
    },
    {
      question: "Is there a turnover limit?",
      answer:
        "Yes. Turnover must not have exceeded ₹100 crore in any financial year since incorporation. The entity also must not have been formed by splitting up or reconstructing an existing business.",
    },
    {
      question: "Can you guarantee recognition?",
      answer:
        "No. DPIIT decides each application. We write the application to the published criteria, which reduces queries and rejections but cannot remove them.",
    },
  ],

  related: [
    { label: "Startup Odisha", href: "/services/startup-services/startup-odisha", description: "State support for Odisha startups" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "The usual structure for recognition" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Lower fee for recognised startups" },
  ],

  cta: {
    title: "Applying for recognition?",
    body: "Tell us about your product and your entity. We will check eligibility and send a quote.",
  },
};
