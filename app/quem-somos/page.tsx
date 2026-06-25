import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { PageShell } from "../components/page-shell";
import { WhatsAppButton } from "../components/whatsapp-button";

export const metadata: Metadata = createPageMetadata({
  title: "Sobre a Tradução Brasil Itália | Documentos brasileiros na Itália",
  description: "Conheça o serviço especializado em tradução de documentos brasileiros para italiano, atendimento em português e orientação sobre apostila e asseverazione.",
  path: "/quem-somos",
});

const blocks = ["Atendimento humano", "Clareza documental", "Foco em brasileiros na Itália", "Português → italiano juramentada", "Italiano → português normal", "Suporte para uso oficial"];

export default function Page() {
  return (
    <PageShell title="Sobre a Tradução Brasil Itália" pagePath="/quem-somos" eyebrow="Institucional">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-5 rounded-[8px] border border-[#d8a84f]/32 bg-[#07111f]/76 p-8 text-lg leading-8 text-[#f8f5ee]/76 text-justify">
          <p>A Tradução Brasil Itália é um serviço especializado em tradução de documentos brasileiros para uso oficial na Itália. O atendimento é feito em português, com foco em brasileiros que vivem na Itália ou precisam apresentar documentos brasileiros perante órgãos italianos.</p>
          <p>O serviço auxilia na tradução de certidões, CNH, antecedentes criminais, diplomas, procurações e outros documentos civis, além de orientar sobre apostila, asseverazione e exigências comuns dos órgãos destinatários.</p>
          <p>Também são atendidas demandas relacionadas a cidadania, residência, casamento, estudo, trabalho, reconhecimento de diplomas e outros procedimentos que envolvam documentos entre Brasil e Itália.</p>
          <p>Como cada autoridade pode aplicar requisitos próprios, a análise considera a finalidade do documento e recomenda confirmar a exigência específica antes do protocolo.</p>
          <WhatsAppButton className="inline-block rounded-[8px] bg-[#d8a84f] px-6 py-4 text-sm font-black uppercase tracking-[0.08em] text-[#020817]">
            Fale conosco pelo WhatsApp
          </WhatsAppButton>
        </article>
        <div className="grid gap-4">
          {blocks.map((block) => (
            <div key={block} className="rounded-[8px] border border-[#d8a84f]/30 bg-[#07111f]/76 p-5 font-serif text-2xl">
              <span className="mr-3 text-[#d8a84f]">✓</span>{block}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
