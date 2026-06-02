export const WHATSAPP_NUMBER = "393208003406";

export const WHATSAPP_MESSAGE =
  "Oi! Vi seu site e queria saber sobre a tradução do meu documento 🙂";

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
  "/traducao-cnh-dirigir-na-italia",
  "/dichiarazione-di-valore-traducao-diploma",
  "/reforma-cidadania-italiana-documentos",
  "/traducao-juramentada-certidoes",
  "/documentos-traducao-permesso-di-soggiorno",
  "/faq",
  "/politica-de-privacidade",
  "/cookie-policy",
  "/termos-de-uso",
];
