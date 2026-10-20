/**
 * Company facts used across the site. Anything wrapped in [VERIFY: …]
 * is a placeholder the Corpunex team must replace before launch — see
 * PLACEHOLDERS.md. Keep this the only place these facts are written.
 */

export const site = {
  name: "Corpunex",
  url: "https://www.corpunex.com",
  legalName: "[VERIFY: registered legal entity name]",
  cin: "[VERIFY: CIN]",
  gstin: "[VERIFY: GSTIN]",
  registeredAddress: "[VERIFY: registered office address, Bhubaneswar, Odisha, PIN]",
  offices: "Bhubaneswar, Odisha · New Delhi",
  email: "contact@corpunex.com",
  /** Taken from the previous header. Confirm it is the main desk line. */
  phoneDisplay: "+91 82601 77700",
  phoneHref: "tel:+918260177700",
  /** Assumes the same number is on WhatsApp Business. Confirm. */
  whatsappHref: "https://wa.me/918260177700",
  /** Calendly or similar. While null, "Book a call" falls back to the phone line. */
  bookingUrl: null as string | null,
  /** Client portal. The Login link is hidden until this is set. */
  loginUrl: null as string | null,
  hours: "Mon–Sat, 9:30–18:30 IST",
  social: {
    linkedin: "[VERIFY: LinkedIn URL]",
    x: "[VERIFY: X URL]",
    instagram: "[VERIFY: Instagram URL]",
  },
} as const;

/**
 * The one incorporation timeline used everywhere on the site.
 * Change it here, not in page copy.
 */
export const timeline = {
  // Word joiners (U+2060) stop "7–14" breaking across lines at the dash.
  short: "7\u2060–\u206014 working days",
  sentence:
    "Typically 7–14 working days from the day we have complete documents.",
  delays:
    "Name rejections, MCA resubmission requests and slow DSC verification are the usual causes of delay; each can add 2–5 working days.",
} as const;

export const disclaimer =
  "Corpunex is an independent advisory firm and is not affiliated with any government body. Filings are prepared and certified by qualified Chartered Accountants, Company Secretaries and advocates. Registrations and approvals are granted solely by the relevant authorities, including MCA, GSTN, DPIIT and the Trade Marks Registry. Fees and timelines are estimates and depend on government processing.";

export function isPlaceholder(value: string | null | undefined) {
  return !value || value.startsWith("[VERIFY") || value.startsWith("[REAL");
}
