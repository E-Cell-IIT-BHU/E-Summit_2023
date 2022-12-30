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
            width: '16rem',
            height: '12rem',
          }}
        >
          <div className='firstchild'>
            <i className='bi bi-clock'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='9000' formatValue={formatValue} />}+
            <div className='secondsubchild'>Attendees</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: '16rem',
            height: '12rem',
          }}
          className='workCard'
        >
          <div className='firstchild'>
            <i className='bi bi-person'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='30' formatValue={formatValue} />}+
            <div className='secondsubchild'>Guest Speakers</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: '16rem',
            height: '12rem',
          }}
          className='workCard'
        >
          <div className='firstchild'>
            <i className='bi bi-files'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='650' formatValue={formatValue} />}+
            <div className='secondsubchild'>Startups</div>
          </div>
        </motion.div>
      </Tilt>
      <Tilt>
        <motion.div
          whileHover={{
            width: '16rem',
            height: '12rem',
          }}
          className='workCard'
        >
          <div className='firstchild'>
            <i className='bi bi-hdd-stack'></i>
          </div>
          <div className='secondchild'>
            {ct && <AnimatedNumber value='50' formatValue={formatValue} />}+
            <div className='secondsubchild'>Investors & VCs</div>
          </div>
        </motion.div>
      </Tilt>
    </motion.div>
  );
};

export default Workinfo;
