import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { CtaBand, PageHero, SectionHeading, TextLink } from "@/components/site/blocks";
import { SectionIndex } from "@/components/site/section-index";
import { solutions, solutionTags } from "@/content/solutions";
import { approach } from "@/content/company";
import { getArticlesByTags } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Strategize & Launch, Build Awareness, Be a Thought Leader, Perform, Network and Generate Business: marketing solutions for healthcare and senior care organizations.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Comprehensive marketing solutions, tailored to your goals"
        lead={
          <p>
            Six solution areas for healthcare and senior care organizations. Flexible solutions that meet you where you
            are, from launching something new to getting more from what you already have.
          </p>
        }
      />

      <div className="container-page grid gap-10 lg:grid-cols-12 lg:gap-12">
        <aside className="sticky top-[var(--header-h)] min-w-0 z-10 -mx-[var(--gutter)] border-b border-stone bg-paper px-[var(--gutter)] lg:top-[calc(var(--header-h)+2rem)] lg:col-span-3 lg:mx-0 lg:self-start lg:border-b-0 lg:bg-transparent lg:px-0 lg:pt-16">
          <p className="eyebrow mb-3 hidden text-muted-foreground lg:block">On this page</p>
          <SectionIndex label="Solutions on this page" items={solutions.map((s) => ({ id: s.id, label: s.name }))} />
        </aside>

        <div className="min-w-0 lg:col-span-9">
          {solutions.map((s, i) => {
            const related = getArticlesByTags(solutionTags[s.id] ?? [], 2);
            return (
              <section
                key={s.id}
                id={s.id}
                aria-labelledby={`${s.id}-title`}
                className="grid gap-8 border-b border-stone py-14 last:border-b-0 md:grid-cols-9 md:py-20"
              >
                <div className="md:col-span-4">
                  <p className="font-serif text-lg text-plum" aria-hidden="true">
                    0{i + 1}
                  </p>
                  <h2 id={`${s.id}-title`} className="text-h2 mt-2">
                    {s.name}
                  </h2>
                  <p className="text-lead mt-4 text-ink/80">{s.summary}</p>
                </div>
                <div className="md:col-span-5">
                  <h3 className="eyebrow font-sans text-muted-foreground">Capabilities</h3>
                  <ul className="mt-4 border-t border-stone">
                    {s.capabilities.map((c) => (
                      <li key={c} className="flex gap-3 border-b border-stone py-3.5 text-ink">
                        <span className="mt-[0.7em] h-0.5 w-3 shrink-0 bg-green" aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/contact?interest=${s.id}`}
                    className="group mt-6 inline-flex min-h-11 items-center gap-2 font-semibold text-plum hover:text-plum-700"
                  >
                    <span className="link-underline">Talk to us about {s.name}</span>
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                  {related.length > 0 && (
                    <div className="mt-8 bg-[#efebe4] p-5">
                      <h3 className="eyebrow font-sans text-muted-foreground">Related reading</h3>
                      <ul className="mt-3 space-y-3">
                        {related.map((a) => (
                          <li key={a.slug}>
                            <Link href={`/insights/${a.slug}`} className="font-serif text-lg leading-snug text-ink hover:text-plum hover:underline">
                              {a.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </div>

      <section className="section border-t border-stone bg-[#efebe4]" aria-labelledby="start-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading
            id="start-heading"
            eyebrow="Where to start"
            title={approach.frameworkLead}
            className="lg:col-span-5"
          />
          <div className="lg:col-span-7">
            <ol className="border-t border-ink/15">
              {approach.levels.map((l) => (
                <li key={l.number} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-5">
                  <span className="font-serif text-2xl text-plum" aria-hidden="true">
                    {l.number}
                  </span>
                  <div>
                    <p className="text-h3">{l.title}</p>
                    <p className="mt-1 text-muted-foreground">{l.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
            <TextLink href="/approach" className="mt-6">
              Our three-level framework
            </TextLink>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to get started?"
        body="Let's collaborate to find the right solution for your organization."
        cta={{ label: "Let's collaborate", href: "/contact" }}
      />
    </>
  );
}
