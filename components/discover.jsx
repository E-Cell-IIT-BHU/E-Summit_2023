import React from "react";
import Link from 'next/link';
import { motion } from "framer-motion";
const discover = () => {
  return (
    <div className="maincontainer01">
      <motion.div
        initial={{ x: -100, opacity: 0 }}
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
        className="sub01"
      >
        <div className="titlefont">
          <p className="titlefont" style={{ color: "#7A7A7A" }}>
            A DREAM FOR STARTUPS
          </p>
        </div>
        <div>
          <h1 className="buildingh1">
            {`Presenting the official aftermovie of E-Summit'23`}
          </h1>
        </div>
        <div className="titlefont">
          <i className="bi bi-check-lg " style={{ color: "orange" }}></i>&nbsp;
          A Justapoxication of startups.
        </div>
        <div className="titlefont">
          <i className="bi bi-check-lg" style={{ color: "orange" }}></i>&nbsp;
          Dreams.
        </div>
        <div className="titlefont">
          <i className="bi bi-check-lg" style={{ color: "orange" }}></i>&nbsp;
          Knowledge.
        </div>
        <div className="buttondis">
          <Link href="/dashboard">
            <div>
              <i className="bi bi-megaphone"></i>&nbsp;  Register Now
            </div>
          </Link>
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
        style={{ backgroundImage: "url(https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2022/05/sec-bg.jpg)" }}
      >
        <a href="https://www.youtube.com/watch?v=Uvo1SWXoNQo">
          <div>
            <div className="Circle01"></div>
            <div className="Circle02">
              <i className="bi bi-play-fill" style={{ fontSize: "3rem" }}></i>
            </div>
          </div>
        </a>
      </motion.div>
    </div>
  );
};

export default discover;
