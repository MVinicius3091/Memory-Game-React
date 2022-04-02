import React, { useState } from "react";

function CardElement(props) {
  return (
    <div
      onClick={() => {
        props.handleFlip(props.card);
      }}
      id={props.card.id}
      className={`card ${props.card.flipped ? "flip" : ""}`}
    >
      <div className="front-card">
        <img
          className="icon"
          src={`../assets/imagens/${props.card.icon}.png`}
          alt={props.card.icon}
        />
      </div>
      <div className="back-card">{"</>"}</div>
    </div>
  );
}
export default CardElement;
