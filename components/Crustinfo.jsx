import React from "react";
import Image from "next/image";
import Style from "../styles/crustinfocss.module.css";
import { motion } from "framer-motion";

const Crustinfo = () => {
  return (
    <>
      <div className={Style.container}>
        <div className={Style.containerheading}>
          <p style={{ color: "#7a7a7a", fontSize: "1.5rem" }}>
            IT TAKES MORE THAN MAGIC
          </p>
          <h1>Things are just easy when building with crust.</h1>
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
              <h2 style={{ color: "white", fontSize: "2rem" }}>Best Gadgets</h2>
              Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet.
              <p style={{ textAlign: "center", fontSize: "2rem" }}>
                <i className="bi bi-arrow-down"></i>
              </p>
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
            {" "}
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
                Share Success
              </h2>
              Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet.
              <p style={{ textAlign: "center", fontSize: "2rem" }}>
                <i className="bi bi-arrow-down"></i>
              </p>
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
                Medical Insurance
              </h2>
              Donec sed odio dui. Vivamus sagittis lacus vel augue laoreet.
              <p style={{ textAlign: "center", fontSize: "2rem" }}>
                <i className="bi bi-arrow-down"></i>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Crustinfo;
