import React from 'react';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import HeroImage from '../../assets/HeroImage.jpg';

function header() {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <div className={styles.maincontainer}>
        <div className={styles.submaincontainer}>
          <header className={styles.header}>
            <div className={styles.container}>
              <div className={styles.row}>
                <div className={styles.column}>
                  <div className={styles.content}>
                    <div className={styles.heading}>
                      <span className={styles.Eheading}>
                        {' '}
                        {`E-Summit 2023 for`}
                      </span>
                      <br />
                      <span>
                        <b className={styles.diffText}>Hustlers</b>
                        <b className={styles.diffText}>Learners</b>
                        <b className={styles.diffText}>Achievers</b>
                      </span>

                      <main>
                        <p className={styles.para}>
                          {`Are you one of those people working day and night on that one startup idea? Are you the one who wants to explore the world of entrepreneurship? Want to learn from others and network with them? You've arrived at the proper location. You are wanted by us!`}
                        </p>

                        <motion.div whileHover={{ scale: 1.004 }}>
                          <Tilt>
                            <button className={styles.button1}>
                              <Link href='/dashboard'> Register Now </Link>
                            </button>
                          </Tilt>
                        </motion.div>
                      </main>

                      <div className={styles.footer}>
                        January 6-8th, IIT (BHU), Varanasi
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.column}>
                  <div className='portcontainer'>
                    <div className='portwomen'>
                      <motion.div whileHover={{ scale: 1.11 }}>
                        <Tilt>
                          <Image
                            src={HeroImage}
                            width={500}
                            height={500}
                            className='womanimg'
                            alt=''
                          />
                        </Tilt>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
  );
}

export default header;
