import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay.ttf",
  variable: "--font-playfair-display",
  weight: "100 400 700",
});

export const inter = localFont({
  src: "./fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Next", // Title da página
  description: "Generated by create next app", // Descrição da página
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfairDisplay.variable} ${inter.variable}`}>
        <header>
          <div className="site-logo">Universo em Foco</div>
          <p>
            Explore o incrível mundo da astronomia e descubra segredos do cosmos
            através de artigos, imagens e muito mais!
          </p>
        </header>
        {children}
      </body>
    </html>
  );
}
