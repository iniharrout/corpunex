import { timeline } from "@/config/site";

/**
 * Guides for /resources. Laws and fees change often: every article needs
 * a review date, and any figure that has not been checked against the
 * current notification is marked [VERIFY: …].
 */
export interface Article {
  slug: string;
  title: string;
  category: "Starting up" | "Startup schemes" | "Tax" | "Trademarks" | "Compliance";
  published: string;
  summary: string;
  takeaways: string[];
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  related: { label: string; href: string }[];
}

export const articles: Article[] = [
  {
    slug: "pvt-ltd-vs-llp",
    title: "Private Limited company or LLP: which suits your business?",
    category: "Starting up",
    published: "October 2026",
    summary:
      "Both give you limited liability. They differ in who can invest, how much you file each year, and how ownership changes hands.",
    takeaways: [
      "Choose a Private Limited company if you plan to raise equity, give employees ESOPs or eventually list.",
      "Choose an LLP if you run a services firm with partners and do not plan to raise equity.",
      "An LLP needs an audit only if turnover goes above ₹40 lakh or contribution above ₹25 lakh.",
      "Shares in a company transfer easily. A change of partners in an LLP means amending the LLP agreement.",
    ],
    sections: [
      {
        heading: "What they have in common",
        paragraphs: [
          "A Private Limited company and an LLP are both separate legal entities. Your personal assets are kept apart from the business's debts.",
          "A company is governed by the Companies Act, 2013. An LLP is governed by the Limited Liability Partnership Act, 2008, which sets out fewer formal procedures.",
        ],
      },
      {
        heading: "Raising money",
        paragraphs: [
          "Angel and venture capital investors almost always invest through shares, so they expect a Private Limited company. ESOPs also need shares.",
          "An LLP has no share capital. Partners contribute capital and share profits under the LLP agreement. Bringing in a new partner, or changing shares of profit, means amending the agreement with every partner's consent.",
        ],
      },
      {
        heading: "Compliance each year",
        paragraphs: [
          "Every Private Limited company must appoint an auditor, hold board meetings and an AGM, and file AOC-4 and MGT-7 or MGT-7A, even with no revenue.",
          "An LLP files Form 11 and Form 8 each year. Its accounts need an audit only if turnover goes above ₹40 lakh or partner contribution above ₹25 lakh.",
        ],
      },
      {
        heading: "Side by side",
        paragraphs: ["The main differences, briefly:"],
        bullets: [
          "Minimum people: two directors and two shareholders for a company; two designated partners for an LLP.",
          "Ownership and management: separate in a company (shareholders and directors); usually the same people in an LLP.",
          "Tax: an LLP pays a flat rate on profits. A company can choose a lower concessional rate under section 115BAA if it gives up certain deductions. [VERIFY: current rates, surcharge and cess]",
          "Changing later: an LLP can convert into a company, but it takes time and filings. Starting as a company avoids this if you expect to raise.",
        ],
      },
    ],
    related: [
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
      { label: "LLP registration", href: "/services/business-registration/llp-registration" },
      { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
    ],
  },

  {
    slug: "documents-required-company-registration",
    title: "Documents you need to register a company in India",
    category: "Starting up",
    published: "October 2026",
    summary:
      "Most SPICe+ resubmissions come from documents that do not match each other. This checklist covers what each director needs and what the registered office needs.",
    takeaways: [
      "Names and dates of birth must match exactly across every director's documents.",
      "Bank statements and utility bills used as address proof must be no older than 2 months.",
      "A home address can be the registered office, with a recent utility bill and the owner's no-objection letter.",
      "Documents signed outside India must be notarised and apostilled, or consularised.",
    ],
    sections: [
      {
        heading: "For each director and shareholder",
        paragraphs: [
          "The MCA checks names and dates of birth across documents. A spelling difference between PAN and Aadhaar is one of the most common reasons for a resubmission request.",
        ],
        bullets: [
          "PAN card. Foreign nationals use a passport instead.",
          "Identity proof: passport, voter ID or driving licence.",
          "Address proof no older than 2 months: bank statement, or electricity, phone or gas bill.",
          "A recent passport-size photograph.",
        ],
      },
      {
        heading: "For the registered office",
        paragraphs: ["The company needs an address where it can receive official letters from the day it is incorporated."],
        bullets: [
          "A utility bill for the premises, no older than 2 months: electricity, gas or water.",
          "A signed no-objection letter from the property owner.",
          "The rent agreement, if the property is rented.",
        ],
      },
      {
        heading: "Before you send them",
        paragraphs: [
          `Check that each bank statement shows a recent transaction and your full address. Downloaded e-statements are accepted. With complete documents, incorporation typically takes ${timeline.short}.`,
        ],
      },
    ],
    related: [
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
      { label: "One Person Company registration", href: "/services/business-registration/one-person-company" },
    ],
  },

  {
    slug: "startup-india-recognition",
    title: "Startup India (DPIIT) recognition: who qualifies and what it gives you",
    category: "Startup schemes",
    published: "October 2026",
    summary:
      "DPIIT recognition is the first step towards the 80-IAC tax exemption and several central schemes. Here is who can apply and what to expect.",
    takeaways: [
      "Only Private Limited companies, registered partnership firms and LLPs can be recognised.",
      "The entity must be under 10 years old, with turnover of no more than ₹100 crore in any year.",
      "Recognition gives lower patent and trademark fees and access to central schemes.",
      "The 80-IAC exemption needs a separate application after recognition.",
    ],
    sections: [
      {
        heading: "What recognition means",
        paragraphs: [
          "DPIIT recognition confirms that the government treats your business as a startup: one working on a new or improved product, process or service, or with a scalable model.",
        ],
      },
      {
        heading: "Who qualifies",
        paragraphs: ["All of these must be true:"],
        bullets: [
          "Age: less than 10 years since incorporation or registration.",
          "Structure: Private Limited company, registered partnership firm or LLP. Proprietorships do not qualify.",
          "Turnover: no more than ₹100 crore in any financial year since incorporation.",
          "Purpose: working on innovation or improvement of products or processes, or a scalable model with potential for jobs or wealth creation.",
          "Not formed by splitting up or reconstructing an existing business.",
        ],
      },
      {
        heading: "What it gives you",
        paragraphs: [
          "Recognised startups can apply for the 80-IAC income tax exemption, pay lower government fees for patents and trademarks, self-certify under certain labour and environmental laws, and apply to schemes such as the Startup India Seed Fund. [VERIFY: current list of benefits]",
        ],
      },
    ],
    related: [
      { label: "Startup India (DPIIT) recognition", href: "/services/startup-services/startup-india-recognition" },
      { label: "Startup Odisha", href: "/services/startup-services/startup-odisha" },
    ],
  },

  {
    slug: "startup-odisha-programmes",
    title: "Startup Odisha: what the state offers and how to apply",
    category: "Startup schemes",
    published: "October 2026",
    summary:
      "Odisha's startup policy offers allowances, grants and incubator support to recognised startups in the state. An overview of the main schemes.",
    takeaways: [
      "You need DPIIT recognition before you can register with Startup Odisha.",
      "The policy includes a monthly allowance for founders, product development grants and incubator places.",
      "Amounts and conditions change with each policy revision, so check them before applying.",
    ],
    sections: [
      {
        heading: "Who runs it",
        paragraphs: [
          "Startup Odisha is run by the state's MSME Department. It registers startups based in Odisha and administers the support set out in the Odisha Startup Policy.",
        ],
      },
      {
        heading: "Main support",
        paragraphs: ["Recognised startups can apply for:"],
        bullets: [
          "A monthly allowance for founders for a fixed period. [VERIFY: current amount, duration and higher rate for women, SC, ST and other founders]",
          "Product development and marketing assistance. [VERIFY: current maximum grant]",
          "Subsidised or free space at incubators in the state, including O-Hub in Bhubaneswar.",
        ],
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Get DPIIT recognition first. Then register on the Startup Odisha portal with your project report and documents. An evaluation committee reviews the application and may ask you to present.",
        ],
      },
    ],
    related: [
      { label: "Startup Odisha", href: "/services/startup-services/startup-odisha" },
      { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration" },
    ],
  },

  {
    slug: "gst-registration-requirements",
    title: "GST registration: when you must register, and what you need",
    category: "Tax",
    published: "October 2026",
    summary: "Turnover thresholds, the cases where registration is compulsory regardless of turnover, and why some businesses register early.",
    takeaways: [
      "Thresholds are ₹40 lakh for goods and ₹20 lakh for services in most states.",
      "Sellers of goods across states and sellers through e-commerce operators must register regardless of turnover, with some exceptions.",
      "Registering voluntarily lets you claim input tax credit, but you must then file returns.",
    ],
    sections: [
      {
        heading: "Turnover thresholds",
        paragraphs: [
          "Under the CGST Act, a supplier of goods must register once aggregate turnover in a financial year exceeds ₹40 lakh. For services, the threshold is ₹20 lakh.",
          "In special category states, the thresholds are ₹20 lakh for goods and ₹10 lakh for services. [VERIFY: thresholds and list of special category states are current]",
        ],
      },
      {
        heading: "When turnover does not matter",
        paragraphs: ["Section 24 of the CGST Act requires registration, whatever your turnover, if you are:"],
        bullets: [
          "Making interstate taxable supplies of goods.",
          "Supplying through an e-commerce operator, with some exceptions for small service suppliers.",
          "A casual or non-resident taxable person.",
          "Required to pay tax under reverse charge.",
          "An input service distributor.",
        ],
      },
      {
        heading: "Registering early",
        paragraphs: [
          "B2B businesses often register before they reach the threshold. It lets them claim input tax credit on purchases and meet client onboarding rules. Once registered, returns are due every month or quarter, even with no sales.",
        ],
      },
    ],
    related: [
      { label: "GST registration", href: "/services/gst-taxation/gst-registration" },
      { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing" },
    ],
  },

  {
    slug: "udyam-msme-registration",
    title: "Udyam registration: what it is and what it gives a small business",
    category: "Startup schemes",
    published: "October 2026",
    summary: "Udyam is free, permanent and quick. Here is what it gives you, including protection when buyers pay late.",
    takeaways: [
      "Udyam registration is free and does not need renewing.",
      "It gives access to MSME lending schemes, including CGTMSE credit guarantees.",
      "Buyers must pay registered micro and small enterprises within 45 days at most.",
      "Udyam-registered businesses pay the lower government fee for trademarks.",
    ],
    sections: [
      {
        heading: "What it is",
        paragraphs: [
          "Udyam registration replaced Udyog Aadhaar in July 2020. It is filed online, based on self-declaration, and linked to your income tax and GST records.",
        ],
      },
      {
        heading: "Protection against late payment",
        paragraphs: [
          "Under sections 15 and 16 of the MSMED Act, a buyer must pay a registered micro or small enterprise within the agreed period, and no later than 45 days. Late payments carry compound interest at three times the bank rate set by the RBI.",
        ],
      },
    ],
    related: [
      { label: "Udyam (MSME) registration", href: "/services/startup-services/udyam-msme-registration" },
      { label: "Sole proprietorship setup", href: "/services/business-registration/sole-proprietorship" },
    ],
  },

  {
    slug: "trademark-registration-guide",
    title: "Trademark registration in India: classes, ™ and ®, and what happens after filing",
    category: "Trademarks",
    published: "October 2026",
    summary: "How classes work, when you can use each symbol, and the stages between filing and registration.",
    takeaways: [
      "You can use ™ once your application is filed.",
      "You can use ® only after the mark is registered.",
      "There are 45 classes: 1 to 34 for goods and 35 to 45 for services.",
      "Individuals, startups and small enterprises pay a lower government fee. [VERIFY: current fee per class]",
    ],
    sections: [
      {
        heading: "Why register",
        paragraphs: [
          "A registered trademark gives you the exclusive right to use the mark in India for the goods or services it covers, and the right to sue anyone who infringes it.",
        ],
      },
      {
        heading: "™ and ®",
        paragraphs: ["The two symbols mean different things:"],
        bullets: [
          "™ shows that you claim the mark. You can use it once your application is filed.",
          "® shows that the mark is registered. Using it before registration is an offence under the Trade Marks Act.",
        ],
      },
      {
        heading: "After you file",
        paragraphs: [
          "The Registry examines the application and either accepts it or issues an examination report. Accepted marks are published in the Trade Marks Journal, and anyone can oppose them within 4 months. If no one does, the mark is registered for 10 years.",
        ],
      },
    ],
    related: [
      { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration" },
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
    ],
  },

  {
    slug: "annual-roc-compliance-pvt-ltd",
    title: "Annual ROC compliance for Private Limited companies: dates and penalties",
    category: "Compliance",
    published: "October 2026",
    summary: "The filings every company makes each year under the Companies Act, the usual dates, and what happens if they are missed.",
    takeaways: [
      "Late MCA forms attract an additional fee of ₹100 a day each, with no upper limit.",
      "Directors of a company that has not filed for 3 years in a row can be disqualified.",
      "Pre-revenue companies must still hold an AGM and file their annual forms.",
    ],
    sections: [
      {
        heading: "The yearly cycle",
        paragraphs: [
          "Every year, a company keeps its books, holds board meetings, has its accounts audited, holds an AGM and files its financial statements and annual return with the MCA.",
        ],
      },
      {
        heading: "Usual dates for a company with a March year end",
        paragraphs: ["Dates depend on when the AGM is held. [VERIFY: dates against current MCA rules]"],
        bullets: [
          "30 April and 31 October: MSME-1, if the company owes money to MSME suppliers for more than 45 days.",
          "30 June: DPT-3, the return of deposits and outstanding loans.",
          "30 September: last date for the AGM, and DIR-3 KYC for directors.",
          "Within 30 days of the AGM: AOC-4, the financial statements.",
          "Within 60 days of the AGM: MGT-7 or MGT-7A, the annual return.",
        ],
      },
    ],
    related: [
      { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
      { label: "Income tax return", href: "/services/gst-taxation/income-tax-filing" },
    ],
  },

  {
    slug: "essential-registrations-new-business",
    title: "Registrations a new business in India may need",
    category: "Starting up",
    published: "October 2026",
    summary:
      "A certificate of incorporation is not the end of the paperwork. These are the other registrations to check, depending on what you do and where.",
    takeaways: [
      "Incorporation creates the entity. Operating registrations are separate.",
      "Most states require shops and offices to register under their Shops and Establishments law.",
      "Food businesses need FSSAI registration or a licence before they start.",
      "Importers and exporters of goods need an Import Export Code.",
    ],
    sections: [
      {
        heading: "The list to check",
        paragraphs: [
          "Which of these you need depends on your structure, state, activity and number of employees:",
        ],
        bullets: [
          "The legal entity: company, LLP or proprietorship.",
          "PAN and TAN.",
          "A current account in the business's name.",
          "Shops and Establishments registration for your premises.",
          "GST registration.",
          "Udyam (MSME) registration.",
          "Trademark registration for your brand.",
          "Professional tax registration, in states that levy it.",
          "FSSAI registration or licence, if you handle food.",
          "Import Export Code, if you import or export goods.",
        ],
      },
    ],
    related: [
      { label: "All services", href: "/services" },
      { label: "FSSAI registration and licence", href: "/services/licences-registrations/fssai-licence" },
    ],
  },

  {
    slug: "common-business-registration-faqs",
    title: "Three mistakes that delay company registration",
    category: "Starting up",
    published: "October 2026",
    summary: "Name conflicts, capital set too high, and a missed INC-20A cause most of the problems we see. How to avoid each.",
    takeaways: [
      "Search trademarks before you propose a company name.",
      "Keep authorised capital modest. Stamp duty is charged on it.",
      "File INC-20A within 180 days of incorporation.",
      "Sign a co-founders' agreement before you incorporate.",
    ],
    sections: [
      {
        heading: "1. A name that conflicts",
        paragraphs: [
          "The MCA rejects names that are too close to existing companies or registered trademarks. Search the trademark register, including class 35 and the classes for your industry, before you propose a name.",
        ],
      },
      {
        heading: "2. Capital set too high",
        paragraphs: [
          "Authorised capital is the most the company can issue in shares. Paid-up capital is what shareholders actually put in. Stamp duty is charged on authorised capital, so most founders start at ₹1 lakh and increase it when they need to.",
        ],
      },
      {
        heading: "3. A missed INC-20A",
        paragraphs: [
          "A company must file its declaration of commencement of business (INC-20A) within 180 days of incorporation. Missing it brings penalties on the company and its directors, and the MCA can strike the company off. [VERIFY: current penalty amounts]",
        ],
      },
    ],
    related: [
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
      { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
    ],
  },
];

/** Reading time from word count, at 220 words a minute. */
export function readingMinutes(article: Article) {
  const text = [
    article.summary,
    ...article.takeaways,
    ...article.sections.flatMap((s) => [s.heading, ...s.paragraphs, ...(s.bullets ?? [])]),
  ].join(" ");
  return Math.max(1, Math.round(text.split(/\s+/).length / 220));
}
