"use client" //Faz com que seja permitido usar Hooks

import styles from "./page.module.css"
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams()

  return (
    <article className={styles.post}>
      <h1>Post: {params.id}</h1>

      <div className={styles.postContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis distinctio at, expedita commodi, modi nobis blanditiis sequi rem, quos nostrum nisi? Laudantium esse doloremque cupiditate mollitia incidunt aspernatur molestiae!
        </p>
      </div>

      <section>
        <p>Publicado em: Outubro de 2024</p>
      </section>
    </article>
  );
}