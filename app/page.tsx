import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "./components/cta-section";
import { FAQAccordion } from "./components/faq-accordion";
import { Footer } from "./components/footer";
import { HeroVideo } from "./components/hero-video";
import { SectionTitle } from "./components/section-title";
import { ServiceCard } from "./components/service-card";
import { SiteHeader } from "./components/site-header";
import { Testimonials } from "./components/testimonials";
import { WhatsAppButton } from "./components/whatsapp-button";
import { faqItems, serviceCards } from "./lib/content";
import { siteUrl } from "./lib/site";

export const metadata: Metadata = {
  title: "Tradução Juramentada Brasil ↔ Itália | Atendimento em Português",
  description:
    "Tradução juramentada de qualquer documento — CNH, diplomas, certidões, cidadania. Aceita em toda a Itália. Orientação e orçamento rápido pelo WhatsApp.",
  alternates: {
    canonical: "/",
  },
};

const serviceBar = [
  ["▧", "Tradução juramentada"],
  ["♙", "Apostilamento (Apostila de Haia)"],
  ["◷", "Entrega rápida"],
  ["☏", "Suporte direto"],
  ["◎", "Atendimento em toda a Itália e exterior"],
];

const steps = [
  ["Você envia no WhatsApp", "Foto ou PDF do documento."],
  ["Traduzo com validade juramentada", "Tradução juramentada precisa para finalidade oficial."],
  ["Fazemos o apostilamento, quando necessário", "Orientação sobre Apostila de Haia."],
  ["Você recebe pronto para usar", "Entrega digital e/ou física."],
];

const needs = [
  "Cidadania italiana",
  "Permesso di soggiorno",
  "Casamento / divórcio",
  "Diplomas e certificados",
  "Certidões do Brasil",
  "Documentos italianos para uso no exterior",
  "Procurações",
  "Documentos escolares e acadêmicos",
];

const reasons = [
  "Atendimento em português",
  "Clareza sobre os documentos necessários",
  "Suporte do início ao fim",
  "Rapidez na análise",
  "Preço justo e fechado antes de começar",
  "Atendimento em toda a Itália",
];

const articles = [
  {
    title: "Tradução juramentada para cidadania italiana",
    href: "/traducao-juramentada-para-cidadania-italiana",
    text: "Orientação para certidões brasileiras, documentos familiares, tradução oficial e cuidados antes de apresentar documentos na Itália.",
  },
  {
    title: "Tradução juramentada português para italiano: quando precisa e como fazer na Itália",
    href: "/traducao-juramentada-italiano",
    text: "Guia para documentos brasileiros usados perante comunes, universidades, imigração e órgãos oficiais italianos.",
  },
  {
    title: "Como apostilar documento italiano na Itália para uso no Brasil e exterior",
    href: "/apostilar-documento-italiano-na-italia",
    text: "Entenda quando a Apostila de Haia é necessária e como ela se relaciona com traduções oficiais.",
  },
  {
    title: "Tradução de CNH para dirigir na Itália: o que muda com o acordo Brasil–Itália",
    href: "/traducao-cnh-dirigir-na-italia",
    text: "CNH brasileira na Itália, conversão para a patente di guida e o papel da tradução juramentada — explicado de forma clara.",
  },
  {
    title: "Dichiarazione di Valore: como traduzir e validar seu diploma brasileiro na Itália",
    href: "/dichiarazione-di-valore-traducao-diploma",
    text: "Estudar ou exercer profissão na Itália com diploma do Brasil — o passo a passo da tradução juramentada e da Declaração de Valor.",
  },
  {
    title: "Reforma da cidadania italiana (Lei 74/2025): o que muda nos seus documentos",
    href: "/reforma-cidadania-italiana-documentos",
    text: "O que a nova lei e a decisão da Corte Constitucional significam na prática — e por que a tradução das suas certidões ficou ainda mais decisiva.",
  },
  {
    title: "Tradução juramentada de certidão de nascimento, casamento e óbito",
    href: "/traducao-juramentada-certidoes",
    text: "Quando você precisa, como funciona e os erros que fazem o consumo recusar a sua certidão traduzida.",
  },
  {
    title: "Documentos e traduções para o permesso di soggiorno",
    href: "/documentos-traducao-permesso-di-soggiorno",
    text: "Quais documentos brasileiros precisam de tradução juramentada para pedir e renovar o permesso na Itália.",
  },
];

function ServiceBar() {
  return (
    <section className="border-y border-[#c99a45]/25 bg-[#03101c]">
      <div className="mx-auto grid max-w-[1480px] gap-0 px-5 sm:px-8 lg:grid-cols-5 lg:px-12">
        {serviceBar.map(([icon, label]) => (
          <div key={label} className="flex items-center gap-5 border-b border-[#c99a45]/20 py-6 lg:border-b-0 lg:border-r lg:last:border-r-0">
            <span className="grid size-12 shrink-0 place-items-center text-4xl text-[#d9aa52]">{icon}</span>
            <span className="font-serif text-lg leading-6 text-white">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessAndNeeds() {
  return (
    <section id="como-funciona" className="bg-[#020912] px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1480px] gap-9 xl:grid-cols-[1.45fr_0.95fr]">
        <div>
          <h2 className="text-center font-serif text-xl uppercase tracking-[0.06em] text-white">
            Como funciona (é simples):
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-4">
            {steps.map(([title, text], index) => (
              <article key={title} className="relative rounded-[8px] border border-[#c99a45]/55 bg-[#06111d] p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <span className="absolute left-5 top-4 grid size-8 place-items-center rounded-full bg-[#d6a64f] font-serif text-lg font-bold text-[#07101b]">
                  {index + 1}
                </span>
                <div className="mx-auto mb-5 mt-2 grid size-12 place-items-center text-4xl text-white">
                  {["☏", "▤", "♙", "✓"][index]}
                </div>
                <h3 className="font-serif text-xl leading-6 text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/75">{index === 3 ? "Entrega digital e/ou física, conforme o caso." : text}</p>
              </article>
            ))}
          </div>
        </div>

        <aside id="cidadania" className="rounded-[8px] border border-[#c99a45]/60 bg-[#06111d] p-7 shadow-[0_24px_70px_rgba(0,0,0,0.28)]">
          <h2 className="font-serif text-xl uppercase tracking-[0.08em] text-white">
            Para que você precisa?
          </h2>
          <div className="mt-6 grid gap-3">
            {needs.map((item) => (
              <div key={item} className="flex gap-3 text-white/88">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-[#d6a64f] text-xs font-black text-[#06111d]">
                  ✓
                </span>
                <span className="leading-6">{item}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#020817] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <SectionTitle eyebrow="Serviços" title="Tradução juramentada e suporte documental" text="Tradução juramentada para documentos brasileiros usados em processos oficiais na Itália — CNH, certidões, diplomas, cidadania e mais." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {serviceCards.map(([title, text]) => (
            <ServiceCard key={title} title={title} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="bg-[#07111f] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <SectionTitle
          eyebrow="Por que escolher este atendimento"
          title="Você não está comprando uma tradução. Está comprando a tranquilidade de não recomeçar o processo."
          text="Documento traduzido errado significa meses perdidos, taxa paga de novo e prazo estourado. Eu confiro a finalidade antes de traduzir e te aviso se algo está faltando — em português, sem juridiquês."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-[8px] border border-[#d8a84f]/30 bg-[#020817]/70 p-5 text-[#f8f5ee]">
              <span className="text-[#d8a84f]">✓</span>
              <p className="mt-3 font-serif text-xl">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-[#020817] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[8px] border border-[#d8a84f]/34 bg-[#07111f]/72 p-8 md:grid-cols-[0.8fr_1.2fr] md:p-10">
        <SectionTitle align="left" eyebrow="Quem somos" title="Especialistas em tradução juramentada Brasil ↔ Itália" />
        <div className="space-y-5 text-lg leading-8 text-[#f8f5ee]/76">
          <p>Somos um serviço especializado em tradução juramentada para a Itália — e orientação documental para brasileiros na Itália, brasileiros no Brasil e pessoas que precisam usar documentos entre Brasil, Itália e exterior.</p>
          <p>Nosso foco é oferecer um atendimento claro, rápido e seguro, evitando que o cliente perca tempo com exigências incorretas, documentos incompletos ou traduções inadequadas para a finalidade desejada.</p>
          <Link href="/quem-somos" className="inline-block text-sm font-bold uppercase tracking-[0.12em] text-[#d8a84f]">Conhecer o serviço</Link>
        </div>
      </div>
    </section>
  );
}

function HomeFAQ() {
  return (
    <section className="bg-[#07111f] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[980px]">
        <SectionTitle eyebrow="Perguntas frequentes" title="Dúvidas comuns antes de enviar documentos" />
        <div className="mt-10">
          <FAQAccordion items={faqItems.slice(0, 6)} />
        </div>
      </div>
    </section>
  );
}

function Articles() {
  return (
    <section id="artigos" className="border-t border-[#c99a45]/20 bg-[#06101b] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.24em] text-[#d9aa52]">Guias oficiais</p>
        <h2 className="mt-4 text-center font-serif text-4xl text-white sm:text-5xl">Artigos para processos na Itália</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <Link key={article.href} href={article.href} className="rounded-[8px] border border-[#c99a45]/42 bg-[#020912] p-7 transition hover:border-[#d9aa52] hover:bg-[#071521]">
              <h3 className="font-serif text-2xl leading-8 text-white">{article.title}</h3>
              <p className="mt-4 leading-7 text-white/72">{article.text}</p>
              <span className="mt-6 inline-block text-sm font-bold uppercase tracking-[0.12em] text-[#d9aa52]">
                Ler artigo
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PriceSection() {

  return (
    <section className="bg-[#020817] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1180px] rounded-[8px] border border-[#d8a84f]/40 bg-[#07111f]/60 p-8 text-center md:p-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">Orçamento rápido</p>
        <h2 className="mt-4 font-serif text-4xl text-[#f8f5ee] sm:text-5xl">Preço justo e fechado antes de começar.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#f8f5ee]/80">
          Você recebe o valor exato pelo WhatsApp em minutos — sem surpresa e sem taxa escondida. Você aprova e só então eu começo.
        </p>
        <WhatsAppButton className="mt-10 inline-flex rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#d8a84f_48%,#ad711f)] px-10 py-6 text-sm font-black uppercase tracking-[0.1em] text-[#020817] shadow-[0_20px_50px_rgba(216,168,79,0.25)] transition hover:translate-y-[-2px]">
          Pedir meu orçamento
        </WhatsAppButton>
      </div>
    </section>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Tradução Juramentada Português Italiano",
    url: siteUrl,
    areaServed: "Itália",
    serviceType: "Tradução juramentada e apostilamento",
  };

  return (
    <main className="min-h-screen bg-[#020912] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader />
      <HeroVideo />
      <Testimonials />
      <ServiceBar />
      <ProcessAndNeeds />
      <ServicesSection />
      <WhyChoose />
      <PriceSection />
      <AboutPreview />
      <HomeFAQ />
      <Articles />
      <CTASection
        title="Me manda só uma foto do documento."
        text="Em poucos minutos eu te digo se serve, quanto custa e o prazo. Sem compromisso."
      />
      <Footer />
    </main>
  );
}
