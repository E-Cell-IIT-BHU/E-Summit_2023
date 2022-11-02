
import React from 'react';
import Image from 'next/image';
import styles from './testimonial.module.scss';
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import React from "react";
import Image from "next/image";
import styles from "./testimonial.module.scss";


const Testimonial = () => {
     const zoomInProperties = {
		indicators: true,
		// scale: 1.2,
		duration: 3000,
		transitionDuration: 100,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginLeft: "48%", cursor: "pointer" }}>
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
			<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
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
         <div> <p>CLIENTS OPINION</p></div>
          <h1>What Our</h1>
          <h1>Clients said</h1>
         </div>
         <Zoom {...zoomInProperties}>
     {data.map((item, i) => (
          <div key={i}>
                <div className={styles.col}>
                <Image src={item.imgurl} width="70" height="70" alt="image" />
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
</div>
          </div>
     ))}
</Zoom>


</section>
    </>
     

  )
}
const data = [
     {
     name:"Naveen Kumar",
     desc:"When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late.",
     imgurl:"https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/avatar-2.jpg"
     },
     {
     name:"Kaushal Tiwari",
     desc:" I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for .",
     imgurl:"https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/young-people.jpg"
     },
     {
     name:"Mahi Roy",
     desc:"Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :",
     imgurl:"https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/avatar-1.jpg"
     },
  
]

    <>
      <section className={styles.facilities}>
        <h1>Our Reviews</h1>
        <p className={styles.desc}>
          Here&apos;s what they have to say about their Summit experience.
        </p>
        <div className={styles.row}>
          <div className={styles.facilities_col}>
            <Image
              src={
                "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/avatar-2.jpg"
              }
              width="70"
              height="70"
              alt="image"
            />
            <h3>Kaushal Tiwari</h3>
            <p>
              Marriage comes with a lot of unavoidable expenses in India and
              spending a big chunk of your savings on furniture and white goods
              could be a big challenge. RentoMojo not just took away all our
              worries but in fact went to the extent of spoiling us. Where I
              could have owned just some bare essentials after making a huge
              hole in my pocket or paid unnecessary EMIs.{" "}
            </p>
          </div>
          <div className={styles.facilities_col}>
            <Image
              src={
                "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/avatar-1.jpg"
              }
              width="70"
              height="70"
              alt="image"
            />
            <h3>Kaushal Tiwari</h3>
            <p>
              Marriage comes with a lot of unavoidable expenses in India and
              spending a big chunk of your savings on furniture and white goods
              could be a big challenge. RentoMojo not just took away all our
              worries but in fact went to the extent of spoiling us. Where I
              could have owned just some bare essentials after making a huge
              hole in my pocket or paid unnecessary EMIs.{" "}
            </p>
          </div>
          <div className={styles.facilities_col}>
            <Image
              src={
                "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/young-people.jpg"
              }
              width="70"
              height="70"
              alt="image"
            />
            <h3>Naveen Kumar</h3>
            <p>
              When I moved to Bangalore from Chennai, I went to multiple
              websites to get a bed until I found out about Rentomojo. I rented
              a bed and mattress, just to try it out. They delivered it within a
              day and set it up at my place without any hassle. Now I sleep so
              peacefully that I always end up being late for work :D
            </p>
          </div>
        </div>
      </section>
    </>
  );
};


export default Testimonial;
