```markdown
# Design System Philosophy: The Architectural Concierge
 
This design system is built upon the concept of **"The Architectural Concierge."** We are moving away from the cold, flat constraints of traditional B2B SaaS and moving toward a digital experience that feels like a physical, premium space. It is characterized by structured depth, intentional asymmetry, and a high-contrast editorial aesthetic.
 
Our "Creative North Star" is to treat the UI as a series of curated layers. By utilizing tonal shifts, soft environmental shadows, and expansive whitespace, we create a sense of "quiet luxury"—a futuristic interface that feels both authoritative and approachable.
 
---
 
### 1. Typography & Hierarchy
 
The typographic identity relies on the tension between two distinct sans-serifs: the structural, geometric personality of **Space Grotesk** and the refined, legible clarity of **Manrope**.
 
*   **Space Grotesk (Display & Headlines):** Used for large-scale impact. Its slightly futuristic, wide-set glyphs suggest innovation and precision. 
    *   *Styling Note:* Apply a subtle negative letter-spacing (-0.02em) on `display-lg` to create a tighter, more "logo-like" feel for headlines.
*   **Manrope (Body & Titles):** Used for functional content. It provides a human, warm counterpoint to the rigid headlines.
    *   *Styling Note:* Use generous letter-spacing (0.01em to 0.03em) for `body-md` and `label` tiers to enhance the "High-End Editorial" feel.
 
| Role | Token | Font | Size | Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `display-lg` | Space Grotesk | 3.5rem | 700 |
| **Section Head** | `headline-md` | Space Grotesk | 1.75rem | 500 |
| **Subhead** | `title-lg` | Manrope | 1.375rem | 600 |
| **Main Copy** | `body-lg` | Manrope | 1.0rem | 400 |
| **Secondary** | `body-md` | Manrope | 0.875rem | 400 |
| **Metadata** | `label-sm` | Manrope | 0.6875rem | 500 |
 
---
 
### 2. Color & Tonal Depth
 
This system rejects the "flat blue" standard of B2B. We use a palette of crisp neutrals punctuated by a signature soft pink to denote action and premium status.
 
#### The "No-Line" Rule
**Explicit Instruction:** Do not use 1px solid borders to section off the interface. Boundary definition must be achieved through:
1.  **Background Shifts:** Placing a `surface-container-low` section against a `surface` background.
2.  **Tonal Transitions:** Moving from a light surface to a slightly darker one to imply containment.
 
#### Color Tokens
*   **Background (`#f9f9f9`):** The canvas. Always clean and expansive.
*   **Primary Container (`#ffd1dc`):** Our signature soft baby pink. Reserved for high-priority calls to action and "concierge" moments.
*   **On-Surface (`#1a1c1c`):** Deep black for primary text. This creates the high-contrast architectural look.
*   **Surface-Container Tiers:** Use `lowest` (#ffffff) through `highest` (#e2e2e2) to create physical "steps" in the UI.
 
---
 
### 3. Elevation & The Layering Principle
 
To achieve "Dimensional Luxe," depth is not a decoration; it is a structural tool.
 
*   **Tonal Layering:** Depth is primarily conveyed by "stacking." For example, a card (`surface-container-lowest`) should sit on a section background (`surface-container-low`). This creates a soft, natural lift without the clutter of lines.
*   **Ambient Shadows:** When an element must float (like a dropdown or a primary modal), use an ultra-diffused shadow. 
    *   *Values:* `Y: 20px, Blur: 40px, Color: rgba(26, 28, 28, 0.06)`. 
    *   Avoid dark, tight "drop shadows" which feel dated and heavy.
*   **Glassmorphism:** For top navigation bars or floating action panels, utilize `surface-container-lowest` at 80% opacity with a `backdrop-filter: blur(12px)`. This allows the content beneath to bleed through, creating a futuristic, high-end "frosted glass" effect.
*   **The Ghost Border Fallback:** If a border is required for accessibility, use the `outline-variant` token at 15% opacity. It should be felt, not seen.
 
---
 
### 4. Components & Signature UI
 
#### Buttons
*   **Primary:** High-contrast. Background: `on-surface` (#1a1c1c); Text: `surface` (#f9f9f9). 12px rounded corners.
*   **Signature CTA:** Background: `primary-container` (#ffd1dc); Text: `on-primary-container` (#7a5761). Use this for "Book Now" or "VIP" actions.
*   **Tertiary:** No background. Underlined with a 2px stroke of `primary-container` (#ffd1dc) only on hover.
 
#### Cards & Containers
*   **Constraint:** Zero borders.
*   **Styling:** Use `surface-container-lowest` (#ffffff) with a subtle `md` corner radius (0.75rem). Use vertical whitespace (from a 8px grid) to separate internal content rather than divider lines.
 
#### Input Fields
*   **State:** Default inputs should use `surface-container-low` (#f3f3f3) as a background with no border. 
*   **Focus:** Upon focus, the background shifts to `surface-container-lowest` (#ffffff) and gains a 1px "Ghost Border" using the `primary` (#78555e) color at 40% opacity.
 
#### Signature Component: The "Concierge Sheet"
A slide-over or bottom-sheet component that uses a heavy backdrop blur. It should feel like a physical sheet of glass being placed over the interface, maintaining the architectural theme.
 
---
 
### 5. Interaction & Motion
 
*   **The Soft Glide:** Transitions should be timed at 300ms using a "Quintic" easing curve (`cubic-bezier(0.23, 1, 0.32, 1)`). This makes elements feel like they have weight and are gliding across a polished surface.
*   **Micro-interactions:** When hovering over a card, it should not "pop" up. Instead, it should transition its background color from `surface-container-lowest` to `surface-bright`, creating a subtle "glow" of importance.
 
---
 
### 6. Do’s and Don’ts
 
**DO:**
*   **DO** use whitespace aggressively. If a section feels crowded, double the padding.
*   **DO** use the signature pink (#ffd1dc) sparingly. It is a "reward" color for the user's eyes.
*   **DO** align text to a strict architectural grid, but allow images or decorative elements to break the grid (overlap) to create depth.
 
**DON'T:**
*   **DON'T** use 100% opaque black borders. They break the "Dimensional" illusion.
*   **DON'T** use standard Material Design "Floating Action Buttons" (FABs). Instead, use integrated floating panels with glassmorphism.
*   **DON'T** use generic iconography. Use thin-stroke (1.5px), open-ended icons that match the architectural vibe of Space Grotesk.
 
---
 
### 7. Accessibility
 
While maintaining a luxury aesthetic, we must ensure the `on-primary-container` text (#7a5761) used on the pink accent background (#ffd1dc) meets WCAG AA standards for contrast. Always prioritize legibility over "vibe" when it comes to critical user data. Use the `error` (#ba1a1a) token for destructive actions, but soften it with a `error-container` background to keep it within the "Luxe" tonal range.```