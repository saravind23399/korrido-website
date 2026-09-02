# Korrido — Brand Guidelines

*Version 1.0 · Last updated · 2026*

---

## ABOUT THIS GUIDE

This document is the single source of truth for the Korrido brand. It covers foundation, visual identity, verbal identity, messaging, and application rules. Any designer, copywriter, marketer, or partner working on Korrido should reference this guide before creating anything. If a decision isn't covered here, it defaults to the brand strategy document at `.agents/brand-strategy.md`. If still unclear, ask the brand guardian.

---

## PART 1 — BRAND FOUNDATION

### Brand Essence

**Mission:** Turn every cab ride into measurable, premium advertising space — for brands that want to reach real people in real neighborhoods, on screens that respect both the passenger and the driver.

**Vision:** To become India's default in-cab advertising network — built on premium placement, hyper-local intelligence, and an honest measurement standard the industry has never had.

**Values:**
- **Innovation** — Technology is the product, not the backend. Ship fast, iterate faster.
- **Transparency** — Every advertiser sees the same data we see. No vanity metrics, no inflation.
- **Local-First** — Hire locally, partner with Indian fleets, prioritize local advertisers. Every zone is mapped by people who drive it.
- **Premium Quality** — HD screens, clean dashboard, 48-hour onboarding. Premium placement demands a premium experience.
- **Measurable Impact** — If it can't be measured, it doesn't belong on the platform. Verified impressions, not "exposure."

**Brand Personality:** Bold · Premium · Local · Data-driven · Trustworthy

**Positioning Statement:** Korrido is the hyper-local in-cab advertising network that brings the measurability and speed of digital advertising to the captive, premium attention of a cab ride — live in 48 hours, tracked by GPS, targeted by neighborhood.

**Brand Mantra (internal):** Every ride is inventory.

**Primary Tagline:** Your next customer is sitting in a cab.

---

## PART 2 — VISUAL IDENTITY

### Logo

**Primary logo files (SVG):**
- `korrido-light.svg` — for dark backgrounds (header on dark hero, footer)
- `korrido-dark.svg` — for light backgrounds (header on white, print)
- `korrido-icon.svg` — icon-only variant for favicon, app icon, small spaces

**Logo construction:** Wordmark "Korrido" in Poppins ExtraBold with a red (#B91C1C) motion line accent beneath — a tapered bar suggesting movement and direction, ending in a dot implying a destination.

**Clear space:** Minimum 1x the height of the logo mark on all sides.

**Minimum size:** 100px wide. Standard header size: 132px wide. Footer size: 150px wide. Icon variant: 16x16 minimum (favicon).

**Incorrect usage — never:**
1. Stretch or distort the logo
2. Add drop shadows, glow, or effects
3. Place on busy backgrounds without a solid container
4. Recolor to non-brand colors
5. Outline or add borders
6. Rotate or skew
7. Animate the logo (static placement only)
8. Place light logo on light background or vice versa

### Color Palette

**Primary:**

| Color | Hex | RGB | Usage |
|---|---|---|---|
| Korrido Red | `#e40014` | 228, 0, 20 | Primary accent, CTAs, focus rings, selection |
| Red 700 | `#b91c1c` | 185, 28, 28 | CTAs, eyebrows on light, deep gradient ends |
| Red 600 | `#dc2626` | 220, 38, 38 | CTA hover state |
| Red 500 | `#ef4444` | 239, 68, 68 | Highlights on dark backgrounds |
| Red 400 | `#f87171` | 248, 113, 113 | Eyebrows and labels on dark backgrounds |

**Dark / Neutral:**

| Color | Hex | RGB | Usage |
|---|---|---|---|
| Ink Black | `#030712` | 3, 7, 18 | Primary dark surface (gray-950) |
| Red-Black | `#450a0a` | 69, 10, 10 | Gradient end (red-950) |
| Charcoal | `#1f2937` | 31, 41, 55 | Secondary dark (gray-800) |
| Slate | `#374151` | 55, 65, 81 | Body text on dark (gray-700) |
| Muted Gray | `#6b7280` | 107, 114, 128 | Secondary text on light (gray-500) |
| Light Gray | `#f3f4f6` | 243, 244, 246 | Section backgrounds (gray-100) |
| Soft Gray | `#f9fafb` | 249, 250, 251 | Alt section backgrounds (gray-50) |
| White | `#ffffff` | 255, 255, 255 | Primary light surface |

**Status:**

| Color | Hex | Usage |
|---|---|---|
| Emerald 600 | `#059669` | Success states |
| Yellow 300 | `#fcd34d` | "Filling" badge on dark |

**Color rules:**
- Red is the only brand accent. No blue, green (except success), purple, or teal.
- Dark sections always use gradient: `from-gray-950 via-red-950 to-gray-950`.
- Light sections alternate `bg-white` and `bg-gray-50` for rhythm.
- Accessibility: red-700 on white = 4.5:1 (passes). Red-500 on white fails for body text — use red-700.

### Typography

**Primary typeface:** Poppins (Google Fonts) — weights 400, 500, 600, 700, 800, 900

**Fallback:** `var(--font-poppins), Arial, sans-serif`

**Never substitute:** Inter, Roboto, Arial, Space Grotesk, or system fonts as primary.

| Level | Weight | Size Range | Line Height | Usage |
|---|---|---|---|---|
| Display | 900 | 72–80px | 1.0 | Network stat counters |
| H1 / Hero | 700 | 34–50px | 1.08 | Hero headlines, page titles |
| H2 / Section | 700 | 30–44px | 1.1 | Section headlines |
| H3 / Card | 600 | 18–20px | 1.3 | Card titles, sub-sections |
| Body L | 400 | 16–18px | 1.6 | Lead paragraphs |
| Body | 400 | 14–15px | 1.6 | Default body copy |
| Body S | 400 | 12–13px | 1.5 | Card descriptions |
| Caption | 400 | 11–12px | 1.4 | Fine print |
| Eyebrow | 700 | 10–12px | 1.0 | Section labels (uppercase, tracking .2em) |

**Rules:**
- Numbers always as numerals: "100+," "48 hours," "20–30 minutes."
- Contractions are fine: "we're," "don't," "can't."
- Em dashes for contrast. Periods over exclamation marks. No semicolons in marketing copy.

### Imagery

**Photography:** Cab interiors, tablet screens, city streets at dusk/dawn, commuters in transit. Warm, slightly desaturated. Dark interiors with screen glow as light source. Premium, quiet, in-motion.

**Avoid:** Generic stock business photos, overexposed corporate lighting, surveillance imagery (cameras, facial recognition), "advertising success" clichés (thumbs up, handshakes, charts).

**Video:** Cab interior footage, looped, muted, dark gradient overlay. Poster fallback: `cabin.jpg`.

### Iconography

**Library:** Lucide Icons only. Never emojis as UI icons. Never custom icons without approval.

**Key icons:** MapPin, Rocket, BarChart3, ShieldCheck, CalendarClock, Palette, MessageCircle, Sparkles, TrendingUp, Mail, ChevronDown, ArrowRight, Menu, X.

**Sizes:** 16px (inline), 20px (cards), 24px (navigation). Default stroke width. Color inherits from context.

### Motion

- Motion means "live" — pulse dots, animated counters, filling charts.
- Subtle over flashy: hover lifts, opacity transitions, staggered reveals.
- Duration: 150–200ms (hover), 300ms (accordion/modal), 500ms (page load), 1.5s (pulse).
- Always respect `prefers-reduced-motion: reduce`.

---

## PART 3 — VERBAL IDENTITY

### Brand Voice

**Voice essence:** Korrido speaks with confident clarity — direct, premium, and quietly bold.

**Tone dimensions:**
- Serious-leaning (6/8) — confident and purposeful, not stiff
- Professional (5/8) — clean and direct, no corporate jargon
- Premium (7/8) — precise, clean, unhurried
- Innovative (7/8) — building something new, grounded in specifics
- Bold (6/8) — claims stated with conviction, momentum not volume

**Voice qualities:**

| Quality | Do | Don't |
|---|---|---|
| Direct | "20–30 minutes of attention. No scroll-skip. No ad-blocker." | "An unparalleled opportunity to engage your demographic..." |
| Premium | "Familiar like Meta Ads. Captive like cinema." | "Super amazing next-gen advertising!!!" |
| Confident | "We're taking over India's streets." | "We hope to eventually expand..." |
| Local | "Koramangala, HSR Layout, Indiranagar..." | "Various premium neighborhoods in the region..." |
| Honest | "Zero cameras, zero biometrics — ever." | "We prioritize user privacy through best practices." |
| Energetic | "Filling." / "Live now." / "Still counting." | "We are experiencing steady growth." |
| Plain-Spoken | "Upload your ad in seconds." | "Leverage our omnichannel mobility infrastructure..." |

### Writing Style

- Sentence length: 8–14 words average in marketing copy. Vary rhythm.
- Punctuation: Periods over exclamation marks. Em dashes for contrast. No semicolons in marketing.
- Capitalization: Sentence case for body and headlines. All-caps for eyebrows and status labels only.
- Numbers: Always numerals. Never spell out in marketing copy.
- Contractions: Use freely.
- Transitions: Earned, not smoothed. No "Furthermore," "Moreover," "It's worth noting."

### Vocabulary

**We say:** Live, captive, zone, hyper-local, impression, dashboard, fleet, creative (noun), brief (verb), slots, pledge, GPS-tracked, premium placement, honest measurement, passive income

**We don't say:** Revolutionary, game-changing, disruptive, cutting-edge, leverage, synergy, holistic, ecosystem, paradigm, omnichannel, 360-degree, best-in-class, world-class, empower, solution, innovative (show it), seamless, robust, scalable, any competitor name — ever

---

## PART 4 — MESSAGING

### Core Message

Korrido helps brands reach affluent commuters in specific neighborhoods by placing digital ads on screens inside cabs — live in 48 hours, tracked by GPS, targeted by zone.

### Value Proposition

Korrido is a hyper-local in-cab advertising network that puts your brand on HD screens inside cabs carrying your target audience through the neighborhoods that matter. Upload a creative, pin your zones, and go live in 48 hours — with a real-time dashboard showing impressions, zone coverage, and fleet activity. No cameras, no biometrics, no agency middleman. Just premium placement, honest measurement, and a captive 20–30 minute audience you can't reach anywhere else.

### Tagline

**Primary:** Your next customer is sitting in a cab.
**Brand mantra (internal):** Every ride is inventory.
**Alternatives:** Live in the cab. Tracked on the dashboard. / The street-level screen. / Premium placement. Honest measurement.

### Key Messages

1. **Live in 48 hours, not 48 days** — Upload creative, pick zones, go live. No agencies, no printing, no installation teams. *Proof: 48-hour SLA, wireless propagation.*

2. **Captive 20–30 minute audience** — Passengers sit with a screen in their direct line of sight. No scroll-skip, no ad-blocker, no swipe. *Proof: GPS-tracked ride duration, direct line-of-sight placement.*

3. **Hyper-local zone targeting** — Pin campaigns to specific neighborhoods. Reach people who live and work where your business operates. *Proof: 16+ active zones, GPS-verified zone coverage in live dashboard.*

4. **Honest measurement, zero cameras** — Impressions from GPS movement data, zone-crossing events, and occupancy estimates. Zero cameras. Zero biometrics. *Proof: Live dashboard, published methodology, zero-tracking pledge.*

### Proof Points

1. 100+ cabs live across South Bengaluru
2. 16+ active zones
3. 48-hour deployment SLA
4. GPS-based impression methodology (no cameras, no biometrics)
5. Real-time dashboard with impressions, zone coverage, fleet activity, play-proof logs
6. Up to 15% volume benefit (before GST)
7. GST-verified advertiser onboarding
8. Limited slots per zone (capped)
9. Wireless creative propagation — changes live in minutes
10. Parent: ERRIXO TECHNOLOGIES PRIVATE LIMITED (GSTIN: 29AAJCE8168M2ZQ)

---

## PART 5 — BRAND IN USE

### Website

- **Header:** White/90 backdrop-blur, sticky, logo left, nav center-right, red CTA button right.
- **Hero:** Dark gradient panel with video, red CTA pill, white headline with red highlight span.
- **Section rhythm:** Dark → light → dark → light. Eyebrows label every section.
- **CTAs:** Primary = red pill on dark, red block on light. Secondary = bordered on dark, bordered on light.
- **Footer:** Gray-950, dark logo, link columns, launch clock, copyright.
- **Page structure:**
  - `/` — Homepage (hero, how it works, why us, capabilities, zones, FAQ, trust, CTA)
  - `/story` — Brand story (narrative, milestones, pledge, values, founders, CTA)
  - `/pledge` — Pledge page (commitments to advertisers, drivers, passengers)
  - `/about` — About page (mission, values, founders)
  - `/apply` — Advertiser application form
  - `/drive` — Driver landing page
  - `/become-a-driver` — Driver application form
  - `/pricing` — Pricing reservation form
  - `/estimate` — Campaign estimator tool
  - `/terms`, `/privacy`, `/refund`, `/cancellation` — Legal pages

### Social Media

- **Profile:** Korrido logo as avatar. Bio: "Hyper-local in-cab advertising. Live in 48 hours. Tracked by GPS."
- **Post style:** Dark imagery with red accents. Stats and numbers as visual elements. Captions in brand voice — short, direct, proof-led.
- **Hashtags:** #Korrido #InCabAdvertising #HyperLocalAds #Bengaluru (no competitor-adjacent tags)

### Email

- **Header:** Dark band with Korrido dark logo. Red accent line.
- **Body:** White background, Poppins font, gray-600 body text, red-700 links.
- **Signature:** Name, title, Korrido, team@korrido.com, korrido.com.
- **Subject lines:** Direct and urgency-driven. "Your ad, live in 100+ cabs this week." / "Koramangala slots filling — reserve yours."

### Sales Deck

- **Theme:** Dark background (gray-950 → red-950 gradient), white text, red accents.
- **Title slide:** Korrido logo, tagline, date.
- **Structure:** Problem → Solution → How it works → Coverage → Pricing → Proof → CTA.
- **Charts:** Red as primary data color. Cycle red-700 → red-500 → red-400 for multi-series.

### Print

- **Business cards:** Dark (gray-950) background, light logo, white text, red accent line. Name in Poppins 600, title in Poppins 400 gray-400, contact in Poppins 400 white.
- **Letterhead:** White background, dark logo top-left, red accent line, body in Poppins 400 gray-600.

---

## PART 6 — BRAND DON'TS

- [ ] Never name, reference, or compare against any competitor in public-facing content
- [ ] Never use colors outside the approved palette (red is the only accent)
- [ ] Never use fonts outside the brand system (Poppins only)
- [ ] Never write in passive, corporate, or hedging tone
- [ ] Never use "revolutionary," "game-changing," "seamless," "robust," "scalable," "best-in-class"
- [ ] Never use emojis as UI icons (Lucide SVG only)
- [ ] Never use flat dark backgrounds (always gradient)
- [ ] Never imply passenger surveillance (cameras, facial recognition, tracking people)
- [ ] Never use stock corporate photography
- [ ] Never animate the logo
- [ ] Never place light logo on light background or dark logo on dark background
- [ ] Never use Inter, Roboto, Arial, or Space Grotesk as primary typeface

---

## PART 7 — CONTACTS & ASSETS

**Brand guardian:** Aravind S (Co-Founder, Product & Engineering) — brand decisions and approvals
**Technical lead:** Vishal Prathush R (Co-Founder, Product & Operations) — implementation and digital asset standards
**Contact:** team@korrido.com
**Address:** Plot No 317/1, 8th Cross Road, Ganapathy Nagar, Peenya, Bengaluru, Karnataka 560058, India
**Parent organization:** ERRIXO TECHNOLOGIES PRIVATE LIMITED (GSTIN: 29AAJCE8168M2ZQ)

**Asset locations:**
- Logo files: `public/images/korrido-light.svg`, `public/images/korrido-dark.svg`, `public/images/korrido-icon.svg`
- Hero imagery: `public/images/HERO.png`, `public/images/cabin.jpg`
- Founder photos: `public/images/founders/`
- Brand documents: `.agents/brand-context.md`, `.agents/brand-strategy.md`, `.agents/brand-voice-messaging.md`, `.agents/brand-visual-identity.md`, `.agents/brand-guidelines.md`

---

## RELATED DOCUMENTS

| Document | Path | Purpose |
|---|---|---|
| Brand Context | `.agents/brand-context.md` | Foundation profile — identity, audience, positioning, values |
| Brand Strategy | `.agents/brand-strategy.md` | Full 12-section strategy — vision, mission, goals, personas, positioning, taglines |
| Voice & Messaging | `.agents/brand-voice-messaging.md` | Voice profile, tone dimensions, vocabulary, messaging hierarchy, channel adaptation |
| Visual Identity | `.agents/brand-visual-identity.md` | Color, typography, spacing, logo, imagery, iconography, motion, frontend aesthetics |
| Brand Guidelines | `.agents/brand-guidelines.md` | This document — consolidated reference for all brand decisions |

---

*This guidelines document is the consolidated brand book. For deeper context on any section, refer to the related document. The brand never references, compares against, or mentions any competitor by name in any public-facing communications.*
