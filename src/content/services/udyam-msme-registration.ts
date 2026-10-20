import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const udyam: ServicePageContent = {
  path: "/services/startup-services/udyam-msme-registration",
  name: "Udyam (MSME) registration",
  metaTitle: "Udyam (MSME) registration in India: eligibility, documents and process",
  metaDescription:
    "Register your business on the Udyam portal to get an MSME certificate for priority lending and protection against late payments. No government fee.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Startup services", href: "/services/startup-services" },
    { label: "Udyam (MSME)", href: "/services/startup-services/udyam-msme-registration" },
  ],
  headline: "Your Udyam certificate, filed correctly the first time.",
  lead: "Udyam registration puts your business on the Ministry of MSME's records as a micro, small or medium enterprise. We pick the right activity codes, file on the Udyam portal and send you the certificate.",
  quoteFacts: [
    { label: "Government fee", value: "None", note: "The Udyam portal does not charge a fee" },
    feeToConfirm,
    turnaroundToConfirm("Udyam registration"),
  ],

  forWho: [
    "You run a manufacturing or services business of any structure.",
    "You want access to MSME schemes for loans and subsidies.",
    "You want the MSMED Act's protection when buyers pay late.",
    "A buyer, bank or tender has asked for your Udyam number.",
  ],
  notFor: [],

  included: [
    "Selection of NIC activity codes for what you do",
    "Check of PAN, Aadhaar and GSTIN details before filing",
    "Filing on the Udyam portal",
    "The Udyam certificate with your MSME category",
  ],
  excluded: ["Applications under individual MSME schemes", "GST registration, if you need it"],

  documents: [
    { document: "Aadhaar", from: "Proprietor, managing partner or authorised director" },
    { document: "PAN", from: "The business" },
    { document: "GSTIN", from: "The business", note: "If registered" },
    { document: "Bank account number and IFSC", from: "The business" },
    { document: "Investment in plant and machinery, and turnover", from: "The business", note: "Figures from your last return" },
  ],

  milestones: [
    { when: "Step 1", title: "Details checked", detail: "We check PAN and Aadhaar linking and choose your activity codes." },
    { when: "Step 2", title: "Application filed", detail: "We file investment, turnover and activity details on the Udyam portal." },
    { when: "Step 3", title: "Certificate issued", detail: "The portal issues your permanent Udyam Registration Number and certificate." },
  ],
  stepsIntro: stepsIntroToConfirm("Udyam registration"),

  process: [
    {
      title: "Details",
      you: "Send your PAN, Aadhaar and a description of what the business does.",
      us: "Choose activity codes and check your details match.",
    },
    {
      title: "Filing",
      you: "Share the OTP sent to your Aadhaar-linked mobile.",
      us: "File the application on the Udyam portal.",
    },
    {
      title: "Handover",
      you: "Keep the certificate with your business records.",
      us: "Send the certificate and explain the schemes it opens up.",
    },
  ],

  faqs: [
    {
      question: "Is there a government fee?",
      answer: "No. The Udyam portal does not charge a fee for registration.",
    },
    {
      question: "Which category will my business be in?",
      answer:
        "It depends on investment in plant and machinery and on turnover. [VERIFY: current micro, small and medium limits for investment and turnover]",
    },
    {
      question: "Does the certificate need renewing?",
      answer:
        "No. The Udyam number is permanent. Your investment and turnover are updated from your income tax and GST records, which can change your category.",
    },
    {
      question: "What protection do I get against late payment?",
      answer:
        "Under the MSMED Act, a buyer must pay a registered micro or small enterprise within the agreed period, and no later than 45 days. Late payments carry interest at three times the bank rate set by the RBI.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Often needed alongside Udyam" },
    { label: "Sole proprietorship setup", href: "/services/business-registration/sole-proprietorship", description: "Udyam is usually the first step" },
    { label: "FSSAI licence", href: "/services/licences-registrations/fssai-licence", description: "If you handle food" },
  ],

  cta: {
    title: "Need a Udyam certificate?",
    body: "Send us your PAN and a line on what the business does. We will tell you what else you need.",
  },
};
