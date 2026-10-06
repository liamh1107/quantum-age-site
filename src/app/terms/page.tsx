import type { Metadata } from "next";
import { LegalPage } from "@/components/site/legal-page";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for quantum-age.com.",
};

export default function TermsPage() {
  return <LegalPage title={terms.title} blocks={terms.blocks} sourcePath="/terms" />;
}
