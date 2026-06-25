import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traduzione-giurata-portoghese-italiano-roma";

export const metadata: Metadata = createPageMetadata({
  title: "Traduzione giurata portoghese italiano Roma | Asseverazione in Tribunale",
  description:
    "Servizio di traduzione giurata portoghese-italiano a Roma per brasiliani. Asseverazione presso il Tribunale Ordinario di Roma e Giudice di Pace. Atendimento em português.",
  path: pagePath,
  locale: "it_IT",
  languages: {
    "pt-BR": "/traducao-juramentada-roma",
    "it-IT": pagePath,
  },
  ogTitle: "Traduzione giurata portoghese italiano a Roma — Ufficio Asseverazioni",
  ogDescription: "Traduzioni ufficiali per il Comune di Roma, Questura e Università Sapienza. Giuramento in Tribunale.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Servizi a Roma"
      title="Traduzione giurata portoghese italiano a Roma per cittadini brasiliani"
      schemaType="LocalBusiness"
      areaServed="Roma"
      serviceType="Traduzione giurata portoghese italiano a Roma"
      description="Servizio specializzato di traduzione giurata portoghese italiano per la comunità brasiliana residente a Roma e nel Lazio."
      intro="Roma ospita la più grande comunità brasiliana in Italia, con una costante necessità di traduzioni giurate (asseverate) per procedimenti ufficiali. Il Comune di Roma Capitale, il Tribunale Ordinario di Roma, la Questura e le università romane richiedono traduzioni che rispettino rigorosamente i parametri legali italiani. Il nostro servizio offre assistenza diretta in lingua portoghese e italiana per la gestione di pratiche di cittadinanza, immigrazione, studio e conversione patente nella Capitale."
      sections={[
        {
          title: "Perché richiedere la traduzione giurata a Roma",
          body: [
            "La città di Roma è il centro decisionale per la maggior parte dei processi amministrativi e giudiziari che coinvolgono cittadini brasiliani in Italia.",
          ],
          subsections: [
            {
              title: "Il Tribunale Ordinario di Roma (Viale Giulio Cesare)",
              body: [
                "Situato in Viale Giulio Cesare 52, il Tribunale di Roma è il foro competente per le azioni giudiziarie di riconoscimento della cittadinanza italiana (via materna o legge 1948). Ogni documento brasiliano inserito nel fascicolo processuale deve essere accompagnato da una traduzione giurata asseverata presso l'Ufficio Asseverazioni del Tribunale o davanti a un notaio romano.",
              ],
            },
            {
              title: "Comune di Roma Capitale e Municipi",
              body: [
                "Dall'Anagrafe del Municipio I (Centro Storico) al Municipio X (Ostia), le richieste di residenza, trascrizione di matrimoni celebrati in Brasile e pratiche di cittadinanza richiedono documenti originali brasiliani con Apostille e traduzione giurata ufficiale.",
              ],
            },
            {
              title: "Questura di Roma (Via San Vitale)",
              body: [
                "Per il rilascio o rinnovo del permesso di soggiorno per motivi familiari o di studio, la Questura di Roma esige la traduzione giurata dei certificati di nascita, matrimonio o carichi pendenti brasiliani, verificando la conformità del traduttore incaricato.",
              ],
            },
          ],
        },
        {
          title: "Procedura di Asseverazione a Roma",
          body: [
            "Il giuramento (asseverazione) della traduzione è l'atto che conferisce fede pubblica al documento. A Roma, la procedura si svolge prevalentemente presso l'Ufficio del Giudice di Pace o il Tribunale Civile.",
            "Il traduttore appone la propria firma sul verbale di giuramento davanti al funzionario giudiziario, unendo fisicamente l'originale brasiliano alla traduzione italiana. Questo fascicolo diventa un atto pubblico a tutti gli effetti di legge.",
          ],
        },
        {
          title: "Documenti più richiesti nella Capitale",
          body: [
            "Gestiamo quotidianamente la traduzione di documenti brasiliani per i principali enti romani:",
            "- **Patente di Guida**: Per la conversione presso la Motorizzazione Civile di Roma (Via Laurentina).",
            "- **Diplomi e Storici Scolastici**: Per l'iscrizione alla Sapienza, Tor Vergata o Roma Tre.",
            "- **Certificati di Nascita e Matrimonio**: Per la trascrizione al Comune e pratiche jure sanguinis.",
            "- **Sentenze di Divorzio**: Per l'aggiornamento dello stato civile in Italia.",
          ],
        },
        {
          title: "Supporto per Studenti e Professionisti",
          body: [
            "Roma è sede di prestigiose università e organismi internazionali (FAO, IFAD, PAM). Supportiamo studenti e professionisti brasiliani nella traduzione di titoli di studio e contratti, assicurando l'accettazione del dossier da parte delle segreterie studenti e degli uffici del personale.",
          ],
        },
        {
          title: "Come Funziona il Servizio a Roma",
          body: [
            "La comunicazione iniziale avviene via WhatsApp in lingua portoghese. Analizziamo i documenti digitalizzati e forniamo un preventivo comprensivo di oneri amministrativi (marche da bollo). La consegna dei documenti originali e il ritiro delle traduzioni asseverate possono essere coordinati direttamente a Roma o gestiti tramite corriere espresso per la massima rapidità.",
          ],
        },
      ]}
      faqTitle="Domande frequenti sul servizio a Roma"
      faqs={[
        {
          question: "È necessario un appuntamento in Tribunale a Roma?",
          answer:
            "Sì, l'Ufficio Asseverazioni del Tribunale di Roma e del Giudice di Pace richiedono spesso la prenotazione telematica. Gestiamo integralmente il calendario degli appuntamenti per garantire la consegna della traduzione nei tempi concordati.",
        },
        {
          question: "La traduzione fatta a Roma vale in altre città del Lazio?",
          answer:
            "Certamente. Una traduzione asseverata presso il Tribunale di Roma ha valore legale su tutto il territorio italiano ed è accettata senza riserve dai Comuni di Latina, Viterbo, Frosinone, Rieti e di tutta la regione.",
        },
        {
          question: "Quanto costa la marca da bollo a Roma?",
          answer:
            "Il valore è definito dalla tariffa nazionale (attualmente € 16,00 ogni 100 righe). Ci occupiamo noi del reperimento e dell'applicazione delle marche corrette sul fascicolo giurato.",
        },
        {
          question: "Posso tradurre documenti italiani per il Brasile?",
          answer:
            "Sì, eseguiamo traduzioni dall'italiano al portoghese per documenti emessi a Roma (come estratti di nascita o sentenze romane) che devono essere presentati in Brasile o al Consolato brasiliano.",
        },
      ]}
      relatedTitle="Contenuti correlati"
      relatedLinks={[
        { title: "Traduzione asseverata portoghese italiano", href: "/traduzione-asseverata-portoghese-italiano" },
        { title: "Tradução juramentada em Roma (PT)", href: "/traducao-juramentada-roma" },
        { title: "Documenti per cittadinanza italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Autorità italiane e indirizzi", href: "/autoridades-italianas-documentos-brasileiros" },
      ]}
    />
  );
}
