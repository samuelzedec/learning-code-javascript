import Title from "./components/Title";
import { Subtitle } from "./components/Subtitle";
import { Status } from "./components/StatusText";
import styles from "./App.module.css";
/* ==================================================================
 * Aqui criamos um objeto do css e passamos no className esse objeto
 * e especificando qual propriedade iremos querer acessar, e essa 
 * propriedade será o estilo que criamos no arquivo css;
 * ================================================================== */

function App() {
  return (
    <div
      className={ styles.app }
    >
      <Title />
      <Subtitle /> 
      <Status />
    </div>
  );
}

export default App;
