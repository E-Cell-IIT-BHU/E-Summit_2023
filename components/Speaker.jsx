import React from "react";
import { useState } from "react";
import s from "../styles/Speaker.module.scss";
import Profile from "./speakerComponent/Profile";
import { motion } from "framer-motion";
import { data } from "../assets/data";

const Speaker = () => {
  

  const [filter, setFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, x:0, opacity: 1 });

  const [filterData, setFilterData] = useState(data);

  const handleWorkFilter = (item) => {
    setFilter(item);
    setAnimateCard([{ y: 100,x:100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, x:0,opacity: 1 }]);

      if (item === "All") {
        setFilterData(data);
      } else {
        setFilterData(data.filter((data) => data.category.includes(item)));
      }
    }, 500);
  };

  return (
    <div className={s.speaker_container}>
      <div className={s.heading}>SPEAKERS</div>

      <div className={s.filter}>
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={s.item}
              style= {{ backgroundColor : filter === item ? "	#DAA520" : "" , color : filter === item ? "white" : ''}}
            >
              {item}
            </div>
          )
        )}
      </div>

      <div className={s.box}>
        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          {/* <div className='row '>
          {selected == "all" && data.map((data, index) => (
            <Profile key={index} img={data.src} name={data.name} linkedin={data.linkedin} />
          ))}
          {console.log(selected)}

          {selected !="all" && data.filter(function(x){ return x.category == selected}).map((data, index) => (
          

            <Profile key={index} img={data.src} name={data.name} linkedin={data.linkedin} />
            
          ))}

          {console.log( data.filter( function(x){ return x.category == "presentSpeaker"}))}
          
        </div> */}
        </motion.div>
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.4, delayChildren: 0.4 }}
        className={s.card}
      >
        <div className="row">
          {filterData.map((data, index) => (
            <Profile key={index} img={data.src} name={data.name} linkedin={data.linkedin} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Speaker;
