import { FAQAccordion } from "./faq-accordion";
import { Footer } from "./footer";
import { SiteHeader } from "./site-header";
import { WhatsAppButton } from "./whatsapp-button";
import { siteUrl } from "../lib/site";
import React from "react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

type ArticlePageProps = {
  eyebrow: string;
  title: string;
  intro: string | React.ReactNode;
  sections: {
    title: string;
    body: (string | React.ReactNode)[];
    list?: (string | React.ReactNode)[];
  }[];
  faqs: FAQ[];
  relatedLinks?: { title: string; href: string }[];
};

export function ArticlePage({ eyebrow, title, intro, sections, faqs, relatedLinks }: ArticlePageProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: title },
    ],
  };

  return (
    <main className="min-h-screen bg-[#020912] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-[#c99a45]/25 px-5 pb-16 pt-36 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_10%,rgba(217,170,82,0.18),transparent_28%),linear-gradient(180deg,#071522_0%,#020912_78%)]" />
        <div className="relative mx-auto max-w-[1080px]">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9aa52]">
            <span className="h-px w-8 bg-[#d9aa52]" />
            {eyebrow}
          </p>
          <h1 className="mt-6 max-w-[920px] font-serif text-5xl leading-[1.02] text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-7 max-w-[780px] text-xl leading-9 text-white/78">{intro}</p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[1fr_300px]">
          <article className="rounded-[8px] border border-[#c99a45]/35 bg-[#06111d] p-7 sm:p-10">
            {sections.map((section) => (
              <section key={section.title} className="border-b border-[#c99a45]/18 py-8 first:pt-0 last:border-b-0 last:pb-0">
                <h2 className="font-serif text-3xl text-white">{section.title}</h2>
                {section.body.map((paragraph, i) => (
                  <div key={i} className="mt-5 text-lg leading-8 text-white/76">
                    {paragraph}
                  </div>
                ))}
                {section.list ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex gap-3 text-white/84">
                        <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#d6a64f] text-xs font-black text-[#06111d]">
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {faqs && faqs.length > 0 && (
              <section className="pt-10">
                <h2 className="font-serif text-3xl text-white">FAQ</h2>
                <div className="mt-6">
                  <FAQAccordion items={faqs.map((faq) => [faq.question, faq.answer] as const)} />
                </div>
              </section>
            )}

            {relatedLinks && relatedLinks.length > 0 && (
              <section className="pt-10 border-t border-[#c99a45]/18 mt-10">
                <h2 className="font-serif text-3xl text-white">Veja também</h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {relatedLinks.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-lg text-[#d9aa52] underline hover:text-white transition-colors">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          <aside className="h-fit rounded-[8px] border border-[#c99a45]/50 bg-[#06111d] p-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d9aa52]">
              Atendimento direto
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-9 text-white">
              Precisa apresentar documentos na Itália?
            </h2>
            <p className="mt-4 leading-7 text-white/72">
              Envie foto ou PDF para receber orientação sobre tradução juramentada, apostila e finalidade oficial.
            </p>
            <WhatsAppButton className="mt-6 block rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#b97825)] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#050b13]">
              Pedir orçamento
            </WhatsAppButton>
          </aside>
        </div>
      </section>
      <Footer />
    </main>
  );
}
