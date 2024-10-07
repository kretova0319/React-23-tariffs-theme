import Card from "./Card";
import { cards } from "../../data";

export default function CardList() {
  // function chooseCard() {
  //   headColor = red.card__header
  //     ? (className = "card__header_long")
  //     : (className = "card__header");
  // }

  return (
    <div className="wrapper">
      {cards.map((card) => {
        return <Card key={card.id} {...card} />;
      })}
    </div>
  );
}
