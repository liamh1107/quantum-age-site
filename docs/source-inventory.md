# Source Inventory — quantum-age.com

This document records what the current public Quantum Age website contains, how it behaves, and what problems it has. It was completed before any redesign work began. Everything here is based on observed evidence; anything that could not be observed is marked **unverified**.

Raw evidence is stored alongside this file:

- `docs/source-snapshots/*.txt` — text snapshots of every top-level page (server-rendered HTML reduced to tag markers).
- `docs/source-snapshots/crawl-index.json` — every probed path with HTTP status, soft-404 flag and `<title>`.

---

## 1. Website overview

| Item | Finding |
| --- | --- |
| Website URL | https://quantum-age.com |
| Crawl date | 6 October 2026 (UTC) |
| Legal entity name shown | "Quantum Age Collaborative" (footer copyright, logo wordmark) |
| Apparent platform | A React application built with **Lovable** and served through **Cloudflare**. Evidence: the Open Graph image URL contains `lovable.app`; markup contains TanStack Router/Start streaming markers (`$tsr`, `$_TSR`); responses carry `server: cloudflare` and a `__cf_bm` cookie. Pages are server-rendered, then hydrated. |
| Overall purpose | Present Quantum Age Collaborative as a senior-care / healthcare marketing and strategy firm, describe its six solution areas and collaborative approach, show the team and client testimonials, publish an archive of insights, and invite contact. |
| Meta description (all core pages) | "Senior Care Marketing & Strategy Experts" |
| Primary audiences (as stated by source) | Senior living and aging services; healthcare organizations; health technology companies; wellness and longevity providers (About › "Our Focus"). References page groups clients as Senior Living Operators, Healthcare Organizations, Industry Innovators. |
| Primary conversion actions | "Start the Conversation", "Let's Collaborate", "Get in Touch" (all → `/contact`); phone `440.638.6990`; email links; contact form. |

### Tools and methods used

The project brief named Firecrawl, BrowserTools, Context7, 21st.dev and Hallmark. **None of these services were connected to this environment.** Equivalent methods were used and are disclosed here:

| Brief asked for | What was actually used |
| --- | --- |
| Firecrawl crawl | A custom read-only Python crawler (`urllib` + BeautifulSoup) that fetched every internal link discovered from the homepage, followed links breadth-first, and probed common paths (`/sitemap.xml`, `/robots.txt`, `/blog`, `/services`, `/careers`, `/faq`, `/admin`, `/login`). 252 URLs were requested; no forms were submitted. |
| BrowserTools inspection | Headless Google Chrome driven by Playwright (`playwright-core` 1.63) at 1440×900, 834×1112 and 390×844. Captured full-page screenshots, console errors, failed requests, heading outlines, landmarks, unlabeled controls, overflow, touch-target sizes and the first eight Tab stops. The mobile menu was opened and tested with Escape. |
| Context7 docs | The version-matched documentation that ships inside `node_modules/next/dist/docs` for Next.js 16.4, plus the shadcn CLI's own help output. |
| 21st.dev | Not reachable. Interaction patterns were chosen from established accessible patterns (see `design-direction.md`). |
| Hallmark | A written anti-generic review checklist applied twice (see `hallmark-review.md`). |

### Technical limitations encountered

- No `sitemap.xml` or `robots.txt` exists (both return the site's 404 page with HTTP 404), so discovery relied on link-following.
- Unknown paths return a real HTTP 404 with a generic "Page not found" page.
- The contact form posts to a server-side function; where that data goes (email, CRM, database) cannot be observed from the browser and is **unverified**.
- The `/beta` section uses client-side interactivity (map, ROI calculator) that was observed but not exercised with real numbers.

---

## 2. Page inventory

Treatment values: **Preserve**, **Reorganize**, **Consolidate**, **Rewrite without changing meaning**, **Rebuild functionality as demo**, **Flag for stakeholder verification**.

### 2.1 Home — `/`

- **Title:** "Quantum Age | Senior Care Marketing & Strategy Experts"
- **Navigation placement:** Logo link; not a nav item.
- **Purpose:** Positioning, benefits, services overview, approach, testimonials, contact CTA.
- **Main headings:** H1 "Elevate strategy. Accelerate growth." · H3 Access Leading Experts / Faster Results / Metric Driven · H2 Your Agile & Responsive Ally · H2 What We Do · H3 ×6 service names · H2 The Collaborative Approach · H2 What Our Clients Say · H2 Ready to Accelerate Your Growth?
- **Important content:**
  - Positioning line: "The only marketing firm in senior care steeped in both consumer and business-to-business."
  - Credibility statement (shown **twice** on the page): "Decades of health/senior care insight and marketing expertise make Quantum Age an agile and responsive ally – an extension of your team, assuring rightsized support for faster results."
  - Benefits: Access Leading Experts — "Get access to the very best experts in healthcare without fixed costs"; Faster Results — "See results faster thanks to decades of experience"; Metric Driven — "Be metric driven from day one".
  - What We Do intro: "Comprehensive marketing solutions for healthcare organizations" + six service summaries (see Solutions).
  - Collaborative formula: You (Your vision & goals) + Team (Expert collaboration) + Market (Deep insights) + Opportunity (Strategic timing) = Success (Measurable results). Subtitle "Your success is our formula".
  - Three testimonials (see References), subtitle "Trusted by leading healthcare organizations".
  - CTA: "Let's collaborate to elevate your strategy and achieve measurable results."
- **CTAs:** Explore All Services → `/solutions`; Start the Conversation → `/contact`.
- **Forms/functionality:** None.
- **Images/brand assets:** Horizontal logo SVG; large cropped brand mark PNG used as hero decoration; Lucide icons.
- **Internal links:** `/solutions`, `/contact`, footer links.
- **External links:** None (social icons link to `#`).
- **Fully accessible:** Yes. **Content verified:** Yes.
- **Proposed treatment:** **Reorganize** (remove duplicated credibility paragraph; strengthen narrative order) and **Rewrite without changing meaning** for headings that need context.

### 2.2 Solutions — `/solutions`

- **Title:** "Solutions — Quantum Age"
- **Navigation placement:** Header item 1; footer "Services"; footer "Our Services" list links to `/solutions#strategize`, `#awareness`, `#thought-leadership`, `#perform`, `#network`, `#generate`.
- **Main headings:** H1 Solutions · H3 ×6 · H2 The Collaborative Approach · H2 Ready to Get Started?
- **Important content:** Hero "Elevate strategy. Accelerate growth." / "Comprehensive marketing solutions tailored to your goals". Six services, each with summary and four capabilities:
  1. **Strategize & Launch** — "Convert ideas to actions and execute faster. Generate revenue sooner." Market research and opportunity assessment · Strategic planning and roadmap development · Go-to-market strategy execution · Launch support and optimization.
  2. **Build Awareness** — "Go from risky and unknown to renown and famous." Brand positioning and messaging · Public relations and media outreach · Content marketing campaigns · Digital and traditional advertising.
  3. **Be a Thought Leader** — "Become a respected resource and earn trust—and/or business—for life." Executive visibility programs · Content development and publishing · Speaking engagement coordination · Industry recognition strategies.
  4. **Perform** — "Challenge, optimize, and energize your operations." Marketing operations audit · Process optimization · Team training and development · Performance measurement and reporting.
  5. **Network** — "Find the right people, gather them, energize them, and motivate action." Strategic partnership development · Event planning and management · Community building programs · Stakeholder engagement strategies.
  6. **Generate Business** — "Target the right buyers, right messages, right campaigns, at the right time." Lead generation campaigns · Sales enablement tools · Account-based marketing · Conversion optimization.
- **CTAs:** "Learn More" ×6 → `/solutions/<slug>` (**all six return HTTP 404**); Let's Collaborate → `/contact`.
- **Forms/functionality:** None. **Anchor targets:** the footer links to anchors, but the rendered sections expose no matching `id` attributes in the server HTML, so the anchors do not scroll to services.
- **Fully accessible:** Yes. **Verified:** Yes.
- **Proposed treatment:** **Preserve** all six services and 24 capabilities; **Consolidate** into one solutions page with working anchors (no thin detail pages exist to preserve); redirect the six dead detail URLs to the matching anchors.

### 2.3 Solution detail pages — `/solutions/strategize-launch`, `/build-awareness`, `/thought-leader`, `/perform`, `/network`, `/generate-business`

- **Status:** HTTP 404 ("Page not found"). Linked from every "Learn More" button.
- **Proposed treatment:** **Flag for stakeholder verification** (were detail pages planned?) and **Consolidate** into `/solutions#…` anchors.

### 2.4 Approach — `/approach`

- **Title:** "Our Approach — Quantum Age"
- **Navigation placement:** Header item 2.
- **Main headings:** H1 Approach · H2 col·lab·o·ra·tive · H2 Our Three-Level Framework · H3 ×3 · H2 A Partnership Built on Your Needs
- **Important content:**
  - Subtitle "Helping you achieve your goals."
  - Definition: "col·lab·o·ra·tive [ kəˈlabərətiv/ ] Noun — 'An endeavor that is creative in nature by sharing knowledge, learning and building consensus.'" (Note: labelled "Noun"; the word is normally an adjective — flagged.)
  - Three-Level Framework, "Flexible solutions that meet you where you are":
    1. "Strategize. Optimize. Collaborate." — "Define what we need." · Show results fast. · Prioritize "got to have" from "nice to have."
    2. "Make what I have work better." — "Execute more efficiently." · Execute more efficiently. (repeats the summary) · Empower staff with tools to accelerate performance.
    3. "Take us to a whole new level." — "Scale for exponential growth." · Optimize with powerful resources. · Scale for exponential growth. (repeats the summary)
  - "A Partnership Built on Your Needs": "Every organization is at a different stage of growth. Our three-level framework ensures you get exactly the support you need—whether that's quick wins, operational improvements, or transformational scaling." / "We collaborate with you to understand your goals, prioritize what matters most, and deliver measurable results that move your organization forward."
- **CTAs:** None on page besides footer.
- **Verified:** Yes. **Proposed treatment:** **Preserve** framework; **Rewrite without changing meaning** only to remove duplicated bullet lines; add a contact CTA (dead end today).

### 2.5 About — `/about`

- **Title:** "About — Quantum Age"
- **Navigation placement:** Header item 3; footer Quick Links.
- **Main headings:** H1 About · H2 Who We Are · H2 Why Collaborate With Us · H3 Best Experts / Faster Results / Metric-Driven · H2 Healthcare Expertise That Sets Us Apart · H3 Our Focus / Our Approach · H2 Decades of Experience
- **Important content:**
  - Hero: "Build. Grow. Achieve. Maximize. Influence." / "Mobilizing leading experts to help healthcare organizations focused on growth achieve their goals."
  - Who We Are: "Quantum Age Collaborative mobilizes leading experts to help healthcare organizations focused on growth achieve their goals." / "We bring deep expertise in healthcare and aging services—understanding the channels, challenges, and changes that make this sector unique."
  - Why Collaborate: Best Experts ("Access to the very best experts in healthcare without fixed costs."), Faster Results ("Thanks to decades of combined experience, we deliver results quickly."), Metric-Driven ("We focus on measurable outcomes from day one.").
  - Healthcare Expertise: "Unlike agencies unfamiliar with healthcare and aging services, we bring specialized knowledge of the channels, challenges, and changes unique to this sector." Our Focus: Senior living and aging services · Healthcare organizations · Health technology companies · Wellness and longevity providers. Our Approach: Decades of combined experience · Proven strategies and frameworks · Results-focused from day one · Flexible engagement models.
  - Decades of Experience: "Our collaborative team brings together experts with 20-35+ years of experience in healthcare marketing, senior living operations, content development, technology, and strategic advisory." Stats: **30+ Years Average Experience · 10+ Expert Collaborators · 100% Healthcare Focused** (conflict with References stats — see Audit findings).
- **CTAs:** Meet Our Team → `/team`.
- **Verified:** Yes (statistics conflict). **Proposed treatment:** **Reorganize**; statistics **Flag for stakeholder verification**.

### 2.6 Team — `/team`

- **Title:** "Team — Quantum Age"
- **Navigation placement:** Not in header. Footer Quick Links only; About "Meet Our Team".
- **Main headings:** H1 Our Team · H3 ×9 names · H2 Collaborative by Nature · H2 Ready to Work Together?
- **Important content:** Subtitle "Experts in senior care marketing" / "Decades of combined experience serving the industry". Nine people, each with headshot and bullet list, **no job titles**:
  - **CC Andrews** — 30 years in marketing and sales · 20+ years in healthcare · Skilled brand and reputation architect · Media and communications aficionado · Strategic dot connector.
  - **Edie Deane** — 30 years in healthcare · Entrepreneurial strategist · Change accelerator · Customer experience innovator · eLearning enthusiast.
  - **Tanya Hartsoe** — 25+ years in marketing and management · 15+ years in health IT · Human swiss army knife · Organization enthusiast · Morale booster & up-lifter.
  - **Wendy Bullard** — 15 years in Administration · 10 years in health & medical field · Driven, disciplined, nonstop go-getter · Dreams to have own HGTV show 'Flip the Panhandle' · Dog mom for life.
  - **Louis Lenzmeier** — Nearly 25 years in Senior Care · Past leader of Marketing and Partnership teams · Company connector · Passionate about Technology's positive influence in resident care · Provider defender.
  - **Joe Whitt** — Over 35 years experience in the healthcare industry · Thought leader and visionist in senior housing · Driven focus on employee experience and culture · Manage market strategies for start ups and rebranding.
  - **Joanne Kaldy** — Innovative communicator and storyteller · Award-winning journalist · Been called 'The Press Secretary of Long-Term Care' · Mom to the most famous dog in Pennsylvania · Developer of cutting-edge, creative content for 20 years.
  - **Jaret Andrews** — Graduate of the Ohio Media School core program · Current student of The Ohio Media School Sports Emphasis program · Video and audio editor · Website design and editor.
  - **Meg LaPorte** — 25+ years not-for-profit management · 15 years in long-term care and senior living · Communications and multimedia pro · Policy wonk.
  - "Collaborative by Nature": "Our team brings together diverse expertise across marketing, operations, technology, and senior care. We collaborate with each other—and with you—to deliver strategies that work." / "Every engagement benefits from our collective decades of experience serving senior living operators, healthcare organizations, and innovative companies in the longevity economy."
- **Images:** `/team-headshots/{cc-andrews,edie,tanya,wendy,louis,joe,joanne,jaret,meg}.png` — 1024×1024 transparent PNG cut-outs, ~1.3–1.7 MB each.
- **CTAs:** Get in Touch → `/contact`.
- **Verified:** Yes. **Proposed treatment:** **Preserve** all nine people and bullets verbatim; add CC Andrews' role ("President") only because it is stated repeatedly in source articles; other roles **Flag for stakeholder verification**.

### 2.7 References — `/references`

- **Title:** "References — Quantum Age"
- **Navigation placement:** Header item 4.
- **Main headings:** H1 References · H3 Senior Living Operators / Healthcare Organizations / Industry Innovators · H2 What Our Clients Say · H2 Decades of Experience
- **Important content:**
  - Subtitle "Trusted by leading healthcare organizations".
  - Client groups: Senior Living Operators — "Leading providers trust us to elevate their brand and drive occupancy." Healthcare Organizations — "Health systems and medical groups rely on our expertise to reach their audience." Industry Innovators — "Technology companies and startups partner with us to enter the market."
  - Testimonials (subtitle "Real results from real partnerships"):
    1. "Quantum Age brings deep expertise and strategic thinking to every engagement. Their collaborative approach made all the difference." — **Scott Brown**, Director, The GREEN HOUSE Project
    2. "Working with Quantum Age transformed our marketing approach. They understand senior care like no other agency." — **Margaret McConnell**, Chairperson, Nevada Board of Examiners for Long Term Care Administration
    3. "The team's decades of experience in healthcare marketing delivered results faster than we expected." — **Rand Johnson**, Marketing Director, Prime Care Technologies
  - Decades of Experience: "Our team has worked with hundreds of healthcare organizations across the senior care continuum, from small startups to national providers. We bring deep industry knowledge and proven strategies that deliver results." Stats: **20+ Years of Experience · 200+ Clients Served · 100% Senior Care Focused**.
- **Images:** None (initials/avatars not used; no logos).
- **CTAs:** None besides footer.
- **Verified:** Present on source. Testimonial permissions and currency **unverified**.
- **Proposed treatment:** Testimonials **Preserve** verbatim with exact attribution, plus **Flag for stakeholder verification** (permission, current titles). Stats **Flag for stakeholder verification** (conflict with About).

### 2.8 Insights — `/insights` and `/insights/<slug>`

- **Title:** "Insights — Quantum Age"
- **Navigation placement:** Not in header. Footer Quick Links only.
- **Listing content:** H1 "Insights That Drive Growth"; intro "Market intelligence, strategic playbooks, and proven tactics for the longevity economy. Data-driven insights from experts who live and breathe senior care." Search input (placeholder-only label "Search insights, topics, or tags..."); category buttons All Insights (115), Marketing (24), Strategy (7), Technology (13), Industry (56), Innovation (15); type buttons All Types / Articles / Reports / Case Studies. "Featured" (3) and "More Insights" sections. Each card: type label, title, summary, tags, "Quantum Age Team", read time.
- **Article content:** 115 articles, all published by "Quantum Age Team", dated **22 Nov 2013 → 29 Sep 2026**, with read time, tags, a hero image (97 articles have a real image) and rich-text body. Article page has "All insights" back link and an in-article CTA on some posts.
- **Tags used on articles:** Senior Care (62), B2B (46), Strategy (44), Marketing (16), Technology (15), Innovation (12), Longevity Economy (9), Content (5), Design (5), COVID-19 (5), AI (4), SNF (4), Industry Trends (3), Reputation (3), Events (3), ABM (2), Sponsorship (2), Leadership, Social Media, Brand (1 each).
- **Images:** `/insights-images/<hash>.{jpg,png,jpeg,webp}` — 184 files referenced, some very large (up to 7.5 MB). Six inline images are hot-linked from a legacy HubSpot host (`331578.hs-sites.com`, `s3.amazonaws.com/cdn1.hubspot.com`).
- **Functionality:** Client-side search and filters. The listing page has **no footer**.
- **Fully accessible:** Yes — all 115 article URLs returned HTTP 200 with server-rendered content.
- **Proposed treatment:** **Preserve** all 115 articles (title, date, author, read time, tags, summary, body, images). **Rebuild** listing with working local search and tag filtering. Category counts and type filters **Flag for stakeholder verification** (they do not match article tags, and every item is an "Article").
- The full article list is in Appendix A.

### 2.9 Contact — `/contact`

- **Title:** "Contact — Quantum Age"
- **Navigation placement:** Header item 5; footer Quick Links.
- **Main headings:** H1 Let's Collaborate · H2 Get In Touch · H3 Phone / Email / Address / Send Us a Message
- **Important content:** "Helping you thrive in the longevity economy like never before." / "Ready to accelerate your growth in the longevity economy? We're here to help." Phone **440.638.6990** (`tel:440.638.6990`). Email **askQA@quantum-age.com**. Address **PO Box 360727, Cleveland, OH 44136**. "Serving clients internationally".
- **Form fields:** Name * (text, required, placeholder "Your full name") · Email * (email, required, "you@organization.com") · Organization ("Your company or organization") · Phone (tel, "(555) 123-4567") · Message * (textarea, required, "Tell us about your project or question...") · Send Message.
- **Form behavior (static analysis of the page's JS, not submitted):** On submit, calls a server function with `{name, email, company, phone, message, type: "general"}`; shows a red error box on failure; on success shows a confirmation and clears fields. Destination of data **unverified**.
- **Verified:** Yes. **Proposed treatment:** **Preserve** contact details; **Rebuild functionality as demo** (no submission).

### 2.10 Privacy Policy — `/privacy`

- **Title:** "Privacy Policy | Quantum Age"
- **Navigation placement:** Footer legal row.
- **Full text (verbatim):** "Quantum Age collects only the information you choose to share with us through forms on this site — such as your name, email address, organization, phone number, and message." · H2 "How we use your information" — "We use your information to respond to inquiries, deliver requested materials, and send occasional updates about the longevity economy. We do not sell your personal information." · H2 "Your choices" — "You may unsubscribe from communications at any time, or request that we delete your information, by emailing askQA@quantum-age.com."
- **Verified:** Yes (complete as published). **Proposed treatment:** **Preserve** verbatim; **Flag for stakeholder verification** (no effective date; does not mention the analytics script or Cloudflare cookie).

### 2.11 Terms of Use — `/terms`

- **Title:** "Terms of Use | Quantum Age" (footer label says "Terms of Service")
- **Full text (verbatim):** "By using quantum-age.com you agree to these terms. Content on this site is provided for general informational purposes and does not constitute legal, financial, or professional advice." · H2 "Intellectual property" — "All content, insights, and materials published here are owned by Quantum Age unless otherwise noted. You may share and reference our content with attribution, but may not republish it in full without permission." · H2 "Contact" — "Questions about these terms? Email askQA@quantum-age.com."
- **Verified:** Yes. **Proposed treatment:** **Preserve** verbatim; label mismatch noted.

### 2.12 Beta section — `/beta` and subpages

Linked from the footer as "QABeta".

| URL | Title | H1 |
| --- | --- | --- |
| `/beta` | Quantum Age — Longevity Economy Growth P… | B2B Marketing for the Longevity Economy |
| `/beta/operators` | For Operators — Quantum Age | Drive Occupancy. Maximize Value. |
| `/beta/investors` | For Investors — Quantum Age | Deploy Capital with Conviction. Accelerate Returns. |
| `/beta/tech` | For Tech & Innovators — Quantum Age | Break Into Senior Living. Scale with Precision. |
| `/beta/healthcare-tech` | Healthcare Tech — Quantum Age | Prove ROI. Drive Adoption. Scale Revenue. |
| `/beta/wellness` | Wellness — Quantum Age | Lead the Longevity Movement. Scale with Purpose. |
| `/beta/roi-calculator` | ROI Calculator — Quantum Age | Calculate Your Marketing ROI |
| `/beta/services/brand`, `/growth`, `/ma-transition` | Brand Strategy / Growth Marketing / M&A Transition Services | All three render the same "Full-Spectrum Growth Solutions" page |

- **Content:** A different positioning ("B2B Marketing for the Longevity Economy"), different service names (M&A Transition, Growth & Demand Generation, Brand & Positioning, AI Velocity Websites and B2B Lead Generation "Powered by gohuntr.com"), specific performance claims ("Reduce time-to-close by 40%", "15-25% occupancy lift", "2,844% ROI", "$850M AUM"), a "Live Market Intelligence" map with numbers that animate from zero, an ROI calculator, and **three testimonials that appear nowhere else** (Sarah Mitchell / Heritage Senior Living; Marcus Chen / CareConnect Technologies; Jennifer Torres / Longevity Capital Partners).
- **External links:** `gohuntr.com`, `gohuntr.com/ai-velocity-websites`, `gohuntr.com/b2b-lead-gen`, `linkedin.com/company/quantum-age`, `twitter.com/quantumage`.
- **Broken internal links:** "View Details" links on `/beta` point to `/services/brand`, `/services/growth`, `/services/ma-transition` (HTTP 404).
- **Proposed treatment:** **Flag for stakeholder verification.** Not rebuilt. None of its claims, services or testimonials are used in the prototype because they conflict with the main site and cannot be verified.

### 2.13 Probed paths that do not exist

`/sitemap.xml`, `/robots.txt`, `/blog`, `/services`, `/careers`, `/faq`, `/admin`, `/login`, `/services/*`, `/blog/*`, `/favicon.ico` → HTTP 404.

---

## 3. Navigation inventory

| Area | Items |
| --- | --- |
| Header (desktop ≥768px) | Logo → `/` · Solutions · Approach · About · References · Contact |
| Header (mobile) | Hamburger button reveals the same five links in a dropdown panel |
| Dropdowns | None |
| Utility navigation | None (no search, no phone in header) |
| Footer › Quick Links | About · Services (→ `/solutions`) · Team · Insights · Contact |
| Footer › Our Services | Strategize & Launch · Build Awareness · Thought Leadership · Perform · Network · Generate Business (→ `/solutions#…`) |
| Footer › Get in Touch | 440.638.6990 · info@quantum-age.com · "Serving clients internationally" |
| Footer › Social | Three icon links (LinkedIn, Facebook, Twitter/X icons) — all `href="#"` with no accessible name |
| Legal row | © 2026 Quantum Age Collaborative. All rights reserved. · Privacy Policy · Terms of Service · QABeta |

**Repeated links:** Contact appears in header, footer and page CTAs (expected). Services are linked from both header ("Solutions") and footer ("Services").

**Inconsistent labels:** "Solutions" (header) vs "Services" (footer); "Be a Thought Leader" (pages) vs "Thought Leadership" (footer); "Terms of Service" (footer) vs "Terms of Use" (page); "Metric Driven" (home) vs "Metric-Driven" (About); "Access Leading Experts" (home) vs "Best Experts" (About); footer email `info@` vs contact page `askQA@`.

**Dead ends:** Approach, References, Privacy and Terms have no in-page next step. Six "Learn More" buttons lead to 404 pages. Footer service anchors do not land on their sections. Social icons go nowhere.

**Missing cross-links:** Team and Insights are absent from the header. Services do not link to related insights. Testimonials do not link to the services involved.

**Mobile navigation:** The toggle button has no accessible name, no `aria-expanded` and no `aria-controls`; pressing Escape does not close the menu; focus is not managed. Team and Insights are also missing from the mobile menu.

---

## 4. Content inventory

| Category | Content found | Where |
| --- | --- | --- |
| Company positioning | "Elevate strategy. Accelerate growth."; "The only marketing firm in senior care steeped in both consumer and business-to-business."; "Senior Care Marketing & Strategy Experts" | Home, Solutions, footer, meta |
| Company background | Mobilizes leading experts; deep healthcare & aging services expertise; 20–35+ years of experience; extension of your team; rightsized support | Home, About |
| Services | Six solution areas × four capabilities | Home, Solutions, footer |
| Industries / audiences | Senior living & aging services; healthcare organizations; health technology companies; wellness & longevity providers; Senior Living Operators / Healthcare Organizations / Industry Innovators | About, References |
| Approach | Collaborative definition; You + Team + Market + Opportunity = Success; Three-Level Framework | Home, Solutions, Approach |
| People | Nine team members with headshots and bullets | Team |
| Testimonials | Three attributed quotes | Home, References |
| Insights | 115 articles, 2013–2026 | Insights |
| Contact | Phone, two emails, PO Box address, "Serving clients internationally" | Contact, footer |
| Legal | Short privacy policy and terms | Privacy, Terms |
| CTAs | Start the Conversation; Let's Collaborate; Get in Touch; Explore All Services; Meet Our Team; Send Message | Various |
| Repeated content | Credibility paragraph repeated on Home; Collaborative formula on Home and Solutions; testimonials on Home and References; benefits on Home and About | — |
| Potentially outdated | Articles referencing COVID-19 (2020), PDPM (2019/2020), "2018 senior housing" cheat sheet, GPT-4; event announcements from 2015–2019; Jaret Andrews listed as "current student" | Insights, Team |
| Requires verification | Statistics (conflicting); testimonial permissions; email address; team roles; insight categories; `/beta` content; social profiles | See `content-verification.md` |

---

## 5. Functionality inventory

| Functionality | Observed? | Notes |
| --- | --- | --- |
| Contact form | Yes | Five fields; posts to server function; destination unverified. Not submitted. |
| Newsletter form | No | Privacy policy mentions "occasional updates", but no signup form was found. |
| Search | Yes | Client-side insight search on `/insights`. |
| Filtering | Yes | Category and type buttons on `/insights`. Counts do not match article tags; "Reports" and "Case Studies" have no items. |
| Downloads | Not on main site | `/beta` has a "Download Full Market Analysis" button and "Download Market Brief" buttons — behavior unverified. |
| Embedded media | No | No video or audio embeds in main pages. |
| CMS-driven content | Unverified | Articles appear to be stored structured data rendered by the app; the CMS (if any) is not visible. |
| Scheduling | No | `/beta` "Schedule a Call" links to `/contact`. |
| CRM behavior | Unverified | One article announces HubSpot partner certification and legacy images come from a HubSpot host; no HubSpot tracking script was observed on the current site. |
| Analytics | Yes | `/~flock.js` with `data-proxy-url="/~api/analytics"` loaded on every page (vendor unverified). |
| Cookie consent | No | No banner observed. Cloudflare sets `__cf_bm`. |
| Social links | Broken | Footer icons link to `#`. `/beta` links to `linkedin.com/company/quantum-age` and `twitter.com/quantumage` (unverified as official). |
| Third-party integrations | Partial | Google Fonts; Cloudflare; Lovable/R2-hosted OG image; legacy HubSpot images; `gohuntr.com` links on `/beta`. |
| Account features | No | `/login`, `/admin` return 404. |
| Payment | No | — |
| ROI calculator | Yes (beta only) | `/beta/roi-calculator` interactive; not rebuilt. |

---

## 6. Asset inventory

| Asset | Source URL | Prototype location | Notes |
| --- | --- | --- | --- |
| Horizontal logo (mark + "QuantumAge COLLABORATIVE") | `https://019d7010-f64d-75c5-9022-57059f27e92c.mochausercontent.com/quantum-age-logo-vertical.svg` | `public/brand/quantum-age-logo.svg` | Adobe Illustrator SVG, viewBox 216×55.04. File name says "vertical" but the artwork is horizontal. Copied unmodified. |
| Logo mark only | Same SVG | `public/brand/quantum-age-mark.svg`, `src/app/icon.svg` | Identical artwork with the viewBox cropped to the mark (no paths redrawn). |
| Large mark PNG | `…/qant-icon-lrg.png` | Not reused | 528×551; the artwork is clipped on the right and bottom edges. |
| Apple touch icon | Derived | `src/app/apple-icon.png` | Rendered from the mark SVG on white. |
| Favicon | `/favicon.ico` | — | **Missing on live site (404).** |
| Brand colors | Logo SVG + site CSS | `src/app/globals.css` | Logo: green `#8DC63F`, plum `#70456E`, gray `#808285`. Site CSS: primary `hsl(87 56% 51%)`, secondary/accent `hsl(303 25% 35%)`, foreground `hsl(0 0% 20%)`. |
| Fonts | Google Fonts | Replaced (see design direction) | Montserrat 400–900 (display) and Open Sans 400–700 (body). |
| Team headshots ×9 | `https://quantum-age.com/team-headshots/<name>.png` | `public/team/<name>.webp` | Transparent cut-outs, resized to 640px WebP (≈40–75 KB each from ≈1.3–1.7 MB). |
| Insight images | `https://quantum-age.com/insights-images/<hash>.*` | `public/insights-images/<hash>.webp` | 184 images, max 1600px wide WebP q72 (≈9.9 MB total). |
| Legacy HubSpot inline images | `331578.hs-sites.com/...` | `public/insights-images/hs-*.webp` | 5 of 6 retrievable; 1 returns 403 (`s3.amazonaws.com/cdn1.hubspot.com/.../7K0A0223.jpg`) and is omitted. |
| US map | `…/us-states-map.png` | Not reused | Used only on `/beta`. |
| Social sharing image | `https://pub-bb2e…r2.dev/…lovable.app-1779813239033.png` | Not reused | An auto-generated screenshot of a Lovable preview, not a designed share image. Prototype generates its own OG image from verified text and the logo. |
| Photography | — | — | No photography exists besides headshots and article images. |
| Illustrations / patterns / video | — | — | None found. Icons are Lucide line icons. |
| Downloadable documents | — | — | None found on main site. |

---

## 7. Audit findings

### Structural problems
- Six "Learn More" links lead to HTTP 404 pages.
- Footer anchors (`/solutions#strategize` etc.) do not match any section id.
- Team and Insights — the two pages with the most original, verifiable content — are hidden from the header and mobile menu.
- `/beta` is linked publicly from the footer but contradicts the main site's services, claims and testimonials.
- One article is published twice (`the-4-keys-to-maximizing-your-sponsorship-expenditures` and `…-1`).
- Two article bodies link to `/blog/<slug>` URLs that 404; the same articles exist under `/insights/<slug>`.

### Navigation problems
- Label inconsistencies listed in §3.
- No breadcrumbs or "back to section" links outside articles.
- No in-page next step on Approach, References, Privacy, Terms.

### Content-hierarchy problems
- Home repeats the same credibility paragraph twice, in consecutive sections.
- Home heading order jumps from H1 to H3 before any H2.
- Headings such as "What We Do", "Decades of Experience" (used on two pages with different stats) and "Ready to Get Started?" could belong to any company.
- About and References present different headline statistics.
- Approach repeats bullet text that duplicates the step summary.

### Readability problems
- Light gray body text on white and lime-green text/buttons (`#8DC63F` family) have low contrast. White text on the primary green button is ≈2.1:1, below WCAG AA.
- Centered body paragraphs across wide measures on Home and About.
- Article tag chips and metadata use 12–14px muted gray.

### Accessibility concerns
- No `<main>` landmark on any page; no skip link.
- Mobile menu button unlabeled; no expanded state; Escape does not close it.
- Social icon links have no accessible name and go to `#`.
- Search input on Insights relies on placeholder text as its only label.
- Contact form uses placeholders as examples (acceptable) but the error state is not associated with fields.
- 15–18 interactive targets per page are smaller than 24×24 CSS px.
- Focus indicator is the browser default only (1px auto outline on most links).
- Article images often use file names as alt text (e.g. "EHR_blog_computer-1240311.jpg").

### Mobile issues
- Horizontal overflow detected at 834px width on Home and Solutions during the first pass (caused by the oversized hero mark animation); not reproduced on a second load, so it appears timing-dependent.
- Team and Insights missing from the mobile menu.
- Very long single-column scroll on Home (≈6,400px at 390px width) with repeated content.

### Design inconsistencies
- Rounded cards with icon tiles are used for nearly every section (benefits, services, testimonials, contact details), so sections are visually indistinguishable.
- Insights listing has no footer while every other page does.
- Mixed testimonial formats (Home: role and organization on one line; References: separate lines).

### Trust and credibility gaps
- Conflicting statistics (30+ vs 20+ years; 10+ collaborators vs 200+ clients served; "100% Healthcare" vs "100% Senior Care").
- Two different email addresses.
- Testimonials have no photos, logos, dates or context, and are worded generically.
- No team job titles.
- `/beta` testimonials and metrics look like sample content and are publicly reachable.
- Dead social links.

### Conversion-flow friction
- Primary CTA buttons have poor contrast.
- Several pages end without a next step.
- No indication of what happens after submitting the form or how quickly Quantum Age responds.

### Missing states
- No visible loading state or field-level validation messaging on the contact form.
- Insights search has no "no results" guidance beyond an empty list (unverified — not triggered).

### Broken or inaccessible content
- `/favicon.ico` 404 (console error on every page).
- Six solution detail pages 404.
- Two legacy inline images unavailable (one 403 on S3, one placeholder `src="none"` hero on "Harnessing Longevity For Senior Care").
- 15 articles use the company logo as their hero image; 2 articles have no hero image.

---

## Appendix A — Insight articles (115)

Listed in the order shown on the live listing (featured first). Date is the `<time datetime>` value.

See `src/content/articles.json` for the full preserved content, and each item's `sourceUrl`.

| # | Date | Title | Slug | Tags | Hero image |
| --- | --- | --- | --- | --- | --- |
| 1 | 2026-01-23 | AI Marketing in 2026: What Niche B2B Leaders Need to Understand Now | `ai-marketing-in-2026-what-niche-b2b-leaders-need-to-understand-now` | AI, Marketing, B2B | yes |
| 2 | 2026-01-23 | From “More” to “Smarter”: Why Efficient Growth Is the New Mandate for B2B Marketing in 2026 | `from-more-to-smarter-why-efficient-growth-is-the-new-mandate-for-b2b-marketing-in-2026` | Marketing, B2B, Industry Trends | yes |
| 3 | 2025-12-23 | From Content to Conversion: Designing Marketing That Moves People | `from-content-to-conversion-designing-marketing-that-moves-people` | Marketing, Content, Design | yes |
| 4 | 2026-09-29 | Reputation Is a Strategy: Building Trust Before You Need It | `reputation-is-a-strategy-building-trust-before-you-need-it` | Reputation, Senior Care | yes |
| 5 | 2025-09-19 | What the Latest AI Marketing Trends Mean for Senior Care B2B Marketers | `what-the-latest-ai-marketing-trends-mean-for-senior-care-b2b-marketers` | AI, Senior Care, Marketing | yes |
| 6 | 2025-09-18 | Reputation at Risk: Why Skilled Nursing Needs a New Playbook for Online Perception | `reputation-at-risk-why-skilled-nursing-needs-a-new-playbook-for-online-perception` | Reputation, SNF | yes |
| 7 | 2025-08-04 | How GPT4 can be used for Senior Care and Niche Content Marketing | `how-gpt4-can-be-used-for-senior-care-and-niche-content-marketing` | AI, Senior Care, Marketing | yes |
| 8 | 2025-07-24 | Why Reputation Management Is Now Mission-Critical for Senior Living Operators | `why-reputation-management-is-now-mission-critical-for-senior-living-operators` | Senior Care, Reputation | yes |
| 9 | 2025-07-24 | The Power of Niche Marketing: Why Going Narrow Can Help You Go Big | `the-power-of-niche-marketing-why-going-narrow-can-help-you-go-big` | Marketing | yes |
| 10 | 2025-07-24 | 10 Low-Lift Marketing Moves That Deliver Big in Senior Care | `10-low-lift-marketing-moves-that-deliver-big-in-senior-care` | Senior Care, Marketing | yes |
| 11 | 2025-05-14 | Cut Through the Noise: Why Clarity Is Your Competitive Edge in Senior Living B2B Marketing | `cut-through-the-noise` | Senior Care, Marketing, B2B | yes |
| 12 | 2025-03-06 | 2025 Aging Services Trends: What’s Next for the Industry? | `2025-aging-services-trends` | Senior Care, Industry Trends | yes |
| 13 | 2025-02-07 | Shifting to a Quality Mindset: Why ABM is a Game-Changer | `shifting-to-a-quality-mindset-why-abm-is-a-game-changer` | ABM | yes |
| 14 | 2025-01-27 | Google’s AI Search: What it means for your business (and what to do about it) | `googles-ai-search-what-it-means-for-your-business-and-what-to-do-about-it` | AI | yes |
| 15 | 2021-06-09 | Leadership in times of crisis | `leadership-in-times-of-crisis` | Leadership | no |
| 16 | 2021-06-09 | CC appointed to Entrepreneur’s Accelerated Group | `cc-appointed-to-entrepreneurs-accelerated-group` | Senior Care, B2B, Strategy | no |
| 17 | 2021-06-09 | QA discusses relationship building post-COVID-19 | `qa-discusses-relationship-building-post-covid-19` | COVID-19 | no |
| 18 | 2021-06-09 | Forum speaks out on the potential for therapeutics in managing COVID-19 | `forum-speaks-out-on-the-potential-for-therapeutics-in-managing-covid-19` | COVID-19 | no |
| 19 | 2021-06-09 | Caraday’s positive culture showcased in Provider | `caradays-positive-culture-showcased-in-provider` | Senior Care, B2B, Strategy | no |
| 20 | 2021-06-09 | SAIVA Healthcare featured in McKnight’s | `saiva-healthcare-featured-in-mcknights` | Senior Care, B2B, Strategy | no |
| 21 | 2020-06-09 | Exploring Innovative Models of Care | `exploring-innovative-models-of-care` | Senior Care, B2B, Strategy | yes |
| 22 | 2020-06-09 | The Memory Care Design Challenge Presented at EFA | `the-memory-care-design-challenge-presented-at-efa` | Design | yes |
| 23 | 2020-05-22 | Changing Direction and Moving Forward: Making Virtual Events Part of Your New Strategy | `changing-direction-and-moving-forward-making-virtual-events-part-of-your-new-strategy` | Strategy, Events | yes |
| 24 | 2020-05-22 | What to Do with That (Now Obsolete) Event Plan: You DO Have Options | `what-to-do-with-that-now-obsolete-event-plan-you-do-have-options` | Events | yes |
| 25 | 2020-04-20 | Free Resident Engagement Resources Under COVID-19 Restrictions | `free-resident-engagement-resources-under-covid-19-restrictions` | COVID-19 | yes |
| 26 | 2020-04-08 | Your Post-COVID-19 Marketing Plan Can’t Wait | `your-post-covid-19-marketing-plan-cant-wait` | Marketing, COVID-19 | yes |
| 27 | 2020-03-31 | Marketing During a National Crisis Doesn’t Need to Stop, But It Needs to Adjust | `marketing-during-a-national-crisis-doesnt-need-to-stop-but-it-needs-to-adjust` | Marketing | yes |
| 28 | 2020-03-25 | COVID-19 Survival Guide: Key Takeaways for Your Organization | `covid-19-survival-guide-key-takeaways-for-your-organization` | COVID-19 | yes |
| 29 | 2020-01-14 | 2020 Predictions in Senior Living: Disruption, New Tech, Workforce Challenges, and PDPM. | `2020-predictions-in-senior-living-disruption-new-tech-workforce-challenges-and-pdpm` | Senior Care, Technology | yes |
| 30 | 2019-05-22 | Keep It Small | `keep-it-small` | Senior Care, B2B, Strategy | yes |
| 31 | 2019-04-12 | Quantum Age Leads Panel on Technology in Senior Living | `quantum-age-leads-panel-on-technology-in-senior-living` | Senior Care, Technology | yes |
| 32 | 2019-03-28 | Heading to San Antonio for Argentum? Some Travel Highlights from a “Local” | `heading-to-san-antonio-for-argentum-some-travel-highlights-from-a-local` | Senior Care, B2B, Strategy | yes |
| 33 | 2019-02-27 | The 4 Keys to Maximizing Your Sponsorship Expenditures | `the-4-keys-to-maximizing-your-sponsorship-expenditures-1` | Sponsorship | yes |
| 34 | 2019-02-15 | Will I See You at LeadingAge? | `will-i-see-you-at-leadingage` | Senior Care, B2B, Strategy | yes |
| 35 | 2018-11-12 | Best Practices of Social Media’s Top 3: Facebook, Twitter, LinkedIn | `best-practices-of-social-medias-top-3-facebook-twitter-linkedin` | Social Media | yes |
| 36 | 2018-11-12 | SEO: Old-School Tactic or Leading-Edge Strategy? | `seo-old-school-tactic-or-leading-edge-strategy` | Strategy | yes |
| 37 | 2018-11-12 | Content Confusion? Consider These Options for Modern Content Marketers | `content-confusion-consider-these-options-for-modern-content-marketers` | Content | yes |
| 38 | 2018-09-27 | Why and How You Should Align Your Company with Associations | `why-and-how-you-should-align-your-company-with-associations` | Senior Care, B2B, Strategy | yes |
| 39 | 2018-09-17 | Recruiting for the future? Find your ‘why’ first | `recruiting-for-the-future-find-your-why-first` | Senior Care, B2B, Strategy | yes |
| 40 | 2018-08-30 | Adopting New Media Without Abandoning Traditional Media Relations | `adopting-new-media-without-abandoning-traditional-media-relations` | Senior Care, B2B, Strategy | yes |
| 41 | 2018-07-09 | The Hidden Cost of DIY Events | `the-hidden-cost-of-diy-events` | Events | yes |
| 42 | 2018-07-06 | How to Keep Content Efforts from Slipping Through the Cracks | `how-to-keep-content-efforts-from-slipping-through-the-cracks` | Content | yes |
| 43 | 2018-07-06 | How to be a Better Corporate Partner to Associations | `how-to-be-a-better-corporate-partner-to-associations` | Senior Care, B2B, Strategy | yes |
| 44 | 2018-06-27 | Taking Innovation from Mysterious to Magnificent | `taking-innovation-from-mysterious-to-magnificent` | Technology, Innovation | yes |
| 45 | 2018-05-11 | The 4 Keys to Maximizing Your Sponsorship Expenditures | `the-4-keys-to-maximizing-your-sponsorship-expenditures` | Sponsorship | yes |
| 46 | 2018-03-16 | The Dollars and Sense of the Business of Aging | `the-dollars-and-sense-of-the-business-of-aging` | Senior Care, B2B, Strategy | yes |
| 47 | 2018-03-04 | Recognizing the Loneliness Crisis Among Older Adults Is a Vital First Step | `-recognizing-the-loneliness-crisis-among-older-adults-is-a-vital-first-step-` | Senior Care, B2B, Strategy | yes |
| 48 | 2018-03-04 | SNF Survival Depends on Understanding the New Hospital Landscape, Among Other Factors | `snf-survival-depends-on-understanding-the-new-hospital-landscape-among-other-factors` | SNF | yes |
| 49 | 2018-02-01 | Intergenerational Programming Popular But Not Substantive in Senior Housing Communities | `intergenerational-programming-popular-but-not-substantive-for-senior-housing-providers` | Senior Care, B2B, Strategy | yes |
| 50 | 2018-01-31 | Your Cheat Sheet for 2018 Senior Living Trends & Predictions | `your-cheat-sheet-for-2018-senior-housing-trends-predictions` | Senior Care, Industry Trends | yes |
| 51 | 2018-01-16 | Up and Coming Housing Options for Older Adults are Making their Mark in the Longevity Economy | `up-and-coming-housing-options-for-older-adults-are-making-their-mark-in-the-longevity-economy` | Longevity Economy | no |
| 52 | 2017-12-19 | 5 Ways to Obtain Brand Differentiation with Membership and Trade Associations | `5-ways-to-obtain-brand-differentiation-with-membership-and-trade-associations` | Brand | yes |
| 53 | 2017-12-19 | 6 Ways to Achieve your Business Development Goals with Membership and Trade Associations | `6-ways-to-achieve-your-business-development-goals-with-membership-and-trade-associations` | Senior Care, B2B, Strategy | no |
| 54 | 2017-12-19 | Why and How to Position Your Company as a Knowledge Leader through Associations | `why-and-how-to-position-your-company-as-a-knowledge-leader-through-associations` | Senior Care, B2B, Strategy | yes |
| 55 | 2017-12-12 | Ziegler Senior Living 150 List Offers Noteworthy Takeaways and Details | `ziegler-senior-living-150-list-offers-noteworthy-takeaways-and-some-details` | Senior Care | yes |
| 56 | 2017-12-05 | Telomeres, Mitochondria, and Healthy Longevity | `telomeres-mitochondria-and-healthy-longevity` | Longevity Economy | yes |
| 57 | 2017-11-28 | The Disease of Aging, Airbnb, and Products for Longevity | `the-disease-of-aging-airbnb-and-products-for-longevity` | Longevity Economy | yes |
| 58 | 2017-11-28 | Survey Points to Best Practices for Successful Innovation | `survey-points-to-best-practices-for-successful-innovation` | Technology, Innovation | yes |
| 59 | 2017-10-24 | Survey Finds Urbanites Confident About Staying in Cities as they Age | `urbanites-want-to-stay-in-the-city` | Senior Care, B2B, Strategy | yes |
| 60 | 2017-10-02 | A Global Perspective on Aging & the Longevity Dividend | `a-global-perspective-on-aging-the-longevity-dividend` | Longevity Economy | yes |
| 61 | 2017-09-27 | 4 Simplified Steps to Account-Based Marketing (ABM) | `4-simplified-steps-to-account-based-marketing-abm` | Marketing, ABM | yes |
| 62 | 2017-09-19 | Retirement Income, Healthcare Costs, and Homeownership—Food for Thought on the Future of the Longevity Economy | `retirement-income-healthcare-costs-and-homeownership-food-for-thought-on-the-future-of-the-longevity-economy` | Longevity Economy | yes |
| 63 | 2017-09-18 | Will Senior Housing Be Affordable and Meet the Design Needs of Older Adults? | `will-senior-housing-be-affordable-and-meet-the-design-needs-of-older-adults` | Design | yes |
| 64 | 2017-09-05 | What You Need To Know About Corporate Partnerships With Trade Associations | `what-you-need-to-know-about-corporate-partnerships-with-trade-associations` | Senior Care, B2B, Strategy | yes |
| 65 | 2017-08-31 | Four Impactful B2B Marketing Strategies You May Be Missing Out On | `four-impactful-b2b-marketing-strategies-you-may-be-missing-out-on` | Marketing, B2B | yes |
| 66 | 2017-08-30 | The Need for SNF Care Way More Likely for You and Me (and Everyone Else) But an Opportunity for Providers | `the-need-for-snf-care-way-more-likely-for-you-and-me-and-everyone-else-but-an-opportunity-for-providers` | SNF | yes |
| 67 | 2017-08-14 | It’s Time for Long Term Care Providers to Take the Lead on Reframing Aging | `its-time-for-long-term-care-providers-to-take-the-lead-on-reframing-aging` | Senior Care, B2B, Strategy | yes |
| 68 | 2017-08-14 | A Deep Dive Into the Policy Response to Global Aging | `lets-take-a-deep-dive-into-the-policy-response-to-global-aging` | Senior Care, B2B, Strategy | yes |
| 69 | 2017-07-26 | Aging Services Marketers: Meet the “Perennials” | `aging-services-marketers-meet-the-perennials` | Senior Care | yes |
| 70 | 2017-07-20 | Here's Why Intergenerational Programs are The Future of Aging Services | `why-intergenerational-programs-are-future-of-aging-services` | Senior Care | yes |
| 71 | 2017-07-15 | A New Report—Packed with Useful Data—Ranks States Based on Delivery of Long-Term Services and Supports | `a-new-report-packed-with-useful-data-ranks-states-based-on-delivery-of-long-term-services-and-supports` | Senior Care, B2B, Strategy | yes |
| 72 | 2017-05-18 | Global Innovation in Aging Services is (Finally) a Thing | `global-innovation-in-aging-services-is-now-a-thing` | Senior Care, Technology, Innovation | yes |
| 73 | 2017-05-12 | Life Expectancy Disparities Point to Opportunities for Aging Services Innovation | `life-expectancy-disparities-point-to-opportunities-for-aging-services-innovation` | Senior Care, Technology, Innovation | yes |
| 74 | 2017-05-10 | Quantum Age President Elected to Advancing Excellence Board | `quantum-age-president-elected-to-advancing-excellence-board` | Senior Care, B2B, Strategy | yes |
| 75 | 2017-03-16 | Wide-Reaching CMS Rule Opens the Door for Innovation | `requirements-of-participation-final-rule-creates-opportunities` | Technology, Innovation | yes |
| 76 | 2017-03-02 | A Fresh Take on Senior Care Technology and Innovation | `new-ideas-for-innovation-in-technology-for-seniors` | Senior Care, Technology, Innovation | yes |
| 77 | 2017-03-02 | A Crystal Ball Look at Post-Acute Care & Senior Housing | `a-crystal-ball-look-at-post-acute-care-senior-housing` | Senior Care, B2B, Strategy | yes |
| 78 | 2017-01-18 | New Payment Models Foster Care Innovations | `new-payment-models-foster-innovation` | Technology, Innovation | yes |
| 79 | 2017-01-16 | Competition & Reinvestment: the Future of CCRCs & Senior Living | `competition-reinvestment-the-future-of-ccrcs-senior-living` | Senior Care | yes |
| 80 | 2017-01-09 | The Longevity Economy: Observations & Opportunities | `the-longevity-economy-observations-opportunities` | Longevity Economy | yes |
| 81 | 2017-01-05 | 20 Tips for Kickstarting Your Content Marketing (Part 2) | `20-tips-for-kickstarting-your-content-marketing-part-2` | Marketing, Content | no |
| 82 | 2017-01-05 | 20 Tips for Kickstarting Your Content Marketing (Part 1) | `nine-tips-for-creating-irresistible-content` | Marketing, Content | yes |
| 83 | 2017-01-05 | Combining Aging and Innovation is Great but Elder Input is Key | `combining-aging-and-innovation-is-great-but-elder-input-is-key` | Technology, Innovation | yes |
| 84 | 2016-12-30 | An Unprepared Housing Market and the Longevity Economy | `an-unprepared-housing-market-and-the-longevity-economy` | Longevity Economy | yes |
| 85 | 2016-09-29 | Furnishings Combine Innovation and Person-Centered Design | `innovation-and-design-meet-to-create-person-centered-furnishings` | Technology, Innovation, Design | yes |
| 86 | 2016-09-22 | Aging Population, Shrinking Economy? | `aging-population-shrinking-economy` | Senior Care, B2B, Strategy | yes |
| 87 | 2016-09-21 | Webinar Unveils Innovations in Senior Care | `webinar-unveils-innovations-in-senior-care` | Senior Care, Technology, Innovation | yes |
| 88 | 2016-09-13 | QA President Leads Two Sessions at SMASH and SHINE | `qa-president-leads-two-sessions-at-smash-and-shine` | Senior Care, B2B, Strategy | yes |
| 89 | 2016-09-07 | Technology & Staff Training: Taking It to the Next Level | `technology-staff-training-taking-it-to-the-next-level` | Technology | yes |
| 90 | 2016-08-24 | Medicaid May Strike a Sour Note for Unprepared Providers | `medicaid-may-strike-a-sour-note-for-unprepared-providers` | Senior Care, B2B, Strategy | yes |
| 91 | 2016-08-16 | Five-Star Calculations Demystified | `five-star-calculations-demystified` | Senior Care, B2B, Strategy | yes |
| 92 | 2016-08-11 | Becky Cook Joins Quantum Age Collaborative Team | `becky-cook-joins-quantum-age-collaborative-team` | Senior Care, B2B, Strategy | yes |
| 93 | 2016-08-05 | Grim Outlook for Medicare Funding Means SNFs Should Prepare Now | `grim-outlook-for-medicare-funding-means-snfs-should-prepare-now` | SNF | yes |
| 94 | 2016-07-29 | QA Team to Manage eHDS/Ability User Conference | `ability-user-conference` | Senior Care, B2B, Strategy | no |
| 95 | 2016-07-29 | QA President Moderates at LTC 100 | `qa-president-moderates-at-ltc-100` | Senior Care, B2B, Strategy | no |
| 96 | 2016-07-28 | QA President Shares Marketing Expertise At ACHCA Convocation | `qa-president-shares-marketing-expertise-at-achca-convocation` | Marketing | no |
| 97 | 2016-07-27 | Rise in Senior Spending Fuels Longevity Economy | `rise-in-senior-spending-fuels-longevity-economy` | Longevity Economy | yes |
| 98 | 2016-07-11 | Bundled Payments & Post-Acute Care | `the-case-for-bundled-payments` | Senior Care, B2B, Strategy | yes |
| 99 | 2016-06-23 | EHR Implementation Made Easier | `ehr-implementation-made-easier` | Senior Care, B2B, Strategy | yes |
| 100 | 2016-06-08 | Unprepared, Uniformed, and Reluctant to Leave Home | `americans-unprepared-for-long-term-care` | Senior Care, B2B, Strategy | yes |
| 101 | 2016-04-20 | Harnessing Longevity For Senior Care | `harnessing-longevity-for-senior-care` | Senior Care, Longevity Economy | no |
| 102 | 2016-01-25 | Opportunity is Knocking at the Senior Living Door | `opportunity-is-knocking-at-the-senior-living-door` | Senior Care | yes |
| 103 | 2016-01-11 | Urban Density, Innovation, and the Future of Senior Housing | `urban-density-innovation-and-the-future-of-senior-housing` | Technology, Innovation | yes |
| 104 | 2016-01-08 | Meg LaPorte Joins Quantum Age Collaborative | `meg-laporte-joins-quantum-age-collaborative` | Senior Care, B2B, Strategy | no |
| 105 | 2015-12-15 | Hospitals Are Out (But You Already Knew That) | `hospitals-are-out-but-you-already-knew-that` | Senior Care, B2B, Strategy | yes |
| 106 | 2015-07-08 | Helping Clients of Dementia Care Specialists Optimize Marketing | `helping-clients-of-dementia-care-specialists-optimize-marketing` | Marketing | yes |
| 107 | 2015-07-08 | Andrews Moderates Connect 2015 Panel of National Experts | `andrews-moderates-connect-2015-panel-of-national-experts` | Senior Care, B2B, Strategy | yes |
| 108 | 2015-07-08 | Money, Innovation, Differentiation | `money-innovation-differentiation` | Technology, Innovation | yes |
| 109 | 2015-05-01 | What makes a great design...great? | `what-makes-a-great-design...great` | Design | no |
| 110 | 2015-04-17 | CC Andrews Emcees 2015 ACHCA Awards in San Antonio | `cc-andrews-emcees-2015-achca-awards-in-san-antonio` | Senior Care, B2B, Strategy | no |
| 111 | 2014-02-05 | The Rapidly-Evolving Landscape of Post-Acute Care | `the-rapidly-evolving-landscape-of-post-acute-care` | Senior Care, B2B, Strategy | no |
| 112 | 2013-12-06 | Connecting, creating, and collaborating for excellence in healthcare | `connecting-creating-and-collaborating-for-excellence-in-healthcare` | Senior Care, B2B, Strategy | yes |
| 113 | 2013-11-25 | Do solutions escape vs. get launched? | `do-solutions-escape-vs-get-launched` | Senior Care, B2B, Strategy | yes |
| 114 | 2013-11-25 | Quantum Age Collaborative and Redilearning quoted in McKnights | `quantum-age-collaborative-and-client-in-the-news` | Senior Care, B2B, Strategy | yes |
| 115 | 2013-11-22 | Quantum Age Collaborative Achieves HubSpot Partner Certification | `quantum-age-collaborative-achieves-hubspot-partner-certification-` | Senior Care, B2B, Strategy | no |
