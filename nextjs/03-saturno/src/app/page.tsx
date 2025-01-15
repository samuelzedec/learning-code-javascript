import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <article className={styles.post}>
      <h1>O Fascinante Planeta Saturno</h1>

      <div className={`${styles.postContent}`}>
        <Image src="/image-1.png" alt="Saturno no espaço" width={600} height={307} />
        <p>
          Saturno é o sexto planeta a partir do Sol e é conhecido pelos seus impressionantes anéis. Ele é o segundo maior planeta do Sistema Solar, ficando atrás apenas de Júpiter. A composição principal de Saturno é gás, o que o torna um gigante gasoso.
        </p>

        <h2>Características Físicas</h2>
        <p>
          Saturno possui uma atmosfera composta predominantemente por hidrogênio e hélio. O planeta tem uma densidade extremamente baixa, o que significa que, se fosse possível colocá-lo em uma imensa banheira, ele flutuaria.
        </p>

        <h2>Os Anéis de Saturno</h2>
        <p>
          Uma das características mais marcantes de Saturno são seus anéis. Eles são feitos de pedaços de gelo, rocha e poeira que orbitam o planeta. Embora pareçam sólidos, são formados por partículas separadas, que variam em tamanho, de pequenos grãos de poeira até rochas de vários metros.
        </p>
        <Image src="/image-2.png" alt="Anéis de Saturno" width={600} height={328} />

        <h2>Satélites Naturais</h2>
        <p>
          Saturno possui mais de 80 luas confirmadas, sendo Titã a maior e uma das mais interessantes, por possuir uma atmosfera densa e mares de metano líquido. Outras luas menores, como Encélado, também despertam grande interesse científico devido a possíveis oceanos subterrâneos.
        </p>
        <Image src="/image-3.png" alt="Luas de Saturno" width={600} height={315} />
      </div>

      <section>
        <p>Publicado em: Outubro de 2024</p>
      </section>
    </article>
  );
}
