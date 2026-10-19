export interface ServiceDetail {
  slug: string;
  title: string;
  categorySlug: string;
  categoryName: string;
  tagline: string;
  summary: string;
  whoNeedsIt: string[];
  whyRequired: string[];
  eligibility: string[];
  documentsRequired: string[];
  processSteps: { title: string; description: string }[];
  deliverables: string[];
  govtFeesNote: string;
  corpunexFeeNote: string;
  timelineNote: string;
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; slug: string; categorySlug: string }[];
}

export interface ServiceCategory {
  slug: string;
  title: string;
  shortDesc: string;
  iconName: string;
  overview: string;
  services: {
    title: string;
    slug?: string;
    shortDesc: string;
    hasDetailPage: boolean;
  }[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "business-registration",
    title: "Business Registration",
    shortDesc: "Incorporate and legally establish your business structure in India with end-to-end guidance.",
    iconName: "Building2",
    overview: "Choosing and registering the right legal structure is the foundation of any enterprise in India. Corpunex assists founders, entrepreneurs, and foreign entities in understanding structural liabilities, tax implications, and regulatory compliance before proceeding with company incorporation on the Ministry of Corporate Affairs (MCA) portal.",
    services: [
      {
        title: "Private Limited Company Registration",
        slug: "private-limited-company",
        shortDesc: "The most popular structure for startups and growing enterprises seeking venture capital, limited liability, and separate legal entity status.",
        hasDetailPage: true,
      },
      {
        title: "Limited Liability Partnership (LLP) Registration",
        slug: "llp-registration",
        shortDesc: "Combines the flexibility of a partnership with the limited liability benefits of a private company, with lower statutory compliance overhead.",
        hasDetailPage: true,
      },
      {
        title: "One Person Company (OPC) Registration",
        slug: "one-person-company",
        shortDesc: "Designed for solo entrepreneurs seeking the credibility and limited liability of a corporate entity while retaining 100% ownership.",
        hasDetailPage: true,
      },
      {
        title: "Sole Proprietorship Setup Assistance",
        slug: "sole-proprietorship",
        shortDesc: "Assistance with obtaining foundational commercial registrations (Udyam, GST, Shops & Est.) to operate as a sole proprietor with an official bank account.",
        hasDetailPage: true,
      },
      {
        title: "Partnership Firm Registration",
        shortDesc: "Drafting of partnership deeds, notarization, and registration with the Registrar of Firms (ROF) under the Indian Partnership Act, 1932.",
        hasDetailPage: false,
      },
      {
        title: "Public Limited Company Registration Assistance",
        shortDesc: "Incorporation guidance for large-scale commercial ventures requiring capital mobilization from the public or institutional markets.",
        hasDetailPage: false,
      },
      {
        title: "Section 8 Company Registration",
        shortDesc: "Incorporation of non-profit entities for promoting commerce, art, science, charity, protection of environment, or social welfare.",
        hasDetailPage: false,
      },
      {
        title: "Producer Company Registration Assistance",
        shortDesc: "Incorporation support for agricultural and primary produce collectives under Part IXA of the Companies Act.",
        hasDetailPage: false,
      },
      {
        title: "Indian Subsidiary Setup Assistance",
        shortDesc: "Assistance for foreign corporations establishing wholly owned subsidiaries or joint ventures in India under FEMA guidelines.",
        hasDetailPage: false,
      },
      {
        title: "Company Name and Structure Consultation",
        shortDesc: "Preliminary name availability search under RUN guidelines and structural suitability assessment.",
        hasDetailPage: false,
      },
      {
        title: "Digital Signature Certificate (DSC) Assistance",
        shortDesc: "Procurement of Class 3 DSC tokens for proposed directors and designated partners from authorized Certifying Authorities.",
        hasDetailPage: false,
      },
      {
        title: "PAN and TAN Application Assistance",
        shortDesc: "Facilitation of corporate and enterprise permanent account number and tax deduction account number registrations.",
        hasDetailPage: false,
      },
      {
        title: "Post-Incorporation Guidance",
        shortDesc: "Advisory on mandatory post-incorporation milestones including First Board Meeting, Auditor Appointment (ADT-1), and Commencement of Business (INC-20A).",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "startup-services",
    title: "Startup Registration and Support",
    shortDesc: "Unlock government recognition, tax exemptions, and regional ecosystem programmes.",
    iconName: "Rocket",
    overview: "India is among the fastest-growing startup ecosystems in the world. Corpunex helps innovative ventures obtain formal government recognition under Startup India (DPIIT) and state-level programmes such as Startup Odisha, facilitating access to funding schemes, patent fee concessions, and public procurement exemptions.",
    services: [
      {
        title: "Startup India Recognition Assistance",
        slug: "startup-india-recognition",
        shortDesc: "End-to-end guidance on obtaining DPIIT recognition, enabling eligibility for Section 80-IAC tax holidays and angel tax exemptions.",
        hasDetailPage: true,
      },
      {
        title: "Startup Odisha Programme Assistance",
        slug: "startup-odisha",
        shortDesc: "Registration and facilitation under the Odisha Startup Policy for monthly sustenance allowances, product development grants, and incubator access.",
        hasDetailPage: true,
      },
      {
        title: "Udyam / MSME Registration",
        slug: "udyam-msme-registration",
        shortDesc: "Official Ministry of MSME registration to access priority sector lending, lower interest rates, and statutory delay-payment protections.",
        hasDetailPage: true,
      },
      {
        title: "DPIIT Recognition Assistance",
        shortDesc: "Preparation and review of innovation pitch documents, video pitches, and eligibility checks for Department for Promotion of Industry and Internal Trade recognition.",
        hasDetailPage: false,
      },
      {
        title: "Startup Documentation",
        shortDesc: "Drafting of foundational startup legal frameworks including Term Sheets, Co-founders' Agreements, and IP Assignment Deeds.",
        hasDetailPage: false,
      },
      {
        title: "Government Scheme Application Assistance",
        shortDesc: "Guidance on identifying and compiling applications for Central and State grant programmes (SISFS, CGTMSE, TIDE 2.0).",
        hasDetailPage: false,
      },
      {
        title: "Incubator Application Support",
        shortDesc: "Assistance in structuring project documentation and deck readiness for presentation to university and government-backed incubators.",
        hasDetailPage: false,
      },
      {
        title: "Startup Eligibility Guidance",
        shortDesc: "Evaluation of business models against government notification criteria defining an innovative entity.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "gst-taxation",
    title: "GST and Taxation",
    shortDesc: "Comprehensive indirect and direct tax compliance, return filings, and statutory reconciliations.",
    iconName: "Receipt",
    overview: "Tax laws in India require meticulous calculation, adherence to statutory schedules, and timely filings. Corpunex coordinates with qualified tax professionals to facilitate GST registration, monthly return filings, TDS compliance, and corporate income tax filings.",
    services: [
      {
        title: "GST Registration",
        slug: "gst-registration",
        shortDesc: "New Goods and Services Tax registration under regular, composition, or voluntary schemes with jurisdiction validation.",
        hasDetailPage: true,
      },
      {
        title: "Income Tax Return Filing",
        slug: "income-tax-filing",
        shortDesc: "Statutory direct tax filings for corporate entities, LLPs, proprietorships, and individuals coordinated through qualified professionals.",
        hasDetailPage: true,
      },
      {
        title: "GST Return Filing",
        shortDesc: "Monthly and quarterly filing of GSTR-1, GSTR-3B, and Input Tax Credit (ITC) matching against GSTR-2B.",
        hasDetailPage: false,
      },
      {
        title: "GST Amendment and Cancellation",
        shortDesc: "Filing core and non-core amendments for changes in business premises, partners, or voluntary cancellation of registration.",
        hasDetailPage: false,
      },
      {
        title: "GST Annual Return Assistance",
        shortDesc: "Preparation and reconciliation of GSTR-9 and GSTR-9C self-certified reconciliation statements.",
        hasDetailPage: false,
      },
      {
        title: "TDS Return Filing",
        shortDesc: "Quarterly computation and electronic submission of Form 24Q, 26Q, and Form 27Q along with Form 16/16A generation.",
        hasDetailPage: false,
      },
      {
        title: "PAN and TAN Assistance",
        shortDesc: "Facilitation of Tax Deduction and Collection Account Number (TAN) and PAN updates for business entities.",
        hasDetailPage: false,
      },
      {
        title: "Tax Documentation & Assessments",
        shortDesc: "Organizing accounting ledgers, purchase registers, and documentation for scrutiny assessments and tax audits.",
        hasDetailPage: false,
      },
      {
        title: "Tax Advisory Through Qualified Professionals",
        shortDesc: "Independent advisory provided by certified Chartered Accountants regarding tax planning and structural liabilities.",
        hasDetailPage: false,
      },
      {
        title: "E-Invoicing and E-Way Bill Compliance Assistance",
        shortDesc: "Setup and operational guidance for generating IRN via Invoice Registration Portals and compliant E-Way bills.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "licences-registrations",
    title: "Business Licences and Registrations",
    shortDesc: "Mandatory municipal, state, and central government operating licences for lawful commercial operations.",
    iconName: "ShieldCheck",
    overview: "Depending on your industry, physical location, and workforce size, your enterprise must obtain specific operating licences before trading. Corpunex guides businesses through municipal, food safety, trade, and labour welfare registrations.",
    services: [
      {
        title: "FSSAI Food Safety Licence & Registration",
        slug: "fssai-licence",
        shortDesc: "Basic registration, State licence, and Central licence assistance under the Food Safety and Standards Act for food businesses.",
        hasDetailPage: true,
      },
      {
        title: "Import Export Code (IEC) Assistance",
        slug: "import-export-code",
        shortDesc: "10-digit DGFT registration essential for commercial cross-border import and export transactions from India.",
        hasDetailPage: true,
      },
      {
        title: "Shops and Establishments Registration",
        shortDesc: "Mandatory state municipal registration governing working hours, employee terms, and commercial premise recognition.",
        hasDetailPage: false,
      },
      {
        title: "Municipal Trade Licence Assistance",
        shortDesc: "Permits issued by local municipal corporations granting authorization to conduct specific trades within municipal jurisdictions.",
        hasDetailPage: false,
      },
      {
        title: "Professional Tax Registration",
        shortDesc: "PT Enrolment (PTEC) and PT Registration (PTRC) for employers and professional service providers under state revenue acts.",
        hasDetailPage: false,
      },
      {
        title: "EPFO and ESIC Registration Assistance",
        shortDesc: "Employee Provident Fund and Employees' State Insurance Corporation statutory compliance registration for eligible workforces.",
        hasDetailPage: false,
      },
      {
        title: "Digital Signature Certificate (DSC)",
        shortDesc: "Class 3 DSC tokens required for e-filing across income tax, MCA, DGFT, and e-tendering portals.",
        hasDetailPage: false,
      },
      {
        title: "Industry-Specific Licence Assistance",
        shortDesc: "Advisory on specialized licences including Pollution Control Board consent (CTE/CTO), Drug Licences, and weights/measures permits.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "trademark-ip",
    title: "Trademark and Intellectual Property",
    shortDesc: "Protect your brand name, logo, proprietary designs, and creative assets across India.",
    iconName: "Award",
    overview: "Intellectual property is a critical enterprise asset. Corpunex facilitates trademark searches, brand registrations, copyright documentation, and opposition responses under the Trade Marks Act, 1999, coordinating with certified trademark attorneys.",
    services: [
      {
        title: "Trademark Registration",
        slug: "trademark-registration",
        shortDesc: "Application filing under appropriate NICE classes (1 to 45) to secure exclusive rights and the TM / ® symbol in India.",
        hasDetailPage: true,
      },
      {
        title: "Trademark Search Assistance",
        shortDesc: "Comprehensive public database analysis to check phonetic similarity, existing conflicts, and registrability before filing.",
        hasDetailPage: false,
      },
      {
        title: "Trademark Objection Assistance",
        shortDesc: "Drafting formal legal replies to examination reports issued under Section 9 (absolute grounds) or Section 11 (relative grounds).",
        hasDetailPage: false,
      },
      {
        title: "Trademark Opposition Assistance",
        shortDesc: "Drafting counter-statements and affidavits in opposition proceedings before the Trademark Registry.",
        hasDetailPage: false,
      },
      {
        title: "Trademark Renewal",
        shortDesc: "Filing Form TM-R before the expiry of the 10-year statutory period to ensure uninterrupted trademark ownership.",
        hasDetailPage: false,
      },
      {
        title: "Copyright Registration Assistance",
        shortDesc: "Securing statutory rights for literary works, software source codes, musical creations, and artistic branding logos.",
        hasDetailPage: false,
      },
      {
        title: "Patent Filing Assistance Through Qualified Professionals",
        shortDesc: "Coordination with registered Patent Agents for provisional and complete specification drafting and patent search.",
        hasDetailPage: false,
      },
      {
        title: "Industrial Design Registration Assistance",
        shortDesc: "Protection for the unique visual shape, configuration, pattern, or ornament applied to manufactured articles.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "corporate-compliance",
    title: "Corporate Compliance",
    shortDesc: "Statutory MCA and ROC annual filings, secretarial updates, and statutory registry maintenance.",
    iconName: "FileCheck",
    overview: "Incorporating an entity creates ongoing legal obligations. The Ministry of Corporate Affairs (MCA) enforces stringent deadlines and steep late fees for delayed filings. Corpunex helps businesses track, compile, and complete their recurring statutory requirements seamlessly.",
    services: [
      {
        title: "Annual ROC Compliance",
        slug: "annual-roc-compliance",
        shortDesc: "Mandatory annual filing of financial statements (AOC-4), annual return (MGT-7/7A), and statutory board disclosures.",
        hasDetailPage: true,
      },
      {
        title: "Private Limited Company Annual Filings",
        shortDesc: "End-to-end coordination of balance sheets, director reports, statutory audit schedules, and AGM documentation.",
        hasDetailPage: false,
      },
      {
        title: "LLP Annual Compliance",
        shortDesc: "Timely filing of Statement of Account & Solvency (Form 8) and Annual Return of LLP (Form 11) with the ROC.",
        hasDetailPage: false,
      },
      {
        title: "Director KYC Assistance (DIR-3 KYC)",
        shortDesc: "Annual verification of Director Identification Numbers via web-based OTP authentication or comprehensive e-form.",
        hasDetailPage: false,
      },
      {
        title: "Financial Statement Filing Assistance",
        shortDesc: "E-filing of audited balance sheets, profit and loss statements, and cash flow disclosures on the MCA V3 portal.",
        hasDetailPage: false,
      },
      {
        title: "Director Appointment and Resignation Filing",
        shortDesc: "Drafting resolutions and filing Form DIR-12 for board changes, executive inductions, or formal resignations.",
        hasDetailPage: false,
      },
      {
        title: "Registered Office Change Assistance",
        shortDesc: "Filing Form INC-22 for local address shifts, or regional RD approval petitions for inter-state transfers.",
        hasDetailPage: false,
      },
      {
        title: "Company Name Change Assistance",
        shortDesc: "Board consent, shareholder EGM resolutions, RUN reservation, and Form MGT-14 / INC-24 filing for corporate rebranding.",
        hasDetailPage: false,
      },
      {
        title: "Share Transfer Documentation",
        shortDesc: "Drafting Form SH-4 share transfer deeds, board approval minutes, stamp duty verification, and register updates.",
        hasDetailPage: false,
      },
      {
        title: "Company Closure and Strike-Off Assistance",
        shortDesc: "Voluntary closure of dormant entities under Section 248 of the Companies Act via Form STK-2 filing.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "accounting-bookkeeping",
    title: "Accounting and Bookkeeping",
    shortDesc: "Professional ledger maintenance, bank reconciliation, MIS reports, and audit coordination.",
    iconName: "Calculator",
    overview: "Accurate financial records are essential for sound business decisions, statutory audits, and investor due diligence. Corpunex provides structured bookkeeping and financial reporting assistance designed for Indian enterprises.",
    services: [
      {
        title: "Accounting and Bookkeeping",
        shortDesc: "Daily and monthly transaction entries, journal vouchers, sales/purchase ledger maintenance on cloud accounting software.",
        hasDetailPage: false,
      },
      {
        title: "Financial Statement Preparation",
        shortDesc: "Drafting balance sheets, profit and loss accounts, and trial balances in accordance with applicable Indian Accounting Standards (Ind AS).",
        hasDetailPage: false,
      },
      {
        title: "GST Reconciliation Support",
        shortDesc: "Continuous matching of input tax credit claims with supplier uploads in GSTR-2B to avoid tax discrepancies.",
        hasDetailPage: false,
      },
      {
        title: "Payroll Support",
        shortDesc: "Monthly salary computation, payslip generation, and statutory PF, ESIC, and PT deduction schedules.",
        hasDetailPage: false,
      },
      {
        title: "Financial Reporting & MIS",
        shortDesc: "Customized management information system reports covering cash flow trends, burn rates, and departmental profitability.",
        hasDetailPage: false,
      },
      {
        title: "Audit Coordination Through Eligible Professionals",
        shortDesc: "Compiling audit dossiers, ledger proofs, and supporting schedules for independent statutory and tax audits.",
        hasDetailPage: false,
      },
      {
        title: "Monthly and Annual Accounting Support",
        shortDesc: "Customizable retainers providing continuous accounting supervision for startups and small-to-medium businesses.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "legal-documentation",
    title: "Legal Documentation",
    shortDesc: "Tailored business contracts, founder agreements, vendor terms, and digital legal hygiene.",
    iconName: "FileText",
    overview: "Poorly drafted agreements leave businesses vulnerable to expensive disputes. Corpunex assists founders and operating businesses with drafting customized commercial agreements, investor covenants, and digital privacy policies.",
    services: [
      {
        title: "Non-Disclosure Agreements (NDA)",
        shortDesc: "Unilateral and mutual confidentiality agreements safeguarding trade secrets, technical designs, and commercial discussions.",
        hasDetailPage: false,
      },
      {
        title: "Founders' Agreements",
        shortDesc: "Clear contractual frameworks defining equity splits, vesting schedules, roles, intellectual property assignment, and dispute resolution.",
        hasDetailPage: false,
      },
      {
        title: "Partnership Agreements",
        shortDesc: "Customized partnership deeds specifying capital contributions, profit sharing, operational duties, and retirement terms.",
        hasDetailPage: false,
      },
      {
        title: "Shareholders' Agreements (SHA)",
        shortDesc: "Comprehensive documentation detailing investor rights, pre-emptive rights, tag-along/drag-along clauses, and exit mechanics.",
        hasDetailPage: false,
      },
      {
        title: "Employment Agreements",
        shortDesc: "Employment letters, probation terms, intellectual property assignment clauses, and non-compete stipulations under Indian labour law.",
        hasDetailPage: false,
      },
      {
        title: "Consultancy Agreements",
        shortDesc: "Independent contractor contracts clearly demarcating service deliverables, milestones, fee structures, and IP ownership.",
        hasDetailPage: false,
      },
      {
        title: "Vendor Agreements",
        shortDesc: "Standard procurement contracts outlining service levels, payment milestones, defect warranties, and termination clauses.",
        hasDetailPage: false,
      },
      {
        title: "Service Agreements",
        shortDesc: "Client service contracts clarifying scope of work, liability caps, payment schedules, and client obligations.",
        hasDetailPage: false,
      },
      {
        title: "Business Contracts & MoUs",
        shortDesc: "Memorandums of Understanding, letters of intent, and strategic collaboration agreements for B2B ventures.",
        hasDetailPage: false,
      },
      {
        title: "Website Terms and Privacy Documentation",
        shortDesc: "Compliant Terms of Service, Privacy Policies (DPDP Act aligned), and Cookie Disclaimers for web applications and digital stores.",
        hasDetailPage: false,
      },
      {
        title: "Other Business Documentation",
        shortDesc: "Customized legal notices, vendor termination letters, board resolutions, and authority powers of attorney.",
        hasDetailPage: false,
      },
    ],
  },
  {
    slug: "ngo-entity-registration",
    title: "NGO and Entity Registration",
    shortDesc: "Incorporate Section 8 non-profits, public trusts, and societies with proper charitable governance.",
    iconName: "HeartHandshake",
    overview: "Establishing a social welfare organization in India requires compliance with specific state and central laws. Corpunex helps changemakers and philanthropic entities select and register the most appropriate non-profit structure.",
    services: [
      {
        title: "Section 8 Company Registration",
        shortDesc: "The premier non-profit corporate structure registered under the Companies Act, providing limited liability and national operational recognition.",
        hasDetailPage: false,
      },
      {
        title: "Trust Registration Assistance",
        shortDesc: "Drafting of public charitable trust deeds, trustee governance frameworks, and execution before local Sub-Registrar offices.",
        hasDetailPage: false,
      },
      {
        title: "Society Registration Assistance",
        shortDesc: "Registration of welfare associations, cultural clubs, or charitable bodies under the Societies Registration Act, 1860.",
        hasDetailPage: false,
      },
      {
        title: "NGO Documentation & By-laws",
        shortDesc: "Preparation of Memorandums of Association (MOA), Rules & Regulations, code of ethics, and philanthropic governance documents.",
        hasDetailPage: false,
      },
      {
        title: "Relevant Compliance Assistance",
        shortDesc: "Guidance on Section 12A and 80G tax exemptions under the Income Tax Act, and statutory non-profit filings.",
        hasDetailPage: false,
      },
    ],
  },
];

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "private-limited-company": {
    slug: "private-limited-company",
    title: "Private Limited Company Registration",
    categorySlug: "business-registration",
    categoryName: "Business Registration",
    tagline: "The gold standard corporate structure for ambitious startups and businesses in India.",
    summary: "A Private Limited Company is India's most recognized and respected legal entity for startups seeking equity funding, limited liability protection, and distinct corporate identity. Corpunex guides founders through name approval, digital signatures, SPICe+ Part A & B documentation, and post-incorporation setup.",
    whoNeedsIt: [
      "Startups planning to raise angel investment or venture capital.",
      "Founders who want complete separation between personal and company liabilities.",
      "Businesses seeking a recognized corporate legal entity for B2B client contracts.",
      "Enterprises looking for continuous existence (perpetual succession) unaffected by ownership changes.",
    ],
    whyRequired: [
      "Statutory legal requirement under the Companies Act, 2013 to operate as a corporate body.",
      "Enables allocation of equity shares, ESOPs to employees, and debt funding from financial institutions.",
      "Protects the personal assets of directors and shareholders in case of enterprise liabilities.",
      "Enhances brand credibility with institutional customers, suppliers, and government tenders.",
    ],
    eligibility: [
      "Minimum 2 directors (at least one director must be a resident of India who stayed in India for ≥ 182 days in the previous financial year).",
      "Minimum 2 shareholders (can be the same as directors; maximum 200 shareholders).",
      "No statutory minimum paid-up capital requirement (authorised capital is typically set at ₹1,00,000 or above).",
      "A valid registered office address in India with utility bill and owner NOC.",
    ],
    documentsRequired: [
      "PAN Card copy of all proposed directors and shareholders.",
      "Identity Proof: Aadhaar Card / Passport / Voter ID / Driving Licence.",
      "Address Proof: Recent Bank Statement / Electricity Bill / Telephone Bill (not older than 2 months).",
      "Passport-sized photograph of all directors.",
      "Registered Office Proof: Electricity Bill / Water Bill / Gas Bill of the premises (not older than 2 months).",
      "NOC (No Objection Certificate) from the property owner and Rent Agreement (if rented).",
    ],
    processSteps: [
      {
        title: "1. Consultation & Document Verification",
        description: "Our consulting team reviews the proposed company name, business objects, director documents, and registered office proofs for compliance.",
      },
      {
        title: "2. Digital Signature Certificate (DSC)",
        description: "Assistance in securing Class 3 Digital Signatures for proposed directors to enable electronic verification on the MCA portal.",
      },
      {
        title: "3. Name Reservation (SPICe+ Part A)",
        description: "Filing the proposed corporate names with the Ministry of Corporate Affairs through the RUN/SPICe+ service to secure approval.",
      },
      {
        title: "4. Incorporation Filing (SPICe+ Part B, eMOA, eAOA, AGILE-PRO)",
        description: "Drafting the Memorandum and Articles of Association, along with integrated applications for PAN, TAN, EPFO, ESIC, and bank account opening.",
      },
      {
        title: "5. Certificate of Incorporation & Post-Setup Guidance",
        description: "Issuance of CIN (Corporate Identity Number), PAN, TAN, and guidance on mandatory Form INC-20A (Commencement of Business) filing.",
      },
    ],
    deliverables: [
      "Certificate of Incorporation (COI) issued by the Ministry of Corporate Affairs.",
      "Corporate Identity Number (CIN).",
      "Permanent Account Number (PAN) & Tax Deduction Account Number (TAN) for the company.",
      "Electronic Memorandum of Association (eMOA) and Articles of Association (eAOA).",
      "Class 3 Digital Signature Certificates (DSC) for directors.",
      "Director Identification Numbers (DIN) for registered directors.",
      "Post-incorporation compliance calendar outlining statutory milestones.",
    ],
    govtFeesNote: "MCA statutory filing fees and stamp duties vary depending on authorized capital and the specific state of the registered office. In many states, MCA fee for SPICe+ filing up to ₹15 Lakh nominal capital is zero, with only state stamp duty applicable.",
    corpunexFeeNote: "Corpunex professional consulting and documentation fees are communicated transparently based on the number of directors, name reservation requirements, and post-incorporation advisory needs. Request a quotation to receive an itemized proposal.",
    timelineNote: "Typically 7 to 14 business days from complete document submission, subject to MCA portal processing speeds and name approval turnaround.",
    faqs: [
      {
        question: "Can a salaried individual become a director in a Private Limited Company?",
        answer: "Legally, the Companies Act does not prohibit a salaried employee from becoming a director. However, you must review your employment contract with your current employer to verify whether outside directorships or commercial engagements require prior written employer consent.",
      },
      {
        question: "Is a physical commercial office mandatory for company registration?",
        answer: "No. A residential address (such as your home or rented apartment) can be used as the registered office of the company, provided you have a valid utility bill and an NOC from the property owner.",
      },
      {
        question: "What is Form INC-20A and why is it important?",
        answer: "Form INC-20A is the Declaration of Commencement of Business. It is mandatory for all companies incorporated after November 2018 to file this within 180 days of incorporation, confirming that shareholders have deposited their subscribed capital into the company bank account.",
      },
    ],
    relatedServices: [
      { title: "Limited Liability Partnership (LLP)", slug: "llp-registration", categorySlug: "business-registration" },
      { title: "Startup India Recognition", slug: "startup-india-recognition", categorySlug: "startup-services" },
      { title: "Annual ROC Compliance", slug: "annual-roc-compliance", categorySlug: "corporate-compliance" },
    ],
  },

  "llp-registration": {
    slug: "llp-registration",
    title: "Limited Liability Partnership (LLP) Registration",
    categorySlug: "business-registration",
    categoryName: "Business Registration",
    tagline: "Combines the flexibility of a partnership with the legal protection of limited liability.",
    summary: "A Limited Liability Partnership (LLP) is governed by the Limited Liability Partnership Act, 2008. It is an ideal business vehicle for professional service firms, consultancies, family businesses, and boot-strapped ventures who seek limited liability without the stringent compliance requirements of a private limited company.",
    whoNeedsIt: [
      "Professional service providers (IT consultancies, design studios, law and accounting practices).",
      "Partners seeking limited liability where one partner is not liable for another partner's negligence.",
      "Ventures that do not plan on raising external venture capital in the immediate term.",
      "Businesses seeking operational flexibility with an internally agreed Partnership Deed.",
    ],
    whyRequired: [
      "Provides separate legal personality from its partners.",
      "No mandatory statutory audit unless turnover exceeds ₹40 Lakhs or capital contribution exceeds ₹25 Lakhs.",
      "No dividend distribution tax or restrictive board meeting procedural requirements.",
      "Significantly lower annual statutory maintenance costs compared to a private limited entity.",
    ],
    eligibility: [
      "Minimum 2 designated partners (individuals or bodies corporate).",
      "At least one designated partner must be a resident in India.",
      "All designated partners must possess a DPIN (Designated Partner Identification Number).",
      "A registered office address within India.",
    ],
    documentsRequired: [
      "PAN Card copy of all designated partners.",
      "Identity Proof: Aadhaar Card / Passport / Voter ID / Driving Licence.",
      "Address Proof: Recent Bank Statement / Utility Bill (less than 2 months old).",
      "Registered Office Address Proof: Electricity Bill / Rent Agreement with owner NOC.",
      "Passport size photographs of partners.",
    ],
    processSteps: [
      {
        title: "1. Documentation & DSC Procurement",
        description: "Verification of partner KYC documents and issuance of Class 3 Digital Signature Certificates.",
      },
      {
        title: "2. Name Reservation (RUN-LLP)",
        description: "Checking availability and reserving the proposed LLP name with the Ministry of Corporate Affairs.",
      },
      {
        title: "3. Incorporation Filing (FiLLiP Form)",
        description: "Electronic submission of the incorporation form along with partner consent and registered office proofs.",
      },
      {
        title: "4. Certificate of Incorporation & PAN/TAN",
        description: "Issuance of the LLP Identification Number (LLPIN) and official incorporation certificate.",
      },
      {
        title: "5. Drafting & Filing of LLP Agreement (Form 3)",
        description: "Custom drafting of the mutual partnership agreement, payment of state stamp duty, and statutory filing within 30 days of incorporation.",
      },
    ],
    deliverables: [
      "Certificate of Incorporation with LLPIN from the Registrar of Companies.",
      "PAN and TAN of the LLP.",
      "Class 3 Digital Signatures for designated partners.",
      "Custom-drafted and stamped LLP Agreement registered with the ROC (Form 3).",
      "Compliance guide outlining Form 11 and Form 8 filing deadlines.",
    ],
    govtFeesNote: "Statutory fees for FiLLiP and Form 3 depend on the total capital contribution of the LLP. State stamp duty on the LLP Agreement varies widely by state (from ₹500 to ₹5,000+ depending on state stamp schedules).",
    corpunexFeeNote: "Corpunex provides clear, transparent consulting proposals covering DSC, name reservation, incorporation facilitation, and custom agreement drafting.",
    timelineNote: "Typically 10 to 15 business days, including the drafting and submission of the mandatory LLP Agreement.",
    faqs: [
      {
        question: "Can an LLP raise venture capital or angel funding like a Private Limited Company?",
        answer: "Most institutional venture capital funds prefer investing in Private Limited Companies because equity shares can be allotted, transferred, and governed by standard investor rights (ESOPs, liquidation preferences, voting classes). LLPs are generally not suited for VC funding.",
      },
      {
        question: "What happens if the LLP Agreement is not filed within 30 days?",
        answer: "Failure to file Form 3 within 30 days of incorporation incurs statutory penalties of ₹100 per day of delay under MCA rules. Corpunex ensures the agreement is prepared and filed well within the statutory deadline.",
      },
    ],
    relatedServices: [
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
      { title: "Annual ROC Compliance", slug: "annual-roc-compliance", categorySlug: "corporate-compliance" },
    ],
  },

  "one-person-company": {
    slug: "one-person-company",
    title: "One Person Company (OPC) Registration",
    categorySlug: "business-registration",
    categoryName: "Business Registration",
    tagline: "Corporate identity and limited liability designed for solo entrepreneurs.",
    summary: "Introduced under the Companies Act, 2013, a One Person Company (OPC) enables a single founder to create a full-fledged corporate entity with 100% ownership, limited liability, and separate legal identity, without needing a co-founder or dummy shareholder.",
    whoNeedsIt: [
      "Solo entrepreneurs, independent consultants, and proprietary software developers.",
      "Founders who want to build corporate credibility under their own sole direction.",
      "Business owners upgrading from a sole proprietorship to a corporate entity.",
    ],
    whyRequired: [
      "Shields the founder's personal wealth and assets from company liabilities.",
      "Allows sole decision-making without holding formal shareholder general meetings.",
      "Separate legal entity status makes contracting with enterprise clients seamless.",
    ],
    eligibility: [
      "Only a natural person who is an Indian citizen is eligible to incorporate an OPC.",
      "The sole promoter must nominate a Nominee Director with written consent.",
      "A person can only incorporate one OPC and act as a nominee in one OPC.",
    ],
    documentsRequired: [
      "PAN Card and Aadhaar Card of the Founder and Nominee.",
      "Identity Proof (Passport/Voter ID/Driving Licence) and Address Proof (Bank Statement).",
      "Nominee consent in Form INC-3.",
      "Registered office electricity bill and owner NOC.",
    ],
    processSteps: [
      { title: "1. KYC Verification & DSC", description: "Class 3 DSC procurement for the sole founder." },
      { title: "2. Name Approval & Nominee Consent", description: "Submission of name reservation and INC-3 nominee details." },
      { title: "3. SPICe+ Filing", description: "Submission of incorporation forms, MOA, AOA, and PAN/TAN applications." },
      { title: "4. Certificate of Incorporation", description: "Receipt of COI and opening of bank account." },
    ],
    deliverables: [
      "Certificate of Incorporation with CIN.",
      "PAN, TAN, eMOA, and eAOA.",
      "DSC Token and Nominee documentation record.",
    ],
    govtFeesNote: "MCA fees for nominal capital up to ₹15 Lakhs are exempt, with state stamp duty applicable.",
    corpunexFeeNote: "Transparent consulting fee quote provided based on state and documentation scope.",
    timelineNote: "7 to 12 business days.",
    faqs: [
      {
        question: "Can an OPC convert into a Private Limited Company later?",
        answer: "Yes. An OPC can voluntarily convert into a Private Limited Company or Public Company at any time by increasing the number of directors and shareholders to the statutory minimums.",
      },
    ],
    relatedServices: [
      { title: "Private Limited Company", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "Trademark Registration", slug: "trademark-registration", categorySlug: "trademark-ip" },
    ],
  },

  "sole-proprietorship": {
    slug: "sole-proprietorship",
    title: "Sole Proprietorship Setup Assistance",
    categorySlug: "business-registration",
    categoryName: "Business Registration",
    tagline: "The simplest, fastest way for individual merchants and freelancers to establish a business identity.",
    summary: "A Sole Proprietorship is an unincorporated business owned and operated by a single individual. In India, there is no single certificate called a 'Proprietorship Registration'; instead, legitimacy is established through statutory registrations such as Udyam (MSME), GST, and Shops & Establishments, enabling you to open a current bank account in the business trade name.",
    whoNeedsIt: [
      "Independent freelancers, traders, local retailers, and boutique service providers.",
      "Ventures testing market viability before committing to corporate incorporation costs.",
    ],
    whyRequired: [
      "Mandatory requirement by Indian commercial banks to open a Current Account in the trade name.",
      "Establishes official business existence under tax and municipal authorities.",
      "Minimal compliance and zero statutory audit for basic turnover limits.",
    ],
    eligibility: [
      "Indian citizen with valid PAN and Aadhaar linked to mobile.",
      "A commercial or home office operating address.",
    ],
    documentsRequired: [
      "PAN Card and Aadhaar Card of the proprietor.",
      "Bank Account details (Savings account statement or cancelled cheque).",
      "Address proof of business premise (Electricity bill, Rent agreement, or Property tax receipt).",
    ],
    processSteps: [
      { title: "1. Business Name & Scope Review", description: "Validating that the trade name does not conflict with registered trademarks." },
      { title: "2. Udyam MSME Registration", description: "Filing and obtaining the official Udyam certificate." },
      { title: "3. GST / Shop Act Assistance", description: "Filing for GST or state Shops and Establishments registration depending on business turnover." },
      { title: "4. Current Account Dossier", description: "Compiling statutory registration documents for bank current account opening." },
    ],
    deliverables: [
      "Official Udyam Registration Certificate.",
      "GST Certificate (if turnover threshold is reached or voluntary registration requested).",
      "Bank Current Account Documentation kit.",
    ],
    govtFeesNote: "Udyam registration is free of government fees. Municipal and GST registrations carry statutory fee schedules depending on jurisdiction.",
    corpunexFeeNote: "Affordable facilitation fees for consulting and document preparation.",
    timelineNote: "3 to 5 business days.",
    faqs: [
      {
        question: "Is personal liability protected in a proprietorship?",
        answer: "No. In a sole proprietorship, there is no legal distinction between the owner and the business. The owner is personally liable for all business debts and obligations.",
      },
    ],
    relatedServices: [
      { title: "Udyam / MSME Registration", slug: "udyam-msme-registration", categorySlug: "startup-services" },
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
    ],
  },

  "startup-india-recognition": {
    slug: "startup-india-recognition",
    title: "Startup India Recognition Assistance",
    categorySlug: "startup-services",
    categoryName: "Startup Registration and Support",
    tagline: "Formal DPIIT recognition unlocking income tax exemptions, patent rebates, and government tender benefits.",
    summary: "The Startup India initiative by the Government of India provides certified startups with significant regulatory and tax advantages. Corpunex assists eligible Private Limited Companies and LLPs in preparing their innovation dossiers, pitch notes, and Department for Promotion of Industry and Internal Trade (DPIIT) applications.",
    whoNeedsIt: [
      "Incorporated Private Limited Companies and LLPs under 10 years old.",
      "Businesses working towards innovation, development, or commercialization of new products or services.",
      "Ventures with scalable business models and high potential for employment generation or wealth creation.",
    ],
    whyRequired: [
      "Eligibility to apply for Section 80-IAC three-year income tax exemption (for eligible entities).",
      "Exemption from Angel Tax under Section 56(2)(viib) of the Income Tax Act.",
      "Up to 80% rebate on patent filing fees and 50% rebate on trademark government fees.",
      "Exemption from prior turnover and experience criteria in public procurement tenders.",
    ],
    eligibility: [
      "Registered as a Private Limited Company, Partnership Firm, or LLP.",
      "Incorporated within the last 10 years.",
      "Turnover has not exceeded ₹100 Crores in any financial year since incorporation.",
      "Entity is working towards innovation, development, or improvement of products/processes, or has a scalable business model.",
      "Entity must not have been formed by splitting up or reconstruction of an existing business.",
    ],
    documentsRequired: [
      "Certificate of Incorporation / Registration Certificate.",
      "Memorandum and Articles of Association (MOA/AOA) or LLP Agreement.",
      "Detailed write-up on innovation, uniqueness, scalability, and problem solved.",
      "Pitch Deck / Product presentation / Website link / Mobile application link.",
      "Proof of funds, awards, patents, or customer traction (if available).",
    ],
    processSteps: [
      {
        title: "1. Eligibility Audit & Innovation Review",
        description: "Assessing your business model against DPIIT's core innovation criteria and guidelines.",
      },
      {
        title: "2. Application Drafting & Narrative Structuring",
        description: "Structuring the product uniqueness, scalability thesis, and employment generation potential in the required government format.",
      },
      {
        title: "3. Portal Submission & Verification",
        description: "Filing the official recognition application on the National Single Window / Startup India portal.",
      },
      {
        title: "4. Clarification Response (if queried)",
        description: "Drafting responses to any queries raised by the DPIIT scrutiny committee.",
      },
      {
        title: "5. Certificate Issuance & Scheme Roadmap",
        description: "Receiving the Startup India Certificate and advising on subsequent 80-IAC and Seed Fund opportunities.",
      },
    ],
    deliverables: [
      "Official DPIIT Startup Recognition Certificate with DIPP registration number.",
      "Startup India portal profile activation.",
      "Advisory note on accessing patent fee rebates and GeM (Government e-Marketplace) exemptions.",
    ],
    govtFeesNote: "The Government of India does not charge an official government fee for DPIIT Startup Recognition.",
    corpunexFeeNote: "Corpunex charges a consulting and documentation fee for reviewing business models, drafting narratives, and handling query resolutions.",
    timelineNote: "Typically 5 to 10 working days from submission, subject to DPIIT board review schedules.",
    faqs: [
      {
        question: "Does DPIIT recognition automatically grant a 3-year tax holiday?",
        answer: "No. DPIIT recognition is the first mandatory step. To receive the 3-year tax holiday under Section 80-IAC, an incorporated Private Limited Company or LLP must submit a separate application to the Inter-Ministerial Board (IMB) for certification.",
      },
      {
        question: "Can a Sole Proprietorship apply for Startup India recognition?",
        answer: "No. According to government guidelines, only Private Limited Companies, Registered Partnership Firms, and LLPs are eligible for DPIIT recognition.",
      },
    ],
    relatedServices: [
      { title: "Startup Odisha Assistance", slug: "startup-odisha", categorySlug: "startup-services" },
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "Trademark Registration", slug: "trademark-registration", categorySlug: "trademark-ip" },
    ],
  },

  "startup-odisha": {
    slug: "startup-odisha",
    title: "Startup Odisha Programme Assistance",
    categorySlug: "startup-services",
    categoryName: "Startup Registration and Support",
    tagline: "Access grants, monthly sustenance allowances, and incubator infrastructure in Odisha.",
    summary: "The State of Odisha offers one of India's most proactive startup policies through Startup Odisha (MSME Department). Corpunex, rooted with dedicated regional insight, assists Odisha-based startups with registration, grant application readiness, and compliance with the Odisha Startup Policy.",
    whoNeedsIt: [
      "Innovative startups registered or operating in the state of Odisha.",
      "Founders seeking monthly sustenance allowance (₹20,000/month for general founders, ₹22,000/month for women/transgender/SC/ST/SEBC founders).",
      "Ventures seeking Product Development and Marketing Assistance grants (up to ₹16 Lakhs).",
    ],
    whyRequired: [
      "Financial assistance for early-stage prototype development and testing.",
      "Subsidized co-working space and access to premier incubators (O-Hub, KIIT-TBI, IIT Bhubaneswar).",
      "Direct exposure to state procurement and investor showcases.",
    ],
    eligibility: [
      "Registered entity in Odisha or having at least 50% of registered workforce employed in Odisha.",
      "Hold a valid DPIIT Startup India Certificate.",
      "Entity must be less than 10 years old with turnover below ₹100 Crores.",
    ],
    documentsRequired: [
      "DPIIT Certificate of Recognition.",
      "Certificate of Incorporation / Registration and PAN.",
      "Brief Project Report & Pitch Deck outlining product innovation.",
      "Proof of Registered Office / Operation in Odisha (Electricity Bill, Rent Agreement, Trade Licence).",
      "Founders' KYC including Odisha domicile proof where applicable.",
    ],
    processSteps: [
      { title: "1. DPIIT Prerequisites Verification", description: "Ensuring central DPIIT registration is active and compliant." },
      { title: "2. Startup Odisha Portal Enrolment", description: "Submitting entity details, business pitch, and documentation on the state portal." },
      { title: "3. Scrutiny & Committee Presentation Guidance", description: "Preparing founders for technical and committee presentations." },
      { title: "4. Grant Application Advisory", description: "Guidance on subsequent claims for monthly sustenance or product development grants." },
    ],
    deliverables: [
      "Startup Odisha Recognition Certificate.",
      "Access to Startup Odisha ecosystem benefits and incubator network.",
      "Guidance document on submitting grant reimbursement vouchers.",
    ],
    govtFeesNote: "Zero official government fees charged by Startup Odisha.",
    corpunexFeeNote: "Corpunex professional consulting and application facilitation proposal.",
    timelineNote: "15 to 30 business days depending on state task force committee review cycles.",
    faqs: [
      {
        question: "Can an entity registered outside Odisha benefit from Startup Odisha?",
        answer: "If your registered office is outside Odisha, you can qualify if you have an operational branch in Odisha and at least 50% of your qualified workforce is stationed and employed within the state of Odisha.",
      },
    ],
    relatedServices: [
      { title: "Startup India Recognition", slug: "startup-india-recognition", categorySlug: "startup-services" },
      { title: "Udyam / MSME Registration", slug: "udyam-msme-registration", categorySlug: "startup-services" },
    ],
  },

  "udyam-msme-registration": {
    slug: "udyam-msme-registration",
    title: "Udyam / MSME Registration",
    categorySlug: "startup-services",
    categoryName: "Startup Registration and Support",
    tagline: "Official Ministry of MSME registration for priority credit, lower interest rates, and legal payment protection.",
    summary: "Udyam Registration is the official government portal for micro, small, and medium enterprises in India. Obtaining an Udyam certificate is indispensable for commercial bank lending under priority sector quotas, statutory interest on delayed payments under the MSMED Act, and government subsidies.",
    whoNeedsIt: [
      "Micro, small, and medium enterprises across manufacturing and service sectors.",
      "Proprietorships, partnerships, LLPs, and private limited companies operating in India.",
    ],
    whyRequired: [
      "Collateral-free bank loans under Credit Guarantee Trust Fund (CGTMSE).",
      "Protection against delayed payments (buyers must pay within 45 days, or statutory compounding interest applies).",
      "Concession on electricity bills, ISO certification reimbursement, and trademark fee rebates.",
    ],
    eligibility: [
      "Micro Enterprise: Investment ≤ ₹1 Crore and Turnover ≤ ₹5 Crores.",
      "Small Enterprise: Investment ≤ ₹10 Crores and Turnover ≤ ₹50 Crores.",
      "Medium Enterprise: Investment ≤ ₹50 Crores and Turnover ≤ ₹250 Crores.",
    ],
    documentsRequired: [
      "Aadhaar Card of the proprietor, partner, or authorized director.",
      "PAN Card of the enterprise.",
      "GSTIN (if applicable under turnover rules).",
      "Bank Account details (Account Number and IFSC Code).",
    ],
    processSteps: [
      { title: "1. Data Validation", description: "Verification of PAN, Aadhaar linking, and business activity NIC codes." },
      { title: "2. Online Submission", description: "Filing investment, plant & machinery, and turnover disclosures on the Udyam portal." },
      { title: "3. Certificate Retrieval", description: "Generation of the permanent Udyam Registration Number (URN) with QR code." },
    ],
    deliverables: [
      "Official Udyam Registration Certificate with lifetime validity.",
      "Applicable MSME category classification (Micro/Small/Medium).",
    ],
    govtFeesNote: "The Ministry of MSME does not charge any government fee for Udyam Registration.",
    corpunexFeeNote: "Nominal documentation and verification facilitation fee.",
    timelineNote: "1 to 3 business days.",
    faqs: [
      {
        question: "Does an Udyam certificate need annual renewal?",
        answer: "No. Udyam Registration provides a permanent lifetime identification number. However, enterprise turnover and investment details are auto-updated annually through the Income Tax and GST database integrations.",
      },
    ],
    relatedServices: [
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
      { title: "FSSAI Licence", slug: "fssai-licence", categorySlug: "licences-registrations" },
    ],
  },

  "gst-registration": {
    slug: "gst-registration",
    title: "GST Registration",
    categorySlug: "gst-taxation",
    categoryName: "GST and Taxation",
    tagline: "Obtain your 15-digit GSTIN for lawful inter-state commerce, e-commerce selling, and input tax credit.",
    summary: "Goods and Services Tax (GST) is India's unified indirect taxation system. Whether you have crossed the statutory turnover threshold or require voluntary registration for inter-state supply, export of services, or e-commerce participation, Corpunex facilitates jurisdiction-verified GST applications with biometric Aadhaar authentication support.",
    whoNeedsIt: [
      "Businesses with aggregate turnover exceeding statutory limits (₹40 Lakhs for goods, ₹20 Lakhs for services in standard states; ₹20L/₹10L in special category states).",
      "Any business engaged in inter-state taxable supply of goods or services.",
      "E-commerce sellers selling goods or services through marketplace platforms.",
      "Exporters of software, IT services, or consulting requiring zero-rated supply with LUT.",
    ],
    whyRequired: [
      "Mandatory under the Central Goods and Services Tax Act, 2017.",
      "Enables claiming of Input Tax Credit (ITC) on commercial purchases and capital assets.",
      "Allows opening of institutional merchant accounts, payment gateways, and vendor onboarding.",
    ],
    eligibility: [
      "Operating business entity (Proprietorship, Partnership, LLP, or Company).",
      "Valid PAN card and operational address proof.",
      "Aadhaar-authenticated authorized signatory.",
    ],
    documentsRequired: [
      "PAN Card of the applicant or entity.",
      "Aadhaar Card and photograph of promoter/partners/directors.",
      "Business premise proof: Electricity Bill / Municipal tax receipt with Rent Agreement and owner NOC.",
      "Bank Account proof: Cancelled Cheque / Bank Statement with name and IFSC.",
      "Authorization Letter / Board Resolution appointing the authorized signatory.",
    ],
    processSteps: [
      { title: "1. Pre-filing Verification", description: "Reviewing jurisdiction (Centre/State ward) and HSN/SAC code selection." },
      { title: "2. Form GST REG-01 Filing", description: "Submission of Part A & Part B on the GST portal." },
      { title: "3. Aadhaar Biometric Authentication", description: "Electronic Aadhaar OTP verification or biometric verification at GST Suvidha Kendra." },
      { title: "4. Clarification Management (REG-03)", description: "Responding to officer queries or additional document notices if issued." },
      { title: "5. Certificate Grant (REG-06)", description: "Issuance of 15-digit GSTIN certificate and initial login setup." },
    ],
    deliverables: [
      "GST Registration Certificate (Form GST REG-06).",
      "15-digit GSTIN and jurisdiction details.",
      "Initial login credentials setup and compliance guidelines for GSTR-1 and GSTR-3B.",
    ],
    govtFeesNote: "There is zero official government fee for GST registration on the GST portal.",
    corpunexFeeNote: "Professional facilitation fee communicated transparently prior to engagement.",
    timelineNote: "Typically 5 to 7 working days, subject to Aadhaar authentication and tax officer jurisdiction approvals.",
    faqs: [
      {
        question: "Can I register for GST voluntarily if my turnover is below ₹20 Lakhs?",
        answer: "Yes. Voluntary GST registration is permitted and widely adopted by B2B service firms and exporters to claim input tax credit on purchases and establish vendor credibility.",
      },
      {
        question: "What happens if a show cause notice (REG-03) is issued?",
        answer: "If the tax officer seeks clarifications regarding premise ownership or HSN codes, Corpunex drafts and files a comprehensive reply in Form GST REG-04 within the 7-day statutory window.",
      },
    ],
    relatedServices: [
      { title: "Income Tax Filing", slug: "income-tax-filing", categorySlug: "gst-taxation" },
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "Import Export Code (IEC)", slug: "import-export-code", categorySlug: "licences-registrations" },
    ],
  },

  "income-tax-filing": {
    slug: "income-tax-filing",
    title: "Income Tax Return (ITR) Filing",
    categorySlug: "gst-taxation",
    categoryName: "GST and Taxation",
    tagline: "Accurate statutory direct tax filings for corporate entities, LLPs, and individual professionals.",
    summary: "Filing your annual Income Tax Return is a non-negotiable legal obligation under the Income Tax Act, 1961. Corpunex coordinates with certified Chartered Accountants to verify deductions, calculate advance taxes, review 26AS/AIS/TIS reports, and file compliant ITR forms (ITR-3, ITR-4, ITR-5, ITR-6) avoiding penalties and scrutiny notices.",
    whoNeedsIt: [
      "All registered Private Limited Companies (ITR-6) and LLPs (ITR-5), regardless of profit or loss.",
      "Sole Proprietors and professionals (ITR-3 / ITR-4 presumptive taxation under 44AD/44ADA).",
      "Directors and shareholders with dividend incomes, capital gains, or foreign assets.",
    ],
    whyRequired: [
      "Mandatory statutory compliance under Section 139 of the Income Tax Act.",
      "Carrying forward commercial business losses and unabsorbed depreciation to offset future profits.",
      "Essential credential for bank loan approvals, credit lines, and tender participations.",
      "Prevents late filing fees under Section 234F and interest charges under 234A/B/C.",
    ],
    eligibility: [
      "Every company and LLP must file an ITR even if there was zero revenue.",
      "Individuals whose gross total income exceeds basic exemption limits.",
    ],
    documentsRequired: [
      "Audited or provisional Balance Sheet and Profit & Loss statement.",
      "Form 26AS, Annual Information Statement (AIS), and Taxpayer Information Summary (TIS).",
      "Bank Account statements for the relevant financial year.",
      "TDS certificates (Form 16 / 16A) and advance tax payment challans.",
      "Details of foreign assets or directorships in Indian/foreign companies.",
    ],
    processSteps: [
      { title: "1. Financial Review & Ledger Scrutiny", description: "Reviewing accounting books and cross-matching with AIS/TIS and 26AS data." },
      { title: "2. Tax Computation", description: "Calculating taxable income, allowable deductions, and net tax liability." },
      { title: "3. CA Review & Sign-off", description: "Review conducted by certified Chartered Accountants." },
      { title: "4. E-Filing on IT Portal", description: "Generating JSON utility and submitting the return before statutory deadlines." },
      { title: "5. E-Verification (ITR-V)", description: "Completing DSC or Aadhaar OTP verification to obtain the final acknowledgment." },
    ],
    deliverables: [
      "Income Tax Return Acknowledgment (ITR-V).",
      "Detailed Computation of Total Income sheet.",
      "Tax audit report references (where statutory audit under 44AB applies).",
    ],
    govtFeesNote: "Taxes payable depend on computed taxable income. Late filing fees under Section 234F (up to ₹5,000) apply if filed past deadline.",
    corpunexFeeNote: "Itemized consulting fee based on entity structure, complexity of ledgers, and audit coordination requirements.",
    timelineNote: "3 to 7 business days from submission of complete financial statements.",
    faqs: [
      {
        question: "Is ITR filing mandatory for a dormant company with no revenue?",
        answer: "Yes. For Private Limited Companies and LLPs, filing an annual Income Tax Return is mandatory under law, even if the enterprise recorded zero business transactions or sustained losses.",
      },
    ],
    relatedServices: [
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
      { title: "Annual ROC Compliance", slug: "annual-roc-compliance", categorySlug: "corporate-compliance" },
    ],
  },

  "fssai-licence": {
    slug: "fssai-licence",
    title: "FSSAI Food Safety Licence & Registration",
    categorySlug: "licences-registrations",
    categoryName: "Business Licences and Registrations",
    tagline: "14-digit food safety licence for manufacturers, cloud kitchens, restaurants, and food traders.",
    summary: "Operating any food-related commercial venture in India without a Food Safety and Standards Authority of India (FSSAI) licence is a penal offence under the FSS Act, 2006. Corpunex guides food business operators (FBOs) in identifying the appropriate licence category (Basic Registration, State Licence, or Central Licence) and preparing compliant food safety documentation.",
    whoNeedsIt: [
      "Restaurants, cafes, bakeries, cloud kitchens, and catering units.",
      "Food manufacturers, re-packers, food processors, and cold storage operators.",
      "E-commerce food aggregators and online food delivery stores.",
      "Importers and exporters of food products.",
    ],
    whyRequired: [
      "Mandatory legal prerequisite before commercial commencement of food operations.",
      "Required for onboarding onto food delivery platforms (Zomato, Swiggy, Blinkit, Zepto).",
      "Builds consumer trust by displaying the 14-digit FSSAI licence and logo on packaging.",
    ],
    eligibility: [
      "Basic FSSAI Registration: Petty food businesses with annual turnover under ₹12 Lakhs.",
      "State FSSAI Licence: Food businesses with annual turnover between ₹12 Lakhs and ₹20 Crores.",
      "Central FSSAI Licence: Large manufacturers (turnover > ₹20 Crores), importers, 100% EOUs, or multi-state chains.",
    ],
    documentsRequired: [
      "Photo ID and address proof of the proprietor/partners/directors.",
      "Premise proof (Rent agreement, utility bill, owner NOC).",
      "List of food products / categories to be handled.",
      "Blueprint / layout plan of processing unit (for manufacturers).",
      "Water testing report from a recognized laboratory (for beverage and manufacturing units).",
    ],
    processSteps: [
      { title: "1. Categorization Audit", description: "Evaluating installed capacity and turnover to determine Basic, State, or Central tier." },
      { title: "2. FoSCoS Portal Submission", description: "Submitting Form A or Form B on the Food Safety Compliance System." },
      { title: "3. Scrutiny & Inspection Coordination", description: "Tracking scrutiny by Food Safety Officers and handling clarifications." },
      { title: "4. Licence Grant", description: "Issuance of 14-digit FSSAI certificate with chosen validity (1 to 5 years)." },
    ],
    deliverables: [
      "FSSAI Certificate with unique 14-digit Registration / Licence Number.",
      "FoSCoS account credentials for annual return filings.",
    ],
    govtFeesNote: "Official statutory fees range from ₹100/year for Basic Registration to ₹2,000-₹5,000/year for State Licences, and ₹7,500/year for Central Licences.",
    corpunexFeeNote: "Transparent professional consulting fee covering document preparation and inspection assistance.",
    timelineNote: "Basic: 5 to 10 days; State/Central: 15 to 30 days depending on local municipal inspection.",
    faqs: [
      {
        question: "Can I sell homemade packaged food online without FSSAI?",
        answer: "No. Selling homemade food commercially or through digital platforms requires at least a Basic FSSAI Registration.",
      },
    ],
    relatedServices: [
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
      { title: "Trademark Registration", slug: "trademark-registration", categorySlug: "trademark-ip" },
    ],
  },

  "import-export-code": {
    slug: "import-export-code",
    title: "Import Export Code (IEC) Assistance",
    categorySlug: "licences-registrations",
    categoryName: "Business Licences and Registrations",
    tagline: "Essential 10-character DGFT registration to import and export goods and services from India.",
    summary: "The Import Export Code (IEC) is issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. It is a lifetime business identifier required by Indian customs authorities for goods clearance and by commercial banks to process foreign currency remittances.",
    whoNeedsIt: [
      "Merchants and manufacturers importing raw materials or exporting finished products.",
      "Software companies, digital agencies, and consultants invoicing overseas clients in foreign currencies.",
      "Drop-shippers and international e-commerce sellers.",
    ],
    whyRequired: [
      "Mandatory requirement under foreign trade policies for customs clearance in India.",
      "Required by authorized foreign exchange dealer banks to process inward inward remittances (FIRC/e-BRC).",
      "Enables eligibility for DGFT export incentive schemes such as RoDTEP.",
    ],
    eligibility: [
      "Any legal entity (Proprietorship, Partnership, LLP, Company) with a valid PAN and bank account.",
    ],
    documentsRequired: [
      "PAN Card copy of the business entity / proprietor.",
      "Cancelled Cheque or Bank Certificate with entity name, account number, and IFSC.",
      "Proof of business address (Electricity bill, Rent agreement, or Property Deed).",
      "Class 3 Digital Signature Certificate or Aadhaar OTP of authorized signatory.",
    ],
    processSteps: [
      { title: "1. Document Compilation", description: "Validating bank proof details and ensuring exact PAN match." },
      { title: "2. DGFT Portal Submission", description: "Electronic filing of the ANF 2A application on the DGFT portal." },
      { title: "3. Online Fee Payment", description: "Payment of the statutory DGFT government fee." },
      { title: "4. Instant IEC Generation", description: "System generation of the official e-IEC certificate with QR code." },
    ],
    deliverables: [
      "Official DGFT e-IEC Certificate.",
      "DGFT user credentials for mandatory annual re-validation.",
    ],
    govtFeesNote: "Statutory DGFT application fee is ₹500.",
    corpunexFeeNote: "Modest professional consulting and documentation assistance fee.",
    timelineNote: "1 to 2 business days.",
    faqs: [
      {
        question: "Does an IEC need to be renewed every year?",
        answer: "Yes, under DGFT rules, all IEC holders must electronically update and validate their IEC details annually between April and June, even if there are no changes.",
      },
    ],
    relatedServices: [
      { title: "GST Registration", slug: "gst-registration", categorySlug: "gst-taxation" },
      { title: "Trademark Registration", slug: "trademark-registration", categorySlug: "trademark-ip" },
    ],
  },

  "trademark-registration": {
    slug: "trademark-registration",
    title: "Trademark Registration",
    categorySlug: "trademark-ip",
    categoryName: "Trademark and Intellectual Property",
    tagline: "Secure exclusive legal ownership of your brand name, logo, and slogan across India.",
    summary: "Your brand is your enterprise's most valuable intellectual asset. Registering a trademark under the Trade Marks Act, 1999 gives you exclusive commercial rights to use your brand name, prevents competitors from confusing your customers, and allows you to display the prestigious ™ immediately after filing and ® upon registration.",
    whoNeedsIt: [
      "Startups and established businesses launching a distinct brand name, logo, or tagline.",
      "Direct-to-consumer (D2C) brands protecting packaging and digital storefront identities.",
      "Software platforms, apps, and SaaS companies safeguarding proprietary product titles.",
      "Sellers on Amazon and Flipkart seeking Brand Registry protection against counterfeiters.",
    ],
    whyRequired: [
      "Gives exclusive nation-wide rights to use the mark in connection with specified goods/services.",
      "Enables legal action against infringement and passing off in civil and criminal courts.",
      "Creates an intangible corporate asset that can be licensed, franchised, or sold for equity valuation.",
    ],
    eligibility: [
      "Individuals, sole proprietors, startups, LLPs, companies, or foreign corporations.",
      "Special 50% government fee concession applies to individuals, startups (DPIIT recognized), and MSMEs (Udyam registered).",
    ],
    documentsRequired: [
      "Brand name, wordmark, or logo in high resolution (JPEG/PNG).",
      "Applicant details: PAN, Aadhaar, Certificate of Incorporation.",
      "Udyam / DPIIT Certificate (to claim the 50% government fee rebate).",
      "Signed Form TM-48 (Power of Attorney authorizing our trademark attorney).",
      "User Affidavit with documentary proof of prior usage (if claiming usage date prior to filing date).",
    ],
    processSteps: [
      { title: "1. Trademark Search & Registrability Analysis", description: "Comprehensive search across all 45 classes to detect phonetic and visual conflicts." },
      { title: "2. Class & Description Classification", description: "Aligning your goods and services precisely with the NICE classification system." },
      { title: "3. Form TM-A Electronic Filing", description: "Filing application with the Trademark Registry; immediate receipt of TM application number." },
      { title: "4. Trademark Examination", description: "Monitoring Registry examination for acceptance or examination report issuance." },
      { title: "5. Journal Publication & Registration", description: "4-month statutory advertisement in Trademark Journal followed by issuance of ® certificate." },
    ],
    deliverables: [
      "Trademark Filing Acknowledgment with official application number.",
      "Right to use the ™ symbol immediately on your marketing assets.",
      "Official Trademark Registration Certificate (Form RG-2) granting the ® symbol valid for 10 years.",
    ],
    govtFeesNote: "Statutory government filing fee is ₹4,500 per class for Individuals / MSMEs / Startups; ₹9,000 per class for non-MSME corporate entities.",
    corpunexFeeNote: "Transparent consulting fee covering search, classification, TM-48 drafting, and filing.",
    timelineNote: "Immediate ™ usage upon filing (24-48 hours). Final registration certificate typically takes 6 to 12 months subject to Registry scrutiny and objections.",
    faqs: [
      {
        question: "When can I legally use the ® symbol?",
        answer: "You can only use the ® (Registered) symbol after the Registrar of Trademarks has formally granted the registration certificate. Using ® before final registration is an offence under Section 107 of the Trade Marks Act. You can, however, use ™ immediately upon filing Form TM-A.",
      },
      {
        question: "What happens if an examination report raises an objection?",
        answer: "Examination objections (commonly under Section 9 or 11) are standard. Corpunex helps review the objection and coordinates with qualified trademark attorneys to draft and submit a legal reply within 30 days.",
      },
    ],
    relatedServices: [
      { title: "Private Limited Company", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "Startup India Recognition", slug: "startup-india-recognition", categorySlug: "startup-services" },
    ],
  },

  "annual-roc-compliance": {
    slug: "annual-roc-compliance",
    title: "Annual ROC Compliance",
    categorySlug: "corporate-compliance",
    categoryName: "Corporate Compliance",
    tagline: "Stay fully compliant with Ministry of Corporate Affairs deadlines and avoid disqualification.",
    summary: "Every company and LLP incorporated in India is legally required to file periodic financial and secretarial returns with the Registrar of Companies (ROC). The MCA enforces stringent penalties of ₹100 per day per form for delayed filings, along with the risk of director disqualification and strike-off. Corpunex helps you maintain immaculate corporate governance.",
    whoNeedsIt: [
      "All active Private Limited Companies, Public Companies, One Person Companies, and LLPs.",
      "Company directors wishing to safeguard their Director Identification Numbers (DIN) from deactivation.",
    ],
    whyRequired: [
      "Mandatory statutory compliance under the Companies Act, 2013 and LLP Act, 2008.",
      "Avoids escalating daily statutory late filing fees of ₹100 per day with no ceiling.",
      "Prevents disqualification of directors under Section 164(2) for default in filing returns for 3 consecutive years.",
      "Essential for investor due diligence, bank loan renewals, and corporate credibility.",
    ],
    eligibility: [
      "All incorporated corporate entities, whether currently operational, dormant, or pre-revenue.",
    ],
    documentsRequired: [
      "Audited Financial Statements (Balance Sheet, Profit & Loss Account with schedules and notes).",
      "Statutory Auditor's Report and Directors' Report.",
      "Notice of Annual General Meeting (AGM) and Shareholder Attendance records.",
      "Class 3 Digital Signatures (DSC) of at least two directors.",
    ],
    processSteps: [
      { title: "1. Compliance Health Check", description: "Reviewing prior MCA records, register of members, and director filings." },
      { title: "2. Board & AGM Documentation", description: "Drafting board resolutions, director reports, and AGM minutes." },
      { title: "3. Form AOC-4 Filing", description: "Filing audited financial statements with the ROC within 30 days of AGM." },
      { title: "4. Form MGT-7/7A Filing", description: "Filing the comprehensive annual return within 60 days of AGM." },
      { title: "5. Director DIR-3 KYC", description: "Filing annual director KYC verification before the September 30 deadline." },
    ],
    deliverables: [
      "ROC filing acknowledgments (SRN challans) for Form AOC-4 and Form MGT-7/7A.",
      "DIR-3 KYC verification acknowledgments for all directors.",
      "Annual secretarial compliance dossier and register maintenance kit.",
    ],
    govtFeesNote: "Statutory ROC filing fees depend on nominal share capital (typically ₹300-₹600 per form for basic capital). Late filing attracts ₹100/day penalty.",
    corpunexFeeNote: "Annual compliance consulting package fee tailored to company size and transaction volume.",
    timelineNote: "Completed across the statutory annual compliance calendar (April to November).",
    faqs: [
      {
        question: "Can annual ROC filing be skipped if the company did not make any profit or sales?",
        answer: "No. The Companies Act does not exempt zero-revenue companies from annual filings. A dormant or inactive company must still prepare financial statements, hold meetings, and file AOC-4 and MGT-7.",
      },
    ],
    relatedServices: [
      { title: "Private Limited Company Registration", slug: "private-limited-company", categorySlug: "business-registration" },
      { title: "Income Tax Filing", slug: "income-tax-filing", categorySlug: "gst-taxation" },
    ],
  },
};
