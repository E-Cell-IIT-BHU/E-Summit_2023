import React from "react";
import Image from "next/image";
import styles from "./testimonial.module.scss";

const Testimonial = () => {
  return (
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

          <div className={styles.col} id={styles.id1}>
            <p>CLIENTS OPINION</p>
            <h1>
              What Our <br /> Clients said
            </h1>
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

export default Testimonial;
