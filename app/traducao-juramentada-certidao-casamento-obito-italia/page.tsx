import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/traducao-juramentada-certidao-casamento-obito-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução Juramentada de Certidão de Casamento e Óbito | Itália",
  description: "Tradução juramentada de certidões de casamento e óbito brasileiras para montagem de pasta de cidadania italiana. Especialistas em documentação jurídica.",
  path: "/traducao-juramentada-certidao-casamento-obito-italia",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Certidões / Cidadania"
      title="Tradução juramentada de certidão de casamento e óbito para Itália"
      intro="As certidões de casamento e óbito são as peças que conectam as gerações na sua árvore genealógica. Para a cidadania italiana (jure sanguinis), elas provam a legitimidade da linha de transmissão e o ciclo de vida dos seus antepassados. Uma tradução impecável destas certidões evita que seu processo pare em exigências nos Comunes ou Tribunais italianos."
      sections={[
      {
        title: "A importância da Certidão de Casamento",
        body: [
          "O casamento legitima os filhos perante a lei italiana antiga. A certidão de casamento em Inteiro Teor (digitada ou reprográfica) mostrará mudanças de sobrenome e quem foi o declarante do nascimento dos filhos.",
          <span key="link">Confira como essa documentação impacta seu processo lendo sobre a <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">tradução para cidadania italiana</Link>.</span>
        ]
      },
      {
        title: "Certidão de Óbito e Averbações",
        body: [
          "Embora nem todos os Consulados exijam o óbito do requerente, a maioria dos Comunes e Tribunais italianos a solicita para fechar a linha temporal. O tradutor deve prestar atenção especial às causas mortis e locais, transcrevendo termos médicos antigos com precisão técnica."
        ]
      },
      {
        title: "Divórcios na Certidão de Casamento",
        body: [
          "Se houver divórcio, ele constará como averbação na certidão de casamento. A tradução deve incluir essa averbação integralmente. Dependendo do caso, a autoridade italiana poderá exigir também a tradução juramentada da sentença de divórcio."
        ]
      }
    ]}
      faqs={[
      { question: "Sou solteiro, preciso traduzir certidão de casamento?", answer: "A sua não, mas as de todos os seus antepassados na linha de transmissão até o italiano originário são obrigatórias." },
      { question: "A certidão de óbito do italiano nascido na Itália precisa ser traduzida?", answer: "Se ele faleceu no Brasil, a certidão de óbito é brasileira (em português) e sim, exigirá tradução juramentada e apostila para ser apresentada na Itália." },
      { question: "As certidões devem ser em Inteiro Teor?", answer: "Sempre. Certidões de breve relato não trazem o histórico de anotações (averbações) e são frequentemente rejeitadas pelas autoridades italianas." }
    ]}
    />
  );
}
