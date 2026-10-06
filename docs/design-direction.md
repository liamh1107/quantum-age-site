# Design Direction

## Objective

Give Quantum Age Collaborative a site that reads like a senior strategist talking: calm, specific, well-edited, and confident without hype. It should feel credible to an operator, a health-system marketing lead, or a health-tech founder, and human enough to remind them that the work is ultimately about older adults and the people who care for them.

The design should communicate strategic depth, human understanding, healthcare and senior-care expertise, collaboration, confidence, responsiveness, measurable thinking and professional maturity — **through the content and its arrangement**, not through decoration.

### What it must not look like

A generic AI or SaaS landing page, a crypto or quantum-computing site, a consumer medical portal, or a template agency site. "Quantum" in the name does not justify particle effects, glows or sci-fi imagery; the company offers marketing and strategy, and the visuals stay with that.

## Concept: "The collaborative"

The strongest brand asset is the logo itself: four overlapping rings around a plum center. The source site already describes the business with the same structure — **You + Team + Market + Opportunity = Success**. The redesign treats that as the organizing idea:

- The ring geometry (drawn as thin lines, never glowing) appears in exactly three places: the home hero, the collaborative formula diagram, and behind team portraits. Nowhere else.
- Layouts are editorial: a strong typographic hierarchy, a visible grid, hairline rules instead of boxes, and asymmetric two-column compositions where a heading sits in a narrow column beside wider body text.
- Human elements come from the only real photography available: the team's cut-out portraits, placed on circular plum or green fields that echo the mark.

## Color

Starting point (verified from the logo SVG): green `#8DC63F`, plum `#70456E`, gray `#808285`.

The live site uses green as its primary button color with white text (≈2.0:1 contrast, failing WCAG AA). The redesign keeps both brand colors but **swaps their roles**: plum carries interface actions and text accents; green becomes the signature accent used on dark plum surfaces, as fills under dark text, and in the mark. This keeps the identity recognizable and makes it accessible.

| Token | Value | Use | Contrast |
| --- | --- | --- | --- |
| `--paper` | `#F7F5F0` | Default page background (warm, editorial) | — |
| `--surface` | `#FFFFFF` | Raised surfaces (form, sheet) | — |
| `--stone` | `#E6E1D8` | Hairlines, dividers, input borders on paper | — |
| `--ink` | `#231A25` | Primary text (a plum-tinted near-black) | 15.5:1 on paper |
| `--muted` | `#5D5761` | Secondary text, metadata | 6.4:1 on paper |
| `--plum` (primary) | `#70456E` | Buttons, links, active nav, focus ring | White on plum 7.6:1; plum on paper 7.0:1 |
| `--plum-700` | `#5B3759` | Button hover, link hover | 9.0:1 on paper |
| `--plum-900` | `#2F1D31` | Dark sections (hero band, CTA, footer) | Paper on plum-900 14.4:1 |
| `--green` (accent) | `#8DC63F` | Accent on dark (rules, numerals, highlights), mark, fills under ink text | Green on plum-900 7.7:1; ink on green 8.3:1 |
| `--green-800` | `#3D5F12` | Green text on light backgrounds (e.g. "Verified" labels) | 6.8:1 on paper |
| `--gray` | `#808285` | Logo gray only (not used for text) | 3.9:1 — not for text |
| Success | `#3D5F12` on `#EEF5E3` | Form success | 6.8:1 |
| Warning / notice | `#7A4B00` on `#FBF1DC` | Prototype notices | 7.1:1 |
| Error | `#B42318` on white | Form errors (always paired with icon + text) | 6.6:1 |

Rules: green never carries white text; status is never communicated by color alone (always text + icon); gradients are not used.

## Typography

Two families, both via `next/font/google` (self-hosted at build, no layout shift):

- **Source Serif 4** (variable, optical sizing) — display and headings. A sober, editorial serif that signals maturity and long-form thinking, appropriate for a firm with 13 years of published articles. Not a fashion serif.
- **Figtree** (variable) — body, UI, navigation, labels. A geometric sans whose rounded forms sit comfortably next to the logo's rounded wordmark, with excellent small-size legibility.

The live site used Montserrat + Open Sans. Neither is part of the logo artwork, so replacing them does not change the recognizable identity; the logo SVG is used unchanged.

| Style | Family / weight | Size (mobile → desktop) | Line height | Notes |
| --- | --- | --- | --- | --- |
| Display (home hero) | Serif 500 | `clamp(2.5rem, 1.6rem + 4vw, 5rem)` | 1.02 | Max ~14ch per line; tracked -0.02em |
| H1 (page hero) | Serif 500 | `clamp(2.25rem, 1.6rem + 2.8vw, 4rem)` | 1.05 | |
| H2 (section) | Serif 500 | `clamp(1.75rem, 1.3rem + 1.8vw, 2.75rem)` | 1.1 | |
| H3 | Serif 600 | `clamp(1.25rem, 1.1rem + 0.6vw, 1.5rem)` | 1.25 | |
| Lead | Sans 400 | `clamp(1.125rem, 1.05rem + 0.35vw, 1.3125rem)` | 1.55 | Max 60ch |
| Body | Sans 400 | `1.0625rem` (17px) | 1.65 | Max 68ch |
| Article body | Sans 400 | `1.125rem` (18px) | 1.7 | Max 68ch |
| Small / meta | Sans 500 | `0.875rem` | 1.5 | Never below 14px for content |
| Eyebrow | Sans 600 | `0.8125rem`, uppercase, +0.08em | 1.4 | Used sparingly: section index labels only |

Fallbacks: `ui-serif, Georgia, serif` and `ui-sans-serif, system-ui, sans-serif`.

## Layout and spacing

- **Container:** max 1240px content width (`--container`), centered.
- **Gutters:** `clamp(1.25rem, 4vw, 3rem)`.
- **Grid:** 12 columns on desktop (gap `clamp(1rem, 2vw, 2rem)`), collapsing to 6 on tablet and 1 on mobile. The recurring composition is a 4/8 split: label or heading in 4 columns, content in 8.
- **Vertical rhythm:** 4px base. Section padding `--section: clamp(4rem, 3rem + 5vw, 8rem)`; tighter `--section-sm: clamp(3rem, 2rem + 3vw, 5rem)`.
- **Separation:** hairline rules (`1px solid var(--stone)`) and background bands, rather than rounded cards. Corner radius is 2px on inputs and buttons; circles are reserved for the brand geometry and portraits.
- **Breakpoints:** Tailwind defaults (`sm` 640, `md` 768, `lg` 1024, `xl` 1280, `2xl` 1536). Desktop navigation appears at `lg`.
- **Line length:** text blocks capped with `max-w-[68ch]` so large screens never produce long lines.

## Imagery

- Only verified assets: logo, team portraits, article images.
- No stock photography, no illustrations of people, no AI-generated imagery, no fake dashboards.
- Where an article has no real image, its header is typographic (title, date, tags) instead of a placeholder.
- **Needed from Quantum Age (optional):** authentic photography of the team working with clients or at industry events.

## Motion

Scrolling is the core motion. [Lenis](https://lenis.dev) (`lenis` 1.3, about 5 KB gzipped) smooths wheel and trackpad scrolling across every route, and a few scroll-linked details build on it. Everything else is CSS. No other animation library is installed.

### Smooth scrolling (Lenis)

| Setting | Value | Why |
| --- | --- | --- |
| Setup | `ReactLenis` with `root` in the root layout (`src/components/motion/smooth-scroll.tsx`), `autoRaf` | One instance for the whole document. Lenis wraps native scroll, so `position: sticky`, find-in-page, scroll restoration and assistive technology keep working |
| `lerp` | `0.1` | Lenis' tuned default: responsive, with a short, soft settle |
| `smoothWheel` | on; **off under reduced motion** | Lenis' own reduced-motion mode still damps over a few frames, so the browser's native wheel scrolling takes over instead. The preference is tracked live |
| `syncTouch` | off | Phones and tablets keep native touch scrolling and momentum: the most fluid and battery-friendly option, and it avoids iOS quirks |
| `stopInertiaOnNavigate` | on | Clicking a link mid-glide stops the glide, so new pages always open at the top. Back/forward still restore the previous position |
| CSS | `lenis/dist/lenis.css`; `scroll-behavior: smooth` removed from `html` | The two conflict; Lenis now owns smooth scrolling |
| Nested scroll | `data-lenis-prevent` on the mobile menu; `data-lenis-prevent-horizontal` on the Solutions index strip and Insights topic strip | Horizontal strips and the menu scroll natively |
| Modal | The mobile menu calls `lenis.stop()` while open | Radix locks `<body>`, but Lenis scrolls the window directly, so it must pause too |

**Anchor links.** A capture-phase handler (rather than Lenis' `anchors` option) covers every same-page `#` link, including the skip link, the Solutions index, the Team jump list, prototype-notes links and form error links. It:

- scrolls with an ease-in-out curve whose duration grows with distance (0.6 seconds for short hops, up to 1.5 seconds for the longest jumps);
- respects `scroll-padding-top`, so targets land just below the sticky header;
- moves keyboard focus to the target immediately (form fields scroll to their label so the question stays visible);
- updates the URL hash, so Back works and links can be shared.

Under reduced motion the jump is instant.

### Scroll-linked details

Each is tied to the content it sits in, writes styles directly (no React re-renders), and is skipped under reduced motion:

- **The formula assembles itself.** On Home, the four circles of You + Team + Market + Opportunity start slightly apart and settle into the logo's overlap as the diagram scrolls into view, with "Success" growing slightly into place at the center. It finishes once the diagram is fully visible, so it is never caught half-done. Without JavaScript it simply renders settled.
- **Hero depth.** The ring line-art in the home hero moves at 14% of scroll speed as the hero leaves, giving a quiet sense of depth. This is the only parallax on the site.
- **Reading progress.** Articles show a 3px green line under the header that fills as you read the article body. It is decorative (`aria-hidden`) and follows scroll position 1:1.
- **Index follows you.** On phones and tablets, the Solutions index strip keeps the current section's link in view as you scroll.

### Other motion

- **Hover/focus feedback:** 150ms color and underline transitions on links and buttons.
- **Section introductions:** a short fade/rise on section headings using scroll-driven CSS (`animation-timeline: view()`), applied only when supported and only under `prefers-reduced-motion: no-preference`. With Lenis these now play back as smoothly as the scroll itself. Content is fully visible without them.
- **Mobile menu:** sheet slides in (Radix + tw-animate-css), disabled under reduced motion.
- **Not used:** scroll hijacking or snapping, pinned scroll sequences, background motion, animated counters, page transitions, cursor effects.

### Performance budget (measured)

During continuous smooth scrolling on Home, Solutions, Insights and a long article in headless Chrome: steady 60fps (median and 95th-percentile frame 16.7ms), no long tasks, cumulative layout shift 0.

## Components (shadcn/ui, restyled)

Radix-based shadcn/ui primitives are the accessible foundation where they earn their place: Sheet (mobile navigation, with focus trapping and Escape to close), Button, Input, Textarea, Label and Breadcrumb. All are restyled through tokens: 2px corners, plum focus rings, Figtree labels.

Deliberately not used:

- **Accordion** — the three Approach levels are short enough to show in full on every screen size; hiding them behind toggles would add clicks without saving meaningful space.
- **Select** — the "What would you like to discuss?" field is a native `<select>`, which gives the best mobile picker and screen-reader behavior for seven options.
- **Alert** — prototype and verification notices use a small project `Notice` block (icon + text, never color alone) so they read as editorial asides rather than system errors.
- **Toasts** — form results are inline and receive focus, which is more accessible than a transient toast.
- **Tabs, Tooltip** — no content needed them.

## Interaction patterns considered (21st.dev was unavailable)

| Need | Pattern chosen | Rejected |
| --- | --- | --- |
| Navigation | Flat header with visible labels and a "Start a conversation" button; underline marks the current page | Mega-menu (too little content to justify; hover-dependent) |
| Mobile navigation | Full-height sheet with large rows, contact details at the bottom | Dropdown panel without focus management (current site) |
| Hero | Typographic hero with ring line-art; no image | Stock photo hero, gradient blob hero |
| Services | Numbered index + editorial sections with capability lists | Six identical icon cards |
| Process | Vertical/horizontal progression of three levels with connecting rule | Timeline with fabricated steps |
| Testimonials | Large serif pull quotes, all visible (no carousel) | Auto-rotating carousel (hides content, motion) |
| CTA | Dark plum band with one action and contact details | Gradient banner with multiple competing buttons |
| Contact | Two-column: direct details + form, with a prominent prototype notice | Modal form |
