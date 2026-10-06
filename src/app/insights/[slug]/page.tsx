import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { CtaBand, TextLink } from "@/components/site/blocks";
import { ArticleFeature } from "@/components/site/article-item";
import { ReadingProgress } from "@/components/motion/scroll-linked";
import { formatDate, getAllArticles, getArticle, getRelatedArticles } from "@/lib/insights";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      type: "article",
      title: article.title,
      description: article.summary,
      publishedTime: article.date,
      authors: [article.author],
      images: article.hero ? [{ url: article.hero.src, width: article.hero.width, height: article.hero.height }] : undefined,
    },
  };
}

export default async function ArticlePage({ params }: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug, 3);

  return (
    <>
      <article aria-labelledby="article-title">
        <header className="border-b border-stone">
          <div className="container-page pt-10 pb-12 md:pt-14 md:pb-16">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href="/insights" className="inline-flex min-h-10 items-center hover:underline">
                      Insights
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem className="max-w-[60vw] truncate">
                  <BreadcrumbPage className="truncate">{article.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="mt-6 max-w-[52rem]">
              <h1 id="article-title" className="text-h1">
                {article.title}
              </h1>
              <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[0.9375rem]">
                <div>
                  <dt className="eyebrow text-muted-foreground">By</dt>
                  <dd className="mt-1 font-medium text-ink">{article.author}</dd>
                </div>
                <div>
                  <dt className="eyebrow text-muted-foreground">Published</dt>
                  <dd className="mt-1 font-medium text-ink">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </dd>
                </div>
                {article.readMinutes && (
                  <div>
                    <dt className="eyebrow text-muted-foreground">Reading time</dt>
                    <dd className="mt-1 font-medium text-ink">{article.readMinutes} min</dd>
                  </div>
                )}
                {article.tags.length > 0 && (
                  <div>
                    <dt className="eyebrow text-muted-foreground">Topics</dt>
                    <dd className="mt-1 font-medium text-ink">{article.tags.join(", ")}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </header>

        <div className="container-page grid gap-12 py-12 md:py-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {article.hero && (
              <Image
                src={article.hero.src}
                alt={article.hero.alt === article.title ? "" : article.hero.alt}
                width={article.hero.width}
                height={article.hero.height}
                sizes="(min-width: 1024px) 760px, 100vw"
                fetchPriority="high"
                loading="eager"
                className="mb-12 h-auto w-full rounded-sm bg-stone"
              />
            )}
            <div id="article-body" className="prose-article" dangerouslySetInnerHTML={{ __html: article.body }} />
            <ReadingProgress targetId="article-body" />
          </div>
          <aside className="lg:col-span-3 lg:col-start-10" aria-label="About this article">
            <div className="border-t-4 border-green pt-5 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
              <p className="font-serif text-xl leading-snug text-ink">Working on something similar?</p>
              <p className="mt-2 text-[0.9375rem] text-muted-foreground">
                We help healthcare organizations focused on growth achieve their goals.
              </p>
              <TextLink href="/contact" className="mt-2">
                Start a conversation
              </TextLink>
              <div className="mt-6 border-t border-stone pt-4">
                <TextLink href="/insights">All insights</TextLink>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {related.length > 0 && (
        <section className="section border-t border-stone bg-[#efebe4]" aria-labelledby="related-heading">
          <div className="container-page">
            <h2 id="related-heading" className="text-h2">
              Related reading
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-3">
              {related.map((a) => (
                <ArticleFeature key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
