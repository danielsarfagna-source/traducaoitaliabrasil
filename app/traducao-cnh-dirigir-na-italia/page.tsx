import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Tradução de CNH para Dirigir na Itália | Conversão da Patente",
  description:
    "Brasileiro pode dirigir na Itália? Entenda o acordo Brasil–Itália, a conversão da CNH para a patente di guida e a tradução juramentada exigida.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="CNH / Patente di Guida"
      title="Tradução de CNH para dirigir na Itália: o que muda com o acordo Brasil–Itália"
      intro="Brasileiro pode, sim, dirigir na Itália — mas o direito tem prazo de validade. Depois de um período como residente, dirigir só com a carteira brasileira deixa de ser legal, e a saída é converter a CNH na patente di guida italiana. Desde 28 de abril de 2025, com o acordo bilateral renovado, essa conversão ficou mais simples — e a tradução juramentada da CNH é uma das peças que mais trava o processo quando feita errado."
      sections={[
        {
          title: "Você acabou de chegar na Itália. Pode dirigir?",
          body: [
            "Pode — por um tempo. E é exatamente esse 'por um tempo' que faz muito brasileiro tomar multa e ter o carro retido sem entender o motivo.",
            "A regra prática se divide em dois cenários. Quem está como turista consegue dirigir por um período curto (em torno de 90 dias) usando a Permissão Internacional para Dirigir (PID) ou uma tradução oficial da CNH acompanhada do original. Quem fixa residência na Itália tem uma janela maior — em geral até um ano a partir do registro de residência — para regularizar a situação. Passado esse prazo, dirigir apenas com a CNH brasileira deixa de ser permitido, independentemente de a carteira ainda estar válida no Brasil.",
            "A consequência de ignorar isso não é teórica: motorista flagrado fora do prazo está sujeito a multa e à retenção do veículo. É um erro caro e perfeitamente evitável.",
          ],
        },
        {
          title: "O acordo Brasil–Itália: o que realmente mudou",
          body: [
            "O acordo de reciprocidade entre Brasil e Itália para conversão de habilitação foi renovado em 2024, ratificado pelo Senado brasileiro no início de 2025 e entrou em vigor em 28 de abril de 2025. Na prática, ele permite que o brasileiro residente na Itália converta a CNH na patente di guida italiana sem refazer prova teórica nem prática — desde que cumpra os requisitos.",
            "Os pontos que mais importam para o seu bolso e o seu tempo:",
          ],
          list: [
            "Sem exames de legislação e de direção para quem se enquadra nos requisitos do acordo.",
            "Categorias A e B (moto e carro). Outras categorias não entram no acordo e exigem habilitação italiana do zero.",
            "Reciprocidade: vale também para o italiano residente no Brasil que queira converter a patente em CNH.",
            "Vale para ítalo-brasileiros: ter dupla cidadania não tira o direito à conversão.",
          ],
        },
        {
          title: "Atenção ao limite de residência",
          body: [
            "Há um ponto sensível que merece atenção jurídica: a janela de residência exigida para a conversão sem exames. O acordo anterior (2018–2023) trabalhava com um limite de poucos anos de residência; a renovação ampliou esse parâmetro, e o noticiário especializado aponta para até seis anos de residência legal, normalmente com a exigência de que a CNH tenha sido emitida antes da aquisição da residência italiana. Como esse é justamente o parâmetro que mudou com o novo acordo e que a Motorizzazione aplica caso a caso, confirme o limite vigente para a sua situação antes de iniciar o processo — um detalhe aqui pode definir se você converte sem prova ou não.",
            "Atenção ao AIRE: se você registrou saída da Itália no AIRE, sua residência italiana foi oficialmente encerrada. Ao voltar e registrar nova residência, a contagem recomeça do zero.",
          ],
        },
        {
          title: "Onde a tradução juramentada entra (e por que ela trava processos)",
          body: [
            "Para converter a CNH, a Motorizzazione Civile exige a tradução oficial da carteira brasileira para o italiano, feita por tradutor habilitado e reconhecido pela autoridade competente. Não é tradução simples, não é a versão 'digital' da carteira, não é o aplicativo: é tradução juramentada do documento definitivo.",
            "É aqui que muita gente perde semanas. Os erros mais comuns que vemos:",
          ],
          list: [
            "Apresentar CNH provisória ou apenas a versão digital — o processo de conversão exige a CNH definitiva.",
            "Tradução feita por quem não tem reconhecimento aceito pela Motorizzazione, obrigando a refazer tudo.",
            "Achar que o protocolo do pedido de conversão ou a PID autorizam dirigir enquanto se espera — segundo orientações em circulação, dirigir nesse intervalo pode resultar em apreensão e multa. Não conte com isso; confirme o que vale na sua província.",
          ],
        },
        {
          title: "Documentação necessária",
          body: [
            "Além da tradução juramentada da CNH, o pedido na Motorizzazione costuma envolver: codice fiscale, certificado de residência emitido pelo Comune, atestado médico de aptidão (emitido por médico habilitado), fotos no formato tessera, comprovantes de pagamento das taxas e, para extracomunitários, o permesso di soggiorno válido.",
          ],
        },
        {
          title: "Como fazemos a sua parte mais simples",
          body: [
            "A tradução juramentada da CNH é exatamente o que resolvemos — rápido, no padrão exigido e em português do início ao fim. Você manda uma foto ou PDF da sua carteira definitiva pelo WhatsApp, a gente confere se está tudo certo para a finalidade de conversão, informa prazo e valor fechado e devolve a tradução pronta para entregar à Motorizzazione.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Brasileiro pode dirigir na Itália com a CNH?",
          answer: "Sim, por tempo limitado: como turista, por um período curto com PID ou tradução oficial; como residente, em geral até um ano, depois é obrigatório converter.",
        },
        {
          question: "Preciso refazer prova para converter a CNH?",
          answer: "Pelo acordo em vigor desde abril de 2025, não — desde que você cumpra os requisitos de residência e demais condições.",
        },
        {
          question: "Quais categorias podem ser convertidas?",
          answer: "Apenas A e B. Outras categorias exigem habilitação italiana do zero.",
        },
        {
          question: "Qual tradução a Motorizzazione aceita?",
          answer: "Tradução juramentada da CNH definitiva para o italiano, feita por tradutor reconhecido pela autoridade competente.",
        },
        {
          question: "Tenho dupla cidadania. Posso converter?",
          answer: "Sim, ser ítalo-brasileiro não retira o direito à conversão.",
        },
      ]}
    />
  );
}
