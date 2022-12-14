import React from 'react'
import s from "../../styles/Speaker.module.scss"
import 'animate.css';

function Profile({ img, name, linkedin }) {
    return (
        <div className='col-md-4 my-5 col-sm-4'>

            <div className={s.speaker}>
                <img className={s.img} src={img} alt="Speaker" />
                <div className={s.image_overlay}>
                    <h2>{name}</h2>
                    <a href={linkedin} target="blank">Linkedin</a>
                </div>
            </div>
        </div>
    )
}

export default Profile
