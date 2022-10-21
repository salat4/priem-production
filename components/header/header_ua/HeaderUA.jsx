import MobileMenu from "../../../images/burger-menu.svg";
import LogoHeader from "../../../images/Logo.png";
import s from "./HeaderUa.module.css";
import { useState } from "react";
import Image from "next/image";
import MobileMenuUa from "../../mobileMenu/mobileMenu_ua/MobileMenuUA";
import Backdrop from "../../../General/Backdrop";
import Link from "next/link";

export default function HeaderEn() {
  const [show, setFirst] = useState("one");

  const toggleShowMenu = (e) => {
    const { id } = e.currentTarget;
    if (e.key === "Escape" || id === "close") {
      setFirst("close");
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
              onClick={() => setFirst("show")}
            >
              <Image src={MobileMenu} alt="Menu" />
            </button>
            <button className={s.logoContainer}>
              <Link href="/ua">
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
                <Link href="/ua/works">Роботи</Link>
              </li>
              <li>
                <a>Про нас</a>
              </li>
              <li>
                <a>Контакти</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <MobileMenuUa toggleShowMenu={toggleShowMenu} show={show} />
    </>
  );
}
