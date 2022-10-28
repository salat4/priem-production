import MobileMenu from "../../../images/burger-menu.svg";
import LogoHeader from "../../../images/LogoFix-removebg-preview.png";
import s from "./HeaderUa.module.css";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { MobileMenuUa } from "../../mobileMenu";
import Backdrop from "../../../General/Backdrop";
import Link from "next/link";
import scrollToSection from "../../../General/scrollToSection";

export default function HeaderEn() {
  const [show, setShow] = useState("one");
  const [animLogo, setAnimLogo] = useState(false);

  const visibleLogo = useCallback(() => {
    let target = document.getElementById("contacts");

    if (!target) {
      return;
    }

    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      windowPosition = {
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      };

    if (targetPosition.top < windowPosition.bottom) {
      setAnimLogo(true);
    } else {
      setAnimLogo(false);
    }
  }, []);

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", visibleLogo);
    }
    return () => {
      window.removeEventListener("scroll", visibleLogo);
    };
  }, [visibleLogo]);

  const toggleShowMenu = (e) => {
    const { id } = e.currentTarget;
    if (e.key === "Escape" || id === "close") {
      setShow("close");
    }
  };

  return (
    <>
      {show === "show" && <Backdrop toggleShowMenu={toggleShowMenu} />}
      <section className={s.headerSection}>
        <div className="containerStretch">
          <div className={s.headerContainer}>
            <button
              className={s.burgetMenuButton}
              onClick={() => setShow("show")}
            >
              <Image src={MobileMenu} alt="Menu" />
            </button>
            <button className={animLogo ? s.animationLogo : s.logoContainer}>
              <Link href="/en">
                <Image
                  src={LogoHeader}
                  alt="Logo in header"
                  width="70"
                  height="70"
                />
              </Link>
            </button>
            <ul className={s.navigationMenuList}>
              <li>
                <Link href="/en/works">Проєкти</Link>
              </li>
              <li>
                <button id="aboutButton" onClick={scrollToSection}>
                  Про нас
                </button>
              </li>
              <li>
                <button id="contactsButton" onClick={scrollToSection}>
                  Контакти
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MobileMenuUa toggleShowMenu={toggleShowMenu} show={show} />
    </>
  );
}
