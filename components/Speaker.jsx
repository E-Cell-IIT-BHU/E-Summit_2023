import React from 'react'
import s from '../styles/Speaker.module.scss';
import Profile from './speakerComponent/Profile';

const Speaker = () => {

  const src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPUgDpKo4kdFufJqf-c-969c8v5GQs_9h3Cg&usqp=CAU";
  const linkedin = "https://www.linkedin.com/company/ecelliitbhu/" ;
  const name = "MODI"
  var rows = 3;
  return (
    <div className={s.speaker_container} >
      <div className={s.heading}>SPEAKERS</div>
      <div className={s.box}>
        <div className='row '>
          <Profile img={src} name={name} linkedin={linkedin}  />
          <Profile img={src} name={name} linkedin={linkedin} />
          <Profile img={src} name={name} linkedin={linkedin} />
        </div>
        <div className='row '>
          <Profile img={src} name={name} linkedin={linkedin} />
          <Profile img={src} name={name} linkedin={linkedin} />
          <Profile img={src} name={name} linkedin={linkedin} />
        </div>
        <div className='row '>
          <Profile img={src} name={name} linkedin={linkedin} />
          <Profile img={src} name={name} linkedin={linkedin} />
          <Profile img={src} name={name} linkedin={linkedin} />
        </div>
      </div>
    </div>
  )

}

export default Speaker