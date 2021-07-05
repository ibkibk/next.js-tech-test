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
                <p className={style.PTag}>Overview</p>
                <p className={style.PTag}>Pricing</p>
                <p className={style.PTag}>Marketplace</p>
                <p className={style.PTag}>Features</p>
                <p className={style.PTag}>Integrations</p>
            </div>
            <div className={style.Company}>
                <h2 className={style.parag}>Company</h2>
                <p className={style.PTag}>About</p>
                <p className={style.PTag}>Team</p>
                <p className={style.PTag}>Blog</p>
                <p className={style.PTag}>Careers</p>
            </div>
            <div className={style.Connect}>
                <h2 className={style.parag}>Connect</h2>
                <p className={style.PTag}>Contact</p>
                <p className={style.PTag}>Newsletter</p>
                <p className={style.PTag}>LinkedIn</p>
            </div>

        </div>
    )
}

export default Footer
