import { timeline } from "@/config/site";

/**
 * Articles for /blog, written for first-time founders. Laws and fees
 * change often, so figures are kept to the ones that have been stable for
 * years; anything else is described without a number.
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
          "Tax: an LLP pays a flat rate on its profits. A company can choose a lower rate if it gives up certain deductions. Ask us which works out cheaper for you.",
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
          "Recognised startups can apply for the 80-IAC income tax exemption, pay lower government fees for patents and trademarks, self-certify under certain labour and environmental laws, and apply to schemes such as the Startup India Seed Fund.",
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
          "A monthly allowance for founders for a fixed period.",
          "Grants for building and marketing your product.",
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
          "A few states, mostly in the north-east, have lower limits.",
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
      "Individuals, startups and small businesses pay a lower government fee.",
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
        paragraphs: ["Most of these depend on when your AGM (annual general meeting) is held:"],
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
          "A company must file its declaration of commencement of business (INC-20A) within 180 days of incorporation. Missing it means penalties for the company and its directors, and the government can close the company down.",
        ],
      },
    ],
    related: [
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
      { label: "Annual ROC compliance", href: "/services/corporate-compliance/annual-roc-compliance" },
    ],
  },

  {
    slug: "mca-company-naming-rules",
    title: "MCA Company Naming Rules: Why Names Get Rejected and How to Pass",
    category: "Starting up",
    published: "October 2026",
    summary:
      "Over 60% of RUN and SPICe+ Part A applications get rejected due to Rule 8 non-compliance, generic words, or hidden trademark conflicts. Here is how the CRC checks your name and how to get first-pass approval.",
    takeaways: [
      "A compliant company name requires three distinct parts: a unique brand prefix, an activity noun, and an entity suffix.",
      "Single-word generic names or descriptive industry terms are automatically rejected by the Central Registration Centre (CRC).",
      "Words like 'International', 'Global', or 'Hindustan' require minimum authorised capital between ₹5 lakh and ₹50 lakh.",
      "Check registered trademarks in Class 35 and your core industry classes before filing RUN or Part A of SPICe+.",
    ],
    sections: [
      {
        heading: "The Rule 8 formula (Prefix + Activity + Suffix)",
        paragraphs: [
          "Under Rule 8 of the Companies (Incorporation) Rules, 2014, the Ministry of Corporate Affairs evaluates every proposed name through a strict structural formula. A compliant name must contain a distinctive brand identifier followed by an activity noun and the statutory entity suffix.",
          "For instance, proposing 'Fast Delivery Private Limited' will be instantly rejected because 'Fast Delivery' is descriptive and lacks a coined or distinctive identity. Proposing 'Zephyr Express Logistics Private Limited' succeeds because 'Zephyr' functions as a distinctive coined brand, 'Express Logistics' identifies the primary object, and 'Private Limited' designates the corporate structure.",
        ],
      },
      {
        heading: "The 5 most common reasons CRC rejects name applications",
        paragraphs: [
          "The MCA Central Registration Centre (CRC) in Manesar uses automated matching algorithms followed by examiner verification. These five issues trigger most resubmission notices:",
        ],
        bullets: [
          "Phonetic similarity: Changing spelling while retaining sound (e.g., 'Kool' instead of 'Cool', or 'Phonics' instead of 'Fonix') violates Rule 8A.",
          "Direct translation: Translating an existing company's name into Hindi or another regional language is considered identical under Rule 8B.",
          "Missing activity word: Names like 'Starlight Private Limited' lack an object noun indicating whether the company does IT, textiles, or finance.",
          "Unchecked trademark conflicts: A name identical or deceptively similar to a registered trademark in the Trade Marks Register under Section 4(2) cannot be approved without a trademark NOC.",
          "Sectoral regulatory terms without NOC: Words like 'Bank', 'Insurance', 'Mutual Fund', or 'Venture' filed without prior regulatory consent.",
        ],
      },
      {
        heading: "Scale words and required capital thresholds",
        paragraphs: [
          "Many first-time founders add words like 'International' or 'Global' to make their startup sound established, only to have their application returned. Under MCA guidelines, scale words require adequate authorised capital to prevent misleading the public.",
        ],
        bullets: [
          "International, Globe, Universal, Continental: Minimum authorised capital of ₹5 Lakhs.",
          "Asia, Asian: Minimum authorised capital of ₹10 Lakhs.",
          "Bharat, Hindustan, India (as prefix): Minimum authorised capital of ₹50 Lakhs.",
          "Corporation: Minimum authorised capital of ₹5 Crore.",
        ],
      },
      {
        heading: "Sectoral keywords requiring regulator NOCs",
        paragraphs: [
          "Certain activities are governed by statutory regulators. Using these words in your name requires an in-principle approval or No Objection Certificate (NOC) before the CRC will approve the name:",
        ],
        bullets: [
          "Banking & Lending ('Bank', 'Banking', 'NBFC', 'Microfinance'): Requires Reserve Bank of India (RBI) prior approval.",
          "Securities & Investment ('Stock Exchange', 'Asset Management', 'Mutual Fund', 'Venture Capital'): Requires SEBI clearance.",
          "Insurance ('Insurance', 'Assurance', 'Reinsurance'): Requires IRDAI approval.",
          "National & State Emblems ('Republic', 'President', 'Union', 'Federal'): Prohibited under the Emblems and Names (Prevention of Improper Use) Act, 1950.",
        ],
      },
    ],
    related: [
      { label: "Company name and trademark search tool", href: "/tools/company-name-search" },
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
      { label: "Trademark registration", href: "/services/trademark-ip/trademark-registration" },
    ],
  },

  {
    slug: "co-founder-agreements-guide",
    title: "Co-Founder Agreements for Indian Startups: Equity Split, Vesting & Deadlocks",
    category: "Starting up",
    published: "October 2026",
    summary:
      "Splitting equity 50/50 without a vesting schedule is the number one cause of early startup cap table destruction. How to structure vesting, cliff periods, IP assignment, and deadlock clauses under Indian law.",
    takeaways: [
      "Never grant 100% upfront unconditional equity on day one; implement a 4-year vesting schedule with a 1-year cliff.",
      "All pre-incorporation and future intellectual property must be explicitly assigned to the company, not held personally.",
      "Distinguish clearly between 'Good Leaver' and 'Bad Leaver' scenarios for share repurchase rights.",
      "Establish tie-breaking mechanisms (mediation, independent director casting vote) to prevent deadlocks in 2-founder companies.",
    ],
    sections: [
      {
        heading: "Why a handshake agreement fails when money arrives",
        paragraphs: [
          "When starting out, founders share an unspoken bond of trust and long hours. But if one founder steps back after 6 months while retaining 50% of the company's equity, the remaining founders are left running the company for an inactive shareholder.",
          "New institutional investors will rarely invest in a startup with dead equity on its cap table. A signed co-founders' agreement establishes expectations, deliverables, and clean departure paths before valuation and real stakes complicate relationships.",
        ],
      },
      {
        heading: "The standard 4-year vesting schedule with a 1-year cliff",
        paragraphs: [
          "The venture capital industry standard across India is 4-year linear monthly vesting with a 12-month cliff. Here is how the mechanics work in practice:",
        ],
        bullets: [
          "The 1-Year Cliff: If a co-founder leaves or is terminated before completing 12 full months, they walk away with 0% vested equity. Their unvested shares are repurchased by the company or surrendered.",
          "Post-Cliff Vesting: At the completion of Month 12, exactly 25% of their total equity allocation vests immediately.",
          "Monthly Accrual: The remaining 75% vests in equal monthly increments (approx. 2.08% per month) across the remaining 36 months.",
          "Reverse Vesting: In Indian Private Limited companies, founders legally hold the shares upfront, subject to a contractual right of repurchase by the promoters or company if they leave before full vesting.",
        ],
      },
      {
        heading: "Good leaver vs bad leaver share transfer",
        paragraphs: [
          "A robust agreement defines what happens to vested shares upon exit depending on the nature of the departure:",
        ],
        bullets: [
          "Good Leaver: Leaving due to permanent illness, mutual consent, or redundancy. The departing founder typically retains their vested shares, or the company repurchases them at independent Fair Market Value (FMV).",
          "Bad Leaver: Termination for gross misconduct, material breach of confidentiality, fraud, or joining a direct competitor. The company typically retains the right to claw back all unvested shares and buy back vested shares at face value (e.g., ₹10 per share).",
        ],
      },
      {
        heading: "IP assignment: Why investors reject unassigned code",
        paragraphs: [
          "Under the Indian Copyright Act, 1957, software code and designs authored by an individual remain their personal property unless there is a written assignment deed transferring ownership to the company.",
          "Your co-founder agreement must contain an explicit 'Assignment of Inventions and Intellectual Property' clause. This ensures every line of code, patentable invention, and brand asset created before and after incorporation belongs irrevocably to the company entity.",
        ],
      },
      {
        heading: "Resolving deadlocks in 50/50 setups",
        paragraphs: [
          "Two-founder companies with equal 50/50 shareholding are prone to corporate paralysis whenever a strategic disagreement arises. Practical resolution mechanisms include:",
        ],
        bullets: [
          "Domain allocation: Assigning the final casting vote on product and engineering to the CTO, and on sales, fundraising, and finance to the CEO.",
          "Independent advisor tie-breaker: Naming a respected mentor or lead angel whose decision is binding in unresolved deadlocks.",
          "Russian Roulette / Buy-Sell: One founder makes an offer to buy the other's shares at price X per share; the other founder must either accept the offer to sell or buy the first founder out at the exact same valuation.",
        ],
      },
    ],
    related: [
      { label: "Free Co-Founder Agreement template", href: "/templates" },
      { label: "Private Limited Company registration", href: "/services/business-registration/private-limited-company" },
      { label: "Legal documentation services", href: "/services/legal-documentation" },
    ],
  },

  {
    slug: "startup-india-80iac-tax-exemption",
    title: "Startup India Section 80-IAC Tax Exemption: Complete Eligibility & Filing Checklist",
    category: "Startup schemes",
    published: "October 2026",
    summary:
      "DPIIT recognition is not the same as the 3-year 100% tax holiday under Section 80-IAC. How the Inter-Ministerial Board evaluates applications, which startups qualify, and how to avoid outright rejection.",
    takeaways: [
      "DPIIT certificate provides self-certification and tender exemptions, but Section 80-IAC requires separate Inter-Ministerial Board (IMB) approval.",
      "Only Private Limited companies and LLPs incorporated on or after 1 April 2016 qualify for Section 80-IAC.",
      "The startup must demonstrate true product or process innovation, scalability, and significant employment generation potential.",
      "Businesses formed by splitting up or reconstructing an existing business entity are strictly ineligible.",
    ],
    sections: [
      {
        heading: "DPIIT Recognition vs Section 80-IAC Tax Holiday",
        paragraphs: [
          "Most founders celebrate when they receive their DPIIT certificate under Startup India, believing they are automatically exempt from corporate income tax. In reality, DPIIT recognition and Section 80-IAC tax exemption are two completely distinct levels of government clearance.",
          "DPIIT recognition (granted via Form 1) gives self-certification under 6 labour laws and 3 environmental laws, 80% rebate on patent filings, and exemption from angel tax scrutiny. However, Section 80-IAC provides a 100% deduction of corporate profits for 3 consecutive financial years out of 10 years from incorporation. This requires rigorous approval from the Inter-Ministerial Board (IMB).",
        ],
      },
      {
        heading: "The 4 Non-Negotiable Eligibility Conditions",
        paragraphs: [
          "To be eligible for consideration under Section 80-IAC of the Income Tax Act, 1961, the entity must meet all four criteria:",
        ],
        bullets: [
          "Entity structure: Must be incorporated as a Private Limited Company or a Limited Liability Partnership (LLP). Sole proprietorships and partnership firms do not qualify.",
          "Incorporation timeline: Must have been incorporated on or after 1 April 2016.",
          "Turnover threshold: Total turnover must not exceed ₹100 Crore in any financial year since incorporation.",
          "Original enterprise: Must not be formed by splitting up, reconstruction, or rebranding an existing business entity.",
        ],
      },
      {
        heading: "What the Inter-Ministerial Board (IMB) looks for",
        paragraphs: [
          "The IMB consists of representatives from DPIIT, Department of Biotechnology, and Ministry of Electronics & IT. They evaluate applications on genuine novelty and technical differentiation rather than standard operational metrics:",
        ],
        bullets: [
          "Working Proof of Concept (PoC) or MVP: Live software, hardware prototype, or validated commercial traction.",
          "Demonstrable innovation: Development of an innovative product, service, or process that solves an unsolved problem or drastically lowers unit costs.",
          "Scalability & Employment: Potential to generate substantial domestic direct employment and wealth creation.",
          "IP protection: Pending or granted patents, registered designs, or proprietary algorithms significantly improve approval probability.",
        ],
      },
      {
        heading: "Step-by-step submission package on the National Single Window System (NSWS)",
        paragraphs: [
          "Applications are submitted digitally through the National Single Window System (NSWS) portal. A complete filing package must include:",
        ],
        bullets: [
          "Detailed Business Plan and Pitch Deck covering market problem, proprietary solution, revenue model, and 5-year projections.",
          "CA-certified financial statements and balance sheets since incorporation.",
          "A 2 to 3-minute unedited video demonstration showcasing the product or service in action and how the proprietary innovation functions.",
          "Copies of published or granted patents, trademarks, and copyright certificates.",
        ],
      },
    ],
    related: [
      { label: "Startup India DPIIT recognition service", href: "/services/startup-services/startup-india-recognition" },
      { label: "Income tax filing & advisory", href: "/services/gst-taxation/income-tax-filing" },
      { label: "Startup legal templates hub", href: "/templates" },
    ],
  },

  {
    slug: "post-incorporation-compliance-first-30-days",
    title: "Post-Incorporation Compliance: The First 30 Days After Getting Your CIN",
    category: "Compliance",
    published: "October 2026",
    summary:
      "Getting your Certificate of Incorporation is only the beginning. The statutory steps you must complete within 30 to 180 days to avoid director disqualification and ROC strike-off notices under INC-20A.",
    takeaways: [
      "Hold the first Board of Directors meeting within 30 days of the incorporation date.",
      "Appoint the first statutory auditor via Form ADT-1 within 30 days of incorporation.",
      "Subscribers must deposit share capital from their personal bank accounts into the company's current account before filing INC-20A.",
      "Issue stamped physical or demat share certificates to subscribers within 60 days of incorporation.",
    ],
    sections: [
      {
        heading: "Week 1: First Board Meeting and Banking Setup",
        paragraphs: [
          "Under Section 173(1) of the Companies Act, 2013, every newly incorporated company must hold its first Board of Directors meeting within 30 days of the date on the Certificate of Incorporation.",
          "In this meeting, the board formally adopts the common seal (if any), approves the opening of a bank current account, authorises signatories, and notes the company's registered office. The company current account requires the CIN, Certificate of Incorporation, PAN, TAN, MoA & AoA, and a certified copy of the board resolution.",
        ],
      },
      {
        heading: "Week 2: Appointing the Statutory Auditor (Form ADT-1)",
        paragraphs: [
          "Under Section 139(6), the Board of Directors must appoint the company's first statutory auditor (a practising Chartered Accountant or firm) within 30 days of registration.",
          "If the board fails to appoint the auditor within 30 days, it must inform the shareholders, who must convene an Extraordinary General Meeting (EGM) within 90 days to appoint the auditor. While ADT-1 is technically optional for first auditors in certain MCA circular interpretations, filing Form ADT-1 within 30 days creates an immutable ROC record and avoids disputes during subsequent annual filings.",
        ],
      },
      {
        heading: "Week 3-4: Share Capital Deposit and Stamp Duty on Certificates",
        paragraphs: [
          "Every subscriber named in the Memorandum of Association (MoA) must deposit their agreed subscription amount into the new company current account. A critical compliance rule: this money must be transferred directly from the subscriber's individual bank account, not in cash or from third-party accounts.",
          "Within 60 days of incorporation under Section 56(4), the company must issue Share Certificates (Form SH-1) to every subscriber. In states like Maharashtra, Delhi, Karnataka, and Tamil Nadu, share certificates must be stamped within 30 days of issuance under the relevant state Stamp Act.",
        ],
      },
      {
        heading: "Filing Form INC-20A (Commencement of Business)",
        paragraphs: [
          "Under Section 10A of the Companies Act, no company with share capital can begin business operations or exercise borrowing powers until the directors file Form INC-20A with the Registrar of Companies within 180 days of incorporation.",
          "The mandatory attachment to Form INC-20A is the bank statement showing credit of the subscription money paid by each promoter, along with photographic proof of the registered office showing external signboards. Missing INC-20A attracts a ₹50,000 fine for the company and ₹1,000 per day for directors, and empowers the ROC to initiate strike-off proceedings.",
        ],
      },
    ],
    related: [
      { label: "Annual ROC compliance service", href: "/services/corporate-compliance/annual-roc-compliance" },
      { label: "Compliance calendar for companies", href: "/compliance-calendar" },
      { label: "Board resolution for bank account template", href: "/templates" },
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
