import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const soleProprietorship: ServicePageContent = {
  path: "/services/business-registration/sole-proprietorship",
  name: "Sole proprietorship setup",
  metaTitle: "Sole proprietorship registration in India: Udyam, GST and bank account",
  metaDescription:
    "Set up a sole proprietorship in India with the registrations your bank needs to open a current account: Udyam, and GST or a shop licence where they apply.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "Sole proprietorship", href: "/services/business-registration/sole-proprietorship" },
  ],
  headline: "Start trading on your own, with the papers your bank asks for.",
  lead: "A sole proprietorship is the simplest way to run a business: it's just you, trading under a business name. There's no single certificate for it. Instead, banks and clients look for registrations like Udyam, GST or a shop licence. We work out which ones you need and file them for you.",
  quoteFacts: [quoteOnRequest],
  callbackTopic: "Register a company or LLP",

  forWho: [
    "You're a freelancer, trader or shop owner working on your own.",
    "You want to try out an idea before paying to set up a company.",
    "Your bank wants registrations before it will open a current account in your business name.",
  ],
  notFor: [
    {
      text: "You want your personal savings protected if the business owes money. A proprietor is personally responsible for every debt.",
      href: "/services/business-registration/one-person-company",
      linkLabel: "Look at a One Person Company",
    },
    {
      text: "You plan to raise money from investors.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Look at a Private Limited company",
    },
  ],

  included: [
    "Checking your business name against registered trademarks",
    "Telling you exactly which registrations your business needs",
    "Udyam registration, the government's record of small businesses",
    "GST registration, if your sales or type of business need it",
    "Shop and office registration (Shops and Establishments), where your state asks for it",
    "A set of documents to take to your bank for a current account",
  ],
  excluded: [
    "State fees for a shop or trade licence (we charge exactly what the government charges)",
    "Trademark filing for your business name",
    "Monthly GST returns and bookkeeping",
  ],

  documents: [
    { document: "PAN card", from: "You" },
    { document: "Aadhaar", from: "You", note: "Linked to your mobile number, for the one-time passwords" },
    { document: "Cancelled cheque or bank statement", from: "You" },
    {
      document: "Proof of your business address",
      from: "You",
      note: "Electricity bill, rent agreement or property tax receipt",
    },
  ],

  milestones: [
    { when: "Step 1", title: "Name and needs check", detail: "We check your business name and list the registrations you need." },
    { when: "Step 2", title: "Udyam registration", detail: "We register you on the Udyam portal using your Aadhaar and PAN." },
    { when: "Step 3", title: "GST or shop licence", detail: "We file whichever other registrations apply to you." },
    { when: "Step 4", title: "Bank papers", detail: "We put together everything your bank asks for to open a current account." },
  ],
  stepsDelays: "Questions from the GST officer and slow state websites are the usual reasons for delay.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us what you sell, where, and roughly how much you expect to sell in a year.",
      us: "List the registrations you need and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload your PAN, Aadhaar, bank and address proofs.",
      us: "Check them and prepare each application.",
    },
    {
      title: "Filing",
      you: "Share the one-time passwords sent to your phone.",
      us: "File each registration and answer any questions.",
    },
    {
      title: "Handover",
      you: "Take the documents to your bank.",
      us: "Send you every certificate and tell you what you need to file from now on.",
    },
  ],

  faqs: [
    {
      question: "Is there a proprietorship certificate?",
      answer:
        "No. A proprietorship isn't a separate legal entity, so there's nothing to incorporate. Your business is recognised through registrations such as Udyam, GST and a shop licence.",
    },
    {
      question: "Am I personally responsible for the business's debts?",
      answer:
        "Yes. In law, you and your proprietorship are the same person, so you are responsible for everything the business owes.",
    },
    {
      question: "Do I need GST registration?",
      answer:
        "Only if your sales cross the GST limit, or you sell goods to other states or through online marketplaces. You can also register by choice.",
    },
    {
      question: "Can I turn it into a company later?",
      answer:
        "Yes. Many founders start as a proprietor and later set up a One Person Company or Private Limited company and move the business into it.",
    },
  ],

  related: [
    { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration", description: "Usually the first registration you need" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "If your sales cross the limit" },
    { label: "One Person Company", href: "/services/business-registration/one-person-company", description: "Protect your personal assets as a solo founder" },
  ],

  cta: {
    title: "Starting out on your own?",
    body: "Tell us what you sell and where. We'll list what you need and send you a quote.",
  },
};
