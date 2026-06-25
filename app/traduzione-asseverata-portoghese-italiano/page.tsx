import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";
import { createPageMetadata } from "../lib/seo";

const pagePath = "/traduzione-asseverata-portoghese-italiano";

export const metadata: Metadata = createPageMetadata({
  title: "Traduzione asseverata portoghese italiano | Documenti brasiliani in Italia",
  description:
    "Traduzione asseverata portoghese-italiano per documenti brasiliani da presentare a Comune, Tribunale, Università, Questura e Motorizzazione. Procedura di giuramento e marca da bollo.",
  path: pagePath,
  locale: "it_IT",
  languages: {
    "pt-BR": "/traducao-juramentada-italiano",
    "it-IT": pagePath,
  },
  ogTitle: "Traduzione asseverata portoghese italiano — documenti brasiliani per l'Italia",
  ogDescription: "Guida tecnica sulla traduzione giurata di certificati di nascita, matrimonio, titoli di studio e patenti brasiliane.",
});

export default function Page() {
  return (
    <ArticlePage
      pagePath={pagePath}
      eyebrow="Portoghese → italiano"
      title="Traduzione asseverata portoghese italiano per documenti brasiliani"
      schemaType="Service"
      areaServed="Brasil e Itália"
      serviceType="Traduzione asseverata portoghese italiano"
      description="Traduzione asseverata di documenti brasiliani destinati alle autorità italiane per cittadinanza, matrimonio e studio."
      intro="La traduzione asseverata (o traduzione giurata) è l'atto formale necessario affinché un documento brasiliano in lingua portoghese possa produrre effetti legali presso le autorità italiane. Comune, Tribunale, Università, Questura, Motorizzazione e notai richiedono che il contenuto sia certificato da un traduttore abilitato che presta giuramento di fedeltà davanti a un pubblico ufficiale. Questa guida illustra la procedura di asseverazione, i documenti più richiesti e le formalità amministrative vigenti in Italia."
      sections={[
        {
          title: "Cos'è la traduzione asseverata e quando è obbligatoria",
          body: [
            "L'asseverazione è una procedura giudiziaria con cui il traduttore assume la responsabilità civile e penale della conformità della traduzione al testo originale brasiliano.",
          ],
          subsections: [
            {
              title: "Il valore legale e la fede pubblica",
              body: [
                "A differenza della traduzione semplice, l'asseverata conferisce valore legale internazionale al documento. In Italia, l'atto si formalizza con la firma del verbale di giuramento davanti al cancelliere del Tribunale Ordinario o al Giudice di Pace. Questo procedimento è indispensabile per tutti i documenti che devono essere inseriti in fascicoli della Pubblica Amministrazione italiana.",
              ],
            },
            {
              title: "Differenza dalla traduzione giurata brasiliana",
              body: [
                "In Brasile, la traduzione è eseguita da un TPIC (Tradutor Público) abilitato dalla Junta Comercial. Sebbene valida, molte autorità italiane (soprattutto i Comuni di piccole dimensioni) preferiscono o esigono la traduzione asseverata eseguita direttamente in Italia, in quanto il giuramento è prestato all'interno del sistema giuridico nazionale italiano.",
              ],
            },
          ],
        },
        {
          title: "Documenti brasiliani che richiedono asseverazione",
          body: [
            "La gamma di documenti brasiliani presentati in Italia è vasta e richiede una terminologia specifica per ogni ambito del diritto.",
          ],
          subsections: [
            {
              title: "Certificati di Stato Civile e Cittadinanza",
              body: [
                "I certificati di nascita, matrimonio e morte (in formato 'inteiro teor') sono i pilastri del processo di riconoscimento della cittadinanza jure sanguinis. La traduzione deve riportare integralmente tutte le annotazioni marginali e le rettifiche di cognome effettuate nei registri brasiliani.",
              ],
            },
            {
              title: "Titoli di Studio e Riconoscimento Accademico",
              body: [
                "Diplomi, certificati di laurea e programmi di studio brasiliani devono essere tradotti per l'iscrizione alle università italiane o per la valutazione del CIMEA. La precisione nella traduzione dei crediti formativi e delle discipline è fondamentale per evitare debiti formativi o il diniego della Dichiarazione di Valore.",
              ],
            },
            {
              title: "Patente di Guida Brasiliana (CNH)",
              body: [
                "La patente brasiliana deve essere tradotta per essere convertita in patente italiana presso la Motorizzazione Civile. La traduzione asseverata deve includere tutte le categorie di guida, le limitazioni mediche e la data di prima emissione.",
              ],
            },
            {
              title: "Atti Giudiziari e Sentenze di Divorzio",
              body: [
                "Le sentenze di divorzio emesse da tribunali brasiliani devono essere asseverate in Italia per la trascrizione nei registri dello Stato Civile del Comune. È necessario tradurre l'intero dispositivo e l'attestazione del passaggio in giudicato (trânsito em julgado).",
              ],
            },
          ],
        },
        {
          title: "La Procedura presso il Tribunale o Giudice di Pace",
          body: [
            "L'asseverazione segue regole amministrative rigorose che il traduttore deve rispettare per la validità del fascicolo.",
          ],
          subsections: [
            {
              title: "Composizione del Fascicolo",
              body: [
                "Il fascicolo asseverato è composto nell'ordine: 1) Documento originale brasiliano (completo di Apostille); 2) Traduzione in lingua italiana; 3) Verbale di giuramento sottoscritto dal traduttore e dal funzionario giudiziario.",
              ],
            },
            {
              title: "Marca da Bollo e Oneri Amministrativi",
              body: [
                "Il governo italiano impone il pagamento di una tassa sotto forma di marca da bollo (generalmente da € 16,00 ogni 100 righe o 4 pagine di traduzione). Questi oneri sono di natura amministrativa e devono essere apposti fisicamente sul documento al momento del giuramento.",
              ],
            },
          ],
        },
        {
          title: "Apostille dell'Aja: Requisito Previo",
          body: [
            "Affinché un traduttore possa asseverare un documento brasiliano in Italia, l'originale deve obbligatoriamente contenere l'Apostille dell'Aja emessa da un notaio in Brasile. L'Apostille certifica l'autenticità della firma del funzionario brasiliano, permettendo al sistema italiano di riconoscere il documento come atto pubblico straniero.",
          ],
        },
        {
          title: "Autorità Italiane di Riferimento",
          body: [
            "Le traduzioni asseverate sono destinate ai seguenti enti romani e nazionali:",
            "- **Comune di Roma Capitale**: Per cittadinanza, residenza e stato civile.",
            "- **Tribunale Ordinario di Roma** (Viale Giulio Cesare 52): Per cause civili e cittadinanza giudiziale.",
            "- **Questura di Roma** (Via San Vitale 15): Per il rilascio del permesso di soggiorno.",
            "- **Sapienza Università di Roma**: Per l'immatricolazione di studenti brasiliani.",
            "- **Motorizzazione Civile di Roma**: Per la conversione della patente.",
          ],
        },
        {
          title: "Come Funziona il Servizio di Traduzione",
          body: [
            "Il processo inizia con l'invio digitale del documento via WhatsApp per l'analisi tecnica e il preventivo. Successivamente, i documenti originali brasiliani devono pervenire fisicamente al traduttore per la composizione del fascicolo e la presentazione presso gli uffici del Tribunale di Roma o di altre province italiane.",
          ],
        },
      ]}
      faqTitle="Domande frequenti sulla traduzione asseverata"
      faqs={[
        {
          question: "Posso usare una traduzione fatta in Brasile?",
          answer:
            "Sì, se il Comune o l'ente destinatario la accetta e se sono rispettate le formalità richieste. La traduzione asseverata conferisce fede pubblica in Italia, ma l'ufficio destinatario può richiedere documenti o verifiche ulteriori.",
        },
        {
          question: "Quanto tempo occorre per l'asseverazione?",
          answer:
            "Il tempo tecnico dipende dagli appuntamenti disponibili presso l'Ufficio Asseverazioni del Tribunale competente. A Roma, la procedura richiede solitamente dai 3 ai 7 giorni lavorativi dal momento in cui il traduttore riceve l'originale.",
        },
        {
          question: "La traduzione asseverata scade?",
          answer:
            "La traduzione in sé non ha una scadenza, ma il certificato brasiliano originale ha spesso una validità amministrativa limitata (solitamente 6 mesi per i Comuni italiani). Se l'originale scade, è necessario produrre una nuova traduzione.",
        },
        {
          question: "È obbligatorio essere iscritti all'Albo CTU?",
          answer:
            "Per le traduzioni asseverate in Tribunale, è prassi consolidata che il traduttore sia iscritto all'Albo dei Consulenti Tecnici d'Ufficio (CTU) o al Ruolo Periti ed Esperti della Camera di Commercio, per attestare la propria competenza professionale.",
        },
        {
          question: "Come viene calcolato il costo della marca da bollo?",
          answer:
            "Il numero di marche da bollo necessarie dipende esclusivamente dalla lunghezza del testo tradotto, seguendo il parametro legale di una marca ogni 100 righe di scrittura. Il traduttore comunica il numero esatto dopo la verifica del documento.",
        },
      ]}
      relatedTitle="Approfondimenti"
      relatedLinks={[
        { title: "Traduzione giurata a Roma", href: "/traduzione-giurata-portoghese-italiano-roma" },
        { title: "Tradução juramentada italiano (PT)", href: "/traducao-juramentada-italiano" },
        { title: "Documenti per cittadinanza italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Glossario della traduzione", href: "/glossario-traducao-juramentada" },
        { title: "Autorità italiane e indirizzi", href: "/autoridades-italianas-documentos-brasileiros" },
      ]}
    />
  );
}
