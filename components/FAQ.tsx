import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Precisa ter experiência com inteligência emocional?",
    a: "Não. O curso foi feito para quem está começando do zero. Se você já tem algum conhecimento, vai aprofundar e ganhar ferramentas novas.",
  },
  {
    q: "Funciona para qual faixa etária dos filhos?",
    a: "As ferramentas funcionam para crianças e adolescentes. O foco é na transformação dos pais — e isso impacta qualquer idade.",
  },
  {
    q: "Sou psicólogo ou terapeuta. Esse curso serve para mim?",
    a: "Sim. Vários profissionais já passaram pelo curso e usam as ferramentas nos atendimentos. O certificado de conclusão com carga horária está disponível sob solicitação.",
  },
  {
    q: "Por quanto tempo tenho acesso?",
    a: "Acesso vitalício. Uma vez dentro, é para sempre — incluindo atualizações futuras.",
  },
  {
    q: "E se eu não gostar?",
    a: "Entre em contato. A Grace quer que você tenha resultados — não só que compre o curso.",
  },
  {
    q: "O curso tem base cristã?",
    a: "Sim. O método é fundamentado em valores e princípios cristãos, trazendo uma perspectiva de amor, paciência e propósito para a educação dos filhos.",
  },
];

export default function FAQ() {
  return (
    <div className="py-12 border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Dúvidas frequentes
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-6 text-brand-text">
          Ainda tem dúvidas? <span className="text-brand-purple">A gente responde.</span>
        </h2>
      </ScrollReveal>

      <div className="border border-brand-gray-border rounded-2xl overflow-hidden my-6">
        {faqs.map((faq, i) => (
          <ScrollReveal key={i} direction="up" delay={i * 80}>
            <div className={`px-5 py-5 ${i < faqs.length - 1 ? "border-b border-brand-gray-border" : ""}`}>
              <p className="text-[0.92rem] font-bold text-brand-text mb-2 flex items-start gap-1.5 before:content-[''] before:shrink-0 before:w-1 before:h-1 before:rounded-full before:bg-brand-red before:mt-[7px]">
                {faq.q}
              </p>
              <p className="text-[0.88rem] font-light text-brand-muted leading-[1.75] pl-4">
                {faq.a}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
