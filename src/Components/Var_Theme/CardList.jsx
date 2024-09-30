import blue from "./theme-blue.module.css";
import red from "./theme-red.module.css";
import green from "./theme-green.module.css";
import black from "./theme-black.module.css";
import Card from "./Card";

export default function CardList() {
  const cards = [
    {
      theme: "blue",
      headerText: "Безлимитный 300",
      price: 300,
      speed: 10,
    },
    {
      theme: "green",
      headerText: "Безлимитный 450",
      price: 450,
      speed: 50,
    },
    {
      theme: "red",
      headerText: "Безлимитный 550",
      price: 550,
      speed: 100,
    },
    {
      theme: "black",
      headerText: "Безлимитный 550",
      price: 1000,
      speed: 200,
    },
  ];

  return (
    <div className="wrapper">
      {cards.map((card) => {
        return (
          <Card
            theme={card.theme}
            headerText={card.headerText}
            price={card.price}
            speed={card.speed}
          />
        );
      })}
    </div>
  );
}
