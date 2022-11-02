import React, { useState } from "react";
import styles from "./helpdesk.module.scss";
import Image from "next/image";

function Helpdesk() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }

    setSelected(i);
  };
  return (
    <section className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <p className={styles.sub_heading}>CREATE UNLIMITED LAYOUTS</p>
          <h1>From our help desk</h1>
          <p className={styles.sub_para}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe,
            perspiciatis porro deleniti nisi, mollitia, magnam
          </p>
          <div className={styles.faq}>
            {data.map((item, i) => (
              <div className="item" key={i}>
                <div className={styles.question} onClick={() => toggle(i)}>
                  <h6>{item.question}</h6>
                  <svg
                    className={styles.hr}
                    width="10"
                    height="5"
                    viewBox="0 0 42 25"
                  >
                    {" "}
                    <path
                      d="M3 3L21 21L39 3"
                      stroke="white"
                      strokeWidth="7"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div
                  className={selected == i ? styles.answer_show : styles.answer}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col}>
          <Image
            src={
              "https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/young-people.jpg"
            }
            width="455"
            height="770"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    question: "How can I register?",
    answer:
      "We have world class engineers and material that's enough to provide you the best industrial business solution since 1980s with proud.",
  },
  {
    question: "What are the main theme features ?",
    answer:
      "We have world class engineers and material that's enough to provide you the best industrial business solution since 1980s with proud.",
  },
  {
    question: "Is it free or will be charged in future ?",
    answer:
      "We have world class engineers and material that's enough to provide you the best industrial business solution since 1980s with proud.",
  },
  {
    question: "What are the main theme features ?",
    answer:
      "We have world class engineers and material that's enough to provide you the best industrial business solution since 1980s with proud.",
  },
];

export default Helpdesk;
