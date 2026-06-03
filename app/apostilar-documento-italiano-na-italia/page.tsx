import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Como apostilar documento italiano na Itália para uso no Brasil e exterior",
  description:
    "Entenda quando documentos italianos precisam de Apostila de Haia para uso no Brasil ou no exterior e a diferença entre apostilamento e tradução.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Apostila de Haia"
      title="Como apostilar documento italiano na Itália para uso no Brasil e exterior"
      intro="O apostilamento é utilizado para que um documento emitido em um país possa ser reconhecido oficialmente em outro país participante da Convenção da Haia."
      sections={[
        {
          title: "Documento italiano para uso internacional",
          body: [
            "Na prática, quando um documento italiano precisa ser usado no Brasil ou em outro país, pode ser necessário obter a Apostila de Haia na Itália.",
          ],
        },
        {
          title: "Quando pode ser necessário apostilar?",
          body: ["O apostilamento costuma ser solicitado em documentos como:"],
          list: [
            "certidão italiana de nascimento",
            "certidão italiana de casamento",
            "certidão italiana de óbito",
            "documentos escolares",
            "documentos universitários",
            "procurações",
            "documentos administrativos",
            "documentos para cidadania",
            "documentos para casamento ou divórcio",
          ],
        },
        {
          title: "Apostila de Haia é tradução?",
          body: [
            "Não. A Apostila de Haia não traduz o documento. Ela certifica a autenticidade formal da origem do documento para uso internacional.",
            "Se o órgão estrangeiro também precisar compreender o conteúdo, pode ser necessário fazer tradução além do apostilamento.",
          ],
        },
        {
          title: "Documento italiano para usar no Brasil",
          body: [
            "Quando um documento italiano será apresentado no Brasil, o órgão brasileiro pode exigir apostilamento e tradução. A exigência exata depende do tipo de documento e da finalidade.",
          ],
        },
        {
          title: "Como saber o procedimento correto?",
          body: [
            "Antes de iniciar, é importante saber qual documento será usado, em qual país será apresentado, perante qual órgão e se será exigida tradução ou Apostila de Haia.",
            "Precisa apostilar ou traduzir documento italiano? Envie seu caso pelo WhatsApp e receba orientação.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Documento italiano precisa apostila para usar no Brasil?",
          answer:
            "Em muitos casos, sim, especialmente quando será apresentado perante autoridade brasileira.",
        },
        {
          question: "Apostila substitui tradução?",
          answer:
            "Não. Apostila e tradução têm funções diferentes.",
        },
        {
          question: "Posso apostilar depois de traduzir?",
          answer:
            "Depende do procedimento e do órgão destinatário. Em alguns casos, a ordem das etapas é relevante, por isso vale confirmar antes de iniciar.",
        },
        {
          question: "Vocês atendem fora de Roma?",
          answer:
            "Sim. O atendimento pode orientar documentos em toda a Itália e também situações envolvendo uso no Brasil ou exterior.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Apostila de Haia e tradução juramentada", href: "/apostila-haia-traducao-juramentada-italia" }
      ]}
    />
  );
}
