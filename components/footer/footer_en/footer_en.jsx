import Link from "next/link";
import React, { useState } from "react";
import s from "../footer.module.css";
import image from "../../../images/Logo.png";
import container from "../../../styles/container.module.css";
import Image from "next/image";
export default function Footer_en() {
  const [work, setWork] = useState(false);
  const [language, setLanguage] = useState(false);
  const handleToggle = (e) => {
    if (e.target.id === "language") {
      setLanguage(true);
      setWork(false);
      return;
    } else if (e.target.id === "work") {
      setLanguage(false);
      setWork(true);
      return;
    } else {
      setLanguage(false);
      setWork(false);
      return;
    }
  };
  // onClick = {()=>{console.log(":zxc")}}
  return (
    <div
      className={`${s.footer} ${container.container__stretch}`}
      onClick={handleToggle}
    >
      <ul className={s.footer__list}>
        <li className={`${s.footer__item} ${s.footer__about}`}>
          <p>About us</p>
        </li>
        <li className={`${s.footer__item} ${s.footer__contacts}`}>
          <p>Contacts</p>
        </li>
        <li className={`${s.footer__item} ${s.footer__language}`}>
          <p id="language" onClick={handleToggle} onMouseEnter={handleToggle}>
            Language
          </p>
          {language && (
            <ul id="language" className={s.footer__modal__list}>
              <li id="language">
                <Link id="language" href="/en">
                  English
                </Link>
              </li>
              <li id="language">
                <Link id="language" href="/ua">
                  Українська
                </Link>
              </li>
              <li id="language">
                <Link id="language" href="/ru">
                  {" "}
                  Росийская
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`${s.footer__item} ${s.footer__works}`} id="work">
          <p id="work" onClick={handleToggle} onMouseEnter={handleToggle}>
            works
          </p>
          {work && (
            <ul
              className={`${s.footer__modal__list} ${s.footer__modal__list__work}`}
              id="work"
            >
              <li id="work">All works</li>
              <li id="work">Commercials</li>
              <li id="work">Music video</li>
              <li id="work">Features</li>
            </ul>
          )}
        </li>
      </ul>

      <div className={s.footer__image}>
        <Image
          className={s.footer__image}
          src={image}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
