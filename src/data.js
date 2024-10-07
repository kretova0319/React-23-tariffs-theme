import blue from "./Components/Var_Theme/theme-blue.module.css";
import red from "./Components/Var_Theme/theme-red.module.css";
import green from "./Components/Var_Theme/theme-green.module.css";
import black from "./Components/Var_Theme/theme-black.module.css";

export const cards = [
  {
    id: 1,
    headColor: blue.card__header,
    mainColor: blue.card__price,
    headerText: "Безлимитный 300",
    price: 300,
    speed: 10,
  },
  {
    id: 2,
    headColor: green.card__header,
    mainColor: green.card__price,
    headerText: "Безлимитный 450",
    price: 450,
    speed: 50,
  },
  {
    id: 3,
    headColor: red.card__header,
    mainColor: red.card__price,
    headerText: "Безлимитный 550",
    price: 550,
    speed: 100,
  },
  {
    id: 4,
    headColor: black.card__header,
    mainColor: black.card__price,
    headerText: "Безлимитный 550",
    price: 1000,
    speed: 200,
  },
];
