import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
  MobileMenu,
  Backdrop,
  scrollToSection,
  toggleBackdrop,
} from "@/generalFunc";
import LogoHeader from "@/images/background/Logo.png";
import MobileBurgerMenu from "@/images/background/Logo5.png";
import s from "./Header.module.css";

export default function Header() {
  const [show, setShow] = useState("one");
  const { t } = useTranslation("translation");

  useEffect(() => {
    if (window.innerWidth < 800) {
      window.addEventListener("resize", qwe);
    }
  }, []);

  const qwe = () => {
    if (window.innerWidth > 800) {
      setShow("close");
      return;
    }
  };

  const toggleShowBackdrop = (e) => {
    if (typeof toggleBackdrop(e) === "undefined") {
      return;
    }
    setShow(toggleBackdrop(e));
  };
  // change size
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
              <Image src={MobileBurgerMenu} width="40" height="30" alt="Menu" />
            </button>
            <ul className={s.navigationMenuList}>
              <li>
                <Link href="/" prefetch={false} passHref>
                  {"Home"}
                </Link>
              </li>
              <li>
                <button id="toAbout" onClick={scrollToSection}>
                  {"About us"}
                </button>
              </li>
              <li>
                <button id="toTeam" onClick={scrollToSection}>
                  {"Team"}
                </button>
              </li>
              <li>
                <Link href="/courses" prefetch={false} passHref>
                  {"For actors"}
                </Link>
              </li>
              <li>
                <Link href="/works" prefetch={false} passHref>
                  {"Our works"}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {show === "show" && (
        <Backdrop toggleShowBackdrop={toggleShowBackdrop}>
          <MobileMenu
            toggleShowBackdrop={toggleShowBackdrop}
            show={show}
            qwe={qwe}
          />
        </Backdrop>
      )}
    </>
  );
}
