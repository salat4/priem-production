import React, { useState } from "react";
import s from "./footer.module.css";
import image from "@/images/background/Logo.png";
import Image from "next/image";
import facebook from "@/images/icons/facebook.png";
import instagram from "@/images/icons/instagram.png";
import youtube from "@/images/icons/youtube.png";
import {
  Button,
  scrollToSection,
  FormSubscribe,
  toggleBackdrop,
} from "@/generalFunc";
import { useTranslation } from "react-i18next";
import Link from "next/link";

function Footer() {
  const [showForm, setShowForm] = useState(false);

  const { t } = useTranslation("translation");

  const toggleShowBackdrop = (e) => {
    const DoClose = toggleBackdrop(e);
    if (`${DoClose}` === "false") {
      setShowForm(toggleBackdrop(e));
    }
  };

  return (
    <div className={`${s.background}`}>
      <div className="container">
        <div className={s.footer__top}>
          <ul className={s.footer__list}>
            <li className={s.footer__list__left}>
              <div>
                <Image
                  className={s.footer__image}
                  src={image}
                  fill
                  alt="Logo footer"
                />
              </div>

              <Button
                style={s.footer__button}
                showForm={() => setShowForm(true)}
              >
                <p>{t("buttonLeave")}</p>
              </Button>
            </li>
            <li className={s.footer__list__center}>
              <ul className={s.footer__nav__list}>
                <li className={s.footer__nav__list__item}>
                  <Link href="/" passHref>
                    {"Home"}
                  </Link>
                </li>
                <li className={s.footer__nav__list__item}>
                  <button id="toAbout" onClick={scrollToSection}>
                    {"About us"}
                  </button>
                </li>
                <li className={s.footer__nav__list__item}>
                  <button id="toTeam" onClick={scrollToSection}>
                    {"Team"}
                  </button>
                </li>
                <li className={s.footer__nav__list__item}>
                  <Link href="/courses" prefetch={false} passHref>
                    {"For actors"}
                  </Link>
                </li>
                <li className={s.footer__nav__list__item}>
                  <Link href="/works" prefetch={false} passHref>
                    {"Our works"}
                  </Link>
                </li>
              </ul>
            </li>
            <li className={s.footer__list__right}>
              <ul>
                <li className={s.footer__list__item}>
                  <p>{t("homePage.section.contacts.title")}</p>
                </li>
                <li className={s.footer__list__item}>
                  <p className={s.footer__list__mail}>
                    <a
                      target="_blank"
                      href="mailto:priem.mih.production@gmail.com"
                      rel="noreferrer"
                    >
                      priem.mih.production@gmail.com
                    </a>
                  </p>
                </li>
                <li className={s.footer__list__item}>
                  <p className={s.footer__list__tel}>
                    <a href="tel:+38 063 531 22 15" rel="noreferrer">
                      +38 063 531 22 15
                    </a>
                  </p>
                </li>
                <li className={s.footer__list__item}>
                  <div>
                    <ul className={s.footer__list__link}>
                      {/* <li className={s.footer__list__link__item}>
                        <Image
                          className={s.footer__image}
                          src={facebook}
                          width={25}
                          height={25}
                          alt="Logo footer"
                        ></Image>
                      </li> */}
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
                    <Button
                      style={s.footer__button}
                      showForm={() => setShowForm(true)}
                    >
                      <p>{t("buttonLeave")}</p>
                    </Button>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={s.footer__bottom}>
          <p>PRIЁMproduction © 2023 Все права защищены</p>
        </div>
      </div>
      {showForm && <FormSubscribe toggleShowBackdrop={toggleShowBackdrop} />}
    </div>
  );
}
export default Footer;
