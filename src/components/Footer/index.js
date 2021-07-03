import React from 'react'
import logos from "../../../public/images/logo.svg"
import style from "../../styles/Footer.module.css"
const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.imageContainer} >
               <img className={style.image} src={logos} alt="" />
            </div>
            <div className={style.Product}>
                <h2 className={style.parag}>Product</h2>
                <p>Overview</p>
                <p>Pricing</p>
                <p>Marketplace</p>
                <p>Features</p>
                <p>Integrations</p>
            </div>
            <div className={style.Company}>
                <h2 className={style.parag}>Company</h2>
                <p>About</p>
                <p>Team</p>
                <p>Blog</p>
                <p>Careers</p>
            </div>
            <div className={style.Connect}>
                <h2 className={style.parag}>Connect</h2>
                <p>Contact</p>
                <p>Newsletter</p>
                <p>LinkedIn</p>
            </div>

        </div>
    )
}

export default Footer
