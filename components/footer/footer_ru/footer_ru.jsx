import Link from "next/link";
import React, { useState } from "react";
import scrollToSection from "../../../General/scrollToSection";
import s from "../footer.module.css";
// import image from "../../../images/Logo.png";
import image from "../../../images/LogoFix-removebg-preview.png";
import container from "../../../styles/container.module.css";
import Image from "next/image";
export default function Footer_en() {
  const [work, setWork] = useState(false);
  const [language, setLanguage] = useState(false);
  const handleToggle = (e) => {
    if (e.target.id.trim() === "language") {
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
      onMouseMove={handleToggle}
      className={`${s.footer} ${container.container__stretch}`}
      // onClick={handleToggle}
    >
      <ul className={s.footer__list}>
        <li className={`${s.footer__item} ${s.footer__about}`}>
          <p id="aboutButton" onClick={scrollToSection}>
            Про нас
          </p>
        </li>
        <li className={`${s.footer__item} ${s.footer__contacts}`}>
          <p id="contactsButton" onClick={scrollToSection}>
            Контакты
          </p>
        </li>
        <li
          id="language"
          // onMouseEnter={handleToggle}
          className={`${s.footer__item} ${s.footer__language}`}
        >
          <p id="language" onClick={handleToggle}>
            Язык
          </p>
          {language && (
            <ul
              id="language"
              className={`${s.footer__modal__list} ${s.footer__modal__list__language}`}
            >
              <li id="language">
                <Link href="/en">
                  <a id="language">Английский</a>
                </Link>
              </li>
              <li id="language">
                <Link href="/ua">
                  <a id="language">Украинский</a>
                </Link>
              </li>
              <li id="language">
                <Link href="/ru">
                  <a id="language">Русский</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li
          // onMouseEnter={handleToggle}
          className={`${s.footer__item} ${s.footer__works}`}
          id="work"
        >
          <p id="work" onClick={handleToggle}>
            Работы
          </p>
          {work && (
            <ul
              className={`${s.footer__modal__list} ${s.footer__modal__list__work}`}
              id="work"
            >
              <li id="work">Все работы</li>
              <li id="work">Коммерческие</li>
              <li id="work">Музыкальные видео</li>
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
          alt="Logo footer"
        />
      </div>
    </div>
  );
}
