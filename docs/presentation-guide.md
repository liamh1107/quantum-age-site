# Presentation Guide

A walkthrough for presenting the redesign prototype to Quantum Age Collaborative. Everything here describes what the prototype does and what the audit of the current site found. Recommendations are labelled as recommendations; none of them are company requirements.

## Before the meeting

- Run the production build locally (`npm run build && npm run start`) and open <http://localhost:4317>. The production build is faster and closer to what a launched site would feel like than `npm run dev`.
- Have a phone or a narrow browser window ready to show the mobile layout.
- Keep `/prototype-notes` open in a second tab; it summarizes demo features, held content and the open questions on one page.

## Project overview (one minute)

- A complete, separate redesign prototype of quantum-age.com: 13 pages plus all 115 articles from the current site.
- Built from a crawl of the live site on 6 October 2026. Every service, team member, testimonial, article, contact detail and legal page found on the main site is preserved.
- Nothing was invented. Where the current site contradicts itself (statistics, email addresses), the prototype holds the item back and asks.
- Nothing touches the live site. The contact form is a demonstration and says so.

## Problems addressed

From the audit (`source-inventory.md`, section 7):

| Current site | Prototype |
| --- | --- |
| Team and Insights, the most original content, are missing from the header and mobile menu | Both are in the main navigation on every screen size |
| All six solution "Learn More" links return 404; footer solution anchors go nowhere | One complete Solutions page with an anchor per solution; the old URLs redirect to the matching section |
| Green buttons with white text at about 2:1 contrast | Plum actions (7.6:1); brand green kept as the accent |
| Home repeats the same paragraph in consecutive sections; heading levels skip | Home tells one story in order: who, what, how, people, evidence, writing, contact |
| Rounded icon cards on nearly every section, so sections look alike | Editorial grid with hairline rules; each section type has its own form |
| No `<main>` landmark, no skip link, unlabelled menu button, Escape does not close the menu | Landmarks, skip link, labelled menu that traps focus and closes on Escape |
| Search relies on placeholder text; no empty state | Labelled search, topic filters with counts, result announcements, empty state with reset |
| Form gives no field-level errors or indication of what happens next | Inline errors, linked error summary, sending, success and error states |
| Conflicting statistics, two email addresses, dead social links | Held back and listed as questions |
| `/favicon.ico` missing; share image is a builder screenshot | Favicon cropped from the official logo; share image built from the logo and tagline |

## New information architecture

```
Home
├── Solutions (six solutions, each with an anchor)
├── Approach
├── About
├── Team
├── References
├── Insights
│   └── 115 articles (same URLs as today)
├── Contact
├── Privacy Policy · Terms of Use
└── Prototype notes (for this review only)
```

The header shows Solutions, Approach, About, Team, References and Insights, with "Start a conversation" as the one primary action. Contact is also in the footer and the mobile menu. Details: `proposed-sitemap.md`.

## Key design decisions

- **The logo is the concept.** The four overlapping rings echo the company's own formula, You + Team + Market + Opportunity = Success. The rings appear as thin line art in two places only: the home hero and the circles behind team portraits. The formula itself is an interactive map built around the logo's central square.
- **Editorial, not template.** A serif for headings (Source Serif 4) and a clean sans for reading (Figtree), a 12-column grid, heading-beside-text compositions, and rules instead of boxes.
- **Brand colors kept, roles swapped.** Plum carries buttons and links because it is legible; green stays as the signature accent on dark plum and in the mark. The logo file is used unchanged.
- **No stock photography.** The only photographs are the real team headshots and the articles' own images. The hero is typographic.
- **Evidence shown plainly.** All three testimonials are visible at once with full attribution; no carousel.

## Suggested walkthrough

1. **Home, desktop.** Read the hero line, then scroll: who Quantum Age works with, the six solutions, the formula, the nine people, the testimonials, the latest writing, the closing contact band.
2. **Solutions.** Click a solution in the left index; the index follows the section in view. Point out the "Talk to us about…" link, which opens Contact with that topic pre-selected.
3. **Approach.** The dictionary definition, the formula and the three levels.
4. **Team.** The jump list in the hero; nine profiles with the verified bullets.
5. **References.** Testimonials first, then client groups, then client stories from the archive.
6. **Insights.** Search for "SEO", pick a topic, then search for something with no results to show the empty state. Open an article: breadcrumbs, metadata, related articles.
7. **Contact.** Press Send with the form empty to show the error summary and inline errors. Fill it in to show the confirmation. Tick "Simulate a delivery error" to show the failure state.
8. **Mobile.** Open the menu, move through it with Tab, close it with Escape. Show Solutions' scrolling index and the Insights filters.
9. **Prototype notes.** End here to move into questions.

## Important desktop interactions

- Smooth, weighted scrolling with a mouse wheel or trackpad on every page (Lenis). Same-page links (the Solutions index, Team jump list, skip link) glide to their section and move keyboard focus there.
- **The formula map on Home is the moment to slow down.**
  - On a laptop or larger screen, the section holds in place while you keep scrolling. You, Team, Market and Opportunity join the orbit one at a time, the loop closes, and Success lights up.
  - Then hover over (or tap) any term to show what it connects to; hover over Success to show everything flowing into it.
  - On a phone, the same sequence plays as the map scrolls into view.
- The home hero plays a short opening sequence on load. The Approach levels rise one after another like steps. On Solutions, a green rail beside the index fills as you read. Long articles show a thin reading-progress line under the header.
- Current page underlined in the header; visible focus rings on every control.
- Solutions section index that tracks scroll position.
- Insights search and topic filters update instantly with a result count.
- Contact form validation on leaving a field and on submit.

## Important mobile improvements

- Full-height menu with large targets and the phone number and email address at the bottom.
- Solutions index becomes a sticky, horizontally scrolling strip below the header that keeps the current section in view as you scroll.
- Touch scrolling stays native, so phones and tablets keep the momentum people expect; the smooth anchor links and scroll-linked details still apply.
- Buttons, menu rows, filters and form fields are 40–44px tall, and every target meets the WCAG 2.2 minimum of 24px; body text 17px; no horizontal scrolling from 320px upward.
- Phone and email are tap-to-call and tap-to-email throughout.

## Accessibility improvements

Built and checked against WCAG 2.2 AA: landmarks, one H1 per page and ordered headings, skip link, keyboard-operable menu with focus management, visible focus states on light and dark sections, labelled fields with instructions and linked errors, status never shown by color alone, meaningful or empty alt text, reduced-motion support, and text contrast that meets AA everywhere (primary and secondary text on the main background are 15.5:1 and 6.4:1). An automated axe scan of every main page at phone and laptop widths reports no violations; this supplements, and does not replace, a manual review.

## Content preserved from the current site

- Tagline, positioning line, company description and the three benefits.
- All six solutions and all 24 capabilities, word for word.
- The approach: definition, formula and all three levels.
- All nine team members with their headshots and bullets.
- All three testimonials, word for word, with the exact attribution.
- All 115 articles, with their dates, authors, reading times, tags and images.
- Phone, email, mailing address and "Serving clients internationally".
- Privacy Policy and Terms of Use, word for word.

The full register, including every refinement, is in `content-verification.md`.

## Demo-only functionality

- The contact form validates and shows every state, but sends nothing.
- Search and filters work over the copy of the articles in the prototype, not a live index.
- There is no analytics, cookie, CRM or CMS connection.

Full detail: `prototype-boundaries.md`.

## Items requiring company feedback

These are also listed on `/prototype-notes`:

1. Which email address to publish: askQA@quantum-age.com or info@quantum-age.com.
2. Which headline statistics, if any, are accurate and current.
3. Permission and current titles for the three testimonial authors.
4. Job titles for each team member, and CC Andrews' preferred title.
5. Whether Becky Cook should appear on Team, and whether Jaret Andrews' bio is current.
6. Whether individual solution pages were planned.
7. The status of the `/beta` section.
8. Whether clients named in articles may be shown as references or with logos.
9. Whether to keep the line "the only marketing firm in senior care steeped in both consumer and business-to-business".
10. Approval to correct "Noun" to "adjective" in the Approach definition.
11. Any response time to state on the Contact page.
12. What to do with older articles, and the duplicate sponsorship article.
13. Official photography, a standalone logo mark, favicon or share image.
14. Whether the privacy policy should be updated for analytics and cookies, with an effective date.

## Suggested stakeholder-review questions

- Does the home page answer, in order, who you are, who you help, what you do and how you work?
- Is plum as the action color acceptable, with green as the accent?
- Are the six solutions described the way you describe them in conversation?
- Should Team and Insights be in the main navigation?
- Is anything on the current site missing that you expected to see?
- Which pages would you want to edit yourselves, and how often?

## Recommended next steps if the redesign is approved

These are recommendations, to be confirmed with Quantum Age:

1. Resolve the questions above and update the content files.
2. Copy edit: settle the closing calls to action and any headline wording you want refreshed.
3. Choose how content will be edited (CMS or a simpler workflow) and import the articles.
4. Connect the contact form to the system you use today, with spam protection and a confirmed recipient.
5. Decide on analytics and consent, and have counsel review the privacy policy and terms.
6. Supply any approved photography and logo files.
7. Run a manual accessibility review with assistive technology, then plan the launch and URL redirects.
