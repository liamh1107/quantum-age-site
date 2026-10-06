export const site = {
  name: "Quantum Age",
  legalName: "Quantum Age Collaborative",
  tagline: "Elevate strategy. Accelerate growth.",
  descriptor: "Senior Care Marketing & Strategy Experts",
  positioning:
    "The only marketing firm in senior care steeped in both consumer and business-to-business.",
  credibility:
    "Decades of health/senior care insight and marketing expertise make Quantum Age an agile and responsive ally – an extension of your team, assuring rightsized support for faster results.",
  liveUrl: "https://quantum-age.com",
  copyrightYear: 2026,
  prototypeUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:4317",
} as const;

export const contact = {
  phoneDisplay: "440.638.6990",
  phoneHref: "tel:+14406386990",
  email: "askQA@quantum-age.com",
  emailHref: "mailto:askQA@quantum-age.com",
  addressLines: ["PO Box 360727", "Cleveland, OH 44136"],
  reach: "Serving clients internationally",
} as const;

export type NavItem = { label: string; href: string };

export const primaryNav: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Approach", href: "/approach" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "References", href: "/references" },
  { label: "Insights", href: "/insights" },
];

export const companyNav: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Approach", href: "/approach" },
  { label: "References", href: "/references" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Prototype notes", href: "/prototype-notes" },
];
