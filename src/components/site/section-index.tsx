"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Item = { id: string; label: string };

/** In-page index that highlights the section currently in view. Plain anchor links without JS. */
export function SectionIndex({ items, label }: { items: Item[]; label: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => Boolean(e));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label}>
      <ol className="flex gap-1 overflow-x-auto lg:flex-col lg:gap-0 lg:overflow-visible">
        {items.map((item, i) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "flex min-h-11 items-center gap-3 border-b-2 border-transparent px-3 text-[0.9375rem] whitespace-nowrap text-muted-foreground transition-colors hover:text-ink",
                  "lg:border-b-0 lg:border-l-2 lg:border-stone lg:py-2 lg:pl-4",
                  isActive && "border-green text-ink lg:border-green"
                )}
              >
                <span className="font-serif text-sm text-plum" aria-hidden="true">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
