import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-juramentada-milao";

export const metadata: Metadata = {
  title: "Tradução Juramentada em Milão | Português Italiano",
  description:
    "Tradução juramentada em Milão para brasileiros na Lombardia. CNH, cidadania, certidões, diploma, permesso e apostila.",
  alternates: {
    canonical: pagePath,
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Milão e Lombardia"
      title="Tradução juramentada em Milão para documentos Brasil-Itália"
      pagePath={pagePath}
      schemaType="ProfessionalService"
      areaServed="Milão"
      description="Atendimento em português para tradução juramentada em Milão e Lombardia."
      intro="Milão recebe muitos brasileiros em processos de estudo, trabalho, residência, cidadania e negócios. A tradução juramentada ajuda a apresentar documentos brasileiros em italiano com a formalidade exigida por órgãos e instituições."
      sections={[
        {
          title: "Quando procurar tradução em Milão",
          body: [
            "A necessidade pode surgir em universidade, empresa, Comune, Questura, Motorizzazione ou procedimento familiar. Antes de traduzir, é importante saber a finalidade e o órgão que receberá o documento.",
          ],
        },
        {
          title: "Documentos frequentes",
          body: ["Os pedidos mais comuns envolvem:"],
          list: [
            "diploma e histórico escolar",
            "certidões civis",
            "CNH brasileira",
            "documentos para permesso",
            "procurações e contratos",
            "apostila e uso internacional",
          ],
        },
        {
          title: "Orçamento digital",
          body: [
            "Envie o documento pelo WhatsApp e informe se ele será usado em Milão, Lombardia ou outra cidade italiana. Receba orientação sobre tradução, apostila, prazo e valor sem deslocamento inicial.",
          ],
        },
      ]}
      faqs={[
        { question: "Atendem brasileiros em Milão?", answer: "Sim. O atendimento é feito em português e pode começar por WhatsApp." },
        { question: "A tradução serve para universidade em Milão?", answer: "Pode servir quando a universidade exige tradução oficial. O edital deve ser conferido antes." },
        { question: "Posso enviar documento digitalizado?", answer: "Sim, para análise inicial e orçamento." },
        { question: "Vocês traduzem diploma e histórico?", answer: "Sim. Também orientamos sobre ementas, apostila, CIMEA e Dichiarazione di Valore quando aplicável." },
        { question: "Quanto custa?", answer: "Depende do documento, volume e urgência. O valor é informado após análise." },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de diploma", href: "/dichiarazione-di-valore-traducao-diploma" },
        { title: "Tradução de documentos para permesso", href: "/documentos-traducao-permesso-di-soggiorno" },
        { title: "Preço da tradução juramentada", href: "/preco-traducao-juramentada-portugues-italiano" },
      ]}
    />
  );
}
