import type { Metadata } from "next";
import { createPageMetadata } from "../lib/seo";
import { PageShell, TextContent } from "../components/page-shell";

export const metadata: Metadata = createPageMetadata({
  title: "Termos de Uso",
  description: "Termos de uso do site de tradução juramentada, apostilamento e orientação documental português italiano.",
  path: "/termos-de-uso",
});

export default function Page() {
  return (
    <PageShell title="Termos de Uso" pagePath="/termos-de-uso" cta={false}>
      <TextContent>
        <p>Ao acessar este site ou solicitar atendimento, o usuário concorda com estes Termos de Uso.</p>
        <h2>1. Finalidade do site</h2><p>Este site apresenta informações sobre serviços de tradução juramentada português → italiano, tradução italiano → português, apostilamento e orientação documental.</p>
        <h2>2. Informações do site</h2><p>As informações disponibilizadas têm caráter informativo e não substituem exigências específicas de órgãos públicos, autoridades, comunes, consulados, tribunais, universidades ou demais entidades destinatárias.</p>
        <h2>3. Orçamentos</h2><p>O orçamento depende da análise dos documentos, quantidade de páginas, idioma, urgência, finalidade e eventuais exigências adicionais.</p>
        <h2>4. Prazos</h2><p>Os prazos informados são estimativas e podem variar conforme complexidade do documento, volume de trabalho, feriados, exigências externas ou procedimentos de terceiros.</p>
        <h2>5. Documentos enviados</h2><p>O usuário declara que possui direito de enviar os documentos para análise e prestação do serviço.</p>
        <h2>6. Responsabilidade do usuário</h2><p>O usuário deve informar corretamente onde o documento será apresentado e qual finalidade pretende alcançar.</p>
        <h2>7. Limitação de responsabilidade</h2><p>O serviço não se responsabiliza por exigências posteriores de órgãos terceiros quando tais exigências não foram informadas previamente pelo cliente ou dependem de critérios próprios da autoridade destinatária.</p>
        <h2>8. Pagamento</h2><p>O pagamento poderá ser feito conforme meios informados no atendimento, incluindo pagamento em euro, reais ou PIX, quando disponível.</p>
        <h2>9. Alterações</h2><p>Estes termos podem ser atualizados periodicamente.</p>
        <h2>10. Contato</h2><p>Dúvidas podem ser enviadas pelo canal de atendimento informado no site.</p>
      </TextContent>
    </PageShell>
  );
}
