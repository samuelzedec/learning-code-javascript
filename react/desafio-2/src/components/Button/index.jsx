import style from "./style.module.css";

export const Button = ({ value, link }) => {
	return (
		<a href={link} target="_blank">
			<button
				className={style.Button}
			>
				{value}
			</button>
		</a>
	)
}

