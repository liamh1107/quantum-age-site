"use client";

import { useId, useMemo, useState } from "react";
import { SearchIcon, XIcon } from "lucide-react";
import type { ArticleSummary } from "@/lib/insights";
import { ArticleRow } from "@/components/site/article-item";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 12;

export function InsightsBrowser({
  articles,
  tags,
}: {
  articles: ArticleSummary[];
  tags: { tag: string; count: number }[];
}) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string | null>(null);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const searchId = useId();
  const hintId = useId();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((a) => {
      if (tag && !a.tags.includes(tag)) return false;
      if (!q) return true;
      return (
        a.title.toLowerCase().includes(q) ||
        a.summary.toLowerCase().includes(q) ||
        a.tags.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [articles, query, tag]);

  const shown = results.slice(0, visible);
  const filtered = Boolean(query.trim() || tag);

  function reset() {
    setQuery("");
    setTag(null);
    setVisible(PAGE_SIZE);
  }

  return (
    <div>
      <div className="grid gap-6 border-y border-stone py-6 lg:grid-cols-12 lg:items-start">
        <div className="min-w-0 lg:col-span-4">
          <Label htmlFor={searchId} className="text-[0.9375rem] font-semibold text-ink">
            Search insights
          </Label>
          <div className="relative mt-2">
            <SearchIcon className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              id={searchId}
              type="search"
              value={query}
              aria-describedby={hintId}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisible(PAGE_SIZE);
              }}
              className="h-11 bg-surface pl-9 text-base"
            />
          </div>
          <p id={hintId} className="mt-2 text-sm text-muted-foreground">
            Searches titles, summaries and topics.
          </p>
        </div>
        <fieldset className="min-w-0 lg:col-span-8">
          <legend className="text-[0.9375rem] font-semibold text-ink">Filter by topic</legend>
          <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1 lg:flex-wrap lg:overflow-visible">
            <TagButton active={tag === null} onClick={() => { setTag(null); setVisible(PAGE_SIZE); }}>
              All topics <span className="text-muted-foreground">({articles.length})</span>
            </TagButton>
            {tags.map((t) => (
              <TagButton
                key={t.tag}
                active={tag === t.tag}
                onClick={() => {
                  setTag(tag === t.tag ? null : t.tag);
                  setVisible(PAGE_SIZE);
                }}
              >
                {t.tag} <span className="text-muted-foreground">({t.count})</span>
              </TagButton>
            ))}
          </div>
        </fieldset>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 py-5">
        <p aria-live="polite" className="text-[0.9375rem] text-muted-foreground">
          {results.length === articles.length
            ? `Showing all ${articles.length} articles, newest first`
            : `${results.length} ${results.length === 1 ? "article" : "articles"} found${tag ? ` in ${tag}` : ""}${query.trim() ? ` for \u201C${query.trim()}\u201D` : ""}`}
        </p>
        {filtered && (
          <Button variant="ghost" size="sm" onClick={reset}>
            <XIcon aria-hidden="true" />
            Clear filters
          </Button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="border-t border-stone py-16 text-center">
          <p className="text-h3">No articles match that search.</p>
          <p className="mx-auto mt-3 max-w-[44ch] text-muted-foreground">
            Try a broader word, or browse all topics. The archive covers senior care, aging services, B2B marketing,
            technology and innovation.
          </p>
          <Button variant="outline" className="mt-6" onClick={reset}>
            Show all articles
          </Button>
        </div>
      ) : (
        <>
          <div>
            {shown.map((a) => (
              <ArticleRow key={a.slug} article={a} headingLevel="h3" />
            ))}
          </div>
          {visible < results.length && (
            <div className="border-t border-stone pt-8 text-center">
              <Button variant="outline" size="lg" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Show more articles
                <span className="text-muted-foreground">({results.length - visible} more)</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function TagButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex min-h-10 shrink-0 items-center gap-1 rounded-sm border px-3 text-sm font-medium whitespace-nowrap transition-colors",
        active ? "border-plum bg-plum text-white [&_span]:text-white/80" : "border-ink/20 bg-surface text-ink hover:border-ink"
      )}
    >
      {children}
    </button>
  );
}
