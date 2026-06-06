import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/traducao-antecedentes-criminais-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução de Antecedentes Criminais para Itália | Polícia Federal",
  description: "Tradução juramentada de certidão de antecedentes criminais da Polícia Federal para cidadania por casamento, visto de trabalho e permesso di soggiorno.",
  path: "/traducao-antecedentes-criminais-italia",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Segurança / Vistos"
      title="Tradução juramentada de antecedentes criminais para a Itália"
      intro="A Certidão de Antecedentes Criminais emitida pela Polícia Federal do Brasil é um requisito recorrente para quem deseja viver, trabalhar ou obter a cidadania italiana por casamento (naturalização). Por ser um documento com validade curtíssima (90 dias), a tradução juramentada deve ser executada com máxima agilidade."
      sections={[
      {
        title: "Quando a Certidão de Antecedentes é exigida?",
        body: [
          "As situações mais comuns onde o governo italiano solicita este documento incluem:",
        ],
        list: [
          "Pedido de Cidadania Italiana por Casamento (Naturalizzazione per Matrimonio).",
          "Solicitação de Visto de Trabalho (Lavoro Subordinato/Autonomo).",
          "Visto de Residência Eletiva.",
          "Processos de Adoção Internacional."
        ]
      },
      {
        title: "Validade de 90 dias e a Corrida contra o Tempo",
        body: [
          "Diferente de certidões de nascimento, os antecedentes criminais expiram em 3 meses. Isso significa que, entre emitir o documento no site da PF, apostilar no cartório e fazer a tradução juramentada, você deve ter uma estratégia logística clara para não perder o prazo antes da entrega na Questura ou Prefettura.",
          <span key="link">Veja como a tradução se encaixa no pedido de <Link href="/traducao-documentos-permesso-di-soggiorno" className="text-[#d9aa52] underline hover:text-white transition-colors">permesso di soggiorno</Link>.</span>
        ]
      },
      {
        title: "Certidão Estadual vs Federal",
        body: [
          "Na maioria absoluta dos casos, a Itália exige a Certidão da Polícia FEDERAL. Certidões de polícias civis estaduais raramente são aceitas, a menos que haja uma exigência específica para um processo judicial muito pontual."
        ]
      }
    ]}
      faqs={[
      { question: "Preciso apostilar a certidão de antecedentes?", answer: "Sim, sem a Apostila de Haia no documento original, a tradução não terá validade para os órgãos italianos." },
      { question: "A tradução demora quanto tempo?", answer: "Como é um documento de apenas uma página e padrão, entregamos a tradução juramentada em até 24 a 48 horas." },
      { question: "Posso emitir a certidão online?", answer: "Sim, a certidão da Polícia Federal é emitida gratuitamente pelo site oficial da PF." }
    ]}
    />
  );
}
