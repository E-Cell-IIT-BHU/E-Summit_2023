import React from "react";
import  s from '../styles/Navbar.module.scss';
import { useState } from "react";
import Image from "next/image";

import logo from "../assets/Ecell-logo.png";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
   <nav className={s.app__navbar}>
    <div className={s.app__navbar_logo }>
        <Image  src={logo} alt='logo' />
    </div>
    <ul className={s.app__navbar_links}>
        {['Speaker','Events','Workshops','Sponsors','Team'].map((item)=>(
            <li className={s.app__flex} key={`link-${item}`}>
                <a href='#'>{item}</a>
            </li>
        ))}
    </ul>
    <div className={s.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul >
            {['Speaker','Events','Workshops','Sponsors','Team'].map((item) => (
              <li   key={item}>
                <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )} 
      </div>
   </nav>
  );
};

export default Navbar;
