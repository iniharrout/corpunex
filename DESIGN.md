# Corpunex design system

## Direction

The site is for **first-time founders**. Most of them have never registered a company and don't know what "SPICe+", "MoA" or "ROC" mean. The site should feel like a helpful friend who knows the system: bright, warm and easy to read, not like a law firm.

- **Bright and warm.** A white page with soft pastel sections (sky, mint, sun, peach), one confident blue for actions, and a yellow highlighter on the words that matter in a headline.
- **Friendly type.** Bricolage Grotesque, bold, for headlines: rounded and characterful without being childish. Inter at 17px for everything else.
- **Plain words.** Every page speaks to someone starting out. Use "your company's rulebook (MoA and AoA)", not "eMOA/eAOA". Use "we charge exactly what the government charges", not "pass-through at cost".
- **Help is always one tap away.** "Request a call back" is in the header, the mobile bar, the Services menu and every closing section. It opens a short pop-up asking for name, mobile number and what the call is about. The site never shows a phone number; email is the only direct contact shown.
- **Soft shapes.** Rounded cards (20–28px), pill buttons, gentle shadows, and a little lift on hover.
- **Honest by default.** Prices always split government fees, digital signatures and our fee. Timelines come from one constant (`timeline` in `src/config/site.ts`). Nothing unverified is shown: claims that need confirming were removed, not marked up (see PLACEHOLDERS.md).
- **Simple navigation.** One "Services" mega menu, grouped in plain words (Start a business, Tax and accounts, Yearly compliance, Startups and funding, Brand and legal), plus Pricing, Guides and About.
- **Mobile first.** Layouts are written for 390px; tap targets are at least 44px. A sticky bottom bar holds "Call me back" and "Get started", and on phones the call-back pop-up opens as a bottom sheet.
- **Motion.** Fades and lifts take 150–220ms. Everything drops to 0 under `prefers-reduced-motion`.

## Tokens

All tokens live in [`src/styles/tokens.css`](src/styles/tokens.css). Components never hard-code colours or font sizes.

### Colour

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--color-ink` | `#101828` | Headlines, strong text | 17.8:1 on white |
| `--color-ink-soft` | `#344054` | Body copy | 10.5:1 |
| `--color-ink-muted` | `#5d6676` | Secondary copy | 5.8:1 on white, at least 5.0:1 on every pastel |
| `--color-accent` | `#2453d6` | Buttons, links, the featured plan | White text on it 6.4:1 |
| `--color-highlight` | `#ffd84d` | Headline highlighter, photo backdrop | Ink on it 12.8:1 |
| `--color-sky` / `-mint` / `-sun` / `-peach` | `#eaf1ff` `#e4f6ec` `#fff4d1` `#ffebe3` | Section bands, path cards, icon tiles | — |
| `--color-*-strong` | `#2453d6` `#157347` `#8a5a00` `#b8401b` | Icons on their pastel | 4.8–5.6:1 |
| `--color-paper-deep` | `#f4f7fb` | Neutral band | — |
| `--color-line` / `-line-input` | `#e4e7ec` / `#8b93a1` | Dividers / form control edges | Control edges 3.1:1 (WCAG 1.4.11) |
| `--color-ink-band` | `#0e1a33` | Footer | Muted text on it 10.5:1 |
| `--color-success` / `--color-error` | `#157347` / `#b42318` | Ticks, form errors | 5.2:1 / 6.6:1 |

### Type

| Token | Size (390px → 1440px) | Use |
|---|---|---|
| `--text-display` | 40 → 72px | Homepage hero |
| `--text-h1` | 34 → 56px | Page titles |
| `--text-h2` | 28 → 42px | Section titles |
| `--text-h3` | 20 → 24px | Card titles |
| `--text-h4` | 18px | Small titles |
| `--text-lead` | 17 → 20px | Intros |
| `--text-body` | 17px | Body |
| `--text-small` | 15px | UI, lists |
| `--text-micro` | 13px | Labels |

Headings are Bricolage Grotesque 700, tracked −0.03em, with 1.05–1.15 leading. Body text uses 1.6 leading.

### Spacing, radius, elevation

- **Spacing:** 4px base, `--space-1` (4px) to `--space-10` (128px). Section padding runs from 56px to 112px.
- **Radius:** `--radius-sm` 8px, `--radius-md` 12px, `--radius-lg` 20px, `--radius-xl` 28px, `--radius-pill` for buttons.
- **Elevation:** `--shadow-card`, `--shadow-card-hover`, `--shadow-menu`, `--shadow-bar`.

## Components

| Component | Path | Notes |
|---|---|---|
| `CallbackProvider`, `CallbackButton` | `components/callback/` | One site-wide native `<dialog>` (name, mobile, topic). Any `CallbackButton` opens it and can pre-select a topic. It's a bottom sheet on phones, closes with Escape or a backdrop click, and validates input. |
| `SiteHeader` | `components/site/` | Logo, a Services mega menu with a "Not sure what you need?" call-back tile, Pricing, Guides, About, Request a call back, and Get started. Mobile drawer with accordions. |
| `SiteFooter` | `components/site/` | Email, hours, a call-back button, link columns and the disclaimer. No phone number. |
| `MobileActionBar` | `components/site/` | Sticky "Call me back" and "Get started" below 900px. |
| `ButtonLink`, `Button`, `TextLink` | `components/ui/Button.tsx` | Pill buttons with variants `primary`, `secondary`, `ghost`, `ink` and `onInk`. |
| `ToneIcon` | `components/ui/ToneIcon.tsx` | A line icon in a pastel tile. |
| `PhotoFrame` | `components/ui/PhotoFrame.tsx` | Rounded photo slot. Uses stand-in photos from `public/images` for now. |
| `FeeEstimator` | `components/pricing/` | Interactive cost estimate. Logic lives in `lib/fees.ts`. |
| `PricingTiers`, `ComparisonTable`, `PriceList` | `components/pricing/` | Plans, a Pvt Ltd / LLP / OPC comparison, and ongoing services ("Get a quote" where no price is confirmed yet). |
| `FaqList`, `ContactForm`, `ContactPanel`, `CtaBand` | `components/shared/` | FAQ accordion with schema, a short enquiry form, and the blue closing call to action. |
| Home sections | `components/home/` | `Hero`, `Paths` ("Where are you right now?"), `HowItWorks`, `EntityPicker`, `PricingSection`, `Benefits`, `TalkToUs`, `ForeignFounders`, `Guides`, `FaqContact`. `ClientLogos` stays hidden until logos are added. |
| `ServicePage` | `components/service/` | Template for any service, fed by a `ServicePageContent` file in `content/services/`. Set `entity` only for incorporations (Pvt Ltd, LLP, OPC): it turns on the fee estimator, the comparison table and the shared `timeline`. Other services pass `quoteFacts`, `stepsIntro`/`stepsDelays`, `callbackTopic` and `cta`, and number their steps instead of giving days. |
| `CategoryHub` | `components/service/` | Category hub page: pastel cards for services with their own page, a white card listing the rest, the category's FAQs and the closing CTA. Fed by `content/categories.ts`. |
| `PageHeader`, `Breadcrumbs` | `components/shared/` | Rounded pastel title panel for inner pages, with breadcrumb, an h1 that can highlight one phrase, a lead and optional actions. Outputs BreadcrumbList schema. |
| `JumpNav` | `components/shared/` | White pill links that jump to sections further down long index pages. |
| `LegalPage` | `components/shared/` | Numbered plain-language legal sections with a contact card beside them. Content lives in `content/legal.ts`. |

### Content files

- `content/services/<slug>.ts`: one per service page, all listed in `content/services/index.ts`, which the sitemap reads.
- `content/categories.ts`: the nine categories for the hubs, /services and /about.
- `content/faqs.ts`: FAQ groups for /faq and the hubs.
- `content/articles.ts`: the guides under /resources. Reading time is worked out from word count.
- `content/legal.ts`: the four legal pages.

## SEO and tech

- Organization schema on every page. FAQPage schema on home, pricing and service pages. Service and BreadcrumbList schema on service pages.
- Every page sets a canonical URL.
- Preview deployments (`VERCEL_ENV` other than production) are noindex and disallowed in `robots.txt`.
- Fonts are self-hosted via `next/font`.
