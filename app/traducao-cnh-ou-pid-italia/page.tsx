import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-cnh-ou-pid-italia";

export const metadata: Metadata = {
  title: "Tradução da CNH ou PID na Itália: Qual Usar?",
  description:
    "Compare tradução juramentada da CNH e PID para uso na Itália. Entenda quando cada documento pode ser solicitado e o que confirmar antes.",
  alternates: {
    canonical: pagePath,
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="CNH ou PID"
      title="Tradução juramentada da CNH ou PID na Itália: qual usar?"
      pagePath={pagePath}
      schemaType="Article"
      description="Artigo comparativo sobre tradução juramentada da CNH brasileira e Permissão Internacional para Dirigir na Itália."
      intro="PID e tradução juramentada não são a mesma coisa. As duas podem ajudar a apresentar a CNH brasileira na Itália, mas a escolha depende do uso, do prazo, do órgão e da situação da pessoa."
      sections={[
        {
          title: "O que é a PID",
          body: [
            "A PID é a Permissão Internacional para Dirigir emitida no Brasil. Ela funciona como documento de apoio à CNH brasileira em viagens internacionais, dentro de suas regras próprias de validade.",
          ],
        },
        {
          title: "O que é a tradução juramentada da CNH",
          body: [
            "A tradução juramentada converte os dados da CNH para o italiano com valor formal. Pode ser solicitada por autoridades, locadoras, Motorizzazione ou procedimentos específicos.",
          ],
        },
        {
          title: "Como decidir",
          body: [
            "Se o objetivo é turismo, direção temporária, apresentação administrativa ou conversão, a exigência pode mudar. O melhor caminho é confirmar a finalidade e o destinatário antes de pagar por qualquer etapa.",
          ],
        },
      ]}
      faqs={[
        { question: "PID substitui tradução juramentada?", answer: "Em alguns usos pode bastar; em outros, o órgão pode pedir tradução oficial. Depende da finalidade." },
        { question: "Tradução substitui PID?", answer: "Não necessariamente. São documentos diferentes e podem ter usos distintos." },
        { question: "Qual é melhor para Motorizzazione?", answer: "Depende da prática local e da lista de documentos solicitada pela unidade responsável." },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada da CNH brasileira", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "CNH brasileira na Itália: por quanto tempo posso dirigir?", href: "/cnh-brasileira-na-italia-pode-dirigir-quanto-tempo" },
      ]}
    />
  );
}
