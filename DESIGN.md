# Corpunex design system

## Direction

Bright and professional, in the spirit of hubspot.com and razorpay.com, while keeping the hand-drawn spot illustrations founders liked (rocket, calculator, medal, globe, chat, folder, certificate, people, phone, paper plane) and the hero scene.

- **White surfaces, navy text, a vivid brand blue.** Brand blue (`#0057ff`) for the hero, buttons, links and closing panels; navy (`#0b1b33`) for text and line work; dark navy only in the footer.
- **Crisp type.** Inter throughout. Headings are bold with tight tracking; key headline words are set in blue rather than highlighted.
- **Soft, layered cards.** A white card with a hairline edge and a soft shadow that deepens and lifts slightly on hover. Rounded 10–20px corners.
- **Illustrations carry the colour.** Their yellow, coral, blue and green fills sit on soft tints, so the pages stay calm while the drawings stay friendly.
- **Navigation.** A slim light-grey top bar (Guides, FAQ, Contact, email, Request a call back) above a white main bar (Services menu, Guides, About, Contact, "Talk to an expert", "Get started").
- **Hero.** A bright blue, centred hero: "Company registration and compliance, done for you", a plain explanation, and an "I want to…" picker that jumps to the right service page. The four illustrated starting-point cards rise out of the bottom edge of the hero.
- **Calm motion.** 150–220ms fades and lifts, sections that rise into view through CSS scroll-driven animation (`data-reveal`), and a gently bobbing rocket in the hero. All of it is off under `prefers-reduced-motion`.
- **Help is always one tap away.** "Request a call back" opens a pop-up (name, mobile, topic). No phone number or WhatsApp link appears anywhere; email is the only direct contact.
- **No public prices.** Prices are not published anywhere on the site (`/pricing` redirects to `/contact`). Every quote is free, itemised and sent individually. Timelines come from one constant. Nothing unconfirmed is shown.

## Tokens

All tokens live in [`src/styles/tokens.css`](src/styles/tokens.css).

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--color-ink` | `#0b1b33` | Headlines, line art, navy bands | 17.2:1 on white |
| `--color-ink-soft` | `#3a4a63` | Body copy | 9.0:1 |
| `--color-ink-muted` | `#5b6b82` | Secondary copy | 5.4:1 on white, 4.8:1+ on tints |
| `--color-accent` / `--color-brand-band` | `#0057ff` | Hero, buttons, links, closing panels | White on it 5.5:1 |
| `--color-on-ink-muted` / `-accent` | `#b8c4d6` / `#7fb0ff` | Text on navy | 9.8:1 / 7.8:1 |
| `--color-sky` `-mint` `-sun` `-peach` `-lilac-tint` | soft tints | Bands, icon tiles, page headers | — |
| `--color-yellow` `-coral` `-blue` `-green` | illustration fills | Spot illustrations only | — |
| `--shadow-card` / `-hover` | hairline + soft blur | Cards | — |
| Radius | 8 / 10 / 16 / 20px | Buttons use 10px | — |

## Components

| Component | Path | Notes |
|---|---|---|
| `CallbackProvider`, `CallbackButton` | `components/callback/` | One site-wide native `<dialog>` (name, mobile, topic). Any `CallbackButton` opens it and can pre-select a topic. It's a bottom sheet on phones, closes with Escape or a backdrop click, and validates input. |
| `SiteHeader` | `components/site/` | Logo, a Services mega menu with a "Not sure what you need?" call-back tile, Pricing, Guides, About, Request a call back, and Get started. Mobile drawer with accordions. |
| `SiteFooter` | `components/site/` | Email, hours, a call-back button, link columns and the disclaimer. No phone number. |
| `MobileActionBar` | `components/site/` | Sticky "Call me back" and "Get started" below 900px. |
| `ButtonLink`, `Button`, `TextLink` | `components/ui/Button.tsx` | Pill buttons with variants `primary`, `secondary`, `ghost`, `ink` and `onInk`. |
| `ToneIcon` | `components/ui/ToneIcon.tsx` | A line icon in a pastel tile. |
| Illustrations | `components/illustrations/` | `HeroScene`, `Spots` (spot illustrations plus `Person`/`People`), `Doodles`, and `artFor` (picks a spot illustration per URL; used by `PageHeader` and `ServicePage`). |
| `PhotoFrame` | `components/ui/PhotoFrame.tsx` | Rounded photo slot, used on About. |
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
- `content/articles.ts`: the articles under /blog (the old /resources URLs redirect there). Reading time is worked out from word count.
- `content/careers.ts`: open roles, the hiring steps and team values for /careers and /careers/[slug].
- `content/legal.ts`: the four legal pages.

## SEO and tech

- Organization schema on every page. FAQPage schema on home, pricing and service pages. Service and BreadcrumbList schema on service pages.
- Every page sets a canonical URL.
- Preview deployments (`VERCEL_ENV` other than production) are noindex and disallowed in `robots.txt`.
- Fonts are self-hosted via `next/font`.
