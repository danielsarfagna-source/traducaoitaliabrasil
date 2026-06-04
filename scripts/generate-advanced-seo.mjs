import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const appDir = path.join(__dirname, '../app');

const pages = [
  {
    route: "traducao-sentenca-divorcio-italia",
    eyebrow: "Legal / Judicial",
    title: "Tradução juramentada de sentença de divórcio para a Itália",
    metaTitle: "Tradução de Sentença de Divórcio para Itália | Homologação",
    metaDesc: "Precisa traduzir sentença de divórcio para a Itália? Saiba como funciona a tradução juramentada de petição inicial, ata de audiência e trânsito em julgado.",
    intro: "O divórcio realizado no Brasil não tem efeito automático na Itália. Para que um cidadão brasileiro ou ítalo-brasileiro possa casar novamente na Itália ou atualizar seu estado civil no Comune (ANAGRE), é obrigatório apresentar a sentença de divórcio devidamente traduzida por um tradutor juramentado e apostilada.",
    sections: `[
      {
        title: "Quais partes do processo devem ser traduzidas?",
        body: [
          "Diferente de uma certidão de nascimento, o divórcio é um processo judicial composto por várias peças. A autoridade italiana (Comune ou Tribunal) geralmente exige a tradução das seguintes partes críticas:",
        ],
        list: [
          "Petição Inicial (Citazione).",
          "Ata de Audiência (Verbale di Udienza).",
          "Sentença Judicial (Sentenza).",
          "Certidão de Trânsito em Julgado (Passaggio in giudicato) - Documento que prova que não há mais recurso.",
          "Averbação no Cartório de Registro Civil."
        ]
      },
      {
        title: "Homologação de Sentença na Itália",
        body: [
          "Muitos clientes perguntam se precisam de um advogado italiano para homologar o divórcio. Em muitos casos, se o divórcio foi consensual e seguiu os ritos legais, a atualização pode ser feita administrativamente no Comune através da tradução juramentada asseverada. Caso contrário, será necessário um processo judicial.",
          <span key="link">Confira também os requisitos para <Link href="/traducao-juramentada-certidao-casamento-obito-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">certidões de casamento</Link> com averbação.</span>
        ]
      },
      {
        title: "Dica Técnica: Divórcio Extrajudicial (Cartório)",
        body: [
          "Se o seu divórcio foi feito diretamente em cartório (Escritura Pública), o processo é muito mais simples e barato. A tradução será apenas da escritura e da respectiva certidão de casamento averbada. Este documento também exige Apostila de Haia."
        ]
      }
    ]`,
    faqs: `[
      { question: "Quanto custa a tradução de um divórcio?", answer: "Como sentenças judiciais podem ter muitas páginas, o valor é calculado por lauda juramentada. Fazemos uma análise prévia para traduzir apenas o essencial exigido pela lei italiana." },
      { question: "Quanto tempo demora?", answer: "Sentenças são textos densos e técnicos. O prazo médio é de 7 a 12 dias úteis." },
      { question: "Preciso traduzir o processo inteiro de 100 páginas?", answer: "Geralmente não. Traduzimos apenas as peças principais mencionadas acima (Petição, Ata, Sentença e Trânsito em Julgado)." }
    ]`
  },
  {
    route: "traducao-documentos-casamento-italia",
    eyebrow: "Estado Civil / Casamento",
    title: "Tradução de documentos para casamento na Itália (Nulla Osta)",
    metaTitle: "Tradução para Casamento na Itália | Nulla Osta e Documentos",
    metaDesc: "Vai casar na Itália? Saiba quais documentos brasileiros precisam de tradução juramentada e como obter o Nulla Osta per il Matrimonio.",
    intro: "O casamento de cidadãos brasileiros em solo italiano (seja com italianos ou com outros estrangeiros) exige a apresentação do 'Nulla Osta al Matrimonio'. Este documento atesta que não existem impedimentos legais para a união. Para obtê-lo, suas certidões brasileiras devem estar perfeitamente traduzidas e apostiladas.",
    sections: `[
      {
        title: "Documentos Exigidos para o Casamento",
        body: [
          "A lista pode variar conforme o Comune e a Prefettura, mas a base documental brasileira inclui:",
        ],
        list: [
          "Certidão de Nascimento em Inteiro Teor.",
          "Certidão de Casamento com averbação de divórcio (se for o caso).",
          "Certidão de Óbito de cônjuge anterior (se for viúvo).",
          "Passaporte brasileiro válido."
        ]
      },
      {
        title: "O Papel do Consulado e da Tradução",
        body: [
          "O Nulla Osta é emitido pelo Consulado Brasileiro na Itália. Para que o consulado emita esse documento, você deve apresentar as certidões brasileiras originais apostiladas. Após a emissão do Nulla Osta, ele deve ser legalizado na Prefettura italiana antes de ser levado ao Comune.",
          <span key="link">Saiba como preparar suas <Link href="/traducao-juramentada-certidao-nascimento-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">certidões de nascimento</Link> corretamente.</span>
        ]
      },
      {
        title: "Prazos Fatais",
        body: [
          "As autoridades italianas exigem que as certidões brasileiras tenham sido emitidas há menos de 6 meses. Documentos fora desse prazo são rejeitados, obrigando o casal a refazer todo o processo de emissão, apostila e tradução."
        ]
      }
    ]`,
    faqs: `[
      { question: "O que é o Nulla Osta?", answer: "É uma declaração consular que afirma que o cidadão está livre para casar conforme as leis do seu país de origem." },
      { question: "Brasileiro pode casar com visto de turista na Itália?", answer: "Sim, a lei italiana permite o casamento de estrangeiros mesmo sem o Permesso di Soggiorno, desde que apresentem o Nulla Osta e passaporte com carimbo de entrada legal." },
      { question: "Preciso de testemunhas brasileiras?", answer: "Não, as testemunhas podem ser de qualquer nacionalidade, desde que possuam documento de identidade válido." }
    ]`
  },
  {
    route: "traducao-antecedentes-criminais-italia",
    eyebrow: "Segurança / Vistos",
    title: "Tradução juramentada de antecedentes criminais para a Itália",
    metaTitle: "Tradução de Antecedentes Criminais para Itália | Polícia Federal",
    metaDesc: "Tradução juramentada de certidão de antecedentes criminais da Polícia Federal para cidadania por casamento, visto de trabalho e permesso di soggiorno.",
    intro: "A Certidão de Antecedentes Criminais emitida pela Polícia Federal do Brasil é um requisito recorrente para quem deseja viver, trabalhar ou obter a cidadania italiana por casamento (naturalização). Por ser um documento com validade curtíssima (90 dias), a tradução juramentada deve ser executada com máxima agilidade.",
    sections: `[
      {
        title: "Quando a Certidão de Antecedentes é exigida?",
        body: [
          "As situações mais comuns onde o governo italiano solicita este documento incluem:",
        ],
        list: [
          "Pedido de Cidadania Italiana por Casamento (Naturalizzazione per Matrimonio).",
          "Solicitação de Visto de Trabalho (Lavoro Subordinato/Autonomo).",
          "Visto de Residência Eletiva.",
          "Processos de Adoção Internacional."
        ]
      },
      {
        title: "Validade de 90 dias e a Corrida contra o Tempo",
        body: [
          "Diferente de certidões de nascimento, os antecedentes criminais expiram em 3 meses. Isso significa que, entre emitir o documento no site da PF, apostilar no cartório e fazer a tradução juramentada, você deve ter uma estratégia logística clara para não perder o prazo antes da entrega na Questura ou Prefettura.",
          <span key="link">Veja como a tradução se encaixa no pedido de <Link href="/traducao-documentos-permesso-di-soggiorno" className="text-[#d9aa52] underline hover:text-white transition-colors">permesso di soggiorno</Link>.</span>
        ]
      },
      {
        title: "Certidão Estadual vs Federal",
        body: [
          "Na maioria absoluta dos casos, a Itália exige a Certidão da Polícia FEDERAL. Certidões de polícias civis estaduais raramente são aceitas, a menos que haja uma exigência específica para um processo judicial muito pontual."
        ]
      }
    ]`,
    faqs: `[
      { question: "Preciso apostilar a certidão de antecedentes?", answer: "Sim, sem a Apostila de Haia no documento original, a tradução não terá validade para os órgãos italianos." },
      { question: "A tradução demora quanto tempo?", answer: "Como é um documento de apenas uma página e padrão, entregamos a tradução juramentada em até 24 a 48 horas." },
      { question: "Posso emitir a certidão online?", answer: "Sim, a certidão da Polícia Federal é emitida gratuitamente pelo site oficial da PF." }
    ]`
  },
  {
    route: "traducao-documentos-medicos-italia",
    eyebrow: "Saúde / Profissional",
    title: "Tradução de documentos médicos para reconhecimento na Itália",
    metaTitle: "Tradução para Médicos e Profissionais de Saúde na Itália (SSN)",
    metaDesc: "Tradução juramentada de ementas, diplomas e históricos para médicos e enfermeiros brasileiros que buscam o reconhecimento do título na Itália.",
    intro: "A Itália possui uma alta demanda por profissionais de saúde, mas o processo de reconhecimento de títulos brasileiros (Equipollenza) junto ao Ministero della Salute é um dos mais rigorosos da Europa. A tradução juramentada de centenas de páginas de ementas curriculares e cargas horárias é o alicerce deste processo.",
    sections: `[
      {
        title: "O Dossiê do Médico e Enfermeiro Brasileiro",
        body: [
          "Para atuar no Servizio Sanitario Nazionale (SSN), o profissional deve traduzir um volume expressivo de documentos:",
        ],
        list: [
          "Diploma de Medicina ou Enfermagem.",
          "Histórico Acadêmico detalhado.",
          "Ementas Curriculares (Programmi di studio) de todas as disciplinas.",
          "Certificado de Regularidade Profissional (CRM/COREN).",
          "Comprovantes de especialização e residência médica."
        ]
      },
      {
        title: "A Precisão dos Termos Médicos",
        body: [
          "Uma tradução imprecisa de uma disciplina de 'Ginecologia e Obstetrícia' ou 'Clínica Cirúrgica' pode levar o Ministério da Saúde italiano a exigir que o profissional curse matérias complementares na Itália. Utilizamos glossários técnicos de medicina para garantir a equivalência exata dos termos brasileiros para o sistema de saúde italiano.",
          <span key="link">Saiba mais sobre a validação de <Link href="/traducao-juramentada-diploma-brasileiro-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">diplomas brasileiros na Itália</Link>.</span>
        ]
      },
      {
        title: "Economia na Tradução de Ementas",
        body: [
          "Ementas curriculares podem ter 500 páginas. Orientamos o profissional sobre quais partes são realmente obrigatórias (objetivos, carga horária e bibliografia principal) para otimizar o custo da tradução juramentada sem comprometer o resultado final."
        ]
      }
    ]`,
    faqs: `[
      { question: "O Ministério da Saúde italiano aceita tradução feita no Brasil?", answer: "Sim, desde que seja juramentada e apostilada. Em alguns casos, o Ministério pode solicitar a legalização consular adicional." },
      { question: "Preciso de tradução de especialização (Pós-graduação)?", answer: "Sim, se você deseja que sua especialidade também seja reconhecida em solo italiano." },
      { question: "Vocês traduzem prontuários médicos para pacientes?", answer: "Sim, realizamos traduções de laudos e prontuários para brasileiros que buscam tratamento de saúde na Itália." }
    ]`
  },
  {
    route: "traducao-contratos-imoveis-italia",
    eyebrow: "Investimento / Negócios",
    title: "Tradução de contratos e documentos para compra de imóveis na Itália",
    metaTitle: "Tradução para Compra de Imóveis na Itália | Contratos e Procura",
    metaDesc: "Vai comprar casa na Itália? Tradução juramentada de procurações, contratos de compra e venda (compromesso) e documentos bancários.",
    intro: "O mercado imobiliário italiano atrai investidores brasileiros em busca de casas de 1 euro ou propriedades de luxo na Toscana. Toda transação imobiliária na Itália passa obrigatoriamente por um Notaio (Notário), que exige a tradução oficial de qualquer documento estrangeiro envolvido na operação.",
    sections: `[
      {
        title: "Procura Speciale (Procuração para Compra)",
        body: [
          "Se você não puder estar presente na assinatura da escritura (Rogito), precisará de uma 'Procura Speciale' feita em cartório no Brasil. Este documento deve ser apostilado e ter tradução juramentada asseverada para que o Notário italiano aceite a assinatura do seu representante.",
        ],
        list: [
          "Contrato de Compra e Venda (Compromesso).",
          "Proposta de Compra (Proposta d'Acquisto).",
          "Documentos Bancários para abertura de conta na Itália.",
          "Comprovantes de Origem de Recursos."
        ]
      },
      {
        title: "Codice Fiscale e Documentação de Identidade",
        body: [
          "O primeiro passo para qualquer negócio na Itália é o Codice Fiscale. Para investidores que não possuem cidadania italiana, a tradução do passaporte ou RG brasileiro pode ser solicitada em bancos e agências imobiliárias (Agenzia Immobiliare).",
          <span key="link">Veja a importância de ter seus <Link href="/traducao-documentos-brasileiros-na-italia" className="text-[#d9aa52] underline hover:text-white transition-colors">documentos brasileiros na Itália</Link> em ordem.</span>
        ]
      },
      {
        title: "Segurança Jurídica no Investimento",
        body: [
          "A tradução juramentada de contratos não é apenas uma formalidade, é a sua garantia de que você entende exatamente o que está assinando perante a lei italiana. Erros na tradução de cláusulas de rescisão ou multas contratuais podem gerar prejuízos financeiros enormes."
        ]
      }
    ]`,
    faqs: `[
      { question: "Posso traduzir o contrato de aluguel também?", answer: "Sim, traduzimos contratos de locação (Contratto di Locazione) para comprovação de residência e obtenção de vistos." },
      { question: "O tradutor vai ao cartório comigo?", answer: "Se você estiver na Itália, podemos fornecer um intérprete oficial para acompanhar a assinatura da escritura perante o Notaio." },
      { question: "Quanto tempo vale a procuração?", answer: "A 'Procura Speciale' costuma ter validade específica para aquele negócio ou um prazo determinado de 6 meses a 1 ano." }
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
