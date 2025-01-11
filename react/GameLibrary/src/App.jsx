import { Game } from "./components/Game";
import { NewGameForm } from "./components/NewGameForm";
import { useGamesColletion } from "./hooks/useGameCollection";

function App() {
  const { games, addGame, removeGame } = useGamesColletion();
  return (
    <>
      <div id="app">
        <h1>Biblioteca de jogos</h1>
        <NewGameForm addGame={addGame} />
        <div className="games">
          {games.length > 0
            ? games.map((game) => (
              <Game
                key={game.id}
                title={game.title}
                cover={game.cover}
                onRemove={() => removeGame(game.id)}
              />
            )) : <h2>Não há jogos cadastrados</h2>}
        </div>
      </div>
    </>
  );
}

export default App;
