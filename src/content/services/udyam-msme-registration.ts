import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const udyam: ServicePageContent = {
  path: "/services/startup-services/udyam-msme-registration",
  name: "Udyam (MSME) registration",
  metaTitle: "Udyam (MSME) registration in India: who can apply, documents and process",
  metaDescription:
    "Register your business on the Udyam portal and get an MSME certificate for easier loans and protection when buyers pay late. There's no government fee.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Startup services", href: "/services/startup-services" },
    { label: "Udyam (MSME)", href: "/services/startup-services/udyam-msme-registration" },
  ],
  headline: "Get your Udyam certificate, right the first time.",
  lead: "Udyam registration puts your business on the government's list of small and medium businesses (MSMEs). It can make loans easier to get and protects you when buyers pay late. We pick the right business categories, file it, and send you the certificate.",
  quoteFacts: [{ label: "Government fee", value: "None", note: "The Udyam portal is free" }, quoteOnRequest],
  callbackTopic: "Startup India or fundraising",

  forWho: [
    "You run a manufacturing or services business, whatever its structure.",
    "You want to use government schemes for small business loans and subsidies.",
    "You want legal protection when customers pay you late.",
    "A buyer, bank or tender has asked for your Udyam number.",
  ],
  notFor: [],

  included: [
    "Choosing the right business activity codes (NIC codes) for what you do",
    "Checking your PAN, Aadhaar and GST details match before filing",
    "Filing on the Udyam portal",
    "Your Udyam certificate, showing whether you're a micro, small or medium business",
  ],
  excluded: ["Applications for individual government schemes", "GST registration, if you need it"],

  documents: [
    { document: "Aadhaar", from: "The owner, managing partner or a director" },
    { document: "PAN", from: "The business" },
    { document: "GST number", from: "The business", note: "Only if you have one" },
    { document: "Bank account number and IFSC", from: "The business" },
    {
      document: "What you've spent on machinery and equipment, and your sales",
      from: "The business",
      note: "Figures from your last tax return",
    },
  ],

  milestones: [
    { when: "Step 1", title: "Details checked", detail: "We check your PAN and Aadhaar are linked and choose your activity codes." },
    { when: "Step 2", title: "Application filed", detail: "We enter your business details on the Udyam portal." },
    { when: "Step 3", title: "Certificate issued", detail: "You get a permanent Udyam number and certificate." },
  ],

  process: [
    {
      title: "Details",
      you: "Send your PAN, Aadhaar and a line on what the business does.",
      us: "Choose your activity codes and check everything matches.",
    },
    {
      title: "Filing",
      you: "Share the one-time password sent to your phone.",
      us: "File the application.",
    },
    {
      title: "Handover",
      you: "Keep the certificate with your business records.",
      us: "Send you the certificate and explain the schemes it opens up.",
    },
  ],

  faqs: [
    {
      question: "Is there a government fee?",
      answer: "No. Registering on the Udyam portal is free.",
    },
    {
      question: "How do I know if I'm micro, small or medium?",
      answer:
        "It depends on what you've invested in machinery and equipment and on your yearly sales. The portal works it out from your details, and we'll tell you which one you are.",
    },
    {
      question: "Do I have to renew it?",
      answer:
        "No. Your Udyam number is permanent. Your figures are updated from your tax and GST records, which can move you to a different category over time.",
    },
    {
      question: "How does it help when customers pay late?",
      answer:
        "Under the MSMED Act, a buyer must pay a registered micro or small business within the agreed time, and never later than 45 days. If they pay late, they owe interest at three times the RBI's bank rate.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Often needed alongside Udyam" },
    { label: "Sole proprietorship setup", href: "/services/business-registration/sole-proprietorship", description: "Udyam is usually the first step" },
    { label: "FSSAI licence", href: "/services/licences-registrations/fssai-licence", description: "If you make or sell food" },
  ],

  cta: {
    title: "Need a Udyam certificate?",
    body: "Send us your PAN and a line on what your business does. We'll tell you what else you might need.",
  },
};
