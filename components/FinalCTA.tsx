import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <div className="py-14 text-center pb-16">
      <ScrollReveal direction="up" delay={0}>
        <div className="flex items-center justify-center gap-3 mb-6">
          <hr className="flex-1 border-none border-t border-brand-gray-border max-w-[80px]" />
          <svg width="28" height="25" viewBox="0 0 28 25" fill="none" aria-hidden="true">
            <path d="M14 23C10 20 2 15 2 8.5C2 5 4.7 2.5 8 2.5C10 2.5 12 3.7 14 6C16 3.7 18 2.5 20 2.5C23.3 2.5 26 5 26 8.5C26 15 18 20 14 23Z" fill="#eb0031" />
          </svg>
          <hr className="flex-1 border-none border-t border-brand-gray-border max-w-[80px]" />
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.3] mb-4 text-brand-text">
          A relação que você quer com seu filho<br />
          começa com a <span className="text-brand-red">decisão de hoje.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <p className="text-[0.95rem] font-light text-brand-muted leading-[1.8] mb-8 max-w-[520px] mx-auto">
          Não amanhã. Não quando der. Agora — porque cada dia sem as ferramentas certas é mais um dia de distância que poderia ser conexão.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={350} duration={800}>
        <a
          href="#oferta"
          className="inline-block bg-brand-purple text-white font-semibold text-[0.95rem] px-10 py-4 rounded-full transition-all duration-200 hover:bg-brand-purple-dark hover:-translate-y-px active:translate-y-0"
        >
          Quero começar agora · R$ 497
        </a>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={500}>
        <p className="text-[0.78rem] font-light text-brand-muted mt-3">
          ou 12x de R$ 49,22 · Acesso imediato
        </p>
      </ScrollReveal>
    </div>
  );
}
