# Corpunex design system

## Direction

Playful and illustrated, in the spirit of Notion: the site should feel like a friendly sketchbook, not a law firm. It's for **first-time founders**, so every page explains things in plain words and makes the process look doable.

- **Warm cream paper, ink-black lines.** Type, outlines and illustration line work are all the same ink (`#1d1b18`) on cream (`#fffaf0`).
- **Bold colour blocks.** Yellow, coral, blue, green, lilac and pink appear as illustration fills, stickers and highlights. Their soft tints (sky, mint, sun, peach, lilac) form section bands and cards.
- **Sticker cards.** Cards, buttons, FAQ items and the menu share one shape: a 2px ink outline plus a hard offset shadow. Both are drawn by the `--shadow-card` token, so any element using it becomes a sticker. On hover they lift with a springy ease, and on press they sink.
- **Chunky rounded type.** Nunito Black for headlines, Inter for body text, and Caveat for handwritten margin notes ("pick one!", "that's you, launching!").
- **Hand-drawn illustrations.** The hero scene, a spot illustration for each idea (rocket, calculator, medal, globe, chat, folder, certificate, paper plane, phone, people) and small doodles (sparkles, stars, squiggles, arrows) are all inline SVG in `src/components/illustrations/`. They're decorative and `aria-hidden`; the text beside them carries the meaning.
- **Bouncy, gentle motion.** Hover lifts, a floating rocket, twinkling sparkles, and sections that rise into view through CSS scroll-driven animation (`data-reveal`, no JavaScript). Everything stops under `prefers-reduced-motion`.
- **Help is always one tap away.** "Request a call back" opens a pop-up asking for name, mobile number and topic. No phone number or WhatsApp link appears anywhere; email is the only direct contact.
- **Honest content.** Prices always split government fees, digital signatures and our fee. Timelines come from one constant. Nothing unconfirmed is shown (see PLACEHOLDERS.md).

## Tokens

All tokens live in [`src/styles/tokens.css`](src/styles/tokens.css).

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--color-ink` | `#1d1b18` | Headlines, outlines, line art | 16.5:1 on paper |
| `--color-ink-soft` | `#3d3a35` | Body copy | 10.9:1 |
| `--color-ink-muted` | `#66615a` | Secondary copy | 5.9:1 on paper, 4.9:1+ on every tint |
| `--color-paper` / `--color-surface` | `#fffaf0` / `#ffffff` | Page / cards | — |
| `--color-yellow` `-coral` `-blue` `-green` `-lilac` `-pink` | `#ffd23f` `#ff8a65` `#7aa2ff` `#5fd39a` `#b8a4ff` `#ffa8c5` | Fills, stickers, highlights | Ink on each is 7:1 or more |
| `--color-sky` `-mint` `-sun` `-peach` `-lilac-tint` | `#dfe8ff` `#d4f3e3` `#fff1b8` `#ffe0d4` `#ebe4ff` | Bands and cards | — |
| `--color-accent` | `#2f5be0` | Primary buttons, links | White on it 5.7:1 |
| `--shadow-card` / `-hover` / `-press` | 2px ink ring + 4px / 7px / 1px offset | Sticker look | — |
| `--ease-spring` | `cubic-bezier(.34,1.56,.64,1)` | Bouncy hovers | — |

Type runs from `--text-display` (44→84px) down to `--text-micro` (13px), with `--text-hand` for Caveat notes. Radii are 10, 14, 22 and 30px, plus pills.

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
- `content/articles.ts`: the guides under /resources. Reading time is worked out from word count.
- `content/legal.ts`: the four legal pages.

## SEO and tech

- Organization schema on every page. FAQPage schema on home, pricing and service pages. Service and BreadcrumbList schema on service pages.
- Every page sets a canonical URL.
- Preview deployments (`VERCEL_ENV` other than production) are noindex and disallowed in `robots.txt`.
- Fonts are self-hosted via `next/font`.
