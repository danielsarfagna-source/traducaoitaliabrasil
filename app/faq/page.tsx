import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { FAQAccordion } from "../components/faq-accordion";
import { PageShell } from "../components/page-shell";
import { faqItems } from "../lib/content";
import { serializeJsonLd } from "../lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Perguntas frequentes",
  description: "Dúvidas sobre tradução juramentada português italiano, apostilamento, cidadania italiana, prazos, PIX e atendimento em toda a Itália.",
  path: "/faq",
});

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  return (
    <PageShell title="Perguntas frequentes" pagePath="/faq" eyebrow="FAQ" intro="Respostas objetivas antes de enviar seus documentos.">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} />
      <FAQAccordion items={faqItems} />
    </PageShell>
  );
}
