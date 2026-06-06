import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-juramentada-roma";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução Juramentada em Roma | Português Italiano",
  description: "Tradução juramentada em Roma para brasileiros. CNH, certidões, cidadania, diploma, permesso e apostila. Atendimento em português.",
  path: "/traducao-juramentada-roma",
  languages: {
    "pt-BR": "/traducao-juramentada-roma",
    "it-IT": "/traduzione-giurata-portoghese-italiano-roma"
  },
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Roma"
      title="Tradução juramentada em Roma para brasileiros"
      pagePath={pagePath}
      schemaType="ProfessionalService"
      areaServed="Roma"
      description="Atendimento em português para tradução juramentada em Roma e documentos Brasil-Itália."
      intro="Brasileiros em Roma costumam precisar de tradução juramentada para Comune, Tribunal, universidade, Motorizzazione, Questura, cidadania italiana, CNH, certidões e permesso di soggiorno."
      sections={[
        {
          title: "Atendimento em português, mesmo à distância",
          body: [
            "Você não precisa começar indo pessoalmente a um escritório. Envie foto ou PDF do documento pelo WhatsApp, explique onde ele será apresentado em Roma e receba orientação sobre tradução, apostila, prazo e valor.",
          ],
        },
        {
          title: "Documentos mais comuns em Roma",
          body: [
            "O atendimento cobre documentos brasileiros e italianos usados em procedimentos oficiais, sempre com cautela sobre as exigências do órgão destinatário.",
          ],
          list: [
            "CNH brasileira",
            "certidões para cidadania",
            "diploma e histórico escolar",
            "documentos para permesso",
            "documentos para casamento",
            "apostila de Haia",
          ],
        },
        {
          title: "Comune, Tribunal, Motorizzazione e Questura",
          body: [
            "Cada órgão pode solicitar formato, etapa e documentação específica. A tradução juramentada ajuda a apresentar o conteúdo em italiano, mas não substitui análise do procedimento pelo órgão responsável.",
          ],
        },
      ]}
      faqs={[
        { question: "Preciso estar em Roma?", answer: "Não necessariamente. A análise inicial pode ser feita por WhatsApp com foto ou PDF do documento." },
        { question: "Posso enviar documento pelo WhatsApp?", answer: "Sim. Envie imagem nítida ou PDF e informe a finalidade de uso." },
        { question: "A tradução serve para Comune, Tribunal ou Motorizzazione?", answer: "Pode servir quando o órgão solicita tradução oficial, mas a exigência final deve ser confirmada conforme o procedimento." },
        { question: "Quanto tempo demora em Roma?", answer: "O prazo depende do documento e urgência; informamos antes do início." },
        { question: "Vocês atendem brasileiros fora de Roma?", answer: "Sim. O atendimento orienta brasileiros em outras cidades da Itália." },
        { question: "O documento precisa de apostila?", answer: "Pode precisar. Isso depende do documento, país de emissão e finalidade." },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada português italiano", href: "/traducao-juramentada-italiano" },
        { title: "Tradução de CNH brasileira na Itália", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Tradução para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Preço da tradução juramentada", href: "/preco-traducao-juramentada-portugues-italiano" },
      ]}
    />
  );
}
