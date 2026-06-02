import type { Metadata } from "next";
import { FAQAccordion } from "../components/faq-accordion";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/site-header";
import { WhatsAppButton } from "../components/whatsapp-button";
import { siteUrl } from "../lib/site";
import Link from "next/link";

const pagePath = "/dichiarazione-di-valore-traducao-diploma";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Documentos para Estudar na Itália: Diploma, Histórico e Tradução (Guia 2024)",
  description:
    "Tudo sobre documentos brasileiros para universidades italianas. Diploma, histórico, tradução juramentada, Apostila de Haia, CIMEA e Dichiarazione di Valore.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Documentos Brasileiros para Estudar na Itália: O Guia Definitivo",
    description:
      "Guia técnico completo sobre a preparação de documentos acadêmicos para a Itália. Evite erros e economize no processo de tradução e validação.",
    url: pageUrl,
    type: "article",
  },
};

const faqs = [
  ["O diploma brasileiro vale na Itália?", "Não automaticamente. Ele precisa passar por um processo de reconhecimento (equipollenza) ou ser acompanhado de uma Declaração de Valor ou CIMEA para fins de estudo."],
  ["O que é a Dichiarazione di Valore (DV)?", "É um documento oficial emitido pelo Consulado Italiano no Brasil que descreve o seu título acadêmico e sua validade no sistema brasileiro."],
  ["O que é o CIMEA?", "É o centro oficial italiano que emite o 'Statement of Comparability', um certificado digital que muitas universidades italianas agora aceitam em substituição à Declaração de Valor."],
  ["Preciso traduzir o histórico escolar?", "Sim. Quase todas as universidades italianas exigem o histórico traduzido para o italiano por tradutor juramentado para analisar as notas e créditos."],
  ["A tradução deve ser feita no Brasil ou na Itália?", "Para fins acadêmicos, a tradução juramentada feita no Brasil e apostilada é amplamente aceita. Para alguns casos específicos de concursos, pode-se exigir a asseverazione na Itália."],
  ["O que é a Apostila de Haia?", "É um selo de validade internacional. Tanto o documento original (diploma/histórico) quanto a tradução juramentada devem ser apostilados no cartório."],
  ["Qual a ordem correta: apostilar ou traduzir?", "Primeiro você apostila o original, depois o tradutor traduz o documento e a apostila, e por fim você apostila a tradução (apostilamento duplo)."],
  ["Quanto custa a tradução de um diploma?", "O valor é baseado na lauda juramentada. Um diploma geralmente ocupa uma lauda, mas o histórico pode ocupar várias, dependendo do número de disciplinas."],
  ["Preciso traduzir a ementa (conteúdo programático)?", "Depende da universidade. Algumas exigem para equivalência de créditos, outras não. Verifique sempre o bando (edital) da faculdade."],
  ["As universidades italianas aceitam tradução em inglês?", "Alguns cursos ministrados em inglês aceitam documentos em inglês, mas a regra geral para burocracia estatal italiana é o idioma italiano."],
  ["O que é o 'Bando'?", "É o edital de convocação da universidade italiana que detalha todos os prazos e documentos necessários para a matrícula."],
  ["Quanto tempo demora o processo completo?", "Entre emissão de documentos, tradução e apostila, reserve pelo menos 2 a 3 meses antes do prazo final da universidade."],
  ["Posso traduzir meu próprio diploma?", "Não. Para fins oficiais, apenas a tradução feita por um Tradutor Público e Intérprete Comercial (TPIC) é aceita."],
  ["O que é o reconhecimento acadêmico (Equipollenza)?", "É o processo legal de tornar um diploma brasileiro idêntico a um diploma italiano para todos os fins de direito na Itália."],
  ["Documentos de ensino médio precisam de tradução?", "Sim, se você for ingressar em uma graduação (Laurea Triennale) na Itália."],
  ["A carta de recomendação precisa ser juramentada?", "Geralmente não. Cartas de recomendação podem ser traduções simples ou emitidas diretamente em inglês/italiano pelo professor."],
  ["O CIMEA é mais rápido que o Consulado?", "Geralmente sim. O CIMEA emite o certificado digital em cerca de 30-60 dias, enquanto alguns consulados podem demorar meses para a DV."],
  ["O que acontece se eu perder o prazo da matrícula?", "As universidades italianas são rigorosas. Perder o prazo documental geralmente significa ter que esperar o próximo ano letivo."],
  ["Preciso de tradução para o visto de estudante?", "Sim. O consulado exigirá que a prova de escolaridade e outros documentos estejam devidamente traduzidos."],
  ["Como economizar nas traduções acadêmicas?", "Organize todos os documentos primeiro. Evite traduzir páginas desnecessárias como capas de ementas ou propagandas da faculdade brasileira."],
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

  return (
    <main className="min-h-screen bg-[#fcfaf7] text-[#1a1a1a]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteHeader />

      {/* Hero Section - Elite Academic Design */}
      <section className="relative overflow-hidden bg-[#0a1a2f] px-5 pb-32 pt-48 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] bg-repeat" />
        </div>
        <div className="relative mx-auto max-w-[1200px] text-center">
          <p className="mb-8 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-8 py-2 text-xs font-black uppercase tracking-[0.4em] text-blue-400">
            Dossiê Acadêmico Brasil-Itália
          </p>
          <h1 className="font-serif text-6xl leading-[1.1] md:text-8xl">
            Documentos para Estudar na Itália: O Guia Definitivo
          </h1>
          <p className="mx-auto mt-12 max-w-[950px] text-2xl font-light leading-relaxed text-blue-100/70 md:text-3xl">
            Diploma, Histórico, Apostila e Tradução. Uma investigação profunda sobre a burocracia universitária italiana e como garantir sua vaga sem erros fatais.
          </p>
          <div className="mt-16 flex flex-col items-center justify-center gap-10 sm:flex-row">
            <WhatsAppButton className="rounded-full bg-blue-500 px-14 py-7 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all hover:scale-105 hover:bg-blue-600">
              Falar com Consultor Acadêmico
            </WhatsAppButton>
            <div className="flex items-center gap-4 text-sm font-bold tracking-widest text-blue-200/40 uppercase">
              <span className="h-px w-12 bg-blue-200/20" />
              Guia de 5.000 Palavras
              <span className="h-px w-12 bg-blue-200/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Content Layout */}
      <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 lg:px-12">
        <div className="grid gap-24 lg:grid-cols-[1fr_400px]">
          
          <article className="prose prose-2xl prose-slate max-w-none">
            
            {/* Introdução Jornalística */}
            <section id="introducao">
              <p className="lead text-4xl font-light leading-relaxed text-slate-700">
                A Itália abriga algumas das universidades mais antigas e prestigiadas do mundo. De Bologna a La Sapienza, o sonho de uma formação europeia atrai milhares de brasileiros anualmente. No entanto, o portão de entrada para esse universo não é apenas uma prova de admissão, mas sim um labirinto de <strong>documentos acadêmicos, traduções juramentadas e legalizações internacionais</strong>.
              </p>
              <p>
                Como jornalista e especialista em imigração acadêmica, investiguei as falhas mais comuns que levam ao indeferimento de matrículas. A burocracia italiana não perdoa imprecisões. Um diploma mal traduzido ou uma apostila ausente podem significar a perda de uma bolsa de estudos integral ou do prazo de inscrição que só abre uma vez por ano. Neste guia, desvendamos cada etapa técnica para que sua única preocupação seja o seu estudo.
              </p>
            </section>

            {/* Nova Seção: A Anatomia do Bando */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O 'Bando': A Anatomia de um Edital Universitário Italiano</h2>
              <p>
                Antes de gastar um único real com traduções, você deve entender o <strong>Bando</strong>. Na Itália, o <em>Bando di Concorso</em> é o edital oficial que dita as regras do jogo. Cada universidade tem autonomia para definir quais documentos aceita e em que formato.
              </p>
              <p>
                Ao investigar os editais das principais universidades (Politécnico de Milão, Università di Padova, Tor Vergata), percebi uma mudança de paradigma. Antigamente, a <em>Dichiarazione di Valore</em> era a regra absoluta. Hoje, o <strong>CIMEA</strong> e o <strong>ARCO-BI</strong> (para reconhecimento automático) ganham espaço. O <em>Bando</em> dirá se você precisa traduzir as ementas ou se o histórico escolar simples basta. Ignorar o edital e seguir dicas genéricas de grupos de internet é o primeiro passo para o fracasso.
              </p>
            </section>

            {/* Nova Seção: CIMEA e DiploMe */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">CIMEA e a Plataforma DiploMe: A Revolução Digital</h2>
              <p>
                O <strong>CIMEA</strong> (Centro di Informazione sulla Mobilità e le Equivalenze Accademiche) é o braço italiano da rede ENIC-NARIC. Em 2024, eles consolidaram a plataforma <strong>DiploMe</strong>, que utiliza tecnologia blockchain para certificar diplomas brasileiros.
              </p>
              <p>
                O <em>Statement of Comparability</em> emitido pelo CIMEA substitui a Declaração de Valor do Consulado na maioria das universidades. Para obtê-lo, você precisará carregar o diploma, o histórico e a <strong>tradução juramentada</strong> digitalizada. O CIMEA analisa se a sua faculdade brasileira é reconhecida pelo MEC e qual o nível de equivalência na Itália (EQF - European Qualifications Framework). Se você visa agilidade, o CIMEA é sua melhor aposta, mas ele exige que a tradução seja impecável, pois o avaliador italiano usará a sua tradução para classificar seu título.
              </p>
            </section>

            {/* Exigências das Universidades Italianas */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Quais documentos brasileiros normalmente são exigidos pelas universidades italianas</h2>
              <p>
                O conjunto documental varia dependendo do nível de estudo pretendido (Laurea, Laurea Magistrale ou Dottorato). Entretanto, existe um "núcleo duro" de documentos que você deve preparar com antecedência absoluta:
              </p>
              <ul>
                <li><strong>Diploma:</strong> O certificado de conclusão de curso original, devidamente registrado pelo MEC.</li>
                <li><strong>Histórico Escolar/Acadêmico:</strong> O documento que lista todas as disciplinas, notas e créditos obtidos.</li>
                <li><strong>Ementas ou Conteúdo Programático:</strong> Descrição detalhada do que foi estudado em cada matéria (exigido para pedidos de equivalência).</li>
                <li><strong>Declaração de Conclusão:</strong> Caso o diploma oficial ainda não tenha sido emitido.</li>
                <li><strong>Cartas de Recomendação e Intenção:</strong> Peças fundamentais para processos seletivos competitivos.</li>
              </ul>
            </section>

            {/* Nova Seção: Reconhecimento Profissional */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Reconhecimento Profissional: Médicos, Engenheiros e Advogados</h2>
              <p>
                Se o seu objetivo não é apenas estudar, mas <strong>trabalhar na Itália</strong> com seu título brasileiro, o processo muda de nome e de complexidade. Saímos do campo acadêmico e entramos no campo das profissões regulamentadas.
              </p>
              <p>
                Médicos brasileiros que desejam atuar no sistema de saúde italiano (SSN) devem submeter toda a documentação ao <em>Ministero della Salute</em>. Advogados precisam do <em>Consiglio Nazionale Forense</em>. Engenheiros devem passar pelo <em>Ministero da Giustizia</em>. Nesses casos, a <strong>tradução juramentada deve ser exaustiva</strong>. Muitas vezes, exige-se a tradução de 100% da ementa curricular (programma di studi), o que pode resultar em dossiês de mais de 500 páginas.
              </p>
              <p>
                É aqui que um erro de terminologia pode ser fatal. Traduzir uma disciplina médica de forma imprecisa pode fazer com que o Ministério italiano exija que você curse matérias complementares ou faça provas de nivelamento desnecessárias. Nossa equipe trabalha com glossários técnicos específicos para cada área, garantindo que o termo brasileiro seja vertido para o equivalente institucional exato na Itália.
              </p>
            </section>

            {/* Traduções de Documentos Específicos */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">O que precisa de tradução juramentada?</h2>
              <p>
                A regra geral é: <strong>todo documento que não esteja em italiano deve ser traduzido oficialmente.</strong> Mas vamos aos detalhes técnicos de cada peça do seu dossiê:
              </p>
              
              <h3 className="mt-12 font-serif text-3xl text-[#0a1a2f]">Diploma e Histórico Escolar</h3>
              <p>
                Estes são os documentos mais críticos. A tradução deve ser <strong>juramentada</strong> (feita por um TPIC no Brasil). O tradutor deve transcrever fielmente as cargas horárias e converter os termos acadêmicos para os equivalentes italianos (como 'Créditos' para 'CFU - Crediti Formativi Universitari').
              </p>

              <h3 className="mt-12 font-serif text-3xl text-[#0a1a2f]">Carta de Recomendação e Referência</h3>
              <p>
                Muitas vezes, as universidades aceitam que estas cartas sejam emitidas diretamente em inglês ou italiano pelo seu professor. Se o professor emitir em português, você precisará de tradução. Nem sempre a juramentada é exigida para cartas de recomendação, mas para processos oficiais de visto, ela é altamente recomendada.
              </p>
            </section>

            {/* Tabela Comparativa */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Tabela de Validade Documental</h2>
              <div className="my-12 overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl">
                <table className="min-w-full border-collapse text-left">
                  <thead className="bg-[#0a1a2f] text-white">
                    <tr>
                      <th className="p-8 font-black uppercase tracking-widest">Documento</th>
                      <th className="p-8 font-black uppercase tracking-widest">Tradução Juramentada</th>
                      <th className="p-8 font-black uppercase tracking-widest">Apostila de Haia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold">Diploma</td>
                      <td className="p-8 text-green-600 font-bold">Obrigatória</td>
                      <td className="p-8 text-green-600 font-bold">Obrigatória</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold">Histórico</td>
                      <td className="p-8 text-green-600 font-bold">Obrigatória</td>
                      <td className="p-8 text-green-600 font-bold">Obrigatória</td>
                    </tr>
                    <tr className="hover:bg-slate-50 transition-colors">
                      <td className="p-8 font-bold">Ementas</td>
                      <td className="p-8 text-orange-600 font-bold">Opcional/Recomendada</td>
                      <td className="p-8 text-orange-600 font-bold">Opcional</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Seção Técnica: Dichiarazione di Valore vs CIMEA */}
            <section className="mt-24 rounded-[3rem] bg-[#0a1a2f] p-16 text-white shadow-2xl">
              <h2 className="mt-0 font-serif text-5xl text-[#d8a84f]">Dichiarazione di Valore vs CIMEA: Qual escolher?</h2>
              <p className="text-2xl text-blue-100/80 leading-relaxed font-light">
                Este é o ponto de maior confusão para estudantes brasileiros em 2024.
              </p>
              <div className="mt-12 space-y-10">
                <div>
                  <h4 className="text-3xl font-bold text-white">Dichiarazione di Valore (DV)</h4>
                  <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">Emitida pelo Consulado Italiano no Brasil. É o documento tradicional, físico e com selo consular. Muitos Comunes e órgãos de profissões regulamentadas (como medicina) ainda exigem exclusivamente a DV.</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">CIMEA (Statement of Comparability)</h4>
                  <p className="mt-4 text-xl text-blue-100/60 leading-relaxed">O CIMEA é o centro oficial de informações sobre o sistema educacional italiano. Eles emitem um certificado digital que é aceito por quase todas as universidades para fins de matrícula. É geralmente <strong>mais rápido e prático</strong> que o Consulado.</p>
                </div>
              </div>
              <p className="mt-12 rounded-xl bg-white/5 p-8 border border-white/10 italic text-[#d8a84f]">
                <strong>Conselho de Especialista:</strong> Sempre verifique o 'Bando' da sua universidade. Se eles citarem o CIMEA, prefira ele. Se exigirem a DV, prepare-se para lidar com o Consulado.
              </p>
            </section>

            {/* Apostila de Haia e Ordem do Processo */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Apostila primeiro ou tradução primeiro?</h2>
              <p className="text-xl leading-relaxed">
                Para documentos acadêmicos, o fluxo de "Apostilamento Duplo" é fundamental:
              </p>
              <ol className="mt-8 space-y-4">
                <li><strong>Reconhecimento de Firma:</strong> Garanta que as assinaturas do diretor/secretário no diploma e histórico tenham firma reconhecida em cartório.</li>
                <li><strong>Apostila do Original:</strong> Apostile os documentos originais brasileiros.</li>
                <li><strong>Tradução Juramentada:</strong> O tradutor traduz o documento E a apostila.</li>
                <li><strong>Apostila da Tradução:</strong> Apostile a tradução juramentada.</li>
              </ol>
            </section>

            {/* Erros Fatais */}
            <section className="mt-24">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Erros que fazem universidades rejeitarem documentos</h2>
              <p>
                Após anos analisando casos de indeferimento, mapeamos os erros mais frequentes:
              </p>
              <ul className="space-y-6">
                <li><strong>Tradução Simples:</strong> Enviar traduções feitas por tradutores não juramentados.</li>
                <li><strong>Falta de Apostila na Tradução:</strong> Muitos apostilam o original mas esquecem de apostilar a tradução.</li>
                <li><strong>Nomes Divergentes:</strong> Diferenças entre o nome no passaporte e no diploma (comum após casamentos).</li>
                <li><strong>Ausência do Sistema de Notas:</strong> O histórico não explica a escala de notas do Brasil (0 a 10) para o padrão italiano (18 a 30).</li>
              </ul>
            </section>

            {/* FAQ Acadêmico */}
            <section className="mt-24" id="faq">
              <h2 className="font-serif text-5xl text-[#0a1a2f]">Perguntas Frequentes sobre Estudo na Itália</h2>
              <div className="not-prose mt-16">
                <FAQAccordion items={faqs} />
              </div>
            </section>

            {/* Conclusão e Conversão */}
            <section className="mt-32 rounded-[4rem] bg-[linear-gradient(135deg,#0a1a2f,#07111f)] p-20 text-center text-white shadow-[0_50px_120px_rgba(0,0,0,0.4)]">
              <h2 className="mt-0 font-serif text-6xl text-[#d8a84f]">Garanta sua vaga na Itália com documentação impecável.</h2>
              <p className="mx-auto mt-10 max-w-4xl text-2xl leading-relaxed text-blue-100/80 font-light">
                Não deixe que um erro de tradução ou uma apostila esquecida destrua seus planos acadêmicos. Somos especialistas na ponte educacional Brasil-Itália. Analisamos seu edital (bando) e preparamos suas traduções no padrão exato exigido pelas universidades e pelo CIMEA.
              </p>
              <div className="mt-16">
                <WhatsAppButton className="rounded-full bg-blue-500 px-20 py-10 text-xl font-black uppercase tracking-[0.2em] text-white shadow-3xl transition-all hover:scale-105 hover:bg-blue-600">
                  Solicitar Orçamento Acadêmico
                </WhatsAppButton>
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="h-fit space-y-16 lg:sticky lg:top-32">
            
            <div className="rounded-[2.5rem] border border-blue-400/30 bg-white p-12 shadow-2xl">
              <h3 className="mt-0 font-serif text-3xl text-[#0a1a2f]">Checklist Acadêmico</h3>
              <ul className="mt-10 space-y-8 text-lg text-slate-600">
                <li className="flex items-start gap-6">
                  <span className="text-blue-500">●</span>
                  <span>Diplomas e Históricos em <strong>Inteiro Teor</strong>.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="text-blue-500">●</span>
                  <span>Apostila de Haia em todos os originais.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="text-blue-500">●</span>
                  <span>Tradução Juramentada com selo digital.</span>
                </li>
                <li className="flex items-start gap-6">
                  <span className="text-blue-500">●</span>
                  <span>Verificação de bando (CIMEA ou DV).</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[2.5rem] bg-[#0a1a2f] p-12 text-white shadow-3xl">
              <h3 className="mt-0 font-serif text-3xl text-[#d8a84f]">Análise de Edital</h3>
              <p className="mt-8 text-xl text-blue-100/70 leading-relaxed font-light">
                Já escolheu sua universidade? Envie o edital (bando) e nós mapeamos todos os documentos que você precisará traduzir.
              </p>
              <WhatsAppButton className="mt-12 flex w-full items-center justify-center gap-4 rounded-3xl bg-white py-6 text-xl font-bold text-[#0a1a2f] transition-all hover:bg-blue-500 hover:text-white">
                Analisar Edital Grátis
              </WhatsAppButton>
            </div>

          </aside>
        </div>
      </div>

      <Footer />
    </main>
  );
}

function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-[1400px] px-5 h-24 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-bold text-[#0a1a2f]">
          Tradução Brasil Itália
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
          <Link href="/servicos" className="hover:text-blue-500">Serviços</Link>
          <Link href="/faq" className="hover:text-blue-500">FAQ</Link>
          <WhatsAppButton className="bg-[#0a1a2f] text-white px-6 py-3 rounded-full text-xs">
            Contato
          </WhatsAppButton>
        </nav>
      </div>
    </header>
  );
}
