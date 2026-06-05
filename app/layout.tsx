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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
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
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tradução Brasil Itália",
    url: siteUrl,
    logo: `${siteUrl}/icon-512x512.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+39-320-800-3406",
      contactType: "customer service",
      availableLanguage: ["Portuguese", "Italian"]
    },
    sameAs: [
      siteUrl
    ]
  };
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tradução Brasil Itália",
    url: siteUrl,
    inLanguage: "pt-BR",
    publisher: {
      "@type": "Organization",
      name: "Tradução Brasil Itália",
      url: siteUrl,
    },
  };

  return (
    <html lang="pt-BR">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
