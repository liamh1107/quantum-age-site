import Link from "next/link";
import Image from "next/image";
import type { ArticleSummary } from "@/lib/insights";
import { formatDate } from "@/lib/format";
import { cn } from "@/lib/utils";

export function ArticleMeta({ article, className }: { article: ArticleSummary; className?: string }) {
  return (
    <p className={cn("flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground", className)}>
      <time dateTime={article.date}>{formatDate(article.date)}</time>
      {article.readMinutes && (
        <>
          <span aria-hidden="true">·</span>
          <span>{article.readMinutes} min read</span>
        </>
      )}
    </p>
  );
}

/** Row-style listing entry: used in lists where many items appear together. */
export function ArticleRow({ article, headingLevel = "h3" }: { article: ArticleSummary; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="group relative grid gap-4 border-t border-stone py-7 sm:grid-cols-[1fr_auto] sm:gap-8">
      <div className="min-w-0">
        <ArticleMeta article={article} />
        <Heading className="text-h3 mt-2 max-w-[40ch]">
          <Link href={`/insights/${article.slug}`} className="after:absolute after:inset-0 group-hover:text-plum">
            {article.title}
          </Link>
        </Heading>
        {article.summary && <p className="mt-2 line-clamp-2 max-w-[64ch] text-muted-foreground">{article.summary}</p>}
        {article.tags.length > 0 && (
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="sr-only">Topics: </span>
            {article.tags.join(" · ")}
          </p>
        )}
      </div>
      {article.hero && (
        <div className="relative hidden aspect-[4/3] w-44 overflow-hidden rounded-sm bg-stone sm:block">
          <Image src={article.hero.src} alt="" fill sizes="176px" className="object-cover" />
        </div>
      )}
    </article>
  );
}

/** Feature entry with image, for small curated sets (featured, related). */
export function ArticleFeature({
  article,
  headingLevel = "h3",
  priority = false,
}: {
  article: ArticleSummary;
  headingLevel?: "h2" | "h3";
  priority?: boolean;
}) {
  const Heading = headingLevel;
  return (
    <article className="group relative flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[#e9e4db]">
        {article.hero ? (
          <Image
            src={article.hero.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            fetchPriority={priority ? "high" : undefined}
          />
        ) : (
          <div className="flex h-full items-end p-5" aria-hidden="true">
            <span className="font-serif text-xl leading-tight text-plum-900/70">{article.tags[0] ?? "Insight"}</span>
          </div>
        )}
      </div>
      <ArticleMeta article={article} className="mt-4" />
      <Heading className="text-h3 mt-2">
        <Link href={`/insights/${article.slug}`} className="after:absolute after:inset-0 group-hover:text-plum">
          {article.title}
        </Link>
      </Heading>
      {article.summary && <p className="mt-2 line-clamp-3 text-muted-foreground">{article.summary}</p>}
    </article>
  );
}
