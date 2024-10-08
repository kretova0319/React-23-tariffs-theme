import React from "react";
import styles from "./card.module.css";

export default function Card({
  headColor,
  mainColor,
  headerText,
  price,
  speed,
}) {
  let sizing;
  headColor === "hwb(0 30% 27%)" ? (sizing = "45px") : (sizing = "25px");

  return (
    <div className={styles.card}>
      <p
        style={{ padding: sizing }}
        className={`${styles.card__header} ${headColor}`}
      >
        {headerText}
      </p>
      <div className={`${styles.card__price} ${mainColor}`}>
        <p>руб</p>
        <p>{price}</p>
        <p>/мес</p>
      </div>
      <p className={styles.card__speed}>до {speed} Мбит/сек</p>
      <p className={styles.card__footer}>
        Объем включенного трафика не ограничен
      </p>
    </div>
  );
}
