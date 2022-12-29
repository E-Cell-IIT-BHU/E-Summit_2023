import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Style from "../styles/sponsorcss.module.css"
import Head from 'next/head'
const Sponsor = () => {
  return (
    <>
      <Head>
        <title>{`Sponsors | E-Summit'23 IIT BHU`}</title>
      </Head>
      <Navbar />
      <div className={Style.maincontainer}>Declaring Soon...</div>
      <Footer />
    </>
  )
}

export default Sponsor