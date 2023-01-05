import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Style from "../styles/sponsorcss.module.css";
import Head from "next/head";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
const Ecosystem = [
  { img: "/sponsors/startinup.jpg", weblink: "https://startinup.up.gov.in/" },
  { img: "/sponsors/ibhub.png", weblink: "https://ibhubs.co/" },
  { img: "/sponsors/markoknow.png", weblink: "https://markoknow.com/" },
];
const startup = [
  {
    img: "/sponsors/microsoft.png",
    weblink: "https://www.microsoft.com/en-in/campaign/microsoftstartups/",
  },
  {
    img: "/sponsors/aws.png",
    weblink: "https://aws.amazon.com/activate/",
  },
  {
    img: "/sponsors/freshwork.png",
    weblink: "https://www.freshworks.com/company/partners/startup-program/",
  },
  { img: "/sponsors/Zoho.jpg", weblink: "https://www.zoho.com/startups/" },
  { img: "/sponsors/cleartape.png", weblink: "https://clevertap.com/" },
];
const investment = [
  { img: "/sponsors/100x.png", weblink: "https://www.100x.vc/" },
  { img: "/sponsors/Pavalion.png", weblink: "https://pavilionfund.com/" },
  {
    img: "/sponsors/maverick.png",
    weblink: "https://www.linkedin.com/company/maverick-angels/",
  },
  { img: "/sponsors/auxano.png", weblink: "https://auxano.in/" },
  { img: "/sponsors/pedalstart.png", weblink: "https://pedalstart.com/" },
  {
    img: "/sponsors/venture.png",
    weblink: "https://theventurefolks.substack.com/",
  },
  { img: "/sponsors/letsventure.png", weblink: "https://www.letsventure.com/" },
  { img: "/sponsors/yournext.png", weblink: "https://yournest.in/" },
];
const learn = [
  { img: "/sponsors/buddy.png", weblink: "https://interviewbuddy.in/" },
  { img: "/sponsors/elearn.png", weblink: "https://www.elearnmarkets.com/" },
];
const media = [
  { img: "/sponsors/editimes.png", weblink: "https://edtimes.in/" },
  {
    img: "/sponsors/ducompe.png",
    weblink: "https://www.instagram.com/ducompetition/?hl=en",
  },
  { img: "/sponsors/newsreach.png", weblink: "https://newsreach.in/" },
  { img: "/sponsors/startupnews.png", weblink: "https://www.startupnews.fyi/" },
  { img: "/sponsors/eatnews.png", weblink: "https://www.eatmy.news/" },
];
const food = [
  {
    img: "/sponsors/eng.png",
    weblink: "https://www.instagram.com/chai__wala__engineers/",
  },

  {
    img: "/sponsors/shree.png",
    weblink: "https://www.instagram.com/shreebakers_/",
  },
];
const Childdiv = (prop) => {
  return (
    <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
      <div className={Style.subchild}>
        <a href={prop.wlink}>
          <Image src={prop.imlink} width={290} height={345} />
        </a>
      </div>
    </Tilt>
  );
};
const Mapdiv = (prop) => {
  return (
    <>
      <h1 style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        {prop.partner}
      </h1>
      <div className={Style.container}>
        {prop.partnername.map((data, index) => {
          return (
            <Childdiv wlink={data.weblink} imlink={data.img} key={index} />
          );
        })}
      </div>
    </>
  );
};
const Parentdiv = (prop) => {
  return (
    <>
      <h1 style={{ marginTop: "1rem", marginBottom: "1.5rem" }}>
        {prop.partner}
      </h1>
      <div className={Style.container}>
        <Childdiv wlink={prop.partnerlink} imlink={prop.partnerimg} />
      </div>
    </>
  );
};
const Sponsor = () => {
  return (
    <>
      <Head>
        <title>{`Sponsors | E-Summit'23 IIT BHU`}</title>
      </Head>
      <Navbar />
      <div
        className={Style.maincontainer}
        style={{
          fontSize: "4rem",
          padding: "0rem",
          margin: "1rem",
          marginBottom: "-3rem",
        }}
      >
        Sponsors
      </div>
      <div className={Style.maincontainer}>
        <Parentdiv
          partner="Principal Sponsor"
          partnerlink="https://www.iitbhufoundation.org/"
          partnerimg="/sponsors/iitbhu.png"
        />

        <Parentdiv
          partner="Associate Sponsor"
          partnerlink="https://www.bankofbaroda.in/"
          partnerimg="/sponsors/bob.png"
        />
        <Mapdiv partner="Ecosystem partner" partnername={Ecosystem} />
        <Mapdiv partner="Startup Services Partner" partnername={startup} />

        <Parentdiv
          partner="cloud partner"
          partnerlink="https://www.digitalocean.com/"
          partnerimg="/sponsors/digitalocean.png"
        />

        <Mapdiv partner="Investment Partner" partnername={investment} />
        <Parentdiv
          partner="Banking Partner"
          partnerlink="https://www.icicibank.com/"
          partnerimg="/sponsors/icici.png"
        />
        <Parentdiv
          partner="Logistics Partner"
          partnerlink="http://www.safexpress.com/"
          partnerimg="/sponsors/safexpress.png"
        />
        <Parentdiv
          partner="Mobility Partner"
          partnerlink="https://www.jaguarlandrover.com/"
          partnerimg="/sponsors/jauar.jpg"
        />
        <Parentdiv
          partner="Powered by Partner"
          partnerlink="https://unstop.com/"
          partnerimg="/sponsors/unstop.png"
        />
        <Parentdiv
          partner="Powered by Partner of Inquizzite"
          partnerlink="https://unacademy.com/"
          partnerimg="/sponsors/unacademy.png"
        />
        <Parentdiv
          partner="Streaming Partner"
          partnerlink="https://www.zee5.com/"
          partnerimg="/sponsors/zee2.png"
        />
        <Parentdiv
          partner="Case Partner"
          partnerlink="https://slamitt.com/login"
          partnerimg="/sponsors/slamit.png"
        />
        <Parentdiv
          partner="Co-Presenting Sponsor of Design Rush"
          partnerlink="https://www.divami.com/"
          partnerimg="/sponsors/divami.png"
        />
        <Parentdiv
          partner="Beverage Partner"
          partnerlink="https://amul.com/products/beverage-range.php"
          partnerimg="/sponsors/amul.jpg"
        />
        <Parentdiv
          partner="Crypto Partner"
          partnerlink="https://www.roostoo.com/"
          partnerimg="/sponsors/roostoo.png"
        />
        <Parentdiv
          partner="Savings Partner"
          partnerlink="https://www.grabon.in/"
          partnerimg="/sponsors/grabon.png"
        />
        <Parentdiv
          partner="Certification Partner"
          partnerlink="https://givemycertificate.com/"
          partnerimg="/sponsors/givemycert.jpg"
        />
        <Parentdiv
          partner="Events Partner"
          partnerlink="https://unsnarl.vercel.app/#"
          partnerimg="/sponsors/unsnarl.png"
        />
        <Parentdiv
          partner="Task Management Partner"
          partnerlink="https://www.taskade.com/"
          partnerimg="/sponsors/taskada.png"
        />
        <Mapdiv partner="Learning Partner" partnername={learn} />
        <Parentdiv
          partner="Upskilling Partner"
          partnerlink="https://talerang.com/"
          partnerimg="/sponsors/talerang.png"
        />
        <Parentdiv
          partner="Sponsorship Partner"
          partnerlink="https://sponbar.tech/"
          partnerimg="/sponsors/sponbar.png"
        />
        <Mapdiv partner="Media Partner" partnername={media} />
        <Parentdiv
          partner="Blogger Outreach Partner"
          partnerlink="https://www.blogadda.com/"
          partnerimg="/sponsors/blogadda.png"
        />
        <Parentdiv
          partner="Outreach Partner"
          partnerlink="https://www.instagram.com/why_engineering/"
          partnerimg="/sponsors/why.png"
        />
        <Parentdiv
          partner="Food and Outing Partner"
          partnerlink="https://www.instagram.com/btcafe2.0/"
          partnerimg="/sponsors/bt.png"
        />
        <Mapdiv partner="Food Partner" partnername={food} />
      </div>

      <Footer />
    </>
  );
};

export default Sponsor;
