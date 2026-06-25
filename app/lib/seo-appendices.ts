import type { SeoSupplement } from "./seo-supplements";

const section = (title: string, body: string[]): SeoSupplement => ({ title, body });

export const seoAppendices: Record<string, SeoSupplement[]> = {
  "/apostilar-documento-italiano-na-italia": [
    section("Conferência antes de sair da autoridade", [
      "Leia a Apostila ainda no balcão ou antes de aceitar a devolução postal. País de destino, nome do signatário, qualidade funcional, selo, data, número e autoridade apostilante precisam corresponder ao documento. A certificação deve estar presa ou vinculada ao ato de forma inequívoca. Fotografe o conjunto completo e não destaque a folha.",
      "Quando o documento possui anexos, pergunte se a assinatura certificada abrange todo o conjunto. Um diploma acompanhado de histórico, uma sentença acompanhada de trânsito em julgado e uma procuração com reconhecimento separado podem exigir certificações distintas. O destinatário deve receber exatamente as peças que foram apostiladas e traduzidas.",
    ]),
    section("Apostila de certidões, sentenças e atos notariais", [
      "Certidões civis italianas devem ser emitidas na forma exigida no Brasil: certificato, estratto ou copia integrale não são documentos equivalentes. A certidão precisa trazer a assinatura apta ao uso internacional. Antes do pedido, confirme com o cartório, tribunal ou órgão brasileiro qual modalidade será aceita.",
      "Sentenças exigem cópia oficial e, quando aplicável, prova de definitividade. O texto da decisão, a certificação e a Apostila precisam mencionar o mesmo processo. Atos notariais seguem a assinatura do notaio; uma simples cópia do documento não demonstra a origem pública necessária para a Apostille.",
      "Diplomas e certificados escolares exigem planejamento porque a assinatura da escola ou universidade pode precisar de validação prévia. O procedimento varia entre regiões e instituições. Solicite por escrito a sequência e evite deslocar o original entre Prefettura, Ufficio scolastico e universidade sem saber qual assinatura será certificada.",
    ]),
    section("Uso no Brasil depois da Apostila", [
      "A autoridade brasileira recebe o documento italiano apostilado e a tradução exigida para o procedimento. Registro civil, processo judicial, universidade, banco e conselho profissional aplicam regras próprias. A Apostila não obriga o destinatário a aceitar documento incompleto, vencido ou emitido em modalidade diferente da solicitada.",
      "Se o ato italiano será registrado no Brasil, verifique previamente cartório competente, necessidade de traslado, tradução pública e documentação pessoal. Essa confirmação define se o original deve permanecer unido à Apostila e se será necessário obter vias adicionais antes de enviar o conjunto.",
    ]),
    section("Checklist de envio internacional", [
      "Antes de enviar, confirme que o documento não será necessário em outro procedimento italiano, porque algumas autoridades retêm a via apresentada. Solicite vias adicionais quando houver uso simultâneo. Digitalize frente, verso, Apostila e anexos em alta resolução e mantenha os arquivos em local seguro.",
      "Use embalagem rígida e envio rastreado. Informe corretamente conteúdo documental sem expor dados sensíveis na parte externa. Ao receber no Brasil, confira se lacres, grampos e vínculos físicos permanecem intactos antes de entregar ao tradutor ou autoridade.",
      "Se o documento voltar para correção, não acrescente nova Apostila sobre uma via alterada. Obtenha a certificação correspondente à assinatura e à versão final efetivamente apresentadas.",
    ]),
  ],
  "/traducao-cnh-dirigir-na-italia": [
    section("Checklist para a Motorizzazione", [
      "Antes do agendamento, reúna CNH física válida, passaporte ou documento italiano, codice fiscale, prova de residência, fotografias, certificado médico e formulários indicados pelo Ufficio Motorizzazione. Compare cada nome e data. Divergência entre CNH, passaporte e cadastro anagráfico precisa ser esclarecida antes do protocolo.",
      "Confirme por escrito se a unidade exige tradução asseverata, tradução consular ou outra modalidade aceita. Leve frente e verso completos, sem plastificação danificada ou campos ilegíveis. A autoridade pode solicitar verificação da autenticidade junto ao Brasil, por isso mantenha contatos e comprovantes do documento.",
      "Verifique se a CNH foi emitida antes ou depois da residência italiana e se a categoria está abrangida pelo acordo. Data da primeira habilitação, renovação e emissão atual cumprem funções distintas. A tradução deve preservar todas, sem escolher qual delas será usada na análise.",
    ]),
    section("Categorias profissionais e restrições", [
      "Categorias C, D e E, combinações com reboque, habilitação para motocicleta e observações médicas exigem atenção especial. A tabela de equivalência do acordo e as regras italianas determinam a categoria concedida. Exames, idade mínima, certificados profissionais e restrições podem permanecer necessários mesmo quando a carteira básica é convertível.",
      "EAR indica exercício de atividade remunerada no Brasil, mas não equivale a CQC, CAP ou outra qualificação profissional italiana. Para trabalhar como motorista, o interessado confirma requisitos adicionais de formação, saúde, imigração e relação de trabalho. A tradução não transforma a observação brasileira em título profissional italiano.",
    ]),
    section("Durante a análise do pedido", [
      "Guarde protocolo e instruções recebidas. Se a Motorizzazione retiver a CNH, confirme qual documento permite acompanhar o processo e se existe autorização temporária. Não presuma que o protocolo autoriza condução. Multa, acidente e seguro são avaliados conforme a habilitação válida no momento.",
      "Mudança de endereço, vencimento, perda ou renovação da CNH durante o processo deve ser comunicada. Uma nova carteira altera número, datas e suporte documental e pode exigir atualização da tradução. Organizar o pedido antes do limite de residência reduz o risco de ficar sem documento utilizável.",
    ]),
    section("Controle de validade e residência", [
      "Registre a data da residência anagráfica e guarde o certificato storico quando necessário. Não confunda data do permesso, chegada ao país e inscrição no Comune. A Motorizzazione usa os marcos previstos nas instruções do acordo.",
      "Confira a validade da CNH na data do protocolo e durante a análise. Renovação no Brasil deve seguir as regras brasileiras e ser comunicada à autoridade italiana. Apresentar duas versões sem explicação gera dúvida sobre número, categoria e data de emissão.",
      "O acordo vigente até 28 de abril de 2030 deve ser novamente verificado antes do pedido. Uma página atualizada do MIT prevalece sobre cópias antigas, relatos pessoais ou instruções de outra província.",
    ]),
  ],
  "/dichiarazione-di-valore-traducao-diploma": [
    section("Documentos acadêmicos em detalhe", [
      "O histórico precisa identificar instituição, curso, período, disciplinas, notas, aprovação, carga horária e forma de conclusão. Quando existem transferências, aproveitamento de estudos, estágio ou trabalho final, a documentação deve explicar a origem dos créditos. A tradução mantém a nomenclatura brasileira e oferece uma versão italiana inteligível.",
      "Ementas e programas descrevem objetivos, conteúdo, bibliografia e horas. Antes de traduzir centenas de páginas, peça à universidade ou autoridade profissional a lista de disciplinas necessária. Um programa oficial assinado ou autenticado tem valor documental diferente de uma página informal retirada do site.",
      "Declarações de conclusão são úteis enquanto o diploma não foi expedido, mas o destinatário decide se aceita documento provisório. Certificados de especialização, residência, extensão e formação complementar devem ser separados por finalidade, porque nem todos integram o reconhecimento principal.",
    ]),
    section("Consulados italianos no Brasil", [
      "A rede consular divide o território brasileiro em circunscrições. São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre, Recife e Brasília publicam formulários, modalidades de envio e listas próprias. Use a sede competente pelo local da instituição emissora e não apenas pelo endereço atual do titular.",
      "Reconhecimento de firma, autenticação acadêmica, Apostila, tradução e apresentação à sede precisam seguir a ordem publicada. Se o consulado exige tradução realizada por profissional específico ou cadastro consular, confirme antes de contratar. Uma instrução de outra circunscrição não substitui a regra local.",
    ]),
    section("Finalidades acadêmicas e profissionais", [
      "Ingresso em laurea triennale verifica ensino médio e requisitos de acesso. Laurea magistrale avalia graduação, créditos e compatibilidade curricular. Dottorato examina título de segundo ciclo e edital. Master universitario e corsi di perfezionamento possuem critérios próprios. O mesmo diploma brasileiro recebe análises diferentes conforme o objetivo.",
      "Para profissão regulamentada, a autoridade compara formação e habilitação, podendo exigir prova, estágio ou medida compensatória. Medicina e outras profissões sanitárias passam pelo Ministero della Salute; outras seguem ministério, universidade ou ordine competente. A tradução deve incluir documentos profissionais além dos acadêmicos quando a lista exigir.",
      "Concursos públicos exigem leitura do bando e identificação do procedimento de equivalência ou reconhecimento para aquela seleção. Prazo do concurso não suspende o tempo necessário para Apostila, tradução e decisão da autoridade. Inicie pela cláusula do edital que trata de títulos estrangeiros.",
    ]),
    section("Conferência final da pasta", [
      "Nome, sobrenome, local de nascimento e data devem coincidir com passaporte e demais documentos. Confira todas as Apostilas, assinaturas, páginas e anexos. Mantenha diploma, histórico, tradução e declaração de valor organizados na mesma sequência usada no pedido.",
      "Arquivos digitais precisam conservar QR code, assinatura eletrônica e página de validação. Imprimir apenas a parte visual pode eliminar o mecanismo de autenticidade. Envie ao tradutor o arquivo original recebido da instituição, não uma fotografia comprimida da tela.",
    ]),
    section("Créditos, notas e terminologia acadêmica", [
      "Crédito brasileiro, hora-aula, hora-relógio, semestre e média não devem ser convertidos por conta própria para CFU ou escala italiana. A tradução reproduz o sistema de origem; universidade ou CIMEA realiza a comparação. Notas numéricas e conceitos permanecem associados à legenda oficial do histórico.",
      "Bacharelado, licenciatura e tecnólogo descrevem percursos brasileiros distintos. Usar simplesmente laurea para todos elimina informação relevante. A redação identifica o título original e oferece tradução funcional sem declarar equivalência que ainda será decidida.",
      "Disciplinas com nomes semelhantes podem ter conteúdo diferente. Para reconhecimento profissional, programas e carga horária demonstram a formação real. A tradução mantém códigos, pré-requisitos, estágio e atividades práticas exatamente como certificados.",
    ]),
    section("Depois da entrega à instituição", [
      "Guarde número do pedido e versão de cada arquivo. Se a universidade solicitar integração, compare a nova lista com o conjunto já traduzido antes de emitir outra via. Uma complementação específica não exige repetir automaticamente todo o dossiê.",
      "A decisão acadêmica pode reconhecer acesso, conceder créditos, pedir disciplinas adicionais ou recusar o título para aquela finalidade. Leia a motivação e use o canal de revisão indicado. O tradutor esclarece o texto documental, mas não contesta a avaliação acadêmica.",
      "Quando o título será usado em mais de uma universidade, verifique se cada instituição aceita a mesma formalização. Uma DV dirigida a um procedimento e um serviço CIMEA possuem escopo próprio; planejar múltiplos usos evita refazer originais.",
    ]),
  ],
  "/documentos-traducao-permesso-di-soggiorno": [
    section("Organização por categoria de permesso", [
      "No lavoro subordinato, o vínculo italiano é demonstrado por contrato, comunicação obrigatória e documentos do empregador, enquanto atos brasileiros entram quando a Questura solicita identidade, estado civil ou antecedentes. No lavoro autonomo, autorização, atividade, partita IVA e recursos seguem percurso próprio.",
      "Motivi familiari e ricongiungimento exigem prova do parentesco, situação do familiar, renda e alojamento. Certidão de nascimento ou casamento brasileira deve corresponder aos nomes usados na Itália. Divórcio, adoção e reconhecimento de filiação precisam estar averbados ou acompanhados do ato apropriado.",
      "Studio depende de matrícula, frequência, recursos e cobertura. Documentos escolares brasileiros entram quando a instituição ou o pedido os utiliza. Attesa cittadinanza exige prova do procedimento de cidadania e da situação que autoriza a permanência durante a análise.",
    ]),
    section("Kit postale sem inconsistências", [
      "Use o kit correspondente e preencha dados exatamente como constam de passaporte e registros italianos. Endereço, codice fiscale, motivo do pedido e documentos anexos precisam coincidir. Assine nos campos indicados e preserve cópia de cada módulo, bollettino, recibo e anexo.",
      "Na postagem, o atendente confere presença formal dos elementos, mas não decide o mérito. O recibo contém dados usados para acompanhar o pedido. Erro de categoria ou ausência de documento reaparece na convocação da Questura e prolonga a conclusão.",
    ]),
    section("Comparecimento à Questura", [
      "Leve passaporte, recibo, convocação, fotografias, originais brasileiros, Apostilas, traduções e documentos italianos atualizados. Organize em separadores e mantenha cópia digital. O funcionário pode pedir integração quando um original não corresponde ao arquivo enviado.",
      "Impressões digitais e identificação pertencem ao procedimento pessoal. Mudança de residência, novo passaporte, alteração de trabalho, casamento ou nascimento de filho deve ser comunicada conforme a categoria. A tradução de um documento antigo não prova a situação atual.",
      "Roma, Milano, Bologna e Torino possuem volume e organização local diferentes. Consulte a página oficial da Questura da província para endereço, horário e avisos. Não use endereço encontrado em fórum como única referência.",
    ]),
    section("Renovação e continuidade documental", [
      "Comece a renovação dentro do período indicado para o título. Reúna renda, trabalho, estudo, residência e vínculo atualizados. Certidões estrangeiras só são reapresentadas quando exigidas, mas qualquer mudança de estado civil precisa ser documentada.",
      "Guarde os fascículos de pedidos anteriores. Eles ajudam a identificar qual grafia, tradução e Apostila foram usadas, sem substituir os documentos recentes. Quando houver divergência, resolva antes de protocolar a renovação.",
    ]),
    section("Documentos familiares e estado civil", [
      "Nascimento de filho, casamento, separação, divórcio e óbito alteram o nucleo familiare e podem repercutir no título. Registre o evento nas autoridades competentes e apresente certidões atualizadas. Uma declaração informal não substitui o ato de registro civil.",
      "Filiação e parentesco devem aparecer de forma consistente. Quando um sobrenome mudou no casamento, a pasta precisa ligar nome de nascimento e nome atual. A tradução mantém averbações e referências que explicam essa sequência.",
      "Menores possuem documentação própria e comparecimento conforme idade e procedimento. Passaporte, certidão, consenso parental e prova de residência precisam ser verificados sem usar automaticamente a lista do adulto.",
    ]),
    section("Acompanhamento e integração", [
      "Acompanhe o pedido pelos canais indicados no recibo. Uma richiesta di integrazione deve ser respondida no prazo e com referência ao processo. Envie exatamente o documento pedido, acompanhado de Apostila e tradução quando for brasileiro.",
      "Se o original está no Brasil, coordene emissão e courier imediatamente, mas confirme a modalidade antes de apostilar. Informe à autoridade quando o prazo logístico torna necessária orientação adicional; não substitua o ato por fotografia não formal.",
      "Na retirada, confira nome, motivo, duração e dados do permesso. Erro material deve ser comunicado pelo canal da Questura. Guarde cópia frente e verso para futuras renovações.",
    ]),
  ],
  "/reforma-cidadania-italiana-documentos": [
    section("Leitura documental do artigo 3-bis", [
      "A primeira pergunta é onde e quando o requerente nasceu e quais cidadanias possui. Em seguida, identifica-se se o pedido está protegido pelos marcos transitórios ou se depende de uma das exceções atuais. Cada afirmação precisa de documento público, não de árvore genealógica informal.",
      "Para ascendente de primeiro ou segundo grau com cidadania exclusivamente italiana, certidões italianas e estrangeiras devem demonstrar parentesco e condição de cidadania. Naturalização, aquisição de outra cidadania e data do falecimento alteram a prova. O responsável jurídico define quais certificados nacionais são necessários.",
      "Para residência do genitor na Itália, histórico anagráfico e documentos de aquisição da cidadania precisam estabelecer dois anos contínuos no período relevante. Uma certidão atual de residência não prova sozinha todo o intervalo histórico.",
    ]),
    section("Pedidos apresentados antes de 27 de março de 2025", [
      "A data protegida não deve ser presumida pela data em que o interessado começou a reunir certidões. Protocolo administrativo completo, agendamento comunicado pela autoridade ou ação judicial apresentada são fatos documentais específicos. Recibos, mensagens institucionais e registros processuais devem ser preservados.",
      "Completude do pedido também importa. Pasta enviada sem documentos essenciais, formulário incompleto ou protocolo em canal inadequado exige análise individual. A tradução deve seguir a estratégia definida pelo advogado ou autoridade para demonstrar o marco invocado.",
    ]),
    section("Corte Costituzionale e efeitos práticos", [
      "A Sentença 63/2026 responde às questões submetidas à Corte dentro de seu objeto. Ela não funciona como parecer personalizado para toda linha de descendência. Leia dispositivo e motivação, identifique a norma examinada e verifique como o juízo ou administração aplica a decisão ao processo.",
      "Processos judiciais em andamento dependem de pedidos, documentos, competência territorial e fase processual. Novos fatos legislativos podem gerar memoriais, integração ou decisão específica. Somente o advogado constituído pode orientar a atuação nos autos.",
      "Pedidos administrativos seguem instruções do MAECI, consulado e Comune. Uma decisão constitucional não elimina formulários, certidões, Apostilas, traduções e verificações de não renúncia ou naturalização.",
    ]),
    section("Auditoria da linha familiar", [
      "Monte uma linha cronológica por pessoa: nascimento, casamento, filhos, naturalização, divórcio e óbito. Ao lado, registre país, autoridade, número do ato, Apostila e tradução. Essa planilha identifica lacunas sem substituir os documentos.",
      "Compare grafias em português e italiano. A tradução reproduz o assento brasileiro e não restaura automaticamente sobrenome ou localidade. Divergência relevante é tratada por retificação, prova complementar ou estratégia jurídica antes da tradução final.",
      "Verifique inteiro teor, averbações e estado civil atualizado. Certidão recente em formato breve continua insuficiente quando o processo exige o conteúdo integral do livro.",
    ]),
    section("Manutenção do artigo", [
      "Este conteúdo deve ser revisto sempre que houver nova lei, circular do MAECI, decisão da Corte Costituzionale ou orientação administrativa relevante. A data de modificação no schema é 6 de junho de 2026 e deve mudar junto com o texto, nunca de forma automática.",
      "Links oficiais permanecem no final da página para permitir leitura da fonte. Resumos de imprensa, vídeos e publicações em redes sociais não substituem Gazzetta Ufficiale, MAECI e Corte Costituzionale.",
    ]),
    section("Prova de cidadania exclusiva do ascendente", [
      "A exceção legal exige provar uma condição de cidadania, não apenas o nascimento na Itália. O documento adequado depende dos países envolvidos e da história do ascendente. Certidão negativa de naturalização, certificado italiano e registros estrangeiros precisam cobrir o período juridicamente relevante.",
      "Naturalização posterior ao nascimento do descendente e posse simultânea de cidadanias exigem leitura jurídica cuidadosa. A tradução reproduz datas e conteúdo dos certificados; o advogado define seu efeito sobre o artigo 3-bis.",
      "Quando o ascendente faleceu, a lei considera a condição existente ao falecimento dentro da hipótese aplicável. Certidão de óbito, registros de cidadania e naturalização devem identificar a mesma pessoa apesar de variações de grafia.",
    ]),
    section("Prova de residência do genitor", [
      "O requisito de residência contínua não se demonstra apenas por presença física alegada. Certificato storico di residenza, inscrição anagráfica e documentos de aquisição da cidadania formam a cronologia. Interrupções, cancelamentos e mudança de Comune precisam ser examinados.",
      "A data inicial é relacionada à aquisição da cidadania italiana e a data final ao nascimento ou adoção do filho. Organize os atos em ordem cronológica e destaque lacunas para o profissional responsável antes de traduzir documentos estrangeiros adicionais.",
      "Documentos brasileiros podem ser necessários para ligar identidade, casamento, filiação e adoção aos registros italianos. Todos devem usar nomes compatíveis ou apresentar atos que expliquem a mudança.",
    ]),
    section("Pedidos consulares, municipais e judiciais", [
      "Na via consular, circunscrição, agendamento, protocolo e completude seguem as instruções do MAECI e da sede. Guarde confirmações e recibos com data. Na via municipal, residência e competência do Comune fazem parte do procedimento administrativo.",
      "Na via judicial, foro competente, pedidos e provas são definidos pelo advogado. A mudança legislativa pode exigir adaptação da tese e novos documentos. Não envie tradução diretamente ao Tribunale sem alinhamento com o processo.",
      "A mesma família pode ter requerentes em situações jurídicas diferentes por data, grau de parentesco, cidadania ou residência. Não reutilize conclusão de um parente sem comparar os fatos de cada pessoa.",
    ]),
  ],
  "/traducao-sentenca-divorcio-italia": [
    section("Checklist antes da tradução", [
      "Peça ao advogado ou Comune a lista escrita de peças. Confirme número do processo, nomes atuais, data da decisão, órgão julgador e certidão definitiva. Verifique se a certidão de casamento já contém a averbação e se cada ato recebeu Apostila.",
      "Digitalize em ordem, incluindo páginas sem texto que contenham carimbo, assinatura ou numeração. Uma tradução baseada em páginas soltas perde referências internas e pode omitir anexos mencionados na sentença.",
    ]),
    section("Protocolo na Itália", [
      "O requerente apresenta original apostilado, tradução e declarações exigidas. O Ufficio di Stato Civile verifica requisitos do reconhecimento e pode solicitar integração. Guarde cópia integral e comprovante do pedido.",
      "Depois da trascrizione, confira o registro italiano e os dados pessoais. A conclusão administrativa deve refletir a decisão brasileira sem alterar nome, data ou estado civil de forma indevida.",
    ]),
    section("Tradução de acordos e anexos", [
      "Acordo homologado, plano parental, partilha e procurações podem estar em documentos separados. Se a sentença incorpora esses atos por referência, confirme com o destinatário quais anexos devem acompanhar a tradução.",
      "Numeração de cláusulas, imóveis, contas, valores e datas precisa permanecer idêntica. A tradução não atualiza obrigação, converte moeda ou interpreta cumprimento da decisão.",
    ]),
  ],
  "/traducao-documentos-casamento-italia": [
    section("Cronograma do casamento", [
      "Comece pelo Comune e pela data pretendida. Conte para trás o tempo de emissão das certidões, Apostila, Nulla Osta, tradução, legalização quando prevista e pubblicazioni. Não emita documento de validade curta antes de confirmar agenda e exigências.",
      "Separe procedimentos de casamento e imigração. Celebrar o matrimônio não concede automaticamente permesso, residência ou cidadania. Cada etapa exige pedido próprio e documentos atualizados.",
    ]),
    section("Coerência entre os documentos dos nubentes", [
      "Compare nomes, sobrenomes, filiação, nascimento, estado civil e dados do futuro cônjuge. O Nulla Osta deve corresponder ao passaporte e às certidões. Erro precisa ser corrigido pela autoridade emissora antes do Comune.",
      "Quando houver mudança de sobrenome, divórcio, viuvez ou dupla cidadania, leve os atos que explicam a sequência. A tradução não pode ocultar uma averbação para simplificar o pedido.",
    ]),
    section("Dia da celebração e registro posterior", [
      "Confirme documentos originais, testemunhas e intérprete antes da cerimônia. O intérprete traduz oralmente o ato quando exigido; ele não é substituído pela tradução escrita das certidões.",
      "Após a celebração, solicite a certidão italiana na forma necessária para registro brasileiro. Apostila e tradução para português seguem o procedimento do cartório ou consulado competente.",
      "Atualize passaporte, cadastro consular, residência e demais registros somente com o documento oficial. O casamento não altera automaticamente todos os cadastros.",
    ]),
  ],
  "/traducao-antecedentes-criminais-italia": [
    section("Planejamento da validade", [
      "Defina a data provável do protocolo e emita o documento perto dela. Reserve tempo para validação, Apostila, tradução e envio. Se houver certidões de diferentes estados ou países, coordene todas para que permaneçam atuais ao mesmo tempo.",
      "Não altere o PDF, não remova QR code e não imprima em escala que prejudique a validação. Guarde arquivo original e página de autenticação. A tradução identifica o emissor e o resultado sem ampliar sua abrangência.",
    ]),
    section("Certidões com ocorrência", [
      "Quando o resultado contém anotação, processo ou homônimo, procure orientação jurídica antes do protocolo. O tradutor reproduz o texto e não classifica condenação, extinção, arquivamento ou reabilitação segundo a lei italiana.",
      "Documentos complementares podem ser necessários para explicar o desfecho. Eles também precisam seguir Apostila e tradução quando serão apresentados oficialmente.",
    ]),
    section("Identificação e homônimos", [
      "Nome completo, filiação, nascimento e documento reduzem risco de homônimo. Confira esses campos na emissão. Se o sistema não concluir automaticamente, siga o canal oficial para regularizar a identificação.",
      "Mudança de sobrenome por casamento ou divórcio deve ser demonstrada com certidão. O procedimento italiano precisa relacionar a certidão penal ao mesmo titular dos demais documentos.",
      "A tradução conserva o nome presente no original e não substitui o documento de identidade. Envie passaporte apenas como referência terminológica quando necessário.",
    ]),
  ],
  "/traducao-documentos-medicos-italia": [
    section("Preparação do dossiê clínico", [
      "Peça ao médico brasileiro um resumo objetivo com diagnóstico, evolução, cirurgias, alergias, medicamentos por princípio ativo e exames decisivos. Organize do mais recente ao mais antigo e confirme com o serviço italiano quais anexos são úteis.",
      "Imagens radiológicas não são traduzidas, mas laudos e legendas entram no escopo. Resultados laboratoriais devem manter unidade e intervalo de referência do laboratório de origem.",
    ]),
    section("Preparação do dossiê profissional", [
      "Separe formação acadêmica, habilitação profissional e experiência. Diploma, histórico, programas, registro no conselho, regularidade e certificados de especialidade respondem a perguntas diferentes da autoridade italiana.",
      "Confirme se a lista exige original, cópia autenticada, Apostila, Dichiarazione di Valore ou CIMEA. Traduza somente a versão final validada para evitar centenas de páginas refeitas.",
    ]),
    section("Qualidade e segurança terminológica", [
      "Siglas são verificadas no contexto da instituição e da especialidade. A mesma abreviação pode ter sentidos diferentes. Quando o original não define o termo, a tradução preserva a sigla e evita expansão especulativa.",
      "Valores laboratoriais mantêm separador decimal, unidade e intervalo de referência. Datas seguem dia, mês e ano. Medicamentos incluem concentração e via exatamente como prescritos.",
      "Nome, registro e assinatura do profissional são reproduzidos. A tradução não afirma que o profissional brasileiro está habilitado na Itália nem valida o documento clínico.",
    ]),
  ],
  "/traducao-contratos-imoveis-italia": [
    section("Conferência antes da assinatura", [
      "Identifique partes, poderes, descrição do imóvel, valores, condições suspensivas, prazos, sinal, impostos e consequências do inadimplemento. Dúvida jurídica deve ser resolvida com notaio ou advogado antes do ato, não pelo tradutor durante a assinatura.",
      "Quando existe texto bilíngue, defina qual versão prevalece e quem assume responsabilidade. A presença de duas línguas não elimina a necessidade de intérprete quando uma parte não compreende o ato.",
    ]),
    section("Arquivo societário Brasil-Itália", [
      "Use certidão atual da Junta Comercial para demonstrar administradores e poderes. Contrato social antigo sem alterações consolidadas pode apresentar quadro societário incorreto. Apostila e tradução devem recair sobre a versão aceita pelo notaio.",
      "Atas, balanços e procurações precisam manter numeração, moeda, datas e referências. A tradução não converte automaticamente reais em euros nem adapta cláusulas brasileiras ao direito societário italiano.",
    ]),
    section("Imóvel, cadastro e diligência", [
      "Visura catastale, planimetria, proveniência e conformidade urbanística são documentos italianos analisados pelos profissionais da compra. Documentos brasileiros do comprador não substituem essa diligência sobre o imóvel.",
      "A proposta e o preliminar devem identificar o bem da mesma forma usada no ato definitivo. Divergência de endereço, parcela ou titularidade precisa ser resolvida antes da tradução final.",
      "Pagamentos, financiamento e origem de recursos seguem banco, notaio e legislação aplicável. A tradução comunica comprovantes e declarações sem certificar a licitude econômica da operação.",
    ]),
  ],
  "/traduzione-asseverata-portoghese-italiano": [
    section("Controllo finale del fascicolo", [
      "Prima del giuramento si confrontano nomi, date, numeri, timbri e allegati. Ogni pagina della traduzione deve corrispondere al documento presentato. Errori nell'originale vengono riprodotti e segnalati, non corretti dal traduttore.",
      "Dopo l'asseverazione il fascicolo non va separato. Il cliente conserva una scansione integrale, verifica l'indirizzo dell'ente e presenta l'insieme entro la validità amministrativa del documento originale.",
      "Per cittadinanza, permesso, università e patente, l'asseverazione è una fase del procedimento. Requisiti di merito, scadenze e decisione finale appartengono all'autorità destinataria.",
    ]),
    section("Assistenza prima del deposito", [
      "Il cliente comunica ente, città, finalità e termine. La verifica distingue certificato, sentenza, titolo accademico, patente, procura o contratto e individua gli allegati necessari.",
      "File tagliati, fotografie con riflessi e documenti senza Apostille vengono segnalati prima della traduzione. La versione definitiva viene confrontata con l'originale che entrerà nel fascicolo.",
      "Preventivo e tempi vengono comunicati via WhatsApp. Marche e diritti amministrativi seguono la tabella vigente dell'ufficio e non sono pubblicati come tariffa fissa.",
    ]),
  ],
  "/traduzione-giurata-portoghese-italiano-roma": [
    section("Preparazione pratica a Roma", [
      "Indicare Municipio, ufficio e finalità evita di confondere Comune di Roma, Tribunale, Questura e consolato. Allegare l'email o la lista ricevuta dall'ente permette di preparare il fascicolo richiesto.",
      "Documenti con scadenza vengono programmati a partire dalla data di deposito. Originali dal Brasile devono arrivare già completi di Apostille e senza alterazioni. La spedizione viene organizzata solo dopo il controllo digitale.",
      "Per residenti fuori Roma, il valore formale dell'asseverazione non elimina le regole del Comune o della Questura locale. L'ente destinatario conferma sempre modalità e documenti.",
    ]),
    section("Consegna del documento a Roma e nel Lazio", [
      "Dopo il controllo digitale si concorda consegna dell'originale, asseverazione e restituzione. Il fascicolo può essere ritirato o spedito con tracciamento quando l'uso lo consente.",
      "Il cliente verifica nome dell'ufficio e data del deposito. Certificati con validità amministrativa breve vengono lavorati in coordinamento con appuntamento e spedizione.",
      "Una scansione completa resta disponibile come copia di sicurezza, ma l'ente può richiedere il fascicolo fisico originale. La modalità viene confermata prima dell'avvio.",
    ]),
  ],
  "/autoridades-italianas-documentos-brasileiros": [
    section("Como usar os links oficiais", [
      "Abra a seção correspondente ao procedimento, localize serviço, formulário e contato institucional e registre a data da consulta. Salve a página ou comunicação que contém a lista documental. Isso permite demonstrar qual instrução foi seguida se o portal mudar.",
      "Quando duas autoridades publicam orientações diferentes, identifique qual possui competência sobre o pedido concreto. Comune não decide conversão de habilitação; Questura não reconhece diploma; consulado não substitui o Tribunale. A competência resolve o conflito aparente.",
      "Endereços e horários servem apenas como referência até a confirmação no portal. Muitos serviços usam reserva eletrônica, correio ou atendimento por circunscrição.",
    ]),
  ],
  "/traducao-juramentada-brasileiro-residente-italia": [
    section("Pasta digital de segurança", [
      "Crie uma pasta por procedimento com originais, Apostilas, traduções, recibos e comunicações do órgão. Nomeie arquivos por data e tipo, sem substituir versões anteriores. Isso reduz perda de informação quando o pedido dura meses.",
      "Mantenha contato atualizado de cartório, familiar, courier e profissional responsável. Quando o órgão pede integração, a resposta precisa localizar rapidamente a via correta no Brasil.",
    ]),
  ],
};
