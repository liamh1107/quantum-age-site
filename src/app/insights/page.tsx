import type { Metadata } from "next";
import { CtaBand, PageHero } from "@/components/site/blocks";
import { ArticleFeature } from "@/components/site/article-item";
import { InsightsBrowser } from "@/components/site/insights-browser";
import { getArchiveRange, getArticleSummaries, getFeaturedArticles, getTagCounts } from "@/lib/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Market intelligence, strategic playbooks, and proven tactics for the longevity economy, from the Quantum Age team.",
};

export default function InsightsPage() {
  const featured = getFeaturedArticles();
  const all = getArticleSummaries().sort((a, b) => b.date.localeCompare(a.date));
  const tags = getTagCounts();
  const range = getArchiveRange();

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Insights that drive growth"
        lead={
          <p>
            Market intelligence, strategic playbooks, and proven tactics for the longevity economy. {range.count}{" "}
            articles from {range.first} to {range.last}.
          </p>
        }
      />

      <section className="section-sm" aria-labelledby="featured-heading">
        <div className="container-page">
          <h2 id="featured-heading" className="eyebrow font-sans text-muted-foreground">
            Featured
          </h2>
          <div className="mt-6 grid gap-10 md:grid-cols-3">
            {featured.map((a, i) => (
              <ArticleFeature key={a.slug} article={a} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-[var(--section)]" aria-labelledby="archive-heading">
        <div className="container-page">
          <h2 id="archive-heading" className="text-h2 mb-8">
            The archive
          </h2>
          <InsightsBrowser articles={all} tags={tags} />
        </div>
      </section>

      <CtaBand
        title="Want to talk through an idea from the archive?"
        body="Ready to accelerate your growth in the longevity economy? We're here to help."
      />
    </>
  );
}
