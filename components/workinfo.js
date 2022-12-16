import React from 'react';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import AnimatedNumber from 'animated-number-react';
const Workinfo = () => {
  const [ct, setct] = useState(false);
  const formatValue = (value) => value.toFixed(0);
  return (
    <motion.div
      initial={() => {
        setct(false);
      }}
      whileInView={() => {
        setct(true);
      }}
      viewport={{ once: false }}
      className='workinfo'
    >
      <Tilt>
        <motion.div
          className='workCard'
          whileHover={{
            width: '17rem',
            height: '12rem',
          }}
        >
          <div className='firstchild'>
            <i className='bi bi-clock'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='50' formatValue={formatValue} />}K
            <div className='secondsubchild'>Work Hours</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: '17rem',
            height: '12rem',
          }}
          className='workCard'
        >
          <div className='firstchild'>
            <i className='bi bi-person'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='740' formatValue={formatValue} />}
            <div className='secondsubchild'>Customers</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: '17rem',
            height: '12rem',
          }}
          className='workCard'
        >
          <div className='firstchild'>
            <i className='bi bi-files'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='60' formatValue={formatValue} />}+
            <div className='secondsubchild'>Layouts</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: '17rem',
            height: '12rem',
          }}
          className='workCard'
        >
          <div className='firstchild'>
            <i className='bi bi-hdd-stack'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='375' formatValue={formatValue} />}
            <div className='secondsubchild'>Projects</div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default Workinfo;
