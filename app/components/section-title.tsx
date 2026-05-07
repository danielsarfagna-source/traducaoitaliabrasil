type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, text, align = "center" }: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 font-serif text-4xl leading-tight text-[#f8f5ee] sm:text-5xl">{title}</h2>
      {text ? <p className="mt-5 text-lg leading-8 text-[#f8f5ee]/72">{text}</p> : null}
    </div>
  );
}
