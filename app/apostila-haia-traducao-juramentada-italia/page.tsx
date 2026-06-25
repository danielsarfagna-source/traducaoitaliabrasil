import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/apostila-haia-traducao-juramentada-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Apostila de Haia para documentos brasileiros na Itália | Tradução Brasil Itália",
  description: "Entenda quando documentos brasileiros precisam de apostila de Haia, tradução asseverata e preparação para uso perante órgãos italianos.",
  path: "/apostila-haia-traducao-juramentada-italia",
  ogTitle: "Apostila de Haia para documentos brasileiros na Itália",
  ogDescription: "Orientação sobre apostila, tradução para italiano e exigências que podem variar conforme o órgão destinatário.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Legalização Internacional"
      title="Apostila de Haia e tradução juramentada para Itália"
      intro="Em muitos procedimentos, documentos brasileiros precisam da Apostila de Haia e de tradução para italiano antes de serem apresentados na Itália. A apostila certifica a origem do documento, mas não traduz o conteúdo nem garante aceitação automática. A ordem e o formato devem ser confirmados com o órgão destinatário."
      sections={[
      {
        title: "Fluxo comum do processo",
        body: [
          "Quando o procedimento exige apostila e a tradução é feita no Brasil, um fluxo comum é:",
          "1. Emitir o documento original no Brasil.",
          "2. Apostilar o documento original em um cartório brasileiro.",
          "3. Enviar o documento apostilado para o Tradutor Juramentado. (Ele traduzirá o documento E a apostila).",
          "4. Confirmar se a própria tradução também precisa ser apostilada.",
          <span key="link">Esse fluxo é conhecido como <strong>apostilamento duplo</strong> em alguns procedimentos. Confirme a exigência no nosso <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">guia de cidadania italiana</Link> e com o órgão destinatário.</span>
        ]
      },
      {
        title: "Por que a Apostila na Tradução é necessária?",
        body: [
          "A primeira apostila certifica a assinatura ou o selo do documento original. Quando exigida, uma segunda apostila pode certificar a assinatura do tradutor público brasileiro. O órgão destinatário deve confirmar se essa etapa adicional é necessária."
        ]
      },
      {
        title: "A exceção: Asseverazione na Itália",
        body: [
          "Quando a tradução é asseverata na Itália, normalmente não se apostila a tradução italiana para uso interno. O documento original brasileiro pode continuar sujeito à Apostila de Haia, conforme o procedimento."
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
