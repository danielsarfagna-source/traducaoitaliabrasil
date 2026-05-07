import type { Metadata } from "next";
import { PageShell, TextContent } from "../components/page-shell";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies com opções de consentimento para cookies técnicos, analíticos e marketing.",
};

export default function Page() {
  return (
    <PageShell title="Política de Cookies" cta={false}>
      <TextContent>
        <p>Esta Política de Cookies explica como este site utiliza cookies e tecnologias semelhantes.</p>
        <h2>1. O que são cookies</h2>
        <p>Cookies são pequenos arquivos armazenados no dispositivo do usuário quando ele acessa um site. Eles podem ser usados para funcionamento técnico, estatísticas, melhoria de navegação ou finalidades de marketing.</p>
        <h2>2. Tipos de cookies utilizados</h2>
        <h3>Cookies técnicos</h3>
        <p>São necessários para funcionamento básico do site, segurança, navegação e preferências essenciais. Não exigem consentimento prévio.</p>
        <h3>Cookies analíticos</h3>
        <p>Podem ser usados para entender como os visitantes utilizam o site. Quando não forem anonimizados ou equivalentes a técnicos, dependerão de consentimento.</p>
        <h3>Cookies de marketing ou perfilamento</h3>
        <p>Podem ser utilizados para publicidade, remarketing ou personalização. Só serão ativados mediante consentimento.</p>
        <h2>3. Gestão do consentimento</h2>
        <p>O usuário pode aceitar, recusar ou configurar os cookies não essenciais por meio do banner de cookies. Se o usuário fechar o banner sem aceitar, serão mantidos apenas cookies técnicos.</p>
        <h2>4. Como alterar preferências</h2>
        <p>O usuário poderá alterar suas preferências de cookies a qualquer momento por meio do link “Preferências de cookies” no rodapé do site.</p>
        <h2>5. Cookies de terceiros</h2>
        <p>Alguns serviços externos podem utilizar cookies próprios, como ferramentas de análise, mapas, vídeos incorporados ou plataformas de publicidade. Quando aplicável, esses cookies serão ativados apenas conforme a preferência do usuário.</p>
        <h2>6. Contato</h2>
        <p>Para dúvidas sobre cookies: [E-MAIL DE CONTATO]</p>
      </TextContent>
    </PageShell>
  );
}
