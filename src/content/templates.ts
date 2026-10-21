import type { Faq } from "@/components/shared/FaqList";

export type TemplateCategory = "all" | "founders" | "legal" | "hr" | "mca" | "compliance";

export interface FullStartupTemplate {
  slug: string;
  title: string;
  category: TemplateCategory;
  categoryLabel: string;
  entityTypes: string;
  summary: string;
  stampDutyNote: string;
  keyClauses: { title: string; explanation: string }[];
  draftContent: string;
  downloadFilename: string;
}

export const templateCategories: { id: TemplateCategory; label: string; count?: number }[] = [
  { id: "all", label: "All Templates" },
  { id: "founders", label: "Founders & Equity" },
  { id: "legal", label: "Legal & IP" },
  { id: "hr", label: "Hiring & HR" },
  { id: "mca", label: "Board & MCA Resolutions" },
  { id: "compliance", label: "Office & Operations" },
];

export const allTemplates: FullStartupTemplate[] = [
  {
    slug: "co-founder-agreement",
    title: "Co-Founder Agreement with Reverse Vesting",
    category: "founders",
    categoryLabel: "Founders & Equity",
    entityTypes: "Private Limited • LLP",
    summary:
      "Clarify initial equity splits, 4-year reverse vesting with a 1-year cliff, decision rights, full-time commitment, and intellectual property transfer before incorporating.",
    stampDutyNote: "Executed on Non-Judicial Stamp Paper (minimum ₹100 or state-specific stamp duty) and signed by all co-founders.",
    downloadFilename: "corpunex-co-founder-agreement-template.txt",
    keyClauses: [
      {
        title: "4-Year Reverse Vesting with 1-Year Cliff",
        explanation: "Protects the company if a co-founder leaves early. Unvested shares are repurchased at nominal face value.",
      },
      {
        title: "Full-Time Commitment & Exclusivity",
        explanation: "Bars founders from taking outside employment or running competing business ventures.",
      },
      {
        title: "IP Assignment to Venture",
        explanation: "All domain names, software code, patents, and customer databases are assigned irrevocably to the company.",
      },
      {
        title: "Deadlock & Dispute Mechanism",
        explanation: "Provides mediation and mutual buy-out terms if voting rights reach a 50/50 deadlock.",
      },
    ],
    draftContent: `CO-FOUNDER AGREEMENT

THIS CO-FOUNDER AGREEMENT (the "Agreement") is entered into on this [Day] day of [Month], [Year], by and between:

1. [Co-Founder 1 Full Name], residing at [Residential Address 1], (hereinafter referred to as "Founder 1"); AND
2. [Co-Founder 2 Full Name], residing at [Residential Address 2], (hereinafter referred to as "Founder 2");
(Collectively referred to as the "Co-Founders" and individually as a "Co-Founder").

WHEREAS the Co-Founders are collaborating to build and commercialize a business venture tentatively named "[Project/Company Name]" (the "Venture") and intend to incorporate a Private Limited company under the Companies Act, 2013;

NOW, THEREFORE, the Co-Founders agree as follows:

1. INITIAL EQUITY SPLIT & CAPITAL CONTRIBUTION
1.1 The initial equity shareholding of the Company upon incorporation shall be divided as follows:
    - Founder 1: [Percent 1]% of the authorized and issued equity share capital.
    - Founder 2: [Percent 2]% of the authorized and issued equity share capital.
1.2 The initial capital contribution shall be ₹[Amount] paid in proportion to the shareholding into the Company's current account.

2. REVERSE VESTING SCHEDULE
2.1 All equity shares held by the Co-Founders shall be subject to a four (4) year reverse vesting schedule with a one (1) year cliff.
2.2 25% of the shares shall vest on the first anniversary of this Agreement ("Cliff"). The remaining 75% shall vest in equal monthly installments over the subsequent 36 months.
2.3 If any Co-Founder terminates their full-time engagement prior to the 1-year cliff, all shares remain unvested and the Company or remaining founder shall have the right to repurchase them at nominal face value (₹10 per share).

3. ROLES AND RESPONSIBILITIES
3.1 Founder 1 shall act as [Chief Executive Officer / Chief Technology Officer] and oversee [Primary Domain].
3.2 Founder 2 shall act as [Chief Operating Officer / Product Lead] and oversee [Primary Domain].
3.3 Each Co-Founder agrees to devote their full professional time and energy exclusively to the Venture.

4. INTELLECTUAL PROPERTY ASSIGNMENT
4.1 Each Co-Founder hereby unconditionally and irrevocably assigns, transfers, and conveys to the Company all rights, titles, and interests in any intellectual property (including code, designs, algorithms, trademarks, customer data, and patents) created prior to or during the tenure of the Venture.
4.2 No Co-Founder shall license or use such Intellectual Property for any external project without written consent.

5. NON-COMPETE AND CONFIDENTIALITY
5.1 During the term of this Agreement and for a period of two (2) years following departure, no Co-Founder shall directly or indirectly engage in, advise, or invest in a competing business entity within the Republic of India.

IN WITNESS WHEREOF, the Co-Founders have executed this Agreement on the date first written above.

_____________________________                _____________________________
[Founder 1 Signature]                         [Founder 2 Signature]
Name: [Founder 1 Full Name]                  Name: [Founder 2 Full Name]`,
  },
  {
    slug: "mutual-nda",
    title: "Mutual Non-Disclosure Agreement (Bilateral NDA)",
    category: "legal",
    categoryLabel: "Legal & IP",
    entityTypes: "Pvt Ltd • LLP • OPC",
    summary:
      "Comprehensive two-way non-disclosure agreement to protect confidential software code, architectural designs, financial forecasts, and proprietary business methods.",
    stampDutyNote: "Executed on Non-Judicial Stamp Paper (minimum ₹100 or state rate) when executing commercial partnerships.",
    downloadFilename: "corpunex-mutual-nda-template.txt",
    keyClauses: [
      {
        title: "Expansive Confidential Information Scope",
        explanation: "Covers oral, electronic, source code, financial, and strategic discussions.",
      },
      {
        title: "Standard 2-Year Term",
        explanation: "Standard non-disclosure lifecycle recognized by Indian Courts.",
      },
      {
        title: "Clear Permitted Exclusions",
        explanation: "Excludes information already public, independently developed, or mandated by law/court order.",
      },
      {
        title: "Immediate Injunction Rights",
        explanation: "Allows the disclosing party to seek emergency court injunctions against leaks.",
      },
    ],
    draftContent: `MUTUAL NON-DISCLOSURE AGREEMENT

THIS MUTUAL NON-DISCLOSURE AGREEMENT (the "Agreement") is made on this [Day] day of [Month], [Year] ("Effective Date"), by and between:

PARTY A: [Company A Name] Private Limited / LLP, having its registered office at [Address A] (represented by its Authorised Signatory, [Signatory Name A]); AND
PARTY B: [Company B Name] Private Limited / LLP, having its registered office at [Address B] (represented by its Authorised Signatory, [Signatory Name B]).

1. PURPOSE
The Parties intend to explore a potential business relationship concerning [Brief Project Purpose, e.g., software integration / investment discussions / vendor evaluation] ("Purpose").

2. CONFIDENTIAL INFORMATION
"Confidential Information" refers to any proprietary information disclosed by one Party ("Disclosing Party") to the other ("Receiving Party"), whether orally, visually, or in written/electronic form, including but not limited to source code, algorithms, customer records, technical specifications, financial projections, and product roadmaps.

3. OBLIGATIONS OF RECEIVING PARTY
3.1 Hold all Confidential Information in strict confidence, exercising at least reasonable care.
3.2 Do not disclose Confidential Information to any third party without prior written consent, except to employees and advisors on a strict "need-to-know" basis who are bound by confidentiality.
3.3 Use the Confidential Information solely for evaluating or fulfilling the Purpose.

4. EXCLUSIONS
Confidential Information does not include information that:
(a) is or becomes publicly known through no breach of this Agreement;
(b) was already known to the Receiving Party prior to disclosure;
(c) is independently developed without reference to the Disclosing Party's data;
(d) is required to be disclosed pursuant to a lawful court order or regulatory requirement.

5. TERM AND RETURN OF MATERIALS
This Agreement shall remain in effect for two (2) years from the Effective Date. Upon written request, the Receiving Party shall promptly return or certify destruction of all confidential documentation.

6. GOVERNING LAW AND JURISDICTION
This Agreement shall be governed by the laws of India, and courts at [City, State] shall have exclusive jurisdiction.

PARTY A:                                      PARTY B:
_____________________________                _____________________________
Authorised Signatory                          Authorised Signatory
Name: [Signatory Name A]                      Name: [Signatory Name B]`,
  },
  {
    slug: "startup-employment-offer-ip",
    title: "Startup Employment Offer Letter with IP Assignment",
    category: "hr",
    categoryLabel: "Hiring & HR",
    entityTypes: "Private Limited • LLP",
    summary:
      "Clean startup employee appointment letter featuring compensation terms, probation period, termination notice, and strict work-for-hire intellectual property assignment.",
    stampDutyNote: "Issued on official company letterhead and signed by the designated Director / HR Lead.",
    downloadFilename: "corpunex-startup-offer-letter-template.txt",
    keyClauses: [
      {
        title: "Work-for-Hire IP Transfer",
        explanation: "Ensures all code, designs, and copy written by the employee belong 100% to the company.",
      },
      {
        title: "Probation & Notice Period",
        explanation: "Specifies 3–6 months probation with short notice during probation vs. confirmed status.",
      },
      {
        title: "Non-Solicitation & Non-Poaching",
        explanation: "Bars ex-employees from poaching clients or team members for 12 months after departure.",
      },
      {
        title: "Confidentiality Obligations",
        explanation: "Binds employee to permanent non-disclosure of internal secrets and customer data.",
      },
    ],
    draftContent: `[ON COMPANY LETTERHEAD]

Date: [Date of Issuance]

To,
[Candidate Full Name]
[Candidate Residential Address]
Email: [Candidate Email Address]

Subject: Offer of Employment for the position of [Job Title]

Dear [Candidate First Name],

We are pleased to offer you employment with [Company Name] Private Limited (the "Company") on the following terms and conditions:

1. DESIGNATION & COMMENCEMENT
You shall be appointed as [Job Title], reporting to [Manager Name / Designation]. Your employment will commence on [Joining Date].

2. REMUNERATION
Your Total Cost to Company (CTC) will be ₹[Gross Annual Amount]/- (Rupees [Amount in Words] Only) per annum, subject to statutory deductions (TDS, PF, Professional Tax). A detailed salary breakup is set out in Annexure A.

3. PROBATION & NOTICE PERIOD
3.1 You will be on probation for three (3) months. During probation, either party may terminate employment by giving fifteen (15) days' written notice.
3.2 Upon satisfactory confirmation, the notice period shall be thirty (30) days or basic salary in lieu thereof.

4. INTELLECTUAL PROPERTY ASSIGNMENT (WORK MADE FOR HIRE)
4.1 All software, source code, inventions, designs, documentation, and creative works authored or developed by you during your employment with the Company shall constitute "work made for hire".
4.2 You hereby irrevocably assign all rights, title, copyright, and patent privileges worldwide to the Company without any additional royalty claim.

5. NON-SOLICITATION & CONFIDENTIALITY
You agree that during your employment and for a period of twelve (12) months after termination, you will not recruit or solicit any employee, consultant, or client of the Company.

Please sign and return the duplicate copy of this letter as acceptance of this offer.

Yours sincerely,
For [Company Name] Private Limited

_____________________________
[Director Name]
Director / Authorised Signatory

ACCEPTANCE:
I accept employment on the terms specified above.
Signature: ______________________ Date: ______________`,
  },
  {
    slug: "board-resolution-bank-account",
    title: "Board Resolution for Bank Current Account Opening",
    category: "mca",
    categoryLabel: "Board & MCA Resolutions",
    entityTypes: "Private Limited",
    summary:
      "Certified extract of board resolution mandated by Indian banks (HDFC, ICICI, Axis, SBI) to open a current account following incorporation.",
    stampDutyNote: "Printed on company letterhead with company seal and certified by at least two directors.",
    downloadFilename: "corpunex-board-resolution-bank-account.txt",
    keyClauses: [
      {
        title: "Companies Act 2013 Compliance",
        explanation: "Formal board approval under Section 179(3) of the Companies Act.",
      },
      {
        title: "Authorised Signatory Designation",
        explanation: "Authorises directors to operate singly or jointly.",
      },
      {
        title: "Digital Banking & Debit Card Mandate",
        explanation: "Authorises NetBanking, corporate credit cards, and digital token issuance.",
      },
    ],
    draftContent: `[ON COMPANY LETTERHEAD]

CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF [COMPANY NAME] PRIVATE LIMITED HELD ON [DATE] AT [REGISTERED OFFICE ADDRESS] AT [TIME].

"RESOLVED THAT a Current Banking Account in the name of the Company be opened with [Bank Name], [Branch Address], and that the said Bank be and is hereby authorized to honor all cheques, bills of exchange, and promissory notes drawn, accepted, or made on behalf of the Company.

RESOLVED FURTHER THAT the following Directors/Officers of the Company:
1. [Director 1 Name], Director (DIN: [DIN 1])
2. [Director 2 Name], Director (DIN: [DIN 2])

be and are hereby authorized [SEVERALLY / JOINTLY] to:
(a) Sign, execute, and deliver account opening forms, KYC declarations, and specimen signatures;
(b) Operate the said Current Account, issue cheques, and initiate wire transfers/NEFT/RTGS/IMPS;
(c) Apply for and operate Internet Banking, Corporate Mobile Banking, Debit Cards, and Payment Gateways;
(d) Instruct the bank on all day-to-day financial operations.

RESOLVED FURTHER THAT this resolution remains in force until communicated to the Bank in writing under the signature of the Chairman or Directors of the Company.

RESOLVED FURTHER THAT [Director 1 Name] be and is hereby authorized to furnish a certified true copy of this resolution to the Bank."

// Certified True Copy //
For [Company Name] Private Limited

_____________________________                _____________________________
[Director 1 Name]                            [Director 2 Name]
Director (DIN: [DIN 1])                      Director (DIN: [DIN 2])`,
  },
  {
    slug: "board-resolution-gst-registration",
    title: "Board Resolution for GST Registration & Signatory",
    category: "mca",
    categoryLabel: "Board & MCA Resolutions",
    entityTypes: "Private Limited",
    summary:
      "Mandatory board resolution and authorization letter required when applying for Goods and Services Tax (GST) registration on the GSTN portal.",
    stampDutyNote: "Issued on company letterhead and uploaded to the GST Common Portal with digital signature (DSC).",
    downloadFilename: "corpunex-board-resolution-gst.txt",
    keyClauses: [
      {
        title: "Primary Authorised Signatory Designation",
        explanation: "Authorises one director to verify filings using their PAN and Aadhaar.",
      },
      {
        title: "DSC Authorization",
        explanation: "Allows use of Digital Signature Certificate (Class 3 DSC) for GST verification.",
      },
      {
        title: "Authority for Assessments & Refunds",
        explanation: "Empowers the signatory to represent the company in assessment proceedings.",
      },
    ],
    draftContent: `[ON COMPANY LETTERHEAD]

CERTIFIED TRUE COPY OF THE RESOLUTION PASSED AT THE MEETING OF THE BOARD OF DIRECTORS OF [COMPANY NAME] PRIVATE LIMITED HELD ON [DATE] AT [REGISTERED OFFICE ADDRESS].

"RESOLVED THAT the Company do apply for Goods and Services Tax (GST) Registration under the Central Goods and Services Tax Act, 2017, and the applicable State Goods and Services Tax Act.

RESOLVED FURTHER THAT [Name of Authorised Director/Person], [Designation], (DIN/PAN: [Number]), be and is hereby appointed as the Primary Authorised Signatory of the Company for the purpose of GST registration and compliance.

RESOLVED FURTHER THAT the said Primary Authorised Signatory be and is hereby authorized to:
1. Sign, verify, and submit the online application for GST registration (Form GST REG-01);
2. Sign and upload all statutory forms, monthly/quarterly returns (GSTR-1, GSTR-3B, GSTR-9);
3. Sign using his/her Digital Signature Certificate (DSC) or Aadhaar e-verification;
4. Receive statutory notices, represent the Company before GST officers, and claim input tax credits or refunds.

RESOLVED FURTHER THAT [Director Name], Director, be authorized to submit a certified copy of this resolution to the GST Department."

// Certified True Copy //
For [Company Name] Private Limited

_____________________________
[Director Name]
Director (DIN: [DIN Number])`,
  },
  {
    slug: "registered-office-noc-utility",
    title: "Registered Office NOC & Utility Bill Letter",
    category: "compliance",
    categoryLabel: "Office & Operations",
    entityTypes: "Pvt Ltd • LLP • OPC",
    summary:
      "No Objection Certificate (NOC) from property owner required by the Ministry of Corporate Affairs (MCA) to use a residential or commercial premises as registered office.",
    stampDutyNote: "Signed by the property owner whose name appears on the electricity/gas/water bill.",
    downloadFilename: "corpunex-registered-office-noc-template.txt",
    keyClauses: [
      {
        title: "Ownership Declaration",
        explanation: "Confirms the grantor is the absolute lawful owner of the premises.",
      },
      {
        title: "Unconditional Permission",
        explanation: "Grants permission to store books of account and receive official postal notices.",
      },
      {
        title: "Utility Bill Alignment",
        explanation: "Ensures the address matches the electricity bill exactly character-by-character.",
      },
    ],
    draftContent: `NO OBJECTION CERTIFICATE (NOC) FROM PROPERTY OWNER

Date: [Date]

To,
The Registrar of Companies (ROC),
Ministry of Corporate Affairs,
Government of India.

Subject: No Objection Certificate for using premises as Registered Office of [Proposed Company Name] Private Limited / LLP

Dear Sir / Madam,

I, [Owner Full Name], son/daughter of [Father's Name], residing at [Owner Full Residential Address], do hereby solemnly affirm and state as under:

1. That I am the sole, absolute, and lawful owner of the property situated at:
   [Full Address matching the electricity bill character-for-character]
   (hereinafter referred to as the "Said Premises").

2. That I have no objection whatsoever to [Proposed Company Name] Private Limited / LLP (under incorporation) using the Said Premises as its Registered Office for official correspondence, statutory records, ROC compliance, and MCA filings.

3. That I confirm the electricity bill / water bill / property tax receipt attached herewith is in my name and pertains to the Said Premises.

This No Objection Certificate is issued unconditionally to facilitate company registration with the Ministry of Corporate Affairs.

Yours faithfully,

_____________________________
[Owner Signature]
Name: [Owner Full Name]
Contact Mobile: [Phone Number]
Attached: Recent Utility Bill (Electricity Bill / Gas Bill) not older than 2 months.`,
  },
  {
    slug: "angel-seed-term-sheet",
    title: "Angel & Pre-Seed Term Sheet (CCPS Structure)",
    category: "founders",
    categoryLabel: "Founders & Equity",
    entityTypes: "Private Limited",
    summary:
      "Founder-friendly term sheet structure for pre-seed and angel rounds using Compulsorily Convertible Preference Shares (CCPS).",
    stampDutyNote: "Non-binding summary of terms except for Exclusivity and Confidentiality clauses.",
    downloadFilename: "corpunex-seed-term-sheet-template.txt",
    keyClauses: [
      {
        title: "Pre-Money Valuation & Investment Size",
        explanation: "Clear statement of investment amount and pre-money valuation.",
      },
      {
        title: "CCPS Instrument Details",
        explanation: "Conversion ratio upon subsequent Series A institutional round.",
      },
      {
        title: "1x Non-Participating Liquidation Preference",
        explanation: "Protects founder upside compared to burdensome participating preferences.",
      },
      {
        title: "Information & Board Observer Rights",
        explanation: "Provides periodic updates without giving away board control.",
      },
    ],
    draftContent: `TERM SHEET FOR PRE-SEED INVESTMENT (NON-BINDING SUMMARY)

This Term Sheet summarizes the principal terms of the proposed angel/pre-seed equity financing in [Company Name] Private Limited (the "Company").

1. ISSUER & FOUNDERS
- Issuer: [Company Name] Private Limited
- Co-Founders: [Founder 1 Name] and [Founder 2 Name]
- Investors: [Lead Angel / Syndicate Name]

2. FINANCING AMOUNT & VALUATION
- Investment Amount: ₹[Amount in INR, e.g., 50,00,000]
- Pre-Money Valuation: ₹[Amount in INR, e.g., 5,00,00,000]
- Security Type: Compulsorily Convertible Preference Shares (CCPS)

3. CONVERSION TERMS
The CCPS shall convert into Equity Shares at the earlier of:
(a) The next institutional Qualified Financing round of at least ₹[Threshold Amount], at a [20]% discount to the round price; OR
(b) Expiry of [36] months from the closing date.

4. LIQUIDATION PREFERENCE
One times (1x) non-participating liquidation preference. In the event of a sale or liquidation, Investors shall receive their initial capital back prior to ordinary equity distribution, or participate pro-rata with ordinary shares.

5. BOARD & GOVERNANCE
The Board of Directors shall consist of [Two] members nominated exclusively by the Co-Founders. Investors holding more than [5]% shall have Board Observer and quarterly financial information rights.

6. EXCLUSIVITY & EXPENSES (BINDING)
The Company agrees to negotiate exclusively with the Investors for a period of thirty (30) days from signing.

Agreed and Accepted:

For [Company Name] Private Limited               For the Investors:
_____________________________                    _____________________________
Founder / Authorised Signatory                   Lead Investor`,
  },
  {
    slug: "independent-consultant-agreement",
    title: "Independent Contractor & Consultant Agreement",
    category: "legal",
    categoryLabel: "Legal & IP",
    entityTypes: "Pvt Ltd • LLP • OPC",
    summary:
      "Engagement contract for freelance developers, legal advisors, designers, and growth consultants, with clear deliverables and tax withholding (TDS Section 194J) clauses.",
    stampDutyNote: "Executed on Non-Judicial Stamp Paper (minimum ₹100 or state rate).",
    downloadFilename: "corpunex-consultancy-agreement-template.txt",
    keyClauses: [
      {
        title: "Clear Independent Contractor Status",
        explanation: "Prevents labor claims of employment status or PF/gratuity liabilities.",
      },
      {
        title: "Deliverables & Milestone Payment",
        explanation: "Ties payments to defined sprint goals or milestone approvals.",
      },
      {
        title: "TDS & GST Withholding",
        explanation: "Clarifies applicable Section 194J TDS deductions.",
      },
      {
        title: "Complete IP Assignment",
        explanation: "Consultant yields all code, Figma files, and marketing assets.",
      },
    ],
    draftContent: `INDEPENDENT CONTRACTOR & CONSULTANCY AGREEMENT

THIS AGREEMENT is entered into on this [Day] day of [Month], [Year], by and between:

CLIENT: [Company Name] Private Limited / LLP, having its office at [Company Address]; AND
CONSULTANT: [Consultant Full Name / Firm Name], having its address at [Consultant Address].

1. SERVICES AND DELIVERABLES
The Consultant agrees to provide the following professional services:
[Detailed Scope of Work, e.g., UI/UX product design / Backend Node.js development] ("Services").

2. COMPENSATION AND PAYMENT TERMS
2.1 The Client shall pay the Consultant a fee of ₹[Amount] per [Month / Milestone Deliverable].
2.2 Payments are subject to statutory deduction of Tax Deducted at Source (TDS) under Section 194J of the Income Tax Act, 1961.
2.3 The Consultant shall raise GST invoices if registered under the GST Act.

3. INDEPENDENT CONTRACTOR RELATIONSHIP
Nothing in this Agreement shall create an employer-employee or agency relationship. The Consultant shall not be entitled to statutory employee benefits, insurance, PF, or gratuity.

4. INTELLECTUAL PROPERTY RIGHTS
All deliverables, software, documentation, designs, and files created under this Agreement shall belong solely and exclusively to the Client from the moment of creation. The Consultant waives all moral rights.

5. TERMINATION
Either party may terminate this Agreement by providing fifteen (15) days' written notice to the other.

CLIENT:                                       CONSULTANT:
_____________________________                _____________________________
Authorised Signatory                          Consultant Signature`,
  },
];

export const templatesFaqs: Faq[] = [
  {
    question: "Are these startup templates legally binding in India?",
    answer:
      "Yes. When printed on appropriate non-judicial stamp paper (as per your state's Stamp Act), signed by authorized parties, and attested by witnesses, these agreements are legally enforceable under the Indian Contract Act, 1872 and the Companies Act, 2013.",
  },
  {
    question: "How do I determine the correct stamp duty for an agreement?",
    answer:
      "Stamp duty varies by state and agreement type. For example, in Maharashtra, Karnataka, and Delhi, general commercial contracts like NDAs and Consultancy Agreements typically require ₹100 or ₹200 non-judicial stamp paper. Shareholder and equity purchase agreements depend on the deal value.",
  },
  {
    question: "Do Board Resolutions need to be filed with the MCA?",
    answer:
      "Only specific resolutions (such as loan approvals under Section 179(3) or special resolutions) require filing in Form MGT-14 with the Registrar of Companies. Routine resolutions—such as opening a bank current account or appointing an authorized signatory for GST—are submitted directly to the bank or tax portal.",
  },
  {
    question: "Can Corpunex customize these templates for my specific startup?",
    answer:
      "Yes. While these templates cover standard legal safeguards, our practicing Chartered Accountants, Company Secretaries, and corporate advocates can tailor custom founder agreements, vesting clauses, and employee stock ownership plans (ESOPs) to fit your exact cap table.",
  },
];
