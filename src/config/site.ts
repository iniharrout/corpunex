/**
 * Company facts used across the site. Keep this the only place they are
 * written. Facts still to be confirmed are listed in PLACEHOLDERS.md and
 * are deliberately not shown on the site until they are.
 */

export const site = {
  name: "Corpunex",
  url: "https://www.corpunex.com",
  email: "contact@corpunex.com",
  offices: "Bhubaneswar, Odisha · New Delhi",
  hours: "Mon–Sat, 9:30am–6:30pm IST",
  /** Client portal. The Login link is hidden until this is set. */
  loginUrl: null as string | null,
  /** Social profiles. Each link is hidden while its value is null. */
  social: {
    linkedin: null as string | null,
    x: null as string | null,
    instagram: null as string | null,
  },
} as const;

/**
 * The one incorporation timeline used everywhere on the site.
 * Change it here, not in page copy.
 */
export const timeline = {
  // Word joiners (U+2060) stop "7–14" breaking across lines at the dash.
  short: "7⁠–⁠14 working days",
  sentence: "Usually 7–14 working days once we have all your documents.",
  delays:
    "It can take a few days longer if the name you want is rejected, the government portal asks for changes, or a digital signature takes time to verify.",
} as const;

export const disclaimer =
  "Corpunex is an independent advisory firm and is not part of any government body. Filings are prepared and certified by qualified Chartered Accountants, Company Secretaries and advocates. Registrations and approvals are granted only by the relevant authorities, such as MCA, GSTN, DPIIT and the Trade Marks Registry. Fees and timelines are estimates and depend on government processing.";
