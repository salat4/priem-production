<<<<<<< HEAD
import s from "../footer.module.css"

export default function Footer_en() {
    return (
        <div className={s.footer} >
            <div>footer</div>
        </div>
    )
}
=======
import Link from 'next/link';
import React, { useState } from 'react';
import s from "../footer.module.css"
import image from"../../../images/Logo.png"
import container from "../../../styles/container.module.css"
import Image from 'next/image';
export default function Footer_en() {
    const [active, setActive] = useState("")
    const handleToggle = (e) => {
        setActive(e.target.id)
    }

    return (
        <div className={`${s.footer} ${container.container__stretch}`}onClick = {()=>{setActive('')}} >
            <ul className = {s.footer__list}>
                <li className = {`${s.footer__item} ${s.footer__about}`}>
                    <p>About us</p>
                </li>
                <li className ={`${s.footer__item} ${s.footer__contacts}`}>
                    <p>Contacts</p>
                    
                </li>
                <li className ={`${s.footer__item} ${s.footer__language}`} > 
                    <p id = "language" onClick={handleToggle} onMouseEnter = {handleToggle}>Language</p>
                    {active === "language" && 
                        <ul id = "language"  className={s.footer__modal__list} >
                
                            <li id = "language">
                                <Link id = "language" href = "/en">English</Link>
                                
                            </li>
                            <li id = "language">
                                <Link id = "language" href = "/ua">Українська</Link>
                            </li>
                            <li id = "language"> 
                                <Link id = "language" href = "/ru"> Росийская</Link>
                            </li>
                        </ul>
                }
                </li>
                <li className ={`${s.footer__item} ${s.footer__works}`} >
                    <p id = "work" onClick={handleToggle} onMouseEnter = {handleToggle}>
                        works
                    </p>
                    {active === "work" && 
                     <ul className={`${s.footer__modal__list} ${s.footer__modal__list__work}`} >
                        <li >All works</li>
                        <li>Commercials</li>
                        <li>Music video</li>
                        <li>Features</li>
                    </ul>
            }
                </li>
            </ul>
           
 
            
            <div className={s.footer__image}>
                <Image className= {s.footer__image} src = {image} width={100} height = {100}/>
            </div>
        </div>
    )
}
>>>>>>> footer
