# Corpunex design system

## Rationale

Founders hand us their company's legal identity, so the site has to read as an accountable firm, not a growth-hacked SaaS landing page. The reference points are a private bank's restraint (Mercury, Wise) and a law firm's precision, carried in Stripe Atlas-style clarity about process and price.

- **Editorial serif with a working grotesk.** Newsreader (optical sizes up to 72) carries headlines at large, tight settings, which is where trust is built. Inter handles body, tables and UI at 17px. Both are self-hosted through `next/font`, so there are no layout shifts and no third-party font requests.
- **One ink, one paper, one accent.** Deep navy ink on warm off-white. Burnt sienna is the only accent, kept for primary buttons and key numbers like prices and totals. Nothing is decorated with colour, so when colour appears it means "act here" or "this is the number".
- **Rules instead of cards.** Sections are built from hairline rules, ruled lists and tables, the way a printed annual report would be laid out. Cards appear only where an object is a single unit: a pricing tier, the fee receipt, the quote card.
- **Varied section structure.** The homepage never repeats label + heading + subtitle + 3 cards. It moves through a split hero, a horizontal timeline, an invoice-style calculator, a sticky-heading ruled list, a featured-plus-pair story layout, a staggered portrait row, a full-bleed ink band, an editorial guide list, and a two-column FAQ and form.
- **Honesty is designed in.** Government fees, third-party costs and our fee are always shown as separate lines. Timelines come from one constant (`timeline` in `src/config/site.ts`), so the site cannot contradict itself. Placeholders are rendered with a visible hatched highlight, so unverified claims cannot ship unnoticed.
- **Mobile first.** Layouts are written for 390px and widen at 600, 768, 900 and 1080px. Every control is at least 44px tall. A sticky bottom bar on phones holds the primary CTA and WhatsApp.
- **Motion.** The only motion is a 150–220ms fade and nudge on menus, accordions and arrows. There is no scroll animation or parallax, and every duration drops to 0 under `prefers-reduced-motion`.

## Token sheet

All tokens are defined in one file, [`src/styles/tokens.css`](src/styles/tokens.css). Components never hard-code colours or font sizes.

### Colour

| Token | Value | Use | Contrast |
|---|---|---|---|
| `--color-ink` | `#0f1d2e` | Headlines, dark bands, selected states | 15.5:1 on paper |
| `--color-ink-soft` | `#24344a` | Body copy | 11.5:1 on paper |
| `--color-ink-muted` | `#56606e` | Secondary copy, labels | 5.8:1 on paper, 5.2:1 on paper-deep |
| `--color-ink-faint` | `#7a828d` | Decorative marks, text 24px and up only | 3.5:1 |
| `--color-paper` | `#f6f4ef` | Page background | — |
| `--color-paper-deep` | `#ece8df` | Alternating bands | — |
| `--color-surface` | `#ffffff` | Panels, inputs | — |
| `--color-line` | `#ddd8cd` | Hairline dividers | — |
| `--color-line-strong` | `#b9b2a4` | Emphasised dividers (not controls) | — |
| `--color-line-input` | `#857f73` | Form control and secondary button edges | 3.6:1 (meets WCAG 1.4.11) |
| `--color-accent` | `#b4461b` | Primary CTA, prices, totals | White text on it 5.5:1; as text on paper 5.0:1 |
| `--color-accent-hover` | `#963813` | Primary CTA hover | — |
| `--color-on-ink` / `--color-on-ink-muted` | `#f6f4ef` / `#b6bec9` | Text on ink bands | 15.5:1 / 9.1:1 |
| `--color-success` / `--color-error` | `#1f6a43` / `#a3261b` | Form states, included ticks | 6.6:1 / 7.4:1 on white |
| `--color-focus` | `#1f5fbf` | Focus ring (2px, 3px offset) | 5.5:1 on paper |

### Type

| Token | Size (390px → 1440px) | Use |
|---|---|---|
| `--text-display` | 40 → 76px | Homepage hero |
| `--text-h1` | 36 → 60px | Page titles |
| `--text-h2` | 30 → 46px | Section titles |
| `--text-h3` | 20 → 26px | Sub-sections, story titles |
| `--text-h4` | 18px | Card titles, FAQ questions on mobile |
| `--text-lead` | 17 → 20px | Hero and intro paragraphs |
| `--text-body` | 17px | Body copy |
| `--text-small` | 15px | Tables, lists, UI |
| `--text-micro` | 13px | Uppercase labels, fine print |

Headings use `--font-display` at weight 400, with `-0.022em` tracking and 1.06 to 1.18 leading. Body uses `--font-body` with 1.6 leading. Labels are 13px, semibold, uppercase, tracked `0.08em`.

### Spacing, layout, radius, motion

- **Spacing:** 4px base, from `--space-1` (4px) to `--space-10` (128px). Section padding is `--space-section`, 64px to 128px.
- **Layout:** `--layout-max` 1280px; gutter 16px, 32px or 40px; a 12-column grid with a 24px gap, 32px from 1200px. Text measure is 62ch.
- **Radius:** `--radius-sm` 3px, `--radius-md` 6px (buttons, inputs), `--radius-lg` 10px (panels, photos).
- **Elevation:** `--shadow-menu` for the mega menu and `--shadow-bar` for the mobile bar. Nothing else casts a shadow.
- **Motion:** `--duration-fast` 150ms and `--duration-base` 220ms on `--ease-out`. Both drop to 0 under reduced motion.

## Component list

| Component | Path | Notes |
|---|---|---|
| `SiteHeader` | `components/site/SiteHeader.tsx` | Mega menu by founder journey (Start, Run, Raise, Protect), opening on hover or click with Escape and outside-click to close. Full-screen drawer with accordions on mobile. Login appears only once `site.loginUrl` is set. |
| `SiteFooter` | `components/site/SiteFooter.tsx` | Service and company columns, contact details, entity details (legal name, CIN, GSTIN, registered office), disclaimer. |
| `MobileActionBar` | `components/site/MobileActionBar.tsx` | Sticky bottom CTA and WhatsApp below 900px. |
| `ButtonLink`, `Button`, `TextLink` | `components/ui/Button.tsx` | Variants: `primary` (accent), `secondary`, `ink`, `onInk`; sizes `default` and `large`. |
| `Ph`, `Fact`, `Label` | `components/ui/Placeholder.tsx` | `Ph` marks inline copy that needs real content. `Fact` renders a content string and highlights any `[VERIFY…]` or `[REAL…]` inside it. |
| `PhotoFrame` | `components/ui/PhotoFrame.tsx` | Takes real photos only. Without `src` it shows a marked frame at the final aspect ratio. |
| `JsonLd` | `components/ui/JsonLd.tsx` | Escaped schema.org output. |
| `FeeEstimator` | `components/pricing/FeeEstimator.tsx` | Interactive estimate in an invoice-style layout. Logic lives in `lib/fees.ts`. Accepts `entity` to lock the structure. |
| `PricingTiers`, `ComparisonTable`, `PriceList` | `components/pricing/` | Incorporation tiers with included and excluded items, an entity comparison table, and ongoing service prices. |
| `FaqList`, `faqSchema` | `components/shared/FaqList.tsx` | Native `<details>` accordion. The schema leaves out answers that still contain placeholders. |
| `ContactForm`, `ContactPanel` | `components/shared/` | Name, phone, email, one topic dropdown and an optional message, plus WhatsApp, booking and phone links. |
| `CtaBand` | `components/shared/CtaBand.tsx` | Closing ink band with one primary action. |
| Home sections | `components/home/` | `Hero`, `ClientLogos` (hidden while empty), `Journey`, `PricingSection`, `Differentiators`, `CaseStudies`, `Team`, `ForeignFounders`, `Guides`, `FaqContact`. |
| `ServicePage` | `components/service/ServicePage.tsx` | Template for any service. Sections: outcome headline, who it is for, included and excluded, documents, milestones, process, after incorporation, fee estimator, comparison, FAQs, related services, and a sticky quote card. Fed by a `ServicePageContent` object (`content/services/types.ts`). |

### Content and data

- `config/site.ts`: company facts, contact channels, the single `timeline`, and the disclaimer.
- `lib/fees.ts`: fee model shared by every price on the site.
- `content/navigation.ts`, `content/home.ts`, `content/pricing.ts`, `content/services/private-limited.ts`.

To migrate another service, add `content/services/<slug>.ts` that satisfies `ServicePageContent` and render `<ServicePage content={…} />` from its route.

## SEO and tech

- Organization schema sitewide. FAQPage schema on home, pricing and service pages. Service and BreadcrumbList schema on service pages.
- Canonical URLs are set per page on the rebuilt routes.
- `robots` metadata and `robots.txt` switch to noindex and disallow whenever `VERCEL_ENV` is not `production`. Preview deployments stay out of search.
- `/pricing` is added to the sitemap.
- The custom Turbopack `*.css` rule was removed from `next.config.ts`. It turned CSS Modules into global CSS, and Tailwind was not imported anywhere.
