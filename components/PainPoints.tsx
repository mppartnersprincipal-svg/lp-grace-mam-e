import ScrollReveal from "./ScrollReveal";

const pains = [
  "Seu filho tem crises de raiva, choro ou agressividade que você não sabe como conter",
  "Você tenta conversar, mas vira briga. Tenta impor limites, mas vira conflito",
  "Sente que está repetindo os erros dos seus próprios pais — mesmo sem querer",
  "Já tentou seguir conselhos da internet, de familiares — e nada funciona de verdade",
  "No fim do dia, a culpa fica. \u201cSerá que eu estou errando com meu filho?\u201d",
];

export default function PainPoints() {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Reconhece essa situação?
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          Você faz tudo por ele — e ainda assim a relação{" "}
          <span className="text-brand-red">não funciona.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <p className="text-[0.95rem] font-light text-brand-muted leading-[1.85] mb-4">
          Não é falta de amor. É falta de ferramentas. Ninguém nos ensinou como lidar com emoções — nem as nossas, nem as dos nossos filhos.
        </p>
      </ScrollReveal>

      <ul className="flex flex-col gap-[0.65rem] my-6">
        {pains.map((pain, i) => (
          <ScrollReveal key={i} direction="left" delay={i * 100}>
            <li className="flex items-start gap-[0.85rem] text-[0.93rem] font-normal text-brand-text leading-[1.6] bg-brand-gray-bg rounded-xl px-4 py-[0.85rem] border-l-[3px] border-brand-red">
              <span className="shrink-0 mt-[1px]">—</span>
              {pain}
            </li>
          </ScrollReveal>
        ))}
      </ul>

      <ScrollReveal direction="up" delay={300}>
        <p className="text-[0.95rem] font-light text-brand-muted leading-[1.85]">
          Isso não é fraqueza. É o que acontece quando criamos filhos sem inteligência emocional — porque ninguém nos ensinou isso antes.
        </p>
      </ScrollReveal>
    </div>
  );
}
