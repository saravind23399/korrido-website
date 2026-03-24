```markdown
# Design System Document: Urban Retro-Pop Editorial

## 1. Overview & Creative North Star: "The Analog Pulse"

This design system is built to bridge the gap between high-energy urban movement and the tactile nostalgia of mid-century print media. Our Creative North Star is **"The Analog Pulse."** 

We are moving away from the sterile, "app-like" interfaces of the last decade. Instead, we are creating a digital environment that feels like a premium, weathered broadsheet or a high-end pop-art gallery. The layout should feel intentional and curated, utilizing **intentional asymmetry**—such as offset imagery and overlapping typography—to break the rigid digital grid. By layering distressed textures with sophisticated serif typography, we evoke a sense of "Sophisticated Energy" that feels both timeless and urgent.

---

## 2. Colors: The Burnt Palette

Our palette is inspired by sun-faded street posters and vintage transit maps. It is designed to feel warm, organic, and deeply grounded.

### Color Tokens
*   **Primary (`#a43716`):** A deep burnt orange. Use this for high-energy actions and brand moments.
*   **Secondary (`#7c5800`):** A mustard gold used for secondary emphasis.
*   **Tertiary (`#256567`):** A muted teal that provides a sophisticated cooling contrast to the warmer tones.
*   **Surface (`#fff8ef`):** A faded cream, acting as our weathered "paper" base.

### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to define sections. Boundaries must be created through background shifts. For instance, a `surface-container-low` (`#fcf3de`) sidebar should sit flush against a `surface` (`#fff8ef`) main content area. The eye should perceive the change in depth through color, not a "stroke."

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of cardstock. 
*   **Layer 0:** `surface` (The base canvas).
*   **Layer 1:** `surface-container-low` (Nested secondary info).
*   **Layer 2:** `surface-container-highest` (High-priority interactive modules).

### Signature Textures & Gradients
To avoid a flat "vector" look, use subtle linear gradients transitioning from `primary` (`#a43716`) to `primary-container` (`#c54f2c`) on hero buttons. Integrate halftone patterns (opacity 5-8%) over these gradients to mimic 1960s silk-screen printing.

---

## 3. Typography: Editorial Authority

We use a high-contrast pairing: **Newsreader** (a classic, sturdy serif) for storytelling and **Manrope** (a humanist sans-serif) for functional data and utility.

*   **Display-LG (Newsreader, 3.5rem):** Reserved for hero headlines. Use tight letter-spacing (-0.02em) to give it a "printed" weight.
*   **Headline-MD (Newsreader, 1.75rem):** Use for section headers. Don't be afraid to overlap these slightly with imagery for an editorial feel.
*   **Title-MD (Manrope, 1.125rem):** The primary navigational and component-level font.
*   **Body-LG (Manrope, 1rem):** Optimized for readability with a generous 1.6x line-height.

The hierarchy communicates authority (serif) balanced with modern urban efficiency (sans-serif).

---

## 4. Elevation & Depth: Tonal Layering

Traditional drop shadows are too "digital" for this system. We use **Tonal Layering** to define space.

*   **The Layering Principle:** Place a `surface-container-lowest` (#ffffff) card on a `surface-container-low` (#fcf3de) background to create a "lifted" effect. This mimics physical paper layers.
*   **Ambient Shadows:** If a floating element (like a FAB) is required, use a large blur (24px+) with a 6% opacity shadow tinted with `on-surface` (#1f1b0f). It should look like an object catching soft, ambient urban light.
*   **The "Ghost Border" Fallback:** If a container needs a boundary for accessibility, use the `outline-variant` token at 15% opacity. Never use 100% black or high-contrast grey borders.
*   **Glassmorphism:** For overlays or navigation bars, use `surface` at 80% opacity with a `20px backdrop-blur`. This allows the vibrant "Burnt Retro" colors of the background to bleed through, softening the interface.

---

## 5. Components

### Buttons
*   **Primary:** Solid `primary` (`#a43716`) with `on-primary` (`#ffffff`) text. Roundedness: `md` (0.375rem). Apply a subtle halftone overlay.
*   **Secondary:** `surface-container-highest` with `secondary` text. No border.
*   **Tertiary:** Text-only in `tertiary` (`#256567`), utilizing a thick 2px underline that animates on hover.

### Cards & Lists
*   **Rule:** Forbid divider lines. Use `spacing-6` (2rem) of vertical white space to separate items.
*   **Card Style:** Use `surface-container` background with an offset "shadow box" effect (a second rectangle behind the card in `primary-fixed` offset by 4px) to mimic pop-art stylings.

### Input Fields
*   **Visuals:** Use a `surface-variant` background. Instead of a 4-sided border, use a thick 3px bottom-border in `outline`. This feels more like a "ledger" or an analog form.

### Signature Component: The "Transit Chip"
*   For mobility statuses, use a `tertiary` chip with a distressed "stamp" texture. It should look like a validated physical ticket.

---

## 6. Do's and Don'ts

### Do:
*   **Do** embrace asymmetry. Center-aligning everything is a "template" trap. Offset your headlines.
*   **Do** use the spacing scale religiously. Luxury is defined by the space between elements (e.g., use `spacing-12` for section margins).
*   **Do** apply a subtle "noise" or grain overlay (3% opacity) to the entire background to kill the "digital flat" effect.

### Don't:
*   **Don't** use 1px borders. If you need a line, use a thick `8px` "Pop-Art" block of color or nothing at all.
*   **Don't** use pure black (#000000). Our "darkest" color is `on-background` (#1f1b0f), which maintains the vintage, ink-on-paper warmth.
*   **Don't** use standard easing. For interactions, use a "staccato" ease-in-out that feels more like a mechanical flip-clock than a smooth digital slide.

---

*Note to Designers: This system is a living document. Use your intuition to ensure the "Distressed Pop Art" vibe never compromises the "Sophisticated" brand pillar. If it looks like a comic book, you've gone too far. If it looks like a bank app, you haven't gone far enough.*```