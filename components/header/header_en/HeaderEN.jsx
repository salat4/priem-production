import MobileMenu from "../../../images/burger-menu.svg";
// import LogoHeader from "../../../images/Logo.png";
import LogoHeader from "../../../images/Logo.png";
import s from "./HeaderEn.module.css";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import MobileMenuEn from "../../mobileMenu/mobileMenu_en/MobileMenuEN";
import Backdrop from "../../../General/Backdrop";
import Link from "next/link";
// import scrollToSection from "../../../General/scrollToSection";
import toggleBackdrop from "../../../General/toggleBackdrop";
import { throttle } from "throttle-debounce";
import { useRouter } from "next/router";

export default function HeaderEn() {
  const [show, setShow] = useState("one");
  const [animLogo, setAnimLogo] = useState(false);

  const { pathname } = useRouter();
  const location = pathname.slice(0, 3);

  // const visibleLogo = useCallback(() => {
  //   let target = document.getElementById("contacts");

  //   if (!target) {
  //     return;
  //   }

  //   var targetPosition = {
  //       top: window.pageYOffset + target.getBoundingClientRect().bottom,
  //     },
  //     windowPosition = {
  //       bottom: window.pageYOffset + document.documentElement.clientHeight,
  //     };

  //   if (targetPosition.top < windowPosition.bottom) {
  //     setAnimLogo(true);
  //   } else {
  //     setAnimLogo(false);
  //   }
  // }, []);

  // const resizeWindow = () => {
  //   if (window.innerWidth > 1280) setShow(false);
  // };

  // useEffect(() => {
  //   if (window) {
  //     // window.addEventListener("scroll", visibleLogo);
  //     window.addEventListener("resize", throttle(1000, resizeWindow));
  //   }
  //   // return () => {
  //   //   window.removeEventListener("scroll", visibleLogo);
  //   // };
  // }, []);

  // const toggleShowBackdrop = (e) => {
  //   if (typeof toggleBackdrop(e) === "undefined") {
  //     return;
  //   }
  //   setShow(toggleBackdrop(e));
  // };

  return (
    <>
      <header className={s.headerSection}>
        <div className="container">
          <div className={s.headerContainer}>
            <button
              className={s.burgetMenuButton}
              onClick={() => setShow("show")}
            >
              <Image src={MobileMenu} alt="Menu" />
            </button>
            <button className={animLogo ? s.animationLogo : s.logoContainer}>
              <Link href="/en" passHref>
                <a>
                  <Image src={LogoHeader} alt="Logo in header" priority />
                </a>
              </Link>
            </button>
            <ul className={s.navigationMenuList}>
              <li>
                <Link href="/en" prefetch={false} passHref>
                  HOME
                </Link>
              </li>
              <li>
                <Link href={`${location}/works`} prefetch={false} passHref>
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link href={`${location}/courses`} prefetch={false} passHref>
                  TEAM
                </Link>
              </li>
              <li>
                <Link href={`${location}/courses`} prefetch={false} passHref>
                  FOR ACTORS
                </Link>
              </li>
              <li>
                <Link href={`${location}/courses`} prefetch={false} passHref>
                  OUR WORKS
                </Link>
              </li>
              {/* <li>
                <button id="contactsButton" onClick={scrollToSection}>
                  Contacts
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </header>
      {/* {show === "show" && (
        <Backdrop toggleShowBackdrop={toggleShowBackdrop}>
          <MobileMenuEn toggleShowBackdrop={toggleShowBackdrop} show={show} />
        </Backdrop>
      )} */}
    </>
  );
}
