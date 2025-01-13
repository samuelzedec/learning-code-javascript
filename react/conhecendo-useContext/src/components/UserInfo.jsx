import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserInfo() {
  const user = useContext(UserContext);
  //Aqui já estamos acessando os dados do componente app

  return (
    <div>
      <h2>Informações do usuário:</h2>
      <p>Nome: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export { UserInfo };
