import { WhatsAppButton } from "./whatsapp-button";

export function CTASection({
  title = "Precisa traduzir ou apostilar um documento?",
  text = "Envie uma foto ou PDF pelo WhatsApp e receba orientação sobre o melhor caminho para o seu caso.",
  button = "Falar no WhatsApp",
}: {
  title?: string;
  text?: string;
  button?: string;
}) {
  return (
    <section id="contato" className="bg-[#020817] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-[1180px] gap-8 rounded-[8px] border border-[#d8a84f]/55 bg-[radial-gradient(circle_at_top_right,rgba(216,168,79,0.16),transparent_36%),#07111f] p-8 md:grid-cols-[1fr_auto] md:items-center md:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">Atendimento em português</p>
          <h2 className="mt-3 font-serif text-4xl text-[#f8f5ee]">{title}</h2>
          <p className="mt-4 max-w-2xl leading-7 text-[#f8f5ee]/72">{text}</p>
        </div>
        <WhatsAppButton className="rounded-[8px] bg-[linear-gradient(135deg,#f3cf80,#d8a84f_48%,#ad711f)] px-8 py-5 text-center text-sm font-black uppercase tracking-[0.08em] text-[#020817] shadow-[0_18px_48px_rgba(216,168,79,0.28)]">
          {button}
        </WhatsAppButton>
      </div>
    </section>
  );
}
