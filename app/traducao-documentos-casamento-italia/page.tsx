import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

const pagePath = "/traducao-documentos-casamento-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada para casamento na Itália | Nulla Osta e documentos",
  description:
    "Tradução juramentada de certidões de nascimento, divórcio e antecedentes para casamento de brasileiros na Itália. Procedimento de Nulla Osta no Consulado e Prefettura.",
  path: pagePath,
  ogTitle: "Documentos e tradução juramentada para casar na Itália",
  ogDescription: "Guia técnico sobre Nulla Osta, tradução de certidões e legalização na Prefettura para brasileiros.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Estado Civil"
      title="Tradução juramentada para casamento de brasileiros na Itália"
      schemaType="Service"
      areaServed="Itália"
      serviceType="Tradução juramentada para fins de casamento no exterior"
      description="Tradução juramentada de documentos brasileiros para a celebração de casamento civil perante as autoridades italianas."
      intro="Sim. Em muitos casos, brasileiros que vão casar na Itália precisam apresentar certidões traduzidas para italiano, possivelmente apostiladas, além do Nulla Osta e de outros documentos. A lista e o formato variam conforme o Comune e a situação civil dos noivos."
      sections={[
        {
          title: "Os Documentos Exigidos para o Casamento Civil",
          body: [
            "O oficial do Comune italiano baseia sua análise em três documentos fundamentais vindos do sistema brasileiro:",
          ],
          subsections: [
            {
              title: "Nulla Osta al Matrimonio",
              body: [
                "É o documento que atesta a inexistência de impedimentos para o casamento. Para brasileiros, o Nulla Osta é emitido pelo Consulado-Geral do Brasil na Itália (Roma ou Milão). Após a emissão, a assinatura do cônsul brasileiro deve ser legalizada na Prefettura local (em Roma, na Via IV Novembre, 119) para ter validade perante o Comune.",
              ],
            },
            {
              title: "Certidão de Nascimento (Inteiro Teor)",
              body: [
                "O Comune pode exigir certidão de nascimento brasileira recente, Apostila de Haia e tradução para italiano. Confirme se deve ser inteiro teor e qual prazo de emissão é aceito.",
              ],
            },
            {
              title: "Sentença de Divórcio ou Certidão de Óbito",
              body: [
                "Se o nubente brasileiro for divorciado ou viúvo, deve apresentar a prova documental do encerramento do vínculo anterior. Sentenças de divórcio (judiciais ou escrituras de cartório) devem estar apostiladas e traduzidas integralmente de forma juramentada.",
              ],
            },
          ],
        },
        {
          title: "O Papel da Tradução Juramentada no Processo",
          body: [
            "A tradução juramentada converte os dados do registro civil brasileiro para o padrão jurídico italiano. Não se trata apenas de trocar as palavras, mas de assegurar que termos como 'comunhão parcial de bens' ou 'trânsito em julgado' sejam compreendidos corretamente pelo oficial do Estado Civil italiano.",
            "O Comune pode exigir traduções asseveradas perante o órgão italiano competente. A asseverazione confere fé pública à tradução, mas cada Comune verifica o dossiê e pode solicitar documentos ou formalidades adicionais.",
          ],
        },
        {
          title: "Prazos e Validade dos Documentos",
          body: [
            "A burocracia italiana é rigorosa quanto à idade dos documentos estrangeiros. Certidões emitidas no Brasil com mais de 180 dias são frequentemente recusadas. O ideal é coordenar a emissão do documento no Brasil, o apostilamento e o envio à Itália para que a tradução seja feita quando a certidão ainda for considerada 'fresca' pelo sistema italiano.",
          ],
        },
        {
          title: "Publicações (Pubblicazioni di Matrimonio)",
          body: [
            "Se pelo menos um dos nubentes reside legalmente na Itália, o Comune exige a fixação das publicações anagráficas por um período de 8 dias. O dossiê traduzido deve estar completo antes do início desse prazo.",
          ],
        },
      ]}
      faqs={[
        {
          question: "A tradução feita no Brasil vale para o casamento na Itália?",
          answer: "Muitos Comunes aceitam a tradução juramentada brasileira desde que ela também receba a Apostila de Haia no Brasil. Entretanto, para maior segurança jurídica e evitar questionamentos do oficial do Comune, a asseverazione feita na Itália é o caminho preferencial.",
        },
        {
          question: "Preciso traduzir o passaporte brasileiro?",
          answer: "Em regra, não, pois o passaporte é um documento de viagem bilíngue reconhecido internacionalmente. A autoridade utiliza os dados da certidão de nascimento traduzida para preencher os registros do Comune.",
        },
        {
          question: "Quanto tempo demora para traduzir o kit de casamento?",
          answer: "O conjunto padrão (nascimento e nulla osta) é finalizado em 3 a 5 dias úteis, incluindo o trâmite judicial de asseverazione.",
        },
        {
          question: "O Nulla Osta precisa ser traduzido?",
          answer: "Não. O Nulla Osta emitido pelo Consulado do Brasil na Itália já é redigido em língua italiana.",
        },
      ]}
      relatedTitle="Veja também"
      relatedLinks={[
        { title: "Tradução de sentenças de divórcio", href: "/traducao-sentenca-divorcio-italia" },
        { title: "Tradução de antecedentes criminais", href: "/traducao-antecedentes-criminais-italia" },
        { title: "Autoridades italianas em Roma", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
