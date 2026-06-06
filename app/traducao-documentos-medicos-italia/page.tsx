import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";

const pagePath = "/traducao-documentos-medicos-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução para Médicos e Profissionais de Saúde na Itália (SSN)",
  description: "Tradução juramentada de ementas, diplomas e históricos para médicos e enfermeiros brasileiros que buscam o reconhecimento do título na Itália.",
  path: "/traducao-documentos-medicos-italia",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Saúde / Profissional"
      title="Tradução de documentos médicos para reconhecimento na Itália"
      intro="A Itália possui uma alta demanda por profissionais de saúde, mas o processo de reconhecimento de títulos brasileiros (Equipollenza) junto ao Ministero della Salute é um dos mais rigorosos da Europa. A tradução juramentada de centenas de páginas de ementas curriculares e cargas horárias é o alicerce deste processo."
      sections={[
      {
        title: "O Dossiê do Médico e Enfermeiro Brasileiro",
        body: [
          "Para atuar no Servizio Sanitario Nazionale (SSN), o profissional deve traduzir um volume expressivo de documentos:",
        ],
        list: [
          "Diploma de Medicina ou Enfermagem.",
          "Histórico Acadêmico detalhado.",
          "Ementas Curriculares (Programmi di studio) de todas as disciplinas.",
          "Certificado de Regularidade Profissional (CRM/COREN).",
          "Comprovantes de especialização e residência médica."
        ]
      },
      {
        title: "A Precisão dos Termos Médicos",
        body: [
          "Uma tradução imprecisa de uma disciplina de 'Ginecologia e Obstetrícia' ou 'Clínica Cirúrgica' pode levar o Ministério da Saúde italiano a exigir que o profissional curse matérias complementares na Itália. Utilizamos glossários técnicos de medicina para garantir a equivalência exata dos termos brasileiros para o sistema de saúde italiano.",
          <span key="link">Saiba mais sobre a validação de <Link href="/traducao-juramentada-diploma-brasileiro-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">diplomas brasileiros na Itália</Link>.</span>
        ]
      },
      {
        title: "Economia na Tradução de Ementas",
        body: [
          "Ementas curriculares podem ter 500 páginas. Orientamos o profissional sobre quais partes são realmente obrigatórias (objetivos, carga horária e bibliografia principal) para otimizar o custo da tradução juramentada sem comprometer o resultado final."
        ]
      }
    ]}
      faqs={[
      { question: "O Ministério da Saúde italiano aceita tradução feita no Brasil?", answer: "Sim, desde que seja juramentada e apostilada. Em alguns casos, o Ministério pode solicitar a legalização consular adicional." },
      { question: "Preciso de tradução de especialização (Pós-graduação)?", answer: "Sim, se você deseja que sua especialidade também seja reconhecida em solo italiano." },
      { question: "Vocês traduzem prontuários médicos para pacientes?", answer: "Sim, realizamos traduções de laudos e prontuários para brasileiros que buscam tratamento de saúde na Itália." }
    ]}
    />
  );
}
