/**
 * Plain-language glossary for /glossary: the jargon founders meet when
 * they register and run a business in India.
 */
export interface Term {
  term: string;
  /** Short form or full form shown beside the term. */
  aka?: string;
  meaning: string;
  href?: string;
}

export const glossary: Term[] = [
  { term: "AGM", aka: "Annual general meeting", meaning: "The yearly meeting where a company's shareholders approve its accounts. Most companies must hold it by 30 September.", href: "/services/corporate-compliance/annual-roc-compliance" },
  { term: "AoA", aka: "Articles of Association", meaning: "Part of your company's rulebook. It sets out how the company is run: how directors are appointed, how meetings work and how shares can be transferred." },
  { term: "Apostille", meaning: "An official stamp that makes a document signed in one country valid in another. Foreign founders need it on the documents they sign abroad.", href: "/services/business-registration/indian-subsidiary" },
  { term: "Authorised capital", meaning: "The most a company is allowed to raise by issuing shares. Stamp duty is charged on it, so most founders start at ₹1 lakh and increase it later." },
  { term: "CIN", aka: "Corporate Identity Number", meaning: "The unique number every company gets when it's registered. It appears on your certificate of incorporation and your letterheads." },
  { term: "Designated partner", meaning: "A partner in an LLP who is responsible for its filings and compliance. Every LLP needs at least two.", href: "/services/business-registration/llp-registration" },
  { term: "DIN", aka: "Director Identification Number", meaning: "A unique number every company director needs. You get it once and keep it for life, across every company you're a director of." },
  { term: "DIR-3 KYC", meaning: "A filing that confirms each director's identity and contact details. If it's missed, the director's DIN is switched off until it's filed with a late fee." },
  { term: "DPIIT", aka: "Department for Promotion of Industry and Internal Trade", meaning: "The government department that recognises startups under Startup India.", href: "/services/startup-services/startup-india-recognition" },
  { term: "DSC", aka: "Digital Signature Certificate", meaning: "An online signature used to sign government forms. Every director or partner needs one, after a short video check." },
  { term: "FC-GPR", meaning: "The form a company files with the RBI after it issues shares to a foreign investor.", href: "/services/business-registration/indian-subsidiary" },
  { term: "FEMA", aka: "Foreign Exchange Management Act", meaning: "The law that governs foreign investment in Indian companies and money moving in and out of India." },
  { term: "FiLLiP", meaning: "The main form used to register an LLP with the government.", href: "/services/business-registration/llp-registration" },
  { term: "GSTIN", aka: "GST Identification Number", meaning: "Your 15-digit GST number. It goes on every invoice once you're registered.", href: "/services/gst-taxation/gst-registration" },
  { term: "GSTR-1", meaning: "The GST return where you report your sales, monthly or quarterly.", href: "/services/gst-taxation/gst-return-filing" },
  { term: "GSTR-3B", meaning: "The summary GST return where you work out and pay the GST you owe.", href: "/services/gst-taxation/gst-return-filing" },
  { term: "INC-20A", meaning: "The declaration a new company files within 180 days to confirm its shareholders have paid for their shares and it has started business." },
  { term: "Input tax credit", aka: "ITC", meaning: "The GST you paid on your business purchases, which you can subtract from the GST you owe on your sales.", href: "/services/gst-taxation/gst-return-filing" },
  { term: "LLP", aka: "Limited Liability Partnership", meaning: "A business run by partners where each partner's personal assets are protected. It has fewer yearly filings than a company.", href: "/services/business-registration/llp-registration" },
  { term: "LLPIN", aka: "LLP Identification Number", meaning: "The unique number every LLP gets when it's registered." },
  { term: "MCA", aka: "Ministry of Corporate Affairs", meaning: "The government ministry that registers companies and LLPs and receives their yearly filings." },
  { term: "MoA", aka: "Memorandum of Association", meaning: "Part of your company's rulebook. It states the company's name, registered office, what it will do and its share capital." },
  { term: "Nominee", meaning: "In a One Person Company, the person who takes over if the owner dies or can no longer run it.", href: "/services/business-registration/one-person-company" },
  { term: "OPC", aka: "One Person Company", meaning: "A company with a single owner, with the owner's personal assets protected.", href: "/services/business-registration/one-person-company" },
  { term: "Paid-up capital", meaning: "The money shareholders have actually put into the company for their shares. It can be much less than the authorised capital." },
  { term: "Registered office", meaning: "The official address of your company, where government letters are sent. A home address is allowed." },
  { term: "ROC", aka: "Registrar of Companies", meaning: "The government office that holds company records and receives yearly filings such as AOC-4 and MGT-7.", href: "/services/corporate-compliance/annual-roc-compliance" },
  { term: "RUN", aka: "Reserve Unique Name", meaning: "The government service used to reserve a name for a new company or LLP." },
  { term: "SPICe+", meaning: "The main online form used to register a company. It also applies for the company's PAN, TAN and other registrations together.", href: "/services/business-registration/private-limited-company" },
  { term: "Stamp duty", meaning: "A state tax paid on certain documents, such as your company rulebook or a partnership deed. The amount depends on your state." },
  { term: "Strike off", meaning: "Formally closing a company so it's removed from the government's register and its filings stop.", href: "/services/corporate-compliance/close-a-company" },
  { term: "TAN", aka: "Tax Deduction and Collection Account Number", meaning: "The number you need before you can deduct tax (TDS) from payments such as salaries or rent." },
  { term: "TDS", aka: "Tax Deducted at Source", meaning: "Tax you take out of certain payments, like salaries or professional fees, and pay to the government on the other person's behalf." },
  { term: "Udyam", meaning: "The government's free registration for micro, small and medium businesses (MSMEs).", href: "/services/startup-services/udyam-msme-registration" },
];
