import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/documentos-traducao-permesso-di-soggiorno";

export const metadata: Metadata = createPageMetadata({
  title: "Documentos e tradução juramentada para Permesso di Soggiorno | Guia Técnico",
  description:
    "Tradução juramentada para Permesso di Soggiorno: certidões, contratos e antecedentes criminais. Exigências da Questura e kit postale das Poste Italiane.",
  path: pagePath,
  ogTitle: "Permesso di Soggiorno na Itália — documentos e traduções",
  ogDescription:
    "Quais documentos brasileiros precisam de tradução juramentada para o pedido de permanência legal na Itália.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Imigração"
      title="Documentos e tradução juramentada para Permesso di Soggiorno"
      schemaType="Service"
      areaServed="Itália"
      serviceType="Tradução juramentada para fins de imigração"
      description="Tradução juramentada de documentos brasileiros exigidos pela Questura para a emissão do permesso di soggiorno."
      intro="O Permesso di Soggiorno é a autorização de permanência obrigatória para cidadãos não europeus que residem na Itália por mais de 90 dias. Seja por motivos de trabalho, estudo, família ou espera de cidadania, a apresentação de documentos brasileiros exige a tradução juramentada asseverata para que as informações tenham validade perante a Questura e o Ministero dell'Interno."
      sections={[
        {
          title: "Quando a tradução juramentada é obrigatória para o Permesso",
          body: [
            "Toda vez que a comprovação do direito à permanência depender de um fato ocorrido no Brasil, o oficial da Questura exige a versão em italiano do documento original. A tradução simples é invariavelmente recusada nos sportelli da imigração.",
          ],
          subsections: [
            {
              title: "Permesso por Motivos Familiares",
              body: [
                "Para comprovar o vínculo com o familiar residente na Itália, exige-se a tradução juramentada da certidão de nascimento (para filhos) ou de casamento (para cônjuges). Em casos de dependência econômica, declarações de imposto de renda brasileiro traduzidas servem como prova perante a Prefettura.",
              ],
            },
            {
              title: "Permesso para Estudo",
              body: [
                "Estudantes brasileiros devem traduzir o comprovante de matrícula da universidade brasileira (quando em intercâmbio) ou o diploma anterior para justificar a continuidade dos estudos em solo italiano.",
              ],
            },
            {
              title: "Permesso para Trabalho (Lavoro)",
              body: [
                "Contratos de trabalho assinados no exterior ou certificados de qualificação profissional brasileira exigem tradução juramentada asseverata para que o trabalhador possa converter seu visto em autorização de residência.",
              ],
            },
          ],
        },
        {
          title: "Antecedentes Criminais: O Documento Crítico",
          body: [
            "Para a primeira emissão de certos tipos de permesso e, obrigatoriamente, para o pedido de 'Carta di Soggiorno' (UE longos residentes), a Questura exige o antecedente criminal da Polícia Federal brasileira. O documento deve ser emitido há menos de 90 dias, apostilado no Brasil e traduzido de forma juramentada.",
          ],
        },
        {
          title: "O Kit Postale e a Entrega de Documentos",
          body: [
            "Muitos pedidos de permesso começam nas agências das Poste Italiane (Sportello Amico) através do preenchimento do 'Kit Postale'. No envelope, devem ser incluídas cópias das traduções juramentadas. No dia da convocação na Questura (appuntamento para digitais), os originais brasileiros apostilados e as traduções asseveradas devem ser apresentados fisicamente.",
          ],
        },
        {
          title: "Diferença entre Tradução e Autenticação",
          body: [
            "A tradução juramentada asseverata na Itália inclui o juramento solene do tradutor no Tribunale. Este ato confere ao documento brasileiro a mesma força probante de um documento italiano original, essencial para evitar o indeferimento (diniego) do pedido de permanência.",
          ],
        },
      ]}
      faqs={[
        {
          question: "A Questura aceita tradução feita no Brasil?",
          answer:
            "A aceitação depende da província. Comunes e Questuras em Roma e Milão costumam ser mais flexíveis se a tradução brasileira estiver apostilada. No entanto, o padrão de asseverazione italiana é a opção infalível em todo o território nacional.",
        },
        {
          question: "Preciso traduzir a certidão de nascimento toda vez?",
          answer:
            "Para a primeira emissão do permesso por motivo familiar, sim. Uma vez que o vínculo está registrado no sistema do Comune e da Questura, as renovações subsequentes raramente exigem a reapresentação da tradução, a menos que haja mudança no estado civil.",
        },
        {
          question: "Quanto tempo demora a tradução para o permesso?",
          answer:
            "Documentos individuais (uma certidão ou um antecedente) são finalizados em 48 a 72 horas. Se houver necessidade de asseverazione, o prazo total varia entre 3 e 7 dias úteis.",
        },
        {
          question: "O passaporte precisa de tradução juramentada?",
          answer:
            "Não para o permesso di soggiorno. A Questura utiliza a cópia integral das páginas do passaporte original. A tradução só é exigida para outros documentos brasileiros de suporte.",
        },
      ]}
      relatedTitle="Material para imigração"
      relatedLinks={[
        { title: "Tradução de antecedentes criminais", href: "/traducao-antecedentes-criminais-italia" },
        { title: "Tradução juramentada para residentes", href: "/traducao-juramentada-brasileiro-residente-italia" },
        { title: "Autoridades italianas em Roma", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
