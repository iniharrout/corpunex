export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  /** One line on where the founder is in their journey. */
  intro: string;
  links: NavLink[];
  /** A single featured link shown beside the list. */
  feature?: NavLink;
}

const svc = (category: string, slug?: string) =>
  slug ? `/services/${category}/${slug}` : `/services/${category}`;

/** Services without a dedicated page yet route to the contact form. */
const enquire = "/contact";

export const journeyNav: NavGroup[] = [
  {
    label: "Start",
    intro: "Choose a structure and get incorporated.",
    links: [
      {
        label: "Private Limited Company",
        href: svc("business-registration", "private-limited-company"),
        description: "For founders who plan to raise equity",
      },
      {
        label: "LLP",
        href: svc("business-registration", "llp-registration"),
        description: "For partnerships and service firms",
      },
      {
        label: "One Person Company",
        href: svc("business-registration", "one-person-company"),
        description: "For solo founders who want limited liability",
      },
      {
        label: "Indian subsidiary",
        href: svc("business-registration"),
        description: "For foreign companies entering India",
      },
    ],
    feature: {
      label: "Pvt Ltd vs LLP vs OPC",
      href: "/resources/pvt-ltd-vs-llp",
      description: "A side-by-side comparison of liability, tax and compliance.",
    },
  },
  {
    label: "Run",
    intro: "Stay compliant once you are trading.",
    links: [
      { label: "GST registration", href: svc("gst-taxation", "gst-registration") },
      { label: "GST returns", href: svc("gst-taxation") },
      { label: "Accounting and bookkeeping", href: svc("accounting-bookkeeping") },
      { label: "Income tax returns", href: svc("gst-taxation", "income-tax-filing") },
      { label: "Annual ROC compliance", href: svc("corporate-compliance", "annual-roc-compliance") },
      { label: "Licences: FSSAI, IEC, Udyam", href: svc("licences-registrations") },
    ],
    feature: {
      label: "Virtual CFO",
      href: enquire,
      description: "Monthly accounts, MIS and board reporting for funded companies.",
    },
  },
  {
    label: "Raise",
    intro: "Get recognised and ready for investors.",
    links: [
      {
        label: "Startup India (DPIIT)",
        href: svc("startup-services", "startup-india-recognition"),
        description: "Recognition and the 80-IAC application",
      },
      {
        label: "Startup Odisha",
        href: svc("startup-services", "startup-odisha"),
        description: "State recognition, allowance and grants",
      },
      { label: "Investor readiness", href: enquire, description: "Cap table, data room, due diligence" },
      { label: "Startup research", href: enquire, description: "Market and sector research for your deck" },
    ],
  },
  {
    label: "Protect",
    intro: "Secure your brand and your agreements.",
    links: [
      { label: "Trademark registration", href: svc("trademark-ip", "trademark-registration") },
      { label: "Copyright, design and patents", href: svc("trademark-ip") },
      { label: "Founder and shareholder agreements", href: svc("legal-documentation") },
    ],
  },
];

export const primaryNav: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "About", href: "/about" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Start",
    links: journeyNav[0].links.concat(journeyNav[0].feature ? [journeyNav[0].feature] : []),
  },
  { heading: "Run", links: journeyNav[1].links },
  {
    heading: "Raise and protect",
    links: [...journeyNav[2].links.slice(0, 2), ...journeyNav[3].links.slice(0, 2)],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Pricing", href: "/pricing" },
      { label: "Resources", href: "/resources" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms and conditions", href: "/terms-and-conditions" },
      { label: "Privacy policy", href: "/privacy-policy" },
      { label: "Refund policy", href: "/refund-policy" },
      { label: "Service disclaimer", href: "/service-disclaimer" },
    ],
  },
];
