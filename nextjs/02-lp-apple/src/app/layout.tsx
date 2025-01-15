import { ReactNode } from "react";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["700", "400", "100"],
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat}`}>
      <body className="font-montserrat">{children}</body>
    </html>
  );
}