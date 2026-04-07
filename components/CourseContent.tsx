import ScrollReveal from "./ScrollReveal";

const modules = [
  "Perfil comportamental",
  "Parentalidade Consciente",
  "Alfabetização Emocional — Reconhecer o sentimento",
  "Alfabetização Emocional (10 Tipos de Pais)",
  "Os 4 Temperamentos Na Educação dos Filhos",
  "Como você ouve Seu Filho (Comunicação Não Violenta) – Que Tipo de ouvinte você é?",
  "Linguagens de Amor na Educação dos Filhos",
  "MindSet na Educação dos Filhos",
  "Alfabetização Emocional",
];

export default function CourseContent() {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          O que você aprende
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          9 módulos de ferramentas. <span className="text-brand-purple">Zero teoria vaga.</span>
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <p className="text-[0.95rem] font-light text-brand-muted leading-[1.85] mb-4">
          Cada módulo foi construído para sair do curso e ir direto para a sua relação com seus filhos.
        </p>
      </ScrollReveal>

      <ul className="border border-brand-gray-border rounded-2xl overflow-hidden my-6">
        {modules.map((mod, i) => (
          <ScrollReveal key={i} direction="left" delay={i * 60}>
            <li className={`flex items-center gap-4 px-5 py-[0.95rem] text-[0.9rem] font-normal text-brand-text leading-[1.5] ${i < modules.length - 1 ? "border-b border-brand-gray-border" : ""}`}>
              <span
                className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[0.72rem] font-extrabold text-white"
                style={{ background: i % 2 === 0 ? "#eb0031" : "#401199" }}
              >
                {i + 1}
              </span>
              {mod}
            </li>
          </ScrollReveal>
        ))}
      </ul>
    </div>
  );
}
