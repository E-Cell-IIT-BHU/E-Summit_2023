import React from "react";
import Image from "next/image";
import Style from "../styles/crustinfocss.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const Crustinfo = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.containerheading}>
          <p style={{ color: "#7a7a7a", fontSize: "1.5rem" }}>
          Whats In Store?
          </p>
          <h1 style={{width:"80%",margin:"auto"}}>Network with fellow entrepreneurs, display your ingenious startup to the world, participate in enthralling competitions, and Raise funds for your venture, all in one place!</h1>
        </div>
        <div className={Style.maincontainer}>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                delay: 0.4,
                type: "spring",
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            whileHover={{
              backgroundColor: "#2a2a2a",
              size: 0.6,
              width: "19rem",
              height: "19.9rem",
            }}
            className={Style.sub1}
          >
            <div className={Style.sub1child}>
              <Image
                src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/business-man-working.jpg"
                width={200}
                height={200}
                className={Style.sub1child}
                alt=""
              />
            </div>
            <div className={Style.text}>
              <h2 style={{ color: "white", fontSize: "2rem" }}>Events</h2>
             <Link href="https://unstop.com/festival/e-summit23-iit-bhu-indian-institute-of-technology-iit-bhu-varanasi-75705"> Participate in fun events and showcase your competitive skills to shine out amongst the crowd!</Link>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                delay: 0.4,
                type: "spring",
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            whileHover={{
              backgroundColor: "#2a2a2a",
              size: 0.6,
              width: "19rem",
              height: "19.9rem",
            }}
            className={Style.sub1}
          >
            
            <div className={Style.sub1child}>
              <Image
                src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/handsome-business-man.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className={Style.text}>
              <h2 style={{ color: "white", fontSize: "2rem" }}>
              Panel Discussions
              </h2>
             <Link href="https://forms.gle/SaSZx3en58wdUejb8"> Join the most insightful talks with all the renowned speakers, all in one panel, and get inspired by the most illuminating minds!</Link>
              
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: 1,
              transition: {
                delay: 0.4,
                type: "spring",
                ease: "easeInOut",
              },
            }}
            viewport={{ once: false }}
            whileHover={{
              backgroundColor: "#2a2a2a",
              size: 0.6,
              width: "19rem",
              height: "19.9rem",
            }}
            className={Style.sub1}
          >
            <div className={Style.sub1child}>
              <Image
                src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/coworkers-team.jpg"
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className={Style.text}>
              <h2 style={{ color: "white", fontSize: "1.9rem" }}>
              Startup Showcase
              </h2>
             <Link href="https://unstop.com/workshop/startup-showcase-e-summit23-iit-bhu-indian-institute-of-technology-iit-bhu-varanasi-573187"> Showcase your Venture in front of VCs, Mentors, Angel Investors, and target audience and network with fellow startups.</Link>
              
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Crustinfo;
