import module from "./button.module.css";

function BuyButton() {
	return (
		<button
			className={module.Button}
		>
			Comprar agora!
		</button>
	);
}

export { BuyButton };