export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const FAQ_CATEGORIES = [
  "All",
  "General Consulting",
  "Company Incorporation",
  "Startup India & Odisha",
  "GST & Taxation",
  "Trademark & IP",
  "Corporate Compliance",
  "Engagement & Billing",
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "gen-1",
    category: "General Consulting",
    question: "What is Corpunex and what services do you provide?",
    answer: "Corpunex is a professional business consulting company in India. We help entrepreneurs, founders, startups, and established enterprises navigate business registration, startup recognitions (DPIIT & Startup Odisha), GST & direct taxation, operating licences, trademark protection, legal documentation, and ongoing corporate compliance.",
  },
  {
    id: "gen-2",
    category: "General Consulting",
    question: "Is Corpunex a government agency or official department portal?",
    answer: "No. Corpunex is an independent private professional consulting enterprise. We are not a government website, nor are we affiliated with any government department. All official registrations and statutory approvals are granted solely by the respective government authorities (MCA, GSTN, DPIIT, Trade Marks Registry, etc.).",
  },
  {
    id: "gen-3",
    category: "General Consulting",
    question: "How does Corpunex deliver professional legal and tax advisory?",
    answer: "Corpunex facilitates end-to-end documentation, filing preparation, and process guidance. Where statutory regulations mandate professional representation, certification, or specialized opinions (such as formal tax audits, legal litigation, or statutory audit sign-offs), we coordinate directly through appropriately qualified and licensed Chartered Accountants (CAs), Company Secretaries (CS), and legal advocates.",
  },
  {
    id: "inc-1",
    category: "Company Incorporation",
    question: "How long does it take to register a Private Limited Company in India?",
    answer: "Typically, company incorporation takes between 7 to 14 business days once all required documents are verified and submitted. Processing timelines can vary depending on Ministry of Corporate Affairs (MCA) portal turnaround, name approval availability, and jurisdiction clearance.",
  },
  {
    id: "inc-2",
    category: "Company Incorporation",
    question: "Can I use my residential address as the registered office of my company?",
    answer: "Yes, you can register your company using a residential property (owned or rented). You must provide a recent electricity or utility bill (under 2 months old), a No Objection Certificate (NOC) from the property owner, and a rent agreement if rented.",
  },
  {
    id: "inc-3",
    category: "Company Incorporation",
    question: "What is the minimum capital required to start a Private Limited Company?",
    answer: "There is no minimum paid-up capital requirement under the Companies Act, 2013. You can incorporate a company with any authorized capital, commonly starting at ₹1,00,000 to keep initial state stamp duty charges low.",
  },
  {
    id: "inc-4",
    category: "Company Incorporation",
    question: "What is the difference between a Private Limited Company and an LLP?",
    answer: "A Private Limited Company is the standard corporate structure required by venture capitalists, allowing equity allotment and ESOPs, but has higher recurring annual secretarial compliance. An LLP provides limited liability with lower compliance overhead and no statutory audit if turnover is under ₹40 Lakhs and capital is under ₹25 Lakhs, but cannot issue shares to venture investors.",
  },
  {
    id: "stu-1",
    category: "Startup India & Odisha",
    question: "What are the primary benefits of DPIIT Startup India Recognition?",
    answer: "DPIIT recognition provides access to Section 80-IAC tax holiday applications (3 years of tax exemption), exemption from angel tax under Section 56(2)(viib), up to 80% rebate on patent filings, 50% rebate on trademark filings, and exemptions from prior turnover/experience requirements in government procurement tenders.",
  },
  {
    id: "stu-2",
    category: "Startup India & Odisha",
    question: "Who is eligible for Startup Odisha financial benefits?",
    answer: "Entities registered in Odisha or having at least 50% of their registered workforce employed in Odisha, holding a valid DPIIT Startup India certificate, less than 10 years old with annual turnover under ₹100 Crores, and working on innovative products/processes are eligible for state sustenance allowances (₹20,000/mo) and product development grants (up to ₹16 Lakhs).",
  },
  {
    id: "stu-3",
    category: "Startup India & Odisha",
    question: "Is Udyam Registration free of government fees?",
    answer: "Yes. The Ministry of Micro, Small and Medium Enterprises does not charge any government fee for issuing an Udyam Certificate. Corpunex charges a nominal fee for reviewing business activity codes (NIC), verifying documents, and managing application filing.",
  },
  {
    id: "gst-1",
    category: "GST & Taxation",
    question: "When is GST registration mandatory in India?",
    answer: "GST registration is mandatory when aggregate annual turnover exceeds ₹40 Lakhs for businesses supplying goods (₹20 Lakhs in special category states) or ₹20 Lakhs for service providers (₹10 Lakhs in special states). It is also mandatory regardless of turnover for inter-state suppliers, e-commerce vendors, and businesses liable under reverse charge.",
  },
  {
    id: "gst-2",
    category: "GST & Taxation",
    question: "Can I register for GST voluntarily if my turnover is below the threshold?",
    answer: "Yes. Many B2B service firms and new startups opt for voluntary GST registration in order to claim Input Tax Credit (ITC) on hardware, office rent, and business expenses, and to satisfy vendor onboarding criteria.",
  },
  {
    id: "gst-3",
    category: "GST & Taxation",
    question: "Do dormant companies need to file annual Income Tax Returns?",
    answer: "Yes. Under Section 139 of the Income Tax Act, every incorporated company and LLP is required to file an annual income tax return, even if they had zero revenue or incurred business losses during the financial year.",
  },
  {
    id: "tm-1",
    category: "Trademark & IP",
    question: "What is the difference between the ™ and ® symbols?",
    answer: "The ™ symbol can be used immediately upon receiving the official filing acknowledgment from the Trademark Registry (typically within 24-48 hours of filing). The ® (Registered) symbol can only be used legally once the Registrar formally issues the Trademark Registration Certificate. Using ® prematurely is a punishable offence.",
  },
  {
    id: "tm-2",
    category: "Trademark & IP",
    question: "How long is a trademark registration valid in India?",
    answer: "A trademark registration is valid for 10 years from the date of application. It can be renewed indefinitely every 10 years by filing Form TM-R with the statutory renewal fee.",
  },
  {
    id: "cmp-1",
    category: "Corporate Compliance",
    question: "What are the penalties for delayed annual ROC filings?",
    answer: "Under the Companies Act, delayed filings of Form AOC-4 and Form MGT-7 attract statutory additional fees of ₹100 per day per form with no upper ceiling. Defaulting for three consecutive years can lead to disqualification of company directors for a period of 5 years.",
  },
  {
    id: "cmp-2",
    category: "Corporate Compliance",
    question: "What is DIR-3 KYC and who needs to complete it?",
    answer: "DIR-3 KYC is an annual mandatory identity and address verification for every individual who holds a Director Identification Number (DIN). It must be completed on or before September 30 each year. Failure to file incurs a statutory late penalty of ₹5,000 per DIN.",
  },
  {
    id: "eng-1",
    category: "Engagement & Billing",
    question: "How are Corpunex consulting fees determined?",
    answer: "Corpunex operates on transparent, upfront consulting quotes. We separate official government statutory fees and stamp duties from our professional consulting and facilitation fees so you always know exactly what is payable to statutory bodies and what covers our consulting services.",
  },
  {
    id: "eng-2",
    category: "Engagement & Billing",
    question: "How do I request a consultation or quotation?",
    answer: "You can request a consultation by filling out our online enquiry form with your contact details and business requirements, or by contacting our team via email at contact@corpunex.com. A consulting advisor will reach out to schedule a discussion and provide an itemized scope of work.",
  },
];
