import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/apostila-haia-traducao-juramentada-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Apostila de Haia e Tradução Juramentada para Itália (Guia)",
  description: "Entenda a ordem correta: Apostila de Haia no documento brasileiro, tradução juramentada para italiano e o apostilamento duplo. Evite devoluções.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Apostila de Haia e Tradução Juramentada para Itália (Guia)",
    description: "Entenda a ordem correta: Apostila de Haia no documento brasileiro, tradução juramentada para italiano e o apostilamento duplo. Evite devoluções.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Legalização Internacional"
      title="Apostila de Haia e tradução juramentada para Itália"
      intro="A Convenção da Apostila de Haia substituiu as antigas legalizações consulares demoradas. O Brasil e a Itália são signatários, o que significa que o 'selo' da Apostila valida automaticamente documentos públicos de um país no outro. Mas a ordem entre apostilar e traduzir é a principal causa de erros e perda de dinheiro para requerentes brasileiros."
      sections={[
      {
        title: "A Ordem Correta do Processo",
        body: [
          "Se você fizer todo o processo no Brasil, existe um fluxo inviolável:",
          "1. Emitir o documento original no Brasil.",
          "2. Apostilar o documento original em um cartório brasileiro.",
          "3. Enviar o documento apostilado para o Tradutor Juramentado. (Ele traduzirá o documento E a apostila).",
          "4. Apostilar a própria Tradução Juramentada.",
          <span key="link">Este é o chamado <strong>'Apostilamento Duplo'</strong>, muito comum em processos abordados no nosso <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">guia de cidadania italiana</Link>.</span>
        ]
      },
      {
        title: "Por que a Apostila na Tradução é necessária?",
        body: [
          "Na Itália, o oficial italiano sabe que o documento original é autêntico por causa da 1ª apostila. Mas como ele sabe que a assinatura do tradutor juramentado no Brasil também é autêntica? Através da 2ª apostila, aplicada na tradução. Sem ela, o papel da tradução não tem fé pública no exterior."
        ]
      },
      {
        title: "A exceção: Asseverazione na Itália",
        body: [
          "Se a tradução for feita por um tradutor na Itália, com juramento em Tribunal Italiano (Asseverazione), a 2ª apostila não é necessária, pois a tradução já nasce com validade jurídica italiana. O documento original brasileiro, contudo, ainda precisa da sua apostila."
        ]
      }
    ]}
      faqs={[
      { question: "Onde eu faço a Apostila de Haia no Brasil?", answer: "Em qualquer cartório de notas e registros autorizado pelo CNJ (Conselho Nacional de Justiça)." },
      { question: "Meu documento é digital. Posso apostilar?", answer: "Sim, muitos cartórios emitem a Apostila eletrônica. A versão impressa com QR code também é apostilável." },
      { question: "O cartório traduz o documento?", answer: "Não. O cartório apenas apostila. A tradução deve ser feita por um Tradutor Público e Intérprete Comercial (TPIC) autorizado pela Junta Comercial." }
    ]}
    />
  );
}
