import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traducao-juramentada-brasileiro-residente-italia";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada para brasileiro residente na Itália | Guia prático",
  description:
    "Guia completo para brasileiros na Itália: como obter, apostilar e traduzir documentos do Brasil para cidadania, casamento, permesso, CNH e diplomas.",
  path: pagePath,
  ogTitle: "Guia de tradução juramentada para brasileiros residentes na Itália",
  ogDescription: "Passo a passo para regularizar documentos brasileiros (certidões, CNH, diplomas) perante autoridades italianas.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Brasileiros na Itália"
      title="Tradução juramentada para brasileiro residente na Itália — guia prático"
      pagePath={pagePath}
      schemaType="Service"
      areaServed="Itália"
      serviceType="Orientação e tradução juramentada para brasileiros residentes na Itália"
      audienceType="Brasileiros residentes na Itália"
      description="Guia prático e técnico de tradução juramentada para brasileiros que já residem em solo italiano."
      intro="Residir na Itália exige a apresentação frequente de documentos brasileiros traduzidos e apostilados. Certidões de nascimento, antecedentes criminais, diplomas e CNH são peças fundamentais em processos de cidadania, casamento, imigração (permesso di soggiorno) e exercício profissional. Este guia organiza a logística de obtenção de documentos no Brasil e o percurso correto para a tradução juramentada sem sair da Itália, detalhando cada autoridade e procedimento envolvido para garantir que sua pasta documental seja aceita sem questionamentos."
      sections={[
        {
          title: "Obtenção de documentos brasileiros à distância",
          body: [
            "Certidões brasileiras são pedidas por familiar autorizado no cartório de origem ou pela Central Nacional de Cartórios (registrocivil.org.br) com pagamento online. O apostilamento é feito em qualquer cartório de notas credenciado pelo CNJ. Os originais apostilados seguem para a Itália por SEDEX Mundi ou courier (DHL, FedEx) com rastreamento.",
            "Certidões de antecedentes criminais são emitidas gratuitamente no portal da Polícia Federal (https://servicos.dpf.gov.br). O documento tem validade administrativa estrita de 90 dias para uso na Itália e deve obrigatoriamente ser apostilado no Brasil antes de ser submetido à tradução juramentada. Apresentar um antecedente emitido há mais de 3 meses resulta em recusa imediata pela Questura ou pelo Comune.",
          ],

        },
        {
          title: "Tabela: Documento brasileiro × Onde obter × Validade",
          body: [
            "Esta tabela resume os canais oficiais e os prazos típicos de aceitação pelas autoridades italianas para os documentos mais comuns solicitados a brasileiros residentes. Considere sempre o tempo de trânsito internacional ao planejar a emissão:",
          ],
          table: {
            headers: ["Documento brasileiro", "Onde se obtém", "Validade na Itália"],
            rows: [
              ["Certidão de Nascimento (Inteiro Teor)", "Cartório de origem ou registrocivil.org.br", "Prazo de 6 meses"],
              ["Certidão de Casamento (Inteiro Teor)", "Cartório de origem ou registrocivil.org.br", "Prazo de 6 meses"],
              ["Certidão de Óbito", "Cartório de origem ou registrocivil.org.br", "Permanente (exige via recente)"],
              ["Antecedentes Criminais (PF)", "Site da Polícia Federal", "90 dias"],
              ["Diploma e Histórico Escolar", "Instituição de Ensino original", "Permanente"],
              ["CNH (Carteira de Habilitação)", "Detran do estado de emissão", "Até o vencimento impresso"],
              ["Sentença de Divórcio", "Tribunal de Justiça onde correu o processo", "Permanente (averbação recente)"],
              ["Certidões de Objeto e Pé (Judiciais)", "Secretaria do Tribunal competente", "90 a 180 dias"],
            ],
          },
        },
        {
          title: "Apostila de Haia no Brasil para uso na Itália",
          body: [
            "Todo documento público brasileiro só produz efeito legal na Itália se contiver a Apostila de Haia. Ela é um selo físico ou eletrônico que certifica a autenticidade da assinatura do funcionário público que emitiu o documento original no Brasil, eliminando a necessidade de legalização consular.",
            "O apostilamento é feito em qualquer cartório de notas credenciado pelo CNJ (Conselho Nacional de Justiça). Se você está na Itália, deve coordenar com um familiar ou representante no Brasil para que o documento original seja levado ao cartório. A lista completa de cartórios habilitados está disponível no portal oficial do CNJ (https://www.cnj.jus.br).",
            "A sequência correta é imutável e deve ser rigorosamente seguida. Primeiro emite-se o documento atualizado, depois apostila-se no Brasil, e só então realiza-se a [tradução juramentada](/traducao-juramentada-italiano). Tentar traduzir um documento sem a apostila obrigatória invalida a tradução para fins de asseverazione na Itália, pois o juramento do tradutor deve cobrir o documento já legalizado para uso internacional.",
          ],
        },
        {
          title: "Logística e envio internacional de documentos",
          body: [
            "Para que a tradução seja asseverada (jurada) no Tribunale italiano, o tradutor precisa obrigatoriamente ter em mãos o documento original brasileiro apostilado. O envio do Brasil para a Itália deve ser feito por métodos seguros e rastreáveis para evitar o extravio de certidões únicas ou documentos históricos de difícil reposição.",
            "As opções recomendadas para brasileiros residentes são o SEDEX Mundi (Correios) ou couriers privados como DHL e FedEx. O custo do envio internacional por courier varia entre R$ 250 e R$ 450, chegando ao destino em 3 a 5 dias úteis. O rastreamento é essencial para garantir que a pasta documental chegue intacta ao tradutor para o início do procedimento de asseverazione perante o juiz de paz ou funcionário judicial.",
          ],
        },
        {
          title: "Codice Fiscale e Permesso di Soggiorno",
          body: [
            "Se você fixou residência na Itália ou pretende fazê-lo, dois documentos são indispensáveis e exigem documentação brasileira traduzida com fé pública:",
            "**Codice Fiscale**: identificador fiscal emitido pela Agenzia delle Entrate (equivalente ao CPF). É exigido para abrir conta bancária, alugar imóvel, assinar contrato de trabalho, comprar veículo ou abrir empresa (Partita IVA). Para brasileiros residentes, pode ser solicitado diretamente na Agenzia das Entrate na Itália apresentando o passaporte e, em alguns casos, a certidão de nascimento traduzida para comprovar a grafia correta do nome.",
            "**Permesso di Soggiorno**: título de permanência para cidadãos não europeus que residem na Itália por mais de 90 dias. O pedido é iniciado via kit postale nas agências das Poste Italiane (Sportello Amico) ou diretamente na Questura, conforme o motivo (trabalho, estudo, família, espera de cidadania). Exige o pagamento da marca da bollo de € 16, taxa administrativa e a apresentação de certidões brasileiras (nascimento, casamento) com tradução juramentada para provar o vínculo familiar ou o estado civil atualizado.",
          ],
        },
        {
          title: "Tradução de CNH e Conversão (Patente di Guida)",
          body: [
            "Brasileiros que residem na Itália podem dirigir com a CNH brasileira válida acompanhada de tradução juramentada por até um ano (12 meses) a partir da data de fixação da residência anagráfica (iscrizione anagrafica). Após esse prazo, é obrigatório converter a habilitação brasileira para a italiana (Patente di Guida) para continuar conduzindo veículos.",
            "A conversão é solicitada na Motorizzazione Civile e exige a CNH original física e válida, tradução juramentada oficial e atestado médico emitido por autoridade sanitária italiana (ASL). O acordo bilateral entre Brasil e Itália permite a conversão direta sem a necessidade de novos exames práticos ou teóricos para as categorias A e B, desde que o condutor cumpra rigorosamente os prazos e requisitos de residência.",
          ],
        },
        {
          title: "Divórcio Brasileiro e Reconhecimento na Itália",
          body: [
            "Sentenças de divórcio proferidas no Brasil não têm efeito automático na Itália. Para que um brasileiro ou cidadão ítalo-brasileiro possa contrair novo matrimônio ou atualizar seu estado civil no Comune, a sentença de divórcio deve ser transcrita (trascrizione).",
            "O procedimento exige a sentença judicial completa ou a escritura pública de divórcio, com a certidão de trânsito em julgado, devidamente apostiladas e acompanhadas de tradução juramentada. O Comune analisa se o divórcio respeita os princípios de ordem pública italiana antes de efetuar a anotação marginal na certidão de casamento italiana ou na trascrizione do ato brasileiro.",
          ],
        },
        {
          title: "Reconhecimento de Diploma e Títulos de Estudo",
          body: [
            "Para trabalhar em profissões regulamentadas ou prosseguir nos estudos em universidades italianas, o diploma brasileiro precisa de reconhecimento formal. O processo envolve a obtenção da Dichiarazione di Valore no Consulado Italiano no Brasil ou o Statement of Comparability do CIMEA na Itália.",
            "Ambos os procedimentos exigem a tradução juramentada do diploma e do histórico escolar integral. As universidades italianas (como Sapienza, Tor Vergata, Milano Statale, Bologna) são extremamente rigorosas quanto à terminologia acadêmica. A tradução deve refletir com exatidão a carga horária, as notas convertidas conforme o sistema italiano e o conteúdo programático das disciplinas cursadas no Brasil.",
          ],
        },
        {
          title: "Casamento de brasileiros na Itália e Nulla Osta",
          body: [
            "Brasileiros que desejam casar civilmente na Itália perante o Ufficio Stato Civile do Comune precisam obrigatoriamente apresentar o Nulla Osta al Matrimonio. Este documento declara a ausência de impedimentos legais ao casamento e é emitido pelo Consulado do Brasil na Itália (Roma ou Milão), devendo ser posteriormente legalizado na Prefettura italiana da província.",
            "Além do Nulla Osta, o Comune exige a certidão de nascimento brasileira original (via recente de inteiro teor), apostilada no Brasil e com tradução juramentada. Se o nubente for divorciado ou viúvo, as sentenças de divórcio ou certidões de óbito também devem compor a pasta documental, todas devidamente traduzidas e apostiladas no Brasil conforme as normas da Convenção de Haia.",
          ],
        },
        {
          title: "Reunificação Familiar (Ricongiungimento Familiare)",
          body: [
            "Brasileiros residentes legais na Itália têm o direito de trazer seus familiares (cônjuges, filhos menores, pais dependentes) através do processo de Ricongiungimento Familiare. Este procedimento é iniciado perante o Sportello Unico per l'Immigrazione da Prefettura local.",
            "A prova do vínculo familiar é feita por meio de certidões de nascimento e casamento brasileiras, que devem ser emitidas em inteiro teor, apostiladas no Brasil e traduzidas de forma juramentada. A tradução precisa ser impecável para evitar atrasos na emissão do Nulla Osta para o visto de entrada dos familiares, que é a etapa prévia à obtenção do permesso di soggiorno por motivos familiares.",
          ],
        },
        {
          title: "Como funciona o atendimento para residentes",
          body: [
            "O atendimento é desenhado especificamente para a agilidade e segurança jurídica que o residente na Itália necessita, muitas vezes sob a pressão de prazos fatais da Questura, do Comune ou de editais universitários.",
            "O processo inicia-se com o envio da foto nítida ou PDF dos documentos pelo WhatsApp. Realizamos uma análise técnica gratuita da validade do documento, da presença da Apostila de Haia necessária e da conformidade do inteiro teor. Após essa verificação, definimos se a tradução será realizada no Brasil (por TPIC) ou asseverata diretamente no Tribunale italiano (por traduttore giurato), dependendo da exigência específica do seu Comune ou órgão destinatário.",
            "As traduções asseveradas na Itália incluem o juramento do tradutor, a assinatura do verbale di giuramento e as formalidades aplicáveis. O procedimento confere fé pública à tradução, mas a autoridade destinatária continua responsável por verificar o dossiê.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Como retirar antecedentes criminais brasileiros morando na Itália?",
          answer: "Emita a certidão diretamente no portal da Polícia Federal (servicos.dpf.gov.br). O documento digital gerado deve ser enviado a um familiar ou representante de confiança no Brasil para ser impresso e levado a um cartório de notas para o apostilamento de Haia. Sem a apostila realizada fisicamente ou eletronicamente por cartório brasileiro habilitado, o documento não terá validade jurídica para ser traduzido e apresentado à Questura ou ao Comune na Itália.",
        },
        {
          question: "É possível apostilar documento brasileiro sem voltar ao Brasil?",
          answer: "Sim. O procedimento padrão é enviar o documento original físico por correio registrado ou courier para um representante no Brasil. Essa pessoa levará o documento a qualquer cartório de notas credenciado pelo CNJ para realizar o apostilamento. Atualmente, alguns cartórios brasileiros também realizam o apostilamento de documentos nato-digitais com assinatura eletrônica padrão ICP-Brasil, o que pode agilizar o processo para antecedentes criminais e certidões emitidas digitalmente.",
        },
        {
          question: "Posso enviar a foto do documento, ou tem que ser o original?",
          answer: "Para a fase inicial de análise técnica e orçamento, uma foto nítida ou PDF é plenamente suficiente. No entanto, para a execução da tradução asseverata (giurata) no Tribunale italiano, o tradutor necessita obrigatoriamente ter em mãos o documento original físico com a Apostila de Haia aplicada. Isso ocorre porque o Tribunale exige que a tradução e o juramento sejam unidos fisicamente ao documento original que está sendo vertido.",
        },
        {
          question: "Quanto custa o envio internacional de documentos do Brasil para a Itália?",
          answer: "Os valores variam conforme o peso da pasta documental e a urgência do serviço. O envio por courier privado (DHL, FedEx ou UPS) custa em média entre R$ 250 e R$ 450, com entrega garantida em 3 a 5 dias úteis. O SEDEX Mundi, serviço dos Correios, é uma alternativa com custo similar e prazos que variam entre 5 e 15 dias úteis, dependendo da região de destino na Itália.",
        },
        {
          question: "A tradução feita no Brasil serve na Itália?",
          answer: "A aceitação varia conforme o órgão destinatário. Universidades, consulados e Comunes de grandes metrópoles (como Roma ou Milão) aceitam traduções juramentadas feitas no Brasil por tradutores públicos concursados, desde que a própria tradução também receba a Apostila de Haia. Contudo, Comunes menores e todos os processos judiciais tramitando no Tribunale exigem invariavelmente a asseverazione feita na Itália por tradutor local inscrito no Albo CTU.",
        },
        {
          question: "Como evitar que a certidão vença durante o processo de tradução?",
          answer:
            "A regra geral: se a tradução é feita no Brasil, apostila o documento original brasileiro primeiro e depois traduz. Se a tradução é asseverata na Itália, o documento original brasileiro precisa chegar à Itália já apostilado. Em ambos os casos, a apostila vem antes da tradução, nunca depois.",
        },

        {
          question: "Preciso traduzir o passaporte brasileiro para o permesso?",
          answer: "Para a maioria dos pedidos de permesso di soggiorno, a tradução do passaporte brasileiro não é exigida, pois os campos principais já constam em português e inglês. Entretanto, para atos de maior complexidade jurídica perante um notaio (notário italiano), como a compra de imóveis ou a constituição de sociedades, o profissional pode solicitar a tradução integral para o italiano para garantir a segurança absoluta do ato notarial.",
        },
        {
          question: "Quanto tempo demora o procedimento de asseverazione no Tribunale?",
          answer: "O prazo final depende da disponibilidade de agendamento e do volume de trabalho no Ufficio Asseverazioni do Tribunale ou Giudice di Pace da região. Em grandes centros como Roma, Milão ou Torino, o prazo médio entre a entrega do documento original apostilado ao tradutor e a conclusão do juramento com entrega da tradução pronta varia entre 3 e 7 dias úteis.",
        },
      ]}
      relatedTitle="Material relacionado para brasileiros na Itália"
      relatedLinks={[
        { title: "Como casar na Itália: guia completo", href: "/como-casar-na-italia-brasileiros" },
        { title: "Tradução juramentada italiano — guia de serviços", href: "/traducao-juramentada-italiano" },
        { title: "Tradução juramentada em Roma e Lazio", href: "/traducao-juramentada-roma" },
        { title: "Documentos para permesso di soggiorno na Itália", href: "/documentos-traducao-permesso-di-soggiorno" },
        { title: "Conversão de CNH brasileira para patente italiana", href: "/traducao-cnh-dirigir-na-italia" },
        { title: "Autoridades italianas — endereços e guias oficiais", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Traduzione asseverata portoghese italiano (IT)", href: "/traduzione-asseverata-portoghese-italiano" },
      ]}
    />
  );
}
