import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/traducao-contratos-imoveis-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada de contratos e documentos de imóveis Brasil-Itália",
  description: "Tradução juramentada de contratos, escrituras, procurações e documentos para imóveis, empresas e atos notariais Brasil-Itália.",
  path: "/traducao-contratos-imoveis-italia",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Investimento / Negócios"
      title="Tradução juramentada de contratos e documentos de imóveis Brasil-Itália"
      intro="O mercado imobiliário italiano atrai investidores brasileiros em busca de casas de 1 euro ou propriedades de luxo na Toscana. Toda transação imobiliária na Itália passa obrigatoriamente por um Notaio (Notário), que exige a tradução oficial de qualquer documento estrangeiro envolvido na operação."
      sections={[
      {
        title: "Procura Speciale (Procuração para Compra)",
        body: [
          "Se você não puder estar presente na assinatura da escritura (Rogito), precisará de uma 'Procura Speciale' feita em cartório no Brasil. Este documento deve ser apostilado e ter tradução juramentada asseverada para que o Notário italiano aceite a assinatura do seu representante.",
        ],
        list: [
          "Contrato de Compra e Venda (Compromesso).",
          "Proposta de Compra (Proposta d'Acquisto).",
          "Documentos Bancários para abertura de conta na Itália.",
          "Comprovantes de Origem de Recursos."
        ]
      },
      {
        title: "Codice Fiscale e Documentação de Identidade",
        body: [
          "O primeiro passo para qualquer negócio na Itália é o Codice Fiscale. Para investidores que não possuem cidadania italiana, a tradução do passaporte ou RG brasileiro pode ser solicitada em bancos e agências imobiliárias (Agenzia Immobiliare).",
          <span key="link">Veja a importância de ter seus <Link href="/traducao-documentos-brasileiros-na-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">documentos brasileiros na Itália</Link> em ordem.</span>
        ]
      },
      {
        title: "Segurança Jurídica no Investimento",
        body: [
          "A tradução juramentada de contratos não é apenas uma formalidade, é a sua garantia de que você entende exatamente o que está assinando perante a lei italiana. Erros na tradução de cláusulas de rescisão ou multas contratuais podem gerar prejuízos financeiros enormes."
        ]
      }
    ]}
      faqs={[
      { question: "Posso traduzir o contrato de aluguel também?", answer: "Sim, traduzimos contratos de locação (Contratto di Locazione) para comprovação de residência e obtenção de vistos." },
      { question: "O tradutor vai ao cartório comigo?", answer: "Se você estiver na Itália, podemos fornecer um intérprete oficial para acompanhar a assinatura da escritura perante o Notaio." },
      { question: "Quanto tempo vale a procuração?", answer: "A 'Procura Speciale' costuma ter validade específica para aquele negócio ou um prazo determinado de 6 meses a 1 ano." }
    ]}
    />
  );
}
