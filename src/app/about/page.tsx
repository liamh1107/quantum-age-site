import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CtaBand, Notice, PageHero, SectionHeading } from "@/components/site/blocks";
import { Portrait } from "@/components/site/portrait";
import { about, benefits } from "@/content/company";
import { site } from "@/content/site";
import { people } from "@/content/people";

export const metadata: Metadata = {
  title: "About",
  description: about.heroLead,
};

export default function AboutPage() {
  const preview = people.slice(0, 4);
  return (
    <>
      <PageHero eyebrow="About Quantum Age Collaborative" title={about.heroWords} lead={<p>{about.heroLead}</p>} />

      <section className="section" aria-labelledby="who-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="who-heading" eyebrow="Who we are" title="Leading experts, mobilized around your goals" className="lg:col-span-5" />
          <div className="space-y-5 lg:col-span-7">
            {about.whoWeAre.map((p, i) => (
              <p key={p} className={i === 0 ? "text-lead text-ink" : "max-w-[62ch] text-muted-foreground"}>
                {p}
              </p>
            ))}
            <p className="max-w-[62ch] border-l-4 border-green pl-5 font-serif text-xl leading-snug text-ink">{site.positioning}</p>
          </div>
        </div>
      </section>

      <section className="section border-t border-stone bg-[#efebe4]" aria-labelledby="specialist-heading">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <SectionHeading
            id="specialist-heading"
            eyebrow="Our focus"
            title="Specialists in healthcare and aging services"
            lead={about.specialism}
            className="lg:col-span-5"
          />
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7">
            <div>
              <h3 className="eyebrow font-sans text-muted-foreground">Who we serve</h3>
              <ul className="mt-4 border-t border-ink/15">
                {about.focus.map((f) => (
                  <li key={f} className="border-b border-ink/15 py-3.5 font-serif text-lg text-ink">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="eyebrow font-sans text-muted-foreground">How we work</h3>
              <ul className="mt-4 border-t border-ink/15">
                {about.approach.map((f) => (
                  <li key={f} className="border-b border-ink/15 py-3.5 font-serif text-lg text-ink">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-heading">
        <div className="container-page">
          <SectionHeading id="why-heading" eyebrow="Why collaborate with us" title="Expertise designed for healthcare organizations" />
          <dl className="mt-12 border-t border-stone">
            {benefits.map((b) => (
              <div key={b.title} className="reveal grid gap-2 border-b border-stone py-7 md:grid-cols-12 md:gap-8">
                <dt className="text-h3 md:col-span-4">{b.title}</dt>
                <dd className="text-lead text-muted-foreground md:col-span-8">{b.about}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section border-t border-stone" aria-labelledby="experience-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeading id="experience-heading" eyebrow="Experience" title="Decades in healthcare, senior living and marketing" lead={about.experience} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/team">Meet our team</Link>
              </Button>
            </div>
            <Notice tone="info" title="Prototype note: statistics held for confirmation" className="mt-10 max-w-[56ch]">
              The current About and References pages show different headline figures (for example 30+ vs 20+ years).
              They are not shown here until Quantum Age confirms them.{" "}
              <Link href="/prototype-notes#held-content" className="font-semibold underline">
                See prototype notes
              </Link>
              .
            </Notice>
          </div>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-8 lg:col-span-5 lg:col-start-8">
            {preview.map((p) => (
              <li key={p.slug}>
                <Portrait src={p.image} name={p.name} sizes="(min-width: 1024px) 18vw, 40vw" />
                <p className="mt-3 text-center font-semibold text-ink">{p.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
