import type { Metadata } from "next";
import { CookieBanner } from "./components/cookie-banner";
import "./globals.css";
import { siteUrl } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tradução de Documentos Brasil-Itália | TraducaoBrasilItalia",
    template: "%s | TraducaoBrasilItalia",
  },
  description:
    "Tradução de documentos entre português e italiano para cidadania italiana, imigração, casamento, diplomas, certidões e uso oficial no Brasil e na Itália.",
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
    title: "Tradução de Documentos Brasil-Itália | TraducaoBrasilItalia",
    description:
      "Atendimento em português para tradução de documentos, tradução juramentada, apostilamento e orientação documental entre Brasil e Itália.",
    url: siteUrl,
    siteName: "TraducaoBrasilItalia",
    images: ["/assets/hero-professional-wide.png"],
    locale: "pt_BR",
    type: "website",
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
