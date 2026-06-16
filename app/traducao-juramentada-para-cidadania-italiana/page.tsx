import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traducao-juramentada-para-cidadania-italiana";

export const metadata: Metadata = createPageMetadata({
  // TAREFA 3 — "cidadania italiana" + "certidões brasileiras" reforçados no início do title.
  title: "Cidadania italiana: tradução juramentada certidões brasileiras",
  description:
    "Tradução juramentada de certidões de nascimento, casamento, óbito e inteiro teor para cidadania italiana via Comune, Tribunale, consulado ou via judicial 1948. Pasta documental completa.",
  path: pagePath,
  ogTitle: "Cidadania italiana: tradução juramentada de certidões brasileiras",
  ogDescription:
    "Certidões brasileiras traduzidas para apresentação em Comune, Tribunale, consulado ou processo judicial 1948. Orientação técnica antes de traduzir.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Cidadania italiana"
      title="Tradução juramentada para cidadania italiana"
      pagePath={pagePath}
      schemaType="Service"
      serviceType="Tradução juramentada de certidões para reconhecimento de cidadania italiana"
      areaServed="Brasil e Itália"
      audienceType="Brasileiros descendentes de italianos em processo de reconhecimento de cidadania italiana via Comune, Tribunale ou Consolado"
      description="Tradução juramentada de certidões brasileiras para reconhecimento de cidadania italiana via Comune, Tribunale ou Consolado."
      intro="A cidadania italiana exige uma pasta documental impecável. Cada certidão brasileira precisa ser traduzida para o italiano com valor formal, e qualquer divergência entre nomes, datas ou averbações pode interromper o processo no Comune, no Tribunale ou no consulado. Esta página explica em detalhe quando a tradução juramentada é exigida, quais documentos entram na pasta, como funciona a relação entre apostila e tradução, e os erros mais comuns que provocam recusa imediata pela autoridade italiana."
      sections={[
        {
          title: "Quando a tradução juramentada é exigida no processo de cidadania",
          body: [
            "Em todo processo de reconhecimento da cidadania italiana — seja por descendência, por casamento, por residência ou por via judicial — os documentos brasileiros precisam ser apresentados em italiano. Apresentar uma certidão em português, mesmo que com tradução simples ou tradução automática, resulta em recusa imediata. A autoridade italiana só aceita o conteúdo formal de um documento brasileiro quando ele vem traduzido por profissional habilitado para conferir fé pública à tradução.",
          ],
          subsections: [
            {
              title: "Via administrativa pelo Comune (residente na Itália)",
              body: [
                "O brasileiro descendente de italiano residente legalmente na Itália dá entrada no processo diretamente no Ufficio Anagrafe do [Comune](/autoridades-italianas-documentos-brasileiros#comune) onde reside. A pasta com todas as certidões brasileiras traduzidas, apostiladas e organizadas em ordem cronológica é entregue ao funzionario, que abre o procedimento de reconhecimento. Comunes como o de Roma, Milano, Bologna, Torino e Firenze são notoriamente rigorosos quanto à qualidade da tradução e à coerência entre os documentos da linha ascendente.",
              ],
            },
            {
              title: "Via judicial — Lei 1948 e materna",
              body: [
                "A via judicial é utilizada quando há uma mulher na linha ascendente que transmitiu o direito antes de 1948, ou quando o Comune nega ou demora excessivamente o reconhecimento administrativo. O processo corre no [Tribunale Ordinario di Roma](/autoridades-italianas-documentos-brasileiros#tribunale-ordinario-di-roma) e exige a mesma pasta documental, com tradução juramentada e apostilamento, mas a apresentação é feita por advogado italiano. A tradução para via judicial costuma ser ainda mais examinada porque é juntada aos autos como prova formal.",
              ],
            },
            {
              title: "Via consular pelo Consolado da Itália no Brasil",
              body: [
                "Brasileiros que ainda residem no Brasil dão entrada via Consolado Italiano (São Paulo, Rio de Janeiro, Belo Horizonte, Curitiba, Porto Alegre ou Recife). A fila consular é longa, mas a pasta segue a mesma lógica: certidões brasileiras com apostila de Haia e tradução juramentada feita por tradutor habilitado. O consulado aceita tradução juramentada feita por tradutor público brasileiro; confirme a exigência específica do consulado de sua jurisdição.",
              ],
            },
            {
              title: "Reconhecimento por descendência (jure sanguinis)",
              body: [
                "O reconhecimento jure sanguinis, regulado pela **Lei 91/1992**, exige a prova ininterrupta da transmissão da cidadania desde o ascendente italiano nascido na Itália até o requerente brasileiro. Cada geração precisa estar documentada — nascimento, casamento e óbito — com certidões brasileiras traduzidas. A interrupção da cadeia, mesmo por falta de uma única certidão de óbito, paralisa o processo até a completa regularização documental.",
              ],
            },
          ],
        },
        {
          title: "Quais certidões brasileiras compõem a pasta documental",
          body: [
            "A composição exata varia conforme a via escolhida e o número de gerações entre o requerente e o ascendente italiano. Em todos os casos, três tipos de certidão formam a base da pasta:",
          ],
          subsections: [
            {
              title: "Certidão de nascimento — toda a linha ascendente",
              body: [
                "É obrigatória a certidão de nascimento de cada pessoa na linha de transmissão da cidadania. Para o ascendente italiano nascido na Itália, é necessário o estratto di nascita emitido pelo Comune italiano de origem. Para os demais (filhos, netos, bisnetos brasileiros), a certidão é a brasileira, com apostila de Haia e tradução juramentada.",
              ],
            },
            {
              title: "Certidão de casamento — vínculo conjugal e averbações",
              body: [
                "Cada geração da linha exige a certidão de casamento dos cônjuges, mesmo que o casamento já tenha sido dissolvido por óbito ou divórcio. Quando há divórcio, a certidão precisa conter a averbação correspondente ou ser acompanhada da sentença de divórcio também traduzida integralmente.",
              ],
            },
            {
              title: "Certidão de óbito — encerramento de linha",
              body: [
                "A certidão de óbito é exigida para todos os ascendentes já falecidos na linha de transmissão. Ela encerra cada geração no processo e é frequentemente o documento mais difícil de localizar, principalmente quando o falecimento ocorreu em município pequeno do interior do Brasil em décadas passadas.",
              ],
            },
            {
              title: "Certidão de inteiro teor — quando é obrigatória",
              body: [
                "A certidão em inteiro teor reproduz fielmente o livro do cartório, incluindo todas as averbações, retificações e observações marginais que a certidão simples omite. Para cidadania italiana, o Comune e o Tribunale exigem inteiro teor da certidão do ascendente italiano e de todas as certidões com averbações de retificação ou divórcio. Solicitar a versão simples quando o procedimento exige inteiro teor acarreta na perda de semanas refazendo o pedido e o apostilamento.",
              ],
            },
            {
              title: "Documentos complementares (CNN, antecedentes, comprovantes)",
              body: [
                "Conforme o Comune ou o juiz instrutor, podem ser exigidos documentos complementares: certidão negativa de naturalização brasileira (CNN), antecedentes criminais para cidadania por casamento, comprovantes de residência e declaração de não renúncia à cidadania italiana. Todos seguem o rito obrigatório de apostila de Haia e tradução juramentada.",
              ],
            },
          ],
        },
        {
          title: "Tabela — documento por tipo de cidadania",
          body: [
            "Esta tabela é uma referência técnica. O Comune de destino e o juiz instrutor exigem documentação adicional conforme o caso concreto.",
          ],
          table: {
            headers: [
              "Documento",
              "Via Comune (Itália)",
              "Via Judicial 1948",
              "Via Consular (Brasil)",
              "Inteiro teor exigido?",
            ],
            rows: [
              [
                "Estratto di nascita do ascendente italiano",
                "Obrigatório",
                "Obrigatório",
                "Obrigatório",
                "N/A (documento italiano)",
              ],
              [
                "Certidão de nascimento dos descendentes",
                "Obrigatória",
                "Obrigatória",
                "Obrigatória",
                "Sim, se houver averbações",
              ],
              [
                "Certidão de casamento de cada geração",
                "Obrigatória",
                "Obrigatória",
                "Obrigatória",
                "Sim, sempre que houver averbações",
              ],
              [
                "Certidão de óbito dos falecidos",
                "Obrigatória",
                "Obrigatória",
                "Obrigatória",
                "Em geral, simples basta",
              ],
              [
                "CNN — Certidão Negativa de Naturalização",
                "Obrigatória",
                "Obrigatória",
                "Obrigatória",
                "N/A",
              ],
              [
                "Sentença de divórcio (se aplicável)",
                "Obrigatória",
                "Obrigatória",
                "Obrigatória",
                "Inteiro teor + trânsito em julgado",
              ],
              [
                "Antecedentes criminais (se exigido)",
                "Caso a caso",
                "Caso a caso",
                "Caso a caso",
                "N/A",
              ],
            ],
          },
        },
        {
          title: "Apostila de Haia e tradução juramentada — qual vem primeiro",
          body: [
            "A Apostila de Haia certifica que a assinatura e o carimbo do cartório brasileiro emissor são autênticos para uso internacional. A ordem correta depende de onde a tradução será realizada:",
            "**Tradução feita no Brasil:** primeiro apostila o documento original brasileiro, depois traduz de forma juramentada. A tradução brasileira pode precisar de apostilamento adicional para ser aceita em alguns Comunes italianos.",
            "**Tradução feita na Itália (asseverata):** o documento original brasileiro precisa chegar ao tradutor já apostilado no Brasil. A tradução é asseverada perante o Tribunale ou Giudice di Pace italiano, e o conjunto final é entregue ao Comune ou Tribunale.",
            "A tradução asseverada feita na Itália é a opção mais segura porque possui fé pública interna no sistema jurídico italiano.",
          ],
        },
        {
          title: "Erros que fazem o Comune ou Tribunale recusar a tradução",
          body: [
            "Cada recusa administrativa custa meses de atraso. Os erros mais recorrentes incluem:",
          ],
          subsections: [
            {
              title: "Sobrenome italiano aportuguesado ao longo das gerações",
              body: [
                "O sobrenome do ascendente italiano nascido na Itália aparece no estratto di nascita italiano com a grafia original (Bortolozzi, Tonetto, Sartori, Bordignon). Ao chegar ao Brasil, era comum o cartório registrar a versão aportuguesada (Bortoloti, Toneti, Sartoré, Bordino). Essa divergência precisa ser explicada no processo — não pode ser 'corrigida' pelo tradutor, sob pena de invalidar a tradução. A solução correta é manter a tradução fiel a cada documento e tratar a divergência com retificação ou justificativa judicial.",
              ],
            },
            {
              title: "Datas e grafias divergentes entre as certidões",
              body: [
                "Diferenças de datas de nascimento entre certidões de nascimento e casamento do mesmo indivíduo são bandeiras vermelhas. O tradutor deve transcrever o que está escrito; a correção da divergência é uma etapa anterior à tradução.",
              ],
            },
            {
              title: "Averbações ausentes ou traduzidas de forma genérica",
              body: [
                "Termos técnicos como 'averbação de divórcio' precisam ser vertidos corretamente para o italiano jurídico (annotazione di divorzio). Traduções que ignoram o rigor dos termos cartorários italianos são frequentemente rejeitadas pelos oficiais do Stato Civile.",
              ],
            },
            {
              title: "Tradução feita por tradutor não habilitado (Albo CTU)",
              body: [
                "Para traduções feitas na Itália, o profissional deve estar inscrito no Albo dei Consulenti Tecnici d'Ufficio (CTU) do Tribunale local. Traduções sem o juramento formal (asseverazione) não têm valor legal para processos de cidadania.",
              ],
            },
          ],
        },
        {
          title: "Reforma da cidadania italiana — Lei 74/2025",
          body: [
            "A Lei 74/2025 introduziu critérios mais rigorosos sobre o vínculo efetivo e os limites geracionais do jure sanguinis. Com a maior vigilância do Ministério do Interior e dos Tribunais, a qualidade da tradução juramentada e a coerência absoluta da pasta documental tornaram-se o ponto crítico de sucesso ou fracasso do pedido.",
          ],
        },
        {
          title: "Tradução juramentada brasileira vs. Asseverata italiana",
          body: [
            "Alguns Comunes aceitam traduções juramentadas brasileiras apostiladas, enquanto outros podem exigir asseverazione feita na Itália. Confirme o formato diretamente com o Comune ou o profissional responsável pelo processo, pois nenhuma modalidade garante por si só a aprovação do dossiê.",
          ],
        },
        {
          title: "Cidadania por Casamento (Jure Matrimonii)",
          body: [
            "Para cônjuges de cidadãos italianos, o processo de naturalização exige a certidão de nascimento de inteiro teor e os antecedentes criminais da Polícia Federal brasileira. Ambos devem estar apostilados e traduzidos de forma juramentada para o italiano antes do envio do pedido via portal ministerial (ALI).",
          ],
        },
        {
          title: "Cidadania por Residência (Naturalização)",
          body: [
            "Brasileiros que residem legalmente na Itália por mais de 10 anos (ou menos, conforme o caso) podem solicitar a naturalização. A pasta exige certidão de nascimento e antecedentes criminais brasileiros, obrigatoriamente traduzidos e asseverados para comprovar a idoneidade e o registro civil original do requerente.",
          ],
        },
        {
          title: "Reconhecimento de Filho Brasileiro na Itália (Trascrizione)",
          body: [
            "Filhos de cidadãos italianos nascidos no Brasil devem ter seu nascimento transcrito no Comune italiano de referência. O processo exige a certidão de nascimento de inteiro teor do menor, com apostila de Haia e tradução juramentada asseverata, para que o filho possa obter o passaporte italiano e o Codice Fiscale.",
          ],
        },
        {
          title: "Análise Técnica e Consultoria em Pasta Documental",
          body: [
            "Nosso serviço vai além da simples tradução. Realizamos uma análise técnica prévia de toda a pasta para cidadania, cruzando dados de todas as gerações para identificar inconsistências que poderiam levar à recusa do pedido. Orientamos sobre a necessidade de novas vias, retificações e a ordem correta dos procedimentos de legalização.",
          ],
        },
        {
          title: "Como funciona o atendimento para Cidadania",
          body: [
            "Você envia a pasta digitalizada (foto ou PDF) pelo WhatsApp informando a via do processo (Comune, Tribunale ou Consulado). Após a análise de viabilidade técnica, enviamos o orçamento fechado e o prazo de entrega. Coordenamos o trâmite dos originais físicos para a realização do juramento no Tribunale, entregando a pasta pronta para uso oficial.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quais certidões precisam de tradução juramentada para cidadania italiana?",
          answer:
            "São exigidas as certidões de nascimento, casamento e óbito de cada pessoa na linha ascendente, desde o antepassado italiano até o requerente brasileiro.",
        },
        {
          question: "Certidão de inteiro teor é obrigatória para cidadania italiana?",
          answer:
            "Sim, é o padrão exigido pelo Comune e pelo Tribunale para verificar todo o histórico de averbações e garantir que não houve perda da cidadania ao longo das gerações.",
        },
        {
          question: "A tradução juramentada corrige divergência de nome entre certidões?",
          answer:
            "Não. A tradução deve refletir exatamente o que consta no documento. Divergências graves devem ser corrigidas via retificação no cartório antes de traduzir.",
        },
        {
          question: "Preciso apostilar antes ou depois de traduzir?",
          answer:
            "A regra geral: se a tradução é feita no Brasil, apostila o documento original brasileiro primeiro e depois traduz. Se a tradução é asseverata na Itália, o documento original brasileiro precisa chegar à Itália já apostilado. Em ambos os casos, a apostila vem antes da tradução, nunca depois.",
        },
        {
          question: "Tradução juramentada brasileira é aceita pelo Comune italiano?",
          answer:
            "A aceitação varia conforme o órgão e o procedimento. A tradução asseverata possui fé pública na Itália, mas o destinatário ainda pode exigir documentos e formalidades adicionais.",
        },
        {
          question: "Quanto tempo demora a tradução das certidões para cidadania?",
          answer:
            "Uma pasta completa (5 a 8 certidões) leva de 5 a 10 dias úteis para ser finalizada, incluindo o prazo de agendamento do juramento no Tribunale.",
        },
        {
          question: "Vocês prometem aceitação do Comune ou Tribunale?",
          answer:
            "Garantimos a fidelidade técnica e a fé pública da tradução conforme as normas italianas, mas a decisão final sobre o mérito do processo é exclusividade da autoridade pública.",
        },
        {
          question: "Posso enviar foto das certidões pelo WhatsApp?",
          answer:
            "Sim, para fins de orçamento e análise prévia. Para a asseverazione oficial, o tradutor necessita dos documentos físicos originais apostilados.",
        },
        {
          question: "A tradução juramentada vale para outros processos além da cidadania?",
          answer:
            "Sim, a mesma tradução pode ser usada para o registro de casamento ou pedido de permesso di soggiorno, desde que o documento original ainda esteja válido.",
        },
        {
          question: "Quanto custa a tradução das certidões para cidadania italiana?",
          answer:
            "O valor é calculado por lauda traduzida e depende da complexidade das averbações. Envie sua pasta pelo WhatsApp para receber um orçamento detalhado.",
        },
      ]}
      relatedTitle="Material relacionado"
      relatedLinks={[
        { title: "Como casar na Itália: guia completo", href: "/como-casar-na-italia-brasileiros" },
        { title: "Tradução juramentada de certidões", href: "/traducao-juramentada-certidoes" },
        { title: "Apostila de Haia na Itália", href: "/apostilar-documento-italiano-na-italia" },
        { title: "Reforma da cidadania italiana (Lei 74/2025)", href: "/reforma-cidadania-italiana-documentos" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
        { title: "Autoridades italianas — guia oficial", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Traduzione asseverata portoghese italiano (IT)", href: "/traduzione-asseverata-portoghese-italiano" },
      ]}
    />
  );
}
;
