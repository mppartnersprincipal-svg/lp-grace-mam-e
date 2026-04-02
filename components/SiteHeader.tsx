import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-white text-center px-5 py-5 border-b border-brand-gray-border">
      <Image
        src="/logo-sem-fundo.png"
        alt="A Mamãe é Top e o Papai Também!"
        width={180}
        height={64}
        className="inline-block h-16 w-auto"
        priority
      />
    </header>
  );
}
