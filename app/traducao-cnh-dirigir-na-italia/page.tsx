import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traducao-cnh-dirigir-na-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada de CNH brasileira na Itália | Dirigir e Converter",
  description:
    "Tradução juramentada de CNH para brasileiros na Itália. Regras para dirigir como turista, residência anagráfica e processo de conversão na Motorizzazione Civile.",
  path: pagePath,
  ogTitle: "Tradução de CNH brasileira para a Itália — guia completo",
  ogDescription:
    "Como dirigir legalmente na Itália com CNH brasileira e tradução juramentada. Prazos e conversão para Patente di Guida.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Trânsito e Mobilidade"
      title="Tradução juramentada de CNH brasileira para a Itália"
      schemaType="Service"
      areaServed="Itália"
      serviceType="Tradução juramentada de habilitação estrangeira"
      description="Tradução técnica e oficial da CNH brasileira para uso em território italiano perante a Motorizzazione Civile e locadoras."
      intro="Sim. A CNH brasileira pode precisar de tradução para italiano ou de Permissão Internacional para Dirigir, conforme a finalidade, a residência do condutor e a exigência da autoridade ou locadora. Para conversão perante a Motorizzazione Civile, confirme a lista atualizada de documentos antes de solicitar a tradução."
      sections={[
        {
          title: "As regras para dirigir na Itália com CNH brasileira",
          body: [
            "A legislação de trânsito italiana (Codice della Strada) estabelece critérios claros baseados no seu status de residência:",
          ],
          subsections: [
            {
              title: "Turistas e Visitantes (Até 90 dias)",
              body: [
                "Brasileiros em viagem de turismo dirigem na Itália apresentando a CNH brasileira válida acompanhada da Permissão Internacional para Dirigir (PID) ou da tradução juramentada oficial. Sem um desses dois documentos complementares, o condutor está sujeito a multas pesadas e à retenção do veículo em caso de fiscalização pela Polizia Stradale ou Carabinieri.",
              ],
            },
            {
              title: "Residentes na Itália (Primeiros 12 meses)",
              body: [
                "A partir da data da inscrição anagráfica (residência no Comune), o brasileiro tem o direito de dirigir com a CNH original e a tradução juramentada por exatamente um ano. Este prazo é improrrogável e serve como transição para que o cidadão organize a sua documentação definitiva.",
              ],
            },
          ],
        },
        {
          title: "Conversão de CNH (Conversione della Patente)",
          body: [
            "Após 12 meses de residência, dirigir com a CNH brasileira torna-se ilegal. O cidadão deve solicitar a conversão para a Patente di Guida italiana na Motorizzazione Civile. O acordo bilateral entre Brasil e Itália permite a conversão direta para as categorias A e B sem a necessidade de novos exames teóricos ou práticos.",
            "O dossiê de conversão exige obrigatoriamente a tradução juramentada asseverata da CNH, que deve refletir fielmente todos os campos do documento, incluindo observações médicas e restrições. A tradução deve ser acompanhada do certificado médico emitido pela ASL (Azienda Sanitaria Locale).",
          ],
        },
        {
          title: "A Tradução Asseverata no Tribunale",
          body: [
            "Unidades da Motorizzazione podem solicitar tradução asseverada na Itália. O tradutor presta juramento de fidelidade e cumpre as formalidades aplicáveis, mas a aceitação do dossiê e a conversão dependem da análise da autoridade competente.",
          ],
        },
        {
          title: "Aluguel de Carros e Seguros",
          body: [
            "Locadoras de veículos na Itália (como Europcar, Hertz ou Sixt) exigem a tradução juramentada para liberar o veículo caso o condutor não possua a PID. Em caso de sinistro, a ausência da tradução oficial pode ser usada pela seguradora como motivo para negar a cobertura financeira, alegando condutor não habilitado conforme as normas locais.",
          ],
        },
      ]}
      faqs={[
        {
          question: "A tradução da CNH precisa de Apostila de Haia?",
          answer:
            "Para dirigir como turista, não. Para o processo de conversão na Motorizzazione, a CNH original deve estar apostilada no Brasil e a tradução deve ser asseverada na Itália.",
        },
        {
          question: "A CNH Digital serve para a tradução?",
          answer:
            "Sim, realizamos a tradução a partir do arquivo PDF oficial da CNH Digital. No entanto, o órgão destinatário exige a apresentação do documento físico ou a validação do QR Code no momento da entrega do dossiê.",
        },
        {
          question: "Quanto tempo demora a tradução da CNH?",
          answer:
            "Sendo um documento padrão, a tradução juramentada fica pronta em 24 horas. O trâmite de asseverazione judicial leva entre 2 a 5 dias úteis, dependendo da escala do Tribunale.",
        },
        {
          question: "Posso traduzir a CNH no Brasil para usar na Itália?",
          answer:
            "Sim, desde que a tradução brasileira também receba a Apostila de Haia. Contudo, para o processo de conversão, a maioria das unidades da Motorizzazione Civile prefere a tradução asseverada na Itália por ser mais fácil de validar internamente.",
        },
      ]}
      relatedTitle="Mobilidade na Itália"
      relatedLinks={[
        { title: "Tradução juramentada em Roma", href: "/traducao-juramentada-roma" },
        { title: "Documentos para residente na Itália", href: "/traducao-juramentada-brasileiro-residente-italia" },
        { title: "Autoridades italianas — guia oficial", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
