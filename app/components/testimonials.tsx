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
    image: null,
  },
  {
    name: "Rafael Tonetto",
    rating: 5,
    text: "Cuidado em cada detalhe do começo ao fim. Recebi tudo certinho e no prazo que prometeram.",
    image: null,
  },
  {
    name: "Camila Bordigno",
    rating: 5,
    text: "Fui super bem atendido em português, sem aquela burocracia. Resolveram minha papelada rápido.",
    image: null,
  },
  {
    name: "Diego Sartori",
    rating: 5,
    text: "Preço justo e trabalho impecável. Indiquei pra dois amigos que também estão com processo na Itália.",
    image: null,
  },
];

function TestimonialCard({
  name,
  rating,
  text,
  image,
}: (typeof testimonials)[0]) {
  return (
    <div className="w-[320px] shrink-0 rounded-[8px] border border-[#d8a84f]/25 bg-[#07111f]/60 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition hover:border-[#d8a84f]/50 sm:w-[360px]">
      <div className="flex gap-1 text-[#d8a84f]">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-lg">★</span>
        ))}
      </div>
      <p className="mt-5 text-base italic leading-7 text-[#f8f5ee]/90">
        &ldquo;{text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-4">
        <div className="relative size-12 overflow-hidden rounded-full border border-[#d8a84f]/30 shrink-0">
          {image ? (
            <Image src={image} alt={name} fill className="object-cover" />
          ) : (
            <div className="grid h-full w-full place-items-center bg-[#0b1628] text-lg font-bold text-[#d8a84f]">
              {name[0]}
            </div>
          )}
        </div>
        <div>
          <p className="font-serif text-base font-bold text-[#f8f5ee]">{name}</p>
          <p className="text-xs uppercase tracking-widest text-[#d8a84f]/80">
            Cliente Verificado
          </p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-[#020817] py-20 overflow-hidden">
      <div className="mx-auto max-w-[1480px] px-5 sm:px-8 lg:px-12">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8a84f]">
            Quem já confiou na gente
          </p>
          <h2 className="mt-4 font-serif text-4xl text-[#f8f5ee] sm:text-5xl">
            Brasileiros que precisavam de tradução juramentada e resolveram sem dor de cabeça.
          </h2>
        </div>
      </div>

      {/* Carrossel marquee */}
      <div className="mt-14 group" aria-label="Depoimentos de clientes">
        <div className="flex w-max animate-marquee-slow gap-6 px-6 group-hover:[animation-play-state:paused]">
          {/* Duplicar para loop sem salto */}
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
