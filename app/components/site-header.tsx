"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { whatsappHref } from "../lib/site";

const marqueeItems = [
  "Melhor preço do mercado",
  "Atendimento em português",
  "Responsabilidade com seus objetivos",
];

function AnnouncementBar() {
  const sep = (
    <span aria-hidden="true" className="mx-5 text-[#c99a45]/50 select-none">•</span>
  );
  const chunk = (
    <>
      {marqueeItems.map((text, i) => (
        <span key={i} className="shrink-0 whitespace-nowrap text-[#c99a45]/80 font-medium text-[11px] tracking-[0.18em] uppercase">
          {text}{sep}
        </span>
      ))}
    </>
  );
  return (
    <div
      className="group overflow-hidden border-b border-[#c99a45]/18 bg-[#040d18] py-[7px]"
      aria-label="Destaques do serviço"
    >
      {/* Versão acessível: texto estático visível apenas para leitores de tela */}
      <p className="sr-only">{marqueeItems.join(' · ')}</p>
      <div
        className="flex w-max animate-marquee group-hover:[animation-play-state:paused]"
        aria-hidden="true"
      >
        {/* Duplicar o conteúdo para loop sem salto */}
        <span className="flex">{chunk}</span>
        <span className="flex">{chunk}</span>
      </div>
    </div>
  );
}

const navItems = [
  ["Início", "/#inicio"],
  ["Serviços", "/servicos"],
  ["Para cidadania", "/#cidadania"],
  ["Como funciona", "/#como-funciona"],
  ["Artigos", "/#artigos"],
  ["Quem somos", "/quem-somos"],
  ["FAQ", "/faq"],
  ["Contato", "/#contato"],
];

export function SiteHeader() {

  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d8a84f]/25 bg-[#020817]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:h-20 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center transition hover:opacity-90" aria-label="TRADUÇÃO JURAMENTADA">
          <Image
            src="/logo-header.png"
            alt="TRADUÇÃO JURAMENTADA — Português ↔ Italiano"
            width={588}
            height={197}
            className="h-10 w-auto object-contain lg:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-5 text-sm text-[#f8f5ee]/88 xl:flex">
          {navItems.map(([label, href], index) => (
            <Link key={label} href={href} className={`border-b py-2 transition hover:border-[#d8a84f] hover:text-[#d8a84f] ${index === 0 ? "border-[#d8a84f] text-[#d8a84f]" : "border-transparent"}`}>
              {label}
            </Link>
          ))}
        </nav>

        <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hidden rounded-[8px] border border-[#d8a84f] px-5 py-3 text-sm font-semibold text-[#f2cc82] transition hover:bg-[#d8a84f] hover:text-[#07111f] md:inline-flex">
          Fale no WhatsApp
        </Link>

        <button className="rounded-[8px] border border-[#d8a84f]/50 px-3 py-2 text-sm text-[#f8f5ee] xl:hidden" onClick={() => setOpen((value) => !value)} type="button">
          Menu
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#d8a84f]/20 bg-[#020817] px-5 py-5 xl:hidden">
          <nav className="mx-auto grid max-w-[1480px] gap-3 text-[#f8f5ee]">
            {navItems.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)} className="rounded-[8px] border border-[#d8a84f]/18 px-4 py-3">
                {label}
              </Link>
            ))}
            <Link href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="rounded-[8px] bg-[#d8a84f] px-4 py-3 text-center font-bold text-[#020817]">
              Fale no WhatsApp
            </Link>
          </nav>
        </div>
      ) : null}
      <AnnouncementBar />
    </header>
  );
}
