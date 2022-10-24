import MobileMenu from "../../../images/burger-menu.svg";
import LogoHeader from "../../../images/Logo.png";
import s from "./HeaderEn.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import MobileMenuEn from "../../mobileMenu/mobileMenu_en/MobileMenuEN";
import Backdrop from "../../../General/Backdrop";
import Link from "next/link";
import scrollToSection from "../../../General/scrollToSection";

export default function HeaderEn() {
  const [show, setShow] = useState("one");
  const [animLogo, setAnimLogo] = useState(0);

  const visibleLogo = () => {
    let posTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    if (posTop > 2580) {
      setAnimLogo(posTop);
    } else {
      setAnimLogo(0);
    }
  };

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", visibleLogo);
    }
    return () => {
      window.removeEventListener("scroll", visibleLogo);
    };
  }, []);

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
                  width="140"
                  height="140"
                />
              </Link>
            </button>
            <ul className={s.navigationMenuList}>
              <li>
                <Link href="/en/works">Works</Link>
              </li>
              <li>
                <button id="aboutButton" onClick={scrollToSection}>
                  About
                </button>
              </li>
              <li>
                <button id="contactsButton" onClick={scrollToSection}>
                  Contacts
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MobileMenuEn toggleShowMenu={toggleShowMenu} show={show} />
    </>
  );
}
