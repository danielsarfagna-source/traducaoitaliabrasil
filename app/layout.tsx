import type { Metadata } from "next";
import { CookieBanner } from "./components/cookie-banner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://traducao-juramentada-italiano.com"),
  title: {
    default: "Tradução Juramentada Português Italiano em Toda a Itália",
    template: "%s | Tradução Juramentada Português ↔ Italiano",
  },
  description:
    "Tradução juramentada português → italiano, tradução italiano → português, apostilamento e orientação documental para cidadania italiana, imigração, casamento, diplomas e certidões.",
  keywords: [
    "tradução juramentada para italiano",
    "tradução juramentada português italiano",
    "apostila de haia Itália",
    "documentos para cidadania italiana",
    "tradução italiano português",
  ],
  openGraph: {
    title: "Tradução Juramentada Português ↔ Italiano em toda a Itália",
    description:
      "Atendimento em português para tradução juramentada português → italiano, tradução italiano → português, apostilamento e documentos oficiais.",
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
