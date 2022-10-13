import React from "react";
import SliderOfCards from "./SliderOfCards";
import HeaderSt from "./HeaderStyles.module.css";

function Header() {
  return (
    <div className={HeaderSt.HeaderContainer}>
      <div className={HeaderSt.HeaderTitle}>DISCOVER</div>
      <SliderOfCards />
    </div>
  );
}

export default Header;
