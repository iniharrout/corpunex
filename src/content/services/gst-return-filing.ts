import type { ServicePageContent } from "./types";
import { quoteOnRequest } from "./shared";

export const gstReturnFiling: ServicePageContent = {
  path: "/services/gst-taxation/gst-return-filing",
  name: "GST return filing",
  metaTitle: "GST Return Filing Online: GSTR-1 and GSTR-3B",
  metaDescription:
    "Monthly or quarterly GST return filing, done on time. GSTR-1, GSTR-3B and the annual return, with the GST you claim back checked against your suppliers' filings.",
  breadcrumb: [
    { label: "Home", href: "/" },
    { label: "GST and tax", href: "/services/gst-taxation" },
    { label: "GST return filing", href: "/services/gst-taxation/gst-return-filing" },
  ],
  headline: "GST return filing, on time every month.",
  lead: "Once you have a GST number, you file returns every month or quarter, even when you've sold nothing. Late returns cost a daily late fee and can block your customers from claiming back the GST they paid you. We prepare and file every return, and check that the GST you claim back matches what your suppliers have filed.",
  quoteFacts: [
    { label: "How often", value: "Monthly or quarterly", note: "Quarterly is open to businesses with sales up to ₹5 crore" },
    quoteOnRequest,
  ],
  callbackTopic: "GST, accounting or tax returns",

  forWho: [
    "Every business with a GST number, including ones with no sales yet.",
    "Online sellers who need their marketplace sales matched to their returns.",
    "Businesses that have missed returns and need to catch up.",
  ],
  notFor: [
    {
      text: "You don't have a GST number yet.",
      href: "/services/gst-taxation/gst-registration",
      linkLabel: "Start with GST registration",
    },
  ],

  included: [
    "Your sales return (GSTR-1)",
    "Your summary return and tax payment (GSTR-3B)",
    "Checking the GST you claim back against your suppliers' filings (GSTR-2B)",
    "Reminders before each due date, and the amount of tax to pay",
    "Nil returns in months with no sales",
    "Your yearly return (GSTR-9), where it applies",
  ],
  excluded: [
    "The GST itself, and any late fees or interest",
    "Replies to GST notices, unless quoted",
    "Bookkeeping, unless you take our accounting service",
  ],

  documents: [
    { document: "Sales invoices for the period", from: "Your business", note: "Or an export from your billing software" },
    { document: "Purchase invoices", from: "Your business" },
    { document: "GST portal login", from: "Your business", note: "So we can file for you" },
    { document: "Marketplace sales reports", from: "Your business", note: "Only if you sell online" },
  ],

  milestones: [
    { when: "Step 1", title: "Invoices collected", detail: "You send your sales and purchase invoices, or we pull them from your software." },
    { when: "Step 2", title: "Claims checked", detail: "We match the GST you'll claim back against what your suppliers have filed." },
    { when: "Step 3", title: "Sales return filed", detail: "We file GSTR-1 before the 11th of the next month, if you file monthly." },
    { when: "Step 4", title: "Tax paid and summary filed", detail: "You pay the tax due and we file GSTR-3B, by the 20th if you file monthly." },
  ],
  stepsIntro: "If you file quarterly under the QRMP scheme, the dates move to after the end of each quarter, with a small monthly tax payment in between.",

  process: [
    {
      title: "Set up",
      you: "Tell us your GST number, how you bill and whether you sell online.",
      us: "Confirm monthly or quarterly filing and send a written quote.",
    },
    {
      title: "Every period",
      you: "Send your invoices before our reminder date.",
      us: "Prepare the returns and tell you the tax to pay.",
    },
    {
      title: "Filing",
      you: "Approve the return and pay the tax.",
      us: "File the returns and send you the acknowledgements.",
    },
  ],

  afterwards: [
    { deadline: "By the 11th, every month", task: "Report your sales", form: "GSTR-1 (monthly filers)" },
    { deadline: "By the 20th, every month", task: "Pay GST and file the summary return", form: "GSTR-3B (monthly filers)" },
    { deadline: "Every year", task: "File the yearly return, if your sales are above ₹2 crore", form: "GSTR-9" },
  ],
  afterwardsTitle: "Your GST calendar",
  afterwardsIntro: "These are the usual dates for monthly filers. The government sometimes extends them.",

  faqs: [
    {
      question: "Do I need to file if I had no sales?",
      answer: "Yes. You still file a nil return for every month or quarter while your GST number is active.",
    },
    {
      question: "Should I file monthly or quarterly?",
      answer:
        "If your yearly sales are up to ₹5 crore, you can choose quarterly returns under the QRMP scheme, with a small tax payment each month. Monthly filing can suit you if your customers want their GST credit quickly.",
    },
    {
      question: "What happens if I file late?",
      answer:
        "You pay a late fee for each day, plus interest on any tax paid late. Your customers also can't claim back the GST on your invoices until you file.",
    },
    {
      question: "Can you catch up returns I've missed?",
      answer: "Yes. We list what's overdue, work out the late fees and file the returns in order.",
    },
  ],

  related: [
    { label: "GST registration", href: "/services/gst-taxation/gst-registration", description: "Get your GST number" },
    { label: "Accounting and bookkeeping", href: "/services/accounting-bookkeeping", description: "Books and GST handled together" },
    { label: "GST calculator", href: "/tools/gst-calculator", description: "Work out GST on any amount" },
  ],

  cta: {
    title: "Want your GST returns off your plate?",
    body: "Tell us your GST number and how you bill. We'll set up your filing calendar and send a quote.",
  },
};
