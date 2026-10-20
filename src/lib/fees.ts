/**
 * Incorporation fee model. Pure functions so the calculator, pricing page
 * and service page all quote the same numbers.
 *
 * Government rates below are indicative and must be re-checked against
 * the MCA fee schedule and each State Stamp Act before launch.
 */

export type EntityType = "pvt" | "llp" | "opc";

export const ENTITY_LABEL: Record<EntityType, string> = {
  pvt: "Private Limited",
  llp: "LLP",
  opc: "One Person Company",
};

/** Corpunex professional fee per entity, excluding GST. [VERIFY: confirm current fees] */
export const PROFESSIONAL_FEE: Record<EntityType, number> = {
  pvt: 5999,
  llp: 4999,
  opc: 4499,
};

/** GST charged on Corpunex's professional fee. [VERIFY: confirm Corpunex is GST-registered] */
export const GST_RATE_ON_PROFESSIONAL_FEE = 0.18;

/** Class 3 DSC with token, per signatory. Third-party cost passed through. */
export const DSC_COST_PER_PERSON = 1000;

interface StateRule {
  name: string;
  moaStampDuty: number;
  aoaStampDuty: number;
}

/** Stamp duty on MoA + AoA for a company with authorised capital up to ₹15 lakh. [VERIFY: every row] */
export const STATES: Record<string, StateRule> = {
  odisha: { name: "Odisha", moaStampDuty: 300, aoaStampDuty: 1000 },
  delhi: { name: "Delhi", moaStampDuty: 200, aoaStampDuty: 1000 },
  maharashtra: { name: "Maharashtra", moaStampDuty: 1000, aoaStampDuty: 1000 },
  karnataka: { name: "Karnataka", moaStampDuty: 1000, aoaStampDuty: 1000 },
  haryana: { name: "Haryana", moaStampDuty: 120, aoaStampDuty: 1000 },
  tamilnadu: { name: "Tamil Nadu", moaStampDuty: 600, aoaStampDuty: 1000 },
  telangana: { name: "Telangana", moaStampDuty: 500, aoaStampDuty: 1000 },
  up: { name: "Uttar Pradesh", moaStampDuty: 500, aoaStampDuty: 1000 },
};

/** Flat stamp duty on the LLP agreement used by the estimate. [VERIFY: varies by state] */
const LLP_AGREEMENT_STAMP_DUTY = 500;

/** Capital (or LLP contribution) bands the calculator offers, in rupees. */
export const CAPITAL_OPTIONS = [100000, 500000, 1000000, 1500000];

export interface FeeInput {
  entity: EntityType;
  state: string;
  capital: number;
  directors: number;
}

export interface FeeLine {
  label: string;
  amount: number;
  note?: string;
}

export interface FeeBreakdown {
  government: FeeLine[];
  thirdParty: FeeLine[];
  professional: FeeLine[];
  governmentTotal: number;
  thirdPartyTotal: number;
  professionalTotal: number;
  total: number;
}

/** LLP incorporation (FiLLiP) fee by contribution. [VERIFY against LLP Rules fee table] */
function fillipFee(contribution: number) {
  if (contribution <= 100000) return 500;
  if (contribution <= 500000) return 2000;
  if (contribution <= 1000000) return 4000;
  return 5000;
}

export function estimateFees({ entity, state, capital, directors }: FeeInput): FeeBreakdown {
  const rule = STATES[state] ?? STATES.odisha;
  const government: FeeLine[] = [];

  // Name reservation: SPICe+ Part A for companies, RUN-LLP for LLPs.
  government.push({
    label: entity === "llp" ? "Name reservation (RUN-LLP)" : "Name reservation (SPICe+ Part A)",
    amount: 1000,
  });

  if (entity === "llp") {
    government.push({ label: "Incorporation filing (FiLLiP)", amount: fillipFee(capital) });
    government.push({
      label: `Stamp duty on LLP agreement (${rule.name})`,
      amount: LLP_AGREEMENT_STAMP_DUTY,
    });
  } else {
    // MCA charges no SPICe+ filing fee for authorised capital up to ₹15 lakh.
    government.push({
      label: "SPICe+ filing fee",
      amount: 0,
      note: "Nil up to ₹15 lakh authorised capital",
    });
    government.push({
      label: `Stamp duty on MoA and AoA (${rule.name})`,
      amount: rule.moaStampDuty + rule.aoaStampDuty,
    });
  }

  const thirdParty: FeeLine[] = [
    {
      label: `Digital signatures (Class 3) × ${directors}`,
      amount: directors * DSC_COST_PER_PERSON,
      note: "Issued by a licensed certifying authority",
    },
  ];

  const fee = PROFESSIONAL_FEE[entity];
  const professional: FeeLine[] = [
    { label: "Corpunex professional fee", amount: fee },
    {
      label: "GST on professional fee (18%)",
      amount: Math.round(fee * GST_RATE_ON_PROFESSIONAL_FEE),
    },
  ];

  const sum = (lines: FeeLine[]) => lines.reduce((t, l) => t + l.amount, 0);
  const governmentTotal = sum(government);
  const thirdPartyTotal = sum(thirdParty);
  const professionalTotal = sum(professional);

  return {
    government,
    thirdParty,
    professional,
    governmentTotal,
    thirdPartyTotal,
    professionalTotal,
    total: governmentTotal + thirdPartyTotal + professionalTotal,
  };
}

export function inr(amount: number) {
  return "₹" + amount.toLocaleString("en-IN");
}

export function lakh(amount: number) {
  return `₹${amount / 100000} lakh`;
}
