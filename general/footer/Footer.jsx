import React from "react";
import s from "./footer.module.css";
import image from "@/images/background/Logo.png";
import Image from "next/image";
// import facebook from "../../../images/facebook.png"
import facebook from "@/images/icons/facebook.png";
import instagram from "@/images/icons/instagram.png";
import youtube from "@/images/icons/youtube.png";
// import container from "../../../styles/globals.css"
import { Button } from "@/general";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation("translation");
  return (
    <div className={`${s.background}`}>
      <div className="container">
        <div className={s.footer__top}>
          <ul className={s.footer__list}>
            <li className={s.footer__list__item}>
              <Image
                className={s.footer__image}
                src={image}
                width={80}
                height={89}
                alt="Logo footer"
              />

              <Button text={"Оставить заяку"}></Button>
            </li>
            <li className={s.footer__list__item}>
              <ul className={s.footer__nav__list}>
                <li className={s.footer__nav__list__item}>
                  <p>{t("navigation.home")}</p>
                </li>
                <li className={s.footer__nav__list__item}>
                  <p>{t("navigation.about")}</p>
                </li>
                <li className={s.footer__nav__list__item}>
                  <p>{t("navigation.team")}</p>
                </li>
                <li className={s.footer__nav__list__item}>
                  <p>{t("navigation.actors")}</p>
                </li>
                <li className={s.footer__nav__list__item}>
                  {t("navigation.works")}
                </li>
              </ul>
            </li>
            <li className={s.footer__list__item}>
              <p className={s.footer__list_contacts}>
                {t("homePage.section.footer.contacts")}
              </p>
              <p className={s.footer__list__mail}>
                <a
                  target="_blank"
                  href="mailto:priem.mih.production@gmail.com"
                  rel="noreferrer"
                >
                  priem.mih.production@gmail.com
                </a>
              </p>
              <p className={s.footer__list__tel}>
                <a
                  target="_blank"
                  href="tel:+38 063 531 22 15"
                  rel="noreferrer"
                >
                  +38 063 531 22 15
                </a>
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
          <p>PRIЁMproduction © 2023 Все права защищены</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
