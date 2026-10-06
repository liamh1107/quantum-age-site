# Hallmark Review

**Tool note:** the Hallmark service was not connected to this environment. Its role, an anti-generic design and content review, was carried out as a written checklist applied in two passes: one while the design system and page compositions were being decided, and one after every route was built and tested in a browser. The checklist is the one in the project brief (generic AI patterns, excessive rounded cards, repetitive grids, alternating image/text, gradients, glassmorphism, purposeless decoration, pills, startup language, repetitive sentences, empty phrases, fake metrics, excessive animation, overused icons, placeholder layouts, headings that could apply to any company, padding sections).

The review was never used to soften or disguise content: it only judged how verified content is presented.

## Measured state of the finished build

These counts come from searching the source in `src/` after the second pass:

| Indicator | Count | Note |
| --- | --- | --- |
| CSS gradients | 0 | |
| Backdrop blur / glass effects | 0 | |
| `rounded-full` | 1 | The circular field behind team portraits, part of the ring motif |
| Large radii (`rounded-lg` and up) | 0 | Theme radii are 2–8px; buttons and inputs use 2px |
| Drop shadows | 1 | The mobile navigation sheet, to separate it from the page (the Approach panels use a 1px hairline drawn with `box-shadow`, which reads as a rule, not a shadow) |
| Pill or badge labels | 0 | Topic filters are square-cornered toggle buttons with counts |
| Distinct icons | 12 | All functional (arrow, phone, mail, map pin, search, menu, alert, info, success, loading, breadcrumb chevron, breadcrumb overflow). No decorative feature icons |
| Animated elements on the home page | 9 + 2 | Scroll-driven fade/rise on section headings, plus the formula convergence and hero-ring depth added with Lenis; 0 with reduced motion |
| Parallax layers | 1 | Home hero rings at 14% of scroll speed |
| Carousels, counters, auto-play, scroll hijacking | 0 | |

## Pass 1: during design and assembly

Generic patterns identified as the obvious default for this kind of brief, and what was done instead:

| Generic pattern | Risk for Quantum Age | Decision |
| --- | --- | --- |
| "Quantum" visuals: particles, glows, circuit art | Implies a technology company; the firm sells marketing and strategy | Only the logo's four-ring geometry, drawn as thin lines, used in three places (home hero, formula diagram, portrait fields) |
| Gradient or stock-photo hero | No brand photography exists; stock would be invented context | Typographic hero using the verified tagline and positioning line |
| Six identical icon cards for solutions | Turns every line into a card; icons would be invented meaning | Numbered editorial list on Home; on Solutions, a sticky index plus full sections with capability lists |
| Stat bar ("30+ years · 200+ clients") | The source figures conflict | Not shown anywhere; held on `/prototype-notes` |
| Testimonial carousel | Hides two of three quotes; adds motion | All three quotes visible as serif pull quotes with full attribution |
| Logo wall | No logos or permissions exist | Client groups described in words; client stories link to real articles |
| Invented process ("Discover → Define → Deliver") | Fabricated methodology | The source's own three levels and its You + Team + Market + Opportunity = Success formula |
| Alternating image/text rows | Would need imagery that does not exist | 4/8 asymmetric grid: heading column beside body column, separated by hairline rules |
| Green buttons with white text (live site) | 2.0:1 contrast | Plum actions, green as accent on dark plum and under dark text |

Copy decisions in pass 1:

- Headings were taken from the source wherever one existed ("Insights that drive growth", "Trusted by leading healthcare organizations", "Let's collaborate").
- Where the redesign needed a new heading, it was written from facts on the page rather than generic phrasing. Examples: "Six solution areas, one collaborative team" (six solutions; the company calls itself a collaborative), "Decades in healthcare, senior living and marketing" (team bios), "Writing on senior care, aging services and B2B marketing" (article topics).
- No adjectives were added to company claims. "The only marketing firm in senior care steeped in both consumer and business-to-business" is the company's own line and is flagged for confirmation rather than strengthened or removed.
- The dictionary entry on Approach keeps the source text; only the part of speech label ("Noun" → "adjective") was corrected, and that correction is listed as a stakeholder question.

## Pass 2: after build, reviewed in the browser

Every route was captured at 390, 768 and 1280px (plus 320, 844 landscape and 1920 in automated checks) and reviewed screen by screen.

### Generic patterns found and corrected

| Finding | Where | Change |
| --- | --- | --- |
| **Every internal hero was the same template**: eyebrow, large headline, lead, empty right half | Team, Insights, References, and others | Team hero now carries a jump list of all nine people (useful on a long page). Insights hero shows archive facts computed from the data (115 articles, 2013–2026, 20 topics). The `aside` slot is only used where real content earns it; the remaining heroes stay simple on purpose. |
| **Proof buried below a category list** | References | Testimonials moved directly under the hero; client groups follow. The page's purpose is evidence, so evidence comes first. |
| **Scaffolded-but-unused UI** | Accordion, Alert, Select, Separator, Sonner toasts, Tabs, Tooltip | Removed from the codebase, along with the `sonner` and `next-themes` packages. The design doc listed some of these as in use; it was corrected to match what ships. |
| **Section index broke the page on phones and tablets** | Solutions, Insights | The scrolling strips widened the whole page (up to 2,225px of horizontal overflow). Fixed with `min-w-0` on the grid items; strips now scroll inside the page. |
| **Contact details marked up as an invalid definition list** | Contact | Icons moved inside each `<dt>`, so the list is valid for screen readers; visual layout unchanged. |

### Checked and kept

- **Uppercase eyebrows**: used once per section at most; they act as the section index labels described in the design direction. Not added to cards.
- **Arrow links**: one arrow per text link (8 uses across the site), always pointing to another page or section, never decorative.
- **Approach level panels**: the only card-style content panels on the site (the contact form also sits in a bordered surface, as a form). They are kept because the three levels are a sequence that reads better as discrete steps.
- **Scroll reveal**: short, heading-only, CSS-driven; content is visible without it and it is disabled under reduced motion.

### Unsupported language removed or held

No unsupported claims were found in authored copy during pass 2. Previously held items remain held: headline statistics, "hundreds of healthcare organizations", `/beta` claims and testimonials, the HubSpot partner certification (shown only as the original article, not as a badge).

## Second visual pass after corrections

After the changes above, every route was re-run through the automated audit (no console errors or warnings, no overflow at any tested width, no broken images, no axe WCAG 2.2 AA violations, all internal links resolving) and the changed pages were reviewed again at mobile and desktop widths. The Team jump list wraps to two columns on phones and does not push the first profile far below the fold; the Insights facts sit in one row on phones.

## Motion review: Lenis smooth scrolling

When Lenis smooth scrolling was added, the same checklist was applied to motion. Ideas considered and the decision for each:

| Idea | Decision | Reason |
| --- | --- | --- |
| Formula circles converging as the diagram enters | **Kept** | It shows the company's own formula, You + Team + Market + Opportunity = Success, coming together. It explains rather than decorates, and it settles before the reader reaches it |
| Reading progress on articles | **Kept** | Articles run up to 15 minutes; the line tells readers where they are |
| Solutions strip following the current section on mobile | **Kept** | Fixes a usability gap: the current item could scroll out of sight |
| Hero ring depth | **Kept, at 14% speed** | One quiet layer, only in the hero; nothing else on the site moves at a different speed |
| Header that hides on scroll down | Rejected | The Solutions index and article sidebar are positioned against the header; a moving header would make them jump |
| Text that reveals word by word, split headings, counters | Rejected | Delays reading; reads as template motion |
| Pinned "scrollytelling" for the three Approach levels | Rejected | Hijacks scroll and hides content behind the gesture |
| Smooth touch scrolling (`syncTouch`) | Rejected | Native touch momentum is already smooth and is what people expect on phones; emulating it costs battery and is unstable on older iOS |
| Lenis built-in `anchors` | Replaced | It does not move keyboard focus. A custom handler scrolls smoothly *and* moves focus, so the skip link and in-page indexes stay accessible |

Problems found while testing and fixed:

- Clicking a link that had just been scrolled into view natively made Lenis start from a stale position, jumping back and stopping short. Fixed by syncing Lenis to the real position before each anchor jump.
- Error-summary links put the field's input right under the header, hiding its label. They now scroll to the label and focus the input.
- The reading-progress line stayed invisible because Tailwind's `scale-x-0` uses the separate CSS `scale` property, which multiplied with the inline transform. Fixed by setting the starting state through `transform`.
- Under reduced motion, Lenis' own mode still eased the wheel over about 80ms. Wheel smoothing is now switched off entirely while the preference is on.
- Team and prototype-notes targets had a scroll margin stacked on top of the page's scroll padding, leaving a large gap above them. The extra margin was removed.

## Remaining concerns

- **Repeated call-to-action headings.** "Ready to accelerate your growth?", "Ready to get started?" and "Ready to work together?" all come verbatim from the live site and were kept for that reason. Together they read as formulaic. Recommendation for Quantum Age: approve one shared closing line, or let each page close with a line specific to its content.
- **Source copy that leans on familiar marketing phrasing** (for example "Comprehensive marketing solutions, tailored to your goals", "Build. Grow. Achieve. Maximize. Influence."). Preserved because it is the company's language; a copy edit would be a good next step once the structure is approved.
- **Article imagery** is the live site's own, much of it stock (for example a glowing "AI" circuit board on the newest article). It is shown because it is the article's real image, but it pulls against the restrained visual direction. An editorial image policy for future articles would help.
- **No photography** beyond headshots. The layout does not depend on it, but authentic photos of the team at work would add warmth that typography alone cannot.
