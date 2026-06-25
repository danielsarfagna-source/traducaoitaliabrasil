import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-antecedentes-criminais-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada de antecedentes criminais para a Itália | PF e Casellário",
  description:
    "Tradução juramentada de antecedentes criminais brasileiros (Polícia Federal) para cidadania, casamento e permesso. Validade de 90 dias e rito de asseverazione.",
  path: pagePath,
  ogTitle: "Tradução de antecedentes criminais brasileiros para uso na Itália",
  ogDescription: "Certidão da PF traduzida para processos na Questura, Prefettura e Tribunale. Orientação sobre prazo e Apostille.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Segurança e Vistos"
      title="Tradução juramentada de antecedentes criminais brasileiros para a Itália"
      schemaType="Service"
      areaServed="Itália"
      serviceType="Tradução juramentada de certidões de antecedentes criminais"
      description="Serviço técnico de tradução juramentada de antecedentes criminais da Polícia Federal para processos oficiais na Itália."
      intro="Sim. Antecedentes criminais brasileiros podem precisar de tradução para italiano em pedidos de cidadania, residência ou outros procedimentos. A autoridade destinatária define qual certidão deve ser apresentada, sua validade, a necessidade de apostila e o formato da tradução."
      sections={[
        {
          title: "Quando a Certidão de Antecedentes é exigida pelas autoridades italianas",
          body: [
            "O governo italiano exige a prova de idoneidade criminal brasileira em diversos procedimentos de imigração e estado civil. O documento traduzido é o elo que permite à autoridade conferir a ausência de óbices legais ao pedido do cidadão.",
          ],
          subsections: [
            {
              title: "Cidadania Italiana por Casamento (Naturalização)",
              body: [
                "Regulada pela Lei 91/1992, a naturalização exige antecedentes criminais de todos os países onde o requerente residiu após os 14 anos. A certidão brasileira deve ser de Inteiro Teor (quando houver histórico) ou a certidão negativa padrão da Polícia Federal. É apresentada via portal ALI do Ministero dell'Interno e conferida pela Prefettura local.",
              ],
            },
            {
              title: "Permesso di Soggiorno UE para Longos Residentes",
              body: [
                "Para brasileiros que vivem na Itália há mais de 5 anos e solicitam o antigo 'visto permanente' (Carta di Soggiorno), a Questura exige antecedentes criminais brasileiros traduzidos e apostilados para instruir o dossiê de segurança pública.",
              ],
            },
            {
              title: "Celebração de Casamento no Comune",
              body: [
                "Embora o Nulla Osta al Matrimonio seja o documento principal, alguns Comunes exigem antecedentes criminais traduzidos para brasileiros que não residem permanentemente na Itália e desejam casar em solo italiano.",
              ],
            },
          ],
        },
        {
          title: "A Certidão Federal vs. Estadual",
          body: [
            "A autoridade destinatária pode solicitar a certidão da Polícia Federal e, em alguns casos, certidões estaduais ou judiciais adicionais. Confirme a lista específica antes da emissão. A certidão federal pode ser obtida no portal oficial: https://servicos.dpf.gov.br.",
          ],
        },
        {
          title: "Validade de 90 dias: O rito de urgência",
          body: [
            "Alguns procedimentos aplicam prazo administrativo curto à certidão. Antes de emitir, confirme a validade aceita e organize apostila, envio e tradução para evitar que o documento expire durante o protocolo.",
          ],
        },
        {
          title: "A Apostila de Haia e a Asseverazione",
          body: [
            "A certidão da PF digital só tem validade na Itália com a Apostila de Haia física colada no verso (após impressão e reconhecimento de assinatura) ou eletrônica com QR Code. Após o apostilamento no Brasil, realizamos a tradução asseverata no Tribunale Ordinario di Roma (Viale Giulio Cesare 52) ou perante o Giudice di Pace, conferindo fé pública à versão italiana.",
          ],
        },
        {
          title: "Antecedentes Criminais Italianos (Casellario Giudiziale)",
          body: [
            "Se o brasileiro já reside na Itália e precisa do antecedente criminal italiano para uso no Brasil ou em outro país, o documento é o 'Certificato del Casellario Giudiziale', emitido pela Procura della Repubblica (em Roma, situada na Piazzale Clodio 1). Realizamos o caminho inverso: tradução juramentada do italiano para o português e o respectivo apostilamento na Procura.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Posso traduzir o antecedente criminal online?",
          answer: "O documento é emitido online, mas para a tradução juramentada asseverata na Itália, o tradutor necessita do documento físico original apostilado em mãos para unir ao juramento judicial.",
        },
        {
          question: "Qual o prazo de entrega da tradução?",
          answer: "Sendo um documento padrão de uma lauda, a tradução juramentada é finalizada em 24 a 48 horas após o recebimento. O prazo de asseverazione no Tribunale depende do agendamento semanal.",
        },
        {
          question: "Quanto custa a tradução de antecedentes?",
          answer: "O valor é fixo por documento padrão, acrescido da marca da bollo administrativa exigida pelo Estado italiano. Envie a foto pelo WhatsApp para orçamento instantâneo.",
        },
        {
          question: "A certidão da Polícia Federal precisa de reconhecimento de firma?",
          answer: "Sim. Para apostilar, o cartório brasileiro exige que a assinatura do funcionário da PF seja validada ou que o documento digital tenha sua autenticidade conferida via site antes da emissão da Apostille.",
        },
      ]}
      relatedTitle="Material de Apoio"
      relatedLinks={[
        { title: "Documentos para cidadania por casamento", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Documentos para permesso di soggiorno", href: "/documentos-traducao-permesso-di-soggiorno" },
        { title: "Autoridades italianas em Roma", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário de termos técnicos", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
