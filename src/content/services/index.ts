import type { ServicePageContent } from "./types";
import { privateLimited } from "./private-limited";
import { llp } from "./llp";
import { opc } from "./opc";
import { soleProprietorship } from "./sole-proprietorship";
import { startupIndia } from "./startup-india-recognition";
import { startupOdisha } from "./startup-odisha";
import { udyam } from "./udyam-msme-registration";
import { gstRegistration } from "./gst-registration";
import { incomeTaxFiling } from "./income-tax-filing";
import { fssaiLicence } from "./fssai-licence";
import { importExportCode } from "./import-export-code";
import { trademarkRegistration } from "./trademark-registration";
import { annualRocCompliance } from "./annual-roc-compliance";

/** Every service with its own page, for the sitemap. */
export const servicePages: ServicePageContent[] = [
  privateLimited,
  llp,
  opc,
  soleProprietorship,
  startupIndia,
  startupOdisha,
  udyam,
  gstRegistration,
  incomeTaxFiling,
  fssaiLicence,
  importExportCode,
  trademarkRegistration,
  annualRocCompliance,
];
