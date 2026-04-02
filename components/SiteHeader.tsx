import Image from "next/image";

export default function SiteHeader() {
  return (
    <header style={{ background: "#fff", textAlign: "center", padding: "1.25rem", borderBottom: "1px solid #ececec" }}>
      <Image
        src="/logo-sem-fundo.png"
        alt="A Mamãe é Top e o Papai Também!"
        width={200}
        height={72}
        style={{ display: "inline-block", height: "64px", width: "auto" }}
        priority
      />
    </header>
  );
}
