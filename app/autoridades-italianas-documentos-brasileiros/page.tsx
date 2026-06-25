import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/autoridades-italianas-documentos-brasileiros";

export const metadata: Metadata = createPageMetadata({
  title: "Autoridades italianas para documentos brasileiros | Comune, Tribunale, Questura",
  description:
    "Guia completo das autoridades italianas envolvidas em cidadania, casamento, permesso, diploma e CNH. Endereços, URLs oficiais e competência técnica.",
  path: pagePath,
  ogTitle: "Autoridades italianas — guia oficial e endereços para brasileiros",
  ogDescription:
    "Função de Comune, Tribunale, Questura, Prefettura, Procura e consulados na recepção e emissão de documentos oficiais.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Guia de referência"
      title="Autoridades italianas para documentos brasileiros — guia oficial"
      pagePath={pagePath}
      schemaType="Article"
      datePublished="2026-06-06"
      dateModified="2026-06-06"
      description="Guia detalhado de autoridades italianas e consulados relacionados a documentos brasileiros."
      intro="Brasileiros que apresentam documentos na Itália encontram diferentes autoridades em cidadania, imigração, casamento, estudo e atos notariais. Este guia organiza a função de cada órgão, indica endereços físicos em Roma e fornece os portais oficiais para consulta de procedimentos e horários."
      sections={[
        {
          title: "Autoridades Administrativas e de Registro Civil",
          body: [
            "Os órgãos administrativos tratam do dia a dia do cidadão: residência, estado civil, vistos e permanência.",
          ],
          subsections: [
            {
              title: "Comune",
              body: [
                "O Comune (município) é a autoridade civil local responsável pelo registro de residentes (Anagrafe) e pelo estado civil (Stato Civile). É onde se solicita o reconhecimento da cidadania jure sanguinis administrativa, a transcrição de certidões brasileiras e se celebra o matrimônio civil na Itália.",
              ],
              subsubsections: [
                {
                  title: "Comune di Roma Capitale",
                  body: [
                    <>Autoridade municipal de Roma. Trata de residência, estado civil e cidadania nos 15 Municipi da cidade. Sede institucional no Campidoglio. Site oficial: <a href="https://www.comune.roma.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.comune.roma.it</a>.</>,
                  ],
                },
                {
                  title: "Comune di Milano",
                  body: [
                    <>Responsável pelos serviços demográficos e de estado civil em Milão. Sede central na Via Larga, 12. Site oficial: <a href="https://www.comune.milano.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.comune.milano.it</a>.</>,
                  ],
                },
                {
                  title: "Demais Comunes principais",
                  body: [
                    "Consulte os portais oficiais para procedimentos de anagrafe e stato civile:",
                    <ul key="comunes-list" className="space-y-1">
                      <li>Bologna: <a href="https://www.comune.bologna.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.comune.bologna.it</a></li>
                      <li>Torino: <a href="https://www.comune.torino.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.comune.torino.it</a></li>
                      <li>Firenze: <a href="https://www.comune.fi.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.comune.fi.it</a></li>
                      <li>Napoli: <a href="https://www.comune.napoli.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.comune.napoli.it</a></li>
                    </ul>,
                  ],
                },
              ],
            },
            {
              title: "Questura e Prefettura",
              body: [
                "Órgãos vinculados ao Ministério do Interior que tratam de imigração, segurança e coordenação provincial.",
              ],
              subsubsections: [
                {
                  title: "Questura di Roma",
                  body: [
                    <>Sede em via San Vitale 15, Roma. Responsável pela emissão e renovação do permesso di soggiorno para brasileiros na província de Roma. Site: <a href="https://questure.poliziadistato.it/roma" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">questure.poliziadistato.it/roma</a>.</>,
                  ],
                },
                {
                  title: "Prefettura di Roma",
                  body: [
                    <>Sede em Via IV Novembre, 119, Roma. Órgão competente para legalizar assinaturas consulares e apostilar atos administrativos (certidões de nascimento, casamento) emitidos na província de Roma. Site: <a href="https://www.prefettura.it/roma" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.prefettura.it/roma</a>.</>,
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Autoridades Judiciárias",
          body: [
            "Os órgãos judiciários tratam de processos de cidadania judicial, divórcio e antecedentes criminais.",
          ],
          subsections: [
            {
              title: "Tribunale Ordinario",
              body: [
                "O Tribunale Ordinario é o tribunal de primeira instância de competência geral. Para brasileiros, é o foro das ações de reconhecimento de cidadania por via judicial — caso 1948 e materna — e da delibazione de sentenças estrangeiras. É também onde se realizam as asseverazioni (juramentos) de traduções português-italiano.",
              ],
              subsubsections: [
                {
                  title: "Tribunale di Roma",
                  body: [
                    <>Sede em Viale Giulio Cesare 52, Roma. Foro central para ações judiciais de cidadania e divórcio internacional. Site: <a href="https://www.tribunale.roma.giustizia.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.tribunale.roma.giustizia.it</a>.</>,
                  ],
                },
                {
                  title: "Tribunale di Milano",
                  body: [
                    <>Sede no Palazzo di Giustizia, via Freguglia 1. Site: <a href="https://www.tribunale.milano.giustizia.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.tribunale.milano.giustizia.it</a>.</>,
                  ],
                },
              ],
            },
            {
              title: "Procura della Repubblica",
              body: [
                "Órgão do Ministério Público junto ao Tribunale. Emite o certificado de antecedentes criminais italiano (Casellario Giudiziale) e apostila documentos judiciais.",
              ],
              subsubsections: [
                {
                  title: "Procura della Repubblica di Roma",
                  body: [
                    "Sede em Piazzale Clodio 1, Roma. Competente para apostilar sentenças do Tribunale di Roma e emitir antecedentes criminais para brasileiros residentes.",
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Ensino e Ordens Profissionais",
          body: [
            "Órgãos responsáveis pelo reconhecimento de diplomas e pelo exercício de profissões regulamentadas.",
          ],
          subsections: [
            {
              title: "Universidades italianas",
              body: [
                "Instituições que recebem diplomas brasileiros traduzidos para inscrição em cursos e reconhecimento de títulos.",
              ],
              subsubsections: [
                {
                  title: "Sapienza Università di Roma",
                  body: [<>Site: <a href="https://www.uniroma1.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.uniroma1.it</a>.</>],
                },
                {
                  title: "Università di Roma Tor Vergata",
                  body: [<>Site: <a href="https://web.uniroma2.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">web.uniroma2.it</a>.</>],
                },
                {
                  title: "Università Roma Tre",
                  body: [<>Site: <a href="https://www.uniroma3.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.uniroma3.it</a>.</>],
                },
                {
                  title: "LUMSA",
                  body: [<>Site: <a href="https://www.lumsa.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.lumsa.it</a>.</>],
                },
              ],
            },
            {
              title: "Ordens profissionais (Ordini Professionali)",
              body: [
                "Entidades que regulamentam profissões protegidas na Itália (médicos, advogados, engenheiros, arquitetos).",
              ],
              subsubsections: [
                {
                  title: "Principais Conselhos Nacionais",
                  body: [
                    <ul key="orders-list" className="space-y-1">
                      <li>FNOMCeO (médicos): <a href="https://www.fnomceo.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.fnomceo.it</a></li>
                      <li>Consiglio Nazionale Forense (advogados): <a href="https://www.consiglionazionaleforense.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.consiglionazionaleforense.it</a></li>
                      <li>Consiglio Nazionale degli Ingegneri: <a href="https://www.cni.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.cni.it</a></li>
                      <li>Consiglio Nazionale degli Architetti: <a href="https://www.awn.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">www.awn.it</a></li>
                    </ul>,
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Diplomacia e Representação",
          body: [
            "Consulados e Embaixadas que fazem a ponte entre o sistema brasileiro e o italiano.",
          ],
          subsections: [
            {
              title: "Consulados italianos no Brasil",
              body: [
                "Processam pedidos de cidadania, emitem vistos e a Dichiarazione di Valore para estudantes brasileiros.",
              ],
              subsubsections: [
                {
                  title: "Consolato Generale d'Italia a San Paolo",
                  body: [<>Site: <a href="https://consanpaolo.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">consanpaolo.esteri.it</a>.</>],
                },
                {
                  title: "Consolato Generale d'Italia a Rio de Janeiro",
                  body: [<>Site: <a href="https://consriodejaneiro.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">consriodejaneiro.esteri.it</a>.</>],
                },
                {
                  title: "Consolato d'Italia a Belo Horizonte",
                  body: [<>Site: <a href="https://consbelohorizonte.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">consbelohorizonte.esteri.it</a>.</>],
                },
                {
                  title: "Consolato d'Italia a Curitiba",
                  body: [<>Site: <a href="https://conscuritiba.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">conscuritiba.esteri.it</a>.</>],
                },
                {
                  title: "Consolato d'Italia a Porto Alegre",
                  body: [<>Site: <a href="https://consportoalegre.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">consportoalegre.esteri.it</a>.</>],
                },
                {
                  title: "Consolato d'Italia a Recife",
                  body: [<>Site: <a href="https://consrecife.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">consrecife.esteri.it</a>.</>],
                },
                {
                  title: "Ambasciata d'Italia a Brasilia",
                  body: [<>Site: <a href="https://ambbrasilia.esteri.it" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">ambbrasilia.esteri.it</a>.</>],
                },
              ],
            },
            {
              title: "Consulados brasileiros na Itália",
              body: [
                "Representam o Brasil em solo italiano. Emitem passaportes e realizam registros de nascimento e casamento para brasileiros residentes.",
              ],
              subsubsections: [
                {
                  title: "Consulado-Geral do Brasil em Roma",
                  body: [<>Jurisdição sobre o centro e sul da Itália. Site: <a href="https://roma.itamaraty.gov.br" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">roma.itamaraty.gov.br</a>.</>],
                },
                {
                  title: "Consulado-Geral do Brasil em Milão",
                  body: [<>Jurisdição sobre o norte da Itália. Site: <a href="https://milao.itamaraty.gov.br" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">milao.itamaraty.gov.br</a>.</>],
                },
                {
                  title: "Embaixada do Brasil em Roma",
                  body: [<>Representação diplomática do Brasil na Itália. Site: <a href="https://roma.itamaraty.gov.br/pt-br/" target="_blank" rel="noreferrer" className="text-[#d9aa52] underline">roma.itamaraty.gov.br/pt-br/</a>.</>],
                },
              ],
            },
          ],
        },
        {
          title: "Como cada autoridade se relaciona com a tradução juramentada",
          body: [
            "A tradução juramentada é o elo formal entre o documento brasileiro e a autoridade italiana. Identificar o papel do órgão define se a tradução deve ser feita no Brasil ou asseverada na Itália.",
          ],
          subsections: [
            {
              title: "Autoridades que recebem documentos traduzidos",
              body: [
                "Comune (para cidadania e casamento), Tribunale (processos judiciais), Questura (permesso di soggiorno), Università (estudo) e Motorizzazione (CNH). Todas exigem que o conteúdo em português seja vertido para o italiano por profissional habilitado.",
              ],
            },
            {
              title: "Autoridades que emitem documentos italianos para uso no Brasil",
              body: [
                "Comune (estratto di nascimento, certificato di matrimonio), Tribunale (sentença de divórcio) e ordens profissionais. Estes documentos precisam de Apostille na Itália e tradução juramentada para o português antes de serem usados no Brasil.",
              ],
            },
            {
              title: "Autoridades que apostilam documentos italianos",
              body: [
                "Na Itália, a Apostille é emitida pela Procura della Repubblica (atos judiciais e certidões criminais), pela Prefettura (atos administrativos e de estado civil), pela Sovrintendenza Scolastica (documentos escolares) e pelo Ministero della Salute (documentos médicos).",
              ],
            },
          ],
        },
      ]}
      faqs={[]}
      relatedTitle="Guias de apoio"
      relatedLinks={[
        { title: "Como casar na Itália: guia completo", href: "/como-casar-na-italia-brasileiros" },
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
        { title: "Apostila de Haia na Itália", href: "/apostilar-documento-italiano-na-italia" },
      ]}
    />
  );
}
