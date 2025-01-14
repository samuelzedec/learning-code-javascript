"use client";

import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home(): ReactNode {
  return (
    <div className="bg-[#232323] grid place-content-start text-white min-h-[100vh] p-5">
      <header className="mb-8">
        <nav>
          <ul className="flex gap-5 justify-center">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="border border-solid rounded-md bg-[#1a1a1a] border-[#FFF] p-8 grid gap-5">
        <h1>Olá, Next.js</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          eveniet ipsum incidunt amet ea in! Magnam voluptatem blanditiis ullam
          quae? Nostrum facere doloribus, amet iure totam sint voluptatum ea?
          Doloribus?
        </p>
        <ul className="list-disc list-inside">
          <li>
            <div>Via Lactea</div>
            <Image width={400} height={225} src="/image.png" alt="image" />
            {/* Ao usar o Image ele irá deixar um espaço reservado pra img e convertendo para .webp que é melhor para web */}
          </li>
          <li>
            <div>Andromeda</div>
            <Image
              src="https://images-assets.nasa.gov/image/PIA04921/PIA04921~medium.jpg"
              alt="Andromeda"
              width={400}
              height={225}
              style={{ objectFit: "cover" }}
            />
          </li>
          <li>Item 3</li>
        </ul>
        <Button className="w-[200px]">Teste</Button>
      </main>
    </div>
  );
}
