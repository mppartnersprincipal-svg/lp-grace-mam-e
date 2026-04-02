import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { num: "15+", desc: "anos em educação e desenvolvimento emocional", color: "text-brand-red" },
  { num: "10h", desc: "de conteúdo direto ao ponto, sem enrolação",   color: "text-brand-purple" },
  { num: "100%", desc: "ferramentas práticas para aplicar hoje mesmo", color: "text-brand-blue" },
];

export default function About() {
  return (
    <div className="py-12 border-b border-brand-gray-border">
      <ScrollReveal direction="up" delay={0}>
        <p className="inline-flex items-center gap-1.5 text-[0.7rem] font-semibold tracking-[0.1em] uppercase text-brand-purple mb-3">
          Quem ensina
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <h2 className="text-[clamp(1.35rem,3vw,1.85rem)] font-extrabold leading-[1.25] mb-6 text-brand-text">
          Experiência de consultório.{" "}
          <span className="text-brand-red">Ferramentas que funcionam</span> na vida real.
        </h2>
      </ScrollReveal>

      <div className="grid max-[580px]:grid-cols-1 gap-8 items-start my-6" style={{ gridTemplateColumns: "260px 1fr" }}>
        <ScrollReveal direction="right" delay={200} duration={800}>
          <Image
            src="/foto-grace.jpeg"
            alt="Grace Bezerra — Especialista em Inteligência Emocional"
            width={260}
            height={347}
            className="w-full rounded-2xl object-cover"
            style={{ aspectRatio: "3/4" }}
          />
        </ScrollReveal>

        <div className="flex flex-col gap-3.5">
          <ScrollReveal direction="left" delay={0}>
            <p className="text-[1.5rem] font-extrabold text-brand-text leading-[1.2]">Grace Bezerra</p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={150}>
            <p className="text-[0.8rem] font-semibold text-brand-red mb-1">
              Especialista em Inteligência Emocional · 15 anos de atuação
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={300}>
            <p className="text-[0.9rem] font-light text-brand-muted leading-[1.8]">
              Ao longo de mais de uma década de consultório, Grace atendeu centenas de famílias com os mesmos desafios que você enfrenta hoje.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={400}>
            <p className="text-[0.9rem] font-light text-brand-muted leading-[1.8]">
              O que ela ensina não veio de livros — veio de observar o que realmente transforma a relação entre pais e filhos na prática.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={500}>
            <p className="text-[0.9rem] font-light text-brand-muted leading-[1.8]">
              Suas ferramentas de alfabetização emocional e autoconhecimento já ajudaram pais, educadores, psicólogos e terapeutas a criarem relações mais leves, honestas e saudáveis com as crianças ao seu redor.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={600}>
            <p className="text-[0.9rem] font-light text-brand-muted leading-[1.8]">
              Tudo fundamentado em valores e princípios cristãos.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="grid grid-cols-3 max-[420px]:grid-cols-1 gap-3 my-6">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.num} direction="up" delay={i * 150}>
            <div className="bg-brand-gray-bg border border-brand-gray-border rounded-xl px-4 py-4 text-center">
              <span className={`text-[1.85rem] font-extrabold block mb-1 leading-none ${stat.color}`}>
                {stat.num}
              </span>
              <span className="text-[0.75rem] font-normal text-brand-muted leading-[1.4]">
                {stat.desc}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
