import style from ".././styles/layoutcss.module.css";
import { useState } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import AnimatedNumber from "animated-number-react";
const Layout = () => {
  const [count, setCount] = useState("0");
  const [count1, setCount1] = useState("0");
  const [count2, setCount2] = useState("0");
  const [ct, setct] = useState(false);
  const formatValue = (value) => value.toFixed(0);

  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.submaincontainer}>
          <motion.div
            className={style.sub1}
            initial={() => {
              setct(false);
              setCount(95);
              setCount1(80);
              setCount2(75);
            }}
            whileInView={() => {
              setct(true);
            }}
            viewport={{ once: false }}
          >
            <p>CREATE UNLIMITED LAYOUTS</p>
            <h1>Try building strong brands with our team</h1>
            <p style={{ marginTop: "2rem" }}>
              We have world class engineers and material thats enough to provide
              you best industrial solution.
            </p>
            <h6>Web Design</h6>
            <div className={style.bar}>
              <span className={style.percent}>
                {ct && <AnimatedNumber value="95" formatValue={formatValue} />}%
              </span>
              <div
                className={style.bardiv}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2F39D3 0%, #FF5B4A 100%)",

                  width: `${count}%`,
                }}
              >
                &nbsp;
              </div>
            </div>
            <h6>Web Development</h6>
            <div className={style.bar}>
              <span className={style.percent}>
                {ct && <AnimatedNumber value="80" formatValue={formatValue} />}%
              </span>
              <div
                className={style.bardiv}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2F39D3 0%, #FF5B4A 100%)",

                  width: `${count1}%`,
                }}
              >
                &nbsp;
              </div>
            </div>
            <h6>Digital Marketing</h6>
            <div className={style.bar}>
              <span className={style.percent}>
                {ct && <AnimatedNumber value="75" formatValue={formatValue} />}%
              </span>
              <div
                className={style.bardiv}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #2F39D3 0%, #FF5B4A 100%)",

                  width: `${count2}%`,
                }}
              >
                &nbsp;
              </div>
            </div>
            <div className={style.viewbtn}>
              View Teamwork <span>&gt;</span>
            </div>
          </motion.div>

          <div className={style.second}>
            <div className={style.aniback}></div>

            <div className="background">
              <motion.div whileHover={{ scale: 1.09 }} className="bg">
                <Tilt>
                  <Image
                    src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/young-woman.jpg"
                    width={700}
                    height={700}
                  />
                </Tilt>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
