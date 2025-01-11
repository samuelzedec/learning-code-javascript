function TextareaInput({ additionalInfo, setValues }) {
  const { title, name } = additionalInfo;
  const { state, setState } = setValues;

  return (
    <>
      <label htmlFor={name} className="text-black text-base">
        {title}
      </label>

      <textarea
        className="h-[300px] w-[300px] resize-none text-white bg-transparent border-2 border-[#000] rounded-md p-2 focus:bg-transparent focus:outline-none"
        name={name}
        id={name}
        value={state}
        onChange={(ev) => setState(ev.target.value)}
      ></textarea>
    </>
  );
}

export { TextareaInput };
