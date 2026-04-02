import ScrollReveal from "./ScrollReveal";

const before = ["Crises sem saída", "Conflito constante", "Culpa e exaustão", "Repetindo padrões", "Distância emocional"];
const after  = ["Ferramentas para cada situação", "Limites com conexão", "Leveza e confiança", "Novos padrões conscientes", "Vínculo saudável e real"];

export default function Transformation() {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          O que muda
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          Da sobrevivência diária para uma relação que você{" "}
          <span className="text-brand-purple">realmente queria ter.</span>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-2 max-[480px]:grid-cols-1 gap-4 my-6">
        <ScrollReveal direction="left" delay={150}>
          <div className="bg-brand-red-light border border-[#f5c0c8] rounded-2xl p-5 h-full">
            <div className="text-[0.7rem] font-extrabold tracking-[0.12em] uppercase text-brand-red mb-3">Antes</div>
            <ul className="flex flex-col gap-2">
              {before.map((item) => (
                <li key={item} className="text-[0.88rem] font-normal text-brand-text leading-[1.5] pl-3 border-l-2 border-brand-red">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={150}>
          <div className="bg-brand-purple-light border border-[#c9bff0] rounded-2xl p-5 h-full">
            <div className="text-[0.7rem] font-extrabold tracking-[0.12em] uppercase text-brand-purple mb-3">Depois</div>
            <ul className="flex flex-col gap-2">
              {after.map((item) => (
                <li key={item} className="text-[0.88rem] font-normal text-brand-text leading-[1.5] pl-3 border-l-2 border-brand-purple">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal direction="up" delay={300}>
        <p className="text-[0.95rem] font-light text-brand-muted leading-[1.85]">
          O resultado não é um filho perfeito. É uma relação honesta, leve e com inteligência emocional dos dois lados.
        </p>
      </ScrollReveal>
    </div>
  );
}
