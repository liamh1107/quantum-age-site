# Content Change & Verification Register

This register tracks every significant piece of source content: whether it was kept, where it now lives in the prototype, whether the wording changed, and how confident we are that it is accurate. Its job is to prevent silent omissions and fabrication.

**Verification statuses:** Verified from source · Partially verified · Inaccessible · Conflicting · Requires stakeholder confirmation

"Verified from source" means the content was observed on quantum-age.com on 6 October 2026. It does **not** mean Quantum Age has confirmed it is current or accurate — that confirmation is part of the stakeholder review.

Prototype source files referenced below live in `src/content/`.

---

## 1. Positioning and company description

| # | Source page | Original topic | Preserved | New destination | Wording refined | Meaning changed | Status | Notes / stakeholder questions |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1.1 | Home, Solutions | Tagline "Elevate strategy. Accelerate growth." | Yes | Home hero H1; Solutions intro | No | No | Verified from source | — |
| 1.2 | Home, footer | "The only marketing firm in senior care steeped in both consumer and business-to-business." | Yes | Home hero; footer | No | No | Requires stakeholder confirmation | An exclusivity claim ("the only"). Kept verbatim because it is the company's own positioning, but it should be confirmed as defensible. |
| 1.3 | Home | Credibility paragraph "Decades of health/senior care insight…rightsized support for faster results." (appears twice) | Yes, once | Home "How we work with you" section | No | No | Verified from source | Duplicate removed. |
| 1.4 | Meta | "Senior Care Marketing & Strategy Experts" | Yes | Site metadata description; home eyebrow | No | No | Verified from source | — |
| 1.5 | About | "Quantum Age Collaborative mobilizes leading experts to help healthcare organizations focused on growth achieve their goals." | Yes | About intro; Home "Who we are" | No | No | Verified from source | — |
| 1.6 | About | "We bring deep expertise in healthcare and aging services—understanding the channels, challenges, and changes that make this sector unique." | Yes | About intro | No | No | Verified from source | — |
| 1.7 | About | Hero words "Build. Grow. Achieve. Maximize. Influence." | Yes | About hero eyebrow | No | No | Verified from source | — |
| 1.8 | About | "Unlike agencies unfamiliar with healthcare and aging services, we bring specialized knowledge…" | Yes | About "Why healthcare experience matters" | Heading rewritten ("Healthcare Expertise That Sets Us Apart" → "Specialists in healthcare and aging services") | No | Verified from source | Body text verbatim. |
| 1.9 | About | "Our collaborative team brings together experts with 20-35+ years of experience in healthcare marketing, senior living operations, content development, technology, and strategic advisory." | Yes | About; Team intro | No | No | Partially verified | Consistent with individual team bios (15–35+ years). |
| 1.10 | Contact | "Helping you thrive in the longevity economy like never before." | Yes | Contact hero | No | No | Verified from source | — |
| 1.11 | Footer | Legal name "Quantum Age Collaborative" | Yes | Footer, metadata | No | No | Verified from source | Page titles use "Quantum Age"; both are kept. |

## 2. Benefits ("Why collaborate")

| # | Source page | Original topic | Preserved | New destination | Wording refined | Meaning changed | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2.1 | Home / About | Access Leading Experts / Best Experts — "the very best experts in healthcare without fixed costs" | Yes | Home benefits; About | Labels unified as "Access leading experts" | No | Verified from source | Two source labels for the same idea. |
| 2.2 | Home / About | Faster Results — "See results faster thanks to decades of experience" / "Thanks to decades of combined experience, we deliver results quickly." | Yes | Home benefits; About | Home text kept; About text kept | No | Verified from source | — |
| 2.3 | Home / About | Metric Driven — "Be metric driven from day one" / "We focus on measurable outcomes from day one." | Yes | Home benefits; About | Label unified as "Metric-driven" | No | Verified from source | — |
| 2.4 | About | "Our Approach" list: Decades of combined experience · Proven strategies and frameworks · Results-focused from day one · Flexible engagement models | Yes | About | No | No | Verified from source | — |

## 3. Services (Solutions)

All six services and all 24 capabilities are preserved verbatim in `src/content/solutions.ts`.

| # | Service | Summary preserved | Capabilities preserved | New destination | Wording refined | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 3.1 | Strategize & Launch | Yes | 4/4 | `/solutions#strategize` | No | Verified from source | — |
| 3.2 | Build Awareness | Yes ("Go from risky and unknown to renown and famous.") | 4/4 | `/solutions#awareness` | No | Verified from source | "renown" is used as an adjective in the source; kept verbatim. Stakeholder may prefer "renowned". |
| 3.3 | Be a Thought Leader | Yes | 4/4 | `/solutions#thought-leadership` | No | Verified from source | Footer calls it "Thought Leadership"; prototype uses the page label "Be a Thought Leader" everywhere. |
| 3.4 | Perform | Yes | 4/4 | `/solutions#perform` | No | Verified from source | — |
| 3.5 | Network | Yes | 4/4 | `/solutions#network` | No | Verified from source | — |
| 3.6 | Generate Business | Yes | 4/4 | `/solutions#generate` | No | Verified from source | — |
| 3.7 | Solution detail pages `/solutions/<slug>` | — | — | Redirect to matching anchor | — | Inaccessible | All six return 404 on the live site. **Question:** were detail pages planned, and is there content for them? |
| 3.8 | "Comprehensive marketing solutions for healthcare organizations" / "…tailored to your goals" | Yes | — | Solutions intro | Combined into one sentence | No | Verified from source | — |
| 3.9 | Service-to-service relationships (grouping into "Plan & position", "Build reputation", "Grow & perform") | — | — | Solutions page grouping | New editorial grouping | No new claims | Requires stakeholder confirmation | The grouping is a prototype IA proposal; it adds no capabilities. |

## 4. Approach

| # | Source page | Original topic | Preserved | New destination | Wording refined | Meaning changed | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 4.1 | Approach | "Helping you achieve your goals." | Yes | Approach hero | No | No | Verified from source | — |
| 4.2 | Approach | Definition of "collaborative" with pronunciation, labelled "Noun" | Yes | Approach | Part of speech shown as "adjective" in the prototype | Grammatical correction | Requires stakeholder confirmation | **Question:** approve correcting "Noun" to "adjective"? The quoted definition is unchanged. |
| 4.3 | Home, Solutions | Formula You + Team + Market + Opportunity = Success, with sub-labels | Yes | Home; Approach | No | No | Verified from source | Visualized on Home as an interactive map (four terms on an orbit around a "Success" core); labels and sub-labels are the source text, unchanged. |
| 4.4 | Approach | Level 1 "Strategize. Optimize. Collaborate." — "Define what we need." · Show results fast. · Prioritize "got to have" from "nice to have." | Yes | Approach framework | No | No | Verified from source | — |
| 4.5 | Approach | Level 2 "Make what I have work better." — "Execute more efficiently." · Execute more efficiently. · Empower staff with tools to accelerate performance. | Yes | Approach framework | Duplicate bullet "Execute more efficiently." removed (identical to summary) | No | Verified from source | — |
| 4.6 | Approach | Level 3 "Take us to a whole new level." — "Scale for exponential growth." · Optimize with powerful resources. · Scale for exponential growth. | Yes | Approach framework | Duplicate bullet removed | No | Verified from source | — |
| 4.7 | Approach | "A Partnership Built on Your Needs" two paragraphs | Yes | Approach | No | No | Verified from source | — |
| 4.8 | Approach | Level names ("Level 1/2/3") | — | — | Prototype shows them as "1, 2, 3" and adds no proprietary name | — | Verified from source | No methodology name was invented. |

## 5. People

| # | Person | Headshot | Bullets preserved | Role shown | Status | Notes / questions |
| --- | --- | --- | --- | --- | --- | --- |
| 5.1 | CC Andrews | Yes | 5/5 verbatim | "President" | Partially verified | Role stated in multiple source articles ("president and chief strategist", "President and CEO", "president"). **Question:** preferred full title? Full name "Cecily (CC) Andrews" appears in articles; prototype uses "CC Andrews" as on the Team page. |
| 5.2 | Edie Deane | Yes | 5/5 | None | Verified from source | **Role needed.** |
| 5.3 | Tanya Hartsoe | Yes | 5/5 | None | Verified from source | **Role needed.** |
| 5.4 | Wendy Bullard | Yes | 5/5 | None | Verified from source | **Role needed.** |
| 5.5 | Louis Lenzmeier | Yes | 5/5 | None | Verified from source | **Role needed.** |
| 5.6 | Joe Whitt | Yes | 4/4 | None | Verified from source | **Role needed.** |
| 5.7 | Joanne Kaldy | Yes | 5/5 | None | Verified from source | **Role needed.** "Award-winning journalist" — award not named; kept verbatim. |
| 5.8 | Jaret Andrews | Yes | 4/4 | None | Requires stakeholder confirmation | Bio says "Current student" — may be outdated. |
| 5.9 | Meg LaPorte | Yes | 4/4 | None | Verified from source | Joined per article "Meg LaPorte joins Quantum Age Collaborative". |
| 5.10 | Becky Cook | — | — | — | Requires stakeholder confirmation | Announced as joining in an article ("Becky Cook joins Quantum Age Collaborative team") but **not on the Team page**. Not added to the team grid. |
| 5.11 | "Collaborative by Nature" two paragraphs | — | Yes | — | Verified from source | Team page. |
| 5.12 | Team page subtitle "Experts in senior care marketing" / "Decades of combined experience serving the industry" | — | Yes | — | Verified from source | — |

## 6. Testimonials and references

Testimonials are reproduced **word for word** with the exact attribution shown on the source. No quotation was edited.

| # | Quote (abridged here) | Attribution | Preserved | New destination | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 6.1 | "Quantum Age brings deep expertise and strategic thinking to every engagement…" | Scott Brown, Director, The GREEN HOUSE Project | Yes, verbatim | Home; References | Requires stakeholder confirmation | Confirm permission and current title. No logo used. |
| 6.2 | "Working with Quantum Age transformed our marketing approach…" | Margaret McConnell, Chairperson, Nevada Board of Examiners for Long Term Care Administration | Yes, verbatim | Home; References | Requires stakeholder confirmation | Same. |
| 6.3 | "The team's decades of experience in healthcare marketing delivered results faster than we expected." | Rand Johnson, Marketing Director, Prime Care Technologies | Yes, verbatim | References; Home | Requires stakeholder confirmation | Same. |
| 6.4 | Client groups: Senior Living Operators / Healthcare Organizations / Industry Innovators with one-line descriptions | — | Yes | References "Who we work with" | Verified from source | Descriptions kept verbatim. |
| 6.5 | "Our team has worked with hundreds of healthcare organizations across the senior care continuum, from small startups to national providers…" | — | **Held** | Not displayed | Conflicting | Conflicts with About ("10+ Expert Collaborators") framing and is unquantified elsewhere. Shown on `/prototype-notes` for confirmation. |
| 6.6 | `/beta` testimonials: Sarah Mitchell (CEO, Heritage Senior Living), Marcus Chen (VP Growth, CareConnect Technologies), Jennifer Torres (Managing Partner, Longevity Capital Partners) | — | **Not used** | — | Requires stakeholder confirmation | Appear only on the beta page, contain specific metrics (340% lead growth, $850M AUM) and do not match the main site. They read like sample content. |
| 6.7 | Client mentions inside articles (e.g. SAIVA Healthcare as "Quantum Age client"; Caraday Healthcare; Redilearning) | — | Yes, inside articles only | Insight articles | Verified from source | Not promoted to a client list or logo wall, because permission is unverified. **Question:** may these be shown as references? |

## 7. Statistics

None of these numbers are displayed in the prototype's marketing pages. They are listed on `/prototype-notes` for confirmation.

| # | Source page | Claim | Status | Conflict |
| --- | --- | --- | --- | --- |
| 7.1 | About | 30+ Years Average Experience | Conflicting | References says 20+ Years of Experience. Team bios range from ~10 to 35+ years. |
| 7.2 | About | 10+ Expert Collaborators | Conflicting | Team page lists 9 people. |
| 7.3 | About | 100% Healthcare Focused | Conflicting | References says 100% Senior Care Focused. |
| 7.4 | References | 20+ Years of Experience | Conflicting | See 7.1. |
| 7.5 | References | 200+ Clients Served | Requires stakeholder confirmation | No other source supports this figure. |
| 7.6 | References | 100% Senior Care Focused | Conflicting | See 7.3. |
| 7.7 | `/beta` | 40% faster time-to-close, 15–25% occupancy lift, 2,844% ROI, market map figures, etc. | Requires stakeholder confirmation | Not used. |

## 8. Contact information

| # | Item | Source | Preserved | New destination | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 8.1 | Phone 440.638.6990 | Contact, footer | Yes | Contact; footer | Verified from source | `tel:+14406386990` |
| 8.2 | Email askQA@quantum-age.com | Contact, Privacy, Terms | Yes | Contact; footer; legal pages | Conflicting | **Question:** which address should the public use? Prototype uses `askQA@` (appears on three source pages). |
| 8.3 | Email info@quantum-age.com | Footer only | Shown on `/prototype-notes` only | — | Conflicting | See 8.2. |
| 8.4 | Address PO Box 360727, Cleveland, OH 44136 | Contact | Yes | Contact; footer | Verified from source | A mailing address; no office location is implied. |
| 8.5 | "Serving clients internationally" | Contact, footer | Yes | Contact; footer | Verified from source | — |
| 8.6 | Response-time expectation | — | Not shown as a promise | Contact page says "We will reply by email or phone" without a time frame | Requires stakeholder confirmation | **Question:** is there a response time Quantum Age wants to commit to? |
| 8.7 | Social profiles | Footer (`#`), `/beta` (LinkedIn, Twitter URLs) | **Not shown** | — | Requires stakeholder confirmation | Footer links are dead; beta URLs unverified as official accounts. |

## 9. Insights

| # | Item | Preserved | New destination | Wording refined | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 9.1 | 115 articles (title, date, author, read time, tags, summary, body) | Yes, all | `/insights`, `/insights/<slug>` (same slugs) | Encoding errors "””" replaced with "—" in 4 articles | Verified from source | Slugs: how-gpt4…, why-reputation-management…, seo-old-school…, content-confusion… |
| 9.2 | Article hero images | 97 of 115 | Same articles | — | Verified from source | 15 articles used the logo as a stand-in hero and 3 had broken heroes; these render with a typographic header instead. |
| 9.3 | Inline image on "6 Ways to Achieve your Business Development Goals…" and "20 Tips for Kickstarting Your Content Marketing (Part 2)" | No | — | — | Inaccessible | Hero hot-linked from `s3.amazonaws.com/cdn1.hubspot.com/StockImages/…` returns 403. |
| 9.4 | Hero on "Harnessing Longevity For Senior Care" | No | — | — | Inaccessible | Source `src="none"`. |
| 9.5 | Image alt text that was only a file name | Replaced with empty alt | — | — | Verified from source | Treated as decorative rather than inventing descriptions. **Question:** provide real descriptions for informative images (charts, diagrams). |
| 9.6 | Links to `/blog/<slug>` inside two articles | Relinked to `/insights/<slug>` | — | — | Verified from source | Same article exists at the new path. |
| 9.7 | Duplicate article "The 4 Keys to Maximizing Your Sponsorship Expenditures" (`…` and `…-1`) | Both kept | Both URLs work | — | Requires stakeholder confirmation | **Question:** retire the `-1` copy and redirect? |
| 9.8 | Listing intro "Market intelligence, strategic playbooks, and proven tactics… experts who live and breathe senior care." | Yes | `/insights` | Shortened to first sentence + second sentence kept | No | Verified from source | — |
| 9.9 | Listing categories (Marketing 24, Strategy 7, Technology 13, Industry 56, Innovation 15) | Replaced by real article tags | `/insights` filters | — | Conflicting | Counts do not match article tags; mapping is not visible. |
| 9.10 | Type filters (Articles / Reports / Case Studies) | Not rebuilt | — | — | Conflicting | All 115 items are "Article"; no reports or case studies exist. |
| 9.11 | "Featured" articles (3) | Yes | `/insights` featured; Home preview | — | Verified from source | Same three articles. |
| 9.12 | Potentially outdated articles (COVID-19 era, 2013–2019 event news) | Yes | — | — | Requires stakeholder confirmation | **Question:** archive, keep, or add an "archive" label? Prototype shows full dates on every article so age is visible. |
| 9.13 | Article claims (e.g. ABM "234% faster pipelines and 58% larger deals") | Yes, inside articles only | — | — | Verified from source | These are third-party claims within editorial content; not promoted into marketing pages. |
| 9.14 | "Quantum Age Collaborative achieves HubSpot partner certification" article | Yes, as article | — | — | Requires stakeholder confirmation | Certification not promoted to a badge; status may have lapsed. |

## 10. Legal

| # | Item | Preserved | New destination | Wording refined | Status | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| 10.1 | Privacy Policy full text | Yes, verbatim | `/privacy` | No | Verified from source | No effective date on source. Does not mention the analytics script (`/~flock.js`) or Cloudflare's `__cf_bm` cookie. **Needs legal review before launch.** |
| 10.2 | Terms of Use full text | Yes, verbatim | `/terms` | No | Verified from source | Footer label "Terms of Service" vs page title "Terms of Use" — prototype uses "Terms of Use" consistently. |
| 10.3 | Copyright line | Yes | Footer | Year rendered dynamically | No | Verified from source | — |

## 11. Assets

| # | Asset | Status | Notes |
| --- | --- | --- | --- |
| 11.1 | Logo SVG | Verified from source | Copied unmodified to `public/brand/quantum-age-logo.svg`. |
| 11.2 | Logo mark | Verified from source | Viewbox crop of the official SVG; no artwork changes. **Question:** is there an official standalone mark or favicon file? |
| 11.3 | Favicon | Inaccessible | Live `/favicon.ico` returns 404. |
| 11.4 | Team headshots | Verified from source | Resized/converted only. |
| 11.5 | Social sharing image | Requires stakeholder confirmation | Live OG image is a Lovable preview screenshot. Prototype generates a text-and-logo share image. **Question:** is there a brand-approved share image? |
| 11.6 | Photography for hero and section imagery | Inaccessible (does not exist) | No brand photography exists. The prototype does not use stock photography; the hero uses typography and the logo geometry. **Asset needed:** authentic photography of the team at work or with clients, if Quantum Age wants imagery. |
| 11.7 | Client logos | Inaccessible (do not exist on source) | No logos used. **Question:** permission to show client logos? |

## 12. Beta section

| # | Item | Status | Notes |
| --- | --- | --- | --- |
| 12.1 | `/beta` and nine subpages | Requires stakeholder confirmation | Different positioning, services, claims and testimonials. Not rebuilt. **Question:** is `/beta` a live proposal, an experiment, or something to remove? |
| 12.2 | gohuntr.com services ("AI Velocity Websites", "B2B Lead Generation") | Requires stakeholder confirmation | **Question:** is this a partnership Quantum Age wants represented? |
