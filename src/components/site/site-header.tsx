import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "@/components/site/logo";
import { NavLinks, NavLinksList } from "@/components/site/nav-links";
import { MobileNav } from "@/components/site/mobile-nav";
import { Button } from "@/components/ui/button";

export function PrototypeBanner() {
  return (
    <div className="bg-notice-bg text-notice">
      <p className="container-page flex flex-wrap items-center justify-center gap-x-3 gap-y-1 py-2 text-center text-sm">
        <span>
          <strong className="font-semibold">Redesign prototype</strong> for review. This is not the live Quantum Age
          website.
        </span>
        <Link href="/prototype-notes" className="link-underline font-semibold">
          About this prototype
        </Link>
      </p>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone bg-paper">
      <div className="container-page flex h-[var(--header-h)] items-center justify-between gap-6">
        <Logo priority />
        <nav aria-label="Primary" className="hidden lg:block">
          <Suspense fallback={<NavLinksList pathname={null} />}>
            <NavLinks />
          </Suspense>
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild className="hidden lg:inline-flex">
            <Link href="/contact">Start a conversation</Link>
          </Button>
          <Suspense fallback={null}>
            <MobileNav />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
