import { FAQAccordion } from "./faq-accordion";
import { WhatsAppButton } from "./whatsapp-button";
import { serializeJsonLd } from "../lib/seo";
import { siteUrl } from "../lib/site";
import { seoSupplements } from "../lib/seo-supplements";
import { contextualLinks, faqOverrides, officialSources } from "../lib/seo-page-extras";
import { seoLongForm } from "../lib/seo-long-form";
import { seoAppendices } from "../lib/seo-appendices";
import { seoFinalDepth } from "../lib/seo-final-depth";
import priorityBriefContent from "../lib/priority-brief-content.json";
import React from "react";
import Link from "next/link";

type FAQ = {
  question: string;
  answer: string;
};

type ContentBlock = {
  title: string;
  body: (string | React.ReactNode)[];
  list?: (string | React.ReactNode)[];
  subsubsections?: ContentBlock[];
};

type SectionBlock = ContentBlock & {
  subsections?: (ContentBlock & { subsubsections?: ContentBlock[] })[];
  table?: {
    headers: string[];
    rows: (string | React.ReactNode)[][];
  };
};

type ArticlePageProps = {
  eyebrow: string;
  title: string;
  intro: string | React.ReactNode;
  pagePath?: string;
  description?: string;
  schemaType?: "Service" | "Article" | "ProfessionalService" | "LocalBusiness";
  areaServed?: string;
  serviceType?: string;
  audienceType?: string;
  datePublished?: string;
  dateModified?: string;
  sections: SectionBlock[];
  faqs: FAQ[];
  faqTitle?: string;
  relatedLinks?: { title: string; href: string }[];
  relatedTitle?: string;
  children?: React.ReactNode;
  heroCTA?: {
    text: string;
    message: string;
    subtext?: string;
  };
  afterHero?: React.ReactNode;
};

type PriorityBriefPage = {
  intro: string[];
  sections: SectionBlock[];
  faqs: FAQ[];
  relatedLinks: { title: string; href: string }[];
};

const priorityPages = priorityBriefContent as Record<string, PriorityBriefPage>;

function renderInlineMarkup(text: string) {
  const pattern = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;
  return text.split(pattern).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return (
        <Link key={`${part}-${index}`} href={link[2]} className="text-[#d9aa52] underline hover:text-white">
          {link[1]}
        </Link>
      );
    }
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={`${part}-${index}`} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

export function ArticlePage({
  eyebrow,
  title,
  intro,
  pagePath,
  description,
  schemaType,
  areaServed = "Itália",
  serviceType = "Tradução juramentada",
  audienceType,
  datePublished = "2026-06-06",
  dateModified = "2026-06-06",
  sections,
  faqs,
  faqTitle = "FAQ",
  relatedLinks,
  relatedTitle = "Veja também",
  children,
  heroCTA,
  afterHero,
}: ArticlePageProps) {
  const pageUrl = pagePath ? `${siteUrl}${pagePath}` : undefined;
  const priorityPage = pagePath ? priorityPages[pagePath] : undefined;
  const renderedIntro = priorityPage?.intro.join(" ") ?? intro;
  const baseSections = priorityPage?.sections ??
    (pagePath && seoLongForm[pagePath]
      ? seoLongForm[pagePath]
      : pagePath && seoSupplements[pagePath]
        ? [...sections, ...seoSupplements[pagePath]]
        : sections);
  const sectionsWithAppendices = pagePath && seoAppendices[pagePath]
    ? [...baseSections, ...seoAppendices[pagePath]]
    : baseSections;
  const renderedSections = (pagePath && seoFinalDepth[pagePath]
    ? [...sectionsWithAppendices, ...seoFinalDepth[pagePath]]
    : sectionsWithAppendices) as SectionBlock[];
  const renderedFaqs = priorityPage?.faqs ??
    (pagePath && faqOverrides[pagePath] ? faqOverrides[pagePath] : faqs);
  const renderedRelatedLinks = priorityPage?.relatedLinks.length
    ? priorityPage.relatedLinks
    : relatedLinks;
  const pageContextualLinks = pagePath ? contextualLinks[pagePath] ?? [] : [];
  const pageOfficialSources = pagePath ? officialSources[pagePath] ?? [] : [];
  const isItalian = pagePath?.startsWith("/traduzione-") ?? false;
  const pageLanguage = isItalian ? "it-IT" : "pt-BR";
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: renderedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isItalian ? "Home" : "Início", item: siteUrl },
      { "@type": "ListItem", position: 2, name: title, item: pageUrl ?? siteUrl },
    ],
  };
  const pageDescription =
    description || (typeof intro === "string" ? intro : "Orientação e tradução juramentada para documentos entre Brasil e Itália.");
  const pageJsonLd =
    schemaType === "Article"
      ? {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description: pageDescription,
          image: `${siteUrl}/assets/hero-professional-wide.png`,
          datePublished,
          dateModified,
          ...(pageUrl ? { url: pageUrl, mainEntityOfPage: pageUrl } : {}),
          inLanguage: pageLanguage,
          author: { "@type": "Organization", "@id": `${siteUrl}/#service`, name: "TraducaoBrasilItalia" },
          publisher: { "@id": `${siteUrl}/#service` },
        }
      : schemaType
        ? {
            "@context": "https://schema.org",
            "@type": schemaType,
            name: title,
            description: pageDescription,
            ...(pageUrl ? { url: pageUrl } : {}),
            ...(schemaType === "LocalBusiness"
              ? {
                  "@id": `${pageUrl}#localbusiness`,
                  telephone: "+393924605784",
                  areaServed: {
                    "@type": "City",
                    name: "Roma",
                    containedIn: { "@type": "AdministrativeArea", name: "Lazio" },
                  },
                  knowsLanguage: ["pt-BR", "it-IT"],
                  parentOrganization: { "@id": `${siteUrl}/#service` },
                }
              : {
                  serviceType,
                  areaServed:
                    areaServed === "Brasil e Itália"
                      ? [
                          { "@type": "Country", name: "Italia" },
                          { "@type": "Country", name: "Brasil" },
                        ]
                      : { "@type": areaServed === "Roma" ? "City" : "Country", name: areaServed },
                  availableLanguage: ["Portuguese", "Italian"],
                  provider: { "@id": `${siteUrl}/#service` },
                  audience: {
                    "@type": "Audience",
                    audienceType:
                      audienceType ?? "Brasileiros residentes na Itália e processos oficiais Brasil-Itália",
                  },
                }),
          }
        : null;

  return (
    <main className="min-h-screen bg-[#020912] text-white">
      {renderedFaqs.length > 0 ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqJsonLd) }} />
      ) : null}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }} />
      {pageJsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }} /> : null}
      {children}
      <section className="relative overflow-hidden border-b border-[#c99a45]/25 px-5 pb-16 pt-36 sm:px-8 lg:px-12">
        <div className="relative mx-auto max-w-[1080px]">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d9aa52]">
            <span className="h-px w-8 bg-[#d9aa52]" />
            {eyebrow}
          </p>
          <h1 className="mt-6 font-serif text-5xl leading-[1.1] text-white sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-3xl text-xl leading-relaxed text-white/80">
            {typeof renderedIntro === "string" ? renderInlineMarkup(renderedIntro) : renderedIntro}
          </p>
          {heroCTA && (
            <div className="mt-10">
              <WhatsAppButton
                className="inline-block rounded-[8px] bg-[linear-gradient(135deg,#e5b960_0%,#c99a45_100%)] px-8 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#050b13] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                message={heroCTA.message}
              >
                {heroCTA.text}
              </WhatsAppButton>
              {heroCTA.subtext && (
                <p className="mt-4 text-sm font-medium tracking-wide text-white/50">
                  {heroCTA.subtext}
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {afterHero}

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1080px] gap-16 lg:grid-cols-[1fr_320px]">
          <article className="min-w-0">
            <div className="space-y-12">
              {renderedSections.map((section) => (
                <section
                  key={section.title}
                  id={section.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w-]/g, "")}
                  className="border-b border-[#c99a45]/18 py-8 first:pt-0 last:border-b-0 last:pb-0 scroll-mt-32"
                >
                  <h2 className="font-serif text-3xl text-white">{section.title}</h2>
                  {section.body.map((paragraph, i) => (
                    <div key={i} className="mt-5 text-lg leading-8 text-white/76">
                      {typeof paragraph === "string" ? renderInlineMarkup(paragraph) : paragraph}
                    </div>
                  ))}
                  {section.list ? (
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {section.list.map((item, i) => (
                        <li key={i} className="flex gap-3 text-white/84">
                          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#d6a64f] text-xs font-black text-[#06111d]">
                            <svg viewBox="0 0 20 20" aria-hidden="true" className="size-3 fill-none stroke-current stroke-[2.5]">
                              <path d="m4.5 10.5 3.2 3.2 7.8-8" />
                            </svg>
                          </span>
                          <span>{typeof item === "string" ? renderInlineMarkup(item) : item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {section.subsections?.map((subsection) => (
                    <section
                      key={subsection.title}
                      id={subsection.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w-]/g, "")}
                      className="mt-8 scroll-mt-32"
                    >
                      <h3 className="font-serif text-2xl text-white">{subsection.title}</h3>
                      {subsection.body.map((paragraph, i) => (
                        <div key={i} className="mt-4 text-lg leading-8 text-white/76">
                          {typeof paragraph === "string" ? renderInlineMarkup(paragraph) : paragraph}
                        </div>
                      ))}
                      {subsection.list ? (
                        <ul className="mt-5 space-y-3">
                          {subsection.list.map((item, i) => (
                            <li key={i} className="flex gap-3 text-white/84">
                              <span className="mt-2 block size-1.5 shrink-0 rounded-full bg-[#d9aa52]" aria-hidden="true" />
                              <span>{typeof item === "string" ? renderInlineMarkup(item) : item}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                      {(subsection as any).subsubsections?.map((subsub: ContentBlock) => (
                        <div
                          key={subsub.title}
                          id={subsub.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-").replace(/[^\w-]/g, "")}
                          className="mt-6 pl-4 border-l border-[#d9aa52]/20 scroll-mt-32"
                        >
                          <h4 className="font-serif text-xl text-[#d9aa52]">{subsub.title}</h4>
                          {subsub.body.map((paragraph, i) => (
                            <div key={i} className="mt-3 text-lg leading-8 text-white/76">
                              {typeof paragraph === "string" ? renderInlineMarkup(paragraph) : paragraph}
                            </div>
                          ))}
                          {subsub.list ? (
                            <ul className="mt-4 space-y-2">
                              {subsub.list.map((item, i) => (
                                <li key={i} className="flex gap-2 text-white/80 text-base">
                                  <span className="mt-2 block size-1 shrink-0 rounded-full bg-[#d9aa52]/60" aria-hidden="true" />
                                  <span>{typeof item === "string" ? renderInlineMarkup(item) : item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                    </section>
                  ))}
                  {section.table ? (
                    <div className="mt-8 overflow-x-auto">
                      <table className="w-full min-w-[720px] border-collapse text-left text-sm leading-6 text-white/78">
                        <thead>
                          <tr className="border-b border-[#c99a45]/30">
                            {section.table.headers.map((header) => (
                              <th key={header} className="pb-4 font-bold uppercase tracking-wider text-[#d9aa52]">
                                {header}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.table.rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-[#c99a45]/10 last:border-0">
                              {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="py-4 pr-6">
                                  {typeof cell === "string" ? renderInlineMarkup(cell) : cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            {pageContextualLinks.length > 0 ? (
              <section className="pt-10 border-t border-[#c99a45]/18 mt-16">
                <h2 className="font-serif text-3xl text-white">Links contextuais</h2>
                <ul className="mt-6 flex flex-wrap gap-4">
                  {pageContextualLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded-full border border-[#c99a45]/30 bg-[#0b1a29] px-5 py-2 text-[#d9aa52] transition hover:bg-[#d9aa52] hover:text-[#0b1a29]"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {pageOfficialSources.length > 0 ? (
              <section className="pt-10">
                <h2 className="font-serif text-3xl text-white">Fontes oficiais e consulta</h2>
                <p className="mt-4 text-white/72">
                  Consulte os portais oficiais para horários, agendamentos e atualizações de taxas:
                </p>
                <ul className="mt-5 space-y-3">
                  {pageOfficialSources.map((source) => (
                    <li key={source.href}>
                      <a
                        href={source.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-[#d9aa52] underline hover:text-white"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            {renderedFaqs.length > 0 && (
              <section className="pt-10">
                <h2 className="font-serif text-3xl text-white">{faqTitle}</h2>
                <div className="mt-6">
                  <FAQAccordion items={renderedFaqs.map((faq) => [faq.question, faq.answer] as const)} />
                </div>
              </section>
            )}

            {renderedRelatedLinks && renderedRelatedLinks.length > 0 && (
              <section className="pt-10 border-t border-[#c99a45]/18 mt-10">
                <h2 className="font-serif text-3xl text-white">{relatedTitle}</h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {renderedRelatedLinks.map((link) => (
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
              Envie uma foto pelo WhatsApp para análise imediata de legibilidade, prazo e valor. Respondemos em poucos minutos.
            </p>
            <WhatsAppButton 
              message={heroCTA?.message}
              className="mt-8 block w-full rounded-[8px] bg-[linear-gradient(135deg,#e5b960_0%,#c99a45_100%)] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#050b13]"
            >
              Pedir orçamento
            </WhatsAppButton>
          </aside>
        </div>
      </section>
    </main>
  );
}
