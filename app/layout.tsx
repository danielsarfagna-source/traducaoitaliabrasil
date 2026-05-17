import type { Metadata } from "next";
import { CookieBanner } from "./components/cookie-banner";
import "./globals.css";
import { siteUrl } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tradução Juramentada Brasil ↔ Itália | Atendimento em Português",
    template: "%s | TraducaoBrasilItalia",
  },
  description:
    "Tradução juramentada de qualquer documento — CNH, diplomas, certidões, cidadania. Aceita em toda a Itália. Orientação e orçamento rápido pelo WhatsApp.",
  keywords: [
    "tradução de documentos Brasil Itália",
    "tradução juramentada para italiano",
    "tradução juramentada português italiano",
    "tradução documentos brasileiros Itália",
    "apostila de haia Itália",
    "documentos para cidadania italiana",
    "tradução italiano português",
  ],
  openGraph: {
    title: "Tradução Juramentada Brasil ↔ Itália | Atendimento em Português",
    description:
      "Tradução juramentada de qualquer documento — CNH, diplomas, certidões, cidadania. Aceita em toda a Itália. Orientação e orçamento rápido pelo WhatsApp.",
    url: siteUrl,
    siteName: "TraducaoBrasilItalia",
    images: ["/assets/hero-professional-wide.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradução Juramentada Brasil ↔ Itália | Atendimento em Português",
    description: "Tradução juramentada de qualquer documento — CNH, diplomas, certidões, cidadania. Aceita em toda a Itália. Orientação e orçamento rápido pelo WhatsApp.",
    images: ["/assets/hero-professional-wide.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
