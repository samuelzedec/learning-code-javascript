import Header from "../components/Header";
import { Outlet } from "react-router-dom";  // Não se esqueça de importar o Outlet!

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <p>
          Esse é o layout principal. Abaixo está o conteúdo dinâmico de cada rota
        </p>
        <hr />
        <Outlet /> {/* Aqui será renderizado o conteúdo da rota filha */}
      </main>
      <footer>
        <p>Feito com React Router Dom</p>
      </footer>
    </>
  );
}
