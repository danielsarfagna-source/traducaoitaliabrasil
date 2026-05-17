import type { Metadata } from "next";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = {
  title: "Dichiarazione di Valore: Traduzir Diploma Brasileiro na Itália",
  description:
    "Como validar diploma brasileiro na Itália para estudo ou profissão: o que é a Dichiarazione di Valore e a tradução juramentada exigida pelo consulado.",
};

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Diplomas / Estudo"
      title="Dichiarazione di Valore: como traduzir e validar seu diploma brasileiro na Itália"
      intro="Seu diploma brasileiro não vale automaticamente na Itália — nem para estudar, nem para exercer profissão. O primeiro passo oficial é a Dichiarazione di Valore, emitida pelo consulado italiano, e ela depende de uma tradução juramentada bem-feita do diploma e do histórico. É justamente a parte que mais encarece e atrasa o processo quando feita errado."
      sections={[
        {
          title: "Por que seu diploma 'não vale' na Itália (ainda)",
          body: [
            "Um diploma brasileiro reconhecido no Brasil não tem efeito automático na Itália. Para que uma universidade, um conselho profissional ou um órgão público italiano possam sequer analisar o seu título, eles precisam de um documento que explique, em italiano e com fé consular, o que aquele diploma significa no sistema educacional brasileiro. Esse documento é a Dichiarazione di Valore (Declaração de Valor).",
            "Um ponto que evita frustração: a Declaração de Valor não é o reconhecimento do diploma. Ela é o pré-requisito que abre a porta. O reconhecimento acadêmico (equipollenza) ou profissional (riconoscimento professionale) é uma etapa posterior, conduzida pela autoridade italiana competente para cada caso.",
          ],
        },
        {
          title: "Quem precisa da Dichiarazione di Valore",
          body: ["Em regra, precisa dela quem pretende:"],
          list: [
            "Ingressar em universidade italiana ou prosseguir estudos (mestrado, doutorado, especialização);",
            "Obter reconhecimento profissional em profissões regulamentadas — saúde, direito, engenharia, arquitetura, entre outras;",
            "Participar de concursos públicos ou inscrever-se em ordens profissionais na Itália.",
          ],
        },
        {
          title: "Competência Consular",
          body: [
            "Detalhe jurídico importante: a competência do consulado depende de onde o diploma foi emitido no Brasil, não de onde você mora. Pedir no consulado errado é causa frequente de devolução do processo.",
          ],
        },
        {
          title: "A tradução juramentada é o coração (e o gargalo) do processo",
          body: [
            "Para emitir a Declaração de Valor, o consulado exige os documentos brasileiros traduzidos para o italiano por tradutor juramentado e, em regra, apostilados (Apostila de Haia). Normalmente isso inclui:",
          ],
          list: [
            "Diploma e histórico escolar/acadêmico (com as devidas declarações de autenticidade e firmas reconhecidas);",
            "Conforme o nível e o destino, a declaração de conteúdo programático das disciplinas — frequentemente o documento mais volumoso e, por isso, o mais caro de traduzir.",
          ],
        },
        {
          title: "Verdade que poucos dizem",
          body: [
            "Aqui está a verdade que poucos sites dizem com clareza: a maior parte do custo e do tempo do processo está na tradução juramentada e no apostilamento de muitas páginas, não na taxa consular. Fazer essa etapa de forma correta e organizada — documentos na ordem certa, tradução fiel à finalidade — é o que separa um processo de 30 dias de um que arrasta por meses.",
            "As regras dos consulados mudam com frequência e variam por jurisdição. Por isso, antes de traduzir qualquer página, vale confirmar a lista vigente do consulado responsável pela emissão do seu diploma.",
          ],
        },
        {
          title: "Como encurtamos esse caminho para você",
          body: [
            "A gente cuida exatamente da etapa que mais trava: a tradução juramentada do diploma, do histórico e das declarações no padrão exigido pelo consulado, com orientação em português sobre a ordem e o preparo dos documentos antes de você gastar com tradução de página que talvez nem precisasse. Você envia os documentos pelo WhatsApp, recebe orientação e orçamento fechado, e a tradução volta pronta para o consulado.",
          ],
        },
      ]}
      faqs={[
        {
          question: "A Declaração de Valor é o reconhecimento do meu diploma?",
          answer: "Não. É o pré-requisito obrigatório; o reconhecimento acadêmico ou profissional é uma etapa posterior.",
        },
        {
          question: "Preciso de tradução juramentada para a Dichiarazione di Valore?",
          answer: "Sim. Diploma, histórico e declarações exigem tradução juramentada para o italiano, em regra com apostilamento.",
        },
        {
          question: "Em qual consulado peço?",
          answer: "No consulado italiano competente pela região onde o diploma foi emitido no Brasil — não onde você reside.",
        },
        {
          question: "Qual é a parte mais cara do processo?",
          answer: "Normalmente a tradução juramentada e o apostilamento de muitas páginas, especialmente o conteúdo programático — não a taxa consular.",
        },
        {
          question: "Serve para estudar e para trabalhar?",
          answer: "Sim. É usada tanto para fins acadêmicos quanto para reconhecimento profissional em áreas regulamentadas.",
        },
      ]}
    />
  );
}
