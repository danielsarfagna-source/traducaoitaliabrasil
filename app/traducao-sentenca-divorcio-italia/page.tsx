import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-sentenca-divorcio-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada de sentença de divórcio brasileira para a Itália",
  description:
    "Tradução juramentada de sentenças de divórcio e escrituras públicas para reconhecimento no Comune italiano (trascrizione). Texto integral e trânsito em julgado.",
  path: pagePath,
  ogTitle: "Tradução de divórcio brasileiro para uso na Itália",
  ogDescription: "Guia técnico sobre tradução de sentenças judiciais e escrituras de cartório para atualização do estado civil na Itália.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Jurídico"
      title="Tradução juramentada de sentença de divórcio para a Itália"
      schemaType="Service"
      areaServed="Brasil e Itália"
      serviceType="Tradução juramentada de documentos judiciais"
      description="Tradução técnica e juramentada de sentenças e escrituras de divórcio para validade legal perante as autoridades italianas."
      intro="Divórcios realizados no Brasil, seja por via judicial ou extrajudicial (em cartório), não produzem efeitos automáticos na Itália. Regido pelos princípios de direito internacional privado e pelo **Decreto 132/2014** (para simplificação administrativa), o reconhecimento exige que a sentença brasileira seja traduzida de forma juramentada e transcrita (trascrizione) no Ufficio Stato Civile do Comune competente."
      sections={[
        {
          title: "Quais partes do processo devem ser traduzidas?",
          body: [
            "Para o reconhecimento do divórcio na Itália, não basta traduzir apenas o dispositivo da sentença. O Comune exige o conjunto documental que comprove o respeito ao contraditório e o encerramento definitivo da lide.",
          ],
          subsections: [
            {
              title: "Sentença Judicial Completa",
              body: [
                "Inclui a petição inicial, a ata de audiência (se houver), a sentença fundamentada e, obrigatoriamente, a certidão de trânsito em julgado (quando não cabe mais recurso). O termo italiano para trânsito em julgado é 'passaggio in giudicato'.",
              ],
            },
            {
              title: "Divórcio em Cartório (Escritura Pública)",
              body: [
                "Divórcios consensuais sem filhos menores podem ser feitos por escritura pública no Brasil. Neste caso, traduz-se a escritura integral, que deve estar devidamente apostilada.",
              ],
            },
          ],
        },
        {
          title: "A Homologação de Sentença vs. Transcrição Direta",
          body: [
            "Antigamente, todo divórcio estrangeiro passava por um processo judicial de 'delibazione' perante a Corte d'Appello na Itália. Atualmente, divórcios que cumprem requisitos específicos (como o mútuo consentimento e a ausência de filhos menores com questões pendentes) podem ser transcritos diretamente pelo oficial do Comune, desde que apresentados com a tradução juramentada asseverata.",
          ],
        },
        {
          title: "Apostila de Haia e Ordem dos Atos",
          body: [
            "A sequência obrigatória para validade na Itália: (1) Obtenção da cópia autenticada do processo judicial ou da escritura original; (2) Apostilamento em cartório no Brasil; (3) Tradução juramentada; (4) Asseverazione no Tribunale italiano (se a tradução for feita na Itália).",
          ],
        },
        {
          title: "Por que a tradução técnica é crucial?",
          body: [
            "Termos como 'guarda compartilhada', 'alimentos' e 'partilha de bens' possuem equivalentes exatos no direito de família italiano. Uma tradução imprecisa pode gerar dúvidas no oficial do Comune sobre o cumprimento da ordem pública italiana, travando o registro do novo estado civil por meses.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Preciso traduzir o processo de divórcio inteiro?",
          answer: "O Comune geralmente exige as 'peças principais': petição inicial, sentença e trânsito em julgado. No caso de escritura pública de cartório, traduz-se o documento inteiro.",
        },
        {
          question: "Quanto tempo demora para transcrever o divórcio no Comune?",
          answer: "Após a entrega da tradução juramentada, o Comune leva em média de 30 a 90 dias para processar a trascrizione e atualizar a certidão de casamento italiana.",
        },
        {
          question: "Posso traduzir divórcio com filhos menores?",
          answer: "Sim, mas a tradução deve ser extremamente detalhada quanto às cláusulas de guarda e visitação, para que a autoridade italiana verifique se os direitos do menor foram preservados conforme a lei.",
        },
        {
          question: "A tradução de divórcio é mais cara que uma certidão?",
          answer: "Sim, devido ao volume de texto e à complexidade da terminologia jurídica. O orçamento é feito por lauda traduzida.",
        },
      ]}
      relatedTitle="Material Relacionado"
      relatedLinks={[
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Documentos para casamento na Itália", href: "/traducao-documentos-casamento-italia" },
        { title: "Autoridades italianas — guia de referência", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
