export const WHATSAPP_NUMBER = "353833278766";

export const WHATSAPP_MESSAGE =
  "Olá, gostaria de solicitar um orçamento para tradução juramentada português → italiano ou tradução italiano → português. Posso enviar meus documentos?";

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://traducao-juramentada-italiano.com";

export function whatsappHref(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const routes = [
  "/",
  "/quem-somos",
  "/servicos",
  "/traducao-juramentada-italiano",
  "/apostilar-documento-italiano-na-italia",
  "/faq",
  "/politica-de-privacidade",
  "/cookie-policy",
  "/termos-de-uso",
];
