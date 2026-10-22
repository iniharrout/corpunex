import type { Faq } from "@/components/shared/FaqList";

export interface CityHub {
  slug: string;
  name: string;
  officialName: string;
  state: string;
  region: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  rocName: string;
  rocAddress: string;
  rocJurisdiction: string;
  stampDutyNote: string;
  commercialHubs: string[];
  ecosystemHighlights: string[];
  overview: string;
  whyRegisterHere: string;
  registeredOfficeNote: string;
  faqs: Faq[];
}

export const cities: CityHub[] = [
  {
    slug: "bangalore",
    name: "Bangalore",
    officialName: "Bengaluru",
    state: "Karnataka",
    region: "South India",
    tagline: "India's Startup Capital & Tech Innovation Hub",
    metaTitle: "Company Registration in Bangalore: Pvt Ltd & LLP Setup",
    metaDescription:
      "Register your Private Limited company or LLP in Bangalore with expert CAs & CSs. Fast-track SPICe+ filing with ROC Karnataka, state stamp duty guidance, and local registered office compliance.",
    keywords: [
      "company registration Bangalore",
      "pvt ltd registration Bangalore",
      "register company in Bengaluru",
      "LLP registration Bangalore",
      "ROC Karnataka company setup",
      "startup incorporation Koramangala HSR",
    ],
    rocName: "Registrar of Companies, Karnataka",
    rocAddress: "Kendriya Sadan, 2nd Floor, E Wing, Koramangala, Bengaluru, Karnataka 560034",
    rocJurisdiction: "Entire State of Karnataka (Bengaluru Bench)",
    stampDutyNote:
      "Karnataka levies stamp duty under Article 10 of the Karnataka Stamp Act on Articles of Association (AoA) and Memorandum of Association (MoA). Standard digital e-stamp duty applies during SPICe+ Part B submission.",
    commercialHubs: ["Koramangala", "HSR Layout", "Indiranagar", "Whitefield", "Electronic City", "Bellandur"],
    ecosystemHighlights: [
      "Home to over 40% of India's unicorn startups and early-stage VC funds.",
      "Access to India's deepest engineering, AI, and SaaS founder ecosystem.",
      "Karnataka Startup Policy offers preferential incubation grants and patent subsidies.",
      "Seamless digital GST and PT (Professional Tax) portal integration with MCA SPICe+.",
    ],
    overview:
      "Bangalore (Bengaluru) is the venture capital and technological heart of South Asia. Incorporating a Private Limited company in Bangalore provides instant credibility when pitching to angels, seed syndicates, and institutional venture capital firms across Koramangala and Indiranagar.",
    whyRegisterHere:
      "Founders choose Bangalore because the talent pool and investor density are unmatched. Whether building an enterprise B2B SaaS platform, an AI infrastructure tool, or a consumer fintech app, having your corporate seat registered under ROC Karnataka positions your startup at the centre of global fundraising.",
    registeredOfficeNote:
      "To register your company in Bangalore, MCA requires proof of an official registered office address in Karnataka. This can be a commercial office, coworking space with NOC and utility bill, or even residential premises owned by a director.",
    faqs: [
      {
        question: "Can I register a Bangalore company using a coworking space or virtual office?",
        answer:
          "Yes. ROC Karnataka accepts coworking spaces and virtual offices provided you furnish an official No Objection Certificate (NOC) from the space provider, a valid commercial lease agreement, and a utility bill (electricity or water) dated within the last 2 months.",
      },
      {
        question: "How long does Private Limited company registration take in Bangalore?",
        answer:
          "Usually 7 to 14 working days from the date all documents (PAN, Aadhaar, bank statements, and DSC verification) are signed and submitted to the MCA portal. Approval is granted by the Central Registration Centre (CRC) under ROC Karnataka jurisdiction.",
      },
      {
        question: "Is Professional Tax (PT) registration mandatory for companies in Bangalore?",
        answer:
          "Yes. Under the Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976, every company registered in Karnataka must obtain an Employer PT Registration Certificate within 30 days of hiring employees.",
      },
      {
        question: "Do both directors need to reside in Bangalore?",
        answer:
          "No. Only one director must be an Indian resident (stayed in India for 182+ days in the previous financial year). The second director or shareholders can reside in another Indian state or even abroad as foreign nationals/NRIs.",
      },
    ],
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    officialName: "Mumbai",
    state: "Maharashtra",
    region: "West India",
    tagline: "Financial Capital of India & D2C Hub",
    metaTitle: "Company Registration in Mumbai: Private Limited & LLP",
    metaDescription:
      "Register your Private Limited or LLP company in Mumbai. Experienced Chartered Accountants handling SPICe+ filings with ROC Mumbai, Maharashtra stamp duty, and Shop & Establishment licences.",
    keywords: [
      "company registration Mumbai",
      "pvt ltd company registration Mumbai",
      "LLP registration Mumbai",
      "ROC Mumbai registration",
      "register startup Mumbai BKC Andheri",
      "incorporate business Maharashtra",
    ],
    rocName: "Registrar of Companies, Mumbai",
    rocAddress: "100, Everest Building, Netaji Subhash Road, Marine Drive, Mumbai, Maharashtra 400002",
    rocJurisdiction: "Greater Mumbai, Konkan, and Western Maharashtra",
    stampDutyNote:
      "Maharashtra has specific stamp duty slabs under the Maharashtra Stamp Act for incorporation documents (Articles of Association based on Authorized Share Capital).",
    commercialHubs: ["Bandra Kurla Complex (BKC)", "Lower Parel", "Andheri East", "Powai", "Nariman Point", "Navi Mumbai"],
    ecosystemHighlights: [
      "Direct proximity to India's major banks, NBFCs, SEBI, RBI, and BSE/NSE exchanges.",
      "The hub of Indian FinTech, D2C retail, media production, and cross-border trade.",
      "Fast MCA name clearance and proactive banking integration for current accounts.",
      "Seamless issuance of Maharashtra Gumasta (Shop & Establishment) certificate.",
    ],
    overview:
      "Mumbai is India's commercial powerhouse. Setting up your company in Mumbai gives you immediate access to top financial institutions, high-net-worth individual (HNI) angel investors, and India's most mature commercial legal ecosystem.",
    whyRegisterHere:
      "For fintech startups, investment vehicles, import-export companies, and brand agencies, Mumbai's corporate infrastructure is without equal. An address in BKC, Lower Parel, or Powai signals institutional durability to enterprise clients and international suppliers.",
    registeredOfficeNote:
      "For ROC Mumbai, electricity bills submitted as office address proof must clearly reflect the registered owner's name and consumer number, accompanied by a notarised rent agreement and an unconditional owner NOC.",
    faqs: [
      {
        question: "What is the difference between ROC Mumbai and ROC Pune?",
        answer:
          "Maharashtra is one of the few states with two Registrar of Companies offices. ROC Mumbai covers Greater Mumbai and the Konkan division, while ROC Pune handles Pune and Western/Central Maharashtra districts.",
      },
      {
        question: "Is Gumasta licence required after incorporating a company in Mumbai?",
        answer:
          "Yes. Every business operating from commercial premises in Mumbai must register under the Maharashtra Shops and Establishments (Regulation of Employment and Conditions of Service) Act with the Brihanmumbai Municipal Corporation (BMC).",
      },
      {
        question: "Can an NRI or foreign company register a subsidiary in Mumbai?",
        answer:
          "Yes. Mumbai is one of the top destinations for Foreign Direct Investment (FDI). We handle apostilled foreign director documents, FC-GPR filing with the Reserve Bank of India, and ROC Mumbai incorporation.",
      },
      {
        question: "What capital is required to start a Private Limited in Mumbai?",
        answer:
          "There is no statutory minimum paid-up capital requirement under the Companies Act 2013. You can start with ₹10,000 to ₹1,00,000 as authorized capital depending on your immediate business needs.",
      },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi NCR",
    officialName: "National Capital Region (Delhi, Gurgaon, Noida)",
    state: "Delhi NCT",
    region: "North India",
    tagline: "Corporate Headquarters, Policy & B2B Ecosystem",
    metaTitle: "Company Registration in Delhi NCR: Gurgaon & Noida Setup",
    metaDescription:
      "Incorporate your company in Delhi NCR with expert CS & CA consultation. Flawless SPICe+ name approvals with ROC Delhi & Haryana, startup tax benefits, and fast MCA filing.",
    keywords: [
      "company registration Delhi",
      "pvt ltd company registration Delhi NCR",
      "company registration Gurgaon",
      "LLP registration Noida",
      "ROC Delhi Haryana",
      "startup incorporation Delhi",
    ],
    rocName: "Registrar of Companies, NCT of Delhi & Haryana",
    rocAddress: "4th Floor, IFCI Tower, 61, Nehru Place, New Delhi, Delhi 110019",
    rocJurisdiction: "National Capital Territory of Delhi and State of Haryana (Gurgaon/Faridabad)",
    stampDutyNote:
      "Delhi NCT features unified e-stamp duty rates for MoA and AoA payable through the Stock Holding Corporation of India (SHCIL) integration on the MCA portal.",
    commercialHubs: ["Connaught Place", "Nehru Place", "Cyber City (Gurgaon)", "Golf Course Road", "Sector 62 (Noida)", "Okhla"],
    ecosystemHighlights: [
      "Proximity to key ministries (MCA, DPIIT, DGFT, Ministry of Finance, and NITI Aayog).",
      "Massive B2B consumer market covering Delhi, Gurgaon, Noida, and Faridabad.",
      "Preferred base for government procurement, defense tech, policy advocacy, and logistics.",
      "Corpunex operates an active corporate liaison desk in New Delhi.",
    ],
    overview:
      "Delhi NCR is the corporate headquarters and policy hub of North India. From enterprise SaaS giants in Gurgaon's Cyber City to fast-scaling consumer brands in South Delhi, incorporating in Delhi provides unmatched access to both government authorities and high-value corporate clients.",
    whyRegisterHere:
      "If your company serves enterprise clients, government procurement portals (GeM), or international trade corridors, an address under ROC Delhi and Haryana delivers exceptional prestige. Corpunex's corporate presence in New Delhi ensures immediate resolution of regulatory queries.",
    registeredOfficeNote:
      "Commercial address proof in Delhi must include the latest electricity bill (BSES Rajdhani/Yamuna or NDMC) matching the rent agreement, with an explicit owner NOC.",
    faqs: [
      {
        question: "Should I incorporate in Delhi or Gurgaon (Haryana)?",
        answer:
          "Both fall under the same Registrar: ROC Delhi & Haryana at Nehru Place. Your choice depends primarily on your physical office preference, stamp duty variation, and local municipal registrations.",
      },
      {
        question: "Can I avail Startup India 80-IAC tax exemption for a Delhi company?",
        answer:
          "Yes. Once your company is registered with ROC Delhi, our team assists you in securing DPIIT startup recognition and applying to the Inter-Ministerial Board (IMB) for 100% tax exemption under Section 80-IAC.",
      },
      {
        question: "How is GST registration handled for Delhi NCR businesses?",
        answer:
          "During the SPICe+ Part B incorporation filing, we apply for your GSTIN automatically through the AGILE-PRO-S form, preventing the need for a separate delayed application.",
      },
    ],
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    officialName: "Hyderabad",
    state: "Telangana",
    region: "South India",
    tagline: "Genome Valley, SaaS & Innovation Engine",
    metaTitle: "Company Registration in Hyderabad: Telangana Pvt Ltd",
    metaDescription:
      "Company registration in Hyderabad handled by qualified Company Secretaries and CAs. SPICe+ filing with ROC Telangana, T-Hub incubation alignment, and fast digital certificates.",
    keywords: [
      "company registration Hyderabad",
      "pvt ltd registration Hyderabad",
      "register company Telangana",
      "LLP registration Hyderabad",
      "ROC Telangana",
      "startup incorporation Hitec City Gachibowli",
    ],
    rocName: "Registrar of Companies, Telangana",
    rocAddress: "2nd Floor, Corporate Bhawan, Bandlaguda, Nagole, Hyderabad, Telangana 500068",
    rocJurisdiction: "State of Telangana",
    stampDutyNote:
      "Telangana enforces nominal incorporation e-stamp duties on Memorandum and Articles of Association under the Telangana Stamp Act.",
    commercialHubs: ["Hitec City", "Gachibowli", "Madhapur", "Financial District", "Banjara Hills", "Jubilee Hills"],
    ecosystemHighlights: [
      "World's largest startup incubator ecosystem anchored by T-Hub and WE Hub.",
      "Asia's leading hub for pharmaceuticals, life sciences, healthcare, and deep tech.",
      "Proactive state single-window clearance under TS-iPASS.",
      "Cost-effective commercial real estate and abundant top-tier engineering talent.",
    ],
    overview:
      "Hyderabad has established itself as one of the most founder-friendly startup capitals in Asia. With world-class technology clusters across Hitec City and Gachibowli, companies registered under ROC Telangana benefit from forward-looking state policies and rapid infrastructure expansion.",
    whyRegisterHere:
      "From AI and pharma-tech to enterprise cloud services, Hyderabad provides cost advantages over Mumbai and Bangalore while matching them in international connectivity and infrastructure. Local founders enjoy strong state-backed startup incentives and active angel syndicates.",
    registeredOfficeNote:
      "TSSPDCL electricity bill within 2 months, valid lease deed, and owner's consent letter are mandatory address proofs for ROC Telangana approval.",
    faqs: [
      {
        question: "Can a Hyderabad startup get incubated at T-Hub?",
        answer:
          "Yes. Once incorporated as a Private Limited company or LLP, you can apply for incubation and acceleration cohorts at T-Hub, leveraging their investor network and state grant programmes.",
      },
      {
        question: "What licences are needed for an IT company in Hyderabad?",
        answer:
          "Beyond MCA incorporation, an IT business in Hyderabad requires GSTIN, Professional Tax (PT) registration with the Telangana Commercial Taxes Department, and Shops & Establishment registration under GHMC.",
      },
      {
        question: "Can Corpunex handle annual ROC compliance for Telangana companies?",
        answer:
          "Yes. Corpunex provides end-to-end secretarial maintenance including board meeting minutes, annual filings (AOC-4, MGT-7), and director KYC for companies across Hyderabad.",
      },
    ],
  },
  {
    slug: "pune",
    name: "Pune",
    officialName: "Pune",
    state: "Maharashtra",
    region: "West India",
    tagline: "Automotive, Deep Tech & Engineering Capital",
    metaTitle: "Company Registration in Pune: Pvt Ltd & LLP Filing",
    metaDescription:
      "Incorporate your company in Pune with dedicated CA/CS advisors. SPICe+ filing with ROC Pune, Maharashtra stamp duty guidance, and local compliance assistance.",
    keywords: [
      "company registration Pune",
      "pvt ltd company registration Pune",
      "LLP registration Pune",
      "ROC Pune registration",
      "startup incorporation Hinjawadi Baner",
    ],
    rocName: "Registrar of Companies, Pune",
    rocAddress: "PMT Commercial Complex, 3rd Floor, Deccan Gymkhana, Pune, Maharashtra 411004",
    rocJurisdiction: "Pune, Kolhapur, Sangli, Satara, Solapur, Ahmednagar",
    stampDutyNote:
      "Incorporation stamp duty applies as per the Maharashtra Stamp Act Schedule, calculated electronically during SPICe+ filing.",
    commercialHubs: ["Hinjawadi", "Baner", "Kalyani Nagar", "Viman Nagar", "Kharadi", "Magarpatta"],
    ecosystemHighlights: [
      "Major global hub for automotive engineering, robotics, EV manufacturing, and IoT.",
      "Renowned education hub supplying a steady stream of skilled engineers and software professionals.",
      "Close proximity and expressway connectivity to Mumbai's financial institutions.",
      "Vibrant early-stage tech incubators and lower operational overheads than tier-1 metros.",
    ],
    overview:
      "Pune combines deep engineering heritage with a booming SaaS and tech product culture. Hosting major IT parks in Hinjawadi and Kharadi alongside EV manufacturing corridors, registering a company in Pune offers the ideal balance of tech talent, industrial depth, and reasonable operating costs.",
    whyRegisterHere:
      "Founders targeting manufacturing tech, industrial IoT, automotive software, or SaaS choose Pune for its technical workforce, pleasant climate, and proximity to Mumbai without Mumbai's high commercial overheads.",
    registeredOfficeNote:
      "MSEDCL electricity bill of the commercial or residential premise, not older than 60 days, together with a signed rent agreement and NOC from the landlord.",
    faqs: [
      {
        question: "How does ROC Pune differ from ROC Mumbai for filing timelines?",
        answer:
          "Both ROCs now process company registrations through the centralized MCA Central Registration Centre (CRC) in Manesar. Timelines are standardized at approximately 7 to 14 working days regardless of location.",
      },
      {
        question: "Can I convert a Pune sole proprietorship into a Private Limited company later?",
        answer:
          "Yes. As your business grows, Corpunex can manage a formal slump sale or business takeover agreement to transition your proprietorship into a Private Limited company without tax disruption.",
      },
    ],
  },
  {
    slug: "bhubaneswar",
    name: "Bhubaneswar",
    officialName: "Bhubaneswar",
    state: "Odisha",
    region: "East India",
    tagline: "Corpunex Headquarters & Eastern India's Emerging Tech Hub",
    metaTitle: "Company Registration in Bhubaneswar: Pvt Ltd & Startup Setup",
    metaDescription:
      "Register your Private Limited or LLP company in Bhubaneswar with Corpunex, headquartered in Odisha. Benefit from Startup Odisha grants, ROC Cuttack coordination, and local CA/CS guidance.",
    keywords: [
      "company registration Bhubaneswar",
      "pvt ltd company registration Bhubaneswar",
      "register company in Odisha",
      "LLP registration Bhubaneswar",
      "ROC Cuttack Odisha",
      "Startup Odisha registration CAs",
    ],
    rocName: "Registrar of Companies, Odisha (ROC Cuttack)",
    rocAddress: "Corporate Bhawan, 3rd Floor, Plot No. 9(P), Sector-1, CDA, Cuttack, Odisha 753014",
    rocJurisdiction: "Entire State of Odisha",
    stampDutyNote:
      "Odisha features straightforward e-stamp rates under the Indian Stamp (Odisha Amendment) Act, paid via the integrated MCA gateway.",
    commercialHubs: ["Infocity (Patia)", "Chandrasekharpur", "Saheed Nagar", "Janpath", "Kharvel Nagar", "IDCO IT Towers"],
    ecosystemHighlights: [
      "Corpunex's headquarters, ensuring direct personal advisory and swift regulatory resolution.",
      "Startup Odisha provides up to ₹20,000/month monthly founder allowances and up to ₹15 Lakh product development grants.",
      "Rapidly expanding IT and startup infrastructure anchored by O-Hub and modern STPI facilities.",
      "High concentration of premier academic institutions (IIT Bhubaneswar, NISER, KIIT, SOA, XIMB).",
    ],
    overview:
      "Bhubaneswar is Eastern India's fastest-growing startup destination. As the home base of Corpunex, founders in Bhubaneswar and Odisha receive direct, on-the-ground support from our senior Chartered Accountants and Company Secretaries.",
    whyRegisterHere:
      "The Government of Odisha offers some of India's most aggressive financial incentives through Startup Odisha, including non-dilutive product development grants, subsidized office spaces at O-Hub, and monthly founder allowances. Corpunex helps you incorporate and secure these exact benefits.",
    registeredOfficeNote:
      "TPCODL electricity bill within 2 months, registered or notarised rent agreement, and landlord NOC are required for the registered office in Bhubaneswar.",
    faqs: [
      {
        question: "How does Corpunex help startups in Bhubaneswar access Startup Odisha grants?",
        answer:
          "Because Corpunex is headquartered in Bhubaneswar, we guide founders from company registration through DPIIT recognition and formal Startup Odisha state accreditation to unlock monthly allowances and seed grants.",
      },
      {
        question: "Where is the ROC office for Bhubaneswar located?",
        answer:
          "The Registrar of Companies for Odisha is based at Corporate Bhawan in Cuttack, handling all corporate entity registrations across Bhubaneswar, Cuttack, Rourkela, and the entire state.",
      },
      {
        question: "Can I meet the Corpunex advisory team in person in Bhubaneswar?",
        answer:
          "Yes! Our primary advisory team is based in Bhubaneswar. You can schedule an in-person consultation or request a callback through our site.",
      },
    ],
  },
  {
    slug: "chennai",
    name: "Chennai",
    officialName: "Chennai",
    state: "Tamil Nadu",
    region: "South India",
    tagline: "SaaS Capital, Deeptech & Industrial Powerhouse",
    metaTitle: "Company Registration in Chennai: Private Limited & LLP",
    metaDescription:
      "Register your Private Limited or LLP company in Chennai with expert CS & CA consultation. Flawless SPICe+ filing with ROC Chennai, Tamil Nadu stamp duty, and startup incentives.",
    keywords: [
      "company registration Chennai",
      "pvt ltd company registration Chennai",
      "register company Tamil Nadu",
      "LLP registration Chennai",
      "ROC Chennai registration",
      "startup incorporation OMR Guindy",
    ],
    rocName: "Registrar of Companies, Tamil Nadu (Chennai)",
    rocAddress: "Block No. 6, B Wing, 2nd Floor, Shastri Bhawan 26, Haddows Road, Chennai, Tamil Nadu 600006",
    rocJurisdiction: "Northern & Central Tamil Nadu and Union Territory of Puducherry",
    stampDutyNote:
      "Tamil Nadu enforces digital e-stamp duty under the Tamil Nadu Stamp Act on AoA and MoA, collected automatically on MCA portal submission.",
    commercialHubs: ["OMR (Old Mahabalipuram Road)", "Guindy", "T. Nagar", "Tidel Park", "Perungudi", "Ambattur"],
    ecosystemHighlights: [
      "Global capital of vertical B2B SaaS (birthplace of Zoho, Freshworks, and Chargebee).",
      "Deep manufacturing, automotive EV corridors, and electronics hardware exports.",
      "Tamil Nadu Startup and Innovation Policy offers seed grants and incubation support via StartupTN.",
      "Access to extensive technical universities and disciplined engineering talent.",
    ],
    overview:
      "Chennai is celebrated as the SaaS capital of the world and the automotive hub of South Asia. Incorporating under ROC Chennai offers exceptional engineering stability, cost-effective infrastructure, and an established cross-border customer acquisition culture.",
    whyRegisterHere:
      "For SaaS founders, hardware ventures, EV companies, and healthcare innovators, Chennai provides deep domain talent and capital efficiency. An address in Guindy or along the OMR IT Corridor establishes unmatched technical credibility.",
    registeredOfficeNote:
      "TANGEDCO electricity bill within 60 days, notarised lease deed, and signed owner NOC are mandatory address proofs for ROC Chennai.",
    faqs: [
      {
        question: "What is the jurisdiction of ROC Chennai vs ROC Coimbatore?",
        answer:
          "ROC Chennai handles Chennai and northern/eastern districts, while ROC Coimbatore oversees western Tamil Nadu districts including Coimbatore, Salem, and Tirupur.",
      },
      {
        question: "Can SaaS startups in Chennai avail StartupTN grants?",
        answer:
          "Yes. Private Limited companies registered in Tamil Nadu can apply for TANSEED grants of up to ₹15 Lakhs and state mentorship support through StartupTN.",
      },
    ],
  },
  {
    slug: "kolkata",
    name: "Kolkata",
    officialName: "Kolkata",
    state: "West Bengal",
    region: "East India",
    tagline: "Commercial Gateway to Eastern India & Cross-Border Trade",
    metaTitle: "Company Registration in Kolkata: Pvt Ltd & LLP Setup",
    metaDescription:
      "Incorporate your company in Kolkata with certified CAs and CSs. Fast SPICe+ filing with ROC West Bengal, state compliance guidance, and low overhead startup setup.",
    keywords: [
      "company registration Kolkata",
      "pvt ltd company registration Kolkata",
      "register company West Bengal",
      "LLP registration Kolkata",
      "ROC Kolkata West Bengal",
      "Salt Lake Sector V Rajarhat",
    ],
    rocName: "Registrar of Companies, West Bengal",
    rocAddress: "Nizam Palace, 2nd MSO Building, 2nd Floor, 234/4, A.J.C. Bose Road, Kolkata, West Bengal 700020",
    rocJurisdiction: "Entire State of West Bengal",
    stampDutyNote:
      "West Bengal e-stamp duty applies under the Indian Stamp (West Bengal Amendment) Act, processed digitally via MCA SPICe+.",
    commercialHubs: ["Sector V (Salt Lake)", "New Town (Rajarhat)", "Park Street", "BBD Bagh", "Camac Street", "Kasba"],
    ecosystemHighlights: [
      "Commercial nerve center for Eastern and North-Eastern India trade.",
      "Major IT and ITES developments in Sector V and modern eco-spaces in New Town.",
      "Extremely competitive commercial office rents and operating costs compared to other metros.",
      "Proximity to key riverine ports and land borders for regional import-export operations.",
    ],
    overview:
      "Kolkata is the historical commercial capital and gateway to Eastern India. With booming IT corridors in Salt Lake Sector V and New Town Rajarhat, registering a company under ROC West Bengal offers cost-efficient scaling and access to a massive regional market.",
    whyRegisterHere:
      "Founders targeting trade, logistics, consumer FMCG, and regional tech services choose Kolkata for its low talent attrition, economical operational expenses, and rich cultural and educational heritage.",
    registeredOfficeNote:
      "CESC or WBSEDCL electricity bill within 2 months, valid commercial agreement, and owner's consent letter are required by ROC West Bengal.",
    faqs: [
      {
        question: "How long does company registration take with ROC West Bengal?",
        answer:
          "Typically 7 to 14 working days through the centralized Central Registration Centre (CRC). Our CAs handle all document verification and name clearance.",
      },
      {
        question: "Is professional tax mandatory in West Bengal?",
        answer:
          "Yes. All businesses and employers in West Bengal must obtain a P-Tax Certificate from the Directorate of Commercial Taxes.",
      },
    ],
  },
];
