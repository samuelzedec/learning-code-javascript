function Container({ children }) {
  return (
    <div
      id="sendMessages"
      className="h-[700px] w-[400px] p-5 rounded-xl border border-[#8ccfff] shadow-[inset_0px_0px_10px_#8ccfff]"
    >
      {children}
    </div>
  );
}

export { Container };
