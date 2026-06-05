import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/dichiarazione-di-valore-traducao-diploma";

export const metadata: Metadata = {
  title: "Tradução Juramentada de Diploma Brasileiro para Itália",
  description:
    "Diploma, histórico escolar, ementas, apostila, CIMEA e Dichiarazione di Valore. Entenda a tradução de documentos acadêmicos para estudar na Itália.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada de Diploma Brasileiro para Itália",
    description:
      "Prepare diploma e histórico brasileiro para universidade, CIMEA ou Dichiarazione di Valore na Itália sem prometer reconhecimento automático.",
    url: pagePath,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Diploma e estudo"
      title="Tradução juramentada de diploma brasileiro para Itália"
      pagePath={pagePath}
      schemaType="Service"
      description="Serviço de tradução juramentada de diploma, histórico escolar e documentos acadêmicos brasileiros para uso na Itália."
      intro="Diploma brasileiro, histórico escolar e ementas podem precisar de tradução juramentada para matrícula, reconhecimento acadêmico, CIMEA, Dichiarazione di Valore ou processos profissionais na Itália. A tradução é uma etapa importante, mas não garante reconhecimento automático do título."
      sections={[
        {
          title: "Quais documentos acadêmicos podem precisar de tradução",
          body: [
            "A lista depende da universidade, consulado, CIMEA ou órgão profissional. O ponto de partida costuma ser diploma e histórico escolar; ementas ou conteúdo programático podem ser exigidos quando há análise de créditos ou reconhecimento profissional.",
          ],
          list: [
            "diploma brasileiro",
            "histórico escolar ou acadêmico",
            "ementas e conteúdo programático",
            "declaração de conclusão",
            "certificados complementares",
            "documentos exigidos pelo edital da universidade",
          ],
        },
        {
          title: "Tradução, apostila, CIMEA e Dichiarazione di Valore",
          body: [
            "A tradução juramentada converte o documento para o italiano. A Apostila de Haia certifica a origem formal do documento para uso internacional.",
            "A Dichiarazione di Valore é emitida por autoridade consular italiana e descreve o valor do título no sistema de origem. O CIMEA pode emitir declarações de comparabilidade ou verificação, quando aceito pelo destinatário.",
            "Cada procedimento tem finalidade diferente. Por isso, é importante ler o edital ou exigência do órgão antes de traduzir páginas desnecessárias.",
          ],
        },
        {
          title: "Cuidados antes de iniciar",
          body: [
            "Confira se o diploma e o histórico estão completos, assinados, legíveis e com dados coerentes com o passaporte. Em documentos acadêmicos, cargas horárias, notas, créditos e nomes de disciplinas precisam ser traduzidos com atenção.",
            "Quando houver ementas longas, vale confirmar se o destinatário exige tradução integral ou apenas documentos principais. Isso evita custo desnecessário.",
          ],
        },
        {
          title: "Atendimento e orçamento",
          body: [
            "Envie fotos ou PDFs do diploma, histórico e exigência do órgão pelo WhatsApp. Informamos quais arquivos precisam ser avaliados, prazo, valor e eventual atenção à apostila.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Diploma brasileiro vale automaticamente na Itália?",
          answer:
            "Não. A tradução ajuda a apresentar o documento, mas reconhecimento acadêmico ou profissional depende do procedimento e do órgão competente.",
        },
        {
          question: "Preciso traduzir o histórico escolar?",
          answer:
            "Frequentemente sim, especialmente para universidades, CIMEA, Dichiarazione di Valore e análise de créditos.",
        },
        {
          question: "Ementas precisam de tradução juramentada?",
          answer:
            "Depende do edital ou órgão. Algumas universidades exigem ementas; outras aceitam apenas diploma e histórico.",
        },
        {
          question: "Apostila substitui tradução?",
          answer:
            "Não. Apostila e tradução têm funções diferentes e podem ser exigidas em conjunto.",
        },
        {
          question: "CIMEA substitui Dichiarazione di Valore?",
          answer:
            "Pode substituir em alguns procedimentos, mas depende da universidade ou órgão destinatário. A exigência deve ser confirmada no edital.",
        },
        {
          question: "Quanto custa traduzir um diploma?",
          answer:
            "Depende do documento, número de páginas, histórico, ementas e urgência. O orçamento é feito após análise do arquivo.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de histórico escolar", href: "/traducao-historico-escolar-italia" },
        { title: "Apostila de Haia e tradução juramentada", href: "/apostila-haia-traducao-juramentada-italia" },
        { title: "Preço da tradução juramentada", href: "/preco-traducao-juramentada-portugues-italiano" },
        { title: "Tradução juramentada português para italiano", href: "/traducao-juramentada-italiano" },
      ]}
    />
  );
}
