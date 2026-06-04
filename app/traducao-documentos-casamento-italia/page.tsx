import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-documentos-casamento-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução para Casamento na Itália | Nulla Osta e Documentos",
  description: "Vai casar na Itália? Saiba quais documentos brasileiros precisam de tradução juramentada e como obter o Nulla Osta per il Matrimonio.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução para Casamento na Itália | Nulla Osta e Documentos",
    description: "Vai casar na Itália? Saiba quais documentos brasileiros precisam de tradução juramentada e como obter o Nulla Osta per il Matrimonio.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Estado Civil / Casamento"
      title="Tradução de documentos para casamento na Itália (Nulla Osta)"
      intro="O casamento de cidadãos brasileiros em solo italiano (seja com italianos ou com outros estrangeiros) exige a apresentação do 'Nulla Osta al Matrimonio'. Este documento atesta que não existem impedimentos legais para a união. Para obtê-lo, suas certidões brasileiras devem estar perfeitamente traduzidas e apostiladas."
      sections={[
      {
        title: "Documentos Exigidos para o Casamento",
        body: [
          "A lista pode variar conforme o Comune e a Prefettura, mas a base documental brasileira inclui:",
        ],
        list: [
          "Certidão de Nascimento em Inteiro Teor.",
          "Certidão de Casamento com averbação de divórcio (se for o caso).",
          "Certidão de Óbito de cônjuge anterior (se for viúvo).",
          "Passaporte brasileiro válido."
        ]
      },
      {
        title: "O Papel do Consulado e da Tradução",
        body: [
          "O Nulla Osta é emitido pelo Consulado Brasileiro na Itália. Para que o consulado emita esse documento, você deve apresentar as certidões brasileiras originais apostiladas. Após a emissão do Nulla Osta, ele deve ser legalizado na Prefettura italiana antes de ser levado ao Comune.",
          <span key="link">Saiba como preparar suas <Link href="/traducao-juramentada-certidao-nascimento-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">certidões de nascimento</Link> corretamente.</span>
        ]
      },
      {
        title: "Prazos Fatais",
        body: [
          "As autoridades italianas exigem que as certidões brasileiras tenham sido emitidas há menos de 6 meses. Documentos fora desse prazo são rejeitados, obrigando o casal a refazer todo o processo de emissão, apostila e tradução."
        ]
      }
    ]}
      faqs={[
      { question: "O que é o Nulla Osta?", answer: "É uma declaração consular que afirma que o cidadão está livre para casar conforme as leis do seu país de origem." },
      { question: "Brasileiro pode casar com visto de turista na Itália?", answer: "Sim, a lei italiana permite o casamento de estrangeiros mesmo sem o Permesso di Soggiorno, desde que apresentem o Nulla Osta e passaporte com carimbo de entrada legal." },
      { question: "Preciso de testemunhas brasileiras?", answer: "Não, as testemunhas podem ser de qualquer nacionalidade, desde que possuam documento de identidade válido." }
    ]}
    />
  );
}
