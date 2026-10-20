import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const gstRegistration: ServicePageContent = {
  path: "/services/gst-taxation/gst-registration",
  name: "GST registration",
  metaTitle: "GST Registration Online in India",
  metaDescription:
    "Get your GST number online with an application we check before filing. We handle the forms, Aadhaar check and officer questions. No government fee.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "GST and tax", href: "/services/gst-taxation" },
    { label: "GST registration", href: "/services/gst-taxation/gst-registration" },
  ],
  headline: "GST registration online, without the back-and-forth.",
  lead: "Most GST applications get stuck because the address proof doesn't match or the wrong tax office is picked. We check both before filing, help you with the Aadhaar check, and answer the GST officer's questions until your certificate arrives.",
  quoteFacts: [{ label: "Government fee", value: "None", note: "The GST portal is free" }, quoteOnRequest],
  callbackTopic: "GST, accounting or tax returns",

  forWho: [
    "Your sales have crossed, or will soon cross, the GST limit.",
    "You sell goods to customers in other states.",
    "You sell on an online marketplace.",
    "You export services and want to bill overseas clients without GST.",
    "Your business customers want GST invoices so they can claim the tax back.",
  ],
  notFor: [],

  included: [
    "Picking the right tax office and product or service codes (HSN or SAC)",
    "Checking your address proof and premises documents",
    "Filing your application (Form REG-01)",
    "Help with the Aadhaar check, or booking the in-person check if the portal asks",
    "Replying to any questions from the GST officer",
    "Your GST certificate and first login",
    "A note of when your first GST returns are due",
  ],
  excluded: ["Monthly or quarterly GST returns", "Extra business addresses", "The export letter of undertaking (LUT), unless quoted"],

  documents: [
    { document: "PAN", from: "The business or owner" },
    { document: "Aadhaar and a photo", from: "The owner, partners or directors" },
    {
      document: "Proof of your business address",
      from: "The business",
      note: "Electricity bill or property tax receipt. If rented, the rent agreement and the owner's no-objection letter too.",
    },
    { document: "Cancelled cheque or bank statement", from: "The business" },
    {
      document: "A letter naming who signs for the business",
      from: "The business",
      note: "Not needed for a proprietor. We write it for you.",
    },
  ],

  milestones: [
    { when: "Step 1", title: "Check before filing", detail: "We confirm your tax office, codes and that your address proof matches." },
    { when: "Step 2", title: "Application filed", detail: "We file your application on the GST portal." },
    { when: "Step 3", title: "Aadhaar check", detail: "You confirm with a one-time password, or visit a GST centre if the portal asks." },
    { when: "Step 4", title: "Questions answered", detail: "If the officer asks for more, we write and file the reply." },
    { when: "Step 5", title: "Certificate issued", detail: "You get your GST number and certificate." },
  ],
  stepsDelays: "Officer questions about your premises and in-person checks are the usual reasons for delay.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us what you sell, where, and who your customers are.",
      us: "Tell you if you have to register and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them for the things officers usually question.",
    },
    {
      title: "Filing",
      you: "Do the Aadhaar check when the portal asks.",
      us: "File the application and keep track of it.",
    },
    {
      title: "Questions",
      you: "Send any extra proof the officer asks for.",
      us: "Write and file the reply.",
    },
    {
      title: "Handover",
      you: "Add your GST number to your invoices.",
      us: "Send your certificate and the dates of your first returns.",
    },
  ],

  afterwards: [
    { deadline: "Monthly or quarterly", task: "Report your sales", form: "GSTR-1" },
    { deadline: "Monthly or quarterly", task: "Pay your GST and file the summary return", form: "GSTR-3B" },
  ],
  afterwardsTitle: "After you register",
  afterwardsIntro: "Returns are due from the month your registration starts, even if you haven't sold anything yet.",

  faqs: [
    {
      question: "When do I have to register?",
      answer:
        "In most states, once your yearly sales cross ₹40 lakh for goods or ₹20 lakh for services. You also have to register, whatever your sales, if you sell goods to other states or sell through an online marketplace.",
    },
    {
      question: "Can I register before I reach the limit?",
      answer:
        "Yes. Many businesses that sell to other businesses register early so they can claim back the GST on their own purchases. Once you're registered, you have to file returns.",
    },
    {
      question: "What if the GST officer asks questions?",
      answer:
        "The officer sends a notice (REG-03) and you have 7 working days to reply. We write the reply and send any extra documents for you.",
    },
    {
      question: "Can I use my home address?",
      answer:
        "Yes, as long as you have proof of the address and, if it's rented or owned by someone else, their written permission.",
    },
  ],

  related: [
    { label: "GST returns", href: "/services/gst-taxation", description: "Monthly or quarterly returns, done for you" },
    { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing", description: "Your business's yearly tax return" },
    { label: "Import Export Code", href: "/services/licences-registrations/import-export-code", description: "If you import or export goods" },
  ],

  cta: {
    title: "Need a GST number?",
    body: "Tell us what you sell and where. We'll tell you if you need to register and send a quote.",
  },
};
