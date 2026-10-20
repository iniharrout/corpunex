import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const trademarkRegistration: ServicePageContent = {
  path: "/services/trademark-ip/trademark-registration",
  name: "Trademark registration",
  metaTitle: "Trademark Registration Online in India",
  metaDescription:
    "Protect your brand name, logo or tagline. We search for clashing brands first, pick the right classes with you, file your application and track it to registration.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Trademark and IP", href: "/services/trademark-ip" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration" },
  ],
  headline: "Trademark registration: protect your brand before someone else takes it.",
  lead: "A registered trademark means nobody else in India can use your brand name or logo for the same kind of business. Most applications run into trouble because a similar brand already exists or the wrong category was picked. So we search first, choose your categories with you, and then file.",
  quoteFacts: [
    { label: "Government fee", value: "Per category", note: "Lower for individuals, startups and small businesses" },
    { ...quoteOnRequest, note: "Per category, itemised and in writing" },
    { label: "Use ™", value: "From the day we file" },
  ],
  callbackTopic: "Trademark or legal documents",

  forWho: [
    "You're launching a brand name, logo or tagline.",
    "You sell direct to customers and want to protect your packaging and shop name.",
    "You have an app or software product and want to protect its name.",
    "You sell on online marketplaces and need a trademark for their brand programmes.",
  ],
  notFor: [],

  included: [
    "A search for brands that are the same as or similar to yours",
    "A written opinion on how likely your trademark is to be accepted",
    "Choosing the right categories (classes) and describing what you sell",
    "The authorisation form that lets us file for you (TM-48)",
    "Filing your application in one category",
    "Tracking it through review and publication",
  ],
  excluded: [
    "Government fees (we charge exactly what the government charges)",
    "Replying to objections, unless quoted",
    "Disputes with other brand owners (oppositions and hearings)",
    "Filing outside India",
  ],

  documents: [
    { document: "Your brand", from: "You", note: "The name, or a clear image of your logo" },
    { document: "PAN, and Aadhaar or your certificate of incorporation", from: "You" },
    { document: "Udyam or Startup India certificate", from: "You", note: "To pay the lower government fee" },
    { document: "Signed authorisation form (TM-48)", from: "You", note: "We prepare it" },
    { document: "Proof you've already been using the brand", from: "You", note: "Only if you want to claim an earlier start date" },
  ],

  milestones: [
    { when: "Step 1", title: "Search", detail: "We look for similar brands and tell you how likely yours is to be accepted." },
    { when: "Step 2", title: "Categories agreed", detail: "We match what you sell to the right categories and wording." },
    { when: "Step 3", title: "Application filed", detail: "We file and send you the application number. You can start using ™ straight away." },
    { when: "Step 4", title: "Review", detail: "The Trade Marks Registry checks your application and accepts it or raises an objection." },
    { when: "Step 5", title: "Published, then registered", detail: "Your trademark is published for 4 months so others can object. If nobody does, it's registered." },
  ],
  stepsDelays: "Objections from the Registry or from another brand owner are the usual reasons for delay.",

  process: [
    {
      title: "Search",
      you: "Send us your brand and what you sell under it.",
      us: "Search for similar brands and send an opinion and a written quote.",
    },
    {
      title: "Filing",
      you: "Approve the categories and sign the authorisation form.",
      us: "File your application and send the receipt.",
    },
    {
      title: "Tracking",
      you: "Tell us if you spot a similar brand out there.",
      us: "Track your application and update you on every step.",
    },
    {
      title: "Registration",
      you: "Start using ® once it's registered.",
      us: "Send your registration certificate and your renewal date.",
    },
  ],

  afterwards: [{ deadline: "Every 10 years", task: "Renew your trademark", form: "TM-R" }],
  afterwardsTitle: "After registration",
  afterwardsIntro: "A registered trademark lasts 10 years, and you can keep renewing it.",

  faqs: [
    {
      question: "When can I use ™ and ®?",
      answer:
        "You can use ™ as soon as your application is filed. You can only use ® once your trademark is registered. Using ® before then is against the law.",
    },
    {
      question: "What if the Registry raises an objection?",
      answer:
        "Objections are common and don't mean you've lost. You get a set time to reply. We review the objection, and a trademark attorney writes the reply.",
    },
    {
      question: "How many categories do I need?",
      answer:
        "One for each kind of product or service you sell under the brand. Most small businesses need one or two. We'll suggest the right ones after the search.",
    },
    {
      question: "Who pays the lower government fee?",
      answer: "Individuals, recognised startups and small businesses with Udyam registration. You just send us the certificate.",
    },
  ],

  related: [
    { label: "Private Limited Company", href: "/services/business-registration/private-limited-company", description: "Register the company behind your brand" },
    { label: "Startup India (DPIIT)", href: "/services/startup-services/startup-india-recognition", description: "Lets you pay the lower trademark fee" },
    { label: "Copyright, design and patents", href: "/services/trademark-ip", description: "Other ways to protect your work" },
  ],

  cta: {
    title: "Want to protect your brand?",
    body: "Send us your brand name or logo and what you sell. We'll search for clashes and send you an opinion and a quote.",
  },
};
