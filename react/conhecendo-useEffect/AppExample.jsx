import { useEffect } from "react";
import { useState } from "react";

function Counter() {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		console.log("O efeito colateral foi ativado!");

		return () => {
			console.log("Fazendo a limpeza");
			console.log("Componente desmontado");
			// Só será executado quando o componente for apagado
			// POde usar para fechar conexões com o servidor
		};
	}, []);
	// Caso não tenha o segundo parâmetro, ele irá ficar disparando a cada mudança do componente todo

	return (
		<button onClick={() => setCounter((state) => state + 1)}>
			Contador = {counter}
		</button>
	);
}

function App() {
	const [show, setShow] = useState(false);

	return (
		<>
			<h1>Conhecendo o useEffect</h1>
			<input
				id="check"
				type="checkbox"
				value={show}
				onChange={() => setShow((state) => !state)}
			/>
			<label htmlFor="check">{show.toString()}</label>
			{ show ? <Counter /> : null }
		</>
	);
}

export default App;