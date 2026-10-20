import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const gstRegistration: ServicePageContent = {
  path: "/services/gst-taxation/gst-registration",
  name: "GST registration",
  metaTitle: "GST registration in India: thresholds, documents and process",
  metaDescription:
    "Get your GSTIN with an application that is checked before it is filed. We handle REG-01, Aadhaar authentication and any officer queries. No government fee.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "GST and tax", href: "/services/gst-taxation" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration" },
  ],
  headline: "A GSTIN, with the application checked before it is filed.",
  lead: "Most GST delays come from a mismatched address proof or the wrong jurisdiction. We check both, file REG-01, help with Aadhaar authentication and reply to any officer query until the certificate is issued.",
  quoteFacts: [
    { label: "Government fee", value: "None", note: "The GST portal does not charge a fee" },
    feeToConfirm,
    turnaroundToConfirm("GST registration"),
  ],

  forWho: [
    "Your turnover has crossed, or will soon cross, the GST threshold for your state.",
    "You sell goods to customers in other states.",
    "You sell through an e-commerce marketplace.",
    "You export services and want to bill without GST under a letter of undertaking.",
    "Your B2B clients want GST invoices so they can claim input tax credit.",
  ],
  notFor: [],

  included: [
    "Check of jurisdiction and HSN or SAC codes",
    "Review of address proof and premises documents",
    "Filing of REG-01, Parts A and B",
    "Help with Aadhaar authentication or the biometric appointment",
    "Replies to officer queries (REG-03) on REG-04",
    "The GST certificate (REG-06) and first login",
    "A note on your first GSTR-1 and GSTR-3B due dates",
  ],
  excluded: ["Monthly or quarterly GST returns", "Letter of undertaking for exports, unless quoted", "Additional places of business"],

  documents: [
    { document: "PAN", from: "The business or proprietor" },
    { document: "Aadhaar and photograph", from: "Proprietor, partners or directors" },
    {
      document: "Proof of business address",
      from: "The business",
      note: "Electricity bill or property tax receipt, plus rent agreement and owner's no-objection letter if rented",
    },
    { document: "Cancelled cheque or bank statement", from: "The business" },
    {
      document: "Letter or board resolution naming the authorised signatory",
      from: "The business",
      note: "Not needed for proprietors. We draft it.",
    },
  ],

  milestones: [
    { when: "Step 1", title: "Pre-filing check", detail: "We confirm your jurisdiction, codes and that the address proof matches the application." },
    { when: "Step 2", title: "Application filed", detail: "We file REG-01 on the GST portal." },
    { when: "Step 3", title: "Aadhaar authentication", detail: "You complete OTP authentication, or a biometric check at a GST Suvidha Kendra if the portal asks." },
    { when: "Step 4", title: "Queries answered", detail: "If the officer issues REG-03, we draft and file the reply on REG-04." },
    { when: "Step 5", title: "Certificate issued", detail: "The officer approves the application and the portal issues REG-06 with your GSTIN." },
  ],
  stepsIntro: stepsIntroToConfirm("GST registration"),
  stepsDelays: "Officer queries on the premises and biometric appointments are the usual causes of delay.",

  process: [
    {
      title: "Call and quote",
      you: "Tell us what you sell, where, and to whom.",
      us: "Confirm whether you must register and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them against what officers usually question.",
    },
    {
      title: "Filing",
      you: "Complete Aadhaar authentication when the portal asks.",
      us: "File REG-01 and track it.",
    },
    {
      title: "Queries",
      you: "Send any extra proof the officer asks for.",
      us: "Draft and file the reply.",
    },
    {
      title: "Handover",
      you: "Add your GSTIN to your invoices.",
      us: "Send the certificate and your first return dates.",
    },
  ],

  afterwards: [
    { deadline: "Monthly or quarterly", task: "Report outward supplies", form: "GSTR-1" },
    { deadline: "Monthly or quarterly", task: "Pay tax and file the summary return", form: "GSTR-3B" },
    { deadline: "Every year", task: "File the annual return, if your turnover requires it", form: "GSTR-9" },
  ],
  afterwardsTitle: "After registration",
  afterwardsIntro: "Returns are due from the month your registration takes effect, even if you have no sales.",

  faqs: [
    {
      question: "When must I register?",
      answer:
        "When turnover crosses ₹40 lakh for goods or ₹20 lakh for services in most states (₹20 lakh and ₹10 lakh in special category states). You must register regardless of turnover if you sell goods across states or sell through an e-commerce operator. [VERIFY: thresholds and exceptions are current]",
    },
    {
      question: "Can I register voluntarily?",
      answer:
        "Yes. Many B2B service firms register below the threshold so they can claim input tax credit and meet client onboarding rules. Once registered, you must file returns.",
    },
    {
      question: "What happens if the officer raises a query?",
      answer:
        "The officer issues REG-03. You have 7 working days to reply on REG-04. We draft the reply and file it with any extra documents.",
    },
    {
      question: "Can I use my home address?",
      answer:
        "Yes, if you have proof of the address and, if it is rented or owned by someone else, their consent. Officers sometimes ask for photographs of the premises.",
    },
  ],

  related: [
    { label: "GST returns", href: "/services/gst-taxation", description: "GSTR-1 and GSTR-3B every month or quarter" },
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing", description: "Annual return for the business" },
    { label: "Import Export Code", href: "/services/licences-registrations/import-export-code", description: "If you import or export" },
  ],

  cta: {
    title: "Need a GSTIN?",
    body: "Tell us what you sell and where. We will confirm whether you must register and send a quote.",
  },
};
