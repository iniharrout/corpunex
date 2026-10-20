# Content still needed from the Corpunex team

As requested, nothing unconfirmed is shown on the site right now. The items below were removed or simplified and can be added back once they're confirmed.

## Before launch

- [ ] **Form backend.** The call-back pop-up (`components/callback/CallbackProvider.tsx`) and the enquiry form (`components/shared/ContactForm.tsx`) check what's entered but don't send it anywhere yet. Each has a TODO where the CRM or email endpoint goes.
- [ ] **Confirm government rates in the calculator:** stamp duty for each state, the LLP filing fee bands, the ₹1,000 name reservation fee, and the ₹1,000 digital signature cost.
- [ ] **Confirm Corpunex is GST-registered,** since 18% GST is added to our fee on every quote.
- [ ] **Confirm the timeline:** "usually 7–14 working days once we have all your documents" (`src/config/site.ts`).
- [ ] **Replace the stand-in photos** in `public/images/` (`founders-meeting.jpg`, `compliance-advisor.jpg`, `hero-founder.jpg`) with real Corpunex photos.

## Pricing (not published)

- [ ] Prices have been removed from the whole site at the founder's request, and `/pricing` redirects to `/contact`. Fee figures remain only in `src/lib/fees.ts` for internal use. If you decide to publish prices later, start there.

## Fee calculator (removed for now)

- [ ] The interactive cost calculator has been taken off the homepage, Pricing and service pages until the government fee rates are confirmed. Its logic is still in `src/lib/fees.ts` (`estimateFees`); once every rate there is checked, a calculator component can be added back. Service pages now say government fees are "charged at actual cost" and listed in the quote.

## Add back later, once available

- [ ] Legal entity name, CIN, GSTIN and registered address in the footer. Recommended before launch for trust; the earlier design had a slot for these.
- [ ] Client logos, in `clientLogos` in `src/content/home.ts`. The row appears automatically once logos are added.
- [ ] Case studies and a team section, if you want them later.
- [ ] Social links and a client-portal login URL (`src/config/site.ts`). Each one appears once it's set.
- [ ] Pages for Foreign Founders, Investor readiness, Virtual CFO and Market research. These links go to /contact for now.

## Left out of the service and guide pages until confirmed

These were removed rather than marked up. Add them back once someone has checked them against the current rules.

- [ ] **"From" prices and turnaround times** for every service other than Pvt Ltd, LLP and OPC. The price card says "Get a quote" and the steps have no day counts. Put confirmed prices in `src/lib/fees.ts` and confirmed turnaround times next to `timeline` in `src/config/site.ts`, not in page copy.
- [ ] **Exact government fees:** IEC (DGFT), trademark (per category), FSSAI (per licence type) and Startup Odisha registration. Each page says "we charge exactly what the government charges" instead.
- [ ] **Rules that change often,** described without numbers for now: Udyam micro/small/medium limits, FSSAI turnover limits per licence, income tax due dates, how often director KYC is due and its late fee, the 80-IAC cut-off date, and Startup Odisha allowance and grant amounts and eligibility for startups registered outside Odisha.
- [ ] **Legal pages** (`src/content/legal.ts`): plain-language rewrites of the old text. An advocate should review them, and add any liability cap, the courts with jurisdiction, the grievance officer required by the DPDP Act, and the refund processing time.
- [ ] **Guides** (`src/content/articles.ts`): rewritten from the old articles. A CA or CS should read each one before launch.

## Careers (`src/content/careers.ts`)

- [ ] **Confirm the four open roles** (Company Secretary associate, Accounts and tax executive, Client advisor, Content writer intern), with their locations and requirements. They're drafts written from the work Corpunex does. Delete any role you aren't hiring for; the page counts what's left.
- [ ] **Confirm where applications should go.** "Apply" opens an email to `contact@corpunex.com`. If you want a separate careers address, add it to `src/config/site.ts` and use it in `applyHref`.

