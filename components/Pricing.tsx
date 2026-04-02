import ScrollReveal from "./ScrollReveal";

const valueRows = [
  { label: "Curso completo — 10 horas de conteúdo", val: "R$ 497" },
  { label: "Acesso vitalício a atualizações",         val: "incluso" },
  { label: "Certificado de conclusão (sob solicitação)", val: "incluso" },
  { label: "Acesso em qualquer dispositivo",          val: "incluso" },
];

const includes = [
  "10 horas de conteúdo em vídeo com acesso vitalício",
  "Ferramentas de alfabetização emocional prontas para usar",
  "Metodologia com 15 anos de experiência de consultório",
  "Certificado de conclusão com carga horária (sob solicitação)",
  "Acesso pelo celular, tablet ou computador",
  "Fundamentado em valores e princípios cristãos",
];

function CheckIcon() {
  return (
    <span className="w-5 h-5 shrink-0 bg-brand-purple rounded-full flex items-center justify-center">
      <svg viewBox="0 0 9 9" width="9" height="9" aria-hidden="true">
        <polyline points="1,4.5 3.5,7 8,2" fill="none" stroke="#fff" strokeWidth="1.8" />
      </svg>
    </span>
  );
}

export default function Pricing() {
  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="border-b border-brand-gray-border" id="oferta">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Investimento
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          Menos que uma consulta. Para o{" "}
          <span className="text-brand-red">resto da relação</span> com seu filho.
        </h2>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={200}>
        <div className="bg-brand-gray-bg border border-brand-gray-border rounded-xl p-5 mb-4">
          {valueRows.map((row, i) => (
            <div
              key={i}
              className={`flex justify-between items-center text-[0.87rem] font-normal py-[0.45rem] ${i < valueRows.length - 1 ? "border-b border-brand-gray-border" : ""}`}
            >
              <span>{row.label}</span>
              <span className="font-semibold text-brand-muted text-[0.82rem] whitespace-nowrap ml-4">{row.val}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-3 font-extrabold text-[0.95rem]">
            <span>Você paga hoje</span>
            <span className="text-brand-red text-[1.15rem]">R$ 497</span>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={350} duration={800}>
        <div className="border-2 border-brand-red rounded-3xl overflow-hidden my-6">
          <div className="bg-brand-red px-5 sm:px-8 pt-6 pb-5 text-center">
            <p className="text-[0.72rem] font-extrabold tracking-[0.12em] uppercase text-white/80 mb-3">
              Curso · A Mamãe é Top e o Papai Também!
            </p>
            <p className="text-[0.85rem] text-white/60 line-through mb-[0.15rem]">De R$ 997</p>
            <p className="text-[3.2rem] font-extrabold text-white leading-none mb-1">R$ 497</p>
            <p className="text-[0.82rem] font-light text-white/85">
              ou 12x de R$ 49,22 · Acesso imediato e vitalício
            </p>
          </div>
          <div className="bg-white px-5 sm:px-8 py-7">
            <ul className="flex flex-col gap-[0.65rem] mb-7">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-[0.9rem] font-normal text-brand-text">
                  <CheckIcon />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://pay.kiwify.com.br/Q6p0tJ4"
              className="block w-full text-center bg-brand-red text-white font-semibold text-[1rem] px-4 py-[1.1rem] rounded-full transition-all duration-200 hover:bg-brand-red-dark hover:-translate-y-px active:translate-y-0"
            >
              Quero transformar minha relação com meu filho
            </a>
            <p className="text-[0.75rem] font-light text-brand-muted mt-4 text-center leading-[1.6]">
              Compra 100% segura · Pagamento criptografado · Satisfação garantida
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
