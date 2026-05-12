export const WHATSAPP_NUMBER = "353831000159";

export const WHATSAPP_MESSAGE =
  "Olá, vim pelo TraducaoBrasilItalia e gostaria de informações sobre a tradução do meu documento.";

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const siteUrl = "https://traducaobrasilitalia.it";

export function whatsappHref(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const routes = [
  "/",
  "/quem-somos",
  "/servicos",
  "/traducao-juramentada-para-cidadania-italiana",
  "/traducao-juramentada-italiano",
  "/apostilar-documento-italiano-na-italia",
  "/faq",
  "/politica-de-privacidade",
  "/cookie-policy",
  "/termos-de-uso",
];
