import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-documentos-brasileiros-na-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução Juramentada de Documentos Brasileiros na Itália",
  description: "Serviço oficial de tradução de documentos brasileiros para autoridades italianas. Certidões, CNPJ, procurações, processos judiciais e contratos.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada de Documentos Brasileiros na Itália",
    description: "Serviço oficial de tradução de documentos brasileiros para autoridades italianas. Certidões, CNPJ, procurações, processos judiciais e contratos.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Legalização / Processos"
      title="Tradução juramentada de documentos brasileiros na Itália"
      intro="Empresas brasileiras abrindo filiais na Itália, cidadãos comprando imóveis, procurações (procura speciale) e validação de contratos. Apresentar documentos gerados no Brasil para o estado ou mercado italiano requer rigorosa tradução oficial, muitas vezes com vocabulário técnico, comercial ou jurídico complexo."
      sections={[
      {
        title: "Documentos Societários e Comerciais",
        body: [
          "Seja para abrir uma Partita IVA ou registrar uma filial (S.r.l.) perante a Camera di Commercio italiana, documentos como Contrato Social, Cartão CNPJ, Balanços Patrimoniais e Procurações de Sócios exigem tradução asseverada. A tradução deve manter a fidelidade aos termos do Direito Societário.",
          <span key="link">O rigor exigido aqui é semelhante ao processo de imigração. Veja como funciona na <Link href="/reforma-cidadania-italiana-documentos" className="text-[#d9aa52] underline hover:text-white transition-colors">regulamentação e reformas de leis</Link>.</span>
        ]
      },
      {
        title: "Processos Judiciais (Sentenças e Adoções)",
        body: [
          "Casos de adoção de menores no Brasil por residentes na Itália, sentenças cíveis e cobranças judiciais exigem que a tradução juramentada contemple o Trânsito em Julgado. Estas são traduções densas e cobradas por lauda juramentada (cada 1.000 caracteres)."
        ]
      },
      {
        title: "Como garantir a aceitação",
        body: [
          "Aconselhamos que o interessado valide com o Notário (Notaio) ou advogado italiano responsável se o órgão aceita a tradução juramentada brasileira com apostila ou se prefere a tradução asseverada diretamente em um tribunal civil italiano. Nós fornecemos ambos os serviços, adequando-nos à estratégia jurídica do seu projeto."
        ]
      }
    ]}
      faqs={[
      { question: "Posso usar inteligência artificial para traduzir contratos e só pedir o carimbo?", answer: "Não. O tradutor público assume responsabilidade penal pelo que assina e realiza a tradução integralmente pelos seus próprios métodos e glossários oficiais." },
      { question: "Qual a diferença entre Tradução Juramentada e Asseverazione?", answer: "Tradução juramentada é feita no Brasil por tradutor público (exige apostila para valer fora). Asseverazione é feita na Itália, em tribunal, e já tem validade imediata em solo italiano." },
      { question: "Preciso traduzir a procuração pública feita no cartório brasileiro?", answer: "Sim. A procuração pública brasileira deve ser apostilada e traduzida (juramentada) para ter valor de instrumento de mandato (Procura) na Itália." }
    ]}
    />
  );
}
