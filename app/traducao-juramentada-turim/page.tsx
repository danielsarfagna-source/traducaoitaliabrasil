import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-juramentada-turim";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução Juramentada em Turim | Português Italiano",
  description: "Tradução juramentada em Turim para brasileiros no Piemonte. CNH, cidadania, certidões, diploma, permesso e apostila.",
  path: "/traducao-juramentada-turim",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Turim e Piemonte"
      title="Tradução juramentada em Turim para brasileiros"
      pagePath={pagePath}
      schemaType="ProfessionalService"
      areaServed="Turim"
      description="Atendimento em português para tradução juramentada em Turim e Piemonte."
      intro="Brasileiros em Turim e no Piemonte podem precisar de documentos traduzidos para residência, estudo, cidadania italiana, CNH, certidões, casamento ou procedimentos perante órgãos italianos."
      sections={[
        {
          title: "Atendimento orientado ao órgão destinatário",
          body: [
            "O primeiro passo é entender onde o documento será apresentado. Comune, Questura, universidade, Tribunal ou Motorizzazione podem ter exigências diferentes.",
          ],
        },
        {
          title: "Documentos que analisamos",
          body: ["Envie foto ou PDF para orientação inicial sobre:"],
          list: [
            "certidões brasileiras",
            "documentos para cidadania",
            "CNH brasileira",
            "diplomas e históricos",
            "documentos familiares",
            "apostila e tradução",
          ],
        },
        {
          title: "Sem promessa de aprovação",
          body: [
            "A tradução é uma etapa documental. A decisão final é sempre do órgão destinatário. Por isso, o atendimento informa limites, riscos e perguntas que devem ser confirmadas antes de iniciar.",
          ],
        },
      ]}
      faqs={[
        { question: "Preciso ir presencialmente em Turim?", answer: "A análise inicial pode ser feita por WhatsApp com imagem ou PDF legível." },
        { question: "Atendem cidadania italiana no Piemonte?", answer: "Sim, com tradução de certidões e orientação sobre apostila e divergências documentais." },
        { question: "Traduzem CNH para Motorizzazione?", answer: "Sim, quando a finalidade envolve apresentação oficial da CNH brasileira em italiano." },
        { question: "O documento precisa estar apostilado?", answer: "Pode precisar, conforme país de emissão, destino e órgão." },
        { question: "Quanto tempo demora?", answer: "O prazo depende do volume e urgência, e é informado antes do início." },
      ]}
      relatedLinks={[
        { title: "Tradução para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução de CNH brasileira", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Tradução de certidões", href: "/traducao-juramentada-certidoes" },
      ]}
    />
  );
}
