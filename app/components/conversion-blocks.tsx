import { WhatsAppButton } from "./whatsapp-button";
import React from "react";

export function CNHBlock() {
  return (
    <section className="bg-[#06111d] border-y border-[#c99a45]/20 px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1080px]">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl text-white sm:text-4xl">
              Tradução de CNH brasileira para conversão na Itália
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-justify">
              Se você precisa apresentar sua CNH brasileira na Motorizzazione, nós orientamos qual tradução usar, quais dados precisam estar corretos e como evitar erro em categoria, validade, número do documento e observações.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-justify">
              Envie foto da frente e verso da CNH pelo WhatsApp e receba orientação sobre prazo, valor e próximos passos.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-end">
            <WhatsAppButton 
              message="Olá, preciso traduzir minha CNH brasileira para uso/conversão na Itália. Quero saber valor, prazo e próximos passos."
              className="w-full sm:w-auto rounded-[8px] bg-[linear-gradient(135deg,#e5b960_0%,#c99a45_100%)] px-10 py-5 text-center text-sm font-black uppercase tracking-[0.08em] text-[#050b13] transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Traduzir minha CNH pelo WhatsApp
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DocumentCards() {
  const docs = [
    { title: "CNH brasileira", desc: "Tradução para uso na Motorizzazione e conversão." },
    { title: "Certidão de nascimento", desc: "Inteiro teor ou simples para cidadania e casamentos." },
    { title: "Certidão de casamento", desc: "Com averbações de divórcio ou para registro no Comune." },
    { title: "Antecedentes criminais", desc: "Tradução da certidão da PF para processos oficiais." },
    { title: "Diploma e histórico", desc: "Documentação acadêmica para Università e reconhecimento." },
    { title: "Procurações e civis", desc: "Atos notariais, sentenças e documentos de representação." },
  ];

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 bg-[#020912]">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="font-serif text-3xl text-white sm:text-4xl mb-12 text-center lg:text-left">
          Documentos mais comuns
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {docs.map((doc) => (
            <div key={doc.title} className="group relative overflow-hidden rounded-xl border border-[#c99a45]/20 bg-[#06111d] p-8 transition-all hover:border-[#c99a45]/50">
              <div className="absolute top-0 right-0 p-3 opacity-10 transition-opacity group-hover:opacity-20">
                <svg className="size-12 fill-current text-[#d9aa52]" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-[#d9aa52]">{doc.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-justify">{doc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    "Envie foto ou PDF do documento pelo WhatsApp",
    "Receba orientação, prazo e valor",
    "Confirmamos o tipo de tradução necessário",
    "Você recebe a tradução pronta para uso na Itália",
  ];

  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 bg-[#06111d]">
      <div className="mx-auto max-w-[1080px]">
        <h2 className="font-serif text-3xl text-white sm:text-4xl mb-12">
          Como funciona
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              <div className="flex items-center gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#d9aa52]/10 font-serif text-xl font-bold text-[#d9aa52]">
                  {i + 1}
                </span>
                <div className="h-px w-full bg-[#c99a45]/20 hidden lg:block" />
              </div>
              <p className="mt-6 text-lg text-justify">{step}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center lg:text-left">
          <WhatsAppButton 
            className="inline-block rounded-[8px] border-2 border-[#c99a45] px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#d9aa52] transition-all hover:bg-[#c99a45] hover:text-[#050b13]"
          >
            Enviar documento pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

export function MobileFloatingCTA() {
  return (
    <div className="fixed bottom-6 left-5 right-5 z-50 lg:hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      <WhatsAppButton 
        message="Olá, preciso de uma tradução juramentada português–italiano para uso na Itália. Quero saber valor, prazo e próximos passos."
        className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 font-black uppercase tracking-wider text-white shadow-[0_8px_32px_rgba(37,211,102,0.3)]"
      >
        <svg className="size-6 fill-current" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.817 9.817 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.33a8.202 8.202 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24m-4.53 3.19c-.24 0-.43.15-.59.33-.16.18-.45.52-.45 1.27 0 .75.55 1.47.63 1.57.07.1 1.08 1.64 2.61 2.3.37.16.65.25.87.32.37.11.7.1.97.06.3-.04.92-.37 1.05-.74.13-.37.13-.69.09-.75-.04-.06-.15-.09-.31-.17-.16-.08-.92-.45-1.06-.5-.14-.05-.24-.08-.34.07-.09.15-.37.47-.45.56-.08.09-.16.1-.32.02-.16-.08-.68-.25-1.3-0.8-.48-.42-.8-.94-.89-1.1-.09-.16-.01-.24.07-.32.07-.07.16-.18.24-.27.08-.1.11-.17.16-.29.05-.12.02-.23-.01-.31-.03-.08-.34-.81-.46-1.12-.12-.31-.25-.27-.34-.27z" />
        </svg>
        WhatsApp — pedir orçamento
      </WhatsAppButton>
    </div>
  );
}
