const avatars = [
  { src: "https://i.pravatar.cc/40?img=47", alt: "Mãe aluna" },
  { src: "https://i.pravatar.cc/40?img=48", alt: "Pai aluno" },
  { src: "https://i.pravatar.cc/40?img=53", alt: "Mãe aluna" },
  { src: "https://i.pravatar.cc/40?img=44", alt: "Mãe aluna" },
];

export default function SocialProof() {
  return (
    <div className="inline-flex items-center rounded-full border border-[#ececec] bg-white px-1 py-1 shadow-sm shadow-black/5 mb-5">
      <div className="flex -space-x-1.5">
        {avatars.map((a) => (
          <img
            key={a.src}
            src={a.src}
            width={24}
            height={24}
            alt={a.alt}
            className="rounded-full ring-1 ring-white"
          />
        ))}
      </div>
      <p className="px-2.5 text-[0.72rem] text-[#666]">
        Mais de <strong className="font-semibold text-[#1a1a1a]">500 famílias</strong> já transformadas
      </p>
    </div>
  );
}
