import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { ArticlePage } from "../components/article-page";

export const metadata: Metadata = createPageMetadata({
  title: "Tradução Juramentada de Certidões para Itália",
  description: "Tradução juramentada de certidão de nascimento, casamento, óbito e inteiro teor para cidadania, Comune, consulado, permesso e uso na Itália.",
  path: "/traducao-juramentada-certidoes",
});

export default function Page() {
  return (
    <ArticlePage
      eyebrow="Certidões Civis"
      title="Tradução juramentada de certidões para uso na Itália"
      pagePath="/traducao-juramentada-certidoes"
      schemaType="Service"
      description="Serviço de tradução juramentada de certidões brasileiras para uso na Itália: nascimento, casamento, óbito, inteiro teor e documentos civis."
      intro="Certidões brasileiras aparecem em processos de cidadania italiana, casamento na Itália, Comune, consulado, permesso di soggiorno e registros civis. A tradução precisa respeitar nomes, datas, averbações e eventuais divergências do documento original."
      sections={[
        {
          title: "Quando você vai precisar",
          body: [
            "A tradução juramentada de certidões aparece praticamente sempre que um documento civil brasileiro precisa produzir efeito na Itália:",
          ],
          list: [
            "Cidadania italiana (via administrativa ou judicial): certidões de nascimento, casamento e óbito de toda a linha ascendente.",
            "Casamento na Itália: certidão de nascimento atualizada do nubente brasileiro, entre outros.",
            "Permesso di soggiorno e reagrupamento familiar: certidões que comprovam vínculo familiar.",
            "Registro de nascimento/casamento junto ao consulado ou comune.",
            "Processos perante Comune, Tribunal, Questura, consulado ou órgão que solicite prova de estado civil.",
          ],
        },
        {
          title: "Inteiro teor, validade e atualização",
          body: [
            "Em muitos procedimentos, a certidão simples não basta. O órgão pode solicitar inteiro teor, via atualizada ou documento com averbações visíveis.",
            "A validade administrativa da certidão depende do procedimento e do órgão destinatário. Antes de traduzir, é importante conferir se a via emitida será aceita.",
          ],
        },
        {
          title: "Por que certidões geram exigências",
          body: [
            "Os motivos recorrentes de exigência ou retrabalho envolvem o documento original, a etapa de apostila ou a tradução:",
          ],
          list: [
            "Inconsistência de nomes e datas entre certidões da mesma família (grafias diferentes do mesmo sobrenome, datas que não batem).",
            "Certidão antiga quando o órgão exige inteiro teor recente.",
            "Falta de apostila no documento e/ou na própria tradução, conforme o caso.",
            "Tradução sem fé pública ou fora do padrão aceito pelo órgão de destino.",
            "Termos jurídicos vertidos ao pé da letra, gerando ambiguidade no italiano.",
          ],
        },
        {
          title: "Apostila e finalidade de uso",
          body: [
            "Apostila de Haia e tradução juramentada não são a mesma coisa. A apostila certifica a origem formal do documento; a tradução converte o conteúdo para o italiano.",
            "A ordem correta depende de onde a tradução será feita e de onde a certidão será apresentada. Por isso, pedimos a finalidade de uso antes do orçamento.",
          ],
        },
        {
          title: "O que fazemos diferente",
          body: [
            "Tratamos o conjunto, não a folha solta. Antes de traduzir, conferimos a coerência básica entre certidões, nomes, datas, filiação, apostila e finalidade. Você recebe orientação em português, prazo e valor antes de iniciar.",
          ],
        },
      ]}
      faqs={[
        {
          question: "Toda certidão para a Itália precisa de tradução juramentada?",
          answer: "Em procedimentos oficiais, costuma ser exigida tradução juramentada ou asseverada. A necessidade de apostila deve ser verificada conforme o caso.",
        },
        {
          question: "Preciso apostilar antes ou depois de traduzir?",
          answer: "Depende do órgão e do tipo de documento; orientamos a ordem correta antes de você gastar.",
        },
        {
          question: "Certidão antiga serve?",
          answer: "Muitas vezes não. Vários órgãos exigem via atualizada, inteiro teor ou certidão com averbações recentes.",
        },
        {
          question: "Certidão de inteiro teor precisa ser traduzida inteira?",
          answer: "Sim. A tradução deve reproduzir o conteúdo relevante do documento apresentado, incluindo averbações e informações do registro.",
        },
        {
          question: "Divergência de nome pode ser corrigida na tradução?",
          answer: "Não. A tradução deve refletir o documento original. Divergências importantes podem exigir retificação ou orientação documental.",
        },
        {
          question: "Vocês traduzem certidão de óbito também?",
          answer: "Sim — nascimento, casamento e óbito, que são as três mais pedidas em processos de cidadania.",
        },
        {
          question: "Quanto tempo leva?",
          answer: "Depende do volume; você recebe o prazo fechado junto com o orçamento.",
        },
      ]}
      relatedLinks={[
        { title: "Tradução juramentada de certidão de nascimento para Itália", href: "/traducao-juramentada-certidao-nascimento-italia" },
        { title: "Tradução juramentada de certidão de casamento e óbito para Itália", href: "/traducao-juramentada-certidao-casamento-obito-italia" },
        { title: "Tradução juramentada para cidadania italiana", href: "/traducao-juramentada-para-cidadania-italiana" },
        { title: "Apostila de Haia e tradução", href: "/apostila-haia-traducao-juramentada-italia" },
        { title: "Preço da tradução juramentada", href: "/preco-traducao-juramentada-portugues-italiano" },
        { title: "Tradução juramentada em Roma", href: "/traducao-juramentada-roma" }
      ]}
    />
  );
}
