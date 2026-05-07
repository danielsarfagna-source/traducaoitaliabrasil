import { CTASection } from "./cta-section";
import { Footer } from "./footer";
import { SiteHeader } from "./site-header";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
  cta = true,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  cta?: boolean;
}) {
  return (
    <main className="min-h-screen bg-[#020817] text-[#f8f5ee]">
      <SiteHeader />
      <section className="relative overflow-hidden border-b border-[#d8a84f]/24 px-5 pb-16 pt-36 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_10%,rgba(216,168,79,0.18),transparent_28%),linear-gradient(180deg,#07111f_0%,#020817_78%)]" />
        <div className="relative mx-auto max-w-[1080px]">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">{eyebrow}</p> : null}
          <h1 className="mt-4 font-serif text-5xl leading-tight sm:text-6xl">{title}</h1>
          {intro ? <p className="mt-6 max-w-3xl text-xl leading-9 text-[#f8f5ee]/76">{intro}</p> : null}
        </div>
      </section>
      <section className="px-5 py-16 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1080px]">{children}</div>
      </section>
      {cta ? <CTASection /> : null}
      <Footer />
    </main>
  );
}

export function TextContent({ children }: { children: React.ReactNode }) {
  return (
    <article className="rounded-[8px] border border-[#d8a84f]/32 bg-[#07111f]/76 p-7 leading-8 text-[#f8f5ee]/76 sm:p-10">
      {children}
    </article>
  );
}
