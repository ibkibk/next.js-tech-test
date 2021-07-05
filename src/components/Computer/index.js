import React from 'react'
import LaptopDesktop from "../../../public/images/illustration-laptop-desktop.svg"
import LaptopMobile from "../../../public/images/illustration-laptop-mobile.svg"
import style from "../../styles/Computer.module.css"
import { useMediaQuery } from 'react-responsive'

const Computer = () => {

    const isDesktopOrMobile = useMediaQuery({
    query: '(max-device-width: 700px)'
  })



    return (
    <div className={style.Container}>
        <div className={style.content} >
            <div>
                <h2>Free, open, simple</h2>
                <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports 
                 features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
                 and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
            </div>
            <div>
               <h2>Powerful tooling</h2>
               <p>  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.</p>
            </div>
        </div>
         <div className={style.imageContainer}>
             {isDesktopOrMobile?<img className={style.image} src={LaptopMobile} />:<img className={style.image} src={LaptopDesktop} /> }
        </div>
    </div>
    )
}

export default Computer
