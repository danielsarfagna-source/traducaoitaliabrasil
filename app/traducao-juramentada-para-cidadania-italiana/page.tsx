import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-juramentada-para-cidadania-italiana";

export const metadata: Metadata = {
  title: "Tradução Juramentada para Cidadania Italiana",
  description:
    "Tradução juramentada de certidões brasileiras para cidadania italiana. Nascimento, casamento, óbito, inteiro teor, apostila e orientação em português.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada para Cidadania Italiana",
    description:
      "Prepare certidões brasileiras para cidadania italiana com tradução juramentada, orientação sobre apostila e conferência de divergências.",
    url: pagePath,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Cidadania italiana"
      title="Tradução juramentada para cidadania italiana"
      pagePath={pagePath}
      schemaType="Service"
      description="Serviço de tradução juramentada de documentos brasileiros para cidadania italiana, com orientação sobre certidões, apostila, divergências e finalidade de uso."
      intro="A cidadania italiana exige uma pasta documental coerente. A tradução juramentada não corrige problemas do documento original, mas precisa reproduzir com precisão nomes, datas, averbações e informações de cada certidão brasileira."
      sections={[
        {
          title: "Documentos que costumam entrar na pasta",
          body: [
            "Os documentos variam conforme a linha familiar e a via escolhida, mas as certidões civis são a base mais comum: nascimento, casamento e óbito dos ascendentes e do requerente.",
            "Em muitos casos, o órgão destinatário solicita certidão de inteiro teor. Ela traz averbações, retificações, filiação e detalhes que não aparecem em versões simplificadas.",
          ],
          list: [
            "certidão de nascimento",
            "certidão de casamento",
            "certidão de óbito",
            "certidão em inteiro teor",
            "certidões com averbações",
            "documentos complementares exigidos pelo órgão",
          ],
        },
        {
          title: "Divergências de nomes, datas e grafias",
          body: [
            "Um ponto sensível em cidadania italiana é a coerência entre documentos. Sobrenomes italianos podem aparecer com grafias diferentes, datas podem divergir e nomes podem ter sido aportuguesados ao longo das gerações.",
            "A tradução deve refletir o documento como ele está. Quando há divergência no original, o caminho pode envolver conferência documental ou retificação, não uma correção informal dentro da tradução.",
          ],
        },
        {
          title: "Apostila e tradução não são a mesma etapa",
          body: [
            "A Apostila de Haia certifica a origem formal do documento. A tradução juramentada converte o conteúdo para o italiano com valor formal.",
            "A ordem correta pode variar conforme onde a tradução será feita e onde o documento será apresentado. Por isso, antes de iniciar, é importante saber se o destino é Comune, Tribunal, consulado, advogado ou outro órgão.",
          ],
        },
        {
          title: "Como funciona a orientação",
          body: [
            "Você envia as certidões pelo WhatsApp e informa a finalidade. Antes de iniciar a tradução, verificamos o tipo de documento, legibilidade, possível necessidade de inteiro teor, apostila e coerência básica do conjunto.",
            "Isso reduz o risco de refazer documentos por erro de etapa, apostila ausente ou exigência específica do órgão destinatário.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quais certidões precisam de tradução para cidadania italiana?",
          answer:
            "Em geral, certidões de nascimento, casamento e óbito da linha familiar envolvida. A lista final depende do tipo de processo e do órgão destinatário.",
        },
        {
          question: "Certidão de inteiro teor é obrigatória?",
          answer:
            "Com frequência é solicitada, especialmente quando há cidadania, casamento, retificações ou necessidade de verificar averbações. Vale confirmar antes de emitir e traduzir.",
        },
        {
          question: "A tradução resolve divergência de nome?",
          answer:
            "Não. A tradução deve ser fiel ao documento original. Divergências relevantes podem exigir análise documental ou retificação.",
        },
        {
          question: "Preciso apostilar antes de traduzir?",
          answer:
            "Depende do procedimento e do local de uso. A ordem entre apostila, tradução e eventual apostila da tradução deve ser definida antes de iniciar.",
        },
        {
          question: "Vocês prometem aceitação do Comune ou Tribunal?",
          answer:
            "Não prometemos decisão de órgão público. Entregamos tradução conforme o documento e orientamos sobre etapas, mas cada autoridade pode aplicar exigências próprias.",
        },
        {
          question: "Posso enviar foto das certidões pelo WhatsApp?",
          answer:
            "Sim. Para orçamento e orientação inicial, foto ou PDF legível costuma ser suficiente.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Apostila de Haia e tradução juramentada", href: "/apostila-haia-traducao-juramentada-italia" },
        { title: "Reforma da cidadania italiana e documentos", href: "/reforma-cidadania-italiana-documentos" },
        { title: "Preço da tradução juramentada", href: "/preco-traducao-juramentada-portugues-italiano" },
        { title: "Tradução juramentada em Roma", href: "/traducao-juramentada-roma" },
      ]}
    />
  );
}
