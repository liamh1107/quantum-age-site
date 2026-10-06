import { Fragment } from "react";
import { Notice, PageHero, TextLink } from "@/components/site/blocks";
import type { LegalBlock } from "@/content/legal";
import { contact } from "@/content/site";

function withEmailLink(text: string) {
  const parts = text.split(contact.email);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a href={contact.emailHref} className="font-semibold text-plum underline">
          {contact.email}
        </a>
      )}
    </Fragment>
  ));
}

export function LegalPage({ title, blocks, sourcePath }: { title: string; blocks: LegalBlock[]; sourcePath: string }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} />
      <section className="section-sm">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="max-w-[68ch] lg:col-span-8">
            {blocks.map((b, i) => (
              <div key={i} className={i > 0 ? "mt-10" : undefined}>
                {b.heading && <h2 className="text-h3 mb-3">{b.heading}</h2>}
                {b.paragraphs.map((p) => (
                  <p key={p} className="text-lg leading-relaxed text-ink/90">
                    {withEmailLink(p)}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <aside className="lg:col-span-4">
            <Notice tone="info" title="Reproduced from the current website">
              This text is copied word for word from quantum-age.com{sourcePath} as published on 6 October 2026. The
              prototype does not change or extend it, and it has not been reviewed by counsel.
            </Notice>
            <TextLink href="/prototype-notes#questions" className="mt-4">
              Related stakeholder questions
            </TextLink>
          </aside>
        </div>
      </section>
    </>
  );
}
