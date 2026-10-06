export type Person = {
  slug: string;
  name: string;
  /** Only set where the role is stated in source content. */
  role?: string;
  roleSource?: string;
  image: string;
  highlights: string[];
};

export const teamIntro = {
  title: "Our Team",
  lead: "Experts in senior care marketing",
  sub: "Decades of combined experience serving the industry",
  collaborative: [
    "Our team brings together diverse expertise across marketing, operations, technology, and senior care. We collaborate with each other—and with you—to deliver strategies that work.",
    "Every engagement benefits from our collective decades of experience serving senior living operators, healthcare organizations, and innovative companies in the longevity economy.",
  ],
};

/** Order and bullet text verbatim from quantum-age.com/team. */
export const people: Person[] = [
  {
    slug: "cc-andrews",
    name: "CC Andrews",
    role: "President",
    roleSource: "/insights/quantum-age-president-elected-to-advancing-excellence-board",
    image: "/team/cc-andrews.webp",
    highlights: [
      "30 years in marketing and sales",
      "20+ years in healthcare",
      "Skilled brand and reputation architect",
      "Media and communications aficionado",
      "Strategic dot connector",
    ],
  },
  {
    slug: "edie-deane",
    name: "Edie Deane",
    image: "/team/edie.webp",
    highlights: [
      "30 years in healthcare",
      "Entrepreneurial strategist",
      "Change accelerator",
      "Customer experience innovator",
      "eLearning enthusiast",
    ],
  },
  {
    slug: "tanya-hartsoe",
    name: "Tanya Hartsoe",
    image: "/team/tanya.webp",
    highlights: [
      "25+ years in marketing and management",
      "15+ years in health IT",
      "Human swiss army knife",
      "Organization enthusiast",
      "Morale booster & up-lifter",
    ],
  },
  {
    slug: "wendy-bullard",
    name: "Wendy Bullard",
    image: "/team/wendy.webp",
    highlights: [
      "15 years in Administration",
      "10 years in health & medical field",
      "Driven, disciplined, nonstop go-getter",
      "Dreams to have own HGTV show \u2018Flip the Panhandle\u2019",
      "Dog mom for life",
    ],
  },
  {
    slug: "louis-lenzmeier",
    name: "Louis Lenzmeier",
    image: "/team/louis.webp",
    highlights: [
      "Nearly 25 years in Senior Care",
      "Past leader of Marketing and Partnership teams",
      "Company connector",
      "Passionate about Technology\u2019s positive influence in resident care",
      "Provider defender",
    ],
  },
  {
    slug: "joe-whitt",
    name: "Joe Whitt",
    image: "/team/joe.webp",
    highlights: [
      "Over 35 years experience in the healthcare industry",
      "Thought leader and visionist in senior housing",
      "Driven focus on employee experience and culture",
      "Manage market strategies for start ups and rebranding",
    ],
  },
  {
    slug: "joanne-kaldy",
    name: "Joanne Kaldy",
    image: "/team/joanne.webp",
    highlights: [
      "Innovative communicator and storyteller",
      "Award-winning journalist",
      "Been called \u2018The Press Secretary of Long-Term Care\u2019",
      "Mom to the most famous dog in Pennsylvania",
      "Developer of cutting-edge, creative content for 20 years",
    ],
  },
  {
    slug: "jaret-andrews",
    name: "Jaret Andrews",
    image: "/team/jaret.webp",
    highlights: [
      "Graduate of the Ohio Media School core program",
      "Current student of The Ohio Media School Sports Emphasis program",
      "Video and audio editor",
      "Website design and editor",
    ],
  },
  {
    slug: "meg-laporte",
    name: "Meg LaPorte",
    image: "/team/meg.webp",
    highlights: [
      "25+ years not-for-profit management",
      "15 years in long-term care and senior living",
      "Communications and multimedia pro",
      "Policy wonk",
    ],
  },
];
