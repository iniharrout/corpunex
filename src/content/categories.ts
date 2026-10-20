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
  /** Phrase inside `headline` shown with the highlighter. */
  highlight: string;
  tone: "sky" | "mint" | "sun" | "peach";
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
    metaTitle: "Business Registration in India: Pvt Ltd, LLP, OPC",
    metaDescription:
      "Register a Private Limited company, LLP, One Person Company or proprietorship in India, with government fees and our fee shown separately.",
    headline: "Business registration in India, done properly from day one.",
    highlight: "done properly from day one.",
    tone: "sky",
    lead: "The type of business you choose decides who can invest, what you file each year and whether your personal savings are protected. We help you choose, then handle the name, the paperwork and the government filings.",
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
        description: "The registrations a bank needs before it will open a current account in your business name.",
        href: svc("business-registration", "sole-proprietorship"),
      },
      {
        label: "Partnership firm",
        description: "Your partnership agreement (deed), stamped and registered with the state.",
        href: svc("business-registration", "partnership-firm-registration"),
      },
      {
        label: "Section 8 company",
        description: "A non-profit company for charity, education, science or social welfare.",
        href: svc("ngo-entity-registration", "section-8-company"),
      },
      { label: "Public limited company", description: "For businesses that need more than 200 shareholders or plan to list on the stock market." },
      { label: "Producer company", description: "For farmer and primary-producer collectives." },
      {
        label: "Indian subsidiary",
        description: "For foreign companies and NRIs setting up a company in India.",
        href: svc("business-registration", "indian-subsidiary"),
      },
      { label: "Digital signatures", description: "The online signature directors and partners use to sign government forms." },
    ],
  },
  {
    slug: "startup-services",
    path: "/services/startup-services",
    name: "Startup services",
    summary: "DPIIT recognition, Startup Odisha, Udyam and startup documents.",
    metaTitle: "Startup Registration: Startup India and Udyam",
    metaDescription:
      "DPIIT Startup India recognition, Startup Odisha registration, Udyam (MSME) registration and startup legal documents.",
    headline: "Startup registration and recognition, so you can get support.",
    highlight: "so you can get support.",
    tone: "sun",
    lead: "Startup India recognition from DPIIT opens up tax benefits and government schemes. State programmes such as Startup Odisha add their own support. We check you qualify first, then write each application the way the government expects.",
    faqGroup: "startups",
    services: [
      {
        label: "Startup India (DPIIT) recognition",
        description: "Eligibility check, application write-up, filing and replies to queries.",
        href: svc("startup-services", "startup-india-recognition"),
      },
      {
        label: "Startup Odisha",
        description: "Registration with the state for its allowances, grants and incubator places.",
        href: svc("startup-services", "startup-odisha"),
      },
      {
        label: "Udyam (MSME) registration",
        description: "The government's small business register, for easier loans and protection when buyers pay late.",
        href: svc("startup-services", "udyam-msme-registration"),
      },
      { label: "Founder documents", description: "Co-founder agreements, investor term sheet reviews, and documents that put your product's ownership in the company's name." },
      { label: "Scheme applications", description: "Applications under central and state funding schemes." },
      { label: "Incubator applications", description: "Documents and deck review for incubator programmes." },
    ],
  },
  {
    slug: "gst-taxation",
    path: "/services/gst-taxation",
    name: "GST and tax",
    summary: "GST registration and returns, TDS, and income tax returns.",
    metaTitle: "GST and Tax Services: Registration, Returns, ITR",
    metaDescription:
      "GST registration and returns, TDS returns and income tax returns for companies, LLPs and proprietors, reviewed by Chartered Accountants.",
    headline: "GST and income tax filing, on time and without surprises.",
    highlight: "without surprises.",
    tone: "mint",
    lead: "Most tax notices happen because one return doesn't match another. We check your GST returns, tax deducted (TDS) and books against each other before filing, and a Chartered Accountant reviews the result.",
    faqGroup: "tax",
    services: [
      {
        label: "GST registration",
        description: "Your GST number, with the application checked before it's filed.",
        href: svc("gst-taxation", "gst-registration"),
      },
      {
        label: "Income tax return",
        description: "Your business's yearly tax return, checked by a Chartered Accountant.",
        href: svc("gst-taxation", "income-tax-filing"),
      },
      {
        label: "GST return filing",
        description: "Your monthly or quarterly returns, with the GST you claim back checked against your suppliers' filings.",
        href: svc("gst-taxation", "gst-return-filing"),
      },
      { label: "GST yearly return", description: "The GST summary for the whole year (GSTR-9)." },
      { label: "GST changes or cancellation", description: "Updating your address, partners or business details, or closing your GST number." },
      { label: "TDS returns", description: "Quarterly returns for the tax you deduct from salaries and payments, plus the certificates you give out." },
      { label: "E-invoices and e-way bills", description: "Setting up the online invoices and transport documents larger businesses must use." },
    ],
  },
  {
    slug: "licences-registrations",
    path: "/services/licences-registrations",
    name: "Licences and registrations",
    summary: "FSSAI, Import Export Code, Shops and Establishments, professional tax and more.",
    metaTitle: "Business Licences in India: FSSAI, IEC and More",
    metaDescription:
      "FSSAI registration and licences, Import Export Code, Shops and Establishments, trade licences, professional tax, EPFO and ESIC registration.",
    headline: "Business licences and registrations you need, and only those.",
    highlight: "and only those.",
    tone: "peach",
    lead: "What you need depends on what you sell, where you are and how many people you employ. We list the licences that apply to you, then apply for them.",
    services: [
      {
        label: "FSSAI registration and licence",
        description: "The food licence every restaurant, kitchen and food seller needs.",
        href: svc("licences-registrations", "fssai-licence"),
      },
      {
        label: "Import Export Code",
        description: "The number customs and banks need when you import or export.",
        href: svc("licences-registrations", "import-export-code"),
      },
      { label: "Shop and office registration", description: "The state registration for shops, offices and other workplaces (Shops and Establishments)." },
      { label: "Trade licence", description: "Municipal licence to run a particular trade in a city." },
      { label: "Professional tax", description: "A small state tax on salaries and professions, in the states that charge it." },
      { label: "EPFO and ESIC", description: "Provident fund and employee health insurance registration, once you hire enough people." },
      { label: "Industry licences", description: "Pollution control approval, drug licences, and approval for weighing and measuring equipment." },
    ],
  },
  {
    slug: "trademark-ip",
    path: "/services/trademark-ip",
    name: "Trademark and IP",
    summary: "Trademark search, filing, objections, renewals, copyright, design and patents.",
    metaTitle: "Trademark, Copyright and Patent Services",
    metaDescription:
      "Trademark search, registration, objection replies, opposition and renewal, plus copyright, design and patent filings through qualified professionals.",
    headline: "Trademark and IP protection for your brand and your work.",
    highlight: "your brand and your work.",
    tone: "sky",
    lead: "We search before we file, so you know the risks before you pay any government fees. Objections, disputes and patent drafting are handled by qualified trademark attorneys and patent agents.",
    faqGroup: "trademarks",
    services: [
      {
        label: "Trademark registration",
        description: "Search, filing and tracking until your brand is registered.",
        href: svc("trademark-ip", "trademark-registration"),
      },
      { label: "Trademark search", description: "A check for brands that are the same as or similar to yours, before you file." },
      {
        label: "Trademark objection reply",
        description: "A written reply when the Trade Marks Registry raises an objection to your application.",
        href: svc("trademark-ip", "trademark-objection-reply"),
      },
      { label: "Opposition", description: "Objecting to someone else's trademark, or defending yours when someone objects." },
      { label: "Renewal", description: "Renewing your trademark before its 10 years run out." },
      { label: "Copyright", description: "Registration for software, writing, music and artwork." },
      { label: "Patents", description: "Patent searches and applications, handled by a registered patent agent." },
      { label: "Design registration", description: "Protection for the shape, pattern or look of a product." },
    ],
  },
  {
    slug: "corporate-compliance",
    path: "/services/corporate-compliance",
    name: "Corporate compliance",
    summary: "Annual ROC filings, director KYC and event-based MCA filings.",
    metaTitle: "Company Compliance: ROC Filings and Changes",
    metaDescription:
      "Annual ROC filings for companies and LLPs, director KYC, and MCA filings for director changes, office moves, name changes, share transfers and closure.",
    headline: "Company compliance and changes, done before the deadline.",
    highlight: "before the deadline.",
    tone: "mint",
    lead: "The government charges a late fee for every day a form is late, and directors of companies that stop filing can be barred. We keep your calendar and file each form on time.",
    faqGroup: "compliance",
    services: [
      {
        label: "Annual ROC compliance",
        description: "Your accounts, yearly return and director KYC, filed every year.",
        href: svc("corporate-compliance", "annual-roc-compliance"),
      },
      {
        label: "Add or remove a director",
        description: "The board resolution, consent forms and the government filing.",
        href: svc("corporate-compliance", "change-of-directors"),
      },
      { label: "Moving your registered office", description: "A simple filing within the same city, or a longer approval to move to another state." },
      { label: "Changing your company name", description: "Reserving the new name, getting shareholders' approval and filing the change." },
      { label: "Transferring shares", description: "The transfer form, stamp duty and updating your share register." },
      {
        label: "Close a company",
        description: "Closing down a company that has stopped trading (strike-off).",
        href: svc("corporate-compliance", "close-a-company"),
      },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    path: "/services/accounting-bookkeeping",
    name: "Accounting and bookkeeping",
    summary: "Monthly books, payroll, MIS reports and audit support.",
    metaTitle: "Accounting and Bookkeeping for Small Businesses",
    metaDescription:
      "Monthly bookkeeping, bank and GST reconciliation, payroll, MIS reports, financial statements and audit support for startups and small businesses.",
    headline: "Accounting and bookkeeping that is ready whenever someone asks.",
    highlight: "ready whenever someone asks.",
    tone: "sun",
    lead: "Auditors, investors and tax officers all ask for your books. We keep them up to date every month, check them against your bank and GST records, and prepare what your auditor needs at year end.",
    services: [
      { label: "Bookkeeping", description: "Recording every sale and expense each month and matching it to your bank statement." },
      { label: "Year-end accounts", description: "Your balance sheet and profit and loss account, prepared to Indian accounting standards." },
      { label: "GST matching", description: "Checking the GST you claim back against what your suppliers have filed." },
      { label: "Payroll", description: "Salaries, payslips, and the provident fund, insurance and tax deductions that go with them." },
      { label: "Monthly reports", description: "A simple monthly view of your cash, spending and profit." },
      { label: "Audit support", description: "The papers and workings your auditor will ask for." },
    ],
  },
  {
    slug: "legal-documentation",
    path: "/services/legal-documentation",
    name: "Legal documents",
    summary: "Founder, shareholder, employment, client and vendor agreements.",
    metaTitle: "Legal Documents for Startups and Businesses",
    metaDescription:
      "Founders' agreements, shareholders' agreements, NDAs, employment, consultancy, vendor and service agreements, and website terms, drafted by advocates.",
    headline: "Legal agreements written for your business, not copied from a template.",
    highlight: "for your business,",
    tone: "peach",
    lead: "Disagreements usually start where an agreement is vague. Our advocates write each document around your deal and explain every clause in plain words before you sign.",
    services: [
      { label: "Founders' agreement", description: "Who owns what, how shares are earned over time, who does what, and what happens if a founder leaves." },
      { label: "Shareholders' agreement", description: "What investors can and can't do, and what happens when shares are sold." },
      { label: "Partnership deed", description: "Who puts in what, how profits are split, and what happens when a partner leaves." },
      { label: "NDA", description: "An agreement to keep what you share confidential." },
      { label: "Employment agreement", description: "Offer letters, probation, notice periods, and making sure work done for you belongs to you." },
      { label: "Consultancy agreement", description: "What a freelancer or contractor will deliver, when, for how much, and who owns it." },
      { label: "Customer and supplier agreements", description: "What's delivered, payment terms, what happens if things go wrong, and how to end the deal." },
      { label: "Website terms and privacy policy", description: "Terms of use and a privacy policy that follow India's data protection law." },
    ],
  },
  {
    slug: "ngo-entity-registration",
    path: "/services/ngo-entity-registration",
    name: "NGO registration",
    summary: "Section 8 companies, trusts, societies, and 12A and 80G registration.",
    metaTitle: "NGO Registration: Section 8, Trust or Society",
    metaDescription:
      "Register a non-profit in India as a Section 8 company, trust or society, and apply for 12A and 80G registration under the Income Tax Act.",
    headline: "NGO registration: the right setup for the good you want to do.",
    highlight: "the good you want to do.",
    tone: "mint",
    lead: "A Section 8 company, a trust and a society follow different laws and suit different kinds of work. We help you choose, write the founding documents and register it.",
    services: [
      {
        label: "Section 8 company",
        description: "A non-profit company under the Companies Act, with limited liability.",
        href: svc("ngo-entity-registration", "section-8-company"),
      },
      { label: "Trust", description: "Trust deed and registration before the Sub-Registrar." },
      { label: "Society", description: "Registration under the Societies Registration Act or your state's law." },
      { label: "Founding documents", description: "Your rulebook and the rules for how the organisation is run." },
      { label: "12A and 80G", description: "Tax registrations so your organisation pays no income tax and donors can claim a deduction." },
    ],
  },
];

export function category(slug: string) {
  const c = categories.find((x) => x.slug === slug);
  if (!c) throw new Error(`Unknown category: ${slug}`);
  return c;
}
