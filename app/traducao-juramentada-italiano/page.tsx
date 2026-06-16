import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";
import { CNHBlock, DocumentCards, HowItWorks, MobileFloatingCTA } from "../components/conversion-blocks";

const pagePath = "/traducao-juramentada-italiano";

export const metadata: Metadata = createPageMetadata({
  // TAREFA 3 — reforça "juramentada português → italiano" no title.
  title: "Tradução juramentada português → italiano | uso na Itália",
  description:
    "Tradução juramentada ou asseverata de documentos brasileiros para italiano, com orientação para uso oficial perante órgãos italianos.",
  path: pagePath,
  languages: {
    "pt-BR": pagePath,
    "it-IT": "/traduzione-asseverata-portoghese-italiano",
  },
  ogTitle: "Tradução juramentada português → italiano para a Itália",
  ogDescription:
    "Tradução com fé pública português → italiano para processos oficiais: cidadania, casamento, estudo, trabalho e imigração.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Atendimento em português"
      title="Tradução juramentada italiano para documentos brasileiros na Itália"
      pagePath={pagePath}
      schemaType="Service"
      areaServed="Brasil e Itália"
      serviceType="Tradução juramentada português-italiano"
      description="Tradução juramentada português italiano para documentos brasileiros apresentados a autoridades italianas."
      intro="Sim. Em muitos casos, documentos brasileiros precisam de tradução para italiano para serem aceitos por órgãos italianos. Dependendo do uso e do órgão destinatário, também pode ser exigida Apostila de Haia e tradução asseverata. Envie uma foto ou PDF pelo WhatsApp para confirmar o formato, o prazo e o valor."
      heroCTA={{
        text: "Pedir orçamento pelo WhatsApp",
        message: "Olá, preciso de uma tradução juramentada português–italiano para uso na Itália. Quero saber valor, prazo e próximos passos.",
        subtext: "Atendimento em português · Tradução português → italiano · Orientação para uso na Itália",
      }}
      afterHero={
        <>
          <CNHBlock />
          <DocumentCards />
          <HowItWorks />
          <MobileFloatingCTA />
        </>
      }
      sections={[
        {
          title: "O que é tradução juramentada e por que ela é exigida",
          body: [
            "A tradução juramentada ou asseverata é usada quando um documento brasileiro precisa ser compreendido e apresentado formalmente na Itália. O formato necessário depende do procedimento e da autoridade destinatária.",
          ],
          subsections: [
            {
              title: "Fé pública e validade legal",
              body: [
                "Fé pública é a garantia de que a tradução é fiel e completa. No Brasil, é feita por tradutor concursado. Na Itália, o tradutor presta juramento no Tribunale para cada documento — processo chamado de asseverazione. Ambos os caminhos conferem ao documento o status necessário para uso oficial.",
              ],
            },
            {
              title: "Onde a tradução é obrigatória",
              body: [
                "Comune, Motorizzazione, Università, Questura e Tribunale podem exigir tradução formal conforme o documento e o procedimento. Confirme a lista e o formato diretamente com o órgão destinatário.",
              ],
            },
          ],
        },
        {
          title: "Diferenças entre Tradução Juramentada e Asseverata",
          body: [
            "Dependendo do seu caso e do órgão que receberá o documento, a tradução pode ser feita no Brasil ou diretamente na Itália.",
          ],
          subsections: [
            {
              title: "Tradução Juramentada (feita no Brasil)",
              body: [
                "Realizada por tradutor público no Brasil. Precisa ser apostilada após a assinatura do tradutor para ser reconhecida na Itália. É uma opção comum para quem ainda está organizando a pasta de documentos no Brasil.",
              ],
            },
            {
              title: "Traduzione Asseverata (feita na Itália)",
              body: [
                "O tradutor leva o documento ao órgão italiano competente e assina o termo de juramento. Esse formato confere fé pública à tradução na Itália, mas o órgão destinatário continua responsável por decidir se o dossiê atende ao procedimento.",
              ],
            },
          ],
          table: {
            headers: [
              "Característica",
              "Tradução no Brasil",
              "Asseverata na Itália",
              "Apostille de Haia",
            ],
            rows: [
              [
                "Quem faz",
                "Tradutor concursado (TPIC)",
                "Tradutor no Tribunale",
                "Tabelionato ou Procura",
              ],
              [
                "Onde é feita",
                "Brasil",
                "Itália",
                "País de origem do doc",
              ],
              [
                "Fé pública",
                "Brasileira (com apostila)",
                "Italiana (direta)",
                "Valida a assinatura",
              ],
              [
                "Aceitação",
                "Geral (pode haver restrição)",
                "Conforme o órgão destinatário",
                "Conforme o documento e a finalidade",
              ],
            ],
          },
        },
        {
          title: "Documentos brasileiros frequentes",
          body: [
            "Nossa equipe analisa cada documento para indicar o melhor caminho, evitando exigências (integrações) que atrasam seu processo.",
          ],
          subsections: [
            {
              title: "CNH — Carteira de Habilitação",
              body: [
                "Essencial para quem fixa residência na Itália e quer converter a carteira sem repetir os exames. A tradução deve seguir o padrão exigido pela Motorizzazione Civile.",
              ],
            },
            {
              title: "Certidões (Nascimento, Casamento, Óbito)",
              body: [
                "Para processos de cidadania, casamentos na Itália (Nulla Osta) ou registros consulares. Devem estar em inteiro teor e com apostila recente.",
              ],
            },
            {
              title: "Diplomas e Históricos Escolares",
              body: [
                "Necessários para a Dichiarazione di Valore ou reconhecimento direto de títulos para trabalho ou continuação de estudos na Itália.",
              ],
            },
            {
              title: "Antecedentes Criminais",
              body: [
                "Exigidos para pedidos de cidadania por residência (naturalização), casamento e alguns tipos de visto. Tem validade curta, por isso a tradução deve ser ágil.",
              ],
            },
          ],
        },
        {
          title: "Para qual órgão o documento se destina?",
          body: [
            "Entender o destino do documento é o primeiro passo para o orçamento correto.",
          ],
          subsections: [
            {
              title: "Comune e Stato Civile",
              body: [
                "Porta de entrada para cidadania, casamentos e registros de residência. O rigor varia entre cidades, por isso a orientação prévia é vital.",
              ],
            },
            {
              title: "Motorizzazione — Trânsito",
              body: [
                "Órgão que processa a conversão da CNH brasileira. Exige tradução técnica precisa de categorias e observações.",
              ],
            },
            {
              title: "Questura — Imigração",
              body: [
                "Onde se solicita o Permesso di Soggiorno. Documentos de vínculo familiar e renda brasileira precisam de tradução oficial.",
              ],
            },
          ],
        },
        {
          title: "Escolhendo o local da tradução",
          body: [
            "A decisão entre traduzir no Brasil ou na Itália depende do seu prazo e do órgão destinatário.",
            "**Tradução no Brasil:** Mais prática se você ainda não viajou. Exige apostilamento posterior da própria tradução.",
            "**Tradução na Itália:** Ideal para quem já está no país ou vai apresentar documentos em Comunes pequenos e rigorosos. O custo inclui a 'marca da bollo' (taxa administrativa italiana).",
          ],
        },
        {
          title: "Como funciona a asseverazione na Itália",
          body: [
            "O processo na Itália é rigoroso: o tradutor comparece ao Tribunale com o original apostilado, a tradução e as selos fiscais (marche da bollo). O conjunto é carimbado e registrado oficialmente, tornando-se um documento público italiano.",
          ],
        },
        {
          title: "Orçamento e atendimento",
          body: [
            "Você recebe um orçamento fechado antes de começar. Analisamos a legibilidade do seu documento e indicamos se há necessidade de solicitar uma nova via antes de traduzir, economizando tempo e dinheiro.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quanto tempo demora a tradução?",
          answer:
            "Documentos avulsos (CNH, uma certidão) costumam ficar prontos entre 24h e 72h. Pastas completas de cidadania dependem do volume, variando de 5 a 10 dias úteis.",

        },
        {
          question: "A tradução brasileira é aceita em qualquer lugar?",
          answer:
            "A maioria dos grandes Comunes aceita, desde que apostilada. No entanto, alguns órgãos e cidades menores exigem que a tradução seja asseverata (jurada) diretamente em um Tribunale na Itália.",
        },
        {
          question: "Preciso enviar o documento original pelo correio?",
          answer:
            "Para a análise e início da tradução, fotos nítidas ou PDF bastam. Para a asseverazione no Tribunale italiano, em alguns casos, o documento original físico é necessário para ser anexado à tradução.",
        },
        {
          question: "O que é a Marca da Bollo?",
          answer:
            "É um selo fiscal usado em muitos procedimentos de asseverazione. A quantidade e eventuais isenções dependem do documento e das regras do órgão competente.",
        },
        {
          question: "Vocês traduzem CNH para motoristas?",
          answer:
            "Sim. A tradução da CNH brasileira para a Itália é um dos nossos serviços mais frequentes, com foco total nas normas da Motorizzazione Civile para conversão de patente.",
        },
      ]}
      relatedTitle="Material relacionado"
      relatedLinks={[
        { title: "Como casar na Itália: guia completo", href: "/como-casar-na-italia-brasileiros" },
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Tradução juramentada de CNH para Itália", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Dichiarazione di Valore e tradução de diploma", href: "/dichiarazione-di-valore-traducao-diploma" },
        { title: "Documentos para permesso di soggiorno", href: "/documentos-traducao-permesso-di-soggiorno" },
      ]}
    />
  );
}
