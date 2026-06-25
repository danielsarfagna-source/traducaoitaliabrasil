export type SeoSupplement = {
  title: string;
  body: string[];
  list?: string[];
  subsections?: {
    title: string;
    body: string[];
    list?: string[];
  }[];
  table?: {
    headers: string[];
    rows: string[][];
  };
};

export const seoSupplements: Record<string, SeoSupplement[]> = {
  "/apostilar-documento-italiano-na-italia": [
    {
      title: "Quem emite a Apostille na Itália",
      body: ["A autoridade competente depende da natureza do ato, da assinatura que será autenticada e da competência territorial. Confirme o destino antes de protocolar."],
      subsections: [
        { title: "Procura della Repubblica", body: ["Relaciona-se, em geral, a atos judiciais e notariais e a determinadas assinaturas públicas."] },
        { title: "Prefettura UTG", body: ["Trata de categorias de atos administrativos dentro de sua competência provincial."] },
        { title: "Documentos escolares e sanitários", body: ["Diplomas escolares e atos sanitários podem exigir validação por autoridades setoriais antes da Apostila."] },
      ],
      table: {
        headers: ["Documento italiano", "Autoridade a verificar", "Observação"],
        rows: [
          ["Certidão civil do Comune", "Procura ou Prefettura, conforme assinatura e prática local", "Confirmar na província de emissão"],
          ["Sentença judicial", "Procura della Repubblica competente", "Verificar trânsito em julgado quando necessário"],
          ["Ato notarial", "Procura della Repubblica", "Apostila recai sobre a assinatura do notaio"],
          ["Diploma universitário", "Prefettura ou autoridade indicada pela instituição", "Pode haver autenticação prévia"],
          ["Documento escolar", "Ufficio scolastico competente", "O percurso varia por região"],
          ["Ato administrativo", "Prefettura UTG", "Competência territorial da assinatura"],
        ],
      },
    },
    {
      title: "Apostila e tradução — sequência correta",
      body: ["Para documento italiano destinado ao Brasil, a sequência costuma partir da emissão do ato correto, passar pela Apostila italiana e seguir para a tradução aceita no Brasil. Para documento brasileiro destinado à Itália, a Apostila é obtida no Brasil antes da tradução destinada ao uso italiano."],
    },
    {
      title: "Erros frequentes no apostilamento",
      body: ["Procurar a autoridade errada, apostilar cópia quando o destinatário exige original, traduzir antes de obter todas as certificações e ignorar competência territorial são causas comuns de retrabalho."],
    },
  ],
  "/traducao-cnh-dirigir-na-italia": [
    {
      title: "Turista e residente — situações diferentes",
      body: ["Prazo de permanência, residência anagráfica e finalidade de uso mudam o enquadramento. Tradução, permissão internacional e conversão não são soluções equivalentes."],
      subsections: [
        { title: "Uso temporário", body: ["Antes de dirigir, confirme os documentos exigidos pelas regras italianas vigentes e pela locadora ou seguradora, quando houver."] },
        { title: "Conversão da patente", body: ["A possibilidade de conversão depende do acordo vigente, da data de residência, da categoria e da situação da habilitação."] },
        { title: "Novo exame", body: ["Quando a conversão direta não se aplica, a Motorizzazione informa o percurso de teoria, prática e foglio rosa."] },
      ],
    },
    {
      title: "O que entra na tradução da CNH",
      body: ["Frente, verso, número de registro, categorias, datas, observações e restrições devem estar legíveis. EAR e códigos brasileiros precisam ser descritos sem criar equivalência automática com categorias italianas."],
    },
    {
      title: "Nota de atualização",
      body: ["Informações verificadas editorialmente em 6 de junho de 2026. Como acordos e instruções de trânsito mudam, confirme a situação atual diretamente com a Motorizzazione competente antes de protocolar."],
    },
  ],
  "/dichiarazione-di-valore-traducao-diploma": [
    {
      title: "Diploma, histórico e declaração de valor",
      body: ["Os três documentos têm funções diferentes. O diploma comprova o título; o histórico descreve disciplinas e carga horária; a Dichiarazione di Valore informa como o título se insere no sistema do país de origem."],
      table: {
        headers: ["Nível brasileiro", "Referência italiana aproximada", "Finalidade comum"],
        rows: [
          ["Ensino médio", "Scuola secondaria superiore", "Candidatura a curso de graduação"],
          ["Graduação", "Laurea, conforme avaliação", "Continuação de estudos ou trabalho"],
          ["Especialização", "Master, conforme avaliação", "Análise acadêmica específica"],
          ["Mestrado", "Laurea magistrale ou título de segundo ciclo, conforme avaliação", "Doutorado e carreira acadêmica"],
          ["Doutorado", "Dottorato di ricerca", "Pesquisa e carreira acadêmica"],
        ],
      },
    },
    {
      title: "Universidade, CIMEA e profissão regulamentada",
      body: ["A universidade decide sobre ingresso e créditos; o CIMEA oferece serviços de comparabilidade e verificação; autoridades e ordini professionali tratam do exercício regulamentado. Um resultado não substitui automaticamente o outro."],
    },
    {
      title: "Erros comuns no reconhecimento acadêmico",
      body: ["Enviar diploma sem histórico, omitir carga horária, traduzir uma via diferente da apostilada ou iniciar sem ler o edital da instituição pode atrasar a avaliação."],
    },
  ],
  "/documentos-traducao-permesso-di-soggiorno": [
    {
      title: "Principais tipos de permesso",
      body: ["Lavoro, famiglia, studio, attesa cittadinanza e outras categorias têm pressupostos e documentos distintos."],
      subsections: [
        { title: "Motivi familiari", body: ["Certidões e provas de vínculo devem corresponder ao procedimento de ricongiungimento ou coesione familiare."] },
        { title: "Attesa cittadinanza", body: ["A pasta deve refletir a via de cidadania e a situação administrativa do requerente."] },
        { title: "Lavoro e studio", body: ["Contrato, matrícula, recursos e cobertura podem integrar o pedido conforme a categoria."] },
      ],
    },
    {
      title: "Sequência: documento, Apostila, tradução e Questura",
      body: ["Obtenha o documento brasileiro correto, apostile quando exigido, traduza na modalidade aceita e só então monte o kit ou o protocolo. Fotos, impressões digitais e comparecimento seguem a convocação da Questura."],
    },
    {
      title: "Nota de atualização",
      body: ["Informações gerais atualizadas em 6 de junho de 2026. Verifique sempre o portal oficial e a Questura da província, pois listas e procedimentos podem mudar."],
    },
  ],
  "/reforma-cidadania-italiana-documentos": [
    {
      title: "Como tratar mudanças legislativas",
      body: ["A legislação de cidadania deve ser lida em sua versão oficial e aplicada ao caso concreto por profissional habilitado. Data do pedido, linha familiar, residência e via processual podem alterar a análise."],
      subsections: [
        { title: "Processos em andamento", body: ["Não presuma que uma regra nova produz o mesmo efeito sobre todos os pedidos. Confirme atos transitórios e decisões do órgão responsável."] },
        { title: "Novos processos", body: ["A estratégia documental deve partir dos requisitos vigentes na data do protocolo."] },
        { title: "Decisões judiciais", body: ["Sentenças e decisões constitucionais devem ser consultadas no texto integral, sem extrapolar manchetes ou resumos."] },
      ],
    },
    {
      title: "Por que o inteiro teor e a coerência importam",
      body: ["Mudanças legais não autorizam a tradução a corrigir registros. Certidões integrais, averbações e consistência entre gerações continuam sendo pontos centrais de uma pasta documental."],
    },
    {
      title: "Aviso jurídico",
      body: ["Conteúdo informativo atualizado em 6 de junho de 2026. Para orientação jurídica individual, consulte advogado italiano habilitado e as fontes oficiais aplicáveis."],
    },
  ],
  "/traducao-sentenca-divorcio-italia": [
    {
      title: "Documentos necessários",
      body: ["O conjunto pode incluir sentença integral, certificação de trânsito em julgado, certidão de casamento atualizada e Apostila de cada ato público relevante."],
      subsections: [
        { title: "Divórcio judicial", body: ["Dispositivo, fundamentação e acordos sobre filhos, alimentos ou bens podem ser relevantes ao reconhecimento."] },
        { title: "Divórcio extrajudicial", body: ["A escritura pública e suas certidões seguem percurso diferente da sentença judicial."] },
        { title: "Tradução integral", body: ["Traduzir apenas o dispositivo sem autorização do destinatário pode deixar o fascículo incompleto."] },
      ],
    },
    {
      title: "Apresentação e atualização do estado civil",
      body: ["Comune, consulado, advogado ou autoridade judicial informam o procedimento aplicável. A tradução não substitui o pedido de trascrizione nem a averbação no registro."],
    },
  ],
  "/traducao-documentos-casamento-italia": [
    {
      title: "Nulla Osta e pubblicazioni",
      body: ["O Nulla Osta declara a ausência de impedimento conforme o procedimento consular. O Comune usa o documento junto às certidões e às pubblicazioni di matrimonio."],
      subsections: [
        { title: "Comune competente", body: ["Confirme onde o casamento será celebrado e quais documentos o ufficio exige."] },
        { title: "Pessoa divorciada ou viúva", body: ["Sentença, averbação ou certidão de óbito podem ser solicitadas para demonstrar o estado civil atual."] },
        { title: "Após o casamento", body: ["O ato italiano pode precisar ser registrado perante autoridades brasileiras para produzir efeitos no Brasil."] },
      ],
    },
  ],
  "/traducao-antecedentes-criminais-italia": [
    {
      title: "Emissão, validade e coordenação do prazo",
      body: ["Antecedentes da Polícia Federal e certidões das Justiças Federal ou Estadual não são o mesmo documento. O órgão italiano define qual versão aceita e quão recente ela deve ser."],
      subsections: [
        { title: "Emissão online", body: ["Verifique autenticidade, identificação e possibilidade de validação eletrônica antes da Apostila."] },
        { title: "Apostila e tradução", body: ["Planeje as etapas para não consumir a validade administrativa antes do protocolo."] },
        { title: "Casellario italiano", body: ["O certificado italiano emitido pela Procura tem escopo diferente e pode ser solicitado junto ao brasileiro."] },
      ],
    },
  ],
  "/traducao-documentos-medicos-italia": [
    {
      title: "Tipos de documento médico",
      body: ["Atestados, prontuários, laudos, vacinação, receitas, diplomas e perícias têm finalidades e níveis de formalização diferentes."],
      subsections: [
        { title: "Continuidade de tratamento", body: ["O texto deve preservar diagnóstico, histórico, doses e unidades, sem interpretar ou aconselhar clinicamente."] },
        { title: "Reconhecimento profissional", body: ["Ministero della Salute e ordini profissionais definem os documentos de médicos, enfermeiros e outras profissões."] },
        { title: "Privacidade", body: ["Arquivos de saúde contêm dados sensíveis e devem circular apenas pelos canais necessários, com acesso limitado."] },
      ],
    },
    {
      title: "Terminologia médica e medicamentos",
      body: ["CID, princípios ativos, nomes comerciais, especialidades e unidades exigem pesquisa terminológica. A tradução não altera prescrição nem substitui avaliação médica."],
    },
  ],
  "/traducao-contratos-imoveis-italia": [
    {
      title: "Imóveis, sociedades e atos notariais",
      body: ["O notaio e os consultores do ato definem documentos, procurações e forma de tradução antes da assinatura."],
      subsections: [
        { title: "Compra de imóvel", body: ["Codice fiscale, compromesso, procuração e rogito têm funções distintas e devem ser lidos no contexto do negócio."] },
        { title: "Empresa italiana", body: ["SRL, SPA, SAS, SNC e ditta individuale não são traduções automáticas das formas brasileiras."] },
        { title: "Procurações", body: ["Poderes, prazo, substabelecimento e identificação do ato devem ser conferidos com o notaio."] },
      ],
    },
    {
      title: "Documentos societários brasileiros",
      body: ["Contrato social, estatuto, atas, certidões da Junta Comercial e documentos fiscais exigem vocabulário societário consistente, sem criar equivalência jurídica inexistente."],
    },
  ],
  "/traduzione-asseverata-portoghese-italiano": [
    {
      title: "Differenza tra asseverazione e semplice certificazione",
      body: [
        "Una traduzione accurata non diventa automaticamente un atto utilizzabile in un procedimento pubblico. L'asseverazione aggiunge il verbale di giuramento e le formalità richieste dall'ufficio italiano. Il fascicolo permette all'ente di identificare il documento di partenza, il testo tradotto e la dichiarazione resa dal traduttore.",
        "L'ente destinatario resta responsabile dell'accettazione. Prima di preparare il fascicolo occorre conoscere Comune, Tribunale, Questura, università, Motorizzazione o notaio che riceverà l'atto, perché una procedura accademica non usa necessariamente lo stesso formato di una causa giudiziaria.",
      ],
      subsections: [
        { title: "Traduzione pubblica brasiliana", body: ["La tradução pública brasiliana è firmata da un professionista abilitato nel sistema brasiliano. Per circolare in Italia segue Apostille e condizioni indicate dall'ente italiano. Non va descritta come identica all'asseverazione italiana."] },
        { title: "Originale e copia", body: ["L'ufficio o il destinatario stabilisce se il fascicolo deve contenere originale, copia conforme o riproduzione. La scelta viene effettuata prima del giuramento."] },
      ],
    },
    {
      title: "Ordine documentale per atti brasiliani",
      body: [
        "Il documento viene richiesto all'autorità brasiliana nella versione adatta alla finalità. Dopo il controllo di nomi, date, firme e annotazioni, si ottiene l'Apostille in Brasile. La traduzione italiana riproduce il documento completo e l'Apostille quando rientra nell'ambito richiesto.",
        "Certificati di stato civile richiedono attenzione alle annotazioni; sentenze richiedono attestazione definitiva quando applicabile; diplomi devono essere accompagnati dal transcript o dalla documentazione indicata dall'università; procure devono contenere poteri coerenti con l'atto italiano.",
      ],
    },
    {
      title: "Consegna e conservazione del fascicolo",
      body: [
        "Dopo l'asseverazione, documento, traduzione e verbale formano un insieme. Separare pagine, rimuovere timbri o sostituire l'originale compromette la corrispondenza del fascicolo. La consegna avviene di persona o con spedizione tracciata quando la procedura lo consente.",
        "Prima dell'invio vengono controllati numerazione, firme, marche richieste e destinatario. Il cliente conserva una scansione integrale e presenta il fascicolo senza modificarne l'ordine.",
      ],
    },
  ],
  "/traduzione-giurata-portoghese-italiano-roma": [
    {
      title: "Roma come centro amministrativo e giudiziario",
      body: [
        "Roma concentra uffici comunali, giudiziari, consolari, universitari e amministrativi che ricevono documenti brasiliani. La competenza non dipende soltanto dalla città: Municipio, residenza, tipo di procedimento e autorità destinataria determinano lo sportello e la documentazione.",
        "Il servizio locale parte dall'identificazione precisa dell'ente. Una traduzione per lo Stato Civile di Roma Capitale viene preparata secondo la sua finalità; una traduzione destinata a una causa presso il Tribunale segue le istruzioni processuali; un fascicolo accademico rispetta il bando dell'università.",
      ],
      subsections: [
        { title: "Comune di Roma Capitale", body: ["Anagrafe e Stato Civile trattano residenza, nascita, matrimonio, morte e trascrizione di atti esteri. I Municipi territoriali operano nel sistema cittadino e devono essere individuati prima del deposito."] },
        { title: "Tribunale Ordinario di Roma", body: ["Cause di cittadinanza, stato civile e riconoscimento di atti usano documenti tradotti secondo le indicazioni del difensore e del giudice. Il traduttore non seleziona le prove al posto dell'avvocato."] },
        { title: "Consolato brasiliano", body: ["Il consolato presta servizi ai cittadini brasiliani e pubblica i documenti richiesti per ciascun atto. La lista consolare e quella del Comune non vanno confuse."] },
      ],
    },
    {
      title: "Uffici che ricevono documenti a Roma",
      body: ["Questura, Motorizzazione, università e notai richiedono fascicoli diversi. La Questura tratta il permesso secondo la categoria; la Motorizzazione verifica patente e conversione; Sapienza, Tor Vergata, Roma Tre e LUMSA applicano i propri bandi; il notaio stabilisce la forma degli atti patrimoniali."],
      subsections: [
        { title: "Questura di Roma", body: ["Certificati brasiliani di stato civile o penali entrano quando previsti dalla categoria. Validità amministrativa e appuntamento devono essere coordinati."] },
        { title: "Università romane", body: ["Diploma, transcript, Dichiarazione di Valore e CIMEA sono richiesti secondo corso e procedura. La traduzione non sostituisce la valutazione accademica."] },
        { title: "Motorizzazione e notai", body: ["Patente, procure, certificati e atti societari vengono preparati soltanto dopo aver ricevuto l'elenco del destinatario."] },
      ],
    },
    {
      title: "Asseverazione presso gli uffici romani",
      body: [
        "Il traduttore prepara originale o copia ammessa, traduzione e verbale, verifica le istruzioni aggiornate e si presenta all'ufficio competente. Appuntamento, accesso, marche e numero di facciate seguono le regole vigenti alla data del deposito.",
        "Il Giudice di Pace non va scelto automaticamente come scorciatoia. Si verifica la disponibilità del servizio e la compatibilità con il documento. Per atti destinati a un procedimento giudiziario, il legale può indicare forma e ufficio preferiti.",
      ],
    },
    {
      title: "Servizio nel Lazio",
      body: [
        "Frascati, Albano, Marino, Tivoli, Ostia, Ladispoli, Anzio, Fiumicino, Ciampino e le province del Lazio sono assistite con analisi digitale e logistica concordata. Il Comune o la Questura locale resta la fonte della lista documentale.",
        "Il cliente invia scansione completa, indica ente e scadenza e riceve la conferma di Apostille, originale, asseverazione e consegna. Nessun documento viene spedito prima di definire il fascicolo.",
      ],
    },
  ],
  "/autoridades-italianas-documentos-brasileiros": [
    {
      title: "Comune, Prefettura e Questura",
      body: [
        "Il Comune è l'autorità civile locale: Anagrafe registra la popolazione residente e Stato Civile gestisce nascita, matrimonio, morte, cittadinanza e trascrizione di atti. Il documento brasiliano deve essere coerente con il servizio richiesto e con le istruzioni del Comune competente.",
        "La Prefettura rappresenta il Governo nella provincia e tratta materie amministrative, cittadinanza e legalizzazione di determinate firme. La Questura è l'autorità provinciale di pubblica sicurezza e gestisce il permesso di soggiorno. Presentare lo stesso fascicolo a tutti e tre gli organi è un errore: competenza e finalità sono diverse.",
      ],
    },
    {
      title: "Tribunale, Giudice di Pace e Procura",
      body: [
        "Il Tribunale Ordinario tratta cause civili e procedimenti giudiziari. Il Giudice di Pace ha competenze proprie e, dove il servizio è disponibile, riceve asseverazioni. La Procura della Repubblica emette certificati del casellario e apostilla firme giudiziarie e notarili della propria circoscrizione.",
        "La Corte d'Appello tratta impugnazioni e competenze specifiche. Il cittadino non sceglie l'autorità in base alla vicinanza: segue la competenza territoriale e materiale indicata dalla legge o dal professionista responsabile.",
      ],
    },
    {
      title: "Università, MUR, CIMEA e ordini professionali",
      body: [
        "Le università decidono ammissione, crediti e titoli accademici. Il MUR coordina il sistema universitario; il CIMEA offre comparabilità e verifica; gli ordini professionali regolano l'iscrizione nelle professioni. Una Dichiarazione di Valore non equivale all'iscrizione professionale.",
        "Medici, infermieri, avvocati, ingegneri, architetti, psicologi e farmacisti devono individuare l'autorità di riconoscimento e l'ordine competente. Diploma, transcript, programmi e certificati professionali vengono tradotti secondo l'elenco ufficiale.",
      ],
    },
    {
      title: "Fonti e aggiornamento semestrale",
      body: [
        "Questo hub viene controllato a gennaio e luglio, oltre agli aggiornamenti straordinari quando cambiano leggi o portali. Ultima revisione: 6 giugno 2026. Link, indirizzi, orari e competenze devono essere verificati sul sito ufficiale prima di ogni protocollo.",
        "Le fonti di riferimento includono Ministero dell'Interno, Ministero della Giustizia, MAECI, MUR, Ministero della Salute, MIT, portali comunali, università e rappresentanze consolari. Il contenuto è informativo e non sostituisce consulenza legale.",
      ],
    },
  ],
  "/traducao-juramentada-brasileiro-residente-italia": [
    {
      title: "Planejamento documental para quem vive na Itália",
      body: [
        "O residente precisa coordenar duas administrações. O Brasil emite e apostila seus atos; a Itália recebe, traduz, assevera ou registra conforme o procedimento. Pedir uma certidão sem saber modalidade e validade cria custo de envio e risco de repetir a emissão.",
        "A lista começa no órgão italiano. Depois se identifica cartório ou autoridade brasileira, pessoa que fará o pedido, necessidade de procuração, Apostila e transporte. Somente a pasta final deve seguir para tradução.",
      ],
      subsections: [
        { title: "Familiares no Brasil", body: ["Envie instruções escritas com cartório, tipo de certidão, inteiro teor, averbações e destino. O familiar deve conferir nomes e páginas antes de apostilar."] },
        { title: "Procuração", body: ["Quando o órgão brasileiro exige representação, a procuração precisa conceder poderes adequados. Não use um modelo genérico sem confirmar aceitação."] },
        { title: "Courier e rastreamento", body: ["Digitalize tudo, proteja originais e use envio rastreado. Documento perdido ou danificado pode consumir a validade administrativa do processo."] },
      ],
    },
    {
      title: "Escolha entre tradução brasileira e asseverazione",
      body: [
        "A decisão segue a autoridade italiana. Se ela aceita tradução pública brasileira apostilada, o trabalho pode ser organizado no Brasil. Se exige ou prefere fascicolo asseverato na Itália, o original apostilado chega à Itália antes da formalização.",
        "Prazo, localização e logística entram depois da exigência jurídica. Escolher apenas pela conveniência ou por relatos de outro Comune produz retrabalho.",
      ],
    },
    {
      title: "Documentos e momentos de vida",
      body: [
        "Recém-chegados lidam com residência, permesso, estudo e habilitação. Residentes de longa duração encontram casamento, nascimento de filhos, cidadania, divórcio, sucessão, imóvel e empresa. Cada mudança de estado civil exige documentos atuais e coerentes.",
        "Certidões, antecedentes, diplomas, CNH, procurações e sentenças têm ritmos diferentes. Antecedentes e algumas certidões são emitidos perto do protocolo; diplomas e processos judiciais exigem preparação mais longa.",
      ],
    },
    {
      title: "Controle final antes do protocolo",
      body: [
        "Compare nome, filiação, nascimento, casamento e documentos de identidade. Confirme se cada Apostila está ligada à assinatura correta, se todas as páginas foram traduzidas e se o fascículo mantém a ordem. Guarde cópia digital integral.",
        "O atendimento começa com os arquivos e a lista do órgão. A resposta organiza as etapas e apresenta orçamento pelo WhatsApp antes do início.",
      ],
    },
  ],
};
