import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traducao-juramentada-roma";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada em Roma | Português italiano para brasileiros",
  description:
    "Tradução juramentada português italiano para brasileiros em Roma: Comune, Tribunale, Questura, Motorizzazione e Università. Atendimento no Lazio.",
  path: pagePath,
  languages: {
    "pt-BR": pagePath,
    "it-IT": "/traduzione-giurata-portoghese-italiano-roma",
  },
  ogTitle: "Tradução juramentada em Roma — atendimento em português",
  ogDescription:
    "Para brasileiros em Roma e no Lazio que precisam apresentar documentos no Comune, Tribunale, Questura, Università ou Motorizzazione.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Roma e Lazio"
      title="Tradução juramentada em Roma para brasileiros"
      pagePath={pagePath}
      schemaType="LocalBusiness"
      areaServed="Roma"
      serviceType="Tradução juramentada português italiano em Roma"
      audienceType="Brasileiros residentes em Roma e no Lazio"
      description="Serviço especializado de tradução juramentada português italiano para brasileiros em Roma e no Lazio."
      intro="Roma concentra a maior comunidade brasileira da Itália e a maior demanda por tradução juramentada português ↔ italiano do país. O Comune di Roma Capitale, o Tribunale Ordinario di Roma, a Questura di Roma, a Università La Sapienza, a Motorizzazione Civile e o Consolato Generale do Brasil são, juntos, o palco diário de milhares de pedidos de cidadania, permesso di soggiorno, celebração de casamento, inscrição em universidade e conversão de CNH. Este guia detalha como o serviço de tradução juramentada funciona para brasileiros em Roma e em toda a região do Lazio, assegurando que seus documentos cumpram as exigências rigorosas das autoridades romanas."
      sections={[
        {
          title: "Por que Roma concentra a maior demanda por tradução juramentada",
          body: [
            "Roma não é apenas a capital política, mas o epicentro administrativo para brasileiros na Itália. A cidade abriga as principais sedes de órgãos que decidem o futuro de processos de imigração e cidadania.",
          ],
          subsections: [
            {
              title: "Comunidade brasileira em Roma e no Lazio",
              body: [
                "A presença histórica de brasileiros em Roma — que inclui de estudantes a diplomatas, de religiosos a profissionais de tecnologia — gera um fluxo constante de documentos. Os processos de ricongiungimento familiare, registro de nascimento de filhos, casamentos civis e renovações de permesso di soggiorno exigem traduções que mantenham a fé pública entre os dois sistemas jurídicos.",
              ],
            },
            {
              title: "Tribunale di Roma: Sede da via judicial 1948",
              body: [
                "O Tribunale Ordinario di Roma, localizado em Viale Giulio Cesare 52, é o foro competente para a vasta maioria das ações judiciais de reconhecimento de cidadania italiana pela via materna ou pela chamada Lei 1948. Toda a pasta documental brasileira, que inclui certidões de nascimento, casamento e óbito de múltiplas gerações, precisa passar por uma tradução juramentada asseverata antes de ser protocolada pelo advogado italiano.",
              ],
            },
            {
              title: "Consolato Generale do Brasil em Roma",
              body: [
                "Situado na Piazza Pasquino 8, o consulado brasileiro em Roma é responsável pelos atos de registro civil de brasileiros residentes no centro e sul da Itália. Frequentemente, documentos italianos precisam ser traduzidos para o português para inscrições consulares, enquanto certidões brasileiras traduzidas para o italiano são enviadas para os Comunes da jurisdição.",
              ],
            },
          ],
        },
        {
          title: "Onde a tradução juramentada é exigida em Roma",
          body: [
            "Cada autoridade em Roma possui critérios específicos de aceitação. Conhecer a praxe de cada sportello é fundamental para evitar recusas.",
          ],
          subsections: [
            {
              title: "Comune di Roma Capitale — Anagrafe e Stato Civile",
              body: [
                "O [Comune di Roma Capitale](/autoridades-italianas-documentos-brasileiros#comune-di-roma-capitale), organizado em 15 Municipi territoriais, processa o reconhecimento de cidadania por residência e o registro de matrimônios celebrados no exterior. Seja no Municipio I (Centro Histórico) ou no Municipio X (Ostia), as certidões brasileiras de inteiro teor devem chegar acompanhadas de tradução juramentada oficial.",
              ],
            },
            {
              title: "Questura di Roma — Permesso di Soggiorno",
              body: [
                "A [Questura di Roma](/autoridades-italianas-documentos-brasileiros#questura-di-roma), com sede principal na Via San Vitale 15, gerencia a imigração na capital. Para pedidos de permesso por motivos de família, estudo ou cidadania, os antecedentes criminais e certidões brasileiras devem estar traduzidos por tradutor habilitado perante o sistema italiano.",
              ],
            },
            {
              title: "Università di Roma — La Sapienza, Tor Vergata e Roma Tre",
              body: [
                "As universidades romanas figuram entre as mais procuradas por brasileiros. A Sapienza Università di Roma, a Tor Vergata e a Roma Tre exigem a tradução juramentada do diploma e do histórico escolar como parte do dossiê de matrícula ou para o Statement of Comparability do CIMEA.",
              ],
            },
            {
              title: "Motorizzazione Civile di Roma — Conversão de CNH",
              body: [
                "Para brasileiros que residem em Roma há mais de um ano, a conversão da CNH brasileira em Patente di Guida italiana é obrigatória. O processo ocorre na Motorizzazione Civile (UMC Roma), geralmente na Via Laurentina 888, e exige a tradução juramentada completa da habilitação brasileira.",
              ],
            },
            {
              title: "Notai e atos notariais em Roma",
              body: [
                "Notai romanos são essenciais para a compra de imóveis na capital ou para a constituição de sociedades (SRL/SPA). Documentos brasileiros como procurações e estatutos sociais devem ser traduzidos e asseverados para que o notaio possa lavrar o ato com segurança jurídica.",
              ],
            },
          ],
        },
        {
          title: "Tradução asseverata no Tribunale di Roma",
          body: [
            "A asseverazione (ou tradução giurata) é o ato formal que confere validade legal à tradução em solo italiano. É o procedimento mais seguro para quem apresenta documentos em Roma.",
          ],
          subsections: [
            {
              title: "Ufficio Asseverações e Giudice di Pace",
              body: [
                "O procedimento é realizado no Ufficio Asseverazioni do Tribunale Ordinario di Roma ou perante o Giudice di Pace di Roma (Via Teulada 28). O tradutor presta juramento solene de que a tradução é fiel ao original, unindo o documento brasileiro à versão italiana e ao verbale di giuramento.",
              ],
            },
            {
              title: "Custas e Marca da Bollo em Roma",
              body: [
                "Cada tradução asseverada em Roma exige a aplicação da marca da bollo conforme a tabela administrativa vigente do Ministério da Justiça italiano. O valor da marca é uma taxa estadual e não faz parte do honorário profissional do tradutor. Em Roma, o controle da aplicação das marcas é rigoroso e segue a contagem exata de linhas ou páginas do documento.",
              ],
            },
          ],
        },
        {
          title: "Apostila de Haia para uso em Roma",
          body: [
            "Nenhum documento brasileiro é aceito pelas autoridades romanas sem a Apostila de Haia. Ela deve ser obtida em cartório no Brasil antes de o documento ser enviado para tradução na Itália. Da mesma forma, se você possui um documento emitido em Roma (como um estratto di nascita) para uso no Brasil, ele deve ser apostilado na Prefettura di Roma ou na Procura della Repubblica di Roma.",
          ],
        },
        {
          title: "Documentos mais traduzidos por brasileiros em Roma",
          body: [
            "Nossa prática diária em Roma envolve uma gama diversificada de documentos, cada um com sua terminologia técnica específica:",
            "1. **Certidões para Cidadania**: Nascimento, casamento e óbito de toda a linha ascendente para processos judiciais ou administrativos.",
            "2. **Habilitação (CNH)**: Para o processo de conversione na Motorizzazione Civile di Roma.",
            "3. **Diplomas e Históricos**: Para ingresso na Sapienza ou reconhecimento de títulos profissionais.",
            "4. **Antecedentes Criminais**: Obrigatórios para pedidos de cidadania por casamento e renovações de permesso.",
            "5. **Sentenças de Divórcio**: Necessárias para a trascrizione no Comune di Roma e atualização do estado civil.",
          ],
        },
        {
          title: "Hub de tradução para o Lazio e Sul da Itália",
          body: [
            "Embora sediados em Roma, atendemos brasileiros em toda a região do Lazio e em cidades do sul da Itália onde não há tradutores juramentados brasileiros disponíveis.",
          ],
          subsections: [
            {
              title: "Atendimento em Frascati, Tivoli e Castelli Romani",
              body: [
                "Brasileiros residentes em Frascati, Albano Laziale, Marino e Tivoli utilizam nossos serviços via WhatsApp e correio expresso, garantindo o padrão de qualidade exigido pelos Tribunais da província.",
              ],
            },
            {
              title: "Fiumicino, Ciampino e Litoral Romano",
              body: [
                "Atendemos com frequência brasileiros que fixam residência em Fiumicino, Ladispoli e Civitavecchia, áreas com forte presença de trabalhadores brasileiros e necessidade constante de regularização documental.",
              ],
            },
            {
              title: "Latina, Frosinone, Viterbo e Rieti",
              body: [
                "As demais capitais de província do Lazio são cobertas pelo nosso atendimento remoto. A asseverazione é feita em Roma e o documento final segue por correio rastreado (Poste Italiane ou courier) diretamente para o endereço do cliente.",
              ],
            },
          ],
        },
        {
          title: "Vantagens da tradução juramentada com base em Roma",
          body: [
            "Ter um tradutor com prática local em Roma oferece vantagens operacionais claras: conhecimento profundo das preferências de formato do Comune di Roma Capitale, familiaridade com os prazos do Tribunale Ordinario e agilidade na obtenção de marcas da bollo e legalizações complementares. Esse 'know-how' local evita que seu processo seja travado por detalhes técnicos ou burocráticos menores.",
          ],
        },
        {
          title: "Empresas e Organismos Internacionais (FAO, IFAD, PAM)",
          body: [
            "Roma é sede de importantes organismos internacionais e embaixadas. Atendemos funcionários e consultores brasileiros dessas instituições que precisam traduzir contratos de trabalho, documentos de previdência e diplomas para fins de visto diplomático ou de serviço, sempre com o rigor terminológico exigido por instituições multilaterais.",
          ],
        },
        {
          title: "Como funciona o atendimento bilíngue em Roma",
          body: [
            "O serviço é prestado nos dois idiomas, garantindo que tanto o cidadão brasileiro quanto a autoridade ou parceiro italiano compreendam todas as etapas. A comunicação inicial é feita inteiramente em português pelo WhatsApp, onde analisamos fotos ou PDFs dos documentos e fornecemos o orçamento fechado. A entrega dos documentos físicos originais e a retirada das traduções prontas são coordenadas de forma a garantir a máxima conveniência para quem vive ou trabalha na capital italiana.",
          ],
        },
        {
          title: "Tradução Italiano-Português para Brasileiros",
          body: [
            "Além da vertente português-italiano, realizamos a tradução de documentos italianos para uso no Brasil ou no Consulado. Certidões de nascimento emitidas pelo Comune, sentenças de tribunais italianos e certificados de residência são traduzidos para o português com fidelidade absoluta, facilitando registros consulares e processos de sucessão no Brasil.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Preciso ir pessoalmente até Roma para realizar a tradução juramentada?",
          answer:
            "Não é necessário o deslocamento físico para a fase de análise e orçamento, que são realizados via WhatsApp. Para a tradução asseverata, você pode enviar os documentos originais por correio ou courier para nosso endereço em Roma. A entrega final da tradução pronta também pode ser feita via correio rastreado para qualquer cidade da Itália ou do mundo.",
        },
        {
          question: "Quanto tempo demora o juramento no Tribunale di Roma?",
          answer:
            "A asseverazione no Tribunale Ordinario di Roma depende do sistema de agendamento do órgão. Em média, o processo leva de 3 a 7 dias úteis após o recebimento dos originais. Casos de urgência comprovada são analisados para antecipação conforme a disponibilidade dos sportelli judiciais.",
        },
        {
          question: "A tradução feita em Roma é aceita em Milão ou Nápoles?",
          answer:
            "Sim. A tradução asseverata (giurata) realizada em qualquer Tribunale da Itália tem fé pública nacional. Portanto, um documento traduzido e jurado em Roma possui validade plena e deve ser aceito em Comunes, universidades ou Questuras de Milão, Nápoles, Turim, Bolonha e qualquer outra localidade em território italiano.",
        },
        {
          question: "Qual o valor da marca da bollo para traduções em Roma?",
          answer:
            "O valor da marca da bollo é fixado por lei nacional e aplicado conforme o número de páginas ou linhas da tradução (geralmente uma marca a cada 4 páginas). Em Roma, esse valor é repassado ao cliente como custo administrativo, de forma transparente e separada dos honorários profissionais de tradução.",
        },
        {
          question: "Vocês atendem brasileiros residentes em cidades menores do Lazio?",
          answer:
            "Sim. Atendemos brasileiros em todas as províncias do Lazio (Latina, Viterbo, Frosinone, Rieti). A logística é simplificada através do envio digital para análise e o trâmite físico via correio seguro, garantindo que o residente em cidades menores tenha acesso à mesma qualidade de tradução da capital.",
        },
        {
          question: "Como saber se meu documento brasileiro precisa de inteiro teor para o Comune de Roma?",
          answer:
            "O Comune di Roma Capitale exigem certidões de nascimento e casamento em 'inteiro teor' para processos de cidadania. Emitir a via de inteiro teor no Brasil evita que o funcionário romano recuse o documento por falta de informações que constam apenas no livro do cartório.",
        },
        {
          question: "O serviço de tradução em Roma inclui a obtenção do Código Fiscale?",
          answer:
            "Nosso foco principal é a tradução juramentada e a orientação documental. No entanto, orientamos nossos clientes brasileiros em Roma sobre como e onde solicitar o Codice Fiscale na Agenzia delle Entrate local, indicando quais traduções são necessárias para facilitar o pedido.",
        },
        {
          question: "É possível traduzir documentos brasileiros para o Consulado do Brasil em Roma?",
          answer:
            "Sim. Realizamos a tradução de documentos italianos para o português para que brasileiros possam registrar nascimentos, casamentos ou óbitos perante o Consulado-Geral do Brasil em Roma, seguindo rigorosamente os padrões de formato exigidos pela autoridade consular brasileira.",
        },
      ]}
      relatedTitle="Conteúdo complementar"
      relatedLinks={[
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução juramentada de certidões brasileiras", href: "/traducao-juramentada-certidoes" },
        { title: "Conversão de CNH brasileira em Roma", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Autoridades italianas em Roma — endereços e guias", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Traduzione giurata portoghese italiano a Roma (IT)", href: "/traduzione-giurata-portoghese-italiano-roma" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
      ]}
    />
  );
}
