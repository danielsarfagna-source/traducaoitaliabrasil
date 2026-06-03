import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traduzione-asseverata-portoghese-italiano";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Traduzione Asseverata Portoghese Italiano | Valore Legale Garantito",
  description: "Traduzione asseverata in Tribunale dal portoghese all'italiano per documenti brasiliani. Servizio certificato per Comuni, Prefetture e Università.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Traduzione Asseverata Portoghese Italiano | Valore Legale Garantito",
    description: "Traduzione asseverata in Tribunale dal portoghese all'italiano per documenti brasiliani. Servizio certificato per Comuni, Prefetture e Università.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Traduzione Asseverata"
      title="Traduzione asseverata portoghese italiano"
      intro="La traduzione asseverata (spesso chiamata semplicemente traduzione giurata in Italia) è il processo mediante il quale un traduttore ufficiale si reca in Tribunale o dal Giudice di Pace per giurare di aver tradotto fedelmente il testo dal portoghese all'italiano, assumendosi la responsabilità penale e civile del lavoro svolto."
      sections={[
      {
        title: "Differenza tra traduzione certificata e asseverata",
        body: [
          "Nel sistema legale italiano, una semplice 'traduzione certificata' (con timbro del traduttore) spesso non è sufficiente per gli atti pubblici. I Comuni (Anagrafe, Stato Civile) e le Prefetture richiedono l'Asseverazione, che include verbali di giuramento e marche da bollo.",
          <span key="link">Se stai preparando i documenti per la tua permanenza in Italia, vedi anche i requisiti per il <Link href="/documentos-traducao-permesso-di-soggiorno" className="text-[#d9aa52] underline hover:text-white transition-colors">permesso di soggiorno</Link>.</span>
        ]
      },
      {
        title: "Documenti che richiedono Asseverazione",
        body: [
          "I documenti per cui è quasi sempre richiesta l'asseverazione in Tribunale includono: certificati di nascita, matrimonio, morte, certificati penali (fedina penale), sentenze di divorzio e titoli accademici."
        ]
      },
      {
        title: "Marche da Bollo e Costi",
        body: [
          "Il costo di una traduzione asseverata in Italia include non solo la tariffa del traduttore, ma anche le marche da bollo (solitamente una marca da € 16,00 ogni 4 pagine di traduzione, incluso il verbale). Questo rende essenziale un preventivo accurato prima di iniziare."
        ]
      }
    ]}
      faqs={[
      { question: "Cos'è il verbale di giuramento?", answer: "È un documento allegato alla fine della traduzione, firmato dal traduttore e dal cancelliere del Tribunale, che attesta il giuramento formale." },
      { question: "Serve l'Apostille anche sulla traduzione asseverata?", answer: "Se la traduzione asseverata in un Tribunale italiano è destinata a un'autorità in Italia, non serve l'Apostille sulla traduzione. L'Apostille serve solo sull'originale brasiliano." },
      { question: "Devo spedire i documenti originali?", answer: "Spesso la traduzione viene spillata al documento originale o a una copia autenticata. Ti guideremo sulla procedura esatta in base alle richieste del tuo ente destinatario." }
    ]}
    />
  );
}
