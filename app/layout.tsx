import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ProgressiveBlur from "@/components/ProgressiveBlur";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
  style: ["normal", "italic"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "A Mamãe é Top e o Papai Também! — Grace Bezerra",
  description:
    "Aprenda as ferramentas que 15 anos de consultório comprovaram: como transformar crises, agressividade e rebeldia em conexão real com seus filhos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.variable}>
        {children}
        <ProgressiveBlur />
      </body>
    </html>
  );
}
