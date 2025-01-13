import { UserInfo } from "./components/UserInfo";
import { UserContext } from "./contexts/UserContext";

function App() {
  const user = {
    name: "João",
    email: "joão@email.com",
  };

  return (
    // Aqui estamos criando o escopo do contexto
    <>
      <UserContext.Provider value={user}>
        <h2>Conhecendo o useConfFftext</h2>
        <UserInfo />
      </UserContext.Provider>
    </>
  );
}

export default App;
