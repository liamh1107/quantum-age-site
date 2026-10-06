# Proposed Information Architecture

Based on the verified inventory in `source-inventory.md`. The goal is to make every piece of real content reachable in one or two steps, fix the dead ends, and avoid inventing pages the content cannot support.

## Decisions at a glance

| Decision | Why |
| --- | --- |
| **Keep** Home, Solutions, Approach, About, Team, References, Insights, Contact, Privacy, Terms | Each has distinct, verifiable source content. |
| **Promote** Team and Insights into the main navigation | They hold the most original and credible content (nine real people, 115 articles) but are footer-only today. |
| **One Solutions page, not six detail pages** | The six detail URLs are 404 on the live site and there is no extra content to fill them. Six thin pages would be padding. The old URLs redirect to working anchors. |
| **Keep About and Team separate** | Team has nine detailed profiles; folding it into About would bury it. About links prominently to Team. |
| **Do not rebuild `/beta`** | Its claims, services and testimonials conflict with the main site and are unverified. Documented on `/prototype-notes`. |
| **Add `/prototype-notes`** | Presentation-only page listing demo functionality and open questions, so reviewers can see what is real. Not linked from main nav; linked from the prototype banner and footer. |
| **No "Industries" page** | The source lists four focus areas in one short list; that does not support a page. Shown on About and Home. |
| **No search page / no newsletter** | Neither exists on the source (insight search is local to the listing). |

## Sitemap

```
/                               Home
├── /solutions                  Solutions (six services, anchored)
│     #strategize  #awareness  #thought-leadership  #perform  #network  #generate
├── /approach                   Approach
├── /about                      About
├── /team                       Team
├── /references                 References
├── /insights                   Insights listing (search + tag filter)
│     └── /insights/[slug]      115 articles (source slugs preserved)
├── /contact                    Contact (demo form)
├── /privacy                    Privacy Policy
├── /terms                      Terms of Use
├── /prototype-notes            Prototype notes (presentation only)
└── 404                         Custom not-found page

Redirects (fix live 404s)
/solutions/strategize-launch   → /solutions#strategize
/solutions/build-awareness     → /solutions#awareness
/solutions/thought-leader      → /solutions#thought-leadership
/solutions/perform             → /solutions#perform
/solutions/network             → /solutions#network
/solutions/generate-business   → /solutions#generate
/blog/:slug                    → /insights/:slug
/services                      → /solutions
```

## Navigation

**Header (desktop, ≥1024px):** Logo · Solutions · Approach · About · Team · References · Insights · **Start a conversation** (button → `/contact`). The current page is marked with `aria-current="page"` and a visible underline. No dropdowns, so nothing depends on hover.

**Header (below 1024px):** Logo · "Menu" button (labelled, with `aria-expanded`) that opens a full-height sheet containing the same links plus Contact, the phone number and email. The sheet traps focus, closes with Escape, and returns focus to the button.

**Footer:** Four columns — Company (About, Team, Approach, References), Solutions (six anchors, using the same labels as the Solutions page), Insights (link + the three featured articles), Contact (phone, email, PO Box, "Serving clients internationally"). Legal row: © Quantum Age Collaborative · Privacy Policy · Terms of Use · Prototype notes.

**Breadcrumbs:** On second-level pages only where they help orientation: article pages (Insights › Article). Top-level pages do not need them.

**Labels unified:** "Solutions" everywhere (not "Services"); "Be a Thought Leader" everywhere; "Terms of Use" everywhere; "Metric-driven" and "Access leading experts".

---

## Page specifications

### Home `/`
- **Purpose:** Explain who Quantum Age is and route visitors to the right next page.
- **Audience:** Marketing, growth and executive leaders at senior living operators, healthcare organizations, health-tech companies and wellness/longevity providers (as listed on the source).
- **Primary question:** "Is this the right partner for a healthcare or senior-care organization like mine?"
- **Sections:** (1) Hero — tagline, positioning line, two CTAs. (2) Who we are + who we serve — About statement and the four focus areas. (3) Six solutions as an indexed list linking to anchors. (4) How we work — the credibility paragraph plus the three benefits. (5) The collaborative formula (You + Team + Market + Opportunity = Success). (6) The people — team portraits linking to `/team`. (7) Client testimonials (three, verbatim). (8) Latest thinking — three featured insights. (9) Contact CTA.
- **Primary CTA:** Start a conversation → `/contact`. **Secondary:** Explore solutions → `/solutions`.
- **Source pages:** Home, About, Solutions, Team, References, Insights.
- **Functionality:** None beyond links.
- **Mobile:** Hero copy above the fold at 390×844; solutions list becomes a single column with large tap rows; testimonials stack.
- **Accessibility:** One H1; sections each start with an H2; decorative ring graphic is `aria-hidden`.

### Solutions `/solutions`
- **Purpose:** Show all six services and their capabilities in a scannable way.
- **Audience:** Visitors comparing what Quantum Age can do for a specific need.
- **Primary question:** "Can they help with what I need right now?"
- **Sections:** Intro; sticky in-page index of six services (desktop sidebar, mobile horizontal scroller); one section per service with summary and four capabilities; an explanatory note that services are often combined (using the source's collaborative approach text); CTA.
- **Primary CTA:** Talk to us about this → `/contact` (per service, preselects the service in the demo form via `?interest=`). **Secondary:** See how we work → `/approach`.
- **Source pages:** Solutions, Home, footer.
- **Functionality:** Anchors with `scroll-margin-top`; active section highlighted in the index as you scroll (progressive enhancement).
- **Mobile:** Index becomes a horizontally scrollable row of anchor links with 44px targets.
- **Accessibility:** Index is a `<nav aria-label="Solutions on this page">`; sections are `<section aria-labelledby>`.

### Approach `/approach`
- **Purpose:** Explain how engagements are shaped.
- **Primary question:** "What is it like to work with them, and where would we start?"
- **Sections:** Hero; the definition of "collaborative"; the formula visual; the three-level framework as a progression; "A partnership built on your needs"; CTA.
- **Primary CTA:** Start a conversation. **Secondary:** Explore solutions.
- **Source pages:** Approach, Home, Solutions.
- **Mobile:** The three levels stack vertically with a connecting rule.
- **Accessibility:** Formula visual has a text equivalent (a list) rather than relying on the diagram.

### About `/about`
- **Purpose:** Establish who Quantum Age is and why healthcare experience matters.
- **Primary question:** "Who is behind this firm, and do they understand our sector?"
- **Sections:** Hero (Build. Grow. Achieve. Maximize. Influence.); Who we are; Specialists in healthcare and aging services (focus list + approach list); Why collaborate (three benefits); Experience statement (20–35+ years); Team preview → `/team`; CTA.
- **Primary CTA:** Meet the team. **Secondary:** Start a conversation.
- **Source pages:** About, Home.
- **Note:** Headline statistics are withheld pending confirmation (conflicting).

### Team `/team`
- **Purpose:** Introduce the nine people, with their own words.
- **Primary question:** "Who would we actually work with?"
- **Sections:** Hero + experience statement; nine profiles (portrait, name, role where verified, bullets); "Collaborative by nature"; CTA.
- **Primary CTA:** Start a conversation. **Secondary:** Read our insights.
- **Mobile:** Two-column portraits at ≥560px, one column below; bullets remain readable at 16px.
- **Accessibility:** Each profile is an `<article>` with an H2 name; portraits have the person's name as alt text.

### References `/references`
- **Purpose:** Show the available evidence: who Quantum Age serves and what clients have said.
- **Primary question:** "Do organizations like ours trust them?"
- **Sections:** Hero; who we work with (three client groups); testimonials in full; pointer to client stories within Insights (articles that mention clients by name); CTA.
- **Primary CTA:** Start a conversation. **Secondary:** Browse insights.
- **Note:** No logos or statistics are shown (none verified).

### Insights `/insights`
- **Purpose:** Make 13 years of writing findable.
- **Primary question:** "Do they know my world? Is there something useful here?"
- **Sections:** Hero + intro; featured three; search field (labelled) and tag filter; results list with date, read time, tags; "Show more" pagination; no-results state with reset.
- **Primary CTA:** Read article. **Secondary:** Start a conversation (end of page).
- **Functionality:** Client-side search over title, summary and tags; tag filter; result count announced via `aria-live`.
- **Mobile:** Filters collapse to a horizontally scrollable tag row; list is single column.

### Insight article `/insights/[slug]`
- **Purpose:** Readable long-form article.
- **Sections:** Breadcrumb; title; metadata (author, date, read time, tags); hero image when real; body at ~68ch; source-link note in prototype notes only; related articles (by shared tag); CTA.
- **Accessibility:** `<article>`, `<time datetime>`, images keep source alt or empty alt when only a file name was available.

### Contact `/contact`
- **Purpose:** Make it easy and reassuring to get in touch.
- **Primary question:** "How do I reach them, and what happens next?"
- **Sections:** Hero; prototype notice; direct contact (phone, email, PO Box, serving internationally); demo form (Name*, Email*, Organization, Phone, Area of interest, Message*); what happens next.
- **Functionality:** Client-side validation, inline errors, error summary, success and simulated-failure states. **No network request is made.**
- **Accessibility:** Visible labels, `aria-describedby` for hints and errors, error summary receives focus on submit.

### Privacy `/privacy` and Terms `/terms`
- **Purpose:** Preserve the published legal text verbatim.
- **Sections:** Title; verbatim text; note that the text is reproduced from the live site and has not been reviewed.
- **Primary CTA:** Email askQA@quantum-age.com (as in source).

### Prototype notes `/prototype-notes`
- **Purpose:** Presentation aid: what is real, what is simulated, what needs confirmation.
- **Audience:** Quantum Age reviewers.
- **Sections:** What this is; demo-only features; held content (statistics, beta); open questions.

### 404
- Brand-consistent message, links to Home, Solutions, Insights, Contact.
