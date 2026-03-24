# Design System Strategy: Night Metropolis / Kinetic Pop



## 1. Overview & Creative North Star

The Creative North Star for this design system is **"The Neon Brutalist."**



This is not a standard "safe" dark mode. It is a high-contrast, high-energy editorial experience that captures the vibration of a 1960s metropolitan night. We are blending the raw, mechanical power of Kinetic Art with the unapologetic boldness of Pop Art.



By utilizing **Space Grotesk** as a structural foundation and framing elements with heavy, definitive strokes, we move away from the "soft" web and toward a "printed" urban aesthetic. The design breaks the grid through intentional layering: elements should feel like posters pasted on a dark city wall—overlapping, staggered, and buzzing with the energy of the `primary` yellow signals.



---



## 2. Colors: The High-Contrast Pulse

The palette is built on a foundation of absolute darkness (`surface` #0e0e0e) to allow the "urban signals" of `primary` yellow and `secondary` cyan to vibrate.



### The "No-Line" Rule (Internal)

While this system uses heavy external outlines for character, **prohibit 1px silver/grey dividers for internal sectioning.** Interior boundaries must be defined by shifts in surface tiers (e.g., a `surface-container-high` card resting on a `surface` background).



### Surface Hierarchy & Nesting

Treat the UI as a physical stack of asphalt and neon:

* **Base:** `surface` (#0e0e0e) is your pavement.

* **Secondary Level:** `surface-container-low` (#131313) for large layout blocks.

* **Interactive Level:** `surface-container-highest` (#262626) for cards that need to pop.

* **Nesting:** Place a `surface-container-highest` element inside a `surface-container-low` zone to create depth without a single drop shadow.



### Signature Textures

* **The Kinetic Glow:** For main CTAs, do not use flat fills. Use a linear gradient from `primary` (#ffeea1) to `primary-container` (#fedf00) at a 45-degree angle. This simulates the flicker of a neon sign.

* **The Error Pulse:** Use `error` (#ff7351) against `surface` for a high-alert, "emergency signal" feel.



---



## 3. Typography: The Space Grotesk Grid

We lead with **Space Grotesk**, a typeface that feels both engineered and eccentric.



* **Display (lg/md):** Use for hero statements. Tracking should be tightened to `-0.02em`. These are your "billboards."

* **Headline (lg/md):** High-impact navigation and section headers. Always use `on-surface` (#ffffff).

* **Title (sm/md):** The workhorse for card headers.

* **Body (lg/md):** Maintain readability. Ensure `on-surface-variant` (#adaaaa) is used for secondary body text to create a hierarchy against the stark white of primary labels.



**Editorial Rule:** Never center-align long-form text. Stick to a hard-left "brutalist" rag to maintain the kinetic, fast-paced urban feel.



---



## 4. Elevation & Depth: The Kinetic Stack

In this system, we do not use "natural" light. We use "mechanical" depth.



* **The Layering Principle:** Depth is achieved by stacking `surface-container` tiers. For a premium feel, a `surface-bright` (#2c2c2c) element can "float" over the `background`, but it must be anchored by a `primary` border.

* **Heavy Outlines:** This is the signature. Use a `2px` or `3px` solid border using `surface-container-lowest` (#000000) or `outline` (#767575) to frame containers. This mimics the comic-book/pop-art aesthetic.

* **The Ghost Border:** For subtle containment (like input fields), use `outline-variant` (#484847) at 20% opacity.

* **Glassmorphism:** For top navigation bars or floating action menus, use `surface` at 70% opacity with a `20px` backdrop-blur. This creates a "wet pavement" reflection effect typical of a night metropolis.



---



## 5. Components: Urban Modules



### Buttons (The Kinetic Trigger)

* **Primary:** Solid `primary` (#ffeea1) fill, `2px` solid black (`#000000`) border. Zero roundedness (`0px`). Text in `on-primary-fixed` (#473d00).

* **Secondary:** `2px` solid `secondary` (#00eefc) border, no fill. Text in `secondary`.

* **State Change:** On hover, shift the background fill to `primary-dim` (#eed100) and offset the box by `2px` (the "Pop-Art Lift").



### Input Fields

* **Style:** Rectangular (`0px` radius). Background `surface-container-high`.

* **Focus:** A high-impact `2px` border in `secondary` (#00eefc). Helper text must be in `label-sm`.



### Cards & Lists

* **Rule:** Forbid divider lines.

* **Implementation:** Use a `12` (2.75rem) spacing unit between list items. Separate content blocks by alternating between `surface-container` and `surface-container-low`.

* **Signature Element:** Every card should have a "Signal Tab"—a small 4px vertical strip of `tertiary` (#ff734f) on the far left or right to denote category.



### Selection Chips

* **Unselected:** `surface-container-highest` fill, `on-surface-variant` text.

* **Selected:** `primary` fill, `on-background` black text, `0px` radius.



---



## 6. Do’s and Don’ts



### Do:

* **Do** use extreme contrast. If it feels "too bold," you’re doing it right.

* **Do** use `0px` border radius everywhere. Sharp corners are the language of the city.

* **Do** overlap elements. Let a title bleed slightly over the edge of a card to create kinetic energy.

* **Do** use the `24` (5.5rem) spacing scale for major section breathing room to allow the bold elements to "shout" without clutter.



### Don’t:

* **Don’t** use soft shadows or blurs for depth. Use color steps and hard lines.

* **Don’t** use rounded corners. Even a 2px radius breaks the metropolitan rigor of this system.

* **Don’t** use generic grey. If you need a neutral, use `surface-variant` which has the deep, inked tone of the Night Metropolis.

* **Don’t** use 1px borders. They disappear in this high-contrast environment. Go bold (2px+) or go home.