import Style from '../styles/Portfolio.module.css';
import Design from '../components/Speakerdetail';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

const Speaker = () => {
  const temporary = [];
  // when you want to show speaker , replace temporary with Design in map function and remove coming soon
  return (
    <div>
      <Head>
        <title>{`Speakers | E-Summit'23 IIT BHU`}</title>
      </Head>
      <Navbar />
      <div className={Style.heading}>Speakers</div>
      <div className={Style.heading}>Coming soon...</div>
      <div className={Style.container}>
        {temporary.map((data, index) => {
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
                <div className={Style.sub3}>
                  <span className={Style.sub3info}>{data[1]}</span> <br />
                  <span className={Style.sub3info}>{data[2]}</span>
                  <div className={Style.title}>
                    <div className={Style.sub33}>
                      <Link href={data[3]}>Know More</Link>
                    </div>
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
