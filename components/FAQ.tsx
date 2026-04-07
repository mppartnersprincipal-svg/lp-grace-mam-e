"use client";

import { useState } from "react";
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

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-300"
      style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
    >
      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div style={{ paddingTop: "3rem", paddingBottom: "3rem" }} className="border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Dúvidas frequentes
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-5 text-brand-text">
          Ainda tem dúvidas? <span className="text-brand-purple">A gente responde.</span>
        </h2>
      </ScrollReveal>

      <div className="border border-brand-gray-border rounded-2xl overflow-hidden my-6">
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <ScrollReveal key={i} direction="up" delay={i * 60}>
              <div className={i < faqs.length - 1 ? "border-b border-brand-gray-border" : ""}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left"
                >
                  <span className="text-[0.92rem] font-bold text-brand-text leading-snug">
                    {faq.q}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "300px" : "0px", opacity: isOpen ? 1 : 0 }}
                >
                  <p className="text-[0.88rem] font-light text-brand-muted leading-[1.75] px-5 pb-5">
                    {faq.a}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </div>
  );
}
