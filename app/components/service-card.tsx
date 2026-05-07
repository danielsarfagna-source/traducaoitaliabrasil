export function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-[8px] border border-[#d8a84f]/34 bg-[#07111f]/82 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
      <div className="mb-5 grid size-11 place-items-center rounded-[8px] border border-[#d8a84f]/45 text-2xl text-[#d8a84f]">
        ▧
      </div>
      <h3 className="font-serif text-2xl leading-8 text-[#f8f5ee]">{title}</h3>
      <p className="mt-4 leading-7 text-[#f8f5ee]/72">{text}</p>
    </article>
  );
}
