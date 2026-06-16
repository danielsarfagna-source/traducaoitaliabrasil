import type { Metadata } from "next";
import { CookieBanner } from "./components/cookie-banner";
import "./globals.css";
import { serializeJsonLd } from "./lib/seo";
import { siteUrl } from "./lib/site";
import { SiteHeader } from "./components/site-header";
import { Footer } from "./components/footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tradução Brasil Itália | Tradução de documentos brasileiros para italiano",
    template: "%s | Tradução Brasil Itália",
  },
  description:
    "Tradução de documentos brasileiros para uso oficial na Itália. Atendimento em português para brasileiros na Itália, com orientação sobre tradução asseverata, apostila e documentos civis.",
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
    title: "Tradução Brasil Itália | Documentos brasileiros para italiano",
    description:
      "Tradução de documentos brasileiros para uso oficial na Itália, com atendimento em português e orientação sobre tradução asseverata e apostila.",
    url: siteUrl,
    siteName: "Tradução Brasil Itália",
    images: ["/assets/hero-professional-wide.png"],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tradução Brasil Itália | Documentos brasileiros para italiano",
    description:
      "Tradução de documentos brasileiros para uso oficial na Itália, com atendimento em português e orientação documental.",
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
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Tradução Brasil Itália",
        alternateName: "TraducaoBrasilItalia",
        url: siteUrl,
        logo: `${siteUrl}/logo-header.png`,
        image: `${siteUrl}/assets/hero-professional-wide.png`,
        description:
          "Serviço especializado em tradução de documentos brasileiros para italiano e orientação sobre uso oficial de documentos na Itália.",
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Atendimento e orçamento",
          telephone: "+393924605784",
          url: "https://wa.me/393924605784",
          availableLanguage: ["Portuguese", "Italian"],
          areaServed: "IT",
        },
        knowsLanguage: ["Portuguese", "Italian"],
      },
      {
        "@type": "Service",
        "@id": `${siteUrl}/#service`,
        name: "Tradução de documentos brasileiros para italiano",
        serviceType: [
          "Tradução juramentada português italiano",
          "Tradução asseverata de documentos brasileiros",
          "Orientação sobre Apostila de Haia",
        ],
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Italia" },
          { "@type": "Country", name: "Brasil" },
        ],
        availableLanguage: ["pt-BR", "it-IT"],
        audience: {
          "@type": "Audience",
          audienceType: "Brasileiros na Itália e pessoas que precisam usar documentos brasileiros perante órgãos italianos",
        },
        availableChannel: {
          "@type": "ServiceChannel",
          serviceUrl: "https://wa.me/393924605784",
          availableLanguage: ["Portuguese", "Italian"],
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Tradução Brasil Itália",
        inLanguage: "pt-BR",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        // TAREFA 2 — Sinal de identidade do negócio para o Google (nicho real),
        // adicionado ao @graph existente e ligado ao Organization via @id.
        // Service Area Business: sem endereço de rua/cidade — apenas addressCountry.
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#professional-service`,
        name: "Tradução Brasil Itália",
        description:
          "Tradução juramentada (asseverata) de documentos brasileiros para italiano e vice-versa, com atendimento em português para brasileiros na Itália e no Brasil.",
        url: siteUrl,
        image: `${siteUrl}/assets/hero-professional-wide.png`,
        telephone: "+393924605784",
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: [
          { "@type": "Country", name: "Italia" },
          { "@type": "Country", name: "Brasil" },
        ],
        availableLanguage: ["pt-BR", "it"],
        knowsLanguage: ["pt", "it"],
        serviceType: "Tradução juramentada português-italiano",
        priceRange: "€€",
        address: { "@type": "PostalAddress", addressCountry: "IT" },
      },
    ],
  };

  return (
    <html lang="pt-BR">
      <body className="antialiased bg-[#020912] text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(globalJsonLd) }}
        />
        <SiteHeader />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
