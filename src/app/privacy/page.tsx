import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Quantum Age collects and uses information shared through this site.",
};

export default function PrivacyPage() {
  return <LegalPage title={privacy.title} blocks={privacy.blocks} sourcePath="/privacy" />;
}
