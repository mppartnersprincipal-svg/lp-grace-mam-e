import ScrollReveal from "./ScrollReveal";

const items = [
  { label: "15 anos de experiência", color: "#eb0031" },
  { label: "Pais e profissionais",   color: "#401199" },
  { label: "Ferramentas práticas",   color: "#009ee5" },
  { label: "Valores cristãos",       color: "#eb0031" },
];

export default function TrustBar() {
  return (
    <div className="flex justify-center flex-wrap gap-6 py-5 border-b border-brand-gray-border">
      {items.map((item, i) => (
        <ScrollReveal key={item.label} direction="up" delay={i * 100} threshold={0.3}>
          <div className="flex items-center gap-2 text-[0.78rem] font-semibold text-brand-muted">
            <span
              className="w-[7px] h-[7px] rounded-full shrink-0"
              style={{ background: item.color }}
            />
            {item.label}
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
