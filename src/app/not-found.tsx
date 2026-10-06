import Link from "next/link";
import { Rings } from "@/components/brand/rings";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const links = [
    { href: "/solutions", label: "Solutions" },
    { href: "/insights", label: "Insights" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <section className="section" aria-labelledby="nf-title">
      <div className="container-page grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow text-plum">Page not found</p>
          <h1 id="nf-title" className="text-h1 mt-5 max-w-[16ch]">
            We couldn&rsquo;t find that page.
          </h1>
          <p className="text-lead mt-6 max-w-[48ch] text-muted-foreground">
            The link may be out of date, or the page may have moved. These are good places to pick up again.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            <li>
              <Button asChild size="lg">
                <Link href="/">Go to the homepage</Link>
              </Button>
            </li>
            {links.map((l) => (
              <li key={l.href}>
                <Button asChild size="lg" variant="outline">
                  <Link href={l.href}>{l.label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto hidden w-full max-w-[320px] lg:col-span-4 lg:col-start-9 lg:block">
          <Rings className="w-full" />
        </div>
      </div>
    </section>
  );
}
