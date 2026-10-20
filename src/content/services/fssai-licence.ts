import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const fssaiLicence: ServicePageContent = {
  path: "/services/licences-registrations/fssai-licence",
  name: "FSSAI registration and licence",
  metaTitle: "FSSAI Registration and Food Licence Online",
  metaDescription:
    "FSSAI Basic registration, State licence or Central licence for restaurants, cloud kitchens, home bakers, food makers and food sellers.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "Licences", href: "/services/licences-registrations" },
    { label: "FSSAI", href: "/services/licences-registrations/fssai-licence" },
  ],
  headline: "FSSAI registration and the right food licence for your business.",
  lead: "Anyone who makes, sells or delivers food in India needs FSSAI registration or a licence before they start. There are three levels, depending on your size and what you do. We work out which one you need, prepare the documents and apply for you.",
  quoteFacts: [
    { label: "Government fee", value: "Depends on the licence", note: "We charge exactly what the government charges" },
    quoteOnRequest,
  ],
  callbackTopic: "Something else",

  forWho: [
    "Restaurants, cafés, bakeries, cloud kitchens and caterers.",
    "Home bakers and cooks who sell what they make.",
    "Food makers, packers and cold storage businesses.",
    "Sellers on food delivery apps and online stores.",
    "Anyone importing or exporting food.",
  ],
  notFor: [],

  included: [
    "Working out whether you need Basic registration, a State licence or a Central licence",
    "Preparing your application and documents",
    "Applying on the FSSAI portal (FoSCoS)",
    "Following up on questions and any inspection",
    "Your FSSAI certificate and portal login",
  ],
  excluded: [
    "The FSSAI government fee (we charge exactly what the government charges)",
    "Water testing and other lab reports",
    "Yearly FSSAI returns, unless quoted",
  ],

  documents: [
    { document: "Photo ID and address proof", from: "The owner, partners or directors" },
    { document: "Proof of your premises", from: "The business", note: "Rent agreement, utility bill and the owner's no-objection letter" },
    { document: "List of the food you'll make or sell", from: "The business" },
    { document: "Layout plan of your kitchen or unit", from: "The business", note: "Food makers only" },
    { document: "Water test report", from: "An approved lab", note: "Food makers and drinks businesses only" },
  ],

  milestones: [
    { when: "Step 1", title: "Licence level picked", detail: "We look at your size and what you do, and pick the right licence." },
    { when: "Step 2", title: "Application filed", detail: "We apply on the FSSAI portal." },
    { when: "Step 3", title: "Checks and inspection", detail: "We answer the officer's questions and help you get ready for any visit." },
    { when: "Step 4", title: "Licence issued", detail: "You get your 14-digit FSSAI number." },
  ],
  stepsDelays: "Waiting for an inspection and missing lab reports are the usual reasons for delay.",

  process: [
    {
      title: "Talk to us",
      you: "Tell us what you make or sell, where, and roughly how much you expect to sell.",
      us: "Pick the right licence and send a written quote.",
    },
    {
      title: "Documents",
      you: "Upload the documents listed above.",
      us: "Check them and prepare the application.",
    },
    {
      title: "Filing and inspection",
      you: "Keep your kitchen or unit ready in case an officer visits.",
      us: "File the application and answer questions.",
    },
    {
      title: "Handover",
      you: "Show your FSSAI number on your packaging and menus.",
      us: "Send your certificate and tell you when to renew.",
    },
  ],

  faqs: [
    {
      question: "Which licence do I need?",
      answer:
        "Small businesses need Basic registration. Mid-sized businesses need a State licence. Large food makers, businesses in several states and importers need a Central licence. We'll tell you which one fits you.",
    },
    {
      question: "Can I sell home-made food online without FSSAI?",
      answer: "No. Selling food, including from home or through apps, needs at least Basic registration.",
    },
    {
      question: "How long does a licence last?",
      answer: "You pick 1 to 5 years when you apply. You need to renew it before it runs out.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Often needed by food businesses" },
    { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration", description: "Protect your brand and packaging" },
    { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration", description: "Get access to small business schemes" },
  ],

  cta: {
    title: "Starting a food business?",
    body: "Tell us what you make or sell and where. We'll tell you which licence you need and send a quote.",
  },
};
