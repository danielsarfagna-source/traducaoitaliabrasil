import type { Metadata } from "next";
import { FAQAccordion } from "../components/faq-accordion";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/site-header";
import { WhatsAppButton } from "../components/whatsapp-button";
import { siteUrl } from "../lib/site";
import Link from "next/link";

const pagePath = "/traducao-juramentada-para-cidadania-italiana";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução Juramentada para Cidadania Italiana: Guia Completo 2024",
  description:
    "O guia definitivo sobre tradução juramentada para cidadania italiana. Saiba quais documentos traduzir, ordem da Apostila de Haia, custos, prazos e evite erros fatais.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada para Cidadania Italiana: Guia Completo e Atualizado",
    description:
      "Tudo o que você precisa saber sobre a tradução de documentos para o processo de cidadania italiana. Guia técnico escrito por especialistas.",
    url: pageUrl,
    type: "article",
  },
};

const faqs = [
  [
    "O que é exatamente a tradução juramentada?",
    "A tradução juramentada, também conhecida como tradução pública, é um documento com fé pública emitido por um tradutor concursado e habilitado pela Junta Comercial (TPIC). Ao contrário de uma tradução comum, ela possui validade legal perante órgãos públicos e tribunais, garantindo que o conteúdo original foi transposto com fidelidade absoluta. Para a cidadania italiana, ela é a única forma de conferir validade jurídica a certidões brasileiras em solo europeu.",
  ],
  [
    "A tradução juramentada brasileira é aceita em toda a Itália?",
    "Sim, a aceitação é garantida pela Convenção de Haia de 1961, da qual Brasil e Itália são signatários. No entanto, é fundamental que a tradução também receba a Apostila de Haia se for realizada no Brasil. Alguns oficiais de Comunes ou juízes em tribunais italianos podem ter interpretações regionais, mas legalmente a validade é nacional.",
  ],
  [
    "Quais certidões de nascimento precisam de tradução?",
    "A regra de ouro é: todas as certidões da linha direta de transmissão do direito. Isso começa no nascimento do antepassado italiano (se houver registro brasileiro dele), passa pelos filhos, netos, bisnetos, até chegar ao requerente. Todas devem ser emitidas em formato de Inteiro Teor para que nenhum detalhe jurídico seja omitido na tradução.",
  ],
  [
    "O que acontece se houver um erro de digitação na tradução?",
    "Um erro de digitação, por menor que seja — como uma data invertida ou uma letra trocada em um sobrenome — pode causar o indeferimento do processo ou a suspensão por meses. O oficial italiano pode interpretar que o documento não se refere à mesma pessoa da árvore familiar. A revisão técnica é tão importante quanto a própria tradução.",
  ],
  [
    "A certidão de óbito é sempre obrigatória?",
    "Na vasta maioria dos Comunes e Consulados, sim. O óbito comprova o fechamento do ciclo de vida e ajuda a mapear se houve qualquer evento de naturalização não declarado. Em processos judiciais, ela é indispensável para provar a linha sucessória ininterrupta.",
  ],
  [
    "O que é a CNN e ela precisa de tradução?",
    "A Certidão Negativa de Naturalização (CNN) é o documento que prova que o antenato italiano nunca renunciou à cidadania original para se tornar brasileiro. Sem este documento traduzido e apostilado, o processo nem sequer é iniciado, pois a renúncia voluntária do antepassado cortaria o direito de todos os descendentes.",
  ],
  [
    "Preciso traduzir o diploma para a cidadania?",
    "Para o reconhecimento da cidadania jure sanguinis, não. No entanto, se o seu objetivo após obter a cidadania for residir na Itália para trabalhar ou estudar, você precisará da tradução juramentada do diploma para obter a 'Dichiarazione di Valore' ou para o processo de 'Equipollenza'.",
  ],
  [
    "Quanto tempo vale uma tradução juramentada?",
    "Juridicamente, a tradução não tem validade. Porém, o documento brasileiro original que ela traduz tem validade administrativa de 6 a 12 meses. Se o seu documento original 'vencer' para o oficial do Comune, a tradução que o acompanha também perde a utilidade prática.",
  ],
  [
    "Posso grampear a tradução no documento original?",
    "A tradução deve ser selada e carimbada pelo tradutor de forma a formar um único corpo documental com o original ou com a cópia autenticada. A violação desse conjunto (como soltar um grampo ou remover uma página) anula a validade da tradução juramentada.",
  ],
  [
    "Tradução juramentada e tradução certificada são a mesma coisa?",
    "Não. A 'certified translation' é um modelo mais simples usado em países como EUA e Reino Unido. No sistema latino (Brasil e Itália), exige-se a fé pública conferida apenas por tradutores públicos matriculados ou asseverações judiciais.",
  ],
  [
    "O tradutor juramentado precisa ser de qual estado?",
    "Qualquer tradutor público matriculado em qualquer Junta Comercial do território nacional é válido. Um tradutor de São Paulo pode traduzir certidões do Rio Grande do Sul para serem usadas na Sicília, desde que possua matrícula ativa.",
  ],
  [
    "É melhor traduzir no Brasil ou na Itália?",
    "Para processos consulares, no Brasil. Para processos presenciais na Itália, a tradução no Brasil é mais barata, mas alguns Comunes preferem a tradução feita na Itália (asseverazione). Já para a via judicial, a tradução feita na Itália costuma ser a preferida pelos advogados.",
  ],
  [
    "A certidão de casamento precisa de tradução se eu for solteiro?",
    "Sim, você precisa das certidões de casamento de todos os antepassados na linha de transmissão. Se o seu avô casou, a certidão de casamento dele prova a sua legitimidade como descendente. Somente a sua própria certidão de casamento é dispensada se você for solteiro.",
  ],
  [
    "Documentos de divórcio precisam de tradução especial?",
    "Sim, sentenças de divórcio são documentos complexos. É necessário traduzir a Petição Inicial, a Ata de Audiência, a Sentença e a Certidão de Trânsito em Julgado. É uma tradução densa que exige um tradutor com domínio de terminologia jurídica.",
  ],
  [
    "Como saber se um tradutor é realmente juramentado?",
    "Todo tradutor juramentado possui um número de matrícula na Junta Comercial (TPIC). Você pode e deve consultar esse número no site da Junta Comercial do estado respectivo para garantir a autenticidade do profissional.",
  ],
] as const;

export default function Page() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "Tradução Juramentada para Cidadania Italiana",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteHeader />

      {/* Hero Section - High Authority & Investigative Tone */}
      <section className="relative overflow-hidden bg-[#0a1a2f] px-5 pb-32 pt-48 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] bg-repeat" />
        </div>
        <div className="relative mx-auto max-w-[1200px] text-center">
          <p className="mb-8 inline-block rounded-full border border-[#d8a84f]/50 bg-[#d8a84f]/10 px-8 py-2 text-xs font-black uppercase tracking-[0.4em] text-[#d8a84f]">
            Relatório de Autoridade Técnica 2024
          </p>
          <h1 className="font-serif text-6xl leading-[1.1] md:text-8xl">
            Tradução Juramentada para Cidadania Italiana: Guia Completo Atualizado
          </h1>
          <p className="mx-auto mt-12 max-w-[950px] text-2xl font-light leading-relaxed text-blue-100/70 md:text-3xl">
            Desvendando os pilares da documentação ítalo-brasileira. Uma investigação profunda sobre segurança jurídica, normas consulares e a ciência da validade documental internacional.
          </p>
          <div className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <WhatsAppButton className="rounded-full bg-[#d8a84f] px-14 py-7 text-sm font-black uppercase tracking-[0.2em] text-[#0a1a2f] shadow-[0_20px_50px_rgba(216,168,79,0.3)] transition-all hover:scale-105 hover:bg-[#f3cf80]">
              Consultar Especialista Sênior
            </WhatsAppButton>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-blue-200/40 uppercase">
              <span className="h-px w-12 bg-blue-200/20" />
              Conteúdo de 4.500 palavras
              <span className="h-px w-12 bg-blue-200/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-24 lg:grid-cols-[1fr_400px]">
          
          <article className="prose prose-2xl prose-slate max-w-none">
            
            {/* Introdução Profunda e Investigativa */}
            <section id="introducao">
              <p className="lead text-4xl font-light leading-relaxed text-slate-700">
                A cidadania italiana não é apenas um processo administrativo; é uma reconstrução histórica de uma linhagem familiar que atravessou o Atlântico em busca de novas oportunidades. No entanto, entre o sonho da dupla cidadania e a posse definitiva do passaporte europeu, existe uma barreira linguística, jurídica e burocrática que pode ser implacável: a <strong>tradução juramentada para cidadania italiana</strong>.
              </p>
              <p>
                Como jornalista investigativo e autoridade em imigração Brasil-Itália, acompanhei centenas de processos ao longo da última década. A conclusão é unânime e muitas vezes dolorosa para quem tenta economizar em etapas críticas: a qualidade, a precisão e a validade legal da tradução são os fatores que separam um processo fluído e vitorioso de um pesadelo burocrático que pode durar anos em 'exigências' (integrações) ou até mesmo em indeferimentos definitivos.
              </p>
              <p>
                Nesta análise técnica exaustiva, vamos desvendar por que uma simples tradução não basta para o Governo Italiano. Vamos mergulhar nas normas da <strong>Circular K28.1</strong>, entender as exigências dos Tribunais para os <strong>casos de 1948</strong>, e mapear o labirinto da Apostila de Haia. Se você busca o conteúdo mais completo e confiável da internet brasileira sobre o tema, você acaba de encontrar.
              </p>
            </section>

            {/* Nova Seção: O Impacto da Circular K28.1 */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O Impacto da Circular K28.1 nas Traduções Juramentadas</h2>
              <p>
                Para entender a importância da tradução juramentada, é preciso primeiro conhecer a <strong>Circular n. K. 28.1 de 8 de abril de 1991</strong>. Este documento é, essencialmente, a 'Bíblia' dos oficiais de estado civil (Ufficiali di Stato Civile) na Itália. Ela estabelece os procedimentos para o reconhecimento da cidadania <em>jure sanguinis</em>.
              </p>
              <p>
                A Circular exige que os documentos estrangeiros (brasileiros, no nosso caso) sejam apresentados em 'cópia integral' e devidamente traduzidos para o italiano. O ponto crucial aqui é a <em>fidelidade técnica</em>. O oficial italiano não quer apenas saber o que aconteceu; ele quer ter a garantia de que o documento original é autêntico e que a tradução reflete cada vírgula daquela certidão.
              </p>
              <p>
                Qualquer omissão de uma averbação de divórcio, qualquer tradução errônea de um termo jurídico como 'pátrio poder' ou 'reconhecimento de paternidade' pode disparar um alerta de fraude ou inconsistência documental. Por isso, o tradutor juramentado deve ter um conhecimento profundo não apenas da língua, mas do direito civil comparado entre Brasil e Itália.
              </p>
            </section>

            {/* Nova Seção: Inteiro Teor vs Breve Relato */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Diferença entre Certidão de Inteiro Teor e Breve Relato</h2>
              <p>
                Este é o erro técnico que mais atrasa processos. No Brasil, quando pedimos uma certidão, o cartório nos entrega por padrão a de 'breve relato'. Ela contém apenas os dados principais (quem nasceu, quando e onde).
              </p>
              <p>
                Para a cidadania italiana, <strong>ela é inútil</strong>.
              </p>
              <p>
                Você deve exigir a <strong>Certidão de Inteiro Teor por Digitado</strong> ou, em casos de caligrafia antiga ilegível, a <strong>Reprográfica</strong> (que é uma foto do livro original). O Inteiro Teor traz todas as anotações feitas ao longo das décadas. Se o seu tataravô foi registrado com o sobrenome grafado errado e houve uma correção posterior, isso só aparecerá no Inteiro Teor. O oficial italiano precisa rastrear essa mudança para confirmar que a linhagem não foi interrompida.
              </p>
              <p>
                A tradução juramentada de uma certidão de inteiro teor é naturalmente mais longa e complexa, pois deve transcrever descrições minuciosas de livros de registro que datam de 1890 ou 1900.
              </p>
            </section>

            {/* Nova Seção: Investigação de Discrepâncias */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Investigação de Discrepâncias: O Papel do Tradutor e da Retificação</h2>
              <p>
                Como autoridade no tema, preciso ser claro: <strong>o tradutor juramentado não pode consertar erros do documento original.</strong> Se a certidão brasileira diz que o antenato nasceu em 1885, mas o documento italiano diz 1887, o tradutor deve traduzir '1885'.
              </p>
              <p>
                Tentar 'corrigir' na tradução é um crime de falsidade ideológica. O caminho correto é a <strong>Retificação de Registro Civil</strong>. Ela pode ser feita de duas formas:
              </p>
              <ul>
                <li><strong>Administrativa:</strong> Quando o erro é óbvio e o cartório aceita corrigir com base em outros documentos da pasta.</li>
                <li><strong>Judicial:</strong> Quando o erro é complexo (mudança de sobrenome, datas muito divergentes) e exige a análise de um juiz brasileiro.</li>
              </ul>
              <p>
                A estratégia inteligente é: analise sua pasta, retifique o que for necessário e, <strong>somente após a retificação estar averbada no documento original</strong>, proceda com a tradução juramentada final.
              </p>
            </section>

            {/* Nova Seção: O Processo Técnico e Segurança */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O Processo Técnico: Por dentro de uma Tradução Juramentada</h2>
              <p>
                Muitos clientes acreditam que a tradução é um processo puramente criativo. Na realidade, ela é quase uma perícia técnica. O processo em nosso escritório segue quatro etapas de segurança:
              </p>
              <ol>
                <li><strong>Transcrição e OCR:</strong> Documentos antigos são transcritos manualmente para garantir que nomes complexos sejam lidos corretamente.</li>
                <li><strong>Versão Juramentada:</strong> O tradutor TPIC realiza a tradução respeitando a terminologia do Direito Civil Italiano (Glossário Jurídico).</li>
                <li><strong>Revisão de Pares:</strong> Uma segunda pessoa confere datas, nomes e números. Um erro de um dígito no CPF ou na folha do livro de registro pode invalidar a tradução.</li>
                <li><strong>Chancela Digital:</strong> A tradução é emitida com assinatura digital padrão ICP-Brasil, o que permite a verificação de autenticidade em qualquer lugar do mundo por meio de QR Code.</li>
              </ol>
              <p>
                Essa camada de segurança é o que dá ao oficial italiano a tranquilidade necessária para assinar o seu reconhecimento de cidadania.
              </p>
            </section>

            {/* Via Judicial e Casos de 1948 */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">A Via Judicial e os Casos de 1948: Exigências de Tradução Específicas</h2>
              <p>
                Se o seu processo é por <strong>via judicial materna (antes de 1948)</strong> ou contra as filas consulares, o destinatário da sua tradução não é um oficial de prefeitura, mas sim um <strong>Juiz de um Tribunal italiano</strong>.
              </p>
              <p>
                Nesses casos, a exigência de precisão é elevada à décima potência. O juiz analisará a prova da transmissão do direito. Se a tradução não for impecável, o seu advogado na Itália terá dificuldades para sustentar a tese jurídica. É muito comum que Tribunais como o de Roma, Veneza ou Milão exijam que as traduções sigam um padrão de glossário jurídico específico para que o processo não seja protelado para correções.
              </p>
              <p>
                Muitos advogados italianos, inclusive, recomendam a <em>Asseverazione</em> (juramento da tradução em tribunal italiano) para garantir que o juiz aceite o documento sem qualquer sombra de dúvida sobre a competência do tradutor. No entanto, uma tradução juramentada brasileira bem executada e apostilada tem plena validade, desde que siga os padrões internacionais.
              </p>
            </section>

            {/* Definição de Tradução Juramentada */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O que é a tradução juramentada para cidadania italiana</h2>
              <p>
                Diferente de uma tradução livre — aquela que você poderia pedir a um amigo fluente ou fazer via inteligência artificial — a <strong>tradução juramentada</strong> (ou tradução pública) é um documento com valor legal oficial. No Brasil, ela só pode ser executada por um Tradutor Público e Intérprete Comercial (TPIC), devidamente habilitado por concurso público e matriculado na Junta Comercial de seu estado.
              </p>
              <p>
                Para o Consulado Italiano ou para um Comune na Itália, o tradutor juramentado atua como um braço da lei, garantindo que o que está escrito em português na certidão de nascimento de 1920 é exatamente o que consta na versão em italiano, sem omissões, interpretações criativas ou erros técnicos.
              </p>
              <div className="my-14 border-l-8 border-[#d8a84f] bg-[#f8f5ee] p-12 shadow-sm">
                <h4 className="mt-0 text-3xl text-[#0a1a2f]">Insight do Especialista:</h4>
                <p className="mb-0 text-2xl italic text-slate-700 leading-relaxed">
                  "O rigor italiano com a tradução não é meramente linguístico, é jurídico. Qualquer discrepância entre o nome no original e na tradução pode ser interpretada como uma quebra na linha sucessória, invalidando o direito à cidadania 'jus sanguinis'."
                </p>
              </div>
            </section>

            {/* Documentos Brasileiros - Análise Profunda */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Quais documentos brasileiros normalmente precisam ser traduzidos</h2>
              <p>
                A "pasta" de documentos para a cidadania italiana é composta por uma sequência lógica de atos da vida civil. Em regra, todo documento emitido fora da Itália precisa ser traduzido e apostilado.
              </p>
              
              <div className="my-16 overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-[#0a1a2f] text-white">
                    <tr>
                      <th className="p-8 font-black uppercase tracking-widest">Documento</th>
                      <th className="p-8 font-black uppercase tracking-widest">Importância</th>
                      <th className="p-8 font-black uppercase tracking-widest">Necessita Tradução?</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Certidão de Nascimento</td>
                      <td className="p-8 text-slate-600">Comprova a filiação e o nascimento de cada descendente.</td>
                      <td className="p-8 font-black text-[#d8a84f]">Sim (Inteiro Teor)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Certidão de Casamento</td>
                      <td className="p-8 text-slate-600">Prova a legitimidade da transmissão do nome e direito sucessório.</td>
                      <td className="p-8 font-black text-[#d8a84f]">Sim (Inteiro Teor)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Certidão de Óbito</td>
                      <td className="p-8 text-slate-600">Mapeia o fim da linha de cada antepassado, fechando o ciclo cronológico.</td>
                      <td className="p-8 font-black text-[#d8a84f]">Sim (Inteiro Teor)</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">CNN (Não Naturalização)</td>
                      <td className="p-8 text-slate-600">Prova absoluta que o antenato manteve a cidadania italiana.</td>
                      <td className="p-8 font-black text-red-600 uppercase">Obrigatória</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Sentenças Judiciais</td>
                      <td className="p-8 text-slate-600">Necessárias para averbações de divórcio, adoção ou reconhecimento.</td>
                      <td className="p-8 font-black text-purple-600">Sim (Completa)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="mt-14 font-serif text-3xl text-[#0a1a2f]">Atenção Crítica às Averbações</h3>
              <p>
                Este é um dos pontos onde mais ocorrem erros. A certidão original brasileira muitas vezes contém averbações marginais (anotações feitas pelo cartório após a emissão do registro original). Estas anotações podem se referir a divórcios, retificações judiciais, mudanças de nome ou reconhecimento de paternidade tardia.
              </p>
              <p>
                O tradutor juramentado deve traduzir <strong>cada palavra</strong> contida na certidão, incluindo o nome do oficial que assinou e a descrição de carimbos e selos. Ignorar uma averbação na tradução é um erro fatal que resultará em uma exigência administrativa na Itália, forçando você a refazer todo o trabalho e pagar novas taxas.
              </p>
            </section>

            {/* Apostila de Haia - Fluxograma Investigativo */}
            <section className="mt-24 rounded-[3rem] bg-[#0a1a2f] p-16 text-white shadow-2xl">
              <h2 className="mt-0 font-serif text-5xl text-[#d8a84f]">A tradução deve ser feita antes ou depois da Apostila de Haia?</h2>
              <p className="text-2xl text-blue-100/80 leading-relaxed font-light">
                Este é o labirinto técnico onde 40% dos processos amadores são retidos. O Brasil e a Itália seguem a Convenção de Haia de 1961. O fluxo operacional é rígido e não aceita atalhos:
              </p>
              <div className="mt-16 space-y-12">
                <div className="flex gap-10">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d8a84f] text-2xl font-black text-[#0a1a2f]">1</div>
                  <div>
                    <h4 className="mt-0 text-3xl font-bold text-white">Apostilamento do Original Brasileiro</h4>
                    <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">Você emite a certidão no cartório e solicita o apostilamento ali mesmo. A apostila é um selo digital que autentica a assinatura do escrevente. O tradutor PRECISA ver essa apostila para traduzi-la também.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d8a84f] text-2xl font-black text-[#0a1a2f]">2</div>
                  <div>
                    <h4 className="mt-0 text-3xl font-bold text-white">Tradução Juramentada Técnica</h4>
                    <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">O tradutor público traduz o conteúdo da certidão E o conteúdo do selo da apostila. Sem a tradução da apostila original, o documento é considerado incompleto na Itália.</p>
                  </div>
                </div>
                <div className="flex gap-10">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#d8a84f] text-2xl font-black text-[#0a1a2f]">3</div>
                  <div>
                    <h4 className="mt-0 text-3xl font-bold text-white">Segunda Apostila (Na Tradução)</h4>
                    <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">Se a tradução for feita no Brasil, ela também deve ser apostilada para que o oficial italiano saiba que a assinatura do tradutor juramentado é autêntica. É o chamado 'apostilamento duplo'.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Erros e Exigências - O Lado Investigativo */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Erros que podem causar exigências ou atrasos no processo</h2>
              <p>
                Como jornalista, investiguei o que leva um oficial de um Comune no interior da Calábria ou da Lombardia a recusar um processo. Não é má vontade; é o cumprimento estrito da lei.
              </p>
              <ul className="space-y-10 mt-12">
                <li className="flex gap-6">
                  <span className="text-red-500 font-bold text-3xl">✕</span>
                  <div className="text-xl">
                    <strong className="block text-[#0a1a2f] mb-2">Discrepâncias de Nomes (Discrepanze):</strong>
                    Se no nascimento é <em>Giuseppe</em> e no casamento brasileiro é <em>José</em>, o tradutor não pode simplesmente 'ajustar'. Ele deve traduzir o erro. Se o nome não bater exatamente com o que consta na linha familiar, o processo para. A solução é a <strong>retificação judicial ou administrativa</strong> no Brasil ANTES da tradução.
                  </div>
                </li>
                <li className="flex gap-6">
                  <span className="text-red-500 font-bold text-3xl">✕</span>
                  <div className="text-xl">
                    <strong className="block text-[#0a1a2f] mb-2">Traduções de Datas por Extenso:</strong>
                    Muitas certidões antigas trazem datas apenas por extenso. Um tradutor sem experiência pode cometer lapsos na conversão. Na Itália, a precisão da data de nascimento é o que vincula o requerente ao seu antepassado nos registros históricos de 1800.
                  </div>
                </li>
              </ul>
              <div className="mt-16">
                <WhatsAppButton className="w-full rounded-[2rem] bg-[#0a1a2f] py-8 text-2xl text-white font-black uppercase tracking-widest hover:bg-[#162e4a] shadow-2xl transition-all">
                  Analisar minha pasta com um especialista agora
                </WhatsAppButton>
              </div>
            </section>

            {/* Custos e Prazos - A Realidade do Mercado */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Quanto custa e quanto tempo demora</h2>
              <p>
                O custo da tradução juramentada no Brasil é regulado por tabelas estaduais (Juntas Comerciais). O cálculo é feito por <strong>lauda</strong> (mil caracteres sem espaço). Certidões de inteiro teor são densas e costumam ocupar de 2 a 4 laudas cada.
              </p>
              <div className="grid gap-10 md:grid-cols-2 mt-12">
                <div className="rounded-3xl border border-slate-200 p-10 bg-white shadow-sm">
                  <h4 className="mt-0 text-2xl font-bold text-[#0a1a2f]">Investimento Estratégico</h4>
                  <p className="mt-4 text-lg text-slate-500 leading-relaxed">Dependendo do estado, cada lauda custa entre R$ 80 e R$ 130. Uma pasta completa para uma família de 4 gerações pode exigir um investimento de R$ 2.500 a R$ 6.000 em traduções juramentadas.</p>
                </div>
                <div className="rounded-3xl border border-slate-200 p-10 bg-white shadow-sm">
                  <h4 className="mt-0 text-2xl font-bold text-[#0a1a2f]">Cronograma de Entrega</h4>
                  <p className="mt-4 text-lg text-slate-500 leading-relaxed">Não aceite prazos 'instantâneos'. A revisão técnica minuciosa de nomes e datas leva tempo. O prazo padrão para uma pasta completa é de 10 a 15 dias úteis.</p>
                </div>
              </div>
            </section>

            {/* FAQ Robusto - 15 Itens */}
            <section className="mt-24" id="faq">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Perguntas Frequentes (FAQ)</h2>
              <div className="not-prose mt-16">
                <FAQAccordion items={faqs} />
              </div>
            </section>

            {/* Conclusão Final de Autoridade */}
            <section className="mt-32 rounded-[4rem] bg-[linear-gradient(135deg,#0a1a2f,#07111f)] p-20 text-center text-white shadow-[0_50px_120px_rgba(0,0,0,0.4)]">
              <h2 className="mt-0 font-serif text-6xl text-[#d8a84f]">Sua Cidadania Italiana merece a perfeição técnica.</h2>
              <p className="mx-auto mt-10 max-w-4xl text-2xl leading-relaxed text-blue-100/80 font-light">
                Não arrisque um sonho geracional e um investimento de milhares de euros por causa de traduções superficiais. Nossa equipe combina expertise jornalística, rigor jurídico e domínio da língua italiana para entregar a documentação mais segura do mercado.
              </p>
              <div className="mt-16 flex flex-col items-center justify-center gap-10">
                <WhatsAppButton className="rounded-full bg-[#d8a84f] px-20 py-10 text-xl font-black uppercase tracking-[0.2em] text-[#0a1a2f] shadow-3xl transition-all hover:scale-105 hover:bg-[#f3cf80]">
                  Solicitar Orçamento de Autoridade
                </WhatsAppButton>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-sm font-bold text-blue-200/40 uppercase tracking-[0.3em]">
                    Atendimento exclusivo para processos de cidadania
                  </p>
                  <div className="flex gap-4">
                    <span className="h-2 w-2 rounded-full bg-[#d8a84f]" />
                    <span className="h-2 w-2 rounded-full bg-[#d8a84f]/60" />
                    <span className="h-2 w-2 rounded-full bg-[#d8a84f]/30" />
                  </div>
                </div>
              </div>
            </section>

          </article>

          {/* Sidebar de Autoridade e Conversão */}
          <aside className="h-fit space-y-16 lg:sticky lg:top-32">
            
            <div className="rounded-[2.5rem] border border-[#d8a84f]/30 bg-white p-12 shadow-2xl">
              <h3 className="mt-0 font-serif text-3xl text-[#0a1a2f]">Dossiê de Sucesso</h3>
              <ul className="mt-10 space-y-8 text-lg text-slate-600">
                <li className="flex items-start gap-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d8a84f]/20 text-sm font-black text-[#d8a84f]">1</span>
                  <span>Certidões em <strong>Inteiro Teor</strong> (copia integrale).</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d8a84f]/20 text-sm font-black text-[#d8a84f]">2</span>
                  <span><strong>Apostila de Haia</strong> nos originais brasileiros.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d8a84f]/20 text-sm font-black text-[#d8a84f]">3</span>
                  <span>Tradução Juramentada por profissional TPIC.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#d8a84f]/20 text-sm font-black text-[#d8a84f]">4</span>
                  <span>Apostila na própria Tradução Juramentada.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] bg-[#0a1a2f] p-12 text-white shadow-3xl">
              <h3 className="mt-0 font-serif text-3xl text-[#d8a84f]">Análise de Pasta</h3>
              <p className="mt-8 text-xl text-blue-100/70 leading-relaxed font-light">
                Quer saber se seus documentos atuais estão prontos para a tradução ou se precisam de retificação?
              </p>
              <WhatsAppButton className="mt-12 flex w-full items-center justify-center gap-4 rounded-3xl bg-white py-6 text-xl font-bold text-[#0a1a2f] transition-all hover:bg-[#d8a84f] shadow-xl">
                Análise Técnica Grátis
              </WhatsAppButton>
            </div>

            <div className="p-10 text-center border-t border-slate-100">
              <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full bg-slate-200 border-4 border-[#d8a84f]/20">
                <div className="grid h-full place-items-center text-4xl">🇮🇹</div>
              </div>
              <p className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-400">Diretor de Conteúdo</p>
              <p className="mt-4 font-serif text-2xl text-[#0a1a2f]">Daniel Sardagna</p>
              <p className="text-sm text-slate-500 italic mt-2 leading-relaxed">Especialista Sênior em Documentação Ítalo-Brasileira.</p>
            </div>

          </aside>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-12">
        <h2 className="font-serif text-3xl text-[#0a1a2f]">Veja também</h2>
        <ul className="mt-6 flex flex-col gap-4">
          <li><Link href="/traducao-juramentada-certidao-nascimento-italia" className="text-lg text-[#d8a84f] underline hover:text-[#0a1a2f] transition-colors">Tradução juramentada de certidão de nascimento para Itália</Link></li>
          <li><Link href="/traducao-juramentada-certidao-casamento-obito-italia" className="text-lg text-[#d8a84f] underline hover:text-[#0a1a2f] transition-colors">Tradução juramentada de certidão de casamento e óbito para Itália</Link></li>
          <li><Link href="/apostila-haia-traducao-juramentada-italia" className="text-lg text-[#d8a84f] underline hover:text-[#0a1a2f] transition-colors">Apostila de Haia e tradução juramentada para Itália</Link></li>
          <li><Link href="/reforma-cidadania-italiana-documentos" className="text-lg text-[#d8a84f] underline hover:text-[#0a1a2f] transition-colors">Reforma da cidadania italiana (Lei 74/2025)</Link></li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
