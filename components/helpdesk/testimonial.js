import React from "react";
import Image from "next/image";
import styles from "./testimonial.module.scss";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Testimonial = () => {
  const zoomInProperties = {
    indicators: true,
    duration: 3000,
    loop: true,
    transitionDuration: 1000,
    infinite: true,
    prevArrow: (
      <div
        style={{ width: "30px", marginLeft: "0px", cursor: "pointer" }}
        className={styles.prevArrow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 612 612"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div
        style={{ width: "30px", marginLeft: "-30%", cursor: "pointer" }}
        className={styles.nextArrow}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 612 612"
          fill="#2e2e2e"
        >
          <path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
        </svg>
      </div>
    ),
  };
  return (
    <>
      <section className={styles.container}>
        <div className={styles.maincontainer}>
          <div className={styles.submaincontainer}>
            <div className={styles.row}>
              <div className={styles.col} id={styles.id1}>
                <p style={{marginTop:"2rem"}}>PARTICIPANTS OPINION</p>
                <h1 style={{marginBottom:"2rem"}}>
                  What Our <br /> Participants said
                </h1>
              </div>

              <div className={styles.col}>
                <Zoom {...zoomInProperties}  >
                  {data.map((item, i) => (
                    <div key={i}>
                      <Image
                        src={item.imgurl}
                        width="70"
                        height="70"
                        alt="image"
                      />
                      <h3>{item.name}</h3>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </Zoom>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
const data = [
  {
    name: "Rahul Malik, IIT Kharagpur",
    desc: `E-Summit'20 scheduling of talks, allowing ample breaks, refueling & networking was spot on.
    Diverse, smoothly run & down-
    to-earth.`,
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
  },
  {
    name: "Ankita Goyal, IIT Kanpur",
    desc: `What a fantastic day it's been at
    E-Summit 20. Huge shout out to the team for connecting us all and making this amazing event
    possible.`,
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
  },
  {
    name: "Raj Parekh MNNIT",
    desc: `Great vibe @esummit20. Loved
    the talks and events of the fest.
    Everthing was well organized and the organizers were very
    polite`,
    imgurl:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
  },
];

export default Testimonial;