import { useState } from 'react';
import Style from '../styles/Portfolio.module.css';
import Design from '../components/Data';
import { Development } from '../components/Data';
import { Graphic } from '../components/Data';
import { WordPress } from '../components/Data';
import { All } from '../components/Data';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
const Speaker = () => {
  const [value, setvalue] = useState(['#ff5b4a', null, null, null, null]);
  const [item, setitem] = useState([...All]);
  function Colorchange(index) {
    const input = [...value];
    if (index == 0) {
      setitem([...All]);
    }
    if (index == 1) {
      setitem([...Design]);
    }
    if (index == 2) {
      setitem([...Development]);
    }
    if (index == 3) {
      setitem([...Graphic]);
    }
    if (index == 4) {
      setitem([...WordPress]);
    }
    const newArr = new Array(input.length).fill(null);

    newArr[index] = '#ff5b4a';

    setvalue(newArr);
  }
  const styledata = {
    backgroundColor: '#ff5b4a',
    color: 'white',
    boxShadow:
      'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px',
  };

  return (
    <div>
      <Navbar />
      <div className={Style.navbar}>
        <div
          className={Style.navchild}
          style={value[0] == '#ff5b4a' ? styledata : null}
          onClick={() => {
            Colorchange(0);
          }}
        >
          All
        </div>
        <div
          className={Style.navchild}
          style={value[1] == '#ff5b4a' ? styledata : null}
          onClick={() => {
            Colorchange(1);
          }}
        >
          Design
        </div>
        <div
          className={Style.navchild}
          style={value[2] == '#ff5b4a' ? styledata : null}
          onClick={() => {
            Colorchange(2);
          }}
        >
          Development
        </div>
        <div
          className={Style.navchild}
          style={value[3] == '#ff5b4a' ? styledata : null}
          onClick={() => {
            Colorchange(3);
          }}
        >
          Graphic
        </div>
        <div
          className={Style.navchild}
          style={value[4] == '#ff5b4a' ? styledata : null}
          onClick={() => {
            Colorchange(4);
          }}
        >
          WordPress
        </div>
      </div>
      <div className={Style.container}>
        {item.map((data, index) => {
          return (
            <>
              <motion.div
                initial={{
                  scale: 0,
                  transition: {
                    delay: 0.1,
                    type: 'spring',
                    ease: 'easeInOut',
                    damping: 20,
                    stiffness: 170,
                  },
                }}
                animate={{
                  scale: 1,
                  transition: {
                    delay: 0.1,
                    type: 'spring',
                    ease: 'easeInOut',
                    damping: 20,
                    stiffness: 170,
                  },
                }}
                className={Style.Maincontainer}
                key={index}
              >
                <div
                  className={Style.sub1}
                  style={{ backgroundImage: `url(${data[0]})` }}
                ></div>
                <div className={Style.sub2}></div>
                <div className={Style.sub21}>
                  <div className={Style.sub22}>
                    <i class='bi bi-search'></i>
                  </div>
                  <div className={Style.sub23}>
                    <i class='bi bi-link-45deg'></i>
                  </div>
                </div>
                <div className={Style.sub3}>
                  <span className={Style.sub3info}>{data[1]}</span>
                  <div className={Style.title}>
                    {data[2]?.map((title, index) => {
                      return (
                        <>
                          {' '}
                          <div className={Style.sub33} key={index}>
                            {title}
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Speaker;
