import { useRef } from "react";
import { useState } from "react";
import RefExample from "./RefExample";

function App() {
  let variable = 0;
  const [state, setState] = useState(0);
  const ref = useRef(0); // para acessar o valor de um ref tem que acessar a proprieadade current

  // o Ref não causa atualização no componente porém se o comportente atualizar o novo valor que foi inserido estará lá e será exibido
  const showValues = () => {
    alert(`
      Variável: ${variable}
      Ref: ${ref.current}
      State: ${state}
    `);
  };

  return (
    <div>
      <h2>Exemplo de useRef</h2>
      <RefExample/>
      <h2>Conhecendo o useRef</h2>
      <hr />
      <ul>
        <li>Varável: {variable}</li>
        <li>Ref: {ref.current}</li>
        <li>State: {state}</li>
      </ul>
      <button style={{ margin: "10px" }} onClick={() => variable++}>
        Aymentar Variável
      </button>
      <button style={{ margin: "10px" }} onClick={() => ref.current++}>
        Aymentar Variável
      </button>
      <button
        style={{ margin: "10px" }}
        onClick={() => setState(state => state + 1)}
      >
        Aymentar Variável
      </button>
      <button onClick={showValues} style={{ margin: "10px" }}>
        Clique aqui!
      </button>
    </div>
  );
}

export default App;
