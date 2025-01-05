import module from "./image.module.css";

function Image() {
	return (
		<>
			<img
				className = {module.Image}
				src="./image.png"
				alt="Star Wars Image" />
		</>
	);
}

export { Image };