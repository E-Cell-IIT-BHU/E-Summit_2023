import React from "react";
import HdSt from "./HeaderStyles.module.css";

function HeaderCard({ cardImage, cardTitle }) {
  return (
    <div className={HdSt.CardContainer}>
      <div className={HdSt.CardImage}>
        {/* <Image src={cardImage} width={640} height={440} /> */}
      </div>
      <div className="HdSt.CardTitle">{cardTitle}</div>
    </div>
  );
}

export default HeaderCard;
