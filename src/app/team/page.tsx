import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading, TextLink } from "@/components/site/blocks";
import { Portrait } from "@/components/site/portrait";
import { people, teamIntro } from "@/content/people";
import { about } from "@/content/company";

export const metadata: Metadata = {
  title: "Team",
  description: `${teamIntro.lead}. ${teamIntro.sub}.`,
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow={teamIntro.title}
        title={teamIntro.lead}
        lead={<p>{about.experience}</p>}
        aside={
          <nav aria-label="Jump to a team member" className="border-t border-stone pt-5 lg:mt-3">
            <p className="text-sm font-semibold text-muted-foreground">On this page</p>
            <ul className="mt-2 grid grid-cols-2 gap-x-6 sm:grid-cols-3 lg:grid-cols-1">
              {people.map((p) => (
                <li key={p.slug}>
                  <a href={`#${p.slug}`} className="flex min-h-10 items-center text-[0.9375rem] text-ink hover:text-plum hover:underline">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        }
      />

      <section className="section-sm" aria-label="Team members">
        <ul className="container-page grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((p, i) => (
            <li key={p.slug} id={p.slug}>
              <article aria-labelledby={`${p.slug}-name`} className="reveal" style={{ "--i": i % 3 } as React.CSSProperties}>
                <Portrait src={p.image} name={p.name} className="max-w-[300px]" />
                <div className="mt-6 border-t border-stone pt-5">
                  <h2 id={`${p.slug}-name`} className="text-h3">
                    {p.name}
                  </h2>
                  {p.role && <p className="mt-1 font-semibold text-plum">{p.role}</p>}
                  <ul className="mt-4 space-y-2 text-[0.98rem] text-ink/85">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-[0.7em] h-0.5 w-3 shrink-0 bg-green" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </section>

      <section className="section border-t border-stone bg-[#efebe4]" aria-labelledby="collab-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="collab-heading" eyebrow="How we work together" title="Collaborative by nature" className="lg:col-span-5" />
          <div className="space-y-5 lg:col-span-7">
            {teamIntro.collaborative.map((p) => (
              <p key={p} className="text-lead text-ink/85">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-x-8">
              <TextLink href="/approach">Our approach</TextLink>
              <TextLink href="/insights">Read our insights</TextLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Ready to work together?" body="Let's collaborate to achieve your goals." cta={{ label: "Get in touch", href: "/contact" }} />
    </>
  );
}
