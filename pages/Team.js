import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import Image from "next/image";
import prof from "../assets/team/rajnesh_tyagi.png";
import Amit from "../assets/team/2022-2023/Amit.jpg";
import Tanaya from "../assets/team/2022-2023/Tanaya.jpg";
import Tanya from "../assets/team/2022-2023/Tanya.jpeg";
import Parth from "../assets/team/2022-2023/Parth.jpg";
import Ashwat from "../assets/team/2022-2023/Ashwat.jpg";
import Divyansh from "../assets/team/2022-2023/Divyansh.jpg";
import Shreya from "../assets/team/2022-2023/Shreya.JPG";
import Vanshika from "../assets/team/2022-2023/Vanshika.jpg";
import Navbar from "../components/Navbar";

const Team = () => {
  return (
    <>
      <div style={{ backgroundColor: "black", color: "white" }}>
        <Head>
          <title>Team</title>
          <meta name="robots" content="index, follow" />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <Navbar />
        <div
          className="container"
          style={{
            backgroundColor: "#181921",
          }}
        >
          <div className="row">
            <h1
              style={{
                margin: "auto",
                textAlign: "center",
                fontSize: "4rem",
                fontWeight: "bold",
              }}
            >
              The Team
            </h1>
            <h2
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              GET TO KNOW THE TEAM OF E-CELL
            </h2>
          </div>
          <div>
            <h2
              style={{
                fontSize: "2rem",
                textAlign: "center",
                fontWeight: "bold",
                margin: "90px auto 30px auto",
              }}
            >
              UNDER THE GUIDANCE OF
            </h2>
            <div className="our-team" style={{ margin: "auto" }}>
              <Image
                src={prof}
                className="img-responsive"
                alt="team member"
                style={{ width: "auto" }}
              />
              <div className="team-content">
                <h3 className="name">PROF. RAJNESH TYAGI</h3>
                <span className="post">PROF. INCHARGE, E-CELL</span>
              </div>
            </div>
          </div>

          <div className="row">
            <h2
              style={{
                fontSize: "2rem",
                color: "white",
                textAlign: "center",
                fontWeight: "bold",
                margin: "90px auto 30px auto",
              }}
            >
              CORE TEAM MEMBERS
            </h2>
            <div className="team-container">
              <div className="our-team">
                <Image
                  src={Amit}
                  height={1000}
                  width={1000}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">AMIT KUMAR BAHETI</h3>
                  <span className="post">VICE PRESIDENT E-CELL</span>
                  <div className="team-social">
                    <a
                      href={`mailto:amit.krbaheti.eee19@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/amitkumarbaheti/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/amit_baheti_"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <Image
                  src={Tanaya}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">TANAYA MUJUMDAR</h3>
                  <span className="post">ASSOCIATE VICE PRESIDENT E-CELL</span>
                  <div className="team-social">
                    <a
                      href={`mailto:mujumdartanaya@gmail.com`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanaya-mujumdar-80aa17207"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/TanayaMujumdar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-container-1">
              <div className="our-team">
                <Image
                  src={Tanya}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">TANYA GUPTA</h3>
                  <span className="post">BRANDING HEAD</span>
                  <div className="team-social">
                    <a
                      href={`mailto:tanya.gupta.che20@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanya-gupta-215942214"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href={`https://twitter.com/TanyaGu27136914?t=pBdV1Hb-cSR19h2Zcqr9Yg&s=08`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <Image
                  src={Parth}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">PARTH GUPTA</h3>
                  <span className="post">SAP HEAD</span>
                  <div className="team-social">
                    <a
                      href={`mailto:parthsanjeev.gupta.che20@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/parthgupta03/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/ParthG03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team  ">
                <Image
                  src={Ashwat}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">ASHWAT KUMAR SINGH</h3>
                  <span className="post">TECH HEAD</span>
                  <div className="team-social">
                    <a
                      href={`mailto:ashwat.kumarsingh.met20@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href={`https://www.linkedin.com/in/ashwat-singh/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/ashwat_singh"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team ">
                <Image
                  src={Shreya}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">SHREYA JAIN</h3>
                  <span className="post">EVENTS HEAD</span>
                  <div className="team-social">
                    <a
                      href={`mailto:shreya.jain.cd.eee20@iitbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href={`https://www.linkedin.com/in/shreya-jain-/`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href={`https://twitter.com/shreyaj90`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team">
                <Image
                  src={Vanshika}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">VANSHIKA GUPTA</h3>
                  <span className="post">STRATEGIC RELATIONS HEAD</span>
                  <div className="team-social">
                    <a
                      href={`mailto:vanshika.gupta.met20@iitbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/vanshika-gupta-299001201"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/vanshika130502"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
              <div className="our-team  ">
                <Image
                  src={Divyansh}
                  className="img-responsive"
                  alt="team member"
                />
                <div className="team-content">
                  <h3 className="name">DIVYANSH THAKRE</h3>
                  <span className="post">{`INNOVATION & INCUBATION HEAD`}</span>
                  <div className="team-social">
                    <a
                      href={`mailto:divyansh.thakre.civ20@itbhu.ac.in`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <GrMail className="social-icons"></GrMail>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/divyanshthakre/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin className="social-icons"></FaLinkedin>
                    </a>
                    <a
                      href="https://twitter.com/Divyansh_03"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaTwitter className="social-icons"></FaTwitter>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Team;
