import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Reforma da Cidadania Italiana 2025: O Que Muda nos Documentos",
  description:
    "Lei 74/2025, Decreto 36/2025 e a decisão da Corte Constitucional: o que mudou na cidadania italiana e por que a tradução juramentada das certidões ficou decisiva.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Cidadania Italiana"
      title="Reforma da cidadania italiana (Lei 74/2025): o que muda nos seus documentos"
      intro="A cidadania italiana por descendência foi profundamente restringida em 2025, e a Corte Constitucional, em 2026, manteve a lei em pé. Para milhares de ítalo-brasileiros, o caminho deixou de ser automático e passou a depender, em muitos casos, da via judicial — que é intensiva em documentos e tradução juramentada. Quem ainda tem direito não pode se dar ao luxo de errar uma certidão."
      sections={[
        {
          title: "O que aconteceu, em ordem",
          body: [
            "O Decreto-Lei nº 36/2025 entrou em vigor no fim de março de 2025, com 'disposições urgentes em matéria de cidadania'. Ele foi convertido na Lei nº 74/2025, publicada na Gazzetta Ufficiale e em vigor a partir de 24 de maio de 2025, alterando a histórica Lei 91/1992.",
            "A regra de corte que todo descendente precisa saber: pedidos — administrativos ou judiciais — protocolados até 23h59 (hora de Roma) de 27 de março de 2025 seguem as regras antigas. Quem não protocolou até essa data entra na nova lógica.",
            "Em 2026, a Corte Constitucional analisou a constitucionalidade da reforma (questões levantadas pelo Tribunal de Turim). Pela Sentença nº 63/2026, depositada em 30 de abril de 2026, a Corte considerou improcedentes ou inadmissíveis as principais alegações de inconstitucionalidade. Tradução prática: a lei restritiva continua valendo. Não é a palavra final sobre todos os aspectos possíveis, mas o cenário hoje é de lei em vigor.",
          ],
        },
        {
          title: "O que mudou na prática",
          body: [
            "Limite de gerações: o reconhecimento automático por descendência deixou de ser ilimitado. Em linhas gerais, restringe-se a filhos e netos de quem detinha exclusivamente a cidadania italiana — bisnetos e além, em regra, ficaram fora do automatismo.",
            "Exclusividade do ascendente: se the ascendente possuía outra cidadania (caso típico do ítalo-brasileiro), a transmissão automática pode ficar bloqueada, salvo exceções da lei.",
            "Prazos improrrogáveis: declarações de aquisição para filhos menores de cidadão italiano têm prazo final em 31/05/2026; a reaquisição por ex-cidadãos vai até 31/12/2027 (com taxa). Perdeu o prazo, perdeu o direito.",
            "Quem já é cidadão não perde nada — a mudança mira aquisições futuras.",
          ],
        },
        {
          title: "Por que isso torna a tradução juramentada mais decisiva, não menos",
          body: [
            "Para quem não se enquadra no automatismo, sobra a via judicial na Itália — e é aí que o volume de documentos explode. O processo se sustenta em certidões brasileiras (nascimento, casamento, óbito) de toda a linha ascendente, com tradução juramentada fiel e padronizada, normalmente apostiladas.",
            "Com a reforma, a análise ficou mais rigorosa. Uma certidão com tradução inconsistente, nome divergente entre documentos ou termo jurídico mal vertido não é mais um detalhe: é motivo de atraso ou exigência em um processo que já está mais difícil. A tradução deixou de ser 'a última etapa burocrática' e passou a ser parte da blindagem do seu caso.",
          ],
        },
        {
          title: "Onde entramos",
          body: [
            "Cuidamos da parte que não pode falhar: a tradução juramentada das certidões da sua linha familiar, com consistência de nomes e datas entre todos os documentos e no padrão exigido — em português, do início ao fim. Você envia as certidões pelo WhatsApp, a gente confere a coerência do conjunto, informa prazo e valor fechado e devolve tudo pronto.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Quem já tem a cidadania perde algo?",
          answer: "Não. A reforma atinge aquisições futuras; quem já é cidadão permanece cidadão.",
        },
        {
          question: "Qual a data de corte para a regra antiga?",
          answer: "Pedidos protocolados até 23h59 (hora de Roma) de 27/03/2025.",
        },
        {
          question: "A Corte Constitucional derrubou a lei?",
          answer: "Não. Pela Sentença 63/2026, manteve a lei; o cenário atual é de norma em vigor.",
        },
        {
          question: "Ainda dá para conseguir por descendência?",
          answer: "Depende do caso concreto e, com frequência, da via judicial — que exige documentação e tradução impecáveis.",
        },
        {
          question: "Bisneto ficou totalmente fora?",
          answer: "Em regra saiu do automatismo administrativo; restam discussões judiciais caso a caso.",
        },
      ]}
    />
  );
}
