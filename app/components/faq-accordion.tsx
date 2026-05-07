export function FAQAccordion({ items }: { items: readonly (readonly [string, string])[] }) {
  return (
    <div className="grid gap-4">
      {items.map(([question, answer]) => (
        <details key={question} className="rounded-[8px] border border-[#d8a84f]/30 bg-[#020817] p-5">
          <summary className="cursor-pointer list-none font-serif text-xl text-[#f8f5ee]">
            {question}
          </summary>
          <p className="mt-4 leading-7 text-[#f8f5ee]/72">{answer}</p>
        </details>
      ))}
    </div>
  );
}
