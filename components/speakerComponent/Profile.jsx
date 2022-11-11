import React from "react";
import s from "../../styles/Speaker.module.scss";
// import "animate.css";
import Image from "next/image";

function Profile({ img, name, linkedin }) {
  return (
    <div className="col-md-4 my-5 col-sm-4">
      <div className={s.speaker}>
        <Image
          className={s.img}
          src={img}
          height="200"
          width="200"
          alt="Speaker"
        />
        <div className={s.image_overlay}>
          <h2>{name}</h2>
          <a href={linkedin} target="blank">
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}

export default Profile;
