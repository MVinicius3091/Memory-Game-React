import React, { useEffect, useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOver from "./components/GameOver";
import game from "./game/game";

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [count, setCount] = useState(0);

  function handleClick(e) {
    let target = e.target;
    if (target.className === "back-card") {
      setCount((count) => count + 1);
    }
  }

  function restart() {
    game.clearCards();
    setCards(game.createCardFromIcons());
    setGameOver(false);
    setCount(0);
  }

  useEffect(() => {
    setCards(game.createCardFromIcons());
  }, []);

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {
        //gameOverCallBack
        setGameOver(true);
      },
      () => {
        //onMatchCard
        setCards([...game.cards]);
      }
    );

    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard
        handleFlip={handleFlip}
        cards={cards}
        handleClick={handleClick}
      >
        Jogadas:{parseInt(count / 2)}
      </GameBoard>
      <GameOver show={gameOver} handleOnRestart={restart}></GameOver>
    </div>
  );
}
export default MemoryGame;
