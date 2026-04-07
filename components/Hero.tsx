import ScrollReveal from "./ScrollReveal";
import SocialProof from "./SocialProof";

export default function Hero() {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "2.5rem" }} className="text-center border-b border-brand-gray-border relative overflow-hidden">
      <ScrollReveal direction="up" delay={0}>
        <SocialProof />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={80}>
        <div className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-red bg-brand-red-light rounded-full px-3.5 py-[5px] mb-6">
          <svg width="10" height="9" viewBox="0 0 10 9" aria-hidden="true">
            <path d="M5 8.5C3 7 1 5.5 1 3.2C1 1.8 2.1 1 3.4 1C4.1 1 4.7 1.4 5 2C5.3 1.4 5.9 1 6.6 1C7.9 1 9 1.8 9 3.2C9 5.5 7 7 5 8.5Z" fill="#eb0031" />
          </svg>
          Inteligência Emocional na Prática
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={150}>
        <h1 className="text-[clamp(1.9rem,5vw,2.9rem)] font-extrabold leading-[1.15] mb-[1.25rem] text-brand-text">
          Seu filho não tem um<br />
          <span className="text-brand-red">problema de comportamento.</span><br />
          Ele tem uma necessidade emocional<br />
          <span className="text-brand-purple">sem resposta.</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={300}>
        <p className="text-[1rem] font-light text-brand-muted leading-[1.8] max-w-[580px] mx-auto mb-8">
          Aprenda as ferramentas que 15 anos de consultório comprovaram: como transformar crises, agressividade e rebeldia em conexão real com seus filhos.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={450}>
        <a
          href="#oferta"
          className="block w-full sm:inline-block sm:w-auto bg-brand-red text-white font-semibold text-[0.95rem] px-6 sm:px-10 py-4 rounded-full transition-all duration-200 hover:bg-brand-red-dark hover:-translate-y-px active:translate-y-0"
        >
          Quero transformar minha relação com meu filho
        </a>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={600}>
        <p className="mt-4 text-[0.75rem] font-light text-brand-muted">
          Acesso imediato <span className="mx-1.5 opacity-40">·</span> 10 horas de conteúdo <span className="mx-1.5 opacity-40">·</span> Ferramentas práticas para usar hoje
        </p>
      </ScrollReveal>
    </div>
  );
}
