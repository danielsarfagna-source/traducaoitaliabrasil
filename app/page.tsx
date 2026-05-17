import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { CTASection } from "./components/cta-section";
import { FAQAccordion } from "./components/faq-accordion";
import { Footer } from "./components/footer";
import { SectionTitle } from "./components/section-title";
import { ServiceCard } from "./components/service-card";
import { SiteHeader } from "./components/site-header";
import { Testimonials } from "./components/testimonials";
import { TrustCard } from "./components/trust-card";
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

const benefits = [
  ["✓", "Atendimento em português"],
  ["◷", "Rápido (24–48h)"],
  ["◆", "Aceitamos PIX"],
  ["€", "Pagamento em euro e em reais"],
];


const serviceBar = [
  ["▧", "Tradução juramentada"],
  ["♙", "Apostilamento (Apostila de Haia)"],
  ["◷", "Entrega rápida"],
  ["☏", "Suporte direto"],
  ["◎", "Atendimento em toda a Itália e exterior"],
];

const steps = [
  ["Você envia no WhatsApp", "Foto ou PDF do documento."],
  ["Eu traduzo em italiano ou português", "Tradução precisa para finalidade oficial."],
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
];

function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden border-b border-[#d8a84f]/24 bg-[#020817] pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_23%,rgba(216,168,79,0.20),transparent_25%),radial-gradient(circle_at_14%_72%,rgba(55,87,129,0.18),transparent_34%),linear-gradient(112deg,#020817_0%,#07111f_50%,#0b1628_100%)]" />
      <div className="absolute inset-y-20 right-0 hidden w-[66vw] lg:block">
        <Image
          src="/assets/hero-professional-wide.png"
          alt="Tradução juramentada oficial entre Brasil e Itália"
          fill
          priority
          sizes="66vw"
          className="object-cover object-[50%_50%] opacity-96 [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.18)_8%,black_27%,black_100%)]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#020817_0%,rgba(2,8,23,0.86)_12%,rgba(2,8,23,0.40)_31%,rgba(2,8,23,0.06)_60%,rgba(2,8,23,0.30)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_30%,rgba(216,168,79,0.10),transparent_28%),linear-gradient(180deg,rgba(2,8,23,0.12)_0%,transparent_48%,rgba(2,8,23,0.56)_100%)]" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.99)_0%,rgba(2,8,23,0.92)_36%,rgba(2,8,23,0.30)_72%,rgba(2,8,23,0.68)_100%)] lg:bg-[linear-gradient(90deg,rgba(2,8,23,0.99)_0%,rgba(2,8,23,0.94)_33%,rgba(2,8,23,0.56)_48%,rgba(2,8,23,0.14)_74%,rgba(2,8,23,0.38)_100%)]" />
      <div className="absolute left-1/2 top-20 hidden h-[620px] w-[720px] -translate-x-10 rounded-full border border-[#d8a84f]/10 bg-[#d8a84f]/[0.025] blur-3xl lg:block" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#020817] to-transparent" />

      <div className="relative mx-auto grid min-h-[760px] max-w-[1480px] grid-cols-1 gap-10 px-5 pb-12 pt-14 sm:px-8 lg:grid-cols-[0.86fr_0.9fr] lg:items-end lg:px-12">
        <div className="max-w-[690px] pb-2 lg:pb-20">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#e2ae58]">
            <span className="h-px w-8 bg-[#d8a84f]" />
            Atendimento em português · Rápido (24–48h) · Aceitamos PIX
          </p>
          <h1 className="font-serif text-[3.05rem] leading-[0.96] tracking-normal text-[#f8f5ee] sm:text-[4.65rem] lg:text-[5.15rem]">
            Seu documento traduzido certo
            <span className="block text-[0.6em] mt-4 opacity-90">— sem retrabalho, sem perder prazo.</span>
          </h1>
          <p className="mt-6 max-w-[640px] text-lg leading-8 text-[#f8f5ee]/86 sm:text-xl">
            Tradução juramentada português ↔ italiano de qualquer documento — CNH, diplomas, certidões, permesso di soggiorno, cidadania e mais. Aceita em toda a Itália. Atendimento de brasileiro para brasileiro, do primeiro documento até a entrega.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(([icon, label]) => (
              <div key={label} className="flex items-center gap-3 border-[#d8a84f]/24 sm:border-r sm:pr-4 last:border-r-0">
                <span className="grid size-11 shrink-0 place-items-center text-3xl text-[#d8a84f]">{icon}</span>
                <span className="text-sm leading-5 text-[#f8f5ee]/90">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton className="group flex min-h-20 items-center gap-4 rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#d8a84f_48%,#ad711f)] px-8 text-[#020817] shadow-[0_18px_48px_rgba(216,168,79,0.30)] transition hover:translate-y-[-1px]">
              <span className="text-4xl">☏</span>
              <span>
                <span className="block text-lg font-black uppercase tracking-[0.04em]">Enviar meu documento agora</span>
                <span className="mt-0.5 block text-sm opacity-90">Resposta no WhatsApp em poucos minutos.</span>
              </span>
            </WhatsAppButton>
          </div>
        </div>

        <div className="relative flex flex-col items-start pb-0 lg:items-end lg:pb-20">
          <div className="relative h-[430px] w-full overflow-hidden rounded-[8px] sm:h-[520px] lg:hidden">
            <Image
              src="/assets/hero-professional-wide.png"
              alt="Tradução juramentada oficial"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,8,23,0.48),transparent_46%),linear-gradient(180deg,transparent_50%,rgba(2,8,23,0.72))]" />
          </div>

          <TrustCard />
        </div>
      </div>
    </section>
  );
}

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
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
        <SectionTitle eyebrow="Serviços" title="Traduções e suporte documental" text="Atendimento para documentos brasileiros e italianos usados em processos oficiais entre Brasil, Itália e exterior." />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
        <SectionTitle align="left" eyebrow="Quem somos" title="Especialistas em documentos Brasil ↔ Itália" />
        <div className="space-y-5 text-lg leading-8 text-[#f8f5ee]/76">
          <p>Somos um serviço especializado em tradução juramentada português → italiano, tradução italiano → português e orientação documental para brasileiros na Itália, brasileiros no Brasil e pessoas que precisam usar documentos entre Brasil, Itália e exterior.</p>
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
      <Hero />
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
