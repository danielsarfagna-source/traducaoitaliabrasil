import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Tradução Juramentada de Certidão de Nascimento e Casamento",
  description:
    "Quando você precisa de tradução juramentada de certidão de nascimento, casamento ou óbito para a Itália, como funciona e os erros que levam à recusa.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Certidões Civis"
      title="Tradução juramentada de certidão de nascimento, casamento e óbito"
      intro="A certidão é o documento mais pedido em quase todo processo entre Brasil e Itália — cidadania, casamento, permesso, registro de filho. E é também o que mais volta com exigência quando a tradução é feita de qualquer jeito. Este guia mostra quando você precisa, como funciona e o que faz uma certidão traduzida ser aceita de primeira."
      sections={[
        {
          title: "Quando você vai precisar",
          body: [
            "A tradução juramentada de certidões aparece praticamente sempre que um documento civil brasileiro precisa produzir efeito na Itália:",
          ],
          list: [
            "Cidadania italiana (via administrativa ou judicial): certidões de nascimento, casamento e óbito de toda a linha ascendente.",
            "Casamento na Itália: certidão de nascimento atualizada do nubente brasileiro, entre outros.",
            "Permesso di soggiorno e reagrupamento familiar: certidões que comprovam vínculo familiar.",
            "Registro de nascimento/casamento junto ao consulado ou comune.",
          ],
        },
        {
          title: "Requisitos básicos",
          body: [
            "Na grande maioria dos casos, a certidão precisa estar atualizada, apostilada (Apostila de Haia) e com tradução juramentada para o italiano.",
          ],
        },
        {
          title: "Por que tantas certidões traduzidas são recusadas",
          body: [
            "Não é frescura do funcionário — é padrão. Os motivos recorrentes de recusa ou exigência:",
          ],
          list: [
            "Inconsistência de nomes e datas entre certidões da mesma família (grafias diferentes do mesmo sobrenome, datas que não batem).",
            "Certidão antiga quando o órgão exige inteiro teor recente.",
            "Falta de apostila no documento e/ou na própria tradução, conforme o caso.",
            "Tradução sem fé pública ou fora do padrão aceito pelo órgão de destino.",
            "Termos jurídicos vertidos ao pé da letra, gerando ambiguidade no italiano.",
          ],
        },
        {
          title: "O que fazemos diferente",
          body: [
            "Tratamos o conjunto, não a folha solta. Antes de traduzir, conferimos a coerência entre todas as suas certidões (nomes, datas, filiação) e a finalidade — porque uma tradução tecnicamente perfeita de um documento incoerente ainda é um problema. Entregamos no padrão exigido, em português do começo ao fim, com prazo e valor fechados antes de começar.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Toda certidão para a Itália precisa de tradução juramentada?",
          answer: "Na grande maioria dos casos, sim — e normalmente também de apostila.",
        },
        {
          question: "Preciso apostilar antes ou depois de traduzir?",
          answer: "Depende do órgão e do tipo de documento; orientamos a ordem correta antes de você gastar.",
        },
        {
          question: "Certidão antiga serve?",
          answer: "Muitas vezes não — vários órgãos exigem via atualizada/inteiro teor. Confirmamos para o seu caso.",
        },
        {
          question: "Vocês traduzem certidão de óbito também?",
          answer: "Sim — nascimento, casamento e óbito, que são as três mais pedidas em processos de cidadania.",
        },
        {
          question: "Quanto tempo leva?",
          answer: "Depende do volume; você recebe o prazo fechado junto com o orçamento.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de certidão de nascimento para Itália", href: "/traducao-juramentada-certidao-nascimento-italia" },
        { title: "Tradução juramentada de certidão de casamento e óbito para Itália", href: "/traducao-juramentada-certidao-casamento-obito-italia" },
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" }
      ]}
    />
  );
}
