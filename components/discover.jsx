import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const discover = () => {
  return (
    <div className="maincontainer01">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          // scale: 1,
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            type: "spring",
            ease: "easeInOut",
            damping: 20,
            stiffness: 800,
          },
        }}
        className="sub01"
      >
        <div className="titlefont">
          <p className="titlefont" style={{ color: "#7A7A7A" }}>
            RELIABILITY & WORK SKILLS
          </p>
        </div>
        <div>
          <h1 className="buildingh1">
            Building hand crafted websites in no time
          </h1>
        </div>
        <div className="titlefont">
          <i className="bi bi-check-lg " style={{ color: "orange" }}></i>&nbsp;
          Re-usable components.
        </div>
        <div className="titlefont">
          <i className="bi bi-check-lg" style={{ color: "orange" }}></i>&nbsp;
          Amazing photo gallery.
        </div>
        <div className="titlefont">
          <i className="bi bi-check-lg" style={{ color: "orange" }}></i>&nbsp;
          Professional designs.
        </div>
        <div className="buttondis">
          <i className="bi bi-megaphone"></i>&nbsp; Discover More
        </div>
      </motion.div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: {
            delay: 0.5,
            type: "spring",
            ease: "easeInOut",
            damping: 20,
            stiffness: 800,
          },
        }}
        className="sub02"
      >
        <div className="Circle01"></div>
        <div className="Circle02">
          <i className="bi bi-play-fill" style={{ fontSize: "3rem" }}></i>
        </div>
        <Image
          src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2022/05/sec-bg.jpg"
          width={800}
          height={800}
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default discover;
