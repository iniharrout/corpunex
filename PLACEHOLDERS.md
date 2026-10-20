# Content needed from the Corpunex team

Every item below is a placeholder in the rebuilt pages. On screen, each appears as a hatched highlight labelled `[VERIFY: …]` or `[REAL …]`, or as a crossed frame labelled "Real photo". To find all of them, run `grep -rnE '\[(VERIFY|REAL)|<Ph>' src`.

Nothing here should be made up. If a fact cannot be confirmed, delete the claim instead.

## 1. Company and legal details (`src/config/site.ts`)

- [ ] Registered legal entity name
- [ ] CIN
- [ ] GSTIN (this also confirms that 18% GST applies to our fees)
- [ ] Registered office address with PIN
- [ ] Confirm +91 82601 77700 is the main desk line and is on WhatsApp Business
- [ ] Booking link (e.g. Calendly). Until it is set, "Book a call" dials the phone line.
- [ ] Client portal URL. The "Login" link stays hidden until it is set.
- [ ] LinkedIn, X and Instagram URLs
- [ ] Confirm office hours (currently Mon–Sat, 9:30–18:30 IST)

## 2. Prices and fees (`src/lib/fees.ts`, `src/content/pricing.ts`)

- [ ] Professional fees: Private Limited ₹5,999, LLP ₹4,999, OPC ₹4,499. These came from the old calculator; confirm they are current.
- [ ] State stamp duty for each of the 8 states listed (MoA + AoA up to ₹15 lakh capital)
- [ ] LLP agreement stamp duty (currently a flat ₹500)
- [ ] LLP FiLLiP fee bands (₹500 / ₹2,000 / ₹4,000 / ₹5,000 by contribution)
- [ ] Name reservation fee (₹1,000 for SPICe+ Part A and RUN-LLP). The old calculator charged ₹200 for LLPs; the current rate is believed to be ₹1,000.
- [ ] DSC cost per person (currently ₹1,000)
- [ ] "From" prices for: GST registration, GST returns (monthly), accounting (monthly), annual ROC compliance, company ITR, Startup India recognition, investor readiness, Virtual CFO, trademark (per class)
- [ ] Payment terms (pricing FAQ)
- [ ] Whether name resubmission is included in the fee, and how many attempts (pricing FAQ)
- [ ] Turnaround for a written quote (pricing page closing band)
- [ ] Whether OPCs are eligible for DPIIT recognition (comparison table)

## 3. Claims on the homepage (`src/content/home.ts`, `src/components/home/Hero.tsx`)

- [ ] Number of companies incorporated, and the year Corpunex started (hero trust line)
- [ ] Number of qualified professionals (CA/CS/advocates) on the team
- [ ] Typical first-reply time in working hours
- [ ] Confirm every client gets one named advisor for the whole engagement. If not, rewrite or remove that differentiator.
- [ ] Confirm every incorporation includes a dated first-year compliance calendar
- [ ] Response time promised after the contact form is sent (`src/components/shared/ContactForm.tsx`)
- [ ] Timeline: "typically 7–14 working days from complete documents" is used everywhere. Confirm it, or change it once in `src/config/site.ts`.

## 4. Case studies (3)

For each case study we need: company name, founder name and role, sector and city, the problem (1–2 sentences), what Corpunex did (filings and dates), the measurable result, a landscape photo of the founder, and written permission to publish. Ideally one of the three is a foreign or NRI founder. A video is optional.

## 5. Team (4 or more)

For each person we need: full name, role, credential with membership number (ICAI M.No., ICSI M.No., or Bar Council and enrolment number), a two-sentence bio, a LinkedIn URL, and a head-and-shoulders portrait taken in the same light as the others.

## 6. Photography

- [ ] Hero: an advisor going through incorporation papers with a founder, at the office, 4:5 portrait
- [ ] 3 client founder photos (see case studies)
- [ ] 4+ team portraits (see team)
- [ ] Delete the stock images in `public/images/` once the legacy pages stop using them. None of them are used on the rebuilt pages.

## 7. Client logos

- [ ] Logos of clients or partners who have agreed to be listed, as SVG or high-resolution PNG. Add them to `clientLogos` in `src/content/home.ts`. The row stays hidden while the list is empty.

## 8. Not built yet (links point to /contact for now)

- Dedicated pages for Foreign Founders, Investor readiness, Virtual CFO and Startup research
- A compare page for entity types (the nav links to the existing Pvt Ltd vs LLP guide)
- A form backend. `ContactForm` validates the input but does not send it anywhere yet (see the TODO in the file).
