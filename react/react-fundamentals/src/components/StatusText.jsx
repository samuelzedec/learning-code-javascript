// Usamos chaves '{}' para executar expressões em JavaScript ou exibir valores de váriaveis  
const Status = () => {
	const status = true;
	return (
		<h2
			style={{
				color: status ? "#00ff9f" : "#f64348"
			}}
		>
			Current status: {status ? "ON" : "OFF"}
		</h2>
	);
}

export { Status };