import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaEnvelope,
} from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
const Footer = () => {

  return (
    <div>
      <footer
        className="text-center text-lg-start text-white"
        style={{
          backgroundColor: "#2f2b2b",
          bottom: "0",
          width: "100%",
        }}
      >
        <div className="container p-4 pb-0">
          <section className="">
            < Row >
              < Col >
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contact Us
                </h6>
                <p>
                  Indian Institute of Technology<br />
                  (Banaras Hindu University)<br />
                  Varanasi, India<br />
                  PIN: 221005<br />

                  <a href="ecell@iitbhu.ac.in"><FaEnvelope></FaEnvelope> Mail us @ ecell@iitbhu.ac.in</a><br />
                  +91 9587887413
                </p>
              </Col>
              <hr className="w-100 clearfix d-md-none" />
              <Col>
                <Row>
                  <h6 className="text-uppercase mb-4 font-weight-bold">
                    Important Links
                  </h6>
                  <Col>
                    <p>
                      <a href="/" className="text-white ulstyle">Home</a>
                    </p>
                    <p>
                      <a href="/" className="text-white ulstyle">Speaker</a>
                    </p>
                    <p>
                      <a href="/" className="text-white ulstyle">Event</a>
                    </p>
                    <p>
                      <a href="/" className="text-white ulstyle">Workshop</a>
                    </p>
                  </Col>

                  <hr className="w-100 clearfix d-md-none" />
                  <Col>
                    <p>
                      <a href="/" className="text-white ulstyle">Sponsers</a>
                    </p>
                    <p>
                      <a href="/" className="text-white ulstyle">Team</a>
                    </p>
                    <p>
                      <a href="/" className="text-white ulstyle">Campus Directors</a>
                    </p>
                    <p>
                      <a href="/" className="text-white ulstyle">Help</a>
                    </p>
                  </Col>
                </Row>
              </Col>
              <hr className="w-100 clearfix d-md-none" />
              <Col className="footer-items">
                <iframe
                  src="https://ecelliitbhu.substack.com/embed"
                  width="450"
                  height="200"
                  className="newsletter"
                  style={{
                    // border: "1px solid #EEE",
                    background: "#f8f9fa",
                    margin: "auto",
                  }}
                  // frameborder="0"
                  scrolling="no"
                ></iframe>
              </Col>
            </Row>
          </section>

          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2020 Copyright: MDBootstrap.com
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a>
                  <FaInstagram className="social-icons"></FaInstagram>
                </a>
                <a>
                  {" "}
                  <FaFacebook className="social-icons"></FaFacebook>
                </a>
                <a >
                  <FaLinkedin className="social-icons"></FaLinkedin>
                </a>
                <a>
                  <FaTwitter className="social-icons"></FaTwitter>
                </a>
                <a >
                  <FaYoutube className="social-icons"></FaYoutube>
                </a>
                <a>
                  <FaDiscord className="social-icons"></FaDiscord>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
