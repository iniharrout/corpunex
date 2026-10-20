# Content still needed from the Corpunex team

As requested, nothing unconfirmed is shown on the site right now. The items below were removed or simplified and can be added back once they're confirmed.

## Before launch

- [ ] **Form backend.** The call-back pop-up (`components/callback/CallbackProvider.tsx`) and the enquiry form (`components/shared/ContactForm.tsx`) check what's entered but don't send it anywhere yet. Each has a TODO where the CRM or email endpoint goes.
- [ ] **Confirm professional fees:** Private Limited ₹5,999, LLP ₹4,999, OPC ₹4,499 (`src/lib/fees.ts`).
- [ ] **Confirm government rates in the calculator:** stamp duty for each state, the LLP filing fee bands, the ₹1,000 name reservation fee, and the ₹1,000 digital signature cost.
- [ ] **Confirm Corpunex is GST-registered,** since 18% GST is added to our fee on every quote.
- [ ] **Confirm the timeline:** "usually 7–14 working days once we have all your documents" (`src/config/site.ts`).
- [ ] **Replace the stand-in photos** in `public/images/` (`founders-meeting.jpg`, `compliance-advisor.jpg`, `hero-founder.jpg`) with real Corpunex photos.

## Add back later, once available

- [ ] Legal entity name, CIN, GSTIN and registered address in the footer. Recommended before launch for trust; the earlier design had a slot for these.
- [ ] Client logos, in `clientLogos` in `src/content/home.ts`. The row appears automatically once logos are added.
- [ ] Case studies and a team section, if you want them later.
- [ ] "From" prices for GST, accounting, ROC, ITR, Startup India, trademark and Virtual CFO. These show "Get a quote" for now (`src/content/pricing.ts`).
- [ ] Social links and a client-portal login URL (`src/config/site.ts`). Each one appears once it's set.
- [ ] Pages for Foreign Founders, Investor readiness, Virtual CFO and Market research. These links go to /contact for now.
