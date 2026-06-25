import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata, serializeJsonLd } from "../lib/seo";
import { siteUrl } from "../lib/site";
import Link from "next/link";

const pagePath = "/glossario-traducao-juramentada";

type GlossaryTerm = {
  term: string;
  id: string;
  definition: React.ReactNode;
  plainDefinition: string;
};

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Albo CTU",
    id: "albo-ctu",
    definition: "Albo dos Consulentes Tecnicos d&apos;Ufficio, mantido por cada Tribunale italiano. Lista oficial dos peritos e tradutores habilitados a prestar juramento sobre suas traduções perante o Tribunale. O Albo do Tribunale di Roma é público e consultável.",
    plainDefinition: "Albo dos Consulentes Tecnicos d&apos;Ufficio, mantido por cada Tribunale italiano. Lista oficial dos peritos e tradutores habilitados a prestar juramento sobre suas traduções perante o Tribunale. O Albo do Tribunale di Roma é público e consultável."
  },
  {
    term: "Annotazione",
    id: "annotazione",
    definition: "Averbação ou anotação marginal em registro civil italiano. Indica fato superveniente — divórcio, retificação, reconhecimento de paternidade — que altera o conteúdo do assento original.",
    plainDefinition: "Averbação ou anotação marginal em registro civil italiano. Indica fato superveniente — divórcio, retificação, reconhecimento de paternidade — que altera o conteúdo do assento original."
  },
  {
    term: "Apostille",
    id: "apostille",
    definition: "Certificação prevista na Convenção de Haia de 1961 que autentica a origem da assinatura pública de um documento para uso internacional. Substitui a legalização consular entre países signatários. Brasil e Itália são signatários. Veja mais em Apostila de Haia na Itália.",
    plainDefinition: "Certificação prevista na Convenção de Haia de 1961 que autentica a origem da assinatura pública de um documento para uso internacional. Substitui a legalização consular entre países signatários. Brasil e Itália são signatários."
  },
  {
    term: "Asseverazione",
    id: "asseverazione",
    definition: <>Ato pelo qual o tradutor presta juramento perante o <Link href="/autoridades-italianas-documentos-brasileiros#tribunale-ordinario" className="text-[#d9aa52] underline">Tribunale Ordinario</Link> ou o Giudice di Pace italiano sobre a fidelidade da tradução. Confere fé pública à tradução para uso em Itália. Veja <Link href="/traduzione-asseverata-portoghese-italiano" className="text-[#d9aa52] underline">Traduzione asseverata portoghese italiano</Link>.</>,
    plainDefinition: "Ato pelo qual o tradutor presta juramento perante o Tribunale Ordinario ou o Giudice di Pace italiano sobre a fidelidade da tradução. Confere fé pública à tradução para uso em Itália."
  },
  {
    term: "Cancelleria",
    id: "cancelleria",
    definition: "Setor administrativo de um Tribunale italiano. O Ufficio Asseverazioni da cancelleria é onde se prestam juramentos sobre traduções.",
    plainDefinition: "Setor administrativo de um Tribunale italiano. O Ufficio Asseverazioni da cancelleria é onde se prestam juramentos sobre traduções."
  },
  {
    term: "CIMEA",
    id: "cimea",
    definition: <>Centro de Informação sobre Mobilidade e Equivalências Acadêmicas. Avalia diplomas estrangeiros e emite o Statement of Comparability, frequentemente exigido em complemento à <Link href="/dichiarazione-di-valore-traducao-diploma" className="text-[#d9aa52] underline">Dichiarazione di Valore</Link> para inscrição em universidades italianas.</>,
    plainDefinition: "Centro de Informação sobre Mobilidade e Equivalências Acadêmicas. Avalia diplomas estrangeiros e emite o Statement of Comparability, frequentemente exigido em complemento à Dichiarazione di Valore para inscrição em universidades italianas."
  },
  {
    term: "Cittadinanza jure sanguinis",
    id: "cittadinanza-jure-sanguinis",
    definition: "Cidadania italiana transmitida por descendência sanguínea — do ascendente italiano nascido na Itália aos seus descendentes diretos, sem limite geracional histórico. Regulada pela Lei 91/1992 e, desde 2025, pela Lei 74/2025, que introduziu critérios de vínculo efetivo.",
    plainDefinition: "Cidadania italiana transmitida por descendência sanguínea — do ascendente italiano nascido na Itália aos seus descendentes diretos, sem limite geracional histórico. Regulada pela Lei 91/1992 e, desde 2025, pela Lei 74/2025."
  },
  {
    term: "Codice fiscale",
    id: "codice-fiscale",
    definition: "Identificador fiscal italiano emitido pela Agenzia delle Entrate. Equivalente ao CPF brasileiro. Exigido para abrir conta bancária, alugar imóvel, assinar contrato de trabalho, comprar imóvel ou abrir empresa na Itália.",
    plainDefinition: "Identificador fiscal italiano emitido pela Agenzia delle Entrate. Equivalente ao CPF brasileiro. Exigido para abrir conta bancária, alugar imóvel, assinar contrato de trabalho, comprar imóvel ou abrir empresa na Itália."
  },
  {
    term: "Comune",
    id: "comune",
    definition: "Município italiano. Autoridade civil local responsável pelo Ufficio Anagrafe (registro de residentes) e pelo Ufficio Stato Civile (nascimento, casamento, óbito, trascrizione de atos estrangeiros).",
    plainDefinition: "Município italiano. Autoridade civil local responsável pelo Ufficio Anagrafe (registro de residentes) e pelo Ufficio Stato Civile (nascimento, casamento, óbito, trascrizione de atos estrangeiros)."
  },
  {
    term: "Conservatoria",
    id: "conservatoria",
    definition: "Cartório italiano de registro de imóveis (Conservatoria dei Registri Immobiliari). Faz a publicidade legal de propriedade e hipotecas. Substituída pela Agenzia delle Entrate em parte das funções.",
    plainDefinition: "Cartório italiano de registro de imóveis (Conservatoria dei Registri Immobiliari). Faz a publicidade legal de propriedade e hipotecas. Substituída pela Agenzia delle Entrate em parte das funções."
  },
  {
    term: "CTU",
    id: "ctu",
    definition: <>Consulente Tecnico d&apos;Ufficio. Perito nomeado por um juízo italiano para auxiliar em questões técnicas. Tradutores juramentados são frequentemente inscritos no <Link href="/autoridades-italianas-documentos-brasileiros" className="text-[#d9aa52] underline">Albo CTU</Link> do Tribunale.</>,
    plainDefinition: "Consulente Tecnico d&apos;Ufficio. Perito nomeado por um juízo italiano para auxiliar em questões técnicas. Tradutores juramentados são frequentemente inscritos no Albo CTU do Tribunale."
  },
  {
    term: "Delibazione",
    id: "delibazione",
    definition: "Procedimento judicial de reconhecimento e eficácia de sentença estrangeira na Itália. Aplicado para sentenças brasileiras de divórcio, adoção ou interdição antes de serem transcritas no Comune. Veja mais em Tradução de sentença de divórcio.",
    plainDefinition: "Procedimento judicial de reconhecimento e eficácia de sentença estrangeira na Itália. Aplicado para sentenças brasileiras de divórcio, adoção ou interdição antes de serem transcritas no Comune."
  },
  {
    term: "Dichiarazione di Valore",
    id: "dichiarazione-di-valore",
    definition: <>Declaração emitida pelo consulado italiano no Brasil que atesta o valor e a natureza de um título de estudo brasileiro (diploma/histórico). Documento obrigatório para inscrição em universidades italianas. Veja <Link href="/dichiarazione-di-valore-traducao-diploma" className="text-[#d9aa52] underline">Dichiarazione di Valore e tradução de diploma</Link>.</>,
    plainDefinition: "Declaração emitida pelo consulado italiano no Brasil que atesta o valor e a natureza de um título de estudo brasileiro (diploma/histórico). Documento obrigatório para inscrição em universidades italianas."
  },
  {
    term: "Equipollenza",
    id: "equipollenza",
    definition: "Reconhecimento de equivalência total de um título de estudo estrangeiro a um título italiano correspondente. Exige procedimento administrativo específico em universidade ou órgão ministerial.",
    plainDefinition: "Reconhecimento de equivalência total de um título de estudo estrangeiro a um título italiano correspondente. Exige procedimento administrativo específico em universidade ou órgão ministerial."
  },
  {
    term: "Estratto del casellario giudiziale",
    id: "estratto-del-casellario-giudiziale",
    definition: "Certificado de antecedentes criminais italiano emitido pela Procura della Repubblica. Lista condenações penais definitivas no território italiano.",
    plainDefinition: "Certificado de antecedentes criminais italiano emitido pela Procura della Repubblica. Lista condenações penais definitivas no território italiano."
  },
  {
    term: "Estratto di nascimento",
    id: "estratto-di-nascimento",
    definition: "Extrato/certidão de nascimento italiana emitida pelo Comune di nascita. Documento de base no processo de cidadania jure sanguinis para identificar o ascendente italiano que originou o direito.",
    plainDefinition: "Extrato/certidão de nascimento italiana emitida pelo Comune di nascimento. Documento de base no processo de cidadania jure sanguinis para identificar o ascendente italiano que originou o direito."
  },
  {
    term: "Fé pública",
    id: "fe-publica",
    definition: "Valor formal atribuído por lei a atos praticados por autoridade ou profissional habilitado. No Brasil, o tradutor público tem fé pública; na Itália, a fé pública é conferida pela asseverazione perante o Tribunale.",
    plainDefinition: "Valor formal atribuído por lei a atos praticados por autoridade ou profissional habilitado. No Brasil, o tradutor público tem fé pública; na Itália, a fé pública é conferida pela asseverazione perante o Tribunale."
  },
  {
    term: "Foglio rosa",
    id: "foglio-rosa",
    definition: "Autorização provisória para aprendizagem de direção na Itália. Emitida pela Motorizzazione Civile após a aprovação no exame teórico da patente di guida.",
    plainDefinition: "Autorização provisória para aprendizagem de direção na Itália. Emitida pela Motorizzazione Civile após a aprovação no exame teórico da patente di guida."
  },
  {
    term: "Giudice di Pace",
    id: "giudice-di-pace",
    definition: "Órgão judicial de competência menor na Itália. O Ufficio del Giudice di Pace é competente para realizar asseverazioni de traduções português-italiano.",
    plainDefinition: "Órgão judicial de competência menor na Itália. O Ufficio del Giudice di Pace é competente para realizar asseverazioni de traduções português-italiano."
  },
  {
    term: "Inteiro teor",
    id: "inteiro-teor",
    definition: "Certidão brasileira que reproduz integralmente o assento do livro do cartório e todas as suas averbações. Exigida por Comunes e Tribunais para processos de cidadania e divórcio. Veja Tradução juramentada de certidões.",
    plainDefinition: "Certidão brasileira que reproduz integralmente o assento do livro do cartório e todas as suas averbações. Exigida por Comunes e Tribunais para processos de cidadania e divórcio."
  },
  {
    term: "Legalizzazione",
    id: "legalizzazione",
    definition: "Autenticação administrativa de assinatura em documento público. Substituída pela Apostille entre Brasil e Itália. Ainda vigente para países não signatários da Convenção de Haia.",
    plainDefinition: "Autenticação administrativa de assinatura em documento público. Substituída pela Apostille entre Brasil e Itália. Ainda vigente para países não signatários da Convenção de Haia."
  },
  {
    term: "MAECI",
    id: "maeci",
    definition: "Ministero degli Affari Esteri e della Cooperazione Internazionale. Órgão que coordena a rede consular italiana no Brasil e a política externa italiana.",
    plainDefinition: "Ministero degli Affari Esteri e della Cooperazione Internazionale. Órgão que coordena a rede consular italiana no Brasil e a política externa italiana."
  },
  {
    term: "Marca da bollo",
    id: "marca-da-bollo",
    definition: "Selo fiscal italiano que representa o pagamento de taxas administrativas ao Estado. Exigida em asseverazioni, pedidos de permesso di soggiorno e atos notariais.",
    plainDefinition: "Selo fiscal italiano que representa o pagamento de taxas administrativas ao Estado. Exigida em asseverazioni, pedidos de permesso di soggiorno e atos notariais."
  },
  {
    term: "Motorizzazione",
    id: "motorizzazione",
    definition: <>Motorizzazione Civile (UMC). Órgão italiano responsável por habilitação de condutores (patente di guida), registro de veículos e procedimentos de trânsito. Veja <Link href="/traducao-cnh-dirigir-na-italia" className="text-[#d9aa52] underline">Tradução juramentada de CNH</Link>.</>,
    plainDefinition: "Motorizzazione Civile (UMC). Órgão italiano responsável por habilitação de condutores (patente di guida), registro de veículos e procedimentos de trânsito."
  },
  {
    term: "MUR",
    id: "mur",
    definition: "Ministero dell'Università e della Ricerca. Órgão central que regula o sistema universitário e a pesquisa científica na Itália.",
    plainDefinition: "Ministero dell'Università e della Ricerca. Órgão central que regula o sistema universitário e a pesquisa científica na Itália."
  },
  {
    term: "Notaio",
    id: "notaio",
    definition: "Notário italiano. Profissional com fé pública responsável por atos imobiliários, societários, sucessórios e solenes na Itália.",
    plainDefinition: "Notário italiano. Profissional com fé pública responsável por atos imobiliários, societários, sucessórios e solenes na Itália."
  },
  {
    term: "Nulla Osta al matrimonio",
    id: "nulla-osta-al-matrimonio",
    definition: <>Documento que atesta a ausência de impedimentos legais para o casamento. Para brasileiros na Itália, é emitido pelo Consulado do Brasil e deve ser legalizado na Prefettura antes do uso no Comune. Veja <Link href="/traducao-documentos-casamento-italia" className="text-[#d9aa52] underline">Documentos para casamento na Itália</Link>.</>,
    plainDefinition: "Documento que atesta a ausência de impedimentos legais para o casamento. Para brasileiros na Itália, é emitido pelo Consulado do Brasil e deve ser legalizado na Prefettura antes do uso no Comune."
  },
  {
    term: "Ordine professionale",
    id: "ordine-professionale",
    definition: "Conselho ou ordem que regulamenta profissões protegidas na Itália (médicos, advogados, engenheiros). Exige reconhecimento de título para inscrição de estrangeiros.",
    plainDefinition: "Conselho ou ordem que regulamenta profissões protegidas na Itália (médicos, advogados, engenheiros). Exige reconhecimento de título para inscrição de estrangeiros."
  },
  {
    term: "Patente di guida",
    id: "patente-di-guida",
    definition: "Carteira nacional de habilitação italiana. Obtida por brasileiros residentes na Itália via conversão (conforme acordo) ou novo exame.",
    plainDefinition: "Carteira nacional de habilitação italiana. Obtida por brasileiros residentes na Itália via conversão (conforme acordo) ou novo exame."
  },
  {
    term: "Permesso di soggiorno",
    id: "permesso-di-soggiorno",
    definition: <>Título de permanência obrigatório para cidadãos não europeus que residem na Itália por mais de 90 dias. Emitido pela Questura conforme o motivo (trabalho, estudo, família, cidadania). Veja <Link href="/documentos-traducao-permesso-di-soggiorno" className="text-[#d9aa52] underline">Documentos para permesso di soggiorno</Link>.</>,
    plainDefinition: "Título de permanência obrigatório para cidadãos não europeus que residem na Itália por mais de 90 dias. Emitido pela Questura conforme o motivo (trabalho, estudo, família, cidadania)."
  },
  {
    term: "Prefettura UTG",
    id: "prefettura-utg",
    definition: "Prefettura - Ufficio Territoriale del Governo. Representação provincial do Ministério do Interior. Competente para legalizar assinaturas de funcionários consulares e apostilar atos administrativos italianos.",
    plainDefinition: "Prefettura - Ufficio Territoriale del Governo. Representação provincial do Ministério do Interior. Competente para legalizar assinaturas de funcionários consulares e apostilar atos administrativos italianos."
  },
  {
    term: "Procura della Repubblica",
    id: "procura-della-repubblica",
    definition: "Órgão do Ministério Público junto a cada Tribunale. Competente para apostilar atos judiciais italianos e certidões de antecedentes criminais.",
    plainDefinition: "Órgão do Ministério Público junto a cada Tribunale. Competente para apostilar atos judiciais italianos e certidões de antecedentes criminais."
  },
  {
    term: "Questura",
    id: "questura",
    definition: "Autoridade de segurança pública provincial subordinada ao Ministério do Interior. Responsável pela emissão do permesso di soggiorno e controle de imigração.",
    plainDefinition: "Autoridade de segurança pública provincial subordinada ao Ministério do Interior. Responsável pela emissão do permesso di soggiorno e controle de imigração."
  },
  {
    term: "Rettifica",
    id: "rettifica",
    definition: "Correção formal de dados em registro civil brasileiro ou italiano. Realizada administrativamente no cartório ou via judicial quando há divergência relevante.",
    plainDefinition: "Correção formal de dados em registro civil brasileiro ou italiano. Realizada administrativamente no cartório ou via judicial quando há divergência relevante."
  },
  {
    term: "Ricongiungimento familiare",
    id: "ricongiungimento-familiare",
    definition: "Procedimento para trazer familiares de cidadão residente na Itália. Exige prova de vínculo, renda e habitação, com documentação brasileira traduzida e apostilada.",
    plainDefinition: "Procedimento para trazer familiares de cidadão residente na Itália. Exige prova de vínculo, renda e habitação, com documentação brasileira traduzida e apostilada."
  },
  {
    term: "Sovrintendenza Scolastica",
    id: "sovrintendenza-scolastica",
    definition: "Órgão regional de supervisão escolar italiano. Emite Apostille de Haia em diplomas e certificados de escolas públicas italianas (ensino fundamental e médio).",
    plainDefinition: "Órgão regional de supervisão escolar italiano. Emite Apostille de Haia em diplomas e certificados de escolas públicas italianas (ensino fundamental e médio)."
  },
  {
    term: "Stato Civile",
    id: "stato-civile",
    definition: "Setor do Comune responsável pelo registro de nascimentos, casamentos, óbitos e atos de cidadania. Onde se solicita a transcrição de documentos brasileiros na Itália.",
    plainDefinition: "Setor do Comune responsável pelo registro de nascimentos, casamentos, óbitos e atos de cidadania. Onde se solicita a transcrição de documentos brasileiros na Itália."
  },
  {
    term: "Trascrizione",
    id: "trascrizione",
    definition: "Inscrição de um ato estrangeiro (nascimento, casamento, óbito ocorrido no Brasil) nos registros do Comune italiano. Essencial para que o ato produza efeitos na Itália.",
    plainDefinition: "Inscrição de um ato estrangeiro (nascimento, casamento, óbito ocorrido no Brasil) nos registros do Comune italiano. Essencial para que o ato produza efeitos na Itália."
  },
  {
    term: "Tribunale Ordinario",
    id: "tribunale-ordinario",
    definition: "Tribunal de primeira instância de competência geral na Itália. Onde se realizam as asseverazioni e tramitam ações de cidadania por via judicial.",
    plainDefinition: "Tribunal de primeira instância de competência geral na Itália. Onde se realizam as asseverazioni e tramitam ações de cidadania por via judicial."
  },
  {
    term: "Verbale di giuramento",
    id: "verbale-di-giuramento",
    definition: "Termo assinado pelo tradutor perante o funcionário judicial na asseverazione. Nele o tradutor assume responsabilidade civil e penal pela fidelidade da tradução.",
    plainDefinition: "Termo assinado pelo tradutor perante o funcionário judicial na asseverazione. Nele o tradutor assume responsabilidade civil e penal pela fidelidade da tradução."
  }
].sort((a, b) => a.term.localeCompare(b.term));

export const metadata: Metadata = createPageMetadata({
  title: "Glossário da tradução juramentada português italiano | Termos técnicos",
  description:
    "Glossário definitivo dos termos da tradução juramentada e dos procedimentos italianos: asseverazione, marca da bollo, dichiarazione di valore, inteiro teor e Apostille.",
  path: pagePath,
});

export default function Page() {
  const alphabet = Array.from(new Set(glossaryTerms.map(t => t.term[0].toUpperCase()))).sort();

  const definedTermSetJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${siteUrl}${pagePath}#defined-term-set`,
    "name": "Glossário da tradução juramentada português italiano",
    "url": `${siteUrl}${pagePath}`,
    "hasDefinedTerm": glossaryTerms.map(t => ({
      "@type": "DefinedTerm",
      "@id": `${siteUrl}${pagePath}#${t.id}`,
      "name": t.term,
      "description": t.plainDefinition,
      "inDefinedTermSet": `${siteUrl}${pagePath}#defined-term-set`
    }))
  };

  return (
    <ArticlePage
      eyebrow="Referência Técnica"
      title="Glossário da tradução juramentada português-italiano"
      pagePath={pagePath}
      schemaType="Article"
      datePublished="2026-06-06"
      dateModified="2026-06-06"
      description="Definições concretas e técnicas de termos usados em traduções e procedimentos documentais entre Brasil e Itália."
      intro="Termos brasileiros e italianos exigem precisão terminológica. Este glossário reúne definições assertivas para orientar a preparação de documentos para cidadania, casamento, estudo e imigração na Itália. Cada termo é ancorado na legislação e na prática administrativa vigente."
      sections={[
        {
          title: "Navegação A-Z",
          body: [
            <nav key="az" className="flex flex-wrap gap-2 mb-8">
              {alphabet.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="grid size-10 place-items-center rounded-[4px] border border-[#c99a45]/30 bg-[#0b1a29] text-sm font-bold text-[#d9aa52] transition hover:bg-[#d9aa52] hover:text-[#0b1a29]"
                >
                  {letter}
                </a>
              ))}
            </nav>,
            <dl key="glossary" className="space-y-0">
              {alphabet.map(letter => (
                <div key={letter} id={`letter-${letter}`} className="pt-8">
                  <h2 className="border-b border-[#c99a45]/30 pb-2 font-serif text-4xl text-[#d9aa52]">{letter}</h2>
                  <div className="divide-y divide-[#c99a45]/10">
                    {glossaryTerms.filter(t => t.term[0].toUpperCase() === letter).map((t) => (
                      <div key={t.id} className="py-6">
                        <dt id={t.id} className="font-serif text-2xl text-white scroll-mt-32">
                          {t.term}
                        </dt>
                        <dd className="mt-3 text-lg leading-8 text-white/76 text-justify">
                          {t.definition}
                        </dd>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </dl>,
          ],
        },
      ]}
      faqs={[]}
      relatedTitle="Dúvida sobre algum termo deste glossário?"
      relatedLinks={[
        { title: "Envie a sua pergunta pelo WhatsApp. Respondemos sem custo, antes de qualquer orçamento.", href: "https://wa.me/393924605784" }
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(definedTermSetJsonLd) }}
      />
    </ArticlePage>
  );
}
