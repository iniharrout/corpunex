import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const importExportCode: ServicePageContent = {
  path: "/services/licences-registrations/import-export-code",
  name: "Import Export Code (IEC)",
  metaTitle: "Import Export Code (IEC) registration with DGFT",
  metaDescription:
    "Get an Import Export Code from the DGFT for customs clearance and foreign currency receipts. Application on ANF 2A, with yearly updates.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Licences", href: "/services/licences-registrations" },
    { label: "Import Export Code", href: "/services/licences-registrations/import-export-code" },
  ],
  headline: "An Import Export Code from the DGFT, without the back-and-forth.",
  lead: "Customs need an IEC to clear your goods, and banks ask for it on foreign currency payments. We check your PAN and bank details match, file the application with the DGFT and send you the e-IEC.",
  quoteFacts: [
    { label: "Government fee", value: "[VERIFY: DGFT application fee]", note: "Paid at cost, receipt provided" },
    feeToConfirm,
    turnaroundToConfirm("an IEC"),
  ],

  forWho: [
    "You import raw materials or goods.",
    "You export goods.",
    "Your bank has asked for an IEC on payments from overseas clients.",
    "You want to claim export incentives from the DGFT.",
  ],
  notFor: [],

  included: [
    "Check that PAN, bank and address details match",
    "Filing of ANF 2A on the DGFT portal",
    "Your e-IEC certificate",
    "A reminder of the yearly update window",
  ],
  excluded: ["The DGFT application fee (paid at cost)", "Customs registration and export incentive claims"],

  documents: [
    { document: "PAN", from: "The business or proprietor" },
    { document: "Cancelled cheque or bank certificate", from: "The business", note: "Showing the business name, account number and IFSC" },
    { document: "Proof of business address", from: "The business", note: "Electricity bill, rent agreement or property deed" },
    { document: "Digital signature or Aadhaar OTP", from: "Authorised signatory" },
  ],

  milestones: [
    { when: "Step 1", title: "Details checked", detail: "We confirm the name on the PAN matches the bank and address proofs." },
    { when: "Step 2", title: "Application filed", detail: "We file ANF 2A on the DGFT portal and the fee is paid online." },
    { when: "Step 3", title: "IEC issued", detail: "The DGFT issues your e-IEC certificate." },
  ],
  stepsIntro: stepsIntroToConfirm("an IEC"),

  process: [
    {
      title: "Details",
      you: "Send your PAN, bank proof and address proof.",
      us: "Check they match and send a written quote.",
    },
    {
      title: "Filing",
      you: "Sign with your digital signature or Aadhaar OTP.",
      us: "File the application and pay the fee.",
    },
    {
      title: "Handover",
      you: "Share the IEC with your bank and customs agent.",
      us: "Send the certificate and your yearly update date.",
    },
  ],

  afterwards: [{ deadline: "April to June, every year", task: "Update and confirm your IEC details, even if nothing has changed", form: "DGFT portal" }],
  afterwardsTitle: "After registration",
  afterwardsIntro: "An IEC that is not updated in time is deactivated until it is updated.",

  faqs: [
    {
      question: "Do I need an IEC to export services?",
      answer:
        "Not for most services, unless you want to claim export benefits from the DGFT. Some banks ask for one on foreign receipts. We can tell you whether you need it.",
    },
    {
      question: "Does an IEC need renewing?",
      answer:
        "It does not expire, but you must update it on the DGFT portal between April and June each year, even if nothing has changed.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Needed for most importers and exporters" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Protect your brand in India" },
  ],

  cta: {
    title: "Starting to import or export?",
    body: "Send us your PAN and bank details. We will check them and send a quote.",
  },
};
