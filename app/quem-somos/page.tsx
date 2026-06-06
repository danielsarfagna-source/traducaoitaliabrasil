import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { PageShell } from "../components/page-shell";
import { WhatsAppButton } from "../components/whatsapp-button";

export const metadata: Metadata = createPageMetadata({
  title: "Quem somos",
  description: "Serviço especializado em tradução juramentada português para italiano, tradução italiano para português, apostilamento e orientação documental.",
  path: "/quem-somos",
});

const blocks = ["Atendimento humano", "Clareza documental", "Foco em brasileiros na Itália", "Português → italiano juramentada", "Italiano → português normal", "Suporte para uso oficial"];

export default function Page() {
  return (
    <PageShell title="Quem somos" pagePath="/quem-somos" eyebrow="Institucional">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="space-y-5 rounded-[8px] border border-[#d8a84f]/32 bg-[#07111f]/76 p-8 text-lg leading-8 text-[#f8f5ee]/76">
          <p>Somos um serviço especializado em tradução juramentada português → italiano, tradução italiano → português, apostilamento e orientação documental para brasileiros que precisam utilizar documentos na Itália, no Brasil ou no exterior.</p>
          <p>Atendemos principalmente pessoas em processos de cidadania italiana, imigração, casamento, divórcio, estudo, reconhecimento de diplomas, certidões brasileiras, documentos italianos e demais situações em que a documentação precisa ser apresentada perante órgãos oficiais.</p>
          <p>Nosso objetivo é simplificar uma etapa que costuma gerar insegurança: entender qual documento precisa ser traduzido, quando é necessário apostilar, qual idioma utilizar e como preparar o material para evitar atrasos.</p>
          <p>O atendimento é feito em português, com comunicação clara e direta, para que o cliente saiba exatamente o que está contratando e qual será o próximo passo.</p>
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
