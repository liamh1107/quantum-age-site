import type { Metadata } from "next";
import Link from "next/link";
import { Notice, PageHero, SectionHeading } from "@/components/site/blocks";
import { demoFeatures, heldContent, openQuestions } from "@/content/prototype";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Prototype notes",
  description: "What is real, simulated, held back and still to confirm in the Quantum Age redesign prototype.",
};

const routes = [
  ["/", "Home"],
  ["/solutions", "Solutions"],
  ["/approach", "Approach"],
  ["/about", "About"],
  ["/team", "Team"],
  ["/references", "References"],
  ["/insights", "Insights (115 articles)"],
  ["/contact", "Contact (demo form)"],
  ["/privacy", "Privacy Policy"],
  ["/terms", "Terms of Use"],
] as const;

export default function PrototypeNotesPage() {
  return (
    <>
      <PageHero
        eyebrow="For reviewers"
        title="About this prototype"
        lead={
          <p>
            A redesign proposal for{" "}
            <a href={site.liveUrl} className="link-underline text-plum" target="_blank" rel="noopener noreferrer">
              quantum-age.com
            </a>
            , built from the content published on the live site on 6 October 2026. It is separate from the live
            website and does not connect to any Quantum Age system.
          </p>
        }
      />

      <section className="section-sm" aria-labelledby="principles-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="principles-heading" eyebrow="Ground rules" title="Nothing added that the company has not said" className="lg:col-span-5" />
          <ul className="space-y-4 text-lead text-ink/85 lg:col-span-7">
            <li>Every service, team member, testimonial and article comes from the current site.</li>
            <li>Testimonials are reproduced word for word with their original attribution.</li>
            <li>No statistics, client logos, awards, photography or case studies were invented.</li>
            <li>Where the live site contradicts itself, the content is held back and listed below.</li>
          </ul>
        </div>
      </section>

      <section className="section-sm border-t border-stone" aria-labelledby="demo-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="demo-heading" eyebrow="Demo only" title="What is simulated" className="lg:col-span-5" />
          <dl className="border-t border-stone lg:col-span-7">
            {demoFeatures.map((f) => (
              <div key={f.name} className="border-b border-stone py-5">
                <dt className="text-h3">{f.name}</dt>
                <dd className="mt-2 text-muted-foreground">{f.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="held-content" className="section-sm scroll-mt-24 border-t border-stone bg-[#efebe4]" aria-labelledby="held-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading
            id="held-heading"
            eyebrow="Held for confirmation"
            title="Content on the live site that is not shown"
            className="lg:col-span-5"
          />
          <dl className="border-t border-ink/15 lg:col-span-7">
            {heldContent.map((h) => (
              <div key={h.item} className="border-b border-ink/15 py-5">
                <dt className="text-h3">{h.item}</dt>
                <dd className="mt-2 text-ink/80">{h.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="questions" className="section-sm scroll-mt-24 border-t border-stone" aria-labelledby="questions-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="questions-heading" eyebrow="For Quantum Age" title="Questions we need answered" className="lg:col-span-5" />
          <ol className="list-decimal space-y-4 pl-6 text-ink marker:font-serif marker:text-plum lg:col-span-7">
            {openQuestions.map((q) => (
              <li key={q} className="pl-2">
                {q}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-sm border-t border-stone" aria-labelledby="routes-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="routes-heading" eyebrow="Tour" title="Every page in the prototype" className="lg:col-span-5" />
          <div className="lg:col-span-7">
            <ul className="grid gap-x-8 sm:grid-cols-2">
              {routes.map(([href, label]) => (
                <li key={href} className="border-b border-stone">
                  <Link href={href} className="flex min-h-12 items-center font-medium text-ink hover:text-plum hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Notice tone="info" title="Full documentation" className="mt-8">
              The project repository includes the source inventory, verification register, sitemap, design direction,
              prototype boundaries, design review and presentation guide in the <code>docs</code> folder.
            </Notice>
          </div>
        </div>
      </section>
    </>
  );
}
