import Image from "next/image";

const testimonials = [
  {
    name: "Dayane Marques",
    rating: 5,
    text: "Tudo certo, pessoal excelente e educado.",
    image: "/assets/testimonial-2.jpeg",
  },
  {
    name: "Ferdinando Gasperinne",
    rating: 5,
    text: "Tradução perfeita, tudo em ordem, tudo muito rápido e prestativo.",
    image: "/assets/testimonial-1.jpeg",
  },
  {
    name: "Jefferson Toaldo",
    rating: 5,
    text: "Perfeito, tiraram todas as minhas dúvidas, preço justo, virei cliente.",
    image: "/assets/testimonial-3.jpeg", // I'll use a placeholder if I don't have the 3rd image
  },
];

export function Testimonials() {
  return (
    <section className="bg-[#020817] px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1480px]">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">Quem já confiou na gente</p>
          <h2 className="mt-4 font-serif text-4xl text-[#f8f5ee] sm:text-5xl">
            Brasileiros que precisavam de tradução oficial e resolveram sem dor de cabeça.
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group relative rounded-[8px] border border-[#d8a84f]/25 bg-[#07111f]/60 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition hover:border-[#d8a84f]/50"
            >
              <div className="flex gap-1 text-[#d8a84f]">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>
              <p className="mt-6 text-lg italic leading-8 text-[#f8f5ee]/90">
                "{testimonial.text}"
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="relative size-14 overflow-hidden rounded-full border border-[#d8a84f]/30">
                  {testimonial.image && testimonial.image !== "/assets/testimonial-3.jpeg" ? (
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="grid h-full w-full place-items-center bg-[#0b1628] text-xl font-bold text-[#d8a84f]">
                      {testimonial.name[0]}
                    </div>
                  )}
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#f8f5ee]">{testimonial.name}</p>
                  <p className="text-xs uppercase tracking-widest text-[#d8a84f]/80">Cliente Verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
