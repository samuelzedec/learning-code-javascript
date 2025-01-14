import "../styles/index.css";
import localFont from "next/font/local";
import { Quicksand } from "next/font/google";
// Esse import irá pegar todas as fonts do google fonts


// Método para usar font locais
const jetBrains = localFont({
  src: "../fonts/JetBrainsMono.ttf", //Caminho na font
  variable: "--font-jetbrains-mono", //Definindo uma váriavel css que irá ter como valor a font do src
  weight: "400 700"
});

const quickSandFont = Quicksand({
  variable: "--font-quicksand",
  weight: "300",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrains.variable} ${quickSandFont.variable}`}>
      <body className={`font-quicksand`}>{children}</body>
    </html>
  );
}