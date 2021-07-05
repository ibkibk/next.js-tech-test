import React from 'react'
import style from "../../styles/PhoneComp.module.css"
import Phones from "../../../public/images/illustration-phones.svg"
import { useMediaQuery } from 'react-responsive'

const PhoneComp = () => {

const isDesktopOrLaptop = useMediaQuery({
    query: '(max-device-width: 700px)'
  })
    return (

        <div>
            {isDesktopOrLaptop?  
          <div className={style.container} >
              <div className={style.top}>
                 <div className={style.content}>
                     <h1>State of the Art Infrastructure</h1>
                     <p>  With reliability and speed in mind, <br />
                         worldwide data centers provide the <br /> backbone for ultra-fast connectivity.This <br /> ensures your site will load instantly,
                         no <br /> matter where your readers are, keeping <br /> your site competitive.
                         
                     </p>
                 </div>
            </div>
            <div className={style.imageContainer}>
                   <img className={style.image} src={Phones}  />
            </div>
            </div>:  
             <div className={style.container} >
               <div className={style.imageContainer}>
                  <img className={style.image} src={Phones}  />
               </div>
            <div className={style.top}>
              <div className={style.content}>
                  <h1>State of the Art Infrastructure</h1>
                  <p>With reliability and speed in mind, 
                      worldwide data centers provide the  backbone for ultra-fast connectivity. <br />
                      This  ensures your site will load instantly,
                      no  matter where your readers are, keeping  your site competitive.</p>
              </div>
            </div>
          
          </div>}
  
        </div>
    )
}

export default PhoneComp
