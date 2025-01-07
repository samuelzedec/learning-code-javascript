import "./App.css";
import useCounter from "./hooks/useCounter";

/* =========================================
 * ! Regra 1: One usar os hooks !
 * somente dentro de funções que retornam
 * componentes ou em hooks personalizados
 *
 * ! Regra 2: A ordem dos hooks !
 * Não devemos usar um hooks fora do top
 * level da função, não podendo usar dentro
 * de loop ou condições
 * ========================================= */

function App() {
  const { count, increment } = useCounter();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={increment}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
