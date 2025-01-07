import { useState } from "react";

function getInitialValue() {
  console.log("obtendo o valor inicial");
  return 1 + 1;
}

export default function useCounter() {
  const [count, setCount] = useState(() => getInitialValue());
  //Ao usar um expressão lambda fará com que chame o getInitialValue() seja chamado somente um vez

  const increment = () => {
    setCount((currentState) => currentState + 1);
		setCount((currentState) => currentState + 1); 
		//Automaticamente o react irá colocar o count como parâmetro no currentState
	};

	/* setCount(count + 1);
	 * setCount(count + 1);
	 * Nesse caso o react está fazendo essa ação de forma assícrona
	 * Fazendo com que não seja preciso que o componente seja duas
	 * vezes redenrizado. Mas iss só acontece quando chamamos nossa
	 * variavel que irá ser setada na sua função 
	 * Para resolver isso podemos usar um arrow function para ele fazer
	 * de forma sincrona*/

  return { count, increment };
}
