import { site, timeline } from "@/config/site";
import type { Faq } from "@/components/shared/FaqList";

/**
 * Site-wide FAQs, grouped by topic. The /faq page shows every group;
 * category hubs show the group that matches them.
 */
export interface FaqGroup {
  id: string;
  title: string;
  faqs: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "about-us",
    title: "About Corpunex",
    faqs: [
      {
        question: "What does Corpunex do?",
        answer:
          "We help founders and businesses in India register companies and LLPs, get startup recognition, register for GST and other licences, protect trademarks, draft agreements and keep up with tax and MCA filings.",
      },
      {
        question: "Are you a government agency?",
        answer:
          "No. Corpunex is an independent firm and is not affiliated with any government body. Registrations and approvals are granted only by the authorities, such as the MCA, GSTN, DPIIT and the Trade Marks Registry.",
      },
      {
        question: "Who prepares and certifies my filings?",
        answer:
          "Chartered Accountants, Company Secretaries and advocates. Where the law requires an independent professional, such as a statutory auditor, we work with one and tell you who they are.",
      },
    ],
  },
  {
    id: "incorporation",
    title: "Company and LLP registration",
    faqs: [
      {
        question: "How long does it take to register a Private Limited company?",
        answer: `${timeline.sentence} ${timeline.delays}`,
      },
      {
        question: "Can I use my home as the registered office?",
        answer:
          "Yes, whether you own it or rent it. You need a utility bill no older than 2 months, a no-objection letter from the owner, and the rent agreement if it is rented.",
      },
      {
        question: "Is there a minimum capital?",
        answer:
          "No. Most founders start with ₹1 lakh authorised capital, which keeps state stamp duty low. You can increase it later.",
      },
      {
        question: "Should I choose a Private Limited company or an LLP?",
        answer:
          "Choose a Private Limited company if you plan to raise equity or give employees ESOPs. Choose an LLP if you run a services firm with partners and want fewer annual filings. An LLP needs an audit only above ₹40 lakh turnover or ₹25 lakh contribution.",
      },
    ],
  },
  {
    id: "startups",
    title: "Startup India and Startup Odisha",
    faqs: [
      {
        question: "What does DPIIT recognition give me?",
        answer:
          "It lets you apply for the 80-IAC income tax exemption, and gives you lower patent and trademark fees, relaxed conditions in some government tenders, and access to central schemes. [VERIFY: current list of benefits]",
      },
      {
        question: "Who can register with Startup Odisha?",
        answer:
          "DPIIT-recognised startups that are based in Odisha. [VERIFY: current eligibility rules and amounts under the Odisha Startup Policy]",
      },
      {
        question: "Is there a government fee for Udyam registration?",
        answer: "No. The Udyam portal does not charge a fee.",
      },
    ],
  },
  {
    id: "tax",
    title: "GST and income tax",
    faqs: [
      {
        question: "When is GST registration compulsory?",
        answer:
          "When turnover crosses ₹40 lakh for goods or ₹20 lakh for services in most states (₹20 lakh and ₹10 lakh in special category states), and regardless of turnover for sellers of goods across states and sellers through e-commerce operators. [VERIFY: thresholds and exceptions are current]",
      },
      {
        question: "Can I register for GST below the threshold?",
        answer:
          "Yes. Many B2B firms register voluntarily so they can claim input tax credit and meet client onboarding rules. Once registered, you must file returns.",
      },
      {
        question: "Does a dormant company need to file an income tax return?",
        answer:
          "Yes. Every company and LLP must file an income tax return each year, even with no revenue or a loss.",
      },
    ],
  },
  {
    id: "trademarks",
    title: "Trademarks",
    faqs: [
      {
        question: "What is the difference between ™ and ®?",
        answer:
          "You can use ™ once your application is filed. You can use ® only after the mark is registered. Using ® before then is an offence.",
      },
      {
        question: "How long does a registration last?",
        answer: "10 years from the date of application. You can renew it every 10 years on Form TM-R.",
      },
    ],
  },
  {
    id: "compliance",
    title: "Annual compliance",
    faqs: [
      {
        question: "What happens if annual ROC filings are late?",
        answer:
          "The MCA charges an additional fee of ₹100 a day for each late form, with no upper limit. Directors of a company that has not filed for three years in a row can be disqualified.",
      },
      {
        question: "What is DIR-3 KYC?",
        answer:
          "A KYC filing for every person who holds a DIN. If it is missed, the DIN is deactivated until it is filed with a late fee. [VERIFY: current frequency and late fee]",
      },
    ],
  },
  {
    id: "working-with-us",
    title: "Fees and working with us",
    faqs: [
      {
        question: "How are your fees set?",
        answer:
          "Every quote has three lines: government fees, third-party costs such as digital signatures, and our professional fee plus GST. Government fees are paid at cost and you get the official receipts.",
      },
      {
        question: "How do I start?",
        answer: `Send the form on our contact page, email ${site.email} or call ${site.phoneDisplay}. An advisor will reply with questions and a written, itemised quote.`,
      },
    ],
  },
];

export function faqGroup(id: string) {
  const group = faqGroups.find((g) => g.id === id);
  if (!group) throw new Error(`Unknown FAQ group: ${id}`);
  return group;
}
