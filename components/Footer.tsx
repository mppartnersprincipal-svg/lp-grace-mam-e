import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-brand-purple py-6 px-5 text-center">
      <Image
        src="/logo-sem-fundo.png"
        alt="A Mamãe é Top e o Papai Também!"
        width={140}
        height={48}
        className="h-12 w-auto mx-auto mb-3 opacity-90 brightness-0 invert"
      />
      <p className="text-white/70 text-[0.75rem] font-light">
        <strong className="text-white font-semibold">A Mamãe é Top e o Papai Também!</strong>{" "}
        · Grace Bezerra · Todos os direitos reservados
      </p>
    </footer>
  );
}
