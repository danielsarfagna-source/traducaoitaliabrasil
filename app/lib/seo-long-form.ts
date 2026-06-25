import type { SeoSupplement } from "./seo-supplements";

export const seoLongForm: Record<string, SeoSupplement[]> = {
  "/apostilar-documento-italiano-na-italia": [
    {
      title: "O que é a Apostila de Haia",
      body: [
        "A Apostila de Haia é a certificação usada para confirmar a origem de um ato público que será apresentado em outro país participante da Convenção de 5 de outubro de 1961. Ela identifica a autoridade que assinou o documento, a qualidade em que essa pessoa atuou e, quando existente, o selo ou carimbo do órgão emissor. A Apostila não confirma a verdade do conteúdo e não substitui a análise do órgão destinatário.",
        "Brasil e Itália aplicam a Convenção. Por isso, documentos públicos que circulam entre os dois países seguem o sistema de Apostille em lugar da antiga legalização consular, desde que o ato esteja dentro do campo de aplicação da Convenção. O primeiro passo é obter a via correta e identificar quem assinou; a competência para apostilar decorre dessa assinatura.",
      ],
      subsections: [
        { title: "Convenção da Haia de 1961", body: ["A Convenção simplifica a circulação internacional de atos públicos. Em vez de uma cadeia de reconhecimentos consulares, uma autoridade do país de origem acrescenta a Apostila. O país de destino verifica a certificação e continua responsável por decidir se o documento atende ao procedimento solicitado."] },
        { title: "O que a Apostila substitui", body: ["Entre Brasil e Itália, a Apostila substitui a legalização diplomática ou consular do ato abrangido pela Convenção. Ela não substitui tradução, inteiro teor, certidão recente, reconhecimento acadêmico, registro civil nem qualquer requisito material do processo."] },
        { title: "Documento público e assinatura competente", body: ["A autoridade apostila a assinatura pública cadastrada. Se a assinatura não estiver reconhecida, se o documento for particular ou se houver autenticação intermediária, o órgão orientará a regularização necessária antes de emitir a Apostila."] },
      ],
    },
    {
      title: "Quem emite a Apostille na Itália",
      body: ["A divisão essencial é entre atos judiciais ou notariais e atos administrativos. A Procura della Repubblica legaliza e apostila assinaturas de notai e funcionários judiciários dentro de sua circunscrição. A Prefettura territorialmente competente trata dos atos administrativos. Documentos escolares, universitários e sanitários podem exigir validação setorial antes de chegar à autoridade apostilante."],
      subsections: [
        { title: "Procura della Repubblica", body: ["Sentenças, certidões judiciais, atos de cancelleria e atos notariais seguem para a Procura competente pelo local onde atua o signatário. Uma sentença deve estar na forma utilizável no exterior e, quando o procedimento exigir, acompanhada da certificação de trânsito em julgado."] },
        { title: "Prefettura UTG", body: ["Certificados administrativos, assinaturas de autoridades locais e outros atos abrangidos pela competência provincial seguem para a Prefettura. O documento precisa apresentar assinatura reconhecível e, quando previsto, validação anterior do órgão hierarquicamente responsável."] },
        { title: "Escola, universidade e saúde", body: ["Diplomas escolares, títulos universitários e documentos sanitários não devem ser encaminhados por suposição. A instituição emissora informa se é necessária autenticação pelo Ufficio scolastico, pela universidade, pela Regione ou pelo Ministero competente antes da Apostila."] },
      ],
      table: {
        headers: ["Tipo de documento italiano", "Autoridade competente a confirmar", "Preparação"],
        rows: [
          ["Certidão de nascimento, casamento ou óbito", "Prefettura ou autoridade indicada para a assinatura do Comune", "Via original com assinatura apta ao exterior"],
          ["Sentença do Tribunale", "Procura della Repubblica da circunscrição", "Cópia conforme e trânsito em julgado quando exigido"],
          ["Sentença do Giudice di Pace", "Procura della Repubblica competente", "Certificação judicial utilizável no exterior"],
          ["Atto notarile", "Procura della Repubblica", "Apostila da assinatura do notaio"],
          ["Diploma universitário", "Prefettura após validação indicada", "Assinatura universitária reconhecida"],
          ["Diploma escolar", "Autoridade escolar e Prefettura conforme região", "Validação escolar anterior quando prevista"],
          ["Casellario giudiziale", "Procura della Repubblica", "Via recente destinada ao exterior"],
          ["Certificado administrativo", "Prefettura UTG", "Competência territorial da assinatura"],
          ["Atestado sanitário público", "Autoridade sanitária indicada", "Validação da struttura ou Regione"],
        ],
      },
    },
    {
      title: "Como apostilar passo a passo",
      body: ["Comece pelo país onde o documento foi emitido. Um ato italiano é apostilado na Itália; um ato brasileiro é apostilado no Brasil. Confirme com o destinatário qual versão do documento precisa ser apresentada, porque apostilar uma certidão resumida não resolve um pedido de inteiro teor."],
      subsections: [
        { title: "Localizar a autoridade", body: ["Leia a assinatura e a natureza do ato. Procure a Procura para atos judiciais ou notariais e a Prefettura para atos administrativos, respeitando a competência territorial. Consulte o portal oficial da sede para verificar atendimento, formulário e entrega."] },
        { title: "Agendamento e protocolo", body: ["Algumas sedes atendem sem agendamento; outras exigem reserva, envio postal ou formulário. Leve o original apto ao exterior, documento de identificação, eventual delega e os elementos pedidos pela sede."] },
        { title: "Custas e retirada", body: ["Taxas, marcas e prazo seguem a autoridade e o tipo de ato. O site não publica preço fixo: confirme a tabela oficial no momento do protocolo. Na retirada, confira nome, assinatura, país de destino e vínculo da Apostila com o documento."] },
      ],
    },
    {
      title: "Apostila e tradução juramentada — sequência correta",
      body: ["Documento italiano destinado ao Brasil: emitir a via correta, obter a Apostila italiana e providenciar a tradução reconhecida pelo órgão brasileiro. Documento brasileiro destinado à Itália: emitir a via correta no Brasil, obter a Apostila brasileira e traduzir o conjunto para italiano na modalidade aceita pelo órgão italiano."],
      subsections: [
        { title: "Apostilar a tradução", body: ["A tradução é um ato separado do original. Quando formalizada no Brasil e destinada ao exterior, o destinatário pode exigir Apostila da assinatura do tradutor público. Quando asseverada na Itália para uso interno italiano, o verbale integra o fascículo conforme o procedimento local."] },
        { title: "Erros recorrentes", body: ["Autoridade territorial errada, cópia inadequada, assinatura não cadastrada, tradução anterior à certificação completa e ausência de confirmação do destinatário são os principais motivos de repetição da etapa."] },
      ],
    },
    {
      title: "Documentos italianos mais apostilados para o Brasil",
      body: ["Certidões civis, sentenças, procurações, escrituras, diplomas, certificados administrativos e antecedentes aparecem com frequência. Cada grupo exige uma preparação própria: sentença precisa estar definitiva quando aplicável; procuração deve conter poderes adequados; diploma deve apresentar assinaturas reconhecidas; certidão deve ser emitida na modalidade solicitada pelo órgão brasileiro."],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie imagem completa do documento e informe país, órgão destinatário e finalidade. A análise identifica a natureza do ato, a autoridade italiana provável, a sequência com a tradução e os pontos que precisam ser confirmados na fonte oficial. O orçamento individual é apresentado pelo WhatsApp antes do início."],
    },
  ],
  "/traducao-cnh-dirigir-na-italia": [
    {
      title: "Brasileiro pode dirigir na Itália com CNH brasileira?",
      body: ["A resposta muda entre turista e residente. O turista deve portar habilitação brasileira válida e a documentação internacional exigida para sua situação. O residente entra no regime italiano após o período previsto pela legislação e precisa avaliar conversão ou obtenção de uma patente italiana. Tradução juramentada não prorroga validade, não substitui a habilitação e não cria direito à conversão."],
      subsections: [
        { title: "Os primeiros 12 meses de residência", body: ["A regra italiana considera a data de aquisição da residência. Durante o período aplicável, o condutor deve cumprir as exigências para uso de habilitação estrangeira, inclusive tradução oficial ou permissão internacional quando previstas. Seguro, locadora e fiscalização verificam documentos distintos."] },
        { title: "Depois dos 12 meses", body: ["Encerrado o período de uso da habilitação estrangeira pelo residente, dirigir exige patente italiana. Quem preenche as condições do acordo pede conversione; quem não preenche segue o procedimento italiano com esame di teoria, foglio rosa e esame di pratica."] },
        { title: "Turista e residente", body: ["O carimbo de entrada, a residência anagráfica e a permanência efetiva produzem situações diferentes. Não use orientação destinada a turista para justificar a condução após fixar residência na Itália."] },
      ],
    },
    {
      title: "Acordo bilateral Brasil-Itália sobre patente di guida",
      body: ["O Ministério italiano dos Transportes lista o Brasil entre os países com acordo de conversão válido até 28 de abril de 2030. Essa data foi verificada em 6 de junho de 2026 no documento oficial do MIT. A vigência do acordo não significa que toda CNH seja convertida: categoria, validade, data de residência, data de emissão e condições pessoais continuam relevantes."],
      subsections: [
        { title: "Quem se beneficia", body: ["O requerente apresenta uma CNH brasileira válida e demonstra que se enquadra nos requisitos do acordo e das instruções da Motorizzazione. A autoridade consulta a documentação e pode verificar autenticidade junto às autoridades brasileiras."] },
        { title: "Limites e exceções", body: ["Categorias profissionais, habilitação obtida depois da residência, documento vencido, suspensão, restrições médicas e tempo de residência alteram a análise. A tabela oficial do acordo determina correspondências; o tradutor não decide a categoria italiana."] },
        { title: "Categorias", body: ["A, B, C, D e E são reproduzidas exatamente como aparecem na CNH. A equivalência com A1, A2, A, B, BE, C, CE, D ou DE é aplicada pela Motorizzazione conforme o acordo, não pela tradução."] },
      ],
    },
    {
      title: "Procedimento de conversão na Motorizzazione Civile",
      body: ["A domanda di conversione é apresentada ao Ufficio Motorizzazione competente. O requerente reúne formulário, identificação, codice fiscale, residência, fotografias, certificado médico, habilitação original, tradução e comprovantes previstos pelas instruções vigentes."],
      subsections: [
        { title: "Visita medica", body: ["A avaliação médica verifica requisitos psicofísicos e eventuais restrições. O certificado precisa estar dentro do prazo aceito quando o processo é protocolado."] },
        { title: "Verificação documental", body: ["A Motorizzazione confere validade, categorias, data de emissão, autenticidade e enquadramento no acordo. Dados divergentes entre CNH, passaporte e residência precisam ser esclarecidos documentalmente."] },
        { title: "Entrega da patente italiana", body: ["A autoridade informa como ocorre a substituição e a entrega do documento brasileiro. Não dirija com documento retido, vencido ou fora do regime permitido enquanto aguarda o resultado."] },
      ],
    },
    {
      title: "Tradução juramentada da CNH — o que entra",
      body: ["A tradução inclui frente, verso, nome, documento, número de registro, datas, categorias, validade, local de emissão, observações, códigos e restrições visíveis. A CNH digital serve para análise inicial, mas a Motorizzazione decide qual suporte aceita no protocolo."],
      subsections: [
        { title: "Frente e dados pessoais", body: ["Nome, filiação, nascimento e números devem coincidir com os demais documentos. Corte, reflexo ou baixa resolução impedem leitura segura."] },
        { title: "Verso e observações", body: ["Categorias, códigos, ACC, restrições e EAR são reproduzidos. EAR descreve atividade remunerada no sistema brasileiro e não concede autorização profissional automática na Itália."] },
        { title: "CNH provisória, definitiva ou vencida", body: ["A tradução identifica a condição documental. A autoridade avalia se a carteira provisória ou vencida atende ao acordo; traduzir não altera seu estado."] },
      ],
    },
    {
      title: "Apostila, PID e atendimento",
      body: ["Confirme com a Motorizzazione se a CNH ou certificação associada precisa de Apostila. Para turista, a Permissão Internacional para Dirigir e a tradução cumprem funções documentais diferentes. Envie frente e verso, cidade, data de residência e finalidade pelo WhatsApp para receber o escopo correto antes de iniciar."],
    },
    {
      title: "Nota de atualização",
      body: ["Conteúdo atualizado em 6 de junho de 2026. Fonte de vigência do acordo: Ministero delle Infrastrutture e dei Trasporti, elenco de Estados cujas habilitações são convertíveis, com Brasil indicado até 28 de abril de 2030. Confirme a instrução da Motorizzazione no dia do protocolo."],
    },
  ],
  "/dichiarazione-di-valore-traducao-diploma": [
    {
      title: "O que é a Dichiarazione di Valore in Loco",
      body: ["A Dichiarazione di Valore é emitida pela representação italiana competente pelo território onde o título brasileiro foi obtido. Ela descreve a instituição, a duração legal do curso, o nível do título e os direitos acadêmicos associados no sistema de origem. Não é uma equivalência italiana e não obriga universidade, ministério ou conselho profissional a reconhecer o diploma."],
      subsections: [
        { title: "Para que serve", body: ["A declaração fornece contexto oficial para ingresso acadêmico, continuação de estudos e alguns procedimentos profissionais. O destinatário decide se exige DV, serviço CIMEA ou outra forma de comprovação."] },
        { title: "Quem emite", body: ["Consulados-gerais, consulados e a Embaixada da Itália no Brasil atuam por circunscrição. O requerente deve usar a representação competente pela instituição de ensino, não necessariamente por seu endereço atual."] },
        { title: "DV e equipollenza", body: ["A DV descreve o título brasileiro. Equipollenza é o reconhecimento realizado pela autoridade italiana competente. Confundir os dois leva a preparar um documento informativo como se fosse uma decisão de equivalência."] },
      ],
    },
    {
      title: "Diploma, histórico e certificado escolar",
      body: ["Diploma, histórico e documentação escolar formam a base da análise. O diploma comprova a conclusão; o histórico mostra disciplinas, notas e carga horária; o certificado de ensino médio demonstra acesso à graduação quando solicitado. Ementas entram quando o destinatário precisa comparar conteúdo."],
      subsections: [
        { title: "Laurea triennale e magistrale", body: ["A graduação brasileira não recebe equivalência automática. A universidade examina duração, acesso, créditos e conteúdo para ingresso em laurea triennale, laurea magistrale, ciclo unico ou outro percurso."] },
        { title: "Dottorato di ricerca", body: ["Candidatura a doutorado exige título de segundo ciclo aceito pela instituição, histórico, projeto e demais requisitos do edital. Tradução e DV integram a prova documental, não a decisão acadêmica."] },
        { title: "Ensino médio", body: ["Para acesso ao primeiro ciclo, a instituição verifica escolaridade total, certificado, histórico e requisitos adicionais. A via brasileira precisa estar completa e formalizada segundo o edital."] },
      ],
      table: {
        headers: ["Nível brasileiro", "Referência italiana para avaliação", "Finalidade típica"],
        rows: [
          ["Ensino médio completo", "Diploma di scuola secondaria superiore", "Acesso à laurea triennale"],
          ["Graduação de 3 a 4 anos", "Laurea triennale, após avaliação", "Candidatura à laurea magistrale"],
          ["Graduação longa", "Laurea magistrale ou ciclo unico, após avaliação", "Estudo ou profissão"],
          ["Pós-graduação lato sensu", "Master, conforme conteúdo e acesso", "Avaliação acadêmica específica"],
          ["Mestrado acadêmico", "Título de segundo ciclo, após avaliação", "Dottorato e pesquisa"],
          ["Doutorado", "Dottorato di ricerca, após reconhecimento", "Carreira acadêmica"],
        ],
      },
    },
    {
      title: "Procedimento no Brasil e sequência documental",
      body: ["Leia primeiro o edital ou a lista da autoridade italiana. Em seguida, obtenha diploma e histórico na forma exigida, regularize assinaturas quando necessário, faça a Apostila dos atos brasileiros e prepare a tradução. O pedido de DV segue as instruções da representação consular competente."],
      subsections: [
        { title: "Circunscrições consulares", body: ["São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Recife e Brasília atendem territórios definidos. Consulte o portal oficial para saber qual sede cobre a instituição emissora e quais documentos aceita."] },
        { title: "CIMEA", body: ["Statement of Comparability e Verification são serviços técnicos distintos. A instituição italiana informa se aceita ou exige um deles e se dispensa a DV."] },
        { title: "Profissões regulamentadas", body: ["Médico, dentista, enfermeiro, engenheiro, arquiteto, advogado e outras profissões seguem autoridades próprias. O reconhecimento acadêmico não concede automaticamente inscrição profissional."] },
      ],
    },
    {
      title: "Erros comuns",
      body: ["Diploma sem histórico, histórico sem carga horária, nome diferente do passaporte, Apostila em via distinta da traduzida, ementa incompleta e tradução iniciada antes da leitura do edital são falhas recorrentes. A conferência deve ocorrer antes de gastar com formalizações."],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie diploma, histórico, ementas e a exigência oficial. A análise define o conjunto a traduzir, identifica páginas repetidas, confere legibilidade e organiza a direção linguística. Prazo e orçamento são apresentados pelo WhatsApp antes do início."],
    },
  ],
  "/documentos-traducao-permesso-di-soggiorno": [
    {
      title: "O que é o permesso di soggiorno",
      body: ["O permesso di soggiorno documenta a permanência do cidadão não europeu na Itália segundo um motivo específico. A Questura da província emite o título, enquanto Poste Italiane, Sportello Unico e outros canais participam de determinadas categorias. O motivo do permesso define formulários, provas, duração e documentos estrangeiros necessários."],
      subsections: [
        { title: "Lavoro, famiglia e studio", body: ["Trabalho subordinado ou autônomo, motivos familiares e estudo exigem bases documentais distintas. Contrato, matrícula, renda, alojamento e vínculo familiar não são intercambiáveis."] },
        { title: "Attesa cittadinanza", body: ["A categoria acompanha a situação de quem aguarda procedimento de cidadania nas condições previstas. Certidões e comprovantes devem corresponder ao processo efetivamente protocolado."] },
        { title: "Quem emite", body: ["A Questura territorialmente competente realiza identificação, impressões digitais, avaliação e entrega. Endereço, convocação e canal de protocolo variam por categoria e província."] },
      ],
    },
    {
      title: "Documentos brasileiros mais comuns",
      body: ["Certidão de nascimento, casamento, antecedentes e documentos de vínculo são usados quando o fato relevante ocorreu no Brasil. O original precisa ser recente quando a autoridade fixa validade administrativa, estar apostilado quando exigido e ser traduzido na modalidade aceita."],
      subsections: [
        { title: "Nascimento e casamento", body: ["As certidões comprovam identidade, filiação e vínculo. Averbações de divórcio, mudança de nome e retificação devem constar da via apresentada."] },
        { title: "Antecedentes criminais", body: ["Emita perto do protocolo, porque o destinatário exige documento recente. Polícia Federal, Justiça Federal e Justiça Estadual emitem certidões de alcances diferentes."] },
        { title: "Comprovantes de vínculo", body: ["Contrato de trabalho, matrícula e documentos familiares são analisados conforme a categoria. Documento italiano não precisa de tradução para italiano; documento brasileiro precisa estar formalmente compreensível."] },
      ],
    },
    {
      title: "Permesso por categoria",
      body: ["O permesso per motivi familiari utiliza provas do parentesco e da situação do familiar de referência. O permesso per lavoro usa contrato, autorização e elementos laborais. O permesso per studio usa matrícula, recursos e cobertura. O permesso per attesa cittadinanza se conecta ao procedimento de reconhecimento em curso."],
      subsections: [
        { title: "Ricongiungimento familiare", body: ["Nulla osta, vínculo, alojamento e renda seguem o procedimento próprio. Certidões brasileiras devem coincidir com nomes e datas dos demais documentos."] },
        { title: "Lavoro subordinato ou autonomo", body: ["Contrato, nulla osta, partita IVA e inscrição pertinente dependem da modalidade. Tradução de documentos brasileiros não substitui os requisitos econômicos e administrativos."] },
        { title: "Studio", body: ["Universidade ou instituição confirma matrícula e requisitos. Diplomas e históricos entram quando solicitados para demonstrar acesso ou percurso anterior."] },
      ],
    },
    {
      title: "Sequência do pedido",
      body: ["Emita o original brasileiro correto, apostile, traduza e monte o kit ou protocolo segundo a categoria. Após o envio, compareça à Questura na data comunicada com originais, fotografias e comprovantes. O bollettino e as marcas seguem a tabela oficial vigente."],
      subsections: [
        { title: "Kit postale", body: ["Preencha apenas os módulos aplicáveis e mantenha cópia completa do envio. O comprovante postal acompanha o processo até a convocação."] },
        { title: "Questura", body: ["Leve originais e traduções correspondentes. Documento diferente daquele anexado ou via vencida pode gerar integração documental."] },
        { title: "Renovação", body: ["Atualize renda, estudo, trabalho, residência e estado civil. A tradução anterior continua fiel ao documento antigo, mas não substitui uma nova via exigida para a renovação."] },
      ],
    },
    {
      title: "Erros que travam o permesso",
      body: ["Documento sem Apostila quando exigida, tradução informal, certidão antiga, nomes divergentes, arquivo cortado e protocolo na categoria errada atrasam o processo. Em Roma, Milano, Bologna e Torino, consulte a Questura provincial e não transfira automaticamente a instrução de uma cidade para outra."],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie os documentos e informe categoria, Questura e data prevista do protocolo. A análise organiza Apostila, tradução e validade administrativa. O serviço não decide o direito ao permesso; prepara os documentos brasileiros para a apresentação formal."],
    },
    {
      title: "Atualização",
      body: ["Conteúdo atualizado em 6 de junho de 2026. Procedimentos migratórios mudam; confirme formulários, taxas, endereços e documentos no portal oficial e na Questura competente."],
    },
  ],
  "/reforma-cidadania-italiana-documentos": [
    {
      title: "Contexto jurídico antes da reforma",
      body: ["A Lei 91/1992 estruturava a cidadania italiana contemporânea sobre o princípio do jure sanguinis, em continuidade e diálogo com a Lei 555/1912. O reconhecimento por descendência dependia da reconstrução documental da linha e da ausência de fatos que interrompessem a transmissão. A via materna anterior a 1948 desenvolveu-se por reconhecimento judicial."],
      subsections: [
        { title: "Lei 91/1992", body: ["A lei regula aquisição, perda e reconhecimento da cidadania. Antes do novo artigo 3-bis, a transmissão por descendência não tinha o atual filtro específico para pessoa nascida no exterior com outra cidadania."] },
        { title: "Lei 555/1912", body: ["A lei histórica continua relevante para fatos ocorridos durante sua vigência, inclusive naturalização, casamento e situação de filhos menores. A reconstrução exige aplicar a norma correspondente a cada evento."] },
        { title: "Caso 1948", body: ["A transmissão por mulher italiana a filho nascido antes de 1º de janeiro de 1948 é tratada pela via judicial construída a partir da jurisprudência constitucional e de cassação."] },
      ],
    },
    {
      title: "O que a Lei 74/2025 estabelece",
      body: ["O Decreto-Lei 36 de 28 de março de 2025 foi convertido, com modificações, na Lei 74 de 23 de maio de 2025, vigente desde 24 de maio de 2025. O novo artigo 3-bis da Lei 91/1992 limita o reconhecimento para pessoa nascida no exterior que possui outra cidadania, salvo as hipóteses expressamente previstas."],
      subsections: [
        { title: "Pedidos protegidos por regras anteriores", body: ["A lei preserva hipóteses ligadas a pedidos administrativos completos, agendamentos comunicados e ações judiciais apresentados dentro dos marcos de 27 de março de 2025 descritos no artigo 3-bis. A documentação e a data efetiva do ato são decisivas."] },
        { title: "Ascendente de primeiro ou segundo grau", body: ["Uma das exceções considera pai, mãe, avô ou avó que possua, ou possuísse ao falecer, exclusivamente a cidadania italiana. A prova exige certidões e documentos capazes de demonstrar a condição relevante."] },
        { title: "Residência do genitor na Itália", body: ["Outra hipótese considera genitor ou adotante residente na Itália por pelo menos dois anos contínuos após adquirir a cidadania italiana e antes do nascimento ou adoção do filho."] },
      ],
    },
    {
      title: "Sentença 63/2026 da Corte Costituzionale",
      body: ["A Corte Costituzionale decidiu a questão sobre o artigo 3-bis na Sentença 63/2026. A decisão ocorreu em 11 de março de 2026, foi depositada em 30 de abril de 2026 e publicada na Gazzetta Ufficiale de 6 de maio de 2026. O texto oficial deve ser lido integralmente antes de extrair efeito para um caso individual."],
      subsections: [
        { title: "Efeito documental", body: ["A decisão não elimina a necessidade de provar datas, graus de parentesco, cidadania exclusiva e residência quando esses fatos integram a hipótese invocada."] },
        { title: "Processos em andamento", body: ["Data do pedido, completude documental, agendamento, ajuizamento e fase processual precisam ser verificados. Não existe uma resposta única baseada apenas no sobrenome ou na geração."] },
        { title: "Processos futuros", body: ["Novos pedidos devem ser estruturados a partir do texto vigente, das instruções da autoridade e da jurisprudência aplicável na data do protocolo."] },
      ],
    },
    {
      title: "O que mudou para o descendente brasileiro",
      body: ["A pasta deixou de servir apenas para reconstruir uma linha sem limite geracional e passou a precisar demonstrar também o enquadramento nas hipóteses atuais. Certidões integrais, naturalizações, cidadania exclusiva, residência e datas processuais ganharam função probatória direta."],
      subsections: [
        { title: "Inteiro teor", body: ["A versão integral mostra averbações e alterações que uma certidão breve omite. A autoridade cruza cada geração e cada evento."] },
        { title: "Coerência da linha", body: ["Nome, filiação, nascimento, casamento, óbito e naturalização precisam formar uma sequência documental inteligível. A tradução preserva divergências; a retificação ocorre no registro competente."] },
        { title: "Documentos de vínculo", body: ["Quando residência, cidadania exclusiva ou outro vínculo integra a hipótese legal, o requerente precisa apresentar prova emitida pela autoridade competente, e não apenas declaração pessoal."] },
      ],
    },
    {
      title: "Atualização da pasta após a reforma",
      body: ["Classifique o pedido pela data e pela via, identifique a hipótese legal invocada, obtenha certidões atualizadas, confira naturalizações e averbações, apostile as vias corretas e traduza o conjunto final. Evite traduzir antes de o responsável jurídico fechar a lista."],
    },
    {
      title: "Aviso jurídico e fontes",
      body: ["Conteúdo informativo atualizado em 6 de junho de 2026. Fontes principais: Lei 74/2025 publicada na Gazzetta Ufficiale, orientações do MAECI e Sentença 63/2026 da Corte Costituzionale. Para orientação individual, consulte advogado italiano habilitado."],
    },
  ],
  "/traducao-sentenca-divorcio-italia": [
    {
      title: "Quando o divórcio brasileiro precisa produzir efeitos na Itália",
      body: [
        "O divórcio realizado no Brasil precisa ser apresentado na Itália quando a pessoa quer atualizar o estado civil, transcrever a dissolução do casamento, celebrar novo matrimônio, regularizar registro consular, organizar sucessão ou usar a decisão em outro processo. A certidão brasileira com averbação e a sentença cumprem funções diferentes: uma atualiza o registro; a outra demonstra como o divórcio foi decidido.",
        "O caminho italiano depende da natureza da decisão, do cumprimento dos requisitos de reconhecimento e da autoridade que receberá o pedido. Comune, representação consular e autoridade judicial analisam competências distintas. A tradução juramentada prepara as peças exigidas, mas não substitui a decisão sobre trascrizione ou reconhecimento.",
      ],
      subsections: [
        { title: "Brasileiro casado no Brasil e residente na Itália", body: ["A atualização perante o Comune evita que os registros italianos continuem mostrando estado civil incompatível com a realidade brasileira. O requerente apresenta as peças indicadas pelo Ufficio di Stato Civile."] },
        { title: "Novo matrimônio na Itália", body: ["Antes das pubblicazioni, a pessoa divorciada precisa demonstrar que o casamento anterior terminou definitivamente. Certidão atualizada, decisão e trânsito em julgado devem formar um conjunto coerente."] },
        { title: "Registro de cidadão italiano", body: ["Quando o interessado também é italiano, o ato estrangeiro precisa chegar ao Comune competente para atualização do Stato Civile e dos registros relacionados."] },
      ],
    },
    {
      title: "Reconhecimento e trascrizione",
      body: ["A Lei italiana 218/1995 disciplina o reconhecimento de decisões estrangeiras no sistema italiano. O procedimento administrativo de trascrizione verifica os requisitos legais da decisão; quando há contestação, ausência de requisito ou matéria que exige intervenção judicial, o caso segue a autoridade competente."],
      subsections: [
        { title: "Delibazione", body: ["O termo permanece na linguagem corrente e em hipóteses específicas, mas não deve ser usado como resposta automática para todo divórcio brasileiro. A via correta decorre da decisão, do pedido e da lei aplicável."] },
        { title: "Divórcio judicial", body: ["Sentença, petição, acordo, certidão definitiva e peças sobre filhos, alimentos ou bens entram conforme o que a autoridade precisa verificar. A tradução parcial só é feita quando o destinatário delimita o escopo."] },
        { title: "Divórcio extrajudicial", body: ["A escritura pública lavrada em cartório é um ato notarial, não uma sentença. Ela deve apresentar os elementos necessários, receber Apostila e ser traduzida junto com as certidões exigidas."] },
      ],
    },
    {
      title: "Documentos necessários",
      body: ["O conjunto típico inclui sentença integral ou escritura, certificação de trânsito em julgado quando existe decisão judicial, certidão de casamento atualizada com averbação, Apostila em cada ato brasileiro relevante e documentos pessoais. A lista final vem do Comune, consulado, advogado ou juízo responsável."],
      subsections: [
        { title: "Sentença integral", body: ["Cabeçalho, qualificação, relatório, fundamentação e dispositivo identificam partes, competência, contraditório e conteúdo decidido. Omitir uma seção pode impedir a verificação do requisito italiano."] },
        { title: "Trânsito em julgado", body: ["A certidão demonstra que a decisão não está sujeita a recurso ordinário no Brasil. Ela deve estar ligada de forma inequívoca ao processo traduzido."] },
        { title: "Casamento averbado", body: ["A nova certidão mostra que o registro civil brasileiro foi atualizado. Nome, data, processo e conteúdo da averbação precisam coincidir com a decisão."] },
      ],
    },
    {
      title: "O que entra na tradução juramentada",
      body: ["A tradução reproduz a estrutura processual, a identificação do juízo, as partes, pedidos, fundamentos, dispositivo, acordos, certificações, assinaturas e carimbos. Termos brasileiros não são substituídos por institutos italianos como se fossem idênticos; a redação esclarece a função sem reescrever a decisão."],
      subsections: [
        { title: "Filhos, alimentos e bens", body: ["Cláusulas sobre guarda, convivência, pensão e partilha podem produzir efeitos próprios. Se integram a decisão apresentada, devem ser traduzidas com terminologia consistente."] },
        { title: "Apostila e sequência", body: ["Finalize as certidões brasileiras, obtenha as Apostilas e traduza exatamente o conjunto que será protocolado. Alterar uma peça depois exige conferir novamente referências e paginação."] },
        { title: "Erros comuns", body: ["Sentença sem certificação definitiva, tradução apenas do dispositivo, certidão antiga, nomes divergentes e ausência de Apostila são falhas recorrentes."] },
      ],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie o PDF completo do processo ou escritura, a certidão de casamento atualizada e a instrução do destinatário. A análise separa peças, identifica certificações e define o volume real. Prazo e orçamento são confirmados no WhatsApp antes da execução."],
    },
  ],
  "/traducao-documentos-casamento-italia": [
    {
      title: "Casamento na Itália — celebração e registro",
      body: ["O casamento civil é celebrado pelo Comune competente. O casamento religioso produz efeitos civis quando segue a modalidade reconhecida e é transcrito. O brasileiro deve demonstrar identidade, estado civil e ausência de impedimento segundo sua lei nacional e as instruções do Ufficio di Stato Civile."],
      subsections: [
        { title: "Comune competente", body: ["O Comune do local de celebração ou residência informa documentos, pubblicazioni, intérprete e agenda. Roma, Milano, Bologna e outros municípios publicam procedimentos próprios."] },
        { title: "Civil e religioso", body: ["A celebração religiosa não dispensa os atos civis necessários. O ministro de culto e o Comune coordenam publicação, celebração e transcrição conforme a modalidade."] },
        { title: "Representação brasileira", body: ["O consulado brasileiro emite atos consulares dentro de sua competência e orienta o registro posterior no Brasil. Ele não substitui o Comune na celebração civil italiana."] },
      ],
    },
    {
      title: "Documentos brasileiros para casar na Itália",
      body: ["A base inclui passaporte, certidão de nascimento atualizada e Nulla Osta al matrimonio. Pessoa divorciada apresenta prova definitiva do divórcio; pessoa viúva apresenta certidão de óbito do cônjuge anterior. O Comune confirma se exige documentos adicionais."],
      subsections: [
        { title: "Certidão de nascimento", body: ["A via deve mostrar filiação, dados atuais e averbações. Emissão recente, Apostila e tradução seguem a instrução do procedimento."] },
        { title: "Divórcio ou viuvez", body: ["Certidão de casamento averbada, sentença, escritura ou certidão de óbito demonstram que não existe casamento anterior vigente."] },
        { title: "Antecedentes", body: ["Antecedentes não são tratados como requisito universal de casamento. Só devem ser emitidos e traduzidos quando o Comune ou outra autoridade os solicitar."] },
      ],
    },
    {
      title: "Nulla Osta al matrimonio",
      body: ["O Nulla Osta é o documento central que declara, segundo a lei brasileira, a inexistência de impedimento ao casamento. O brasileiro na Itália segue o procedimento da repartição consular competente e apresenta as certidões e declarações exigidas."],
      subsections: [
        { title: "Onde obter", body: ["Consulte o portal do consulado brasileiro responsável pela região. Requisitos, presença, testemunhas, agendamento e documentos podem ser atualizados."] },
        { title: "Conteúdo", body: ["Nome, nascimento, filiação, estado civil e identificação do futuro cônjuge devem coincidir com passaporte e certidões. Divergência precisa ser resolvida antes das pubblicazioni."] },
        { title: "Validade administrativa", body: ["Planeje emissão, formalização e apresentação dentro do período aceito. O Comune confirma a atualidade necessária para o Nulla Osta e as certidões."] },
      ],
    },
    {
      title: "Pubblicazioni di matrimonio",
      body: ["As pubblicazioni tornam público o pedido de casamento e permitem verificar impedimentos. O Comune recebe os documentos, registra a intenção dos nubentes e cumpre o período legal antes da celebração, salvo hipóteses específicas."],
      subsections: [
        { title: "Intérprete", body: ["Quando um nubente não compreende italiano suficiente para o ato, o Comune ou notaio pode exigir intérprete. Tradução escrita e interpretação oral são serviços diferentes."] },
        { title: "Casamento entre brasileiro e italiano", body: ["Além dos documentos brasileiros, o Comune verifica os dados do cidadão italiano diretamente nos registros ou solicita certidões conforme o caso."] },
        { title: "Após o casamento", body: ["A certidão italiana deve ser registrada perante a autoridade brasileira competente para atualizar o estado civil e produzir efeitos documentais no Brasil."] },
      ],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie a lista do Comune, certidões e documentos pessoais. A análise confere averbações, nomes, Apostila e direção linguística. O orçamento é calculado pelo conjunto efetivamente exigido e enviado pelo WhatsApp antes do início."],
    },
  ],
  "/traducao-antecedentes-criminais-italia": [
    {
      title: "Quem emite antecedentes criminais no Brasil",
      body: ["O Brasil não possui um único documento que reúna todas as esferas. Polícia Federal, Justiça Federal e Justiças Estaduais emitem certidões com bases, abrangência e finalidade diferentes. A autoridade italiana deve indicar qual documento integra cidadania, adoção, concurso, permesso ou outro procedimento."],
      subsections: [
        { title: "Polícia Federal", body: ["O atestado eletrônico informa o resultado da consulta na base correspondente e possui mecanismo de validação. Nome, filiação, nascimento e documento devem estar corretos antes da Apostila."] },
        { title: "Justiça Federal", body: ["A certidão judicial federal cobre processos e registros dentro da competência e da região consultada. Não substitui automaticamente o atestado policial."] },
        { title: "Justiça Estadual", body: ["Cada tribunal estadual mantém emissão e escopo próprios. Um processo pode pedir certidões dos estados onde a pessoa residiu."] },
      ],
    },
    {
      title: "Quando a Itália exige antecedentes brasileiros",
      body: ["Cidadania por casamento ou residência, adoção, concursos e determinados procedimentos migratórios estão entre as finalidades possíveis. Não emita todos os documentos por precaução: use a lista oficial do destinatário para evitar certidão errada ou vencida."],
      subsections: [
        { title: "Cidadania", body: ["A autoridade informa países e períodos de residência relevantes. A certidão brasileira precisa estar recente na data do protocolo."] },
        { title: "Permesso e adoção", body: ["A categoria e o caso concreto definem o alcance. A tradução não amplia a base consultada pelo emissor."] },
        { title: "Concorsi pubblici", body: ["O edital determina declarações, certificados e reconhecimento de documentos estrangeiros. Leia a versão vigente antes de emitir."] },
      ],
    },
    {
      title: "Equivalente italiano e diferenças",
      body: ["O certificato ou estratto del casellario giudiziale é emitido pela Procura della Repubblica e se refere ao sistema italiano. Ele não substitui a certidão brasileira quando a autoridade quer verificar fatos no Brasil. Em alguns processos, os dois documentos aparecem juntos porque cobrem países diferentes."],
    },
    {
      title: "Sequência: emissão, Apostila e tradução",
      body: ["Emita no canal oficial, valide o arquivo, confirme se assinatura eletrônica ou impressão é apta ao apostilamento, obtenha a Apostila e traduza o conjunto. A Apostila e eventual página de validação entram no escopo quando o destinatário precisa compreender todo o fascículo."],
      subsections: [
        { title: "Validade limitada", body: ["Conte o prazo para trás a partir do protocolo. Reservar tempo excessivo entre emissão, Apostila e tradução consome a validade administrativa."] },
        { title: "Nada consta e anotações", body: ["A tradução reproduz exatamente o resultado. O tradutor não interpreta antecedentes, não declara reabilitação e não substitui advogado."] },
        { title: "Termos penais", body: ["Nomes de órgãos, classes processuais e situações cadastrais são traduzidos preservando o sistema brasileiro, sem criar falsa equivalência com crimes ou decisões italianas."] },
      ],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie o arquivo completo, a validação e a lista do procedimento. A análise verifica legibilidade, emissor, data, Apostila e páginas necessárias. Prazo e orçamento são confirmados pelo WhatsApp."],
    },
  ],
  "/traducao-documentos-medicos-italia": [
    {
      title: "Tipos de documentos médicos",
      body: ["Documentos de saúde circulam para tratamento, seguro, escola, trabalho, perícia, imigração e reconhecimento profissional. A finalidade define se basta tradução informativa ou se a autoridade exige tradução juramentada. Dados clínicos são sensíveis e devem ser limitados ao conjunto necessário."],
      subsections: [
        { title: "Atestados e laudos", body: ["Diagnóstico, período, restrições, exames e identificação do profissional são reproduzidos. A tradução não confirma a conclusão clínica."] },
        { title: "Prontuário", body: ["Histórico, evolução, procedimentos, alta e anexos precisam manter cronologia. Arquivos extensos devem ser delimitados pelo médico ou instituição destinatária."] },
        { title: "Vacinação", body: ["Data, vacina, fabricante, lote, dose e estabelecimento entram quando legíveis. Abreviações são tratadas sem inventar dados ausentes."] },
        { title: "Laudos forenses", body: ["Perícias médicas e judiciais exigem terminologia técnica e preservação da estrutura probatória, assinaturas e quesitos."] },
      ],
    },
    {
      title: "Reconhecimento profissional na saúde",
      body: ["Exercer profissão sanitária regulamentada exige reconhecimento do título e inscrição no órgão profissional. O Ministero della Salute, autoridades acadêmicas e ordini analisam competências diferentes. Tradução de diploma e histórico não concede habilitação."],
      subsections: [
        { title: "Médico e dentista", body: ["Diploma, histórico, programas, habilitação e regularidade profissional integram o processo conforme a lista oficial."] },
        { title: "Enfermeiro", body: ["A documentação acadêmica e profissional segue o reconhecimento aplicável e a posterior inscrição no OPI competente."] },
        { title: "Outras profissões", body: ["Fisioterapeuta, psicólogo, farmacêutico e demais profissionais devem identificar autoridade, profissão regulamentada e requisitos específicos."] },
      ],
    },
    {
      title: "Continuidade de tratamento",
      body: ["Quem muda do Brasil para a Itália deve pedir ao serviço de saúde um resumo clínico organizado, lista de medicamentos por princípio ativo, exames relevantes e plano atual. Traduzir centenas de páginas sem orientação do médico destinatário dificulta a leitura e expõe dados desnecessários."],
      subsections: [
        { title: "Receitas e medicamentos", body: ["Nomes comerciais variam. A tradução preserva o produto informado e identifica o princípio ativo quando constar do documento, sem converter prescrição brasileira em receita válida na Itália."] },
        { title: "CID e especialidades", body: ["Códigos e descrições são mantidos de acordo com o original. A equivalência terminológica não altera diagnóstico nem classificação clínica."] },
        { title: "LGPD e GDPR", body: ["Arquivos devem ser transmitidos por canal adequado, acessados apenas para o serviço e conservados pelo período necessário. Exemplos públicos nunca usam dados reais de pacientes."] },
      ],
    },
    {
      title: "Particularidades da tradução médica",
      body: ["Unidades, doses, vias de administração, anatomia, abreviações e resultados laboratoriais exigem conferência. Uma vírgula decimal ou unidade alterada muda o sentido clínico. Texto ilegível é sinalizado; não se completa informação por inferência."],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Informe finalidade e destinatário, envie documentos legíveis e destaque o prazo clínico ou administrativo. A análise define modalidade, escopo e proteção do arquivo. O orçamento individual é enviado pelo WhatsApp."],
    },
  ],
  "/traducao-contratos-imoveis-italia": [
    {
      title: "Compra de imóvel na Itália por brasileiro",
      body: ["A compra envolve identificação fiscal, diligência sobre o imóvel, proposta, contrato preliminar e ato definitivo perante notaio. O profissional responsável informa quais documentos brasileiros precisam de Apostila, tradução ou interpretação. A tradução permite compreender e apresentar atos; não substitui análise jurídica, fiscal ou urbanística."],
      subsections: [
        { title: "Codice fiscale", body: ["O identificador fiscal é usado no contrato, no banco e no registro. Nome, nascimento e dados do passaporte devem coincidir em todos os documentos."] },
        { title: "Compromesso", body: ["O preliminar define imóvel, preço, sinal, condições, prazo e consequências do inadimplemento. Cada cláusula precisa ser compreendida antes da assinatura."] },
        { title: "Rogito", body: ["O notaio formaliza o ato definitivo, verifica legalidade e providencia registros. Quando uma parte não compreende italiano, define-se tradução e interpretação adequadas."] },
      ],
    },
    {
      title: "Documentos brasileiros exigidos pelo notaio",
      body: ["Passaporte, certidões de estado civil, regime de bens, procurações, atos societários e prova de poderes podem ser solicitados. O notaio determina formato, atualidade e necessidade de tradução asseverata. Documentos bancários seguem também as regras de prevenção à lavagem de dinheiro."],
      subsections: [
        { title: "Procuração", body: ["A procuração ad negotia brasileira e a procura speciale italiana não são modelos intercambiáveis. O texto deve conceder poderes exatos para o imóvel e o ato previstos."] },
        { title: "Regime patrimonial", body: ["Pessoa casada demonstra estado civil e regime de bens. Certidão desatualizada ou sem averbação compromete a qualificação do comprador."] },
        { title: "Origem de recursos", body: ["Banco e notaio podem pedir declarações e comprovantes. A tradução deve manter valores, titulares e referências sem interpretar a operação."] },
      ],
    },
    {
      title: "Empresa italiana e partita IVA",
      body: ["Abrir atividade ou sociedade exige escolher forma jurídica e cumprir obrigações fiscais, societárias e migratórias. SRL, SPA, SAS, SNC e ditta individuale possuem estruturas próprias. A semelhança com LTDA ou S.A. ajuda a compreensão, mas não cria equivalência legal."],
      subsections: [
        { title: "Sócio estrangeiro", body: ["Atos constitutivos, certidões da Junta Comercial, procurações e identificação dos administradores podem ser apresentados ao notaio e às autoridades italianas."] },
        { title: "Contrato social e estatuto", body: ["Objeto, capital, quotas, administração, representação e deliberações exigem vocabulário societário consistente."] },
        { title: "CNPJ e registros italianos", body: ["CNPJ, Registro de Empresas, REA, partita IVA e codice fiscale identificam sujeitos em sistemas diferentes. A tradução preserva a denominação oficial e explica a função quando necessário."] },
      ],
    },
    {
      title: "Atos notariais e tradução",
      body: ["Procurações, doações, constituição de sociedade, sucessão e compra e venda são atos solenes. O notaio decide se exige tradutor, intérprete, texto bilíngue ou asseverazione anterior. Essa definição precisa ocorrer antes da assinatura, não depois."],
    },
    {
      title: "Como funciona o atendimento",
      body: ["Envie o documento e a instrução do notaio, banco, advogado ou autoridade. A análise identifica direção linguística, Apostila, terminologia e necessidade de comparecimento. Prazo e orçamento são enviados pelo WhatsApp antes do início."],
    },
  ],
};
