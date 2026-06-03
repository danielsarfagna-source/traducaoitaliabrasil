import type { Metadata } from "next";
import { FAQAccordion } from "../components/faq-accordion";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/site-header";
import { WhatsAppButton } from "../components/whatsapp-button";
import { siteUrl } from "../lib/site";
import Link from "next/link";

const pagePath = "/traducao-cnh-dirigir-na-italia";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Nova Regra CNH Brasileira na Itália: Guia Completo 2024/2025",
  description:
    "Saiba como dirigir legalmente na Itália com CNH brasileira. Regras para turistas e residentes, tradução juramentada, acordo de conversão e multas.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "CNH Brasileira na Itália: Tudo o que você precisa saber",
    description:
      "Guia definitivo sobre o uso e conversão da carteira de motorista brasileira na Itália. Prazos, leis e procedimentos técnicos.",
    url: pageUrl,
    type: "article",
  },
};

const faqs = [
  ["A CNH brasileira é aceita na Itália?", "Sim, mas com condições. Turistas podem dirigir por até 90 dias com tradução juramentada ou PID. Residentes têm prazo de até 1 ano antes da obrigatoriedade de conversão."],
  ["O que é a PID e ela é obrigatória?", "A Permissão Internacional para Dirigir (PID) é um documento que traduz sua CNH. Ela não é estritamente obrigatória se você tiver uma tradução juramentada oficial, mas é altamente recomendada para facilitar fiscalizações."],
  ["Quanto tempo o turista pode dirigir?", "O turista brasileiro pode dirigir na Itália por todo o período de sua estada legal (geralmente 90 dias), desde que porte a CNH original e a tradução/PID."],
  ["Mudei para a Itália. Posso dirigir por quanto tempo?", "A partir do momento que você registra sua residência (anagrafe), você tem o prazo máximo de 1 ano para dirigir com a CNH brasileira acompanhada de tradução."],
  ["O que acontece após 1 ano de residência?", "Após 1 ano, sua CNH brasileira perde a validade em solo italiano. Você deve convertê-la para a Patente di Guida italiana ou tirar uma nova habilitação do zero."],
  ["Como funciona o novo acordo Brasil-Itália de 2024?", "O acordo permite a conversão direta da CNH categorias A e B para a patente italiana sem a necessidade de prestar exames teóricos ou práticos, desde que cumpridos os requisitos de tempo de residência."],
  ["Quais categorias de CNH entram no acordo?", "Apenas as categorias A (moto) e B (carro). Categorias profissionais (C, D, E) geralmente exigem exames complementares ou não entram na conversão direta."],
  ["O que é a tradução juramentada da CNH?", "É a tradução oficial feita por um tradutor público (TPIC) que confere validade legal ao documento brasileiro perante as autoridades italianas."],
  ["Posso usar a CNH Digital na Itália?", "Não. As autoridades italianas exigem o porte do documento físico original. A versão digital não é aceita em fiscalizações de trânsito internacionais."],
  ["A tradução consular ainda existe?", "Sim, mas a tradução juramentada feita por tradutores matriculados em tribunais ou juntas comerciais é a via mais rápida e amplamente aceita pela Motorizzazione."],
  ["Qual o valor da multa por dirigir com CNH irregular?", "As multas podem variar de €150 a mais de €600, dependendo da infração, além do risco de retenção do veículo e suspensão do direito de dirigir."],
  ["Estudantes brasileiros podem dirigir?", "Sim, seguem a mesma regra: se não fixarem residência definitiva, dirigem como turistas. Se registrarem residência, vale o prazo de 1 ano."],
  ["Preciso de tradução se tiver a PID?", "Se a sua PID estiver válida e dentro do padrão internacional, a tradução juramentada é dispensável. Porém, muitos optam pela tradução por ser um documento vitalício enquanto a CNH durar."],
  ["O que é a 'Motorizzazione Civile'?", "É o órgão italiano equivalente ao DETRAN no Brasil, responsável por emitir a Patente di Guida e processar as conversões."],
  ["Posso converter CNH provisória?", "Não. Apenas CNHs definitivas e dentro do prazo de validade podem ser submetidas ao processo de conversão para a patente italiana."],
  ["Tenho cidadania italiana, a regra muda?", "Não. Para fins de trânsito, o que conta é a origem da sua habilitação e o seu local de residência, não sua nacionalidade."],
  ["Onde faço a tradução da CNH?", "Pode ser feita no Brasil com um tradutor juramentado (e apostilada) ou na Itália via Asseverazione."],
  ["O que é o Artigo 135 do Codice della Strada?", "É o artigo da lei italiana que regula a condução de veículos com habilitações estrangeiras e estabelece as punições para residentes que excedem o prazo de 1 ano."],
  ["Posso dirigir carro alugado com CNH brasileira?", "Sim, as locadoras aceitam a CNH brasileira + PID/Tradução, mas verifique sempre a política da empresa específica."],
  ["Como começar o processo de conversão?", "O primeiro passo é obter a tradução juramentada da sua CNH e procurar a Motorizzazione da sua província de residência."],
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
        name: "CNH Brasileira na Itália",
        item: pageUrl,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteHeader />

      {/* Hero Section - Investigative Journalist Style */}
      <section className="relative overflow-hidden bg-[#0a1a2f] px-5 pb-32 pt-48 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] bg-repeat" />
        </div>
        <div className="relative mx-auto max-w-[1200px] text-center">
          <p className="mb-8 inline-block rounded-full border border-[#d8a84f]/50 bg-[#d8a84f]/10 px-8 py-2 text-xs font-black uppercase tracking-[0.4em] text-[#d8a84f]">
            Relatório de Mobilidade Internacional 2024/2025
          </p>
          <h1 className="font-serif text-6xl leading-[1.1] md:text-8xl">
            Nova Regra da CNH Brasileira na Itália
          </h1>
          <p className="mx-auto mt-12 max-w-[1000px] text-2xl font-light leading-relaxed text-blue-100/70 md:text-3xl">
            Quem pode dirigir por até 1 ano? Quando a tradução juramentada é obrigatória? Uma investigação completa sobre as leis, o novo acordo de conversão e como evitar multas pesadas.
          </p>
          <div className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <WhatsAppButton className="rounded-full bg-[#d8a84f] px-14 py-7 text-sm font-black uppercase tracking-[0.2em] text-[#0a1a2f] shadow-[0_20px_50px_rgba(216,168,79,0.3)] transition-all hover:scale-105 hover:bg-[#f3cf80]">
              Consultar Especialista em CNH
            </WhatsAppButton>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-blue-200/40 uppercase">
              <span className="h-px w-12 bg-blue-200/20" />
              Guia de 5.000 Palavras
              <span className="h-px w-12 bg-blue-200/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-24 lg:grid-cols-[1fr_400px]">
          
          <article className="prose prose-2xl prose-slate max-w-none">
            
            {/* Introdução Profunda */}
            <section id="introducao">
              <p className="lead text-4xl font-light leading-relaxed text-slate-700">
                Dirigir pelas estradas da Toscana ou enfrentar o trânsito caótico de Roma exige mais do que apenas habilidade ao volante; exige conformidade rigorosa com o <strong>Codice della Strada</strong>. Para brasileiros residentes ou turistas na Itália, a questão da Carteira Nacional de Habilitação (CNH) é cercada de mitos, prazos mal compreendidos e mudanças legislativas recentes que podem custar caro.
              </p>
              <p>
                Nesta investigação profunda, vamos analisar o novo acordo de reciprocidade Brasil-Itália, o prazo fatal de 1 ano para residentes e as exigências técnicas que as autoridades italianas impõem para que sua CNH brasileira seja aceita. Se você quer evitar a retenção do veículo e multas que ultrapassam os 600 euros, este é o documento técnico mais importante que você lerá hoje.
              </p>
            </section>

            {/* A CNH brasileira vale na Itália? */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">A CNH brasileira vale na Itália?</h2>
              <p>
                A resposta curta é: <strong>Sim, mas ela não se basta.</strong> Diferente de países vizinhos do Mercosul, a Itália exige que o documento brasileiro seja acompanhado de uma tradução oficial ou da Permissão Internacional para Dirigir (PID).
              </p>
              <p>
                No entanto, a validade da CNH brasileira é estritamente vinculada ao seu status migratório. A lei italiana distingue claramente quem está "de passagem" e quem "fixou raízes". Para o governo italiano, a partir do momento que você se torna um residente, sua habilitação estrangeira entra em contagem regressiva.
              </p>
              <div className="my-14 border-l-8 border-[#d8a84f] bg-[#f8f5ee] p-12 shadow-sm">
                <h4 className="mt-0 text-3xl text-[#0a1a2f]">Destaque Legislativo:</h4>
                <p className="mb-0 text-2xl italic text-slate-700 leading-relaxed">
                  "A CNH brasileira é um documento de identificação e habilitação válido, mas sem a devida tradução ou PID, ela é considerada 'ilegível' para o oficial de trânsito italiano, sujeitando o condutor às sanções do Artigo 135 do Código da Estrada."
                </p>
              </div>
            </section>

            {/* Turistas, Estudantes e Residentes */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Quem pode dirigir na Itália usando CNH brasileira</h2>
              
              <h3 className="mt-12 font-serif text-3xl text-[#0a1a2f]">Turistas e Visitantes de Curta Duração</h3>
              <p>
                Se você está na Itália para turismo, negócios ou visitas familiares por até 90 dias, você pode dirigir tranquilamente. O requisito é portar a sua CNH brasileira física (original e válida) juntamente com a PID ou uma <strong>tradução juramentada</strong>.
              </p>

              <h3 className="mt-12 font-serif text-3xl text-[#0a1a2f]">Estudantes e Pesquisadores</h3>
              <p>
                Estudantes que não registram residência definitiva (anagrafe) seguem a regra dos turistas. No entanto, se o seu curso durar mais de um ano e você decidir fixar residência para obter benefícios locais, o relógio de 1 ano começa a contar.
              </p>

              <h3 className="mt-12 font-serif text-3xl text-[#0a1a2f]">Residentes (O Ponto Crítico)</h3>
              <p>
                Aqui reside o maior perigo. No momento em que você assina sua residência em um Comune italiano, você tem exatamente <strong>1 ano</strong> para utilizar sua CNH brasileira. Após esse período, a lei entende que você teve tempo suficiente para se adaptar às regras locais e exige que você possua a Patente di Guida italiana.
              </p>
            </section>

            {/* Tabela Comparativa de Prazos */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Tabela de Prazos e Validade</h2>
              <div className="my-16 overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-[#0a1a2f] text-white">
                    <tr>
                      <th className="p-8 font-black uppercase tracking-widest">Status na Itália</th>
                      <th className="p-8 font-black uppercase tracking-widest">Prazo para Dirigir</th>
                      <th className="p-8 font-black uppercase tracking-widest">Requisito Extra</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Turista</td>
                      <td className="p-8 text-slate-600">Até 90 dias</td>
                      <td className="p-8 font-black text-[#d8a84f]">PID ou Tradução</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Novo Residente</td>
                      <td className="p-8 text-slate-600">Até 1 ano da residência</td>
                      <td className="p-8 font-black text-[#d8a84f]">Tradução Juramentada</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold text-xl">Residente +1 ano</td>
                      <td className="p-8 text-red-600 font-black">Proibido</td>
                      <td className="p-8 font-black text-red-600 uppercase">Conversão Obrigatória</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Nova Seção: O Acordo de Reciprocidade em Detalhes */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O Acordo de Reciprocidade em Detalhes: O que o 'Bando' não diz</h2>
              <p>
                O acordo de conversão de CNH entre Brasil e Itália é um documento técnico denso. A versão mais recente, em vigor desde 2024, resolveu um problema histórico: a validade das carteiras emitidas <em>após</em> a fixação da residência.
              </p>
              <p>
                De acordo com as novas diretrizes da <strong>Motorizzazione Civile</strong>, para converter sua CNH sem exames, você deve ter obtido a sua habilitação brasileira ANTES de registrar sua residência na Itália. Se você se mudou para a Itália e depois voltou ao Brasil para tirar a CNH, o governo italiano não aceitará a conversão direta, pois entende que você tentou 'burlar' o rigoroso exame de direção italiano.
              </p>
              <p>
                Outro ponto investigado: o acordo é válido apenas para CNHs definitivas. A <strong>PPD (Permissão Para Dirigir)</strong>, nossa famosa 'provisória', não é conversível. Você deve aguardar a emissão da CNH definitiva no Brasil para dar entrada no processo na Itália.
              </p>
            </section>

            {/* Nova Seção: O Atestado Médico e a Tabela Milmétrica */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O Atestado Médico e a Rigidez do Exame Italiano</h2>
              <p>
                Diferente do Brasil, onde o exame médico para CNH é muitas vezes uma formalidade rápida, na Itália o <em>Certificato Anamnestico</em> e a visita ao <em>Medico Monocratico</em> (médico da ASL ou de agências autorizadas) são rigorosos.
              </p>
              <p>
                Para converter sua CNH, você precisará passar por uma avaliação de visão, audição e reflexos. Se você usa óculos, sua patente italiana virá com o código '01', tornando obrigatório o uso de lentes ao volante. Além disso, se você possui alguma condição de saúde pré-existente, o médico pode exigir exames complementares de especialistas antes de dar o aval para a conversão. Este certificado médico tem validade curta (geralmente 3 meses), então a <strong>tradução juramentada da sua CNH</strong> deve estar pronta antes mesmo de você marcar a consulta.
              </p>
            </section>

            {/* O Novo Acordo Brasil-Itália */}
            <section className="mt-24 rounded-[3rem] bg-[#0a1a2f] p-16 text-white shadow-2xl">
              <h2 className="mt-0 font-serif text-5xl text-[#d8a84f]">O Novo Acordo Brasil-Itália de 2024</h2>
              <p className="text-2xl text-blue-100/80 leading-relaxed font-light">
                Em 2024, foi ratificada a renovação do acordo de reciprocidade para a conversão de carteiras de habilitação. Esta é uma vitória diplomática que simplifica a vida de milhares de brasileiros.
              </p>
              <div className="mt-12 space-y-10">
                <div>
                  <h4 className="text-3xl font-bold text-white">Conversão Sem Exames</h4>
                  <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">O grande benefício: você pode trocar sua CNH brasileira pela Patente italiana <strong>sem precisar fazer as provas teóricas e práticas</strong> (que são caríssimas e difíceis na Itália). O processo é meramente administrativo junto à Motorizzazione Civile.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">Categorias A e B</h4>
                  <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">O acordo foca em condutores particulares. Se você tem CNH de moto ou carro, a conversão é direta. Para caminhões e ônibus, as regras são mais complexas e podem exigir nivelamento profissional.</p>
                </div>
              </div>
            </section>

            {/* Tradução Juramentada vs Consular */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Tradução Juramentada ou Consular?</h2>
              <p>
                Muitos brasileiros recorrem ao consulado em busca de uma tradução, mas a realidade prática do dia a dia na Itália favorece a <strong>tradução juramentada</strong>.
              </p>
              <p>
                A tradução juramentada feita por um tradutor matriculado em tribunal (Asseverazione) ou por um Tradutor Público no Brasil (com Apostila de Haia) é aceita de forma unânime por qualquer Polizia Stradale ou escritório da Motorizzazione. Ela é mais rápida, tem um custo-benefício superior e não depende de agendamentos consulares que podem levar meses.
              </p>
            </section>

            {/* Multas e Consequências */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Multas e Consequências: O Risco de Dirigir Irregular</h2>
              <p>
                Não subestime a fiscalização italiana. Se você é residente há mais de um ano e for parado em uma blitz (posto di blocco) dirigindo apenas com a CNH brasileira, as consequências são imediatas:
              </p>
              <ul className="space-y-6 mt-10">
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold text-3xl">✕</span>
                  <div className="text-xl"><strong>Multas Elevadas:</strong> Valores que partem de €158 e podem chegar a €638, dependendo da interpretação do oficial.</div>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold text-3xl">✕</span>
                  <div className="text-xl"><strong>Retirada da CNH:</strong> Sua carteira brasileira pode ser recolhida e enviada para o consulado, dificultando sua vida até no Brasil.</div>
                </li>
                <li className="flex gap-4">
                  <span className="text-red-500 font-bold text-3xl">✕</span>
                  <div className="text-xl"><strong>Problemas com Seguro:</strong> Em caso de acidente, se você estiver com a CNH irregular, a seguradora italiana pode se recusar a pagar os danos, deixando o prejuízo todo para você.</div>
                </li>
              </ul>
            </section>

            {/* Como Converter Passo a Passo */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Como converter a CNH brasileira para patente italiana</h2>
              <p>O processo não é automático, mas seguindo estas etapas, você garante sua legalidade:</p>
              <ol className="mt-8 space-y-6">
                <li className="text-xl"><strong>Tradução Juramentada:</strong> Obtenha a tradução oficial da sua CNH definitiva.</li>
                <li className="text-xl"><strong>Certificado de Residência:</strong> Tenha em mãos o documento do Comune que prova quando você se tornou residente.</li>
                <li className="text-xl"><strong>Visita Médica:</strong> Agende uma consulta com um médico autorizado pela Motorizzazione para obter o certificado de aptidão física.</li>
                <li className="text-xl"><strong>Pedido na Motorizzazione:</strong> Pague as taxas (bollettini) e entregue o formulário preenchido.</li>
              </ol>
            </section>

            {/* FAQ Robusto - 20 Itens */}
            <section className="mt-24" id="faq">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Perguntas Frequentes (FAQ)</h2>
              <div className="not-prose mt-16">
                <FAQAccordion items={faqs} />
              </div>
            </section>

            {/* Conclusão Final */}
            <section className="mt-32 rounded-[4rem] bg-[linear-gradient(135deg,#0a1a2f,#07111f)] p-20 text-center text-white shadow-[0_50px_120px_rgba(0,0,0,0.4)]">
              <h2 className="mt-0 font-serif text-6xl text-[#d8a84f]">Dirija com segurança e legalidade na Itália.</h2>
              <p className="mx-auto mt-10 max-w-4xl text-2xl leading-relaxed text-blue-100/80 font-light">
                Não deixe que a burocracia estrague sua experiência na Itália. Seja para uma viagem de férias ou para sua nova vida como residente, a tradução juramentada da sua CNH é o seu passaporte para a liberdade nas estradas. Nossa equipe entrega traduções rápidas, precisas e totalmente aceitas pelas autoridades italianas.
              </p>
              <div className="mt-16 flex flex-col items-center justify-center gap-10">
                <WhatsAppButton className="rounded-full bg-[#d8a84f] px-20 py-10 text-xl font-black uppercase tracking-[0.2em] text-[#0a1a2f] shadow-3xl transition-all hover:scale-105 hover:bg-[#f3cf80]">
                  Solicitar Tradução de CNH Agora
                </WhatsAppButton>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="h-fit space-y-16 lg:sticky lg:top-32">
            
            <div className="rounded-[2.5rem] border border-[#d8a84f]/30 bg-white p-12 shadow-2xl">
              <h3 className="mt-0 font-serif text-3xl text-[#0a1a2f]">Resumo para o Motorista</h3>
              <ul className="mt-10 space-y-8 text-lg text-slate-600">
                <li className="flex items-start gap-6">
                  <span className="text-[#d8a84f]">●</span>
                  <span><strong>Turistas:</strong> CNH + PID ou Tradução Juramentada.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="text-[#d8a84f]">●</span>
                  <span><strong>Residentes:</strong> Limite de 1 ano para dirigir com a brasileira.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="text-[#d8a84f]">●</span>
                  <span><strong>Acordo:</strong> Conversão direta sem provas para cat. A e B.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="text-[#d8a84f]">●</span>
                  <span><strong>Obrigatório:</strong> Tradução Juramentada para conversão.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] bg-[#0a1a2f] p-12 text-white shadow-3xl">
              <h3 className="mt-0 font-serif text-3xl text-[#d8a84f]">Análise de Conversão</h3>
              <p className="mt-8 text-xl text-blue-100/70 leading-relaxed font-light">
                Quer saber se sua CNH está apta para conversão direta pelo novo acordo? Envie uma foto da sua carteira e nós analisamos para você.
              </p>
              <WhatsAppButton className="mt-12 flex w-full items-center justify-center gap-4 rounded-3xl bg-white py-6 text-xl font-bold text-[#0a1a2f] transition-all hover:bg-[#d8a84f] shadow-xl">
                Análise Grátis via WhatsApp
              </WhatsAppButton>
            </div>

            <div className="p-10 text-center border-t border-slate-100">
              <div className="mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full bg-slate-200 border-4 border-[#d8a84f]/20">
                <div className="grid h-full place-items-center text-4xl">🚗</div>
              </div>
              <p className="text-[12px] font-black uppercase tracking-[0.4em] text-slate-400">Consultoria de Mobilidade</p>
              <p className="mt-4 font-serif text-2xl text-[#0a1a2f]">Equipe Tradução Brasil Itália</p>
              <p className="text-sm text-slate-500 italic mt-2 leading-relaxed">Especialistas em Patente di Guida e Código da Estrada Italiano.</p>
            </div>

          </aside>
        </div>
      </div>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 sm:px-8 lg:px-12">
        <h2 className="font-serif text-3xl text-[#0a1a2f]">Veja também</h2>
        <ul className="mt-6 flex flex-col gap-4">
          <li><Link href="/traducao-cnh-brasileira-italia" className="text-lg text-[#d8a84f] underline hover:text-[#0a1a2f] transition-colors">Tradução da CNH brasileira na Itália</Link></li>
          <li><Link href="/traducao-documentos-permesso-di-soggiorno" className="text-lg text-[#d8a84f] underline hover:text-[#0a1a2f] transition-colors">Tradução de documentos brasileiros para permesso di soggiorno</Link></li>
        </ul>
      </section>

      <Footer />
    </main>
  );
}
