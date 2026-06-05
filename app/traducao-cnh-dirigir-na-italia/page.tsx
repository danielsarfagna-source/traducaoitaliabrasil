import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-cnh-dirigir-na-italia";

export const metadata: Metadata = {
  title: "Tradução Juramentada de CNH Brasileira na Itália",
  description:
    "Tradução juramentada da CNH brasileira para uso na Itália, Motorizzazione, direção e conversão quando aceita pelo órgão. Atendimento em português.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada de CNH Brasileira na Itália",
    description:
      "Envie frente e verso da CNH pelo WhatsApp e receba orientação sobre tradução juramentada, prazo, valor e uso perante órgãos italianos.",
    url: pagePath,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="CNH brasileira na Itália"
      title="Tradução juramentada da CNH brasileira para uso na Itália"
      pagePath={pagePath}
      schemaType="Service"
      description="Serviço de tradução juramentada da CNH brasileira para uso na Itália, com orientação em português sobre finalidade, legibilidade, validade e exigências do órgão destinatário."
      intro="A CNH brasileira pode precisar de tradução juramentada ou asseverada quando será apresentada na Itália para dirigir, alugar veículo, instruir pedido junto à Motorizzazione ou compor práticas de conversão para patente italiana. A exigência varia conforme o caso e o órgão destinatário."
      sections={[
        {
          title: "Quando a tradução da CNH pode ser necessária",
          body: [
            "A tradução juramentada da CNH é usada quando uma autoridade, locadora, Motorizzazione, Comune, Tribunal ou outro órgão precisa compreender formalmente os dados da carteira brasileira.",
            "Ela não substitui automaticamente a conversão da habilitação para patente italiana. Em práticas de conversão, a tradução costuma ser apenas uma das etapas do conjunto documental solicitado pelo órgão competente.",
          ],
        },
        {
          title: "O que conferimos antes de traduzir",
          body: [
            "Antes de iniciar, analisamos se a imagem ou PDF permite uma tradução segura. Frente e verso precisam estar legíveis, sem corte, reflexo ou dados escondidos.",
            "Também conferimos categoria, validade, nome completo, filiação, número de registro, data de emissão e eventuais observações relevantes. Se a CNH digital for enviada, orientamos sobre a necessidade de confirmar se o órgão aceita esse formato para a finalidade pretendida.",
          ],
          list: [
            "frente e verso da CNH",
            "legibilidade dos dados",
            "categoria e validade",
            "dados pessoais",
            "finalidade de uso na Itália",
            "órgão destinatário informado pelo cliente",
          ],
        },
        {
          title: "Uso para dirigir e uso para conversão",
          body: [
            "Para dirigir na Itália com documento brasileiro, as regras podem variar conforme status de turista, residência, prazo de permanência, PID e interpretação da autoridade no momento da fiscalização.",
            "Para conversão da CNH brasileira em patente italiana, a Motorizzazione pode exigir documentos específicos além da tradução. Por isso, evitamos prometer aprovação: orientamos a etapa de tradução e alertamos quando a exigência deve ser confirmada diretamente no órgão.",
          ],
        },
        {
          title: "Atendimento em português pelo WhatsApp",
          body: [
            "Você envia foto ou PDF da CNH, informa onde pretende usar o documento e recebe orientação inicial sobre tradução, prazo e valor.",
            "Se houver risco de documento ilegível, dado cortado, validade expirada ou exigência específica do órgão, avisamos antes de iniciar.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Preciso traduzir a CNH brasileira para dirigir na Itália?",
          answer:
            "Pode ser necessário apresentar a CNH acompanhada de PID ou tradução, conforme o caso. A exigência depende do status da pessoa na Itália, do uso pretendido e da autoridade que avaliará o documento.",
        },
        {
          question: "A tradução juramentada substitui a conversão da CNH?",
          answer:
            "Não. A tradução ajuda a apresentar o conteúdo da CNH em italiano, mas a conversão para patente italiana é um procedimento próprio da Motorizzazione.",
        },
        {
          question: "Posso usar CNH digital para fazer a tradução?",
          answer:
            "Podemos analisar a CNH digital para orçamento, mas a aceitação do documento digital pelo órgão destinatário deve ser confirmada caso a caso.",
        },
        {
          question: "A tradução serve para a Motorizzazione?",
          answer:
            "A tradução pode ser usada em práticas junto à Motorizzazione quando esse órgão solicita ou aceita tradução oficial. A lista final de documentos deve ser confirmada na unidade responsável.",
        },
        {
          question: "Quanto tempo demora?",
          answer:
            "Depende da legibilidade, formato e urgência. Documentos simples costumam ser analisados rapidamente e o prazo é informado antes do início.",
        },
        {
          question: "Precisa apostilar a CNH?",
          answer:
            "Pode depender do procedimento e do local onde a tradução será usada. Orientamos a confirmar a exigência antes de pagar por etapas desnecessárias.",
        },
        {
          question: "PID substitui tradução juramentada?",
          answer:
            "Em alguns usos, a PID pode ser suficiente; em outros, o órgão pode pedir tradução oficial. O ideal é verificar a finalidade concreta antes de decidir.",
        },
        {
          question: "Posso enviar foto da CNH pelo WhatsApp?",
          answer:
            "Sim. Envie foto nítida da frente e do verso ou PDF. Com isso, avaliamos legibilidade, prazo e valor.",
        },
      ]}
      relatedLinks={[
        { title: "Preço da tradução juramentada português italiano", href: "/preco-traducao-juramentada-portugues-italiano" },
        { title: "Tradução juramentada português para italiano", href: "/traducao-juramentada-italiano" },
        { title: "Tradução de documentos para permesso di soggiorno", href: "/documentos-traducao-permesso-di-soggiorno" },
        { title: "Tradução juramentada em Roma", href: "/traducao-juramentada-roma" },
      ]}
    />
  );
}
