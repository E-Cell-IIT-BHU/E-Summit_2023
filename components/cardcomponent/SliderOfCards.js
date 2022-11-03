import React from "react";
import HeaderSt from "./HeaderStyles.module.css";
import HeaderCard from "./HeaderCard";

function SliderOfCards() {
  return (
    <div className={HeaderSt.CardsGroup}>
      <HeaderCard cardImage={"./ecell1.png"} cardTitle={"Type 1"} />
      <HeaderCard cardImage={"./ecell2.png"} cardTitle={"Type 2"} />
      <HeaderCard cardImage={"./ecell3.png"} cardTitle={"Type 3"} />
      <HeaderCard cardImage={"./ecell4.png"} cardTitle={"Type 4"} />
    </div>
  );
}

export default SliderOfCards;
