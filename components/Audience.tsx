import ScrollReveal from "./ScrollReveal";

const items = [
  "Pais e mães que querem uma relação mais leve e saudável com os filhos",
  "Educadores que trabalham diariamente com crianças e adolescentes",
  "Psicólogos e terapeutas que querem novas ferramentas para seus atendimentos",
  "Qualquer pessoa que quer quebrar padrões emocionais herdados e criar novos",
];

export default function Audience() {
  return (
    <div className="py-12 border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Para quem é
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          Feito para pais e profissionais que querem ir{" "}
          <span className="text-brand-purple">além da teoria.</span>
        </h2>
      </ScrollReveal>

      <ul className="flex flex-col gap-2.5 my-6">
        {items.map((item, i) => (
          <ScrollReveal key={i} direction="left" delay={i * 100}>
            <li className="flex items-start gap-3.5 text-[0.93rem] font-normal text-brand-text leading-[1.6] bg-brand-purple-light rounded-xl px-4 py-3.5 border-l-[3px] border-brand-purple">
              <span className="shrink-0 font-semibold text-brand-purple">✓</span>
              {item}
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </div>
  );
}
