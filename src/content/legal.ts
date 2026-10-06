/** Verbatim legal text from quantum-age.com/privacy and /terms (captured 2026-10-06). Not reviewed by counsel. */

export type LegalBlock = { heading?: string; paragraphs: string[] };

export const privacy: { title: string; blocks: LegalBlock[] } = {
  title: "Privacy Policy",
  blocks: [
    {
      paragraphs: [
        "Quantum Age collects only the information you choose to share with us through forms on this site — such as your name, email address, organization, phone number, and message.",
      ],
    },
    {
      heading: "How we use your information",
      paragraphs: [
        "We use your information to respond to inquiries, deliver requested materials, and send occasional updates about the longevity economy. We do not sell your personal information.",
      ],
    },
    {
      heading: "Your choices",
      paragraphs: [
        "You may unsubscribe from communications at any time, or request that we delete your information, by emailing askQA@quantum-age.com.",
      ],
    },
  ],
};

export const terms: { title: string; blocks: LegalBlock[] } = {
  title: "Terms of Use",
  blocks: [
    {
      paragraphs: [
        "By using quantum-age.com you agree to these terms. Content on this site is provided for general informational purposes and does not constitute legal, financial, or professional advice.",
      ],
    },
    {
      heading: "Intellectual property",
      paragraphs: [
        "All content, insights, and materials published here are owned by Quantum Age unless otherwise noted. You may share and reference our content with attribution, but may not republish it in full without permission.",
      ],
    },
    {
      heading: "Contact",
      paragraphs: ["Questions about these terms? Email askQA@quantum-age.com."],
    },
  ],
};
