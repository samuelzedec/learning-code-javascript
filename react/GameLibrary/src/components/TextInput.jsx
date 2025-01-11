function TextInput({ value, setValue }) {
	const { text, name } = value;
	const { state, setState } = setValue;

	return (
		<>
			<label htmlFor={name}>{text}</label>
        <input
          type="text"
          name={name}
          id={name}
          value={state}
          onChange={(ev) => setState(ev.target.value)}
        />
		</>
	)
}

export { TextInput };
