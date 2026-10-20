import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const soleProprietorship: ServicePageContent = {
  path: "/services/business-registration/sole-proprietorship",
  name: "Sole proprietorship setup",
  metaTitle: "Sole proprietorship registration in India: Udyam, GST and bank account",
  metaDescription:
    "Set up a sole proprietorship in India with the registrations a bank needs to open a current account: Udyam, and GST or Shops and Establishments where they apply.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Start", href: "/services/business-registration" },
    { label: "Sole proprietorship", href: "/services/business-registration/sole-proprietorship" },
  ],
  headline: "A proprietorship, set up with the registrations your bank will ask for.",
  lead: "India has no single proprietorship certificate. Banks and clients accept the business once it holds registrations such as Udyam, GST or a Shops and Establishments licence. We work out which you need, file them, and put together the papers for a current account.",
  quoteFacts: [feeToConfirm, turnaroundToConfirm("a proprietorship setup")],

  forWho: [
    "You are a freelancer, trader or shop owner working on your own.",
    "You want to test an idea before paying for a company.",
    "Your bank has asked for registrations before it opens a current account in your trade name.",
  ],
  notFor: [
    {
      text: "You want your personal assets protected from business debts. A proprietor is personally liable.",
      href: "/services/business-registration/one-person-company",
      linkLabel: "Consider an OPC",
    },
    {
      text: "You plan to raise money from investors.",
      href: "/services/business-registration/private-limited-company",
      linkLabel: "Consider a Private Limited company",
    },
  ],

  included: [
    "A check of your trade name against registered trademarks",
    "Advice on which registrations your business needs",
    "Udyam (MSME) registration",
    "GST registration, if your turnover or type of sale requires it",
    "Shops and Establishments registration, where your state requires it",
    "A document set for opening a current account",
  ],
  excluded: [
    "State fees for Shops and Establishments or a trade licence (paid at cost)",
    "Trademark filing for your trade name",
    "Monthly GST returns and bookkeeping",
  ],

  documents: [
    { document: "PAN card", from: "Proprietor" },
    { document: "Aadhaar", from: "Proprietor", note: "Linked to your mobile number for OTPs" },
    { document: "Cancelled cheque or bank statement", from: "Proprietor" },
    {
      document: "Proof of business address",
      from: "Proprietor",
      note: "Electricity bill, rent agreement or property tax receipt",
    },
  ],

  milestones: [
    { when: "Step 1", title: "Name and scope check", detail: "We check the trade name against trademarks and list the registrations you need." },
    { when: "Step 2", title: "Udyam registration", detail: "We file on the Udyam portal using your Aadhaar and PAN." },
    { when: "Step 3", title: "GST or Shops and Establishments", detail: "We file the registrations that apply to your turnover, state and type of business." },
    { when: "Step 4", title: "Bank documents", detail: "We put together the certificates and proofs your bank asks for." },
  ],
  stepsIntro: stepsIntroToConfirm("a proprietorship setup"),
  stepsDelays: "GST officer queries and state portal outages are the usual causes of delay.",

  process: [
    {
      title: "Call",
      you: "Tell us what you sell, where, and your expected turnover.",
      us: "List the registrations you need and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload your PAN, Aadhaar, bank and address proofs.",
      us: "Check them and prepare each application.",
    },
    {
      title: "Filing",
      you: "Share the OTPs sent to your Aadhaar-linked mobile.",
      us: "File each registration and answer any queries.",
    },
    {
      title: "Handover",
      you: "Take the document set to your bank.",
      us: "Send every certificate and tell you which returns you now owe.",
    },
  ],

  faqs: [
    {
      question: "Is there a proprietorship registration certificate?",
      answer:
        "No. A proprietorship is not a separate legal entity, so there is nothing to incorporate. The business is recognised through registrations such as Udyam, GST and Shops and Establishments.",
    },
    {
      question: "Am I personally liable for the business?",
      answer:
        "Yes. In a proprietorship you and the business are the same person in law. You are liable for all of its debts.",
    },
    {
      question: "Do I need GST registration?",
      answer:
        "Only if your turnover crosses the threshold for your state and type of supply, or you sell across states or through an e-commerce marketplace. You can also register voluntarily.",
    },
    {
      question: "Can I move to a company later?",
      answer:
        "Yes. Many founders start as proprietors and later incorporate an OPC or Private Limited company and move the business into it.",
    },
  ],

  related: [
    { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration", description: "Usually the first registration" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Above turnover thresholds or for interstate sales" },
    { label: "One Person Company", href: "/services/business-registration/one-person-company", description: "Limited liability for a solo founder" },
  ],

  cta: {
    title: "Setting up on your own?",
    body: "Tell us what you sell and where. We will list the registrations you need and send a quote.",
  },
};
