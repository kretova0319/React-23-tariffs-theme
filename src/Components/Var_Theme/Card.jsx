import React from "react";
import "./card.css";

export default function Card({ theme, headerText, price, speed }) {
  return (
    <div className="card">
      <p className={`card__header ${theme}`}>{headerText}</p>
      <div className={`card__price ${theme}`}>
        <p>руб</p>
        <p>{price}</p>
        <p>/мес</p>
      </div>
      <p className="card__speed">до {speed} Мбит/сек</p>
      <p className="card__footer">Объем включенного трафика не ограничен</p>
    </div>
  );
}
