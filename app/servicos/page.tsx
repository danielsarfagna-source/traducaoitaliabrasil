import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { PageShell } from "../components/page-shell";
import { ServiceCard } from "../components/service-card";
import { serviceCards } from "../lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Serviços de tradução juramentada e apostilamento",
  description: "Atendimento para documentos brasileiros e italianos utilizados em cidadania, imigração, casamento, estudo, registros civis e procedimentos oficiais.",
  path: "/servicos",
});

export default function Page() {
  return (
    <PageShell
      title="Serviços de tradução juramentada e apostilamento"
      pagePath="/servicos"
      intro="Atendimento para documentos brasileiros e italianos utilizados em processos de cidadania, imigração, casamento, estudo, registros civis e procedimentos oficiais."
      eyebrow="Serviços"
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {serviceCards.slice(0, 7).map(([title, text]) => (
          <ServiceCard key={title} title={title} text={text} />
        ))}
      </div>
    </PageShell>
  );
}
