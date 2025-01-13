import { useRef } from "react";

export default function RefExample() {
	const inputRef = useRef(null);

	const handleClick = () => {
		console.log(inputRef.current)
		inputRef.current.focus();
		input.current.style.backgroundColor = "#F64348";
  };

  return (
    <div>
      {/* Essa prop ref vai associar o elemento no DOM ao um useRef, então a varável irá ter o elemento DOM como seu valor*/}
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focar no Input</button>
    </div>
  );
}
