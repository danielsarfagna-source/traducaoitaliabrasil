import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/traducao-juramentada-diploma-brasileiro-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução Juramentada de Diploma Brasileiro para Itália",
  description: "Tradução juramentada de diplomas e títulos acadêmicos brasileiros para universidades italianas, CIMEA e Dichiarazione di Valore.",
  path: "/traducao-juramentada-diploma-brasileiro-italia",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Estudos / Universidade"
      title="Tradução juramentada de diploma brasileiro para Itália"
      intro="Estudar na Itália ou validar sua profissão no exterior exige a apresentação do seu Diploma brasileiro. Porém, o documento original por si só não tem valor legal imediato na Europa. Ele necessita da tradução juramentada para o italiano, acompanhada da Apostila de Haia, para processos universitários ou de reconhecimento profissional."
      sections={[
      {
        title: "Dichiarazione di Valore vs CIMEA",
        body: [
          "A tradução juramentada do diploma é o primeiro passo, seja para solicitar a tradicional 'Dichiarazione di Valore' no Consulado Italiano, seja para solicitar o 'Statement of Comparability' online através da plataforma do CIMEA (DiploMe).",
          <span key="link">Entenda qual processo escolher no nosso guia completo sobre <Link href="/dichiarazione-di-valore-traducao-diploma" className="text-[#d9aa52] underline hover:text-white transition-colors">Dichiarazione di Valore e CIMEA</Link>.</span>
        ]
      },
      {
        title: "Atenção aos termos acadêmicos",
        body: [
          "Títulos como 'Bacharel', 'Licenciado' ou 'Tecnólogo' não têm equivalência direta perfeita. O tradutor juramentado utiliza glossários padronizados para garantir que o oficial italiano compreenda o nível do seu estudo conforme o Quadro Europeu de Qualificações (EQF)."
        ]
      },
      {
        title: "Reconhecimento de Firma antes da Apostila",
        body: [
          "Lembre-se: antes de apostilar seu diploma no cartório (e antes de mandá-lo para tradução), é necessário reconhecer a firma do Reitor ou Secretário Acadêmico que assinou o documento. Sem isso, o cartório não emite a Apostila de Haia."
        ]
      }
    ]}
      faqs={[
      { question: "Posso traduzir meu diploma para o inglês em vez de italiano?", answer: "Algumas universidades italianas (em cursos ministrados em inglês) aceitam documentos em inglês, mas para órgãos do governo (Bolsas regionais, Questura, Consulados), o italiano é mandatório." },
      { question: "O diploma do ensino médio precisa ser traduzido?", answer: "Se você vai ingressar em uma graduação (Laurea Triennale) na Itália, sim, o certificado de conclusão do Ensino Médio é obrigatório." },
      { question: "A tradução do diploma substitui a revalidação?", answer: "Não. A tradução apenas torna o documento legível juridicamente na Itália. O reconhecimento da profissão (Equipollenza) é um processo separado junto ao ministério competente." }
    ]}
    />
  );
}
