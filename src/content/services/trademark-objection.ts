import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const trademarkObjection: ServicePageContent = {
  path: "/services/trademark-ip/trademark-objection-reply",
  name: "Trademark objection reply",
  metaTitle: "Trademark Objection Reply Online",
  metaDescription:
    "Got a trademark objection? A trademark attorney reviews the examination report and writes a reply that answers each ground, before your deadline.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Trademark and IP", href: "/services/trademark-ip" },
    { label: "Trademark objection reply", href: "/services/trademark-ip/trademark-objection-reply" },
  ],
  headline: "Trademark objection reply, written before your deadline.",
  lead: "An objection doesn't mean your trademark is rejected. It means the Trade Marks Registry wants you to explain why your brand should be registered. If you don't reply in time, the application is treated as abandoned. A trademark attorney reviews the report and writes a reply that answers each point.",
  quoteFacts: [
    { label: "Reply due", value: "Usually within a month", note: "The exact date is in your examination report" },
    quoteOnRequest,
  ],
  callbackTopic: "Trademark or legal documents",

  forWho: [
    "You've received an examination report on your trademark application.",
    "Your application status shows \"Objected\" on the Registry website.",
    "You filed your trademark elsewhere and need help replying.",
  ],
  notFor: [
    {
      text: "You haven't filed your trademark yet.",
      href: "/services/trademark-ip/trademark-registration",
      linkLabel: "Start with trademark registration",
    },
  ],

  included: [
    "A review of the examination report and your application",
    "A plain explanation of each objection and how strong your position is",
    "A written reply by a trademark attorney, with supporting evidence",
    "Filing the reply before the deadline",
    "Tracking the application after the reply",
  ],
  excluded: ["Representation at a hearing, if the Registry calls one (quoted separately)", "Opposition proceedings"],

  documents: [
    { document: "The examination report", from: "You", note: "Or your application number, and we'll download it" },
    { document: "Proof of how long you've used the brand", from: "You", note: "Invoices, website screenshots, ads or packaging" },
    { document: "Signed authorisation form (TM-48)", from: "You", note: "Only if we didn't file the application" },
  ],

  milestones: [
    { when: "Step 1", title: "Report reviewed", detail: "We read the report and explain each objection in plain words." },
    { when: "Step 2", title: "Evidence gathered", detail: "We tell you what proof will help, such as how long you've used the brand." },
    { when: "Step 3", title: "Reply filed", detail: "A trademark attorney writes the reply and we file it before the deadline." },
    { when: "Step 4", title: "Decision", detail: "The Registry accepts the reply, or calls a hearing to discuss it." },
  ],

  process: [
    {
      title: "Send the report",
      you: "Send us the examination report or your application number.",
      us: "Review it and send an opinion and a written quote.",
    },
    {
      title: "Evidence",
      you: "Share proof of how you use the brand.",
      us: "Build the reply around it.",
    },
    {
      title: "Reply",
      you: "Approve the reply.",
      us: "File it and keep you updated.",
    },
  ],

  faqs: [
    {
      question: "What are the common reasons for an objection?",
      answer:
        "Usually either the brand describes the product too plainly (for example, \"Fresh Bakery\" for a bakery), or it's too similar to a brand that's already registered.",
    },
    {
      question: "What happens if I don't reply?",
      answer: "The application is treated as abandoned. You'd have to file again and lose your original filing date.",
    },
    {
      question: "Can I still use ™ while there's an objection?",
      answer: "Yes. You can use ™ as long as your application is pending. You can only use ® once it's registered.",
    },
  ],

  related: [
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "File a new trademark" },
    { label: "Trademark and IP services", href: "/services/trademark-ip", description: "Opposition, renewal and copyright" },
  ],

  cta: {
    title: "Received a trademark objection?",
    body: "Send us the examination report. We'll explain it and tell you what it takes to reply.",
  },
};
