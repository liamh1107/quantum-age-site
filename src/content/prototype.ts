/** Presentation-only content for /prototype-notes. Mirrors docs/prototype-boundaries.md and docs/content-verification.md. */

export const demoFeatures = [
  {
    name: "Contact form",
    detail:
      "Validates fields, shows inline errors, an error summary, a loading state, a confirmation and a simulated delivery error. It makes no network request and stores nothing.",
  },
  {
    name: "Insights search and topic filter",
    detail:
      "Fully working, but only over the 115 articles copied into the prototype. It is not connected to a CMS or search index, so new articles on the live site will not appear.",
  },
  {
    name: "Article content",
    detail:
      "Copied from the live site on 6 October 2026, with images optimized and stored locally. Editing would require a CMS in production.",
  },
  {
    name: "Analytics, cookies and tracking",
    detail: "None. The live site loads an analytics script; the prototype does not.",
  },
];

export const heldContent = [
  {
    item: "Headline statistics",
    detail:
      "About shows “30+ Years Average Experience · 10+ Expert Collaborators · 100% Healthcare Focused”. References shows “20+ Years of Experience · 200+ Clients Served · 100% Senior Care Focused”. The figures conflict, so neither set is displayed.",
  },
  {
    item: "“Hundreds of healthcare organizations”",
    detail: "References says the team has worked with hundreds of healthcare organizations. Held with the statistics above.",
  },
  {
    item: "Second email address",
    detail:
      "The live footer lists info@quantum-age.com; the contact, privacy and terms pages list askQA@quantum-age.com. The prototype uses askQA@ everywhere until Quantum Age confirms which to publish.",
  },
  {
    item: "The /beta section",
    detail:
      "Nine pages with a different positioning, different services (including gohuntr.com offerings), specific performance claims, an ROI calculator and three testimonials that appear nowhere else. Not rebuilt.",
  },
  {
    item: "Social media links",
    detail:
      "Footer icons on the live site link to “#”. The beta pages link to linkedin.com/company/quantum-age and twitter.com/quantumage, which could not be confirmed as official. No social links are shown.",
  },
];

export const openQuestions = [
  "Which email address should the public use: askQA@quantum-age.com or info@quantum-age.com?",
  "Which headline statistics, if any, are accurate and current?",
  "Do the three testimonial authors approve continued use, and are their titles current?",
  "What are the job titles for each team member? Is CC Andrews’ preferred title “President”, “President and CEO” or “President & Chief Strategist”?",
  "Should Becky Cook (announced in an article) appear on the Team page? Is Jaret Andrews’ bio (“current student”) up to date?",
  "Were individual solution pages planned? The live “Learn More” links return 404.",
  "Is the /beta section a live proposal, an experiment, or something to retire?",
  "May clients named in articles (for example SAIVA Healthcare and Caraday Healthcare) be shown as references or with logos?",
  "Is “the only marketing firm in senior care steeped in both consumer and business-to-business” a claim Quantum Age wants to keep?",
  "Approve correcting “col·lab·o·ra·tive … Noun” to “adjective” on the Approach page?",
  "Is there a response time the team wants to commit to on the Contact page?",
  "Should older articles (2013–2020, including COVID-19 era guidance) be kept, labelled as archive, or retired? Should the duplicate sponsorship article be removed?",
  "Is there official photography, a standalone logo mark, favicon or share image to use?",
  "Should the privacy policy be updated to mention analytics and cookies, and given an effective date?",
];
