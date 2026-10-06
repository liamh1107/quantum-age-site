import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading, TextLink } from "@/components/site/blocks";
import { approach, formula } from "@/content/company";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Approach",
  description:
    "How Quantum Age works with clients: a collaborative approach and a three-level framework that meets you where you are.",
};

export default function ApproachPage() {
  const { definition } = approach;
  return (
    <>
      <PageHero eyebrow="Approach" title={approach.heroLead} lead={<p>{approach.partnership[1]}</p>} />

      {/* Definition */}
      <section className="section-sm" aria-labelledby="definition-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <h2 id="definition-heading" className="sr-only">
            What collaborative means to us
          </h2>
          <div className="reveal border-l-4 border-green pl-6 md:pl-10 lg:col-span-9 lg:col-start-2">
            <p className="font-serif text-[clamp(2.5rem,1.8rem+3vw,4.5rem)] leading-none text-ink">{definition.word}</p>
            <p className="mt-4 text-muted-foreground">
              <span className="font-mono text-[0.95rem]">[ {definition.pronunciation} ]</span>
              <span className="mx-3" aria-hidden="true">
                ·
              </span>
              <em>{definition.partOfSpeech}</em>
            </p>
            <blockquote className="mt-6 max-w-[40ch] font-serif text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-snug text-ink">
              <p>“{definition.meaning}”</p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Formula as an equation */}
      <section className="section-sm on-dark bg-plum-900 text-white" aria-labelledby="formula-heading">
        <div className="container-page">
          <SectionHeading id="formula-heading" eyebrow={formula.title} title={formula.subtitle} tone="dark" />
          <ol className="mt-12 grid gap-px overflow-hidden bg-white/15 sm:grid-cols-2 lg:grid-cols-5">
            {[...formula.parts, formula.result].map((p, i) => {
              const isResult = i === formula.parts.length;
              return (
                <li key={p.term} className={cn("relative bg-plum-900 p-6 lg:p-7", isResult && "bg-green text-ink")}>
                  <div className="reveal" style={{ "--i": i, "--step": "8%" } as React.CSSProperties}>
                    <span className={cn("block font-serif text-3xl", isResult ? "text-ink" : "text-white")}>
                      <span className={cn("mr-2", isResult ? "text-ink" : "text-green")} aria-hidden="true">
                        {i === 0 ? "" : isResult ? "=" : "+"}
                      </span>
                      {p.term}
                    </span>
                    <span className={cn("mt-2 block", isResult ? "font-semibold text-ink" : "text-white/75")}>{p.detail}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Framework */}
      <section className="section" aria-labelledby="framework-heading">
        <div className="container-page">
          <SectionHeading id="framework-heading" eyebrow="Engagement model" title={approach.frameworkTitle} lead={approach.frameworkLead} />
          <ol className="reveal-group mt-14 grid gap-6 lg:grid-cols-3 lg:items-end lg:gap-8">
            {approach.levels.map((l, i) => (
              <li
                key={l.number}
                style={{ "--i": i, "--rise": "56px", "--step": "14%" } as React.CSSProperties}
                className={cn(
                  "reveal flex flex-col border-t-4 bg-surface p-7 shadow-[0_1px_0_var(--stone)] md:p-8",
                  i === 0 && "border-stone lg:min-h-[19rem]",
                  i === 1 && "border-plum lg:min-h-[23rem]",
                  i === 2 && "border-green lg:min-h-[27rem]"
                )}
              >
                <span className="font-serif text-5xl text-plum" aria-hidden="true">
                  {l.number}
                </span>
                <h3 className="text-h3 mt-6">
                  <span className="sr-only">Level {l.number}: </span>
                  {l.title}
                </h3>
                <p className="mt-3 font-semibold text-ink">{l.summary}</p>
                <ul className="mt-4 space-y-2 text-muted-foreground">
                  {l.points.map((pt) => (
                    <li key={pt} className="flex gap-3">
                      <span className="mt-[0.7em] h-0.5 w-3 shrink-0 bg-green" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Partnership */}
      <section className="section border-t border-stone bg-[#efebe4]" aria-labelledby="partnership-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <SectionHeading id="partnership-heading" title="A partnership built on your needs" className="lg:col-span-5" />
          <div className="space-y-5 lg:col-span-7">
            {approach.partnership.map((p) => (
              <p key={p} className="text-lead text-ink/85">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-x-8">
              <TextLink href="/solutions">Explore solutions</TextLink>
              <TextLink href="/team">Meet the team</TextLink>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
