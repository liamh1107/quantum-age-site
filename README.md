# Quantum Age — Website Redesign Prototype

A complete, multi-page redesign prototype of [quantum-age.com](https://quantum-age.com) for review by Quantum Age Collaborative.

> **Prototype only.** This is not the live Quantum Age website and is not connected to it. Nothing in this project writes to, deploys over, or submits data to the live site, its CMS or its forms. The contact form is a demonstration: it validates and shows every state, but sends nothing.

## What is in the prototype

- 13 designed pages and all 115 articles from the current site's Insights section, built from a crawl of the live site on 6 October 2026.
- Every service, team member, testimonial, article, contact detail and legal page found on the main site, preserved. Content that conflicts or could not be verified is held back and listed for confirmation, never guessed.
- A new design system (editorial typography, the logo's ring geometry, accessible plum-and-green palette), responsive from 320px to large desktop, and built to WCAG 2.2 AA.

## Technology

| | |
| --- | --- |
| Framework | Next.js 16.4 (App Router, Turbopack, Cache Components, static generation) |
| UI | React 19.3, TypeScript 5, Tailwind CSS 4 |
| Components | shadcn/ui on Radix (Sheet, Button, Input, Textarea, Label, Breadcrumb), restyled to the design system |
| Icons | lucide-react (functional icons only) |
| Fonts | Source Serif 4 and Figtree via `next/font/google` (self-hosted at build time) |
| Scrolling and motion | [Lenis](https://lenis.dev) 1.3 smooth scrolling site-wide (wheel and trackpad; native touch on phones and tablets), accessible smooth anchor links, a few scroll-linked details, and CSS reveals. All smoothing and effects switch off under `prefers-reduced-motion`. See `docs/design-direction.md` → Motion |
| Content | Local TypeScript and JSON files in `src/content/` (no CMS, no database) |

## Requirements

- Node.js 20.9 or newer (tested with Node 22.14)
- npm 10 or newer

## Install and run

```bash
npm install
npm run dev
```

Open <http://localhost:4317>.

The dev server uses port 4317 to avoid clashing with other local projects. To use another port: `npx next dev -p <port>`.

## Production build

```bash
npm run build
npm run start
```

`npm run start` serves the production build at <http://localhost:4317>. Use it for presentations: it is faster and closer to a launched site than the dev server.

To run type checking, lint and the production build together:

```bash
npm run check
```

| Script | Command |
| --- | --- |
| `npm run dev` | Development server on port 4317 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build on port 4317 |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint (Next.js core web vitals + TypeScript rules) |
| `npm run check` | Typecheck, lint and build |

## Hosting from a Windows PC (optional)

`start-site.bat` builds the site and serves it over HTTPS through [Caddy](https://caddyserver.com) at `https://testsite.4eos.com`, on the local network, and at `https://localhost`. Double-click it, or right-click and choose **Run as administrator** so it can open ports 80 and 443 in Windows Firewall.

On each run it:

1. Checks for Node.js 20.9+ and runs `npm ci` if dependencies are missing.
2. Stops if port 4317 is already in use (for example, an earlier run is still open).
3. Finds Caddy, or downloads it into `tools\` (ignored by git).
4. Writes `tools\Caddyfile`, which proxies the domain and local addresses to `127.0.0.1:4317`.
5. Stops a Caddy left over from an earlier run, and stops with a message if anything else (such as IIS) holds port 80 or 443.
6. Opens Caddy and a PowerShell window that builds with `NEXT_PUBLIC_SITE_URL=https://testsite.4eos.com` and starts the production server.
7. Opens firewall ports 80 and 443 and asks the router (UPnP) to forward them to this PC.

All three windows stay open when something fails, so the error stays on screen. The launcher's own output is also saved to `tools\start-site.log`.

The domain's DNS must point at the network's public IP, and the router must forward external ports 80 and 443 to this PC (not to 4317). To use a different domain, change `$publicHost` at the top of `start-site.ps1`.

Anyone with the address can see the site while it runs, so stop both windows when the review is over.

## Environment variables

None are required. One is optional:

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `http://localhost:4317` | Absolute origin (`metadataBase`) used to build Open Graph and share-image URLs. Set it if the prototype is hosted for review, for example `NEXT_PUBLIC_SITE_URL=https://review.example.com npm run build`. |

There are no API keys, secrets or third-party services.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/solutions` | All six solutions and their 24 capabilities, with an in-page index (`#strategize`, `#awareness`, `#thought-leadership`, `#perform`, `#network`, `#generate`) |
| `/approach` | Collaborative definition, the You + Team + Market + Opportunity = Success formula, and the three-level framework |
| `/about` | Company description, focus, approach and benefits |
| `/team` | Nine team members with headshots and verified highlights |
| `/references` | Three testimonials, client groups and client stories |
| `/insights` | Article archive with search and topic filters |
| `/insights/[slug]` | 115 articles, at the same slugs as the live site |
| `/contact` | Contact details and the demo contact form (`?interest=<solution-id>` pre-selects a topic) |
| `/privacy` | Privacy Policy, reproduced from the live site |
| `/terms` | Terms of Use, reproduced from the live site |
| `/prototype-notes` | For reviewers: demo features, held content and open questions |
| any other path | Custom 404 |

Redirects (temporary, 307) for URLs that are broken on the live site:

| From | To |
| --- | --- |
| `/solutions/strategize-launch`, `/build-awareness`, `/thought-leader`, `/perform`, `/network`, `/generate-business` | Matching `/solutions#…` section |
| `/services` | `/solutions` |
| `/blog`, `/blog/:slug` | `/insights`, `/insights/:slug` |

Generated assets: `/icon.svg`, `/apple-icon.png`, `/opengraph-image`.

## Project structure

```
docs/                   Audit, verification register, sitemap, design, boundaries, review, presentation guide
docs/source-snapshots/  Text snapshots of each crawled live page, used for verification
public/brand/           Official logo SVG (unchanged) and a viewbox crop of its mark
public/team/            Team headshots (resized and converted to WebP only)
public/insights-images/ Article images (downloaded from the live site, converted to WebP)
src/app/                Routes, metadata, icons, share image, global styles
src/components/site/    Header, navigation, footer, page blocks, contact form, insights browser, portraits
src/components/ui/      shadcn/ui primitives, restyled
src/content/            All factual site copy, separate from components
src/lib/                Article queries and date formatting
```

To change wording, edit the files in `src/content/`. Components do not contain factual company copy.

## Content sources

All content comes from the public pages of <https://quantum-age.com>, crawled read-only on 6 October 2026:

- `site.ts` — name, tagline, positioning, contact details, navigation
- `solutions.ts` — Solutions page
- `company.ts` — About and Approach pages
- `people.ts` — Team page (headshots from the same page)
- `references.ts` — References and Home testimonials
- `legal.ts` — Privacy Policy and Terms of Use
- `articles.json` — all 115 Insights articles
- `prototype.ts` — presentation-only notes (not source content)

Every item, and every refinement, is recorded in [`docs/content-verification.md`](docs/content-verification.md).

The project brief named Firecrawl, BrowserTools, Context7, 21st.dev and Hallmark. None were connected to this environment. Equivalent methods were used and are disclosed in [`docs/source-inventory.md`](docs/source-inventory.md#tools-and-methods-used): a read-only crawler, headless Chrome via Playwright, the version-matched Next.js documentation bundled in `node_modules/next/dist/docs`, established accessible interaction patterns, and a written anti-generic review checklist.

## Demo-only features

| Feature | Status |
| --- | --- |
| Contact form | Validation, error summary, sending, success and (simulated) error states. **No network request; nothing is stored or sent.** |
| Insights search and filters | Works over the local copy of the articles only; not a live index |
| Articles | A snapshot; does not sync with the live site |
| Analytics, cookies, CRM, CMS | None |

Details: [`docs/prototype-boundaries.md`](docs/prototype-boundaries.md).

## Known limitations

- Article content is a snapshot from 6 October 2026.
- No brand photography exists beyond team headshots; the design does not use stock photography.
- Three article images are unavailable on the live site and are omitted; affected articles use a typographic header.
- Many article images on the live site are generic stock images; they are shown because they are each article's real image.
- Some headings are verbatim from the live site and read as formulaic (for example three "Ready to…" closing headlines). They are kept until Quantum Age approves new wording.
- Accessibility was checked with automated axe scans and manual keyboard testing; a review with screen readers and other assistive technology is still recommended before launch.

## Outstanding verification items

Held back or used provisionally until Quantum Age confirms:

1. Public email address: `askQA@quantum-age.com` is used; `info@quantum-age.com` appears only in the live footer.
2. Headline statistics, which conflict between About and References (not shown).
3. Testimonial permissions and current titles.
4. Team job titles and membership.
5. Whether individual solution pages were planned (live links return 404).
6. The `/beta` section, its services, metrics and testimonials (not rebuilt).
7. Use of client names from articles as references or logos.
8. The "only marketing firm in senior care…" positioning claim.
9. The "Noun" → "adjective" correction on Approach.
10. A response time for the Contact page.
11. Older and duplicate articles.
12. Official logo mark, favicon, share image and photography.
13. Privacy policy currency (analytics, cookies, effective date).
14. Social media profiles (none shown).

The full list with context is in [`docs/content-verification.md`](docs/content-verification.md) and on the `/prototype-notes` page.

## Documentation

| Document | Contents |
| --- | --- |
| [`docs/source-inventory.md`](docs/source-inventory.md) | Crawl of the live site: pages, navigation, content, functionality, assets, audit findings |
| [`docs/content-verification.md`](docs/content-verification.md) | Change and verification register for every significant content item |
| [`docs/proposed-sitemap.md`](docs/proposed-sitemap.md) | Information architecture and page specifications |
| [`docs/design-direction.md`](docs/design-direction.md) | Design system: color, type, layout, motion, components |
| [`docs/prototype-boundaries.md`](docs/prototype-boundaries.md) | What is real, simulated, missing, or needs production work |
| [`docs/hallmark-review.md`](docs/hallmark-review.md) | Anti-generic design and content review, two passes |
| [`docs/presentation-guide.md`](docs/presentation-guide.md) | How to present the prototype to Quantum Age |
