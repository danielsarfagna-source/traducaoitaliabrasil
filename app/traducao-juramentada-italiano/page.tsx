import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Tradução Juramentada Português Italiano na Itália",
  description:
    "Tradução juramentada português italiano para documentos brasileiros usados na Itália. CNH, certidões, cidadania, diploma, permesso e apostila.",
  alternates: {
    canonical: "/traducao-juramentada-italiano",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Tradução juramentada"
      title="Tradução juramentada português italiano na Itália"
      pagePath="/traducao-juramentada-italiano"
      schemaType="Service"
      description="Serviço de tradução juramentada português italiano para documentos brasileiros usados perante órgãos italianos."
      intro="Tradução juramentada português italiano para brasileiros que precisam apresentar documentos na Itália: cidadania, CNH, certidões, diploma, permesso, casamento, estudo, trabalho, apostila e procedimentos oficiais."
      sections={[
        {
          title: "Quando precisa",
          body: [
            "A tradução juramentada é necessária quando um documento precisa ser apresentado perante uma autoridade pública, órgão administrativo, universidade, comune, consulado, tribunal ou entidade que exige uma tradução com valor formal.",
            "Para brasileiros na Itália, isso aparece com frequência em processos de cidadania italiana, permesso di soggiorno, casamento, divórcio, estudo, reconhecimento de diploma, registros civis e apresentação de certidões brasileiras.",
            "Antes de iniciar a tradução, verificamos o tipo de documento, a finalidade de uso e o órgão destinatário informado pelo cliente. Isso reduz o risco de refazer documentos por erro de etapa, apostila ausente ou exigência específica.",
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
            "CNH brasileira",
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
            "documentos para permesso di soggiorno",
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
            "Em muitos procedimentos, documentos brasileiros apresentados na Itália precisam estar traduzidos oficialmente para o italiano. A lista depende da via e do órgão destinatário.",
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
          question: "Vocês traduzem CNH brasileira para uso na Itália?",
          answer:
            "Sim. A CNH pode ser analisada para tradução juramentada ou asseverada, com atenção à frente, verso, categoria, validade e finalidade de uso.",
        },
        {
          question: "Vocês atendem em Roma e outras cidades?",
          answer:
            "Sim. O atendimento inicial é feito em português pelo WhatsApp e pode orientar brasileiros em Roma, Milão, Turim, Bolonha e outras cidades italianas.",
        },
        {
          question: "Quanto tempo demora?",
          answer:
            "O prazo depende do volume e da complexidade, mas documentos comuns podem ser tratados com rapidez, muitas vezes em 24 a 48 horas após a análise.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de CNH brasileira na Itália", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Tradução juramentada de diploma brasileiro", href: "/dichiarazione-di-valore-traducao-diploma" },
        { title: "Documentos para permesso di soggiorno", href: "/documentos-traducao-permesso-di-soggiorno" },
        { title: "Preço da tradução juramentada português italiano", href: "/preco-traducao-juramentada-portugues-italiano" },
        { title: "Tradução juramentada em Roma", href: "/traducao-juramentada-roma" },
        { title: "Traduzione giurata portoghese italiano a Roma", href: "/traduzione-giurata-portoghese-italiano-roma" },
        { title: "Traduzione asseverata portoghese italiano", href: "/traduzione-asseverata-portoghese-italiano" },
        { title: "Tradução juramentada de documentos brasileiros na Itália", href: "/traducao-documentos-brasileiros-na-italia" }
      ]}
    />
  );
}
