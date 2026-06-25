import type { Metadata } from "next";
import { siteUrl } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}`;
  ogTitle?: string;
  ogDescription?: string;
  locale?: "pt_BR" | "it_IT";
  languages?: Record<string, `/${string}`>;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogTitle = title,
  ogDescription = description,
  locale = "pt_BR",
  languages,
}: PageMetadataOptions): Metadata {
  const url = `${siteUrl}${path}`;
  const ogImage = `/og/${path.slice(1)}.png`;
  const languageAlternates = languages
    ? Object.fromEntries(
        Object.entries(languages).map(([language, languagePath]) => [
          language,
          `${siteUrl}${languagePath}`,
        ]),
      )
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      ...(languageAlternates
        ? {
            languages: {
              ...languageAlternates,
              "x-default": languageAlternates["pt-BR"] ?? url,
            },
          }
        : {}),
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: "Tradução Brasil Itália",
      type: "article",
      locale,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
