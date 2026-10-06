import Link from "next/link";
import Image from "next/image";
import { companyNav, contact, legalNav, site } from "@/content/site";
import { solutions } from "@/content/solutions";
import { getFeaturedArticles } from "@/lib/insights";

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="eyebrow mb-4 font-sans text-muted-foreground">{children}</h2>;
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="inline-flex min-h-10 items-center py-1 text-ink hover:text-plum hover:underline">
        {children}
      </Link>
    </li>
  );
}

export function SiteFooter() {
  const featured = getFeaturedArticles();
  return (
    <footer className="border-t border-stone bg-[#efebe4]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Site footer
      </h2>
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-12 lg:col-span-4">
          <Image
            src="/brand/quantum-age-logo.svg"
            alt="Quantum Age Collaborative"
            width={216}
            height={55}
            unoptimized
            className="h-12 w-auto"
          />
          <p className="mt-5 max-w-sm text-[0.9375rem] text-muted-foreground">{site.positioning}</p>
        </div>
        <div className="md:col-span-4 lg:col-span-2">
          <FooterHeading>Company</FooterHeading>
          <ul>
            {companyNav.map((i) => (
              <FooterLink key={i.href} href={i.href}>
                {i.label}
              </FooterLink>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4 lg:col-span-3">
          <FooterHeading>Solutions</FooterHeading>
          <ul>
            {solutions.map((s) => (
              <FooterLink key={s.id} href={`/solutions#${s.id}`}>
                {s.name}
              </FooterLink>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4 lg:col-span-3">
          <FooterHeading>Contact</FooterHeading>
          <ul className="text-ink">
            <li>
              <a href={contact.phoneHref} className="inline-flex min-h-10 items-center py-1 hover:text-plum hover:underline">
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={contact.emailHref} className="inline-flex min-h-10 items-center py-1 hover:text-plum hover:underline">
                {contact.email}
              </a>
            </li>
            <li className="pt-2 text-[0.9375rem] text-muted-foreground">
              <address className="not-italic">
                {contact.addressLines.map((l) => (
                  <span key={l} className="block">
                    {l}
                  </span>
                ))}
              </address>
              <span className="mt-2 block">{contact.reach}</span>
            </li>
          </ul>
          <div className="mt-8">
            <FooterHeading>Latest insights</FooterHeading>
            <ul className="space-y-2 text-[0.9375rem]">
              {featured.map((a) => (
                <li key={a.slug}>
                  <Link href={`/insights/${a.slug}`} className="text-ink hover:text-plum hover:underline">
                    {a.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/insights" className="font-semibold text-plum hover:underline">
                  All insights
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-stone">
        <div className="container-page flex flex-col gap-3 py-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>
            © {site.copyrightYear} {site.legalName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            {legalNav.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="inline-flex min-h-10 items-center hover:text-ink hover:underline">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
