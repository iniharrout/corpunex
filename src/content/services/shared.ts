import { GST_RATE_ON_PROFESSIONAL_FEE } from "@/lib/fees";

/**
 * Quote-card rows shared by services that are not incorporations.
 * Our fee for these services is not in `lib/fees.ts` yet, so it stays a
 * placeholder until it is confirmed (see PLACEHOLDERS.md).
 */
export const feeToConfirm = {
  label: "Our fee",
  value: "[VERIFY: from price]",
  note: `+ ${GST_RATE_ON_PROFESSIONAL_FEE * 100}% GST`,
};

export function turnaroundToConfirm(service: string) {
  return { label: "Timeline", value: `[VERIFY: typical turnaround for ${service}]` };
}

export const stepsIntroToConfirm = (service: string) =>
  `[VERIFY: typical turnaround for ${service}, from complete documents]`;
