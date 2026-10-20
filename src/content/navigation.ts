export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  /** One line under the group name in the Services menu. */
  blurb: string;
  icon: "rocket" | "receipt" | "calendar" | "badge" | "shield";
  tone: "sky" | "mint" | "sun" | "peach";
  links: NavLink[];
}

const svc = (category: string, slug?: string) =>
  slug ? `/services/${category}/${slug}` : `/services/${category}`;

/** Services without a dedicated page yet route to the contact page. */
const enquire = "/contact";

/** The Services mega menu, grouped in plain words. */
export const serviceGroups: NavGroup[] = [
  {
    label: "Start a business",
    blurb: "Pick a structure and register",
    icon: "rocket",
    tone: "sky",
    links: [
      {
        label: "Private Limited Company",
        href: svc("business-registration", "private-limited-company"),
        description: "Best if you plan to raise money",
      },
      {
        label: "LLP",
        href: svc("business-registration", "llp-registration"),
        description: "For partners running a firm",
      },
      {
        label: "One Person Company",
        href: svc("business-registration", "one-person-company"),
        description: "For solo founders",
      },
      {
        label: "Sole proprietorship",
        href: svc("business-registration", "sole-proprietorship"),
        description: "The simplest way to start",
      },
      {
        label: "Indian subsidiary",
        href: svc("business-registration", "indian-subsidiary"),
        description: "For companies based outside India",
      },
    ],
  },
  {
    label: "Tax and accounts",
    blurb: "GST, books and tax returns",
    icon: "receipt",
    tone: "mint",
    links: [
      { label: "GST registration", href: svc("gst-taxation", "gst-registration") },
      { label: "GST return filing", href: svc("gst-taxation", "gst-return-filing") },
      { label: "Accounting and bookkeeping", href: svc("accounting-bookkeeping") },
      { label: "Income tax returns", href: svc("gst-taxation", "income-tax-filing") },
      { label: "Virtual CFO", href: enquire },
    ],
  },
  {
    label: "Yearly compliance",
    blurb: "Filings and licences",
    icon: "calendar",
    tone: "sun",
    links: [
      { label: "Annual ROC filings", href: svc("corporate-compliance", "annual-roc-compliance") },
      { label: "Add or remove a director", href: svc("corporate-compliance", "change-of-directors") },
      { label: "FSSAI food licence", href: svc("licences-registrations", "fssai-licence") },
      { label: "Import Export Code", href: svc("licences-registrations", "import-export-code") },
      { label: "Udyam (MSME) registration", href: svc("startup-services", "udyam-msme-registration") },
      { label: "All licences", href: svc("licences-registrations") },
    ],
  },
  {
    label: "Startups and funding",
    blurb: "Recognition and investor prep",
    icon: "badge",
    tone: "peach",
    links: [
      { label: "Startup India (DPIIT)", href: svc("startup-services", "startup-india-recognition") },
      { label: "Startup Odisha", href: svc("startup-services", "startup-odisha") },
      { label: "Getting ready for investors", href: enquire },
      { label: "Market research for your pitch", href: enquire },
    ],
  },
  {
    label: "Brand and legal",
    blurb: "Trademarks and agreements",
    icon: "shield",
    tone: "sky",
    links: [
      { label: "Trademark registration", href: svc("trademark-ip", "trademark-registration") },
      { label: "Trademark objection reply", href: svc("trademark-ip", "trademark-objection-reply") },
      { label: "Copyright and design", href: svc("trademark-ip") },
      { label: "Founder and shareholder agreements", href: svc("legal-documentation") },
    ],
  },
];

export const primaryNav: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Free tools and reference pages. */
export const resourceLinks: NavLink[] = [
  { label: "Blog", href: "/blog" },
  { label: "Compliance calendar", href: "/compliance-calendar" },
  { label: "GST calculator", href: "/tools/gst-calculator" },
  { label: "Company type finder", href: "/tools/company-type-finder" },
  { label: "Glossary", href: "/glossary" },
  { label: "FAQ", href: "/faq" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  { heading: "Start a business", links: serviceGroups[0].links },
  { heading: "Tax and accounts", links: serviceGroups[1].links.slice(0, 4) },
  {
    heading: "Grow",
    links: [
      { label: "Annual ROC filings", href: svc("corporate-compliance", "annual-roc-compliance") },
      { label: "Startup India (DPIIT)", href: svc("startup-services", "startup-india-recognition") },
      { label: "Trademark registration", href: svc("trademark-ip", "trademark-registration") },
      { label: "All licences", href: svc("licences-registrations") },
      { label: "All services", href: "/services" },
    ],
  },
  { heading: "Resources", links: resourceLinks },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Terms", href: "/terms-and-conditions" },
      { label: "Privacy", href: "/privacy-policy" },
      { label: "Refunds", href: "/refund-policy" },
      { label: "Disclaimer", href: "/service-disclaimer" },
    ],
  },
];
