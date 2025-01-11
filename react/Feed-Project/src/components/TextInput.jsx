function TextInput({ additionalInfo, setValues }) {
  const { title, name } = additionalInfo;
  const { state, setState } = setValues;

  return (
    <>
      <label htmlFor={name} className="text-black text-base">
        {title} 
      </label>

      <input
        className="h-8 w-[300px] text-white bg-transparent border-2 border-[#000] rounded-md p-2 focus:bg-transparent focus:outline-none"
        id={name}
        name={name}
        type="text"
        value={state}
        onChange={(ev) => setState(ev.target.value)}
      />
    </>
  );
}

export { TextInput };
