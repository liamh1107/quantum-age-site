# Prototype Boundaries

This project is a **standalone redesign prototype** for review by Quantum Age Collaborative. It is not the live website at <https://quantum-age.com>, it is not connected to any Quantum Age system, and nothing in it should be read as operational.

During this project nothing was written to, deployed over, logged into, or submitted to the live website, its CMS, its forms or its integrations. The live site was only read (page requests and headless-browser inspection).

## How the prototype tells people what is real

| Signal | Where | Wording |
| --- | --- | --- |
| Site-wide banner | Top of every page | "Redesign prototype for review. This is not the live Quantum Age website." with a link to `/prototype-notes` |
| Form notice | Above the contact form | "Prototype form: this demonstration does not submit information to Quantum Age." |
| Button description | Send button (`aria-describedby`) | Repeats that nothing is sent |
| Result states | After submitting | The confirmation says "Nothing was sent. This is a prototype…"; the error state says it is simulated |
| Prototype controls | Inside the form, dashed amber box labelled "Prototype controls" | Checkbox to preview the error state |
| Held-content note | About page | "Prototype note: statistics held for confirmation" |
| Legal pages | Privacy, Terms | Notice that the text is reproduced from the live site and is not new legal language |
| Reviewer page | `/prototype-notes` | Lists demo features, held content and open questions |

## Fully implemented

These work completely within the prototype, using local content:

- All 13 page routes and the 115 article pages (see README route list), statically generated.
- Header navigation with current-page indication, mobile navigation sheet (focus trapped, closes on Escape and returns focus), skip link, footer navigation.
- Solutions in-page index that highlights the section in view (plain anchor links when JavaScript is off).
- Insights archive search (title, summary and tags) and topic filtering over the 115 local articles, with result count announcements, an empty state and a reset action.
- Article pages with breadcrumbs, metadata, hero image where a real one exists, related articles, and previous URLs preserved (`/insights/<same-slug>`).
- Redirects for URLs that are broken on the live site: `/solutions/<slug>` → `/solutions#<anchor>`, `/services` → `/solutions`, `/blog` and `/blog/<slug>` → `/insights…`. These are temporary (307) redirects so nothing is cached permanently.
- Custom 404 page.
- Page titles, descriptions, Open Graph metadata and a generated share image (logo plus the verified tagline and descriptor).
- Favicon and Apple touch icon cropped from the official logo SVG (no redrawing).
- Lenis smooth scrolling on every route, with smooth same-page anchor links that move keyboard focus and update the URL. Also: formula convergence and hero depth on Home, a reading-progress line on articles, and a Solutions index strip that follows the current section on mobile.
- Reduced-motion support: wheel smoothing, smooth anchor jumps, scroll-linked effects, reveal animations and the menu slide are all removed under `prefers-reduced-motion: reduce`.

## Simulated (demo-only)

| Feature | What it does | What it does not do |
| --- | --- | --- |
| Contact form | Validates fields inline and on submit, shows an error summary that links to each field, a sending state, a success confirmation, and (via the prototype checkbox) a failure state. Pre-selects a topic when opened from a solution link (`/contact?interest=<id>`). | Make any network request, store anything, send email, create a CRM record or reach Quantum Age. |
| Insights search | Real filtering over the copy of the articles bundled with the prototype. | Search a live index or CMS. Articles published on the live site after 6 October 2026 will not appear. |
| Article content | A snapshot of all 115 public articles, with images optimized and stored locally. | Stay in sync with the live site, or support editing. |

## Not included, and not implied

- **No analytics, cookies, tag managers, chat widgets or tracking.** The live site loads an analytics script (`/~flock.js`); the prototype does not.
- **No newsletter signup.** The live site has none.
- **No scheduling, downloads, gated resources, payments or accounts.** None were found on the live site.
- **No social media links.** The live footer icons point to `#`; the only social URLs found (on `/beta`) could not be confirmed as official.
- **No client logos, ROI calculator or headline statistics.**

## Inaccessible or missing on the source

Recorded in full in `content-verification.md`:

- Individual solution pages: every "Learn More" link on the live Solutions page returns 404.
- Favicon (`/favicon.ico` returns 404) and a brand-approved share image (the live one is a builder preview screenshot).
- Brand photography beyond team headshots: none exists on the source.
- Three article images: two hot-linked HubSpot stock images return 403/404; one article has `src="none"`.
- `sitemap.xml` and `robots.txt`: not present.

## Requires stakeholder confirmation

The prototype either holds these back or uses the most widely published version until Quantum Age confirms. The full list is on `/prototype-notes` and in `content-verification.md`:

- Which public email address to use (`askQA@` is used; `info@` appears only in the live footer).
- Headline statistics, which conflict between About and References, and "hundreds of healthcare organizations".
- Testimonial permissions and current titles.
- Team titles and membership (Becky Cook; Jaret Andrews' bio).
- The `/beta` section and its content.
- Whether older articles should be kept, labelled as archive or retired; the duplicate sponsorship article.
- Privacy policy currency (no effective date; does not mention analytics or cookies).

## What production would need

| Area | Needed before launch |
| --- | --- |
| Contact form | A form handler (for example the company's existing CRM or an email service), spam protection, a privacy-policy-aligned consent statement, a confirmed recipient address and a confirmed response expectation. |
| Content management | A CMS or Git-based editing workflow for articles, team and testimonials; an import of the current articles; redirects for any slug changes. |
| Search | Either keep client-side filtering (fine at this archive size) generated from the CMS at build time, or a hosted index. |
| Analytics and consent | A decision on analytics, a cookie/consent approach if required, and a matching privacy policy update reviewed by counsel. |
| Legal | Counsel review of the Privacy Policy and Terms of Use with effective dates. |
| Assets | Approved logo files (including a standalone mark), a share image, and optional authentic photography. |
| Hosting | Domain, environment variable `NEXT_PUBLIC_SITE_URL` set to the production origin, and a redirect plan from current URLs. |

## Do not interpret as live

- The contact form, its confirmation and its error messages.
- Any article that appears in the prototype but has since changed or been removed on the live site.
- The proposed navigation labels, page names and headings that differ from the live site: these are proposals for review.
