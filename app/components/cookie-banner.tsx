"use client";

import { useEffect, useState } from "react";

type Consent = {
  analytics: boolean;
  marketing: boolean;
};

const key = "cookie-consent-v1";

export function CookieBanner() {
  const [visible, setVisible] = useState(() => typeof window !== "undefined" && !localStorage.getItem(key));
  const [modal, setModal] = useState(false);
  const [consent, setConsent] = useState<Consent>(() => {
    if (typeof window === "undefined") return { analytics: false, marketing: false };
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : { analytics: false, marketing: false };
  });

  useEffect(() => {
    const open = () => {
      const current = localStorage.getItem(key);
      setConsent(current ? JSON.parse(current) : { analytics: false, marketing: false });
      setVisible(true);
      setModal(true);
    };
    window.addEventListener("open-cookie-preferences", open);
    return () => window.removeEventListener("open-cookie-preferences", open);
  }, []);

  function save(next: Consent) {
    localStorage.setItem(key, JSON.stringify(next));
    setConsent(next);
    setVisible(false);
    setModal(false);
  }

  if (!visible) return null;

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-[70] mx-auto max-w-4xl rounded-[8px] border border-[#d8a84f]/45 bg-[#07111f]/96 p-5 text-[#f8f5ee] shadow-[0_24px_90px_rgba(0,0,0,0.50)] backdrop-blur-md">
        <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
          <p className="text-sm leading-6 text-[#f8f5ee]/78">
            Usamos cookies técnicos para funcionamento do site. Cookies analíticos ou marketing só são ativados com seu consentimento.
          </p>
          <div className="flex flex-wrap gap-2">
            <button className="rounded-[8px] bg-[#d8a84f] px-4 py-3 text-sm font-bold text-[#020817]" onClick={() => save({ analytics: true, marketing: true })} type="button">Aceitar todos</button>
            <button className="rounded-[8px] border border-[#d8a84f]/45 px-4 py-3 text-sm" onClick={() => save({ analytics: false, marketing: false })} type="button">Recusar não essenciais</button>
            <button className="rounded-[8px] border border-[#d8a84f]/45 px-4 py-3 text-sm" onClick={() => setModal(true)} type="button">Configurar</button>
          </div>
        </div>
      </div>

      {modal ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/60 px-4">
          <div className="w-full max-w-lg rounded-[8px] border border-[#d8a84f]/45 bg-[#07111f] p-6 text-[#f8f5ee]">
            <h2 className="font-serif text-3xl">Preferências de cookies</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-[8px] border border-[#d8a84f]/24 p-4">
                <p className="font-semibold">Técnicos</p>
                <p className="mt-1 text-sm text-[#f8f5ee]/70">Sempre ativos.</p>
              </div>
              {(["analytics", "marketing"] as const).map((name) => (
                <label key={name} className="flex items-center justify-between rounded-[8px] border border-[#d8a84f]/24 p-4">
                  <span>
                    <span className="block font-semibold">{name === "analytics" ? "Analíticos" : "Marketing"}</span>
                    <span className="text-sm text-[#f8f5ee]/70">Ativar somente com consentimento.</span>
                  </span>
                  <input checked={consent[name]} onChange={(event) => setConsent({ ...consent, [name]: event.target.checked })} type="checkbox" />
                </label>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button className="rounded-[8px] border border-[#d8a84f]/45 px-4 py-3" onClick={() => setModal(false)} type="button">Fechar</button>
              <button className="rounded-[8px] bg-[#d8a84f] px-4 py-3 font-bold text-[#020817]" onClick={() => save(consent)} type="button">Salvar preferências</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export function CookiePreferencesModal() {
  return null;
}
