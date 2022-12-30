import React from "react";
import Image from "next/image";
import Style from "../styles/crustinfocss.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Eventimg from ".././assets/Events.jpg"
import Panel_disimg from ".././assets/panel_discussion.jpg"
import Startupimg from ".././assets/startup_tradeshow.jpg"


const Crustinfo = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.containerheading}>
          <p style={{ color: "#7a7a7a", fontSize: "1.5rem" }}>
            Whats In Store?
          </p>
          <h1 style={{ width: "80%", margin: "auto" }}>Network with fellow entrepreneurs, display your ingenious startup to the world, participate in enthralling competitions, and Raise funds for your venture, all in one place!</h1>
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
              <Link href="/events">
                <div>
                  <Image
                    src={Eventimg}
                    width={200}
                    height={200}
                    className={Style.sub1child}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className={Style.text}>
              <h2 style={{ color: "white", fontSize: "2rem" }}>
                <Link href="/events"> Events</Link>
              </h2>
              Participate in fun events and showcase your competitive skills to shine out amongst the crowd!
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
              <Link href="/dashboard">
                <div>
                  <Image
                    src={Panel_disimg}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className={Style.text}>
              <h2 style={{ color: "white", fontSize: "2rem" }}><Link href="/dashboard">
                Panel Discussions

              </Link>  </h2>
              Join the most insightful talks with all the renowned speakers, all in one panel, and get inspired by the most illuminating minds!

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
              <Link href="https://unstop.com/workshop/startup-showcase-e-summit23-iit-bhu-indian-institute-of-technology-iit-bhu-varanasi-573187">
                <div>
                  <Image
                    src={Startupimg}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
              </Link>
            </div>
            <div className={Style.text}>
              <h2 style={{ color: "white", fontSize: "1.9rem" }}>
                <Link href="https://unstop.com/workshop/startup-showcase-e-summit23-iit-bhu-indian-institute-of-technology-iit-bhu-varanasi-573187">
                  Startup Showcase
                </Link> </h2>
              Showcase your Venture in front of VCs, Mentors, Angel Investors, and target audience and network with fellow startups.

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Crustinfo;
