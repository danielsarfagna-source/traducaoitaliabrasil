import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/dichiarazione-di-valore-traducao-diploma";

export const metadata: Metadata = createPageMetadata({
  title: "Dichiarazione di Valore e tradução juramentada de diploma | Guia completo",
  description:
    "Guia técnico sobre Dichiarazione di Valore, tradução juramentada de diplomas e históricos, e reconhecimento de títulos acadêmicos na Itália. CIMEA e MIUR.",
  path: pagePath,
  ogTitle: "Reconhecimento de diploma na Itália — Dichiarazione di Valore",
  ogDescription:
    "Passo a passo para traduzir e legalizar diplomas brasileiros para universidades italianas e ordens profissionais.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Estudos e Carreira"
      title="Dichiarazione di Valore e tradução juramentada de diploma na Itália"
      schemaType="Service"
      areaServed="Brasil e Itália"
      serviceType="Tradução juramentada acadêmica e orientação para Dichiarazione di Valore"
      description="Tradução técnica de diplomas, históricos e ementas para fins de reconhecimento acadêmico e profissional na Itália."
      intro="Diploma brasileiro, histórico escolar e ementas curriculares exigem tradução juramentada asseverata para que o cidadão brasileiro possa ingressar em universidades italianas (Sapienza, Tor Vergata, Bologna, entre outras) ou exercer profissões regulamentadas. O procedimento central para o reconhecimento acadêmico é a obtenção da 'Dichiarazione di Valore' no Consulado Italiano ou o 'Statement of Comparability' do CIMEA, ambos dependentes de uma tradução técnica impecável."
      sections={[
        {
          title: "O que é a Dichiarazione di Valore in loco (DV)",
          body: [
            "A Dichiarazione di Valore é um documento informativo, emitido exclusivamente pelas autoridades consulares italianas no Brasil (como os consulados de SP, RJ ou a Embaixada em Brasília). Ela atesta que o título de estudo brasileiro tem validade legal no Brasil e descreve o nível de escolaridade atingido, a duração do curso e as notas obtidas, permitindo que a universidade italiana avalie a equivalência do candidato.",
          ],
        },
        {
          title: "Documentos acadêmicos que exigem tradução",
          body: [
            "A autoridade italiana — seja o Consulado, a Universidade ou o Ministério da Universidade e Pesquisa (MUR) — baseia sua análise nos seguintes documentos brasileiros, que devem estar apostilados e traduzidos:",
          ],
          subsections: [
            {
              title: "Diploma de Graduação ou Pós-Graduação",
              body: [
                "O documento principal que prova a conclusão do curso. A tradução deve manter a terminologia técnica do grau obtido (Bacharelado, Licenciatura ou Tecnólogo) e ser fiel aos carimbos e assinaturas da reitoria.",
              ],
            },
            {
              title: "Histórico Escolar Integral",
              body: [
                "Contém a carga horária total, as disciplinas cursadas e as notas. A tradução do histórico é a mais complexa devido à diversidade de nomenclaturas de matérias, exigindo um tradutor com domínio do vocabulário acadêmico italiano.",
              ],
            },
            {
              title: "Ementas e Conteúdo Programático",
              body: [
                "Exigidas para o reconhecimento de profissões protegidas (médicos, engenheiros, advogados) ou para dispensa de matérias (abbreviazione di corso). São documentos extensos que detalham o que foi estudado em cada disciplina.",
              ],
            },
          ],
        },
        {
          title: "Apostila de Haia em Documentos Escolares",
          body: [
            "Antes da tradução, o diploma e o histórico devem receber a Apostila de Haia em cartório no Brasil. Sem o selo da Apostila, o Consulado não emite a Dichiarazione di Valore e a universidade italiana recusa a matrícula. A apostila deve cobrir o documento original brasileiro.",
          ],
        },
        {
          title: "CIMEA e a alternativa à Dichiarazione di Valore",
          body: [
            "O CIMEA (Centro di Informazione sulla Mobilidade e le Equivalenze Accademiche) é o centro oficial italiano para o reconhecimento de títulos estrangeiros. Atualmente, muitas universidades italianas aceitam o 'Statement of Comparability' emitido pelo CIMEA através da plataforma DiploMe, substituindo a necessidade da Dichiarazione di Valore consular. O CIMEA exige o upload da tradução juramentada asseverata para realizar a análise.",
          ],
        },
        {
          title: "Inscrição em Universidades (Universitaly)",
          body: [
            "O portal Universitaly é a porta de entrada para estudantes estrangeiros. O dossiê de pré-inscrição deve incluir as traduções juramentadas. Erros na conversão de créditos ou na tradução de nomes de cursos podem levar ao indeferimento da vaga ou à classificação incorreta no ranking de acesso.",
          ],
        },
      ]}
      faqs={[
        {
          question: "A tradução juramentada garante o reconhecimento do diploma?",
          answer:
            "Não. A tradução é uma etapa técnica obrigatória que confere fé pública ao conteúdo em italiano. A decisão sobre o reconhecimento do título (equipollenza) ou a aceitação da matrícula é exclusiva da universidade ou do ministério competente na Itália.",
        },
        {
          question: "Preciso traduzir o conteúdo programático (ementas)?",
          answer:
            "Apenas se a universidade ou o conselho profissional solicitar expressamente para fins de análise de créditos. Para a maioria das matrículas de mestrado (Laurea Magistrale), o diploma e o histórico costumam ser suficientes.",
        },
        {
          question: "Quanto tempo demora a tradução acadêmica?",
          answer:
            "Devido ao volume de termos técnicos no histórico escolar, o prazo médio é de 5 a 10 dias úteis. Documentos simples como apenas o diploma podem ser finalizados em 48 horas.",
        },
        {
          question: "O CIMEA substitui o Consulado?",
          answer:
            "Sim, para a maioria das universidades modernas na Itália. O 'Statement of Comparability' do CIMEA tem sido amplamente aceito como alternativa mais rápida à Dichiarazione di Valore consular, mas confirme sempre no edital (bando) da sua universidade.",
        },
      ]}
      relatedTitle="Material acadêmico"
      relatedLinks={[
        { title: "Tradução juramentada para médicos", href: "/traducao-documentos-medicos-italia" },
        { title: "Tradução juramentada de históricos escolares", href: "/traducao-historico-escolar-italia" },
        { title: "Autoridades italianas em Roma", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
