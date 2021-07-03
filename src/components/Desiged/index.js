import React from 'react'
import Image from "next/image"
import logos from "../../../public/images/illustration-editor-desktop.svg"
import logo from "../../../public/images/illustration-editor-mobile.svg"
import style from "../../styles/Design.module.css"
import { useMediaQuery } from 'react-responsive'



const Design = () => {

    const isDesktopOrLaptop = useMediaQuery({
    query: '(max-device-width: 700px)'
  })


    return (
    <div className={style.Container} >
        <div className={style.header}>
            <h1>Designed for the future</h1>
        </div>
        <div className={style.content}>
            <div>
                <h2>Introducing an extensible editor</h2>
               <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
                The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
                videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
                change the looks of a blog.</p>
            </div>
            <div>
               <h2>Robust content management</h2>
               <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
                by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
            </div>
        </div>
        <div className={style.imageContainer}>
            {isDesktopOrLaptop?<img className={style.image} src={logo} /> :<img className={style.image} src={logos} /> }
             
        </div>
    </div>
    )
}

export default Design
