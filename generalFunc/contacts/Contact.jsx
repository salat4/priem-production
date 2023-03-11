import Image from "next/image";
import { useEffect, useState } from "react";
import Phone from "@/images/icons/Telephone.svg";
import Insta from "@/images/icons/instagram.svg";
import EmailTwo from "@/images/icons/Email-hover.svg";
import arrow from "@/images/icons/arrowUp.png";
import isSectionOutOfView from "../viewSection";
import s from "./contact.module.css";
import { throttle } from "throttle-debounce";

import {
  INSTAGRAM,
  EMAIL_PRODUCTION,
  TEL_IRA,
} from "../../constants/сonstants";
import { useTranslation } from "react-i18next";

export default function Contacts() {
  const { i18n } = useTranslation("translation");
  const [showButtonUp, setShowButtonUp] = useState(false);

  useEffect(() => {
    const homeSection = document.getElementById("home");
    const userAgent = navigator.userAgent;
    const mobileRegex = /.*Mobile.*/i;
    if (mobileRegex.test(userAgent) && homeSection) {
      window.addEventListener(
        "touchmove",
        throttle(1000, () =>
          isSectionOutOfView({ homeSection, setShowButtonUp })
        )
      );
      return;
    }
    if (homeSection) {
      window.addEventListener(
        "scroll",
        throttle(1000, () =>
          isSectionOutOfView({ homeSection, setShowButtonUp })
        )
      );
    }
  }, []);

  const changeLanguage = (e) => {
    const { textContent } = e.target;
    i18n.changeLanguage(textContent);
  };

  return (
    <>
      <ul className={showButtonUp ? s.socialListAnim : s.socialList}>
        <li className={s.socialItem}>
          <a href={`tel:${TEL_IRA}`}>
            <Image src={Phone} alt="Phone icon" />
          </a>
        </li>
        <li className={s.socialItem}>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer noopener">
            <Image src={Insta} alt="Instagram icon" />
          </a>
        </li>
        <li className={s.socialItem}>
          <a
            href={`mailto:${EMAIL_PRODUCTION}`}
            target="_blank"
            rel="noreferrer"
          >
            <Image src={EmailTwo} alt="Email icon" />
          </a>
        </li>
        <li className={s.socialItemLang}>
          <button className={s.changeLangButton} onClick={changeLanguage}>
            {i18n.language === "ru" ? "en" : "ru"}
          </button>
        </li>
        <li className={s.socialItem}>
          <button
            onClick={() => window.scrollTo(0, 0)}
            className={s.buttonUpActive}
          >
            <Image src={arrow} alt="Click me and up" />
          </button>
        </li>
      </ul>
    </>
  );
}
