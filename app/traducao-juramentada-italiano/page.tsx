import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Tradução juramentada português para italiano: quando precisa e como fazer na Itália",
  description:
    "Entenda quando a tradução juramentada português para italiano é necessária, quais documentos costumam ser traduzidos e como preparar documentos para uso oficial na Itália.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Tradução juramentada"
      title="Tradução juramentada português para italiano: quando precisa e como fazer na Itália"
      intro="A tradução juramentada dá uso oficial a documentos estrangeiros quando eles serão apresentados perante órgãos públicos, universidades, tribunais, comunes italianos ou autoridades de imigração."
      sections={[
        {
          title: "Quando precisa",
          body: [
            "A tradução juramentada é necessária quando um documento precisa ser apresentado perante uma autoridade pública, órgão administrativo, universidade, comune, consulado, tribunal ou entidade que exige uma tradução com valor formal.",
            "Para brasileiros na Itália, isso aparece com frequência em processos de cidadania italiana, permesso di soggiorno, casamento, divórcio, estudo, reconhecimento de diploma, registros civis e apresentação de certidões brasileiras.",
          ],
        },
        {
          title: "Tradução simples ou tradução juramentada?",
          body: [
            "A tradução simples serve para compreensão informal do conteúdo. Ela pode ser útil quando a pessoa quer apenas entender um documento ou compartilhar uma informação.",
            "Já a tradução juramentada é indicada quando o documento precisa produzir efeitos perante uma autoridade ou ser aceito em um procedimento oficial.",
          ],
        },
        {
          title: "Quais documentos costumam precisar de tradução?",
          body: ["Os documentos mais comuns são:"],
          list: [
            "certidão de nascimento",
            "certidão de casamento",
            "certidão de óbito",
            "certidão de divórcio",
            "diplomas",
            "históricos escolares",
            "certificados",
            "procurações",
            "sentenças",
            "contratos",
            "documentos pessoais",
            "documentos para cidadania italiana",
          ],
        },
        {
          title: "Tradução e apostilamento são a mesma coisa?",
          body: [
            "Não. A tradução serve para converter o conteúdo do documento para outro idioma. A Apostila de Haia serve para certificar a origem formal de um documento para uso internacional.",
            "Em muitos casos, os dois procedimentos podem ser necessários, mas a ordem correta depende do tipo de documento e do órgão que irá recebê-lo.",
          ],
        },
        {
          title: "Como funciona o atendimento?",
          body: [
            "Você envia uma foto ou PDF pelo WhatsApp, informa onde pretende usar o documento e recebe orientação sobre o tipo de tradução, prazo e eventual necessidade de apostilamento.",
            "Precisa traduzir um documento do português para o italiano? Envie seu documento pelo WhatsApp e receba uma orientação inicial.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Tradução juramentada é obrigatória para cidadania italiana?",
          answer:
            "Em muitos procedimentos, documentos brasileiros apresentados na Itália precisam estar traduzidos oficialmente para o italiano.",
        },
        {
          question: "Tradução simples serve para uso oficial?",
          answer:
            "Normalmente não. Para uso perante autoridade pública, costuma ser exigida tradução com valor formal.",
        },
        {
          question: "Preciso apostilar antes ou depois?",
          answer:
            "Depende do documento e do país onde ele será utilizado. O ideal é confirmar antes de iniciar.",
        },
        {
          question: "Quanto tempo demora?",
          answer:
            "O prazo depende do volume e da complexidade, mas documentos comuns podem ser tratados com rapidez, muitas vezes em 24 a 48 horas após a análise.",
        },
      ]}
      relatedLinks={[
        { title: "Traduzione giurata portoghese italiano a Roma", href: "/traduzione-giurata-portoghese-italiano-roma" },
        { title: "Traduzione asseverata portoghese italiano", href: "/traduzione-asseverata-portoghese-italiano" },
        { title: "Tradução juramentada de documentos brasileiros na Itália", href: "/traducao-documentos-brasileiros-na-italia" }
      ]}
    />
  );
}
