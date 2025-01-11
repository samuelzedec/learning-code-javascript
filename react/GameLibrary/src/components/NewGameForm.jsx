import { useState } from "react";
import { TextInput } from "./TextInput";

function NewGameForm({ addGame }) {
  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addGame({ title, cover });
    setTitle("");
    setCover("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextInput
          value={{ text: "Título:", name: "title" }}
          setValue={{ state: title, setState: setTitle }}
        />
      </div>

      <div>
        <TextInput
          value={{ text: "Capa:", name: "cover" }}
          setValue={{ state: cover, setState: setCover }}
        />
      </div>

      <button type="submit">Adicionar</button>
    </form>
  );
}

export { NewGameForm };
