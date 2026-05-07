"use client";

import Link from "next/link";
import { whatsappHref } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[#d8a84f]/22 bg-[#020817] px-5 py-12 text-[#f8f5ee]/72 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1480px] gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
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
