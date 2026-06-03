import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-cnh-brasileira-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução Juramentada da CNH Brasileira na Itália | Coversão",
  description: "Tradução juramentada oficial da CNH brasileira para dirigir na Itália e solicitar a conversão para a Patente di Guida pelo novo acordo bilateral.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada da CNH Brasileira na Itália | Coversão",
    description: "Tradução juramentada oficial da CNH brasileira para dirigir na Itália e solicitar a conversão para a Patente di Guida pelo novo acordo bilateral.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Trânsito / Mobilidade"
      title="Tradução da CNH brasileira na Itália"
      intro="Dirigir na Itália exige conformidade com o Codice della Strada. Brasileiros turistas podem dirigir temporariamente com a CNH acompanhada de tradução. Brasileiros residentes têm até 1 ano para dirigir com a CNH e, após isso, devem obrigatoriamente converter a habilitação para a Patente italiana. Em ambos os casos, a tradução juramentada é o documento-chave."
      sections={[
      {
        title: "Tradução para Turismo vs Conversão (Residência)",
        body: [
          "Se você for turista, a tradução juramentada da CNH ou a PID (Permissão Internacional para Dirigir) são exigidas em locadoras e blitze policiais.",
          "Se você obteve residência na Itália, o novo Acordo Brasil-Itália permite a conversão direta (sem provas teóricas/práticas) da sua CNH (Cat. A e B) para a patente italiana. Para dar entrada no processo na Motorizzazione Civile, a tradução juramentada da CNH definitiva é um requisito obrigatório.",
          <span key="link">Leia nossa reportagem completa sobre as regras da <Link href="/traducao-cnh-dirigir-na-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">conversão da CNH na Itália</Link>.</span>
        ]
      },
      {
        title: "CNH Provisória e Digital",
        body: [
          "As autoridades italianas e a Motorizzazione não aceitam a CNH Digital brasileira nem a CNH Provisória (Permissão para Dirigir). Você deve apresentar o documento físico definitivo para o tradutor e para a autoridade italiana."
        ]
      },
      {
        title: "Por que não fazer no Consulado?",
        body: [
          "Muitos tentam agendar a tradução da CNH no Consulado Brasileiro, o que pode levar meses devido à alta demanda. A tradução juramentada oficial (feita por tradutor TPIC apostilado ou asseverazione italiana) é rápida, tem a mesma validade jurídica e evita atrasos na perda do prazo de 1 ano de residência."
        ]
      }
    ]}
      faqs={[
      { question: "A tradução da CNH tem prazo de validade?", answer: "A tradução não vence, mas ela acompanha a validade da sua CNH original. Se a sua CNH brasileira expirar, a tradução não servirá para autorizar a condução." },
      { question: "Moro na Itália há mais de um ano, ainda posso converter?", answer: "As regras do novo acordo especificam prazos rigorosos. Se você ultrapassar 1 ano de residência dirigindo com a CNH brasileira, estará sujeito a multas. A conversão após anos de residência passa por análise rigorosa da Motorizzazione." },
      { question: "Preciso de Apostila de Haia na CNH?", answer: "Para a conversão (Motorizzazione), alguns escritórios exigem a apostila no documento original, outros apenas a tradução juramentada asseverada. É vital checar com a Motorizzazione da sua província." }
    ]}
    />
  );
}
