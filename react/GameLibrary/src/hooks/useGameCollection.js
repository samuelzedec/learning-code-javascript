import { useState } from "react";

function useGamesColletion() {
	const [games, setGames] = useState(() => {
    const gameArray = JSON.parse(localStorage.getItem("obc-game-lib"));
    if (!gameArray) return [];
    return gameArray;
  });

  const addGame = ({ title, cover }) => {
    const id = Math.floor(Math.random() * 1000000);
    const game = { id, title, cover };
    setGames((state) => {
      const newState = [...state, game];
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
  };

  const removeGame = (id) => {
    setGames((state) => {
      const newState = state.filter((x) => x.id != id);
      localStorage.setItem("obc-game-lib", JSON.stringify(newState));
      return newState;
    });
	};
	
	return { games, addGame, removeGame };
}

export { useGamesColletion };
