import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

const pagePath = "/preco-traducao-juramentada-portugues-italiano";

export const metadata: Metadata = createPageMetadata({
  title: "Preço Tradução Juramentada Português Italiano",
  description: "Veja o que influencia o preço da tradução juramentada português italiano. Envie o documento pelo WhatsApp e receba orientação.",
  path: "/preco-traducao-juramentada-portugues-italiano",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Preço e orçamento"
      title="Quanto custa uma tradução juramentada português italiano?"
      pagePath={pagePath}
      schemaType="Service"
      description="Orientação sobre fatores que influenciam o preço da tradução juramentada português italiano."
      intro="O preço de uma tradução juramentada português italiano depende do documento, volume, urgência e finalidade. Para evitar estimativa errada, o orçamento é feito a partir de foto ou PDF legível."
      sections={[
        {
          title: "O que influencia o preço",
          body: [
            "Não existe um valor único para todo documento. Uma CNH, uma certidão em inteiro teor, um diploma com histórico e um contrato têm níveis de extensão e complexidade diferentes.",
            "Também podem influenciar a necessidade de asseveração, marca da bollo, apostila, envio físico ou urgência.",
          ],
          list: [
            "tipo de documento",
            "número de páginas",
            "quantidade de texto",
            "urgência",
            "necessidade de asseveração",
            "marca da bollo, quando aplicável",
            "apostila ou envio, quando necessário",
          ],
        },
        {
          title: "Documentos comuns",
          body: [
            "CNH, certidões, diplomas e documentos para permesso costumam ter critérios diferentes de orçamento. Certidões em inteiro teor e históricos escolares podem ser mais extensos do que parecem em uma primeira foto.",
            "Por isso, pedimos o documento antes de informar o valor final.",
          ],
        },
        {
          title: "Orçamento por WhatsApp",
          body: [
            "Envie uma foto ou PDF do documento pelo WhatsApp e informe onde ele será usado. Com isso, orientamos sobre tradução, apostila, prazo e valor.",
            "Se o documento estiver ilegível, incompleto ou cortado, avisamos antes para evitar retrabalho.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Por que o preço varia?",
          answer:
            "Porque cada documento tem tamanho, complexidade, urgência e finalidade diferentes.",
        },
        {
          question: "Dá para fazer orçamento por foto?",
          answer:
            "Sim. Foto nítida ou PDF costuma ser suficiente para análise inicial.",
        },
        {
          question: "O preço inclui marca da bollo?",
          answer:
            "Depende do caso. Quando houver marca da bollo ou taxa externa, isso é informado no orçamento.",
        },
        {
          question: "O preço inclui apostila?",
          answer:
            "Não necessariamente. Apostila é etapa diferente da tradução e deve ser confirmada conforme o procedimento.",
        },
        {
          question: "Tradução simples é diferente de tradução juramentada?",
          answer:
            "Sim. A tradução simples serve para compreensão; a juramentada é usada quando há exigência formal.",
        },
        {
          question: "Quanto custa traduzir CNH?",
          answer:
            "Depende da análise da frente e do verso, urgência e formato exigido pelo órgão destinatário.",
        },
        {
          question: "Quanto custa traduzir certidão?",
          answer:
            "Depende do tipo de certidão, inteiro teor, averbações e eventual necessidade de apostila.",
        },
        {
          question: "Quanto tempo demora?",
          answer:
            "O prazo é informado junto com o orçamento após análise do documento.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada português italiano", href: "/traducao-juramentada-italiano" },
        { title: "Tradução de CNH brasileira na Itália", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
      ]}
    />
  );
}
