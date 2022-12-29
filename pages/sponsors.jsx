import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Style from "../styles/sponsorcss.module.css"
import Head from 'next/head'
import Eatmynews from "../assets/eatmynews.png"
import  Image  from 'next/image';
import Tilt from 'react-parallax-tilt';
const Sponsor = () => {
  return (
    <>
      <Head>
        <title>{`Sponsors | E-Summit'23 IIT BHU`}</title>
      </Head>
      <Navbar />
      <div className={Style.maincontainer}>Sponsor page....</div>
      {/* <div className={Style.maincontainer}>
        <div className={Style.container}>
          <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
            <div className={Style.subchild} style={{backgroundImage: `url(${Eatmynews})`,}}>
            <Image src={Eatmynews} width={290} height={325}/>
          </div>
          </Tilt>
        </div>
      </div> */}

      
      <Footer />
    </>
  )
}

export default Sponsor