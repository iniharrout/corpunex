export interface Article {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  publishDate: string;
  summary: string;
  keyTakeaways: string[];
  contentSections: {
    heading: string;
    paragraphs: string[];
    bulletPoints?: string[];
  }[];
  relatedServices: {
    title: string;
    slug: string;
    categorySlug: string;
  }[];
}

export const ARTICLES_DATA: Article[] = [
  {
    slug: "pvt-ltd-vs-llp",
    title: "Private Limited Company vs LLP: Which Structure is Right for Your Business in India?",
    category: "Business Registration",
    readTime: "7 min read",
    publishDate: "October 2026",
    summary: "A practical, comparative analysis of Private Limited Company and Limited Liability Partnership (LLP) structures under Indian law, covering liability, taxation, compliance burden, and fundraising capability.",
    keyTakeaways: [
      "Choose a Private Limited Company if you intend to raise venture capital, issue ESOPs to employees, or plan an IPO.",
      "Choose an LLP if you run a boot-strapped, profitable service firm or consultancy seeking limited liability with lower statutory compliance overhead.",
      "LLPs are not subject to mandatory statutory audits if turnover is under ₹40 Lakhs and capital is under ₹25 Lakhs.",
      "Pvt Ltd shares can be freely transferred; partnership rights in an LLP require agreement amendments.",
    ],
    contentSections: [
      {
        heading: "1. The Fundamental Distinction",
        paragraphs: [
          "When starting a commercial enterprise in India, founders frequently weigh the merits of a Private Limited Company against a Limited Liability Partnership (LLP). Both forms grant the crucial shield of limited liability, ensuring that founders' personal assets are separate from corporate liabilities.",
          "However, their regulatory frameworks diverge significantly. A Private Limited Company is governed strictly by the Companies Act, 2013 and is designed for growth-oriented enterprises seeking external capital. An LLP is governed by the Limited Liability Partnership Act, 2008 and is tailored for operational flexibility without heavy secretarial bureaucracy.",
        ],
      },
      {
        heading: "2. Fundraising and Investor Preference",
        paragraphs: [
          "If your business roadmap includes raising angel investment, institutional venture capital, or issuing Employee Stock Option Plans (ESOPs), a Private Limited Company is the universally accepted standard. Institutional VC funds are generally constitutionally prohibited by their LP charters from investing in partnership structures.",
          "LLPs, in contrast, do not have a share capital concept that can easily be divided into preference or equity shares. Transferring ownership in an LLP requires rewriting the partnership deed and obtaining consent from all partners.",
        ],
      },
      {
        heading: "3. Compliance Burden & Statutory Audit",
        paragraphs: [
          "Every Private Limited Company, regardless of whether it makes a single rupee in revenue, must appoint a statutory auditor (Form ADT-1), hold board meetings, maintain formal secretarial minutes, and file annual financial statements (AOC-4) and annual returns (MGT-7).",
          "LLPs enjoy substantial compliance relief. An LLP is exempt from mandatory audit of its accounts unless its annual turnover exceeds ₹40 Lakhs or its partner capital contribution exceeds ₹25 Lakhs. While LLPs must still file Form 11 and Form 8 annually, the procedural secretarial workload is significantly lower.",
        ],
      },
      {
        heading: "4. Structural Comparison Summary",
        paragraphs: [
          "Review the core parameters below before deciding which legal structure aligns with your immediate operational goals:",
        ],
        bulletPoints: [
          "Minimum Promoters: Both require at least 2 individuals (Directors/Partners).",
          "Separation of Ownership & Management: Clear in Pvt Ltd (Shareholders vs Directors); blurred in LLP (Partners typically manage operations).",
          "Tax Rate: Both are taxed at 30% flat corporate rate (plus surcharge and cess), although domestic companies meeting certain turnover and manufacturing criteria may opt for concessional 22% or 15% regimes under Section 115BAA/BAB.",
          "Conversion: An LLP can later be converted into a Private Limited Company under Chapter XXI of the Companies Act, though it involves procedural time and costs.",
        ],
      },
    ],
    relatedServices: [
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "LLP Registration", slug: "llp-registration", categorySlug: "business-registration" },
      { title: "Annual ROC Compliance", slug: "annual-roc-compliance", categorySlug: "corporate-compliance" },
    ],
  },

  {
    slug: "documents-required-company-registration",
    title: "Complete Checklist: Documents Required for Company Registration in India",
    category: "Business Registration",
    readTime: "5 min read",
    publishDate: "October 2026",
    summary: "Ensure smooth approval of your SPICe+ MCA application by gathering the exact, verified identity, address, and premises proofs required for Indian company incorporation.",
    keyTakeaways: [
      "All identity and address proofs for directors must have exactly identical spellings of names and dates of birth.",
      "Bank statements or utility bills submitted as address proofs must not be older than two months.",
      "A residential address is fully acceptable as a registered office, provided a recent electricity bill and owner NOC are submitted.",
      "Foreign nationals must have their documents notarized or apostilled in their home jurisdiction.",
    ],
    contentSections: [
      {
        heading: "1. Director and Shareholder KYC Documents",
        paragraphs: [
          "The Ministry of Corporate Affairs uses rigorous automated and manual validation rules. Any discrepancy in name spelling between your PAN Card and Aadhaar Card will cause the SPICe+ form to be rejected or put into resubmission.",
        ],
        bulletPoints: [
          "Permanent Account Number (PAN) Card: Mandatory for all Indian nationals.",
          "Identity Proof (any one): Valid Passport, Voter ID Card, or Driving Licence.",
          "Current Address Proof (any one, strictly under 2 months old): Bank Account Statement, Electricity Bill, Telephone/Mobile Bill, or Gas Bill.",
          "Recent passport-size color photographs of each director.",
        ],
      },
      {
        heading: "2. Registered Office Premises Proof",
        paragraphs: [
          "Your company must have an address capable of receiving official communications from government authorities upon incorporation.",
        ],
        bulletPoints: [
          "Utility Bill: Electricity bill, gas bill, or water bill in the name of the property owner (under 2 months old).",
          "No Objection Certificate (NOC): A signed declaration from the property owner permitting the company to use the premises.",
          "Rent Agreement: If the property is rented, a valid lease agreement alongside the owner's NOC.",
        ],
      },
      {
        heading: "3. Pre-Filing Practical Tips",
        paragraphs: [
          "Ensure that your bank statement reflects transactions from the current or previous month and displays the account holder's full residential address. Online bank e-statements with clear account details are acceptable.",
        ],
      },
    ],
    relatedServices: [
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "One Person Company Registration", slug: "one-person-company", categorySlug: "business-registration" },
    ],
  },

  {
    slug: "startup-india-recognition",
    title: "Startup India DPIIT Recognition: Eligibility, Benefits, and Application Guide",
    category: "Startup Support",
    readTime: "6 min read",
    publishDate: "October 2026",
    summary: "Discover how Department for Promotion of Industry and Internal Trade (DPIIT) recognition empowers Indian startups with tax exemptions, funding avenues, and intellectual property fee concessions.",
    keyTakeaways: [
      "Only Private Limited Companies, Registered Partnerships, and LLPs are eligible for Startup India recognition.",
      "Entity must be less than 10 years old with turnover below ₹100 Crores in every preceding year.",
      "Enjoy up to 80% rebate on patent filings and 50% rebate on trademark government fees.",
      "DPIIT recognition is the gateway to Section 80-IAC 3-year tax holiday applications.",
    ],
    contentSections: [
      {
        heading: "1. What is Startup India Recognition?",
        paragraphs: [
          "Launched under the flagship initiative of the Government of India, DPIIT recognition certifies that your business is an innovative enterprise working on novel products, services, or significantly improved business processes with high commercial scalability.",
        ],
      },
      {
        heading: "2. Core Eligibility Benchmarks",
        paragraphs: [
          "To qualify under the official government gazette notification, the business must satisfy four cumulative conditions:",
        ],
        bulletPoints: [
          "Age of Entity: Less than 10 years from the date of incorporation or registration.",
          "Legal Form: Incorporated as a Private Limited Company, Registered Partnership, or Limited Liability Partnership (Sole proprietorships are not eligible).",
          "Turnover Limit: Turnover for any financial year since incorporation has not exceeded ₹100 Crores.",
          "Innovation Focus: Entity is actively developing or commercializing an innovative product or process, or possesses a scalable model with substantial potential for wealth creation or job generation.",
        ],
      },
      {
        heading: "3. Key Government Benefits",
        paragraphs: [
          "Once recognized, startups unlock statutory benefits including fast-tracked intellectual property examination, self-certification under 6 labour laws and 3 environmental laws, and access to the Startup India Seed Fund Scheme (SISFS).",
        ],
      },
    ],
    relatedServices: [
      { title: "Startup India Recognition Assistance", slug: "startup-india-recognition", categorySlug: "startup-services" },
      { title: "Startup Odisha Programme Assistance", slug: "startup-odisha", categorySlug: "startup-services" },
    ],
  },

  {
    slug: "startup-odisha-programmes",
    title: "Startup Odisha Programmes: Grants, Subsidies, and Regional Ecosystem Benefits",
    category: "Startup Support",
    readTime: "6 min read",
    publishDate: "October 2026",
    summary: "An overview of the funding schemes, monthly sustenance allowances, and incubator infrastructure available for innovative ventures in Odisha.",
    keyTakeaways: [
      "Monthly sustenance allowance of ₹20,000 (₹22,000 for women/SC/ST/transgender founders) for 1 year.",
      "Product Development and Marketing Assistance (PDMA) grant up to ₹16 Lakhs.",
      "World-class incubation access at O-Hub, KIIT-TBI, and academic centres.",
      "Subsidized participation in national and international exhibitions.",
    ],
    contentSections: [
      {
        heading: "1. The Odisha Startup Ecosystem",
        paragraphs: [
          "Odisha has emerged as one of the most supportive startup destinations in Eastern India, backed by progressive policy initiatives from the MSME Department. Through the Startup Odisha initiative, the state provides non-dilutive financial grants and physical incubation infrastructure to nurture innovation.",
        ],
      },
      {
        heading: "2. Key Financial Support Schemes",
        paragraphs: [
          "Eligible startups recognized under Startup Odisha can access targeted financial packages:",
        ],
        bulletPoints: [
          "Monthly Sustenance Allowance: ₹20,000 per month for 1 year to cover founder living expenses (₹22,000/month for women, transgender, SC/ST, and SEBC founders).",
          "Product Development & Marketing Assistance (PDMA): Grant assistance up to ₹16 Lakhs for developing prototypes, testing, and initial commercialization.",
          "Subsidized Incubation: Highly subsidized or free co-working space across recognized incubators including the 4-lakh sq ft O-Hub facility in Bhubaneswar.",
        ],
      },
      {
        heading: "3. How to Apply",
        paragraphs: [
          "Before applying to Startup Odisha, your entity must obtain central DPIIT recognition. Corpunex helps regional and expanding startups prepare compliant project reports and present their applications effectively.",
        ],
      },
    ],
    relatedServices: [
      { title: "Startup Odisha Programme Assistance", slug: "startup-odisha", categorySlug: "startup-services" },
      { title: "Udyam / MSME Registration", slug: "udyam-msme-registration", categorySlug: "startup-services" },
    ],
  },

  {
    slug: "gst-registration-requirements",
    title: "GST Registration in India: Turnover Thresholds, Mandatory Cases, and Documentation",
    category: "GST & Taxation",
    readTime: "5 min read",
    publishDate: "October 2026",
    summary: "Clear guidelines on who must register for GST under Indian law, aggregate turnover calculations, voluntary registration advantages, and required documents.",
    keyTakeaways: [
      "Threshold: ₹40 Lakhs for goods and ₹20 Lakhs for services in standard states.",
      "Inter-state suppliers and e-commerce sellers must register regardless of turnover.",
      "Voluntary registration allows claiming Input Tax Credit on business assets and rent.",
      "Aadhaar authentication is mandatory for fast-track 7-day registration without physical inspection.",
    ],
    contentSections: [
      {
        heading: "1. Statutory Turnover Thresholds",
        paragraphs: [
          "Under the Central Goods and Services Tax Act, 2017, suppliers of goods whose aggregate turnover in a financial year exceeds ₹40 Lakhs (in normal category states) must obtain GST registration. For service providers, the mandatory threshold is ₹20 Lakhs.",
          "For special category states (including northeastern states and Uttarakhand), the thresholds are ₹20 Lakhs for goods and ₹10 Lakhs for services.",
        ],
      },
      {
        heading: "2. Cases Where GST is Mandatory Irrespective of Turnover",
        paragraphs: [
          "Section 24 of the CGST Act prescribes situations where registration is compulsory even if annual revenue is zero:",
        ],
        bulletPoints: [
          "Persons making any inter-state taxable supply of goods.",
          "Persons who supply goods or services through e-commerce operators.",
          "Non-resident taxable persons and casual taxable persons.",
          "Persons required to pay tax under Reverse Charge Mechanism (RCM).",
          "Input Service Distributors (ISD) and aggregators.",
        ],
      },
    ],
    relatedServices: [
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
      { title: "Income Tax Filing", slug: "income-tax-filing", categorySlug: "gst-taxation" },
    ],
  },

  {
    slug: "udyam-msme-registration",
    title: "Why Every Small Business in India Should Get Udyam (MSME) Registered",
    category: "Startup Support",
    readTime: "5 min read",
    publishDate: "October 2026",
    summary: "Understanding the vital benefits of the Ministry of MSME's Udyam portal: delayed payment recovery, collateral-free credit, and fee concessions.",
    keyTakeaways: [
      "Lifetime validity with zero official government application fees.",
      "Access to collateral-free credit through the CGTMSE government guarantee scheme.",
      "Strict legal protection against delayed customer payments under Section 15 of MSMED Act.",
      "50% rebate on trademark government filing fees.",
    ],
    contentSections: [
      {
        heading: "1. The Power of Udyam Registration",
        paragraphs: [
          "The Udyam Registration scheme, introduced in July 2020 by the Ministry of Micro, Small and Medium Enterprises, replaced the older Udyog Aadhaar and EM-II systems. It is paperless, based on self-declaration, and linked directly with Income Tax and GST networks.",
        ],
      },
      {
        heading: "2. Legal Protection Against Delayed Payments",
        paragraphs: [
          "One of the most powerful statutory protections for Indian MSMEs is Section 15 & 16 of the MSMED Act. Buyers who procure goods or services from an Udyam-registered enterprise are legally bound to settle invoices within 45 days. If they fail, they are liable to pay compound interest at three times the RBI bank rate.",
        ],
      },
    ],
    relatedServices: [
      { title: "Udyam / MSME Registration", slug: "udyam-msme-registration", categorySlug: "startup-services" },
      { title: "Sole Proprietorship Setup", slug: "sole-proprietorship", categorySlug: "business-registration" },
    ],
  },

  {
    slug: "trademark-registration-guide",
    title: "Trademark Registration in India: Classes, Symbol Usage (™ vs ®), and Timelines",
    category: "Intellectual Property",
    readTime: "6 min read",
    publishDate: "October 2026",
    summary: "A practical guide to securing brand names and logos under the Trade Marks Act, 1999: classification, search, examination, and enforcement.",
    keyTakeaways: [
      "Use ™ immediately after receiving your TM-A filing acknowledgment.",
      "Use ® only after the official Trademark Certificate is issued by the Registry.",
      "Trademark classifications span 45 classes (1-34 for goods, 35-45 for services).",
      "MSMEs and startups qualify for a 50% government fee discount (₹4,500 instead of ₹9,000 per class).",
    ],
    contentSections: [
      {
        heading: "1. Why Brand Protection Matters",
        paragraphs: [
          "Building a business without registering your trademark leaves you vulnerable to copycats, trademark squatters, and infringement lawsuits. A registered trademark gives you exclusive nation-wide rights to use the brand and take legal action against competitors attempting to pass off their goods as yours.",
        ],
      },
      {
        heading: "2. The Difference Between ™ and ®",
        paragraphs: [
          "Many entrepreneurs confuse the two symbols:",
        ],
        bulletPoints: [
          "The ™ symbol indicates that a trademark application has been formally filed and is pending registration. You can start using ™ within 24 to 48 hours of filing.",
          "The ® symbol indicates that the trademark has completed examination, survived opposition, and has been formally registered. Displaying ® before the final certificate is illegal.",
        ],
      },
    ],
    relatedServices: [
      { title: "Trademark Registration", slug: "trademark-registration", categorySlug: "trademark-ip" },
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
    ],
  },

  {
    slug: "annual-roc-compliance-pvt-ltd",
    title: "Annual ROC Compliance Calendar & Penalties for Private Limited Companies",
    category: "Corporate Compliance",
    readTime: "7 min read",
    publishDate: "October 2026",
    summary: "A breakdown of recurring statutory filings under the Companies Act, 2013, including Form AOC-4, MGT-7, DIR-3 KYC, and the consequences of non-compliance.",
    keyTakeaways: [
      "Delayed MCA filing attracts a statutory penalty of ₹100 per day per form with no cap.",
      "Failure to file returns for 3 consecutive years leads to disqualification of directors for 5 years.",
      "DIR-3 KYC must be completed every year before September 30 for all DIN holders.",
      "Even pre-revenue companies must conduct AGMs and file statutory annual returns.",
    ],
    contentSections: [
      {
        heading: "1. The Recurring Compliance Cycle",
        paragraphs: [
          "Incorporating a Private Limited Company is only the first step. Every year, directors must oversee statutory accounting, conduct regular board meetings, convene an Annual General Meeting (AGM), and file audited financial reports with the Ministry of Corporate Affairs.",
        ],
      },
      {
        heading: "2. Key Statutory Deadlines",
        paragraphs: [
          "Keep these annual compliance dates marked on your corporate governance calendar:",
        ],
        bulletPoints: [
          "April 30: MSME-1 half-yearly return for outstanding supplier dues.",
          "June 30: DPT-3 return of deposits and loans.",
          "September 30: DIR-3 KYC for all directors and convening of Annual General Meeting (AGM).",
          "October 29 (within 30 days of AGM): Form AOC-4 for filing audited balance sheets and P&L.",
          "November 28 (within 60 days of AGM): Form MGT-7 or MGT-7A for filing the company's annual return.",
        ],
      },
    ],
    relatedServices: [
      { title: "Annual ROC Compliance", slug: "annual-roc-compliance", categorySlug: "corporate-compliance" },
      { title: "Income Tax Filing", slug: "income-tax-filing", categorySlug: "gst-taxation" },
    ],
  },

  {
    slug: "essential-registrations-new-business",
    title: "10 Essential Registrations Every New Indian Business Needs to Consider",
    category: "Business Registration",
    readTime: "6 min read",
    publishDate: "October 2026",
    summary: "From PAN and GST to Shops & Establishments and Professional Tax, a checklist of registrations to ensure your enterprise operates lawfully from day one.",
    keyTakeaways: [
      "Company Incorporation provides corporate personality but operating licences are still required.",
      "Every physical establishment requires a local municipal Shops & Establishments registration.",
      "Food businesses must secure an FSSAI licence before manufacturing or serving edible items.",
      "Cross-border transactions require an Import Export Code (IEC) from DGFT.",
    ],
    contentSections: [
      {
        heading: "1. The Registration Matrix",
        paragraphs: [
          "New founders often assume that receiving their Certificate of Incorporation means all legal prerequisites are complete. In reality, commercial operations in India are regulated across municipal, state, and central layers.",
        ],
        bulletPoints: [
          "1. Corporate Legal Entity (Pvt Ltd, LLP, or Proprietorship)",
          "2. PAN & TAN for corporate tax identification and withholding",
          "3. Bank Current Account for financial segregation",
          "4. Shops & Establishments Registration for municipal premises",
          "5. GST Registration for indirect taxes and input credit",
          "6. Udyam MSME Registration for government credit benefits",
          "7. Trademark Registration for brand protection",
          "8. Professional Tax (PT) Enrolment & Registration where applicable",
          "9. FSSAI Licence for any food or beverage handling",
          "10. Import Export Code (IEC) for international business transactions",
        ],
      },
    ],
    relatedServices: [
      { title: "All Services Directory", slug: "", categorySlug: "" },
      { title: "FSSAI Licence", slug: "fssai-licence", categorySlug: "licences-registrations" },
    ],
  },

  {
    slug: "common-business-registration-faqs",
    title: "Top 15 Company Registration Pitfalls in India and How to Avoid Them",
    category: "Business Registration",
    readTime: "7 min read",
    publishDate: "October 2026",
    summary: "Avoid common errors during business incorporation: name rejection issues, mismatched KYC proofs, incorrect authorized capital, and overlooked post-incorporation filings.",
    keyTakeaways: [
      "Check existing trademarks before proposing company names to avoid MCA rejections.",
      "Do not set authorized capital unnecessarily high unless immediately required, to avoid high stamp duty.",
      "File Form INC-20A within 180 days to avoid heavy fines and company freeze.",
      "Execute a Co-Founders' Agreement before incorporating to prevent equity disputes.",
    ],
    contentSections: [
      {
        heading: "1. Name Approval Conflicts",
        paragraphs: [
          "The MCA rejects names that closely resemble registered trademarks or existing company names. Conducting a preliminary trademark search in Class 35 and industry-specific classes saves time and prevents repeated resubmission fees.",
        ],
      },
      {
        heading: "2. Capital Planning Errors",
        paragraphs: [
          "Many founders conflate Authorized Share Capital with Paid-up Capital. Authorized capital is the maximum value of shares the company is permitted to issue. Stamp duty is calculated based on authorized capital. Setting it at ₹15 Lakhs or ₹1 Lakh keeps initial government fees low while leaving room for capital expansion.",
        ],
      },
      {
        heading: "3. Neglecting Form INC-20A",
        paragraphs: [
          "Failure to file the Declaration of Commencement of Business (INC-20A) within 180 days of incorporation carries a ₹50,000 fine for the company and ₹1,000 per day for directors, and can lead to the MCA striking off the company name.",
        ],
      },
    ],
    relatedServices: [
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "Annual ROC Compliance", slug: "annual-roc-compliance", categorySlug: "corporate-compliance" },
    ],
  },
];
