import type { Metadata } from "next";
import { FAQAccordion } from "../components/faq-accordion";
import { Footer } from "../components/footer";
import { SiteHeader } from "../components/site-header";
import { WhatsAppButton } from "../components/whatsapp-button";
import { siteUrl } from "../lib/site";

const pagePath = "/traducao-juramentada-para-cidadania-italiana";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Tradução Juramentada para Cidadania Italiana | Brasil Itália",
  description:
    "Precisa de tradução juramentada para cidadania italiana? Traduzimos certidões e documentos brasileiros para uso oficial na Itália, com atendimento online.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Tradução Juramentada para Cidadania Italiana | Brasil Itália",
    description:
      "Tradução oficial de certidões e documentos brasileiros para cidadania italiana, com atendimento online em português.",
    url: pageUrl,
    type: "article",
  },
};

const needItems = [
  "Vai iniciar, complementar ou concluir um processo de cidadania italiana.",
  "Precisa apresentar certidões brasileiras a Comune, Tribunal, advogado ou outro órgão italiano.",
  "Precisa traduzir certidão de nascimento, casamento, óbito, divórcio, CNN ou outros documentos brasileiros.",
];

const documentItems = [
  "Certidão de nascimento",
  "Certidão de casamento",
  "Certidão de óbito",
  "Certidão de inteiro teor",
  "Divórcio / sentença",
  "CNN / CPN quando aplicável",
];

const steps = [
  ["Envio pelo WhatsApp", "Você envia foto ou PDF do documento e informa onde ele será apresentado."],
  ["Análise inicial", "Verificamos o tipo de documento, idioma, finalidade e pontos que podem exigir atenção."],
  ["Orçamento e prazo", "Você recebe uma orientação clara sobre valores, prazo estimado e próximos passos."],
  ["Tradução e orientação", "A tradução é preparada para o uso indicado, com orientação sobre apostila e entrega quando aplicável."],
];

const differentials = [
  ["Atendimento em português", "Comunicação clara para brasileiros que precisam resolver documentos sem ruído técnico."],
  ["Foco Brasil-Itália", "Experiência com documentos brasileiros usados em processos ligados à cidadania italiana."],
  ["Processo online", "Envio inicial por WhatsApp, análise remota e orientação sobre o caminho mais adequado."],
  ["Clareza sobre uso oficial", "Explicamos o que observar antes de apresentar documentos a Comune, Tribunal ou outro órgão."],
];

const faqs = [
  [
    "A tradução juramentada é obrigatória para cidadania italiana?",
    "Em muitos processos de cidadania italiana, documentos brasileiros precisam ser traduzidos oficialmente para o italiano. A exigência exata depende do tipo de processo, do órgão que receberá os documentos e das instruções aplicáveis ao seu caso.",
  ],
  [
    "Quais certidões precisam ser traduzidas?",
    "As mais comuns são certidões de nascimento, casamento e óbito. Também podem entrar certidões de inteiro teor, documentos de divórcio, sentenças, CNN ou CPN, conforme a linha familiar e a documentação solicitada.",
  ],
  [
    "A tradução pode ser feita à distância?",
    "A análise inicial pode ser feita online pelo WhatsApp, com envio de foto ou PDF. Depois da análise, orientamos sobre formato, entrega e eventuais cuidados para o uso do documento na Itália.",
  ],
  [
    "Preciso apostilar antes ou depois?",
    "Depende do documento, do procedimento e do órgão destinatário. Documentos brasileiros usados na Itália normalmente exigem atenção à Apostila de Haia e à tradução oficial, por isso vale confirmar a ordem antes de iniciar.",
  ],
  [
    "A tradução serve para apresentar na Itália?",
    "A tradução é preparada considerando o uso oficial indicado, mas a aceitação final sempre depende do órgão que analisará o documento. Por isso perguntamos onde o documento será apresentado antes de orientar o procedimento.",
  ],
] as const;

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-7 grid gap-4">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-[8px] border border-[#d8a84f]/18 bg-[#020817]/64 p-4 text-[#f8f5ee]/84">
          <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[#d8a84f] text-xs font-black text-[#020817]">
            ✓
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

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
    <main className="min-h-screen bg-[#020817] text-[#f8f5ee]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteHeader />

      <section className="relative overflow-hidden border-b border-[#d8a84f]/24 px-5 pb-16 pt-36 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(216,168,79,0.20),transparent_26%),radial-gradient(circle_at_12%_82%,rgba(55,87,129,0.18),transparent_34%),linear-gradient(112deg,#020817_0%,#07111f_50%,#0b1628_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#020817] to-transparent" />
        <div className="relative mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">
              <span className="h-px w-8 bg-[#d8a84f]" />
              Cidadania italiana
            </p>
            <h1 className="mt-6 max-w-[900px] font-serif text-5xl leading-[1.02] tracking-normal text-[#f8f5ee] sm:text-6xl lg:text-7xl">
              Tradução Juramentada para Cidadania Italiana
            </h1>
            <p className="mt-7 max-w-[790px] text-xl leading-9 text-[#f8f5ee]/82">
              Tradução oficial de certidões e documentos brasileiros para processos de cidadania italiana, com atendimento online em toda a Itália.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton className="rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#d8a84f_48%,#ad711f)] px-7 py-5 text-center text-sm font-black uppercase tracking-[0.08em] text-[#020817] shadow-[0_18px_48px_rgba(216,168,79,0.28)]">
                Solicitar orçamento no WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <aside className="rounded-[8px] border border-[#d8a84f]/35 bg-[#07111f]/78 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8a84f]">Análise inicial</p>
            <h2 className="mt-3 font-serif text-3xl leading-9 text-[#f8f5ee]">Antes de traduzir, confirme o uso do documento.</h2>
            <p className="mt-4 leading-7 text-[#f8f5ee]/72">
              Envie o documento e diga se ele será usado em Comune, Tribunal, consulado, advogado ou outro órgão. Isso ajuda a orientar tradução, apostila e próximos passos.
            </p>
          </aside>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[1fr_320px]">
          <article className="rounded-[8px] border border-[#d8a84f]/32 bg-[#07111f]/76 p-7 sm:p-10">
            <section className="border-b border-[#d8a84f]/18 pb-10">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Você precisa dessa tradução se...</h2>
              <p className="mt-5 text-lg leading-8 text-[#f8f5ee]/74">
                A tradução juramentada para cidadania italiana costuma entrar quando documentos emitidos no Brasil precisam ser apresentados em italiano para análise formal. Isso é comum em processos administrativos, judiciais ou em etapas de complementação documental.
              </p>
              <CheckList items={needItems} />
            </section>

            <section className="border-b border-[#d8a84f]/18 py-10">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Quais documentos brasileiros podem precisar de tradução</h2>
              <p className="mt-5 text-lg leading-8 text-[#f8f5ee]/74">
                Em processos de cidadania, a documentação varia conforme a via escolhida, a árvore familiar e as exigências do órgão responsável. Ainda assim, a tradução de certidão para cidadania italiana geralmente envolve documentos de registro civil e eventuais documentos complementares.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {documentItems.map((item) => (
                  <div key={item} className="rounded-[8px] border border-[#d8a84f]/20 bg-[#020817]/66 p-5">
                    <h3 className="font-serif text-2xl text-[#f8f5ee]">{item}</h3>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-lg leading-8 text-[#f8f5ee]/74">
                Também pode ser necessário traduzir documentos brasileiros para cidadania italiana que expliquem retificações, averbações, mudança de nome, divórcio ou situações específicas da família.
              </p>
            </section>

            <section className="border-b border-[#d8a84f]/18 py-10">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Como funciona o atendimento online</h2>
              <p className="mt-5 text-lg leading-8 text-[#f8f5ee]/74">
                O atendimento começa de forma simples, pelo WhatsApp. A ideia é entender o documento, a finalidade e o país de uso antes de iniciar a tradução juramentada português italiano.
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {steps.map(([title, text], index) => (
                  <div key={title} className="rounded-[8px] border border-[#d8a84f]/24 bg-[#020817]/66 p-6">
                    <span className="text-sm font-black uppercase tracking-[0.18em] text-[#d8a84f]">Etapa {index + 1}</span>
                    <h3 className="mt-3 font-serif text-2xl text-[#f8f5ee]">{title}</h3>
                    <p className="mt-3 leading-7 text-[#f8f5ee]/72">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="border-b border-[#d8a84f]/18 py-10">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Tradução juramentada e Apostila de Haia</h2>
              <div className="mt-5 grid gap-5 text-lg leading-8 text-[#f8f5ee]/74">
                <p>
                  Tradução e apostila não são a mesma coisa. A tradução transforma o conteúdo do documento para o italiano. A Apostila de Haia confirma a origem formal do documento para uso internacional entre países participantes da convenção.
                </p>
                <p>
                  Em documentos brasileiros usados na Itália, normalmente é preciso olhar com cuidado para esses dois pontos: se o documento precisa estar apostilado, se precisa de tradução oficial e qual ordem faz sentido para o procedimento. Essa resposta pode variar conforme Comune, Tribunal, advogado, consulado ou órgão destinatário.
                </p>
                <p>
                  Por isso, antes de prometer que uma tradução aceita na Itália para cidadania servirá em qualquer situação, o mais responsável é analisar onde o documento será apresentado e quais instruções foram recebidas.
                </p>
              </div>
            </section>

            <section className="border-b border-[#d8a84f]/18 py-10">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Diferenciais para quem está organizando a cidadania</h2>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {differentials.map(([title, text]) => (
                  <div key={title} className="rounded-[8px] border border-[#d8a84f]/24 bg-[#020817]/66 p-6">
                    <h3 className="font-serif text-2xl text-[#f8f5ee]">{title}</h3>
                    <p className="mt-3 leading-7 text-[#f8f5ee]/72">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="py-10">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Perguntas frequentes sobre tradução juramentada para cidadania italiana</h2>
              <p className="mt-5 text-lg leading-8 text-[#f8f5ee]/74">
                Reunimos as dúvidas mais comuns de quem precisa traduzir certidão de nascimento, casamento e óbito para italiano e preparar documentos para uso oficial.
              </p>
              <div className="mt-7">
                <FAQAccordion items={faqs} />
              </div>
            </section>

            <section className="rounded-[8px] border border-[#d8a84f]/40 bg-[linear-gradient(135deg,#0b1628,#07111f)] p-7 sm:p-9">
              <h2 className="font-serif text-4xl text-[#f8f5ee]">Envie seu documento para análise</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#f8f5ee]/76">
                Se você precisa de tradução juramentada para cidadania italiana, envie foto ou PDF do documento pelo WhatsApp. Informe também onde o documento será apresentado para receber uma orientação mais precisa.
              </p>
              <WhatsAppButton className="mt-7 inline-block rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#d8a84f_48%,#ad711f)] px-8 py-5 text-center text-sm font-black uppercase tracking-[0.08em] text-[#020817]">
                Solicitar orçamento no WhatsApp
              </WhatsAppButton>
            </section>
          </article>

          <aside className="h-fit rounded-[8px] border border-[#d8a84f]/44 bg-[#07111f]/78 p-6 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8a84f]">WhatsApp</p>
            <h2 className="mt-3 font-serif text-3xl leading-9 text-[#f8f5ee]">Quer saber se sua certidão precisa de tradução?</h2>
            <p className="mt-4 leading-7 text-[#f8f5ee]/72">
              Envie o documento e explique em qual etapa da cidadania italiana você está. A análise inicial ajuda a evitar retrabalho.
            </p>
            <WhatsAppButton className="mt-6 block rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#d8a84f_48%,#ad711f)] px-5 py-4 text-center text-sm font-black uppercase tracking-[0.08em] text-[#020817]">
              Chamar no WhatsApp
            </WhatsAppButton>
          </aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}
