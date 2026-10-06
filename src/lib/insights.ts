import data from "@/content/articles.json";

export { formatDate } from "@/lib/format";

export type ArticleImage = { src: string; width: number; height: number; alt: string };

export type Article = {
  slug: string;
  title: string;
  date: string;
  author: string;
  readMinutes: number | null;
  tags: string[];
  summary: string;
  hero: ArticleImage | null;
  sourceUrl: string;
  featured: boolean;
  body: string;
};

export type ArticleSummary = Omit<Article, "body">;

const articles = data as Article[];

export function getAllArticles(): Article[] {
  return articles;
}

export function getArticleSummaries(): ArticleSummary[] {
  return articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    date: a.date,
    author: a.author,
    readMinutes: a.readMinutes,
    tags: a.tags,
    summary: a.summary,
    hero: a.hero,
    sourceUrl: a.sourceUrl,
    featured: a.featured,
  }));
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticles(): ArticleSummary[] {
  return getArticleSummaries().filter((a) => a.featured);
}

export function getArticlesBySlugs(slugs: string[]): ArticleSummary[] {
  const all = getArticleSummaries();
  return slugs.map((s) => all.find((a) => a.slug === s)).filter((a): a is ArticleSummary => Boolean(a));
}

export function getRelatedArticles(slug: string, limit = 3): ArticleSummary[] {
  const current = getArticle(slug);
  if (!current) return [];
  return getArticleSummaries()
    .filter((a) => a.slug !== slug)
    .map((a) => ({ a, score: a.tags.filter((t) => current.tags.includes(t)).length }))
    .filter(({ score }) => score > 0)
    .sort((x, y) => y.score - x.score || y.a.date.localeCompare(x.a.date))
    .slice(0, limit)
    .map(({ a }) => a);
}

export function getArticlesByTags(tags: string[], limit = 3): ArticleSummary[] {
  return getArticleSummaries()
    .filter((a) => a.tags.some((t) => tags.includes(t)))
    .sort((x, y) => y.date.localeCompare(x.date))
    .slice(0, limit);
}

export function getTagCounts(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const a of articles) for (const t of a.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  return [...counts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
}

export function getArchiveRange() {
  const years = articles.map((a) => Number(a.date.slice(0, 4)));
  return { first: Math.min(...years), last: Math.max(...years), count: articles.length };
}
