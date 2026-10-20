import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const startupIndia: ServicePageContent = {
  path: "/services/startup-services/startup-india-recognition",
  name: "Startup India (DPIIT) recognition",
  metaTitle: "Startup India (DPIIT) recognition: who qualifies, documents and how to apply",
  metaDescription:
    "Get your startup recognised by DPIIT under Startup India. We check you qualify, write your application and answer any questions. It's the first step to the 80-IAC tax exemption.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Startup services", href: "/services/startup-services" },
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition" },
  ],
  headline: "Get your startup officially recognised by the government.",
  lead: "Startup India recognition comes from DPIIT, a government department. It opens the door to tax benefits, lower fees for trademarks and patents, and government schemes. We check that you qualify, explain your idea in the way DPIIT expects, apply for you and answer their questions.",
  quoteFacts: [{ label: "Government fee", value: "None", note: "DPIIT doesn't charge for recognition" }, quoteOnRequest],
  callbackTopic: "Startup India or fundraising",

  forWho: [
    "Private Limited companies, LLPs and registered partnership firms.",
    "Businesses set up in the last 10 years.",
    "Businesses building a new or better product, process or service, or one that can grow fast.",
    "Founders who want to apply for the 80-IAC income tax exemption.",
  ],
  notFor: [
    {
      text: "You're a sole proprietor. Proprietorships can't be recognised.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Register a company first",
    },
  ],

  included: [
    "Checking that you meet DPIIT's rules",
    "Writing up your product, what's new about it, and how it can grow",
    "Applying on the Startup India portal",
    "Replying to any questions from DPIIT",
    "Advice on the 80-IAC tax exemption and other schemes once you're recognised",
  ],
  excluded: ["The 80-IAC tax exemption application, unless quoted", "Designing your pitch deck", "Applications for individual funding schemes"],

  documents: [
    { document: "Certificate of incorporation or registration", from: "Your business" },
    { document: "Company rulebook (MoA and AoA) or LLP agreement", from: "Your business" },
    { document: "A description of your product and what's new about it", from: "Founders", note: "We help you write it" },
    { document: "Pitch deck, website or app link", from: "Founders" },
    { document: "Proof of funding, awards, patents or customers", from: "Founders", note: "If you have any" },
  ],

  milestones: [
    { when: "Step 1", title: "Eligibility check", detail: "We check your business type, age, sales and idea against DPIIT's rules." },
    { when: "Step 2", title: "Application written", detail: "We write up your idea, how it can grow and the jobs it could create." },
    { when: "Step 3", title: "Application filed", detail: "We apply on the Startup India portal." },
    { when: "Step 4", title: "Questions answered", detail: "If DPIIT asks for more detail, we write the reply." },
    { when: "Step 5", title: "Certificate issued", detail: "You get your certificate of recognition." },
  ],
  stepsDelays: "A vague description of what's new about the idea is the usual reason DPIIT asks for more.",

  process: [
    {
      title: "Talk to us",
      you: "Walk us through your product and your business details.",
      us: "Check you qualify and send a written quote.",
    },
    {
      title: "Write-up",
      you: "Answer our questions about the product and your market.",
      us: "Write the application for you to approve.",
    },
    {
      title: "Filing",
      you: "Approve the final application.",
      us: "File it and keep track of it.",
    },
    {
      title: "Handover",
      you: "Decide which schemes to go for next.",
      us: "Send your certificate and advise on 80-IAC and other schemes.",
    },
  ],

  faqs: [
    {
      question: "Does recognition give me the 3-year tax holiday?",
      answer:
        "Not on its own. Recognition is the first step. To get the 80-IAC exemption, an eligible company or LLP makes a separate application to a government board, which decides each case.",
    },
    {
      question: "Can a proprietorship apply?",
      answer: "No. Only Private Limited companies, registered partnership firms and LLPs can be recognised.",
    },
    {
      question: "Is there a limit on sales?",
      answer:
        "Yes. Your yearly sales must never have gone above ₹100 crore since you started. The business also can't have been formed by splitting up or restructuring an existing one.",
    },
    {
      question: "Can you guarantee I'll be recognised?",
      answer:
        "No. DPIIT decides every application. We write yours to their published rules, which makes questions and rejections less likely, but nobody can promise the result.",
    },
  ],

  related: [
    { label: "Startup Odisha", href: "/services/startup-services/startup-odisha", description: "State support for startups in Odisha" },
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "The usual structure for recognised startups" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Lower fee for recognised startups" },
  ],

  cta: {
    title: "Ready to get recognised?",
    body: "Tell us about your product and your business. We'll check you qualify and send a quote.",
  },
};
