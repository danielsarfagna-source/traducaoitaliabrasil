import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-sentenca-divorcio-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução de Sentença de Divórcio para Itália | Homologação",
  description: "Precisa traduzir sentença de divórcio para a Itália? Saiba como funciona a tradução juramentada de petição inicial, ata de audiência e trânsito em julgado.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução de Sentença de Divórcio para Itália | Homologação",
    description: "Precisa traduzir sentença de divórcio para a Itália? Saiba como funciona a tradução juramentada de petição inicial, ata de audiência e trânsito em julgado.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Legal / Judicial"
      title="Tradução juramentada de sentença de divórcio para a Itália"
      intro="O divórcio realizado no Brasil não tem efeito automático na Itália. Para que um cidadão brasileiro ou ítalo-brasileiro possa casar novamente na Itália ou atualizar seu estado civil no Comune (ANAGRE), é obrigatório apresentar a sentença de divórcio devidamente traduzida por um tradutor juramentado e apostilada."
      sections={[
      {
        title: "Quais partes do processo devem ser traduzidas?",
        body: [
          "Diferente de uma certidão de nascimento, o divórcio é um processo judicial composto por várias peças. A autoridade italiana (Comune ou Tribunal) geralmente exige a tradução das seguintes partes críticas:",
        ],
        list: [
          "Petição Inicial (Citazione).",
          "Ata de Audiência (Verbale di Udienza).",
          "Sentença Judicial (Sentenza).",
          "Certidão de Trânsito em Julgado (Passaggio in giudicato) - Documento que prova que não há mais recurso.",
          "Averbação no Cartório de Registro Civil."
        ]
      },
      {
        title: "Homologação de Sentença na Itália",
        body: [
          "Muitos clientes perguntam se precisam de um advogado italiano para homologar o divórcio. Em muitos casos, se o divórcio foi consensual e seguiu os ritos legais, a atualização pode ser feita administrativamente no Comune através da tradução juramentada asseverada. Caso contrário, será necessário um processo judicial.",
          <span key="link">Confira também os requisitos para <Link href="/traducao-juramentada-certidao-casamento-obito-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">certidões de casamento</Link> com averbação.</span>
        ]
      },
      {
        title: "Dica Técnica: Divórcio Extrajudicial (Cartório)",
        body: [
          "Se o seu divórcio foi feito diretamente em cartório (Escritura Pública), o processo é muito mais simples e barato. A tradução será apenas da escritura e da respectiva certidão de casamento averbada. Este documento também exige Apostila de Haia."
        ]
      }
    ]}
      faqs={[
      { question: "Quanto custa a tradução de um divórcio?", answer: "Como sentenças judiciais podem ter muitas páginas, o valor é calculado por lauda juramentada. Fazemos uma análise prévia para traduzir apenas o essencial exigido pela lei italiana." },
      { question: "Quanto tempo demora?", answer: "Sentenças são textos densos e técnicos. O prazo médio é de 7 a 12 dias úteis." },
      { question: "Preciso traduzir o processo inteiro de 100 páginas?", answer: "Geralmente não. Traduzimos apenas as peças principais mencionadas acima (Petição, Ata, Sentença e Trânsito em Julgado)." }
    ]}
    />
  );
}
