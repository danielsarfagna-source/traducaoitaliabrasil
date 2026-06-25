import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = createPageMetadata({
  title: "Reforma da cidadania italiana — Lei 74/2025 e Corte Costituzionale",
  description: "A reforma da cidadania italiana, seus efeitos documentais e a importância de certidões, Apostila e tradução. Conteúdo informativo atualizado.",
  path: "/reforma-cidadania-italiana-documentos",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Cidadania Italiana"
      title="Reforma da cidadania italiana (Lei 74/2025) — o que mudou nos documentos"
      pagePath="/reforma-cidadania-italiana-documentos"
      schemaType="Article"
      datePublished="2025-05-24"
      dateModified="2026-06-06"
      description="Artigo informativo sobre reforma da cidadania italiana, documentos brasileiros, apostila e tradução juramentada."
      intro="A Lei 74/2025 alterou regras relevantes de cidadania italiana por descendência, e a Sentença 63/2026 da Corte Constitucional confirmou pontos centrais da reforma. Este texto não substitui análise jurídica: o foco aqui é explicar por que a parte documental ficou ainda mais sensível."
      sections={[
        {
          title: "O que aconteceu, em ordem",
          body: [
            "O Decreto-Lei nº 36/2025 foi publicado em 28 de março de 2025 com disposições urgentes em matéria de cidadania e foi convertido, com modificações, na Lei nº 74/2025, publicada em 23 de maio de 2025.",
            "Em 2026, a Corte Constitucional analisou questões relacionadas à reforma na Sentença nº 63/2026. O cenário prático, no momento, é de aplicação da nova disciplina, com pontos que podem exigir avaliação jurídica caso a caso.",
          ],
        },
        {
          title: "O que mudou na prática documental",
          body: [
            "A reforma tornou mais importante identificar corretamente a linha familiar, datas, naturalizações, residência e enquadramento legal. Isso exige documentos consistentes e legíveis.",
            "Do ponto de vista documental, certidões brasileiras de nascimento, casamento, óbito e inteiro teor continuam sendo peças centrais quando há análise de descendência, vínculos familiares e histórico civil.",
            "Qualquer estratégia jurídica deve ser discutida com profissional habilitado. Na tradução, o papel é preparar o documento com fidelidade, sem alterar dados para adequar a narrativa do caso.",
          ],
        },
        {
          title: "Por que isso torna a tradução juramentada mais decisiva, não menos",
          body: [
            "Quando o caso depende de documentação histórica, a tradução juramentada precisa preservar nomes, datas, averbações e divergências. Ela não pode corrigir o documento original.",
            "Uma certidão com nome divergente, data inconsistente, apostila ausente ou termo jurídico mal compreendido pode gerar exigência, retrabalho ou necessidade de análise adicional.",
          ],
        },
        {
          title: "Onde entramos",
          body: [
            "Cuidamos da tradução juramentada das certidões e documentos brasileiros, com orientação em português sobre legibilidade, apostila, divergências evidentes e finalidade de uso. Você envia os documentos pelo WhatsApp, recebe prazo e valor, e decide antes de iniciar.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quem já tem a cidadania perde algo?",
          answer: "Em linhas gerais, a reforma trata de aquisições e reconhecimentos futuros. Situações individuais devem ser avaliadas juridicamente.",
        },
        {
          question: "A tradução define se tenho direito à cidadania?",
          answer: "Não. A tradução prepara o documento para uso formal. A análise do direito depende do caso e de profissional habilitado.",
        },
        {
          question: "A Corte Constitucional derrubou a lei?",
          answer: "A Sentença 63/2026 confirmou pontos centrais do cenário de aplicação da reforma. Isso não elimina a necessidade de analisar casos específicos.",
        },
        {
          question: "Ainda dá para conseguir por descendência?",
          answer: "Depende do caso concreto. Documentos e traduções bem preparados ajudam a análise, mas não substituem orientação jurídica.",
        },
        {
          question: "Quais documentos devo revisar primeiro?",
          answer: "Comece por nascimento, casamento, óbito e inteiro teor da linha familiar, conferindo nomes, datas, filiação, apostila e legibilidade.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Apostila de Haia e tradução", href: "/apostila-haia-traducao-juramentada-italia" }
      ]}
    />
  );
}
