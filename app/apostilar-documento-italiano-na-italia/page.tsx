import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/apostilar-documento-italiano-na-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Apostila de Haia na Itália | Documentos italianos para o Brasil",
  description:
    "Como obter a Apostila de Haia na Itália para certidões, diplomas e procurações italianas. Competência da Prefettura e Procura della Repubblica.",
  path: pagePath,
  ogTitle: "Apostila de Haia na Itália — guia técnico de legalização",
  ogDescription:
    "Onde apostilar documentos italianos para uso no Brasil ou exterior. Papel da Prefettura e Procura.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Legalização Internacional"
      title="Apostila de Haia na Itália para documentos italianos"
      schemaType="Service"
      areaServed="Itália"
      serviceType="Apostilamento de documentos oficiais na Itália"
      description="Serviço de orientação e obtenção de Apostila de Haia em território italiano para documentos destinados ao Brasil ou outros países."
      intro="A Apostila de Haia é o selo internacional que valida um documento público emitido na Itália para que ele produza efeitos legais no Brasil ou em outros países signatários da Convenção de Haia de 1961. Na Itália, a competência para apostilar divide-se entre a Prefettura e a Procura della Repubblica, dependendo da natureza do documento e da autoridade que o assinou."
      sections={[
        {
          title: "Quem emite a Apostila na Itália",
          body: [
            "Diferente do Brasil, onde os cartórios de notas realizam o apostilamento, na Itália o procedimento é realizado por órgãos do Estado:",
          ],
          subsections: [
            {
              title: "Prefettura (UTG)",
              body: [
                "A Prefettura apostila documentos administrativos, certidões de estado civil emitidas pelo Comune (nascimento, casamento, óbito), documentos escolares e universitários, e certificados emitidos pela Agenzia delle Entrate. Em Roma, a Prefettura situa-se na Via IV Novembre, 119.",
              ],
            },
            {
              title: "Procura della Repubblica",
              body: [
                "A Procura apostila atos judiciais, sentenças de tribunais, certidões de antecedentes criminais (Casellario Giudiziale) e atos assinados por notai (notários). Em Roma, o Ufficio Apostille da Procura fica na Piazzale Clodio, 1.",
              ],
            },
          ],
        },
        {
          title: "Documentos italianos que exigem apostila",
          body: [
            "Documentos italianos apresentados a autoridades brasileiras podem precisar de Apostila de Haia, conforme o tipo de ato e o órgão destinatário. Exemplos comuns:",
            "- **Estratto di Nascita**: Para prova de descendência em processos de cidadania no Brasil.",
            "- **Certificato di Matrimonio**: Para transcrição de casamento celebrado na Itália perante o cartório brasileiro.",
            "- **Certificado de Médicos e Saúde**: Para revalidação de diploma de medicina ou farmácia no Brasil.",
            "- **Procurações (Procure)**: Lavradas por notaio italiano para representação legal em negócios no Brasil.",
          ],
        },
        {
          title: "A Tradução do Documento Apostilado",
          body: [
            "Após o apostilamento na Itália, o documento deve ser traduzido para o português. Se a finalidade for o uso no Brasil, a tradução deve ser feita obrigatoriamente por um tradutor juramentado inscrito em uma das Juntas Comerciais brasileiras para que tenha validade nacional.",
          ],
        },
        {
          title: "Prazos e Taxas Administrativas",
          body: [
            "O procedimento de apostila na Itália costuma levar de 3 a 10 dias úteis, dependendo do volume de trabalho do órgão provincial. No momento, a emissão da Apostila na Prefettura ou na Procura é isenta de 'marca da bollo' (taxa administrativa) para muitos tipos de documentos, mas exige o preenchimento de formulário próprio e agendamento prévio.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Posso apostilar um documento brasileiro na Itália?",
          answer:
            "Não. A Apostila de Haia é sempre emitida no país de origem do documento. Documentos brasileiros devem ser apostilados em cartório no Brasil.",
        },
        {
          question: "Onde apostilar o diploma da universidade italiana?",
          answer:
            "O diploma e o histórico escolar italiano devem ser apostilados na Prefettura da província onde a universidade está sediada.",
        },
        {
          question: "A certidão plurilíngue precisa de apostila?",
          answer:
            "O Brasil e a Itália possuem acordos específicos, mas para total segurança jurídica perante cartórios brasileiros, recomendamos o apostilamento da certidão plurilíngue ou do estratto di nascita tradicional.",
        },
        {
          question: "Vocês realizam o trâmite de apostila em Roma?",
          answer:
            "Sim, orientamos e realizamos o protocolo de documentos italianos para apostilamento na Prefettura di Roma e na Procura della Repubblica di Roma para nossos clientes.",
        },
      ]}
      relatedTitle="Serviços Relacionados"
      relatedLinks={[
        { title: "Tradução juramentada de diplomas", href: "/dichiarazione-di-valore-traducao-diploma" },
        { title: "Tradução de antecedentes criminais", href: "/traducao-antecedentes-criminais-italia" },
        { title: "Autoridades em Roma", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
