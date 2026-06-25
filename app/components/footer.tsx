"use client";

import Link from "next/link";
import { whatsappHref } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#d8a84f]/22 bg-[#020817] px-5 py-12 text-[#f8f5ee]/72 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1480px] gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.15fr_0.75fr_0.75fr_0.85fr_0.75fr_0.65fr]">
        <div>
          <h2 className="font-serif text-2xl text-[#f8f5ee]">TRADUÇÃO JURAMENTADA</h2>
          <p className="mt-3 max-w-xl leading-7">
            Português ↔ italiano em toda a Itália, com orientação para tradução juramentada, apostilamento e documentação oficial.
          </p>
          <p className="mt-4 text-sm leading-6">
            A análise inicial não substitui exigências específicas do órgão destinatário.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#f8f5ee]">Links úteis</h3>
          <nav className="mt-4 grid gap-2">
            <Link href="/servicos">Serviços</Link>
            <Link href="/quem-somos">Quem somos</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/politica-de-privacidade">Política de privacidade</Link>
            <Link href="/cookie-policy">Política de cookies</Link>
            <Link href="/termos-de-uso">Termos de uso</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#f8f5ee]">Especializados</h3>
          <nav className="mt-4 grid gap-2">
            <Link href="/traducao-sentenca-divorcio-italia">Divórcio na Itália</Link>
            <Link href="/como-casar-na-italia-brasileiros">Casamento na Itália</Link>
            <Link href="/traducao-antecedentes-criminais-italia">Antecedentes Criminais</Link>
            <Link href="/traducao-documentos-medicos-italia">Médicos e Saúde</Link>
            <Link href="/traducao-contratos-imoveis-italia">Imóveis e Negócios</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#f8f5ee]">Guias úteis</h3>
          <nav className="mt-4 grid gap-2">
            <Link href="/traducao-juramentada-para-cidadania-italiana">Tradução para cidadania italiana</Link>
            <Link href="/traducao-juramentada-italiano">Tradução juramentada português italiano</Link>
            <Link href="/como-casar-na-italia-brasileiros">Como casar na Itália</Link>
            <Link href="/apostilar-documento-italiano-na-italia">Apostila de Haia na Itália</Link>
            <Link href="/traducao-cnh-dirigir-na-italia">Tradução juramentada de CNH</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#f8f5ee]">Referência</h3>
          <nav className="mt-4 grid gap-2">
            <Link href="/glossario-traducao-juramentada">Glossário</Link>
            <Link href="/autoridades-italianas-documentos-brasileiros">Autoridades italianas</Link>
            <Link href="/reforma-cidadania-italiana-documentos">Reforma da cidadania</Link>
            <Link href="/traducao-juramentada-brasileiro-residente-italia">Brasileiros residentes na Itália</Link>
          </nav>
        </div>
        <div>
          <h3 className="font-serif text-xl text-[#f8f5ee]">Contato</h3>
          <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-[#d8a84f]">WhatsApp</Link>
          <button className="mt-5 block text-left text-[#d8a84f]" type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}>
            Preferências de cookies
          </button>
        </div>
      </div>
    </footer>
  );
}
