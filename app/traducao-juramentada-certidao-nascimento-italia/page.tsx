import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-juramentada-certidao-nascimento-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução Juramentada de Certidão de Nascimento para Itália",
  description: "Tradução juramentada de certidão de nascimento brasileira (inteiro teor) para cidadania italiana, casamento e uso oficial na Itália.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada de Certidão de Nascimento para Itália",
    description: "Tradução juramentada de certidão de nascimento brasileira (inteiro teor) para cidadania italiana, casamento e uso oficial na Itália.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Certidões / Cidadania"
      title="Tradução juramentada de certidão de nascimento para Itália"
      pagePath={pagePath}
      schemaType="Service"
      description="Serviço de tradução juramentada de certidão de nascimento brasileira para uso na Itália."
      intro="A certidão de nascimento é o documento mais importante na identificação civil. Para processos de cidadania italiana, casamento na Itália ou registro de filhos, a certidão brasileira precisa de tradução juramentada rigorosa e apostilamento para ter validade perante os oficiais italianos."
      sections={[
      {
        title: "Por que a certidão de Breve Relato não serve?",
        body: [
          "O governo italiano exige a Certidão de Nascimento em Inteiro Teor (Copia Integrale). Este formato contém todas as anotações do livro original do cartório, incluindo averbações de mudanças de nome, reconhecimento de paternidade e correções.",
          <span key="link">Saiba mais sobre as exigências completas no nosso guia de <Link href="/traducao-juramentada-certidoes" className="text-[#d9aa52] underline hover:text-white transition-colors">tradução de certidões</Link>.</span>
        ]
      },
      {
        title: "Cuidados técnicos na tradução",
        body: [
          "Nomes próprios não devem ser traduzidos ou adaptados pelo tradutor. A tradução deve refletir o documento original. Divergências entre certidão e tradução podem gerar exigências ou necessidade de esclarecimento pelo órgão destinatário."
        ]
      },
      {
        title: "Apostila de Haia",
        body: [
          "Primeiro, emita a certidão em Inteiro Teor. Depois, apostile-a no cartório brasileiro. Só então a tradução juramentada deve ser feita, pois o tradutor precisará traduzir também o conteúdo do selo da Apostila de Haia."
        ]
      }
    ]}
      faqs={[
      { question: "Qual a validade da certidão de nascimento para a Itália?", answer: "Na Itália, certidões de registro civil para fins de cidadania ou casamento costumam ter validade exigida de 6 meses a partir da data de emissão." },
      { question: "A tradução precisa ser feita no Brasil ou na Itália?", answer: "As duas possibilidades podem ser aceitas conforme o procedimento. Se feita no Brasil por Tradutor Público, pode ser necessário apostilar a tradução. Se feita na Itália, o formato costuma ser a asseverazione." },
      { question: "Erros no nome da mãe na certidão podem ser corrigidos pelo tradutor?", answer: "Não. O tradutor tem fé pública para transcrever exatamente o que está escrito. Erros do cartório devem ser retificados judicialmente ou administrativamente antes da tradução." }
    ]}
    />
  );
}
