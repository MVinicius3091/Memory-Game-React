import React, { Fragment } from "react";

function GameOver(props) {
  return props.show ? (
    <div id="gameOver">
      <div>Parabéns, você completou o jogo!!</div>
      <button id="restart" onClick={props.handleOnRestart}>
        Novo jogo
      </button>
    </div>
  ) : (
    <Fragment />
  );
}
export default GameOver;
