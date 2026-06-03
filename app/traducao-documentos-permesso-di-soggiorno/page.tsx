import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-documentos-permesso-di-soggiorno";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução de Documentos para Permesso di Soggiorno na Itália",
  description: "Tradução juramentada para solicitação de Permesso di Soggiorno, visto de trabalho, coesão familiar e estudos na Itália (Questura e Prefettura).",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução de Documentos para Permesso di Soggiorno na Itália",
    description: "Tradução juramentada para solicitação de Permesso di Soggiorno, visto de trabalho, coesão familiar e estudos na Itália (Questura e Prefettura).",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Imigração / Vistos"
      title="Tradução de documentos brasileiros para permesso di soggiorno"
      intro="O 'Permesso di Soggiorno' é a sua permissão de estadia legal na Itália, emitido pela Questura (Polícia de Imigração). Seja para reagrupamento familiar, trabalho, estudo ou espera de cidadania, a apresentação de documentos brasileiros exige tradução oficial e juramentada para que sejam reconhecidos pelas autoridades italianas de imigração."
      sections={[
      {
        title: "Reagrupamento Familiar (Coesione Familiare)",
        body: [
          "Para comprovar o vínculo com o cidadão italiano ou estrangeiro regular residente, é imprescindível apresentar Certidões de Casamento (para cônjuges) e Nascimento (para filhos menores). Estes documentos brasileiros devem estar apostilados e ter tradução juramentada.",
          <span key="link">Veja mais sobre as exigências de certidões no guia de <Link href="/traducao-juramentada-certidoes" className="text-[#d9aa52] underline hover:text-white transition-colors">tradução de nascimento e casamento</Link>.</span>
        ]
      },
      {
        title: "Permesso por Motivos de Estudo ou Trabalho",
        body: [
          "Se você obteve um visto no Brasil e está convertendo-o para o Permesso di Soggiorno ao chegar na Itália, documentos adicionais como diplomas, comprovantes de renda ou antecedentes criminais podem ser solicitados, sempre requerendo o mesmo padrão de tradução oficial (Asseverazione ou Juramentada com Apostila)."
        ]
      },
      {
        title: "Atenção aos Antecedentes Criminais (Fedina Penale)",
        body: [
          "Para permissões de trabalho e algumas modalidades de cidadania por casamento, a Certidão de Antecedentes Criminais da Polícia Federal Brasileira é obrigatória. Como ela possui prazo de validade de apenas 90 dias, a tradução juramentada deve ser feita com rapidez."
        ]
      }
    ]}
      faqs={[
      { question: "A Questura aceita tradução simples sem juramentação?", answer: "Não. Todos os órgãos oficiais na Itália (Questura, Prefettura, Comunes) exigem que documentos civis e criminais estrangeiros sejam oficialmente juramentados." },
      { question: "Posso traduzir os documentos estando já na Itália?", answer: "Sim. Nossos tradutores podem processar as traduções enviadas digitalmente. A depender da Questura, orientaremos se a tradução feita no Brasil exigirá Apostila ou se realizaremos a Asseverazione diretamente em tribunal italiano." },
      { question: "O atestado de antecedentes da Polícia Estadual precisa de tradução?", answer: "Geralmente a Itália exige a Certidão de Antecedentes Criminais em âmbito Federal, emitida pela Polícia Federal. Se pedirem a estadual, também precisará de apostila e tradução." }
    ]}
    />
  );
}
