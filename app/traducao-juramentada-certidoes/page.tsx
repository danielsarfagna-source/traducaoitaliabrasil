import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traducao-juramentada-certidoes";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução juramentada de certidões | Nascimento, casamento, óbito, inteiro teor",
  description:
    "Tradução juramentada de certidões brasileiras para uso na Itália: nascimento, casamento, óbito, divórcio e inteiro teor. Pasta completa para cidadania.",
  path: pagePath,
  ogTitle: "Tradução juramentada de certidões brasileiras para a Itália",
  ogDescription:
    "Nascimento, casamento, óbito, divórcio e inteiro teor traduzidos para italiano com análise técnica de coerência documental.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Registro civil"
      title="Tradução juramentada de certidões brasileiras para uso na Itália"
      pagePath={pagePath}
      schemaType="Service"
      areaServed="Brasil e Itália"
      serviceType="Tradução juramentada de certidões brasileiras para italiano"
      description="Tradução juramentada de certidões de nascimento, casamento, óbito, divórcio e inteiro teor."
      intro="A certidão é a peça fundamental de qualquer dossiê administrativo entre Brasil e Itália. Seja para o reconhecimento da [cidadania italiana](/traducao-juramentada-para-cidadania-italiana), registro de casamento no Comune, pedido de permesso di soggiorno ou processos de herança, a tradução juramentada é o que confere validade legal ao documento brasileiro em solo italiano. Cada tipo de certidão exige cuidados específicos com averbações, retificações e prazos de validade. Este guia organiza os requisitos técnicos dos quatro tipos principais de certidão e explica quando a versão em [inteiro teor](#certidao-de-inteiro-teor-o-padrao-para-a-cidadania) torna-se obrigatória para evitar a recusa da autoridade italiana."
      sections={[
        {
          title: "Certidão de nascimento",
          body: [
            "A certidão de nascimento brasileira é o documento de base que prova filiação, data e local de nascimento. É indispensável para processos de cidadania jure sanguinis, casamentos civis na Itália e registros de filhos de brasileiros nascidos em território italiano.",
          ],
          subsections: [
            {
              title: "Quando a versão em inteiro teor é obrigatória",
              body: [
                "A certidão simples (em formato breve) omite detalhes históricos do registro. A certidão em inteiro teor, por outro lado, transcreve integralmente o que consta no livro do cartório, incluindo anotações sobre retificações de grafia ou reconhecimentos de paternidade tardios. Para processos de cidadania italiana via Comune ou Tribunale, o inteiro teor é a regra absoluta para todos os indivíduos da linha ascendente.",
              ],
            },
            {
              title: "Tradução de filiação e o fim da distinção de 'legitimidade'",
              body: [
                "Um ponto crítico na tradução de certidões é a nomenclatura da filiação. Desde a **Lei 219/2012** (Riforma della Filiazione), o direito italiano eliminou a distinção entre filhos legítimos e ilegítimos. Nossas traduções utilizam os termos técnicos 'figlio nato dal matrimonio' ou 'figlio nato fuori dal matrimonio', garantindo conformidade com a legislação atual e evitando anacronismos jurídicos que poderiam causar estranheza no Comune.",
              ],
            },
            {
              title: "Prazo de validade administrativa na Itália",
              body: [
                "Diferente do Brasil, onde a certidão é vitalícia, as autoridades italianas exigem que o documento original brasileiro tenha sido emitido há menos de 6 meses no momento da apresentação. Certidões antigas, mesmo que apostiladas, são recusadas pela Questura ou pelo Comune.",
              ],
            },
          ],
        },
        {
          title: "Certidão de casamento",
          body: [
            "Prova o vínculo conjugal e o regime de bens adotado. É peça-chave em pedidos de cidadania por casamento (naturalização), reuniões familiares e processos sucessórios na Itália.",
          ],
          subsections: [
            {
              title: "Averbação de divórcio e separação",
              body: [
                "Se houve dissolução de vínculo anterior, a certidão de casamento deve obrigatoriamente conter a averbação do divórcio. A tradução juramentada deve verter integralmente o texto da averbação, incluindo o número do processo judicial e a data do trânsito em julgado (passaggio in giudicato), conforme consta no registro brasileiro.",
              ],
            },
            {
              title: "Regimes de bens e pactos antenupciais",
              body: [
                "A tradução deve distinguir claramente entre a 'comunhão parcial' (comunione legale) e a 'separação total' (separazione dei beni). Se houver pacto antenupcial por escritura pública, este documento também pode exigir tradução juramentada complementar para produzir efeitos patrimoniais na Itália.",
              ],
            },
          ],
        },
        {
          title: "Certidão de óbito",
          body: [
            "Obrigatória para comprovar o encerramento de cada geração na linha de ascendência para fins de cidadania. Também prova o estado de viuvez para brasileiros que desejam contrair novo matrimônio na Itália.",
          ],
          subsections: [
            {
              title: "Localização de óbitos antigos no Brasil",
              body: [
                "Em processos de cidadania jure sanguinis, localizar o óbito do antepassado em cartórios de municípios pequenos pode ser um desafio. Uma vez localizado, o documento deve ser emitido recentemente para ser apostilado e traduzido, garantindo a integridade da pasta documental.",
              ],
            },
          ],
        },
        {
          title: "Certidão de inteiro teor: O padrão para a cidadania",
          body: [
            "Muitos brasileiros cometem o erro de apostilar e traduzir certidões simples por serem mais baratas ou rápidas. No entanto, para a autoridade italiana, o que não está no documento não existe. O inteiro teor revela o histórico completo, essencial para que o juiz ou o funcionário do Comune verifique a ausência de interrupções na transmissão da cidadania.",
          ],
        },
        {
          title: "Certidão Negativa de Naturalização (CNN)",
          body: [
            "A CNN, emitida pelo Ministério da Justiça do Brasil, prova que o ascendente italiano não se naturalizou brasileiro (ou, se o fez, em que data ocorreu). Este documento é obrigatório em todos os processos de cidadania. Após a emissão online, a CNN deve ser autenticada, apostilada e traduzida de forma juramentada para integrar o dossiê oficial.",
          ],
        },
        {
          title: "Tradução para Sucessão e Herança na Itália",
          body: [
            "Quando um brasileiro possui bens na Itália ou é herdeiro de cidadão italiano, certidões de nascimento, casamento e óbito traduzidas são exigidas para a 'Dichiarazione di Successione' perante a Agenzia delle Entrate. O rigor na tradução do grau de parentesco e do estado civil é crucial para a liberação de contas bancárias ou transferência de imóveis.",
          ],
        },
        {
          title: "Apostila de Haia: A etapa prévia obrigatória",
          body: [
            "Nenhuma certidão brasileira tem valor legal na Itália sem a Apostila de Haia. Ela deve ser solicitada em cartório no Brasil sobre o documento original. A sequência correta é: (1) Emissão da certidão recente, (2) Apostilamento em cartório de notas no Brasil, (3) Tradução juramentada. Se a tradução for feita no Brasil, ela também pode precisar de sua própria apostila, dependendo da exigência do Comune de destino.",
          ],
        },
        {
          title: "Como conferimos a coerência da pasta documental",
          body: [
            "Antes de iniciarmos a tradução, realizamos uma análise técnica da pasta. Verificamos se os nomes dos pais e avós mantêm a mesma grafia em todas as certidões e se as datas de nascimento e casamento são logicamente compatíveis. Caso detectemos uma divergência grave que possa levar à recusa pelo Comune, orientamos o cliente sobre a necessidade de retificação administrativa no cartório antes de prosseguir com a tradução.",
          ],
        },
        {
          title: "Erros fatais em traduções de registro civil",
          body: [
            "Um tradutor sem experiência em direito comparado pode cometer erros que invalidam o documento, como traduzir 'averbação' de forma genérica ou não transcrever corretamente o número do livro e folha do registro. Outro erro comum é a conversão incorreta de datas no formato DD/MM/AAAA, que é o padrão tanto no Brasil quanto na Itália, mas que por vezes é confundido com o padrão americano por tradutores desatentos.",
          ],
        },
        {
          title: "Como funciona o atendimento para certidões",
          body: [
            "O processo é simplificado pelo WhatsApp. Você envia as fotos das certidões para uma análise inicial de legibilidade e conteúdo. Após a aprovação do orçamento, coordenamos o recebimento dos originais (necessários para a asseverazione no Tribunale italiano) e realizamos o serviço com o rigor técnico exigido. A tradução pronta é entregue unida fisicamente ao original, pronta para ser apresentada a qualquer autoridade italiana.",
          ],
        },
        {
          title: "Tradução de Sentenças de Divórcio e Objeto e Pé",
          body: [
            "Sentenças judiciais brasileiras que alteram o estado civil ou definem guardas de menores devem ser traduzidas integralmente. A tradução juramentada deve cobrir desde a petição inicial até o trânsito em julgado, permitindo que o sistema jurídico italiano reconheça a decisão brasileira sem necessidade de reprocessar a causa em solo europeu.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Toda certidão para a cidadania precisa ser de inteiro teor?",
          answer: "Sim, para processos administrativos no Comune ou judiciais no Tribunale, a via de inteiro teor é o padrão exigido. Ela contém informações detalhadas que a via simples omite e que são fundamentais para provar a linha de descendência.",
        },
        {
          question: "A certidão de óbito pode ser a versão simples?",
          answer: "Em muitos consulados a via simples de óbito é aceita, mas se o processo for via judicial ou diretamente na Itália, recomendamos fortemente o inteiro teor para manter a padronização e segurança de toda a pasta.",
        },
        {
          question: "Quanto custa traduzir uma certidão de inteiro teor?",
          answer: "O custo depende do número de páginas (laudas) e da complexidade das averbações. Certidões de inteiro teor costumam ser mais extensas que as simples. Envie o documento pelo WhatsApp para um orçamento exato em poucos minutos.",
        },
        {
          question: "Preciso traduzir a Apostila de Haia também?",
          answer:
            "A regra geral: se a tradução é feita no Brasil, apostila o documento original brasileiro primeiro e depois traduz. Se a tradução é asseverata na Itália, o documento original brasileiro precisa chegar à Itália já apostilado. Em ambos os casos, a apostila vem antes da tradução, nunca depois.",
        },

        {
          question: "Qual o prazo de validade das certidões na Itália?",
          answer: "A praxe administrativa italiana aceita certidões brasileiras emitidas há no máximo 6 meses. O ideal é que a certidão chegue ao órgão destinatário com a maior antecedência possível em relação a essa data.",
        },
        {
          question: "O cartório brasileiro pode emitir a certidão já em italiano?",
          answer: "Não. O cartório tem competência apenas para emitir o documento em português. A versão para o italiano deve ser feita obrigatoriamente por tradutor juramentado habilitado.",
        },
        {
          question: "Como saber se preciso retificar um nome antes de traduzir?",
          answer: "Nossa análise técnica identifica divergências de grafia (ex: Rossi vs Rossi). Se a variação for pequena, o Comune aceita. Se for significativa, orientamos a retificação no cartório brasileiro antes da tradução.",
        },
        {
          question: "Posso traduzir uma cópia autenticada da certidão?",
          answer: "Para alguns processos, sim, desde que a cópia também esteja apostilada. No entanto, para cidadania e casamento, a maioria dos órgãos italianos exige o documento original vindo do cartório.",
        },
        {
          question: "A tradução juramentada feita no Brasil vale em Roma?",
          answer: "A aceitação depende do Comune e do procedimento. Alguns aceitam tradução brasileira apostilada; outros podem exigir tradução asseverata na Itália. Confirme antes de protocolar.",
        },
        {
          question: "Quanto tempo leva para traduzir uma pasta de certidões?",
          answer: "Uma pasta média (5 a 8 certidões) leva de 5 a 10 dias úteis. Documentos individuais podem ser finalizados em até 48 horas, dependendo da urgência e da fila de agendamento no Tribunale.",
        },
      ]}
      relatedTitle="Material de apoio"
      relatedLinks={[
        { title: "Como casar na Itália: guia completo", href: "/como-casar-na-italia-brasileiros" },
        { title: "Tradução para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Tradução juramentada italiano", href: "/traducao-juramentada-italiano" },
        { title: "Reforma da cidadania (Lei 74/2025)", href: "/reforma-cidadania-italiana-documentos" },
        { title: "Apostila de Haia na Itália", href: "/apostilar-documento-italiano-na-italia" },
        { title: "Glossário de termos técnicos", href: "/glossario-traducao-juramentada" },
        { title: "Autoridades italianas — guia completo", href: "/autoridades-italianas-documentos-brasileiros" },
      ]}
    />
  );
}
;
