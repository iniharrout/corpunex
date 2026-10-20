import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm } from "./shared";

export const trademarkRegistration: ServicePageContent = {
  path: "/services/trademark-ip/trademark-registration",
  name: "Trademark registration",
  metaTitle: "Trademark registration in India: search, classes, filing and objections",
  metaDescription:
    "Register your brand name, logo or tagline with the Trade Marks Registry. Search, class selection, TM-A filing and tracking through examination and publication.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Trademark and IP", href: "/services/trademark-ip" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration" },
  ],
  headline: "Your brand name, filed in the right classes after a proper search.",
  lead: "Most trademark objections come from a conflicting mark that a search would have found, or a class that does not match what you sell. We search first, choose your classes with you, file TM-A and track the application through examination and publication.",
  quoteFacts: [
    {
      label: "Government fee",
      value: "[VERIFY: Registry fee per class]",
      note: "Lower for individuals, startups and small enterprises",
    },
    { ...feeToConfirm, note: `${feeToConfirm.note}, per class` },
    { label: "Timeline", value: "™ from filing", note: "[VERIFY: typical time to registration]" },
  ],

  forWho: [
    "You are launching a brand name, logo or tagline.",
    "You sell direct to consumers and want to protect your packaging and store name.",
    "You run a software product or app and want to protect its name.",
    "You sell on marketplaces and need a trademark for brand registry programmes.",
  ],
  notFor: [],

  included: [
    "Search of the Registry for identical and similar marks",
    "A written opinion on how likely the mark is to be accepted",
    "Selection of classes and the description of goods or services",
    "Power of attorney (TM-48)",
    "Filing of TM-A in one class",
    "Tracking through examination and publication",
  ],
  excluded: [
    "Trade Marks Registry fees (paid at cost)",
    "Replies to examination reports, unless quoted",
    "Opposition proceedings and hearings",
    "Filing outside India",
  ],

  documents: [
    { document: "The mark", from: "Applicant", note: "Word, or logo as a high-resolution image" },
    { document: "PAN, and Aadhaar or certificate of incorporation", from: "Applicant" },
    { document: "Udyam or DPIIT certificate", from: "Applicant", note: "To claim the lower fee" },
    { document: "Signed power of attorney (TM-48)", from: "Applicant", note: "We prepare it" },
    { document: "Affidavit and proof of use", from: "Applicant", note: "Only if you claim use before the filing date" },
  ],

  milestones: [
    { when: "Step 1", title: "Search and opinion", detail: "We search for conflicting marks and tell you how likely the mark is to be accepted." },
    { when: "Step 2", title: "Classes agreed", detail: "We match your goods or services to the right classes and wording." },
    { when: "Step 3", title: "Application filed", detail: "We file TM-A. You get an application number and can use ™ straight away." },
    { when: "Step 4", title: "Examination", detail: "The Registry examines the mark and accepts it or issues an examination report." },
    { when: "Step 5", title: "Publication and registration", detail: "The mark is published in the Trade Marks Journal for 4 months of opposition, then registered." },
  ],
  stepsIntro: stepsIntroToConfirm("trademark registration"),
  stepsDelays: "Examination objections and oppositions are the usual causes of delay.",

  process: [
    {
      title: "Search",
      you: "Send us the mark and what you sell under it.",
      us: "Search the Registry and send a written opinion and quote.",
    },
    {
      title: "Filing",
      you: "Approve the classes and sign the power of attorney.",
      us: "File the application and send the receipt.",
    },
    {
      title: "Tracking",
      you: "Tell us if you see a similar mark in the market.",
      us: "Track the application and tell you about every Registry action.",
    },
    {
      title: "Registration",
      you: "Start using ® once the mark is registered.",
      us: "Send the registration certificate and your renewal date.",
    },
  ],

  afterwards: [{ deadline: "Every 10 years", task: "Renew the registration", form: "TM-R" }],
  afterwardsTitle: "After registration",
  afterwardsIntro: "A registered trademark lasts 10 years and can be renewed indefinitely.",

  faqs: [
    {
      question: "When can I use ™ and ®?",
      answer:
        "You can use ™ once the application is filed. You can use ® only after the mark is registered. Using ® before then is an offence under the Trade Marks Act.",
    },
    {
      question: "What if the examination report raises an objection?",
      answer:
        "Objections are common. You must reply within the time set in the report, usually a month. We review the objection and a trademark attorney drafts the reply.",
    },
    {
      question: "How many classes do I need?",
      answer:
        "One for each type of goods or service you sell under the mark. Many businesses need one or two. We suggest classes after the search.",
    },
    {
      question: "Who can claim the lower government fee?",
      answer:
        "Individuals, DPIIT-recognised startups and enterprises with Udyam registration. You need to send the certificate with the application.",
    },
  ],

  related: [
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "Register the company behind the brand" },
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition", description: "Qualifies you for the lower trademark fee" },
    { label: "Copyright, design and patents", href: "/services/trademark-ip", description: "Other ways to protect your work" },
  ],

  cta: {
    title: "Protecting a brand?",
    body: "Send us the name or logo and what you sell. We will search the Registry and send an opinion and quote.",
  },
};
