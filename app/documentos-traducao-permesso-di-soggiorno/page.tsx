import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Documentos e Tradução Juramentada para o Permesso di Soggiorno",
  description:
    "Quais documentos brasileiros precisam de tradução juramentada para pedir ou renovar o permesso di soggiorno na Itália e como evitar atrasos no processo.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Permesso di Soggiorno"
      title="Documentos e traduções para o permesso di soggiorno na Itália"
      intro="O permesso di soggiorno é o documento que sustenta a vida legal do brasileiro não europeu na Itália — e ele volta a cada renovação. Boa parte dos pedidos atrasa não pela imigração em si, mas por documento brasileiro entregue sem a tradução juramentada correta. Saber disso antes economiza meses."
      sections={[
        {
          title: "O que é e por que a tradução importa",
          body: [
            "O permesso di soggiorno é a autorização de permanência na Itália para quem não é cidadão da União Europeia. Ele tem motivos diferentes — trabalho, estudo, família, espera de cidadania, entre outros — e cada motivo pede um conjunto de documentos. Quando esse conjunto inclui documento brasileiro (certidões, comprovações de vínculo, antecedentes), em regra ele precisa chegar traduzido para o italiano por tradutor juramentado, muitas vezes apostilado.",
            "A imigração italiana trabalha com prazos e exigências formais. Um documento brasileiro sem tradução adequada não é 'resolvido na hora': ele gera exigência, e exigência significa novo prazo, nova ida ao balcão e, às vezes, risco para a regularidade da permanência.",
          ],
        },
        {
          title: "Onde a tradução costuma ser exigida",
          body: [
            "Sem esgotar as hipóteses (o motivo do permesso define a lista), os casos mais comuns que envolvem documento brasileiro traduzido:",
          ],
          list: [
            "Reagrupamento/coesão familiar: certidões de nascimento e casamento que comprovam o vínculo.",
            "Permesso por motivos familiares: documentos de filiação e estado civil.",
            "Espera de cidadania: certidões da linha familiar.",
            "Antecedentes e documentos pessoais, conforme o caso e a questura.",
          ],
        },
        {
          title: "A regra de ouro",
          body: [
            "Documento que comprova fato civil ou jurídico brasileiro tende a precisar de tradução juramentada e, frequentemente, apostila.",
          ],
        },
        {
          title: "O erro que mais custa tempo",
          body: [
            "É quase sempre o mesmo: a pessoa monta a pasta do permesso, vai ao balcão e descobre ali que a certidão precisava estar traduzida e apostilada — e volta para casa para recomeçar. Resolver isso antes, com a tradução já no padrão, é a diferença entre um processo limpo e um que se arrasta por renovações.",
          ],
        },
        {
          title: "Como ajudamos",
          body: [
            "Fazemos a tradução juramentada dos seus documentos brasileiros no padrão que a questura espera, com orientação em português sobre o que precisa ou não ser traduzido e apostilado para o seu tipo de permesso — antes de você gastar com página desnecessária. Envia pelo WhatsApp, recebe prazo e valor fechados, recebe pronto.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Todo documento do permesso precisa de tradução juramentada?",
          answer: "Não todos — depende do motivo do permesso. Os documentos civis brasileiros, em regra, sim.",
        },
        {
          question: "Preciso apostilar também?",
          answer: "Com frequência sim, conforme o documento. Orientamos caso a caso.",
        },
        {
          question: "Serve para a primeira emissão e para a renovação?",
          answer: "Sim, a lógica de documento traduzido vale nos dois momentos.",
        },
        {
          question: "Quanto tempo leva a tradução?",
          answer: "Depende do volume; o prazo vem fechado junto do orçamento.",
        },
        {
          question: "Vocês dizem o que eu preciso traduzir?",
          answer: "Sim — orientamos antes para você não pagar por tradução que não seria exigida.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução de documentos brasileiros para permesso di soggiorno", href: "/traducao-documentos-permesso-di-soggiorno" },
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" }
      ]}
    />
  );
}
