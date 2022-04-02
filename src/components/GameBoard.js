import React, { useState } from "react";
import CardElement from "./CardElement";

function GameBoard(props) {
  return (
    <div className="container" onClick={props.handleClick}>
      <div className="logo">
        <img
          id="logo-img"
          src="./assets/imagens/logo.png"
          alt="Jogo da memória"
        />
      </div>
      <div className="fundo">
        <h2>{props.children}</h2>
        <div className="back">
          <div id="gameBoard">
            {props.cards.map((card, index) => (
              <CardElement
                handleFlip={props.handleFlip}
                key={index}
                card={card}
              ></CardElement>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default GameBoard;
