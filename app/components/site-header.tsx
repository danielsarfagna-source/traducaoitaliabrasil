"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappHref } from "../lib/site";

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
      <div className="mx-auto flex h-20 max-w-[1480px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="TRADUÇÃO JURAMENTADA">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#017b43] text-sm">BR</span>
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[linear-gradient(90deg,#16804b_0_33%,#fff_33%_66%,#bd2b32_66%)] text-[0px]">IT</span>
          <span className="min-w-0">
            <span className="block font-serif text-lg leading-none tracking-[0.08em] text-[#f8f5ee] sm:text-2xl">
              TRADUÇÃO JURAMENTADA
            </span>
            <span className="mt-2 block truncate text-[0.62rem] font-medium tracking-[0.22em] text-[#f8f5ee]/82 sm:text-xs">
              PORTUGUÊS ↔ ITALIANO • TODA A ITÁLIA
            </span>
          </span>
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
    </header>
  );
}
