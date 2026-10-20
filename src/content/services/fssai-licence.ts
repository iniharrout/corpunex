import type { ServicePageContent } from "./types";
import { feeToConfirm, stepsIntroToConfirm, turnaroundToConfirm } from "./shared";

export const fssaiLicence: ServicePageContent = {
  path: "/services/licences-registrations/fssai-licence",
  name: "FSSAI registration and licence",
  metaTitle: "FSSAI registration and licence in India: Basic, State and Central",
  metaDescription:
    "FSSAI Basic registration, State licence or Central licence for restaurants, cloud kitchens, manufacturers and food traders, filed on FoSCoS.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Licences", href: "/services/licences-registrations" },
    { label: "FSSAI", href: "/services/licences-registrations/fssai-licence" },
  ],
  headline: "The right FSSAI licence for your food business.",
  lead: "Every food business in India needs FSSAI registration or a licence before it starts trading. We work out whether you need Basic registration, a State licence or a Central licence, prepare the documents and file on FoSCoS.",
  quoteFacts: [
    { label: "Government fee", value: "[VERIFY: fee by licence type, per year]", note: "Paid at cost, receipts provided" },
    feeToConfirm,
    turnaroundToConfirm("FSSAI registration or licence"),
  ],

  forWho: [
    "Restaurants, cafés, bakeries, cloud kitchens and caterers.",
    "Food manufacturers, repackers and cold storage operators.",
    "Sellers of food on delivery apps and online stores.",
    "Importers and exporters of food.",
  ],
  notFor: [],

  included: [
    "Advice on whether you need Basic registration, a State licence or a Central licence",
    "Preparation of the application and supporting documents",
    "Filing on FoSCoS",
    "Follow-up on officer queries and inspection",
    "Your FSSAI certificate and FoSCoS login",
  ],
  excluded: [
    "The FSSAI government fee (paid at cost)",
    "Water testing and other laboratory reports",
    "Annual returns, unless quoted",
  ],

  documents: [
    { document: "Photo ID and address proof", from: "Proprietor, partners or directors" },
    { document: "Proof of premises", from: "The business", note: "Rent agreement, utility bill and owner's no-objection letter" },
    { document: "List of food products", from: "The business" },
    { document: "Layout plan of the unit", from: "The business", note: "Manufacturers only" },
    { document: "Water test report", from: "Recognised laboratory", note: "Manufacturers and beverage units" },
  ],

  milestones: [
    { when: "Step 1", title: "Licence type confirmed", detail: "We assess your turnover, capacity and activity to pick the right licence." },
    { when: "Step 2", title: "Application filed", detail: "We file Form A (registration) or Form B (licence) on FoSCoS." },
    { when: "Step 3", title: "Scrutiny and inspection", detail: "We answer officer queries and help you prepare for any inspection." },
    { when: "Step 4", title: "Certificate issued", detail: "FSSAI issues your 14-digit registration or licence number." },
  ],
  stepsIntro: stepsIntroToConfirm("FSSAI registration and licences"),
  stepsDelays: "Inspection scheduling and missing laboratory reports are the usual causes of delay.",

  process: [
    {
      title: "Call and quote",
      you: "Tell us what you make or sell, where, and your expected turnover.",
      us: "Confirm the licence type and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them and prepare the application.",
    },
    {
      title: "Filing and inspection",
      you: "Keep the premises ready for any inspection.",
      us: "File the application and answer queries.",
    },
    {
      title: "Handover",
      you: "Display your FSSAI number on packaging and menus.",
      us: "Send the certificate and your renewal date.",
    },
  ],

  faqs: [
    {
      question: "Which licence do I need?",
      answer:
        "It depends on turnover, production capacity and activity. Small businesses need Basic registration, mid-sized ones a State licence, and large manufacturers and importers a Central licence. [VERIFY: current turnover limits for each type]",
    },
    {
      question: "Can I sell home-made food online without FSSAI?",
      answer: "No. Selling food commercially, including from home or through apps, needs at least Basic registration.",
    },
    {
      question: "How long is a licence valid?",
      answer: "You choose a validity of 1 to 5 years when you apply. It must be renewed before it expires.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Often needed by food businesses" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Protect your brand and packaging" },
    { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration", description: "Access MSME schemes" },
  ],

  cta: {
    title: "Opening a food business?",
    body: "Tell us what you make or sell and where. We will confirm the licence you need and send a quote.",
  },
};
