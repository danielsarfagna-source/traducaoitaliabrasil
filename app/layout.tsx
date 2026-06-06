import type { Metadata } from "next";
import { CookieBanner } from "./components/cookie-banner";
import "./globals.css";
import { serializeJsonLd } from "./lib/seo";
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
  const globalJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${siteUrl}/#service`,
        name: "TraducaoBrasilItalia",
        alternateName: "Tradução Juramentada Brasil ↔ Itália",
        url: siteUrl,
        logo: `${siteUrl}/logo-header.png`,
        image: `${siteUrl}/assets/hero-professional-wide.png`,
        description:
          "Tradução juramentada português ↔ italiano para documentos brasileiros usados em processos oficiais na Itália: cidadania, CNH, certidões, diplomas, permesso di soggiorno e apostilamento.",
        telephone: "+393208003406",
        areaServed: [
          { "@type": "Country", name: "Italia" },
          { "@type": "Country", name: "Brasil" },
        ],
        serviceType: [
          "Tradução juramentada português italiano",
          "Tradução asseverata portoghese italiano",
          "Apostilamento Haia",
          "Orientação documental Brasil Itália",
        ],
        availableLanguage: ["pt-BR", "it-IT"],
        knowsLanguage: ["Portuguese", "Italian"],
        // SUGESTÃO: incluir perfis sociais em sameAs quando houver URLs públicas confirmadas.
        sameAs: [],
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "TraducaoBrasilItalia",
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}/#service` },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(globalJsonLd) }}
        />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
