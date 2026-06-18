"use client";

import Link from "next/link";
import { whatsappHref } from "../lib/site";
import {
  GOOGLE_ADS_CONVERSION_ID,
  GOOGLE_ADS_WHATSAPP_LABEL,
} from "./google-ads-tag";

type WhatsAppButtonProps = {
  children: React.ReactNode;
  className?: string;
  message?: string;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function WhatsAppButton({ children, className = "", message }: WhatsAppButtonProps) {
  function handleClick() {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return;
    }
    // Dispara a conversão "Clique WhatsApp" configurada no Google Ads.
    // O link já abre em nova aba, então o disparo é assíncrono sem bloquear a navegação.
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_CONVERSION_ID}/${GOOGLE_ADS_WHATSAPP_LABEL}`,
      value: 1.0,
      currency: "BRL",
    });
  }

  return (
    <Link
      href={whatsappHref(message)}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
