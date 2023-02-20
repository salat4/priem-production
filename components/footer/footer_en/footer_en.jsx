import React from 'react'
import s from "../footer.module.css";
import image from "../../../images/LogoFix-removebg-preview.png";
import Image from "next/image";
// import facebook from "../../../images/facebook.png"
import facebook from "../../../images/facebook.png"
import instagram from "../../../images/instagram.png"
import youtube from "../../../images/youtube.png"
// import container from "../../../styles/globals.css"
import Button from '../../../General/Button';
const Footer_en = () => {
  return (
      <div className= {`${s.background}` }>
        <div className='container'>
          <div className={s.footer__top}>
            <ul className={s.footer__list}>
              <li className={s.footer__list__item}>
                <Image
                className={s.footer__image}
                src={image}
                width={80}
                height={89}
                alt="Logo footer"
                ></Image>

                <Button text = {"Оставить заяку"}></Button>
              </li>
              <li className={s.footer__list__item}>
                <ul className={s.footer__nav__list}>
                  <li className={s.footer__nav__list__item}>
                    <p>Home</p>
                  </li>
                  <li className={s.footer__nav__list__item}>
                    <p>About us</p>
                  </li>
                  <li className={s.footer__nav__list__item}>
                    <p>Team</p>
                  </li>
                  <li className={s.footer__nav__list__item}>
                    <p>For actors</p>
                  </li>
                  <li className={s.footer__nav__list__item}>
                    <p>Portfolio</p>
                  </li>
                </ul>

                
              </li>
              <li className={s.footer__list__item}>
                <p className={s.footer__list_contacts}>Contacts</p>
                <p className={s.footer__list__mail}>
                  <a target="_blank" href="mailto:priem.mih.production@gmail.com" rel="noreferrer">priem.mih.production@gmail.com</a>
                </p>
                <p className={s.footer__list__tel}>
                <a target="_blank" href="tel:+38 063 531 22 15" rel="noreferrer">+38 063 531 22 15</a>
                </p>
                <ul className={s.footer__list__link}>
                  <li className={s.footer__list__link__item}>                
                    <Image
                      className={s.footer__image}
                      src={facebook}
                      width={25}
                      height={25}
                      alt="Logo footer"
                    ></Image>              
                               
                       
                  </li>
                  <li className={s.footer__list__link__item}>
                    <Image
                      className={s.footer__image}
                      src={instagram}
                      width={25}
                      height={25}
                      alt="Logo footer"
                    ></Image>  
                  </li>
                  <li className={s.footer__list__link__item}>
                    <Image
                      className={s.footer__image}
                      src={youtube}
                      width={30}
                      height={25}
                      alt="Logo footer"
                    ></Image>           
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className={s.footer__bottom}>
          <p>
          PRIЁMproduction © 2023 Все права защищены
          </p>
        </div>
        </div>
        
        
      </div>
  )
}
export default Footer_en