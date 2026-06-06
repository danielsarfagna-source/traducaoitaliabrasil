import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/traducao-historico-escolar-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução Juramentada de Histórico Escolar para Itália",
  description: "Tradução oficial e juramentada de histórico escolar e universitário para matrícula em faculdades italianas, bolsas de estudo e CIMEA.",
  path: "/traducao-historico-escolar-italia",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Estudos / Universidade"
      title="Tradução juramentada de histórico escolar brasileiro para Itália"
      intro="O Histórico Escolar (ou Histórico Acadêmico Universitário) é o documento mais detalhado da sua vida estudantil. Ele lista matérias, cargas horárias e notas. Para ingressar em uma universidade italiana ou obter equivalência de matérias, a tradução juramentada deste documento deve ser técnica e matematicamente impecável."
      sections={[
      {
        title: "Conversão de Notas e Carga Horária",
        body: [
          "Um dos grandes desafios na tradução do histórico é a diferença dos sistemas. No Brasil, usamos notas de 0 a 10 e horas-aula. Na Itália, as universidades usam notas de 0 a 30 (com louvor '30 e lode') e o sistema de Créditos Formativos Universitários (CFU). O tradutor não converte as notas por conta própria, mas traduz fielmente o sistema de avaliação impresso no verso do seu histórico brasileiro, permitindo que a própria universidade italiana faça a equivalência oficial.",
          <span key="link">Veja mais sobre a documentação de estudos no guia da <Link href="/dichiarazione-di-valore-traducao-diploma" className="text-[#d9aa52] underline hover:text-white transition-colors">Dichiarazione di Valore</Link>.</span>
        ]
      },
      {
        title: "Histórico vs Ementas (Conteúdo Programático)",
        body: [
          "O Histórico cita apenas o nome das matérias. A Ementa (Programma di Studi) descreve o conteúdo abordado. A tradução do histórico é quase sempre obrigatória. A da ementa costuma ser exigida apenas se você pedir eliminação de matérias ou reconhecimento para profissões regulamentadas (medicina, engenharia)."
        ]
      },
      {
        title: "Apostilamento Duplo",
        body: [
          "Se a tradução juramentada for feita no Brasil, ela segue a regra: Apostila no Histórico Original Brasileiro -> Tradução Juramentada -> Apostila na Tradução Juramentada."
        ]
      }
    ]}
      faqs={[
      { question: "Meu histórico tem 10 páginas, preciso traduzir tudo?", answer: "Sim. A tradução juramentada deve ser integral. Omitir páginas ou disciplinas quebra a fidelidade e a fé pública do documento." },
      { question: "O tradutor pode arredondar minhas notas?", answer: "De forma alguma. O tradutor transcreve exatamente a nota original. A conversão para o padrão italiano é feita pela comissão acadêmica da universidade." },
      { question: "Preciso traduzir a ementa de todas as matérias?", answer: "Apenas se o edital (Bando) da universidade exigir. Ementas são longas (às vezes mais de 100 páginas), então sempre confirme com a universidade italiana antes de solicitar o orçamento." }
    ]}
    />
  );
}
