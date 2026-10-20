/**
 * Yearly compliance calendar for /compliance-calendar. These are the
 * standard due dates for a financial year ending 31 March. The government
 * sometimes extends them, so the page says so.
 */
export type Who = "Companies" | "LLPs" | "Everyone with GST" | "Everyone who deducts TDS" | "All businesses";

export interface Deadline {
  date: string;
  filing: string;
  what: string;
  who: Who;
  href?: string;
}

const roc = "/services/corporate-compliance/annual-roc-compliance";
const gst = "/services/gst-taxation/gst-return-filing";
const itr = "/services/gst-taxation/income-tax-filing";

export const monthly: Deadline[] = [
  { date: "7th", filing: "TDS payment", what: "Pay the tax you deducted last month (for March, by 30 April)", who: "Everyone who deducts TDS" },
  { date: "11th", filing: "GSTR-1", what: "Report last month's sales (monthly filers)", who: "Everyone with GST", href: gst },
  { date: "20th", filing: "GSTR-3B", what: "Pay GST and file the summary return (monthly filers)", who: "Everyone with GST", href: gst },
];

export const calendar: { month: string; deadlines: Deadline[] }[] = [
  {
    month: "April",
    deadlines: [
      { date: "30 April", filing: "MSME-1", what: "Report payments owed to small suppliers for more than 45 days (October to March)", who: "Companies", href: roc },
    ],
  },
  {
    month: "May",
    deadlines: [
      { date: "30 May", filing: "Form 11", what: "LLP yearly return", who: "LLPs", href: roc },
      { date: "31 May", filing: "TDS return", what: "TDS return for January to March", who: "Everyone who deducts TDS" },
    ],
  },
  {
    month: "June",
    deadlines: [
      { date: "15 June", filing: "Advance tax", what: "First instalment of this year's income tax", who: "All businesses", href: itr },
      { date: "30 June", filing: "DPT-3", what: "Return of deposits and loans the company has taken", who: "Companies", href: roc },
    ],
  },
  {
    month: "July",
    deadlines: [
      { date: "31 July", filing: "TDS return", what: "TDS return for April to June", who: "Everyone who deducts TDS" },
      { date: "31 July", filing: "Income tax return", what: "For businesses whose accounts don't need an audit", who: "All businesses", href: itr },
    ],
  },
  {
    month: "September",
    deadlines: [
      { date: "15 September", filing: "Advance tax", what: "Second instalment", who: "All businesses", href: itr },
      { date: "30 September", filing: "AGM", what: "Hold the company's annual general meeting", who: "Companies", href: roc },
      { date: "30 September", filing: "Tax audit report", what: "For businesses whose accounts need a tax audit", who: "All businesses", href: itr },
      { date: "30 September", filing: "DIR-3 KYC", what: "Director KYC, in the years it's due", who: "Companies", href: roc },
    ],
  },
  {
    month: "October",
    deadlines: [
      { date: "Within 15 days of the AGM", filing: "ADT-1", what: "Tell the government who your auditor is", who: "Companies", href: roc },
      { date: "Within 30 days of the AGM", filing: "AOC-4", what: "File the company's accounts", who: "Companies", href: roc },
      { date: "30 October", filing: "Form 8", what: "LLP statement of accounts", who: "LLPs", href: roc },
      { date: "31 October", filing: "Income tax return", what: "For businesses whose accounts need an audit, including all companies", who: "All businesses", href: itr },
      { date: "31 October", filing: "MSME-1", what: "Report payments owed to small suppliers (April to September)", who: "Companies", href: roc },
      { date: "31 October", filing: "TDS return", what: "TDS return for July to September", who: "Everyone who deducts TDS" },
    ],
  },
  {
    month: "November",
    deadlines: [
      { date: "Within 60 days of the AGM", filing: "MGT-7 or MGT-7A", what: "File the company's yearly return", who: "Companies", href: roc },
    ],
  },
  {
    month: "December",
    deadlines: [
      { date: "15 December", filing: "Advance tax", what: "Third instalment", who: "All businesses", href: itr },
      { date: "31 December", filing: "GSTR-9", what: "GST yearly return, if your sales are above ₹2 crore", who: "Everyone with GST", href: gst },
    ],
  },
  {
    month: "January",
    deadlines: [{ date: "31 January", filing: "TDS return", what: "TDS return for October to December", who: "Everyone who deducts TDS" }],
  },
  {
    month: "March",
    deadlines: [{ date: "15 March", filing: "Advance tax", what: "Final instalment", who: "All businesses", href: itr }],
  },
];
