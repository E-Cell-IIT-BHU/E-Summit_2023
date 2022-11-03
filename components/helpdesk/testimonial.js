import React from "react";
import Image from "next/image";
import styles from "./testimonial.module.scss";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Testimonial = () => {
  const zoomInProperties = {
    indicators: true,
    // scale: 1.2,
    duration: 1000,
    transitionDuration: 100,
    infinite: true,
    prevArrow: (
      <div style={{ width: "30px", marginLeft: "0px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="#2e2e2e"
        >
          <path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "30px", cursor: "pointer" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
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
        <div className={styles.row}>
          <div className={styles.col} id={styles.id1}>
            <p>CLIENTS OPINION</p>
          <h1>What Our <br/> Clients said</h1>
          {/* <h1>Clients said</h1> */}
          </div>
       
          <div className={styles.col}>
        <Zoom {...zoomInProperties}>
          {data.map((item, i) => (
         
              <div key={i}>
                <Image src={item.imgurl} width="70" height="70" alt="image" />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
            
            </div>
          ))}
        </Zoom>
        </div>
        </div>
      </section>
    </>
  );
};
const data = [
  {
    name: "Naveen Kumar",
    desc: "When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late.",
    imgurl:
      "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/avatar-2.jpg",
  },
  {
    name: "Kaushal Tiwari",
    desc: " I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for .",
    imgurl:
      "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/young-people.jpg",
  },
  {
    name: "Mahi Roy",
    desc: "Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :",
    imgurl:
      "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/avatar-1.jpg",
  },
];

export default Testimonial;
