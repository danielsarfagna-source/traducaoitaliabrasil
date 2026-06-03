import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import Link from "next/link";
import { siteUrl } from "../lib/site";

const pagePath = "/traduzione-giurata-portoghese-italiano-roma";
const pageUrl = `${siteUrl}${pagePath}`;

export const metadata: Metadata = {
  title: "Traduzione Giurata Portoghese Italiano a Roma | Preventivo Rapido",
  description: "Servizio di traduzione giurata dal portoghese all'italiano a Roma. Traduttori ufficiali per cittadinanza, documenti legali e visti. Richiedi preventivo.",
  alternates: {
    canonical: pagePath,
  },
  openGraph: {
    title: "Traduzione Giurata Portoghese Italiano a Roma | Preventivo Rapido",
    description: "Servizio di traduzione giurata dal portoghese all'italiano a Roma. Traduttori ufficiali per cittadinanza, documenti legali e visti. Richiedi preventivo.",
    url: pageUrl,
    type: "article",
  },
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Traduzione Giurata"
      title="Traduzione giurata portoghese italiano a Roma"
      intro="Se ti trovi a Roma o devi presentare documenti brasiliani presso le autorità italiane (Comune, Prefettura, Tribunale, Questura), avrai bisogno di una traduzione ufficiale. La traduzione giurata (o asseverata) dal portoghese all'italiano garantisce che il documento straniero abbia pieno valore legale in Italia."
      sections={[
      {
        title: "Quando è necessaria la traduzione giurata a Roma?",
        body: [
          "Le istituzioni italiane richiedono traduzioni ufficiali per qualsiasi documento rilasciato in Brasile. Le casistiche più comuni includono:",
        ],
        list: [
          "Richieste di cittadinanza italiana jure sanguinis o per matrimonio.",
          "Conversioni di patente di guida brasiliana (Motorizzazione Civile di Roma).",
          "Richiesta e rinnovo del Permesso di Soggiorno (Questura).",
          "Immatricolazione universitaria (La Sapienza, Tor Vergata, Roma Tre) o Dichiarazione di Valore.",
          "Matrimoni in Italia con cittadini brasiliani."
        ]
      },
      {
        title: "Come funziona il processo",
        body: [
          "Il processo è semplice e può essere gestito interamente online per la fase di preventivo. Invia la scansione o una foto ben leggibile del documento originale (già provvisto di Apostille dell'Aia, se emesso in Brasile).",
          "Il traduttore procederà con la traduzione fedele e, se necessario per l'uso specifico, presterà giuramento in Tribunale (Asseverazione).",
          <span key="link">Per maggiori dettagli sulle traduzioni per cittadinanza, consulta la nostra guida sulla <Link href="/traducao-juramentada-para-cidadania-italiana" className="text-[#d9aa52] underline hover:text-white transition-colors">traduzione per cittadinanza italiana</Link>.</span>
        ]
      },
      {
        title: "Apostille dell'Aia e Traduzione",
        body: [
          "Ricorda sempre che un documento brasiliano, prima di essere tradotto in Italia, deve essere apostillato in Brasile. L'Apostille certifica l'autenticità della firma sul documento originale. La traduzione giurata in Italia verrà poi unita al documento originale o a una copia conforme."
        ]
      }
    ]}
      faqs={[
      { question: "Quanto tempo richiede una traduzione giurata a Roma?", answer: "Solitamente dai 3 ai 7 giorni lavorativi, a seconda del volume dei documenti e della disponibilità del Tribunale per il giuramento." },
      { question: "Posso inviare i documenti via email?", answer: "Sì, per il preventivo e l'inizio del lavoro è sufficiente una scansione in alta risoluzione. Ti consiglieremo poi se sarà necessario unire la traduzione all'originale." },
      { question: "La traduzione fatta a Roma è valida in tutta Italia?", answer: "Sì, una traduzione giurata asseverata in qualsiasi Tribunale italiano o redatta da un traduttore ufficiale è valida su tutto il territorio nazionale." }
    ]}
    />
  );
}
