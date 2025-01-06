function Container(props) {
return (
		<p
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				border: "1px solid black",
				width: "100%",
				height: "50px",
				textAlign: "center",
				margin: "5px"
			}}
		>
		{props.children}
		{/* A prop children é uma props padrão do react onde tudo que for
		  * passado for tem quer ser dentro da tag será exibido aqui */}
		</p>
	);
}

export { Container };