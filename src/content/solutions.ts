export type Solution = {
  id: string;
  legacySlug: string;
  name: string;
  summary: string;
  capabilities: string[];
};

export const solutionsIntro = {
  tagline: "Elevate strategy. Accelerate growth.",
  lead: "Comprehensive marketing solutions for healthcare organizations, tailored to your goals.",
};

/** Six services and their capabilities, verbatim from quantum-age.com/solutions. */
export const solutions: Solution[] = [
  {
    id: "strategize",
    legacySlug: "strategize-launch",
    name: "Strategize & Launch",
    summary: "Convert ideas to actions and execute faster. Generate revenue sooner.",
    capabilities: [
      "Market research and opportunity assessment",
      "Strategic planning and roadmap development",
      "Go-to-market strategy execution",
      "Launch support and optimization",
    ],
  },
  {
    id: "awareness",
    legacySlug: "build-awareness",
    name: "Build Awareness",
    summary: "Go from risky and unknown to renown and famous.",
    capabilities: [
      "Brand positioning and messaging",
      "Public relations and media outreach",
      "Content marketing campaigns",
      "Digital and traditional advertising",
    ],
  },
  {
    id: "thought-leadership",
    legacySlug: "thought-leader",
    name: "Be a Thought Leader",
    summary: "Become a respected resource and earn trust—and/or business—for life.",
    capabilities: [
      "Executive visibility programs",
      "Content development and publishing",
      "Speaking engagement coordination",
      "Industry recognition strategies",
    ],
  },
  {
    id: "perform",
    legacySlug: "perform",
    name: "Perform",
    summary: "Challenge, optimize, and energize your operations.",
    capabilities: [
      "Marketing operations audit",
      "Process optimization",
      "Team training and development",
      "Performance measurement and reporting",
    ],
  },
  {
    id: "network",
    legacySlug: "network",
    name: "Network",
    summary: "Find the right people, gather them, energize them, and motivate action.",
    capabilities: [
      "Strategic partnership development",
      "Event planning and management",
      "Community building programs",
      "Stakeholder engagement strategies",
    ],
  },
  {
    id: "generate",
    legacySlug: "generate-business",
    name: "Generate Business",
    summary: "Target the right buyers, right messages, right campaigns, at the right time.",
    capabilities: [
      "Lead generation campaigns",
      "Sales enablement tools",
      "Account-based marketing",
      "Conversion optimization",
    ],
  },
];

/**
 * Prototype grouping proposal (no new capabilities). Listed as a stakeholder
 * question in docs/content-verification.md (3.9).
 */
export const solutionGroups = [
  { label: "Plan and position", ids: ["strategize", "awareness"] },
  { label: "Earn trust and reach", ids: ["thought-leadership", "network"] },
  { label: "Perform and grow", ids: ["perform", "generate"] },
] as const;

/** Maps each solution to article tags that relate to it, for "Related reading". */
export const solutionTags: Record<string, string[]> = {
  strategize: ["Strategy", "Industry Trends"],
  awareness: ["Brand", "Reputation", "Content"],
  "thought-leadership": ["Content", "Leadership"],
  perform: ["Technology", "AI"],
  network: ["Events", "Sponsorship"],
  generate: ["ABM", "B2B"],
};
