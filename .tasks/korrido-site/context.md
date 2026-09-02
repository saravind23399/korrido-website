# Korrido clone context

Baseline: 2026-08-31
Canonical deployment: https://korrido.com

## Scope

Routes: `/`, `/apply`, `/pricing`, `/drive`, `/become-a-driver`, `/estimate`, `/pledge`, `/about`, `/terms`, `/privacy`, `/refund`, `/cancellation`.

The authenticated app and Experience microsite are excluded. Their navigation controls are hidden. Forms and the estimator run locally without transmitting or persisting personal data. All analytics and source tracking IDs are excluded.

## Visual system

- Font: Poppins, weights 400–900.
- Container: 1400px with 16px/32px/48px responsive gutters.
- Primary red: Tailwind red-700 (`#bf000f`); dark surface: gray-950 (`#030712`).
- Header: 64px, white at 90% opacity, subtle bottom border, backdrop blur.
- Cards: 12–28px radii, low-contrast gray borders, diffuse shadows.
- Breakpoints follow Tailwind defaults, with primary desktop layouts at 1024px and above.
- Motion: 300ms transitions, subtle translate/opacity changes, reduced-motion fallback.

## Assets

- `/images/korrido-light.png`
- `/images/korrido-dark.png`
- `/images/HERO.png`
- `/images/cabin.jpg`
- `/videos/cabin.mp4`
- `/images/Ishant.png`

## Estimator

Five steps: goal, ad type, coverage, passenger reach, estimate. Goals use target frequency from 1× to 5×. Priority coverage supports up to four zones. Reach spans 15,000–200,000. The local result calculates campaign value, volume benefit, GST, final payable, plays, and estimated completion without an API request.

## Source references

Existing desktop/tablet/mobile homepage screenshots remain under `screenshots/`. Runtime route screenshots were inspected for advertiser application, driver application, estimator, pledge, and about pages. The source snapshot is authoritative if the live site changes after the baseline date.
