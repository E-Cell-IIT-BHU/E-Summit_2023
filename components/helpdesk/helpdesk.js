import React, { useState } from 'react';
// import gsap from 'gsap'
import styles from './helpdesk.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
          <h1>FAQs</h1>
          <p className={styles.sub_para} style={{fontSize:"2rem",color:"white"}}>
            Get those trivial queries of yours answered.
          </p>
          <div className={styles.faq}>
            {data.map((item, i) => (
              <div key={i} className='item'>
                <div className={styles.question} onClick={() => toggle(i)}>
                  <h6>{item.question}</h6>
                  <svg
                    className={styles.hr}
                    width='10'
                    height='5'
                    viewBox='0 0 42 25'
                  >
                    
                    <path
                      d='M3 3L21 21L39 3'
                      stroke='white'
                      strokeWidth='7'
                      strokeLinecap='round'
                    />
                  </svg>
                </div>
                <div
                  className={selected == i ? styles.answer_show : styles.answer}
                >
                 <p style={{marginTop:"-1.5rem",marginBottom:"1.5rem"}}>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.col}>
          <Image
            className={styles.image}
            src={
              'https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/young-people.jpg'
            }
            width='455'
            height='770'
            alt='image'
          />
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    question: 'How do I register?',
    answer:`You must click on the login box located at the top right corner of the home page and fill the required fields in order to register. This will redirect you to the dashboard where you can buy passes of your choice. `
  },
  {
    question: 'When and where is the event?',
    answer:
      "The event is taking place from 6th to 8th Jan 2023 in IIT(BHU) Varanasi. However, some of the events demanded submissions prior to the main event taking place.",
  },
  {
    question: 'Are there any requirements for attending the event?',
    answer:
      "You must have a pass in order to attend E-Summit’23. The details regarding passes have been mentioned in the website itself.",
  },
  {
    question: 'How will I be notified about the updates?',
    answer:
      "You will be notified about all the updates via your registered email id. For urgent updates, you will be informed via phone call as well.",
  },
  
];

export default Helpdesk;
