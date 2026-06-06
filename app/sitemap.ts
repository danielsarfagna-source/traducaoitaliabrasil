import type { MetadataRoute } from "next";
import { routes, siteUrl } from "./lib/site";

const priorityByRoute: Record<string, number> = {
  "/": 1,
  "/traducao-juramentada-italiano": 0.9,
  "/traducao-juramentada-para-cidadania-italiana": 0.9,
  "/traducao-juramentada-certidoes": 0.85,
  "/traducao-juramentada-roma": 0.85,
  "/traduzione-giurata-portoghese-italiano-roma": 0.85,
  "/traduzione-asseverata-portoghese-italiano": 0.8,
  "/apostilar-documento-italiano-na-italia": 0.75,
  "/traducao-cnh-dirigir-na-italia": 0.75,
  "/dichiarazione-di-valore-traducao-diploma": 0.75,
  "/documentos-traducao-permesso-di-soggiorno": 0.75,
  "/reforma-cidadania-italiana-documentos": 0.75,
  "/quem-somos": 0.7,
  "/servicos": 0.7,
  "/faq": 0.65,
};

const redirectOnlyRoutes = new Set([
  "/traducao-cnh-brasileira-italia",
  "/traducao-documentos-permesso-di-soggiorno",
]);

export default function sitemap(): MetadataRoute.Sitemap {
  return routes
    .filter((route) => !redirectOnlyRoutes.has(route))
    .map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/" ? "weekly" : "monthly",
      priority: priorityByRoute[route] ?? 0.6,
    }));
}
