import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appDir = path.join(__dirname, '../app');

const pages = [
  {
    route: "traduzione-giurata-portoghese-italiano-roma",
    eyebrow: "Traduzione Giurata",
    title: "Traduzione giurata portoghese italiano a Roma",
    metaTitle: "Traduzione Giurata Portoghese Italiano a Roma | Preventivo Rapido",
    metaDesc: "Servizio di traduzione giurata dal portoghese all'italiano a Roma. Traduttori ufficiali per cittadinanza, documenti legali e visti. Richiedi preventivo.",
    intro: "Se ti trovi a Roma o devi presentare documenti brasiliani presso le autorità italiane (Comune, Prefettura, Tribunale, Questura), avrai bisogno di una traduzione ufficiale. La traduzione giurata (o asseverata) dal portoghese all'italiano garantisce che il documento straniero abbia pieno valore legale in Italia.",
    sections: `[
      {
        title: "Quando è necessaria la traduzione giurata a Roma?",
        body: [
          "Le istituzioni italiane richiedono traduzioni ufficiali per qualsiasi documento rilasciato in Brasile. Le casistiche più comuni includono:",
        ],
        list: [
          "Richieste di cittadinanza italiana jure sanguinis o per matrimonio.",
          "Conversioni di patente di guida brasiliana (Motorizzazione Civile di Roma).",
          "Richiesta e rinnovo del Permesso di Soggiorno (Questura).",
          "Immatricolazione universitaria (La Sapienza, Tor Vergata, Roma Tre) o Dichiarazione di Valore.",
          "Matrimoni in Italia con cittadini brasiliani."
        ]
      },
      {
        title: "Come funziona il processo",
        body: [
          "Il processo è semplice e può essere gestito interamente online per la fase di preventivo. Invia la scansione o una foto ben leggibile del documento originale (già provvisto di Apostille dell'Aia, se emesso in Brasile).",
          "Il traduttore procederà con la traduzione fedele e, se necessario per l'uso specifico, presterà giuramento in Tribunale (Asseverazione).",
          <span key="link">Per maggiori dettagli sulle traduzioni per cittadinanza, consulta la nostra guida sulla <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">traduzione per cittadinanza italiana</Link>.</span>
        ]
      },
      {
        title: "Apostille dell'Aia e Traduzione",
        body: [
          "Ricorda sempre che un documento brasiliano, prima di essere tradotto in Italia, deve essere apostillato in Brasile. L'Apostille certifica l'autenticità della firma sul documento originale. La traduzione giurata in Italia verrà poi unita al documento originale o a una copia conforme."
        ]
      }
    ]`,
    faqs: `[
      { question: "Quanto tempo richiede una traduzione giurata a Roma?", answer: "Solitamente dai 3 ai 7 giorni lavorativi, a seconda del volume dei documenti e della disponibilità del Tribunale per il giuramento." },
      { question: "Posso inviare i documenti via email?", answer: "Sì, per il preventivo e l'inizio del lavoro è sufficiente una scansione in alta risoluzione. Ti consiglieremo poi se sarà necessario unire la traduzione all'originale." },
      { question: "La traduzione fatta a Roma è valida in tutta Italia?", answer: "Sì, una traduzione giurata asseverata in qualsiasi Tribunale italiano o redatta da un traduttore ufficiale è valida su tutto il territorio nazionale." }
    ]`
  },
  {
    route: "traduzione-asseverata-portoghese-italiano",
    eyebrow: "Traduzione Asseverata",
    title: "Traduzione asseverata portoghese italiano",
    metaTitle: "Traduzione Asseverata Portoghese Italiano | Valore Legale Garantito",
    metaDesc: "Traduzione asseverata in Tribunale dal portoghese all'italiano per documenti brasiliani. Servizio certificato per Comuni, Prefetture e Università.",
    intro: "La traduzione asseverata (spesso chiamata semplicemente traduzione giurata in Italia) è il processo mediante il quale un traduttore ufficiale si reca in Tribunale o dal Giudice di Pace per giurare di aver tradotto fedelmente il testo dal portoghese all'italiano, assumendosi la responsabilità penale e civile del lavoro svolto.",
    sections: `[
      {
        title: "Differenza tra traduzione certificata e asseverata",
        body: [
          "Nel sistema legale italiano, una semplice 'traduzione certificata' (con timbro del traduttore) spesso non è sufficiente per gli atti pubblici. I Comuni (Anagrafe, Stato Civile) e le Prefetture richiedono l'Asseverazione, che include verbali di giuramento e marche da bollo.",
          <span key="link">Se stai preparando i documenti per la tua permanenza in Italia, vedi anche i requisiti per il <Link href="/documentos-traducao-permesso-di-soggiorno" className="text-[#d9aa52] underline hover:text-white transition-colors">permesso di soggiorno</Link>.</span>
        ]
      },
      {
        title: "Documenti che richiedono Asseverazione",
        body: [
          "I documenti per cui è quasi sempre richiesta l'asseverazione in Tribunale includono: certificati di nascita, matrimonio, morte, certificati penali (fedina penale), sentenze di divorzio e titoli accademici."
        ]
      },
      {
        title: "Marche da Bollo e Costi",
        body: [
          "Il costo di una traduzione asseverata in Italia include non solo la tariffa del traduttore, ma anche le marche da bollo (solitamente una marca da € 16,00 ogni 4 pagine di traduzione, incluso il verbale). Questo rende essenziale un preventivo accurato prima di iniziare."
        ]
      }
    ]`,
    faqs: `[
      { question: "Cos'è il verbale di giuramento?", answer: "È un documento allegato alla fine della traduzione, firmato dal traduttore e dal cancelliere del Tribunale, che attesta il giuramento formale." },
      { question: "Serve l'Apostille anche sulla traduzione asseverata?", answer: "Se la traduzione asseverata in un Tribunale italiano è destinata a un'autorità in Italia, non serve l'Apostille sulla traduzione. L'Apostille serve solo sull'originale brasiliano." },
      { question: "Devo spedire i documenti originali?", answer: "Spesso la traduzione viene spillata al documento originale o a una copia autenticata. Ti guideremo sulla procedura esatta in base alle richieste del tuo ente destinatario." }
    ]`
  },
  {
    route: "traducao-juramentada-certidao-nascimento-italia",
    eyebrow: "Certidões / Cidadania",
    title: "Tradução juramentada de certidão de nascimento para Itália",
    metaTitle: "Tradução Juramentada de Certidão de Nascimento para Itália",
    metaDesc: "Tradução juramentada de certidão de nascimento brasileira (inteiro teor) para cidadania italiana e casamento. Aceitação garantida em toda a Itália.",
    intro: "A certidão de nascimento é o documento mais importante na identificação civil. Para processos de cidadania italiana, casamento na Itália ou registro de filhos, a certidão brasileira precisa de tradução juramentada rigorosa e apostilamento para ter validade perante os oficiais italianos.",
    sections: `[
      {
        title: "Por que a certidão de Breve Relato não serve?",
        body: [
          "O governo italiano exige a Certidão de Nascimento em Inteiro Teor (Copia Integrale). Este formato contém todas as anotações do livro original do cartório, incluindo averbações de mudanças de nome, reconhecimento de paternidade e correções.",
          <span key="link">Saiba mais sobre as exigências completas no nosso guia de <Link href="/traducao-juramentada-certidoes" className="text-[#d9aa52] underline hover:text-white transition-colors">tradução de certidões</Link>.</span>
        ]
      },
      {
        title: "Cuidados técnicos na tradução",
        body: [
          "Nomes próprios não devem ser 'traduzidos' ou adaptados (como de João para Giovanni) pelo tradutor. A fidelidade absoluta é mandatória. Qualquer discrepância entre a certidão e a tradução pode gerar o bloqueio do processo de cidadania (as famosas exigências ou 'preavviso di rigetto')."
        ]
      },
      {
        title: "Apostila de Haia",
        body: [
          "Primeiro, emita a certidão em Inteiro Teor. Depois, apostile-a no cartório brasileiro. Só então a tradução juramentada deve ser feita, pois o tradutor precisará traduzir também o conteúdo do selo da Apostila de Haia."
        ]
      }
    ]`,
    faqs: `[
      { question: "Qual a validade da certidão de nascimento para a Itália?", answer: "Na Itália, certidões de registro civil para fins de cidadania ou casamento costumam ter validade exigida de 6 meses a partir da data de emissão." },
      { question: "A tradução precisa ser feita no Brasil ou na Itália?", answer: "Ambas são aceitas. Se feita no Brasil por um Tradutor Público, a tradução também deverá ser apostilada. Se feita na Itália (Asseverazione), não precisa de nova apostila." },
      { question: "Erros no nome da mãe na certidão podem ser corrigidos pelo tradutor?", answer: "Não. O tradutor tem fé pública para transcrever exatamente o que está escrito. Erros do cartório devem ser retificados judicialmente ou administrativamente antes da tradução." }
    ]`
  },
  {
    route: "traducao-juramentada-certidao-casamento-obito-italia",
    eyebrow: "Certidões / Cidadania",
    title: "Tradução juramentada de certidão de casamento e óbito para Itália",
    metaTitle: "Tradução Juramentada de Certidão de Casamento e Óbito | Itália",
    metaDesc: "Tradução juramentada de certidões de casamento e óbito brasileiras para montagem de pasta de cidadania italiana. Especialistas em documentação jurídica.",
    intro: "As certidões de casamento e óbito são as peças que conectam as gerações na sua árvore genealógica. Para a cidadania italiana (jure sanguinis), elas provam a legitimidade da linha de transmissão e o ciclo de vida dos seus antepassados. Uma tradução impecável destas certidões evita que seu processo pare em exigências nos Comunes ou Tribunais italianos.",
    sections: `[
      {
        title: "A importância da Certidão de Casamento",
        body: [
          "O casamento legitima os filhos perante a lei italiana antiga. A certidão de casamento em Inteiro Teor (digitada ou reprográfica) mostrará mudanças de sobrenome e quem foi o declarante do nascimento dos filhos.",
          <span key="link">Confira como essa documentação impacta seu processo lendo sobre a <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">tradução para cidadania italiana</Link>.</span>
        ]
      },
      {
        title: "Certidão de Óbito e Averbações",
        body: [
          "Embora nem todos os Consulados exijam o óbito do requerente, a maioria dos Comunes e Tribunais italianos a solicita para fechar a linha temporal. O tradutor deve prestar atenção especial às causas mortis e locais, transcrevendo termos médicos antigos com precisão técnica."
        ]
      },
      {
        title: "Divórcios na Certidão de Casamento",
        body: [
          "Se houver divórcio, ele constará como averbação na certidão de casamento. A tradução deve incluir essa averbação integralmente. Dependendo do caso, a autoridade italiana poderá exigir também a tradução juramentada da sentença de divórcio."
        ]
      }
    ]`,
    faqs: `[
      { question: "Sou solteiro, preciso traduzir certidão de casamento?", answer: "A sua não, mas as de todos os seus antepassados na linha de transmissão até o italiano originário são obrigatórias." },
      { question: "A certidão de óbito do italiano nascido na Itália precisa ser traduzida?", answer: "Se ele faleceu no Brasil, a certidão de óbito é brasileira (em português) e sim, exigirá tradução juramentada e apostila para ser apresentada na Itália." },
      { question: "As certidões devem ser em Inteiro Teor?", answer: "Sempre. Certidões de breve relato não trazem o histórico de anotações (averbações) e são frequentemente rejeitadas pelas autoridades italianas." }
    ]`
  },
  {
    route: "traducao-juramentada-diploma-brasileiro-italia",
    eyebrow: "Estudos / Universidade",
    title: "Tradução juramentada de diploma brasileiro para Itália",
    metaTitle: "Tradução Juramentada de Diploma Brasileiro para Itália",
    metaDesc: "Tradução juramentada de diplomas e títulos acadêmicos brasileiros para universidades italianas, CIMEA e Dichiarazione di Valore.",
    intro: "Estudar na Itália ou validar sua profissão no exterior exige a apresentação do seu Diploma brasileiro. Porém, o documento original por si só não tem valor legal imediato na Europa. Ele necessita da tradução juramentada para o italiano, acompanhada da Apostila de Haia, para processos universitários ou de reconhecimento profissional.",
    sections: `[
      {
        title: "Dichiarazione di Valore vs CIMEA",
        body: [
          "A tradução juramentada do diploma é o primeiro passo, seja para solicitar a tradicional 'Dichiarazione di Valore' no Consulado Italiano, seja para solicitar o 'Statement of Comparability' online através da plataforma do CIMEA (DiploMe).",
          <span key="link">Entenda qual processo escolher no nosso guia completo sobre <Link href="/dichiarazione-di-valore-traducao-diploma" className="text-[#d9aa52] underline hover:text-white transition-colors">Dichiarazione di Valore e CIMEA</Link>.</span>
        ]
      },
      {
        title: "Atenção aos termos acadêmicos",
        body: [
          "Títulos como 'Bacharel', 'Licenciado' ou 'Tecnólogo' não têm equivalência direta perfeita. O tradutor juramentado utiliza glossários padronizados para garantir que o oficial italiano compreenda o nível do seu estudo conforme o Quadro Europeu de Qualificações (EQF)."
        ]
      },
      {
        title: "Reconhecimento de Firma antes da Apostila",
        body: [
          "Lembre-se: antes de apostilar seu diploma no cartório (e antes de mandá-lo para tradução), é necessário reconhecer a firma do Reitor ou Secretário Acadêmico que assinou o documento. Sem isso, o cartório não emite a Apostila de Haia."
        ]
      }
    ]`,
    faqs: `[
      { question: "Posso traduzir meu diploma para o inglês em vez de italiano?", answer: "Algumas universidades italianas (em cursos ministrados em inglês) aceitam documentos em inglês, mas para órgãos do governo (Bolsas regionais, Questura, Consulados), o italiano é mandatório." },
      { question: "O diploma do ensino médio precisa ser traduzido?", answer: "Se você vai ingressar em uma graduação (Laurea Triennale) na Itália, sim, o certificado de conclusão do Ensino Médio é obrigatório." },
      { question: "A tradução do diploma substitui a revalidação?", answer: "Não. A tradução apenas torna o documento legível juridicamente na Itália. O reconhecimento da profissão (Equipollenza) é um processo separado junto ao ministério competente." }
    ]`
  },
  {
    route: "traducao-historico-escolar-italia",
    eyebrow: "Estudos / Universidade",
    title: "Tradução juramentada de histórico escolar brasileiro para Itália",
    metaTitle: "Tradução Juramentada de Histórico Escolar para Itália",
    metaDesc: "Tradução oficial e juramentada de histórico escolar e universitário para matrícula em faculdades italianas, bolsas de estudo e CIMEA.",
    intro: "O Histórico Escolar (ou Histórico Acadêmico Universitário) é o documento mais detalhado da sua vida estudantil. Ele lista matérias, cargas horárias e notas. Para ingressar em uma universidade italiana ou obter equivalência de matérias, a tradução juramentada deste documento deve ser técnica e matematicamente impecável.",
    sections: `[
      {
        title: "Conversão de Notas e Carga Horária",
        body: [
          "Um dos grandes desafios na tradução do histórico é a diferença dos sistemas. No Brasil, usamos notas de 0 a 10 e horas-aula. Na Itália, as universidades usam notas de 0 a 30 (com louvor '30 e lode') e o sistema de Créditos Formativos Universitários (CFU). O tradutor não converte as notas por conta própria, mas traduz fielmente o sistema de avaliação impresso no verso do seu histórico brasileiro, permitindo que a própria universidade italiana faça a equivalência oficial.",
          <span key="link">Veja mais sobre a documentação de estudos no guia da <Link href="/dichiarazione-di-valore-traducao-diploma" className="text-[#d9aa52] underline hover:text-white transition-colors">Dichiarazione di Valore</Link>.</span>
        ]
      },
      {
        title: "Histórico vs Ementas (Conteúdo Programático)",
        body: [
          "O Histórico cita apenas o nome das matérias. A Ementa (Programma di Studi) descreve o conteúdo abordado. A tradução do histórico é quase sempre obrigatória. A da ementa costuma ser exigida apenas se você pedir eliminação de matérias ou reconhecimento para profissões regulamentadas (medicina, engenharia)."
        ]
      },
      {
        title: "Apostilamento Duplo",
        body: [
          "Se a tradução juramentada for feita no Brasil, ela segue a regra: Apostila no Histórico Original Brasileiro -> Tradução Juramentada -> Apostila na Tradução Juramentada."
        ]
      }
    ]`,
    faqs: `[
      { question: "Meu histórico tem 10 páginas, preciso traduzir tudo?", answer: "Sim. A tradução juramentada deve ser integral. Omitir páginas ou disciplinas quebra a fidelidade e a fé pública do documento." },
      { question: "O tradutor pode arredondar minhas notas?", answer: "De forma alguma. O tradutor transcreve exatamente a nota original. A conversão para o padrão italiano é feita pela comissão acadêmica da universidade." },
      { question: "Preciso traduzir a ementa de todas as matérias?", answer: "Apenas se o edital (Bando) da universidade exigir. Ementas são longas (às vezes mais de 100 páginas), então sempre confirme com a universidade italiana antes de solicitar o orçamento." }
    ]`
  },
  {
    route: "traducao-cnh-brasileira-italia",
    eyebrow: "Trânsito / Mobilidade",
    title: "Tradução da CNH brasileira na Itália",
    metaTitle: "Tradução Juramentada da CNH Brasileira na Itália | Coversão",
    metaDesc: "Tradução juramentada oficial da CNH brasileira para dirigir na Itália e solicitar a conversão para a Patente di Guida pelo novo acordo bilateral.",
    intro: "Dirigir na Itália exige conformidade com o Codice della Strada. Brasileiros turistas podem dirigir temporariamente com a CNH acompanhada de tradução. Brasileiros residentes têm até 1 ano para dirigir com a CNH e, após isso, devem obrigatoriamente converter a habilitação para a Patente italiana. Em ambos os casos, a tradução juramentada é o documento-chave.",
    sections: `[
      {
        title: "Tradução para Turismo vs Conversão (Residência)",
        body: [
          "Se você for turista, a tradução juramentada da CNH ou a PID (Permissão Internacional para Dirigir) são exigidas em locadoras e blitze policiais.",
          "Se você obteve residência na Itália, o novo Acordo Brasil-Itália permite a conversão direta (sem provas teóricas/práticas) da sua CNH (Cat. A e B) para a patente italiana. Para dar entrada no processo na Motorizzazione Civile, a tradução juramentada da CNH definitiva é um requisito obrigatório.",
          <span key="link">Leia nossa reportagem completa sobre as regras da <Link href="/traducao-cnh-dirigir-na-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">conversão da CNH na Itália</Link>.</span>
        ]
      },
      {
        title: "CNH Provisória e Digital",
        body: [
          "As autoridades italianas e a Motorizzazione não aceitam a CNH Digital brasileira nem a CNH Provisória (Permissão para Dirigir). Você deve apresentar o documento físico definitivo para o tradutor e para a autoridade italiana."
        ]
      },
      {
        title: "Por que não fazer no Consulado?",
        body: [
          "Muitos tentam agendar a tradução da CNH no Consulado Brasileiro, o que pode levar meses devido à alta demanda. A tradução juramentada oficial (feita por tradutor TPIC apostilado ou asseverazione italiana) é rápida, tem a mesma validade jurídica e evita atrasos na perda do prazo de 1 ano de residência."
        ]
      }
    ]`,
    faqs: `[
      { question: "A tradução da CNH tem prazo de validade?", answer: "A tradução não vence, mas ela acompanha a validade da sua CNH original. Se a sua CNH brasileira expirar, a tradução não servirá para autorizar a condução." },
      { question: "Moro na Itália há mais de um ano, ainda posso converter?", answer: "As regras do novo acordo especificam prazos rigorosos. Se você ultrapassar 1 ano de residência dirigindo com a CNH brasileira, estará sujeito a multas. A conversão após anos de residência passa por análise rigorosa da Motorizzazione." },
      { question: "Preciso de Apostila de Haia na CNH?", answer: "Para a conversão (Motorizzazione), alguns escritórios exigem a apostila no documento original, outros apenas a tradução juramentada asseverada. É vital checar com a Motorizzazione da sua província." }
    ]`
  },
  {
    route: "traducao-documentos-permesso-di-soggiorno",
    eyebrow: "Imigração / Vistos",
    title: "Tradução de documentos brasileiros para permesso di soggiorno",
    metaTitle: "Tradução de Documentos para Permesso di Soggiorno na Itália",
    metaDesc: "Tradução juramentada para solicitação de Permesso di Soggiorno, visto de trabalho, coesão familiar e estudos na Itália (Questura e Prefettura).",
    intro: "O 'Permesso di Soggiorno' é a sua permissão de estadia legal na Itália, emitido pela Questura (Polícia de Imigração). Seja para reagrupamento familiar, trabalho, estudo ou espera de cidadania, a apresentação de documentos brasileiros exige tradução oficial e juramentada para que sejam reconhecidos pelas autoridades italianas de imigração.",
    sections: `[
      {
        title: "Reagrupamento Familiar (Coesione Familiare)",
        body: [
          "Para comprovar o vínculo com o cidadão italiano ou estrangeiro regular residente, é imprescindível apresentar Certidões de Casamento (para cônjuges) e Nascimento (para filhos menores). Estes documentos brasileiros devem estar apostilados e ter tradução juramentada.",
          <span key="link">Veja mais sobre as exigências de certidões no guia de <Link href="/traducao-juramentada-certidoes" className="text-[#d9aa52] underline hover:text-white transition-colors">tradução de nascimento e casamento</Link>.</span>
        ]
      },
      {
        title: "Permesso por Motivos de Estudo ou Trabalho",
        body: [
          "Se você obteve um visto no Brasil e está convertendo-o para o Permesso di Soggiorno ao chegar na Itália, documentos adicionais como diplomas, comprovantes de renda ou antecedentes criminais podem ser solicitados, sempre requerendo o mesmo padrão de tradução oficial (Asseverazione ou Juramentada com Apostila)."
        ]
      },
      {
        title: "Atenção aos Antecedentes Criminais (Fedina Penale)",
        body: [
          "Para permissões de trabalho e algumas modalidades de cidadania por casamento, a Certidão de Antecedentes Criminais da Polícia Federal Brasileira é obrigatória. Como ela possui prazo de validade de apenas 90 dias, a tradução juramentada deve ser feita com rapidez."
        ]
      }
    ]`,
    faqs: `[
      { question: "A Questura aceita tradução simples sem juramentação?", answer: "Não. Todos os órgãos oficiais na Itália (Questura, Prefettura, Comunes) exigem que documentos civis e criminais estrangeiros sejam oficialmente juramentados." },
      { question: "Posso traduzir os documentos estando já na Itália?", answer: "Sim. Nossos tradutores podem processar as traduções enviadas digitalmente. A depender da Questura, orientaremos se a tradução feita no Brasil exigirá Apostila ou se realizaremos a Asseverazione diretamente em tribunal italiano." },
      { question: "O atestado de antecedentes da Polícia Estadual precisa de tradução?", answer: "Geralmente a Itália exige a Certidão de Antecedentes Criminais em âmbito Federal, emitida pela Polícia Federal. Se pedirem a estadual, também precisará de apostila e tradução." }
    ]`
  },
  {
    route: "apostila-haia-traducao-juramentada-italia",
    eyebrow: "Legalização Internacional",
    title: "Apostila de Haia e tradução juramentada para Itália",
    metaTitle: "Apostila de Haia e Tradução Juramentada para Itália (Guia)",
    metaDesc: "Entenda a ordem correta: Apostila de Haia no documento brasileiro, tradução juramentada para italiano e o apostilamento duplo. Evite devoluções.",
    intro: "A Convenção da Apostila de Haia substituiu as antigas legalizações consulares demoradas. O Brasil e a Itália são signatários, o que significa que o 'selo' da Apostila valida automaticamente documentos públicos de um país no outro. Mas a ordem entre apostilar e traduzir é a principal causa de erros e perda de dinheiro para requerentes brasileiros.",
    sections: `[
      {
        title: "A Ordem Correta do Processo",
        body: [
          "Se você fizer todo o processo no Brasil, existe um fluxo inviolável:",
          "1. Emitir o documento original no Brasil.",
          "2. Apostilar o documento original em um cartório brasileiro.",
          "3. Enviar o documento apostilado para o Tradutor Juramentado. (Ele traduzirá o documento E a apostila).",
          "4. Apostilar a própria Tradução Juramentada.",
          <span key="link">Este é o chamado <strong>'Apostilamento Duplo'</strong>, muito comum em processos abordados no nosso <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">guia de cidadania italiana</Link>.</span>
        ]
      },
      {
        title: "Por que a Apostila na Tradução é necessária?",
        body: [
          "Na Itália, o oficial italiano sabe que o documento original é autêntico por causa da 1ª apostila. Mas como ele sabe que a assinatura do tradutor juramentado no Brasil também é autêntica? Através da 2ª apostila, aplicada na tradução. Sem ela, o papel da tradução não tem fé pública no exterior."
        ]
      },
      {
        title: "A exceção: Asseverazione na Itália",
        body: [
          "Se a tradução for feita por um tradutor na Itália, com juramento em Tribunal Italiano (Asseverazione), a 2ª apostila não é necessária, pois a tradução já nasce com validade jurídica italiana. O documento original brasileiro, contudo, ainda precisa da sua apostila."
        ]
      }
    ]`,
    faqs: `[
      { question: "Onde eu faço a Apostila de Haia no Brasil?", answer: "Em qualquer cartório de notas e registros autorizado pelo CNJ (Conselho Nacional de Justiça)." },
      { question: "Meu documento é digital. Posso apostilar?", answer: "Sim, muitos cartórios emitem a Apostila eletrônica. A versão impressa com QR code também é apostilável." },
      { question: "O cartório traduz o documento?", answer: "Não. O cartório apenas apostila. A tradução deve ser feita por um Tradutor Público e Intérprete Comercial (TPIC) autorizado pela Junta Comercial." }
    ]`
  },
  {
    route: "traducao-documentos-brasileiros-na-italia",
    eyebrow: "Legalização / Processos",
    title: "Tradução juramentada de documentos brasileiros na Itália",
    metaTitle: "Tradução Juramentada de Documentos Brasileiros na Itália",
    metaDesc: "Serviço oficial de tradução de documentos brasileiros para autoridades italianas. Certidões, CNPJ, procurações, processos judiciais e contratos.",
    intro: "Empresas brasileiras abrindo filiais na Itália, cidadãos comprando imóveis, procurações (procura speciale) e validação de contratos. Apresentar documentos gerados no Brasil para o estado ou mercado italiano requer rigorosa tradução oficial, muitas vezes com vocabulário técnico, comercial ou jurídico complexo.",
    sections: `[
      {
        title: "Documentos Societários e Comerciais",
        body: [
          "Seja para abrir uma Partita IVA ou registrar uma filial (S.r.l.) perante a Camera di Commercio italiana, documentos como Contrato Social, Cartão CNPJ, Balanços Patrimoniais e Procurações de Sócios exigem tradução asseverada. A tradução deve manter a fidelidade aos termos do Direito Societário.",
          <span key="link">O rigor exigido aqui é semelhante ao processo de imigração. Veja como funciona na <Link href="/reforma-cidadania-italiana-documentos" className="text-[#d9aa52] underline hover:text-white transition-colors">regulamentação e reformas de leis</Link>.</span>
        ]
      },
      {
        title: "Processos Judiciais (Sentenças e Adoções)",
        body: [
          "Casos de adoção de menores no Brasil por residentes na Itália, sentenças cíveis e cobranças judiciais exigem que a tradução juramentada contemple o Trânsito em Julgado. Estas são traduções densas e cobradas por lauda juramentada (cada 1.000 caracteres)."
        ]
      },
      {
        title: "Como garantir a aceitação",
        body: [
          "Aconselhamos que o interessado valide com o Notário (Notaio) ou advogado italiano responsável se o órgão aceita a tradução juramentada brasileira com apostila ou se prefere a tradução asseverada diretamente em um tribunal civil italiano. Nós fornecemos ambos os serviços, adequando-nos à estratégia jurídica do seu projeto."
        ]
      }
    ]`,
    faqs: `[
      { question: "Posso usar inteligência artificial para traduzir contratos e só pedir o carimbo?", answer: "Não. O tradutor público assume responsabilidade penal pelo que assina e realiza a tradução integralmente pelos seus próprios métodos e glossários oficiais." },
      { question: "Qual a diferença entre Tradução Juramentada e Asseverazione?", answer: "Tradução juramentada é feita no Brasil por tradutor público (exige apostila para valer fora). Asseverazione é feita na Itália, em tribunal, e já tem validade imediata em solo italiano." },
      { question: "Preciso traduzir a procuração pública feita no cartório brasileiro?", answer: "Sim. A procuração pública brasileira deve ser apostilada e traduzida (juramentada) para ter valor de instrumento de mandato (Procura) na Itália." }
    ]`
  }
];

const writePages = () => {
  pages.forEach((page) => {
    const pageDir = path.join(appDir, page.route);
    if (!fs.existsSync(pageDir)) {
      fs.mkdirSync(pageDir, { recursive: true });
    }

    const content = 'import type { Metadata } from "next";\n' +
'import { ArticlePage } from "../components/article-page";\n' +
'import Link from "next/link";\n' +
'import { siteUrl } from "../lib/site";\n\n' +
'const pagePath = "/' + page.route + '";\n' +
'const pageUrl = `${siteUrl}${pagePath}`;\n\n' +
'export const metadata: Metadata = {\n' +
'  title: "' + page.metaTitle + '",\n' +
'  description: "' + page.metaDesc + '",\n' +
'  alternates: {\n' +
'    canonical: pagePath,\n' +
'  },\n' +
'  openGraph: {\n' +
'    title: "' + page.metaTitle + '",\n' +
'    description: "' + page.metaDesc + '",\n' +
'    url: pageUrl,\n' +
'    type: "article",\n' +
'  },\n' +
'};\n\n' +
'export default function Page() {\n' +
'  return (\n' +
'    <ArticlePage\n' +
'      eyebrow="' + page.eyebrow + '"\n' +
'      title="' + page.title + '"\n' +
'      intro="' + page.intro + '"\n' +
'      sections={' + page.sections + '}\n' +
'      faqs={' + page.faqs + '}\n' +
'    />\n' +
'  );\n' +
'}\n';

    fs.writeFileSync(path.join(pageDir, 'page.tsx'), content);
    console.log('Created page: ' + page.route);
  });
};

writePages();
