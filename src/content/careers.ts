import { site } from "@/config/site";

/**
 * Open roles for /careers. These are drafts written from the work
 * Corpunex does; confirm each role, its location and its requirements
 * before launch, and remove any that are not hiring (see PLACEHOLDERS.md).
 */
export interface Role {
  slug: string;
  title: string;
  team: "Company law" | "Tax and accounts" | "Client advisory" | "Brand and content";
  location: string;
  type: "Full-time" | "Internship";
  /** ISO date the role was first published, for JobPosting schema. */
  posted: string;
  summary: string;
  about: string[];
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
}

export const roles: Role[] = [
  {
    slug: "company-secretary-associate",
    title: "Company Secretary associate",
    team: "Company law",
    location: "Bhubaneswar",
    type: "Full-time",
    posted: "2026-10-21",
    summary: "Prepare and file company and LLP registrations and yearly MCA filings for founders across India.",
    about: [
      "You'll handle a founder's company from the day it's registered: checking names, writing the company rulebook (MoA and AoA), filing SPICe+ and FiLLiP forms, and keeping the yearly filings on time.",
      "Most of our clients are starting a company for the first time, so a big part of the job is explaining each step in plain words.",
    ],
    responsibilities: [
      "Prepare and file incorporation forms for Private Limited companies, LLPs and One Person Companies.",
      "Draft MoA, AoA, LLP agreements, board resolutions and minutes.",
      "Run the yearly filing calendar for a set of clients: AOC-4, MGT-7, Form 8, Form 11 and director KYC.",
      "Reply to questions from the Registrar of Companies.",
      "Explain to founders what each filing does and what they need to send.",
    ],
    requirements: [
      "A qualified Company Secretary, or in the final stage of the CS course.",
      "Hands-on experience with filings on the MCA portal.",
      "Clear written English. You'll write to founders every day.",
    ],
    niceToHave: ["Experience with FEMA filings for foreign-owned companies.", "Working knowledge of Odia or Hindi."],
  },
  {
    slug: "accounts-and-tax-executive",
    title: "Accounts and tax executive",
    team: "Tax and accounts",
    location: "Bhubaneswar",
    type: "Full-time",
    posted: "2026-10-21",
    summary: "Keep books, file GST and TDS returns, and prepare income tax returns for startups and small businesses.",
    about: [
      "You'll look after the monthly books and tax filings for a group of startups and small businesses, working with the Chartered Accountants who review and sign off the work.",
    ],
    responsibilities: [
      "Keep monthly books and match them to bank statements.",
      "Prepare and file GSTR-1, GSTR-3B and TDS returns.",
      "Match the GST clients claim back against their suppliers' filings.",
      "Prepare income tax returns and the working papers for the CA's review.",
      "Answer clients' questions about what's due and why.",
    ],
    requirements: [
      "A degree in commerce, or a semi-qualified CA or CMA.",
      "Experience preparing GST returns and keeping books in Tally or Zoho Books.",
      "Care with numbers and deadlines.",
    ],
    niceToHave: ["Experience with startups or e-commerce sellers.", "Experience with payroll."],
  },
  {
    slug: "client-advisor",
    title: "Client advisor",
    team: "Client advisory",
    location: "New Delhi",
    type: "Full-time",
    posted: "2026-10-21",
    summary: "Be the first person founders speak to: understand what they need and help them choose the right setup.",
    about: [
      "When a founder requests a call back, you're the person who calls. You'll find out what they're building, explain their options, and prepare a clear, itemised quote with the team.",
    ],
    responsibilities: [
      "Call founders back and understand their business and what they need.",
      "Explain the differences between a company, an LLP and other options in plain words.",
      "Prepare written quotes with the company law and tax teams.",
      "Stay in touch with each founder until their work starts.",
    ],
    requirements: [
      "Two or more years in a client-facing role, ideally in professional services or financial services.",
      "Comfortable on the phone in English and Hindi.",
      "Patient, clear and honest with people who are new to all of this.",
    ],
    niceToHave: ["Some knowledge of company registration or GST."],
  },
  {
    slug: "content-writer-intern",
    title: "Content writer (internship)",
    team: "Brand and content",
    location: "Remote, India",
    type: "Internship",
    posted: "2026-10-21",
    summary: "Write plain-language articles and guides that help first-time founders understand Indian company law and tax.",
    about: [
      "You'll turn complicated rules into short, clear articles for our blog, working with our CAs and CSs to check every fact.",
    ],
    responsibilities: [
      "Research and write articles for the blog.",
      "Rewrite service pages so a first-time founder can follow them.",
      "Check every fact with a qualified team member before it's published.",
    ],
    requirements: [
      "Excellent written English, with a talent for making complicated things simple.",
      "Samples of your writing.",
    ],
    niceToHave: ["A background in law, commerce or finance."],
  },
];

export function applyHref(role?: Role) {
  const subject = role ? `Application: ${role.title}` : "Application: general";
  return `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
}

export const hiringSteps = [
  { title: "Send your CV", body: "Email it with a few lines on why the role interests you." },
  { title: "A short call", body: "We'll talk about your experience and answer your questions about us." },
  { title: "A practical task", body: "A small piece of real-world work, close to what you'd do in the role." },
  { title: "Meet the team", body: "A conversation with the people you'd work with every day." },
];

/** The teams, in the order they appear on /careers. */
export const teams: { name: Role["team"]; body: string }[] = [
  {
    name: "Company law",
    body: "Company Secretaries who register companies and LLPs and keep their yearly filings on time.",
  },
  {
    name: "Tax and accounts",
    body: "Accountants and Chartered Accountants who keep books and file GST, TDS and income tax returns.",
  },
  {
    name: "Client advisory",
    body: "The first people founders speak to. They listen, explain the options and put together each quote.",
  },
  {
    name: "Brand and content",
    body: "Writers who turn complicated rules into articles and guides a first-time founder can follow.",
  },
];

export const reasons = [
  {
    title: "Work that matters to someone",
    body: "Every registration is someone's first company. You'll see the difference clear, careful work makes to a founder.",
  },
  {
    title: "Learn across disciplines",
    body: "Company Secretaries, Chartered Accountants and advocates work side by side, so you'll learn far beyond your own role.",
  },
  {
    title: "Bhubaneswar, New Delhi or remote",
    body: "We have offices in Bhubaneswar and New Delhi, and some roles can be done from anywhere in India. Each role says where it's based.",
  },
];

export const candidateFaqs = [
  {
    question: "How do I apply?",
    answer: "Email your CV with a few lines on why the role interests you. Use the Apply button on the role's page, which fills in the subject for you.",
  },
  {
    question: "Can I apply if there's no role that fits?",
    answer: "Yes. Send your CV and tell us what you'd like to work on.",
  },
  {
    question: "What is the practical task?",
    answer: "A short piece of work close to what you'd do in the role, such as reviewing a set of documents or writing a short explainer. It's there to show us how you work, not to catch you out.",
  },
];

export const values = [
  {
    title: "Plain words, always",
    body: "We explain things so a first-time founder understands them. That goes for our clients and for each other.",
  },
  {
    title: "Get it right",
    body: "A filing with one wrong detail costs a founder time and money. We check each other's work.",
  },
  {
    title: "Be honest",
    body: "We tell clients what we can and can't control, and we tell each other when something isn't working.",
  },
];
