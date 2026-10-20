import { site } from "@/config/site";

/**
 * Legal pages. These are plain-language summaries drafted from the
 * previous site and must be reviewed by Corpunex's advocate before
 * launch (see PLACEHOLDERS.md).
 */
export interface LegalSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface LegalDocument {
  path: string;
  title: string;
  metaDescription: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}

const updated = "October 2026";

export const terms: LegalDocument = {
  path: "/terms-and-conditions",
  title: "Terms and conditions",
  metaDescription: "The terms for using the Corpunex website and for engaging Corpunex for professional services.",
  intro: "These terms cover your use of this website and how our engagements with clients start and run.",
  updated,
  sections: [
    {
      heading: "Using this website",
      paragraphs: [
        "By using this website or sending us an enquiry, you agree to these terms. If you do not agree, please do not use the website.",
      ],
    },
    {
      heading: "What the website is, and is not",
      paragraphs: [
        "Service descriptions on this website are general. An engagement starts only when we have agreed the scope, the documents needed and the fee with you in writing.",
        "We may decline an engagement at our discretion.",
      ],
    },
    {
      heading: "Your responsibilities",
      paragraphs: [
        "You must give us genuine, current and complete documents and information. You confirm that the identity, address, tax and property documents you provide are lawful and accurate.",
        "We are not responsible for rejections, penalties or other consequences caused by false, outdated or incomplete information.",
      ],
    },
    {
      heading: "Fees",
      paragraphs: [
        "Government fees, such as MCA filing fees, stamp duty and Trade Marks Registry fees, are paid to the authority, either by you or by us on your behalf as agreed in writing.",
        "Our professional fee covers advice, drafting, document preparation and filing. GST is added to our fee.",
      ],
    },
    {
      heading: "Limits on our liability",
      paragraphs: [
        "We are not liable for indirect or consequential loss, or for delays caused by government portal outages, officer scrutiny, name rejections or late documents.",
      ],
    },
    {
      heading: "Governing law",
      paragraphs: [
        "These terms and our engagements are governed by the laws of India.",
      ],
    },
  ],
};

export const privacy: LegalDocument = {
  path: "/privacy-policy",
  title: "Privacy policy",
  metaDescription: "What personal information Corpunex collects, how we use it, who we share it with and how to contact us about it.",
  intro: "This policy explains what information we collect, why, who we share it with, and how you can ask us to correct or delete it.",
  updated,
  sections: [
    {
      heading: "What we collect",
      paragraphs: ["When you contact us or engage us, we may collect:"],
      list: [
        "Contact details: your name, email, mobile number, and the city and state of your business.",
        "Identity and address documents needed for filings, such as PAN, Aadhaar, passport and utility bills.",
        "Business details: proposed names, business activity, capital and shareholding.",
      ],
    },
    {
      heading: "How we use it",
      paragraphs: ["We use your information only to:"],
      list: [
        "Understand what you need and send you a quote.",
        "Prepare and file applications with government portals such as MCA, GSTN, DGFT and the Trade Marks Registry.",
        "Work with Chartered Accountants, Company Secretaries and advocates where a filing needs their certification.",
        "Send you updates, answer queries and remind you of deadlines.",
      ],
    },
    {
      heading: "Who we share it with",
      paragraphs: [
        "We do not sell or rent your information. We share it only with the government authorities for filings you have authorised, and with professionals working on your engagement under a duty of confidentiality.",
      ],
    },
    {
      heading: "How we protect it",
      paragraphs: [
        "We limit access to your documents to the people working on your engagement.",
      ],
    },
    {
      heading: "Your rights",
      paragraphs: [
        `You can ask us to correct or delete your information by emailing ${site.email}. Some records may need to be kept to meet legal obligations.`,
      ],
    },
  ],
};

export const refunds: LegalDocument = {
  path: "/refund-policy",
  title: "Refund policy",
  metaDescription: "How Corpunex handles cancellations and refunds, and why government fees cannot be refunded once paid.",
  intro: "This policy explains what happens to your payment if you cancel, or if an authority rejects an application.",
  updated,
  sections: [
    {
      heading: "Government fees",
      paragraphs: [
        "Government fees, such as MCA filing fees, stamp duty, Trade Marks Registry, DGFT and FSSAI fees, are paid to the authority. Once a challan is generated or the fee is paid, it cannot be refunded by us.",
      ],
    },
    {
      heading: "Our professional fee",
      paragraphs: ["What happens to our fee depends on how far the work has gone:"],
      list: [
        "Before work starts: we refund our fee.",
        "After work has started, such as searches, drafting or document review: we keep a fair share for the work done and refund the rest.",
        "After documents are signed and filed: our fee is not refundable.",
      ],
    },
    {
      heading: "Queries and rejections",
      paragraphs: [
        "If an authority asks for corrections, we make them and file again.",
        "A rejection by an authority on legal grounds, such as a name that conflicts with an existing trademark, does not entitle you to a refund of work already done.",
      ],
    },
    {
      heading: "How refunds are paid",
      paragraphs: [
        `Refunds are paid to the original payment method or by bank transfer. To ask for one, email ${site.email}.`,
      ],
    },
  ],
};

export const disclaimerPage: LegalDocument = {
  path: "/service-disclaimer",
  title: "Service disclaimer",
  metaDescription:
    "Corpunex is an independent advisory firm, not a government body. Approvals are granted only by the relevant authorities.",
  intro: "What Corpunex is, what we can and cannot promise, and how to read the information on this website.",
  updated,
  sections: [
    {
      heading: "We are an independent firm",
      paragraphs: [
        "Corpunex is an independent advisory firm. We are not a government body and are not affiliated with or endorsed by the MCA, GSTN, DPIIT, the Trade Marks Registry or any state government.",
      ],
    },
    {
      heading: "Authorities make the decisions",
      paragraphs: [
        "Registrations, licences, recognitions and name approvals are granted only by the relevant authority. We prepare and file applications, but we cannot guarantee that any application will be approved.",
      ],
    },
    {
      heading: "Who signs your filings",
      paragraphs: [
        "Where the law requires a certification, audit, legal opinion or court representation, the work is done by a qualified professional: a Chartered Accountant, Company Secretary, trademark attorney or advocate. Statutory audits are done by an independent auditor.",
      ],
    },
    {
      heading: "Not legal or tax advice",
      paragraphs: [
        "Guides, calculators, fees and timelines on this website are general information. Laws, fees and procedures change often. Please do not act on them without advice on your own situation.",
      ],
    },
    {
      heading: "Timelines are estimates",
      paragraphs: ["Any timeline we give is an estimate. It depends on:"],
      list: [
        "How quickly you send complete, clear documents.",
        "Whether government portals are working.",
        "Queries raised by the officer reviewing your application.",
      ],
    },
  ],
};
