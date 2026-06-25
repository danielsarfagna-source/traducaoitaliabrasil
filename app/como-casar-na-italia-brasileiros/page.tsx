import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/como-casar-na-italia-brasileiros";

export const metadata: Metadata = createPageMetadata({
  title: "Como Casar na Itália: Guia Completo para Brasileiros (2026)",
  description:
    "Guia completo para brasileiros que querem casar na Itália: documentos, nulla osta, apostila, tradução juramentada/asseverata e cuidados antes do Comune.",
  path: pagePath,
  ogTitle: "Como Casar na Itália: Guia Completo para Brasileiros",
  ogDescription:
    "Veja os documentos para casar na Itália, quando apostilar, traduzir, fazer asseveração e como evitar erros antes de apresentar tudo ao Comune.",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Guia Completo"
      title="Como casar na Itália: guia completo para brasileiros"
      pagePath={pagePath}
      schemaType="Article"
      datePublished="2026-06-06"
      dateModified="2026-06-06"
      description="Tudo o que brasileiros precisam saber para realizar o casamento civil na Itália: burocracia, documentos, tradução juramentada e asseverada."
      intro="Para casar na Itália sendo brasileiro, normalmente é preciso apresentar documentos pessoais e de estado civil, verificar as exigências do Comune, providenciar documentos brasileiros atualizados, apostilados quando necessário, traduzidos para o italiano e, em muitos casos, com tradução juramentada/asseverata. O procedimento exato pode variar conforme o Comune e a situação civil dos noivos. Preparar a pasta documental com antecedência e rigor técnico é o primeiro passo para garantir que a cerimônia civil ocorra sem interrupções burocráticas."
      sections={[
        {
          title: "Brasileiros podem casar na Itália?",
          body: [
            "Sim. Qualquer cidadão brasileiro, seja residente na Itália ou turista, tem o direito legal de contrair matrimônio em território italiano, conforme previsto no Codice Civile italiano e em tratados internacionais. Não é necessário ter a cidadania italiana ou de outro país da União Europeia para casar civilmente em um Comune.",
            "No entanto, o exercício deste direito está condicionado ao cumprimento de requisitos documentais rigorosos que provam a identidade e a capacidade matrimonial dos nubentes. Para o sistema italiano, é fundamental assegurar que não existam impedimentos legais (como um casamento anterior ainda vigente no Brasil) que invalidem o novo ato.",
          ],
        },
        {
          title: "Onde o casamento é feito na Itália?",
          body: [
            "O casamento civil na Itália é realizado perante o Ufficio di Stato Civile do Comune escolhido. A cerimônia ocorre normalmente na sede da prefeitura (município) ou em locais autorizados pela administração local (como vilas históricas ou salas solenes).",
            "Diferente do Brasil, onde o casamento em cartório e o religioso são processos distintos, na Itália existe o 'Matrimonio Concordatario', que é o casamento religioso católico com efeitos civis imediatos, desde que transcrito nos registros do Comune. Existem também acordos com outras denominações religiosas. Contudo, para a maioria dos brasileiros, o caminho padrão é a cerimônia civil pura no Comune, seguida ou não de uma celebração religiosa independente.",
          ],
        },
        {
          title: "Passo a passo para casar na Itália sendo brasileiro",
          body: [
            "O processo burocrático envolve órgãos de dois países e exige uma sequência lógica de atos para evitar o vencimento de certidões brasileiras.",
          ],
          list: [
            "1. Confirmar exigências no Comune: Cada Ufficio di Stato Civile pode ter interpretações ligeiramente diferentes sobre a validade de documentos digitais ou traduções feitas no Brasil.",
            "2. Verificar situação civil: Certificar-se de que divórcios ou viuvezes anteriores estão devidamente averbados no Brasil.",
            "3. Emitir documentos brasileiros atualizados: As autoridades italianas exigem certidões de nascimento e casamento (para divorciados) emitidas recentemente, geralmente nos últimos 6 meses.",
            "4. Apostilar documentos quando necessário: A Apostila de Haia é o selo de validade internacional do documento público brasileiro.",
            "5. Traduzir os documentos para o italiano: O conteúdo em português deve ser vertido por profissional habilitado.",
            "6. Fazer asseverazione/tradução juramentada: O juramento perante o Tribunale italiano que confere fé pública à tradução.",
            "7. Apresentar documentação ao Comune: Entrega da pasta para análise do oficial do Stato Civile.",
            "8. Agendar publicações/cerimônia: Cumprimento do prazo de publicações anagráficas antes da data do 'Sim'.",
            "9. Guardar cópias e recibos: Essenciais para futuras transcrições ou pedidos de permesso di soggiorno.",
          ],
        },
        {
          title: "Documentos para casar na Itália",
          body: [
            "A lista de documentos pode variar conforme o Comune competente. Antes de marcar a data, confirme diretamente com o Ufficio di Stato Civile do Comune onde o casamento será realizado. Abaixo, organizamos a documentação padrão solicitada a brasileiros:",
          ],
          table: {
            headers: ["Documento", "Para que serve", "Precisa traduzir?", "Apostila?", "Observação"],
            rows: [
              ["Passaporte Brasileiro", "Identificação internacional", "Não", "Não", "Deve estar válido"],
              ["Certidão de Nascimento", "Prova de filiação e origem", "Sim", "Sim", "Via recente de inteiro teor"],
              ["Nulla Osta / Capacidade", "Prova de ausência de impedimento", "Não (se emitido em IT)", "Sim (legalização)", "Emitido pelo Consulado do Brasil"],
              ["Certidão de Casamento", "Prova de divórcio (se aplicável)", "Sim", "Sim", "Com averbação de divórcio"],
              ["Sentença de Divórcio", "Detalhes da dissolução", "Sim", "Sim", "Se exigido pelo oficial do Comune"],
              ["Certidão de Óbito", "Prova de viuvez (se aplicável)", "Sim", "Sim", "Do cônjuge anterior"],
              ["Codice Fiscale", "Identificação fiscal na Itália", "Não", "Não", "Pode ser solicitado pelo Comune"],
              ["Permesso di Soggiorno", "Prova de estadia legal", "Não", "Não", "Se o brasileiro for residente"],
            ],
          },
        },
        {
          title: "O que é o nulla osta para casamento na Itália?",
          body: [
            "O 'Nulla Osta al Matrimonio' é o documento mais importante para o estrangeiro que deseja casar na Itália. Ele é uma declaração oficial de que, segundo as leis do seu país de origem, não existem impedimentos para o casamento (como parentesco proibitivo ou estado civil já casado).",
            "Para brasileiros, o Nulla Osta é emitido pelo Consulado-Geral do Brasil na Itália (Roma ou Milão) ou pela Embaixada em Brasília, dependendo de onde o processo é iniciado. O Comune italiano costuma exigir prova de capacidade matrimonial e a forma exata deste documento pode variar conforme a situação civil e o Comune de destino.",
            "Importante: Após a emissão pelo consulado brasileiro, o Nulla Osta deve ser legalizado na Prefettura italiana competente (salvo casos de isenção previstos em tratados específicos) para que a assinatura do cônsul seja reconhecida pelo oficial do Comune.",
          ],
        },
        {
          title: "Documentos brasileiros precisam de Apostila de Haia?",
          body: [
            "Sim. A Apostila de Haia é um selo emitido por cartórios autorizados no Brasil que certifica a autenticidade da assinatura e do carimbo do funcionário que emitiu o documento original. Sem a Apostila, uma certidão de nascimento brasileira é apenas um papel sem valor legal fora das fronteiras brasileiras.",
            "Normalmente, todos os documentos públicos brasileiros usados para casar na Itália (certidões de nascimento, casamento, sentenças) podem precisar de apostila. Lembre-se que a apostila deve ser feita no país de emissão do documento. Além disso, o Comune pode exigir que o documento seja recente. É fundamental entender que a apostila autentica o documento, mas não o traduz; tradução e apostila são etapas distintas e complementares.",
          ],
        },
        {
          title: "Tradução juramentada ou tradução asseverata: qual é necessária?",
          body: [
            "Esta é a etapa onde ocorrem os erros mais comuns. Documentos brasileiros redigidos em português não possuem validade perante o oficial do Stato Civile italiano; eles precisam ser vertidos para o italiano de forma oficial.",
            "A tradução simples pode não ser aceita para uso formal em órgãos públicos. Na Itália, a [traduzione asseverata](/traduzione-asseverata-portoghese-italiano) inclui o juramento do tradutor perante o órgão competente. O Comune deve confirmar o formato aceito e pode solicitar formalidades adicionais.",
            "Erros em nomes, datas, estado civil ou averbações podem gerar exigências, custos extras e atrasos. Revise as certidões e confirme com o Comune se é necessário apresentar [inteiro teor](/traducao-juramentada-certidoes).",
            "Se você precisa traduzir certidão de nascimento, certidão de casamento, divórcio ou documentos brasileiros para casar na Itália, fale conosco. Preparamos [traduções do português para o italiano](/traducao-juramentada-italiano) para uso em procedimentos na Itália.",
          ],
        },
        {
          title: "Brasileiro solteiro, divorciado ou viúvo: o que muda?",
          body: [
            "A situação civil define a complexidade da pasta documental. Cada estado civil exige provas específicas de que o indivíduo está livre para casar novamente.",
          ],
          subsections: [
            {
              title: "Brasileiro solteiro",
              body: [
                "É o caso mais simples. Exige-se normalmente a certidão de nascimento de inteiro teor recente, devidamente apostilada e traduzida de forma juramentada. O documento prova que não há registros de casamento anteriores no histórico do cidadão.",
              ],
            },
            {
              title: "Brasileiro divorciado",
              body: [
                "Exige-se a certidão de casamento anterior com a averbação do divórcio. Em muitos casos, o Comune solicita também a [tradução da sentença de divórcio](/traducao-sentenca-divorcio-italia) integral, com a certidão de trânsito em julgado (passaggio in giudicato), para verificar se o divórcio cumpriu os requisitos de ordem pública italiana.",
              ],
            },
            {
              title: "Brasileiro viúvo",
              body: [
                "Além da certidão de nascimento e da certidão do casamento anterior, o nubente deve apresentar a certidão de óbito do cônjuge falecido, também apostilada e traduzida. Algumas restrições de prazo (luto) podem ser aplicadas pelo Codice Civile italiano em situações específicas.",
              ],
            },
          ],
        },
        {
          title: "Brasileiro casando com italiano na Itália",
          body: [
            "Este é o cenário mais frequente. O cidadão italiano deve apresentar seus documentos de identidade e estado civil diretamente ao seu Comune de residência. O brasileiro deve focar na regularização de sua documentação vinda do Brasil (nascimento, estado civil, divórcio) com tradução e apostila.",
            "Após o casamento, o brasileiro passa a ter direito ao [permesso di soggiorno por motivos familiares](/documentos-traducao-permesso-di-soggiorno), que permite residir e trabalhar legalmente na Itália. A certidão de casamento italiana (estratto per riassunto dell'atto di matrimonio) será o documento base para esse pedido na Questura.",
          ],
        },
        {
          title: "Dois brasileiros podem casar na Itália?",
          body: [
            "Sim, é possível em certas situações, mas o procedimento depende da regularidade documental de ambos, das normas do Comune escolhido e da comprovação da capacidade matrimonial via autoridade consular brasileira. Se nenhum dos dois for residente na Itália (casamento de turistas), o Comune pode exigir o cumprimento de requisitos específicos de permanência ou taxas para uso de salas municipais por não residentes.",
          ],
        },
        {
          title: "Quanto tempo antes devo preparar os documentos?",
          body: [
            "Comece com antecedência mínima de 4 a 6 meses. Lembre-se que alguns documentos (certidões brasileiras) podem ter validade prática exigida pelo Comune de apenas 6 meses. O tempo de emissão no cartório, envio para o tradutor, [asseverazione no Tribunale](/traducao-juramentada-roma), legalização na Prefettura e o agendamento no Comune podem somar várias semanas. Não deixe a tradução e a apostila para a semana da cerimônia.",
          ],
        },
        {
          title: "Erros que podem atrasar ou impedir o casamento",
          body: [
            "A burocracia italiana não tolera imprecisões. Um único erro pode invalidar toda a pasta documental.",
          ],
          list: [
            "Documento vencido ou antigo demais (mais de 6 meses de emissão).",
            "Certidão de casamento sem a averbação obrigatória de divórcio.",
            "Nomes com grafias divergentes entre o passaporte e as certidões brasileiras.",
            "Falta de Apostila de Haia no documento original brasileiro.",
            "Tradução simples ou automática quando o Comune exige tradução asseverata (giurata).",
            "Erro de grafia em nomes ou datas de nascimento no corpo da tradução.",
            "Apresentar documentos ao Comune sem confirmar as exigências locais específicas por telefone ou e-mail.",
            "Deixar a contratação do tradutor juramentado para a última hora, ignorando os prazos judiciais de asseveração.",
          ],
        },
        {
          title: "Checklist de documentos antes de ir ao Comune",
          body: [
            "Antes de se dirigir ao Ufficio di Stato Civile, verifique se você possui:",
          ],
          list: [
            "Passaportes válidos de ambos os nubentes.",
            "Certidões brasileiras originais (recentes e de inteiro teor).",
            "Apostila de Haia aplicada em todos os documentos brasileiros.",
            "Traduções juramentadas/asseveradas para o italiano.",
            "Nulla Osta al Matrimonio emitido pelo Consulado e legalizado na Prefettura.",
            "Documento de identidade do noivo/a italiano (se aplicável).",
            "Comprovante de residência (se residente) ou prova de estadia legal.",
          ],
        },
        {
          title: "Como a Tradução Brasil Itália pode ajudar",
          body: [
            "Nossa equipe é especializada em [tradução português italiano](/traducao-juramentada-italiano) com foco exclusivo em procedimentos oficiais na Itália. Oferecemos o suporte técnico necessário para que suas certidões brasileiras sejam aceitas sem questionamentos pelo oficial do Comune.",
            "Realizamos o serviço completo de tradução juramentada e [asseverazione em Tribunais italianos](/traducao-juramentada-roma), garantindo que seu dossiê de casamento tenha fé pública plena. Nosso atendimento é feito inteiramente em português, facilitando a comunicação e a orientação sobre as etapas de apostila e legalização.",
            "Precisa traduzir documentos para casar na Itália? Envie seus documentos pelo WhatsApp e receba orientação sobre tradução, apostila e formato aceito para apresentação ao Comune.",
          ],
        },
        {
          title: "Perguntas frequentes sobre casamento na Itália para brasileiros",
          body: [
            "Respondemos às dúvidas mais comuns de quem planeja o casamento civil em solo italiano.",
          ],
          subsections: [
            {
              title: "Brasileiro pode casar na Itália?",
              body: ["Sim, tanto residentes quanto turistas brasileiros podem casar na Itália, desde que apresentem a documentação correta exigida pelo Comune."],
            },
            {
              title: "Quais documentos preciso para casar na Itália?",
              body: ["Os essenciais são o passaporte, certidão de nascimento de inteiro teor (apostilada e traduzida) e o Nulla Osta emitido pelo consulado brasileiro na Itália."],
            },
            {
              title: "Preciso de nulla osta para casar na Itália?",
              body: ["Sim. O Nulla Osta é a declaração consular brasileira que atesta sua capacidade matrimonial e é exigida por quase todos os Comunes."],
            },
            {
              title: "Certidão de nascimento brasileira precisa ser traduzida?",
              body: ["Obrigatoriamente. Todo documento em português deve ser acompanhado de tradução juramentada asseverata para ser aceito pelo oficial do Stato Civile."],
            },
            {
              title: "Precisa apostilar documentos brasileiros para casar na Itália?",
              body: ["Em muitos casos, sim. A apostila certifica a origem do documento brasileiro, mas a necessidade deve ser confirmada com o Comune ou órgão destinatário."],
            },
            {
              title: "Tradução simples serve para casar na Itália?",
              body: ["Não. Para fins de registro civil, a autoridade italiana exige tradução com fé pública, ou seja, tradução asseverata (giurata) no Tribunale."],
            },
            {
              title: "O Comune aceita tradução feita no Brasil?",
              body: ["Comunes maiores costumam aceitar se a tradução brasileira estiver apostilada. Porém, a tradução asseverada na Itália é a opção mais segura e universal."],
            },
            {
              title: "Brasileiro divorciado pode casar na Itália?",
              body: ["Sim, mas deve provar o encerramento do vínculo anterior através da certidão de casamento com averbação de divórcio e, muitas vezes, da sentença traduzida."],
            },
            {
              title: "Dois brasileiros podem casar na Itália?",
              body: ["Sim, é perfeitamente possível, seguindo os mesmos trâmites de Nulla Osta e documentação civil brasileira perante o Comune."],
            },
            {
              title: "Quanto tempo antes devo preparar os documentos?",
              body: ["Recomendamos iniciar o processo pelo menos 4 a 6 meses antes da data pretendida para a cerimônia."],
            },
            {
              title: "Preciso falar italiano para casar no Comune?",
              body: ["Se os nubentes não falam italiano, o Comune exige a presença de um intérprete oficial para garantir que ambos compreendam os termos do ato civil."],
            },
            {
              title: "O que acontece se houver erro na tradução?",
              body: ["O oficial do Comune pode recusar a pasta, suspendendo o processo de casamento até que uma nova tradução correta seja apresentada."],
            },
          ],
        },
        {
          title: "Fontes consultadas",
          body: [
            "Este guia foi elaborado com base nas normas do Codice Civile italiano e nas orientações oficiais dos seguintes órgãos:",
            <ul key="sources" className="mt-4 space-y-2 text-sm text-white/60">
              <li>• Consulado-Geral do Brasil em Roma: <a href="https://roma.itamaraty.gov.br" target="_blank" rel="noopener noreferrer" className="underline">roma.itamaraty.gov.br</a></li>
              <li>• Consulado-Geral do Brasil em Milão: <a href="https://milao.itamaraty.gov.br" target="_blank" rel="noopener noreferrer" className="underline">milao.itamaraty.gov.br</a></li>
              <li>• Ministero dell&apos;Interno (Stato Civile): <a href="https://www.interno.gov.it" target="_blank" rel="noopener noreferrer" className="underline">interno.gov.it</a></li>
              <li>• Comune di Roma Capitale: <a href="https://www.comune.roma.it" target="_blank" rel="noopener noreferrer" className="underline">comune.roma.it</a></li>
              <li>• Conselho Nacional de Justiça (Apostila de Haia): <a href="https://www.cnj.jus.br" target="_blank" rel="noopener noreferrer" className="underline">cnj.jus.br</a></li>
            </ul>,
          ],
        },
      ]}
      faqs={[]} // FAQ is handled inside sections for layout reasons in this specific guide
      relatedTitle="Leia também"
      relatedLinks={[
        { title: "Tradução juramentada português italiano", href: "/traducao-juramentada-italiano" },
        { title: "Tradução juramentada de certidões brasileiras", href: "/traducao-juramentada-certidoes" },
        { title: "Autoridades italianas para brasileiros — guia oficial", href: "/autoridades-italianas-documentos-brasileiros" },
        { title: "Glossário da tradução juramentada", href: "/glossario-traducao-juramentada" },
        { title: "Tradução de sentenças de divórcio", href: "/traducao-sentenca-divorcio-italia" },
        { title: "Apostila de Haia na Itália", href: "/apostilar-documento-italiano-na-italia" },
      ]}
    >
      <div className="mt-10 rounded-[8px] border border-[#d9aa52]/30 bg-[#0b1a29] p-6 italic text-white/80 text-justify">
        <strong>Nota importante:</strong> este guia tem finalidade informativa e ajuda brasileiros a entenderem a preparação documental para casar na Itália. As exigências podem variar conforme o Comune e a situação civil dos noivos. Confirme sempre com o Ufficio di Stato Civile antes de apresentar os documentos. O site presta serviço independente de tradução juramentada e não substitui a orientação oficial da autoridade pública.
      </div>
    </ArticlePage>
  );
}
