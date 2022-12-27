import React, { useState } from 'react';
// import gsap from 'gsap'
import styles from './helpdesk.module.scss';
import Image from 'next/image';

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
          <p className={styles.sub_para}>
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
                    {' '}
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
                  <p>{item.answer}</p>
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
    question: 'How can I register?',
    answer:
      'You can register for the events at our unstop page here.[https://unstop.com/festival/e-summit23-iit-bhu-indian-institute-of-technology-iit-bhu-varanasi-75705]\n To attend the E-Summit, you can avail the pass in dashboard.',
  },
  {
    question: 'What are the main theme features ?',
    answer:
      "We have world class engineers and material that's enough to provide you the best industrial business solution since 1980s with proud.",
  },
  {
    question: 'When is the event?',
    answer:
      'The pre-events and rounds of the first few rounds have already begun. All the final rounds, panel discussions, networking sessions, and startup showcase will be from 6 to 8th Jan on the campus of IIT (BHU), Varanasi',
  },
  {
    question: 'What Next after the Registration ?',
    answer: '',
  },
];

export default Helpdesk;
