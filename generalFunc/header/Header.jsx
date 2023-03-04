import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import {
  MobileMenu,
  Backdrop,
  scrollToSection,
  toggleBackdrop,
} from "@/generalFunc";
import LogoHeader from "@/images/background/Logo.png";
import MobileBurgerMenu from "@/images/icons/burger-menu.png";
import s from "./Header.module.css";

export default function Header() {
  const [show, setShow] = useState("one");
  const { t } = useTranslation("translation");

  const toggleShowBackdrop = (e) => {
    if (typeof toggleBackdrop(e) === "undefined") {
      return;
    }
    setShow(toggleBackdrop(e));
  };

  return (
    <>
      <header className={s.headerSection}>
        <div className="container">
          <div className={s.headerContainer}>
            <button className={s.logoContainer}>
              <Link href="/" passHref>
                <a>
                  <Image src={LogoHeader} alt="Logo in header" priority />
                </a>
              </Link>
            </button>
            <button
              className={s.burgetMenuButton}
              onClick={() => setShow("show")}
            >
              <Image src={MobileBurgerMenu} alt="Menu" />
            </button>
            <ul className={s.navigationMenuList}>
              <li>
                <Link href="/" prefetch={false} passHref>
                  {t("navigation.home")}
                </Link>
              </li>
              <li>
                <button id="toAbout" onClick={scrollToSection}>
                  {t("navigation.about")}
                </button>
              </li>
              <li>
                <button id="toTeam" onClick={scrollToSection}>
                  {t("navigation.team")}
                </button>
              </li>
              <li>
                <Link href="/courses" prefetch={false} passHref>
                  {t("navigation.actors")}
                </Link>
              </li>
              <li>
                <Link href="/works" prefetch={false} passHref>
                  {t("navigation.works")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {show === "show" && (
        <Backdrop toggleShowBackdrop={toggleShowBackdrop}>
          <MobileMenu toggleShowBackdrop={toggleShowBackdrop} show={show} />
        </Backdrop>
      )}
    </>
  );
}
