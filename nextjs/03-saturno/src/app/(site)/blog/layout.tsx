import { ReactNode } from "react";
import styles from "./layout.module.css"

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.blogLayout}>
      <aside>
        <div>
          <h2>Categorias</h2>
          <ul className="cards">
            <li className="card">
              <a href="#">Planetas</a>
            </li>
            <li className="card">
              <a href="#">Estrelas</a>
            </li>
            <li className="card">
              <a href="#">Galáxias</a>
            </li>
            <li className="card">
              <a href="#">Cosmologia</a>
            </li>
          </ul>
        </div>

        <div>
          <h2>Galerias</h2>
          <div>
            <p>Explore imagens incríveis do universo.</p>
            <ul className="cards">
              <li className="card">
                <a href="#">Imagem de uma Estrela Distante</a>
              </li>
              <li className="card">
                <a href="#">Nebulosa em Explosão</a>
              </li>
              <li className="card">
                <a href="#">A Grande Galáxia de Andrômeda</a>
              </li>
            </ul>
          </div>
        </div>
      </aside>
      <div>
        {children}
      </div>
    </div>
  )
}
