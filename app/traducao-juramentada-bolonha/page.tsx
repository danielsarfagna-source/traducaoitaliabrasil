import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-juramentada-bolonha";

export const metadata: Metadata = {
  title: "Tradução Juramentada em Bolonha | Português Italiano",
  description:
    "Tradução juramentada em Bolonha para brasileiros na Emilia-Romagna. Diploma, cidadania, certidões, CNH, permesso e apostila.",
  alternates: {
    canonical: pagePath,
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Bolonha e Emilia-Romagna"
      title="Tradução juramentada em Bolonha para estudo, cidadania e documentos"
      pagePath={pagePath}
      schemaType="ProfessionalService"
      areaServed="Bolonha"
      description="Atendimento em português para tradução juramentada em Bolonha e Emilia-Romagna."
      intro="Bolonha é um destino importante para estudantes e brasileiros que vivem na Emilia-Romagna. Documentos acadêmicos, certidões, CNH, permesso e cidadania podem exigir tradução oficial para italiano."
      sections={[
        {
          title: "Foco em documentos reais",
          body: [
            "Antes de traduzir, conferimos a finalidade: universidade, Comune, Questura, Motorizzazione, Tribunal ou outro destinatário. Isso ajuda a evitar tradução de páginas que não serão exigidas.",
          ],
        },
        {
          title: "Casos comuns em Bolonha",
          body: ["Os pedidos mais recorrentes envolvem:"],
          list: [
            "diploma brasileiro e histórico escolar",
            "certidões para cidadania italiana",
            "documentos para permesso",
            "CNH brasileira",
            "apostila de Haia",
            "documentos familiares",
          ],
        },
        {
          title: "Orçamento por foto ou PDF",
          body: [
            "Envie o documento pelo WhatsApp, explique o uso pretendido e receba prazo e valor. Se houver exigência que precisa ser confirmada no órgão, avisamos antes.",
          ],
        },
      ]}
      faqs={[
        { question: "Atendem estudantes em Bolonha?", answer: "Sim. Analisamos diploma, histórico, ementas e exigências de universidade quando enviadas pelo cliente." },
        { question: "Também fazem documentos de cidadania?", answer: "Sim. Certidões brasileiras para cidadania italiana podem ser traduzidas e analisadas quanto a apostila e divergências." },
        { question: "Posso resolver pelo WhatsApp?", answer: "Sim, a análise inicial pode ser feita por foto ou PDF." },
        { question: "A tradução garante aceitação?", answer: "Não prometemos decisão de órgão. A tradução é preparada para a finalidade informada, mas cada destinatário pode ter exigências próprias." },
        { question: "Quanto custa?", answer: "Depende do documento e volume; o orçamento é feito após análise." },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de diploma", href: "/dichiarazione-di-valore-traducao-diploma" },
        { title: "Tradução para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução de documentos para permesso", href: "/documentos-traducao-permesso-di-soggiorno" },
        { title: "Preço da tradução juramentada", href: "/preco-traducao-juramentada-portugues-italiano" },
      ]}
    />
  );
}
