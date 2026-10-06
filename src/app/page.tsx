import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Rings, FormulaDiagram } from "@/components/brand/rings";
import { CtaBand, SectionHeading, TextLink } from "@/components/site/blocks";
import { Converge, Parallax } from "@/components/motion/scroll-linked";
import { TestimonialQuote } from "@/components/site/testimonial";
import { Portrait } from "@/components/site/portrait";
import { ArticleFeature } from "@/components/site/article-item";
import { site } from "@/content/site";
import { about, benefits, formula } from "@/content/company";
import { solutions } from "@/content/solutions";
import { people, teamIntro } from "@/content/people";
import { testimonials } from "@/content/references";
import { getArchiveRange, getFeaturedArticles } from "@/lib/insights";

export default function HomePage() {
  const featured = getFeaturedArticles();
  const archive = getArchiveRange();
  const [lead, ...more] = testimonials;

  return (
    <>
      {/* Hero */}
      <section aria-labelledby="home-title" className="relative overflow-hidden border-b border-stone">
        <div className="container-page grid items-center gap-8 pt-12 pb-14 md:pt-20 md:pb-20 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6 text-plum">{site.descriptor}</p>
            <h1 id="home-title" className="text-display max-w-[13ch]">
              {site.tagline}
            </h1>
            <p className="text-lead mt-7 max-w-[44ch] text-ink/80">{site.positioning}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/contact">
                  Start a conversation
                  <ArrowRightIcon aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/solutions">Explore solutions</Link>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto hidden w-full max-w-[460px] sm:block lg:col-span-5">
            <Parallax speed={0.14}>
              <Rings className="w-full" />
            </Parallax>
          </div>
        </div>
        <div className="relative border-t border-stone bg-[#efebe4]">
          <div className="container-page flex flex-col gap-3 py-5 md:flex-row md:items-baseline md:gap-8">
            <h2 className="eyebrow shrink-0 font-sans text-muted-foreground">Who we work with</h2>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[0.9375rem] font-medium text-ink">
              {about.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section" aria-labelledby="who-heading">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading id="who-heading" eyebrow="Who we are" title="An agile, responsive ally — an extension of your team" />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lead text-ink">{about.whoWeAre[0]}</p>
            <p className="mt-5 max-w-[62ch] text-muted-foreground">{site.credibility}</p>
            <TextLink href="/about" className="mt-4">
              More about Quantum Age
            </TextLink>
          </div>
          <ul className="grid gap-8 border-t border-stone pt-10 sm:grid-cols-3 lg:col-span-12">
            {benefits.map((b, i) => (
              <li key={b.title} className="reveal">
                <span className="font-serif text-lg text-green-800" aria-hidden="true">
                  0{i + 1}
                </span>
                <h3 className="text-h3 mt-2">{b.title}</h3>
                <p className="mt-2 text-muted-foreground">{b.home}.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Solutions */}
      <section className="section bg-[#efebe4]" aria-labelledby="solutions-heading">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              id="solutions-heading"
              eyebrow="What we do"
              title="Six solution areas, one collaborative team"
              lead="Comprehensive marketing solutions for healthcare organizations, combined around what you need now."
              className="lg:col-span-8"
            />
            <div className="lg:col-span-4 lg:text-right">
              <TextLink href="/solutions">All solutions and capabilities</TextLink>
            </div>
          </div>
          <ol className="mt-12 grid md:grid-cols-2 md:gap-x-12">
            {solutions.map((s, i) => (
              <li key={s.id} className="border-t border-ink/15">
                <Link
                  href={`/solutions#${s.id}`}
                  className="group grid grid-cols-[2.5rem_1fr_auto] items-start gap-4 py-6 hover:bg-white/40 focus-visible:bg-white/40 sm:px-2"
                >
                  <span className="pt-1 font-serif text-lg text-plum" aria-hidden="true">
                    0{i + 1}
                  </span>
                  <span>
                    <span className="text-h3 block group-hover:text-plum">{s.name}</span>
                    <span className="mt-1 block text-muted-foreground">{s.summary}</span>
                  </span>
                  <ArrowRightIcon
                    className="mt-2 size-5 text-plum transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Collaborative formula */}
      <section className="section" aria-labelledby="formula-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <Converge className="order-2 mx-auto w-full max-w-[420px] lg:order-1 lg:col-span-5">
            <FormulaDiagram
              labels={formula.parts.map((p) => p.term) as [string, string, string, string]}
              result={formula.result.term}
              className="w-full overflow-visible"
            />
          </Converge>
          <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
            <SectionHeading id="formula-heading" eyebrow={formula.title} title={formula.subtitle} />
            <ol className="mt-8 border-b border-stone">
              {formula.parts.map((p, i) => (
                <li key={p.term} className="flex items-baseline justify-between gap-4 border-t border-stone py-3">
                  <span className="font-serif text-xl text-ink">
                    {i > 0 && (
                      <span className="mr-2 text-green-800" aria-hidden="true">
                        +
                      </span>
                    )}
                    {p.term}
                  </span>
                  <span className="text-right text-muted-foreground">{p.detail}</span>
                </li>
              ))}
              <li className="flex items-baseline justify-between gap-4 border-t-2 border-ink py-3">
                <span className="font-serif text-xl font-semibold text-plum">
                  <span className="mr-2" aria-hidden="true">
                    =
                  </span>
                  {formula.result.term}
                </span>
                <span className="text-right font-medium text-ink">{formula.result.detail}</span>
              </li>
            </ol>
            <TextLink href="/approach" className="mt-6">
              How we work with clients
            </TextLink>
          </div>
        </div>
      </section>

      {/* People */}
      <section className="section border-t border-stone" aria-labelledby="people-heading">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              id="people-heading"
              eyebrow="The team"
              title={teamIntro.lead}
              lead={about.experience}
              className="lg:col-span-8"
            />
            <div className="lg:col-span-4 lg:text-right">
              <TextLink href="/team">Meet all nine</TextLink>
            </div>
          </div>
          <ul className="mt-12 grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5 lg:grid-cols-9">
            {people.map((p) => (
              <li key={p.slug} className="text-center">
                <Link href={`/team#${p.slug}`} className="group block">
                  <Portrait src={p.image} name={p.name} decorative sizes="(min-width: 1024px) 10vw, 28vw" />
                  <span className="mt-3 block text-sm font-semibold text-ink group-hover:text-plum group-hover:underline">
                    {p.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-plum-50" aria-labelledby="clients-heading">
        <div className="container-page">
          <SectionHeading id="clients-heading" eyebrow="References" title="What our clients say" />
          <div className="mt-12 grid gap-12 lg:grid-cols-12">
            <TestimonialQuote testimonial={lead} size="lg" className="lg:col-span-7" />
            <div className="grid gap-12 lg:col-span-5">
              {more.map((t) => (
                <TestimonialQuote key={t.name} testimonial={t} />
              ))}
            </div>
          </div>
          <TextLink href="/references" className="mt-10">
            Who we work with
          </TextLink>
        </div>
      </section>

      {/* Insights */}
      <section className="section" aria-labelledby="insights-heading">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
            <SectionHeading
              id="insights-heading"
              eyebrow="Insights"
              title="Writing on senior care, aging services and B2B marketing"
              lead={`${archive.count} articles published since ${archive.first}.`}
              className="lg:col-span-8"
            />
            <div className="lg:col-span-4 lg:text-right">
              <TextLink href="/insights">Browse all insights</TextLink>
            </div>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {featured.map((a) => (
              <ArticleFeature key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to accelerate your growth?"
        body="Let's collaborate to elevate your strategy and achieve measurable results."
      />
    </>
  );
}
