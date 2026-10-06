import type { Metadata } from "next";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Notice, PageHero } from "@/components/site/blocks";
import { ContactForm } from "@/components/site/contact-form";
import { contact } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Quantum Age: 440.638.6990, askQA@quantum-age.com. Serving clients internationally.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's collaborate"
        lead={
          <p>
            Helping you thrive in the longevity economy like never before. Ready to accelerate your growth? We&rsquo;re
            here to help.
          </p>
        }
      />

      <section className="section-sm" aria-label="Ways to reach Quantum Age">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="text-h3">Talk to us directly</h2>
            <dl className="mt-6 border-t border-stone">
              <div className="flex gap-4 border-b border-stone py-5">
                <PhoneIcon className="mt-1 size-5 shrink-0 text-plum" aria-hidden="true" />
                <div>
                  <dt className="eyebrow text-muted-foreground">Phone</dt>
                  <dd className="mt-1">
                    <a href={contact.phoneHref} className="text-lg font-semibold text-ink hover:text-plum hover:underline">
                      {contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 border-b border-stone py-5">
                <MailIcon className="mt-1 size-5 shrink-0 text-plum" aria-hidden="true" />
                <div className="min-w-0">
                  <dt className="eyebrow text-muted-foreground">Email</dt>
                  <dd className="mt-1">
                    <a href={contact.emailHref} className="text-lg font-semibold [overflow-wrap:anywhere] text-ink hover:text-plum hover:underline">
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 border-b border-stone py-5">
                <MapPinIcon className="mt-1 size-5 shrink-0 text-plum" aria-hidden="true" />
                <div>
                  <dt className="eyebrow text-muted-foreground">Mailing address</dt>
                  <dd className="mt-1 text-ink">
                    <address className="not-italic">
                      {contact.addressLines.map((l) => (
                        <span key={l} className="block">
                          {l}
                        </span>
                      ))}
                    </address>
                    <span className="mt-2 block text-muted-foreground">{contact.reach}</span>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-8">
              <h2 className="text-h3">What to include</h2>
              <p className="mt-3 text-muted-foreground">
                A few lines about your organization and what you want to achieve is plenty. Expect a reply by email or
                phone, using the details you provide.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border border-stone bg-surface p-6 md:p-10">
              <h2 className="text-h2">Send us a message</h2>
              <Notice
                title="Prototype form: this demonstration does not submit information to Quantum Age."
                className="mt-6"
              >
                Validation, confirmation and error states work, but no data is stored or sent anywhere. Use the phone
                number or email address on this page to reach the company.
              </Notice>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
