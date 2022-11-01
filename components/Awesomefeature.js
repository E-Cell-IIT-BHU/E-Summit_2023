import feature from ".././styles/feature.module.css";
import { useState, useEffect } from "react";

const Awesomefeature = () => {
  const [value, setvalue] = useState(
    "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/planet-earth-space.jpg"
  );
  const [isHovering, setIsHovering] = useState(0);
  const [hidenum, sethidenum] = useState(true);
  const [count, setCount] = useState("0");
  let data = {
    number: "7625",
    duration: "1",
  };

  function Onhover(number) {
    setvalue(
      `https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/hot-spot-${number}.jpg`
    );
    sethidenum(false);
  }

  function Ondown() {
    setvalue(
      "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/planet-earth-space.jpg"
    );
    sethidenum(true);
  }

  const { number, duration } = data;
  useEffect(() => {
    let start = 0;

    // first three numbers from props
    const end = parseInt(number.substring(0, 3));
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(2);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);

    // dependency array
  }, [number, duration]);
  return (
    <>
      <div
        className={feature.maincontainer}
        style={{ backgroundImage: `url(${value})` }}
      >
        <div className={hidenum ? feature.num : feature.hidenum}>
          {" "}
          <h1 className="rahul">{count}</h1>
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
