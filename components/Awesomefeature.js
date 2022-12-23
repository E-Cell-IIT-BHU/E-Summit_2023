import feature from ".././styles/feature.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "animated-number-react";
const Awesomefeature = () => {
  const [value, setvalue] = useState(
    "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/planet-earth-space.jpg"
  );
  const [isHovering, setIsHovering] = useState(0);
  const [hidenum, sethidenum] = useState(true);

  const [ct, setct] = useState(false);
  const formatValue = (value) => value.toFixed(0);
  const bgimg=["https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/hot-spot-1.jpg","https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/hot-spot-2.jpg","https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/hot-spot-3.jpg","https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/hot-spot-4.jpg","https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/hot-spot-5.jpg",]

  function Onhover(number) {
    setvalue(
      bgimg[number-1]
    );
    sethidenum(false);
  }

  function Ondown() {
    setvalue(
      "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/planet-earth-space.jpg"
    );
    sethidenum(true);
  }

  return (
    <>
      <div
        className={feature.maincontainer}
        style={{ backgroundImage: `url(${value})` }}
      >
        <div className={hidenum ? feature.num : feature.hidenum}>
          <motion.h1
            className="rahul"
            initial={() => {
              setct(false);
            }}
            whileInView={() => {
              setct(true);
            }}
            viewport={{ once: false }}
          >
            {ct && <AnimatedNumber value="3765" formatValue={formatValue} />}
          </motion.h1>
          <p>AWESOME FEATURE</p>
        </div>
        <div
          className={`${feature.plus} ${feature.div1}  `}
          onMouseOver={() => {
            Onhover(1);
            setIsHovering(1);
          }}
          onMouseOut={() => {
            Ondown();
            setIsHovering(0);
          }}
        >
          <i className="bi bi-plus-lg "></i>

          <span
            className={`${isHovering == 1 ? feature.info1 : feature.info} ${
              feature.inf
            }`}
          >
            <h3 className={feature.title}>Internet of Things</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut elit.
            </p>
          </span>
        </div>

        <div
          className={`${feature.plus} ${feature.div2} `}
          onMouseOver={() => {
            Onhover(2);
            setIsHovering(2);
          }}
          onMouseOut={() => {
            Ondown();
            setIsHovering(0);
          }}
        >
          <i className="bi bi-plus-lg"></i>
          <span
            className={`${isHovering == 2 ? feature.info2 : feature.info} ${
              feature.inf
            }`}
          >
            <h3 className={feature.title}>Internet of Things</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut elit.
            </p>
          </span>
        </div>
        <div
          className={`${feature.plus} ${feature.div3} `}
          onMouseOver={() => {
            Onhover(3);
            setIsHovering(3);
          }}
          onMouseOut={() => {
            Ondown();
            setIsHovering(0);
          }}
        >
          <i className="bi bi-plus-lg"></i>
          <span
            className={`${isHovering == 3 ? feature.info3 : feature.info} ${
              feature.inf
            }`}
          >
            <h3 className={feature.title}>Internet of Things</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut elit.
            </p>
          </span>
        </div>
        <div
          className={`${feature.plus} ${feature.div4} `}
          onMouseOver={() => {
            Onhover(4);
            setIsHovering(4);
          }}
          onMouseOut={() => {
            Ondown();
            setIsHovering(0);
          }}
        >
          <i className="bi bi-plus-lg"></i>
          <span
            className={`${isHovering == 4 ? feature.info4 : feature.info} ${
              feature.inf
            }`}
          >
            <h3 className={feature.title}>Internet of Things</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut elit.
            </p>
          </span>
        </div>
        <div
          className={`${feature.plus} ${feature.div5} `}
          onMouseOver={() => {
            Onhover(5);
            setIsHovering(5);
          }}
          onMouseOut={() => {
            Ondown();
            setIsHovering(0);
          }}
        >
          <i className="bi bi-plus-lg"></i>
          <span
            className={`${isHovering == 5 ? feature.info5 : feature.info} ${
              feature.inf
            }`}
          >
            <h3 className={feature.title}>hjnj of Things</h3>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut elit.
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Awesomefeature;
