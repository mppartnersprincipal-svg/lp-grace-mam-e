import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "\u201cEu achei que meu filho tinha algum problema sério. Depois do curso, entendi que o problema era a falta de ferramentas — minhas. Em dois meses, a relação mudou completamente.\u201d",
    author: "Mãe, 34 anos · filho de 7 anos",
    bg: "bg-brand-red-light",
    border: "border-brand-red",
  },
  {
    text: "\u201cComo terapeuta, eu já conhecia a teoria. O que a Grace traz são ferramentas que eu consigo levar para os meus atendimentos. Vale muito além do que paguei.\u201d",
    author: "Psicóloga · 29 anos de formação",
    bg: "bg-brand-purple-light",
    border: "border-brand-purple",
  },
  {
    text: "\u201cMinha filha adolescente parou de falar comigo. Hoje a gente tem conversas reais. Não foi magia — foram as ferramentas certas no momento certo.\u201d",
    author: "Pai, 42 anos · filha de 15 anos",
    bg: "bg-brand-blue-light",
    border: "border-brand-blue",
  },
];

export default function Testimonials() {
  return (
    <div className="py-12 border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Quem já transformou
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-3 text-brand-text">
          Resultados reais de <span className="text-brand-red">pais reais.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={150}>
        <p className="text-[0.78rem] text-brand-muted bg-brand-gray-bg px-3.5 py-2.5 rounded-lg border-l-[3px] border-brand-blue mb-0">
          ⚠️ Substituir pelos depoimentos reais da Grace antes de publicar
        </p>
      </ScrollReveal>

      <div className="flex flex-col gap-4 my-6">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 150}>
            <div className={`${t.bg} border-l-4 ${t.border} rounded-2xl p-[1.4rem]`}>
              <p className="text-[0.93rem] font-normal italic text-brand-text leading-[1.7] mb-3">
                {t.text}
              </p>
              <span className="text-[0.75rem] font-semibold text-brand-muted">
                {t.author}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
