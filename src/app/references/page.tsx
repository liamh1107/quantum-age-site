import type { Metadata } from "next";
import { CtaBand, PageHero, SectionHeading, TextLink } from "@/components/site/blocks";
import { ArticleRow } from "@/components/site/article-item";
import { clientGroups, clientStorySlugs, testimonials } from "@/content/references";
import { getArticlesBySlugs } from "@/lib/insights";

export const metadata: Metadata = {
  title: "References",
  description: "What clients say about working with Quantum Age, and the organizations we work with.",
};

export default function ReferencesPage() {
  const stories = getArticlesBySlugs(clientStorySlugs);
  return (
    <>
      <PageHero
        eyebrow="References"
        title="Trusted by leading healthcare organizations"
        lead={<p>What clients have said about working with us, and the kinds of organizations we serve.</p>}
      />

      <section className="section bg-plum-50" aria-labelledby="quotes-heading">
        <div className="container-page">
          <SectionHeading id="quotes-heading" eyebrow="In their words" title="What our clients say" />
          <ul className="mt-12">
            {testimonials.map((t) => (
              <li key={t.name} className="reveal border-t border-ink/15 py-10">
                <figure className="grid gap-6 md:grid-cols-12 md:gap-10">
                  <figcaption className="md:col-span-4 md:pt-2">
                    <span className="block font-semibold text-ink">{t.name}</span>
                    <span className="block text-muted-foreground">{t.role}</span>
                    <span className="block text-muted-foreground">{t.organization}</span>
                  </figcaption>
                  <blockquote className="font-serif text-[clamp(1.375rem,1.15rem+0.9vw,2rem)] leading-snug text-ink md:col-span-8">
                    <p>
                      <span className="text-green-800" aria-hidden="true">
                        “
                      </span>
                      {t.quote}
                      <span className="text-green-800" aria-hidden="true">
                        ”
                      </span>
                    </p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-sm border-b border-stone" aria-labelledby="groups-heading">
        <div className="container-page">
          <h2 id="groups-heading" className="eyebrow font-sans text-muted-foreground">
            Who we work with
          </h2>
          <ul className="mt-6 grid border-t border-stone md:grid-cols-3">
            {clientGroups.map((g, i) => (
              <li
                key={g.name}
                className={`reveal border-b border-stone py-8 md:border-b-0 md:px-8 md:first:pl-0 ${i > 0 ? "md:border-l" : ""}`}
                style={{ "--i": i } as React.CSSProperties}
              >
                <h3 className="text-h3">{g.name}</h3>
                <p className="mt-3 text-muted-foreground">{g.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {stories.length > 0 && (
        <section className="section" aria-labelledby="stories-heading">
          <div className="container-page grid gap-10 lg:grid-cols-12">
            <SectionHeading
              id="stories-heading"
              eyebrow="From the archive"
              title="Client work in the news"
              lead="Articles from our insights archive that describe work with clients."
              className="lg:col-span-4"
            />
            <div className="lg:col-span-8">
              {stories.map((a) => (
                <ArticleRow key={a.slug} article={a} />
              ))}
              <div className="border-t border-stone pt-6">
                <TextLink href="/insights">Browse all insights</TextLink>
              </div>
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
