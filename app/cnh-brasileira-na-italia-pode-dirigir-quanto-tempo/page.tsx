import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/cnh-brasileira-na-italia-pode-dirigir-quanto-tempo";

export const metadata: Metadata = {
  title: "CNH Brasileira na Itália: Por Quanto Tempo Posso Dirigir?",
  description:
    "Entenda por quanto tempo a CNH brasileira pode ser usada na Itália e quando PID, tradução juramentada ou conversão podem ser exigidas.",
  alternates: {
    canonical: pagePath,
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="CNH na Itália"
      title="CNH brasileira na Itália: por quanto tempo posso dirigir?"
      pagePath={pagePath}
      schemaType="Article"
      description="Artigo informativo sobre uso da CNH brasileira na Itália, prazos e documentos de apoio."
      intro="O tempo de uso da CNH brasileira na Itália depende do seu status: turista, estudante, residente ou pessoa em processo de mudança. A regra prática não deve ser resumida sem olhar o caso concreto."
      sections={[
        {
          title: "Turista, residente e finalidade de uso",
          body: [
            "Quem está de passagem costuma ter situação diferente de quem registrou residência na Itália. A partir da residência, podem surgir prazos e exigências relacionadas à conversão da habilitação.",
            "Além da CNH original válida, podem ser solicitadas PID ou tradução oficial para que a autoridade compreenda o documento brasileiro.",
          ],
        },
        {
          title: "Quando procurar tradução da CNH",
          body: [
            "A tradução juramentada pode ser útil quando você precisa apresentar a CNH brasileira a uma autoridade, locadora, Motorizzazione ou outro destinatário italiano.",
            "Ela não elimina a necessidade de confirmar regras de direção, residência e conversão.",
          ],
        },
        {
          title: "Como evitar erro de etapa",
          body: [
            "Antes de traduzir, informe se você é turista, residente, estudante ou está preparando conversão. Isso ajuda a orientar se a tradução faz sentido para o uso pretendido.",
          ],
        },
      ]}
      faqs={[
        { question: "A CNH brasileira sozinha basta?", answer: "Pode não bastar. Em muitos casos é recomendado ou exigido portar PID ou tradução oficial." },
        { question: "Residente pode dirigir para sempre com CNH brasileira?", answer: "Não. Residentes devem verificar regras de prazo e conversão junto aos órgãos competentes." },
        { question: "A tradução dá direito de dirigir?", answer: "Não. Ela traduz o documento; o direito de dirigir depende das regras aplicáveis ao seu status." },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada da CNH brasileira", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Tradução CNH ou PID na Itália", href: "/traducao-cnh-ou-pid-italia" },
      ]}
    />
  );
}
