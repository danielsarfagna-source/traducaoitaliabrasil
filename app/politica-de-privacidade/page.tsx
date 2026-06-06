import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { PageShell, TextContent } from "../components/page-shell";

export const metadata: Metadata = createPageMetadata({
  title: "Política de Privacidade",
  description: "Política de privacidade para atendimento de tradução juramentada, apostilamento e orientação documental.",
  path: "/politica-de-privacidade",
});

export default function Page() {
  return (
    <PageShell title="Política de Privacidade" pagePath="/politica-de-privacidade" cta={false}>
      <TextContent>
        <p>Esta Política de Privacidade explica como coletamos, utilizamos, armazenamos e protegemos os dados pessoais enviados por usuários deste site e pelos canais de atendimento relacionados ao serviço de tradução juramentada, apostilamento e orientação documental.</p>
        <h2>1. Controlador dos dados</h2>
        <p>Tradução Brasil Itália<br />Contato para privacidade: pelo canal de atendimento informado no site<br />WhatsApp: +39 320 800 3406</p>
        <h2>2. Dados pessoais coletados</h2>
        <ul><li>nome;</li><li>telefone;</li><li>e-mail;</li><li>país ou cidade de residência;</li><li>informações enviadas voluntariamente pelo formulário ou WhatsApp;</li><li>documentos enviados para orçamento ou prestação do serviço;</li><li>dados necessários para comunicação, orçamento, tradução, apostilamento ou orientação documental.</li></ul>
        <h2>3. Finalidades do tratamento</h2>
        <ul><li>responder solicitações de contato;</li><li>preparar orçamento;</li><li>analisar documentos enviados pelo cliente;</li><li>prestar serviços de tradução e orientação documental;</li><li>cumprir obrigações legais ou administrativas;</li><li>manter histórico mínimo de atendimento;</li><li>melhorar a segurança e funcionamento do site.</li></ul>
        <h2>4. Base jurídica</h2>
        <p>O tratamento pode ocorrer com base em execução de medidas pré-contratuais, execução de contrato, obrigação legal, legítimo interesse para comunicação e segurança, ou consentimento quando aplicável.</p>
        <h2>5. Compartilhamento de dados</h2>
        <p>Os dados podem ser compartilhados apenas quando necessário para execução do serviço, cumprimento de obrigação legal, comunicação com o cliente, processamento técnico ou exigência de autoridade competente. Não vendemos dados pessoais.</p>
        <h2>6. Conservação dos dados</h2>
        <p>Os dados serão mantidos pelo tempo necessário para cumprir as finalidades indicadas, obrigações legais, defesa de direitos ou manutenção de histórico mínimo do serviço.</p>
        <h2>7. Direitos do titular</h2>
        <p>O usuário pode solicitar acesso, correção, exclusão quando possível, limitação do tratamento, oposição, portabilidade quando aplicável, revogação do consentimento e reclamação perante autoridade competente.</p>
        <h2>8. Segurança</h2>
        <p>Adotamos medidas razoáveis para proteger os dados pessoais contra acesso não autorizado, perda, uso indevido ou divulgação indevida.</p>
        <h2>9. Documentos enviados</h2>
        <p>Os documentos enviados pelo usuário são utilizados exclusivamente para análise, orçamento ou execução do serviço solicitado.</p>
        <h2>10. Contato</h2>
        <p>Para dúvidas ou solicitações sobre privacidade, utilize o canal de atendimento informado no site.</p>
      </TextContent>
    </PageShell>
  );
}
