# Korrido — Visual Identity

---

## DESIGN PHILOSOPHY

Korrido's visual identity is built on the same tension as the product: the precision and measurability of digital, the premium feel of outdoor, the energy of a city in motion. The design system is dark-forward, high-contrast, and confident — the visual equivalent of a screen lighting up inside a cab at night.

**Design principles:**
1. **Dark is default.** The hero, the footer, the network stats, the pricing banner — all dark. Light surfaces are for content and reading. Dark surfaces are for impact.
2. **Red is the only accent.** No secondary accent colors. Red carries every CTA, every highlight, every moment of energy. Restraint creates recognition.
3. **Numbers are design.** "100+," "48 hours," "20–30 minutes," "16+ zones" — these are visual elements, not just copy. They are set large, bold, and black.
4. **Spacing is confidence.** Generous padding, generous line-height, generous negative space. The brand doesn't crowd — it occupies space deliberately.
5. **Motion is momentum.** Animations are subtle and purposeful — pulse dots, staggered reveals, hover lifts. Motion communicates "live" and "filling," not decoration.

---

## COLOR PALETTE

### Primary Colors

| Color Name | Hex | RGB | CMYK | Usage |
|---|---|---|---|---|
| **Korrido Red** | `#e40014` | 228, 0, 20 | 0, 100, 91, 11 | Primary accent, CTAs, highlights, focus rings, selection |
| **Korrido Red 600** | `#dc2626` | 220, 38, 38 | 0, 83, 83, 14 | Hover state for primary CTAs |
| **Korrido Red 700** | `#b91c1c` | 185, 28, 28 | 0, 85, 85, 28 | Deep red for gradient ends, dark-section accents |
| **Korrido Red 500** | `#ef4444` | 239, 68, 68 | 0, 72, 72, 6 | Bright red for dark-background highlights (hero text) |

### Dark / Neutral Colors

| Color Name | Hex | RGB | CMYK | Usage |
|---|---|---|---|---|
| **Ink Black** | `#030712` (gray-950) | 3, 7, 18 | 85, 78, 65, 93 | Primary dark surface — hero, footer, dark sections |
| **Red-Black Gradient End** | `#450a0a` (red-950) | 69, 10, 10 | 0, 86, 86, 73 | Gradient end for dark sections (gray-950 → red-950) |
| **Charcoal** | `#1f2937` (gray-800) | 31, 41, 55 | 64, 52, 31, 79 | Secondary dark, card backgrounds on dark sections |
| **Slate** | `#374151` (gray-700) | 55, 65, 81 | 32, 22, 0, 68 | Body text on dark backgrounds |
| **Muted Gray** | `#6b7280` (gray-500) | 107, 114, 128 | 16, 8, 0, 50 | Secondary text on light backgrounds, captions |
| **Light Gray** | `#f3f4f6` (gray-100) | 243, 244, 246 | 2, 1, 0, 4 | Section backgrounds, card borders |
| **Soft Gray** | `#f9fafb` (gray-50) | 249, 250, 251 | 1, 0, 0, 2 | Alternate section backgrounds |
| **White** | `#ffffff` | 255, 255, 255 | 0, 0, 0, 0 | Primary light surface, text on dark |

### Accent / Status Colors

| Color Name | Hex | RGB | Usage |
|---|---|---|---|
| **Emerald 600** | `#059669` | 5, 150, 105 | Success states (application received) |
| **Emerald 50** | `#ecfdf5` | 236, 253, 245 | Success state backgrounds |
| **Yellow 300** | `#fcd34d` | 252, 211, 77 | "Filling" status badge on dark backgrounds |
| **Selection Pink** | `#ffcaca` | 255, 202, 202 | Text selection background |
| **Selection Maroon** | `#82181a` | 130, 24, 26 | Text selection color |

### Color Usage Rules

1. **Red is the only brand accent.** Never introduce blue, green (except success states), purple, or teal as accent colors.
2. **Dark surfaces use red-400 (`#f87171`) for eyebrows and labels** — the brighter shade reads better on dark backgrounds.
3. **Light surfaces use red-700 (`#b91c1c`) for eyebrows and labels** — the deeper shade has proper contrast on white.
4. **Gradient pattern:** `from-gray-950 via-red-950 to-gray-950` for dark sections. `from-gray-950 to-red-950` for cards on dark sections.
5. **CTA hierarchy:** Primary CTA = `bg-red-700 text-white hover:bg-red-800`. Secondary CTA = `border border-white/20 bg-white/5 text-white` (on dark) or `border border-gray-200 text-gray-700` (on light).
6. **Accessibility:** Red on white meets 4.5:1 contrast at red-700 (`#b91c1c`). Red-500 (`#ef4444`) on gray-950 meets 3:1 for large text. Red-400 (`#f87171`) on gray-950 meets 4.5:1 for all text. Never use red-500 on white for body text — it fails contrast.

---

## TYPOGRAPHY

### Primary Typeface

**Poppins** — Google Fonts

| Weight | Usage |
|---|---|
| 400 (Regular) | Body copy, descriptions, form labels |
| 500 (Medium) | Nav links, secondary headings, card titles |
| 600 (Semibold) | Section headings, form sub-headings, button text |
| 700 (Bold) | Hero headlines, section headlines, card headlines |
| 800 (Extrabold) | Large display numbers ("0+") |
| 900 (Black) | Network stats display ("0+" counter) |

**Why Poppins:** Geometric, confident, modern. Reads as premium without being sterile. The rounded geometry softens the dark, high-contrast palette. Variable weights allow a wide expressive range from a single family.

### Fallback Stack

```css
font-family: var(--font-poppins), Arial, sans-serif;
```

When Poppins is unavailable: Arial → system sans-serif. Never substitute Inter, Roboto, or system fonts as primary — they create generic AI aesthetics.

### Type Hierarchy

| Level | Font | Weight | Size Range | Line Height | Usage |
|---|---|---|---|---|---|
| Display | Poppins | 900 (Black) | 72px–80px | 1.0 | Network stat counters, hero numbers |
| H1 / Hero | Poppins | 700 (Bold) | 34px–50px | 1.08 | Hero headlines, page titles |
| H2 / Section | Poppins | 700 (Bold) | 30px–44px | 1.1 | Section headlines |
| H3 / Card | Poppins | 600 (Semibold) | 18px–20px | 1.3 | Card titles, sub-sections |
| Body L | Poppins | 400 (Regular) | 16px–18px | 1.6 | Hero supporting text, lead paragraphs |
| Body | Poppins | 400 (Regular) | 14px–15px | 1.6 | Default body copy |
| Body S | Poppins | 400 (Regular) | 12px–13px | 1.5 | Card descriptions, secondary copy |
| Caption | Poppins | 400 (Regular) | 11px–12px | 1.4 | Captions, disclaimers, fine print |
| Label / Eyebrow | Poppins | 700 (Bold) | 10px–12px | 1.0 | Eyebrows, status labels, tracking tags |

### Typography Rules

- **Tracking (letter-spacing):** Eyebrows and labels use `tracking-[.2em]` to `tracking-[.25em]` (wide, uppercase). Body copy uses default tracking. Display numbers use `tracking-tight` or default.
- **Line height:** Headlines 1.08–1.1 (tight, confident). Body 1.5–1.6 (readable, generous). Captions 1.4.
- **Max line length:** 500–600px for body copy. 900px for long-form content. Never exceed 120 characters per line.
- **Responsive scaling:** Hero scales from 34px (mobile) to 50px (desktop). Section headlines scale from 30px to 44px. Use `md:` and `lg:` breakpoints.
- **Numbers in copy:** Always numerals — "100+," "48 hours," "20–30 minutes," "16+ zones." Never spell out in marketing copy.

---

## SPACING SYSTEM

Base unit: **4px** (Tailwind default). All spacing uses Tailwind's scale.

| Token | Value | Usage |
|---|---|---|
| `gap-2` | 8px | Tight gaps between badges, small elements |
| `gap-3` | 12px | Form field gaps, card internal spacing |
| `gap-4` | 16px | Card grid gaps, list item spacing |
| `gap-5` | 20px | Form section spacing, feature card gaps |
| `gap-6` | 24px | Section-level grid gaps |
| `gap-8` | 32px | Major section internal gaps |
| `gap-10` | 40px | Two-column layout gaps |
| `gap-12` | 48px | Large layout gaps |
| `gap-14` | 56px | Form-to-content gaps |
| `py-12` | 48px top/bottom | Compact section padding |
| `py-16` | 64px top/bottom | Standard section padding |
| `py-20` | 80px top/bottom | Feature section padding |
| `py-24` | 96px top/bottom | Hero / large section padding |
| `py-28` | 112px top/bottom | Maximum section padding |
| `px-4` | 16px | Mobile horizontal padding |
| `px-8` | 32px | Tablet horizontal padding |
| `px-12` | 48px | Desktop horizontal padding |

### Max Widths

| Container | Max Width | Usage |
|---|---|---|
| `max-w-[1400px]` | 1400px | Full-width sections (hero, capabilities, zones) |
| `max-w-7xl` | 1280px | Standard content sections |
| `max-w-[1000px]` | 1000px | Pledge page, wide content |
| `max-w-[960px]` | 960px | Application forms |
| `max-w-[900px]` | 900px | About page, content pages |
| `max-w-[760px]` | 760px | Legal pages |
| `max-w-2xl` | 672px | Body copy max width |
| `max-w-xl` | 576px | Headline max width |

---

## LOGO

### Logo Files

| File | Usage | Background |
|---|---|---|
| `korrido-light.svg` | Header, light backgrounds | White / light gray surfaces |
| `korrido-dark.svg` | Footer, dark backgrounds | Gray-950 / dark surfaces |
| `korrido-icon.svg` | Favicon, app icon, small spaces | Any (contains own background) |

### Logo Construction

The Korrido logo is a **wordmark + accent** design:
- **Wordmark:** "Korrido" set in Poppins ExtraBold (800), tight letter-spacing (-1.5px)
- **Accent:** A red (#B91C1C) motion line beneath the wordmark — a tapered bar suggesting movement, route, and direction. The accent ends in a small dot, implying a destination.
- **Icon variant:** A rounded-square (14px radius) with dark background (#080808), white "K" in Poppins Black (900), and the red motion line beneath.

### Logo Usage Rules

- **Clear space:** Minimum 1x the height of the logo mark on all sides.
- **Minimum size:** 132px wide (header) / 150px wide (footer). Never below 100px wide. Icon variant minimum 16x16 (favicon).
- **Alignment:** Left-aligned in header and footer. Center-aligned only in standalone contexts (email signature, presentation title slide).
- **Color:** Never recolor. Use light variant on dark backgrounds, dark variant on light backgrounds. Never place light logo on light background or dark logo on dark background.
- **Format:** Always use SVG. Never use PNG or raster versions. SVG is infinitely scalable and smaller in file size.

### Incorrect Usage

- Don't stretch or distort the logo
- Don't add drop shadows or glow effects
- Don't place on busy backgrounds without a solid container
- Don't recolor to non-brand colors
- Don't outline or add borders to the logo
- Don't rotate or skew the logo
- Don't animate the logo (static placement only)

---

## IMAGERY

### Photography Style

- **Subjects:** Cab interiors, tablet screens displaying ads, city streets at dusk/dawn, commuters in transit, drivers in their cabs.
- **Color treatment:** Warm, slightly desaturated. Dark interiors with screen glow as the light source. City shots at blue hour or golden hour — not midday flat light.
- **Mood:** Premium, quiet, in-motion. The feeling of being inside a cab at night with the screen glowing.
- **Composition:** Wide shots of cab interiors. Close-ups of screens showing creative. Over-the-shoulder shots of passengers. Street-level shots of cabs in motion with city bokeh.

### What to Avoid

- Stock photos of generic "business people" or "happy commuters" smiling at phones
- Bright, overexposed, corporate-stock lighting
- Images that imply surveillance (cameras, facial recognition, tracking overlays)
- Images that show passengers looking uncomfortable or captive in a negative way
- Cheesy "advertising success" imagery (thumbs up, charts going up, handshakes)

### Video

- **Hero video:** Cab interior footage, looped, muted, with dark gradient overlay. The screen is the focal point.
- **Treatment:** Slightly warm, cinematic, shallow depth of field. The cabin should feel premium, not cramped.
- **Poster image:** `cabin.jpg` as fallback when video doesn't load.

---

## ICONOGRAPHY

### Icon Library

**Lucide Icons** — the only approved icon library.

| Icon | Usage |
|---|---|
| `MapPin` | Zone targeting, location markers |
| `Rocket` | Launch, deployment, "go live" |
| `BarChart3` | Dashboard, performance tracking |
| `ShieldCheck` | Trust, GST verification, pledge |
| `CalendarClock` | Campaign scheduling |
| `Palette` | Creative formats |
| `MessageCircle` | Brief, contact |
| `Sparkles` | Premium, early partner advantage |
| `TrendingUp` | Growth, "filling" status |
| `Mail` | Email contact |
| `ChevronDown` | FAQ accordion |
| `ArrowRight` | CTA arrows |
| `Menu` / `X` | Mobile navigation |

### Icon Rules

- **Size:** 16px (h-4 w-4) for inline, 20px (h-5 w-5) for cards, 24px (h-6 w-6) for navigation.
- **Stroke:** Default Lucide stroke width (2px). Never modify.
- **Color:** Inherits from context — `text-red-600` on light, `text-red-400` on dark, `text-gray-600` for neutral.
- **Never use emojis as icons.** SVG icons only.
- **Never use custom or hand-drawn icons** without brand guardian approval.

---

## MOTION

### Motion Principles

1. **Motion means "live."** Pulse dots, animated counters, filling charts — these communicate that the network is active and growing.
2. **Subtle over flashy.** Hover lifts (`hover:-translate-y-0.5`), opacity transitions, staggered reveals. No bouncy springs, no parallax overload.
3. **Respect reduced motion.** All animations disabled under `prefers-reduced-motion: reduce`.

### Motion Patterns

| Pattern | Implementation | Usage |
|---|---|---|
| Pulse dot | `animate-pulse-dot` (1.5s ease-in-out infinite) | "Pre Booking" badge, live status indicators |
| Staggered reveal | Motion library `initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}` | Hero content on load |
| Hover lift | `hover:-translate-y-0.5 transition-all` | Zone chips, CTA buttons, cards |
| FAQ accordion | `grid-rows-[1fr]` / `grid-rows-[0fr]` transition with opacity | FAQ expand/collapse |
| Modal scale | `initial={{ scale: .94 }} animate={{ scale: 1 }}` | Slot preview modal |
| Chevron rotate | `rotate-180 transition-transform` | FAQ chevron on expand |

### Duration Standards

| Type | Duration | Easing |
|---|---|---|
| Hover transitions | 150–200ms | `transition-all` (default ease) |
| Accordion expand | 300ms | `transition-all duration-300` |
| Modal enter/exit | 300ms | Motion library default |
| Page load reveals | 500ms | Motion library default |
| Pulse dot | 1.5s | ease-in-out, infinite |

---

## FRONTEND AESTHETICS

### Backgrounds & Atmosphere

- **Dark sections:** Never flat `bg-gray-950`. Always gradient: `bg-gradient-to-br from-gray-950 via-red-950 to-gray-950` or `bg-gradient-to-br from-gray-950 to-red-950`.
- **Hero section:** Radial blur glow: `absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-red-500/10 blur-3xl` as a pointer-events-none atmosphere layer.
- **Light sections:** Alternate between `bg-white` and `bg-gray-50` to create rhythm. Never use pure white for every section.
- **Cards on dark:** `rounded-2xl bg-gradient-to-br from-gray-950 to-red-950 p-6 text-white shadow-xl shadow-red-900/20`.
- **Cards on light:** `rounded-2xl border border-gray-100 bg-white p-6` with `hover:border-red-200 hover:shadow-lg` on interactive cards.

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-lg` | 8px | Buttons, form inputs, small elements |
| `rounded-xl` | 12px | Feature icons, form fields, vehicle type buttons |
| `rounded-2xl` | 16px | Cards, sections, form containers |
| `rounded-3xl` | 24px | Large feature sections |
| `rounded-[28px]` | 28px | Hero panels, modal containers |
| `rounded-full` | 9999px | Pills, badges, status indicators, CTAs (pill style) |

### CTA Styles

| Type | Style | Usage |
|---|---|---|
| Primary (pill) | `rounded-full bg-red-700 px-6 py-3 text-sm font-bold text-white hover:bg-red-800` | Hero, section-end CTAs |
| Primary (block) | `rounded-xl bg-red-700 px-5 py-3 text-sm font-semibold text-white hover:bg-red-800` | Form submit, in-card CTAs |
| Primary (nav) | `rounded-lg bg-red-700 px-5 py-2 text-sm font-semibold text-white` | Header nav button |
| Secondary (dark) | `rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white` | On dark sections |
| Secondary (light) | `rounded-full border border-gray-200 text-gray-700` | On light sections |
| Inline link | `text-red-700 underline` or `text-red-700 hover:underline font-medium` | In-body links |

### Eyebrow Pattern

```tsx
<Eyebrow>WHY KORRIDO</Eyebrow>
// Renders: <div className="mb-4 inline-flex items-center text-xs font-bold tracking-[.2em] text-red-700">─── {children}</div>
```

- Always uppercase
- Always `tracking-[.2em]` or `tracking-[.25em]`
- Always `text-red-700` on light, `text-red-400` on dark
- Always preceded by `───` (three em dashes)
- Used to label sections: "HOW IT WORKS", "WHY KORRIDO", "COVERAGE ZONES", "FAQ", "ABOUT US"

---

## ACCESSIBILITY CHECKLIST

- [ ] Normal text contrast ≥ 4.5:1 (red-700 on white passes; gray-600 on white passes)
- [ ] Large text contrast ≥ 3:1 (red-500 on gray-950 passes for 18px+)
- [ ] Interactive element contrast ≥ 3:1 (red-700 buttons on white pass)
- [ ] Focus indicator: `outline: 2px solid #e40014; outline-offset: 2px` (implemented in globals.css)
- [ ] Never use color alone to convey information (status badges include text labels)
- [ ] All interactive elements reachable via keyboard (Tab, Enter, Spacebar)
- [ ] `prefers-reduced-motion: reduce` disables all animations (implemented in globals.css)
- [ ] Form fields have associated `<label>` elements
- [ ] Images have `alt` attributes (logo alt = "Korrido", hero alt = "Cab advertising screen")
- [ ] Video has `muted` and `playsInline` attributes for autoplay compliance

---

## ANTI-PATTERNS

- **Don't use generic AI fonts** (Inter, Roboto, Arial, Space Grotesk) as primary typeface — Poppins is the brand font
- **Don't introduce secondary accent colors** — red is the only accent
- **Don't use flat dark backgrounds** — always gradient (gray-950 → red-950)
- **Don't use emojis as UI icons** — Lucide SVG icons only
- **Don't use scale transforms on hover** that cause layout shift — use `translate-y` only
- **Don't use drop shadows on logos** — static placement, no effects
- **Don't use purple gradients on white** — this is the most generic AI aesthetic
- **Don't crowd sections** — generous padding and negative space are the brand's confidence
- **Don't use stock corporate photography** — authentic cab interior / city street imagery only
- **Don't animate the logo** — it is always static

---

*This visual identity document is the source of truth for all Korrido design decisions — website, deck, social, print, and product UI. Every visual choice should be checkable against this document.*
