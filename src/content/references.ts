export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
};

/** Quotations and attributions are verbatim from quantum-age.com/references. Do not edit. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Quantum Age brings deep expertise and strategic thinking to every engagement. Their collaborative approach made all the difference.",
    name: "Scott Brown",
    role: "Director",
    organization: "The GREEN HOUSE Project",
  },
  {
    quote:
      "Working with Quantum Age transformed our marketing approach. They understand senior care like no other agency.",
    name: "Margaret McConnell",
    role: "Chairperson",
    organization: "Nevada Board of Examiners for Long Term Care Administration",
  },
  {
    quote:
      "The team's decades of experience in healthcare marketing delivered results faster than we expected.",
    name: "Rand Johnson",
    role: "Marketing Director",
    organization: "Prime Care Technologies",
  },
];

export const clientGroups = [
  {
    name: "Senior Living Operators",
    description: "Leading providers trust us to elevate their brand and drive occupancy.",
  },
  {
    name: "Healthcare Organizations",
    description: "Health systems and medical groups rely on our expertise to reach their audience.",
  },
  {
    name: "Industry Innovators",
    description: "Technology companies and startups partner with us to enter the market.",
  },
];

/** Articles on the source site that describe work with named clients. */
export const clientStorySlugs = [
  "saiva-healthcare-featured-in-mcknights",
  "caradays-positive-culture-showcased-in-provider",
  "quantum-age-collaborative-and-client-in-the-news",
  "helping-clients-of-dementia-care-specialists-optimize-marketing",
];
