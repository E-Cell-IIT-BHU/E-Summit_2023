import style from ".././styles/layoutcss.module.css";
import { useEffect, useState } from "react";

const Layout = () => {
  const [count, setCount] = useState("0");
  const [count1, setCount1] = useState("0");
  const [count2, setCount2] = useState("0");
  const [a, seta] = useState("0px");
  const [b, setb] = useState("-125px");
  const [c, setc] = useState("-250px");
  const [d, setd] = useState("-375px");

  function popup() {
    seta("-10px");
    setb("-130px");
    setc("-255px");
    setd("-380px");
  }
  function popdown() {
    seta("2px");
    setb("-120px");
    setc("-245px");
    setd("-370px");
  }
  function popleft() {
    seta("4px");
    setb("-115px");
    setc("-240px");
    setd("-365px");
  }
  function unpop() {
    seta("0px");
    setb("-125px");
    setc("-250px");
    setd("-375px");
  }
  let data = {
    number: "70",
    duration: "1",
  };
  const { number, duration } = data;
  useEffect(() => {
    let start = 0;
    const end = parseInt(number.substring(0, 3));
    if (start === end) return;
    let totalMilSecDur = parseInt(2);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [number, duration]);

  function numAnimation(num1, num2) {
    let start = 0;
    const end = parseInt(num1.substring(0, 3));

    if (start === end) return;
    let totalMilSecDur = parseInt(2);
    let incrementTime = (totalMilSecDur / end) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setCount1(String(start) + num1.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }
  function numAnimation1(num1, num2) {
    let start = 0;

    const end = parseInt(num1.substring(0, 3));

    if (start === end) return;
    let totalMilSecDur = parseInt(2);
    let incrementTime = (totalMilSecDur / end) * 1000;

    let timer = setInterval(() => {
      start += 1;
      setCount2(String(start) + num1.substring(3));
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }

  return (
    <>
      <div className={style.maincontainer}>
        <div className={style.submaincontainer}>
          <div className={style.sub1}>
            <p>CREATE UNLIMITED LAYOUTS</p>
            <h1>Try building strong brands with our team</h1>
            <p style={{ marginTop: "2rem" }}>
              We have world class engineers and material thats enough to provide
              you best industrial solution.
            </p>
            <h6>Web Design</h6>
            <div className={style.bar}>
              <span className={style.percent}>{count}%</span>
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
                {numAnimation1("90", "1")} {count2}%
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
            <h6>Digital Marketing</h6>
            <div className={style.bar}>
              <span className={style.percent}>
                {numAnimation("60", "1")} {count1}%
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
            <div className={style.viewbtn}>
              View Teamwork <span>&gt;</span>
            </div>
          </div>

          <div className={style.second}>
            <div className={style.aniback}></div>
            <div
              style={{
                backgroundPosition: `${a} ${a}`,
              }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${b} ${a}` }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${c} ${a}` }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${d} ${a}`, visibility: "hidden" }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${a} ${b}`, visibility: "hidden" }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${b} ${b}` }}
              onMouseOver={popdown}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${c} ${b}` }}
              onMouseOver={popdown}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${d} ${b}` }}
              onMouseOver={popleft}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${a} ${c}` }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${b} ${c}` }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${c} ${c}` }}
              onMouseOver={popup}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${d} ${c}` }}
              onMouseOver={popleft}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${a} ${d}` }}
              onMouseOver={popdown}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${b} ${d}` }}
              onMouseOver={popdown}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${c} ${d}` }}
              onMouseOver={popdown}
              onMouseLeave={unpop}
            ></div>
            <div
              style={{ backgroundPosition: `${d} ${d}`, visibility: "hidden" }}
              onMouseOver={popdown}
              onMouseLeave={unpop}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
