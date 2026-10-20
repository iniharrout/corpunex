/**
 * Service categories for the hub pages and the /services directory.
 * Services with `href` have their own page; the rest are handled on
 * enquiry through the contact form.
 */
export interface CategoryService {
  label: string;
  description: string;
  href?: string;
}

export interface Category {
  slug: string;
  path: string;
  name: string;
  /** One line for the directory. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  lead: string;
  services: CategoryService[];
  /** Key into `faqGroups` in `content/faqs.ts`. */
  faqGroup?: string;
}

const svc = (category: string, slug: string) => `/services/${category}/${slug}`;

export const categories: Category[] = [
  {
    slug: "business-registration",
    path: "/services/business-registration",
    name: "Business registration",
    summary: "Private Limited companies, LLPs, OPCs, proprietorships and other structures.",
    metaTitle: "Business registration in India: Private Limited, LLP, OPC and proprietorship",
    metaDescription:
      "Register a Private Limited company, LLP, One Person Company or proprietorship in India, with government fees and our fee shown separately.",
    headline: "Pick the right structure, then register it properly.",
    lead: "The structure you choose decides who can invest, what you file each year and what you are personally liable for. We help you choose, then handle the name, drafting and MCA filings.",
    faqGroup: "incorporation",
    services: [
      {
        label: "Private Limited Company",
        description: "For founders who plan to raise equity or give employees ESOPs.",
        href: svc("business-registration", "private-limited-company"),
      },
      {
        label: "LLP",
        description: "Limited liability for partnerships and services firms, with fewer annual filings.",
        href: svc("business-registration", "llp-registration"),
      },
      {
        label: "One Person Company",
        description: "A company with one owner, for solo founders who want limited liability.",
        href: svc("business-registration", "one-person-company"),
      },
      {
        label: "Sole proprietorship setup",
        description: "Udyam, GST and Shops and Establishments registrations so a bank will open a current account.",
        href: svc("business-registration", "sole-proprietorship"),
      },
      { label: "Partnership firm", description: "Partnership deed, stamping and registration with the Registrar of Firms." },
      { label: "Section 8 company", description: "A non-profit company for charity, education, science or social welfare." },
      { label: "Public limited company", description: "For businesses that need more than 200 shareholders or plan to list." },
      { label: "Producer company", description: "For farmer and primary-producer collectives." },
      { label: "Indian subsidiary", description: "For foreign companies setting up a wholly owned subsidiary or joint venture in India." },
      { label: "Digital signatures", description: "Class 3 DSCs for directors and partners, from a licensed certifying authority." },
    ],
  },
  {
    slug: "startup-services",
    path: "/services/startup-services",
    name: "Startup services",
    summary: "DPIIT recognition, Startup Odisha, Udyam and startup documents.",
    metaTitle: "Startup services: DPIIT recognition, Startup Odisha and Udyam",
    metaDescription:
      "DPIIT Startup India recognition, Startup Odisha registration, Udyam (MSME) registration and startup legal documents.",
    headline: "Government recognition for your startup, applied for properly.",
    lead: "DPIIT recognition opens the 80-IAC tax exemption and central schemes. State programmes such as Startup Odisha add their own support. We check eligibility first and write each application to the published criteria.",
    faqGroup: "startups",
    services: [
      {
        label: "Startup India (DPIIT) recognition",
        description: "Eligibility check, application write-up, filing and replies to queries.",
        href: svc("startup-services", "startup-india-recognition"),
      },
      {
        label: "Startup Odisha",
        description: "Registration under the Odisha Startup Policy for state allowances, grants and incubators.",
        href: svc("startup-services", "startup-odisha"),
      },
      {
        label: "Udyam (MSME) registration",
        description: "MSME registration for priority lending and protection against late payment.",
        href: svc("startup-services", "udyam-msme-registration"),
      },
      { label: "Founder documents", description: "Co-founder agreements, term sheet review and IP assignment deeds." },
      { label: "Scheme applications", description: "Applications under central and state funding schemes." },
      { label: "Incubator applications", description: "Documents and deck review for incubator programmes." },
    ],
  },
  {
    slug: "gst-taxation",
    path: "/services/gst-taxation",
    name: "GST and tax",
    summary: "GST registration and returns, TDS, and income tax returns.",
    metaTitle: "GST and tax services: GST registration, returns, TDS and income tax",
    metaDescription:
      "GST registration and returns, TDS returns and income tax returns for companies, LLPs and proprietors, reviewed by Chartered Accountants.",
    headline: "GST and income tax, filed on time and reconciled.",
    lead: "Most tax notices come from returns that do not match each other. We reconcile your GST returns, TDS and books before filing, and a Chartered Accountant reviews the result.",
    faqGroup: "tax",
    services: [
      {
        label: "GST registration",
        description: "REG-01 filing, Aadhaar authentication and replies to officer queries.",
        href: svc("gst-taxation", "gst-registration"),
      },
      {
        label: "Income tax return",
        description: "ITR-6, ITR-5, ITR-3 and ITR-4, checked against AIS and 26AS.",
        href: svc("gst-taxation", "income-tax-filing"),
      },
      { label: "GST returns", description: "GSTR-1 and GSTR-3B, with input tax credit matched against GSTR-2B." },
      { label: "GST annual return", description: "GSTR-9 and, where it applies, the GSTR-9C reconciliation." },
      { label: "GST amendment or cancellation", description: "Changes to address, partners or business details, or cancelling a registration." },
      { label: "TDS returns", description: "Quarterly 24Q, 26Q and 27Q, with Form 16 and 16A." },
      { label: "E-invoicing and e-way bills", description: "Set-up and help with generating compliant invoices and e-way bills." },
    ],
  },
  {
    slug: "licences-registrations",
    path: "/services/licences-registrations",
    name: "Licences and registrations",
    summary: "FSSAI, Import Export Code, Shops and Establishments, professional tax and more.",
    metaTitle: "Business licences in India: FSSAI, IEC, Shops and Establishments",
    metaDescription:
      "FSSAI registration and licences, Import Export Code, Shops and Establishments, trade licences, professional tax, EPFO and ESIC registration.",
    headline: "The licences your business needs, and only those.",
    lead: "What you need depends on what you sell, where, and how many people you employ. We list the licences that apply to you, then file them.",
    services: [
      {
        label: "FSSAI registration and licence",
        description: "Basic registration, State licence or Central licence for food businesses.",
        href: svc("licences-registrations", "fssai-licence"),
      },
      {
        label: "Import Export Code",
        description: "DGFT registration for importing and exporting goods.",
        href: svc("licences-registrations", "import-export-code"),
      },
      { label: "Shops and Establishments", description: "State registration for shops, offices and commercial premises." },
      { label: "Trade licence", description: "Municipal licence to run a particular trade in a city." },
      { label: "Professional tax", description: "Employer registration and enrolment under state professional tax laws." },
      { label: "EPFO and ESIC", description: "Provident fund and employee insurance registration once you hire." },
      { label: "Industry licences", description: "Pollution control consent, drug licences and weights and measures." },
    ],
  },
  {
    slug: "trademark-ip",
    path: "/services/trademark-ip",
    name: "Trademark and IP",
    summary: "Trademark search, filing, objections, renewals, copyright, design and patents.",
    metaTitle: "Trademark and IP services: trademark, copyright, design and patent",
    metaDescription:
      "Trademark search, registration, objection replies, opposition and renewal, plus copyright, design and patent filings through qualified professionals.",
    headline: "Protect the name and work your business depends on.",
    lead: "We search before we file, so you know the risks before paying government fees. Objections, oppositions and patent drafting are handled by qualified trademark attorneys and patent agents.",
    faqGroup: "trademarks",
    services: [
      {
        label: "Trademark registration",
        description: "Search, class selection and TM-A filing, tracked to registration.",
        href: svc("trademark-ip", "trademark-registration"),
      },
      { label: "Trademark search", description: "A search for identical and similar marks before you file." },
      { label: "Objection reply", description: "A reply to an examination report raising grounds under section 9 or 11." },
      { label: "Opposition", description: "Notice of opposition or counter-statement before the Registry." },
      { label: "Renewal", description: "Form TM-R before the 10-year registration expires." },
      { label: "Copyright", description: "Registration for software, written work, music and artwork." },
      { label: "Patents", description: "Searches and provisional or complete applications through a registered patent agent." },
      { label: "Design registration", description: "Protection for the shape, pattern or look of a product." },
    ],
  },
  {
    slug: "corporate-compliance",
    path: "/services/corporate-compliance",
    name: "Corporate compliance",
    summary: "Annual ROC filings, director KYC and event-based MCA filings.",
    metaTitle: "Corporate compliance: annual ROC filings and MCA changes",
    metaDescription:
      "Annual ROC filings for companies and LLPs, director KYC, and MCA filings for director changes, office moves, name changes, share transfers and closure.",
    headline: "Annual filings and company changes, handled before the deadline.",
    lead: "The MCA charges a daily additional fee for every late form, and directors of companies that stop filing can be disqualified. We keep your calendar and file each form on time.",
    faqGroup: "compliance",
    services: [
      {
        label: "Annual ROC compliance",
        description: "AOC-4, MGT-7 or MGT-7A, DIR-3 KYC, and Form 8 and 11 for LLPs.",
        href: svc("corporate-compliance", "annual-roc-compliance"),
      },
      { label: "Director appointment or resignation", description: "Board resolutions and DIR-12." },
      { label: "Registered office change", description: "INC-22 within a city, or a regional director application to move states." },
      { label: "Company name change", description: "Name reservation, shareholder approval and the MCA filings." },
      { label: "Share transfer", description: "SH-4 transfer deed, stamp duty and register updates." },
      { label: "Closing a company", description: "Strike-off of an inactive company on STK-2." },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    path: "/services/accounting-bookkeeping",
    name: "Accounting and bookkeeping",
    summary: "Monthly books, payroll, MIS reports and audit support.",
    metaTitle: "Accounting and bookkeeping services for Indian businesses",
    metaDescription:
      "Monthly bookkeeping, bank and GST reconciliation, payroll, MIS reports, financial statements and audit support for startups and small businesses.",
    headline: "Books that are ready when the auditor, investor or tax officer asks.",
    lead: "We keep your books each month, reconcile them with your bank and GST records, and prepare the schedules your auditor needs at year end.",
    services: [
      { label: "Bookkeeping", description: "Monthly entries, ledgers and bank reconciliation in your accounting software." },
      { label: "Financial statements", description: "Balance sheet, profit and loss account and notes under Indian accounting standards." },
      { label: "GST reconciliation", description: "Matching your input tax credit with supplier filings in GSTR-2B." },
      { label: "Payroll", description: "Salary workings, payslips, and PF, ESIC and professional tax deductions." },
      { label: "MIS reports", description: "Monthly reports on cash, burn and profitability." },
      { label: "Audit support", description: "Schedules and supporting papers for your independent auditor." },
    ],
  },
  {
    slug: "legal-documentation",
    path: "/services/legal-documentation",
    name: "Legal documents",
    summary: "Founder, shareholder, employment, client and vendor agreements.",
    metaTitle: "Legal documents for businesses: founder, shareholder and commercial agreements",
    metaDescription:
      "Founders' agreements, shareholders' agreements, NDAs, employment, consultancy, vendor and service agreements, and website terms, drafted by advocates.",
    headline: "Agreements written for your business, not copied from a template.",
    lead: "Disputes usually start where an agreement is vague. Our advocates draft each document to your deal and explain every clause before you sign.",
    services: [
      { label: "Founders' agreement", description: "Equity split, vesting, roles, IP assignment and what happens if a founder leaves." },
      { label: "Shareholders' agreement", description: "Investor rights, pre-emption, tag-along and drag-along, and exit terms." },
      { label: "Partnership deed", description: "Capital, profit shares, duties and retirement terms." },
      { label: "NDA", description: "One-way or mutual confidentiality agreements." },
      { label: "Employment agreement", description: "Offer letters, probation, IP assignment and notice terms." },
      { label: "Consultancy agreement", description: "Scope, milestones, fees and IP ownership for contractors." },
      { label: "Vendor and service agreements", description: "Service levels, payment terms, warranties, liability caps and termination." },
      { label: "Website terms and privacy policy", description: "Terms of use and a privacy policy written for the DPDP Act." },
    ],
  },
  {
    slug: "ngo-entity-registration",
    path: "/services/ngo-entity-registration",
    name: "NGO registration",
    summary: "Section 8 companies, trusts, societies, and 12A and 80G registration.",
    metaTitle: "NGO registration in India: Section 8 company, trust or society",
    metaDescription:
      "Register a non-profit in India as a Section 8 company, trust or society, and apply for 12A and 80G registration under the Income Tax Act.",
    headline: "The right non-profit structure for the work you want to do.",
    lead: "A Section 8 company, a trust and a society are governed by different laws and suit different kinds of work. We help you choose, draft the constitution and register it.",
    services: [
      { label: "Section 8 company", description: "A non-profit company under the Companies Act, with limited liability." },
      { label: "Trust", description: "Trust deed and registration before the Sub-Registrar." },
      { label: "Society", description: "Registration under the Societies Registration Act or your state's law." },
      { label: "Constitution and by-laws", description: "MoA, rules and governance documents." },
      { label: "12A and 80G", description: "Income tax registrations for exemption and for donors' deductions." },
    ],
  },
];

export function category(slug: string) {
  const c = categories.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown category: ${slug}`);
  return c;
}
