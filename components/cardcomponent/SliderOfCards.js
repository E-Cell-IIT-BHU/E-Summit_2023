import React from "react";
import HeaderSt from "./HeaderStyles.module.css";
import HeaderCard from "./HeaderCard";
import Image from "next/image";

function SliderOfCards() {
  return (
    <div className={HeaderSt.CardsGroup}>
      <HeaderCard cardImage={"/header/ecell1.png"} cardTitle={"Type 1"} />
      <HeaderCard cardImage={"/header/ecell2.jpeg"} cardTitle={"Type 2"} />
      <HeaderCard cardImage={"/header/ecell3.jpeg"} cardTitle={"Type 3"} />
      <HeaderCard cardImage={"/header/ecell4.jpeg"} cardTitle={"Type 4"} />
    </div>
  );
}

export default SliderOfCards;
