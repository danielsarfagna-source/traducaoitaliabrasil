export const WHATSAPP_NUMBER = "393924605784";

export const WHATSAPP_MESSAGE =
  "Oi! Vi seu site e queria saber sobre a tradução do meu documento 🙂";

export const WHATSAPP_URL =
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const siteUrl = "https://www.traducaobrasilitalia.it";

export function whatsappHref(message = WHATSAPP_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const routes = [
  "/",
  "/quem-somos",
  "/servicos",
  "/traducao-juramentada-para-cidadania-italiana",
  "/traducao-juramentada-italiano",
  "/traducao-juramentada-brasileiro-residente-italia",
  "/autoridades-italianas-documentos-brasileiros",
  "/glossario-traducao-juramentada",
  "/apostilar-documento-italiano-na-italia",
  "/traducao-cnh-dirigir-na-italia",
  "/dichiarazione-di-valore-traducao-diploma",
  "/reforma-cidadania-italiana-documentos",
  "/traducao-juramentada-certidoes",
  "/documentos-traducao-permesso-di-soggiorno",
  "/traducao-juramentada-roma",
  "/traducao-juramentada-milao",
  "/traducao-juramentada-turim",
  "/traducao-juramentada-bolonha",
  "/cnh-brasileira-na-italia-pode-dirigir-quanto-tempo",
  "/traducao-cnh-ou-pid-italia",
  "/faq",
  "/politica-de-privacidade",
  "/cookie-policy",
  "/termos-de-uso",
  "/traduzione-giurata-portoghese-italiano-roma",
  "/traduzione-asseverata-portoghese-italiano",
  "/traducao-juramentada-certidao-nascimento-italia",
  "/traducao-juramentada-certidao-casamento-obito-italia",
  "/traducao-juramentada-diploma-brasileiro-italia",
  "/traducao-historico-escolar-italia",
  "/apostila-haia-traducao-juramentada-italia",
  "/traducao-documentos-brasileiros-na-italia",
  "/traducao-sentenca-divorcio-italia",
  "/traducao-documentos-casamento-italia",
  "/traducao-antecedentes-criminais-italia",
  "/traducao-documentos-medicos-italia",
  "/traducao-contratos-imoveis-italia",
  "/preco-traducao-juramentada-portugues-italiano",
  "/como-casar-na-italia-brasileiros",
  "/traducao-cnh-brasileira-italia",
  "/traducao-documentos-permesso-di-soggiorno"
];
