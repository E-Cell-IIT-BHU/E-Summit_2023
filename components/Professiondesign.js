import * as React from 'react'
import  Image  from 'next/image';
import Style from "../styles/professional.module.css"
import Tilt from "react-parallax-tilt";
const Professiondesign = () => {
  return (
    <div className={Style.maincontainer}>
        <div className={Style.subcontainer1}>PROFISSIONAL DESIGNS</div>
        <div className={Style.subcontainer2}> More than 10 years experience in designs. </div>
        <div className={Style.subcontainer3}>
           <Tilt><div className={Style.child1}> <div className={Style.imgee}><Image 
            src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/feature-1.jpg"
             alt="User profile photo"
             width={350}
             height={450} 
             className={Style.imgee}
             quality={100}/>
             </div>
             <div className={Style.child11}>Busines Analysis <span className={Style.trending}>TRENDING</span></div>
            </div>
            </Tilt>
            <Tilt> <div className={Style.child1}>  <div className={Style.imgee}><Image 
             src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/feature-2.jpg"
             alt="User profile photo"
             width={350}
             height={450} 
             className={Style.imgee}
             quality={100} />
             </div>
             <div className={Style.child11}>Creative Designs <span className={Style.trending}>TRENDING</span></div>
             </div>
             </Tilt>
            <Tilt><div className={Style.child1}> <div className={Style.imgee}><Image 
             src="https://crust.winsomethemes.com/original-dark-elementor/wp-content/uploads/sites/70/2021/11/feature-3.jpg"
             alt="User profile photo"
             width={350}
             height={450} 
             className={Style.imgee}
             quality={100} />
             </div>
             <div className={Style.child11}>Digital Marketing <span className={Style.trending}>TRENDING</span> </div>
             </div>
             </Tilt>
        </div>
    </div>
  )
}

export default Professiondesign
