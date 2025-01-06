import styles from "./styles.module.css"
import { Button } from "../Button";

/* =========================================================================
 * O primeiro parâmetro de uma função que retornar um componente React
 * vai servir para receber as proprieades, sendo ele um objeto para podermos
 * acessar tudo
 * Podemos usar diretamente a desestruturação no primeiro parâmetro
 * ex { poster, alt, title }
 * ========================================================================= */
export default function Card(props) {
  return (
    <div className={styles.container}>
      <img className={styles.poster} src={props.poster} alt={props.alt} />
      <div>
        <h2 className={styles.title}>{ props.title }</h2>
        <p className={styles.description}>Um pôster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decidir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <Button />
      </div>
    </div>
  )
}