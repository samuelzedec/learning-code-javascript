function Container({ value }) {
	return (
		<>
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
				{value}
			</p>
		</>
	);
}

export { Container };